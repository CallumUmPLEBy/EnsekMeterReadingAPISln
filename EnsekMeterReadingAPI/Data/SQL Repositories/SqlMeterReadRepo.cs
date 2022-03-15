using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public class SqlMeterReadRepo : IMeterReadRepo
    {
        private readonly DatabaseContext _dbContext;

        public SqlMeterReadRepo(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void CreateMeterRead(MeterRead meterRead)
        {
            if(meterRead == null)
            {
                throw new ArgumentNullException(nameof(meterRead));
            }

            _dbContext.MeterReads.Add(meterRead);
        }

        public void CreateMeterReads(List<MeterRead> meterReads)
        {
            foreach (var meterRead in meterReads)
            {
                _dbContext.MeterReads.Add(meterRead);
            }
        }

        public IEnumerable<MeterRead> GetAllMeterReads()
        {
            return _dbContext.MeterReads.ToList();
        }

        public List<MeterRead> GetLatestMeterReads(List<int> accountIDs)
        {
            var data = from meterRead in _dbContext.MeterReads
                       group meterRead by meterRead.AccountID into grouped
                       select new MeterRead { AccountID = grouped.Key, MeterReadingDateTime = grouped.Max(p => p.MeterReadingDateTime) };

                return data.ToList();
        }

        public MeterRead GetMeterReadByAccountID(int accountID)
        {
            return _dbContext.MeterReads.FirstOrDefault(p => p.AccountID == accountID);
        }

        public void MeterReadUploads(IEnumerable<MeterRead> meterReads)
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }
    }
}
