import express from "express"
import Foods from "../models/foods"
import { getFoods, getFoodByName, updateFoodByName, createFoods, deleteFoodByName } from "../controllers/foodController"
import Inspirations from "../models/inspirations"
import { createInspirations, deleteInspirationByName, getInspirations, updateInspirationByName } from "../controllers/inspirationController"
const router = express.Router()

router.route('/foods')
.get(getFoods)
.post(createFoods)

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

export default router