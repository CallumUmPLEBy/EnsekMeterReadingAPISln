using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public class MockCustomerRepo : ICustomerRepo
    {
        public List<Customer> GetAllCustomers()
        {
            var customers = new List<Customer>
            {
                new Customer { AccountID = 0, FirstName = "Callum", LastName = "Umpleby" },
                new Customer { AccountID = 1, FirstName = "Adam", LastName = "Reed" },
                new Customer { AccountID = 2, FirstName = "Ellie", LastName = "Pedley" }
            };

            return customers;
        }
        public Customer GetCustomerByID(int accountID)
        {
            return new Customer { AccountID = 0, FirstName = "Callum", LastName = "Umpleby" };
        }

        IEnumerable<int> ICustomerRepo.GetAllAccountIDs()
        {
            throw new NotImplementedException();
        }
    }
}

