using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Models
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public int AccountID { get; set; }
        [Required]
        [MaxLength(250)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(250)]
        public string LastName { get; set; }
        [NotMapped]
        public DateTime LastMeterRead { get; set; }
    }
}
