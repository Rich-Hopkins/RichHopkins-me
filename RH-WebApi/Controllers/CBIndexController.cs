using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;
using RH_WebApi.Models;
using ExcelDataReader;

namespace RH_WebApi.Controllers
{
  public class CBIndexController : ApiController
  {
    [HttpGet]
    public object GetRecipes()
    {
      var path = HttpRuntime.AppDomainAppPath + "App_Data/cbindex.xlsx";
      try
      {

        using (var stream = File.Open(path, FileMode.Open, FileAccess.Read))
        {
          using (var reader = ExcelReaderFactory.CreateReader(stream))
          {
            var result = reader.AsDataSet();
            return result;
          }
        }

      }
      catch (Exception)
      {

        throw;
      }
      
    }

    [HttpPost]
    public object GetRecipesFromCategory(int categoryId)
    {
      
      return new object();
    }
  }
}
