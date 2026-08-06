import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Clock from './Clock';
import ShinyText from './ui/ShinyText';
import { FiMapPin, FiCode, FiTarget, FiZap } from 'react-icons/fi';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: <FiMapPin className="text-purple-400 w-4 h-4" />, label: t('about.location') },
    { icon: <FiCode className="text-cyan-400 w-4 h-4" />, label: t('about.specialty') },
    { icon: <FiTarget className="text-pink-400 w-4 h-4" />, label: t('about.goal') },
    { icon: <FiZap className="text-emerald-400 w-4 h-4" />, label: t('about.status') },
  ];

  return (
    <section id="about" className="relative py-10 md:py-20 overflow-hidden min-h-[auto] md:min-h-[80vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-light/10 rounded-full blur-[100px]" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 -mt-5"
        >
          <ShinyText as="h2" text={t('about.title')} className="text-3xl md:text-4xl font-display font-bold" />
          <p className="mt-5 text-text-primary font-body text-base md:text-lg leading-relaxed px-2 md:px-0">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Bio Card with Glassmorphism & Developer Stat Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden backdrop-blur-md hover:border-accent-primary/40 transition-colors shadow-xl"
          >
            {/* Top IDE Window Header Dots */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10 font-mono text-xs text-text-muted">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-accent-glow/70 font-mono">developer_profile.tsx</span>
            </div>

            {/* Bio Text */}
            <p className="text-text-secondary text-base md:text-lg leading-[2.1] font-body text-justify md:text-left mb-8">
              {t('about.bio')}
            </p>

            {/* 4 Stat Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {stats.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors">
                  <div className="p-1.5 rounded-lg bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-text-primary truncate">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clock Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative z-10">
              <Clock />
            </div>
            <p className="mt-6 md:mt-[45px] text-text-muted text-base md:text-lg font-body text-center">{t('about.clock_label')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
