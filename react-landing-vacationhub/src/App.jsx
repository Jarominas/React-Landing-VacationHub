import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './app.css'
import TourCarousel from './Components/TourCarousel/TourCarousel'

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <TourCarousel />
        </>
    )
}

export default App
