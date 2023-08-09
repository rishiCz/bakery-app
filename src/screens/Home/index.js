import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import {
  selectFilteredProductList,
  updateSearchValue,
} from "../../store/slices/productSlice";

const Home = () => {
  const productState = useSelector((state) => state.product);
  const queryValue = productState.searchValue
  const dispatch = useDispatch();
  const queryChange = (event) => {
    const query = event.target.value;
    dispatch(updateSearchValue(query));
  };
  const filteredProductList = useSelector(selectFilteredProductList);
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
          value={queryValue}
        />
      </div>
      <hr id={styles.itemHr} />
      <div className={styles.productList}>
        {filteredProductList.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.productImage}
            name={item.productName}
            description={item.productDescription}
            price={item.productPrice}
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
