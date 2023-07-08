#사과 담기 게임
n, m = map(int, input().split())
N = int(input())

apples = []
for _ in range(N) :
    apples.append(int(input()))

count = 0
# 바구니의 처음 위치
i = 1
j = m

for apple in apples :
	# apple은 사과의 위치
    while apple < i or apple > j :
      # apple이 바구니의 왼쪽 끝보다 작다면 
        if apple < i :
            count += 1

            i -= 1
            j -= 1
        # apple이 바구니의 오른쪽 끝보다 크다면
        elif apple > j :
            count += 1
            
            i += 1
            j += 1

print(count)


