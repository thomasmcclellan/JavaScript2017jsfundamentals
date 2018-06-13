//Higher order functions are basically functions within functions.  These inception functions allow for you to write large amounts of data with short functions.

var triple = function(x) {
  return x * 3;
}

var waffle = triple;

waffel(30); //90