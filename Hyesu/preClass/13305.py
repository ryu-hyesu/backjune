# 주유소
#주유소
n = int(input())
length = list(map(int, input().split()))
price = list(map(int, input().split()))

min_oile = price[0]
result = min_oile * length[0]

for i in range(1, n - 1) :
    min_oile = min(min_oile, price[i])
    result += min_oile * length[i]

print(result)