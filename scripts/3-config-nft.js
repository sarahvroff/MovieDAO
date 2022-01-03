import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9CcABA5eE2C641D56D1a33EDD38c934BD6AAD41b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Movie Ticket",
        description: "This NFT will give you access to MovieDAO!",
        image: readFileSync("scripts/assets/ticket.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()