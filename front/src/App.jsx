import Footer from "./components/App/Footer"
import NavBar from "./components/App/NavBar"
import Login from "./views/Login/Login"
import { useState } from "react"
// import Register from "./views/Login/Register"
import Home from "./views/Home"
// import MisTurnos from "./views/MisTurnos"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <NavBar/>
      <div>
      {loggedIn ? (
        <div>
            <Home />
        </div>
      ) : (
      <div>
        <Login onLogin={() => setLoggedIn(true)} />
        <p>¿No tienes una cuenta? <button onClick={() => setLoggedIn(false)}>Regístrate</button></p>
      </div>
      )}
      </div>
      {/* <MisTurnos /> */}
      <Footer/>
    </>
  )
}

export default App
