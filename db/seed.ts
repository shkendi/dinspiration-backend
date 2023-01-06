import mongoose from "mongoose"
import Foods from "../models/foods"
import Users from "../models/users"

const foodData = [
  { name: "Orange" },
  { name: "Spaghetti" },
  { name: "Fig" },
  { name: "Tofu" }
]

// ! Pam's added userSeed code - only works when users.ts is updated
// const userData = [
//   {
//     username: "Pam",
//     email: "pam@string.string",
//     password: "helloworld"
//   },
//   {
//     username: "Shkendi",
//     email: "shkendi@string.string",
//     password: "helloworld"
//   },
//   {
//     username: "Jane",
//     email: "jane@string.string",
//     password: "helloworld"
//   },
// ]
// !


async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/dinspiration-db")
  console.log("We've connected to the database 👻")


  await mongoose.connection.db.dropDatabase()
  console.log("Cleared database!")


  try {
    const foods = await Foods.create(foodData)
    console.log(foods)

    // ! Pam's user seeding code - only works when users.ts is updated
    // const users = await Users.create(userData)
    // console.log(users)
    // !

  }
  catch (e: any) {
    console.log(e.message)
  }

  await mongoose.disconnect()
}


seed()