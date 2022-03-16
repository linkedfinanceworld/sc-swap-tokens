# Config for 0.22% fee in contracts/LFWSwapPair.sol

0.22% = 22/10000

+ Line 182, 183 changes to 10000 and 22

# Config 0.17% fee for liquidity providers and 0.05% fee for LFW treasury

+ Line 100, 101 changes to 5 and 17 as observed in the SC


# Deploy SC
(i)   npx hardhat compile
(ii)  npx hardhat run scripts/deploy_factory.js --network bsc-testnet
(iii) npx hardhat run scripts/deploy_swappair.js --network bsc-testnet

# Unit-test
npx hardhat test

