import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "University Portal",
  description: "Manage your university life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f5dc] text-gray-900 min-h-screen antialiased`}>
        {/* - bg-[#f5f5dc]: Sets the beige background globally.
            - text-gray-900: A very dark gray (almost black, but softer).
            - min-h-screen: Ensures the background covers the full height even if content is short.
            - antialiased: Makes the font look smoother and more professional.
        */}
        
        {/* Optional: A simple header to make the layout look finished */}
        <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
           <div className="font-bold text-xl tracking-tight">UniSystem</div>
        </header>

        <main className="flex flex-col items-center justify-center p-6">
          {children}
        </main>

      </body>
    </html>
  );
}