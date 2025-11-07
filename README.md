# Node.js Checkpoint - Guided Exercises

A comprehensive Node.js checkpoint project covering fundamental concepts including console output, server creation, file operations, npm packages, and email sending.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Tasks Overview](#tasks-overview)
- [Running the Projects](#running-the-projects)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Important Notes](#important-notes)
- [Author](#author)

---

## 📌 Project Overview

This checkpoint introduces Node.js through 5 guided exercises:

1. ✅ **Hello World** - Basic console output
2. ✅ **HTTP Server** - Create a simple web server
3. ✅ **File System** - Read and write files
4. ✅ **Password Generator** - Generate random passwords using npm package
5. ✅ **Email Sender** - Send emails using Nodemailer

---

## ✅ Prerequisites

Before starting, ensure you have:

- **Node.js** (v14.0.0 or higher)
  - Download from: [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- **Text Editor** (VS Code, Sublime, etc.)
- **Gmail Account** (for Task 5)

### Check Installation

```bash
node --version
npm --version
```

---

## 🚀 Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-checkpoint.git
cd nodejs-checkpoint
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `generate-password` - For password generation
- `nodemailer` - For email sending

---

## 📝 Tasks Overview

### Task 1: Hello World

**File:** `hello-world.js`

**Description:** Simple program that prints "HELLO WORLD" to the console.

**Run:**
```bash
node hello-world.js
```

**Expected Output:**
```
HELLO WORLD
```

---

### Task 2: HTTP Server

**File:** `server.js`

**Description:** Creates an HTTP server running on port 3000 that responds with "Hello Node!!!!"

**Run:**
```bash
node server.js
```

**Access:**
- Open browser: `http://localhost:3000`
- You should see: **Hello Node!!!!**

**Stop Server:** Press `Ctrl + C`

---

### Task 3: File System Operations

**File:** `file-operations.js`

**Description:** 
- Creates a file `welcome.txt` containing "Hello Node"
- Reads and displays the content of `welcome.txt`

**Run:**
```bash
node file-operations.js
```

**Expected Output:**
```
Creating welcome.txt...
✅ welcome.txt created successfully!

Reading welcome.txt...
File content:
Hello Node
```

---

### Task 4: Password Generator

**File:** `password-generator.js`

**Description:** Generates random secure passwords using the `generate-password` npm package.

**Package:** [generate-password](https://www.npmjs.com/package/generate-password)

**Run:**
```bash
node password-generator.js
```

**Expected Output:**
```
🔐 Random Password Generator

Generated Passwords:
========================================
1. K7#mP$2wX9qR
2. vF3@nL8%hT5j
3. dQ6*rW9#sM2k
4. bN4$xY7@cZ3p
5. gH8%tJ2#wV5n
========================================
```

**Features:**
- Configurable length
- Include/exclude numbers, symbols, uppercase, lowercase
- Exclude similar characters

---

### Task 5: Email Sender

**File:** `email-sender.js`

**Description:** Sends emails using Nodemailer package.

**Package:** [nodemailer](https://www.npmjs.com/package/nodemailer)

**⚠️ IMPORTANT SETUP (Gmail):**

1. **Enable 2-Factor Authentication** on your Google Account
2. **Generate App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
3. **Update code with your credentials** (locally only)

**Run:**
```bash
node email-sender.js
```

**Expected Output:**
```
✅ Email sent successfully!
Response: 250 2.0.0 OK
```

**⚠️ SECURITY NOTE:**
- **DO NOT** commit your actual email credentials to GitHub
- The version in this repository uses placeholder values
- Use environment variables for sensitive data

---

## 🎮 Running the Projects

### Quick Start - Run All Tasks

```bash
# Task 1
node hello-world.js

# Task 2 (then visit http://localhost:3000)
node server.js

# Task 3
node file-operations.js

# Task 4
node password-generator.js

# Task 5 (configure first!)
node email-sender.js
```

---

## 📸 Screenshots

All screenshots demonstrating successful execution are located in the `/screenshots` folder:

1. **`01-hello-world.png`** - Hello World console output
2. **`02-server-browser.png`** - Browser showing "Hello Node!!!!"
3. **`03-file-operations.png`** - File read/write operations
4. **`04-password-generator.png`** - Generated passwords
5. **`05-email-sent.png`** - Email sending confirmation

---

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **HTTP Module** - Built-in Node.js module for server creation
- **File System (fs)** - Built-in Node.js module for file operations
- **npm** - Node Package Manager
- **generate-password** - NPM package for password generation
- **nodemailer** - NPM package for email sending

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "generate-password": "^1.7.1",
    "nodemailer": "^6.9.7"
  }
}
```

Install with:
```bash
npm install
```

---

## ⚠️ Important Notes

### Security Best Practices

1. **Never commit sensitive data:**
   - Email credentials
   - API keys
   - Passwords
   - Personal information

2. **Use environment variables:**
   ```bash
   # Create .env file (already in .gitignore)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Always check .gitignore:**
   - Ensure `node_modules/` is ignored
   - Ensure `.env` files are ignored
   - Ensure credential files are ignored

### Gmail Setup Issues

If you encounter authentication errors:

1. **Use App Password** (not regular password)
2. **Enable 2-Factor Authentication** first
3. **Check "Less secure app access"** (if needed)
4. **Alternative:** Use OAuth2 authentication

### Common Issues

| Issue | Solution |
|-------|----------|
| `node: command not found` | Install Node.js |
| `Cannot find module` | Run `npm install` |
| Port 3000 already in use | Change port or kill existing process |
| Email not sending | Check Gmail app password setup |

---

## 🗂️ Project Structure

```
nodejs-checkpoint/
│
├── hello-world.js              # Task 1: Console output
├── server.js                   # Task 2: HTTP server
├── file-operations.js          # Task 3: File system operations
├── welcome.txt                 # Created by Task 3
├── password-generator.js       # Task 4: Password generation
├── email-sender.js             # Task 5: Email sending
│
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock file
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
│
└── screenshots/                # Execution screenshots
    ├── 01-hello-world.png
    ├── 02-server-browser.png
    ├── 03-file-operations.png
    ├── 04-password-generator.png
    └── 05-email-sent.png
```

---

## 🚀 Pushing to GitHub

### Before Pushing - Security Checklist

- [ ] Remove all personal email addresses from code
- [ ] Remove all passwords/credentials
- [ ] Check `.gitignore` includes sensitive files
- [ ] Replace real data with placeholders
- [ ] Test that no sensitive data is tracked by git

### Git Commands

```bash
# Initialize repository (if not done)
git init

# Add files
git add .

# Commit changes
git commit -m "Node.js checkpoint completed - all 5 tasks"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/nodejs-checkpoint.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 📚 Learning Outcomes

By completing this checkpoint, you will understand:

✅ Node.js basics and console operations  
✅ Creating HTTP servers  
✅ File system operations (read/write)  
✅ Working with npm packages  
✅ Using external libraries  
✅ Asynchronous programming basics  
✅ Email integration with Node.js  
✅ Security best practices  

---

## 🔗 Additional Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Generate Password Package](https://www.npmjs.com/package/generate-password)
- [Node.js File System](https://nodejs.org/api/fs.html)

---

## 👤 Author

**Your Name**  
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 📅 Date

Created: November 7, 2025

---

## 📄 License

This project is for educational purposes as part of a Node.js checkpoint assignment.

---

## 🙏 Acknowledgments

- Node.js Community
- npm Package Authors
- Course Instructors
- Anthropic's Claude AI for assistance

---

## ⭐ Show Your Support

If this helped you learn Node.js, give it a ⭐ on GitHub!

---

**Happy Coding with Node.js! 🚀**
