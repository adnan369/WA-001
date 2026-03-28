"use client";
import { motion } from "framer-motion";

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className={`
        detroit-glass 
        rounded-2xl 
        p-8 
        relative 
        overflow-hidden 
        transition-all 
        duration-500
        hover:border-detroitOrange/40
        group
        ${className}
      `}
    >
      {/* Top Accent Line - Detroit Red-Orange Gradient */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-detroit-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtle Inner Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
