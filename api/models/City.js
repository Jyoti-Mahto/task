import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    cityName: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: 'City name should only contain alphabets'
      }
    }
  });
  
  const City = mongoose.model('City', citySchema);

  export default City;