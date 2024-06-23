"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./Router/user"));
const worker_1 = __importDefault(require("./Router/worker"));
const express = require("express");
const app = express();
app.use("/v1/user", user_1.default);
app.use("/v1/worker", worker_1.default);
app.listen(3000);
