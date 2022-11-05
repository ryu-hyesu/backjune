var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('class2/test.txt').toString().split('\n');

var A = input[1].replace('\r', '').split(' ').sort();
var B = input[3].replace('\r', '').split(' ');

var result = [];

for(var i = 0; i < B.length; i++) {
    var min = 0;
    var max = A.length-1;
    var mid = Math.floor((min+max)/2);

    while(A[mid] != B[i] && min <= max) {
        if(A[mid] > B[i]) max = mid - 1;
        else min = mid + 1;
        mid = Math.floor((min+max)/2);
    }
    
    if(min > max) result[i] = 0;
    else result[i] = 1;
}

console.log(result.join('\n'));