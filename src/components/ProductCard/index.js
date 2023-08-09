import styles from "./style.module.css";
import QuantitySelector from "../QuantitySelector";

const ProductCard = (props) => {
  const product = { ...props };
  const { name, image, price, description } = product;
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.detailsBackground}>
        <h3 className={styles.productName}>{name}</h3>
        <h4 className={styles.productDescripton}>{description}</h4>
        <hr />
        <QuantitySelector product={product} />
        <p className={styles.productPrice}>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
