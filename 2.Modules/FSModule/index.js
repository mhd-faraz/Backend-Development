const fs = require('fs');
const FilePath = './Fileread.txt';

// step 1

// async manner read of file

// console.log("reading file start")

// // libuv is responsible for handling async operations in nodejs 
// fs.readFile(FilePath, 'utf-8',(err, data) =>{
//     console.log("---------read file content")
//     console.log(data.toString());
// })

// console.log("reading file end")



// step2

// sync manner of file reading 

console.log("reading file start")

const fileMaterial = fs.readFileSync(FilePath, 'utf-8');
console.log(fileMaterial.toString());



console.log("reading file end")


// ///////////////////////////////////////////////////////////////////////////////////////////
// Perfect Faraz 👑
// Now we’re entering real backend + interview depth level.

// I’ll explain:

// What is the FS module

// How async file reading works

// How sync file reading works

// Difference between them

// Every keyword in your code

// What is UTF-8

// What is error & data

// What is toString()

// What interviewers expect you to know

// Let’s go step by step 🔥

// 🔵 1️⃣ What is fs Module in Node.js?
// const fs = require('fs');

// ✅ What is fs?

// fs = File System module

// It is a built-in Node.js module used to:

// Read files

// Write files

// Update files

// Delete files

// Rename files

// Work with directories

// Node.js does not have direct file access in JS like browsers.

// So Node provides fs module to interact with your OS file system.

// ✅ What does require('fs') do?

// Loads the built-in fs module

// Returns an object

// That object contains many methods like:

// readFile

// readFileSync

// writeFile

// appendFile

// unlink

// mkdir

// etc

// 🔵 2️⃣ This Line
// const FilePath = './Fileread.txt';

// ✅ What is this?

// A string path to the file

// ./ means current directory

// Fileread.txt must exist in same folder

// If file does not exist → error comes.

// 🔥 PART 1 — ASYNCHRONOUS FILE READING
// fs.readFile(FilePath, 'utf-8', (err, data) => {
//    console.log(data.toString());
// });

// 🟢 What is fs.readFile()?

// It is an asynchronous method.

// Meaning:

// It does NOT block the main thread.

// It delegates file reading to libuv thread pool.

// It returns immediately.

// 🔹 Parameters Explained
// 1️⃣ FilePath

// Path of file to read.

// 2️⃣ 'utf-8'

// This is encoding.

// Without encoding:
// Node returns a Buffer object.

// With encoding:
// Node returns a string.

// 🟣 What is UTF-8?

// UTF-8 is a character encoding format.

// Computers store data in binary (0s and 1s).

// UTF-8 tells:

// How to convert binary into readable characters.

// Example:

// English letters

// Emojis

// Symbols

// Multilingual text

// UTF-8 is most common encoding in web.

// Interview line:

// UTF-8 is a variable-length character encoding standard used for representing Unicode characters.

// 3️⃣ (err, data) => {}

// This is callback function.

// Node uses error-first callback pattern.

// Always:

// (err, result) => {}


// If error occurs:

// err contains error object

// data is undefined

// If success:

// err is null

// data contains file content

// 🟡 Example When Error Happens

// If file does not exist:

// const FilePath = './wrongfile.txt';


// Then error object:

// Error: ENOENT: no such file or directory


// Proper handling:

// fs.readFile(FilePath, 'utf-8', (err, data) => {
//    if (err) {
//        console.log("Error occurred:", err.message);
//        return;
//    }
//    console.log(data);
// });


// Interview important:

// Always handle errors in async operations.

// 🔵 What is data?

// It contains:

// File content

// As string (if encoding provided)

// As Buffer (if encoding not provided)

// 🔵 What is toString()?

// If no encoding is provided:

// fs.readFile(FilePath, (err, data) => {
//    console.log(data); // Buffer
// });


// Output:

// <Buffer 48 65 6c 6c 6f>


// So we use:

// data.toString()


// It converts Buffer → string.

