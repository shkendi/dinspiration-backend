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
const users_1 = __importDefault(require("./models/users"));
// ! Changes made by Pam on morning Friday 6 Jan
// 1) added the start function so that index.ts connects to mongodb
// 2) added '/api' to the app.use function and removed it from the individual routes
// 3) added a signup route
const app = (0, express_1.default)();
const router = express_1.default.Router();
const foodData = [
    { name: "Orange", id: 1 },
    { name: "Spaghetti", id: 2 },
    { name: "Fig", id: 3 },
    { name: "Tofu", id: 4 }
];
const userData = [];
const inspirationData = [];
router.route('/my-foods')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield foods_1.default.find();
    res.send(foods);
}));
// ! Pam's added user code
router.route('/signup')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield users_1.default.create(req.body);
        console.log(newUser);
        res.send(newUser);
    }
    catch (e) {
        res.send(e.message);
        console.log(e.message);
    }
}));
// !
app.use(express_1.default.json());
app.use("/api", router);
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
