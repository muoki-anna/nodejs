// Task 4: Password Generator
// This program generates random passwords using generate-password package

const generator = require('generate-password');

// Function to generate a random password
function generatePassword() {
  const password = generator.generate({
    length: 12,              // Password length
    numbers: true,           // Include numbers
    symbols: true,           // Include symbols
    uppercase: true,         // Include uppercase letters
    lowercase: true,         // Include lowercase letters
    excludeSimilarCharacters: true  // Avoid similar characters like i, l, 1, L, o, 0, O
  });
  
  return password;
}

// Generate and display multiple passwords
console.log('🔐 Random Password Generator\n');
console.log('Generated Passwords:');
console.log('='.repeat(40));

// Generate 5 passwords as examples
for (let i = 1; i <= 5; i++) {
  console.log(`${i}. ${generatePassword()}`);
}

console.log('='.repeat(40));

// Generate one password with custom options
console.log('\n🎯 Custom Password (20 characters, no symbols):');
const customPassword = generator.generate({
  length: 20,
  numbers: true,
  symbols: false,
  uppercase: true,
  lowercase: true
});
console.log(customPassword);