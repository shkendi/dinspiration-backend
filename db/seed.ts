import mongoose from "mongoose"
import Foods from "../models/foods"

const foodData = [
  {name: "Orange"},
  {name: "Spaghetti"},
  {name: "Fig"},
  {name: "Tofu"}
]

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/dinspiration-db")
  console.log("We've connected to the database 👻")

  try {
   const foods =  await Foods.create(foodData)
   console.log(foods)
  }
  catch (e:any) {console.log(e.message)}

  await mongoose.disconnect()
}

seed()