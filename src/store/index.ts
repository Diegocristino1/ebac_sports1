import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import carrinhoReducer from './reducers/carrinhoSlice'
import favoritosReducer from './reducers/favoritosSlice'

export const store = configureStore({
  reducer: {
    api: api.reducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
