
import { getChain } from "./data/chain/chains";
import { walletsClient } from "./clients/walletClient";
import { getExplorerUrl } from "./data/chain/explorersURL";
import { getPublicClientForChain, type PublicClient } from "./clients/publicClient";

async function main() {
    const chain = getChain('optimism');
    console.log(chain);

    const explorer = await getExplorerUrl("ink", "tx");
    console.log(explorer);

    const publicClient: PublicClient = getPublicClientForChain("arbitrum");

    const blockNumber = await publicClient.getBlockNumber();
    console.log(blockNumber);
    console.log(publicClient.chain.id);

    console.log(walletsClient.account.address)
    const balance = await publicClient.getBalance({
        address: walletsClient.account.address,
    });
    console.log(balance);
}

main().catch((e) => {
    console.error(e)
})