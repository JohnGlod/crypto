import {configureStore} from '@reduxjs/toolkit'
import NFTCollectionsReducer from './redusers/NFTCollectionsSlice'
import favoriteReducer from './redusers/favoriteSlice'

export default configureStore({
  reducer: {
    NFTCollections : NFTCollectionsReducer, 
    favorites: favoriteReducer,
  },
})
