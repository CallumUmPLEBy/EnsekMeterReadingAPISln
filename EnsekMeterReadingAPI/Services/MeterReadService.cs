using EnsekMeterReadingAPI.Data;
using EnsekMeterReadingAPI.Dtos;
using EnsekMeterReadingAPI.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Services
{
    public class MeterReadService : IMeterReadService
    {
        private readonly IMeterReadRepo _meterReadRepository;
        private readonly ICustomerRepo _customerRepository;

        public MeterReadService(IMeterReadRepo meterReadRepository, ICustomerRepo customerRepository)
        {
            _meterReadRepository = meterReadRepository;
            _customerRepository = customerRepository;
        }
        public List<MeterRead> ExtractMeterReadsFromCSV(IFormFile meterReadsCSV)
        {
            List<MeterRead> meterReads = new List<MeterRead>();

            using (var reader = new StreamReader(meterReadsCSV.OpenReadStream()))
            {
                //Extract Data from CSV
                string[] headers = reader.ReadLine().Split(',');
                while (!reader.EndOfStream)
                {
                    MeterRead meterRead = new MeterRead();

                    //Read Data from the CSV
                    string[] rows = reader.ReadLine().Split(',');
                    int accountId = int.Parse(rows[0].ToString());
                    DateTime meterReadingDateTime = DateTime.ParseExact(rows[1], "M/d/yy H:mm", System.Globalization.CultureInfo.InvariantCulture);
                    string meterReadValue = rows[2].ToString();

                    //Populate DTO with data from csv
                    meterRead.AccountID = accountId;
                    meterRead.MeterReadingDateTime = meterReadingDateTime;
                    meterRead.MeterReadValue = meterReadValue;

                    //Map DTO back to internal Model
                    //MeterRead meterRead = _mapper.Map<MeterRead>(meterReadDto);

                    bool exists = meterReads.Any(p => p == meterRead);
                    if (!exists)
                    {
                        meterReads.Add(meterRead);
                    }
                }
                return meterReads;
            }
        }

        private void SaveValidMeterReads(List<MeterRead> meterReads)
        {
            //insert meter read into database
            _meterReadRepository.CreateMeterReads(meterReads);
            _meterReadRepository.SaveChanges();
        }

        public MeterReadUploadStatus ValidateAndSaveMeterReads(List<MeterRead> meterReads)
        {
            MeterReadUploadStatus meterReadUploadStatus = new MeterReadUploadStatus();
            List<MeterRead> invalidMeterReads = new List<MeterRead>();
            List<MeterRead> latestCustomerMeterReads = new List<MeterRead>();
            MeterRead latestCustomerMeterRead = new MeterRead();
            IEnumerable<int> accountIDs;

            if (meterReads != null && meterReads.Count > 0)
            {
                //Get data from database outside of the foreach loop to reduce the amount of traffic hitting the database.
                accountIDs = _customerRepository.GetAllAccountIDs();
                latestCustomerMeterReads = _meterReadRepository.GetLatestMeterReads(accountIDs.ToList());

                //Validate Meter Read Objects
                foreach (var meterRead in meterReads)
                {
                    //Check if customer has an account already
                    if (accountIDs.Contains(meterRead.AccountID) && latestCustomerMeterReads != null)
                    {
                        latestCustomerMeterRead = latestCustomerMeterReads.Where(p => p.AccountID == meterRead.AccountID).FirstOrDefault();
                        if (latestCustomerMeterRead != null && latestCustomerMeterRead.MeterReadingDateTime >= meterRead.MeterReadingDateTime )
                        {
                            invalidMeterReads.Add(meterRead);
                        }
                    }

                    bool isMeterReadParsed = int.TryParse(meterRead.MeterReadValue, out int intMeterReadValue);
                    if (isMeterReadParsed)
                    {
                        //Format the meter read value into NNNNN
                        var validMeterReadValue = intMeterReadValue.ToString("D5");
                        meterRead.MeterReadValue = validMeterReadValue;
                    }
                    else
                    {
                        invalidMeterReads.Add(meterRead);
                    }
                }

                invalidMeterReads.AddRange(meterReads.Where(p => !accountIDs.Contains(p.AccountID)).ToList());
                meterReads = meterReads.Where(p => !invalidMeterReads.Contains(p)).ToList();

                meterReadUploadStatus.successfulTransactions = meterReads.Distinct().Count();
                meterReadUploadStatus.failedTransactions = invalidMeterReads.Distinct().Count();

                SaveValidMeterReads(meterReads);

                return meterReadUploadStatus;
            }
            return null;
        }
    }
}
