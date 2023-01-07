import express from "express"
import { Request, Response } from "express"
import Foods from "../models/foods"
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"
// be sure to separate functions so that we see essential ones at top of code
// change functions to filter by id instead of name

import Users from "../models/users"
import { signupUser, loginUser, setOptionsLifestyle, getCurrentUser } from "../controllers/userController"
import secureRoute from "../middleware/secureRoute"

const router = express.Router()

router.route('/foods')
.get(secureRoute, getFoods)
.post(createFoods)

// remember to change so searching by id
router.route('/foods/:name')
.get(getFoodByName)
.put(updateFoodByName)
.delete (deleteFoodByName)

// user routes

router.route('/signup')
.post(signupUser)

router.route('/login')
.post(loginUser)

// // ! if you're logged in, get the current user
// router.route('/user').get(secureRoute, getCurrentUser)

router.route('/my-options')
.patch(secureRoute, setOptionsLifestyle)

router.route('/my-lifestyle')
.patch(secureRoute, setOptionsLifestyle)

router.route('/user')
.get(getCurrentUser)

export default router