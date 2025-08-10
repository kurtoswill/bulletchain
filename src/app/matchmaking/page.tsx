"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Target, Clock, Zap, Trophy, Skull } from 'lucide-react';

export default function MatchmakingPage() {
    const [matchStatus, setMatchStatus] = useState('searching'); // searching, found, starting
    const [searchTime, setSearchTime] = useState(0);
    const [opponent, setOpponent] = useState(null);
    const [countdown, setCountdown] = useState(null);

    // Mock data
    const selectedBet = 0.05; // This would come from the previous page
    const gameMode = {
        label: "DEATH MATCH",
        subtitle: "Face other survivors",
        themeIcon: "💀"
    };

    useEffect(() => {
        // Search timer
        const searchTimer = setInterval(() => {
            setSearchTime(prev => prev + 1);
        }, 1000);

        // Simulate finding a match after 3-8 seconds
        const matchTimer = setTimeout(() => {
            setOpponent({
                name: "DeathDealer47",
                level: 23,
                winRate: 78,
                avatar: "🎭"
            });
            setMatchStatus('found');

            // Start countdown after finding match
            setTimeout(() => {
                setMatchStatus('starting');
                setCountdown(5);

                const countdownTimer = setInterval(() => {
                    setCountdown(prev => {
                        if (prev <= 1) {
                            clearInterval(countdownTimer);
                            // Navigate to game
                            setTimeout(() => {
                                window.location.href = '/game';
                            }, 1000);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }, 2000);

        }, Math.random() * 5000 + 3000);

        return () => {
            clearInterval(searchTimer);
            clearTimeout(matchTimer);
        };
    }, []);

    const handleBackClick = () => {
        window.location.href = '/bet';
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.1),transparent_70%)]"></div>
            <div className="absolute top-20 left-8 w-40 h-40 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-60 right-6 w-32 h-32 bg-red-800/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

            {/* Bullet holes */}
            <div className="absolute top-32 left-12 w-2 h-2 bg-red-800/30 rounded-full"></div>
            <div className="absolute bottom-40 right-8 w-1 h-1 bg-red-700/40 rounded-full"></div>

            {/* Header */}
            <div className="relative px-6 pt-8">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </button>

                    <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-blue-500/30">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-300 text-sm font-medium">Base L2</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
                <div className="w-full max-w-md">

                    {/* Match Status Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                                matchStatus === 'searching' ? 'border-yellow-500/50 bg-yellow-900/20 animate-pulse' :
                                    matchStatus === 'found' ? 'border-green-500/50 bg-green-900/20' :
                                        'border-red-500/50 bg-red-900/20'
                            }`}>
                                {matchStatus === 'searching' && <Target className="w-8 h-8 text-yellow-400 animate-spin" />}
                                {matchStatus === 'found' && <Users className="w-8 h-8 text-green-400" />}
                                {matchStatus === 'starting' && <Zap className="w-8 h-8 text-red-400 animate-pulse" />}
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2">
                            {matchStatus === 'searching' && 'FINDING OPPONENT'}
                            {matchStatus === 'found' && 'MATCH FOUND!'}
                            {matchStatus === 'starting' && 'GAME STARTING'}
                        </h1>

                        <p className="text-gray-400 text-sm">
                            {matchStatus === 'searching' && 'Searching for players with the same bet...'}
                            {matchStatus === 'found' && 'Opponent found! Preparing chamber...'}
                            {matchStatus === 'starting' && 'Get ready to face your fate...'}
                        </p>
                    </div>

                    {/* Search Status */}
                    {matchStatus === 'searching' && (
                        <div className="bg-black/60 border border-gray-700/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 font-bold text-lg">{formatTime(searchTime)}</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Bet Amount:</span>
                                        <span className="text-white font-bold">{selectedBet} ETH</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Game Mode:</span>
                                        <span className="text-red-400 font-bold">{gameMode.label}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Players Online:</span>
                                        <span className="text-green-400 font-bold">247</span>
                                    </div>
                                </div>

                                {/* Loading animation */}
                                <div className="flex justify-center mt-6">
                                    <div className="flex gap-1">
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-500' : 'bg-gray-600'} animate-pulse`}
                                                style={{ animationDelay: `${i * 200}ms` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Match Found */}
                    {(matchStatus === 'found' || matchStatus === 'starting') && opponent && (
                        <div className="bg-gradient-to-r from-green-900/20 via-black/60 to-red-900/20 border-2 border-green-600/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            <div className="text-center mb-6">
                                <div className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">
                                    OPPONENT FOUND
                                </div>
                            </div>

                            {/* VS Layout */}
                            <div className="flex items-center justify-between mb-6">
                                {/* You */}
                                <div className="text-center flex-1">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-full border-2 border-blue-500/50 flex items-center justify-center mx-auto mb-2">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <div className="text-blue-400 font-bold text-sm">YOU</div>
                                    <div className="text-white text-xs">{selectedBet} ETH</div>
                                </div>

                                {/* VS */}
                                <div className="flex flex-col items-center mx-4">
                                    <div className="text-red-400 font-bold text-xl mb-1">VS</div>
                                    <div className="w-8 h-8 border border-red-500/50 rounded-full flex items-center justify-center">
                                        <Skull className="w-4 h-4 text-red-400" />
                                    </div>
                                </div>

                                {/* Opponent */}
                                <div className="text-center flex-1">
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-full border-2 border-red-500/50 flex items-center justify-center mx-auto mb-2">
                                        <span className="text-2xl">{opponent.avatar}</span>
                                    </div>
                                    <div className="text-red-400 font-bold text-sm">{opponent.name}</div>
                                    <div className="text-white text-xs">{selectedBet} ETH</div>
                                </div>
                            </div>

                            {/* Opponent Stats */}
                            <div className="bg-black/30 rounded-xl p-4">
                                <div className="flex justify-between text-sm">
                                    <div className="text-center flex-1">
                                        <div className="text-gray-400">Stake</div>
                                        <div className="text-yellow-400 font-bold">{selectedBet} ETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Countdown */}
                    {matchStatus === 'starting' && countdown !== null && (
                        <div className="text-center mb-8">
                            <div className="w-24 h-24 border-4 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4 bg-red-900/20 backdrop-blur-sm">
                                <span className="text-4xl font-bold text-red-400">{countdown}</span>
                            </div>
                            <p className="text-red-300 font-semibold">Loading chamber...</p>
                        </div>
                    )}

                    {/* Warning */}
                    <div className="bg-red-900/20 border border-red-600/50 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <Skull className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-red-200">
                                <p className="font-semibold mb-1">Final Warning</p>
                                <p>Once the match starts, there's no going back. One chamber holds your fate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}