using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public interface IMeterReadRepo
    {
        bool SaveChanges();

        IEnumerable<MeterRead> GetAllMeterReads();
        MeterRead GetMeterReadByAccountID(int accountID);
        void CreateMeterRead(MeterRead meterRead);
        void CreateMeterReads(List<MeterRead> meterReads);
        void MeterReadUploads(IEnumerable<MeterRead> meterReads);
        List<MeterRead> GetLatestMeterReads(List<int> accountIDs);
    }
}
