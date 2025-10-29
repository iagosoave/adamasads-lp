import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ctaImage from './cta.png';
import mobileImage from './mobile2.png';

const CTA = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Image - Desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaImage})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left - Empty space for image background */}
            <div></div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center text-left"
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
              >
                Seu investimento precisa gerar resultados
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed"
              >
                Investir sem estratégia é desperdício. Nosso foco é trabalhar para que seu investimento gere previsibilidade e crescimento real.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-start"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-[#70adcd] text-[#1e3557] hover:text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>ENTRE EM CONTATO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden relative">
        <div className="relative py-8 px-4 pb-0" style={{ backgroundColor: '#0d3559' }}>
          <div className="w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center text-center"
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl font-bold text-white mb-4 leading-tight px-2"
              >
                Seu investimento precisa gerar resultados
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm text-white/90 mb-6 leading-relaxed px-2"
              >
                Investir sem estratégia é desperdício. Nosso foco é trabalhar para que seu investimento gere previsibilidade e crescimento real.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center mb-2 px-2"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#70adcd] text-[#0d3559] hover:text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>ENTRE EM CONTATO</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </motion.div>

              {/* Image grudada no final */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full flex justify-center -mb-1 mt-4"
              >
                <img 
                  src={mobileImage} 
                  alt="CTA Mobile" 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;