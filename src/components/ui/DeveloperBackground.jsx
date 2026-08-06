import React, { memo } from 'react';
import './DeveloperBackground.css';

/**
 * DeveloperBackground Component
 * Renders a subtle, premium developer/code-themed visual background system
 * using floating code symbols and developer-related elements.
 */
const codeElements = [
    // Top-Left Cluster
    {
        symbol: '{ API }',
        className: 'top-[12%] left-[4%] sm:left-[6%] md:left-[8%] text-xs sm:text-sm text-accent-glow opacity-[0.08] dev-animate-float-1',
        layer: 3
    },
    {
        symbol: 'const',
        className: 'top-[26%] left-[2%] sm:left-[4%] md:left-[6%] text-sm sm:text-base font-semibold text-accent-light opacity-[0.06] dev-animate-pulse',
        layer: 2
    },
    {
        symbol: '</>',
        className: 'top-[42%] left-[5%] sm:left-[7%] md:left-[9%] text-base sm:text-xl font-bold text-accent-primary opacity-[0.07] dev-animate-float-2',
        layer: 3
    },
    {
        symbol: '//',
        className: 'top-[58%] left-[3%] sm:left-[5%] md:left-[7%] text-xs sm:text-sm text-text-secondary opacity-[0.05] dev-animate-float-3',
        layer: 2
    },

    // Top-Right Cluster
    {
        symbol: 'function',
        className: 'top-[13%] right-[4%] sm:right-[6%] md:right-[8%] text-xs sm:text-sm text-accent-glow opacity-[0.08] dev-animate-float-2',
        layer: 3
    },
    {
        symbol: '=>',
        className: 'top-[28%] right-[3%] sm:right-[5%] md:right-[7%] text-sm sm:text-lg font-bold text-accent-light opacity-[0.06] dev-animate-float-1',
        layer: 2
    },
    {
        symbol: '{ }',
        className: 'top-[44%] right-[5%] sm:right-[7%] md:right-[9%] text-base sm:text-xl text-accent-primary opacity-[0.07] dev-animate-pulse',
        layer: 2
    },
    {
        symbol: 'git commit',
        className: 'top-[60%] right-[3%] sm:right-[5%] md:right-[7%] text-xs sm:text-sm text-text-secondary opacity-[0.06] dev-animate-float-3',
        layer: 3
    },

    // Outer Bottom / Side Accents (Hidden on tiny screens to avoid crowding)
    {
        symbol: 'npm',
        className: 'bottom-[18%] left-[7%] sm:left-[10%] md:left-[13%] text-xs sm:text-sm font-semibold text-accent-light opacity-[0.05] dev-animate-float-1 hidden sm:block',
        layer: 2
    },
    {
        symbol: '#',
        className: 'bottom-[24%] left-[16%] sm:left-[20%] md:left-[24%] text-sm sm:text-base text-text-muted opacity-[0.04] hidden md:block',
        layer: 1
    },
    {
        symbol: '⌘',
        className: 'bottom-[18%] right-[7%] sm:right-[10%] md:right-[13%] text-xs sm:text-sm text-accent-glow opacity-[0.06] dev-animate-float-2 hidden sm:block',
        layer: 2
    },
    {
        symbol: '<>',
        className: 'bottom-[24%] right-[16%] sm:right-[20%] md:right-[24%] text-sm sm:text-base text-text-muted opacity-[0.04] hidden md:block',
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
                    className={`absolute font-mono tracking-wider transition-opacity duration-500 ${item.className}`}
                >
                    {item.symbol}
                </div>
            ))}
        </div>
    );
});

DeveloperBackground.displayName = 'DeveloperBackground';
export default DeveloperBackground;
