---
title: MEV and Automated Market Makers
description: 'The journey from understanding traditional market trading structures
  to advanced trading mechanisms of AMMs brings about a pivotal aspect of decentralized
  finance: Maximal...'
date: '2023-01-01'
venue: boiler
tags:
- MEV
- Research
subtags:
- 'approximate date: 2023'
- AMM
tickers:
- ETH
research: true
---

The journey from understanding traditional market trading structures to advanced trading mechanisms of AMMs brings about a pivotal aspect of decentralized finance: Maximal Extractable Value (MEV). MEV represents both a challenge to fairness and a harnessable inefficiency. Before we begin our adventure into the realm of Ethereum’s dark forest, it’s important to grasp the concept of MEV and its profound implications on the network’s traditional landscape.

The term Maximal Extractable Value itself was a reflection of the potential profit a party could attain by executing a certain plan to order or omit transactions in the block. Theoretically, MEV could only be extracted either by validators or miners, but in reality a large portion of extracted value is done by an independent party referred to as “Searchers”. These searchers run complex algorithms to find profitable strategies to extract MEV. Consequently, they execute the trades by running a concurrent bot to automatically submit those transactions.

In a typical ecosystem of MEV, there are several actors with each holding a crucial role for extraction to be successful: **searchers** and **relayers**. Searchers deploy complex strategies and custom-built bots that analyze transaction patterns to anticipate market movements that can capture value from disparities in the current state of the mempool compared to the new state after the searcher’s transaction has been included. Relayers, on the other hand, serve as a “bridge” between searchers and the blockchain. Their sole role is to aggregate transactions from searchers. This process is crucial to not only optimize the chance of the transactions to be included but also reduces gas fees and potential negative impact on the network (i.e. congestion).

Altogether, searchers and relayers work in synergy to create a dynamic that envelops the competitive nature of extracting MEV. Searchers constantly adapt to the shifting landscape of blockchain, while relayers facilitate the technical execution.

In the dynamic landscape of Automated Market Makers (AMMs), MEV plays a role in orchestrating the flow of trades and subsequently – liquidity. The different designs of AMMs, from Constant Function Market Makers (CFMMs) to other more complex variations, offer abundant opportunities for MEV strategies. Take CFMMs as an example. The deterministic mechanism for price discovery makes them particularly susceptible to MEV strategies such as front-running. There are more to MEV strategies than just front-running in CFMMs; This opens the door to a plethora of potential attacks on AMMs, which we will explore in the next section.

1.  Front-running: This strategy occurs when a trader or bot discovers a pending transaction

2.  Back-running:

3.  Sandwich:

4.  Arbitrage:
