import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; 
import type { Container, Engine } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
  theme?: 'dark' | 'light';
  particleColor?: string;
  linksColor?: string;
}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  theme = 'dark',
  particleColor,
  linksColor,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  const color = particleColor || (theme === 'dark' ? '#ffffff' : '#000000');
  const linkCol = linksColor || (theme === 'dark' ? '#ffffff' : '#000000');
  const bgColor = theme === 'dark' ? '#0f172a' : '#f8fafc'; // slate-900 / slate-50

  if (!init) {
    return null;
  }

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Particles
        id="tsparticles-bg"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: bgColor,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: color,
            },
            links: {
              color: linkCol,
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
