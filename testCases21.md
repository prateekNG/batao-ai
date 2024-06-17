```javascript
const extractHashtags = require('./extractHashtags'); // Assuming your solution is in extractHashtags.js

// Test cases
const testCases = [
  {
    input: "Multiple #hashtags #with #different #casing",
    output: ["hashtags", "with", "different", "casing"],
    weight: 2, // Basic functionality
    description: 'String with multiple hashtags'
  },
  {
    input: "No hashtags here!",
    output: [],
    weight: 2, // Edge case: No hashtags
    description: 'String with no hashtags'
  },
  {
    input: "#hashtag #hashtag #hashtag",
    output: ["hashtag"],
    weight: 2, // Edge case: Duplicate hashtags
    description: 'String with all same hashtags'
  },
  {
    input: "#Hashtags #with! #Special.Characters #123", 
    output: ["hashtags", "with", "special.characters", "123"],
    weight: 2, // Edge case: Special characters and numbers
    description: 'String with special characters'
  },
  {
    input: " ", 
    output: [],
    weight: 1, // Edge case: Empty string
    description: 'Empty string'
  },
  {
    input: "#Hello#World#How#Are#You",
    output: ["hello", "world", "how", "are", "you"],
    weight: 2, // Edge case: Hashtags without spaces
    description: 'String with all words as hashtags'
  }
];

// Run tests and calculate score
let totalScore = 0;
testCases.forEach(testCase => {
  const { input, output, weight, description } = testCase;
  const result = extractHashtags(input);
  const pass = JSON.stringify(result) === JSON.stringify(output);

  console.log(`Test Case: ${description}`);
  console.log(`Input: ${input}`);
  console.log(`Expected Output: ${output}`);
  console.log(`Actual Output: ${result}`);
  console.log(`Pass: ${pass}`);
  console.log('-------------------------------------');

  if (pass) {
    totalScore += weight;
  }
});

console.log(`Final Score: ${totalScore} / ${testCases.reduce((sum, tc) => sum + tc.weight, 0)}`);

```

**Explanation of Test Cases:**

1. **Multiple Hashtags with Different Casing:** This test case evaluates if the function correctly identifies multiple hashtags in a string, converts them to lowercase, and removes duplicates. 
2. **No Hashtags:** This edge case tests the function's ability to handle strings without any hashtags and return an empty array.
3. **Duplicate Hashtags:** This edge case checks if the function removes duplicate hashtags, ensuring that the output array contains only unique hashtags.
4. **Special Characters and Numbers:** This test case verifies that the function handles hashtags containing special characters and numbers, extracting them as expected.
5. **Empty String:** This edge case checks if the function handles an empty input string without throwing an error.
6. **All Words as Hashtags:** This test case focuses on the scenario where all words in the string are hashtags, delimited by '#' without spaces. It checks if the function correctly separates and extracts these hashtags.

**Weights:**

Weights are assigned to each test case based on its complexity and importance in covering different aspects of the problem requirements. For instance, the test case covering basic functionality (multiple hashtags with different casing) and edge cases like "No Hashtags" and "Duplicate Hashtags" are given higher weight as they represent the core functionality of the function. 

Remember:  These test cases provide a good starting point for evaluating your solution. It's generally a good practice to add more test cases as you identify potential issues or edge cases not covered in this initial set. 
