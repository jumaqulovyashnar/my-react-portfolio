import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-24 px-4">
            <div className="max-w-xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <ShinyText text={t('contact.title')} className="text-3xl md:text-4xl font-display font-bold" />
                    <p className="mt-3 text-text-secondary font-body">{t('contact.subtitle')}</p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Name */}
                    <FloatingInput
                        type="text"
                        value={formData.name}
                        onChange={(val) => setFormData({ ...formData, name: val })}
                        label={t('contact.name_placeholder')}
                    />

                    {/* Email */}
                    <FloatingInput
                        type="email"
                        value={formData.email}
                        onChange={(val) => setFormData({ ...formData, email: val })}
                        label={t('contact.email_placeholder')}
                    />

                    {/* Message */}
                    <FloatingTextarea
                        value={formData.message}
                        onChange={(val) => setFormData({ ...formData, message: val })}
                        label={t('contact.message_placeholder')}
                    />

                    {/* Submit */}
                    <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl purple-gradient text-white font-medium text-sm disabled:opacity-60 transition-all relative overflow-hidden"
                    >
                        {status === 'idle' && t('contact.send')}
                        {status === 'sending' && (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                            </span>
                        )}
                        {status === 'success' && (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {t('contact.success')}
                            </span>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

function FloatingInput({ type, value, onChange, label }) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
                className="w-full px-4 py-3 pt-5 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary font-body text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all peer"
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none font-body ${active ? 'top-1 text-xs text-accent-light' : 'top-3.5 text-sm text-text-muted'
                    }`}
            >
                {label}
            </label>
        </div>
    );
}

function FloatingTextarea({ value, onChange, label }) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
                rows={5}
                className="w-full px-4 py-3 pt-5 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary font-body text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all resize-none peer"
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none font-body ${active ? 'top-1 text-xs text-accent-light' : 'top-3.5 text-sm text-text-muted'
                    }`}
            >
                {label}
            </label>
        </div>
    );
}
