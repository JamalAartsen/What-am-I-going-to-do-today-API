const express = require("express");
const Constants = require("../Constants");
const activity = require("../models/activity");
const Activity = require("../models/activity");
const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        const results = {};
        console.log("Example")
        try {
            results.results = await Activity.find();
            res.json(results);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    .post((req, res) => {
        const activity = new Activity({
            activity: req.body.activity
        });

        activity.save((err) => {
            if (err) {
                res.json({ 'Error': err.message });
            } else {
                res.json({ 'Result': Constants.SUCCESSFUL_ADD });
            }
        });
    });

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;

        Activity.findOne({ _id: id }, function (err, activity) {
            if (err) {
                res.json({ 'Error': err.message });
            } else {
                if (activity) {
                    res.json(activity);
                } else {
                    res.json({ 'Result': Constants.NO_CHARACTER_FOUND });
                }
            }
        });
    })
    .patch((req, res) => {
        const id = req.params.id;

        Activity.updateOne({ _id: id }, { '$set': { 'activity': req.body.activity } }, function (err, activity) {
            if (err) {
                res.json({ 'Error': err.message });
            } else {
                if (activity) {
                    res.json({ 'Result': Constants.SUCCESSFUL_CHANGED });
                } else {
                    res.json({ 'Result': Constants.NO_CHARACTER_FOUND });
                }
            }
        });
    })
    .delete((req, res) => {
        const id = req.params.id;

        Activity.deleteOne({ _id: id }, function (err, activity) {
            if (err) {
                res.json({ 'Error': err.message });
            } else {
                if (activity) {
                    res.json({ 'Result': Constants.SUCCESSFUL_DELETED });
                } else {
                    res.json({ 'Result': Constants.NO_CHARACTER_FOUND });
                }
            }
        });
    });

module.exports = router