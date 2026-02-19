const express = require('express');
const app = express();
const port = 8099;

// app.get("/", (req, res) => { // this way of creating endpoint is bad , for home page we should create /api/v1/home
//     res.send("welcome to homepage");
// });

// ******** correct way of creating endpoint is below ********

app.get("/api/v1/",(req,res) =>{    // this wy of creating endpoint is good , for home page we should create /api/v1/home
    res.send("welcome to homepage");
})

// app.get("/about", (req, res) => { // this way of creating endpoint is bad , for about page we should create /api/v1/about
//     res.send("welcome to abouts page");
// });

// ******** correct way of creating endpoint is below ********

app.get("/api/v1/about", (req, res) => { // this way of creating endpoint is good , for about page we should create /api/v1/about
    res.send("welcome to abouts page");
});



// app.get("/contact", (req, res) => { // this way of creating endpoint is bad , for contact page we should create /api/v1/contact
//     res.send("welcome to contact page 8299677254");
// });

// ******** correct way of creating endpoint is below ********

app.get("/api/v1/contact", (req, res) => { // this way of creating endpoint is good , for contact page we should create /api/v1/contact
    res.send("welcome to contact page 8299677254");
});

// creating api endpoints

// USE NOUNS NOT VERBS

// -----------get all users--------
// GET - /api/v1/users

// ---------CREATE NEW USER---------
// POST - /api/v1/user



// ********* QUERY PARAMS*********
app.get("/api/v1/users", (req,res) =>{
    const queryparams = req.query;
    const gender = queryparams.gender;
    const city = queryparams.city;
    const age = queryparams.age;

    if(!gender){
        return res.send("Gender is missing ❌");
    }

    res.send("user want data of gender" + gender + "and city" + city + "and age" + age);

     
})





app.listen(port, () => {
    console.log("hey im listing on port", port);
});