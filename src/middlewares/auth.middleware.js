import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  console.log('🔍 BACKEND RECEBEU:', authHeader);
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('❌ Sem Bearer ou header ausente');
    return res.status(401).json({ message: "Token missing or invalid format" });
  }

  const token = authHeader.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    console.log('✅ TOKEN VÁLIDO:', decoded.id);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ ERRO JWT:', error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};