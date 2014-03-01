/**
* @name happy
* @desc returns wether the given number is a happy number. Happy ness is defined at (url: )
* @param n - any positive integer
* @return true if number is happy - doesnt return if false ( call stack exceeded )
*/
function happy(n, max){
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
  if(max-- < 0) return false;
  return happy( sum, max ); // recurse because number isn't happy
}

// when the window assets (html, js, etc...) are loaded ( when everything is present on the page )
// we can start doing stuff.
// the function 'window.onload' will be called when the page is ready by the browser
// so the following code is telling the window what to do when it's ready... kinda...
window.onload=function(){

  // how many sequence do we want to try
  // for each happyTest until we say 'false'
  var retryHapiness = 1000;
  var numberOfHappyTests = 100; // test numbers from 0 to n to see if they are happy
  // output is a "div" element that has an id="output" in the HTML.
  // so to reach it, we call document.querySelectorAll() with the parameter "#output"
  // which means, we want to get the element with an id=output
  var output = document.querySelectorAll("#output")[0];
  // now we iterate over the number of numbers we want to test for hapiness
  for (var currentNum = 0; currentNum < numberOfHappyTests; currentNum++) {
    // is this current number happy?
    // we ask the function happy() if the current number is happy, we also
    // tell it to try only a certain amount of times (retryHapiness)
    var isNumHappy = happy(currentNum, retryHapiness);
    // if it is happy:
    // add a "div" element with class "green"
    // in out css wi well define the class green as having a specific style ( green text )
    if(isNumHappy) {
      output.innerHTML +=  "<div class='green'>" + currentNum + " is happy.<div>";
    } else {
      output.innerHTML +=  "<div class='red'>" + currentNum + " is unhappy.<div>";
    }
  }

};
