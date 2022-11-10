const AuthorModel = require('../models/author.model');

    // // Show Index - GET Request
    // module.exports.index = (req, res) => {
    //     res.json({
    //         message: "Hello World"
    //     });
    // }

    // Find all Authors
    module.exports.findAllAuthors = (req, res) => {
        AuthorModel.find()
            .then((allAuthors) => res.json(allAuthors))
            .catch(err => res.status(400).json(err));
    }

    // Get a Author by Id
    module.exports.findAuthorById = (req, res) => {
        AuthorModel.findById({ _id: req.params.id })
            .then((oneSingleAuthor) => res.json(oneSingleAuthor))
            .catch(err => res.status(400).json(err));
    }

    // Create a Author
    module.exports.createNewAuthor = (req, res) => {
        AuthorModel.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    }

    // Update a Author by Id
    module.exports.updateAuthorById = (req, res) => {
        AuthorModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    }

    // Delete all Authors
    module.exports.deleteAllAuthors = (req, res) => {
        AuthorModel.deleteMany({})
            .then((allDeletedAuthors) => res.json(allDeletedAuthors))
            .catch(err => res.status(400).json(err));
    }

    // Update a Author by Id
    module.exports.deleteAuthorById = (req, res) => {
        AuthorModel.findByIdAndDelete({ _id: req.params.id })
            .then((deletedAuthor) => res.json(deletedAuthor))
            .catch(err => res.status(400).json(err));
    }