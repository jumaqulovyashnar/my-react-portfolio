import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <div className="flex items-center gap-2.5 text-xs font-semibold font-mono tracking-widest" aria-label="Language selection">
            <button
                onClick={() => setLanguage('en')}
                className={`relative px-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded ${
                    isEnglish 
                    ? 'text-text-primary drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' 
                    : 'text-text-muted hover:text-text-primary hover:-translate-y-0.5'
                }`}
                aria-label="Switch to English"
                aria-pressed={isEnglish}
            >
                EN
                {isEnglish && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent-primary shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                )}
            </button>
            <span className="text-white/30 select-none">/</span>
            <button
                onClick={() => setLanguage('uz')}
                className={`relative px-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded ${
                    !isEnglish 
                    ? 'text-text-primary drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' 
                    : 'text-text-muted hover:text-text-primary hover:-translate-y-0.5'
                }`}
                aria-label="Switch to Uzbek"
                aria-pressed={!isEnglish}
            >
                UZ
                {!isEnglish && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent-primary shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                )}
            </button>
        </div>
    );
}
