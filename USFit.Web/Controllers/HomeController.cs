using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace USFit.Web.Controllers
{
    public class HomeController : Controller
    {
        [ActionName("free-coupon")]
        public ActionResult FreeCoupon()
        {
            return View();
        }

        [ActionName("Special-Events")]
        public ActionResult SpecialEvents()
        {
            return View();
        }

        [ActionName("Seniors")]
        public ActionResult Seniors()
        {
            return View();
        }

        [ActionName("self-defense")]
        public ActionResult SelfDefense()
        {
            return View();
        }

        [ActionName("youth-programs")]
        public ActionResult YouthPrograms()
        {
            return View();
        }

        [ActionName("Workout-Classes")]
        public ActionResult WorkoutClasses()
        {
            return View();
        }
           
        private bool ThemeIsValid(string theme)
        {
            return theme.Equals("color1", StringComparison.InvariantCultureIgnoreCase) || theme.Equals("color2", StringComparison.InvariantCultureIgnoreCase) || theme.Equals("color3", StringComparison.InvariantCultureIgnoreCase);
        }
        public ActionResult Index()
        {
            var theme = Request.QueryString["t"];

            if (theme != null && ThemeIsValid(theme)) {
                ViewBag.Theme = theme;
            }

            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your quintessential app description page.";

            return View();
        }

        public ActionResult Pricing()
        {
            return View();
        }

        [ActionName("Class-Schedules")]
        public ActionResult Schedules()
        {
            return View();
        }

        [ActionName("Contact-Us")]
        public ActionResult ContactUs()
        {
            return View();
        }

        public ActionResult Blog()
        {
            return View();
        }

        [ActionName("Our-Staff")]
        public ActionResult OurStaff()
        {
            return View();
        }


        [ActionName("Our-Facility")]
        public ActionResult OurFacility()
        {
            return View();
        }

        [ActionName("Our-Location")]
        public ActionResult OurLocation()
        {
            return View();
        }
    }
}
