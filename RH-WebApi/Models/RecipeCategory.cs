using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Web;

namespace RH_WebApi.Models
{
  public class RecipeCategory
  {
    public int CategoryId { get; set; }
    public string Category { get; set; }
  }
}