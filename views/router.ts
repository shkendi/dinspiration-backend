import express from "express"
import { Request, Response } from "express"
import Foods from "../models/foods"
// import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"
import Inspirations from "../models/inspirations"
import { createInspirations, getInspirations , getInspirationsById } from "../controllers/inspirationController"
// ! Pam added getMyFoods to line 5 throw-away code
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName, getMyFoods, getFoodById} from "../controllers/foodController"
// be sure to separate functions so that we see essential ones at top of code
// change functions to filter by id instead of name

import Users from "../models/users"
import { signupUser, loginUser, setOptionsLifestyle, getCurrentUser } from "../controllers/userController"
import secureRoute from "../middleware/secureRoute"

const router = express.Router()

router.route('/foods')
.get(secureRoute, getFoods)
.post(createFoods)

// ! Pam's throw away code

router.route('/my-foods')
.get(secureRoute, getMyFoods)

router.route('/foods/:id').get(getFoodById)
// !

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
.get(getInspirationsById)


// .put(updateInspirationById)
// .delete(deleteInspirationById)

// router.route('inspirations/:userId')
// .get(getInspirationsByUserId)


// user routes

router.route('/signup')
.post(signupUser)

router.route('/login')
.post(loginUser)

// ! if you're logged in, get the current user
// router.route('/user').get(secureRoute, getCurrentUser)

router.route('/my-options')
.patch(secureRoute, setOptionsLifestyle)

router.route('/my-lifestyle')
.patch(secureRoute, setOptionsLifestyle)

router.route('/user')
.get(secureRoute, getCurrentUser)

export default router