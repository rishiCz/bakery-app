import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import cartStyles from "./style.module.css";
import { useSelector } from "react-redux";
import { HiOutlineHome } from "react-icons/hi";

const Header = () => {
  return (
    <div id={cartStyles.header}>
      <Link to="/">
        <HiOutlineHome />
        My Bakery
      </Link>
      <h1>My Cart</h1>
    </div>
  );
};

const CartList = (cart) => {
  const cartProduct = cart.cartProducts;
  const length = cartProduct.length;
  if (length == 0) {
    return (
      <div className={cartStyles.listContainer}>
        <h1>Your Cart is Empty!</h1>
        <h2>Add items to your cart</h2>
      </div>
    );
  } else {
    return (
      <div className={cartStyles.listContainer}>
        {cartProduct.map((item) => (
          <CartItem
            id={item.product.id}
            image={item.product.image}
            name={item.product.name}
            price={item.product.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    );
  }
};

const priceContainer = (cart) => {
  const cartProduct = cart.cartProducts;
  const totalPrice = cart.totalCost.toFixed(2);
  const length = cartProduct.length;
  if (length == 0) {
    return;
  } else {
    return (
      <div className={cartStyles.priceContainer}>
        <h2>Price Details</h2>
        <hr />
        <div className={cartStyles.namePriceListGrid}>
        {cartProduct.map((item,index) => (<>
          <label>{index+1}. {item.product.name} x {item.quantity}</label><label>${(item.quantity * item.product.price).toFixed(2)}</label>
          </>
        ))}
        </div>
        <div className={cartStyles.couponContainer}>
          <input
            type="text"
            id={cartStyles.couponInput}
            placeholder="Coupon Code"
          />
          <button id={cartStyles.applyButton}>APPLY</button>
        </div>
        <div class={cartStyles.namePriceGrid}>
            <label>Coupon Discount</label> <label>-${"5"}</label>
            <label>Sale Discount</label> <label>-${"5"}</label>
            <label>Tax</label> <label>+${"5.8"}</label>
        </div>
        <hr/>
        <div className={cartStyles.placeOrderContainer}>
          <p className={cartStyles.cartTotal}>Total  ${(totalPrice - 4.2).toFixed(2)}</p>
          <button className={cartStyles.placeOrderButton}>Place Order</button>
        </div>
      </div>
    );
  }
};

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Header />
      <div className={cartStyles.cartContainer}>
        {CartList(cart)}
        {priceContainer(cart)}
      </div>
    </>
  );
};

export default MyCart;
