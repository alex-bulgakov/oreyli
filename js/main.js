/*jslint devel: true*/
/*global $, jQuery*/
var main = function () {
  "use strict";
  var toDos = [
    "ToDo 1", "ToDo 2", "ToDo 3", "ToDo 4", "ToDo 5", "ToDo 6"
  ];
  $(".content__tabs-item").toArray().forEach(function (element) {
    $(element).on("click", function () {
      var $element, $content;
      $element = $(element);
      $(".content__tabs-item").removeClass("content__tabs-item--active");
      $element.addClass("content__tabs-item--active");
      $(".content__notes").empty();
      if ($element.parent().is(":nth-child(1)")) {
        console.log("tab 1");
      } else if ($element.parent().is(":nth-child(2)")) {
        $content = $("ul");
        toDos.forEach(function (todo) {
          $content.append($("<li>").text(todo));
        });
        $(".content__notes").append($content);
        console.log("tab2");
      } else if ($element.parent().is(":nth-child(3)")) {
        console.log("tab 3");
      }
      return false;
    });
  });
};
$(document).ready(main);