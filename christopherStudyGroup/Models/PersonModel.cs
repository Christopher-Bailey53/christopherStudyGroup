using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services.Description;
using System.ComponentModel.DataAnnotations;

namespace christopherStudyGroup.Models
{
	public class PersonModel
	{
		[Display(Name = "STUDENT NUMBER")]
		public string StudentNumber { get; set; }

		[Display(Name = "NAME")]
		public string Name { get; set; }

        [Display(Name = "SURNAME")]
        public string Surname { get; set; }

        [Display(Name = "EMAIL ADRESS")]
        public string EmailAddress { get; set; }

        [Display(Name = "Link to personal page")]
        public string myLink { get; set; }
    }
}