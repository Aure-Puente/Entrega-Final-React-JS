//Importaciones
import { ThemeProvider } from "@emotion/react"
import Navbar from "./components/layout/navbar/Navbar"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { temaPrincipal } from "../themeConfig"


function App() {

  return (
    <ThemeProvider theme={temaPrincipal}> {/*Envuelvo todo dentro del ThemeProvider para utilizar un tema que voy a ir personalizando*/}
      <div>
        <Navbar />
        <ItemListContainer greetings={"Bienvenido a Guitar Shop"}/> {/*Enviamos el saludo de bienvenida a través de la props*/}
      </div>
    </ThemeProvider>
  )
}

export default App
