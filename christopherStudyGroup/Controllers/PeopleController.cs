using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace christopherStudyGroup.Controllers
{
    public class PeopleController : Controller
    {
        // GET: People
        public ActionResult ListPeople()
        {
            List<Models.PersonModel> people = new List<Models.PersonModel>();

            people.Add(new Models.PersonModel { StudentNumber = "u24661092", Name = "Christopher", Surname = "Bailey", EmailAddress = "u24661092@tuks.co.za", myLink = "~/HTML/Christopher.html" });
            people.Add(new Models.PersonModel { StudentNumber = "u24671691", Name = "Nicholas", Surname = "Bailey", EmailAddress = "u24671691@tuks.co.za", myLink = "~/HTML/Nicholas.html" });
            people.Add(new Models.PersonModel { StudentNumber = "u24123456", Name = "Byron", Surname = "Kurk", EmailAddress = "u24123456@tuks.co.za", myLink = "~/HTML/Byron.html" });
            people.Add(new Models.PersonModel { StudentNumber = "u24654321", Name = "Jared", Surname = "Blue", EmailAddress = "u24654321@tuks.co.za", myLink = "~/HTML/Jared.html" });
            people.Add(new Models.PersonModel { StudentNumber = "u24881023", Name = "Barry", Surname = "Allen", EmailAddress = "u24881023@tuks.co.za", myLink = "~/HTML/Barry.html" });

            return View(people);
        }
    }
}