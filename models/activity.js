const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity: String
}, { versionKey: false });

module.exports = mongoose.model('activities', activitySchema)