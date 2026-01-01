
import Card from "./comps/Card"
import Fav from "./pages/Fav"
import Home from "./pages/Home"
import Nav from "./comps/Nav"
import { Route,Routes } from "react-router-dom"
import { pokeProvider } from "./context/PokeContext"
function App() {
  return(<pokeProvider>
  
  
    <Nav></Nav>
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Fav" element={<Fav></Fav>}/>
  </Routes>
  
  </pokeProvider>)
}

export default App
