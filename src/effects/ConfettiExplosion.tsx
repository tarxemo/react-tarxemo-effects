import React, { useEffect } from 'react';
import ReactCanvasConfetti from 'canvas-confetti';

interface ConfettiExplosionProps {
  particleCount?: number;
  spread?: number;
  origin?: { y: number; x: number };
  colors?: string[];
  duration?: number;
}

export const ConfettiExplosion: React.FC<ConfettiExplosionProps> = ({
  particleCount = 150,
  spread = 70,
  origin = { y: 0.6, x: 0.5 },
  colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
  duration = 3000,
}) => {
  useEffect(() => {
    const end = Date.now() + duration;

    const frame = () => {
      ReactCanvasConfetti({
        particleCount: Math.floor(particleCount / 30),
        angle: 60,
        spread: spread,
        origin: { x: 0, y: origin.y },
        colors: colors
      });
      ReactCanvasConfetti({
        particleCount: Math.floor(particleCount / 30),
        angle: 120,
        spread: spread,
        origin: { x: 1, y: origin.y },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [particleCount, spread, origin.x, origin.y, duration, colors]);

  return null; // Canvas confetti attaches directly to the body/document
};
