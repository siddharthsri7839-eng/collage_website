import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({ value, suffix = '', duration = 1200, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed) return;
        setHasPlayed(true);

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, hasPlayed, value]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}