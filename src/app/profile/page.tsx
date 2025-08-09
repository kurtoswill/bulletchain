import React from 'react';
import { Trophy, Target, Skull, Award, TrendingUp, Clock, Zap, Shield } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, subtext, danger = false }) => (
    <div className={`bg-black/80 backdrop-blur-sm border-2 ${danger ? 'border-red-600/50' : 'border-red-900/50'} rounded-2xl p-4 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-transparent rounded-2xl"></div>
        <div className="relative flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl border-2 ${danger ? 'border-red-500/50 bg-red-900/50' : 'border-red-800/50 bg-gray-900/50'} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${danger ? 'text-red-400' : 'text-red-300'}`} />
            </div>
            <div className="flex-1">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</p>
                <p className={`text-2xl font-bold ${danger ? 'text-red-400' : 'text-red-200'}`}>{value}</p>
                {subtext && <p className="text-gray-500 text-xs">{subtext}</p>}
            </div>
        </div>
        <div className="absolute bottom-1 right-2 w-1 h-1 bg-red-800/30 rounded-full"></div>
    </div>
);

const AchievementBadge = ({ emoji, title, description, unlocked = false }) => (
    <div className={`bg-black/60 backdrop-blur-sm border-2 ${unlocked ? 'border-yellow-600/50' : 'border-red-900/30'} rounded-xl p-3 relative overflow-hidden`}>
        <div className={`absolute inset-0 ${unlocked ? 'bg-gradient-to-br from-yellow-900/20 to-transparent' : 'bg-gradient-to-br from-gray-900/20 to-transparent'} rounded-xl`}></div>
        <div className="relative text-center">
            <div className={`text-2xl mb-2 ${unlocked ? 'filter-none' : 'grayscale opacity-50'}`}>{emoji}</div>
            <p className={`text-xs font-bold mb-1 ${unlocked ? 'text-yellow-400' : 'text-gray-500'}`}>{title}</p>
            <p className={`text-xs ${unlocked ? 'text-yellow-200' : 'text-gray-600'}`}>{description}</p>
        </div>
    </div>
);

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 relative overflow-hidden pb-24">
            {/* Atmospheric effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_70%)]"></div>
            <div className="absolute top-20 right-8 w-40 h-40 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-6 w-32 h-32 bg-red-800/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

            {/* Bullet holes */}
            <div className="absolute top-24 left-8 w-2 h-2 bg-red-800/30 rounded-full"></div>
            <div className="absolute top-48 right-12 w-1 h-1 bg-red-700/40 rounded-full"></div>
            <div className="absolute bottom-32 left-12 w-1 h-1 bg-red-800/25 rounded-full"></div>

            <div className="relative px-6 pt-16">
                {/* Header Section */}
                <div className="text-center mb-8">
                    {/* Profile Avatar */}
                    <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-900 to-red-800 rounded-2xl border-4 border-red-500/50 flex items-center justify-center shadow-2xl shadow-red-900/50">
                            <div className="w-16 h-16 border-2 border-red-400/30 rounded-xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-red-400/30 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full border-2 border-red-400 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">46</span>
                        </div>
                    </div>

                    {/* Player Name & Status */}
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                        SURVIVOR #46
                    </h1>
                    <p className="text-red-200 text-sm font-medium mb-2">YourName</p>
                    <div className="inline-block px-4 py-1 bg-green-900/50 border border-green-600/50 rounded-full backdrop-blur-sm">
                        <span className="text-green-300 text-xs font-bold uppercase tracking-wider">
                            🟢 ALIVE & DANGEROUS
                        </span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8">
                    <h2 className="text-red-400 text-lg font-bold uppercase tracking-wider mb-4 text-center">
                        🎯 Combat Statistics
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <StatCard
                            icon={Trophy}
                            label="Games Won"
                            value="12"
                            subtext="Victory rate: 24%"
                            danger={true}
                        />
                        <StatCard
                            icon={Skull}
                            label="Close Calls"
                            value="38"
                            subtext="Survived bullets"
                            danger={true}
                        />
                        <StatCard
                            icon={Target}
                            label="Accuracy"
                            value="89%"
                            subtext="Trigger precision"
                        />
                        <StatCard
                            icon={TrendingUp}
                            label="Streak"
                            value="5"
                            subtext="Current survival"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <StatCard
                            icon={Clock}
                            label="Total Playtime"
                            value="24h 32m"
                            subtext="Time spent on the edge"
                        />
                    </div>
                </div>

                {/* Earnings Section */}
                <div className="mb-8">
                    <h2 className="text-red-400 text-lg font-bold uppercase tracking-wider mb-4 text-center">
                        💰 Blood Money
                    </h2>
                    <div className="bg-black/80 backdrop-blur-sm border-2 border-red-900/50 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-900/20 rounded-2xl"></div>
                        <div className="relative text-center">
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2">Total Earnings</p>
                            <p className="text-4xl font-bold text-red-300 mb-2">0.5 ETH</p>
                            <p className="text-red-200 text-sm">≈ $1,234.56 USD</p>
                            <div className="flex justify-center mt-4 gap-1">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                    <h2 className="text-red-400 text-lg font-bold uppercase tracking-wider mb-4 text-center">
                        🏆 Death Defying Acts
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        <AchievementBadge
                            emoji="💀"
                            title="First Blood"
                            description="Survive your first game"
                            unlocked={true}
                        />
                        <AchievementBadge
                            emoji="🎯"
                            title="Marksman"
                            description="90%+ accuracy"
                            unlocked={true}
                        />
                        <AchievementBadge
                            emoji="🔥"
                            title="Hot Streak"
                            description="Win 5 in a row"
                            unlocked={true}
                        />
                        <AchievementBadge
                            emoji="👑"
                            title="King of Death"
                            description="Reach #1 leaderboard"
                            unlocked={false}
                        />
                        <AchievementBadge
                            emoji="💎"
                            title="High Roller"
                            description="Earn 1 ETH total"
                            unlocked={false}
                        />
                        <AchievementBadge
                            emoji="⚡"
                            title="Lightning Fast"
                            description="Win in under 30s"
                            unlocked={false}
                        />
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-950/50 backdrop-blur-sm border-2 border-red-600/50 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-800/20 rounded-2xl"></div>
                    <div className="relative text-center">
                        <h3 className="text-red-300 text-lg font-bold uppercase tracking-wider mb-2">
                            ⚠️ Danger Zone
                        </h3>
                        <p className="text-red-200 text-sm mb-4">
                            High-stakes games with everything on the line
                        </p>
                        <button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl border border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
                            ENTER THE CHAMBER 🎯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;