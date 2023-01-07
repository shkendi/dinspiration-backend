import mongoose from "mongoose"
import Foods from "../models/foods"
import Users from "../models/users"


// ! Jane made changes to the seed so that foods are validated before being added to the database
const foodData = [
  { name: "orange",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg",
    options: {
      fruit: true,
      vegetable: false,
      meat: false,
      dairy: false,
      eggs: false,
      gluten: false,
      nut: false,
      shellfish: false,
    },
    lifestyle: {
      lowGi: true,
      lowCarb: true,
      highProtein: false,
      lowCalorie: true,
      keto: false
    }
  },
  { name: "spaghetti",
  imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Spaghetti_with_Meatballs_%28cropped%29.jpg",
  options: {
    fruit: false,
    vegetable: false,
    meat: false,
    dairy: false,
    eggs: false,
    gluten: true,
    nut: false,
    shellfish: false,
  },
  lifestyle: {
    lowGi: true,
    lowCarb: false,
    highProtein: false,
    lowCalorie: false,
    keto: false
  }
}

]


const userData = [
  {
    username: "Pam",
    email: "pam@string.string",
    password: "Helloworld123!", 
    userFoods: { 
      anything: false,
      fruits: true, 
      vegetables: true, 
      meat: true, 
      dairy: true, 
      eggs: true, 
      gluten: true, 
      nuts: true, 
      shellfish: true
    }, 
    userChoice: 2
  }
]



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