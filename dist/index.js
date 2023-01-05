"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
router.route('/api/my-foods')
    .get((req, res) => { res.send(foodData); });
app.use(router);
app.listen(8000, () => { console.log("The post is listening on http://localhost:8000 "); });
