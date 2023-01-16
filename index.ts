import express from "express"
import { Request, Response } from "express"
import mongoose from "mongoose"
import Foods from "./models/foods"
import Users from "./models/users"
import Inspirations from "./models/inspirations"
import router from "./views/router"
import { MONGODB_URI, PORT } from "./config/environment"
import cors from 'cors'

const app = express()


app.use(express.json())

app.use(cors())


app.use("/api", router)


async function start() { 
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to dinspiration-db!')

const serverPromise = app.listen(PORT, () => { 
  console.log(`Express API is running on http://localhost:${PORT}`)
})
return serverPromise

  app.listen(8000, () => { 
      console.log("The post is listening on http://localhost:8000 ") 
    })
}
start()