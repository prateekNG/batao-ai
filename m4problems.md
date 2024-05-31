# Problem 1: switch and loops

## Improved Coding Problem:

**Problem Statement:**

Write a JavaScript function called `replaceVowels` that takes a string as input and replaces all occurrences of vowels with specific characters, using a `switch` statement inside a loop. The function should replace:

* **a** with **#**
* **e** with **&**
* **i** with **!**
* **o** with **@**
* **u** with **$**

The function should return the modified string.

**Input/Output Format:**

* **Input:** A string.
* **Output:** The modified string with vowels replaced according to the specified rules.

**Example Test Cases:**

1. **Input:** "Hello, World!"
   **Output:** "H&ll@, W@rld!"

2. **Input:** "JavaScript is awesome!"
   **Output:** "J#v#Scr!pt !s #w&s@m&!"

3. **Input:** "This is a test."
   **Output:** "Th!s !s # t&st."

**Explanation of Test Cases:**

* **Test Case 1:**  'e' is replaced with '&', 'o' is replaced with '@'.
* **Test Case 2:** 'a' is replaced with '#', 'e' is replaced with '&', 'i' is replaced with '!', 'o' is replaced with '@', 'u' is replaced with '$'.
* **Test Case 3:** 'i' is replaced with '!', 'a' is replaced with '#', 'e' is replaced with '&'.

**Solution (for reference):**

```javascript
function replaceVowels(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    switch (char) {
      case 'a':
        result += '#';
        break;
      case 'e':
        result += '&';
        break;
      case 'i':
        result += '!';
        break;
      case 'o':
        result += '@';
        break;
      case 'u':
        result += '$';
        break;
      default:
        result += char;
    }
  }
  return result;
}
```

**Improvements:**

* **Predefined Replacements:**  Instead of asking for a replacement character from the user, the problem now defines specific replacements for each vowel. This better assesses the student's understanding of the `switch` statement.
* **Clearer Problem Statement:** The problem statement is now more concise and focused on the task of replacing vowels.
* **Function Implementation:** Students are asked to write the logic inside a function, making the code more reusable and organized.
* **Comprehensive Test Cases:** Multiple test cases with clear explanations are provided to test different scenarios. 
* **Solution Provided:** A solution is provided for reference, but it is expected that students will create their own code. 

# Problem 2: string manipulation

## Improved Coding Problem for JavaScript Assessment:

**Problem Statement:**

Write a JavaScript function named `capitalizeWords` that takes a string as input and returns a new string where the first letter of each word is capitalized, while keeping the rest of the letters in lowercase. 

**Input:**

- A string containing one or more words separated by spaces.

**Output:**

- A new string with the first letter of each word capitalized and the rest of the letters in lowercase.

**Example Test Cases:**

| Input | Expected Output | Explanation |
|---|---|---|
| "the quick brown fox jumps over the lazy dog" | "The Quick Brown Fox Jumps Over The Lazy Dog" | Capitalizes the first letter of each word. |
| "javascript is awesome" | "JavaScript Is Awesome" | Capitalizes the first letter of "javascript" and "awesome". |
| "  hello world!  " | " Hello World! " |  Capitalizes the first letter of "hello" and "world" and preserves leading and trailing spaces. |
| "" | "" | If the input string is empty, return an empty string. | 

**Instructions:**

- Your function should use string manipulation methods to achieve the desired output. 
- You can use the built-in `toUpperCase()` and `toLowerCase()` methods.
- You can assume that the input string will only contain alphabetical characters, spaces, and punctuation.

**Solution (Example):**

```javascript
function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Capitalize the first letter of each word and lowercase the rest
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back into a string
  return capitalizedWords.join(' ');
}
```

**Explanation of Improvements:**

