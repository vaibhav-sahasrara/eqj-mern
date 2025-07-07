// src/components/Preloader.jsx
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-primaryBlue flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      <motion.img
        src="/eqj.png"
        alt="Logo"
        className="w-48 h-48 object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <p className="mt-6 text-white font-semibold text-xl">Loading...</p>
    </motion.div>
  );
};

export default Preloader;
