import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "BulletChain",
    description: "Blockchain Russian Roulette Game",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className} min-h-screen bg-black text-white flex flex-col`}
        >
        <Providers>
            <Header />
            <main className="flex-1 py-10">
                {children}
            </main>
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <Navbar />
            </div>
        </Providers>
        </body>
        </html>
    );
}