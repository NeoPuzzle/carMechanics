import Footer from "./components/App/Footer"
import NavBar from "./components/App/NavBar"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Register from "./views/Login/Register"
import Home from "./views/Home"
import Login from "./views/Login/Login"
import MisTurnos from "./views/Turnos/MisTurnos"
import NewTurn from "./views/Turnos/NewTurn"
import ErrorPage from "./components/App/ErrorPage"

function App() {

  return (
    <>
    <div className="container">
    <NavBar/>
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointments" element={<MisTurnos />} />
      <Route path="/turn" element={< NewTurn />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
      <Footer className="footer" />
    </div>
    
    </>
  )
}

export default App
