let mongoose = require('mongoose');

// create a model class
let movieModel = mongoose.Schema({
Name: String,
Released: Number,
Genre: String,
Description: String
},
{
    collection: "movies"
});

module.exports = mongoose.model('Movie', movieModel);