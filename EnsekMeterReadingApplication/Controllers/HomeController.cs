using EnsekMeterReadingApplication.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EnsekMeterReadingApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public ActionResult UploadFile(IFormFile file)
        {
            try
            {
                var client = new RestClient("http://localhost:38601/");
                var request = new RestRequest($"api/meter-reading-uploads", RestSharp.Method.Post);
                byte[] fileBytes;
                string s;

                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    fileBytes = ms.ToArray();
                    s = Convert.ToBase64String(fileBytes);
                }
                request.AddFile("meterReads", fileBytes, file.FileName);
                request.AlwaysMultipartFormData = true;
                request.AddHeader("Content-Type", "multipart/form-data");

                var restResponse = client.ExecuteAsync(request);
                ViewBag.Message = "File Uploaded Succesfully";
            }
            catch(Exception ex)
            {
                ViewBag.Message = "File upload Failed!";
            }
            return View("Home");

        }
    }
}
