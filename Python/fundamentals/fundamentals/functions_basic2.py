# 1. Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
def countdown(num):
    arr = []
    for i in range(num,-1,-1):
        arr.append(i)
    return arr
print(countdown(5))

# 2. Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
def printAndReturn(list):
    print(list[0])
    return list[1]
print(printAndReturn([1,2]))

# 3. First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def firstPlusLength(list):
    return list[0] + len(list)
print(firstPlusLength([1,2,3,4,5]))

# 4. Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
def valuesGreaterThanSecond(list):
    if len(list) < 2:
        return False
    arr = []
    for i in range(0,len(list)):
        if list[i] > list[1]:
            arr.append(list[i])
    print(len(arr))
    return arr
print(valuesGreaterThanSecond([5,2,3,2,1,4]))
print(valuesGreaterThanSecond([3]))

# 5. This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
def lengthAndValue(size,value):
    arr = []
    for i in range(0,size):
        arr.append(value)
    return arr
print(lengthAndValue(4,7))
print(lengthAndValue(6,2))