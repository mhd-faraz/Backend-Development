const courses = require("../models/data");


function CreateCourse(req, res,next) {
    // logic to create course will be here 
    // we will get data from req.body and then we will create course and then we will send response to client
    // we will use postman to test our api endpoints and we will send data in json format in postman and then we will get that data in req.body and then we will create course and then we will send response to client


    // why we need middleware before this line
    // we need middleware before this line because we have to parse the data which we are getting from client in json format and this middleware will convert the data which we are getting from client in json format to javascript object and then we can use that data to create course and then we can send response to client and if we do not use this middleware before this line then we will not be able to parse the data which we are getting from client in json format and this middleware will not convert the data which we are getting from client in json format to javascript object and then we will not be able to use that data to create course and then we will not be able to send response to client and we will get error that cannot read property of undefined because we are trying to access property of undefined because we are not parsing the data coming from client in json format and converting it into js object so that we can use it in our code
    // we have to use express.json() middleware in index.js file and we have to use it before creating any endpoint because we have to parse the data which we are getting from client in json format and this middleware will convert the data which we are getting from client in json format to javascript object and then we can use that data to create course and then we can send response to client
    const body = req.body; // this is the data which we are getting from client in json format and this data will be in string format so we have to parse it to json format
    // we have to use express.json() middleware to parse the data which we are getting from client in json format and this middleware will convert the data which we are getting from client in json format to javascript object and then we can use that data to create course and then we can send response to client
    // we have to use express.json() middleware in index.js file and we have to use it before creating any endpoint because we have to parse the data which we are getting from client in json format and this middleware will convert the data which we are getting from client in json format to javascript object and then we can use that data to create course and then we can send response to client
    // 
    // console.log(body) // this will print the data which we are getting from client in json format and this data will be in string format so we have to parse it to json format and then we can use that data to create course and then we can send response to client
    // we have to use express.json() middleware to parse the data which we are getting from client in json format and this middleware will convert the data which we are getting from client in json format to javascript object and then we can use that data to create course and then we can send response to client
    courses.push(body);

    res.json(courses); //here res.json will convert the JS OBJECT store in req.body  to json format again bcz clients in json format

//   courses.push(payload) // this will add new course in courses array and this courses array is our database for now but in real world we will use database like mongodb or mysql to store our data and we will use mongoose or sequelize to interact with database but for now we are using array to store our data and we are using push method to add new course in courses array and then we will send response to client that course is created successfully
//   res.json(payload) 
    

}



function GetAllCourses(req,res) {
    // logic to get all courses will be here
    const data = courses; // this data we will get from database but for now we are getting it from data.js file
    // res.send(data) // this will send data in string format to client but we want to send data in json format to client so we will use res.json() method
    res.json(data); // this will send data in json format to client
    // 

}




function GetCourseById(req,res) {
    // URL se id lena
    const courseId = parseInt(req.params.id);

    // courses array me search karna
    const course = courses.find(course => course.id === courseId);

    if(course) {
        res.json(course);
    } else {
        res.status(404).json({ message: "Course not found" });
    }
}

module.exports = {CreateCourse,GetAllCourses, GetCourseById};