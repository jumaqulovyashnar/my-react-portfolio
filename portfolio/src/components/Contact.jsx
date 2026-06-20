import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ShinyText from './ui/ShinyText';

// EmailJS configuration
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail) and get SERVICE_ID
// 3. Create an email template and get TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account > API Keys
const EMAILJS_SERVICE_ID = 'service_portfolio';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
    const { t } = useTranslation();
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
        )
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
                    ref={formRef}
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
                        name="from_name"
                        value={formData.name}
                        onChange={(val) => setFormData({ ...formData, name: val })}
                        label={t('contact.name_placeholder')}
                    />

                    {/* Email */}
                    <FloatingInput
                        type="email"
                        name="from_email"
                        value={formData.email}
                        onChange={(val) => setFormData({ ...formData, email: val })}
                        label={t('contact.email_placeholder')}
                    />

                    {/* Message */}
                    <FloatingTextarea
                        name="message"
                        value={formData.message}
                        onChange={(val) => setFormData({ ...formData, message: val })}
                        label={t('contact.message_placeholder')}
                    />

                    {/* Hidden field for recipient email */}
                    <input type="hidden" name="to_email" value="jumaqulovyashnar@gmail.com" />

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
                        {status === 'error' && (
                            <span className="text-red-300">Error! Try again.</span>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

function FloatingInput({ type, name, value, onChange, label }) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative">
            <input
                type={type}
                name={name}
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

function FloatingTextarea({ name, value, onChange, label }) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative">
            <textarea
                name={name}
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
