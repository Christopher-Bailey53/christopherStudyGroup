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
        private static List<Models.PersonModel> people = new List<Models.PersonModel>();
        public ActionResult ListPeople()
        {

            if (people.Count == 0)
            {
                people.Add(new Models.PersonModel { StudentNumber = "u24661092", Name = "Christopher", Surname = "Bailey", EmailAddress = "u24661092@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24671691", Name = "Nicholas", Surname = "Bailey", EmailAddress = "u24671691@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24123456", Name = "Byron", Surname = "Kurk", EmailAddress = "u24123456@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24654321", Name = "Jared", Surname = "Blue", EmailAddress = "u24654321@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24881023", Name = "Barry", Surname = "Allen", EmailAddress = "u24881023@tuks.co.za" });
            }
            return View(people);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View("Create");
        }

        public ActionResult Create(Models.PersonModel pm)
        {
            people.Add(new Models.PersonModel { StudentNumber = pm.StudentNumber, Name = pm.Name, Surname = pm.Surname, EmailAddress = pm.EmailAddress });

            return RedirectToAction("ListPeople");
        }
    }
}