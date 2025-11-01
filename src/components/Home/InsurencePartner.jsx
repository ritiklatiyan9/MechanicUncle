import React from 'react';
import { motion } from 'framer-motion';
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};


const InsurancePartner = () => {
  // Dummy insurance partners data
  const partners = [
    { id: 1, name: 'Reliance General Insurance', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/Reliance.png' },
    { id: 2, name: 'Future Generali', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/Future-Generali.png' },
    { id: 3, name: 'ICICI Lombard', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/ICICI.png' },
    { id: 4, name: 'United India', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/United-India.png' },
    { id: 5, name: 'Go Digit', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/Go-Digit.png' },
    { id: 6, name: 'New India', logo: 'https://www.tvsinsurance.in/Insurance/partners/new/New-India.png' },

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div style={customFontStyle} className="w-full insurence-partner overflow-y-hidden  bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              Trusted By Leading Brands
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Insurance Partners
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Partnered with India's most trusted insurance providers to bring you comprehensive coverage
            and peace of mind
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 h-32 flex items-center justify-center border border-gray-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2"
              >
                6+
              </motion.div>
              <p className="text-gray-600 font-medium">Insurance Partners</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2"
              >
                500K+
              </motion.div>
              <p className="text-gray-600 font-medium">Policies Issued</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2"
              >
                98%
              </motion.div>
              <p className="text-gray-600 font-medium">Customer Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Your Free Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InsurancePartner;