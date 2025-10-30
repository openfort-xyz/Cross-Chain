import type { Chain } from 'viem';
import { createPublicClient, http } from 'viem';
import { getChain, type ChainConfig } from "../data/chain/chains";

function toViemChain(chainConfig: ChainConfig): Chain {
    return {
        id: chainConfig.id,
        name: chainConfig.name,
        nativeCurrency: chainConfig.nativeCurrency,
        rpcUrls: chainConfig.rpcUrls,
        blockExplorers: chainConfig.blockExplorers,
    } as Chain;
}

export function getPublicClientForChain(chainName: string) {
    const chainConfig = getChain(chainName);

    if (!chainConfig) {
        throw new Error(`Unsupported chain: ${chainName}`);
    }

    const chain = toViemChain(chainConfig);

    return createPublicClient({
        chain,
        transport: http(chainConfig.rpcUrls.default.http[0]),
    });
}

export type PublicClient = ReturnType<typeof getPublicClientForChain>;