```javascript
// Function to identify file type
function getFileType(filename) {
  if (typeof filename !== 'string' || filename === '' || filename.indexOf('.') === -1) {
    return "Unknown File Type";
  }

  const extension = filename.split('.').pop().toLowerCase();

  const fileTypes = {
    "doc": "Document",
    "docx": "Document",
    "pdf": "Document",
    "txt": "Document",
    "jpg": "Image",
    "jpeg": "Image",
    "png": "Image",
    "gif": "Image",
    "mp3": "Audio",
    "wav": "Audio",
    "ogg": "Audio",
    "aac": "Audio",
    "mp4": "Video",
    "avi": "Video",
    "mkv": "Video",
    "wmv": "Video",
  };

  return fileTypes[extension] || "Unknown File Type";
}

// Weighted Test Cases
const testCases = [
  // Group 1: Valid File Extensions (10 marks)
  { input: "presentation.pptx", output: "Document", marks: 1 }, // Case 1.1
  { input: "landscape.png", output: "Image", marks: 1 }, // Case 1.2
  { input: "song.wav", output: "Audio", marks: 1 }, // Case 1.3
  { input: "clip.mkv", output: "Video", marks: 1 }, // Case 1.4
  { input: "data.csv", output: "Unknown File Type", marks: 1 }, // Case 1.5
  { input: "REPORT.DOCX", output: "Document", marks: 1 }, // Case 2.1
  { input: "image.JpEg", output: "Image", marks: 1 }, // Case 2.2
  { input: "audio.MP3", output: "Audio", marks: 1 }, // Case 2.3
  { input: "my.document.v2.docx", output: "Document", marks: 1 }, // Case 3.1
  { input: "project.final.tar.gz", output: "Unknown File Type", marks: 1 }, // Case 3.2

  // Group 2: Edge Cases and Invalid Inputs (10 marks)
  { input: "filename", output: "Unknown File Type", marks: 1 }, // Case 4.1
  { input: ".hiddenfile", output: "Unknown File Type", marks: 1 }, // Case 4.2
  { input: "", output: "Unknown File Type", marks: 1 }, // Case 5.1
  { input: null, output: "Unknown File Type", marks: 1 }, // Case 5.2
  { input: undefined, output: "Unknown File Type", marks: 1 }, // Case 5.3
  { input: 123, output: "Unknown File Type", marks: 1 }, // Case 5.4
  { input: "file-with_underscore.txt", output: "Document", marks: 1 }, // Case 6.1
  { input: "file with spaces.jpg", output: "Image", marks: 1 }, // Case 6.2
  { input: "file(1).mp4", output: "Video", marks: 1 }, // Case 6.3
  { input: "file#.pdf", output: "Document", marks: 1 } // Case 6.4 
];

// Test execution and result output
let totalMarks = 0;
testCases.forEach((testCase, index) => {
  const result = getFileType(testCase.input);
  const marksAwarded = result === testCase.output ? testCase.marks : 0;
  totalMarks += marksAwarded;
  console.log(`Test Case ${index + 1}:`, 
              `Input: ${JSON.stringify(testCase.input)},`, 
              `Expected: ${testCase.output},`,
              `Actual: ${result},`, 
              `Marks: ${marksAwarded}/${testCase.marks}`);
});

console.log(`\nTotal Marks: ${totalMarks}/20`); 
```

This script defines the `getFileType` function and then runs it through the weighted test cases. It outputs the results of each test case and the total marks awarded. 
