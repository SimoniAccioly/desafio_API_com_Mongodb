const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const filmesSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId, 
      auto: true, 
      required: true, 
    },
    Title: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: true,
    },
    Rated: {
      type: String,
      required: true,
    },
    Released: {
      type: String,
      required: true,
    },
    Runtime: {
      type: String,
      required: true,
    },
    Genre: {
      type: String,
      required: true,
    },
    Director: {
      type: Array,
      required: true,
    },
    Writer: {
      type: String,
      required: true,
    },
    Actors: {
      type: String,
      required: true,
    },
    Plot: {
      type: String,
      required: true,
    },
    Language: {
      type: Array,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Awards: {
        type: String,
        required: true,
    },
},
  { collection: "filmes", 
    versionKey: false, 
  }
);

const filmesCollection = mongoose.model("filmes", filmesSchema);

module.exports = {filmesCollection};
