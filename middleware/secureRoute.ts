import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { userInfo } from "os"
import { secret } from "../config/environment"
import Users from "../models/users"

interface JwtPayload { 
  userId: string
}

// ! extends express type 
// ! added types/express folder containing
// ! index.d.ts file with type

declare module "express" { 
  export interface Request { 
    currentUser: any
  }
}

export default function secureRoute(req: Request, res: Response, next: NextFunction) {
  
// console.log("MIDDLEWARE HAS BEEN RUN!!!")
const rawToken = req.headers.authorization 
// console.log(rawToken)
if (!rawToken) { 
return res.status(401).json({ message: "Unauthorized - there is no Jwt raw token" })
}
const token = rawToken.replace("Bearer ", '') 

jwt.verify(token, secret, async (err, payload) => { 
if (err || !payload) { 
return res.status(401).json({ message: "Unauthorized - the jwt payload was missing or else there was and error" })
}
const jwtPayload = payload as JwtPayload
const user = await Users.findById(jwtPayload.userId)
// console.log(user)
req.currentUser = user

    next()
})
}