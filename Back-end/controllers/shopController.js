import shopSchema from "../models/shopSchema.js";

// * LIST OF SHOP
const shopList = (req, res) => {
  shopSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// * GET SINGLE SHOP
const shopSingle = (req, res) => {
  const id = req.params.id;

  shopSchema
    .findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json({ error: "Product Don't Exis" }));
};

// * ADDING NEW SHOP for static
const shopAdded = async (req, res) => {
  const { shopName, address, contact } = req.body;

  try {
    const shop = await shopSchema.create({ shopName, address, contact });
    res.status(200).json(shop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { shopAdded, shopList, shopSingle };
