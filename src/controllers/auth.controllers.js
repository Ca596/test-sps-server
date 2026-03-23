import jwt from "jsonwebtoken";
import authService from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validar credenciais
    const user = await authService.login(email, password);
    
    // ✅ Gerar token com chave consistente
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "24h" }
    );
    
    console.log("🔑 TOKEN GERADO:", token.substring(0, 20) + "...");
    
    res.json({
      token,
      user: { id: user.id, email: user.email },
      message: "Login successful"
    });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(401).json({ message: error.message });
  }
};