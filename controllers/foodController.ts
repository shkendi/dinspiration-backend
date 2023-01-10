import { Request, Response } from "express"
import Foods from "../models/foods"

// GET FOODS

export async function getFoods(req: Request, res: Response) {
  try {
    const foods = await Foods.find()
    res.send(foods)
  }
  catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

export async function getMyFoods(req: Request, res: Response) {

  try {
    console.log(req.currentUser.userOptions)

    const currentUserOptions = req.currentUser.userOptions
    console.log(currentUserOptions)
    //gives an array of the userOptions
    // we want to query the Foods collection
    // and return any food where the options includes any of the userOptions


    // first get the current user options
    const lifestyleArray = ["lowGi", "lowCarb", "highProtein", "lowCalorie", "keto", "skip"]
    // create the string for choosing the userLifestyle prop and value
    const myFoodsUserLifestyle = `lifestyle.${lifestyleArray[req.currentUser.userLifestyle]}`

    // filter the foods by both options and lifestyle

    const myFoods = await Foods.find({
      $and: [
        { options: { $in: currentUserOptions } },
        { [myFoodsUserLifestyle]: true }
      ]
    })

    return res.send(myFoods)
  } catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

export async function getFoodById(req: Request, res: Response) {
  try {

    const foodById = await Foods.findById(req.params.id)
    if (!foodById) {
      return res.status(400).send({ message: "Food not found" })
    }
    return res.status(200).send(foodById)

  } catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

export async function getFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    const food = await Foods.findOne({ "name": [name] })
    console.log(food)
    res.send(food)
  }
  catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

// CREATE FOODS
export async function createFoods(req: Request, res: Response) {
  try {
    const newFood = await Foods.create(req.body)
    console.log(newFood)
    res.send(newFood)
  }
  catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

//! - - - - STRETCH GOALS - - - - - 

// UPDATE FOODS

export async function updateFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    const food = await Foods.create(req.body)
    console.log(food)
    res.send(food)
  }
  catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}

// DELETE FOODS

export async function deleteFoodByName(req: Request, res: Response) {
  try {
    const name = req.params.name
    console.log(name)
    await Foods.findOneAndDelete({ "name": [name] })
    res.send({ "message": "This food has been deleted." })
  }
  catch (e: any) {
    res.send(e.message)
    console.log(e.message)
  }
}
// ? why do I need to delete 2x for a food to be removed from the database? do I need to use a different method?