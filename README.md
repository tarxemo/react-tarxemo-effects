# React TarXemo Effects

A production-ready React library focused on UI delight effects (animations, visual enhancements, micro-interactions) built by TarXemo.

## 📦 Installation

```bash
npm install react-tarxemo-effects framer-motion react react-dom
```
*(Framer Motion is a peer dependency for high-performance animations)*

## 🚀 Quick Start & Trigger System

The most powerful feature of this library is the programmatic effect trigger system. Wrap your application with the `<EffectsProvider>` and use `useEffectTrigger` anywhere to fire global celebration effects!

```tsx
import { EffectsProvider, useEffectTrigger } from 'react-tarxemo-effects';

const App = () => (
  <EffectsProvider>
    <MyComponent />
  </EffectsProvider>
);

const MyComponent = () => {
  const { trigger } = useEffectTrigger();

  return (
    <button onClick={() => trigger('confetti')}>
      Fire Confetti! 🎉
    </button>
  );
};
```

## ✨ Available Effects

### 1. Celebration Effects
Global effects that can be triggered via the `useEffectTrigger` hook or rendered directly.

```tsx
import { ConfettiExplosion, FlowerRain } from 'react-tarxemo-effects';

// Use directly in your tree
<ConfettiExplosion particleCount={200} duration={4000} />
<FlowerRain count={40} />
```

### 2. Background Effects
Beautiful dynamic backgrounds for your sections or pages.

```tsx
import { ParticlesBackground, GradientBackground } from 'react-tarxemo-effects';

<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
  <ParticlesBackground theme="dark" />
  {/* Your content */}
</div>

<GradientBackground colors={['#ff7eb3', '#ff758c', '#ff6a88']} duration={15}>
  <h1>Awesome Content</h1>
</GradientBackground>
```

### 3. Interaction Effects
Micro-interactions for elements like buttons and cards.

```tsx
import { Ripple, GlowWrapper } from 'react-tarxemo-effects';

<Ripple color="rgba(255, 255, 255, 0.5)">
  <button style={{ padding: '10px 20px', background: '#3b82f6', color: 'white' }}>
    Click Me
  </button>
</Ripple>

<GlowWrapper glowColor="#8b5cf6" blur={25}>
  <div className="card">Hover me for glow</div>
</GlowWrapper>
```

### 4. Page Transitions
Smooth transitions between routes.

```tsx
import { PageTransition } from 'react-tarxemo-effects';

// Assuming you use react-router
<PageTransition locationKey={location.pathname} type="fade">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</PageTransition>
```
*(Types available: `'fade' | 'slide' | 'scale'`)*

## 🛠 Tech Stack
- React & TypeScript
- Vite Library Mode
- Framer Motion
- tsParticles
- canvas-confetti

## 📜 License
MIT License - Created by TarXemo.
# react-tarxemo-effects
