const express = require("express");
const router = express.Router();
const pool = require("../database/db");


// Add Progress API
router.post("/add", async (req, res) => {

    try {

        const {
            student_name,
            course_title,
            completion_percentage,
            quiz_score
        } = req.body;

        const progress = await pool.query(
            `INSERT INTO progress
            (student_name, course_title, completion_percentage, quiz_score)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [
                student_name,
                course_title,
                completion_percentage,
                quiz_score
            ]
        );

        res.json({
            message: "Progress added successfully",
            data: progress.rows[0]
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Server error"
        });

    }

});


// Get Progress API
router.get("/", async (req, res) => {

    try {

        const progress = await pool.query(
            "SELECT * FROM progress"
        );

        res.json(progress.rows);

    } catch (error) {

        console.log(error);

    }

});


module.exports = router;