import exprss from "express";

const router = exprss.Router();

//* GET LIST OF PRODUCTS
router.get("/productlist", (req, res) => {
  res.json({ mssg: "hello from productlist" });
});

//* GET A SINGLE PRODUCTS
router.get("/productlist/:id", (req, res) => {
  res.json({ mssg: "this is single products" });
});

//* DELETE PRODUCTS
router.delete("/productlist/:id", (req, res) => {
  res.json({ mssg: "The Products deleted" });
});

//* UPDATE PRODUCTS
router.patch("/productlist/:id", (req, res) => {
  res.json({ mssg: "Update a products" });
});

//* POST NEW PRODUCTS
router.post("/productadd", (req, res) => {
  res.json({ mssg: "hello from product Adding" });
});

export default router;
