import { motion } from 'framer-motion';
import { Megaphone, LineChart, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Gestão de Tráfego Pago",
      description: "Criamos campanhas altamente otimizadas para aumentar seu faturamento."
    },
    {
      icon: LineChart,
      title: "Rastreamento",
      description: "Implementação e análise via Google Tag Manager, GA4 e ferramentas de atribuição para tomadas de decisão precisas."
    },
    {
      icon: Lightbulb,
      title: "Estratégias",
      description: "Transformamos números em estratégias para aumentar o retorno sobre investimento."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#70adcd]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#1e3557]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3557] mb-6">
            Serviços
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#70adcd] to-[#1e3557] mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-all duration-500 border-2 border-gray-200/80 hover:border-[#70adcd]/40 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#70adcd]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="mb-8 relative">
                <div className="inline-flex w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-[#70adcd] to-[#5a9bb8] items-center justify-center shadow-lg shadow-[#70adcd]/20 group-hover:shadow-xl group-hover:shadow-[#70adcd]/30 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-[#1e3557] mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#1e3557]/65 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;