const http = require('http');
const port = 8089;

// const server = http.createServer((req,res) =>{
//  res.write("hello");
//  res.end();
// });

const server = http.createServer((req, res) => {
   const url = req.url;
   if(url === "/") {
    res.write("welcome to homepage");
     res.end();
   }
   else if(url === "/about") {
    res.write("welcome to about page");
    res.end();
   }
   else if(url === "/contact") {
    res.write("welcome to contact page");
     res.end();
   }
   else{
    res.write("404 page not found ");
    res.end();
   }
})

server.listen(port, ()=>{
    console.log("hey im listing on port",port)
})


// // 
// 🔹 1️⃣ const http = require('http');
// ✅ const

// ES6 keyword

// Creates a constant variable

// Cannot be reassigned

// Block scoped

// Interview point:

// Why const?
// Because we don’t want to reassign the http module reference.

// ✅ require()

// Built-in Node.js function

// Used to import modules (CommonJS system)

// Loads the module

// Caches it

// Returns exported object

// Internally:

// Node looks inside node_modules

// Then built-in modules

// Finds 'http'

// Loads it once

// Caches it

// ✅ 'http'

// Built-in Node.js module

// Allows creating HTTP servers and clients

// Based on TCP protocol

// So this line means:

// “Give me the HTTP module so I can create a server.”

// 🔹 2️⃣ const port = 8089;
// ✅ What is port?

// A port is a door number on your computer.

// Your computer = building
// Port = door

// Example:

// 3000

// 8080

// 8089

// When you open:

// http://localhost:8089


// Browser says:

// Connect to my computer on door 8089

// Why 8089?

// No special reason.
// You can use any unused port.

// Interview Tip:

// 80 = default HTTP

// 443 = HTTPS

// 3000 / 8080 = development

// 🔹 3️⃣ const server = http.createServer(...)

// Now important part 🔥

// ✅ http.createServer()

// This method:

// Creates a new HTTP server

// Returns a server object

// Internally:

// Creates TCP server

// Listens for HTTP requests

// Attaches request handler function

// ✅ (req, res) => {}

// This is:

// Arrow function (callback)

// This function runs:

// Every time a client makes a request

// Important:
// This is called Request Listener Function

// 🔥 What is req?

// req = Incoming request object

// Contains:

// URL

// Method (GET, POST)

// Headers

// Body

// Query params

// Example:

// req.url
// req.method
// req.headers

// 🔥 What is res?

// res = Server response object

// Used to:

// Send data

// Set headers

// Set status code

// End response

// So this line means:

// "Whenever someone hits my server, run this function."

// 🔹 4️⃣ res.write("hello");
// What does it do?

// Writes data to response body

// Sends chunk of data

// DOES NOT close connection

// Think like:

// You started writing a letter
// But haven’t sealed the envelope

// You can write multiple times:

// res.write("Hello ");
// res.write("World");
// res.end();


// Output:

// Hello World

// 🔹 5️⃣ res.end();

// This is VERY important 🔥

// What it does:

// Ends the response

// Sends final data

// Closes connection

// If you don’t call res.end():

// ❌ Browser keeps waiting
// ❌ Request never finishes
// ❌ Loading spinner continues
// ❌ Connection stays open

// Interview Question:

// What happens if res.end() is not called?

// Answer:
// The response will never complete and the client will hang waiting for the server to finish sending data.

// You can also combine:

// res.end("hello");


// Which means:

// Write

// End

// Close

// In one step

// 🔹 6️⃣ server.listen(port, callback)

// This starts the server.

// Before this line:

// Server exists
// But not listening

// After this line:

// Server is active
// Ready to accept requests

// Parameters:
// server.listen(port, () => {})

// port

// Tells server which port to listen on.

// Callback function

// Runs when server starts successfully.

// So this:

// console.log("hey im listing on port", port);


// Means:

// “Server started successfully.”

// 🔥 COMPLETE FLOW OF EXECUTION

// Let’s go step-by-step what happens when you run:

// node index.js

// Step 1

// Node loads file.

// Step 2

// require('http')
// Loads HTTP module.

// Step 3

// createServer()
// Creates server object.
// Attaches request handler function.

// Server NOT active yet.

// Step 4

// server.listen(8089)
// Server opens port 8089.
// Starts listening.

// Event loop starts waiting.

// Step 5

// You open browser:

// http://localhost:8089


// Browser sends HTTP request.

// Step 6

// Server receives request.

// Node triggers:

// (req, res) => {}

// Step 7

// Inside function:

// res.write("hello");
// res.end();


// Server sends response.

// Step 8

// Browser receives response.

// Displays:

// hello


// Connection closed.

// 🧠 How This Connects to Event Loop

// When request comes:

// It becomes an event

// Node pushes it to event queue

// Event loop executes handler

// Response sent

// Node is:

// Event-driven

// Non-blocking

// 🔥 Interview-Level Concepts You Should Know
// 1️⃣ HTTP is Stateless

// Each request is independent.

// 2️⃣ Node.js uses Single Thread

// One JS thread handles all requests.

// 3️⃣ Asynchronous I/O

// File, DB, network handled by libuv.

// 4️⃣ Server Object is EventEmitter

// You can do:

// server.on('request', (req, res) => {})


// Because internally, it emits events.

// 5️⃣ Difference Between write & end
// Method	What it does
// write()	Sends chunk
// end()	Ends response
// 6️⃣ What If Multiple Requests Come?

// Node handles them using:

// Event loop

// Non-blocking I/O

// 🔥 Cleaner Production Version
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(8089);

// 🏆 If Interviewer Asks:

// Q: What happens when you hit localhost:8089?

// Answer like this:

// Browser sends HTTP request →
// Node server listening on port 8089 receives request →
// createServer callback executes →
// res.write sends response body →
// res.end finalizes response →
// Connection closes →
// Browser renders output.

// 🚀 Final Summary
// Line	Purpose
// require	Import module
// port	Define network door
// createServer	Create HTTP server
// req	Request object
// res	Response object
// write	Send data
// end	Finish response
// listen	Start server
// // 