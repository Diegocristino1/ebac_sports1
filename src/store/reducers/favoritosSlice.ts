import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../api'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoJaExiste = state.itens.find((item) => item.id === produto.id)

      if (produtoJaExiste) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { favoritar, removerDosFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
