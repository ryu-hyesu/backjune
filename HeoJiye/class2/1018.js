// 입력을 위한 부분
var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString();
var input = fs.readFileSync('class2/test.txt').toString();
input = input.replace(' ', '\n').split('\n');

// 입력 받아서 변수에 저장하기
var n = input[0];
var m = input[1];
var board = {};
for(var i = 2; i < input.length; i++) {
    board[i-2] = {};
    for(var j = 0; j < m; j++) {
        board[i-2][j] = input[i].charAt(j);
    }
}

// 일일이 count해서 비교 (최대값은 64라서 65로 초기화)
var min = 65;
for(var i = 7; i < n; i++) {
    for(var j = 7; j < m; j++) {
        var w = paintCount(i, j, 8, 'W');
        var b = paintCount(i, j, 8, 'B');
        
        min = Math.min(min, w, b);
    }
}
console.log(min);

// count하는 함수 재귀로 구현
function paintCount(i, j, size, color) {
    var count = board[i][j] == color ? 0 : 1;

    if(size > 1) {
        for(var k = 1; k < size; k++) {
            if(k % 2 == 0) {
                count += board[i-k][j] == color ? 0 : 1;
                count += board[i][j-k] == color ? 0 : 1;
            } else {
                count += board[i-k][j] == color ? 1 : 0;
                count += board[i][j-k] == color ? 1 : 0;
            }
        }
            
        return count + paintCount(i-1, j-1, size-1, color);
    }

    return count;
}

