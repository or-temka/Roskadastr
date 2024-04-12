import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'active',
    },
    branchAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: String,
    cabinet: String,
    toHave: String,
    howToGo: String,
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Service', ServiceSchema)
