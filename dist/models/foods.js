"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    imageURL: { type: String, required: true },
    options: {
        fruit: { type: Boolean, required: true },
        vegetable: { type: Boolean, required: true },
        meat: { type: Boolean, required: true },
        dairy: { type: Boolean, required: true },
        eggs: { type: Boolean, required: true },
        gluten: { type: Boolean, required: true },
        nut: { type: Boolean, required: true },
        shellfish: { type: Boolean, required: true }
    },
    lifestyle: {
        lowGi: { type: Boolean, required: true },
        lowCarb: { type: Boolean, required: true },
        highProtein: { type: Boolean, required: true },
        lowCalorie: { type: Boolean, required: true },
        keto: { type: Boolean, required: true }
    }
});
exports.default = mongoose_1.default.model("Food", foodSchema);
