var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString();
var input = fs.readFileSync('class2/test.txt').toString();
input = input.replace(' ', '\n').split('\n');

input.shift(); // 앞에 값 뺀다 (dequeue)
var num = input[0];
var strings = [];
for(var i = 1; i < input.length; i++) {
    strings[i-1] = Number(input[i].replace('\r', ''));
}

// 나올 수 있는 값의 최댓값과 최솟값 (이진 탐색)
var min = 1; 
var max = Math.max(... strings);

var answer = Number.MIN_SAFE_INTEGER;

while(min <= max) {
    var mid = Math.floor((min + max) / 2);
    var n = cutNum(strings, mid);

    if(n >= num) { // 목표 갯수보다 많이 만드는 것도 포함
        if(mid > answer) answer = mid;
        min = mid + 1;
    }
    else max = mid - 1;
} 

console.log(answer);

function cutNum(strings, length) {
    var num = 0;
    for(var i = 0; i < strings.length; i++) {
        num += Math.floor(strings[i] / length);
    }
    return num;
}