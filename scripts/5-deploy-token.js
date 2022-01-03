import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xa5f064e448B945c52Baf12107327303d6095a904");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "MovieDAO Governance Token",
      symbol: "OSCARS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();