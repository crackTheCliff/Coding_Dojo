const Joke = require("../models/jokes.model")

module.exports.getAll = (req, res) => {
    Joke.find()
        .then(jokes => res.json({ jokes: jokes }))
        .catch(err => res.json({ message: "ERROR with getAll", error: err }));
}

module.exports.getRandom = (req, res) => {
    Joke.find()
        .then(jokes => res.json({ jokes: jokes[Math.floor(Math.random()*jokes.length)] }))
        .catch(err => res.json({ message: "ERROR with getAll", error: err }));
}

module.exports.getOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "ERROR with getOne", error: err }));
}

module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ newJoke: newJoke }))
        .catch(err => res.json({ message: "ERROR with create", error: err }));
}

module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ update: updatedJoke }))
        .catch(err => res.json({ message: "ERROR with update", error: err }));
}

module.exports.delete = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => res.json({ delete: deleteJoke }))
        .catch(err => res.json({ message: "ERROR with delete", error: err }));
}
