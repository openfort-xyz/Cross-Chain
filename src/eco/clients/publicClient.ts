import type { Chain } from 'viem';
import { createPublicClient, http } from 'viem';
import { getChain, type ChainConfig } from "../data/chain/chains";

async function toViemChain(chainConfig: ChainConfig): Promise <Chain> {
    return {
        id: chainConfig.id,
        name: chainConfig.name,
        nativeCurrency: chainConfig.nativeCurrency,
        rpcUrls: chainConfig.rpcUrls,
        blockExplorers: chainConfig.blockExplorers,
    } as Chain;
}

export async function getPublicClientForChain(chainName: string) {
    const chainConfig = await getChain(chainName);

    if (!chainConfig) {
        throw new Error(`Unsupported chain: ${chainName}`);
    }

    const chain = await toViemChain(chainConfig);

    return createPublicClient({
        chain,
        transport: http(chainConfig.rpcUrls.default.http[0]),
    });
}

export type PublicClient = Awaited<ReturnType<typeof getPublicClientForChain>>;