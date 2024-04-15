import Footer from "./components/App/Footer"
import NavBar from "./components/App/NavBar"
// import Login from "./views/Login/Login"
import "./App.css"
// import Register from "./views/Login/Register"
import Home from "./views/Home"
// import MisTurnos from "./views/MisTurnos"

function App() {
  

  return (
    <>
    <div className="container">
    <NavBar/>
    <div className="content">
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <MisTurnos /> */}
    </div>
      <Footer className="footer" />
    </div>
    
    </>
  )
}

export default App
