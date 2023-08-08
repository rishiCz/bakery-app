import CartItem from "../../components/CartItem";
import cartStyles from "./style.module.css";
import { useSelector } from "react-redux";

const CartList= (cart) =>{
  const cartProduct = cart.cartProducts;
  const length = cartProduct.length;
  console.log(cartProduct)
  if(length == 0){
    return(<>
      <h1>Your Cart is Empty!</h1>
      <h2>Add items to your cart</h2>
      </>
    )
  }
  else{
    return(
      cartProduct.map((item) => (
        <CartItem
          id={item.product.id}
          image={item.product.image}
          name={item.product.name}
          price={item.product.price}
          quantity={item.quantity}
        />
      )))
  }
}

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.totalCost.toFixed(2);

  return (
    <div className={cartStyles.cartContainer}>
      <div className={cartStyles.listContainer}>
        {CartList(cart)}
      </div>
      <div className={cartStyles.priceContainer}>
      <h2>Price Details</h2>
      <hr/>
      <div className={cartStyles.couponContainer}><input
          type="text"
          autoCapitalize="true"
          id={cartStyles.couponInput}
          placeholder="Coupon Code"
        />
        <button id={cartStyles.applyButton}>APPLY</button></div>
        <p className={cartStyles.cartTotal}>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default MyCart;