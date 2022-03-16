# Config for 0.22% fee in contracts/libraries/LFWSwapLibrary.sol

0.22% = (10000-9978)/10000

+ Line 49, 51 changes to 9978 and 10000
+ Line 59, 60 changes to 10000 and 9978

# Deploy SC
(i)  npx hardhat compile
(ii) declare factory and weth SC in scripts/deploy.js
(iii) npx hardhat run scripts/deploy.js --network bsc-testnet

# Unit-test
npx hardhat test

