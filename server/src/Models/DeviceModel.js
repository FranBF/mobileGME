import mongoose from 'mongoose'

const Device = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('DevideModel', Device)
