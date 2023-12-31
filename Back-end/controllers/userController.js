import dotenv from "dotenv";
import User from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const { SECRET = "secret" } = process.env;

// * Signup route to create a new user

const sign_Up = async (req, res) => {
  try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    // send new user as response
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// *  Get single user
const singleUser = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Missing id parameter" });
  }

  User.findById(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

// *login users
const login = async (req, res) => {
  try {
    // check if the user exists
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign({ username: user.username }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
export default {
  sign_Up,
  login,
  singleUser,
};
