
int minCount = 999;

// 8x8 크기만큼 움직이기
for(int i = 0; i <= N - 8; i++) {
    for (int j = 0; j <= M - 8; j++) {

        //(i, j)을 기준으로 8*8을 나눈다.

        int countW = 0; // (i*j) W이 맞다 치고
        int countB = 0; // (i*j) B이 맞다 치고

        for (int a = i; a < i + 8; a++) {
            for (int b = j; b < j + 7; b++) {
                if(i % 2 == 1) {  // (i*j)와 같은 색깔로 시작하는 라인
                    if(j % 2 == 1) { 
                        if(arr[a][b] == 'W') countB++;
                        else(arr[a][b] == 'B') countW++;
                    } else {
                        if(arr[a][b] == 'W') countW++;
                        else(arr[a][b] == 'B') countB++;
                    }
                
                } else { // (i*j)와 다른 색깔로 시작하는 라인
                    if(j % 2 == 1) {
                        if(arr[a][b] == 'W') countW++;
                        else(arr[a][b] == 'B') countB++;
                    } else {
                        if(arr[a][b] == 'W') countB++;
                        else(arr[a][b] == 'B') countW++;
                    }
                }
            }

        }
        minCount = min(minCount, countW, countB);
    }
}

return minCount;