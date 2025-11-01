import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
      { 
        name: 'Car Services', 
        description: 'Complete maintenance & repair',
        icon: 'https://storage.googleapis.com/mobile-static-assets/service_booking/new_website/services/pms.png',
gradient: 'from-blue-600 to-blue-700',
        delay: 0.1
      },
      { 
        name: 'AC Service & Repair', 
        description: 'Cooling system experts',
        icon: 'https://storage.googleapis.com/mobile-static-assets/service_booking/new_website/services/ac_ser.png',
        gradient: 'from-cyan-500 to-blue-500',
        delay: 0.2
      },
      { 
        name: 'Batteries', 
        description: 'Quality battery solutions',
        icon: 'https://thumbs.dreamstime.com/b/battery-car-charging-jumping-vector-icon-starter-vehicle-include-mechanics-technician-to-service-maintenance-repair-charge-323150795.jpg',
        gradient: 'from-blue-600 to-blue-700',
        delay: 0.3
      },
      { 
        name: 'Tyres & Wheel Care', 
        description: 'Premium tire services',
        icon: 'https://storage.googleapis.com/mobile-static-assets/service_booking/new_website/services/Running%20Repair.png',
        gradient: 'from-sky-500 to-blue-600',
        delay: 0.4
      },
      { 
        name: 'Denting & Painting', 
        description: 'Restore your car\'s look',
        icon: 'https://cdn-icons-png.freepik.com/256/12141/12141617.png?semt=ais_white_label',
        gradient: 'from-blue-500 to-cyan-500',
        delay: 0.5
      },
      { 
        name: 'Detailing Services', 
        description: 'Premium car detailing',
        icon: 'https://storage.googleapis.com/mobile-static-assets/service_booking/new_website/services/car_wash_and_wax.png',
        gradient: 'from-cyan-400 to-blue-500',
        delay: 0.6
      },
      { 
        name: 'Car Spa & Cleaning', 
        description: 'Professional wash & clean',
        icon: 'https://storage.googleapis.com/mobile-static-assets/service_booking/new_website/services/complete_car_sp.png',
        gradient: 'from-blue-600 to-cyan-500',
        delay: 0.7
      },
      { 
        name: 'Car Inspections', 
        description: 'Thorough vehicle check',
        icon: 'https://www.shutterstock.com/image-vector/looking-car-icon-600nw-2345433519.jpg',
        gradient: 'from-sky-500 to-blue-600',
        delay: 0.8
      },
    ];

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    const cardVariants = {
      hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    };

    const imageVariants = {
      rest: { 
        scale: 1,
        rotate: 0
      },
      hover: { 
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: {
          duration: 0.4,
          ease: "easeInOut"
        }
      }
    };

    return (
      <div className="w-full overflow-y-hidden overflow-x-hidden py-4 px-4 md:py-8 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
            >
              Our Services
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 px-2">
              Complete Car Care{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Under One Roof
              </span>
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              From routine maintenance to specialized repairs, we offer comprehensive automotive solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                variants={cardVariants}
                whileHover="hover"
                initial="rest"
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full"
                >
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top Corner Accent */}
                  <motion.div 
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    variants={imageVariants}
                    className="relative mb-4 sm:mb-6"
                  >
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Icon background */}
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br  p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <img 
                        src={service.icon} 
                        alt={service.name}
                        className="w-full h-full object-contain filter "
                      />
                    </div>

                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: service.delay }}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.8 }}
                  />

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats or CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* Stat 1 */}
                <div className="text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  >
                    50K+
                  </motion.div>
                  <p className="text-blue-100 font-medium text-sm sm:text-base">Services Completed</p>
                </div>

                {/* Stat 2 */}
                <div className="text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  >
                    98%
                  </motion.div>
                  <p className="text-blue-100 font-medium text-sm sm:text-base">Satisfaction Rate</p>
                </div>

                {/* Stat 3 */}
                <div className="text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  >
                    24/7
                  </motion.div>
                  <p className="text-blue-100 font-medium text-sm sm:text-base">Support Available</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                View All Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default Services;