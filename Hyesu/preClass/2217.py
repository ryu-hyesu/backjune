# 로프
n = int(input())

long = []
for _ in range(n) :
    long.append(int(input()))
long.sort()

max_value = 0

for k in range(1, n + 1) : # k : 1 ~ n
    max_value = max(max_value, long[-1] * k)
    del long[-1]

print(max_value)