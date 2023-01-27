import mongoose from "mongoose"
import Foods from "../models/foods"
import Users from "../models/users"
import { foodData } from "./foodData"
import { userData } from "./userData"

import { MONGODB_URI } from "../config/environment"


// ! Jane moved the data arrays into the corresponding files and imported them here

async function seed() {
  await mongoose.connect(MONGODB_URI)
  console.log("We've connected to the database 👻")


  await mongoose.connection.db.dropDatabase()
  console.log("Cleared database!")


  try {
    const foods = await Foods.create(foodData)
    console.log(foods)

    // ! Pam's user seeding code - only works when users.ts is updated
    const users = await Users.create(userData)
    console.log(users)



  }
  catch (e: any) {
    console.log(e.message)
  }

  await mongoose.disconnect()
}


seed()