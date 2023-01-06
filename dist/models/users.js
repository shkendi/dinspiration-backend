"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: (email) => validator_1.default.isEmail(email),
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
userSchema.plugin(mongoose_unique_validator_1.default, { type: 'mongoose-unique-validator' });
exports.default = mongoose_1.default.model("User", userSchema);
