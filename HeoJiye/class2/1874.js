var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('class2/test.txt').toString().split('\n');

var num = input[0];
var array = [];
for(var i = 1; i < input.length; i++)
    array[i-1] = Number(input[i].replace('\r', ''));

var stack = [];
var queue = [];
for(var i = 0; i < num; i++) queue[i] = i+1;

var result = "";
for(var i = 0; i < num; i++) {
    while(stack[stack.length-1] != array[i]) {
        if(queue.length == 0) {
            console.log("NO");
            return;
        }
        stack.push(queue.shift());
        result += "+\n";
    }
    stack.pop();
    result += "-\n";
}
console.log(result);