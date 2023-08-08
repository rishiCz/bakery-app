import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  searchValue: '',
  categories: []
};

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategoriesList: (state, action) => {
      state.categories = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    }
  }
});

export const { setCategoriesList, setProductList, updateSearchValue } = product.actions;

export default product.reducer;
