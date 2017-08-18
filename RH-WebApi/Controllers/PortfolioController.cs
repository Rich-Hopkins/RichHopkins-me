using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;
using RH_WebApi.Models;

namespace RH_WebApi.Controllers
{
	public class PortfolioController : ApiController
	{
		private List<int> idList = new List<int>();

		public IEnumerable<Tile> GetAllSites()
		{
			var sites = new List<Tile>();
			var path = HttpRuntime.AppDomainAppPath + "App_Data/portfolioData.txt";
			try
			{
				using (StreamReader file = new StreamReader(path))
				{
					string line;
					while ((line = file.ReadLine()) != null)
					{
						int id = GetIdNumber(line);
						
						sites.Add(new Tile()
						{
							Id = id,
							Title = file.ReadLine(),
							ImageUrl = "app/images/portfolio/" + file.ReadLine(),
							LinkUrl = file.ReadLine(),
							Caption = file.ReadLine(),
							CourseName = file.ReadLine(),
							CourseUrl = file.ReadLine()
						});
						id++;
					}
				}
			}
			catch (Exception)
			{

			}
			sites.Sort((x,y) => x.Id.CompareTo(y.Id));
			return sites;
		}

		private int GetIdNumber(string line)
		{
			int id = 0;
			if (line != "")
			{
				int.TryParse(line, out id);
			}

			while (idList.Contains(id))
			{
				Random r = new Random();
				id = r.Next(100);
			}
			idList.Add(id);
			return id;
		}
	}
}
