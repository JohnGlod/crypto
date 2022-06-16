import {configureStore} from '@reduxjs/toolkit'
import NFTCollectionsSlice from './redusers/NFTCollectionsSlice'
import favoriteSlice from './redusers/favoriteSlice'

export default configureStore({
  reducer: {
    NFTCollections : NFTCollectionsSlice, 
    favorites: favoriteSlice,
  },
})
