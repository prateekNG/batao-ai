Module 4 Open Book Assessment

(2 hours, 20+20+30+30 marks)

You can only visit the official JavaScript documentation during the assessment here.

Problem 1: The Curious Case of the Collatz Sequence (20 marks)
The Collatz sequence is a fascinating mathematical concept that involves repeatedly applying a simple rule to a number until it reaches 1. Here's a breakdown of the rules and the test cases to help you grasp the problem:

The Rules:

Start with a positive integer (your input).

If the number is even, divide it by 2.

If the number is odd, multiply it by 3 and add 1.

Repeat steps 2 and 3 until you reach 1.

Your task is to write a JavaScript function called collatzLength that takes a positive integer as input and returns the number of steps it takes to reach 1 following the Collatz sequence rules.

For example, if you start with the number 3, it would take 7 steps to reach 1: 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1. So, collatzLength(3) should return 7.

Function: collatzLength(n)

Input Format: A single positive integer.

Output Format: Return a single integer representing the number of steps in the Collatz sequence.

Example Test Cases:

Input: 1_Output:_ 0_Explanation: 1 is already at 1 (0 steps)._

Input: 3

Output: 7

Explanation:

Step 1: 3 is odd, so we multiply by 3 and add 1 (3 * 3 + 1 = 10).

Step 2: 10 is even, so we divide by 2 (10 / 2 = 5).

Step 3: 5 is odd, so we multiply by 3 and add 1 (5 * 3 + 1 = 16).

Step 4: 16 is even, so we divide by 2 (16 / 2 = 8).

Step 5: 8 is even, so we divide by 2 (8 / 2 = 4).

Step 6: 4 is even, so we divide by 2 (4 / 2 = 2).

Step 7: 2 is even, so we divide by 2 (2 / 2 = 1).

It took 7 steps to reach 1.

Input: 6

Output: 8

Explanation:

Step 1: 6 is even, so we divide by 2 (6 / 2 = 3).

Step 2: 3 is odd, so we multiply by 3 and add 1 (3 * 3 + 1 = 10).

Step 3: 10 is even, so we divide by 2 (10 / 2 = 5).

Step 4: 5 is odd, so we multiply by 3 and add 1 (5 * 3 + 1 = 16).

Step 5: 16 is even, so we divide by 2 (16 / 2 = 8).

Step 6: 8 is even, so we divide by 2 (8 / 2 = 4).

Step 7: 4 is even, so we divide by 2 (4 / 2 = 2).

Step 8: 2 is even, so we divide by 2 (2 / 2 = 1).

It took 8 steps to reach 1.

Problem 2: Contact List Formatter (20 marks)
You are working on a contact management application and need to format the contact list for display. Each contact is represented as a string in the format "FirstName LastName,CountryCode-PhoneNumber". You need to write a JavaScript function named formatContactList that takes an array of contact strings, splits them into first name, last name, country code, and phone number, and then reformats them into a different string format: "PhoneNumber: LastName FirstName (Country)".

If the country code is "91", remove the country code and append "(India)".

If the country code is not "91", keep the country code and append "(NRI)".

Function: formatContactList(contacts)

Input Format: An array of strings, where each string represents a contact in the format "FirstName LastName,CountryCode-PhoneNumber". (Note that there’s no space between the last name and phone number)

Output Format: Return a new array of strings, where each string represents a contact in the format "PhoneNumber: LastName FirstName (Country)". (Note that there’s a space between the first name, last name, and (country))

Example Test Cases:

Input: ["Raj Malhotra,91-9876543210", "Simran Singh,1-1234567890"]

Output: ["9876543210: Malhotra Raj (India)", "1-1234567890: Singh Simran (NRI)"]

Explanation:

For "Raj Malhotra,91-9876543210", the country code "91" indicates India. The country code is removed, and the output is "9876543210: Malhotra Raj (India)".

For "Simran Singh,1-1234567890", the country code "1" does not indicate India. The country code is kept, and the output is "1-1234567890: Singh Simran (NRI)".

Input: ["Anita Desai,44-9988776655"]

Output: ["44-9988776655: Desai Anita (NRI)"]

Explanation: For "Anita Desai,44-9988776655", the country code "44" does not indicate India. The country code is kept, and the output is "44-9988776655: Desai Anita (NRI)".

Input: []

Expected Output: []

Explanation: An empty input array should return an empty output array.

Problem 3: Updating Your Online Shopping Cart (30 marks)
Imagine you are building an online store in India. A key part of any online store is the shopping cart.

You need to write a JavaScript function called updateCartQuantity. This function should take your cart (an array of items) and update the quantity of an item as per the following:

