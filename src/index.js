import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes); // ← Monta em /api

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});