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
    public HttpResponseMessage Get(string page)
    {
      var html = "";
      if (page.ToLower() == "cbindex")
      {
        html = BuildHtml();
        html += "<meta property=\"og:url\" content=\"https://richhopkins.me/cbindex\">";
        html += "<meta property=\"og:title\" content=\"Carrie Brown Keto Recipe Index\">";
        html += "<meta property=\"og:description\" content =\"Carrie Brown is a world class chef who creates great ketogenic recipes. This is an easy-to-use index of all of her publicly-available recipes.\">";
        html += "<meta property=\"og:image\" content=\"http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg\"/>";
        html += "</head><body>";
        html += "<p>Carrie Brown Keto Recipe Index</p>";
        html += "<img src=\"http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg\"/>";
        html += "</body></html>";
      }

      var response = new HttpResponseMessage();
      response.Content = new StringContent(html, Encoding.UTF8, "text/html");
      return response;
    }

    private static string BuildHtml()
    {
      var html = "<!DOCTYPE html><html><head lang=\"en\">";
      html += "<meta charset=\"UTF-8\">";
      html += "<meta http-equiv=\"X-UA-Compatible\"content=\"IE=edge\">";
      html += "<meta property=\"og:type\" content=\"website\">";
      return html;
    }
  }
}
