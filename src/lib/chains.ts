import type { Chain } from "viem";

export const baseSepolia: Chain = {
    id: 84532,
    name: 'Base Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://sepolia.base.org'] },
        public: { http: ['https://sepolia.base.org'] },
    },
    blockExplorers: {
        default: { name: 'Basescan', url: 'https://sepolia.basescan.org' },
    },
    testnet: true,
};
