export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "odp-rarity.vercel.app",
  COLLECTION_NAME: "LuckEggs",
  COLLECTION_TITLE: "LuckEggs",
  COLLECTION_DESCRIPTION: '2000 "LuckEggs on ETHW.',
  COLLECTION_IMG_LINK: "https://cof.mypinata.cloud/ipfs/QmeUYbtjWb84Y7bihdpLknj1ZPn2hFsdKu5riRxkTfBKkF/3.png",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "ethereumpow", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0x0b54d5619e32e33d6a42e918c7fa128a020365fe, //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
