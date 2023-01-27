import express from "express"
import { Request, Response } from "express"
import Foods from "../models/foods"
// import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"
import Inspirations from "../models/inspirations"
import { createInspiration, getInspirations , getInspirationsById, filterInspirationsByFood, deleteInspirationById } from "../controllers/inspirationController"
// ! Pam added getMyFoods to line 5 throw-away code
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName, getMyFoods, getFoodById} from "../controllers/foodController"
// be sure to separate functions so that we see essential ones at top of code
// change functions to filter by id instead of name

import Users from "../models/users"
import { signupUser, loginUser, setOptionsLifestyle, getCurrentUser } from "../controllers/userController"
import secureRoute from "../middleware/secureRoute"

const router = express.Router()

// FOODS

router.route('/foods')
.get(getFoods)
.post(createFoods)

router.route('/my-foods')
.get(secureRoute, getMyFoods)

router.route('/food/:id')
.get(secureRoute, getFoodById)

// foods - stretch goal code
// ! jane to add code for updating and deleting by ID as a stretch goal

router.route('/foods/:name')
.get(getFoodByName)
.put(updateFoodByName)
.delete(deleteFoodByName)


// INSPIRATIONS ROUTES

// get all the inspirations
router.route('/inspirations')
.get(getInspirations)

// create an inspiration relating to a particular food
router.route('/inspiration/:foodId')
.post(secureRoute, createInspiration)

// get an inspiration by id
router.route('/inspirations/:id')
.get(getInspirationsById)

// get a list of inspirations from a foodId in the params
router.route('/inspirationsbyfood/:foodId')
.get(secureRoute, filterInspirationsByFood)

router.route('/inspiration/:id')
.delete(secureRoute, deleteInspirationById)

// USER ROUTES
router.route('/signup')
.post(signupUser)

router.route('/login')
.post(loginUser)

// ! if you're logged in, get the current user
router.route('/user').get(secureRoute, getCurrentUser)

router.route('/my-options')
.patch(secureRoute, setOptionsLifestyle)

router.route('/my-lifestyle')
// ? note from Jane - it might be worthwhile to add a get request for this profile * stretch goal
.patch(secureRoute, setOptionsLifestyle)

router.route('/user')
.get(secureRoute, getCurrentUser)

// INSPIRATIONS

export default router