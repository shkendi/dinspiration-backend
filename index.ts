import express from "express"
import mongoose from "mongoose"
import Foods from "./models/foods"
import Users from "./models/users"



// ! Changes made by Pam on morning Friday 6 Jan
// 1) added the start function so that index.ts connects to mongodb
// 2) added '/api' to the app.use function and removed it from the individual routes
// 3) added a signup route


const app = express()

const router = express.Router()

const foodData = [
  { name: "Orange", id: 1 },
  { name: "Spaghetti", id: 2 },
  { name: "Fig", id: 3 },
  { name: "Tofu", id: 4 }
]

const userData = []

const inspirationData = []

router.route('/my-foods')
  .get(async (req, res) => { 
    const foods = await Foods.find()
    res.send(foods) 
  })

// ! Pam's added user code
router.route('/signup')
  .post(async (req, res) => {
    try {
      const newUser = await Users.create(req.body)
      console.log(newUser)
      res.send(newUser)
    }catch(e: any) { 
      res.send(e.message)
      console.log(e.message)
    }

  })
// !

app.use(express.json())
app.use("/api", router)


async function start() { 
  await mongoose.connect("mongodb://127.0.0.1:27017/dinspiration-db")
  console.log('Connected to dinspiration-db!')
  app.listen(8000, () => { 
      console.log("The post is listening on http://localhost:8000 ") 
    })
}
start()