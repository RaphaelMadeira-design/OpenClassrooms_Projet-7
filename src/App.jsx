import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './pages/Error'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:rentalId" element={<Rental />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  )
}

export default App