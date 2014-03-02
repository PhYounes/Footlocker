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
