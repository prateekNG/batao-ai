Module 4 Open Book Assessment 

(2 hours, 20+20+30+30 marks)

You can visit only the official JavaScript documentation during the test [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript).


## Problem 1: The Curious Case of the Collatz Sequence (20 marks)

The Collatz sequence is a fascinating mathematical concept that involves repeatedly applying a simple rule to a number until it reaches 1. Here's a breakdown of the rules and the test cases to help you grasp the problem:

****

The Rules:

1. Start with a positive integer (your input).

2. If the number is even, divide it by 2.

3. If the number is odd, multiply it by 3 and add 1.

4. Repeat steps 2 and 3 until you reach 1.

****

Your task is to write a JavaScript function called _collatzLength_ that takes a positive integer as input and returns the number of steps it takes to reach 1 following the Collatz sequence rules.

****

For example, if you start with the number 3, it would take 7 steps to reach 1: 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1. So, collatzLength(3) should return 7.

****

**_Input Format_**: A single positive integer.

**_Output Format_**: A single integer representing the number of steps in the Collatz sequence.

****

_Example Test Cases:_

_Input:_ 1_Output:_ 0_Explanation: 1 is already at 1 (0 steps)._

****

_Input:_ 3

_Output:_ 7

_Explanation:_

- _Step 1: 3 is odd, so we multiply by 3 and add 1 (3 \* 3 + 1 = 10)._

- _Step 2: 10 is even, so we divide by 2 (10 / 2 = 5)._

- _Step 3: 5 is odd, so we multiply by 3 and add 1 (5 \* 3 + 1 = 16)._

- _Step 4: 16 is even, so we divide by 2 (16 / 2 = 8)._

- _Step 5: 8 is even, so we divide by 2 (8 / 2 = 4)._

- _Step 6: 4 is even, so we divide by 2 (4 / 2 = 2)._

- _Step 7: 2 is even, so we divide by 2 (2 / 2 = 1)._

- _It took 7 steps to reach 1._

****

_Input:_ 6

_Output:_ 8

_Explanation:_

- _Step 1: 6 is even, so we divide by 2 (6 / 2 = 3)._

- _Step 2: 3 is odd, so we multiply by 3 and add 1 (3 \* 3 + 1 = 10)._

- _Step 3: 10 is even, so we divide by 2 (10 / 2 = 5)._

- _Step 4: 5 is odd, so we multiply by 3 and add 1 (5 \* 3 + 1 = 16)._

- _Step 5: 16 is even, so we divide by 2 (16 / 2 = 8)._

- _Step 6: 8 is even, so we divide by 2 (8 / 2 = 4)._

- _Step 7: 4 is even, so we divide by 2 (4 / 2 = 2)._

- _Step 8: 2 is even, so we divide by 2 (2 / 2 = 1)._

- _It took 8 steps to reach 1._


## Problem 2: Contact List Formatter (20 marks)

You are working on a contact management application and need to format the contact list for display. Each contact is represented as a string in the format "FirstName LastName,CountryCode-PhoneNumber". You need to write a JavaScript function named _formatContactList_ that takes an array of contact strings, splits them into first name, last name, country code, and phone number, and then reformats them into a different string format: "PhoneNumber: LastName FirstName (Country)".

****

- If the country code is "91", remove the country code and append "(India)".

- If the country code is not "91", keep the country code and append "(NRI)".

****

**_Input Format_**: An array of strings, where each string represents a contact in the format "FirstName LastName,CountryCode-PhoneNumber". (Note that there’s no space between the last name and phone number)

**_Output Format_**: A new array of strings, where each string represents a contact in the format "PhoneNumber: LastName FirstName (Country)". (Note that there’s a space between the first name, last name, and (country))

****

_Example Test Cases:_

_Input:_ \["Raj Malhotra,91-9876543210", "Simran Singh,1-1234567890"]

_Output:_ \["9876543210: Malhotra Raj (India)", "1-1234567890: Singh Simran (NRI)"]

_Explanation:_

- _For "Raj Malhotra,91-9876543210", the country code "91" indicates India. The country code is removed, and the output is "9876543210: Malhotra Raj (India)"._

- _For "Simran Singh,1-1234567890", the country code "1" does not indicate India. The country code is kept, and the output is "1-1234567890: Singh Simran (NRI)"._

****

_Input:_ \["Anita Desai,44-9988776655"]

_Output:_ \["44-9988776655: Desai Anita (NRI)"]

_Explanation: For "Anita Desai,44-9988776655", the country code "44" does not indicate India. The country code is kept, and the output is "44-9988776655: Desai Anita (NRI)"._

****

_Input: \[]_

_Expected Output: \[]_

_Explanation: An empty input array should return an empty output array._


## Problem 3: Updating Your Online Shopping Cart (30 marks)

Imagine you are building an online store in India. A key part of any online store is the shopping cart.

****

You need to write a JavaScript function called _updateCartQuantity_. This function should take your cart (an array of items) and update the quantity of an item as per the following: 

- If the item is not in the cart, add it. 

- If the new quantity is 0, remove the item from the cart. 

