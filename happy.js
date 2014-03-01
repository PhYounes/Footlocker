/**
* @name happy
* @desc returns wether the given number is a happy number. Happy ness is defined at (url: )
* @param n - any positive integer
* @return true if number is happy - doesnt return if false ( call stack exceeded )
*/
function happy(n){
  // nStr is the stringified number ( 10 => "10" )
  // because a string is an array of characters, so we can iterate over them
  var nStr = n.toString();
  // the sum of this sequence
  var sum = 0;
  // we iterate over each char ( "10".length == 2 )
  for (var i = 0; i < nStr.length; i++) {
    var temp =  Math.pow( nStr[i], 2);
    sum = sum + temp;
  }
  if(sum == 1) return true; // number is happy
  return happy( sum ); // recurse because number isn't happy
}