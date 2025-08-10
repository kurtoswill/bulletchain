"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useAccount, useBalance } from "wagmi";

interface Balance {
    formatted: string;
    symbol: string;
    value: bigint;
    decimals: number;
}

interface WalletContextType {
    address?: `0x${string}`;
    isConnected: boolean;
    isConnecting: boolean;
    balance: Balance | null;
    balanceLoading: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
    children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
    const { address, isConnected, isConnecting } = useAccount();

    const { data: balance, isLoading: balanceLoading } = useBalance({
        address,
    });

    const contextValue: WalletContextType = {
        address,
        isConnected,
        isConnecting,
        balance: balance ?? null,
        balanceLoading,
    };

    return (
        <WalletContext.Provider value={contextValue}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};
