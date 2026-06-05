import { motion } from "framer-motion";

function GradientText({ text, className, animated = true }: { text: string; className?: string; animated?: boolean }) {
  const weights = [300, 350, 400, 500, 600, 700];
  const chars = text.replace(/ /g, "\u00A0").split("");

  return (
    <span className={className}>
      {chars.map((char, i) => {
        const progress = i / (chars.length - 1);
        const weightIndex = Math.round(progress * (weights.length - 1));
        return animated ? (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
            style={{ fontWeight: weights[weightIndex], display: "inline-block" }}
          >
            {char}
          </motion.span>
        ) : (
          <span key={i} style={{ fontWeight: weights[weightIndex], display: "inline-block" }}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default GradientText;