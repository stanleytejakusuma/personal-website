---
title: ThorChain
description: "Cosmos is well-known for its \u201CInternet of Blockchains\u201D vision,\
  \ combining independent blockchains in one platform. To this end, Cosmos requires\
  \ a backer to provide liquidity and..."
date: '2022-03-21'
venue: wagmi
tags:
- DeFi
subtags:
- LP
- AMM
tickers:
- RUNE
---

Cosmos is well-known for its “Internet of Blockchains” vision, combining independent blockchains in one platform. To this end, Cosmos requires a backer to provide liquidity and power the ecosystem.

THORChain ($RUNE) aims to solve this by providing Cosmos a decentralized cross-chain liquidity protocol based on **Tendermint** & **Cosmos-SDK** and utilizing **Threshold Signature Schemes** (TSS).

<img src="/musings/thorchain/image-01.webp" width="900" height="450" loading="lazy" decoding="async" />

(source: THORChain blog)

Overview:

- Does not peg/wrap assets, but determines how to move them in response to user’s action

- Swap and add/remove liquidity

- Leaderless vault manager – entire process Byzantine-fault tolerant

- Continuous Liquidity Pool

$RUNE was built by a mostly anonymous team. Though, several team members are presumably disclosed at icobench.com (link below)

[<u>https://icobench.com/ico/thorchain/team</u>](https://icobench.com/ico/thorchain/team)

THORChain is backed by @YieldVentures and @Maple_block in a venture round and @jcarrharris participated as lead investor in the ICO.

Fret not! THORChain has been audited by @CertiK, @KudelskiSec, @gauntletnetwork, and @HalbornSecurity.

There are four general key roles in THORChain:

- LP

<!-- -->

- Swapper

- Traders

- Node Operators – provide bond to secure system

Now, let’s dive in and head to Valhalla!

THORChain fee schedule:

- Outbound fee (multi-chain fee) : 3x gas cost → 2x goes to pool and 1x goes to protocol reserve

- Slip-based fee: CLP algo includes a liquidity-sensitive fee that is proportional to demand and liquidity

- Network fee: fixed but intended to be dynamic

<img src="/musings/thorchain/image-06.webp" width="944" height="354" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.thorchain.org/how-it-works/fees))

THORChain’s price discovery revolves around pool design and external arbitrageurs.

<img src="/musings/thorchain/image-05.webp" width="656" height="130" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.thorchain.org/how-it-works/technology))

Technology behind THORChain:

- 1-way State Pegs

- State Machine

- Bifröst Chain Client

- TSS Protocol

Each node/validator has a ‘Bifröst’ service that connects to each chain. Once a node reads it, the transaction is converted into a THORChain witness transaction with several readable parameters to other nodes.

The transaction becomes pending and sent to the observer to await consensus. Each node serves as a relayer to the observer and holds small information.

<img src="/musings/thorchain/image-07.webp" width="1200" height="735" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.thorchain.org/how-it-works/technology))

The State Machine then finalizes the tx and performs logic: ordering, computing state changes, and delegation.

Bifröst Chain Client then signs the tx, loads it to the THORChain, and finally broadcasts it to the respective chain.

<img src="/musings/thorchain/image-02.webp" width="1200" height="770" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.thorchain.org/how-it-works/technology))

The protocol decided to split the vaults based on functionality – Asgard (Inbound TSS) and Yggdrasil (Outbound). The former has more committees holding bulk of assets and delegates to the latter that is fast for outgoing assets.

Let’s get back to the roles before!

LP earns reward based on the demand for that pool – higher demand, higher reward. Other factors affecting yield include ownership % of pool, swap volume, size of swaps, future incentives.

The $RUNE token interconnects all liquidity pools, that’s why THORChain’s pools are called Continuous Liquidity Pools. As a result, the swap output is as in the image below.

<img src="/musings/thorchain/image-03.webp" width="468" height="568" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.thorchain.org/roles/swapping))

THORChain intended there to be 120 total nodes initially. Nodes earn 67% of the system income. Public delegation is not permitted. Being a node costs around $1k to $2k a month.

Now, to the thing we’ve all been waiting for – $RUNE Tokenomics!

RUNE has a role of being a settlement asset, security mechanism, governance, and incentives. Its max supply is 500 million.

<img src="/musings/thorchain/image-08.webp" width="1168" height="698" loading="lazy" decoding="async" />

In addition to the roles, RUNE acts as the currency for Proof-of-Bond. RUNE’s price itself has a deterministic value based on the liquidity within the network.

The design requires bonding nodes to post 3x more RUNE.

The image below explains wallets that support $RUNE

<img src="/musings/thorchain/image-04.webp" width="1200" height="638" loading="lazy" decoding="async" />

More information on the financial model of RUNE could be accessed at [<u>https://docs.thorchain.org/thorchain-finance/continuous-liquidity-pools</u>](https://docs.thorchain.org/thorchain-finance/continuous-liquidity-pools)

State of The Network

- 101 Active ThorNodes

- 37 Standby ThorNodes

- $1.27B TVL

- 31 LP

- 27% avg. APY

- $6.1B Native on-chain swaps

Recently, THORChain has gone through massive updates: Synths and LUNA integration

Synths can drastically improve traders in general since it allows users to deposit RUNE and receive a synthetic version of their LP-pair.

Complementing this, THORChain’s integration with LUNA brings in an immense market since it gives more lending and trading options.

Roadmap:

- Protocol Owned Liquidity

- Protocol Insurance Fund

- Vault Nodes

- Lending Model

- Composite Model

TL;DR an oversimplification is that THORChain is similar to $UNI but multi-chain thanks to the Cosmos ecosystem!
