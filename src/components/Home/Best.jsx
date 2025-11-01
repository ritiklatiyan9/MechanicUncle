import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FiZap, FiMapPin, FiCheckSquare } from 'react-icons/fi';
import { useRef } from 'react';

// --- Reusable Feature Component ---
const Feature = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="mr-3 flex-shrink-0 sm:mr-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500 sm:h-12 sm:w-12">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-base font-bold text-slate-800 sm:text-lg">{title}</h4>
      <p className="mt-1 text-sm text-slate-500 sm:text-base">{children}</p>
    </div>
  </div>
);

// --- Floating Status Card Component ---
const StatusCard = ({ text, className, delay }) => (
  <motion.div
    className={`absolute flex items-center space-x-2 rounded-full bg-white px-3 py-1.5 shadow-xl sm:px-4 sm:py-2 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <motion.div
      className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <span className="text-xs font-semibold text-slate-600 sm:text-sm">{text}</span>
  </motion.div>
);

// --- Main Component ---
const Best = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section ref={ref} className="min-h-screen w-full bg-white px-4 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-600 sm:px-4 sm:py-2 sm:text-sm">
              Punctuality is Our Promise
            </span>
          </motion.div>

          <motion.h2
            className="mt-4 text-3xl font-extrabold leading-tight text-slate-800 sm:mt-6 sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Your Schedule, Respected.
            <br />
            <span className="text-sky-500">Your Car, On Time.</span>
          </motion.h2>

          <motion.p 
            className="mt-3 max-w-lg text-base text-slate-600 sm:mt-4 sm:text-lg" 
            variants={itemVariants}
          >
            We've built our service around the one thing you can't get back: your time. Experience the peace of mind that comes with guaranteed delivery windows and real-time tracking for every service.
          </motion.p>

          <motion.div className="mt-6 space-y-6 sm:mt-10 sm:space-y-8" variants={itemVariants}>
            <Feature icon={<FiZap size={20} className="sm:w-6 sm:h-6" />} title="Express Service Lane">
              Need it fast? Opt for our express service for priority handling without compromising on quality.
            </Feature>
            <Feature icon={<FiMapPin size={20} className="sm:w-6 sm:h-6" />} title="Live Delivery Tracking">
              Watch your car's journey back to you in real-time on our app, with precise ETAs.
            </Feature>
            <Feature icon={<FiCheckSquare size={20} className="sm:w-6 sm:h-6" />} title="On-Time Guarantee">
              We're so confident in our scheduling that we guarantee your delivery window. It's that simple.
            </Feature>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Visual Animation --- */}
        <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[450px] md:h-[500px]">
          {/* Background Grid */}
          <div className="absolute h-full w-full bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px]"></div>

          {/* Central Animated Clock */}
          <motion.div
            className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, type: 'spring' }}
          >
            {/* SVG for animated circle */}
            <svg className="absolute h-full w-full" viewBox="0 0 100 100">
              <motion.circle
                cx="50" cy="50" r="45"
                stroke="#e0e7ff"
                strokeWidth="4"
                fill="transparent"
              />
              <motion.circle
                cx="50" cy="50" r="45"
                stroke="#38bdf8"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
                pathLength="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
              />
            </svg>

            {/* Service GIF */}
            <div className="h-48 w-48 overflow-hidden rounded-full sm:h-56 sm:w-56 md:h-64 md:w-64">
              <img
                src="https://i.pinimg.com/originals/03/e2/fb/03e2fb6e8d44cb56fed5d1df0051ee91.gif"
                alt="Efficient Car Service"
                className="h-full w-full scale-125 object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Status Cards - Adjusted for Mobile */}
          <StatusCard 
            text="Quality Check" 
            className="left-2 top-8 sm:left-0 sm:top-8" 
            delay={1.8} 
          />
          <StatusCard 
            text="En Route to You" 
            className="bottom-8 right-2 sm:bottom-8 sm:right-0" 
            delay={2.0} 
          />
          <StatusCard 
            text="ETA: 15 Mins" 
            className="bottom-20 left-2 sm:bottom-20 sm:left-0 md:left-[-20px]" 
            delay={2.2} 
          />
        </div>
      </div>
    </section>
  );
};

export default Best;