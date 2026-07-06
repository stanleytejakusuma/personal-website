---
title: Edge Protocol (Thread)
description: Terra blockchain as we may know is the ecosystem that brings DeFi to
  the mass public with stablecoins being the sole building blocks of the network.
  Here comes @EdgeProtocol!...
date: '2022-03-07'
venue: wagmi
tags:
- DeFi
subtags:
- DEX
- AMM
---

Terra blockchain as we may know is the ecosystem that brings DeFi to the mass public with stablecoins being the sole building blocks of the network. Here comes @EdgeProtocol! Dubbed as the ‘Airbnb for banking’ in being the first community-driven lending market on $LUNA.

<img alt="" src="/musings/edge-protocol-thread/image-06.webp" width="1200" height="600" loading="eager" fetchpriority="high" decoding="async" />

Edge Protocol is a money-market-as-a-service (MMaaS) provider on $LUNA serving as both a community-based pool creation and a portal offering retail users access to various lending pools.

Despite being in the beta stage, the protocol successfully raised $1.75M in seed round, attracting investors:

- @hashed_official (lead)

- @theAllianceGG

- @Qi_Capital

- @FoliusVentures

And angel investors:

- @stablekwon

- @mrjasonchoi

- @santiagoroel

- @BadassWang

- @ashinwinrz

- @mcantieri

- @tansawit

- @limowooj

- @ysihyeok

- @nipun_pit

The people behind @EdgeProtocol are Panai Katekaew (Project Lead), Nattapat Sriwichailumpun (Lead Engineer), and 3 others.

Security-wise, the protocol has been officially audited by @the_z_institute for its smart contract. The result was perfect, there were no critical findings and all issues have been resolved!

@EdgeProtocol is not THE money market itself, but the protocol to facilitate users to create money markets. To this end, users can create a public pool or private pool (for specific target audiences) with customizable parameters.

Pool creators have freedom to customize the fee collected in their pool: market fee or stability reserve security fee.

The protocol divides the phase of pool creation into three phases, we are currently inside the first phase – protocol-owned money markets.

<img alt="" src="/musings/edge-protocol-thread/image-05.webp" width="1200" height="628" loading="lazy" decoding="async" />

Delving into the @EdgeProtocol, the project’s states currently on beta launch called Dawn of Edge. Its first functionality will offer earning interest, borrow, leveraged long position, and open short position.

In Dawn of Edge, #LUNAtics have only several options of assets in the genesis pool: $UST, aUST, $LUNA, LunaX, bLUNA, $ANC, and $MIR.

Made specifically for the beta launch, the cap on total value supplied into the genesis pool are Total deposits $10M, aUST $1M, and LunaX $1M. This is set to limit potential damage and secure the user's fund.

Details below are for the genesis pool only

Each asset has its own interest rate model determined by safeness and volatility. The safe and less volatile assets will have high collateral and borrowing factors.

<img alt="" src="/musings/edge-protocol-thread/image-07.webp" width="1200" height="529" loading="lazy" decoding="async" />

As a **lender** earning APY, the lending rate follows the formula Borrowing Rate \* (1 - Insurance Fund Fee) \* asset’s utilization rate.

As a **borrower** that needs to collateralize an asset, the borrowing rate is the interest rate model of that asset. Liquidation occurs when the risk ratio is above 100% (formula later on the thread)

Insurance Fund (IF) Fee is the revenue model that @EdgeProtocol employs. The fee is in the form of spread between lending and borrowing rate, which has another usage to pay liquidated debt.

All interest rates are determined by a function of utilization rate (percentage of that asset borrowed against asset supplied). Dawn of Edge utilizes the Jump rate model, which is most efficient at a higher utilization rate.

<img alt="" src="/musings/edge-protocol-thread/image-02.webp" width="1200" height="725" loading="lazy" decoding="async" />

<img alt="" src="/musings/edge-protocol-thread/image-01.webp" width="1200" height="711" loading="lazy" decoding="async" />

<img alt="" src="/musings/edge-protocol-thread/image-04.webp" width="1200" height="723" loading="lazy" decoding="async" />

Price discovery of every respective assets are determined by their ecosystem:

- UST → Band Protocol

- LUNA → Terra oracle module

- aUST → Anchor Market contract

- LunaX → LunaX staking contract

- ANC → Band protocol

- MIR → Band protocol

- bLUNA → HUB contract

Following are the parameters that are vital in the protocol:

Risk Ratio – determines the position health

<img alt="" src="/musings/edge-protocol-thread/image-03.webp" width="1200" height="104" loading="lazy" decoding="async" />

Collateral Factor – borrowing power from supplying an asset

Borrowing Factor – Amount of asset user can borrow given the Collateral Factor

Liquidity Incentives – additional collateral given to liquidators to perform liquidation of unhealthy accounts.

Roadmap:

Q1 2022

- Community Genesis

- Dawn of Edge

- Work with partners for Protocol-owned Money Market (POMM)

- Full audit with @SecurityOak
