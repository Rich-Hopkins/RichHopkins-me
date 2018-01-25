using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RH_WebApi.Controllers
{
  public class SocialController : ApiController
  {
    [HttpGet]
    public HttpResponseMessage Get()//(string page)
    {
      var html = "<html><head>";
      //if (page == "cbindex")
      //{

        html += "<meta property=\"og: title\" content=\"Rich Hopkins -Web Developer\">";
        html += "<meta property=\"og: image\" content=\"http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg\"/>";

      //}

      html += "</head><body></body></html>";

      var response = new HttpResponseMessage();
      response.Content = new StringContent(html);
      return response;
    }
  }
}
