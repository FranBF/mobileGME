import mongoose from 'mongoose'

const Manager = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

export default mongoose.model('ManagerModel', Manager)
