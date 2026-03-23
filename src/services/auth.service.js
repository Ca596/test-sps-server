import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository.js";

const login = async (email, password) => {
  const user = userRepository.findByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, type: user.type },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  );

  return { token, user };
};
console.log("userRepository:", userRepository);

export default { login };