1. **Clearer Problem Statement:** The problem statement is more specific and avoids ambiguity by specifying the expected output format and the acceptable characters in the input string. 
2. **Function Definition:** The problem requires students to define a function, emphasizing the importance of modularity and reusability in programming.
3. **Comprehensive Test Cases:** The test cases cover various scenarios, including empty strings, strings with leading and trailing spaces, and cases where the first letter of a word is already capitalized.
4. **Explanation of Test Cases:** Providing clear explanations for each test case helps students understand the desired behavior of the function and identify potential edge cases.
5. **Solution Example:** Providing a solution example allows students to see a possible approach and helps them understand the concepts involved.

**Benefits:**

This improved coding problem provides a more challenging and engaging assessment for JavaScript students. It evaluates their understanding of string manipulation methods, function definition, and edge case handling. 


# problem 3: Reverse the words in a sentence

## Improved Coding Problem:

**Problem Statement:**

Write a JavaScript function named `reverseSentence` that takes a string representing a sentence as input. The function should:

1. Split the input sentence into individual words.
2. Reverse the order of the words.
3. Join the reversed words back into a new sentence, separated by spaces.
4. Return the new reversed sentence as a string.

**Input/Output Format:**

* **Input:** A string representing a sentence.
* **Output:** A string representing the sentence with the word order reversed.

**Test Cases:**

| Input | Expected Output | Explanation |
|---|---|---|
| `"Hello World, how are you?"` | `"you? are how World, Hello"` |  The sentence is reversed, preserving punctuation and capitalization. |
| `"JavaScript is awesome"` | `"awesome is JavaScript"` | The order of the words "JavaScript", "is", and "awesome" is reversed. |
| `"  This  sentence  has  extra spaces.  "` | `"spaces. extra has sentence This"` | Extra spaces between words are ignored during splitting and joining. |
| `""` | `""` | An empty input should result in an empty output. |

**Function Definition:**

```javascript
function reverseSentence(sentence) {
  // Your code here
}
```

**Explanation:**

This improved version addresses the following logical gaps in the original problem statement:

1. **Missing Function Definition:** The original problem statement lacked a specific function definition, making it unclear how the students should structure their code. Now, the problem explicitly asks for a function named `reverseSentence`.
2. **Ambiguous Input Handling:** The original problem statement didn't specify how to handle extra spaces or empty input. Now, the test cases explicitly address these scenarios, providing clear expectations for the function's behavior.
3. **Clearer Output Expectation:** The original problem statement simply stated "display the new sentence." The improved version clarifies the output format by specifying that the function should return the reversed sentence as a string.
4. **Test Case Coverage:** The improved problem statement includes additional test cases to ensure broader coverage of different input scenarios, promoting a more robust and comprehensive solution.

**Note:** The problem statement doesn't explicitly mention specific methods like `split` and `join`, leaving the choice of implementation to the students. This encourages them to explore different approaches and demonstrate their understanding of string manipulation in JavaScript. 


# Problem 4: Find student with a target grade

## Improved Coding Problem for JavaScript Assessment:

**Problem Statement:**

You are tasked with building a system for managing student records. One of the core functionalities is to efficiently find specific students based on their academic performance. Implement a function that takes an array of student objects and a target grade as input. The function should return the name of the first student in the array who has the specified grade. If no student with the target grade exists, the function should return "Student not found".

**Input Format:**

* The input will be provided as two arguments:
    * `students`: An array of objects, where each object represents a student and has the following properties:
        * `name`: A string representing the student's name.
        * `grade`: An integer representing the student's grade.
    * `targetGrade`: An integer representing the grade to search for.

**Output Format:**

* The function should return a string representing the name of the first student with the target grade. If no student with the target grade exists, the function should return "Student not found".

**Example Input:**

```javascript
const students = [
  { name: "John", grade: 90 },
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Eve", grade: 70 }
];

const targetGrade = 90;
```

**Expected Output:**

```
"John"
```

**Test Cases:**

* **Test Case 1:**
    * **Input:**
        * `students`: [
          { name: "John", grade: 90 },
          { name: "Alice", grade: 80 },
          { name: "Bob", grade: 90 },
          { name: "Eve", grade: 70 }
        ]
        * `targetGrade`: 90
    * **Expected Output:** "John"

