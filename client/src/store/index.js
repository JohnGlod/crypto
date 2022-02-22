import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import itemsSlice from './itemsSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
    items : itemsSlice, 
  },
})