var main = function() {
  "use strict";
  var count = 1;
  var addCommentFromInputBox = function () {
    var $new_comment;
    var $close_comment;
    if ($("input.content__comment-input").val() != "") {
      $new_comment = $("<p id='p" + count + "'>").text($("input.content__comment-input").val());
      $close_comment = $("<div id='close_p" + count + "'>");
      $close_comment.text("+");
      $new_comment.hide();
      $(".content__comments").append($new_comment);
      $(".content__comments p#p" + count).append($close_comment);
      $new_comment.fadeIn();
      $("input.content__comment-input").val("");
      count += 1;
    }
    else {
      alert("Введите текст комментария");
    }
  }
  
  var addEventClose = function () {
     $("div[id^='close_p']").on("click", function(event){
      var $p = event.target.id.split('_')[1]; 
      $("#" + $p).fadeOut(500, function () {
        $("#" + $p).remove();
      })
    });
  }
  
  $("#sendComment").on("click", function (event){
    addCommentFromInputBox();
    addEventClose();
  });
  $("input.content__comment-input").on("keypress", function(event){
    if (event.keyCode == 13)  {
      addCommentFromInputBox();
      addEventClose();
    }
  });
};
$(document).ready(main);