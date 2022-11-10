// Importing External Libraries (Mongoose)
const mongoose = require("mongoose");

// Setting connection to Mongo DB using 'mongoose' instance
mongoose.connect("mongodb://0.0.0.0/authors-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Successfully connected to Database"))
    .catch(err => console.log("Something went wrong when connecting to the database: ", err));