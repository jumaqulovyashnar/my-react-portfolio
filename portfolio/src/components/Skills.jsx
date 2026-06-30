import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';
import LogoLoop from './ui/LogoLoop';
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiRedux, SiHtml5, SiCss, SiSass, SiTailwindcss, SiBootstrap, SiGit } from 'react-icons/si';

const allLogos = [
    { node: <SiReact color="#61dafb" />, title: 'React' },
    { node: <SiNextdotjs color="#ffffff" />, title: 'Next.js' },
    { node: <SiJavascript color="#f7df1e" />, title: 'JavaScript' },
    { node: <SiTypescript color="#3178c6" />, title: 'TypeScript' },
    { node: <SiRedux color="#764abc" />, title: 'Redux' },
    { node: <SiHtml5 color="#e34f26" />, title: 'HTML5' },
    { node: <SiCss color="#1572b6" />, title: 'CSS3' },
    { node: <SiSass color="#cc6699" />, title: 'Sass' },
    { node: <SiTailwindcss color="#06b6d4" />, title: 'Tailwind' },
    { node: <SiBootstrap color="#7952b3" />, title: 'Bootstrap' },
    { node: <SiGit color="#f05032" />, title: 'Git' },
];

export default function Skills() {
    const { t } = useTranslation();
    return (
        <section id="skills" className="relative py-12 md:py-[110px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-accent-primary/10 rounded-full blur-[120px]" />
            </div>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#a855f7" strokeWidth="1" />
                            <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#a855f7" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Top gradient blur overlay */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />

            {/* Bottom gradient blur overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <ShinyText text={t('skills.title')} className="text-3xl md:text-5xl font-display font-bold" />
                    <p className="mt-6 text-text-secondary font-mono text-base tracking-wide leading-relaxed">{t('skills.subtitle')}</p>
                </motion.div>

                {/* Single row - scrolling right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <LogoLoop
                        logos={allLogos}
                        speed={45}
                        direction="right"
                        logoHeight={100}
                        gap={80}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#0a0a0f"
                        ariaLabel="Technology skills"
                    />
                </motion.div>
            </div>
        </section>
    );
}
