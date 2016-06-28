var main = function() {
  "use strict";
  $("#sendComment").on("click", function (event){
    var $new_comment = $("<p>");
    var comment_text = $("input.content__comment-input").val();
    console.log(comment_text);
    $new_comment.text(comment_text);
    $(".content__comments").append($new_comment);
                       });
};
$(document).ready(main);