"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Settings, Users, Database, ArrowLeft, Paintbrush } from "lucide-react";
import GlassCard from "@/components/GlassCard";

export default function GodMode() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("ui");

  useEffect(() => {
    const auth = localStorage.getItem("detroit_god_mode");
    if (auth !== "active") router.push("/admin/login");
  }, [router]);

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">SYSTEM CONTROL</h1>
          <p className="text-detroitOrange font-black text-xs tracking-widest uppercase mt-1">Status: God Mode Active</p>
        </div>
        <button onClick={() => router.push("/")} className="p-3 bg-white border border-slate-200 rounded-xl hover:text-detroitRed transition-all">
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Controls */}
        <div className="space-y-4">
          <button onClick={() => setActiveTab("ui")} className={`w-full flex items-center gap-3 p-4 rounded-xl font-black text-sm transition-all ${activeTab === "ui" ? 'bg-detroit-gradient text-white shadow-lg' : 'bg-white text-slate-400 hover:text-slate-900'}`}>
            <Paintbrush size={18} /> UI CUSTOMIZER
          </button>
          <button onClick={() => setActiveTab("users")} className={`w-full flex items-center gap-3 p-4 rounded-xl font-black text-sm transition-all ${activeTab === "users" ? 'bg-detroit-gradient text-white' : 'bg-white text-slate-400'}`}>
            <Users size={18} /> USER MANAGEMENT
          </button>
          <button onClick={() => setActiveTab("db")} className={`w-full flex items-center gap-3 p-4 rounded-xl font-black text-sm transition-all ${activeTab === "db" ? 'bg-detroit-gradient text-white' : 'bg-white text-slate-400'}`}>
            <Database size={18} /> DATABASE SYNC
          </button>
        </div>

        {/* Main Editor Area */}
        <div className="md:col-span-3">
          <GlassCard className="border-slate-200 h-full min-h-[500px]">
            {activeTab === "ui" && (
              <div className="space-y-8">
                <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                  <Settings className="text-detroitOrange" size={24} /> UI Parameters
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Grid Line Opacity (0.2)</label>
                    <input type="range" className="w-full accent-detroitRed" />
                    
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Card Blur Intensity (20%)</label>
                    <input type="range" className="w-full accent-detroitOrange" />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Primary Theme Color</label>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-detroitRed border-4 border-white shadow-xl cursor-pointer" />
                      <div className="w-10 h-10 rounded-full bg-detroitOrange border-4 border-white shadow-xl cursor-pointer" />
                      <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-xl cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-100 mt-10">
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:scale-105 transition-all">
                    SAVE SYSTEM CHANGES
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === "users" && <div className="text-center py-20 font-black text-slate-300">USER ENGINE LOADING...</div>}
            {activeTab === "db" && <div className="text-center py-20 font-black text-slate-300">DATABASE HANDSHAKE PENDING...</div>}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
