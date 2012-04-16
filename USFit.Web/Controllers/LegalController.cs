using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace USFit.Web.Controllers
{
    public class LegalController : Controller
    {
        [ActionName("terms-of-service")]
        public ActionResult TermsOfService()
        {
            return View("TermsOfService");
        }

        [ActionName("terms-of-use")]
        public ActionResult TermsOfUse()
        {
            return View("TermsOfUse");
        }

        [ActionName("legal-information")]
        public ActionResult Legal()
        {
            return View("Legal");
        }
    }
}
