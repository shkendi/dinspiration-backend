import mongoose from "mongoose"
import validator from "validator"
import uniqueValidator from "mongoose-unique-validator"
import mongooseHidden from "mongoose-hidden"

const userFoodsSchema = new mongoose.Schema({ 
  anything: { type: Boolean }, 
  fruits: { type: Boolean }, 
  vegetables: { type: Boolean }, 
  meat: { type: Boolean }, 
  dairy: { type: Boolean }, 
  eggs: { type: Boolean }, 
  gluten: { type: Boolean }, 
  nuts: { type: Boolean }, 
  shellfish: { type: Boolean }
})

const userLifestyleSchema = new mongoose.Schema({ 
  
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

  userFoods: { 
    type: Object, 

  }

})

// ensures that sensitive information will not be returned in the response
userSchema.plugin(mongooseHidden({ defaultHidden: {password: true, email:true, _id: true, } }))

// ensures that the username and email address provided are unique to the user
userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })

export default mongoose.model("User", userSchema)