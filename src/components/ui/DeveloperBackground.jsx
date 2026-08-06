import React, { memo } from 'react';
import './DeveloperBackground.css';

/**
 * DeveloperBackground Component
 * Renders a clearly visible, floating developer/code-themed visual background system
 * using developer code symbols around the edges of the hero section.
 */
const codeElements = [
    // Top-Left Cluster
    {
        symbol: '{ API }',
        className: 'top-[12%] left-[3%] sm:left-[5%] md:left-[7%] text-sm sm:text-base md:text-lg font-mono text-accent-glow opacity-[0.22] dev-animate-float-1',
        layer: 3
    },
    {
        symbol: 'const',
        className: 'top-[26%] left-[2%] sm:left-[4%] md:left-[5%] text-base sm:text-lg md:text-xl font-mono font-bold text-accent-light opacity-[0.20] dev-animate-pulse',
        layer: 2
    },
    {
        symbol: '</>',
        className: 'top-[42%] left-[4%] sm:left-[6%] md:left-[8%] text-2xl sm:text-3xl md:text-4xl font-mono font-extrabold text-accent-primary opacity-[0.25] dev-animate-float-2 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]',
        layer: 3
    },
    {
        symbol: '//',
        className: 'top-[58%] left-[2%] sm:left-[4%] md:left-[6%] text-sm sm:text-base md:text-lg font-mono font-bold text-accent-light opacity-[0.18] dev-animate-float-3',
        layer: 2
    },

    // Top-Right Cluster
    {
        symbol: 'function',
        className: 'top-[13%] right-[3%] sm:right-[5%] md:right-[7%] text-sm sm:text-base md:text-lg font-mono text-accent-glow opacity-[0.22] dev-animate-float-2',
        layer: 3
    },
    {
        symbol: '=>',
        className: 'top-[28%] right-[2%] sm:right-[4%] md:right-[6%] text-lg sm:text-xl md:text-2xl font-mono font-bold text-accent-light opacity-[0.22] dev-animate-float-1',
        layer: 2
    },
    {
        symbol: '{ }',
        className: 'top-[44%] right-[4%] sm:right-[6%] md:right-[8%] text-2xl sm:text-3xl md:text-4xl font-mono font-extrabold text-accent-primary opacity-[0.25] dev-animate-pulse drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]',
        layer: 2
    },
    {
        symbol: 'git commit',
        className: 'top-[60%] right-[2%] sm:right-[4%] md:right-[6%] text-sm sm:text-base md:text-lg font-mono text-accent-glow opacity-[0.20] dev-animate-float-3',
        layer: 3
    },

    // Outer Bottom / Side Accents
    {
        symbol: 'npm',
        className: 'bottom-[18%] left-[6%] sm:left-[9%] md:left-[12%] text-sm sm:text-base md:text-lg font-mono font-bold text-accent-light opacity-[0.20] dev-animate-float-1 hidden sm:block',
        layer: 2
    },
    {
        symbol: '#',
        className: 'bottom-[24%] left-[14%] sm:left-[18%] md:left-[22%] text-lg sm:text-xl md:text-2xl font-mono font-bold text-accent-glow opacity-[0.18] hidden md:block',
        layer: 1
    },
    {
        symbol: '⌘',
        className: 'bottom-[18%] right-[6%] sm:right-[9%] md:right-[12%] text-lg sm:text-xl md:text-2xl font-mono text-accent-glow opacity-[0.22] dev-animate-float-2 hidden sm:block',
        layer: 2
    },
    {
        symbol: '<>',
        className: 'bottom-[24%] right-[14%] sm:right-[18%] md:right-[22%] text-base sm:text-lg md:text-xl font-mono font-bold text-accent-primary opacity-[0.20] hidden md:block',
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
