import React from 'react';

const LeaderboardEntry = ({ position, isCurrentUser = false, earnings, displayName, walletAddress }) => {
    const getPositionStyle = () => {
        if (position === 1) return 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/50';
        if (position === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 shadow-lg shadow-gray-400/50';
        if (position === 3) return 'bg-gradient-to-r from-amber-700 to-yellow-700 text-white shadow-lg shadow-amber-600/50';
        return 'bg-gray-800 text-red-400 border border-red-900/30';
    };

    const getBulletIcon = () => {
        if (position === 1) return '♔';
        if (position === 2) return '♕';
        if (position === 3) return '♖';
        return '●';
    };

    return (
        <div className={`relative overflow-hidden backdrop-blur-sm rounded-xl p-5 mx-4 mb-4 transition-all duration-300 hover:scale-[1.02] border-2 ${
            isCurrentUser
                ? 'bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white shadow-2xl border-red-500/50 shadow-red-500/30'
                : 'bg-black/90 border-red-900/30 shadow-lg shadow-red-900/20'
        }`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${getPositionStyle()}`}>
                        {getBulletIcon()}
                    </div>
                    <div className="relative">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${
                            isCurrentUser
                                ? 'bg-red-800/50 border-red-400/50'
                                : 'bg-gradient-to-br from-gray-800 to-gray-900 border-red-900/50'
                        }`}>
                            {/* Revolver cylinder design */}
                            <div className="w-8 h-8 rounded-full border-2 border-current opacity-60 flex items-center justify-center">
                                <div className="w-2 h-2 bg-current rounded-full"></div>
                            </div>
                        </div>
                        {position <= 3 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center border border-red-400">
                                <span className="text-xs text-white">💀</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className={`text-base font-bold ${isCurrentUser ? 'text-white' : 'text-red-200'}`}>
                                {displayName}
                            </span>
                            {isCurrentUser && (
                                <span className="px-3 py-1 bg-red-700/80 backdrop-blur-sm rounded-full text-xs font-medium border border-red-500/50 text-red-100">
                                    ALIVE
                                </span>
                            )}
                        </div>
                        <span className={`text-xs font-mono ${isCurrentUser ? 'text-red-200' : 'text-gray-500'}`}>
                            {walletAddress}
                        </span>
                    </div>
                </div>
                <div className="text-right">
                    <span className={`text-xl font-bold ${isCurrentUser ? 'text-white' : 'text-red-400'}`}>
                        {earnings}
                    </span>
                    <div className={`text-xs font-medium ${isCurrentUser ? 'text-red-200' : 'text-gray-500'}`}>
                        ETH
                    </div>
                </div>
            </div>

            {/* Danger stripes for current user */}
            {isCurrentUser && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-700/20 rounded-xl animate-pulse"></div>
            )}

            {/* Subtle bullet holes pattern */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-red-800/40 rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-red-800/40 rounded-full"></div>
        </div>
    );
};

const Page = () => {
    const topUsers = [
        { position: 1, earnings: '2.5', displayName: 'DeadShot', walletAddress: '0x1234...5678' },
        { position: 2, earnings: '1.8', displayName: 'Trigger', walletAddress: '0xabcd...efgh' },
        { position: 3, earnings: '1.2', displayName: 'Roulette', walletAddress: '0x9876...4321' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950">
            <div className="max-w-md mx-auto relative">
                {/* Atmospheric effects */}
                <div className="absolute top-20 left-8 w-40 h-40 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-60 right-6 w-32 h-32 bg-red-800/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-40 left-4 w-28 h-28 bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>

                {/* Header */}
                <div className="relative px-6 pt-16 pb-10 text-center">
                    <div className="inline-block">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                            LEADERBOARDS
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-red-300 mt-4 text-sm font-medium">
                        🎯 Only the bold survive • 6 chambers, 1 bullet
                    </p>
                    <div className="flex justify-center mt-3 gap-1">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                        ))}
                    </div>
                </div>

                {/* Column Headers */}
                <div className="flex justify-between px-8 mb-6">
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wider">🎲 SURVIVORS</span>
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wider">💰 WINNINGS</span>
                </div>

                {/* Top 3 Users */}
                <div className="mb-8">
                    {topUsers.map((user) => (
                        <LeaderboardEntry
                            key={user.position}
                            position={user.position}
                            earnings={user.earnings}
                            displayName={user.displayName}
                            walletAddress={user.walletAddress}
                        />
                    ))}
                </div>

                {/* Danger separator */}
                <div className="flex items-center justify-center mb-6 px-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                    <div className="px-4 py-2 bg-red-900/50 rounded-full border border-red-600/50">
                        <span className="text-xs text-red-300 font-bold">⚠️ YOUR FATE ⚠️</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                </div>

                {/* Current User Position */}
                <div className="mb-8">
                    <LeaderboardEntry
                        position={46}
                        isCurrentUser={true}
                        earnings="0.5"
                        displayName="YourName"
                        walletAddress="0xdef0...9abc"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;