const express = require("express");
const router = express.Router();

router.post("/sync", async (req, res) => {

    try {

        const offlineData = req.body;

        console.log("Received offline data:");
        console.log(offlineData);

        res.json({
            message: "Offline data synced successfully",
            syncedData: offlineData
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Sync failed"
        });

    }

});

module.exports = router;