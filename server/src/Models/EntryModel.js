import mongoose from 'mongoose'

const Entry = new mongoose.Schema({
  device: {
    type: String,
    required: true
  },
  personGiven: {
    type: String,
    required: true
  },
  deliverDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String
  },
  personManager: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  delegation: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('EntryModel', Entry)
