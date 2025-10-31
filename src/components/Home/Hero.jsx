import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Comprehensive Car Data
const carData = {
  "Maruti Suzuki": {
    "Swift": ["Petrol", "Diesel", "CNG"],
    "Baleno": ["Petrol", "CNG"],
    "Vitara Brezza": ["Petrol", "Diesel", "CNG"],
    "Ertiga": ["Petrol", "CNG"],
    "Dzire": ["Petrol", "Diesel", "CNG"],
    "Alto": ["Petrol", "CNG"],
    "WagonR": ["Petrol", "CNG"]
  },
  "Hyundai": {
    "i20": ["Petrol", "Diesel"],
    "Creta": ["Petrol", "Diesel"],
    "Verna": ["Petrol", "Diesel"],
    "Venue": ["Petrol", "Diesel"],
    "Grand i10": ["Petrol", "CNG"],
    "Elantra": ["Petrol", "Diesel"],
    "Tucson": ["Diesel"]
  },
  "Tata": {
    "Nexon": ["Petrol", "Diesel", "Electric"],
    "Harrier": ["Diesel"],
    "Tiago": ["Petrol", "CNG"],
    "Altroz": ["Petrol", "Diesel"],
    "Safari": ["Diesel"],
    "Punch": ["Petrol", "CNG"],
    "Tigor": ["Petrol", "Electric"]
  },
  "Honda": {
    "City": ["Petrol", "Diesel"],
    "Amaze": ["Petrol", "Diesel"],
    "Jazz": ["Petrol"],
    "WR-V": ["Petrol", "Diesel"],
    "Civic": ["Petrol", "Diesel"]
  },
  "Mahindra": {
    "Scorpio": ["Diesel"],
    "XUV700": ["Petrol", "Diesel"],
    "XUV300": ["Petrol", "Diesel"],
    "Thar": ["Petrol", "Diesel"],
    "Bolero": ["Diesel"],
    "Marazzo": ["Diesel"]
  },
  "Toyota": {
    "Fortuner": ["Diesel"],
    "Innova Crysta": ["Petrol", "Diesel"],
    "Glanza": ["Petrol"],
    "Urban Cruiser": ["Petrol"],
    "Camry": ["Petrol", "Hybrid"]
  },
  "Kia": {
    "Seltos": ["Petrol", "Diesel"],
    "Sonet": ["Petrol", "Diesel"],
    "Carens": ["Petrol", "Diesel"],
    "EV6": ["Electric"]
  },
  "Volkswagen": {
    "Polo": ["Petrol"],
    "Vento": ["Petrol", "Diesel"],
    "Taigun": ["Petrol"],
    "Tiguan": ["Diesel"]
  },
  "Renault": {
    "Kwid": ["Petrol"],
    "Triber": ["Petrol"],
    "Kiger": ["Petrol"],
    "Duster": ["Petrol", "Diesel"]
  },
  "Ford": {
    "EcoSport": ["Petrol", "Diesel"],
    "Endeavour": ["Diesel"],
    "Figo": ["Petrol", "Diesel"]
  }
};

// Enhanced Services Data with Categories
const servicesData = {
  "Periodic Maintenance": {
    "Basic Service": { price: 2499, description: "Engine oil change, filters, inspection" },
    "Standard Service": { price: 4899, description: "Complete oil change, filters, brake check" },
    "Comprehensive Service": { price: 7999, description: "Full service with transmission & suspension" }
  },
  "Specialized Services": {
    "AC Service & Gas Refill": { price: 1999, description: "AC cleaning, gas top-up" },
    "Battery Check & Replace": { price: 3499, description: "Battery health check & replacement" },
    "Brake Service": { price: 2499, description: "Brake pad replacement & fluid top-up" },
    "Clutch Replacement": { price: 6999, description: "Complete clutch assembly replacement" }
  },
  "Detailing & Cleaning": {
    "Complete Car Spa": { price: 1299, description: "Exterior wash, interior vacuum, polish" },
    "Premium Detailing": { price: 3499, description: "Deep cleaning, wax, interior shampooing" },
    "Ceramic Coating": { price: 12999, description: "9H ceramic coating, 3-year protection" }
  },
  "Body Work": {
    "Denting & Painting (Per Panel)": { price: 3500, description: "Professional denting & painting" },
    "Full Body Paint": { price: 25000, description: "Complete car repainting" },
    "Scratch Removal": { price: 1499, description: "Minor scratch polishing" }
  },
  "Wheel Services": {
    "Wheel Alignment": { price: 799, description: "2-wheel/4-wheel alignment" },
    "Wheel Balancing": { price: 499, description: "Complete wheel balancing" },
    "Tyre Replacement": { price: 8999, description: "New tyre installation (per tyre)" }
  }
};

