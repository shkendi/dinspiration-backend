import express from "express"
import Foods from "../models/foods"
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"

import Users from "../models/users"
import { signupUser } from "../controllers/userController"

const router = express.Router()

router.route('/foods')
.get(getFoods)
.post(createFoods)

// remember to change so searching by id
router.route('/foods/:name')
.get(getFoodByName)
.put(updateFoodByName)
.delete (deleteFoodByName)

// user routes

router.route('/signup')
.post(signupUser)


export default router