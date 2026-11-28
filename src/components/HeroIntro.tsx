// HeroIntro.tsx
// Install first:  npm install gsap @gsap/react
import { Fragment, useRef, type CSSProperties } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroIntro.css';

gsap.registerPlugin(useGSAP);

const GLYPHS = '!<>-_\\/[]{}=+*^?#01';

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Random symbols "decode" into the real word
function scrambleTo(el: HTMLElement, word: string, duration = 0.9): gsap.core.Tween {
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1,
    duration,
    ease: 'none',
    onUpdate: () => {
      const done = Math.floor(state.p * word.length);
      let out = word.slice(0, done);
      for (let i = done; i < word.length; i++) {
        out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
    },
  });
}

export interface HeroIntroProps {
  /** The big animated name */
  name?: string;
  /** Small label above the name */
  role?: string;
  /** Tagline words shown before the cycling tech word */
  tagline?: string[];
  /** Words that decode one after another at the end of the tagline */
  techWords?: string[];
  /** Accent colour (any CSS colour) */
  accent?: string;
}

// Lets TypeScript accept the --accent CSS variable in the style prop
type AccentStyle = CSSProperties & { '--accent'?: string };

export default function HeroIntro({
  name = "Hi!, I'm Franco Gutierrez",
  role = 'Software Engineer',
  tagline = ['Engineering', 'innovation', 'with', 'cutting‑edge'],
  techWords = ['AI', 'Cloud', 'React', 'Angular', 'Node.js', 'Python', 'AWS'],
  accent = '#6ee7f0',
}: HeroIntroProps) {
  const root = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP(
    (_context, contextSafe) => {
      const techEl = techRef.current;
      if (!techEl || !contextSafe) return;

      // Respect users who turn animations off
      if (prefersReducedMotion()) {
        techEl.textContent = techWords[0];
        return;
      }

      const words = gsap.utils.toArray<HTMLElement>('.hero-name .w');
      let i = 0;
      let loop: ReturnType<typeof setInterval> | undefined;

      // Cycle the tech word every 2.6s
      const cycle = contextSafe(() => {
        i = (i + 1) % techWords.length;
        scrambleTo(techEl, techWords[i]);
      });

      // Blinking cursor
      gsap.to('.caret', { opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'steps(1)' });

      gsap
        .timeline()
        // label drops in
        .from('.kicker', { y: -12, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0)
        // name letters flip up (3D rotateX behind a mask)
        .set(words, { overflow: 'hidden' }, 0.3)
        .fromTo(
          '.hero-name .c',
          { yPercent: 110, rotationX: -90, opacity: 0 },
          { yPercent: 0, rotationX: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.045 },
          0.3
        )
        .set(words, { overflow: 'visible' }) // so the hover wave isn't clipped
        // tagline words: blur -> sharp
        .from(
          '.tagline .tw',
          { y: 24, opacity: 0, filter: 'blur(10px)', duration: 0.8, ease: 'power3.out', stagger: 0.09 },
          1.0
        )
        // first tech word decodes
        .add(scrambleTo(techEl, techWords[0], 1.1), 1.4)
        // accent line opens from the center
        .from('.hero-line', { scaleX: 0, opacity: 0, duration: 1.1, ease: 'expo.out' }, 1.6)
        .call(() => {
          loop = setInterval(cycle, 2600);
        });

      // Cleanup when the component unmounts
      return () => clearInterval(loop);
    },
    { scope: root }
  );

  // Hover wave that spreads out from the hovered letter
  const wave = contextSafe((index: number) => {
    const nameEl = root.current?.querySelector('.hero-name');
    if (!nameEl || prefersReducedMotion()) return;
    const base = getComputedStyle(nameEl).color;
    gsap.to('.hero-name .c', {
      keyframes: [
        { y: -18, scale: 1.08, color: accent, duration: 0.22, ease: 'power2.out' },
        { y: 0, scale: 1, color: base, duration: 0.5, ease: 'elastic.out(1, 0.4)' },
      ],
      stagger: { each: 0.035, from: index },
      overwrite: 'auto',
    });
  });

  // Split the name into words -> letters, keeping a global index for the wave
  let charIndex = 0;
  const nameWords = name.split(' ').map((word, w) => (
    <span className="w" key={w} aria-hidden="true">
      {[...word].map((ch) => {
        const idx = charIndex++;
        return (
          <span className="c" key={idx} onMouseEnter={() => wave(idx)}>
            {ch}
          </span>
        );
      })}
    </span>
  ));

  const style: AccentStyle = { '--accent': accent };

  return (
    <section className="hero" ref={root} style={style}>
      <h1 className="hero-name" aria-label={name}>
        {nameWords.flatMap((w, k) => (k ? [' ', w] : [w]))}
      </h1>
      <p className="kicker">
        <span className="dot" />
        {role}
      </p>
      <p className="tagline" aria-label={`${tagline.join(' ')} technology`}>
        {tagline.map((t) => (
          <Fragment key={t}>
            <span className="tw" aria-hidden="true">{t}</span>{' '}
          </Fragment>
        ))}
        <span className="tw" aria-hidden="true">
          <span className="tech" ref={techRef}>{techWords[0]}</span>
          <span className="caret">_</span>
        </span>
      </p>
      <span className="hero-line" />
    </section>
  );
}
