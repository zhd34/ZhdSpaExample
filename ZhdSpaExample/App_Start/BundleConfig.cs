using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ZhdSpaExample.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendors").Include(
                "~/scripts/Angular/modernizr-2.6.2.js",
                "~/scripts/Angular/jquery-1.10.2.js",
                "~/scripts/Angular/bootstrap.js",
                "~/scripts/Angular/angular.js",
                "~/scripts/Angular/angular-route.js",
                "~/scripts/Angular/angular-cookies.js",
                "~/scripts/Vendors/angular-validator.js",
                "~/scripts/Vendors/angular-uuid2.js",
                "~/scripts/Vendors/ui-bootstrap-tpls-0.13.1.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/spa").Include(
                "~/scripts/Spa/module/common.core.js",
                "~/scripts/Spa/module/common.ui.js",
                "~/scripts/Spa/app.js",
                "~/scripts/Spa/home/rootCtrl.js",
                "~/scripts/Spa/layout/topBar.directive.js",
                "~/scripts/Spa/layout/tabBar.directive.js",
                "~/scripts/Spa/layout/memberLogin.directive.js",
                "~/scripts/Spa/product/productsCtrl.js",
                "~/scripts/Spa/product/addProductCtrl.js",
                "~/scripts/Spa/product/editProductCtrl.js",
                "~/scripts/Spa/order/ordersCtrl.js",
                "~/scripts/Spa/order/placeOrderCtrl.js",
                "~/scripts/Spa/order/viewOrderCtrl.js",
                "~/scripts/Spa/member/loginCtrl.js",
                "~/scripts/Spa/services/common.js",
                "~/scripts/Spa/services/membershipService.js",
                "~/scripts/Spa/services/dataService.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/content/css/bootstrap.css",
                "~/content/css/site.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}