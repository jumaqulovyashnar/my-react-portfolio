import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { t, i18n } = useTranslation();
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

    const toggleLang = () => {
        const newLang = i18n.language === 'en' ? 'uz' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-xl border-border' : 'bg-background/50 backdrop-blur-sm border-border/50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 text-accent-primary font-display font-bold text-xl">
                        <span className="text-text-primary">&lt;/&gt;</span>
                        <span className="text-accent-light">JY</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
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
                        <button
                            onClick={toggleLang}
                            className="px-3 py-1.5 rounded-full text-xs font-medium border border-border hover:border-accent-primary hover:text-accent-light transition-all"
                        >
                            {i18n.language === 'en' ? '🇬🇧 EN' : '🇺🇿 UZ'}
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
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
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-border"
                    >
                        <div className="flex flex-col items-center gap-4 py-6">
                            {links.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-sm font-medium transition-colors ${activeSection === link.key ? 'text-accent-light' : 'text-text-secondary'
                                        }`}
                                >
                                    {t(`nav.${link.key}`)}
                                </a>
                            ))}
                            <button
                                onClick={toggleLang}
                                className="px-3 py-1.5 rounded-full text-xs font-medium border border-border hover:border-accent-primary transition-all"
                            >
                                {i18n.language === 'en' ? '🇬🇧 EN' : '🇺🇿 UZ'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
