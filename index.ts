import express from "express"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Foods from "./models/foods"
import Users from "./models/users"
import router from "./views/router"

const app = express()


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