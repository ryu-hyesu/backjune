var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('class2/test.txt').toString().split('\n');

var num = input[0];
var words = [];
for(var i = 1; i < input.length; i++) {
    words[i-1] = input[i].replace('\r', '');
}

// 사전순 정렬 + 중복값 제거
words = words.sort().filter(function(item, idx, array) {
    return !idx || item != array[idx - 1];
});

// 문자열 길이별 정렬
words.sort(function(a, b) { return a.length - b.length; });

console.log(words.join('\n')); // 아직 출력 형식 오류가 남 왜?