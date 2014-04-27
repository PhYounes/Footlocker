// multiplication table of x, x*1, x*2 ... x*9
// the rusult must be a list,  in the format of an array an array

function iterateMultiplying(x){
	var n = 9; 
	var y = 1;
	var res = [];
	for (var i = 1; i <= n; i++) {
		x*y
		res.push(x*y);
		y++;
	}
	return res;
}
console.log(iterateMultiplying(1));
console.log("---------------------------------");

function iterateMultiplying(x){
    var i = 1;
	var n = 9; 
	var y = 1;
	var res = [];
	while(i <= n) {
		x*y
		res.push(x*y);
        i++
		y++;
	}
	return res;
}
console.log(iterateMultiplying(2));