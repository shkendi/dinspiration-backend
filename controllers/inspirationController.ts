import { Request, Response } from "express"
import inspirations from "../models/inspirations"
import Inspirations from "../models/inspirations"
import { StatusCodes } from "http-status-codes"

export async function filterInspirationsByFood(req: Request, res: Response) { 
  try { 
// Start here 
// get the foodId from the params - it should be a mongoose.Schema.Types.ObjectId
// GET request from Inspirations, filtered so that only those inspirations where foodId === primaryFood show up
const foodId = req.params.foodId
console.log(foodId)
const filteredInspirations = await Inspirations.find({
  primaryFood: foodId
})
res.status(StatusCodes.OK).send(filteredInspirations)

  } catch(err: any) { 
    console.log(err) 
    res.status(StatusCodes.BAD_REQUEST).send({message: "There was an error"})
  }
}


export async function deleteInspirationById(req: Request, res: Response) { 
  try { 
    const inspirationToDelete = req.params.id
    const deletedInspiration = await Inspirations.findByIdAndDelete(inspirationToDelete)
    res.status(StatusCodes.OK).send({message: `deleted inspiration id: ${inspirationToDelete}`})
  } catch(err) { 
    res.status(StatusCodes.BAD_REQUEST).send({message: "failed to delete inspiration"})
  }
}

export async function getInspirationsById(req: Request, res: Response) {
	try {
		const inspirations = await Inspirations.find()
		res.send(inspirations)
	}
	catch (e: any) {
		res.send (e.massage)
		console.log(e.message)
	}
}

export async function createInspiration(req: Request, res: Response) {
	try {
    const newInspirationBody = req.body
    newInspirationBody.userId = req.currentUser
    const foodId = req.params.foodId
    newInspirationBody.primaryFood = foodId
    console.log(newInspirationBody)
		const newInspiration = await Inspirations.create(newInspirationBody)
		console.log(newInspiration)
		res.send(newInspiration)
	}
	catch (e: any) {
		res.status(StatusCodes.BAD_REQUEST).send({message: "Failed to create new inspiration"})
		console.log(e.message)
	}
}

export async function getInspirations(req: Request, res: Response) {
	try {
		const inspirations = await Inspirations.find()
		res.send(inspirations)
	  }
	  catch (err: any) {
		res.send(err.message)
		console.log(err.message)
	  }
}

// pam added this function to create a new inspiration

