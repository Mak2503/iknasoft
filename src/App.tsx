import "./App.css"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-[#FEFEFE] font-hind">
      <Banner />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
