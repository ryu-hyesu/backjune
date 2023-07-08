#폴리오미노

# 데이터 받기
data = list(input())

# 담을 변수 초기화
count = 0
result = ''
isMinus = False

# 순서대로 값을 비교한다.
for i in range(0, len(data)) :
    if data[i] == 'X' :
        count += 1
    if data[i] == '.' or i == (len(data) - 1):
        if count % 2 == 0 :
            result += 'AAAA' * (count // 4)
            result += 'B' * (count % 4)
        else :
            result = -1
            break

        if data[i] == '.': 
            result += '.'
        count = 0

print(result)
