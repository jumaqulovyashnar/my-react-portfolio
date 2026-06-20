/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0f',
                surface: '#111118',
                border: '#1e1e2e',
                accent: {
                    primary: '#7c3aed',
                    light: '#a855f7',
                    glow: '#e3b3ea',
                },
                text: {
                    primary: '#f1f5f9',
                    secondary: '#94a3b8',
                    muted: '#475569',
                },
                red: {
                    accent: '#ef4444',
                },
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            keyframes: {
                orbit: {
                    from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
                    to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
                },
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            animation: {
                orbit: 'orbit 20s linear infinite',
                blink: 'blink 1s step-end infinite',
            },
        },
    },
    plugins: [],
};
