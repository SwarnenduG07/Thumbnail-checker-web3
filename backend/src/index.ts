<<<<<<< HEAD
import express from "express";
import userRouter from "./routers/user"
import workerRouter from "./routers/worker"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000)
=======
import userRouter from "./Router/user";
import workerRouter from "./Router/worker";

const express = require("express");
const app = express(); 
export const JWT_SECRET = "swarnenduG077";
app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000);
>>>>>>> 9e2ec07cf0ed30b5bcdceb1738943a850f873ba4
