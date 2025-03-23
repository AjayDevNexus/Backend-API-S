const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Create a quiz
router.post("/create", async (req, res) => {
  const { title, questions } = req.body;
  const newQuiz = new Quiz({ title, questions });

  try {
    await newQuiz.save();
    res.status(201).json({ message: "Quiz created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