If the item is not in the cart, add it.

If the new quantity is 0, remove the item from the cart.

The function should modify the original array directly (in-place).

Each item in the cart is an object with properties: id (a unique number identifying the item) and quantity (how many of that item are in the cart).

Function: updateCartQuantity(cartItems)

Input Format:

cartItems: An array of objects, where each object represents an item and has 'id', 'name', and 'quantity' properties.

itemId: The ID of the item to update.

newQuantity: The new quantity for the item.

Output Format:  Return the original cartItems array modified in place (directly).

Example Test Cases:

Test Case 1:

Input:

cartItems = [{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }]

itemId = 10

newQuantity = 3

Output:

[{ id: 10, quantity: 3 }, { id: 20, quantity: 1 }]

Explanation: Updated the quantity of the item with id: 10.

Test Case 2:

Input:

cartItems = const cartItems = [{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }];

itemId = 30;

newQuantity = 5;

Output:

cartItems = [{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }, { id: 30, quantity: 5 }]

Explanation: Added a new item with id: 30.

Test Case 3:

Input:

cartItems = [{ id: 10, quantity: 2 }, { id: 20, quantity: 1 }];

itemId = 20;

newQuantity = 0;

Output:

cartItems = [{ id: 10, quantity: 2 }]

Explanation: Removed the item with id: 20 because the new quantity is 0.

Problem 4: User Data Management - Removing Duplicates (30 marks)
Imagine you are working on a system for an online marketplace in India. This system stores user information as a list of users. Sometimes, due to errors, there might be multiple entries for the same user. Your job is to write a program that removes these duplicate entries, making sure to keep only the first time a user appears in the list.

We use each user's email address to identify them. Even if two users have the same name, age, or city, if they have the same email, we consider them to be the same user.

Write a JavaScript function called removeDuplicateUsers that takes a list of user objects as input and returns a new list containing only unique users, keeping the first occurrence of each user.

Function: removeDuplicateUsers(users)

Input Format: An array of objects, where each object represents a user and has the following properties:

name: The user's name (string). (e.g., "Rahul", "Priya", "Amit")

email: The user's email address (string). (e.g., "rahul@example.com", "priya@example.com", "amit@example.com")

age: The user's age (number).

city: The user's city of residence (string). (e.g., "Mumbai", "Bangalore", "Delhi")

Output Format: Returns a new list of user objects, ensuring that each user appears only once based on their unique email address. The order of users in the output list should be the same as the original list.

Note: You are encouraged to use your knowledge of array methods. Choose the most appropriate JavaScript methods and techniques to solve this problem.

Expected Test Cases:

Test Case 1:

Input:

[

{ name: "Rahul", email: "rahul@example.com", age: 35, city: "Bangalore" },

{ name: "Priya", email: "priya@example.com", age: 28, city: "Mumbai" },

{ name: "Rahul", email: "rahul@example.com", age: 30, city: "Chennai" }, // Duplicate email, keep the first

{ name: "Amit", email: "amit@example.com", age: 26, city: "Delhi" },

{ name: "Priya", email: "priya@example.com", age: 28, city: "Delhi" } // Duplicate email, keep the first

]

Output:

[

{ name: "Rahul", email: "rahul@example.com", age: 35, city: "Bangalore" },

{ name: "Priya", email: "priya@example.com", age: 28, city: "Mumbai" },

{ name: "Amit", email: "amit@example.com", age: 26, city: "Delhi" }

]

Explanation: Rahul and Priya have duplicate emails. We keep the first occurrence of each in the output list.

Test Case 2:

Input:

[

{ name: "Rahul", email: "rahul@example.com", age: 35, city: "Bangalore" },

{ name: "Rahul", email: "rahul.kapoor@example.com", age: 35, city: "Bangalore" }, // Different email, unique user

]

Output:

[

{ name: "Rahul", email: "rahul@example.com", age: 35, city: "Bangalore" },

{ name: "Rahul", email: "rahul.kapoor@example.com", age: 35, city: "Bangalore" }

]

Explanation: Both users have the same name, but different emails, so both are considered unique.

Test Case 3:

Input:

[

{ name: "Minal", email: "iamawesome@example.com", age: 21, city: "Mumbai" },

{ name: "Meenal", email: "iamawesome@example.com", age: 21, city: "Mumbai" } //Duplicate email, keeping the first one

]

Output:

[

{ name: "Minal", email: "iamawesome@example.com", age: 21, city: "Mumbai" }

]

Explanation: Removed the duplicate user, keeping the first time the email appears in the list.

__