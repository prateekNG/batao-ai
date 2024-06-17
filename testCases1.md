## Weighted Test Cases for File Type Identifier

We will assign weights to the test cases based on their importance and coverage of different scenarios. 

**Note:** Each test case includes:
- **Description:** Explains the purpose of the test case.
- **Input:** The filename string passed to the `getFileType` function.
- **Expected Output:** The expected return value from the function.
- **Weight:** Assigned importance (out of 20).

**Test Cases:**

| Description                     | Input                         | Expected Output        | Weight |
|---------------------------------|-------------------------------|-----------------------|--------|
| **Basic Functionality (Documents)** |
| Valid .doc file                | "report.doc"                 | "Document"             | 1      |
| Valid .pdf file                | "presentation.pdf"           | "Document"             | 1      |
| Valid .txt file                | "notes.txt"                  | "Document"             | 1      |
| **Basic Functionality (Images)** |
| Valid .png file                | "landscape.png"              | "Image"               | 1      |
| Valid .gif file                | "animation.gif"              | "Image"               | 1      |
| **Basic Functionality (Audio)** |
| Valid .wav file                | "sound.wav"                  | "Audio"               | 1      |
| Valid .ogg file                | "podcast.ogg"                | "Audio"               | 1      |
| **Basic Functionality (Video)** |
| Valid .mkv file                | "movie.mkv"                 | "Video"               | 1      |
| Valid .wmv file                | "clip.wmv"                  | "Video"               | 1      |
| **Edge Cases** |
| File with no extension         | "file_without_extension"     | "Unknown File Type"   | 3      |
| File with uppercase extension  | "REPORT.DOCX"                | "Document"             | 2      |
| File with mixed-case extension | "Image.JpEg"                | "Image"               | 2      |
| Unknown file type             | "data.csv"                  | "Unknown File Type"   | 2      |
| Empty filename string          | ""                          | "Unknown File Type"   | 2      |


**Total Weight: 20**

**Justification for Weights:**

* **Basic Functionality:** These cases are essential to ensure the function correctly identifies basic file types. They carry a lower weight as they represent the most straightforward scenarios.
* **Edge Cases:** These cases test the function's robustness against unexpected inputs, like missing extensions, uppercase extensions, and unknown file types. They carry higher weight due to their potential to reveal vulnerabilities in the code. 

**This set of test cases provides comprehensive coverage for the `getFileType` function by:**

1. **Testing all supported file types:**  Ensuring the function recognizes each extension correctly.
2. **Handling edge cases:** Addressing scenarios beyond basic functionality, making the testing more robust.
3. **Assigning weights:** Prioritizing critical test cases to ensure adequate coverage of potential issues. 
