import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './ui/LanguageToggle';

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const links = [
        { key: 'home', href: '#home' },
        { key: 'about', href: '#about' },
        { key: 'skills', href: '#skills' },
        { key: 'projects', href: '#projects' },
        { key: 'contact', href: '#contact' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = links.map((l) => document.querySelector(l.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );
        sections.forEach((s) => s && observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-xl border-border' : 'bg-background/50 backdrop-blur-sm border-border/50'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50" aria-label="Main navigation">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" aria-label="Home page" className="flex items-center gap-2 text-accent-primary font-display font-bold text-xl rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary p-1 -ml-1">
                        <span className="text-text-primary">&lt;/&gt;</span>
                        <span className="text-accent-light">JY</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                            >
                                {t(`nav.${link.key}`)}
                                {activeSection === link.key && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary rounded-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                        <LanguageToggle />
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-text-primary block"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-text-primary block"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-text-primary block"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 h-[100svh] w-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.key}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.05 * i, duration: 0.4, ease: "easeOut" }}
                                className={`text-3xl font-display font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg px-4 py-2 ${
                                    activeSection === link.key 
                                    ? 'text-accent-light drop-shadow-[0_0_15px_rgba(192,132,252,0.5)] scale-110' 
                                    : 'text-text-secondary hover:text-text-primary'
                                }`}
                            >
                                {t(`nav.${link.key}`)}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.05 * links.length, duration: 0.4 }}
                            className="mt-8 scale-125"
                        >
                            <LanguageToggle />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
