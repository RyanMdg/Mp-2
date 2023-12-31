import exprss from "express";
import prodController from "../controllers/productController.js";
import isLoggedIn from "../controllers/middleware.js";
import upload from "../controllers/uploadMiddleware.js";
const router = exprss.Router();

router.use(isLoggedIn);

//* GET LIST OF PRODUCTS
router.get("/productlist", prodController.productsList);

//* GET A SINGLE PRODUCTS
router.get("/productlist/:id", prodController.productsSingle);

//* DELETE PRODUCTS
router.delete("/productlist/:id", prodController.productsDelete);

//* UPDATE PRODUCTS
router.patch("/productlist/:id", prodController.productsUpdate);

//* POST NEW PRODUCTS

router.post(
  "/productadd",
  upload.single("image"),
  prodController.productsAdded
);

export default router;
