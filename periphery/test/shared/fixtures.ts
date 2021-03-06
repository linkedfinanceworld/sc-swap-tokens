import { Wallet, Contract } from 'ethers'
import { Web3Provider } from 'ethers/providers'
import { deployContract } from 'ethereum-waffle'

import { expandTo18Decimals } from './utilities'

import LFWSwapFactory from '../../../core/artifacts/contracts/LFWSwapFactory.sol/LFWSwapFactory.json'
import ILFWSwapPair from '../../../core/artifacts/contracts/interfaces/ILFWSwapPair.sol/ILFWSwapPair.json'

import ERC20 from '../../artifacts/contracts/test/ERC20.sol/ERC20.json'
import WETH9 from '../../artifacts/contracts/test/WETH9.sol/WETH9.json'
import RouterEventEmitter from '../../artifacts/contracts/test/RouterEventEmitter.sol/RouterEventEmitter.json'

import LFWSwapRouter from '../../artifacts/contracts/LFWSwapRouter.sol/LFWSwapRouter.json'
// import UniswapV1Exchange from '../../build/UniswapV1Exchange.json'
// import UniswapV1Factory from '../../build/UniswapV1Factory.json'
// import UniswapV2Router01 from '../../build/UniswapV2Router01.json'
// import UniswapV2Migrator from '../../build/UniswapV2Migrator.json'
// import UniswapV2Router02 from '../../build/UniswapV2Router02.json'
// import RouterEventEmitter from '../../build/RouterEventEmitter.json'

const overrides = {
  gasLimit: 9999999
}

interface V2Fixture {
  token0: Contract
  token1: Contract
  WETH: Contract
  WETHPartner: Contract
  factory: Contract
  router: Contract
  routerEventEmitter: Contract
  pair: Contract
  WETHPair: Contract
}

export async function v2Fixture(provider: Web3Provider, [wallet]: Wallet[]): Promise<V2Fixture> {
  // deploy tokens
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const WETH = await deployContract(wallet, WETH9)
  const WETHPartner = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])

  // deploy V2
  const factory = await deployContract(wallet, LFWSwapFactory, [wallet.address])

  // deploy routers
  const router = await deployContract(wallet, LFWSwapRouter, [factory.address, WETH.address], overrides)

  // event emitter for testing
  const routerEventEmitter = await deployContract(wallet, RouterEventEmitter, [])

  // initialize V2
  await factory.createPair(tokenA.address, tokenB.address)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(ILFWSwapPair.abi), provider).connect(wallet)

  const token0Address = await pair.token0()
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  await factory.createPair(WETH.address, WETHPartner.address)
  const WETHPairAddress = await factory.getPair(WETH.address, WETHPartner.address)
  const WETHPair = new Contract(WETHPairAddress, JSON.stringify(ILFWSwapPair.abi), provider).connect(wallet)

  return {
    token0,
    token1,
    WETH,
    WETHPartner,
    factory,
    router,
    routerEventEmitter,
    pair,
    WETHPair
  }
}
