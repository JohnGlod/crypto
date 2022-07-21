
import { configureStore } from '@reduxjs/toolkit'
import NFTCollections from './features/NFTcollections/slice'
import favorites from './features/favorites/slice'

const store = configureStore({
  reducer: {
    NFTCollections, 
    favorites,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store