```javascript
function getFileType(filename) {
  // Handle edge cases where the filename is missing or invalid
  if (!filename || typeof filename !== 'string') {
    return "Unknown File Type";
  }

  // Find the last dot (.) in the filename to extract the extension
  const lastDotIndex = filename.lastIndexOf(".");

  // Handle cases where no extension is found
  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return "Unknown File Type";
  }

  // Extract the extension and convert it to lowercase for case-insensitive comparison
  const extension = filename.substring(lastDotIndex + 1).toLowerCase();

  // Define the supported file types and their corresponding extensions
  const fileTypes = {
    "Document": ["doc", "docx", "pdf", "txt", "pptx"],
    "Image": ["jpg", "jpeg", "png", "gif"],
    "Audio": ["mp3", "wav", "ogg", "aac"],
    "Video": ["mp4", "avi", "mkv", "wmv"]
  };

  // Iterate over the file types and their extensions to find a match
  for (const [fileType, exts] of Object.entries(fileTypes)) {
    if (exts.includes(extension)) {
      return fileType; 
    }
  }

  // If no match is found, return "Unknown File Type"
  return "Unknown File Type";
}


// Test Cases 
const testCases = [
  // Group 1: Valid File Extensions
  { input: "report.docx", output: "Document" },
  { input: "vacation.jpeg", output: "Image" },
  { input: "music.mp3", output: "Audio" },
  { input: "movie.avi", output: "Video" },
  { input: "unknown_file.xyz", output: "Unknown File Type" },
  { input: "presentation.pptx", output: "Document" },
  { input: "landscape.png", output: "Image" },
  { input: "song.wav", output: "Audio" },
  { input: "clip.mkv", output: "Video" },
  { input: "data.csv", output: "Unknown File Type" },
  { input: "REPORT.DOCX", output: "Document" },
  { input: "image.JpEg", output: "Image" },
  { input: "audio.MP3", output: "Audio" },
  { input: "my.document.v2.docx", output: "Document" },
  { input: "project.final.tar.gz", output: "Unknown File Type" },

  // Group 2: Edge Cases and Invalid Inputs
  { input: "filename", output: "Unknown File Type" },
  { input: ".hiddenfile", output: "Unknown File Type" },
  { input: "", output: "Unknown File Type" },
  { input: null, output: "Unknown File Type" }, 
  { input: undefined, output: "Unknown File Type" }, 
  { input: 123, output: "Unknown File Type" },
  { input: "file-with_underscore.txt", output: "Document" },
  { input: "file with spaces.jpg", output: "Image" },
  { input: "file(1).mp4", output: "Video" },
  { input: "file#.pdf", output: "Document" }
];

// Run the tests and output the results
for (const testCase of testCases) {
  const result = getFileType(testCase.input);
  const pass = result === testCase.output;

  console.log(`Input: ${testCase.input}, Expected: ${testCase.output}, Actual: ${result} - ${pass ? "Pass" : "Fail"}`);
}
```

**Explanation:**

1. **`getFileType(filename)` Function:**
   - Takes a `filename` string as input.
   - Handles edge cases like missing filenames or non-string inputs.
   - Finds the last dot (`.`) to determine the extension.
   - Handles cases with no extension or extensions starting at index 0.
   - Extracts the extension, converts it to lowercase.
   - Defines a `fileTypes` object to map file types to their extensions.
   - Iterates through `fileTypes` to find a match.
   - Returns the file type if found, otherwise returns "Unknown File Type".

2. **`testCases` Array:**
   - Contains an array of test case objects.
   - Each object has `input` (the filename) and `output` (the expected file type).

3. **Testing Loop:**
   - Iterates through each test case in the `testCases` array.
   - Calls `getFileType()` with the test case input.
   - Compares the function's result with the expected output.
   - Logs the input, expected output, actual output, and whether the test passed or failed.

**Running the Code:**

1. Save the code as a `.js` file (e.g., `file_type_identifier.js`).
2. Open your terminal or command prompt.
3. Navigate to the directory where you saved the file.
4. Run the script using `node file_type_identifier.js`.

The output will display the results of each test case, indicating whether the `getFileType()` function produced the expected output for each input. 
