"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 pb-10 px-6 border-t border-slate-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex gap-8 mb-8 mt-10">
          <a href="#" className="text-xs font-black text-slate-400 hover:text-detroitRed transition-colors">PRIVACY</a>
          <a href="#" className="text-xs font-black text-slate-400 hover:text-detroitRed transition-colors">TERMS</a>
          <a href="#" className="text-xs font-black text-slate-400 hover:text-detroitRed transition-colors">SUPPORT</a>
        </div>
        
        <p className="text-xs font-bold text-slate-300 mb-6">
          © 2026 DETROIT INTERACTIVE. ALL RIGHTS RESERVED.
        </p>

        {/* The Secret Admin Access Point */}
        <div className="pt-4 border-t border-slate-50 w-full flex justify-center">
          <Link 
            href="/admin/login" 
            className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-200 hover:text-detroitOrange transition-all duration-500 hover:tracking-[0.5em]"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
