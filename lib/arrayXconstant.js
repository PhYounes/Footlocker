// multiply an arry by a constant
function arrXconstant(x, y) {

    var res = [];
       for (var i = 0; i < y.length; i++){
          y[i] * x;
          res.push(y[i] * x);
       }
       return res;
}
console.log(arrXconstant (3,[1,2,3,4]));