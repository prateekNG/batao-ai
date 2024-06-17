Here are 5 moderately difficult coding problems suitable for students who have learned flowcharting and basic JavaScript:

## Problem 1: Ticket Price Calculator

**Problem Statement:** A movie theatre has different ticket prices based on age.  Children under 5 get in free. Children between 5 and 12 pay Rs.50. Everyone else pays Rs.100. Write a program to calculate the total cost for a family's tickets.

**Input:** An array containing the ages of each family member.

**Output:** The total cost of tickets for the family.

**Sample Test Cases:**

| Input Array | Output | Explanation |
|---|---|---|
|  [30, 32, 8, 3] | 350 | Two adults (30, 32) pay Rs.100 each. One child (8) pays Rs.50. The toddler (3) is free. <br> Total cost: 100 + 100 + 50 = 250 |
| [4, 10, 8, 45] | 200 | One adult (45) pays Rs.100. Two children (10, 8) pay Rs.50 each. The young child (4) is free. <br> Total cost: 100 + 50 + 50 = 200 | 

## Problem 2:  Lucky Draw Winner

**Problem Statement:** In a lucky draw, a person wins a prize if the sum of the digits of their lucky number is divisible by 3.  Write a program to determine if a person is a winner.

**Input:** A positive integer representing the lucky number.

**Output:**  "Winner!" if the person wins, "Try again!" if they don't.

**Sample Test Cases:**

| Input | Output | Explanation |
|---|---|---|
| 123 | Winner! | 1 + 2 + 3 = 6, which is divisible by 3. |
| 74  | Try again! | 7 + 4 = 11, which is not divisible by 3. |
| 9021 | Winner! | 9 + 0 + 2 + 1 = 12, which is divisible by 3. |


## Problem 3:  Alternating Sum

**Problem Statement:** Given an array of numbers, calculate the alternating sum, where you alternately add and subtract each element.

**Input:** An array of numbers.

**Output:** The alternating sum.

**Sample Test Cases:**

| Input Array | Output | Explanation |
|---|---|---|
|  [1, 2, 3, 4, 5] | 3 | 1 - 2 + 3 - 4 + 5 = 3 |
| [10, 5, 2, 8, 3] | 12 | 10 - 5 + 2 - 8 + 3 = 2 | 


## Problem 4:  Stock Profit Calculator

**Problem Statement:**  You are given an array representing the daily prices of a stock.  You can buy the stock once and sell it once on a later day.  Write a program to find the maximum profit you can make. 

**Input:** An array of numbers representing the daily stock prices.

**Output:** The maximum profit you can achieve.

**Sample Test Cases:**

| Input Array | Output | Explanation |
|---|---|---|
| [7, 1, 5, 3, 6, 4] | 5 | Buy on day 2 (price 1) and sell on day 5 (price 6) for a profit of 5. |
| [10, 9, 8, 7, 6] | 0 | The price keeps dropping, so you cannot make a profit. |


## Problem 5:  Average of Passing Scores

**Problem Statement:**  A teacher wants to calculate the average score of students who passed an exam. Students need a score of 40 or above to pass. Write a program to calculate this average.

**Input:**  An array containing the scores of each student.

**Output:** The average score of students who passed the exam.

**Sample Test Cases:**

| Input Array | Output | Explanation |
|---|---|---|
| [50, 30, 60, 80, 20] | 65 | The passing scores are 50, 60, and 80.  Their average is (50+60+80)/3 = 65. |
| [35, 45, 70, 38, 90] | 60.75 | The passing scores are 45, 70 and 90.  Their average is (45+70+90)/3 = 60.75. | 
