import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import banner from './banner.png';
import mobileBanner from './mobile.png';
import logo from './logo.png';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Desktop Background Image - Hidden on mobile */}
      <div className="hidden lg:block absolute inset-0">
        <img 
          src={banner} 
          alt="Background" 
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Content Section - Top on mobile */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
          <div className="w-full max-w-lg text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 sm:h-14 w-auto"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="text-[#1e3557]">Transformamos Dados</span>
              <br />
              <span className="text-[#1e3557]">em </span>
              <span className="text-[#70adcd]">Resultados</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-2 mb-8 px-4"
            >
              <p className="text-sm sm:text-base text-[#1e3557] opacity-70 leading-relaxed">
                Promessas não pagam contas.
              </p>
              <p className="text-sm sm:text-base text-[#1e3557] opacity-70 leading-relaxed">
                Empresas sólidas crescem com análise, estratégia e ajustes constantes.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#1e3557] text-white rounded-full font-semibold text-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-[#70adcd]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                />
                <span className="relative z-10">Entre em Contato</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Mobile Image - Bottom on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <img 
            src={mobileBanner} 
            alt="Mobile Banner" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:flex w-full px-8 md:px-16 lg:px-24 xl:px-32 relative z-10 items-center min-h-screen">
        <div className="w-full max-w-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-14 md:h-16 w-auto"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 leading-[1.15] tracking-tight"
          >
            <span className="text-[#1e3557]">Transformamos Dados</span>
            <br />
            <span className="text-[#1e3557]">em </span>
            <span className="text-[#70adcd]">Resultados</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-xl space-y-2 mb-10"
          >
            <p className="text-base md:text-lg text-[#1e3557] opacity-80 leading-relaxed">
              Promessas não pagam contas.
            </p>
            <p className="text-base md:text-lg text-[#1e3557] opacity-80 leading-relaxed">
              Empresas sólidas crescem com análise, estratégia e ajustes constantes.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#1e3557] text-white rounded-full font-semibold text-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-[#70adcd]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
              />
              <span className="relative z-10">Entre em Contato</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;