let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let Movie = require('../models/movie');


router.get('/', (req, res, next) =>{
    Movie.find({}).then( movieList => {
        console.log("Route movie.."); // debug purpose

        console.log(movieList); // debug purpose (show data in terminal)

        res.render('movie',{title: 'Movie List', MovieList: movieList})
        
    }).catch((err) => console.log(err)); 
    
});



module.exports = router;