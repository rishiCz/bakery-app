import React from "react";
import ProductCard from "../../components/ProductCard";
import productList from "../../assets/productData.json";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

const Home = () => {
  return (
    <>
      {CartIcon()}
      {Header()}
      <div className={styles.productList}>
        {productList.map((product, index) => (
          <ProductCard
            id={index}
            image={product.productImage}
            name={product.productName}
            price={product.productPrice}
          />
        ))}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <h1 id={styles.title}>My Bakery</h1>
      <h2 id={styles.itemHeading}>☺All Items</h2>
      <hr id={styles.itemHr} />
    </>
  );
};

const CartIcon = () => {
  return(
    <Link id={styles.cartIconHolder} to="/cart">
      <PiShoppingCartSimpleDuotone/>
    </Link>
  );
};
function print(){
  window.open("http://localhost:3000/cart","_self");
}

export default Home;