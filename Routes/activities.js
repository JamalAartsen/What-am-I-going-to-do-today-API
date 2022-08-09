const express = require("express");
const Activity = require("../models/activity");
const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        const results = {};

        try {
            results.results = await Activity.find();
            res.json(results);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    })
    .post((req, res) => {
        const activity = new Activity({
            activity: req.body.activity
        });

        activity.save((err) => {
            if (err) {
                res.json({ "Error": err.message });
            } else {
                res.json({ "Result": "Added activity successfully!" })
            }
        });
    });

    module.exports = router