"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFoods = exports.getFoods = exports.deleteFoodByName = exports.updateFoodByName = exports.getFoodByName = void 0;
const foods_1 = __importDefault(require("../models/foods"));
function getFoodByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const name = req.params.name;
            console.log(name);
            const food = yield foods_1.default.findOne({ "name": [name] });
            console.log(food);
            res.send(food);
        }
        catch (e) {
            res.send(e.message);
            console.log(e.message);
        }
    });
}
exports.getFoodByName = getFoodByName;
function updateFoodByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const name = req.params.name;
            console.log(name);
            const food = yield foods_1.default.create(req.body);
            console.log(food);
            res.send(food);
        }
        catch (e) {
            res.send(e.message);
            console.log(e.message);
        }
    });
}
exports.updateFoodByName = updateFoodByName;
function deleteFoodByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const name = req.params.name;
            console.log(name);
            yield foods_1.default.findOneAndDelete({ "name": [name] });
            res.send({ "message": "This food has been deleted." });
        }
        catch (e) {
            res.send(e.message);
            console.log(e.message);
        }
    });
}
exports.deleteFoodByName = deleteFoodByName;
function getFoods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foods = yield foods_1.default.find();
            res.send(foods);
        }
        catch (e) {
            res.send(e.message);
            console.log(e.message);
        }
    });
}
exports.getFoods = getFoods;
function createFoods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newFood = yield foods_1.default.create(req.body);
            console.log(newFood);
            res.send(newFood);
        }
        catch (e) {
            res.send(e.message);
            console.log(e.message);
        }
    });
}
exports.createFoods = createFoods;
