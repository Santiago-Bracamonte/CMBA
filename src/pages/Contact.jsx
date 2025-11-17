import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    especialidad: '',
    mensaje: ''
  })

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    
    // Simulación de envío
    setTimeout(() => {
      alert('¡Mensaje enviado con éxito! Te contactaremos pronto.')
      setSending(false)
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        especialidad: '',
        mensaje: ''
      })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="pt-32 pb-16">
      {/* Hero */}
      <section className="relative bg-gradient-cian-cobalto text-white py-20 overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
            alt="Contacto médico"
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
              Ponete en <span className="text-magenta-light">Contacto</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Estamos para ayudarte. Escribinos o vení a visitarnos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-glass p-8 md:p-12"
            >
              <h2 className="text-3xl font-extrabold text-cobalto mb-4">
                Envianos tu Consulta
              </h2>
              <p className="text-gray-600 mb-8">
                Completá el formulario y te responderemos a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-cobalto mb-2">
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cian focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-cobalto mb-2">
                    Teléfono (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cian focus:outline-none transition-colors"
                    placeholder="11 6719-8335"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-cobalto mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cian focus:outline-none transition-colors"
                    placeholder="juan.perez@correo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-cobalto mb-2">
                    Especialidad
                  </label>
                  <select
                    name="especialidad"
                    value={formData.especialidad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cian focus:outline-none transition-colors"
                  >
                    <option value="">Seleccione una opción...</option>
                    <option value="CARDIOLOGIA">Cardiología</option>
                    <option value="CLINICA">Clínica Médica</option>
                    <option value="DERMATOLOGIA">Dermatología</option>
                    <option value="GINECOLOGIA">Ginecología</option>
                    <option value="PEDIATRIA">Pediatría</option>
                    <option value="OTRO">Otra especialidad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-cobalto mb-2">
                    Consulta
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cian focus:outline-none transition-colors resize-none"
                    placeholder="Escribí tu consulta aquí..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary flex items-center justify-center gap-3"
                >
                  {sending ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Enviar Consulta
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* WhatsApp Card */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-extrabold text-cobalto mb-4">
                  Contacto Directo
                </h3>
                <p className="text-gray-600 mb-6">
                  Para turnos o consultas urgentes, contactanos directamente.
                </p>
                <a
                  href="https://wa.me/5491167198335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  <PhoneIcon className="w-6 h-6" />
                  Enviar WhatsApp
                </a>
              </div>

              {/* Contact Details */}
              <div className="card-glass p-8 space-y-6">
                <h3 className="text-2xl font-extrabold text-cobalto mb-4">
                  Información de Contacto
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-cian-cobalto rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-cobalto">Teléfono</p>
                    <p className="text-gray-600">011 6719-8335</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-cian-cobalto rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-cobalto">E-Mail</p>
                    <p className="text-gray-600">info@consultoriosbuenosaires.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-cian-cobalto rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-cobalto">Ubicación</p>
                    <p className="text-gray-600">Manuel Belgrano 1266</p>
                    <p className="text-gray-600">B1854 Longchamps, Buenos Aires</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-extrabold text-cobalto mb-4">
                  Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-transform text-center">
                    <InstagramIcon />
                    Instagram
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:scale-105 transition-transform text-center">
                    <FacebookIcon />
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-cobalto mb-4">¿Dónde Estamos?</h2>
              <p className="text-gray-600">Manuel Belgrano 1266, Longchamps</p>
            </div>

            <div className="card-glass overflow-hidden p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.6859844707844!2d-58.38860892347661!3d-34.85825417281677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd316e505ad95%3A0x2f5a7d8e3e8b8f67!2sManuel%20Belgrano%201266%2C%20B1854%20Longchamps%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Contact
