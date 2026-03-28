import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetupGrid from "@/components/MeetupGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto">
        <div className="px-4 mb-4">
          <h2 className="text-xs font-black text-detroitOrange tracking-[0.2em] uppercase">
            Upcoming Engagements
          </h2>
        </div>
        <MeetupGrid />
      </div>
      <Footer />
    </div>
  );
}
