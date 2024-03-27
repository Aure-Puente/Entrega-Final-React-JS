import { ThemeProvider } from "@emotion/react"
import Navbar from "./components/layout/navbar/Navbar"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { temaPrincipal } from "../themeConfig"


function App() {

  return (
    <ThemeProvider theme={temaPrincipal}>
      <div>
        <Navbar />
        <ItemListContainer
          greetings={"Bienvenido a Guitar Shop"}/>
      </div>
    </ThemeProvider>
  )
}

export default App
