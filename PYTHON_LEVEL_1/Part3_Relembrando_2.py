# Estrutua do if, else e elif

if 1 < 2:
    print('First Block')
    if 20 < 3:
        print('Second Block')

if 1 == 1:
    if 1 < 2:
        print('hello')
    elif 20 == 20:
        print('elif ran')
    else:
        print('last')

# Estrutura de Loops

    # For normal
seq = [1, 2, 3, 4, 5, 6]
for items in seq:
    print(items)

    # For em chaves
d = {'Sam':1, 'Frank':2, 'Dan':3}
for key, num in d.items():
    print(f'{key}: {num}')

    # For em lista de tuplas
mypairs = [(1, 2), (3, 4), (5, 6)]
for (item1, item2) in mypairs:
    print(item1)
    print(item2)

    # Normal while
i = 1
while i < 5:
    print(f'i is: {i}')
    i += 1

    # Range
newList = list(range(0, 21, 2))  # inicio, fim, de quanto em quanto
print(newList)

# range é usado por ex em range(0, 100000000) para nao escrever todos os numeros

    # For com range
for item in range(0, 10):
    print(item)

x = [1, 2, 3, 4]
out = []

    # OPCAO 1
for item in x:
    out.append(item**2)

    # OPCAO 2
out = [item**2 for item in x]

print(x)
print(out)


# Funções

def addNum (num1, num2):
    return num1 + num2

result = addNum('5', '5')
print(result)
print(type(result))

def addNum2 (num1, num2):
    if type(num1) == type(num2) == type(10):
        return num1 + num2
    else:
        return ('Sorry, I need integers!')

result2 = addNum2(1, 3)
result3 = addNum2('1', '3')
print(result2)
print(result3)


# Como separar string

tweet = 'Go Sports! #Sports'
Result = tweet.split('#')[1]
Result2 = tweet.split('#')[0]
print(Result) 
print(Result2)


# Verificação boolean 

print('x' in [1, 2, 3, 4])
print('x' in [1, 2, 3, 4, 'x'])