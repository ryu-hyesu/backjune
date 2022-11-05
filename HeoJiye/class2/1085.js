
var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('class2/test.txt').toString().split(' ');

var x = input[0];
var y = input[1];
var w = input[2];
var h = input[3];

console.log(Math.min(x, y, w-x, h-y));