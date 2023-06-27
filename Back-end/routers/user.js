import exprss from "express";

import shopController from "../controllers/userController.js";

const router = exprss.Router();

// Signup route to create a new user
router.post("/signup", shopController.sign_Up);

// Login route to verify a user and get a token
router.post("/login", shopController.login);

export default router;
