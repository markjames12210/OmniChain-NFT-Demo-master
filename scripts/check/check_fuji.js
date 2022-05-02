const hre = require("hardhat");
// const { ethers } = require("ethers");

async function main() {
    const account = "0xE6AD954a9B14b45816C45afE7Dc0E9F85819E010";
    const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
    const omniChainNFT = await OmniChainNFT.attach(
        "0x693F70E608a181E91964CDCC68F490De8D4DCcA5"
    );
    const after = await omniChainNFT.balanceOf(account);
    console.log("Avax NFT balance: ", after.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});