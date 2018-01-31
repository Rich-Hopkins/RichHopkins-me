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
      var title = "";
      var url = "";
      var description = "";
      List<string> images = new List<string>();

      if (page.ToLower() == "cbindex")
      {
        title = "Carrie Brown Keto Recipe Index";
        url = "https://richhopkins.me/cbindex";
        description = "Carrie Brown is a world class chef who creates great ketogenic recipes. This is an easy-to-use index of all of her publicly-available recipes.";
        images.Add("http://carriebrown.com/wp-content/uploads/2017/10/Carrie-1-1.jpg");
        images.Add("http://carriebrown.com/wp-content/uploads/pp/images/logo_1486957363.png");
      }

      html = BuildHtml(title, url, description, images);
      var response = new HttpResponseMessage();
      response.Content = new StringContent(html, Encoding.UTF8, "text/html");
      return response;
    }

    private static string BuildHtml(string title, string url, string description, List<string> images)
    {
      var html = "<!DOCTYPE html><html><head lang=\"en\">";
      html += "<meta charset=\"UTF-8\">";
      html += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
      html += "<meta property=\"og:type\" content=\"website\">";
      html += "<meta property=\"og:title\" content=\"" + title + "\">";
      html += "<meta property=\"og:url\" content=\"" + url + "\">";
      html += "<meta property=\"og:description\" content =\"" + description + "\">";

      foreach (var image in images)
      {
        html += "<meta property=\"og:image\" content=\"" + image + "\">";
      }

      html += "</head><body>";
      html += "<h3>" + title + "</h3>";
      html += "<p>" + description + "</p>";
      if (images.Count > 0)
      {
        html += "<img src=\" " + images[0] + "\"/>";
      }
      html += "</body></html>";
      return html;
    }
  }
}
