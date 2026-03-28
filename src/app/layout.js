import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "DETROIT | High-Dynamics Meetup",
  description: "Advanced Client-to-Customer Meetup WebApp with God Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="maths-grid antialiased selection:bg-detroitRed selection:text-white">
        {/* Background Layer for Dynamic Customization */}
        <ThemeProvider>
          {/* Subtle Background Glows */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-detroitRed/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-detroitOrange/5 rounded-full blur-[140px]" />
          </div>

          {/* Main App Content */}
          <main className="relative z-10 min-h-screen pt-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
