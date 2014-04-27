//numbers = [1,2,3,4,5];
// numbers is now [2,4,6,8,10];

function mult(n){
    var z = 2;
    for (var i = 0; i < n.length; i++) {
      n[i] *= z;
    }
    return n;
}
console.log(mult([5]));