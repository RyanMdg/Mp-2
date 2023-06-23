import prodSchema from "../models/productSchema.js";

// * GET PRODUCTLIST
const productsList = (req, res) => {
  prodSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// * GET SINGLE PRODUCTS
const productsSingle = (req, res) => {
  const id = req.params.id;

  prodSchema
    .findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ error: "Product Don't Exis" }));
};

// * DELETE PRODUCTS
const productsDelete = (req, res) => {
  const id = req.params.id;

  prodSchema
    .findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

// * UPDATE PRODUCTS
const productsUpdate = (req, res) => {
  const id = req.params.id;
  const updatedProducts = req.body;

  const product = prodSchema.find(id);

  prodSchema
    .findByIdAndUpdate(id, updatedProducts, {
      new: true,
    })
    .then((updatedProducts) => {
      if (updatedProducts) {
        res.json({ message: "Product updated successfully" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    })
    .catch((err) => res.status(404).json({ error: "PRODUCT NOT FIND!" }));
};

// * ADDED PRODUCTS
const productsAdded = async (req, res) => {
  const { productName, price, stock } = req.body;

  try {
    const products = await prodSchema.create({ productName, price, stock });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  productsList,
  productsSingle,
  productsDelete,
  productsUpdate,
  productsAdded,
};
