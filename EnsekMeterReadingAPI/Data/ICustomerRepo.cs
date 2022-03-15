using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Data
{
    public interface ICustomerRepo
    {
        List<Customer> GetAllCustomers();
        Customer GetCustomerByID(int accountID);
        IEnumerable<int> GetAllAccountIDs();

    }
}
