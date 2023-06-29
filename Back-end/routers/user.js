import exprss from "express";

import userController from "../controllers/userController.js";

const router = exprss.Router();

// Signup route to create a new user
router.post("/signup", userController.sign_Up);

// Login route to verify a user and get a token
router.post("/login", userController.login);

// Get a single user
router.get("/user/:id", userController.singleUser);

export default router;
