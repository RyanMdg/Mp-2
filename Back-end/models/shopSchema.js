import mongoose from "mongoose";
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Shops", shopSchema);
