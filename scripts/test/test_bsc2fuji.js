const hre = require("hardhat");
const { ethers } = require("ethers");
async function main() {
    const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
    const omniChainNFT = await OmniChainNFT.attach(
        "0xEBbb6F124f845FC46A024a219CE95434b444d2eA"
    );
    await omniChainNFT.crossChain(
        10006,
        "0x693F70E608a181E91964CDCC68F490De8D4DCcA5",
        ethers.BigNumber.from("102"),
        { value: ethers.utils.parseEther("1") }
    );
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});