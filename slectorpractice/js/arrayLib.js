/*jslint devel: true, plusplus: true*/
var arr = [23, 43.3, -101, 5, 453];

function genArr(num, evenodd) {
  "use strict";
  var i, arr;
  arr = [];
  if (evenodd === "even") {
    for (i = 1; i < num; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
  } else if (evenodd === "odd") {
    for (i = 1; i < num; i++) {
      if (i % 2 !== 0) {
        arr.push(i);
      }
    }
  } else {
    for (i = 1; i < num; i++) {
      arr.push(i);
    }
  }
  return arr;
}

function sumAll(arr) {
  "use strict";
  var res, i;
  res = 0;
  for (i = 0; i <= arr.length; i++) {
    res += i;
  }
  return res;
}

function average(arr) {
  "use strict";
  var sum = 0;
  arr.forEach(function (value) {
    sum = sum + value;
  });
  return (sum / arr.length);
}

function max(arr) {
  "use strict";
  var res = 0;
  arr.forEach(function (value) {
    if (value > res) {
      res = value;
    }
  });
  return res;
}

function oneEvenNumber(arr) {
  "use strict";
  var res = false;
  arr.forEach(function (value) {
    if (value % 2 === 0) {
      res = true;
    }
  });
  return res;
}

function everyEvenNumber(arr) {
  "use strict";
  var res = true;
  arr.forEach(function (value) {
    if (value % 2 !== 0) {
      res = false;
    }
  });
  return res;
}

function searchString(arr, str) {
  "use strict";
  var res = false;
  arr.forEach(function (value) {
    if (value === str) {
      res = true;
    }
  });
  return res;
}

function searchTwiceString(arr, str) {
  "use strict";
  var count = 0;
  arr.forEach(function (value) {
    if (value === str) {
      count++;
    }
  });
  if (count >= 2) {
    return true;
  } else {
    return false;
  }
  
}