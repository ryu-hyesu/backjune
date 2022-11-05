var fs = require("fs");
//var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var input = fs.readFileSync('class2/test.txt').toString().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
	let reverseStr = input[i].split("").reverse().join("");
	console.log(input[i] === reverseStr ? "yes" : "no");
}