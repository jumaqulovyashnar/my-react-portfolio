import React, { memo } from 'react';
import './DeveloperBackground.css';

/**
 * DeveloperBackground Component
 * Renders subtle, elegant floating developer/code-themed background elements
 * distributed nicely along the sides of the Hero section.
 */
const codeElements = [
    // Top-Left Side
    {
        symbol: '{ API }',
        className: 'top-[22%] left-[3%] sm:left-[5%] md:left-[7%] text-xs sm:text-sm md:text-base font-mono text-accent-glow opacity-[0.10] dev-animate-float-1',
        layer: 3
    },
    {
        symbol: 'const',
        className: 'top-[35%] left-[2%] sm:left-[4%] md:left-[5%] text-xs sm:text-sm md:text-base font-mono font-semibold text-accent-light opacity-[0.09] dev-animate-pulse',
        layer: 2
    },
    {
        symbol: '</>',
        className: 'top-[48%] left-[4%] sm:left-[6%] md:left-[8%] text-lg sm:text-xl md:text-2xl font-mono font-bold text-accent-primary opacity-[0.12] dev-animate-float-2',
        layer: 3
    },
    {
        symbol: '//',
        className: 'top-[62%] left-[2%] sm:left-[4%] md:left-[6%] text-xs sm:text-sm md:text-base font-mono text-accent-light opacity-[0.08] dev-animate-float-3',
        layer: 2
    },

    // Top-Right Side
    {
        symbol: 'function',
        className: 'top-[22%] right-[3%] sm:right-[5%] md:right-[7%] text-xs sm:text-sm md:text-base font-mono text-accent-glow opacity-[0.10] dev-animate-float-2',
        layer: 3
    },
    {
        symbol: '=>',
        className: 'top-[35%] right-[2%] sm:right-[4%] md:right-[6%] text-sm sm:text-base md:text-lg font-mono font-bold text-accent-light opacity-[0.09] dev-animate-float-1',
        layer: 2
    },
    {
        symbol: '{ }',
        className: 'top-[48%] right-[4%] sm:right-[6%] md:right-[8%] text-lg sm:text-xl md:text-2xl font-mono font-bold text-accent-primary opacity-[0.12] dev-animate-pulse',
        layer: 2
    },
    {
        symbol: 'git commit',
        className: 'top-[62%] right-[2%] sm:right-[4%] md:right-[6%] text-xs sm:text-sm md:text-base font-mono text-accent-glow opacity-[0.08] dev-animate-float-3',
        layer: 3
    },

    // Outer Bottom Accents
    {
        symbol: 'npm',
        className: 'bottom-[16%] left-[6%] sm:left-[9%] md:left-[12%] text-xs sm:text-sm font-mono font-semibold text-accent-light opacity-[0.08] dev-animate-float-1 hidden sm:block',
        layer: 2
    },
    {
        symbol: '#',
        className: 'bottom-[22%] left-[14%] sm:left-[18%] md:left-[22%] text-sm sm:text-base font-mono text-accent-glow opacity-[0.07] hidden md:block',
        layer: 1
    },
    {
        symbol: '⌘',
        className: 'bottom-[16%] right-[6%] sm:right-[9%] md:right-[12%] text-sm sm:text-base font-mono text-accent-glow opacity-[0.09] dev-animate-float-2 hidden sm:block',
        layer: 2
    },
    {
        symbol: '<>',
        className: 'bottom-[22%] right-[14%] sm:right-[18%] md:right-[22%] text-xs sm:text-sm font-mono font-semibold text-accent-primary opacity-[0.08] hidden md:block',
        layer: 1
    }
];

export const DeveloperBackground = memo(() => {
    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
            aria-hidden="true"
        >
            {codeElements.map((item, index) => (
                <div
                    key={index}
                    className={`absolute font-mono tracking-wider transition-all duration-500 ${item.className}`}
                >
                    {item.symbol}
                </div>
            ))}
        </div>
    );
});

DeveloperBackground.displayName = 'DeveloperBackground';
export default DeveloperBackground;
