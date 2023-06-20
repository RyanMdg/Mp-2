import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.listen(3000);

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/orders", (req, res) => {
  res.send("this is orders");
});
