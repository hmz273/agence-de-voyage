const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const TravelSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  images: [{
        type: String,
        required: true,
    }],

  
});

const Travel = Mongoose.model("Travel", TravelSchema);

module.exports = Travel;
