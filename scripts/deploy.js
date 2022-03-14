async function main() {
  const BoredAPSNFT = await hre.ethers.getContractFactory("BoredAPSNFT");
  const nft = await BoredAPSNFT.deploy();

  await nft.deployed();

  console.log("BoredAPSNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
