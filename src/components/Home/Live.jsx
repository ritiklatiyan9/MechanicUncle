import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi'; // Using react-icons for features

// --- Main Component ---
const Live = () => {
  // Animation Variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
      },
    },
  };

  return (
    <section className="flex px-4 min-h-screen w-full items-center justify-center overflow-hidden bg-gray-900 font-sans text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-8 py-24 md:grid-cols-2 lg:gap-20">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Service, Streamed Live.
            <br />
            <span className="text-cyan-400">Total Transparency.</span>
          </motion.h1>

          <motion.p className="mt-6 max-w-lg text-lg text-gray-400" variants={itemVariants}>
            Experience a new level of trust. Our in-app feature lets you watch a live stream of your car being serviced, right from your phone. No more doubts, just clear, real-time progress.
          </motion.p>
          
          <motion.div className="mt-8 space-y-4" variants={itemVariants}>
            <div className="flex items-center space-x-3">
              <FiEye className="h-6 w-6 text-cyan-400" />
              <span className="text-md font-semibold">Watch the entire service live in HD</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiDownload className="h-6 w-6 text-cyan-400" />
              <span className="text-md font-semibold">Download the recording anytime, anywhere</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <motion.button
              className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-gray-900 shadow-lg shadow-cyan-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/50"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our App
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Visual Animation --- */}
        <div className="relative flex h-[500px] w-full items-center justify-center">
          {/* 1. Car Service Video */}
          <motion.div
            className="absolute z-10 h-[280px] w-[420px] overflow-hidden rounded-xl bg-gray-800 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <video 
              src="https://www.pexels.com/download/video/4489872/"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* 2. CCTV Camera SVG Icon */}
          <motion.div
            className="absolute -top-4 -left-4 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
             <motion.img 
              src="https://cdn-icons-png.flaticon.com/512/9498/9498929.png"
              alt="CCTV Camera"
              className="h-20 w-20"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

           {/* 3. Phone Mockup showing "Live Feed" */}
           <motion.div
             className="absolute -bottom-8 -right-8 z-30 h-[300px] w-[150px] rounded-2xl bg-gray-800 p-2 shadow-2xl ring-2 ring-gray-700"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 1.2 }}
           >
             <div className="h-full w-full overflow-hidden rounded-lg">
                <video 
                  src="https://www.pexels.com/download/video/4489872/"
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
             </div>
              {/* Live indicator */}
             <div className="absolute top-4 left-4 flex items-center space-x-1.5 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white">
                <motion.div
                  className="h-2 w-2 rounded-full bg-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                <span>LIVE</span>
             </div>
           </motion.div>

           {/* 4. Animated Connector Line */}
           <motion.svg
             className="absolute inset-0 z-0 h-full w-full"
             initial="hidden"
             animate="visible"
             transition={{ delay: 1.5 }}
           >
             <motion.path
               d="M 60 60 Q 250 250 400 400" // A curved path from camera area to phone area
               fill="none"
               stroke="url(#gradient)"
               strokeWidth="3"
               strokeDasharray="4 8"
               variants={lineVariants}
             />
             <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                </linearGradient>
              </defs>
           </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Live;