import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import productsRouter from "./routers/products.js";
dotenv.config();

const app = express();

//* MIDDLE WARES

app.use(express.json());

app.use(morgan("dev"));

app.listen(process.env.PORT);

app.get("/", (req, res) => {
  res.send("this is home");
});

app.use("/products", productsRouter);
