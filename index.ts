import express from "express"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Foods from "./models/foods"
import Users from "./models/users"
import router from "./views/router"

const app = express()


// ? Jane's note ->  routes and seed data should be moved in our catchup
// ? Jane to bring up whether we should change the names of endpoints, e.g. to have a /foods endpoint that is not visible to users that shows all foods. I found this really useful while working

// ? not frome Jane: current /my-foods will be updated
router.route('/my-foods')
  .get(async (req, res) => { 
    const foods = await Foods.find()
    res.send(foods) 
  })




// ! Jane's added food code

// getting the foods by name, and editing foods if needed (for admins)
// should we change this to id? name is great for ux, but tricky considering spaces and cases

// will need to move everything in the router at the same time, otherwise some bits of code won't work. Should do on Saturday or tonight if we have time




// ? why do I need to delete 2x for a food to be removed from the database? do I need to use a different method?

// .patch (async (req, res) => {
//   const name = req.params.name
//   console.log(name)
//   const food = await Foods.findOneAndUpdate(req.body)
//   console.log(food)
//   res.send(food)
// })

// note - interested in using Patch, but unsure of exact method and how to $set the new params, think it will be interesting if we find corrupt data
// deleting and putting may be useful for admins if we create them in our stretch goals


// ? add getting foods by user ** will need Pam's help here

// nb - food, user and inspiration names should be in lowercase it ref'd by endpoint; we can transform text later in frontend to be uppercase
// nb - should we reference by name or by id? name starts to be tricky when thinking about spaces? on first glance I'm thinking id is best
// not an issue for foods as we're in control of adding new foods to the database, but something to look out for!

// note: are we linking insprations by _id or by name?
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