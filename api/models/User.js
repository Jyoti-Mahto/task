import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: 'Name should only contain alphabets'
      }
    },
    city: {
      type: String,
      required: true,
      ref: 'City'
    },
    mobile: {
      type: String,
      validate: {
        validator: function(v) {
          return /^\d+$/.test(v);
        },
        message: 'Mobile number should only contain digits'
      }
    },
    mediaUrl: {
      type: String,
      validate: {
        validator: function(v) {
          return /^https:\/\/.+$/.test(v);
        },
        message: 'Media URL should start with https://'
      }
    },
    id: {
      type: String,
      default: () => {
        return uuidv4();
      }
    }
  });
  
  const User = mongoose.model('User', userSchema);

  export default User;
  