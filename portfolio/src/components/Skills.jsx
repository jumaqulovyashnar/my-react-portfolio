import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';

const frontendSkills = [
    { name: 'React', color: '#61dafb' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'HTML5', color: '#e34f26' },
    { name: 'CSS3', color: '#1572b6' },
];

const toolSkills = [
    { name: 'Git', color: '#f05032' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'Figma', color: '#a259ff' },
    { name: 'Node.js', color: '#339933' },
    { name: 'UI/UX', color: '#ff7eb3' },
    { name: 'Tailwind', color: '#06b6d4' },
];

export default function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-accent-primary/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-accent-light/5 rounded-full blur-[100px]" />
            </div>

            {/* Hexagon grid background */}
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

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <ShinyText text={t('skills.title')} className="text-3xl md:text-4xl font-display font-bold" />
                    <p className="mt-3 text-text-secondary font-body">{t('skills.subtitle')}</p>
                </motion.div>

                {/* Orbit System (Desktop/Tablet) */}
                <div className="relative mx-auto w-[400px] h-[400px] md:w-[550px] md:h-[550px] hidden md:flex items-center justify-center">
                    {/* Center Logo */}
                    <div className="relative z-20 w-24 h-24 rounded-full bg-surface border-2 border-accent-primary/50 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                        <span className="text-3xl font-display font-bold text-accent-light">JY</span>
                        <div className="absolute inset-0 rounded-full animate-pulse bg-accent-primary/20 blur-xl" />
                    </div>

                    {/* Inner Orbit (Frontend) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] border border-accent-primary/10 rounded-full" />
                    </div>
                    {frontendSkills.map((skill, i) => (
                        <OrbitItem
                            key={skill.name}
                            skill={skill}
                            radius={window.innerWidth < 768 ? 120 : 140}
                            duration={25}
                            delay={-i * (25 / frontendSkills.length)}
                        />
                    ))}

                    {/* Outer Orbit (Tools) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[380px] h-[380px] md:w-[460px] md:h-[460px] border border-accent-light/10 rounded-full" />
                    </div>
                    {toolSkills.map((skill, i) => (
                        <OrbitItem
                            key={skill.name}
                            skill={skill}
                            radius={window.innerWidth < 768 ? 190 : 230}
                            duration={35}
                            delay={-i * (35 / toolSkills.length)}
                            reverse
                        />
                    ))}
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
                    {[...frontendSkills, ...toolSkills].map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card p-4 flex flex-col items-center gap-3 relative group"
                        >
                            <div 
                                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-sm"
                                style={{ color: skill.color, boxShadow: `0 0 15px ${skill.color}22` }}
                            >
                                {skill.name.slice(0, 2).toUpperCase()}
                            </div>
                            <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes orbit-custom {
                    from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                }
                @keyframes orbit-custom-reverse {
                    from { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                    to { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                }
            `}</style>
        </section>
    );
}

function OrbitItem({ skill, radius, duration, delay, reverse = false }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{
                '--radius': `${radius}px`,
                animation: `${reverse ? 'orbit-custom-reverse' : 'orbit-custom'} ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
            }}
        >
            <div
                className="group relative -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface/80 backdrop-blur-sm border border-border flex items-center justify-center cursor-pointer hover:border-accent-primary transition-all hover:scale-110 pointer-events-auto"
                style={{
                    boxShadow: `0 0 20px ${skill.color}22`,
                }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs font-bold font-mono" style={{ color: skill.color }}>
                        {skill.name.slice(0, 3).toUpperCase()}
                    </span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-surface border border-border rounded-lg px-3 py-1.5 text-xs text-text-primary shadow-xl z-30">
                    {skill.name}
                    <div 
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-surface border-l border-t border-border"
                    />
                </div>

                {/* Individual Glow */}
                <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity blur-md"
                    style={{ backgroundColor: skill.color }}
                />
            </div>
        </div>
    );
}
