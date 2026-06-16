import msvcrt
c=msvcrt.getch().decode("utf-8")
n=int(input())
if c==122:
    c=96+n
    print(c)
else:
    print(c+n)
