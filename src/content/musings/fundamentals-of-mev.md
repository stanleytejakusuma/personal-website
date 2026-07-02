---
title: Fundamentals of MEV
description: Fundamentals of MEV The dark forest of ethereum - While a user of ethereum
  might interact with the protocol through smart contracts and non-custodial wallets
  at the end of the...
date: '2023-01-01'
venue: boiler
tags:
- MEV
- Research
subtags:
- 'approximate date: 2023'
- MEV fundamentals
tickers:
- ETH
research: true
---

**Fundamentals of MEV**

**The dark forest of ethereum -**

While a user of ethereum might interact with the protocol through smart contracts and non-custodial wallets at the end of the day most users don’t truly know what goes on between the mempool, validators, and how much they should be paying in transactions fees. Additionally, even if they are aware of the extra fees they might be paying from MEV opportunities, realistically there are no current means of mitigating these negative externalities.

**Types of MEV and how it interacts with users -**

<u>DEX Arbitrage</u> - Due to AMM token prices being set by the ratio of tokens in a pool contributed by LP’s, Arbitrageurs have the opportunity to buy tokens during price fluctuations and then sell them on centralized exchanges which maintain a constant price. This form of MEV is not necessarily harmful as it helps keep the market prices of DEX assets as true as possible to their true value.

<u>DEX Sandwich attack</u> - This type of attack starts with a searcher which scans the mempool for transactions which include an asset swap on an AMM exchange. Then by paying a higher gas fee they can set a transaction directly in front of their target. The transaction preceding the target is not an arbitrary transaction but rather one which swaps the exact same assets as the transaction it is frontrunning. By swapping the exact same asset the demand for the swapped asset increases. This causes “slippage” for the targeted user’s transaction which is defined as the difference between the price the user thought they would pay and the actual AMM determined value of the asset when the transaction is finalized. Finally, to complete the sandwich, the attacker sells their swapped asset back now at a higher price which effectively makes them profit at the cost of the targeted user. This type of attack is the most vicious for direct users and oftentimes unpreventable for the trader.

<u>Flash loans</u> - With the ability to take loans of any amount with no need to collateralize, users are able to take part in sandwich attacks on transactions of any size with no need to have obtained such a massive amount of the underlying asset as they might have previously. This only adds to the problem described above as the effects of slippage are greatly increased as larger transactions take place.

<u>Liquidation fees</u> **-** When taking out loans on DEXES users are required to put up some amount of collateral which backs the loan they are taking out. As crypto assets tend to fluctuate in price drastically, as does the value of the collateral which a user puts up. Hence, if a user's collateral loses enough value the position will be liquidated in order to cover the user’s debts and protect the lenders. When this liquidation takes place it is up to anyone to create the liquidation transaction and the borrower must then pay a liquidation fee after the fact. This means liquidators want to fight to get these transactions which will allow them to reap the liquidation rewards.

<u>Cross-chain MEV</u> - Theoretically there are unlimited possibilities for Cross-chain MEV which we don’t even know exist yet. Currently the most common type of MEV occurs between exchanges which are built on different chains. With each liquidity pool having a different price for assets on different chains it is easy to exchange an asset in one DEX for Weth, take it cross chain to another DEX and then exchange it in a liquidity pool which will leave you with a higher value of the starting asset. While this transaction isn’t necessarily harmful, it is just scratching the surface of what's possible with cross chain MEV

**Flashbots take on MEV -**

With MEV being such a large source of value in the industry, Flashbots is concerned that MEV extractors will be able to reap massive profits and snowball their growth which will create massive capital deficiencies between validators and inherently harm decentralization. Rather than approaching MEV as a problem which needed to be resolved, Flashbots approached the problem as a risk to decentralization and the security model from which Ethereum is built.

<u>MEV-Boost -</u> This tool was implemented as a means of separating Block builders, Relays, and Proposers. By segmenting transactions with relayers blocks are created with a fair and permissionless exchange of block space on the proposer end and transaction sequencing on the builder end. The main idea with this tool is to eliminate the need for trusting relationships between block proposers and block builders which would greatly decrease decentralization as agreements were eventually created between these parties.
