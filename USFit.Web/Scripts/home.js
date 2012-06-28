/// <reference path="/Scripts/jquery-1.7.1-vsdoc.js" />
/*! usfit.homeModule */
/// test
var USFIT = USFIT || {};

USFIT.namespace = function (ns_string) {
    var parts = ns_string.split("."),
        parent = USFIT,
        i;

    if (parts[0] === "USFIT") {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

USFIT.namespace("USFIT.HomeModule");
//USFIT.namespace("USFIT.LocationModule");

//USFIT.LocationModule = (function () {
//    var display,
//    directionService = new google.maps.DirectionsService();

//    function InitializeMap() {
//        display = new google.maps.DirectionsRenderer();
//        var latlng = new google.maps.LatLng(-34.397, 150.644);
//        var myOptions =
//        {
//            zoom: 8,
//            center: latlng,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//        var map = new google.maps.Map($("#map"), myOptions);

//        display.setMap(map);
////        display.setPanel($("#directionsDisplay"));

////        var control = document.getElementById('control');
////        control.style.display = 'block';

//    }

//    function calcRoute() {
//        var start = $("#start").val(),
//            end = $("#end").val(),
//            request = {
//                origin: start,
//                destination: end,
//                travelMode: google.maps.DirectionsTravelMode.DRIVING
//            };
//        
//        directionService.route(request, function (response, status) {
//            if (status == google.maps.DirectionsStatus.OK) {
//                display.setDirections(response);
//            }
//        });

//    }


//    return {
//        directionsDisplay: display,
//        directionService : directionService,
//        calcRoute : calcRoute,
//        InitializeMap : InitializeMap
//    };
//} ());

USFIT.HomeModule = (function () {
    // initialize any dependencies, private properties, private methods, etc. in your var setup
    var _sayHello = function () { return "hello world"; },
        _getDate = function () { return new Date(); },
        _name = { firstName: "joe", lastName: "bloggs" },
        _address = { address1: "1900 grant st", city: "denver", state: "co" },
        _computeFullName = function () { return _name.firstName + " " + _name.lastName; },
        _person = {
            fullName: _computeFullName(),
            firstName: _name.firstName,
            lastName: _name.lastName,
            address: {
                address1: _address.address1,
                city: _address.city,
                state: _address.state
            }
        };

    // return the public api...
    return {
        sayHello: _sayHello,
        getDate: _getDate,
        getFullName: _computeFullName,
        person: _person
    };

} ());

$(document).ready(function () {

    var homeModule = USFIT.HomeModule,
    //locationModule = USFIT.LocationModule,
    buttonId = "",
    targetId = "",
    $buttons = $(".button"),
    $targets = $(".target"),
    $getDirectionsButton = $("#getDirectionsButton")
    ;

    //    if ($getDirectionsButton != "undefined" && $getDirectionsButton != null) {
    //        locationModule.InitializeMap();
    //    }

    //    $getDirectionsButton.click(function () {
    //        alert("clicked");
    //        locationModule.calcRoute();
    //    });

    $buttons.each(function () {
        $(this).mouseover(function () {
            //alert($(this).attr("id"));
            buttonId = $(this).attr("id");

            switch (buttonId) {
                case "b1":
                    targetId = "t1";
                    break;
                case "b2":
                    targetId = "t2";
                    break;
                case "b3":
                    targetId = "t3";
                    break;
                case "b4":
                    targetId = "t4";
                    break;
            }

            $targets.each(function () {
                if (($(this).hasClass("offscreen") == false) && ($(this).hasClass("." + targetId) == false)) {
                    $(this).addClass("offscreen");
                    $(this).removeClass("onscreen");
                }
            });

            if (targetId) {
                $("." + targetId).addClass("onscreen").removeClass("offscreen");
            }
            


        });
    });



});