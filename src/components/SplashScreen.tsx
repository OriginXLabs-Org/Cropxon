import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
              className="absolute h-40 w-40 rounded-full border border-primary/30"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
              className="absolute h-40 w-40 rounded-full border border-primary/20"
            />
          </div>
          <div className="gradient-radial-emerald absolute inset-0" />

          {/* Logo with circular mask */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0.3] }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <img
                src="/logo1.png"
                alt="CROPXON"
                className="relative h-28 w-28 rounded-full object-cover border-2 border-primary/40 shadow-lg md:h-36 md:w-36"
              />
            </div>
          </motion.div>

          <motion.h1
            className="relative z-10 mt-6 text-4xl font-bold tracking-wider text-gradient-primary font-display md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            CROPXON
          </motion.h1>
          <motion.p
            className="relative z-10 mt-3 text-sm tracking-widest text-muted-foreground uppercase"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            AgTech Division of OriginX Labs Pvt. Ltd.
          </motion.p>
          <motion.p
            className="relative z-10 mt-2 text-xs text-accent tracking-wide font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            🌱 World's First Soil to Soul Ecosystem
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="relative z-10 mt-10 h-1 w-40 overflow-hidden rounded-full bg-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-glow"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.6, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
