import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';

const projects = [
    {
        title: 'Top Donate Bot',
        descKey: 'projects.topDonateDesc',
        defaultDesc: 'A Telegram Bot built for fast and secure donations and managing charity contributions.',
        tags: ['Telegram Bot', 'Bot API', 'JavaScript'],
        accent: '#0088cc',
        gradient: 'from-sky-500 to-blue-600',
        live: 'https://t.me/top_DonateUzbot',
        github: 'https://github.com/jumaqulovyashnar/uc-and-almaz-bot',
    },
    {
        title: 'Shafmet Admin Panel',
        descKey: 'projects.shafmetDesc',
        defaultDesc: 'A modern administration dashboard built using React, TypeScript, Tailwind CSS, and TanStack.',
        tags: ['TypeScript', 'Tailwind CSS', 'TanStack', 'React'],
        accent: '#0284c7',
        gradient: 'from-blue-600 to-cyan-500',
        live: 'https://shafmet-admin-panel.vercel.app',
        github: 'https://github.com/jumaqulovyashnar/shafmet-admin-panel',
    },
    {
        title: 'LinguaPro Edu CRM',
        descKey: 'projects.linguaProDesc',
        defaultDesc: 'A modern CRM system designed for managing educational centers, courses, and student activities.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'CRM'],
        accent: '#e11d48',
        gradient: 'from-rose-600 to-pink-500',
        live: 'https://lingua-pro-edu-crm.vercel.app',
        github: 'https://github.com/jumaqulovyashnar/lingua-pro-edu-crm',
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
                            className="glass-card overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col h-full"
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
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl font-display font-bold text-text-primary mb-2">{project.title}</h3>
                                    <p className="text-text-secondary text-sm font-body mb-4">
                                        {t(project.descKey, project.defaultDesc)}
                                    </p>

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
                                </div>

                                {/* Buttons - Aligned horizontally on X-axis across all cards */}
                                <div className="flex gap-3 mt-auto pt-2">
                                    <a
                                        href={project.live}
                                        target={project.live !== '#' ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 transition-colors"
                                    >
                                        {t('projects.live')}
                                    </a>
                                    {project.github && project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 transition-colors"
                                        >
                                            {t('projects.github')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
