using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public class MockMeterReadRepo : IMeterReadRepo
    {
        public void CreateMeterRead(MeterRead meterRead)
        {
            throw new NotImplementedException();
        }

        public void CreateMeterReads(List<MeterRead> meterReads)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<MeterRead> GetAllMeterReads()
        {
            throw new NotImplementedException();
        }

        public List<MeterRead> GetLatestMeterReads()
        {
            throw new NotImplementedException();
        }

        public List<MeterRead> GetLatestMeterReads(List<int> accountIDs)
        {
            throw new NotImplementedException();
        }


        public MeterRead GetMeterReadByAccountID(int accountID)
        {
            throw new NotImplementedException();
        }

        public void MeterReadUploads(IEnumerable<MeterRead> meterReads)
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}
