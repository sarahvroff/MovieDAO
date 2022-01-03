import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0x3DfF115BB6D54d15fD28E14E53D09bbbC4944e70",
);

const tokenModule = sdk.getTokenModule(
  "0x3116297Ca71Bea01D0AA94C02D60F43E39D3bd8C",
);

(async () => {
  try {
    const amount = 420_000;
    await voteModule.propose(
      "Should we watch The Bee Movie",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [
              voteModule.address,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );

    console.log("✅ Successfully created proposal");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
    const amount = 6_900;
    await voteModule.propose(
      "Should we watch Kill Bill?",
      [
        {
    
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "transfer",
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),

          toAddress: tokenModule.address,
        },
      ]
    );

    console.log(
      "✅ Successfully created proposal!"
    );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();

