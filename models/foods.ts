import mongoose from "mongoose"


const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  imageURL: {type: String, required: true},
  options: {
    fruit: {type: Boolean, required: true},
    vegetable: {type: Boolean, required: true},
    meat: {type: Boolean, required: true},
    dairy: {type: Boolean, required: true},
    eggs: {type: Boolean, required: true},
    gluten: {type: Boolean, required: true},
    nut: {type: Boolean, required: true},
    shellfish: {type: Boolean, required: true}
  },
  lifestyle: {
    lowGi: {type: Boolean, required: true},
    lowCarb: {type: Boolean, required: true},
    highProtein: {type: Boolean, required: true},
    lowCalorie: {type: Boolean, required: true},
    keto: {type: Boolean, required: true}
  }
})

export default mongoose.model("Food", foodSchema)