const express = require("express");
const Activity = require("../models/activity");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await Activity.aggregate([{ $sample: { size: 1 } }]).then(function ([activity]) {
            res.json(activity);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router