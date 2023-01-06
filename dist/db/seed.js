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
const mongoose_1 = __importDefault(require("mongoose"));
const foods_1 = __importDefault(require("../models/foods"));
const foodData = [
    { name: "Orange" },
    { name: "Spaghetti" },
    { name: "Fig" },
    { name: "Tofu" }
];
// ! Pam's added userSeed code - only works when users.ts is updated
// const userData = [
//   {
//     username: "Pam",
//     email: "pam@string.string",
//     password: "helloworld"
//   },
//   {
//     username: "Shkendi",
//     email: "shkendi@string.string",
//     password: "helloworld"
//   },
//   {
//     username: "Jane",
//     email: "jane@string.string",
//     password: "helloworld"
//   },
// ]
// !
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/dinspiration-db");
        console.log("We've connected to the database 👻");
        yield mongoose_1.default.connection.db.dropDatabase();
        console.log("Cleared database!");
        try {
            const foods = yield foods_1.default.create(foodData);
            console.log(foods);
            // ! Pam's user seeding code - only works when users.ts is updated
            // const users = await Users.create(userData)
            // console.log(users)
            // !
        }
        catch (e) {
            console.log(e.message);
        }
        yield mongoose_1.default.disconnect();
    });
}
seed();
