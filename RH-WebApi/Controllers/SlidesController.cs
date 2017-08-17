using RH_WebApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace RH_WebApi.Controllers
{
    public class SlidesController : ApiController
    {
	    public IEnumerable<Slide> GetAllSlides()
	    {
		    List<Slide> slides = new List<Slide>();
		    string path = HttpRuntime.AppDomainAppPath + "App_Data/slideInfo.txt";
		    int id = 0;
		    string line;
		    try
		    {
			    using (StreamReader file = new StreamReader(path))
			    {
				    while ((line = file.ReadLine()) != null)
				    {
					    slides.Add(new Slide()
					    {
						    Id = id,
								Image = "app/images/slides/" + line,
								Title = file.ReadLine(),
								Caption = file.ReadLine(),
								Link = file.ReadLine()
					    });
					    id++;
				    }
			    }
		    }
		    catch (Exception)
		    {
			    
		    }
		    return slides;
	    }
    }
}
