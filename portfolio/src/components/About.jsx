import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Clock from './Clock';
import ShinyText from './ui/ShinyText';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 overflow-hidden min-h-[80vh] flex items-center">
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
          className="text-center mb-20 -mt-5"
        >
          <ShinyText text={t('about.title')} className="text-3xl md:text-4xl font-display font-bold" />
          <p className="mt-5 text-text-primary font-body text-base md:text-lg leading-relaxed">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start pt-8"
          >
            <p className="text-text-secondary text-base md:text-lg leading-[2.5] md:leading-[2.8] font-body">
              {t('about.bio')}
            </p>
          </motion.div>
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
            <p className="mt-[45px] text-text-muted text-base md:text-lg font-body text-center">{t('about.clock_label')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
