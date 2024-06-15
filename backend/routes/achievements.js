// const express = require('express');
// const router = express.Router();
// const Achievement = require('../models/Achievement');

// // Get achievements for a user
// router.get('/:userId', async (req, res) => {
//     try {
//         const achievements = await Achievement.find({ userId: req.params.userId });
//         res.json(achievements);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Add a new achievement
// router.post('/', async (req, res) => {
//     const { userId, category, game, achievement } = req.body;
//     const newAchievement = new Achievement({ userId, category, game, achievement });

//     try {
//         const savedAchievement = await newAchievement.save();
//         res.status(201).json(savedAchievement);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// module.exports = router;
