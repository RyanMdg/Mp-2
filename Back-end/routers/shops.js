import exprss from "express";
import shopController from "../controllers/shopController.js";
const router = exprss.Router();

// * SHOP LIST
router.get("/shoplist", shopController.shopList);

// * SINGLE SHOP
router.get("/shoplist/:id", shopController.shopSingle);

// * ADDING NEW SHOP
router.post("/shopadd", shopController.shopAdded);

export default router;
