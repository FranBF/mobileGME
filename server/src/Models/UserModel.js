import mongoose from 'mongoose'

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstTime: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

export default mongoose.model('UserModel', User)
