import React from "react";
import ProductCard from "../../components/ProductCard";
import productList from "../../assets/productData.json";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

import {
  setProductList,
  selectFilteredProductList,
  updateSearchValue,
} from "../../store/slices/productSlice";

const Home = () => {
  const filteredProductList = useSelector(selectFilteredProductList);
  const productSelector = useSelector((state) => state.product)
  const cartProducts = productSelector.productList;
  const dispatch = useDispatch();
  dispatch(setProductList(productList));
  console.log(cartProducts)

  const queryChange = (event) => {
    const query = event.target.value;
    dispatch(updateSearchValue(query));
  };

  return (
    <>
      {CartIcon()}
      {Header()}
      <div className={styles.searchHolder}>
        <IoSearchOutline/>
        <input
          type="text"
          onChange={queryChange}
          placeholder="Search Bakery"
        />
      </div>
      <hr id={styles.itemHr} />
      <div className={styles.productList}>
        {filteredProductList.map((product, index) => (
          <ProductCard
            id={product.id}
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
    </>
  );
};

const CartIcon = () => {
  return (
    <Link id={styles.cartIconHolder} to="/cart">
      <PiShoppingCartSimpleDuotone />
    </Link>
  );
};

export default Home;
