import mongoose from "mongoose"
// import validator from "validator"
// import uniqueValidator from "mongoose-unique-validator"

const inspirationSchema = new mongoose.Schema({
	name: {type: String, required: true},
	recipeURL: {type: String, required: false},
	description: {type: String, required: false},
	userImage: {type: String, required: false},
	userId: {type: String, required: true},
	primaryFood: {type: String, required: true},
	secondaryfood: {type: String, required: false}
})

export default mongoose.model("Inspiration", inspirationSchema)