'use client';

import { motion, type Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  delay?: number;
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateIn({
  children,
  className,
  style,
  variants = fadeUp,
  delay = 0,
  duration = 0.6,
  as = 'div',
}: Props) {
  const Tag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <Tag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Stagger container — children animate in one after another */
export function StaggerContainer({
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Direct motion.div child for use inside StaggerContainer */
export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
