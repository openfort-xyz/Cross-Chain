import { getChain } from "../data/chain/chains";
import { privateKeyToAccount } from 'viem/accounts';
import type { ChainConfig } from "../data/chain/chains";
import { createWalletClient, Hex, http, type Account } from 'viem';
import 'dotenv/config';

const {
    OWNER_PRIVATE_KEY
} = process.env as Record<string, Hex>;

if (!OWNER_PRIVATE_KEY) {
    throw new Error('OWNER_PRIVATE_KEY is not defined in environment variables');
}

const owner: Account = privateKeyToAccount(OWNER_PRIVATE_KEY);

function toViemChain(chainConfig: ChainConfig) {
    return {
        id: chainConfig.id,
        name: chainConfig.name,
        nativeCurrency: chainConfig.nativeCurrency,
        rpcUrls: chainConfig.rpcUrls,
        blockExplorers: chainConfig.blockExplorers,
    };
}

export async function getWalletClientForChain(chainName: string, account: Account = owner) {
    const chainConfig = await getChain(chainName);

    if (!chainConfig) {
        throw new Error(`Unsupported chain: ${chainName}`);
    }

    const chain = await toViemChain(chainConfig);

    return createWalletClient({
        account,
        chain: chain as any,
        transport: http(chainConfig.rpcUrls.default.http[0]),
    });
}

export type WalletClient = Awaited<ReturnType<typeof getWalletClientForChain>>;

export class WalletsClient {
    readonly account: Account;

    constructor(privateKey: `0x${string}` = OWNER_PRIVATE_KEY) {
        this.account = privateKeyToAccount(privateKey);
    }

    async getWalletClient(chainName: string) {
        return getWalletClientForChain(chainName, this.account);
    }

    async getWalletClientForChain(chainName: string) {
        return this.getWalletClient(chainName);
    }
}

export const walletsClient = new WalletsClient();