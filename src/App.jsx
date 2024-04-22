//Importaciones:
import { ThemeProvider } from "@emotion/react"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx"
import { temaPrincipal } from "../themeConfig.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout.jsx"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx"
import CartContainer from "./components/pages/cart/CartContainer.jsx"


//JSX:
function App() {
  return <ThemeProvider theme={temaPrincipal}> {/*Usamos un tema que voy a ir personalizando mientras avanzo con el proyecto.*/}
    {/*Usamos los "envoltorios" correspondientes desde la libreria de react-router-dom y luego a traves de la
    etiqueta Route, declaramos nuestras rutas y los elementos correspondientes a mostrar en pantalla.*/}
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
  </ThemeProvider>
}

export default App
