import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  locationKey: string; // usually location.pathname in react-router
  type?: 'fade' | 'slide' | 'scale';
  duration?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  locationKey,
  type = 'fade',
  duration = 0.3
}) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial={variants[type].initial}
        animate={variants[type].animate}
        exit={variants[type].exit}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
