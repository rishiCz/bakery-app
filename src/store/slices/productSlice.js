import { createSlice } from '@reduxjs/toolkit';
import productList from "../../assets/productData.json";

const initialState = {
  productList: productList.map((item, index) => (
    {...item,
    id: index}
  )),
  searchValue: '',
  filteredProductList: []
};

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    updateFilteredProductList: (state, action) => {
      state.filteredProductList = action.payload;
    }
  }
});

export const { updateSearchValue } = product.actions;
export const selectFilteredProductList = state => {
  const { productList, searchValue } = state.product;
  if (searchValue.length === 0) {
    return productList;
  }
  const normalizedQuery = searchValue.toLowerCase();
  return productList.filter(product => product.productName.toLowerCase().includes(normalizedQuery));
};

export default product.reducer;
