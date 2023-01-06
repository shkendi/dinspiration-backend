import { Request, Response } from "express"
import Foods from "../models/foods"

export async function getFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    const food = await Foods.findOne({"name": [name]})
    console.log(food)
    res.send(food)
  }
  catch (e: any) {
    res.send (e.message)
    console.log(e.message)
  }
}

export async function updateFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    const food = await Foods.create(req.body)
    console.log(food)
    res.send(food)
  }
  catch (e: any) {
    res.send (e.message)
    console.log(e.message)
  }
}

export async function deleteFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    await Foods.findOneAndDelete({"name" : [name]})
    res.send({"message": "This food has been deleted."})
  }
  catch (e: any) {
    res.send (e.message)
    console.log(e.message)
  }
}

export async function getFoods(req: Request, res: Response) { 
  try {
    const foods = await Foods.find()
    res.send(foods)
  }
  catch (e: any) {
    res.send (e.message)
    console.log(e.message)
  }
}

export async function createFoods(req: Request, res: Response) {
  try {
    const newFood = await Foods.create(req.body)
    console.log(newFood)
    res.send(newFood)
  }
  catch (e: any) {
    res.send (e.message)
    console.log(e.message)
  }
}