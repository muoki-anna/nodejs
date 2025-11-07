// Task 3: File System Operations
// Part 1: Create welcome.txt with content "Hello Node"
// Part 2: Read and display content from welcome.txt

const fs = require('fs');

// Part 1: Create welcome.txt file
console.log('Creating welcome.txt...');
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');
console.log('✅ welcome.txt created successfully!\n');

// Part 2: Read and display content from welcome.txt
console.log('Reading welcome.txt...');
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log('File content:');
console.log(data);