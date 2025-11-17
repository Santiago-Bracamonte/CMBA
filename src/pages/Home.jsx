import { motion } from 'framer-motion'
import { 
  ClockIcon, 
  MapPinIcon, 
  UserGroupIcon,
  SparklesIcon,
  CheckBadgeIcon 
} from '@heroicons/react/24/outline'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import DirectionsIcon from '@mui/icons-material/Directions'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import TrainIcon from '@mui/icons-material/Train'

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const horarios = [
    { dia: 'Lunes a Viernes', horario: '09:30 - 20:00 hs', disponible: true },
    { dia: 'Sábados', horario: '09:30 - 14:00 hs', disponible: true },
    { dia: 'Domingos', horario: 'CERRADO', disponible: false },
  ]

  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Sin Turno Previo',
      description: 'Atendemos por orden de llegada. No necesitás sacar turno.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: '22+ Especialidades',
      description: 'Todas las especialidades médicas en un solo lugar.'
    },
    {
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      title: 'Habilitados',
      description: 'Colegio de Médicos de la Provincia de Buenos Aires.'
    },
  ]

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
            alt="Equipo médico profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cobalto/90 via-cian/85 to-magenta/70" />
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/4 w-full h-full bg-magenta/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6">
                 Atención Médica de Calidad
              </span>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Tu Salud es{' '}
              <span className="text-white drop-shadow-[0_0_30px_rgba(233,30,99,0.8)]">
                Nuestra Prioridad
              </span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 text-white/90 font-light"
            >
              Consultorios Médicos en Longchamps con más de 22 especialidades.
              <br />
              <strong className="font-bold text-magenta-light">¡Sin necesidad de turno previo!</strong>
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="/especialidades" className="btn-primary">
                Ver Especialidades
              </a>
              <a href="/contacto" className="btn-secondary border-white text-white hover:bg-white hover:text-cobalto">
                Contactanos
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Desplázate</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card-glass p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-cian-cobalto text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-cobalto mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios Section - NUEVO DISEÑO */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg mb-6">
                <ClockIcon className="w-6 h-6 text-cian" />
                <span className="font-bold text-cobalto">Horarios de Atención</span>
              </div>
              <h2 className="text-4xl font-extrabold text-cobalto mb-4">
                Atendemos <span className="gradient-text">Sin Turno</span>
              </h2>
              <p className="text-lg text-gray-600">
                Vení cuando lo necesités. Atención por <strong>orden de llegada</strong>.
              </p>
            </div>

            <div className="card-glass p-8 md:p-12">
              <div className="space-y-4">
                {horarios.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
                      item.disponible
                        ? 'bg-gradient-to-r from-cian/10 to-cobalto/10 border-2 border-cian/30 hover:border-cian hover:shadow-xl'
                        : 'bg-gray-100 border-2 border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${item.disponible ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                      <span className="text-lg font-bold text-cobalto">{item.dia}</span>
                    </div>
                    <span className={`text-xl font-extrabold ${item.disponible ? 'text-cian' : 'text-gray-500'}`}>
                      {item.horario}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-magenta rounded-2xl text-white text-center">
                <p className="text-lg font-bold mb-2 flex items-center justify-center gap-2"><WarningAmberIcon /> Importante</p>
                <p className="text-white/90">
                  <strong>No es necesario sacar turno.</strong> Llegá dentro del horario y te atendemos por orden de llegada.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-extrabold text-cobalto mb-6">
              Seguinos en Redes
            </h2>
            <p className="text-gray-600 mb-8">Mantenete informado sobre novedades y consejos de salud</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                <InstagramIcon className="text-3xl" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                <FacebookIcon className="text-3xl" />
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg mb-6">
                <MapPinIcon className="w-6 h-6 text-cian" />
                <span className="font-bold text-cobalto">Ubicación</span>
              </div>
              <h2 className="text-4xl font-extrabold text-cobalto mb-4">¿Dónde Estamos?</h2>
              <p className="text-lg text-gray-600">Visitanos en nuestro consultorio</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Información de Ubicación */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-glass p-8"
              >
                <h3 className="text-2xl font-bold text-cobalto mb-6 flex items-center gap-3">
                  <MapPinIcon className="w-7 h-7 text-cian" />
                  Nuestra Dirección
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-2 font-semibold flex items-center gap-2"><LocationOnIcon className="text-cian" /> Dirección:</p>
                    <p className="text-lg text-cobalto font-bold">Manuel Belgrano 1266</p>
                    <p className="text-gray-600">B1854 Longchamps, Provincia de Buenos Aires</p>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-gray-600 mb-3 font-semibold flex items-center gap-2"><DirectionsIcon className="text-cian" /> Cómo llegar:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <DirectionsCarIcon className="text-cian mt-1 flex-shrink-0" />
                        <span><strong>En auto:</strong> Sobre Manuel Belgrano 1266, entre Ovidio Lagos y Pcia. de Buenos Aires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrainIcon className="text-cian mt-1 flex-shrink-0" />
                        <span><strong>En tren:</strong> Estación Longchamps (Línea Roca)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <a
                      href="https://www.google.com/maps?ll=-34.858254,-58.386065&z=16&t=m&hl=es&gl=AR&mapclient=embed&cid=3413296920196652647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center inline-block"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Mapa */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-glass overflow-hidden p-2"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.6859844707844!2d-58.38860892347661!3d-34.85825417281677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd316e505ad95%3A0x2f5a7d8e3e8b8f67!2sManuel%20Belgrano%201266%2C%20B1854%20Longchamps%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </motion.div>
            </div>

            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-glass p-6 text-center bg-gradient-to-r from-cian/10 to-cobalto/10 border-2 border-cian/30"
            >
              <p className="text-cobalto font-bold text-lg flex items-center justify-center gap-2">
                <LightbulbIcon className="text-cian" /> <strong>Recordá:</strong> No necesitás turno previo. Vení directamente en nuestro horario de atención.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home
