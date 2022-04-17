import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  reducers: {
    setItemToFavorite(state, action){
      return {
        ...state,
        ...action.payload,
      }
    },
    removeItemFromFavorite(state, action){
      
    },

  }
})