"use client";

import { Home, Trophy, User, Target, Crosshair, Skull } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { label: "Den", icon: Home, href: "/", themeIcon: "🏠" },
        { label: "Survivors", icon: Trophy, href: "/leaderboards", themeIcon: "💀" },
        { label: "Player", icon: User, href: "/profile", themeIcon: "🎯" },
    ];

    const activeIndex = navItems.findIndex(item => item.href === pathname);

    return (
        <nav className="relative border-t-2 border-red-900/50 shadow-2xl flex justify-around py-4 bg-gradient-to-r from-black via-gray-900 to-red-950 text-white overflow-hidden">
            {/* Background atmospheric effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>

            {/* Bullet holes decoration */}
            <div className="absolute top-1 left-4 w-1 h-1 bg-red-800/40 rounded-full"></div>
            <div className="absolute bottom-2 right-6 w-1 h-1 bg-red-800/40 rounded-full"></div>
            <div className="absolute top-2 right-1/3 w-1 h-1 bg-red-800/40 rounded-full"></div>

            {navItems.map(({ label, icon: Icon, href, themeIcon }, index) => {
                const isActive = index === activeIndex;
                const isNeighbor = index === activeIndex - 1 || index === activeIndex + 1;

                return (
                    <button
                        key={label}
                        onClick={() => router.push(href)}
                        className={`relative flex flex-col items-center text-xs font-bold transition-all duration-300 transform hover:scale-105 z-10 ${
                            isActive
                                ? "text-red-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                                : "text-red-200 hover:text-red-300"
                        } ${
                            isNeighbor
                                ? "drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]"
                                : ""
                        }`}
                    >
                        {/* Active indicator background */}
                        {isActive && (
                            <div className="absolute -inset-3 bg-gradient-to-b from-red-900/30 to-red-800/10 rounded-xl border border-red-600/40 backdrop-blur-sm"></div>
                        )}

                        {/* Icon container with revolver cylinder design */}
                        <div className={`relative w-8 h-8 mb-2 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isActive
                                ? "border-red-400 bg-red-900/30 shadow-lg shadow-red-500/40"
                                : "border-red-800/50 bg-gray-900/50"
                        }`}>
                            {/* Revolver cylinder pattern - only show when not active */}
                            {!isActive && (
                                <div className="absolute inset-1 rounded-full border border-current opacity-30"></div>
                            )}

                            {/* Always show the icon - more visible when active */}
                            <Icon className={`w-5 h-5 z-10 relative ${isActive ? 'text-white' : 'text-current'}`} />

                            {/* Bullet indicator for active */}
                            {isActive && (
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-red-300 shadow-sm animate-pulse"></div>
                            )}
                        </div>

                        {/* Label with danger styling */}
                        <span className={`uppercase tracking-wider ${
                            isActive ? "font-extrabold" : "font-semibold"
                        }`}>
                            {label}
                        </span>

                        {/* Active underline */}
                        {isActive && (
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full shadow-sm shadow-red-500/50"></div>
                        )}
                    </button>
                );
            })}

            {/* Danger tape effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent"></div>
        </nav>
    );
}