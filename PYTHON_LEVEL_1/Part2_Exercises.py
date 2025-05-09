print('= Problem 1 =\n')
s = 'django'

print(s[0])
print(s[5])
print(s[:4])
print(s[1:4])
print(s[4:])


print('\n= Problem 2 =\n')

l = [3, 7, [1, 4, 'hello']]
print(l)

l[2][2] = 'goodbye'
print(l)


print('\n= Problem 3 =\n')

d1 = {'simple_key':'hello'}

d2 = {'k1':{'k2':'hello'}}

d3 = {'k1':[{'nest_key':['this is deep', ['hello']]}]}

print(d1['simple_key'])
print(d2['k1']['k2'])
print(d3['k1'][0]['nest_key'][1][0])



print('\n= Problem 4 =\n')

mylist = [1, 1, 1, 1 ,1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]
print(mylist)
find = set(mylist)
print(find)

print('\n= Problem 5 =\n')

age = 4
name = 'Sammy'

print("Hello my dog's name is Sammy and he is 4 years old")

print(f"Hello my dog's name is {name} and he is {age} years old")