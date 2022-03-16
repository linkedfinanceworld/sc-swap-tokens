import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
// import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
// import "dotenv".config();


export default {
    solidity: {
        compilers: [
            {
                version: "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {},
        // "bsc-testnet": {
        //     accounts: [""],
        //     chainId: 97,
        //     url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        //     gas: 2100000,
        //     gasPrice: 10000000000
        // },
        // "bsc-mainnet": {
        //     accounts: [""],
        //     chainId: 56,
        //     url: "https://bsc-dataseed.binance.org/",
        //     gas: 2100000,
        //     gasPrice: 10000000000
        // },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
    },
};