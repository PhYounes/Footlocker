function reverseString(n){
	n = n.toString();
	return n.split("").reverse().join("");
}


window.onload = function() {
	var output = document.querySelectorAll("#output")[0];
	output.innerHTML = reverseString("lmpor");
}