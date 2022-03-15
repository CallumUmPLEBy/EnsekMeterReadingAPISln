using EnsekMeterReadingAPI.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Services
{
    public interface IMeterReadService
    {
        public List<MeterRead> ExtractMeterReadsFromCSV(IFormFile csvFile);
        public MeterReadUploadStatus ValidateAndSaveMeterReads(List<MeterRead> meterReads);
    }
}
