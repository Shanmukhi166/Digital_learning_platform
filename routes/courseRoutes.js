const express = require("express");
const router = express.Router();
const pool = require("../database/db");


// Add Course API
router.post("/add", async (req, res) => {

    try {

        const {
            title,
            description,
            language,
            teacher_name
        } = req.body;

        const newCourse = await pool.query(
            `INSERT INTO courses
            (title, description, language, teacher_name)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [title, description, language, teacher_name]
        );

        res.json({
            message: "Course added successfully",
            course: newCourse.rows[0]
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Server error"
        });

    }

});


// Get All Courses API
router.get("/", async (req, res) => {

    try {

        const courses = await pool.query(
            "SELECT * FROM courses"
        );

        res.json(courses.rows);

    } catch (error) {

        console.log(error);

    }

});


module.exports = router;