using EnsekMeterReadingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public class SqlCustomerRepo : ICustomerRepo
    {
        private readonly DatabaseContext _dbContext;

        public SqlCustomerRepo(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<int> GetAllAccountIDs()
        {
            return _dbContext.Customers.Select(p => p.AccountID).Distinct();
        }

        public List<Customer> GetAllCustomers()
        {
            return _dbContext.Customers.ToList();
        }

        public Customer GetCustomerByID(int accountID)
        {
            return _dbContext.Customers.FirstOrDefault(p => p.AccountID == accountID);
        }
    }
}
