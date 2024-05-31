```javascript
// test-cases.js

const one = require('./one');
const two = require('./two');
const three = require('./three');
const four = require('./four');
const five = require('./five');

const testCases = {
  one: [
    { input: "Hello, World!", output: "H&ll@, W@rld!" },
    { input: "JavaScript is awesome!", output: "J#v#Scr!pt !s #w&s@m&!" },
    { input: "This is a test.", output: "Th!s !s # t&st." },
    { input: "", output: "" }, // Edge case: Empty string
    { input: "12345", output: "12345" } // Edge case: No vowels
  ],
  two: [
    { input: "the quick brown fox jumps over the lazy dog", output: "The Quick Brown Fox Jumps Over The Lazy Dog" },
    { input: "javascript is awesome", output: "Javascript Is Awesome" },
    { input: " hello world! ", output: " Hello World! " }, // Edge case: Leading/trailing spaces
    { input: "", output: "" }, // Edge case: Empty string
    { input: "123 abc", output: "123 Abc" } // Edge case: String starting with a number
  ],
  three: [
    { input: "Hello World, how are you?", output: "you? are how World, Hello" },
    { input: "JavaScript is awesome", output: "awesome is JavaScript" },
    { input: " This sentence has extra spaces. ", output: "spaces. extra has sentence This" },
    { input: "", output: "" }, // Edge case: Empty string
    { input: "oneword", output: "oneword" } // Edge case: Single word
  ],
  four: {
    students: [
      { name: "John", grade: 90 },
      { name: "Alice", grade: 80 },
      { name: "Bob", grade: 90 },
      { name: "Eve", grade: 70 }
    ],
    tests: [
      { targetGrade: 90, output: "John" },
      { targetGrade: 85, output: "Student not found" },
      { targetGrade: 70, output: "Eve" }
    ]
  },
  five: {
    students: [
      { name: "John", courses: ["Math", "Science", "History"] },
      { name: "Alice", courses: ["Science", "English", "Art"] },
      { name: "Bob", courses: ["Math", "History", "Music"] },
      { name: "Eve", courses: ["Science", "English"] }
    ],
    tests: [
      { targetCourse: "Science", output: ["John", "Alice", "Eve"] },
      { targetCourse: "Music", output: ["Bob"] },
      { targetCourse: "Physics", output: [] }
    ]
  }
};

let totalMarks = 0;

// Testing Question 1
console.log("Question 1: Vowel Replacement (15 marks)");
testCases.one.forEach((testCase, index) => {
  const result = one.replaceVowels(testCase.input);
  if (result === testCase.output) {
    console.log(`Test Case ${index + 1}: Passed`);
    totalMarks += 15 / testCases.one.length;
  } else {
    console.log(`Test Case ${index + 1}: Failed`);
    console.log(`   Expected: ${testCase.output}`);
    console.log(`   Got:      ${result}`);
  }
});

// Testing Question 2
console.log("\nQuestion 2: Capitalize the First Letter of Each Word (15 marks)");
testCases.two.forEach((testCase, index) => {
  const result = two.capitalizeWords(testCase.input);
  if (result === testCase.output) {
    console.log(`Test Case ${index + 1}: Passed`);
    totalMarks += 15 / testCases.two.length;
  } else {
    console.log(`Test Case ${index + 1}: Failed`);
    console.log(`   Expected: ${testCase.output}`);
    console.log(`   Got:      ${result}`);
  }
});

// Testing Question 3
console.log("\nQuestion 3: Reverse Words in a Sentence (20 marks)");
testCases.three.forEach((testCase, index) => {
  const result = three.reverseSentence(testCase.input);
  if (result === testCase.output) {
    console.log(`Test Case ${index + 1}: Passed`);
    totalMarks += 20 / testCases.three.length;
  } else {
    console.log(`Test Case ${index + 1}: Failed`);
    console.log(`   Expected: ${testCase.output}`);
    console.log(`   Got:      ${result}`);
  }
});

// Testing Question 4
console.log("\nQuestion 4: Find the First Student with a Specific Grade (20 marks)");
testCases.four.tests.forEach((testCase, index) => {
  const result = four.findTargetGrade(testCases.four.students, testCase.targetGrade);
  if (result === testCase.output) {
    console.log(`Test Case ${index + 1}: Passed`);
    totalMarks += 20 / testCases.four.tests.length;
  } else {
    console.log(`Test Case ${index + 1}: Failed`);
    console.log(`   Expected: ${testCase.output}`);
    console.log(`   Got:      ${result}`);
  }
});

// Testing Question 5
console.log("\nQuestion 5: Find Students Enrolled for a Particular Course (30 marks)");
testCases.five.tests.forEach((testCase, index) => {
  const result = five.enrolledStudents(testCases.five.students, testCase.targetCourse);
  if (JSON.stringify(result) === JSON.stringify(testCase.output)) {
    console.log(`Test Case ${index + 1}: Passed`);
    totalMarks += 30 / testCases.five.tests.length;
  } else {
    console.log(`Test Case ${index + 1}: Failed`);
    console.log(`   Expected: ${testCase.output}`);
    console.log(`   Got:      ${result}`);
  }
});

console.log(`\nTotal Marks: ${totalMarks}`);
```

**Explanation:**

1. **Import Functions:** The script begins by importing the functions from your solution files (one.js, two.js, etc.).
2. **Test Cases:** It defines an object `testCases` to hold test cases for each question. 
   - For Questions 1-3, each test case is an object with `input` and `output` properties.
   - For Questions 4-5, the `testCases` object has a `students` array and a `tests` array to hold test data.
3. **Testing Logic:**
   - For each question, the script iterates through the test cases.
   - It calls the corresponding function with the test case's input.
   - It compares the function's output to the expected output.
   - If the outputs match, it logs "Passed"; otherwise, it logs "Failed" along with the expected and actual outputs.
4. **Grading:** 
   - The script uses a `totalMarks` variable to keep track of the student's score.
   - For each passed test case, it adds the corresponding question's marks divided by the number of test cases for that question. 
   - Finally, it prints the `totalMarks`.

**How to Use:**

1. **Save:** Save the provided code as `test-cases.js` in the same directory as your solution files (one.js, two.js, etc.).
2. **Run:** Open your terminal, navigate to the directory, and run the script using `node test-cases.js`.

This script will execute the test cases, compare the results with the expected outputs, and provide you with a grade based on the correctness of your solutions.
