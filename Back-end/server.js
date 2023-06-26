import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import productsRouter from "./routers/products.js";
import shopRouter from "./routers/shops.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();

//* MIDDLE WARE
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is home");
});

// * Router for products restful
app.use("/products", productsRouter);

// * Router for shops
app.use("/shops", shopRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    (result) => app.listen(process.env.PORT),
    console.log("DATABASE CONNECTED")
  )
  .catch((err) => console.log(err));
