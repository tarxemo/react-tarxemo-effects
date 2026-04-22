import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  colors?: string[];
  duration?: number;
  direction?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  children?: React.ReactNode;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors = ['#ff7eb3', '#ff758c', '#ff6a88'],
  duration = 10,
  children
}) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          zIndex: -1,
          background: `linear-gradient(-45deg, ${colors.join(', ')})`,
          backgroundSize: '400% 400%',
        }}
      />
      {children}
    </div>
  );
};
