function sieve(n){
	if (n == 1){
		return false;
	}else{
		for (var i = 2; Math.sqrt (i)<= n; i++) {
			if(n % i == 0){
				return false;
			}else{
				return true;
			}
		}
	}
}	
sieve(13);