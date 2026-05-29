const express = require("express");
const syncRoutes = require("./routes/syncRoutes");
const progressRoutes = require("./routes/progressRoutes");
const courseRoutes = require("./routes/courseRoutes");
const cors = require("cors");
const pool = require("./database/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/sync", syncRoutes);

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            message: "Backend Running Successfully",
            database_time: result.rows[0]
        });

    } catch (error) {
        console.log(error);
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});