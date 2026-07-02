---
title: ETH Layer 2 Solutions
description: "Summary - The recent dramatic surge of Ethereum\u2019s network usage\
  \ requires a solution to reduce both congestion and gas fees. - Arbitrum is a Layer\
  \ 2 scaling solution for the..."
date: '2021-12-07'
venue: wagmi
tags:
- L1/L2
- DeFi
subtags:
- L2 Scaling
tickers:
- OP
- ZEC
- STRK
- IMX
---

<u>Summary</u>

- The recent dramatic surge of Ethereum’s network usage requires a solution to reduce both congestion and gas fees.

- Arbitrum is a Layer 2 scaling solution for the Ethereum network. Offering multiple benefits such as reduced fees, reduced congestion, and maintaining security.

- The project is best used to conduct batches of transactions in dApps. Further implementation could be viable for blockchain gaming.

<u>Qualitative</u>

- Arbitrum is a network that implements a technology called optimistic rollup.

  - This mechanism enables transaction execution outside Ethereum’s Layer 1 network, but still utilizing Ethereum’s proof-of-transaction.

  - All transaction data is stored on Ethereum layer 1 chain.

  - By default, optimistic Rollups transactions are considered as valid. However, users have a particular window to submit fraud proofs via bond. These calletsrd upon transactions would be sent to the EVM to be verified for fraud.

  - The other transactions would be processed in the platform’s virtual machine – Arbitrum Virtual Machine.

  - This indicates that Arbitrum is best for dApps since it sends transactions in batches to the network, leading to a higher Transaction Per Second (TPS) through Arbitrum while maintaining security.

- Future implementations of Arbitrum include channels and AnyTrust sidechains.

