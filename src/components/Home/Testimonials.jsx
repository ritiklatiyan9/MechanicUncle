import React from 'react';
import { motion } from 'framer-motion';
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};


const Testimonials = () => {
    const testimonials = [
        { 
            name: 'Sameer Khan', 
            car: 'Hyundai Creta', 
            text: 'The biggest headache of car repair is insurance. mechanicUncle made it vanish. My car was repaired, and the claim was settled without me lifting a finger. Unbelievable service!', 
            avatar: 'https://i.pravatar.cc/150?img=11',
            rating: 5,
            location: 'Mumbai',
            delay: 0.1
        },
        { 
            name: 'Anjali Singh', 
            car: 'Maruti Baleno', 
            text: 'I used to dread going to the garage. Now, I just use their app. It\'s transparent, the pricing is fair, and the service quality is excellent. I\'m a customer for life.', 
            avatar: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            location: 'Delhi',
            delay: 0.2
        },
        { 
            name: 'Vikram Batra', 
            car: 'Tata Nexon', 
            text: 'Fast. Professional. Trustworthy. Three words to describe my experience. The real-time updates on the app were a fantastic touch!', 
            avatar: 'https://i.pravatar.cc/150?img=7',
            rating: 5,
            location: 'Bangalore',
            delay: 0.3
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
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

    const StarIcon = ({ filled }) => (
        <motion.svg
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
    );

    return (
        <div style={customFontStyle} className="w-full overflow-x-hidden overflow-y-hidden py-4 md:py-8 px-4 bg-gradient-to-b from-white via-blue-50 to-white relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 md:left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute bottom-20 -right-20 md:right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
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
                        Customer Reviews
                    </motion.span>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 px-2">
                        Trusted by Thousands of{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                            Happy Car Owners
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                        Don't just take our word for it. Here's what our customers have to say
                    </p>

                    {/* Overall Rating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="mt-6 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg"
                    >
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} filled={true} />
                            ))}
                        </div>
                        <div className="h-6 w-px bg-gray-300" />
                        <div className="text-left">
                            <div className="text-2xl font-bold text-gray-900">4.9</div>
                            <div className="text-xs text-gray-600">out of 5</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                                {/* Background Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                                    <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4 relative z-10">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} filled={true} />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed relative z-10 flex-grow">
                                    "{testimonial.text}"
                                </p>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6 relative z-10" />

                                {/* User Info */}
                                <div className="flex items-center relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                        className="relative"
                                    >
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name} 
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 border-2 border-blue-500 shadow-md"
                                        />
                                        {/* Online Indicator */}
                                        <div className="absolute bottom-0 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                                    </motion.div>
                                    
                                    <div className="flex-grow">
                                        <p className="font-bold text-gray-900 text-base sm:text-lg">
                                            {testimonial.name}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                            <span className="font-medium">{testimonial.car}</span>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{testimonial.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Verified Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: testimonial.delay + 0.5, type: "spring" }}
                                        className="flex-shrink-0"
                                    >
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg" title="Verified Customer">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom Accent Line */}
                                <motion.div 
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: testimonial.delay }}
                                />

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 sm:p-12 shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Experience Premium Service?
                        </h3>
                        <p className="text-blue-100 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who trust us with their vehicles
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
                        >
                            Book Your Service
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Custom CSS for animations */}
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
            `}</style>
        </div>
    );
};

export default Testimonials;