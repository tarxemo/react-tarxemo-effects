import React from 'react';
import { motion } from 'framer-motion';

interface GlowWrapperProps {
  children: React.ReactNode;
  glowColor?: string;
  borderRadius?: string | number;
  blur?: number;
  className?: string;
}

export const GlowWrapper: React.FC<GlowWrapperProps> = ({
  children,
  glowColor = '#3b82f6', // tailwind blue-500
  borderRadius = '8px',
  blur = 20,
  className = '',
}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: glowColor,
          borderRadius: borderRadius,
          filter: `blur(${blur}px)`,
          zIndex: -1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};
