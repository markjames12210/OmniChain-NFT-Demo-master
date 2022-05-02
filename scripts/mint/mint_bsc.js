const hre = require("hardhat");
async function main() {
    const account = "0xE6AD954a9B14b45816C45afE7Dc0E9F85819E010";
    const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
    const omniChainNFT = await OmniChainNFT.attach(
        "0x0418b0e9AF4269a360b63f00455B096Cc0C599b8"
    );
    await omniChainNFT.mint();
    const balance = await omniChainNFT.balanceOf(account);
    console.log("Binance NFT balance: ", balance.toString());
    const owner = await omniChainNFT.ownerOf(1);
    console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});