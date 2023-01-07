import express from "express"
import { Request, Response } from "express"
import Foods from "../models/foods"
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"
import Inspirations from "../models/inspirations"
import { createInspirations, deleteInspirationByName, getInspirations, updateInspirationByName } from "../controllers/inspirationController"
// be sure to separate functions so that we see essential ones at top of code
// change functions to filter by id instead of name

import Users from "../models/users"
import { signupUser } from "../controllers/userController"

const router = express.Router()

router.route('/foods')
.get(getFoods)
.post(createFoods)

router.route('/my-foods')
  .get(async (req: Request, res: Response) => { 
    const foods = await Foods.find()
    res.send(foods) 
  })

// remember to change so searching by id
router.route('/foods/:name')
.get(getFoodByName)
.put(updateFoodByName)
.delete (deleteFoodByName)

router.route('/inspirations')
.get(getInspirations)
.post(createInspirations)

// Search by id
router.route('/inspirations/:id')
.get(getInspirations)
.put(updateInspirationByName)
.delete(deleteInspirationByName)

router.route('inspirations/:userId')
.get(getInspirations)
// user routes

router.route('/signup')
.post(signupUser)


export default router