import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import productsRouter from "./routers/products.js";
import shopRouter from "./routers/shops.js";
import UserRouter from "./routers/user.js";
import mongoose from "mongoose";

import cors from "cors";

import { log } from "mercedlogger";
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

// * Router for users
app.use("/user", UserRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) =>
    app.listen(process.env.PORT, () =>
      log.green("SERVER STATUS", `Listening on port ${process.env.PORT}`)
    )
  );

mongoose.connection
  .on("open", () => log.green("DATABASE STATE", "Connection Open"))
  .on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
  .on("error", (error) => log.red("DATABASE STATE", error));
