import { useEffect, useRef } from 'react';

export default function Clock() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 10;

    function drawClock() {
      ctx.clearRect(0, 0, size, size);

      // Clock face - dark glass
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(17, 17, 24, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.6)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Outer glow ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 4, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Hour tick marks
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6;
        const x1 = cx + (radius - 15) * Math.cos(angle);
        const y1 = cy + (radius - 15) * Math.sin(angle);
        const x2 = cx + (radius - 5) * Math.cos(angle);
        const y2 = cy + (radius - 5) * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(241, 245, 249, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Minute tick marks
      for (let i = 0; i < 60; i++) {
        if (i % 5 === 0) continue;
        const angle = (i * Math.PI) / 30;
        const x1 = cx + (radius - 8) * Math.cos(angle);
        const y1 = cy + (radius - 8) * Math.sin(angle);
        const x2 = cx + (radius - 4) * Math.cos(angle);
        const y2 = cy + (radius - 4) * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Hour numbers
      ctx.fillStyle = '#f1f5f9';
      ctx.font = `bold ${size * 0.06}px 'Space Grotesk', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 1; i <= 12; i++) {
        const angle = (i * Math.PI) / 6 - Math.PI / 2;
        const x = cx + (radius - 30) * Math.cos(angle);
        const y = cy + (radius - 30) * Math.sin(angle);
        ctx.fillText(i, x, y);
      }

      // Current time
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ms = now.getMilliseconds();

      // Smooth angles
      const secAngle = ((seconds + ms / 1000) * Math.PI) / 30 - Math.PI / 2;
      const minAngle = ((minutes + seconds / 60) * Math.PI) / 30 - Math.PI / 2;
      const hrAngle = ((hours + minutes / 60) * Math.PI) / 6 - Math.PI / 2;

      // Draw hand helper
      function drawHand(angle, length, width, color, glow = false) {
        ctx.save();
        if (glow) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + length * Math.cos(angle), cy + length * Math.sin(angle));
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      }

      // Hour hand
      drawHand(hrAngle, radius * 0.5, 5, '#f1f5f9');
      // Minute hand
      drawHand(minAngle, radius * 0.7, 3, '#f1f5f9');
      // Second hand (purple with glow)
      drawHand(secAngle, radius * 0.85, 1.5, '#a855f7', true);

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
      ctx.fillStyle = '#7c3aed';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();

      // Brand text
      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
      ctx.font = `${size * 0.04}px 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('JY', cx, cy + radius * 0.4);
    }

    const interval = setInterval(drawClock, 16); // ~60fps
    drawClock();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Purple glow behind clock */}
      <div className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full bg-purple-600/15 blur-3xl" />
      <canvas
        ref={canvasRef}
        width={360}
        height={360}
        className="relative z-10 rounded-full w-[260px] h-[260px] md:w-[360px] md:h-[360px]"
        style={{ filter: 'drop-shadow(0 0 25px rgba(124,58,237,0.5))' }}
      />
    </div>
  );
}
