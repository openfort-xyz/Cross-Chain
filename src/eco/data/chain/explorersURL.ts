export type UrlType = {
    tx: string;
    address: string;
    token: string;
    block: string;
}

export const urlPaths: UrlType = {
    tx: 'tx/',
    address: 'address/',
    token: 'token/',
    block: 'block/',
}

export interface Explorer {
    name: string;
    explorer_url: string;
}

export const explorers = {
    "ethereum": "https://etherscan.io/",
    "base": "https://basescan.org/",
    "arbitrum": "https://arbiscan.io/",
    "polygon": "https://polygonscan.com/",
    "sonic": "https://sonicscan.org/",
    "optimism": "https://optimistic.etherscan.io/",
    "unichain": "https://unichain.blockscout.com/",
    "world_chain": "https://worldscan.org/",
    "celo": "https://celoscan.io/",
    "ink": "https://explorer.inkonchain.com/",
}

export async function getExplorerUrl(
    chainName: string,
    urlType: keyof UrlType
): Promise<Explorer> {
    const explorerUrl = explorers[chainName as keyof typeof explorers];
    
    if (!explorerUrl) {
        throw new Error(`Unknown chain: ${chainName}`);
    }
    
    return {
        name: chainName,
        explorer_url: explorerUrl + urlPaths[urlType]
    };
}