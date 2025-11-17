import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Especialidades', path: '/especialidades' },
    { name: 'Contacto', path: '/contacto' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-gradient-cian-cobalto'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-cian-cobalto text-white py-2 px-4 text-center text-sm font-semibold">
        <div className="flex items-center justify-center gap-2">
          <PhoneIcon className="w-4 h-4" />
          <span href="https://wa.me/5491167198335"> | WhatsApp: 011 6719-8335</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-magenta rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              C
            </div>
            <div className={`transition-colors duration-300 ${scrolled ? 'text-cobalto' : 'text-white'}`}>
              <h1 className="text-xl font-bold leading-tight">Consultorios</h1>
              <p className="text-xs font-medium">Médicos Buenos Aires</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-2 font-bold rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-white text-cobalto shadow-lg scale-105'
                    : scrolled
                    ? 'text-cobalto hover:bg-cian/10'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-cobalto hover:bg-cian/10' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white shadow-xl"
      >
        <nav className="container mx-auto px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold transition-all ${
                location.pathname === item.path
                  ? 'bg-gradient-cian-cobalto text-white shadow-lg'
                  : 'text-cobalto hover:bg-cian/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default Header
