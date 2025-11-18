import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline'
import { specialtiesData } from '../data/specialties'
import SearchIcon from '@mui/icons-material/Search'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Specialties = () => {
  const [expandedId, setExpandedId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSpecialties = specialtiesData.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-cian-cobalto text-white py-20 overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
            alt="Especialidades médicas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cobalto/90 via-cian/85 to-magenta/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Nuestras <span className="text-magenta-light">Especialidades</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Más de 22 especialidades médicas con profesionales altamente capacitados
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-cobalto" sx={{ fontSize: 28 }} />
              <input
                type="text"
                placeholder="Buscar especialidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-4 rounded-full text-cobalto font-semibold shadow-2xl focus:outline-none focus:ring-4 focus:ring-magenta/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <button
                  onClick={() => toggleExpand(specialty.id)}
                  className="w-full text-left card-glass p-6 group cursor-pointer"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        {specialty.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cobalto group-hover:text-cian transition-colors">
                          {specialty.name}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === specialty.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDownIcon className="w-6 h-6 text-cian" />
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === specialty.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t-2 border-cian/20">
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {specialty.description}
                          </p>
                          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cian/10 to-cobalto/10 rounded-xl">
                            <UserIcon className="w-5 h-5 text-cobalto" />
                            <div>
                              <p className="text-sm text-gray-500">Profesional</p>
                              <p className="font-bold text-cobalto">{specialty.professional}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredSpecialties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-gray-400">No se encontraron especialidades</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center card-glass p-12"
          >
            <h2 className="text-4xl font-extrabold text-cobalto mb-4">
              ¿Necesitás atención médica?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vení sin turno previo. Te atendemos por orden de llegada.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contacto" className="btn-primary">
                Solicitar Información
              </Link>
              <a href="https://wa.me/5491167198335" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Specialties
