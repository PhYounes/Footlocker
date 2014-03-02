var fac = [];
function factorial(x){
	if(x == 0 || x == 1)
		return 1;
	if(fac[x] > 0)
		return fac[x];
		return factorial(x -1) * x;
}



window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = factorial(0);
}
