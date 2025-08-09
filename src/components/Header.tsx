"use client";

import React, { useState } from 'react';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Copy, ExternalLink, LogOut, ChevronDown } from 'lucide-react';

const Header = () => {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: balance } = useBalance({
        address: address,
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const copyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address);
            // You could add a toast notification here
        }
    };

    const shortenAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const formatBalance = (balance) => {
        if (!balance) return '0.00';
        return parseFloat(balance.formatted).toFixed(4);
    };

    const getEtherscanUrl = (address) => {
        return `https://etherscan.io/address/${address}`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-red-950 border-b border-red-900/50 shadow-xl">
            {/* Background atmospheric effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-32 h-0.5 bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>

            {/* Bullet holes decoration */}
            <div className="absolute top-1 left-6 w-0.5 h-0.5 bg-red-800/40 rounded-full"></div>
            <div className="absolute bottom-0.5 right-10 w-0.5 h-0.5 bg-red-800/40 rounded-full"></div>

            <div className="relative px-4 py-2 flex items-center justify-between">
                {/* BulletChain Logo */}
                <div className="flex items-center gap-2">
                    {/* Revolver cylinder logo */}
                    <div className="relative w-7 h-7 border border-red-500/50 rounded-full flex items-center justify-center bg-red-900/30 backdrop-blur-sm">
                        <div className="w-4 h-4 border border-red-400/30 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        {/* Cylinder chambers */}
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-0.5 h-0.5 rounded-full ${i === 2 ? 'bg-red-500' : 'bg-gray-600'}`}
                                style={{
                                    transform: `rotate(${i * 60}deg) translateY(-8px)`,
                                    transformOrigin: 'center 8px'
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Brand name */}
                    <div>
                        <h1 className="text-lg font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 bg-clip-text text-transparent">
                            BULLETCHAIN
                        </h1>
                        <div className="h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                    </div>
                </div>

                {/* Wallet Section */}
                <div className="relative">
                    {!isConnected ? (
                        <ConnectButton.Custom>
                            {({ account, chain, openConnectModal, mounted }) => {
                                const ready = mounted;
                                const connected = ready && account && chain;

                                return (
                                    <div
                                        {...(!ready && {
                                            'aria-hidden': true,
                                            'style': {
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                            },
                                        })}
                                    >
                                        {(() => {
                                            if (!connected) {
                                                return (
                                                    <button
                                                        onClick={openConnectModal}
                                                        type="button"
                                                        className="flex items-center gap-1.5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold py-1.5 px-3 rounded-lg border border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                                                    >
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-xs">CONNECT</span>
                                                    </button>
                                                );
                                            }

                                            return null;
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-red-900/50 hover:border-red-700/50 text-red-200 font-medium py-1.5 px-3 rounded-lg transition-all duration-300 hover:bg-red-950/30"
                            >
                                <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white/30 rounded"></div>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs font-bold text-red-300">{shortenAddress(address)}</div>
                                    <div className="text-xs text-gray-400">{formatBalance(balance)} ETH</div>
                                </div>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Wallet Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-full mt-1 w-56 bg-black/90 backdrop-blur-sm border border-red-900/50 rounded-lg shadow-2xl shadow-red-900/30 overflow-hidden z-50">
                                    {/* Account Info */}
                                    <div className="p-3 border-b border-red-900/30">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white/30 rounded"></div>
                                            </div>
                                            <div>
                                                <div className="text-red-300 font-bold text-xs">Connected Wallet</div>
                                                <div className="text-gray-400 text-xs">Web3 Wallet</div>
                                            </div>
                                        </div>
                                        <div className="bg-red-950/30 rounded-md p-2 mb-2">
                                            <div className="text-gray-400 text-xs mb-1">Balance</div>
                                            <div className="text-red-300 font-bold">{formatBalance(balance)} ETH</div>
                                            <div className="text-gray-500 text-xs">Network Balance</div>
                                        </div>
                                        <div className="bg-red-950/30 rounded-md p-2">
                                            <div className="text-gray-400 text-xs mb-1">Address</div>
                                            <div className="flex items-center justify-between">
                                                <code className="text-red-300 text-xs font-mono">{shortenAddress(address)}</code>
                                                <button
                                                    onClick={copyAddress}
                                                    className="text-gray-400 hover:text-red-300 transition-colors duration-200"
                                                >
                                                    <Copy className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="p-1">
                                        <button
                                            onClick={() => window.open(getEtherscanUrl(address), '_blank')}
                                            className="w-full flex items-center gap-2 text-gray-300 hover:text-red-300 hover:bg-red-950/30 py-1.5 px-2 rounded-md transition-all duration-200"
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            <span className="text-xs">View on Etherscan</span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                disconnect();
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full flex items-center gap-2 text-gray-300 hover:text-red-400 hover:bg-red-950/30 py-1.5 px-2 rounded-md transition-all duration-200"
                                        >
                                            <LogOut className="w-3 h-3" />
                                            <span className="text-xs">Disconnect</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Danger stripe */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent"></div>
        </header>
    );
};

export default Header;