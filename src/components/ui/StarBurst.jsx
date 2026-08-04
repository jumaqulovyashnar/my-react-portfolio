import { useEffect, useRef } from 'react';

export default function StarBurst() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let stars = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        function initStars() {
            stars = [];
            const count = 100;
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 0.5 + 0.1,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                    twinkleOffset: Math.random() * Math.PI * 2,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const time = Date.now() * 0.001;

            stars.forEach((star) => {
                const opacity = star.opacity * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset));

                // Draw star with glow
                ctx.save();
                ctx.globalAlpha = opacity * 0.8;
                ctx.shadowColor = '#e3b3ea';
                ctx.shadowBlur = star.size * 4;
                ctx.fillStyle = '#e3b3ea';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                // Move star slowly
                star.y -= star.speed * 0.3;
                star.x += Math.sin(time + star.twinkleOffset) * 0.1;

                // Reset star if off screen
                if (star.y < -10) {
                    star.y = canvas.height + 10;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationId = requestAnimationFrame(animate);
        }

        resize();
        animate();
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}
