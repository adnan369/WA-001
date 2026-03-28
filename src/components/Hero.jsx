"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="px-4 py-1.5 rounded-full bg-detroitRed/10 text-detroitRed text-xs font-black tracking-widest uppercase mb-6 inline-block">
          Welcome to the Future
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-8">
          Meet Any <br />
          <span className="text-transparent bg-clip-text bg-detroit-gradient">Client. Faster.</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-slate-500 font-medium text-lg mb-10 px-4">
          The ultimate Detroit-grade meetup platform built for ultra-high dynamics and real-time connectivity.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
            Book a Meetup
          </button>
          <button className="detroit-glass border-slate-200 px-10 py-4 rounded-2xl font-black hover:bg-white transition-colors">
            Explore Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
