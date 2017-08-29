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
  public class NetflixController : ApiController
  {
    public object GetMovieGenres()
    {
      //http://whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix/
      var path = HttpRuntime.AppDomainAppPath + "App_Data/netfilxData.txt";
      List<MovieGenre> genres = new List<MovieGenre>();

      try
      {
        foreach(var line in File.ReadLines(path))
        {
          var data = line.Split(',');
          genres.Add(new MovieGenre()
          {
            Genre = data[0],
            SubGenre = data[1],
            Id = data[2]
          });
        }
      }
      catch(Exception ex)
      {
        throw new Exception();
      }
      var groupedGenres = genres.GroupBy(g => g.Genre)
        .Select(grp => new { Genre = grp.Key, subGenres = grp.ToList() })
        .ToList();
      return groupedGenres;
    }
  }
}
