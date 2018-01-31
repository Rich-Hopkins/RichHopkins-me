using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace RH_WebApi.Controllers
{
  public class SocialController : ApiController
  {
    [HttpGet]
    public HttpResponseMessage Get()//(string page)
    {
      var html = "<!DOCTYPE html>\n<html>\n<head lang=\"en\">\n";
      html += "<meta charset=\"UTF-8\">\n";
      html += "<meta http-equiv=\"X-UA-Compatible\"content=\"IE=edge\">\n";
      html += "<meta property=\"og:type\" content=\"website\">\n";
      html += "<meta property=\"og:url\" content=\"https://richhopkins.me/cbindex\">\n";
      html += "<meta property=\"og:title\" content=\"Carrie Brown Keto Recipe Index\">\n";
      html+= "<meta property=\"og:description\" content =\"Carrie Brown is a world class chef who creates great ketogenic recipes. This is an easy-to-use index of all of her publicly-available recipes.\">\n";
      html += "<meta property=\"og:image\" content=\"http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg\"/>\n";
      html += "</head>\n<body>\n";
      html += "<p>Carrie Brown Keto Recipe Index</p>";
      html+= "<img src=\"http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg\"/>\n";
      html += "</body>\n</html>"; 

      var response = new HttpResponseMessage();
      response.Content = new StringContent(html, Encoding.UTF8, "text/html");
      return response;
    }
  }
}
