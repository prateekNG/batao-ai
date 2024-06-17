
## Coding Questions for Javascript Summative Assessment:

**1. Prime Number Checker:**

**Problem Statement:** 
You are given a list of 5 numbers. Your task is to write a program that checks if all the numbers in the list are prime numbers. A prime number is a whole number greater than 1 that is only divisible by 1 and itself (For example, 2, 3, 5, 7, 11 are prime numbers).  

**Input Format:** 
The program should take 5 numbers as input, one by one.

**Output Format:** 
* If all the numbers are prime, print "All prime".
* If any of the numbers are not prime, print "Not all prime".

**Test Cases:**

* **Input:** 2, 3, 5, 7, 11
   **Output:** All prime
* **Input:** 1, 2, 3, 4, 5
   **Output:** Not all prime
* **Input:** 17, 19, 23, 29, 31
   **Output:** All prime 
* **Input:** 7, 9, 11, 13, 15
   **Output:** Not all prime

**2. Longest Strictly Increasing Chain:**

**Problem Statement:** 
You are given a sequence of numbers representing the heights of people standing in a queue. Your task is to find the length of the longest section of the queue where the heights are **strictly** increasing (each number is greater than the one before it).

**Input Format:** 
* First, the program should take an integer 'n' as input, representing the total number of people in the queue.
* Then, it should take 'n' numbers as input, one by one, representing the height of each person. 

**Output Format:**  
Print the length of the longest strictly increasing sequence of heights.

**Test Cases:**

* **Input:** n = 8, Heights = 1, 2, 3, 2, 3, 4, 5, 1
   **Output:** 4 (The longest increasing sequence is 2, 3, 4, 5)
* **Input:** n = 5, Heights = 5, 4, 3, 2, 1
   **Output:** 1 (The longest increasing sequence is any single number, as the heights are decreasing)
* **Input:** n = 6, Heights = 1, 3, 5, 7, 9, 11
   **Output:** 6 (The entire sequence is strictly increasing)
* **Input:** n = 7, Heights = 2, 2, 3, 4, 4, 5, 6
   **Output:** 4 (The longest increasing sequence is 2, 3, 4, 5)

**Explanation:** 
A sequence is strictly increasing if each number is greater than the one before it. For example, the sequence 1, 2, 3, 4 is strictly increasing, but the sequence 1, 2, 2, 3 is not, because 2 is not greater than 2.

**3. Splitting the Treasure:**

**Problem Statement:** 
You and your friend have found a treasure chest filled with gold coins! The coins are lined up in a row, and each coin has a different value. You want to split the coins fairly, so the total value of the coins you get is equal to the total value of the coins your friend gets.  

**Input Format:**
* First, the program should take an integer 'n' as input, representing the total number of coins in the treasure chest.
* Then, it should take 'n' numbers as input, one by one, representing the value of each coin.

**Output Format:**
* If the coins can be split equally, print "Can be split".
* If it's not possible to split the coins equally, print "Cannot be split".

**Test Cases:**

* **Input:** n = 4, Values = 1, 2, 3, 3
   **Output:** Can be split (Possible split: You get {1, 3}, Friend gets {2, 3})
* **Input:** n = 3, Values = 1, 2, 4
   **Output:** Cannot be split
* **Input:** n = 6, Values = 5, 2, 7, 4, 1, 6
   **Output:** Can be split (Possible split: You get {5, 2, 1}, Friend gets {7, 4, 6})
* **Input:** n = 5, Values = 10, 5, 15, 20, 25
   **Output:** Can be split (Possible split: You get {10, 15, 25}, Friend gets {5, 20}) 

**4. Rotating the Soldiers:**

**Problem Statement:** 
Imagine a group of soldiers standing in a line. You are the commander, and you want to shift the entire line 'k' positions to the right.  The soldiers at the end of the line will move to the beginning.

**Input Format:**  
* First, the program should take an integer 'n' as input, representing the total number of soldiers.
* Then, it should take 'n' numbers as input, one by one, representing the initial order of the soldiers.
* Finally, the program should take an integer 'k' as input, representing the number of positions to rotate the line to the right.

**Output Format:** Print the new order of the soldiers after rotating the line 'k' positions to the right.

**Test Cases:**

* **Input:** n = 5, Initial Order = 1, 2, 3, 4, 5, k = 2
   **Output:** 4, 5, 1, 2, 3 
* **Input:** n = 5, Initial Order = 10, 20, 30, 40, 50, k = 3
   **Output:** 30, 40, 50, 10, 20
* **Input:** n = 7, Initial Order = 1, 2, 3, 4, 5, 6, 7, k = 5
   **Output:** 3, 4, 5, 6, 7, 1, 2
* **Input:** n = 4, Initial Order = 10, 20, 30, 40, k = 1
   **Output:** 40, 10, 20, 30

**5. Finding the Connected Group:**

**Problem Statement:** 
Imagine you have a group of people standing in a line, and each person has a different colored hat. You need to check if there's a section in the line where people are standing with hats of consecutive colors, with a minimum length of 'm'. For example, if you see people with Red, Green, and Blue hats standing next to each other, that's a section with consecutive colors. 

**Input Format:** 
* First, the program should take an integer 'n' as input, representing the total number of people in the line.
* Then, it should take 'n' numbers as input, one by one, representing the color of each person's hat (use numbers to represent colors, e.g., 1 for red, 2 for green, 3 for blue).
* Finally, it should take an integer 'm' as input, representing the minimum length of consecutive colors to check for.

**Output Format:** 
* If you find a section with consecutive hat colors with a length of at least 'm', print "Contains consecutive subsequence".
* If there's no such section, print "No consecutive subsequence".

**Test Cases:**

* **Input:** n = 5, Hat Colors = 1, 2, 3, 4, 5, m = 3
   **Output:** Contains consecutive subsequence (1, 2, 3)
* **Input:** n = 4, Hat Colors = 1, 2, 3, 4, m = 2
   **Output:** Contains consecutive subsequence (1, 2, 3)
* **Input:** n = 4, Hat Colors = 1, 2, 3, 4, m = 4
   **Output:** No consecutive subsequence
* **Input:** n = 6, Hat Colors = 1, 2, 3, 1, 2, 3, m = 3
   **Output:** Contains consecutive subsequence (1, 2, 3)
* **Input:** n = 5, Hat Colors = 1, 1, 2, 2, 3, m = 3
   **Output:** No consecutive subsequence

**Explanation:**
This problem focuses on finding a sequence of consecutive numbers, where each number is 1 greater than the previous one, with a minimum length of 'm'.  For example, if 'm' is 3, we need at least 3 consecutive numbers increasing by 1. 
