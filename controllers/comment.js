const db = require("../models");
const Comment = db.Comment;
const Op = db.Sequelize.Op;

// Create and Save a new Comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body.message || !req.body.author ) {
        res.status(400).send({
        message: "Komentarz musi zawierać treść i autora!"
        });
        return;
    }

    // Create a Comment
    const comment = {
        message: req.body.message,
        author: req.body.author,
    };

    // Save Comment in the database
    Comment.create(comment)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Wystąpił błąd podczas tworzenia komentarza."
        });
        });
};

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
    Comment.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Wystąpił błąd podczas pobierania komentarz."
            });
        });
};
