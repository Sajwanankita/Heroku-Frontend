"use strict";
/**
 * @author Ankita Kumari
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "dist")));

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running at http://localhost:8000");
});
