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

            bundles.Add(new StyleBundle("~/Content/jquerymobile/images").Include("~/Content/themes/blue-and-gold/images/*"));
                
        }
    }
}