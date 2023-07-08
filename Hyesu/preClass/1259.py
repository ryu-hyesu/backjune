arr = []
flag = 1

arr = list(map(str, input().split())) 
print(arr)

for num in arr:
    sizeStr = len(num)
    flag = 0
    
    for i in range(0,sizeStr):
        if (num[i] != num[sizeStr - i]):
            flag = 0
            break

    if (flag == 1):
        print("Yes")
    else:
        print("NO")
