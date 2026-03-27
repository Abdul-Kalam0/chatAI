import express from "express";
import { chatAI } from "../controller.js/openAI.js";

const router = express.Router();

router.post("/chat", chatAI);

export default router;
