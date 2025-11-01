import React from 'react';
import { motion } from 'framer-motion';
import mainlogo from "../../assets/mainlogo.png"
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Footer = () => {
    const carBrands = [
        'Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 
        'Honda', 'Toyota', 'Ford', 'Renault', 
        'Volkswagen', 'Kia', 'Nissan', 'Skoda'
    ];

    const services = [
        'Periodic Servicing',
        'Denting & Painting',
        'AC Service & Repair',
        'Battery Replacement',
        'Tyres & Wheel Care',
        'Car Spa & Cleaning',
        'Detailing Services',
        'Car Inspections'
    ];

    const signatureServices = [
        'Fast Insurance Claims',
        'Cashless Claims',
        'Direct Insurer Tie-ups',
        'Dedicated Claims Manager'
    ];

    const company = [
        { name: 'About Us', href: '#about' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <footer style={customFontStyle} className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            {/* Logo */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className=" bg-white  rounded-lg flex items-center justify-center">
                                       <img src={mainlogo} className='h-26 w-26'/>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold">Mechanic Uncle</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                The future of car care is here. Smarter, convenient, and built for you.
                            </p>

                            {/* App Download Buttons */}
                            <div className="flex flex-col gap-3">
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Download on</div>
                                        <div className="font-bold text-sm">App Store</div>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Get it on</div>
                                        <div className="font-bold text-sm">Google Play</div>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Car Brands Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <h3 className="font-bold mb-4 text-lg tracking-wider uppercase text-blue-400">Car Brands</h3>
                        <ul className="space-y-2">
                            {carBrands.map((brand, index) => (
                                <motion.li
                                    key={brand}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {brand}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="font-bold mb-4 text-lg tracking-wider uppercase text-blue-400">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <motion.li
                                    key={service}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                >
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {service}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Signature Service Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="font-bold mb-4 text-lg tracking-wider uppercase text-blue-400">
                            ⚡ Signature Service
                        </h3>
                        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4 mb-4">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Fast Insurance Claims
                            </h4>
                            <ul className="space-y-2">
                                {signatureServices.map((service, index) => (
                                    <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Company & Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="font-bold mb-4 text-lg tracking-wider uppercase text-blue-400">Company</h3>
                        <ul className="space-y-2 mb-6">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:support@mechanicuncle.com" className="text-gray-400 hover:text-white transition-colors">
                                    support@mechanicuncle.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                                    +91 123 456 7890
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm text-center md:text-left"
                    >
                        © {new Date().getFullYear()} mechanicUncle. All Rights Reserved.
                    </motion.p>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <span className="text-gray-400 text-sm hidden sm:block">Follow Us:</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, type: "spring" }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <div className="text-gray-400 group-hover:text-white transition-colors">
                                        {social.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Terms & Privacy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500"
                >
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <span>•</span>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;