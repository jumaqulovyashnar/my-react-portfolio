import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ShinyText from './ui/ShinyText';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const { t } = useTranslation();
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <section id="contact" className="relative py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-14"
                >
                    <ShinyText text={t('contact.title')} className="text-3xl md:text-4xl font-display font-bold" />
                    <p className="mt-3 text-text-secondary font-body">{t('contact.subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Form Card - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="max-w-[440px]"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 space-y-5 shadow-2xl shadow-accent-primary/5"
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-text-secondary text-xs font-medium mb-1.5 ml-1">{t('contact.name_placeholder')}</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/15 rounded-xl text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-white/[0.07] transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-text-secondary text-xs font-medium mb-1.5 ml-1">{t('contact.email_placeholder')}</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/15 rounded-xl text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-white/[0.07] transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-text-secondary text-xs font-medium mb-1.5 ml-1">{t('contact.message_placeholder')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={4}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/15 rounded-xl text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary focus:bg-white/[0.07] transition-all resize-none"
                                />
                            </div>

                            {/* Hidden field */}
                            <input type="hidden" name="to_email" value="jumaqulovyashnar@gmail.com" />

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(124,58,237,0.4)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3.5 rounded-xl purple-gradient text-white font-semibold text-sm disabled:opacity-60 transition-all mt-2"
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
                                {status === 'error' && (
                                    <span className="text-red-300">Error! Try again.</span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Illustration - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="hidden md:flex items-center justify-center"
                    >
                        <img src="/sent.svg" alt="Contact illustration" width="448" height="448" className="w-full max-w-md drop-shadow-2xl h-auto" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
