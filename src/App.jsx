import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Specialties from './pages/Specialties'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/especialidades" element={<Specialties />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App
