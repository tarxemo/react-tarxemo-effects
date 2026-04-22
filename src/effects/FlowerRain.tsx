import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FlowerRainProps {
  count?: number;
  duration?: number;
  emojis?: string[];
}

export const FlowerRain: React.FC<FlowerRainProps> = ({
  count = 30,
  duration = 5,
  emojis = ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹']
}) => {
  const [flowers, setFlowers] = useState<{ id: number; emoji: string; x: number; delay: number; scale: number; rotation: number }[]>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: count }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100, // percentage x position
      delay: Math.random() * duration, // start at different times
      scale: 0.5 + Math.random() * 1, // varied sizes
      rotation: Math.random() * 360,
    }));
    setFlowers(newFlowers);
  }, [count, duration, emojis]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{ y: -50, x: `${flower.x}vw`, opacity: 0, rotate: flower.rotation, scale: flower.scale }}
          animate={{
            y: '100vh',
            x: `${flower.x + (Math.random() * 10 - 5)}vw`, // slight horizontal drift
            opacity: [0, 1, 1, 0],
            rotate: flower.rotation + 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: duration + Math.random() * 2,
            delay: flower.delay,
            ease: 'linear',
          }}
          style={{ position: 'absolute', fontSize: '24px' }}
        >
          {flower.emoji}
        </motion.div>
      ))}
    </div>
  );
};
