import React from 'react';

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const FooterLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },

];

const QuickLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'Download App', href: '#contact' },
];

const Footer = () => {
    return (
        <footer
            className="relative overflow-hidden text-[#f8eee5] bg-brand-dark"
            style={{ backgroundImage: 'linear-gradient(135deg, #2B1D1A 0%, #6F4E37 55%, #3E2723 100%)' }}
        >
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:items-start">
                    <section className="max-w-md">
                        <a href="#" className="font-cursive text-4xl text-[#fff8ef] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                            Master Cafe
                        </a>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-[#f6e8d7] drop-shadow-[0_1px_1px_rgba(0,0,0,0.28)] sm:text-[15px]">
                            Crafted Coffee, Cozy Vibes,
                            <br />
                            Unforgettable Moments - Your Perfect
                            <br />
                            Espresso Escape
                        </p>

                    </section>

                    <section>
                        <h2 className="text-xl font-semibold" style={{color: '#FFF8EF'}}>Footer Links</h2>
                        <ul className="mt-5 space-y-3 text-sm text-[#FFF8EF] sm:text-[15px]">
                            {FooterLinks.map((link) => (
                                <li key={link.title}>
                                    <a href={link.href} className="transition-colors duration-200 hover:text-accent">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold" style={{color: '#FFF8EF'}}>Quick Links</h2>
                        <ul className="mt-5 space-y-3 text-sm text-[#FFF8EF] sm:text-[15px]">
                            {QuickLinks.map((link) => (
                                <li key={link.title}>
                                    <a href={link.href} className="transition-colors duration-200 hover:text-accent">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold" style={{color: '#FFF8EF'}}>Address</h2>
                        <div className="mt-5 space-y-3 text-sm leading-6 text-[#FFF8EF] sm:text-[15px]">
                            <p>Colombo, Sri Lanka</p>
                            <p>+94 11 123 4567</p>
                        </div>

                        <div className="mt-6 flex items-center gap-4 text-white">
                            <a href="#" aria-label="Facebook" className="transition-colors duration-200 hover:text-accent">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="transition-colors duration-200 hover:text-accent">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="#" aria-label="Instagram" className="transition-colors duration-200 hover:text-accent">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
