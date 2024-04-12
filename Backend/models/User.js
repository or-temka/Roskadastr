import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    dateOfBirth: String,
    city: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    services: {
      type: Array,
      default: [],
    },
    messages: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('User', UserSchema)
