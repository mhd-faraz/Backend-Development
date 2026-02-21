const express = require('express');
const { HomePageResponse, AboutPageResponse, ContactPageResponse  } = require('./Controller/HomePageController');
const HomeRoute = require('./routes/HomeRoute');
const CourseRoute = require('./routes/CourseRoute');
const app = express();
const port = 8099;

// it convert json data coming from postman to JS OBJECT bcoz server only understand js object 
// when it convert data in to JS OBJECT it stores in req.body 
app.use(express.json()); // this is used to parse the json data coming from client in request body and convert it into js object so that we can use it in our code
// we have to use this middleware before creating any endpoint because we have to parse the data coming from client in request body and convert it into js object so that we can use it in our code and if we use this middleware after creating endpoints then we will not be able to parse the data coming from client in request body and convert it into js object and we will not be able to use that data in our code and we will get error that cannot read property of undefined because we are trying to access property of undefined because we are not parsing the data coming from client in request body and converting it into js object so that we can use it in our code
// 



// **** before controller code
// app.get("/api/v1/", (req,res)=>{
//     res.send("welcome to about page of express !");
// })

// ***after controller code
// app.get("/api/v1/", HomePageResponse);


// **** before controller code
// app.get("/api/v1/about", (req,res)=>{
//     res.send("welcome to about page of express !");
// })

// ***after controller code
// app.get("/api/v1/about", AboutPageResponse);

// **** before controller code
// app.get("/api/v1/contact", (req,res)=>{
//     res.send("welcome to contact page of express");
// })

// ***after controller code
// app.get("/api/v1/about", ContactPageResponse);

// ** before creating route file we have to create endpoints like above but after creating route file we can write code like below and we can write all the endpoints related to home page in HomeRoute.js file and we can write all the logic related to home page in HomePageController.js file
// app.use allow all type of request get, post , delete , put 
// app.use("/api/v1/", HomeRoute); // this means that for all the endpoints which are starting with /api/v1/ we have to go to HomeRoute.js file and check if there is any endpoint which is matching with the request coming from client if there is then execute that endpoint otherwise send 404 not found
// because of router we can write all the endpoints related to home page in HomeRoute.js file and we can write all the logic related to home page in HomePageController.js file and this way our code will be more organized and maintainable

app.use("/api/v1/", HomeRoute);



// we have to create features related to course like create course , get all courses , get particular course , update course and delete course

// getAll course - GET - /api/v1/courses
// app.get("/api/v1/courses", (req,res) =>{})

// // create course - POST - /api/v1/course
// app.post("/api/v1/course",(req,res) =>{})

app.use("/api/v1/courses", CourseRoute);


app.listen(port,() =>{
    console.log("server is running on http://localhost:" + port);
})

