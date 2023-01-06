import mongoose from "mongoose"
import validator from "validator"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: [true, "Username is required"], 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    validate: (email: string) => validator.isEmail(email), 
    unique: true },
  password: { 
    type: String, 
    required: true, 
  }
})

userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator'})

export default mongoose.model("User", userSchema)