- Users could easily utilize the Arbitrum network by integrating it through a hot wallet (MetaMask), connecting the wallet to dApp, then executing the transaction. More information [<u>here</u>](https://arbitrum.io/bridge-tutorial/).

- Offchain Labs is the team behind Arbitrum, consisting of Ed Felten, Steven Goldfeder, and Harry Kalodner. The platform is invested by Lighstpeed, Pantera, Polychain Capital, Alameda Research, and much more.

- Ethereum developers could implement their dApps effortlessly since most of the tools are from Ethereum Layer 1 itself and Offchain Labs has produced a comprehensive documentation for Arbitrum.

<u>Quantitative</u>

- Arbitrum is considered one of the most EVM-compatible Rollups.

  - Compatible at the bytecode level. Any programming language that can compile EVM works, such as Solidity and Vyper.

- Arbitrum’s daily transaction:

  - On September 12, it burst to an all time high. This could be possibly caused by the launch of a layer 2 yield farming on Arbitrum.

  - 21,902 daily transactions since launch.

- Despite stagnant daily transactions, the total value locked (TVL) in arbitrum kept on increasing towards the end of year. Currently, the TVL is around $1.91 Billion.

- Claimed transaction per second for Arbitrum is 40,000 TPS, compared to Ethereum 15 to 30 TPS.

- Executing transactions in Arbitrum costs 5x cheaper than the Ethereum Layer 1 chain. Currently, Arbitrum One $1.82 and Ethereum $10.4.

## Optimism

<u>Summary</u>

- The increase of decentralized finance and decentralized applications in the Ethereum network requires a solution that reduces transaction fees and network congestion.

- Optimism is an Ethereum layer 2 scaling solution that uses optimistic Rollups to process transactions off-chain while maintaining security guarantees of Ethereum.

- The mechanism mainly separates the roles of transaction ordering and block validation into two distinct parties.

- Optimism presents a viable option in which developers could implement their dApps to scale.

<u>Qualitative</u>

- Optimism is another implementation of Layer 2 scaling solution utilizing optimistic rollup technology.

  - The technology leverages transaction execution outside Ethereum Layer 1 whilst storing the transaction data and utilizing Ethereum’s proof-of-transaction mechanism.

  - Sequencers are used to process transactions off-chain before finalizing them on the layer 1 chain; these sequencers must put up a bond as collateral to verify fraudulent transactions and disincentivize malicious actions.

  - Optimism employs a single round fraud proof (FP). This indicates that Layer 1 executes the whole Layer 2 transaction on-chain to verify state root.

- Optimism has an approach of containerization in its framework.

  - Allows developers to create and deploy updates in an agile and secure manner.

  - This could be a double-edge sword since though it does increase scalability, security, and speed; if there is a hard fork and Ethereum consensus change, the source code would be modified in some way. Then, suddenly re-executing past transactions on Layer 1 would result in a different final state.

<u>Quantitative</u>

- Generally, Optimism is trying to stick as close as possible to the Ethereum ecosystem tools, however the platform requires a special solidity compiler to generate Optimism Virtual Machine bytecode.

- Optimism uses WETH

- With a single round of fraud proof, Optimism has a lower fee than its direct competitor – Arbitrum – as much as $1.67.

- The total value locked in Optimism started to increase when the technology became OVM 2.0, jumping from $271 million into $459 million. Currently, the TVL is sitting around $416 million.

- Optimism average daily transaction since OVM 2.0 mainnet launch is 3204 transactions.

- Claimed transaction per second for Optimism is 2000 TPS, compared to Ethereum Layer 1 15 to 30 TPS.

## ZK Rollups and ZK Snarks

<u>Summary</u>

- ZK Rollups is an alternative to Optimistic Rollup that would provide more security.

- ZCash is one of the first blockchain to design a cryptography protocol that upholds security and privacy called ZK Snarks.

<u>Qualitative</u>

- Zero-knowledge (ZK) proofs are a type of encryption scheme whereby one party can prove the truth of a specific information to another party without disclosing any additional information.

- ZK Rollups:

  - The idea behind zk-Rollups are similar to optimistic Rollups. Difference is that zk-Rollups rely on validity proofs. In other words, each transaction is guilty until proven innocent.

  - Conduct transactions in bundles to reduce block time and gas cost.

  - Important takeaways compared to optimistic Rollups:

1.  Security: System is always in a valid state – all proven transactions are always true. More secure than optimistic Rollups.

2.  Capital Efficiency: Claimed 1000x more cost efficient than optimistic Rollups.

3.  Scalability: zk-Rollups are designed to consume exponentially less resources and built to be scalable.

    - Best for echanges and dApps that require simple payments.

- ZK Snarks:

  - ZCash is the first to introduce zk-Snarks – Zero-knowledge Succinct non-Interactive Argument of Knowledge.

  - The basic principle of ZK snarks consists of three algorithm G, P, V:

<!-- -->

- G: Key generator; takes in a secret parameter lambda inserted into a program that would generate two public keys – proving key (pk) and verification key (vk).

- P: Prover; takes in proving key, a public input x, and a private witness w that would generate a proof.

- V: Verifier; would return true if the proof is correct by verifying whether the prover knows a witness is satisfying.

  - Integrating ZK Snarks to the Ethereum chain could introduce privacy in the transactions while still upholding security.

<u>Quantitative</u>

- ZK Rollups:

  - Cost of public data per transfer in the Matter testnet is 16 Bytes.

  - post-Istanbul Ethereum, this would cost around 272 gas.

  - Regardless of overall proof costs, the TPS would still be around 2000.

  - Efficient in handling large data sets since it processes in batches.

- ZK Snarks:

  - Data taken from ZCASH

  - 27 TPS

  - Transaction fees cost 0.00001 ZEC ≈ $0.001873 USD

## StarkWare

<u>Summary</u>

- StarkWare is one of the few blockchain startups that have built Ethereum scaling products using Rollups technology.

- Offers two products StarkNet and StarkEx with a unique feature: Cairo programming language and ZK-STARK technology, respectively.

<u>Qualitative</u>

- StarkWare leverages ZK-Rollup technology integrated with STARKs technology – Scalable Transparent Argument of Knowledge.

- The project offers two products:

  - StarkNet

    - Permissionless decentralized ZK-Rollup that operates as a Layer 2 network over Ethereum. Scaling dApps to achieve unlimited scale for its computation without compromising security.

    - Based on the Cairo programming language – a turing-complete (able to solve any computational problem regardless of runtime) integrated with Solidity.

  - StarkEx

    - Layer 2 scalability engine utilizing ZK-STARK technology for applications such as DeFi and blockchain gaming.

    - Some of the applications currently using StarkEx include DeversiFi, Immutable, dYdX, Sorare.

    - Supports ETH, ERC-20, ERC-721 tokens, and synthetic assets. Readily support tokens on other EVM-compatible blockchains.

    - Brief overview of the transaction process: Application → StarkEx Service → Batches of transaction to SHARP → SHARP sends STARK proof to STARK Verifier → sends an on-chain state update to the StarkEx Contract.

- Team consists of Co-Founders Eli Ben-Sasson, Uri Kolodny, Michael Riabzev, and Alessandro Chiesa. Invested by Paradigm, Sequoia, Pantera, Three Arrows Capital, Intel, Alameda Research, Vitalik Buterin (Angel), Naval Ravikant (Angel), and much more.dcwsdsd

<u>Quantitative</u>

- Statistics as of December 6, 2021:

  - Total Value Locked: $1.25 billion

  - Total Number of Transactions: 65 million

  - Cumulative Volume Traded: $270 billion

- Hypothetical scaling measurements for StarkNet reach 300.000 transactions in a single proof on Ethereum mainnet, turning down gas fees per transaction substantially lower than Layer 1.

- ZK-STARK statistics:

  - Algorithmic complexity (prover): O(N\*poly^-log\*(N))

  - Algorithmic complexity (verifier): O(poly^-log(N))

  - Size estimate for 1 and 10.000 transaction: 45 KB and 135 KB

  - No trust setup required. Post-quantum secured. Collision resistant hashes.

  - Prover time and verification time: 1.6 s and 16 ms

## Immutable X

<u>Summary</u>

- Immutable X is the first Layer 2 platform for NFTs on Ethereum offering zero gas fees, instant executions, and carbon neutral NFTs without compromise.

<u>Qualitative</u>

- Fully decentralized Ethereum-based Non Fungible Token (NFT) scaling solution leveraging ZK-Rollups powered by StarkWare.

- As a developer, Immutable X developed a platform to mint NFTs and allow trading assets through APIs.

- Immutable X’s ZK-Rollups work by bundling NFT transactions on its platform then sending the transaction on Ethereum main chain to be verified.

- Users are able to choose between two Validium and ZK-Rollups through a system called – Volition.

- Currently, Immutable X has multiple NFT products in its marketplace. The several most featured products are TikTok Top Moments, Gods Unchained, Kolectiv, Guild of Guardians Heroes, GreenPark, and much more.

- To power the Immutable X engine, the developers created a token – IMX. The IMX token is an ERC-20 utility token built to accelerate the growth of Immutable X with current use cases include: Governance, Transaction Fees on the marketplace, and Staking.

- Immutable X focuses on several sectors of NFT such as Gaming, DeFi, Marketplace, Collectibles. Some of the notable partners that are integrating with Immutable are OpenSea, Illuvium, and ECOMI. Partnered with Huobi Ventures.

<u>Quantitative</u>

- Able to do 9.000 transactions per second

- IMX Tokenomics:

  - 2 Billion IMX

  - 51.74% in Ecosystem Development

  - 25% in Project Development

  - 19.26% in Token Sales both public and private

  - 4% in Foundation Reserve

- Zero gas fees for peer-to-peer trading

- Users have the ability to decide on trading fees

- 100% carbon neutral in minting NFTs
