var main = function() {
  "use strict";
  
  var addCommentFromInputBox = function () {
    var $new_comment;
    if ($("input.content__comment-input").val() != "") {
      $new_comment = $("<p>").text($("input.content__comment-input").val());
      $new_comment.hide();
      $(".content__comments").append($new_comment);
      $new_comment.fadeIn();
      $("input.content__comment-input").val("");
    }
    else {
      alert("Введите текст комментария");
    }
  }
  
  $("#sendComment").on("click", function (event){
    addCommentFromInputBox();
  });
  $("input.content__comment-input").on("keypress", function(event){
    if (event.keyCode == 13)  {
      addCommentFromInputBox();
    }
  });
};
$(document).ready(main);