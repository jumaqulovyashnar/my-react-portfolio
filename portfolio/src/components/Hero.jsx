import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import StarBurst from './ui/StarBurst';
import ShinyText from './ui/ShinyText';

export default function Hero() {
    const { t } = useTranslation();
    const roles = t('hero.roles', { returnObjects: true });

    return (
        <section id="home" className="relative min-h-[auto] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-[120px] md:pt-0">
            {/* Star Burst Background */}
            <StarBurst />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:py-20 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-text-secondary text-lg md:text-xl font-body mb-4"
                    >
                        {t('hero.greeting')}
                    </motion.p>

                    {/* Name with Shiny Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <ShinyText
                            as="h1"
                            text={t('hero.name')}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold"
                        />
                    </motion.div>

                    {/* Typewriter Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-6 min-h-[32px] md:min-h-[40px] flex items-center justify-center"
                    >
                        <Typewriter roles={roles} />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-4 max-w-2xl text-text-secondary text-base md:text-lg font-body"
                        style={{ lineHeight: '2.2' }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-8 flex flex-wrap gap-4 justify-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full purple-gradient text-white font-medium text-sm shadow-lg"
                        >
                            {t('hero.cta_projects')}
                        </motion.a>
                        <motion.a
                            href="/cv.pdf"
                            download
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(124,58,237,0.15)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full border border-accent-primary text-accent-light font-medium text-sm hover:bg-accent-primary/10 transition-colors"
                        >
                            {t('hero.cta_cv')}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Typewriter({ roles }) {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 40 : 80;
            timeout = setTimeout(() => {
                setText(isDeleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1));
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, roles]);

    return (
        <p className="text-lg md:text-xl text-accent-light font-mono h-8">
            {text}
            <span className="animate-blink text-accent-primary">|</span>
        </p>
    );
}
