import exprss from "express";
import prodSchema from "../models/productSchema.js";
const router = exprss.Router();

//* GET LIST OF PRODUCTS
router.get("/productlist", (req, res) => {
  res.json({ mssg: "hello from productlist" });
});

//* GET A SINGLE PRODUCTS
router.get("/productlist/:id", (req, res) => {
  const id = req.params.id;

  prodSchema
    .findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.json({ mssg: error.message });
    });
});

//* DELETE PRODUCTS
router.delete("/productlist/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const prod = await prodSchema.findByIdAndDelete(id);
    res.status(200).json(prod);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//* UPDATE PRODUCTS
router.patch("/productlist/:id", (req, res) => {
  res.json({ mssg: "Update a products" });
});

//* POST NEW PRODUCTS
// * ahahahahah
// * add add
router.post("/productadd", async (req, res) => {
  const { productName, price, stock } = req.body;

  try {
    const products = await prodSchema.create({ productName, price, stock });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
