/*jslint devel: true*/
/*global $, jQuery*/
var main = function () {
  "use strict";
  var clickTabs = function (numTab) {
    var tabSelector = ".content__tabs-item--" + numTab;
    $(".content__tabs span").removeClass("content__tabs-item--active");
    $(tabSelector).addClass("content__tabs-item--active");
  };
  $(".content__tabs-item--1").on("click", function () {
    clickTabs(1);
    return false;
  });
  $(".content__tabs-item--2").on("click", function () {
    clickTabs(2);
    return false;
  });
  $(".content__tabs-item--3").on("click", function () {
    clickTabs(3);
    return false;
  });
};

$(document).ready(main);