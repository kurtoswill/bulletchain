"use client";

import React, { useState } from 'react';
import { ArrowLeft, Coins, DollarSign, AlertTriangle, Target, Users, Bot, Zap } from 'lucide-react';

export default function BettingPage() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [gameMode] = useState({
        id: "online",
        label: "DEATH MATCH",
        subtitle: "Face other survivors",
        danger: "HIGH RISK",
        themeIcon: "💀"
    });

    const presetAmounts = [
        { value: 0.001, label: "0.001 ETH", usd: "~$2.50" },
        { value: 0.01, label: "0.01 ETH", usd: "~$25" },
        { value: 0.05, label: "0.05 ETH", usd: "~$125" },
        { value: 0.1, label: "0.1 ETH", usd: "~$250" },
        { value: 0.5, label: "0.5 ETH", usd: "~$1,250" },
        { value: 1, label: "1.0 ETH", usd: "~$2,500" }
    ];

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const getCurrentBet = () => {
        return selectedAmount || parseFloat(customAmount) || 0;
    };

    const getPotentialWinnings = () => {
        const bet = getCurrentBet();
        return bet * 5.5; // 5.5x multiplier for winning
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.1),transparent_70%)]"></div>
            <div className="absolute top-20 left-8 w-40 h-40 bg-red-900/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-60 right-6 w-32 h-32 bg-red-800/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

            {/* Header */}
            <div className="relative px-6 pt-8">
                <div className="flex items-center justify-between mb-8">
                    <button className="flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </button>

                    <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-blue-500/30">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-300 text-sm font-medium">Base L2</span>
                    </div>
                </div>

                {/* Selected game mode display */}
                <div className="bg-black/60 border-2 border-red-900/50 rounded-2xl p-4 mb-8 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-xl border border-red-600/50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-red-300" />
                            </div>
                            <div>
                                <h3 className="text-red-200 font-bold text-lg">{gameMode.label}</h3>
                                <p className="text-gray-400 text-sm">{gameMode.subtitle}</p>
                            </div>
                        </div>
                        <div className="text-2xl">{gameMode.themeIcon}</div>
                    </div>
                </div>
            </div>

            {/* Betting Section */}
            <div className="px-6 pb-24">
                <div className="max-w-md mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/50 to-yellow-500/30 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
                                <Coins className="w-6 h-6 text-yellow-300" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">PLACE YOUR BET</h2>
                        <p className="text-gray-400 text-sm">How much are you willing to risk?</p>
                    </div>

                    {/* Preset Amounts */}
                    <div className="mb-6">
                        <h3 className="text-red-300 font-semibold mb-4 text-center">Quick Select</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {presetAmounts.map((amount) => (
                                <button
                                    key={amount.value}
                                    onClick={() => handleAmountSelect(amount.value)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                        selectedAmount === amount.value
                                            ? 'border-yellow-500 bg-yellow-900/20 shadow-lg shadow-yellow-500/20'
                                            : 'border-gray-700 bg-black/40 hover:border-yellow-600/50 hover:bg-yellow-900/10'
                                    }`}
                                >
                                    <div className="text-center">
                                        <div className={`font-bold text-lg ${
                                            selectedAmount === amount.value ? 'text-yellow-300' : 'text-gray-200'
                                        }`}>
                                            {amount.label}
                                        </div>
                                        <div className="text-xs text-gray-400">{amount.usd}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="mb-8">
                        <h3 className="text-red-300 font-semibold mb-4 text-center">Custom Amount</h3>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <DollarSign className="w-5 h-5" />
                            </div>
                            <input
                                type="number"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                placeholder="0.00"
                                step="0.001"
                                min="0"
                                className="w-full pl-12 pr-16 py-4 bg-black/60 border-2 border-gray-700 rounded-xl text-white text-lg font-medium focus:border-yellow-500 focus:outline-none transition-all duration-300"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                                ETH
                            </div>
                        </div>
                    </div>

                    {/* Bet Summary */}
                    {getCurrentBet() > 0 && (
                        <div className="bg-gradient-to-r from-red-900/20 via-black/60 to-yellow-900/20 border-2 border-yellow-600/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            <div className="flex items-center justify-center mb-4">
                                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Bet Summary</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Your Bet:</span>
                                    <span className="text-white font-bold">{getCurrentBet()} ETH</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Potential Win:</span>
                                    <span className="text-green-400 font-bold">{getPotentialWinnings().toFixed(3)} ETH</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Multiplier:</span>
                                    <span className="text-yellow-400 font-bold">5.5x</span>
                                </div>
                                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-2"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-red-300">Survival Odds:</span>
                                    <span className="text-red-400 font-bold">5/6 (83.3%)</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Warning */}
                    <div className="bg-red-900/20 border border-red-600/50 rounded-xl p-4 mb-8">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-red-200">
                                <p className="font-semibold mb-1">High Risk Warning</p>
                                <p>You could lose your entire bet. Only wager what you can afford to lose completely.</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        disabled={getCurrentBet() <= 0}
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                            getCurrentBet() > 0
                                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-400/40 transform hover:scale-[1.02]'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        {getCurrentBet() > 0 ? (
                            <div className="flex items-center justify-center gap-2">
                                <Zap className="w-5 h-5" />
                                ENTER THE CHAMBER
                            </div>
                        ) : (
                            'SELECT BET AMOUNT'
                        )}
                    </button>

                    {/* Bottom text */}
                    <p className="text-center text-gray-500 text-xs mt-4">
                        Powered by Base L2 • Transaction fees ~$0.01
                    </p>
                </div>
            </div>
        </main>
    );
}