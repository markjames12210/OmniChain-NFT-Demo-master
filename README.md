#1. Binance TestNet
### Deploy To Binance TestNet

`npx hardhat run scripts/deploy_bsc.js --network bsc-testnet`

Binance DeployID : 0x0418b0e9AF4269a360b63f00455B096Cc0C599b8

###Mint 1 NFT Token to me.

`npx hardhat run scripts/mint/mint_bsc.js --network bsc-testnet`
###Check My NFT Balances
`npx hardhat run scripts/check/check_bsc.js --network bsc-testnet`

### NFT To FUJI From BSC
`npx hardhat run scripts/test/test_bsc2fuji.js --network bsc-testnet`

#2. Avalanch TestNet(Fuji)
### Deploy To Fuji Testnet (Avalanche)

`npx hardhat run scripts/deploy_fuji.js --network fuji`

Ava Deploy ID: 0x693F70E608a181E91964CDCC68F490De8D4DCcA5


### Mint 1 NFT Token to me.

`npx hardhat run scripts/mint/mint_fuji.js --network fuji`

###Check My NFT Balances
`npx hardhat run scripts/check/check_fuji.js --network fuji`

### NFT To BSC from FUJI
`npx hardhat run scripts/test/test_fuji2bsc.js --network fuji`