* **Test Case 2:**
    * **Input:**
        * `students`: [
          { name: "John", grade: 90 },
          { name: "Alice", grade: 80 },
          { name: "Bob", grade: 90 },
          { name: "Eve", grade: 70 }
        ]
        * `targetGrade`: 85
    * **Expected Output:** "Student not found"

* **Test Case 3:**
    * **Input:**
        * `students`: [
          { name: "John", grade: 90 },
          { name: "Alice", grade: 80 },
          { name: "Bob", grade: 90 },
          { name: "Eve", grade: 70 }
        ]
        * `targetGrade`: 70
    * **Expected Output:** "Eve"

* **Test Case 4:**
    * **Input:**
        * `students`: []
        * `targetGrade`: 90
    * **Expected Output:** "Student not found"

**Instructions:**

1. Write a JavaScript function named `findStudentByGrade` that takes the `students` array and `targetGrade` as input.
2. Inside the function, implement the logic to find the first student with the specified grade.
3. Return the name of the student found, or "Student not found" if no matching student is found.
4. You are free to choose the most appropriate JavaScript methods and techniques to solve this problem.

**Note:**

This problem is designed to assess your understanding of array manipulation in JavaScript, including searching for specific elements.  You are encouraged to use your knowledge of array methods like `findIndex`, `find`, `filter`, and more.




# Problem 5: Find students enrolled for a course

## More Challenging Problem:

**Problem Statement:**

You are tasked with building a system to manage student records, including their academic performance and course enrollment.  You need to implement a function that takes an array of student objects and returns a new array containing only the students who are enrolled in a specific course.

**Input Format:**

* The input will be provided as two arguments:
    * `students`: An array of objects, where each object represents a student and has the following properties:
        * `name`: A string representing the student's name.
        * `courses`: An array of strings representing the courses the student is enrolled in.
    * `targetCourse`: A string representing the course to filter by.

**Output Format:**

* The function should return a new array containing only the student objects that are enrolled in the `targetCourse`. If no students are found enrolled in the `targetCourse`, the function should return an empty array.

**Example Input:**

```javascript
const students = [
  { name: "John", courses: ["Math", "Science", "History"] },
  { name: "Alice", courses: ["Science", "English", "Art"] },
  { name: "Bob", courses: ["Math", "History", "Music"] },
  { name: "Eve", courses: ["Science", "English"] }
];

const targetCourse = "Science";
```

**Expected Output:**

```javascript
[
  { name: "John", courses: ["Math", "Science", "History"] },
  { name: "Alice", courses: ["Science", "English", "Art"] },
  { name: "Eve", courses: ["Science", "English"] }
]
```

**Test Cases:**

* **Test Case 1:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Science"
    * **Expected Output:** [
      { name: "John", courses: ["Math", "Science", "History"] },
      { name: "Alice", courses: ["Science", "English", "Art"] },
      { name: "Eve", courses: ["Science", "English"] }
    ]

* **Test Case 2:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Music"
    * **Expected Output:** [
      { name: "Bob", courses: ["Math", "History", "Music"] }
    ]

* **Test Case 3:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Physics"
    * **Expected Output:** []

* **Test Case 4:**
    * **Input:**
        * `students`: []
        * `targetCourse`: "Science"
    * **Expected Output:** []

**Instructions:**

1. Write a JavaScript function named `findStudentsByCourse` that takes the `students` array and `targetCourse` as input.
2. Inside the function, implement the logic to find all students enrolled in the `targetCourse`.
3. Return a new array containing the student objects enrolled in the `targetCourse`. If no students are found, return an empty array.
4. You are free to choose the most appropriate JavaScript methods and techniques to solve this problem.

**Note:**

This problem is designed to assess your understanding of array manipulation in JavaScript, specifically focusing on filtering and extracting specific data. You are encouraged to use your knowledge of array methods like `filter`, `map`, and more.

# Problem 5 modifications

## Analysis of the Coding Problem:

This problem is a good introduction to working with arrays and objects in JavaScript, particularly focusing on data filtering. 

Here's a breakdown of the key concepts:

