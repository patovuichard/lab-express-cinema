const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    director: String,
    stars: [
        String
    ],
    image: String,
    description: String,
    showtimes: [
      String
    ]
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
}
);

const MoviesModel = mongoose.model("Movies", movieSchema);

module.exports = MoviesModel;