
import { getChain } from "./data/chain/chains";
import { getPublicClientForChain, type PublicClient } from "./clients/publicClient";
import { getExplorerUrl } from "./data/chain/explorersURL";

async function main() {
    const chain = getChain('optimism');
    console.log(chain);

    const explorer = await getExplorerUrl("ink", "tx");
    console.log(explorer);

    const publicClient: PublicClient = getPublicClientForChain("arbitrum");
    
    const blockNumber = await publicClient.getBlockNumber();
    console.log(blockNumber);
    console.log(publicClient.chain.id);
}

main().catch((e) => {
    console.error(e)
})