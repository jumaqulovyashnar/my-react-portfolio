import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SmoothCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-accent-primary/50 rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.8 }}
            />
        </>
    );
}
