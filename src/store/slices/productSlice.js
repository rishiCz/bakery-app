import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  searchValue: '',
  filteredProductList: []
};

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    updateFilteredProductList: (state, action) => {
      state.filteredProductList = action.payload;
    }
  }
});

export const { setProductList, updateSearchValue } = product.actions;
export const selectFilteredProductList = state => {
  const { productList, searchValue } = state.product;
  const newProductList = productList.map((item, index) => ({
    ...item,
    id: index,
  }));
  if (searchValue.length === 0) {
    return newProductList;
  }
  const normalizedQuery = searchValue.toLowerCase();
  
  return newProductList.filter(product => product.productName.toLowerCase().includes(normalizedQuery));
};

export default product.reducer;
