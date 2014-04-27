function main(){
var listPrime = function(n) {
    var z = [];
        for (i=2; i<=n; i++) {
            for (p=1; p<=z.length;) {
                if (p == z.length) {
                    z.push(i);
                }
                else if (i % z[p] !== 0) {
                    p++;
                }
                else break;
            }
        } 
        return z;
};
}

listPrime(20);

