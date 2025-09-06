import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter = ({
  end,
  duration = 2,
  suffix = "",
  className = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};
