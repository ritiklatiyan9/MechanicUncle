import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Workshops = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const workshops = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg",
            title: "Premium Service Center",
            location: "Downtown Location",
            description: "Advanced diagnostic equipment",
            rating: 4.9
        },
        {
            id: 2,
            image: "https://www.shutterstock.com/image-photo/portrait-shot-fsmiling-car-mechanic-600nw-2136356225.jpg",
            title: "Express Care Center",
            location: "North District",
            description: "Quick service specialists",
            rating: 4.8
        },
        {
            id: 3,
            image: "https://blog.grabon.in/wp-content/uploads/2022/05/Best-car-repair-services.jpg",
            title: "Elite Auto Workshop",
            location: "East Side",
            description: "Luxury vehicle experts",
            rating: 4.9
        },
        {
            id: 4,
            image: "https://dyimg77.exportersindia.com/catalog-gallery/gallery_88216_20240919130428.jpg",
            title: "Complete Care Station",
            location: "West End",
            description: "Full-service facility",
            rating: 4.7
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % workshops.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + workshops.length) % workshops.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Carousel animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        })
    };

    const thumbnailVariants = {
        inactive: {
            scale: 1,
            opacity: 0.6
        },
        active: {
            scale: 1.1,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="w-full overflow-x-hidden py-4 px-4 md:py-8 bg-gradient-to-b from-blue-50 via-white to-blue-50">
            <div className="container mx-auto  px-4 sm:px-6 max-w-6xl">
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
                        Our Locations
                    </motion.span>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 px-2">
                        Choose the Workshop{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                            Near You
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                        State-of-the-art facilities with certified technicians ready to serve you
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative mb-8 md:mb-12"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Carousel Container */}
                    <div className="relative h-[400px] sm:h-[500px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                {/* Image */}
                                <img
                                    src={workshops[currentIndex].image}
                                    alt={workshops[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Content Overlay */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-white"
                                >
                                    {/* Rating Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4"
                                    >
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-bold text-sm sm:text-base">{workshops[currentIndex].rating}</span>
                                        <span className="text-xs sm:text-sm opacity-90">Rating</span>
                                    </motion.div>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
                                        {workshops[currentIndex].title}
                                    </h3>
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-sm sm:text-base">{workshops[currentIndex].location}</span>
                                        </div>
                                        <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
                                        <p className="text-sm sm:text-base text-blue-300">{workshops[currentIndex].description}</p>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
                                    >
                                        Book Appointment
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Progress Indicator */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs sm:text-sm font-semibold">
                            {currentIndex + 1} / {workshops.length}
                        </div>
                    </div>

                    
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                >
                    {[
                        { icon: '🔧', title: 'Certified Technicians', description: 'Expert professionals' },
                        { icon: '⚡', title: 'Quick Service', description: 'Fast turnaround time' },
                        { icon: '✓', title: 'Quality Parts', description: 'Genuine components' },
                        { icon: '🛡️', title: 'Warranty', description: 'Service guarantee' }
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                        >
                            <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Workshops;