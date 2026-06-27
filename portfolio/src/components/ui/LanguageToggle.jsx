import { Switch } from 'react-aria-components';
import { useTranslation } from 'react-i18next';

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const toggleLanguage = (selected) => {
        const newLang = selected ? 'en' : 'uz';
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <Switch
            isSelected={isEnglish}
            onChange={toggleLanguage}
            className="group inline-flex items-center gap-2"
        >
            <div
                className={cn(
                    "relative inline-flex h-7 w-[72px] shrink-0 cursor-pointer items-center rounded-full border-2 border-accent-primary/50 transition-all duration-300",
                    "bg-surface hover:border-accent-primary",
                    "group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-accent-primary group-data-[focus-visible]:ring-offset-2"
                )}
            >
                {/* Sliding background */}
                <div
                    className={cn(
                        "absolute h-[26px] w-[26px] rounded-full purple-gradient shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out",
                        isEnglish ? "translate-x-[43px]" : "translate-x-[1px]"
                    )}
                >
                    <span className="text-white text-xs font-semibold">
                        {isEnglish ? 'ENG' : 'UZ'}
                    </span>
                </div>

                {/* Static Labels */}
                <span
                    className={cn(
                        "absolute left-2 text-xs font-semibold transition-opacity duration-300",
                        !isEnglish ? "opacity-0" : "opacity-100 text-text-secondary"
                    )}
                >
                    UZ
                </span>

                <span
                    className={cn(
                        "absolute right-1 text-xs font-semibold transition-opacity duration-300",
                        isEnglish ? "opacity-0" : "opacity-100 text-text-secondary"
                    )}
                >
                    ENG
                </span>
            </div>
        </Switch>
    );
}
