import { Request, Response } from "express"
import inspirations from "../models/inspirations"
import Inspirations from "../models/inspirations"

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

export async function createInspirations(req: Request, res: Response) {
	try {
		const newInspiration = await Inspirations.create(req.body)
		console.log(newInspiration)
		res.send(newInspiration)
	}
	catch (e: any) {
		res.send (e.massage)
		console.log(e.message)
	}
}

export async function getInspirations(req: Request, res: Response) {
	try {
		const inspirations = await Inspirations.find()
		res.send(inspirations)
	  }
	  catch (e: any) {
		res.send(e.message)
		console.log(e.message)
	  }
}
