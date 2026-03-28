"use client";
import { motion } from "framer-motion";
import { User, Menu, Zap, LayoutGrid } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-4 z-50 mx-auto max-w-5xl px-4"
    >
      <div className="detroit-glass rounded-2xl px-6 py-4 flex items-center justify-between border-white/20">
        {/* Detroit Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-detroit-gradient rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">DETROIT</span>
        </div>

        {/* Navigation - Outlined Icons */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-detroitRed transition-colors">
            <LayoutGrid size={18} strokeWidth={2.5} /> DISCOVER
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-detroitOrange transition-colors">
            <User size={18} strokeWidth={2.5} /> MEETUPS
          </a>
        </div>

        {/* Join Button */}
        <button className="bg-detroit-gradient text-white px-5 py-2.5 rounded-xl font-black text-sm hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all">
          GET STARTED
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="text-slate-900" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
