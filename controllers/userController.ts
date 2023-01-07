import Users from "../models/users"
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { checkPasswords } from "../models/users"

export async function signupUser(req: Request, res: Response) { 
  try {
    if (checkPasswords(req.body.password, req.body.passwordConfirmation)) { 
    const newUser = await Users.create(req.body)  
    return res.status(StatusCodes.OK).send(newUser)    
    } else { 
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({message: "Password confirmation did not match the password"})
    }


  }catch(e: any) { 
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(e.message)
    console.log(e.message)
  }
}

export async function loginUser(req: Request, res: Response) { 

}