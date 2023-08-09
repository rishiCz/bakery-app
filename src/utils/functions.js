export const findItemInCart = (cartProducts, id) => {
    const item = cartProducts.find(item => item.product.id === id);
    return item;
}
export const addListToListStorage = (listData) => {
      listData = JSON.stringify(listData);
    localStorage.setItem('cartList', listData);
  };
  export const getListFromListStorage = () => {
    const listData = localStorage.getItem('cartList');
    if (listData) {
      return JSON.parse(listData);
    }
    return null;
  };
  export const deleteListFromListStorage = () => {
    localStorage.removeItem('cartList');
  };
  export const addPriceToStorage = (price) => {
      price = JSON.stringify(price);
    localStorage.setItem('price', price);
  };
  export const getPriceFromStorage = () => {
    const price = localStorage.getItem('price');
    if (price) {
      return JSON.parse(price);
    }
    return null;
  };
