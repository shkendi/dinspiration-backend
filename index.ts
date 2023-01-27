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
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
  // NODE_ENV will now log as 'test' (when we npm run test) or undefined (when we run dev)
  // now we can make a function in the environment file... 
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to dinspiration-db!')
  console.log(MONGODB_URI)

const serverPromise = app.listen(PORT, () => { 
  console.log(`!!!Express API is running on http://localhost:${PORT}`)
})
return serverPromise

  app.listen(8000, () => { 
      console.log("The post is listening on http://localhost:8000 ") 
    })
}



start()

// export app so we can use it in our tests

export default app