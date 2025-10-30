import { getChain } from "../data/chain/chains";
import { privateKeyToAccount } from 'viem/accounts';
import type { ChainConfig } from "../data/chain/chains";
import { createWalletClient, Hex, http, type Account } from 'viem';
import 'dotenv/config';

const {
    OWNER_PRIVATE_KEY
} = process.env as Record<
    string,
    Hex
>

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

export function getWalletClientForChain(chainName: string, account: Account = owner) {
    const chainConfig = getChain(chainName);

    if (!chainConfig) {
        throw new Error(`Unsupported chain: ${chainName}`);
    }

    const chain = toViemChain(chainConfig);

    return createWalletClient({
        account,
        chain: chain as any,
        transport: http(chainConfig.rpcUrls.default.http[0]),
    });
}

export type WalletClient = ReturnType<typeof getWalletClientForChain>;

export class WalletsClient {
    readonly account: Account;

    constructor(privateKey: `0x${string}` = OWNER_PRIVATE_KEY) {
        this.account = privateKeyToAccount(privateKey);
    }

    getWalletClient(chainName: string) {
        return getWalletClientForChain(chainName, this.account);
    }

    getWalletClientForChain(chainName: string) {
        return this.getWalletClient(chainName);
    }
}

export const walletsClient = new WalletsClient();