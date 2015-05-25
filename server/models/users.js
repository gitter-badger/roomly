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
  
  //Required from the user
  apartmentInformation: {
    apartmentImages: String,
    priceForLease: Number,
    lengthOfLease: Number,
    location: String,
    description: String

  }
  
  //preference can go here.
  
});

// Export the model schema.
module.exports = roomlySchema;