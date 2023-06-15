import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.listen(3001);

app.get("/", (req, res) => {
  res.send("this is home");
});
