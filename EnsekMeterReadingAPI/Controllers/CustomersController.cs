using AutoMapper;
using EnsekMeterReadingAPI.Data;
using EnsekMeterReadingAPI.Dtos;
using EnsekMeterReadingAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EnsekMeterReadingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepo _repository;
        private readonly IMapper _mapper;

        public CustomersController(ICustomerRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //GET api/customers
        [HttpGet]
        public ActionResult<IEnumerable<CustomerReadDto>> GetAllCustomers()
        {
            var customerItems = _repository.GetAllCustomers();

            return Ok(_mapper.Map<IEnumerable<CustomerReadDto>>(customerItems));
        }

        //GET api/customers/{accountID}
        [HttpGet("{accountID}")]
        public ActionResult<CustomerReadDto> GetCustomerByAccountID(int accountID)
        {
            var customerItem = _repository.GetCustomerByID(accountID);

            if(customerItem != null)
            {
                return Ok(_mapper.Map<CustomerReadDto>(customerItem));
            }

            return NotFound();

        }
    }
}
