const hre = require("hardhat");

async function main() {
    const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
    const omniChainNFT = await OmniChainNFT.deploy(
        "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
        0,
        100
    );
    await omniChainNFT.deployed();
    console.log(
        "BSC testnet ----- omniChainNFT deployed to:",
        omniChainNFT.address
    );
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});