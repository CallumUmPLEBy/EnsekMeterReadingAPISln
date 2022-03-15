using AutoMapper;
using EnsekMeterReadingAPI.Dtos;
using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Profiles
{
    public class MeterReadProfile : Profile
    {
        public MeterReadProfile()
        {
            //Source --> Target
            CreateMap<MeterRead, MeterReadDto>();
            CreateMap<MeterReadCreateDto, MeterRead>();
        }
    }
}
