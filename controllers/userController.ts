import Users from "../models/users"
import { Request, Response } from "express"

export async function signupUser(req: Request, res: Response) { 
  try {
    const newUser = await Users.create(req.body)
    console.log(newUser)
    res.send(newUser)
  }catch(e: any) { 
    res.send(e.message)
    console.log(e.message)
  }
}