// Demo registration data
const demoRegistrations = {
  "UP16BW1211": { brand: "Hyundai", model: "Verna", fuel: "Petrol" },
  "DL01AB1234": { brand: "Maruti Suzuki", model: "Swift", fuel: "Petrol" },
  "MH02CD5678": { brand: "Tata", model: "Nexon", fuel: "Diesel" },
  "KA03EF9012": { brand: "Honda", model: "City", fuel: "Petrol" }
};

const Hero = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [fuel, setFuel] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [models, setModels] = useState([]);
    const [fuels, setFuels] = useState([]);
    const [showEstimate, setShowEstimate] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        if (brand) {
            setModel('');
            setFuel('');
            setModels(Object.keys(carData[brand]));
        } else {
            setModels([]);
            setFuels([]);
        }
    }, [brand]);

    useEffect(() => {
        if (model) {
            setFuel('');
            setFuels(carData[brand][model]);
        } else {
            setFuels([]);
        }
    }, [model, brand]);

    const handleGetDetailsByReg = () => {
        const upperReg = regNumber.toUpperCase().trim();
        if (demoRegistrations[upperReg]) {
            const carDetails = demoRegistrations[upperReg];
            setBrand(carDetails.brand);
            setTimeout(() => setModel(carDetails.model), 0);
            setTimeout(() => setFuel(carDetails.fuel), 50);
        } else {
            alert(`Registration number not found. Try one of these demo numbers:\n${Object.keys(demoRegistrations).join(', ')}`);
        }
    };
    
    const handleGetEstimate = () => {
        if (brand && model && fuel) {
            setShowEstimate(true);
        } else {
            alert("Please select your car's Brand, Model, and Fuel type.");
        }
    };

    return (
        <>
            <div className="relative h-screen flex items-center overflow-hidden  px-1">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    poster="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                >
                    <source src="https://www.pexels.com/download/video/4488714/" type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/60 to-blue-900/40 z-10"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0 z-10">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
                            animate={{
                                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%'
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-2 sm:px-2  text-center z-20 relative">
                    {/* Badge */}
                 

                    {/* Main Heading */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Expert Car Care.{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Zero Hassle.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We handle your car service and insurance claims with precision, so you can enjoy the ride.
                    </motion.p>

                    {/* Stats - Removed for compact view */}

                    {/* Booking Form */}
                    <motion.div
                        className="mt-6 max-w-5xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* Form Title */}
                        <div className="mb-4 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                                Get Instant Quote
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                Select your car details for personalized service pricing
                            </p>
                        </div>

                        {/* Car Selection Form */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 items-end">
                            {/* Brand Select */}
                            <div className="relative">
                                <label className="block text-left text-xs font-semibold text-gray-700 mb-1.5">
                                    Car Brand
                                </label>
                                <div className="relative">
                                    <select
                                        value={brand}
                                        onChange={e => setBrand(e.target.value)}
                                        className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-xl text-gray-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white pr-10"
                                    >
                                        <option value="">Select Brand</option>
                                        {Object.keys(carData).map(b => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Model Select */}
                            <div className="relative">
                                <label className="block text-left text-xs font-semibold text-gray-700 mb-1.5">
                                    Car Model
                                </label>
                                <div className="relative">
                                    <select
                                        value={model}
                                        onChange={e => setModel(e.target.value)}
                                        disabled={!brand}
                                        className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-xl text-gray-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all appearance-none bg-white pr-10"
                                    >
                                        <option value="">Select Model</option>
                                        {models.map(m => (
                                            <option key={m} value={m}>{m}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Fuel Select */}
                            <div className="relative">
                                <label className="block text-left text-xs font-semibold text-gray-700 mb-1.5">
                                    Fuel Type
                                </label>
                                <div className="relative">
                                    <select
                                        value={fuel}
                                        onChange={e => setFuel(e.target.value)}
                                        disabled={!model}
                                        className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-xl text-gray-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all appearance-none bg-white pr-10"
                                    >
                                        <option value="">Select Fuel</option>
                                        {fuels.map(f => (
                                            <option key={f} value={f}>{f}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                onClick={handleGetEstimate}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                            >
                                <span>Get Estimate</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-4">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="px-3 text-gray-600 font-bold text-xs">OR</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        {/* Registration Number Search */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            <div className="relative">
                                <label className="block text-left text-xs font-semibold text-gray-700 mb-1.5">
                                    Registration Number
                                </label>
                                <input
                                    type="text"
                                    value={regNumber}
                                    onChange={e => setRegNumber(e.target.value)}
                                    placeholder="e.g., UP16BW1211"
                                    className="w-full p-2.5 sm:p-3 border-2 border-gray-200 rounded-xl text-gray-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all uppercase"
                                />
                            </div>
                            <motion.button
                                onClick={handleGetDetailsByReg}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full p-2.5 sm:p-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-all flex items-center justify-center gap-2 text-sm sm:mt-5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>Get Car Details</span>
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free Inspection</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Transparent Pricing</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>30 Days Warranty</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator - Removed for compact view */}
                </div>
            </div>

            {/* Estimation Modal */}
            <AnimatePresence>
                {showEstimate && (
                    <EstimationModal
                        car={{ brand, model, fuel }}
                        setShowEstimate={setShowEstimate}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

const EstimationModal = ({ car, setShowEstimate }) => {
    const [selectedCategory, setSelectedCategory] = useState('All Services');
    const categories = ['All Services', ...Object.keys(servicesData)];

    const getFilteredServices = () => {
        if (selectedCategory === 'All Services') {
            const allServices = {};
            Object.values(servicesData).forEach(category => {
                Object.assign(allServices, category);
            });
            return allServices;
        }
        return servicesData[selectedCategory] || {};
    };

    const filteredServices = getFilteredServices();
    const totalPrice = Object.values(filteredServices).reduce((sum, service) => sum + service.price, 0);

    return (
        <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEstimate(false)}
        >
            <motion.div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-4 flex flex-col max-h-[95vh]"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header - Fixed */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 sm:p-4 text-white rounded-t-3xl flex-shrink-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                                Service Estimate
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg font-semibold">
                                {car.brand} {car.model} • {car.fuel}
                            </p>
                        </div>
                        <motion.button
                            onClick={() => setShowEstimate(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Category Tabs */}
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap text-sm transition-all ${
                                    selectedCategory === category
                                        ? 'bg-white text-blue-600'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Services List - Scrollable */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-4">
                    <div className="space-y-3">
                        {Object.entries(filteredServices).map(([service, details], index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex justify-between items-start p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-1">{service}</h4>
                                    <p className="text-sm text-gray-600">{details.description}</p>
                                </div>
                                <div className="text-right ml-4">
                                    <div className="font-bold text-xl text-blue-600">
                                        ₹{details.price.toLocaleString('en-IN')}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer - Fixed at bottom */}
                <div className="border-t border-gray-200 p-2 sm:p-4 bg-gray-50 rounded-b-3xl flex-shrink-0">
                    {selectedCategory === 'All Services' && (
                        <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-xl border-2 border-blue-200">
                            <span className="text-lg font-bold text-gray-900">Estimated Total</span>
                            <span className="text-2xl font-extrabold text-blue-600">
                                ₹{totalPrice.toLocaleString('en-IN')}
                            </span>
                        </div>
                    )}

                    <p className="text-xs text-gray-500 mb-4 text-center">
                        *All prices are estimates and may vary based on vehicle inspection and parts requirement.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Now
                        </motion.button>
                        <motion.button
                            onClick={() => setShowEstimate(false)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 sm:flex-none p-4 px-8 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all"
                        >
                            Close
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;