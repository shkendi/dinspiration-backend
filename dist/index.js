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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const foods_1 = __importDefault(require("./models/foods"));
const router_1 = __importDefault(require("./views/router"));
const app = (0, express_1.default)();
// ? Jane's note ->  routes and seed data should be moved in our catchup
// ? Jane to bring up whether we should change the names of endpoints, e.g. to have a /foods endpoint that is not visible to users that shows all foods. I found this really useful while working
// ? not frome Jane: current /my-foods will be updated
router_1.default.route('/my-foods')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield foods_1.default.find();
    res.send(foods);
}));
// ! Jane's added food code
// getting the foods by name, and editing foods if needed (for admins)
// should we change this to id? name is great for ux, but tricky considering spaces and cases
// will need to move everything in the router at the same time, otherwise some bits of code won't work. Should do on Saturday or tonight if we have time
// ? why do I need to delete 2x for a food to be removed from the database? do I need to use a different method?
// .patch (async (req, res) => {
//   const name = req.params.name
//   console.log(name)
//   const food = await Foods.findOneAndUpdate(req.body)
//   console.log(food)
//   res.send(food)
// })
// note - interested in using Patch, but unsure of exact method and how to $set the new params, think it will be interesting if we find corrupt data
// deleting and putting may be useful for admins if we create them in our stretch goals
// ? add getting foods by user ** will need Pam's help here
// nb - food, user and inspiration names should be in lowercase it ref'd by endpoint; we can transform text later in frontend to be uppercase
// nb - should we reference by name or by id? name starts to be tricky when thinking about spaces? on first glance I'm thinking id is best
// not an issue for foods as we're in control of adding new foods to the database, but something to look out for!
// note: are we linking insprations by _id or by name?
// !
app.use(express_1.default.json());
app.use("/api", router_1.default);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/dinspiration-db");
        console.log('Connected to dinspiration-db!');
        app.listen(8000, () => {
            console.log("The post is listening on http://localhost:8000 ");
        });
    });
}
start();
