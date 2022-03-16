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
        ropsten: {
            accounts: ["c48db76c4823eaf1a13e11d4efe7ba2666ad8d3ff4109850670ca8dfd71366d5"],
            chainId: 3,
            url: "https://ropsten.infura.io/v3/11359f968f3a48318bbb4f19ccc1c42d",
            gas: 4100000,
            gasPrice: 50000000000
        },
        "bsc-testnet": {
            accounts: ["27bcbb6bbe528aa98d0b75a11304d2ad89f33c961b443c6602b227adbdc7d769"],
            chainId: 97,
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            gas: 2100000,
            gasPrice: 10000000000
        },
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
        // apiKey: '9WJHP9AKPV4BCIMPUHJUIFRAU42GCBJUMX',
        //apiKey: 'SUAIA94XMMU9ESJ8I4UBK3PWBEQ1FE2SPK', // ether
        apiKey: 'H7Q8K92S3PWN22AR43KSN74XPI4NPE2VRM', //bsc
    },
};