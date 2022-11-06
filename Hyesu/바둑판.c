#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <stdlib.h>
int main(void) {
    int N, M;
    char answerA, answerB;
    int minCountA = 32, minCountB = 32;
    int countA = 0, countB = 0;

    //값 받아오기

    scanf("%d %d", &N, &M);

    while (getchar() != '\n');

    char** arr;
    arr = (char)malloc(sizeof(char) * N);
    for (int i = 0; i < N; i++)
        arr[i] = (char)malloc(sizeof(char) * M);

    for (int i = 0; i < N; i++)
        for (int j = 0; j < M; j++) {
            scanf("%c", &arr[i][j]);
            if (arr[i][j] == '\n')
                scanf("%c", &arr[i][j]);
        }

    //while (getchar() != '\n');

    answerA = 'B';
    answerB = 'W';
    // 8x8 크기만큼 움직이기
    for (int i = 0; i <= N - 8; i++)
        for (int j = 0; j <= M - 8; j++) {
            for (int a = i; a < i + 8; a++) {
                for (int b = j; b < j + 8; b++) {
                    if (answerA != arr[a][b])
                        countA++;

                    if (answerB != arr[a][b])
                        countB++;

                    answerA = answerA == 'B' ? 'W' : 'B';
                    answerB = answerB == 'B' ? 'W' : 'B';
                }
                answerA = answerA == 'B' ? 'W' : 'B';
                answerB = answerB == 'B' ? 'W' : 'B';
            }

            if (countA < minCountA) // 현재 count가 이전 count보다 작다면
                minCountA = countA;
            if (countB < minCountB) // 현재 count가 이전 count보다 작다면
                minCountB = countB;

            countA = countB = 0;
        }

    printf("%d", minCountA > minCountB ? minCountB : minCountA);

    return 0;
}