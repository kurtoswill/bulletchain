import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'BulletChain',
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get this from https://cloud.walletconnect.com
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
});