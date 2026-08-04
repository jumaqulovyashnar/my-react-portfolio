export default function MagicRings() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-accent-primary/20"
          style={{
            animation: `magicRing ${3 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `scale(${0.6 + i * 0.15})`,
          }}
        />
      ))}
      <style>{`
        @keyframes magicRing {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