// But if you already passed 'utf-8', then:

// You don’t need to use toString().

// Because data is already string.

// 🟢 Flow of Async Version
// console.log("reading file start");

// fs.readFile(...);

// console.log("reading file end");


// Output:

// reading file start
// reading file end
// ---------read file content
// Hello world


// Why?

// Because:

// readFile is async

// Node sends file task to libuv

// Continues execution

// Later callback executes

// This is:

// ✔ Non-blocking
// ✔ Event-driven

// 🔥 PART 2 — SYNCHRONOUS FILE READING
// const fileMaterial = fs.readFileSync(FilePath, 'utf-8');

// 🟢 What is readFileSync()?

// Sync = Synchronous

// Meaning:

// Blocks main thread

// Waits until file reading completes

// Then continues execution

// 🟢 Flow of Sync Version
// console.log("reading file start");

// const fileMaterial = fs.readFileSync(...);

// console.log(fileMaterial);

// console.log("reading file end");


// Output:

// reading file start
// Hello world
// reading file end


// Why?

// Because:

// Node waits for file reading to finish.

// Main thread is blocked.

// 🔥 Major Difference Between Sync & Async
// Feature	Async (readFile)	Sync (readFileSync)
// Blocking	❌ No	✅ Yes
// Uses callback	✅ Yes	❌ No
// Uses libuv	✅ Yes	❌ No
// Performance	Better	Worse
// Used in server?	✅ Yes	❌ Avoid
// 🚨 Why Sync is Dangerous in Servers?

// Imagine 1000 users hit server.

// If you use readFileSync:

// One request blocks thread

// Other users wait

// Server becomes slow

// Interview line:

// Synchronous methods should not be used in production servers because they block the event loop.

// 🔥 What Happens Internally (Deep Concept)

// Async version:

// JS thread sends task to libuv thread pool

// libuv reads file

// When complete → pushes callback to event queue

// Event loop executes callback

// Sync version:

// JS thread directly performs file read

// Everything stops

// After complete → continues

// 🧠 Why Does Node Provide Both?

// Sync version useful for:

// CLI tools

// Startup configuration reading

// Small scripts

// Async version useful for:

// Web servers

// APIs

// Production apps

// 🔥 Important Interview Concepts Related to FS
// 1️⃣ Buffer

// Raw binary data container.

// Node uses Buffer for file operations.

// 2️⃣ Error-First Callback Pattern

// Node standard:

// (err, data) => {}

// 3️⃣ libuv Thread Pool

// Default size = 4 threads

// Used for:

// File system

// DNS

// Crypto

// Some async operations

// 4️⃣ Streams (Advanced)

// For large files:

// Instead of readFile:

// Use:

// fs.createReadStream()


// Because readFile loads entire file into memory.

// 🔥 If Interviewer Asks
// Q: Difference between readFile and readFileSync?

// Answer:

// readFile is asynchronous and non-blocking. It delegates file I/O to libuv and executes callback once completed.
// readFileSync is synchronous and blocks the event loop until file reading finishes.

// Q: What is UTF-8?

// UTF-8 is a character encoding format used to convert binary data into readable text characters.

// Q: What happens if file doesn’t exist?

// Async:

// err object populated

// Sync:

// Throws error immediately

// Crashes program if not handled

// Example:

// try {
//    fs.readFileSync("wrong.txt");
// } catch(err) {
//    console.log(err.message);
// }

// 🏆 Final Summary
// fs module:

// Used for interacting with OS file system.

// readFile:

// Async, non-blocking, production safe.

// readFileSync:

// Blocking, avoid in servers.

// toString():

// Converts Buffer to string.

// UTF-8:

// Character encoding format.

// err:

// Error object if something fails.

// data:

// File content.

//////////////////////////////////////////////////////////////////==========================

// // //. we should not NEVER USE readFileSync or readFile for Big files (1gb file)
// // for smaller files we can use any thing here 

// Excellent 🔥 Faraz, this is a very important advanced concept your sir is explaining.

