📘 BACKEND DEVELOPMENT NOTES — EXPRESS.JS FUNDAMENTALS
1. Why Are We Moving from Core Node.js HTTP Module to Express.js?

In the initial stage of backend development, we begin by creating servers using Node.js's built-in HTTP module. This helps us understand how the internet actually works at a low level — how requests are received, how responses are sent, how URLs are interpreted, and how routing decisions are made manually by checking req.url. This foundational understanding is extremely important because it introduces the internal working of web servers.

However, as soon as the size of an application begins to grow, managing routes using plain Node.js becomes extremely inefficient and difficult. In Node.js HTTP module, every incoming request must be handled manually using if-else conditions to determine which URL was accessed. If an application contains ten routes, this approach is manageable. But in real-world production applications where there may be hundreds of routes, authentication logic, logging, validation, filtering, pagination, middleware execution, etc., handling everything manually becomes extremely complex, error-prone, and unscalable.

This is where Express.js becomes essential. Express is a framework built on top of Node.js that simplifies the entire process of server creation and API development. It internally uses the HTTP module but provides developers with a cleaner abstraction layer for routing, middleware usage, query parsing, request handling, and response management.

If you choose not to learn Express and continue building applications using only Node's HTTP module, you will eventually face severe scalability problems. Your backend code will become difficult to maintain, debugging will become challenging, implementing authentication or validation will require repetitive logic, and building RESTful APIs — which are industry standards — will become unnecessarily complicated. In professional backend development environments, Express or similar frameworks are almost always used. Therefore, learning Express is not optional if you want to build scalable real-world APIs.

2. Understanding API Versioning and Why We Study It

In your code, you are defining routes using a prefix such as /api/v1/. This concept is known as API versioning. The purpose of versioning APIs is to ensure backward compatibility when changes are introduced into an application in the future.

Suppose a mobile application is currently using version 1 of your backend API and expects certain data structures in the response. Later, if you decide to change the structure of the response in order to introduce new features, the older version of the mobile application may break because it was designed to work with the previous format.

To avoid this situation, developers introduce versioned routes such as /api/v1/users and /api/v2/users. The old application continues using version 1, while newer clients can migrate to version 2. This allows developers to improve systems without disrupting existing users.

If you do not learn API versioning at this stage, you may unintentionally create breaking changes in your backend services in the future, leading to application crashes, failed integrations, or inconsistent data communication between frontend and backend systems. Versioning is a core industry practice used in almost all production-grade APIs.

3. REST API Endpoint Design — Why We Use Nouns Instead of Verbs

You have been instructed to create endpoints like /api/v1/users instead of something like /getUsers. This is because REST API design principles recommend using nouns in route names and allowing HTTP methods (GET, POST, PUT, DELETE) to represent the action being performed.

For example:

GET /users means fetch users

POST /users means create a new user

PUT /users/:id means update an existing user

DELETE /users/:id means delete a user

In this design pattern, the route represents a resource, and the HTTP method represents the operation performed on that resource.

If developers start creating endpoints using verbs such as /getUsers, /createUser, /deleteUser, etc., the system becomes inconsistent and difficult to maintain. It also violates REST architectural constraints, which are followed across enterprise-level backend systems. Not learning this principle can result in poorly structured APIs that are difficult to scale, document, or integrate with frontend applications or third-party services.

4. Query Parameters — Why We Study Them and What They Enable

Query parameters are used to send additional filtering or searching information to the backend through the URL. In real-world applications such as e-commerce platforms, social media websites, dashboards, analytics platforms, and admin panels, users frequently need to filter data based on specific criteria such as gender, age, city, price range, category, or rating.

For example, a client might request:

/api/v1/users?gender=male&city=delhi&age=21

This means the frontend is requesting users who match these filtering conditions. Express automatically extracts this information and makes it available in the req.query object.

If you do not learn how query parameters work, you will not be able to implement essential features such as search filters, pagination, sorting, dashboard analytics, product filtering, or user segmentation. This would make it impossible to build dynamic data-driven applications, which are fundamental in modern backend systems.

5. Line-by-Line Explanation of Your Code and Execution Flow
Importing Express
const express = require('express');

This line imports the Express framework into your Node.js application. Without importing Express, none of the routing or middleware functionalities provided by the framework can be used.

Creating the Application Instance
const app = express();

This line initializes your backend application. The app object acts as the central controller through which routes are defined, middleware is applied, and the server is eventually started.

Defining the Port
const port = 8099;

This specifies the port number on which your backend server will listen for incoming HTTP requests from clients such as browsers or tools like Postman.

Creating the Home Endpoint
app.get("/api/v1/",(req,res)=>{
    res.send("welcome to homepage");
})

This defines a GET route. Whenever a client sends a GET request to /api/v1/, Express matches this route and executes the callback function. The callback receives the request (req) and response (res) objects. The server then sends a response back to the client using res.send().

About Endpoint
app.get("/api/v1/about",(req,res)=>{
    res.send("welcome to abouts page");
});

This endpoint responds when a GET request is made to /api/v1/about. It follows RESTful routing and returns a simple text response.

Contact Endpoint
app.get("/api/v1/contact",(req,res)=>{
    res.send("welcome to contact page 8299677254");
});

Similar to the previous endpoints, this route handles GET requests directed at /api/v1/contact.

Users Endpoint with Query Parameters
app.get("/api/v1/users", (req,res) =>{

This route handles GET requests sent to /api/v1/users.

const queryparams = req.query;

Express extracts query parameters from the URL and stores them inside req.query as a JavaScript object.

const gender = queryparams.gender;
const city = queryparams.city;
const age = queryparams.age;

These lines retrieve individual filtering values sent by the client through the URL.

if(!gender){
    return res.send("Gender is missing ❌");
}

This performs backend validation to ensure that a required parameter has been provided by the client before proceeding.

res.send("user want data of gender" + gender + "and city" + city + "and age" + age);

This sends a dynamic response based on the client-provided parameters.

Starting the Server
app.listen(port, () => {
    console.log("hey im listing on port", port);
});

This command starts the backend server and allows it to listen for incoming HTTP requests on the specified port.

6. Execution Flow Summary

When the server is started using node index.js, Express initializes the application and begins listening on port 8099. When a client sends a request such as:

http://localhost:8099/api/v1/users?gender=male&city=delhi&age=21

Express matches the request URL with the defined route /api/v1/users. It then extracts the query parameters from the URL and stores them in req.query. The callback function retrieves these values, validates the required parameter (gender), and constructs a response which is then sent back to the client.

If you master these concepts now, you will be able to build scalable REST APIs with filtering capabilities in real-world applications. Ignoring these fundamentals will make it significantly harder to implement production-level backend features in the future.