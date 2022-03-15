using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Models
{
    public class MeterReadUploadStatus
    {
        public int successfulTransactions { get; set; }
        public int failedTransactions { get; set; }
    }
}
