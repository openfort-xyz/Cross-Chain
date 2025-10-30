import { Hex } from "viem";

export interface Token {
    name: string;
    address: Hex;
}

export interface ChainTokens {
    [chainId: number]: {
        [tokenSymbol: string]: Token;
    };
}

export class AddressBook {
    static readonly TOKENS: ChainTokens = {
        1: {
            USDC: {
                name: "USD Coin",
                address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            },
            USDT: {
                name: "Tether USD",
                address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            },
            oUSDT: {
                name: "Optimized USDT",
                address: "0x1217bfe6c773eec6cc4a38b5dc45b92292b6e189",
            },
        },
        10: {
            USDC: {
                name: "USD Coin",
                address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
            },
            USDCe: {
                name: "USD Coin (Bridged)",
                address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
            },
            USDT: {
                name: "Tether USD",
                address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            },
            oUSDT: {
                name: "Optimized USDT",
                address: "0x1217bfe6c773eec6cc4a38b5dc45b92292b6e189",
            },
        },
        130: {
            USDC: {
                name: "USD Coin",
                address: "0x078D782b760474a361dDA0AF3839290b0EF57AD6",
            },
            USDT: {
                name: "Tether USD",
                address: "0x9151434b16b9763660705744891fA906F660EcC5",
            },
        },
        137: {
            USDC: {
                name: "USD Coin",
                address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
            },
            USDCe: {
                name: "USD Coin (Bridged)",
                address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
            USDT: {
                name: "Tether USD",
                address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            },
        },
        146: {
            USDC: {
                name: "USD Coin",
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
            },
        },
        480: {
            USDC: {
                name: "USD Coin",
                address: "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1",
            },
        },
        8453: {
            USDC: {
                name: "USD Coin",
                address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            },
            USDbC: {
                name: "USD Base Coin",
                address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
            },
            oUSDT: {
                name: "Optimized USDT",
                address: "0x1217bfe6c773eec6cc4a38b5dc45b92292b6e189",
            },
        },
        42161: {
            USDC: {
                name: "USD Coin",
                address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            },
            USDCe: {
                name: "USD Coin (Bridged)",
                address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            },
            USDT: {
                name: "Tether USD",
                address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            },
        },
        42220: {
            USDC: {
                name: "USD Coin",
                address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
            },
            USDT: {
                name: "Tether USD",
                address: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
            },
        },
        57073: {
            USDCe: {
                name: "USD Coin (Bridged)",
                address: "0xF1815bd50389c46847f0Bda824eC8da914045D14",
            },
            USDT: {
                name: "Tether USD",
                address: "0x0200C29006150606B650577BBE7B6248F58470c1",
            },
        },
    };

    static getToken(chainId: number, tokenSymbol: string): Token | undefined {
        return this.TOKENS[chainId]?.[tokenSymbol];
    }

    static getTokenAddress(chainId: number, tokenSymbol: string): Hex | undefined {
        return this.getToken(chainId, tokenSymbol)?.address;
    }

    static getChainTokens(chainId: number) {
        return this.TOKENS[chainId] || {};
    }

    static hasToken(chainId: number, tokenSymbol: string): boolean {
        return this.getToken(chainId, tokenSymbol) !== undefined;
    }
}

export const addressBook: AddressBook = new AddressBook();