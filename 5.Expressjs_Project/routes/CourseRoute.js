const express = require('express');
const { GetAllCourses, CreateCourse, GetCourseById } = require('../Controller/CourseController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


// get all course
router.get("/", AuthMiddleware, GetAllCourses)


// create course
router.post("/", CreateCourse)



// get course by id -> by url params
router.get("/:id", AuthMiddleware, GetCourseById)



module.exports = router;