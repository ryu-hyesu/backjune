var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString();
var input = fs.readFileSync('class2/test.txt').toString();

var num = Number(input);

var i = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
var n = 665;
while(i < num) {
    n++;
    if(String(n).includes('666')) i++;
}

console.log(n);