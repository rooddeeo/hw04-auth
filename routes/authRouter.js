import express from "express";
import { validateBody } from "../helpers/validateBody.js";
import { registerSchema, loginSchema } from "../models/user.js";
import { register, login, getCurrent, logout } from "../controllers/authController.js";
import { authenticate } from "../helpers/authenticate.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);
authRouter.get("/current", authenticate, getCurrent);
authRouter.post("/logout", authenticate, logout);
export default authRouter;
