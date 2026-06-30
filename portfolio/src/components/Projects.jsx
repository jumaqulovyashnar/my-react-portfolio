import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';

const projects = [
    {
        title: 'DevPortfolio',
        description: 'Personal portfolio website with animations and i18n support',
        tags: ['React', 'Tailwind', 'Framer Motion'],
        accent: '#7c3aed',
        gradient: 'from-purple-600 to-violet-500',
        live: '#',
        github: '#',
    },
    {
        title: 'TaskFlow App',
        description: 'A sleek task manager with drag-and-drop and local storage',
        tags: ['React', 'JavaScript', 'CSS3'],
        accent: '#3b82f6',
        gradient: 'from-blue-600 to-cyan-500',
        live: '#',
        github: '#',
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather app using OpenWeatherMap API with beautiful charts',
        tags: ['React', 'API', 'Chart.js'],
        accent: '#06b6d4',
        gradient: 'from-cyan-600 to-teal-500',
        live: '#',
        github: '#',
    },
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="relative py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <ShinyText text={t('projects.title')} className="text-3xl md:text-4xl font-display font-bold" />
                    <p className="mt-3 text-text-secondary font-body">{t('projects.subtitle')}</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -8, borderColor: project.accent }}
                            className="glass-card overflow-hidden group cursor-pointer transition-all duration-300"
                            style={{
                                boxShadow: `0 0 0px transparent`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 30px ${project.accent}33`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 0px transparent`;
                            }}
                        >
                            {/* Gradient Header */}
                            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                            {/* Card Body */}
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-text-primary mb-2">{project.title}</h3>
                                <p className="text-text-secondary text-sm font-body mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.live}
                                        className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 transition-colors"
                                    >
                                        {t('projects.live')}
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 transition-colors"
                                    >
                                        {t('projects.github')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
