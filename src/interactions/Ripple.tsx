import React, { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleProps {
  color?: string;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Ripple: React.FC<RippleProps> = ({
  color = 'rgba(255, 255, 255, 0.4)',
  duration = 0.6,
  className = '',
  children,
  onClick,
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, duration * 1000);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', display: 'inline-block' }}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            style={{
              position: 'absolute',
              backgroundColor: color,
              borderRadius: '50%',
              width: 100,
              height: 100,
              marginTop: -50,
              marginLeft: -50,
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
