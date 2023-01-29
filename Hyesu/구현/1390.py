# 뱀
n = int(input())
k = int(input())
apples = [[0] * n for _ in range(n)]
for _ in range(k) :
    i, j = map(int, input().split())
    apples[i][j] = 1

l = int(input())
changes = [list(map(str, input().split())) for _ in range(l)]

snakes = []
a, b = 1, 1

xy = []
while True :
