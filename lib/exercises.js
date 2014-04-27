function main(){ 
    var listPrime = function(n) {
        var ans = [];
    
            for (i=2; i<=n; i++) {
                for (p=0; p<=ans.length;) {
                    if (p == ans.length) {
                        ans.push(i);
                    }
                    else if (i % ans[p] !== 0) {
                        p++;
                    }
                    else break;
                }
            } 
            return ans;
    };
}
listPrime(9);