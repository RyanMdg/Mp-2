import { RiSettings3Fill } from "react-icons/ri";
const CartPage = ({ cartItems }) => {
  return (
    <div>
      <div className=" flex items-center">
        <RiSettings3Fill className="h-24 w-24 animate-spin" />
        <h1>Sorry for the inconvenience, we're still working on our website</h1>
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.productName || "Unknown Product"}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
