import classes from "./Cart.module.css";
import Model from "../UI/Modal";
const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: "1", price: 100 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Model>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>105</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
