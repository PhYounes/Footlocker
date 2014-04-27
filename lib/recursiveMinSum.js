/*Write a recursive function that finds and returns 
the minimum element in an array, where the array 
is given as parameters.
*/

function seekMin(n){
	var first = n[0];
	var rest = n.slice(1);
	if(n.length > 1){
		return Math.min(first, seekMin(rest));

	}else{
		return first;
	}
}



window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = seekMin([9, 1, 6, 3, -5]);
};
