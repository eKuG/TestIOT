a=10
b=2
sum = a+b
result = sum*3
print(result)

read_five_times = "No"
count = 0
while read_five_times == "No":
    print ("Reading workshop..")
    count = count + 1
    if(count == 5):
        read_five_times = "Yes"

print ("Good Job ! You understood the workshop.")

primes = [2,3,5,7]
for num in primes:
	print(num)
print("Outside the for loop")

import random
lucky_number = random.random()
print(lucky_number)
