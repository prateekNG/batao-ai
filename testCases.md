## Weighted Test Cases for File Type Identifier:

Here's a breakdown of weighted test cases, covering various scenarios and edge conditions:

**Group 1: Valid File Extensions (10 marks)**

* **Common Extensions (5 marks):**
    * **Case 1.1 (1 mark):** `input: "presentation.pptx", output: "Document"` (Covers an additional document extension)
    * **Case 1.2 (1 mark):** `input: "landscape.png", output: "Image"` 
    * **Case 1.3 (1 mark):** `input: "song.wav", output: "Audio"` 
    * **Case 1.4 (1 mark):** `input: "clip.mkv", output: "Video"` 
    * **Case 1.5 (1 mark):** `input: "data.csv", output: "Unknown File Type"` (Tests for a common, but unsupported extension)

* **Case Sensitivity (3 marks):**
    * **Case 2.1 (1 mark):** `input: "REPORT.DOCX", output: "Document"`
    * **Case 2.2 (1 mark):** `input: "image.JpEg", output: "Image"`
    * **Case 2.3 (1 mark):** `input: "audio.MP3", output: "Audio"`

* **Multiple Dots in Filename (2 marks):**
    * **Case 3.1 (1 mark):** `input: "my.document.v2.docx", output: "Document"` (Considers only the last extension)
    * **Case 3.2 (1 mark):** `input: "project.final.tar.gz", output: "Unknown File Type"` (Tests for a complex, unsupported extension)

**Group 2: Edge Cases and Invalid Inputs (10 marks)**

* **No Extension (2 marks):**
    * **Case 4.1 (1 mark):**  `input: "filename", output: "Unknown File Type"` 
    * **Case 4.2 (1 mark):** `input: ".hiddenfile", output: "Unknown File Type"` (Handles files starting with '.')

* **Empty or Invalid Filename (4 marks):**
    * **Case 5.1 (1 mark):** `input: "", output: "Unknown File Type"` 
    * **Case 5.2 (1 mark):** `input: null, output: "Unknown File Type"` (Handles null input)
    * **Case 5.3 (1 mark):** `input: undefined, output: "Unknown File Type"` (Handles undefined input)
    * **Case 5.4 (1 mark):** `input: 123, output: "Unknown File Type"` (Handles non-string input)

* **Unusual Characters (4 marks):**
    * **Case 6.1 (1 mark):** `input: "file-with_underscore.txt", output: "Document"`
    * **Case 6.2 (1 mark):** `input: "file with spaces.jpg", output: "Image"` 
    * **Case 6.3 (1 mark):** `input: "file(1).mp4", output: "Video"` 
    * **Case 6.4 (1 mark):** `input: "file#.pdf", output: "Document"` 

**Weighting Rationale:**

* **Group 1 (Valid Extensions):** Focuses on the core functionality, ensuring the function correctly identifies file types based on various valid extensions and input variations. 
* **Group 2 (Edge Cases):**  Prioritizes handling unexpected or invalid input gracefully, which is crucial for robust code. This includes empty filenames, invalid data types, and filenames containing special characters or unusual structures.

This weighted test suite aims to provide a comprehensive evaluation of the `getFileType` function, ensuring it handles both common scenarios and potential edge cases effectively. 
