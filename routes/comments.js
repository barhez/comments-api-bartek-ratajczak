import express from 'express';

const router = express.Router();
const comments = require("../controllers/comment");


// Create a new Comment
router.post("/", comments.create);

// Retrieve all Comments
router.get("/", comments.findAll);


module.exports = router;
