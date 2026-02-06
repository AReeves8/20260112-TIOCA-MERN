import mongoose from "mongoose";


/**
 * use mongoose.Schema to create the mapping of your data structures to your mongo db
 */
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: Number,
    releaseYear: Number,
    director : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director"             // reference to name of director model
    }
});

// creting custom queries
movieSchema.statics.findByMinRating = (minRating) => {
    return Movie.find({rating: {$gte: minRating}});
}

// creting custom query helpers
movieSchema.query.byDirector = function (directorId) {
    return this.where({director: directorId});
}

export const Movie = mongoose.model("Movie", movieSchema);