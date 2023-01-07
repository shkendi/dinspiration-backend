import mongoose from "mongoose"
import validator from "validator"
import uniqueValidator from "mongoose-unique-validator"
import mongooseHidden from "mongoose-hidden"

import bcrypt from "bcrypt"


// the userLifestyle variable corresponds to the following array: 
// ["low gi", "low carb", "high protein", "low calorie", "keto", "skip"]
// and must be an integer between 0 and 4
const userLifestyleSchema = new mongoose.Schema({ 
    userChoice: { 
      type: Number, 
      required: true,
      validate: (userChoice: Number) => userChoice > -1 && userChoice < 6
    }
})

const userSchema = new mongoose.Schema({

  // the username should be a string no longer than 12 characters and must be unique
  username: {
    type: String,
    required: [true, "Username is required"],
    validate: [
      {
        message: "Username must be no more than 12 characters in length",
        validator: (username: string) => username.length < 13
      }
    ],
    unique: true
  },

// the email address field should accept only string of email-shape that are unique
// the email should be stored as lowercase string
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: (email: string) => validator.isEmail(email),
    unique: true
  },

  // password must be at least 8 characters long
  // must contain at least one lowercase, uppercase, number and symbol
  // ! must match the password confirmation field
  password: {
    type: String,
    required: true,
    validate: [
      {
        message: "Password must be at least 8 characters in length",
        validator: (password: String) => password.length > 8
      },
      {
        message: "Password must contain at least 1 lowercase character, 1 uppercase character, a number and a symbol",
        validator: (password: string) => validator.isStrongPassword(password, {minLowercase: 1, minUppercase: 1, minSymbols: 1, minNumbers: 1})
      }
    ]
  }, 

  userOptions: { 
    anything: { type: Boolean, required: true, default: true }, 
    fruits: { type: Boolean, required: true, default: false }, 
    vegetables: { type: Boolean, required: true, default: false }, 
    meat: { type: Boolean,required: true, default: false }, 
    dairy: { type: Boolean, required: true, dafault: false }, 
    eggs: { type: Boolean, required: true, default: false }, 
    gluten: { type: Boolean, required: true, default: false }, 
    nuts: { type: Boolean, required: true, default: false }, 
    shellfish: { type: Boolean, required: true, default: false }
  }, 
  
  userLifestyle: { 
    type: Number, 
    required: true,
    validate: (userChoice: Number) => userChoice > -1 && userChoice < 6
  }
})

// ensures that sensitive information will not be returned in the response
userSchema.plugin(mongooseHidden({ defaultHidden: {password: true, email:true, _id: true, } }))

// ensures that the username and email address provided are unique to the user
userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })

// hashing the password before saving
userSchema.pre('save', function hashPassword(next) { 
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  next() 
})


// function for confirming password
// exported to userController.ts
export function checkPasswords(password: string, passwordConfirmation: string) { 
  return password === passwordConfirmation
}

// function for validating password
export function validatePassword(loginPassword: string, originalPassword: string) { 
  return bcrypt.compareSync(loginPassword, originalPassword)
}

export default mongoose.model("User", userSchema)