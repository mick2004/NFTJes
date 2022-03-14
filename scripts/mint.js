const friends = [
    "0x6d56349eb810f368Feaf4990b551694494a36Cb5",
    "0x1C9964b76Fa143BAAE0497BB946de90458E24C9A",
    
];
const existingContractAddr = "0xC3a233C30572a5c91060e693e853cED1853257A0";

async function main() {
  const nft = await hre.ethers.getContractAt("BoredAPSNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmU6HdS5t52C12e3vBEKidPiagjseSmpM5Lh46uccWjKSD";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
