# Deployment order

Factory => Swappair => Router

- Things need to consider when deploying Router SC:

1. After deploying the factory, you have to copy the factory address and paste to the deploy script of router

2. Copy the init_hash of factory SC and paste in line26 of LFWSwapLibrary.sol (in periphery/contracts/library)

3. Then, you can deploy the router

------------------------------------------------------------


# deploy using hardhat

npx hardhat run scripts/deploy.js --network bsc-testnet

# verify using hardhat

npx hardhat verify --network bsc-testnet SC_Address

