export const findItemInCart = (cartProducts, id) => {
    const item = cartProducts.find(item => item.product.id === id);
    return item;
}
