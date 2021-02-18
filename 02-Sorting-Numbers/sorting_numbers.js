

//insert your code below

function listsGetSortCompare(type, direction) {
    var compareFuncs = {
      "NUMERIC": function(a, b) {
          return Number(a) - Number(b); },
      "TEXT": function(a, b) {
          return a.toString() > b.toString() ? 1 : -1; },
      "IGNORE_CASE": function(a, b) {
          return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
    };
    var compare = compareFuncs[type];
    return function(a, b) { return compare(a, b) * direction; }
  }
  
  
  window.alert([window.prompt('Insert the number'), window.prompt('Insert the second number'), window.prompt('Insert the third number')].slice().sort(listsGetSortCompare("NUMERIC", 1)));
  
  [].slice().sort(listsGetSortCompare("NUMERIC", 1));
  
  window.prompt('abc');
