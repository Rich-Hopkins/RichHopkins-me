using RH_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Configuration;
using System.Web.Http;

namespace RH_WebApi.Controllers
{
    public class EmailController : ApiController
    {
        public String Get()
        {
            return "The email service is available.";
        }

        [HttpPost]
        public bool Post(string name, string address, string message)
        {
            var msg = new Email(name, address, message);
            return SendEmailMessage(msg);
        }

        private bool SendEmailMessage(Email msg)
        {
            var sendTo = WebConfigurationManager.AppSettings["sendToAddress"];
            var sendFrom = WebConfigurationManager.AppSettings["emailAccount"];
            var password = WebConfigurationManager.AppSettings["emailPassword"];
            var smtpAddress = WebConfigurationManager.AppSettings["smtpAddress"];
            var smtpPort = int.Parse(WebConfigurationManager.AppSettings["smtpPort"]);

            var subject = "CONTACT - RICHHOPKINS.ME: " + msg.Name;
            string body = "<h3>From: " + msg.Name + "</br>";
            body += "Email: " + msg.Address + "</h3>";
            body += "<p>" + msg.Message + "</p>";

            MailMessage o = new MailMessage();
            o.IsBodyHtml = true;
            o.To.Add(new MailAddress(sendTo));
            o.From = new MailAddress(sendFrom);
            o.ReplyToList.Add(new MailAddress(msg.Address));
            o.Subject = subject;
            o.Body = body;

            NetworkCredential cred = new NetworkCredential(sendFrom, password);
            SmtpClient smtp = new SmtpClient(smtpAddress, smtpPort);
            smtp.UseDefaultCredentials = false;
            smtp.EnableSsl = true;
            smtp.Credentials = cred;

            try
            {
                smtp.Send(o);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
