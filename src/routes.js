import express from "express";
import { login } from "./controllers/auth.controllers.js";
import { create, getAll, getById, update, remove } from "./controllers/user.controller.js";
import authMiddleware from "./middlewares/auth.middleware.js"; 

const router = express.Router();

// 🔐 AUTH - SEM proteção
router.post("/login", login);
router.post("/register", create);

// 🔒 USERS - COM proteção
router.get("/users", authMiddleware, getAll);
router.get("/users/:id", authMiddleware, getById); // ✅ NOVO
router.post("/users", create);
router.put("/users/:id", authMiddleware, update);
router.delete("/users/:id", authMiddleware, remove);

// 🐛 DEBUG
router.get("/debug", (req, res) => {
  res.json({
    authHeader: req.headers.authorization,
    hasToken: !!req.headers.authorization,
    user: req.user || null
  });
});

export default router;