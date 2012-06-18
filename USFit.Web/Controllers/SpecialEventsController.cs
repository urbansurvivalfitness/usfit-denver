using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace USFit.Web.Controllers
{
    public class SpecialEventsController : Controller
    {
        //
        // GET: /SpecialEvents/

        [ActionName("Urban-Survivalist-Obstacle-Course")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
