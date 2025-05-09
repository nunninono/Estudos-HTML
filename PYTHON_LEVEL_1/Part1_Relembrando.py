# STRINGS
print("=========== Strings =========== ")

mystring = "abcdefgh"
# mystring[2] = 'd'  Não da pra mudar um caractere específico assim

print(mystring[1])     # -> 'b'
print(mystring[:1])     # -> 'a'
print(mystring[1:])     # -> 'bcdefgh'
print(mystring[1:5])     # -> 'bcde'  pega o do meio
print(mystring[::2])     # -> 'aceg'  pula de 2 em 2

upper = mystring.upper()   # CAPS  -> 'ABCDEFG'
lower = mystring.lower()   # sem CAPS  -> 'abcdefgh'
capitalizer = mystring.capitalize()    # So a primeira maiuscula   -> 'Abcdefgh'

mystring2 = 'hello world'

split = mystring2.split()   # Separa no espaço   -> ['hello', 'world']
split = mystring2.split('o')   # Separa no espaço   -> ['hell', 'w', 'rld']

# Print formatadado
nome = "João"
idade = 30
print(f"Meu nome é {nome} e tenho {idade} anos.")

print("=================================\n")


# LISTS
print("=========== Lists ===========")

# mylist = [1, 2, 3]
mylist = ['stringasdasda', 1, 2, 3, 23.2, True, 'asdafas', [1, 2, 3]]

print(mylist)
print(len(mylist))  # numero de elementos

# mylist[2] = 'd'  Listas sim podem ser alteradas dessa forma
mylist.append("NEW ITEM")   # Adiciona sempre como um item seguinte na lista
print(mylist)

newlist = ['NEW', 'LIST']
mylist.append(newlist)   # Lista dentro de lista
mylist.extend(newlist)    # Incorpora uma lista na outra
print(mylist)

reversedList = mylist.reverse()  # de trás pra frente
item = mylist.pop()   # remove um item da lista (se nao especificar vai ser sempre o primeiro)
print(item)

numbers = [1, 2, 23, 5, 9, 7, 43,]    # Ordena os numeros em ordem crescente
numbers.sort()
print(numbers)

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
first_col = [row[0] for row in matrix]
print(first_col)

print("=============================\n")


# DICTIONARIES
print("======= Dictionaries =======")

my_stuff = {'key1':'value', 'key2':'value2', 'key3':{'123':[1, 2, 3, 'grabMe']}}
print(my_stuff['key1'])
print(my_stuff['key3']['123'][3])  # printando o grabMe
print(my_stuff['key3']['123'][3].upper())  # Posso usar o .upper() aqui

my_stuff2 = {'lunch':'pizza', 'bfast':'eggs'}
print(my_stuff2['lunch'])

my_stuff2['lunch'] = 'burger'   # Mudar elemento
print(my_stuff2['lunch'])

my_stuff2['dinner'] = 'pasta'   #Adicionar nova key
print(my_stuff2)

print("=============================\n")

# Tuples and Sets
print("====== Tuples and Sets ======")

# Tuples
t = (1, 2, 3)
print(t[0])

t = ('a', True, 123)
print(t)

# Tuplas nao suportam esse tipo de operação, é preciso mudar para uma lista inves disso
# t[0] = 'NEW'
# print(t)

# Sets
x = set()

x.add(1)
x.add(2)
x.add(0.1)
x.add(4)
x.add(4)
x.add(4)

# Aceita apenas itens unicos, mesmo que tente iserir repetidas vezes o mesmo valor
print(x)

# Exemplo
converted = set([1,1,1,1,2,2,2,2,3,3,3,3])
print(converted)

print("=============================")