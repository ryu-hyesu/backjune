var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('class2/test.txt').toString().split(' ');

var M = Number(input[0]);
var N = Number(input[1]);

var primes = get_primes(N);

for(var i = M; i <= N; i++)
    if(primes[i]) console.log(i);

function get_primes(n) {
    var primes = [];
    primes[0] = false;
    primes[1] = false;

    for(var i = 2; i <= n; i++) primes[i] = true;
    
    for(var i = 2; i <= Math.sqrt(n); i++) {
        if(!primes[i]) continue;
        for(var j = i * i; j <= n; j += i) {
            primes[j] = false;
        }
    }
    return primes;
}