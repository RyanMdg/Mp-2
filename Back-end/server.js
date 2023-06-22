import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import productsRouter from "./routers/products.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();

//* MIDDLE WARE
app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("this is home");
});

// * Router for products restful
app.use("/products", productsRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    (result) => app.listen(process.env.PORT),
    console.log("DATABASE CONNECTED")
  )
  .catch((err) => console.log(err));
