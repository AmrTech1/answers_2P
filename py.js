// ============================================
//  py.js — إجابات البايثون
//  الإجابة بتتكتب بين backticks ` ` عشان الكود يتكتب على كذا سطر.
// ============================================

const PY_DATA = {
  chapters: [
    {
      name: "الفصل 1",
      questions: [
        {
          q: "السؤال 1",
          a: `print("Hello")`
        },
        {
          q: "السؤال 2",
          a: `print("Good morning")`
        },
        {
          q: "السؤال 3",
          a: `print("programming")`
        },
        {
          q: "السؤال 4",
          a: `print("hello")`
        },
        {
          q: "السؤال 5",
          a: `#Write a comment here`
        },
        {
          q: "السؤال 6",
          a: `print("Hello")
print("My name is")
#print("Riki")
print("Cody")`
        }
      ]
    },
    {
      name: "الفصل 2",
      questions: [
        {
          q: "السؤال 1",
          a: `print(50 + 100)`
        },
        {
          q: "السؤال 2",
          a: `/`
        },
        {
          q: "السؤال 3",
          a: `print(19+40)`
        },
        {
          q: "السؤال 4",
          a: `print(7-2)`
        },
        {
          q: "السؤال 5",
          a: `print(15/5)`
        },
        {
          q: "السؤال 6",
          a: `print("Today is the 17th. 7 days ago was the " + str(17 - 7) + "th.")`
        },
        {
          q: "السؤال 7",
          a: `print("The answer is " + str (2 * 5))`
        },
        {
          q: "السؤال 8",
          a: `نوع السلسلة النصية`
        },
        {
          q: "السؤال 9",
          a: `print(type("1"))`
        }
      ]
    },
    {
      name: "الفصل 3",
      questions: [
        {
          q: "السؤال 1",
          a: `score = 0`
        },
        {
          q: "السؤال 2",
          a: `print(score)`
        },
        {
          q: "السؤال 3",
          a: `number = 0`
        },
        {
          q: "السؤال 4",
          a: `number = 0
number = 100`
        },
        {
          q: "السؤال 5",
          a: `number = 0
number = 10
print (number)`
        },
        {
          q: "السؤال 6",
          a: `number = 3
number = number + 10
print (number)`
        }
      ]
    },
    {
      name: "الفصل 4",
      questions: [
        {
          q: "السؤال 1",
          a: `print("Hello")`
        },
        {
          q: "السؤال 2",
          a: `print ("hello")`
        },
        {
          q: "السؤال 3",
          a: `#Leave this text
print("Make the first line a comment")`
        },
        {
          q: "السؤال 4",
          a: `print(5 + 7)`
        },
        {
          q: "السؤال 5",
          a: `*`
        },
        {
          q: "السؤال 6",
          a: `print("The answer is " + str (3 * 4))`
        },
        {
          q: "السؤال 7",
          a: `number = 0`
        },
        {
          q: "السؤال 8",
          a: `num = 5
print (num)`
        }
      ]
    },
    {
      name: "الفصل 5",
      questions: [
        {
          q: "السؤال 1",
          a: `if condition:
process`
        },
        {
          q: "السؤال 2",
          a: `num == 50`
        },
        {
          q: "السؤال 3",
          a: `num = 100
if num == 100:
   print("Correct")`
        },
        {
          q: "السؤال 4",
          a: `False`
        }
      ]
    },
    {
      name: "الفصل 6",
      questions: [
        {
          q: "السؤال 1",
          a: `if condition:
A
else:
B`
        },
        {
          q: "السؤال 2",
          a: `num = 5
if num == 10:
    print("Win")
else:
    print("No prize")`
        },
        {
          q: "السؤال 3",
          a: `num <= 80`
        },
        {
          q: "السؤال 4",
          a: `num > 30`
        },
        {
          q: "السؤال 5",
          a: `score >= 60`
        }
      ]
    },
    {
      name: "الفصل 7",
      questions: [
        {
          q: "السؤال 1",
          a: `if condition:
A
elif condition:
B`
        },
        {
          q: "السؤال 2",
          a: `num = 2
if num == 1:
    print("It's 1")
elif num == 2:
    print("It's 2")`
        },
        {
          q: "السؤال 3",
          a: `score = 82
if score == 100:
    print("Perfect score")
elif score >= 80:
    print("Pass")`
        },
        {
          q: "السؤال 4",
          a: `So close`
        },
        {
          q: "السؤال 5",
          a: `egg = 5
if egg == 0:
    print("Out of stock")
elif egg <= 3:
    print("Low stock")
else:
    print("In stock")`
        }
      ]
    },
    {
      name: "الفصل 8",
      questions: [
        {
          q: "السؤال 1",
          a: `num = 7
if num == 7:
    print ("Win")`
        },
        {
          q: "السؤال 2",
          a: `True`
        },
        {
          q: "السؤال 3",
          a: `score = 70
if score >= 60:
    print("Pass")
else:
    print("Fail")`
        },
        {
          q: "السؤال 4",
          a: `num < 20`
        },
        {
          q: "السؤال 5",
          a: `num = 100
if num == 100:
    print ("Win")
else:
    print ("No prize")`
        },
        {
          q: "السؤال 6",
          a: `Pass`
        },
        {
          q: "السؤال 7",
          a: `num = 4
if num <= 3:
    print ("It's A")
elif num >= 6:
    print ("It's B")
else:
    print ("It's C")`
        }
      ]
    },
    {
      name: "الفصل 9",
      questions: [
        {
          q: "السؤال 1",
          a: `A and B`
        },
        {
          q: "السؤال 2",
          a: `A or B`
        },
        {
          q: "السؤال 3",
          a: `Regular price`
        },
        {
          q: "السؤال 4",
          a: `Python`
        },
        {
          q: "السؤال 5",
          a: `a >= 2 and b >= 3`
        }
      ]
    },
    {
      name: "الفصل 10",
      questions: [
        {
          q: "السؤال 1",
          a: `for`
        },
        {
          q: "السؤال 2",
          a: `i = i + 1`
        },
        {
          q: "السؤال 3",
          a: `for i in range(10):
الكود الخاص بك`
        },
        {
          q: "السؤال 4",
          a: `for i in range (5)    :
    print("Hello")`
        },
        {
          q: "السؤال 5",
          a: `for i in range(7):
    print ("Hello")`
        }
      ]
    },
    {
      name: "الفصل 11",
      questions: [
        {
          q: "السؤال 1",
          a: `A or B`
        },
        {
          q: "السؤال 2",
          a: `It's A`
        },
        {
          q: "السؤال 3",
          a: `i = i + 1`
        },
        {
          q: "السؤال 4",
          a: `for i in range(10):
العملية المحددة`
        },
        {
          q: "السؤال 5",
          a: `hello
hello`
        },
        {
          q: "السؤال 6",
          a: `for i in range(10):
    print ("Good morning")`
        },
        {
          q: "السؤال 7",
          a: `a = 4
b = 3
if a >= 2 and b >= 3:
    print("the condition is met")`
        },
        {
          q: "السؤال 8",
          a: `for i in range (3):
    print ("Hello")`
        }
      ]
    },
    {
      name: "الفصل 12",
      questions: [
        {
          q: "السؤال 1",
          a: `round(1.8)`
        },
        {
          q: "السؤال 2",
          a: `print(random.random())`
        },
        {
          q: "السؤال 3",
          a: `print(math.floor(10.5))`
        },
        {
          q: "السؤال 4",
          a: `import math
print(round(5.5))
print(math.floor(8.8))`
        },
        {
          q: "السؤال 5",
          a: `import random
if random.random() >= 0.5:
    print("A bright day")
else:
    print("Take it slow and do your best")`
        },
        {
          q: "السؤال 6",
          a: `print(math.floor(random.random() * 10));`
        }
      ]
    },
    {
      name: "الفصل 13",
      questions: [
        {
          q: "السؤال 1",
          a: `60`
        },
        {
          q: "السؤال 2",
          a: `def calc(num):
المعالجة`
        },
        {
          q: "السؤال 3",
          a: `15`
        },
        {
          q: "السؤال 4",
          a: `def calc(num):
    result = num * 5
    return result
print(calc(3))`
        },
        {
          q: "السؤال 5",
          a: `def calc(num):
    result = num * 7
    return result
print(calc(10))`
        }
      ]
    },
    {
      name: "الفصل 14",
      questions: [
        {
          q: "السؤال 1",
          a: `round(1.8)`
        },
        {
          q: "السؤال 2",
          a: `60`
        },
        {
          q: "السؤال 3",
          a: `print(random.random())`
        },
        {
          q: "السؤال 4",
          a: `12`
        },
        {
          q: "السؤال 5",
          a: `import math
import random
print(math.floor(random.random() * 10))`
        },
        {
          q: "السؤال 6",
          a: `def calc(num):
المعالجة`
        },
        {
          q: "السؤال 7",
          a: `def calc(num):
    result = num * 7
    return result
print(calc(10))`
        },
        {
          q: "السؤال 8",
          a: `def calc(num):
    result = num * 5
    return result
print(calc(3))`
        }
      ]
    },
    {
      name: "الفصل 15",
      questions: [
        {
          q: "السؤال 1",
          a: `num = [5, 10, 15]`
        },
        {
          q: "السؤال 2",
          a: `15`
        },
        {
          q: "السؤال 3",
          a: `num = [5, 10, 15, 20, 25]
print(num)`
        },
        {
          q: "السؤال 4",
          a: `6`
        },
        {
          q: "السؤال 5",
          a: `num = [5, 10, 15, 20, 25]
print(len(num))`
        }
      ]
    },
    {
      name: "الفصل 16",
      questions: [
        {
          q: "السؤال 1",
          a: `import array
rank_array = array.array('i', [3, 1, 3, 2, 1])`
        },
        {
          q: "السؤال 2",
          a: `30`
        },
        {
          q: "السؤال 3",
          a: `import array

round_array = array.array('i', [1, 2, 3, 4, 5])
print(round_array[1])
print(round_array[4])`
        },
        {
          q: "السؤال 4",
          a: `6`
        },
        {
          q: "السؤال 5",
          a: `[38 53 65]`
        }
      ]
    },
    {
      name: "الفصل 17",
      questions: [
        {
          q: "السؤال 1",
          a: `15`
        },
        {
          q: "السؤال 2",
          a: `num = [5, 10, 15, 20, 25]
print(num)`
        },
        {
          q: "السؤال 3",
          a: `6`
        },
        {
          q: "السؤال 4",
          a: `30`
        },
        {
          q: "السؤال 5",
          a: `import array
rank_array = array.array('i', [3, 1, 3, 2, 1])`
        },
        {
          q: "السؤال 6",
          a: `6`
        }
      ]
    },
    {
      name: "الفصل 18",
      questions: [
        {
          q: "السؤال 1",
          a: `ON`
        },
        {
          q: "السؤال 2",
          a: `<class 'bool'>`
        },
        {
          q: "السؤال 3",
          a: `str`
        },
        {
          q: "السؤال 4",
          a: `B`
        },
        {
          q: "السؤال 5",
          a: `ON`
        }
      ]
    },
    {
      name: "الفصل 19",
      questions: [
        {
          q: "السؤال 1",
          a: `import math
print(math.floor(4.7))`
        },
        {
          q: "السؤال 2",
          a: `5
6`
        },
        {
          q: "السؤال 3",
          a: `رقم من 0 إلى أقل من 1`
        },
        {
          q: "السؤال 4",
          a: `import math
import random
print(math.floor(random.random() * 10))`
        },
        {
          q: "السؤال 5",
          a: `import random
if random.random() >= 0.7 :
    print("Grand prize!")
else:
    print("Consolation prize")`
        }
      ]
    },
    {
      name: "الفصل 20",
      questions: [
        {
          q: "السؤال 1",
          a: `ON`
        },
        {
          q: "السؤال 2",
          a: `str`
        },
        {
          q: "السؤال 3",
          a: `<class 'bool'>`
        },
        {
          q: "السؤال 4",
          a: `import math
print(math.floor(4.7))`
        },
        {
          q: "السؤال 5",
          a: `import math
import random
print(math.floor(random.random() * 10))`
        },
        {
          q: "السؤال 6",
          a: `import random
if random.random() >= 0.7:
    print("Grand prize!")
else:
    print("Consolation prize")`
        }
      ]
    },
    {
      name: "الفصل 21",
      questions: [
        {
          q: "السؤال 1",
          a: `A = 5
B = 10
if A > B:
    print("A is bigger")
elif A < B:
    print("B is bigger")`
        },
        {
          q: "السؤال 2",
          a: `and`
        },
        {
          q: "السؤال 3",
          a: `math = 100
english = 100
if math == 100:
    print("Math is 100 points")
if english == 100:
    print("Math and English are 100 points")`
        },
        {
          q: "السؤال 4",
          a: `for i in range(7):
    print("Good morning")`
        },
        {
          q: "السؤال 5",
          a: `ينتج عنه خطأ`
        },
        {
          q: "السؤال 6",
          a: `00010`
        },
        {
          q: "السؤال 7",
          a: `i += 5`
        },
        {
          q: "السؤال 8",
          a: `def divide3(num):
    result = num / 3
    return result

print(divide3(12345))`
        },
        {
          q: "السؤال 9",
          a: `def motion()
البرنامج المراد تشغيله`
        },
        {
          q: "السؤال 10",
          a: `def mul(num1,num2):
 result = num1 * num2
 return result

print(mul(9,7))`
        }
      ]
    },
    {
      name: "الفصل 22",
      questions: [
        {
          q: "السؤال 1",
          a: `num = 1
for i in range(5):
    num = num * 7
print(num)`
        },
        {
          q: "السؤال 2",
          a: `1->2->3->4->5->6->7`
        },
        {
          q: "السؤال 3",
          a: `num = 5040
for i in range(1, 6):
    num = num / i
print(num)`
        },
        {
          q: "السؤال 4",
          a: `mark_list = [48, 55, 74, 85, 63, 57, 91]
print(mark_list[5])`
        },
        {
          q: "السؤال 5",
          a: `mark_list = [48, 55, 74, 85, 63, 57, 91]
print(len(mark_list))`
        },
        {
          q: "السؤال 6",
          a: `mark_list = [48, 55, 74, 85, 63, 57, 91]
for i in range(len(mark_list)):
    if mark_list[i] >= 85:
        print("85 or above")`
        }
      ]
    },
    {
      name: "الفصل 23",
      questions: [
        {
          q: "السؤال 1",
          a: `14`
        },
        {
          q: "السؤال 2",
          a: `8
11
14`
        },
        {
          q: "السؤال 3",
          a: `3
4
5`
        },
        {
          q: "السؤال 4",
          a: `point_list = [2, 5, 8, 11]
for point in point_list :
    print(point)`
        },
        {
          q: "السؤال 5",
          a: `word_list = ["Good morning", "Good night", "Hello"]
for word in word_list :
    print(word)`
        }
      ]
    },
    {
      name: "الفصل 24",
      questions: [
        {
          q: "السؤال 1",
          a: `8
11
14`
        },
        {
          q: "السؤال 2",
          a: `point_list = [2, 5, 8, 11]
for point in point_list:
    print(point)`
        },
        {
          q: "السؤال 3",
          a: `word_list =["good morning", "good night" , "hello"]
for word in word_list:
    print(word)`
        },
        {
          q: "السؤال 4",
          a: `100`
        },
        {
          q: "السؤال 5",
          a: `الوجهة هي مدينة الملاهي`
        },
        {
          q: "السؤال 6",
          a: `weather = "rainy"
time = "morning"
if weather == "rainy":
    if time == "morning":
        print("Let's go to the movie theater")
    elif time == "noon":
        print("Let's go to the library")
    else:
        print("Let's stay home")
else:
    print("Let's go for a walk")`
        }
      ]
    },
    {
      name: "الفصل 25",
      questions: [
        {
          q: "السؤال 1",
          a: `print(calculation3(3, 5, 10))`
        },
        {
          q: "السؤال 2",
          a: `def calculation3(a, b, c):
    result = a * b * c
    return result
num1 = calculation3(5, 10, 15)
print(num1)`
        },
        {
          q: "السؤال 3",
          a: `def calculation3(a, b, c):
    result = a * b * c
    return result
num1 = calculation3(5, 10, 15)
print(num1)
num2 = calculation3(4, 4, 4)
print(num2)`
        },
        {
          q: "السؤال 4",
          a: `print(min(num1, num2, num3))`
        },
        {
          q: "السؤال 5",
          a: `80
88
92`
        },
        {
          q: "السؤال 6",
          a: `score_list = [70, 80, 66, 88, 92]

for score in score_list:
    if score >= 80:
        print(score)`
        },
        {
          q: "السؤال 7",
          a: `إذا كان عمرك 12 سنة أو أكثر وكان طولك 140 سم أو أكثر، يمكنك الركوب بمفردك.`
        }
      ]
    }
  ]
};
