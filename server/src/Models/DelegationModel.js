import mongoose from 'mongoose'

const DelegationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

export default mongoose.model('DelegationModel', DelegationSchema)
