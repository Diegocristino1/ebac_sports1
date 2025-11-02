import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../api'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoJaExiste = state.itens.find((item) => item.id === produto.id)

      if (produtoJaExiste) {
        alert('Item já adicionado')
        return
      }

      state.itens.push(produto)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
