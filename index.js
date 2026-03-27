import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

import chatRouter from "./routes/openAIRoutes.js";

app.use("/", chatRouter);

app.listen(3000, () => {
  console.log("AI connected to server 3000");
});
