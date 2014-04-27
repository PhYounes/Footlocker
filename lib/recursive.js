function computeSum(n){
	if(n <= 1){
		return n;
	}else{
		return computeSum(n-1) + n;
	}
}

console.log(computeSum(6));