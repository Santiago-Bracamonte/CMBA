import { motion } from 'framer-motion'
import {
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const values = [
    {
      icon: <SparklesIcon className="w-10 h-10" />,
      title: 'Tecnología de Vanguardia',
      description: 'Equipamiento de última generación para diagnósticos precisos.'
    },
    {
      icon: <UserGroupIcon className="w-10 h-10" />,
      title: 'Profesionales Capacitados',
      description: 'Equipo médico en constante actualización y formación continua.'
    },
    {
      icon: <ClockIcon className="w-10 h-10" />,
      title: 'Atención Inmediata',
      description: 'Sin turnos previos. Te atendemos por orden de llegada.'
    },
    {
      icon: <CheckCircleIcon className="w-10 h-10" />,
      title: 'Atención Integral',
      description: 'Todas las especialidades en un solo lugar para tu comodidad.'
    }
  ]

  

  return (
    <main className="pt-32 pb-16">
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Medical Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
            alt="Equipo médico profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cobalto/90 via-cian/85 to-magenta/70" />
        </div>
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-magenta/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Cuidando tu salud desde hace más de{' '}
              <span className="text-magenta-light">una década</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Compromiso, calidad y cercanía en cada atención
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Somos una institución médica polivalente, habilitada por el{' '}
              <strong className="text-cobalto">Colegio de Médicos de la Provincia de Buenos Aires</strong>, 
              con categoría de primer nivel de atención. Nuestro compromiso es ser tu aliado de confianza en el cuidado de la salud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-glass p-12 text-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-magenta/20 rounded-full blur-2xl"
              />
              
              <HeartIcon className="w-16 h-16 text-magenta mx-auto mb-6 animate-float" />
              <h2 className="text-4xl font-extrabold text-cobalto mb-6">Nuestra Misión</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ofrecer servicios médicos de calidad al alcance de toda la población, garantizando atención médica 
                de excelencia y desarrollando actividades que promuevan el bienestar bio-psico-social en nuestra comunidad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-cobalto mb-4">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-magenta mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-cian-cobalto text-white rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-cobalto mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-20 bg-gradient-cian-cobalto text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-magenta/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-extrabold mb-6">¿Listo para cuidar tu salud?</h2>
            <p className="text-xl text-white/90 mb-10">
              Conocé todas nuestras especialidades médicas y encontrá la atención que necesitás
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/especialidades" className="px-8 py-4 bg-white text-cobalto font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                Ver Especialidades
              </a>
              <a href="/contacto" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cobalto transition-all">
                Contactanos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About
