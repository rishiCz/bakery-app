import styles from './style.module.css';
import QuantitySelector from '../QuantitySelector';

const ProductCard = (props) => {
  const product = {...props};
  return (
        <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.detailsBackground}>
        <h3 className={styles.productName}>{product.name}</h3>
        <hr/>
        <QuantitySelector product={product}/>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
