import React from 'react';
import { motion } from 'framer-motion';
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

// Icon Components
const CarSelectionIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const GarageIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CarKeyIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
);

const HowItWorks = () => {
    const steps = [
      { 
        number: "01",
        title: 'Book Your Service', 
        description: 'Select your car and tell us what you need. It takes less than 2 minutes.', 
        icon: <CarSelectionIcon />,
        gradient: "from-blue-500 to-blue-600",
        delay: 0.2
      },
      { 
        number: "02",
        title: 'Choose a Premier Garage', 
        description: 'We connect you with our network of certified, high-quality local garages.', 
        icon: <GarageIcon />,
        gradient: "from-blue-600 to-cyan-500",
        delay: 0.4
      },
      { 
        number: "03",
        title: 'We Handle the Paperwork', 
        description: 'From the moment you book, our team starts your insurance documentation.', 
        icon: <DocumentIcon />,
        gradient: "from-cyan-500 to-blue-500",
        delay: 0.6
      },
      { 
        number: "04",
        title: 'Drive Away Happy', 
        description: 'Get your car serviced to perfection and delivered back, ready for the road.', 
        icon: <CarKeyIcon />,
        gradient: "from-blue-500 to-blue-700",
        delay: 0.8
      },
    ];

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    };

    const stepVariants = {
      hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    const iconContainerVariants = {
      rest: { 
        scale: 1,
        rotate: 0
      },
      hover: { 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 0.5
        }
      }
    };

    const lineVariants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: (i) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { 
            duration: 0.8, 
            ease: "easeInOut",
            delay: i * 0.2 + 0.5
          },
          opacity: { duration: 0.3, delay: i * 0.2 + 0.5 }
        }
      })
    };

    return (
      <div style={customFontStyle} className="py-4 px-4 md:py-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden ">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 md:left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 -right-20 md:right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
            >
              Simple Process
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Four Steps to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Flawless Service
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We've engineered a process that's as smooth as a freshly serviced engine. 
              Your journey from booking to driving starts here.
            </p>
          </motion.div>

          {/* Steps with Connecting Lines - Desktop View */}
          <div className="hidden lg:block relative">
            {/* Connecting Path */}
            <svg className="absolute top-32 left-0 w-full h-1 z-0" style={{ top: '140px' }}>
              <motion.path
                d="M 12% 0 Q 37.5% -60, 37.5% 0 T 62.5% 0 T 87.5% 0"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 8"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-4 gap-8 relative z-10"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={stepVariants}
                  whileHover="hover"
                  initial="rest"
                  className="group"
                >
                  <div className="flex flex-col items-center">
                    {/* Icon Container */}
                    <motion.div
                      variants={iconContainerVariants}
                      className="relative mb-6"
                    >
                      {/* Outer Ring */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 animate-pulse group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-500" />
                      
                      {/* Icon Circle */}
                      <div className={`relative w-32 h-32 flex items-center justify-center bg-gradient-to-br ${step.gradient} rounded-full text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                        
                        {/* Icon */}
                        <div className="relative z-10">
                          {step.icon}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">{step.number}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay }}
                      className="text-center"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Steps - Mobile/Tablet View */}
          <div className="lg:hidden relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 rounded-full opacity-30" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={stepVariants}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative flex-shrink-0"
                  >
                    {/* Icon Circle */}
                    <div className={`relative w-24 h-24 flex items-center justify-center bg-gradient-to-br ${step.gradient} rounded-full text-white shadow-lg z-10`}>
                      {step.icon}
                      
                      {/* Step Number Badge */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">{step.number}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-left pt-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Custom CSS for blob animation */}
        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 10px) scale(1.05); }
          }
          .animate-blob {
            animation: blob 10s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    );
};

export default HowItWorks;