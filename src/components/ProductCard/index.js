import styles from './style.module.css';
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/slices/cartSlice';

const ProductCard = (props) => {
  const product = {...props};
  const dispatch = useDispatch();

  const preventDefault = (event) => {
    event.preventDefault();
  };
  const cartClick = () => {
    dispatch(addToCart(product));
  };

  return (
        <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.detailsBackground}>
        <h3 className={styles.productName}>{product.name}</h3>
        <hr/>
        <button className={styles.addToCartButton} onClick={cartClick}>
            Add to Cart
        </button>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
