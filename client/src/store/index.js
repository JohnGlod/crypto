import {configureStore} from '@reduxjs/toolkit'
import NFTCollectionsSlice from './redusers/NFTCollectionsSlice'

export default configureStore({
  reducer: {
    NFTCollections : NFTCollectionsSlice, 
  },
})
