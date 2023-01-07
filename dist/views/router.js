"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodController_1 = require("../controllers/foodController");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.route('/foods')
    .get(foodController_1.getFoods)
    .post(foodController_1.createFoods);
// remember to change so searching by id
router.route('/foods/:name')
    .get(foodController_1.getFoodByName)
    .put(foodController_1.updateFoodByName)
    .delete(foodController_1.deleteFoodByName);
// user routes
router.route('/signup')
    .post(userController_1.signupUser);
exports.default = router;
