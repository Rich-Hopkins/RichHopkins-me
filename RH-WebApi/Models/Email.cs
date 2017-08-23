using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RH_WebApi.Models
{
    public class Email
    {
        public Email(string name, string address, string message)
        {
            Name = name;
            Address = address;
            Message = message;
        }

        public string Name { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
    }
}