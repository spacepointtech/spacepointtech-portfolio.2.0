import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed lg:top-28   top-32 left-0 right-0 h-1 md:h-2 bg-fadeMainTheme backdrop-blur-lg"
      style={{
        scaleX: scaleX,
      }}
    />
  );
};

export default ScrollProgress;
