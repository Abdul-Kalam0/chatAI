import { client } from "../config/openai.js";

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

//openAI chatAI
// export const chatAI = async (req, res) => {
//   const { message } = req.body;
//   try {
//     const response = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     res.json({
//       reply: response.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };

//gemini chatAI

// ✅ Simple Controller (no role)
export const geminiChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: message,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 100,
      },
    });

    res.status(200).json({
      success: true,
      reply: response.text(),
    });
  } catch (error) {
    console.error("Gemini Error:", error.message);

    res.status(500).json({
      success: false,
      error: "Failed to generate response",
    });
  }
};
