/*integer x,
while x > 1, start dividing by to and increment,
if modulus 2 remainder 0, keep dividing
by 2, otherwise, increment by one an so on
keep i in memory i and result,
[loop]
 as 11 from 'compare'
 If 'compare' is zero, continue at [end]
 Add 'count' to 'total'
 Add 1 to 'count'
 Continue at [loop]
[end]
 Output 'total'
*/

function factorize(n){
	var result = [];
	var i = 2;
	while(n > 1){
		if(n % i == 0){
			n /= i;
			result.push(i);
		}else{
			i++;
		}
	}
	return result;
}
console.log(factorize(35846));