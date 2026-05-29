const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../database/db");

router.post("/register", async (req, res) => {
    try {

        const { name, email, password, role } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        const newUser = await pool.query(
            `INSERT INTO users (name, email, password, role)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [name, email, hashedPassword, role]
        );

        res.json({
            message: "User registered successfully",
            user: newUser.rows[0]
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Server error"
        });
    }
});
router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (user.rows.length === 0) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.rows[0].password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            {
                id: user.rows[0].id,
                role: user.rows[0].role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Server error"
        });
    }
});
router.get("/dashboard", authMiddleware, (req, res) => {

    res.json({
        message: "Welcome to dashboard",
        user: req.user
    });

});
module.exports = router;