using EnsekMeterReadingAPI.Models;
using EnsekMeterReadingAPI.Controllers;
using EnsekMeterReadingAPI.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RestSharp;
using Microsoft.AspNetCore.Http;
using System.IO;
using EnsekMeterReadingAPI.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System.Collections.Generic;
using System;

namespace EnsekMeterReadingAPITests
{
    [TestClass]
    public class MeterReadingUploadsUnitTest
    {
        Mock<IMeterReadRepo> _meterReadRepo;
        Mock<ICustomerRepo> _customerRepo;
        IMeterReadService _meterReadService;
        Mock<DatabaseContext> _dbContext;
        IMapper _mapper;

        //[TestMethod]
        //public void MeterReadingUploadsTest()
        //{
        //    //Arrange
        //    //var client = new RestClient("http://localhost:38601/");
        //    //var request = new RestRequest($"api/meter-reading-uploads", RestSharp.Method.Post);
        //    //request.AddFile("meterReads", "C:/Users/Callum/source/repos/EnsekMeterReadingAPITests/TestData/Meter_Reading.csv");
        //    //request.AlwaysMultipartFormData = true;
        //    //request.AddHeader("Content-Type", "multipart/form-data");
        //    MeterReadUploadStatus meterReadUploadStatus = new MeterReadUploadStatus();
        //    meterReadUploadStatus.successfulTransactions = 32;
        //    meterReadUploadStatus.failedTransactions = 3;

        //    _dbContext = new Mock<DatabaseContext>();
        //    _customerRepo = new Mock<ICustomerRepo>();
        //    _meterReadRepo = new Mock<IMeterReadRepo>();
        //    _meterReadService = new MeterReadService(_meterReadRepo.Object, _customerRepo.Object);

        //    //var physicalFile = new FileInfo("filePath");
        //    //var ms = new MemoryStream();
        //    //var writer = new StreamWriter(ms);
        //    //writer.Write(physicalFile.OpenRead());
        //    //writer.Flush();
        //    //ms.Position = 0;
        //    //var fileName = physicalFile.Name;

        //    FormFile file;
        //    string path = "C:/Users/Callum/source/repos/EnsekMeterReadingAPITests/TestData/Meter_Reading.csv";
        //    using (var stream = System.IO.File.OpenRead(path))
        //    {
        //        //ACT
        //        file = new FormFile(stream, 0, stream.Length, null, "meterReads");
        //        var controller = new MeterReadsController(_meterReadRepo, _mapper, _meterReadService);
        //        var result = controller.MeterReadingUploads((IFormFile)file);

        //        //Assert
        //        Assert.AreEqual(meterReadUploadStatus, result.Result);
        //    };
        //}

        [TestMethod]
        public void ExtractDataFromCSVTest()
        {
            _dbContext = new Mock<DatabaseContext>();
            _customerRepo = new Mock<ICustomerRepo>();
            _meterReadRepo = new Mock<IMeterReadRepo>();
            _meterReadService = new MeterReadService(_meterReadRepo.Object, _customerRepo.Object);

            List<MeterRead> meterReads = new List<MeterRead>();
            meterReads.Add(new MeterRead { AccountID = 2344, MeterReadingDateTime = DateTime.ParseExact("4/22/19 9:24", "M/d/yy H:mm", System.Globalization.CultureInfo.InvariantCulture), MeterReadValue = "1002" });
            meterReads.Add(new MeterRead { AccountID = 2344, MeterReadingDateTime = DateTime.ParseExact("5/8/19 9:24", "M/d/yy H:mm", System.Globalization.CultureInfo.InvariantCulture), MeterReadValue = "0X765" });

            FormFile file;
            string path = "C:/Users/Callum/source/repos/EnsekMeterReadingAPITests/TestData/Meter_Reading_Test.csv";
            using (var stream = System.IO.File.OpenRead(path))
            {

                //ACT
                file = new FormFile(stream, 0, stream.Length, null, "meterReads");
                //var controller = new MeterReadsController(_meterReadRepo, _mapper, _meterReadService);
                var result = _meterReadService.ExtractMeterReadsFromCSV((IFormFile)file);
                //var result = controller.MeterReadingUploads((IFormFile)file);

                //Assert
                Assert.AreEqual(meterReads.Count, result.Count);
            };
        }

        [TestMethod]
        public void ValidateMeterReadsTest()
        {
            _dbContext = new Mock<DatabaseContext>();
            _customerRepo = new Mock<ICustomerRepo>();
            _meterReadRepo = new Mock<IMeterReadRepo>();
            _meterReadService = new MeterReadService(_meterReadRepo.Object, _customerRepo.Object);

            List<MeterRead> meterReads = new List<MeterRead>();
            meterReads.Add(new MeterRead { AccountID = 2344, MeterReadingDateTime = DateTime.ParseExact("4/22/19 9:24", "M/d/yy H:mm", System.Globalization.CultureInfo.InvariantCulture), MeterReadValue = "1002" });
            meterReads.Add(new MeterRead { AccountID = 2344, MeterReadingDateTime = DateTime.ParseExact("5/8/19 9:24", "M/d/yy H:mm", System.Globalization.CultureInfo.InvariantCulture), MeterReadValue = "0X765" });

            MeterReadUploadStatus meterReadUploadStatus = new MeterReadUploadStatus();
            meterReadUploadStatus.successfulTransactions = 0;
            meterReadUploadStatus.failedTransactions = 2;

            var result = _meterReadService.ValidateAndSaveMeterReads(meterReads);

            Assert.AreEqual(meterReadUploadStatus.successfulTransactions, result.successfulTransactions);
            Assert.AreEqual(meterReadUploadStatus.failedTransactions, result.failedTransactions);

        }
    }
}
