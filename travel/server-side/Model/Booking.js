const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const BookingSchema = new Mongoose.Schema({
    
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  cin: {
    type: String,
    required: true,
    unique: true,
  },

  status: {
    type: String,
    default: "pending",
    required: true,
  },
  
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  travel: { type: Schema.Types.ObjectId, ref: 'Travel', required: true },
  

});

const Booking = Mongoose.model("Booking", BookingSchema);

module.exports = Booking;
