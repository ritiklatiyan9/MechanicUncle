import React from 'react';
import { motion } from 'framer-motion';
import carimg from '../../assets/carimg.png';
import bg from '../../assets/bg.jpg'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'
import g5 from '../../assets/g5.png'
// Dummy data for the services with circular positions
// 5 services evenly spaced = 360° / 5 = 72° between each
const services = [
  {
    title: 'Free Pickup & Drop',
    description: 'Convenient doorstep service',
    icon: g1,
    gradient: 'from-blue-500 to-blue-600',
    angle: -45 // Top
  },
  {
    title: 'Genuine Parts',
    description: '100% authentic components',
    icon: g2,
    gradient: 'from-blue-600 to-blue-700',
    angle: -90 // Right
  },
  {
    title: '30 Days Warranty',
    description: 'Extended protection coverage',
    icon:g3,
    gradient: 'from-blue-500 to-cyan-500',
    angle: 0 // Bottom
  },
  {
    title: 'Affordable Prices',
    description: 'Best value for money',
    icon: g4,
    gradient: 'from-cyan-500 to-blue-600',
    angle: 45 // Left
  },
    {
    title: 'Expert Technicians',
    description: 'Certified professionals',
    icon: g5,
    gradient: 'from-blue-700 to-cyan-600',
    angle: 90 // Far right
  },
];

const ServiceCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div 
    className="text-center  w-[220px]"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex justify-center">
      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
        <img src={icon} alt={`${title} icon`} className="h-12 w-12" />
      </div>
    </div>
    <h3 className="text-xl font-bold uppercase text-gray-900 mb-2">{title}</h3>
    <p className="text-lg text-gray-600 leading-relaxed mb-2">{description}</p>
    <a href="#" className="inline-block text-sm font-semibold uppercase text-blue-600 hover:text-blue-700 transition-colors">
      Read More
    </a>
  </motion.div>
);

const Guarantee = () => {
  // Calculate position based on angle and radius
  const getPosition = (angle, radius) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  const radius = 320; // Distance from center

  return (
    <section 
      className="relative bg-gray-100 py-8 px-4 font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '200%',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(249, 250, 251, 0.85)'
      }}
    >
          <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-32"
                >
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
                    >
                        Why Choose Us
                    </motion.span>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Guarantees</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience premium service with our commitment to quality and customer satisfaction
                    </p>
                </motion.div>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden flex flex-col items-center space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>

        {/* Desktop Layout - True Circular Pattern */}
        <div className="hidden lg:block relative mx-auto" style={{ width: '900px',minHeight:'620px' }}>
          {/* Services positioned in circle */}
          {services.map((service, index) => {
            const pos = getPosition(service.angle, radius);
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                }}
              >
                <ServiceCard {...service} delay={index * 0.1} />
              </div>
            );
          })}

          {/* Center - Car Image */}
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px]">
            <motion.div
              animate={{ 
                y: [0, -25, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src={carimg}
                alt="Red Sports Car"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Guarantee;