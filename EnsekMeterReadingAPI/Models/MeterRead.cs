using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Models
{
    public class MeterRead
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [Column(Order = 1)]
        public int AccountID { get; set; }

        [Required]
        public DateTime MeterReadingDateTime { get; set; }

        [MaxLength(50)]
        public string MeterReadValue { get; set; }
    }
}
