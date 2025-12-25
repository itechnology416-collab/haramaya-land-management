import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Dropdown = ({ title, items, lang, scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <button
                className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isOpen ? "bg-white/20" : "hover:bg-white/10",
                    scrolled ? "text-gray-800" : "text-white"
                )}
            >
                {title} <ChevronDown size={14} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-white/20 shadow-glass rounded-xl py-2 z-50 overflow-hidden"
                    >
                        {items.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className="block px-4 py-3 hover:bg-brand-green/10 text-gray-700 hover:text-brand-green text-sm transition-colors border-l-2 border-transparent hover:border-brand-green"
                            >
                                {lang === 'en' ? item.label.en : item.label.or}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = ({ lang, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setIsOpen(false), [location]);

    const content = {
        en: {
            home: "Home",
            services: "Services",
            title: "Haramaya Land",
            subtitle: "Management"
        },
        or: {
            home: "Man'ee",
            services: "Tajaajiloota",
            title: "Bulchiinsa Lafa",
            subtitle: "Haramayaa"
        }
    };

    const t = content[lang];
    const isHome = location.pathname === '/';

    // Navbar style based on scroll and page
    const navClass = cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 py-2 h-20"
            : "bg-transparent py-4 h-24"
    );

    const textColor = scrolled ? "text-brand-green" : "text-white";
    const logoText = scrolled ? "text-gray-900" : "text-white";
    const subText = scrolled ? "text-brand-gold" : "text-green-200";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">

                    {/* Brand / Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/ethiopia.png"
                            alt="Ethiopian Flag"
                            className="w-12 h-auto shadow-md rounded-md object-cover ring-2 ring-white/30"
                        />
                        <Link to="/" className="flex flex-col group">
                            <span className={cn("font-bold text-xl tracking-tight transition-colors", logoText)}>
                                {t.title}
                            </span>
                            <span className={cn("text-xs uppercase tracking-widest font-medium transition-colors", subText)}>
                                {t.subtitle}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link
                            to="/"
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10",
                                textColor
                            )}
                        >
                            {t.home}
                        </Link>

                        <Dropdown
                            title={lang === 'en' ? "About" : "Waa'ee Keenya"}
                            items={[
                                { label: { en: "Mission & Vision", or: "Ergamaa fi Mul'ata" }, path: "/about" },
                                { label: { en: "History & People", or: "Seenaa fi Namoota" }, path: "/history" }
                            ]}
                            lang={lang}
                            scrolled={scrolled}
                        />

                        <Link
                            to="/services"
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10",
                                textColor
                            )}
                        >
                            {t.services}
                        </Link>

                        <Link
                            to="/news"
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10",
                                textColor
                            )}
                        >
                            {lang === 'en' ? 'News' : 'Oduu'}
                        </Link>

                        <Dropdown
                            title={lang === 'en' ? "Contact" : "Qunnamtii"}
                            items={[
                                { label: { en: "Addresses", or: "Teessoo" }, path: "/contact-info" },
                                { label: { en: "Feedback Form", or: "Foormii Yaada" }, path: "/feedback" }
                            ]}
                            lang={lang}
                            scrolled={scrolled}
                        />

                        <div className="w-px h-6 bg-current opacity-20 mx-2"></div>

                        <button
                            onClick={() => setLang(lang === 'en' ? 'or' : 'en')}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border",
                                scrolled
                                    ? "border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                                    : "border-white/40 text-white hover:bg-white hover:text-brand-green"
                            )}
                        >
                            <Globe size={14} />
                            {lang === 'en' ? 'EN' : 'OR'}
                        </button>

                        <div className="w-px h-6 bg-current opacity-20 mx-2"></div>

                        {/* Oromia Flag (Right) */}
                        <img
                            src="/oromia.png"
                            alt="Oromia Flag"
                            className="w-12 h-auto shadow-md rounded-md object-cover ring-2 ring-white/30"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-lg transition-colors",
                                scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"
                            )}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-brand-green font-medium">{t.home}</Link>

                            <div className="px-4 pt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'en' ? "About" : "Waa'ee Keenya"}</div>
                            <Link to="/about" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm ml-2">Measure & Vision</Link>
                            <Link to="/history" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm ml-2">History & People</Link>

                            <Link to="/services" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-brand-green font-medium">{t.services}</Link>
                            <Link to="/news" className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-brand-green font-medium">{lang === 'en' ? 'News' : 'Oduu'}</Link>

                            <button
                                onClick={() => setLang(lang === 'en' ? 'or' : 'en')}
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-green/10 text-brand-green px-4 py-3 rounded-xl font-bold"
                            >
                                <Globe size={18} />
                                {lang === 'en' ? 'Switch to Afaan Oromoo' : 'Switch to English'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
