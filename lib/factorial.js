var facto = [];
function factor (n) {
  if (n == 0 || n == 1)
    return 1;
  if (facto[n] > 0)
    return facto[n];
  return factor(n-1) * n;
} 
window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = factor(3);
}

console.log("------------------------------------------");

// Recursion!
//   factorial(3)
// = (factorial(2) * 3)
// = ((factorial(1) * 2) * 3)
// = (((1) * 2) * 3 )
// = 6
// we multiply x by the previous factorial (x-1)
// using recursion until reach x = 1
// because this will stop the recursion and return 1
// at which point we will start multiplying
// them in the reverse direction
function factorial(x){
  if ( x > 1)
    return factorial(x - 1) * x;
  else
    return 1;
}

// ternary operator
function factorialTernary(x){
  return (x >= 1) ? factorial(x - 1) * x : 1;
}


