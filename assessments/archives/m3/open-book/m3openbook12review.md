<!-----



Conversion time: 0.462 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β36
* Tue Jun 11 2024 20:57:54 GMT-0700 (PDT)
* Source doc: Copy of Module 3- Assessment 10
----->


## **Open book Exam [2 hours; 10 + 20 + 20 marks]**



1. **Electricity Bill Calculation**

    Write a program that takes an integer representing the number of units consumed and calculates the total electricity bill based on the following slab rates:


    For the first 50 units: ₹3 per unit


    For the next 100 units (51-150): ₹5 per unit


    For the next 100 units (151-250): ₹8 per unit


    For units above 250: ₹10 per unit


    **Input:**


    An integer representing the number of units consumed.


    **Output:**


    An integer representing the total electricity bill.


    **Testcase 1:**


    Input:


    30


    Output:


    90


    _Explanation:_


    _The first 50 units are charged at ₹3 per unit, so 30 units cost 30 * 3 = ₹90_


    **Testcase 2:**


    Input:


    150


    Output:


    650


    _Explanation:_


    _First 50 units: 50 * 3 = ₹150_


    _Next 100 units: 100 * 5 = ₹500_


    _Total: 150 + 500 = ₹650._


    **Testcase 3:**


    Input:


    300


    Output:


    1950


    _Explanation:_


    _First 50 units: 50 * 3 = ₹150_


    _Next 100 units: 100 * 5 = ₹500_


    _Next 100 units: 100 * 8 = ₹800_


    _Remaining 50 units: 50 * 10 = ₹500_


    _Total: 150 + 500 + 800 + 500 = ₹1950_

2. **Sum of Squares of Digits**

    Write a program that takes a positive integer as input and calculates the sum of the squares of its digits.


    **Input:**


    A positive integer.


    **Output:**


    The sum of the squares of the digits of the input integer.


    Testcase 1:


    Input:


    123


    Output:


    14


    _Explanation: 1² + 2² + 3² = 1 + 4 + 9 = 14_


    Testcase 2:


    Input:


    99


    Output:


    162


    _Explanation: 9² + 9² = 81 + 81 = 162._


    Testcase 3:


    Input:


    0


    Output:


    0


    Testcase 4:


    Input:


    456


    Output:


    77


    _Explanation: 4² + 5² + 6² = 16 + 25 + 36 = 77. _

3. **Longest Run of Same Number**

    Imagine you have a list of numbers. You want to find out how long the longest run of the same number is.


    For example, in the list [1, 2, 2, 3, 3, 3, 2, 2], the longest run of the same number is 3 (because the number 3 repeats three times in a row).


    **Input:**


    A list of numbers.


    **Output:**


    The length of the longest run of the same number in the list.


    **Testcase 1:**


    Input:


    [1, 2, 2, 3, 3, 3, 3, 2, 2]


    Output:


    4


    _Explanation: The longest run is the four consecutive 3s._


    **Testcase 2:**


    Input:


    [5, 5, 5, 3, 3, 4, 4, 4]


    Output:


    3


    _Explanation: Both 5 and 5 have the longest run of three each._


    **Testcase 3:**


    Input:


    [1]


    Output:


    1
