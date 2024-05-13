//Importaciones:
import { ThemeProvider } from "@emotion/react"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx"
import { temaPrincipal } from "../themeConfig.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout.jsx"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx"
import CartContainer from "./components/pages/cart/CartContainer.jsx"
import CartContextProvider from "./context/CartContext.jsx"


//JSX:
function App() {
  return <ThemeProvider theme={temaPrincipal}>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"element={<ItemListContainer />} />
            <Route path="*" element={<h1>Error</h1>} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </ThemeProvider>
}

export default App
