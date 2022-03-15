using EnsekMeterReadingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> opt) : base(opt)
        {

        }

        public DbSet<MeterRead> MeterReads { get; set; }
        public DbSet<Customer> Customers { get; set; }

    }
}
