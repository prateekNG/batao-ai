/*
    JS script to read the correctCSVDates.csv file, which contains inconsistent dates in the third column, some of the dates have leading zeros in the day and month fields, and some don't. The script reads the file, and writes the corrected dates after removing the leading zeros from other columns, to a new file named correctedDates.csv.
*/

const fs = require('fs');

// Function to remove leading zeros from a date component
const removeLeadingZeros = (str) => {
  return str.replace(/^0+/, '');
};

// Function to correct the date format
const correctDateFormat = (dateStr) => {
  const parts = dateStr.split('/');
  const day = removeLeadingZeros(parts[0]);
  const month = removeLeadingZeros(parts[1]);
  const year = parts[2];
  return `${day}/${month}/${year}`;
};

// Read the CSV file and correct dates
fs.readFile('correctCSVDates.csv', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const lines = data.split('\n');
  const correctedLines = lines.map(line => {
    const columns = line.split(',');
    // Correct the date format in the third column
    if (columns.length >= 3) {
      columns[2] = correctDateFormat(columns[2]);
    }
    return columns.join(',');
  });

  // Write the corrected data to a new file
  fs.writeFile('correctedDates.csv', correctedLines.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Corrected dates written to correctedDates.csv');
  });
});
