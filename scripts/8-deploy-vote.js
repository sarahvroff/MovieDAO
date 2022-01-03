import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0xa5f064e448B945c52Baf12107327303d6095a904",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "Movie Proposals",

      votingTokenAddress: "0x3116297Ca71Bea01D0AA94C02D60F43E39D3bd8C",

      proposalStartWaitTimeInSeconds: 0,

      proposalVotingTimeInSeconds: 1 * 60 ,

      votingQuorumFraction: 0,

      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();
