const hre = require("hardhat");

async function main(){

    const targetAddress = "0x873289a1aD6Cf024B927bd13bd183B264d274c68";
    const targetABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[{"internalType":"address","name":"erc20","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"drop","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const evieAddress = "0x087aF2906D4cFa2E0c01910854815aA945F9B757";

    const evieContract = await hre.ethers.getContractAt("Evie", evieAddress);
    const targetContract = await hre.ethers.getContractAt(targetABI, targetAddress);

    const amount = BigInt(1 * (10**18));

    await evieContract.approve(targetAddress, amount);
    await targetContract.drop(evieAddress, amount);

}

main().catch(
    (error) => {
        console.error(error);
        process.exitCode = 1;
    }
)