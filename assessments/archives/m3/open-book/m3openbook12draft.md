## **Open book Exam [2 hours; 10 + 20 + 20 marks]**

1.  **Electricity Bill Calculation**

    **Problem Statement:**

    Write a program that takes an integer representing the number of units consumed and calculates the total electricity bill based on the following slab rates:

    -   For the first 50 units: ₹3 per unit
    -   For the next 100 units (51-150): ₹5 per unit
    -   For the next 100 units (151-250): ₹8 per unit
    -   For units above 250: ₹10 per unit

    If the unit count is negative, print "Invalid unit count".

    **Input:**

    An integer representing the number of units consumed.

    **Output:**

    The total electricity bill or "Invalid unit count" if the input is negative.

    **Testcase 1:**

    **Input:**

    30

    **Output:**

    90

    **Testcase 2:**

    **Input:**

    150

    **Output:**

    650

    **Testcase 3:**

    **Input:**

    -5

    **Output:**

    Invalid unit count

    **Testcase 4:**

    **Input:**

    300

    **Output:**

    2050

2.  **Sum of Squares of Digits**

    **Problem Statement:**

    Write a program that takes a positive integer as input and calculates the sum of the squares of its digits. If the input is not positive, print "Invalid input".

    **Input:**

    A positive integer.

    **Output:**

    The sum of the squares of the digits of the input integer or "Invalid input" if the input is not positive.

    **Testcase 1:**

    **Input:**

    123

    **Output:**

    14

    **Testcase 2:**

    **Input:**

    99

    **Output:**

    162

    **Testcase 3:**

    **Input:**

    0

    **Output:**

    Invalid input

    **Testcase 4:**

    **Input:**

    456

    **Output:**

    77

3.  **Find the Longest Plateau**

    **Problem Statement:**

    Write a program that takes an array of integers and finds the length of the longest plateau. A plateau is defined as a contiguous subarray where all elements are the same and it is the highest value in the array up to that point. If there are multiple plateaus of the same length, consider the first one encountered. If there is no plateau, output 0.

    **Input:**

    An array of integers.

    **Output:**

    The length of the longest plateau in the array.

    **Testcase 1:**

    **Input:**

    \[1, 2, 2, 3, 3, 3, 2, 2]

    **Output:**

    3

    **Testcase 2:**

    **Input:**

    \[5, 5, 5, 3, 3, 4, 4, 4, 4]

    **Output:**

    4

    **Testcase 3:**

    **Input:**

    \[1]

    **Output:**

    1

    **Testcase 4:**

    **Input:**

    \[]

    **Output:**

    0
