import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Clock from './Clock';
import ShinyText from './ui/ShinyText';
import MagicRings from './ui/MagicRings';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-light/10 rounded-full blur-[100px]" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ShinyText text={t('about.title')} className="text-3xl md:text-4xl font-display font-bold" />
          <p className="mt-3 text-text-secondary font-body">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-text-secondary text-base md:text-lg leading-loose md:leading-[1.9] font-body">
              {t('about.bio')}
            </p>
          </motion.div>

          {/* Clock with Magic Rings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            {/* Magic Rings behind clock */}
            <div className="absolute inset-0 flex items-center justify-center">
              <MagicRings />
            </div>
            <div className="relative z-10">
              <Clock />
              <p className="text-center mt-4 text-text-muted text-sm font-body">{t('about.clock_label')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
