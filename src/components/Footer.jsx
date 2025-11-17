import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/solid'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-cian-cobalto text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(233,30,99,0.3)_0%,_transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <LocalHospitalIcon sx={{ fontSize: 40, color: 'white' }} />
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-bold mb-2">Consultorios Médicos Buenos Aires</h3>
            <p className="text-sm text-white/80 mb-1">© 2025 - Todos los derechos reservados</p>
            <p className="text-xs text-white/60">
              Diseñado con <HeartIcon className="w-4 h-4 inline text-magenta animate-pulse" /> <a href="https://www.linkedin.com/in/santiago-bracamonte/">por Santiago Bracamonte</a>
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm font-semibold mb-2 flex items-center justify-center md:justify-end gap-2">
              <LocationOnIcon sx={{ fontSize: 18 }} />
              Manuel Belgrano 1266, Longchamps
            </p>
            <p className="text-sm font-semibold flex items-center justify-center md:justify-end gap-2">
              <PhoneIcon sx={{ fontSize: 18 }} />
              011 6719-8335
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-magenta"></div>
    </footer>
  )
}

export default Footer
