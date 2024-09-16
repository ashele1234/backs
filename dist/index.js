"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const App = (0, express_1.default)();
const port = 3000;
App.use("/api", router_1.default);
App.listen(port, () => {
    console.log("server up");
});
