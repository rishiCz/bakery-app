import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { decreaseQuantity } from "../../store/slices/cartSlice";
import { removeItem } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { findItemInCart } from "../../utils/functions";

const QuantitySelector = (props) => {
  const product = props.product;
  const cart = useSelector((state) => state.cart);
  const cartProduct = cart.cartProducts;
  const itemInCart = findItemInCart(cartProduct,product.id);
  const dispatch = useDispatch();

  const incQuantity = () => {
    dispatch(addToCart(itemInCart.product));
  };
  const decQuantity = () => {
    dispatch(decreaseQuantity(itemInCart.product));
    if(itemInCart.quantity<2){
        dispatch(removeItem(itemInCart.product));
      }
  };
  const cartClick = () => {
    dispatch(addToCart(product));
  };
  if(itemInCart)
    return (<>
        <button className={styles.controlButton} onClick={decQuantity}>
            -
        </button>
        <p className={styles.quantityInput}>{itemInCart.quantity}</p>
        <button className={styles.controlButton} onClick={incQuantity}>
            +
        </button>
        </>
    );else
        return(<button className={styles.addToCartButton} onClick={cartClick}>
            Add to Cart
        </button>)
};

export default QuantitySelector;
