```javascript
/*
  Problem: File Type Identifier (20 marks)
  You are developing a file organisation system and must categorise files based on their extensions.

  You need to write a JavaScript function named getFileType that takes a filename as a string and returns a string representing its file type.

  Supported File Types:
  Document: .doc, .docx, .pdf, .txt
  Image: .jpg, .jpeg, .png, .gif
  Audio: .mp3, .wav, .ogg, .aac
  Video: .mp4, .avi, .mkv, .wmv

  Function: getFileType(filename)

  Input Format: A string representing a filename (e.g., "document.pdf", "image.jpg").

  Output Format:  Return a string representing the file type based on its extension (e.g., "Document", "Image", "Audio", "Video", "Unknown File Type").

  Example Test Cases:
  Input: "report.docx"
  Output: "Document"
  Explanation: The file extension is "docx", which corresponds to a document file type.

  Input: "vacation.jpeg"
  Output: "Image"
  Explanation: The file extension is "jpeg", which corresponds to an image file type.

  Input: "music.mp3"
  Output: "Audio"
  Explanation: The file extension is "mp3", which corresponds to an audio file type.

  Input: "movie.avi"
  Output: "Video"
  Explanation: The file extension is "avi", which corresponds to a video file type.

  Input: "unknown_file.xyz"
  Output: "Unknown File Type"
  Explanation: The file extension "xyz" doesn't match any known file types.

  Input: "file_without_extension"
  Output: "Unknown File Type"
  Explanation: The filename has no extension, so its type is unknown.
*/

/**
 * Determines the file type based on the file extension.
 *
 * @param {string} filename The name of the file.
 * @return {string} The file type (e.g., "Document", "Image", "Audio", "Video", "Unknown File Type").
 */
function getFileType(filename) {
  // TODO: Implement the function to determine the file type based on the extension.
}

// Test cases
const testCases = [
  { input: "report.doc", expectedOutput: "Document" },
  { input: "presentation.pdf", expectedOutput: "Document" },
  { input: "notes.txt", expectedOutput: "Document" },
  { input: "landscape.png", expectedOutput: "Image" },
  { input: "animation.gif", expectedOutput: "Image" },
  { input: "sound.wav", expectedOutput: "Audio" },
  { input: "podcast.ogg", expectedOutput: "Audio" },
  { input: "movie.mkv", expectedOutput: "Video" },
  { input: "clip.wmv", expectedOutput: "Video" },
  { input: "file_without_extension", expectedOutput: "Unknown File Type" },
  { input: "REPORT.DOCX", expectedOutput: "Document" },
  { input: "Image.JpEg", expectedOutput: "Image" },
  { input: "data.csv", expectedOutput: "Unknown File Type" },
  { input: "", expectedOutput: "Unknown File Type" },
];

// Run tests
let totalWeight = 0;
let earnedWeight = 0;
testCases.forEach(({ input, expectedOutput }, index) => {
  const output = getFileType(input);
  const weight = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2][index]; // Weights assigned as per the table
  totalWeight += weight;
  if (output === expectedOutput) {
    console.log(`Test case ${index + 1} passed. (Weight: ${weight})`);
    earnedWeight += weight;
  } else {
    console.log(
      `Test case ${index + 1} failed. Expected: ${expectedOutput}, Actual: ${output}. (Weight: ${weight})`
    );
  }
});

console.log(
  `\nTotal Score: ${earnedWeight} out of ${totalWeight}`
);
```
