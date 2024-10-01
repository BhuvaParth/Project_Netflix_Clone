import jwt from "jsonwebtoken";
import { ENV_VAR } from "../config/envVars.js";

export const generateTokanAndSetcode = (userId, res) => {
  const tokan = jwt.sign({ userId }, ENV_VAR.JWT_SECRET, { expiresIn: "15d" });
  res.cookie("jwt-netflix", tokan, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly:true,
    sameSite : "Lax",
    secure : ENV_VAR.NODE_ENV !== "development"
  });

  return tokan;
};