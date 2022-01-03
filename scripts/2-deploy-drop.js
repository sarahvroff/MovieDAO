import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xa5f064e448B945c52Baf12107327303d6095a904");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "MovieDAO Membership",
      description: "A DAO to decide on what movie to watch.",
      image: readFileSync("scripts/assets/ticket.jpeg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()