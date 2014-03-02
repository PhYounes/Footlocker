
function fib(n){
	if(n == 0 || n == 1){
		return n;
	}else{
		return fib(n-1) + fib(n-2);
	}
}

// copy on every page window.onload and put your calling code in there
window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = fib(9);
}


console.log(fib(13));

