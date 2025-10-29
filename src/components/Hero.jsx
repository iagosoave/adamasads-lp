import { motion } from 'framer-motion'; 
import { ArrowRight } from 'lucide-react';
import banner from './banner.png';
import mobileBanner from './mobile.png';
import logo from './logo3.png';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#1e3557]">
      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute inset-0">
        <img 
          src={banner} 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Layout */}
      <section className="lg:hidden relative" style={{ backgroundColor: '#1e3557' }}>
        <div className="relative py-10 px-4 sm:px-6 pb-0">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center text-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 flex justify-center"
              >
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-14 sm:h-16 md:h-20 w-auto"
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-7 leading-snug tracking-tight text-center text-white"
              >
                <span className="block whitespace-nowrap">Transformamos Dados</span>
                <span className="block whitespace-nowrap">em Resultados</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-2 sm:space-y-3 mb-7 sm:mb-9 px-3 sm:px-4"
              >
                <p className="text-sm sm:text-base md:text-lg text-white opacity-90 leading-relaxed">
                  Promessas não pagam contas.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white opacity-90 leading-relaxed">
                  Empresas sólidas crescem com análise, estratégia e ajustes constantes.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex justify-center mb-6"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-3 bg-white hover:bg-[#70adcd] text-[#1e3557] hover:text-white rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  <span>Entre em Contato</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </motion.div>

              {/* Image final */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="w-full flex justify-center items-end"
              >
                <img 
                  src={mobileBanner} 
                  alt="Mobile Banner" 
                  className="w-full h-auto object-cover object-bottom"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full px-8 md:px-16 lg:px-24 xl:px-32 relative z-10 items-center lg:min-h-screen">
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
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-7 leading-[1.15] tracking-tight text-white"
          >
            <span className="block">Transformamos Dados</span>
            <span className="block">em Resultados</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-xl space-y-2 mb-10"
          >
            <p className="text-base md:text-lg text-white opacity-90 leading-relaxed">
              Promessas não pagam contas.
            </p>
            <p className="text-base md:text-lg text-white opacity-90 leading-relaxed">
              Empresas sólidas crescem com análise, estratégia e ajustes constantes.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white hover:bg-[#70adcd] text-[#1e3557] hover:text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Entre em Contato</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
