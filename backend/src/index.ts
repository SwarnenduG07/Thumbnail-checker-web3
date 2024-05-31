import userRouter from "./Router/user";
import workerRouter from "./Router/worker";

const express = require("express");
const app = express(); 
export const JWT_SECRET = "swarnenduG077";
app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000);