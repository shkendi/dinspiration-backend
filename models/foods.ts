import mongoose from "mongoose"


const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  imageURL: {type: String, required: true},
  options: {type: Array, required: true, default: () => ["anything"]}, 
  lifestyle: {
    lowGi: {type: Boolean, required: true},
    lowCarb: {type: Boolean, required: true},
    highProtein: {type: Boolean, required: true},
    lowCalorie: {type: Boolean, required: true},
    keto: {type: Boolean, required: true}, 
    skip: {type: Boolean, default: () => true}
  }
})

export default mongoose.model("Food", foodSchema)