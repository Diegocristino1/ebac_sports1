import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/api'

function App() {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <p>Carregando...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
