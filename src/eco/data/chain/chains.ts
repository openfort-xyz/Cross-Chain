import { Chain } from 'viem';
import { rpcs } from './rpcs';
import { explorers } from './explorersURL';

export interface ChainConfig extends Chain {
  id: number;
  name: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
    };
  };
  blockExplorers?: {
    default: {
      name: string;
      url: string;
    };
  };
}

export const ethereumChain: ChainConfig = {
  id: 1,
  name: 'Ethereum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.ethereum],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: explorers.ethereum.replace(/\/$/, ''),
    },
  },
};

export const baseChain: ChainConfig = {
  id: 8453,
  name: 'Base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.base],
    },
  },
  blockExplorers: {
    default: {
      name: 'BaseScan',
      url: explorers.base.replace(/\/$/, ''),
    },
  },
};

export const arbitrumChain: ChainConfig = {
  id: 42161,
  name: 'Arbitrum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.arbitrum],
    },
  },
  blockExplorers: {
    default: {
      name: 'Arbiscan',
      url: explorers.arbitrum.replace(/\/$/, ''),
    },
  },
};

export const polygonChain: ChainConfig = {
  id: 137,
  name: 'Polygon',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    default: {
      http: [rpcs.polygon],
    },
  },
  blockExplorers: {
    default: {
      name: 'PolygonScan',
      url: explorers.polygon.replace(/\/$/, ''),
    },
  },
};

export const sonicChain: ChainConfig = {
  id: 146,
  name: 'Sonic',
  nativeCurrency: {
    decimals: 18,
    name: 'Sonic',
    symbol: 'S',
  },
  rpcUrls: {
    default: {
      http: [rpcs.sonic],
    },
  },
  blockExplorers: {
    default: {
      name: 'SonicScan',
      url: explorers.sonic.replace(/\/$/, ''),
    },
  },
};

export const optimismChain: ChainConfig = {
  id: 10,
  name: 'Optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.optimism],
    },
  },
  blockExplorers: {
    default: {
      name: 'Optimistic Etherscan',
      url: explorers.optimism.replace(/\/$/, ''),
    },
  },
};

export const unichainChain: ChainConfig = {
  id: 130,
  name: 'Unichain',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.unichain],
    },
  },
  blockExplorers: {
    default: {
      name: 'Unichain Explorer',
      url: explorers.unichain.replace(/\/$/, ''),
    },
  },
};

export const worldChainChain: ChainConfig = {
  id: 480,
  name: 'World Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.world_chain],
    },
  },
  blockExplorers: {
    default: {
      name: 'World Chain Explorer',
      url: explorers.world_chain.replace(/\/$/, ''),
    },
  },
};

export const celoChain: ChainConfig = {
  id: 42220,
  name: 'Celo',
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'CELO',
  },
  rpcUrls: {
    default: {
      http: [rpcs.celo],
    },
  },
  blockExplorers: {
    default: {
      name: 'Celoscan',
      url: explorers.celo.replace(/\/$/, ''),
    },
  },
};

export const inkChain: ChainConfig = {
  id: 57073,
  name: 'Ink',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [rpcs.ink],
    },
  },
  blockExplorers: {
    default: {
      name: 'Ink Explorer',
      url: explorers.ink.replace(/\/$/, ''),
    },
  },
};

export const CHAINS_BY_FLAG: Record<string, ChainConfig> = {
  ethereum: ethereumChain,
  base: baseChain,
  arbitrum: arbitrumChain,
  polygon: polygonChain,
  sonic: sonicChain,
  optimism: optimismChain,
  unichain: unichainChain,
  world_chain: worldChainChain,
  celo: celoChain,
  ink: inkChain,
};

export function getChain(chainName: string): ChainConfig | undefined {
  return CHAINS_BY_FLAG[chainName.toLowerCase()];
}