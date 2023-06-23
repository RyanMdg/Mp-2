import exprss from "express";
import prodSchema from "../models/productSchema.js";
import prodController from "../controllers/productController.js";
const router = exprss.Router();

//* GET LIST OF PRODUCTS
router.get("/productlist", prodController.productsList);

//* GET A SINGLE PRODUCTS
router.get("/productlist/:id", prodController.productsSingle);

//* DELETE PRODUCTS
router.delete("/productlist/:id", prodController.productsDelete);

//* UPDATE PRODUCTS
router.patch("/productlist/:id", prodController.productsUpdate);

//* POST NEW PRODUCTS

router.post("/productadd", prodController.productsAdded);

export default router;
