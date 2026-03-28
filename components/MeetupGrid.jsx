"use client";
import GlassCard from "./GlassCard";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

const MEETUPS = [
  { id: 1, title: "Tech Strategy Meet", client: "Alex Rivera", time: "10:30 AM", type: "Urgent" },
  { id: 2, title: "UI/UX Review", client: "Sarah Chen", time: "02:00 PM", type: "Standard" },
  { id: 3, title: "Detroit Project Sync", client: "Adnan", time: "05:00 PM", type: "Priority" },
];

const MeetupGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-4">
      {MEETUPS.map((item) => (
        <GlassCard key={item.id} className="group cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-detroitRed/10 rounded-xl text-detroitRed">
              <Calendar size={20} strokeWidth={2.5} />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border ${
              item.type === 'Urgent' ? 'border-detroitRed text-detroitRed' : 'border-slate-200 text-slate-400'
            }`}>
              {item.type}
            </span>
          </div>
          
          <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-detroitRed transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-500 font-bold text-sm mb-6 flex items-center gap-2">
            <MapPin size={14} /> {item.client}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="flex items-center gap-1.5 text-xs font-black text-slate-400">
              <Clock size={14} /> {item.time}
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-detroit-gradient group-hover:border-none transition-all">
              <ArrowUpRight size={16} className="group-hover:text-white" />
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

export default MeetupGrid;