- The function should modify the original array directly (in-place).

****

Each item in the cart is an object with three properties: id (a unique number identifying the item) and quantity (how many of that item are in the cart).

****

**_Input Format_**:

- cartItems: An array of objects, where each object represents an item and has 'id', 'name', and 'quantity' properties.

- itemId: The ID of the item to update.

- newQuantity: The new quantity for the item.

****

**_Output Format_**:  The original cartItems array is modified in place.

****

**_Example:_**

****

    const cartItems = [
      { id: 10, quantity: 2 },
      { id: 20, quantity: 1 },
    ];

****

    console.log("Cart Before:", cartItems); // Cart Before: [{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }]

****

    // Call the function with test case 1
    updateCartQuantity(cartItems, 10, 3);

****

    console.log("Cart After:", cartItems); // Cart After: [{ id: 10, quantity: 3 }, { id: 20, quantity: 1 }]

****

_Example Test Cases:_

_Test Case 1:_

_Input:_ 

cartItems = \[{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }]

itemId = 10

newQuantity = 3

_Output:_ 

cartItems = \[{ id: 10, quantity: 3 }, { id: 20, quantity: 1 }]

_Explanation: Updated the quantity of the item with id: 10._

****

_Test Case 2:_

_Input:_ 

cartItems = const cartItems = \[{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }];

itemId = 30;

newQuantity = 5;

_Output:_ 

cartItems = \[{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }, { id: 30, quantity: 5 }]

_Explanation: Added a new item with id: 30._

****

_Test Case 3:_

_Input:_ 

cartItems = \[{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }];

itemId = 20;

newQuantity = 0;

_Output:_ 

cartItems = \[{ id: 10, quantity: 2 }]

_Explanation: Removed the item with id: 20 because the new quantity is 0._


## Question 4: User Data Management - Removing Duplicates (30 marks)

Imagine you are working on a system for an online marketplace in India. This system stores user information as a list of users. Sometimes, due to errors, there might be multiple entries for the same user. Your job is to write a program that removes these duplicate entries, making sure to keep only the _first time_ a user appears in the list.

****

We use each user's email address to identify them. Even if two users have the same name, age, or city, if they have the same email, we consider them to be the same user.

****

Write a JavaScript function called _removeDuplicateUsers_ that takes a list of user objects as input and returns a new list containing only unique users, keeping the first occurrence of each user.

****

**_Input Format_**: An array of objects, where each object represents a user and has the following properties:

- name: The user's name (string). (e.g., "Rahul", "Priya", "Amit")

- email: The user's email address (string). (e.g., "rahul\@example.com", "priya\@example.com", "amit\@example.com")

- age: The user's age (number).

- city: The user's city of residence (string). (e.g., "Mumbai", "Bangalore", "Delhi")

****

**_Output Format_**: A new list of user objects, ensuring that each user appears only once based on their unique email address. The order of users in the output list should be the same as the original list.

****

_Note: You are encouraged to use your knowledge of array methods. Choose the most appropriate JavaScript methods and techniques to solve this problem._

****

_Expected Test Cases:_

_Test Case 1:_

_Input:_

\[

  { name: "Rahul", email: "rahul\@example.com", age: 35, city: "Bangalore" },

  { name: "Priya", email: "priya\@example.com", age: 28, city: "Mumbai" },

  { name: "Rahul", email: "rahul\@example.com", age: 30, city: "Chennai" }, // Duplicate email, keep the first

  { name: "Amit", email: "amit\@example.com", age: 26, city: "Delhi" },

  { name: "Priya", email: "priya\@example.com", age: 28, city: "Delhi" } // Duplicate email, keep the first

]

_Output:_

\[

  { name: "Rahul", email: "rahul\@example.com", age: 35, city: "Bangalore" },

  { name: "Priya", email: "priya\@example.com", age: 28, city: "Mumbai" },

  { name: "Amit", email: "amit\@example.com", age: 26, city: "Delhi" }

]

_Explanation: Rahul and Priya have duplicate emails. We keep the first occurrence of each in the output list._

****

_Test Case 2:_

_Input:_

\[

  { name: "Rahul", email: "rahul\@example.com", age: 35, city: "Bangalore" },

  { name: "Rahul", email: "rahul.kapoor\@example.com", age: 35, city: "Bangalore" }, // Different email, unique user

]

_Output:_

\[

  { name: "Rahul", email: "rahul\@example.com", age: 35, city: "Bangalore" },

  { name: "Rahul", email: "rahul.kapoor\@example.com", age: 35, city: "Bangalore" }

]

_Explanation: Both users have the same name, but different emails, so both are considered unique._

****

_Test Case 3:_

_Input:_

\[

  { name: "Minal", email: "iamawesome\@example.com", age: 21, city: "Mumbai" },

  { name: "Meenal", email: "iamawesome\@example.com", age: 21, city: "Mumbai" } //Duplicate email, keeping the first one

]

_Output:_

\[

  { name: "Minal", email: "iamawesome\@example.com", age: 21, city: "Mumbai" }

]

_Explanation: Removed the duplicate user, keeping the first time the email appears in the list._

__
