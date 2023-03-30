using AutoMapper;
using CsvHelper;
using EnsekMeterReadingAPI.Data;
using EnsekMeterReadingAPI.Dtos;
using EnsekMeterReadingAPI.Models;
using EnsekMeterReadingAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Controllers
{
    [ApiController]
    public class MeterReadsController : ControllerBase
    {
        private readonly IMeterReadRepo _meterReadRepository;
        private readonly IMapper _mapper;
        private readonly IMeterReadService _service;

        public MeterReadsController(IMeterReadRepo meterReadRepository, IMapper mapper, IMeterReadService service)
        {
            _meterReadRepository = meterReadRepository;
            _mapper = mapper;
            _service = service;
        }

        [Route("api/[controller]")]
        [HttpGet]
        public ActionResult<IEnumerable<MeterReadDto>> GetMeterReads()
        {
            var meterReadItems = _meterReadRepository.GetAllMeterReads();

            return Ok(_mapper.Map<IEnumerable<MeterReadDto>>(meterReadItems));
        }

        [Route("api/[controller]")]
        [HttpGet("{accountID}")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public ActionResult<MeterReadDto> GetMeterReadByAccountID(int accountID)
        {
            var meterReadItem = _meterReadRepository.GetMeterReadByAccountID(accountID);

            return Ok(_mapper.Map<MeterReadDto>(meterReadItem));
        }

        [Route("api/[controller]")]
        //POST api/meterreads
        [HttpPost]
        public ActionResult<MeterReadDto> CreateMeterRead(MeterReadCreateDto meterReadCreateDto)
        {
            var meterReadModel = _mapper.Map<MeterRead>(meterReadCreateDto);
            _meterReadRepository.CreateMeterRead(meterReadModel);
            _meterReadRepository.SaveChanges();

            return Ok(meterReadModel);
        }

        //POST api/meter-reading-uploads
        [HttpPost]
        [Route("api/meter-reading-uploads")]
        public ActionResult<MeterReadUploadStatus> MeterReadingUploads([FromForm(Name = "meterReads")] IFormFile meterReadsCSV)
        {
            try
            {
                var meterReads = _service.ExtractMeterReadsFromCSV(meterReadsCSV);

                if (meterReads == null)
                    return BadRequest("Invalid file format. Please upload a CSV file.");

                var uploadResult = _service.ValidateAndSaveMeterReads(meterReads);

                if (uploadResult == null)
                    return BadRequest();

                return Ok(_mapper.Map<MeterReadUploadStatusDto>(uploadResult));
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
