import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import logo2 from './logo2.png';
import logo1 from './logo.png';

// Color Palette
const colors = {
  primary: '#bcc3cd',      // Light gray-blue text
  accent: '#06b6d4',       // Cyan-500 (highlights)
  dark: '#1e3557',         // Dark blue
  background: '#ffffff',   // White background
};

const CTAFooter = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <img 
                src={logo1} 
                alt="Adamas Ads Logo" 
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4 lg:px-0"
                style={{ color: colors.dark }}
              >
                Vamos trabalhar juntos?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed px-4 lg:px-0"
                style={{ color: colors.dark, opacity: 0.8 }}
              >
                Quer atrair mais clientes e expandir seu negócio? Fale com a Adamas Ads e descubra como podemos ajudar!
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center lg:justify-start"
              >
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5527992980166&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Adamas"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold text-sm sm:text-base overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: colors.dark }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: colors.accent }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <span className="relative z-10">ENTRE EM CONTATO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <img 
                src={logo2} 
                alt="Adamas Ads" 
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center gap-3 sm:gap-4"
            >
              <a
                href="https://www.instagram.com/adamasads/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.dark 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.color = colors.dark;
                }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572998788939"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.dark 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.color = colors.dark;
                }}
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right space-y-1"
            >
              <p className="text-xs sm:text-sm font-medium" style={{ color: colors.dark }}>
                CNPJ: 59.359.569/0001-90
              </p>
              <p className="text-xs sm:text-sm" style={{ color: colors.primary }}>
                © Direitos Reservados
              </p>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;