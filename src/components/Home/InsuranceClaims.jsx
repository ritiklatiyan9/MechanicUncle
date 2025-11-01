import React from 'react';
import { motion } from 'framer-motion';

const InsuranceClaims = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Day-1 document processing. No delays.",
            delay: 0.2
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Dedicated claims manager for your case.",
            delay: 0.3
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Direct tie-ups with leading insurers.",
            delay: 0.4
        }
    ];

    const stats = [
        { value: "99%", label: "Success Rate", delay: 0.5 },
        { value: "24h", label: "Avg. Processing", delay: 0.6 },
        { value: "50K+", label: "Claims Settled", delay: 0.7 }
    ];

    return (
        <div className="w-full overflow-y-hidden overflow-x-hidden py-4 px-4 md:py-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative insurance">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 md:left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute bottom-20 -right-20 md:right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                    {/* Left Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full"
                    >
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 border border-blue-200"
                        >
                            ✨ Our Signature Service
                        </motion.span>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight"
                        >
                            Insurance Claims That Just…{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                                Work.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
                        >
                            Forget the phone calls, the follow-ups, and the frustration. We've turned the chaotic 
                            insurance claim process into a science. As soon as you book, we get to work, ensuring a 
                            cashless, seamless, and lightning-fast claim experience.
                        </motion.p>

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: feature.delay }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <span className="text-base sm:text-lg text-gray-800 font-medium">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-3 gap-4 sm:gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: stat.delay, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
                            >
                                Start Your Claim
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image/Illustration Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:w-1/2 w-full mt-8 lg:mt-0"
                    >
                        <div className="relative">
                            {/* Decorative Background Circle */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 -z-10"
                            />

                            {/* Main Image Container */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
                            >
                                {/* Animated Illustration */}
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/insurance-claim-illustration-svg-download-png-9703822.png"
                                    alt="Seamless Insurance Claims"
                                    className="w-full h-auto relative z-10"
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white p-3 sm:p-4 rounded-2xl shadow-lg"
                                >
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 20, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-lg"
                                >
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </motion.div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-[100px] rounded-tr-3xl" />
                                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-tr-[100px] rounded-bl-3xl" />
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                            >
                                {['Cashless', 'Fast', 'Reliable'].map((badge, index) => (
                                    <motion.div
                                        key={badge}
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border-2 border-blue-100 text-xs sm:text-sm font-bold text-blue-600"
                                    >
                                        {badge}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
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

export default InsuranceClaims;