// He is not just talking about sync vs async.

// He is talking about:

// 🔥 Memory consumption + OS behavior + libuv + why readFile is dangerous for large files (like 1GB)

// Let me break down what your sir is trying to say in very clear technical terms.

// 🎯 First Understand the Core Idea

// Your sir is saying:

// Even if readFile() is asynchronous and non-blocking, it is still dangerous for very large files (like 1GB) because it loads the entire file into RAM.

// So the problem is not blocking.

// The problem is memory usage.

// 🧠 Step-by-Step What Sir Is Explaining
// 🖥️ 1️⃣ Where File Actually Lives?

// A 1GB file is stored in:

// Hard Disk (HDD / SSD)


// Not in RAM.

// 🧠 2️⃣ What Does "Reading a File" Actually Mean?

// When you call:

// fs.readFile("bigfile.txt")


// Behind the scenes:

// Node tells libuv

// libuv asks OS

// OS reads file from disk

// Entire file is copied into RAM

// Then given to your program

// So:

// Reading file = Loading file from disk → into RAM

// 💥 The Real Problem

// Let’s say:

// Your system has 8GB RAM

// Chrome is using 4GB 😅

// Other apps using 3.5GB

// Only 300MB free

// Now you try:

// fs.readFile("1GB-file.txt")


// What happens?

// OS tries to load 1GB into RAM.

// But only 300MB available.

// Result:

// ❌ Memory pressure

// ❌ System slowdown

// ❌ Possible crash

// ❌ Node process may die (Out Of Memory)

// 🔥 Important Point

// Your sir is saying:

// Even though readFile() is asynchronous and non-blocking…

// It still loads entire file into memory.

// So:

// ✔ Non-blocking
// ❌ Not memory-efficient

// 🧵 Where Does libuv Fit?

// Node is single-threaded.

// For file operations:

// Node delegates file reading to libuv thread pool

// libuv asks OS to read file

// OS loads entire file into RAM

// Then libuv gives data back to JS

// But memory loading still happens fully.

// libuv does not magically stream the file.

// ⚠️ Key Difference
// Problem Type	Sync Version	Async Version
// Blocks main thread	✅ Yes	❌ No
// Loads entire file into RAM	✅ Yes	✅ Yes
// Safe for 1GB file	❌ No	❌ No

// This is what sir wants you to understand.

// 🚀 So What Should Be Used For 1GB File?

// Answer:

// fs.createReadStream()


// Because stream:

// Reads small chunks (like 64KB)

// Processes chunk

// Clears memory

// Reads next chunk

// Memory usage stays small.

// 🧠 Real-World Example

// Imagine drinking water.

// readFile()

// Like pouring entire 1GB water tank into a small glass.

// Glass overflows.

// createReadStream()

// Like drinking sip by sip.

// Memory safe.

// 🎯 Why Sir Said “Operating System + RAM”?

// Because:

// When file is read:

// OS loads file from disk → RAM buffer.

// Node does not directly read from disk.

// Everything goes through OS memory management.

// 🔥 What Happens If RAM Is Full?

// OS may:

// Use swap memory (very slow)

// Kill process

// Throw memory error

// System hang

// In Node, you may see:

// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

// 🎓 Interview-Level Explanation

// If interviewer asks:

// Is async readFile safe for large files?

// Correct answer:

// No. Even though it is non-blocking, it loads the entire file into memory. For large files, we should use streams to process data in chunks to avoid high memory usage.

// 🔥 Final Concept Summary

// Your sir is teaching:

// 1️⃣ Non-blocking does NOT mean memory-efficient.
// 2️⃣ readFile and readFileSync both load entire file into RAM.
// 3️⃣ Large files should use streams.
// 4️⃣ OS is responsible for moving file from disk to RAM.
// 5️⃣ libuv handles async execution, not memory optimization.
// 🏆 One-Line Core Lesson

// For large files, the problem is not blocking — the problem is memory consumption.





