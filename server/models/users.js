var mongoose = require('mongoose');

// Create the userSchema.
//Add more schema here
var roomlySchema = new mongoose.Schema({
  firstName: {
    type: String, required: true
  },
  lastName: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  image: {
    type: String
  },
  roomOwner: {
    type: Boolean, reguired: true || false
  },
    apartmentImages: { type: String }, 
    priceForLease:  { type: Number},
    lengthOfLease:{ type:Number },
    location: { type: String } ,
    description: { type: String }
  
  //preference can go here.
  
});

// Export the model schema.
module.exports = roomlySchema;