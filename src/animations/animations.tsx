import type { Variants } from "framer-motion";

export const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 }}
}

export const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    }
  }
};

export const landingContainer = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.18, 
      delayChildren: 0,
    }
  }
};

export const landingFade : Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.99 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.45, ease: "easeOut" } }
};

export const fade : Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.99 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.45, ease: "easeOut" } }
};

export const lineMovement = {
    initial: {scaleY: 0},
    whileInView: {scaleY: 1},
    transition: {duration: 0.6},
    viewport: {once: true, amount: 0.6, margin: "-10% 0px -10% 0px"},
}

export const fadeUp = {
    initial: { opacity: 0, y: 100},
    whileInView: {opacity: 1, y: 0},
    transition: { duration: 0.8},
    viewport: {once: true, amount: 0.6},
}

export const fadeDown : Variants = {
  hidden: { opacity: 0, y: -100, scale: 0.99 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.45, ease: "easeOut" } }
};

export const fadeBlurUp = {
  initial: {opacity: 0, y: 10, scale: 0.80, filter: "blur(6px)"},
  whileInView: {opacity: 1, y: 0, scale: 1, filter: "blur(0px)"},
  transition: {duration: 0.8},
  viewport: {once:true, amount: 0.6, margin: "-10% 0px -10% 0px"}
}