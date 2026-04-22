import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ConfettiExplosion } from '../effects/ConfettiExplosion';
import { FlowerRain } from '../effects/FlowerRain';

type EffectType = 'confetti' | 'flowers' | null;

interface EffectsContextType {
  trigger: (effect: EffectType) => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export const EffectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeEffect, setActiveEffect] = useState<EffectType>(null);
  const [effectKey, setEffectKey] = useState<number>(0);

  const trigger = useCallback((effect: EffectType) => {
    setActiveEffect(effect);
    setEffectKey(prev => prev + 1); // allow triggering the same effect multiple times

    // Auto-clear after some time so it can be re-triggered safely, though key reset is enough
    if (effect) {
      setTimeout(() => setActiveEffect(null), 8000);
    }
  }, []);

  return (
    <EffectsContext.Provider value={{ trigger }}>
      {children}
      {activeEffect === 'confetti' && <ConfettiExplosion key={effectKey} />}
      {activeEffect === 'flowers' && <FlowerRain key={effectKey} />}
    </EffectsContext.Provider>
  );
};

export const useEffectTrigger = () => {
  const context = useContext(EffectsContext);
  if (context === undefined) {
    throw new Error('useEffectTrigger must be used within an EffectsProvider');
  }
  return context;
};
