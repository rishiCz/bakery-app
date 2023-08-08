import React, { useState } from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/slices/cartSlice';
import { addGivenQuantity } from '../../store/slices/cartSlice';
import { decreaseQuantity } from '../../store/slices/cartSlice';
import { removeItem } from "../../store/slices/cartSlice";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  const product = {...props};
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const newprops = {...props,quantity:newQuantity};
      console.log(newQuantity);
      dispatch(addGivenQuantity(newprops));
    }
  };
  const incQuantity = () =>{
    dispatch(addToCart(props));
  }
  const decQuantity = () =>{
    dispatch(decreaseQuantity(props));
  }
  const deleteButtonClick = () =>{
    dispatch(removeItem(props));
  }

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
        <button
          className={styles.controlButton}
          onClick={decQuantity}
        >
          -
        </button>
        <input
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
        />
        <button
          className={styles.controlButton}
          onClick={incQuantity}
        >
          +
        </button>
        <p className={styles.totalPrice}>${(product.quantity * product.price).toFixed(2)}</p>
      </div>
      <button className={styles.deleteButton} onClick={deleteButtonClick}>
        <FaTrash/> Delete</button>
    </div>
  );
};

export default CartItem;
