using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Script.Serialization;
using ExcelDataReader;
using Newtonsoft.Json;
using RH_WebApi.Models;

namespace RH_WebApi.Controllers
{
  public class CBIndexController : ApiController
  {
    string sqlConnStr = WebConfigurationManager.ConnectionStrings["rhmesql"].ConnectionString;

    [HttpGet]
    public object GetCategories()
    {
      var conn = new SqlConnection(sqlConnStr);
      var command = new SqlCommand("uspGetCategories", conn);
      command.CommandType = CommandType.StoredProcedure;
      var dt = new DataTable();

      try
      {
        conn.Open();
        var da = new SqlDataAdapter(command);
        da.Fill(dt);
        conn.Close();

        var categoryList = ConvertCategories(dt);
        categoryList.Sort((x, y) => string.Compare(x.Category, y.Category));

        return categoryList;
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        throw;
      }
      finally
      {
        conn.Close();
      }
    }

    [HttpPost]
    public object GetRecipesFromCategory(int? categoryId = null)
    {
      var conn = new SqlConnection(sqlConnStr);
      var command = new SqlCommand("uspGetRecipes", conn);
      command.CommandType = CommandType.StoredProcedure;
      command.Parameters.Add("@CategoryID", SqlDbType.Int).Value = categoryId;
      var dt = new DataTable();

      try
      {
        conn.Open();
        var da = new SqlDataAdapter(command);
        da.Fill(dt);
        conn.Close();

        var recipeList = ConvertRecipes(dt);

        return recipeList;
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        throw;
      }
      finally
      {
        conn.Close();
      }
    }

    private List<Recipe> ConvertRecipes(DataTable dt)
    {
      var RecipeList = new List<Recipe>();

      foreach (DataRow dr in dt.Rows)
      {
        var r = new Recipe();
        r.Name = dr[0].ToString();
        r.Address = dr[1].ToString();
        RecipeList.Add(r);
      }

      return RecipeList;
    }

    private List<RecipeCategory> ConvertCategories(DataTable dt)
    {
      var CategoryList = new List<RecipeCategory>();

      foreach (DataRow dr in dt.Rows)
      {
        var rc = new RecipeCategory();
        rc.CategoryId = int.Parse(dr[0].ToString());
        rc.Category = dr[1].ToString();
        CategoryList.Add(rc);
      }

      return CategoryList;
    }

  }
}
