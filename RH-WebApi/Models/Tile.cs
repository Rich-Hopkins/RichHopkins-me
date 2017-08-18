using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RH_WebApi.Models
{
	public class Tile
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string ImageUrl { get; set; }
		public string LinkUrl { get; set; }
		public string Caption { get; set; }
		public string CourseName { get; set; }
		public string CourseUrl { get; set; }
	}
}