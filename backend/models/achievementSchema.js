const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    description: { type: String },
    dateAchieved: { type: Date, required: true }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;