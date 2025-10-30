import { getChain } from "./data/chain/chains";
import { getExplorerUrl } from "./data/chain/explorersURL";

async function main() {
    const chain = await getChain('optimism');
    console.log(chain);
    console.log(chain.rpcUrls.default);

    const explorer = await getExplorerUrl("ink", "tx");
    console.log(explorer);
}

main().catch((e) => {
    console.error(e)
  })