"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // God Mode Credentials
    if (username === "adnanibrm" && pin === "4626") {
      localStorage.setItem("detroit_god_mode", "active");
      router.push("/admin/dashboard");
    } else {
      setError("INVALID ACCESS KEY OR USERNAME");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <GlassCard className="max-w-md w-full border-detroitRed/20 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-detroitRed/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="text-detroitRed" size={32} />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter">DETROIT GOD MODE</h1>
          <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase mt-2">Authorization Required</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl font-bold focus:outline-none focus:border-detroitRed transition-all"
              placeholder="Enter Identity"
              required
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Security PIN</label>
            <input 
              type="password" 
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl font-black tracking-[1em] text-center focus:outline-none focus:border-detroitOrange transition-all"
              placeholder="****"
              required
            />
          </div>
          
          {error && <p className="text-detroitRed text-[10px] font-black text-center">{error}</p>}

          <button type="submit" className="w-full bg-slate-900 text-white p-4 rounded-xl font-black hover:bg-detroitRed transition-all flex items-center justify-center gap-2">
            <ShieldCheck size={20} /> UNLOCK SYSTEM
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
