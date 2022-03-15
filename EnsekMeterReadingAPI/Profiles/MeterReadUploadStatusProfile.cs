using AutoMapper;
using EnsekMeterReadingAPI.Dtos;
using EnsekMeterReadingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingAPI.Profiles
{
    public class MeterReadUploadStatusProfile : Profile
    {
        public MeterReadUploadStatusProfile()
        {
            //Source --> Target
            CreateMap<MeterReadUploadStatus, MeterReadUploadStatusDto>();
        }
    }
}
