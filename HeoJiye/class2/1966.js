var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('class2/test.txt').toString().split('\n');

input.shift();
while(input.length > 0) {
    var M = input[0].replace('\r','').split(' '); input.shift();
    var queue = input[0].replace('\r','').split(' ').map(Number); input.shift();

    var idx = Number(M[1]);
    var printN = 0;

    while(queue.length > 0) {
        if(queue[0] < Math.max(... queue)) {
            var tmp = queue.shift();
            queue.push(tmp); // 현재 맨앞에 있는 것은 맨 뒤로
            if(idx == 0) idx = queue.length-1; // target이 뒤로 갔다면
            else idx--; // 앞으로 한 칸씩
        } else {
            queue.shift(); printN++; // 현재 맨 앞에 있는 것을 print
            if(idx == 0) break; // target이 프린트 되었다면 break;
            else idx--; // 앞으로 한 칸씩
        }
    }
    console.log(printN);
}