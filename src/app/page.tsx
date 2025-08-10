"use client";

import React from 'react';
import { Globe, Monitor, Target, Crosshair, Users, Bot } from "lucide-react";

export default function HomePage() {
    const gameModes = [
        {
            id: "online",
            label: "DEATH MATCH",
            icon: Users,
            subtitle: "Face other survivors",
            danger: "HIGH RISK",
            themeIcon: "💀"
        },
        {
            id: "computer",
            label: "VS MACHINE",
            icon: Bot,
            subtitle: "Challenge the AI",
            danger: "MEDIUM RISK",
            themeIcon: "🤖"
        },
        {
            id: "practice",
            label: "TRAINING",
            icon: Target,
            subtitle: "Perfect your aim",
            danger: "LOW RISK",
            themeIcon: "🎯"
        },
    ];

    const handleGameModeSelect = (gameMode) => {
        // Navigate to betting page
        window.location.href = '/bet';
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 relative overflow-hidden">
            {/* Atmospheric background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.1),transparent_70%)]"></div>
            <div className="absolute top-20 left-8 w-40 h-40 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-60 right-6 w-32 h-32 bg-red-800/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-4 w-28 h-28 bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>

            {/* Bullet holes scattered around */}
            <div className="absolute top-32 left-12 w-2 h-2 bg-red-800/30 rounded-full"></div>
            <div className="absolute top-48 right-16 w-1 h-1 bg-red-700/40 rounded-full"></div>
            <div className="absolute bottom-64 left-8 w-1 h-1 bg-red-800/20 rounded-full"></div>
            <div className="absolute bottom-32 right-12 w-2 h-2 bg-red-900/25 rounded-full"></div>

            {/* Header Section */}
            <div className="relative px-6 pt-16 pb-12 text-center">
                {/* Revolver cylinder decoration */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-16 h-16 border-2 border-red-500/50 rounded-full flex items-center justify-center bg-red-900/20 backdrop-blur-sm">
                        <div className="w-12 h-12 border border-red-400/30 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        {/* Cylinder chambers */}
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-2 h-2 rounded-full ${i === 2 ? 'bg-red-500' : 'bg-gray-600'}`}
                                style={{
                                    transform: `rotate(${i * 60}deg) translateY(-20px)`,
                                    transformOrigin: 'center 20px'
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Main title */}
                <div className="mb-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 bg-clip-text text-transparent mb-3 leading-tight">
                        SIX CHAMBERS.<br />ONE FATE.
                    </h1>
                    <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mx-auto w-32 mb-4"></div>
                </div>

                {/* Subtitle */}
                <p className="text-red-200 text-base font-medium mb-4">
                    Spin the cylinder. Pull the trigger. <br />
                    <span className="text-red-400 font-bold">Will fortune favor the bold?</span>
                </p>

                {/* Warning banner */}
                <div className="inline-block px-4 py-2 bg-red-900/50 border border-red-600/50 rounded-full backdrop-blur-sm">
                    <span className="text-red-300 text-xs font-bold uppercase tracking-wider">
                        ⚠️ Enter at your own risk ⚠️
                    </span>
                </div>
            </div>

            {/* Game Modes Section */}
            <div className="flex-1 px-6 pb-24">
                <div className="max-w-md mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-8">
                        <h2 className="text-red-400 text-lg font-bold uppercase tracking-wider mb-2">
                            Choose Your Fate
                        </h2>
                        <div className="flex justify-center gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
                            ))}
                        </div>
                    </div>

                    {/* Game mode cards */}
                    <div className="flex flex-col gap-4">
                        {gameModes.map((mode, index) => (
                            <div
                                key={mode.id}
                                onClick={() => handleGameModeSelect(mode)}
                                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/40"
                            >
                                <div className="bg-black/80 backdrop-blur-sm border-2 border-red-900/50 rounded-2xl p-6 relative overflow-hidden">
                                    {/* Background gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-900/20 rounded-2xl"></div>

                                    {/* Danger level indicator */}
                                    <div className="absolute top-3 right-3">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                            mode.danger === 'HIGH RISK' ? 'bg-red-600/80 text-white' :
                                                mode.danger === 'MEDIUM RISK' ? 'bg-orange-600/80 text-white' :
                                                    'bg-green-600/80 text-white'
                                        }`}>
                                            {mode.danger}
                                        </span>
                                    </div>

                                    <div className="relative flex items-center gap-4">
                                        {/* Icon container */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-2xl border-2 border-red-600/50 flex items-center justify-center relative group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                                            <mode.icon className="w-8 h-8 text-red-300 group-hover:text-red-200 transition-colors duration-300" />
                                            <div className="absolute -top-2 -right-2 text-lg">
                                                {mode.themeIcon}
                                            </div>
                                        </div>

                                        {/* Text content */}
                                        <div className="flex-1">
                                            <h3 className="text-red-200 text-xl font-bold mb-1 group-hover:text-white transition-colors duration-300">
                                                {mode.label}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-medium">
                                                {mode.subtitle}
                                            </p>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className="text-red-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300">
                                            <Crosshair className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Subtle bullet hole decoration */}
                                    <div className="absolute bottom-2 left-4 w-1 h-1 bg-red-800/30 rounded-full"></div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/0 to-red-600/0 group-hover:from-red-600/10 group-hover:via-red-500/5 group-hover:to-red-600/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}