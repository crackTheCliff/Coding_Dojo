const mongoose = require('mongoose');

const database = 'jokes'
// replace local host with 0.0.0.0 if you have NODE Version 18 or higher!!!
mongoose.connect('mongodb://0.0.0.0/jokes', {
    useNewURLParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`You have established a connection to ${database} database`))
    .catch((err) => console.log(`Error establishing a connection to ${database} database`, err))