* **Arrays:** The `students` input is an array of objects, representing a collection of student data.
* **Objects:** Each student is represented by an object with properties like `name` and `courses`.
* **Filtering:** The task requires filtering the array of student objects based on a specific criteria (`targetCourse`).
* **Returning a new array:** The function should create and return a new array containing only the filtered students, leaving the original `students` array untouched.

## Modified Problem:

Here's the modified problem to ask the user to return the array of student names:

**Problem Statement:**

You are tasked with building a system to manage student records, including their academic performance and course enrollment.  You need to implement a function that takes an array of student objects and returns an array containing the names of all students enrolled in a specific course.

**Input Format:**

* The input will be provided as two arguments:
    * `students`: An array of objects, where each object represents a student and has the following properties:
        * `name`: A string representing the student's name.
        * `courses`: An array of strings representing the courses the student is enrolled in.
    * `targetCourse`: A string representing the course to filter by.

**Output Format:**

* The function should return a new array containing the names of the students enrolled in the `targetCourse`. If no students are found enrolled in the `targetCourse`, the function should return an empty array.

**Example Input:**

```javascript
const students = [
  { name: "John", courses: ["Math", "Science", "History"] },
  { name: "Alice", courses: ["Science", "English", "Art"] },
  { name: "Bob", courses: ["Math", "History", "Music"] },
  { name: "Eve", courses: ["Science", "English"] }
];

const targetCourse = "Science";
```

**Expected Output:**

```javascript
["John", "Alice", "Eve"]
```

**Test Cases:**

* **Test Case 1:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Science"
    * **Expected Output:** ["John", "Alice", "Eve"]

* **Test Case 2:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Music"
    * **Expected Output:** ["Bob"]

* **Test Case 3:**
    * **Input:**
        * `students`: [
          { name: "John", courses: ["Math", "Science", "History"] },
          { name: "Alice", courses: ["Science", "English", "Art"] },
          { name: "Bob", courses: ["Math", "History", "Music"] },
          { name: "Eve", courses: ["Science", "English"] }
        ]
        * `targetCourse`: "Physics"
    * **Expected Output:** []

* **Test Case 4:**
    * **Input:**
        * `students`: []
        * `targetCourse`: "Science"
    * **Expected Output:** []

**Instructions:**

1. Write a JavaScript function named `findStudentsByCourse` that takes the `students` array and `targetCourse` as input.
2. Inside the function, implement the logic to find all students enrolled in the `targetCourse`.
3. Return a new array containing the names of the students enrolled in the `targetCourse`. If no students are found, return an empty array.
4. You are free to choose the most appropriate JavaScript methods and techniques to solve this problem.

**Note:**

This problem is designed to assess your understanding of array manipulation in JavaScript, specifically focusing on filtering and extracting specific data. You are encouraged to use your knowledge of array methods like `filter`, `map`, and more.

## Solution:

```javascript
function findStudentsByCourse(students, targetCourse) {
  // Filter the students array based on the targetCourse
  const filteredStudents = students.filter(student => 
    student.courses.includes(targetCourse)
  );

  // Extract the names of the filtered students
  const studentNames = filteredStudents.map(student => student.name);

  // Return the array of student names
  return studentNames;
}
```

**Explanation:**

1. **Filtering:** The `filter()` method iterates through the `students` array and checks if each student's `courses` array includes the `targetCourse`. If it does, the student object is added to the `filteredStudents` array.

2. **Mapping:** The `map()` method iterates through the `filteredStudents` array and extracts the `name` property from each student object, creating a new array called `studentNames`.

3. **Returning the Array:** The function returns the `studentNames` array containing the names of the students enrolled in the `targetCourse`.

**This solution demonstrates:**

* **Array filtering:** Using `filter()` to selectively extract elements based on a condition.
* **Array mapping:** Using `map()` to transform elements into a new array.
* **Clear and concise code:** Using meaningful variable names and concise syntax for readability.

**This modified problem helps solidify the understanding of array manipulation and object access in JavaScript, while also introducing the concept of data transformation.**
