using System.Web;
using System.Web.Optimization;

namespace USFit.Web {
    public class BundleMobileConfig {
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new ScriptBundle("~/bundles/jquerymobile")
                .Include("~/Scripts/jquery.mobile-{version}.js"));
                

            bundles.Add(new StyleBundle("~/Content/Mobile/css")
                .Include("~/Content/Site.Mobile.css"));
            
            bundles.Add(new StyleBundle("~/Content/jquerymobile/css")
                .Include("~/Content/jquery.mobile-{version}.css", "~/Content/themes/blue-and-gold/usf-blue-and-orange*"));

            //bundles.Add(new StyleBundle("~/Content/jquerymobile/images").Include("~/Content/themes/blue-and-gold/images/ajax-loader.gif",
            //    "~/Content/themes/blue-and-gold/images/ajax-loader.png",
            //    "~/Content/themes/blue-and-gold/images/icons-18-black.png",
            //    "~/Content/themes/blue-and-gold/images/icons-18-white.png",
            //    "~/Content/themes/blue-and-gold/images/icons-36-black.png",
            //    "~/Content/themes/blue-and-gold/images/icons-36-white.png"));
                
                
        }
    }
}