import { useMemo, memo } from 'react';
import './LogoLoop.css';

export const LogoLoop = memo(({
    logos,
    speed = 30,
    direction = 'right',
    width = '100%',
    logoHeight = 60,
    gap = 48,
    fadeOut = true,
    fadeOutColor = '#0a0a0f',
    scaleOnHover = true,
    renderItem,
    ariaLabel = 'Technology skills',
    className,
    style
}) => {
    // Duplicate logos twice to ensure seamless continuous infinite looping
    const duplicatedLogos = useMemo(() => [...logos, ...logos, ...logos, ...logos], [logos]);

    const cssVars = useMemo(() => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-duration': `${speed}s`,
        '--logoloop-fadeColor': fadeOutColor
    }), [gap, logoHeight, speed, fadeOutColor]);

    const rootClass = [
        'logoloop',
        fadeOut && 'logoloop--fade',
        scaleOnHover && 'logoloop--scale-hover',
        className
    ].filter(Boolean).join(' ');

    const trackClass = [
        'logoloop__track',
        direction === 'right' ? 'logoloop__track--reverse' : 'logoloop__track--forward'
    ].join(' ');

    return (
        <div
            className={rootClass}
            style={{ width: typeof width === 'number' ? `${width}px` : width, ...cssVars, ...style }}
            role="region"
            aria-label={ariaLabel}
        >
            <div className={trackClass}>
                <ul className="logoloop__list" role="list">
                    {duplicatedLogos.map((item, index) => {
                        const isNode = 'node' in item;
                        const content = isNode ? (
                            <span className="logoloop__node">{item.node}</span>
                        ) : (
                            <img
                                src={item.src}
                                alt={item.alt ?? ''}
                                title={item.title}
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                            />
                        );

                        return (
                            <li className="logoloop__item" key={index} role="listitem">
                                <div className="logoloop__card flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-primary/40 hover:bg-white/[0.08] transition-all">
                                    {renderItem ? renderItem(item, index) : content}
                                    {item.title && (
                                        <span className="mt-2 text-xs sm:text-sm font-mono text-text-secondary truncate max-w-full text-center px-1">
                                            {item.title}
                                        </span>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
