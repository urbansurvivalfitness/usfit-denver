/// <reference path="/Scripts/jquery-1.7.1-vsdoc.js" />
/*! usfit.homeModule */

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
    buttonId = "",
    targetId = "",
    $buttons = $(".button"),
    $targets = $(".target")
    ;

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
            $("." + targetId).addClass("onscreen").removeClass("offscreen");


        });
    });



});