const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Requires a setup!"],
        minLength: [10, "Setup minimum length is 10!"]
    },
    punchline: {
        type: String,
        required: [true, "Requires a punchline!"],
        minLength: [3, "Setup minimum length is 3!"]
    },
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;