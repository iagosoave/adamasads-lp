import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { 
  ShoppingBag, 
  Laptop, 
  Stethoscope, 
  BookOpen, 
  Home
} from 'lucide-react';

// Color Palette
const colors = {
  primary: '#1e3557',      // Dark blue (main text)
  accent: '#70adcd',       // Light blue (highlights)
  white: '#ffffff',        // White background
  gold: '#e1c15f',         // Gold accent
};

const ResultsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const expertiseItems = [
    { icon: ShoppingBag, text: 'E-commerce' },
    { icon: Laptop, text: 'Infoprodutos' },
    { icon: Stethoscope, text: 'Saúde & Estética' },
    { icon: BookOpen, text: 'Educação' },
    { icon: Home, text: 'Imobiliário' },
  ];

  const stats = [
    { 
      value: 500000, 
      label: 'Gerenciados em Anúncios',
      prefix: '+R$'
    },
    { 
      value: 4000000, 
      label: 'Faturados',
      prefix: '+R$'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 px-4"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Resultados em <span style={{ color: colors.accent }}>Números</span>
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base md:text-lg font-medium px-4" style={{ color: colors.primary }}>
            Nossa equipe possui experiência com:
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-24 md:mb-32 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white border rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 text-center h-full" style={{ borderColor: colors.accent }}>
                <div className="mb-3 md:mb-4 inline-flex items-center justify-center">
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl" style={{ backgroundColor: `${colors.accent}20` }}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: colors.accent }} strokeWidth={2} />
                  </div>
                </div>
                <p className="font-semibold text-xs md:text-sm leading-tight" style={{ color: colors.primary }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with Background */}
        <div className="relative -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-16 py-16 md:py-20 lg:py-24">
          {/* Background Strip */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30" />
          
          {/* Stats Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-28 xl:gap-36 max-w-6xl mx-auto px-4">
            {stats.map((stat, index) => (
              <StatNumber
                key={index}
                stat={stat}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const StatNumber = ({ stat, index, isInView }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 60, stiffness: 80 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      count.set(stat.value);
    }
  }, [isInView, stat.value, count, hasAnimated]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      const formatted = Math.floor(latest).toLocaleString('pt-BR');
      setDisplayValue(formatted);
    });

    return unsubscribe;
  }, [rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: 1.0 + index * 0.2 }}
      className="text-center"
    >
      {/* Animated Number */}
      <motion.div
        className="mb-4 md:mb-6"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 1.1 + index * 0.2 
        }}
      >
        <div className="flex items-baseline justify-center gap-2 md:gap-3">
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex-shrink-0"
            style={{ color: colors.accent }}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
          >
            {stat.prefix}
          </motion.span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none tabular-nums flex-shrink-0" style={{ color: colors.primary }}>
            {displayValue}
          </span>
        </div>
      </motion.div>

      {/* Label */}
      <motion.h3
        className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-wide px-2"
        style={{ color: colors.primary }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
      >
        {stat.label}
      </motion.h3>

      {/* Minimal underline */}
      <motion.div
        className="mx-auto mt-4 md:mt-5 h-1 rounded-full"
        style={{ backgroundColor: colors.accent }}
        initial={{ width: 0 }}
        animate={isInView ? { width: '80px' } : { width: 0 }}
        transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
      />
    </motion.div>
  );
};

export default ResultsSection;