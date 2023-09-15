const hre = require("hardhat");
require("dotenv").config();

async function main() {
    const evieAddress = "0x087aF2906D4cFa2E0c01910854815aA945F9B757";
    const evieContract = await hre.ethers.getContractAt("Evie", evieAddress);
    
    // @dev js numbers do not have enough precision so borrowing the parseEther method to make it BigNumber
    const amount = hre.ethers.parseEther("10000");
    await evieContract.transfer(process.env.ADDRESS_AIRDROP_TO, amount);

    console.log(
        `Airdropped to ${process.env.ADDRESS_AIRDROP_TO}`
      );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});