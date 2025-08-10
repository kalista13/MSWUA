import { motion } from "framer-motion";
import { container } from "./animations";

export type FadeTextDivProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeTextDiv({ children, className }: FadeTextDivProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
