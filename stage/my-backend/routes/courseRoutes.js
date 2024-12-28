const express = require("express");
const multer = require("multer");
const Course = require("../models/Course");
const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Create a course
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
      price: req.body.price,
      image: req.file.path,
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a course
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updates = {
      title: req.body.title,
      price: req.body.price,
    };
    if (req.file) updates.image = req.file.path;

    const course = await Course.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
