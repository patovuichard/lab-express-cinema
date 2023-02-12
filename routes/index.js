const express = require('express');
const router = express.Router();
const app = require("../app")
const MoviesModel = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next)=>{
  MoviesModel.find()
  .then((response)=>{
    // console.log(response)
    res.render("movies.hbs", {
      allMovies: response
    })
  })
  .catch((err)=>{
    next(err)
  })
})

router.get("/movies/:id", (req, res, next)=>{
  const {id} = req.params
  MoviesModel.findById(id)
  .then((response)=>{
    // console.log(response)
    res.render("details.hbs", {
      oneMovie: response
    })
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;
