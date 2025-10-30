export interface RPC {
    name: string;
    rpc_url: string;
}

export const rpcs = {
    "ethereum": "https://ethereum-rpc.publicnode.com",
    "base": "https://base-rpc.publicnode.com",
    "arbitrum": "https://arbitrum-one-rpc.publicnode.com",
    "polygon": "https://polygon-bor-rpc.publicnode.com",
    "sonic": "https://sonic-rpc.publicnode.com",
    "optimism": "https://optimism-rpc.publicnode.com",
    "unichain": "https://unichain-rpc.publicnode.com",
    "world_chain": "https://worldchain.drpc.org",
    "celo": "https://celo.drpc.org",
    "ink": "https://ink.drpc.org",
}

export async function getRPC(chainName: string): Promise<RPC> {
    const rpc_url = rpcs[chainName as keyof typeof rpcs];
    
    if (!rpc_url) {
        throw new Error(`Unsupported chain: ${chainName}`);
    }
    
    return {
        name: chainName,
        rpc_url
    };
}