/*jslint devel: true*/
/*global $*/

var main = function () {
  "use strict";
  
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?"
             + "tags=nature&format=json&jsoncallback=?";
  
  $.getJSON(url, function (flickrResponse) {
    console.log(flickrResponse);
  });
  
};

$(document).ready(main);