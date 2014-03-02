function computeSum(n){
	if(n <= 1){
		return n;
	}else{
		return computeSum(n-1) + n;
	}
}

window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = computeSum(6);
};
