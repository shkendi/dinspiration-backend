import mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
  name: {type: String, require: true}
})

export default mongoose.model("Food", foodSchema)