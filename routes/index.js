const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next)=>{
  
  // Crear la vista y probar renderizarla

  // Buscar la data en la DB
  MoviesModel.find()
  .then((response)=>{
    res.render("movies.hbs", {
      allMovies: response
    })
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;
