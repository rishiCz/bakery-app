import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

export const wish = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    updateWishList: (state, action) => {
      const itemInWishList = state.wishList.find(item => item.id === action.payload.id);

      if (itemInWishList) {
        state.wishList = state.wishList.filter(item => item !== itemInWishList);
      } else {
        state.wishList.push(action.payload);
      }
    },
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});

export const { updateWishList, setWishList } = wish.actions;

export default wish.reducer;
