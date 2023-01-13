import { Request, Response } from "express"
import inspirations from "../models/inspirations"
import Inspirations from "../models/inspirations"
import { StatusCodes } from "http-status-codes"

// export async function getInspirationByName(req: Request, res: Response) {
// 	try {
// 		const name = req.params.name
// 		const inspiration = await Inspirations.findOne({"name": [name]})
// 		res.send(inspiration)
// 	}
// 	catch (e: any) {
// 		res.send (e.massage)
// 	}
// }

// export async function updateInspirationById(req: Request, res: Response) {
// 	try {
// 		const inspirationIdToUpdate = req.params.id
// 		const inspirationToUpdate = await Inspirations.find()
// 		console.log(inspirationIdToUpdate)
// 		const inspiration = await Inspirations.findByIdAndUpdate(inspirationIdToUpdate)
// 		console.log(inspiration)
// 		res.send(inspiration)
// 	}
// 	catch (e: any) {
// 		res.send (e.massage)
// 	}
// }

// export async function deleteInspirationByName(req: Request, res: Response) {
// 	try {
// 		const name = req.params.name
// 		await Inspirations.findOneAndDelete({"name": [name]})
// 		res.send({"massage": "This inspiration has been deleted."})
// 	}
// 	catch (e: any) {
// res.send (e.message)
// console.log(e.message)
// 	}
// }

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

