import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import QuantitySelector from "../QuantitySelector";

const CartItem = (props) => {
  const product = { ...props };
  const dispatch = useDispatch();
  const deleteButtonClick = () => {
    console.log(props);
    dispatch(removeItem(props));
  };
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.detailsBackground}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.quantitySelectorHolder}>
          <QuantitySelector product={product} />
        </div>
        <p className={styles.totalPrice}>
          ${(product.quantity * product.price).toFixed(2)}
        </p>
      </div>
      <button className={styles.deleteButton} onClick={deleteButtonClick}>
        <FaTrash /> Delete
      </button>
    </div>
  );
};

export default CartItem;
