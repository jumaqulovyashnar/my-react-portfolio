export default function ShinyText({ text, className = '', as: Component = 'span' }) {
    return (
        <Component
            className={`relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent-glow to-text-primary bg-[length:200%_auto] animate-shimmer ${className}`}
            style={{
                backgroundImage: 'linear-gradient(90deg, #f1f5f9 0%, #e3b3ea 50%, #f1f5f9 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s linear infinite',
            }}
        >
            {text}
            <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
        </Component>
    );
}
