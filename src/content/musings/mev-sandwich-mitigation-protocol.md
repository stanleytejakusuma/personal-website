---
title: MEV Sandwich Mitigation Protocol
description: A research paper proposing a contract-layer mitigation of sandwich attacks on Uniswap V4 using action hooks.
date: '2024-01-30'
featured: true
venue: boiler
tags:
- MEV
- Research
subtags:
- 'approximate date: 2024'
- whitepaper
- Uniswap V4 hooks
tickers:
- ETH
research: true
---

**Eliminating Sandwich Attacks at the Contract Layer with Uniswap V4 Action Hooks**

Kshitij Chakravarty

Stanley G

Mihika Ghasias

Eashan Dubey

**ABSTRACT**

This paper addresses the pressing issue of Maximal Extractable Value (MEV) and its specific manifestation in the form of Sandwich Attacks within the Decentralized Finance (DeFi) ecosystem. Leveraging the features introduced in Uniswap V4, particularly the usage of action hooks, we propose a novel protocol solution aimed at mitigating these attacks. The methodology involves the detection of potentially malicious transactions at the contract layer and places them in an intermediate state, pending further analysis. Our solution seeks to balance heightened security measures with user experience. Empirical data support the urgency and feasibility of implementing this protocol to protect users from financial losses and ensure a fair and secure trading environment.

**1 INTRODUCTION**

In 2015, Ethereum was introduced as a platform that expanded the capabilities of blockchain technology through the implementation of smart contracts. These contracts, which can automatically execute when predefined conditions are met, have since become a fundamental component of blockchain applications. While cryptocurrencies initially served as alternative investment vehicles, the emergence of decentralized finance (DeFi) has positioned them as tools for a broader range of financial applications. DeFi utilizes smart contracts, primarily on the Ethereum blockchain, to offer financial services without the need for traditional intermediaries.

Decentralized Exchanges (DEXes) play a pivotal role in the DeFi ecosystem. Unlike centralized exchanges that use order books to match buyers and sellers, DEXes employ liquidity pools to enable direct trades. The exchange rates on DEXes are determined algorithmically, based on the ratio and volume of the paired cryptocurrencies within a given liquidity pool. These mechanics are driven by Automated Market Makers (AMMs).

The adoption of DEXes has been notable. For example, Uniswap, a prominent DEX, has on occasion exceeded the 24-hour trading volume of some established centralized exchanges. Recent data indicates that DEX platforms, including Uniswap, SushiSwap, and others, manage significant assets.

However, the transparency of the Ethereum network, particularly its mempool, has exposed certain vulnerabilities. One such vulnerability arises from the dependency of DeFi smart contracts on transaction ordering. Sandwich attacks, which exploit this dependency, involve malicious entities manipulating transaction order to influence prices to their advantage, often at the expense of regular users.

Previously, orchestrating a successful sandwich attack required precise timing. However, tools such as flashbots have reduced the complexity of these attacks, enabling them with increased efficiency. Despite the evidence highlighting the prevalence of such attacks, many DEX platforms have not made significant adjustments. For instance, platforms like Uniswap and SushiSwap often recommend fixed slippage tolerances without considering the specificities of individual trades. This paper aims to explore these challenges in depth and put forth a solution to address the risks associated with sandwich attacks in the DeFi space.

**2 MAXIMAL EXTRACTABLE VALUE**

Maximal Extractable Value (MEV) represents the potential profit that validators can derive from the strategic ordering of transactions within a block, beyond the standard block rewards and gas fees. While MEV is inherent to the design of Ethereum and other blockchain systems, its implications extend beyond mere profit extraction. It poses significant challenges to the security and integrity of the consensus layer of blockchain systems.

MEV's origins trace back to the term "Miner Extractable Value", which evolved to "Maximal Extractable Value" with the transition from Proof-of-Work (PoW) to Proof-of-Stake (PoS), reflecting the shift from miners to validators. In theory, validators have the capability to capture all MEV. However, in practice, independent entities known as "searchers" employ sophisticated algorithms and bots to detect and exploit MEV opportunities. These searchers often engage in competitive bidding wars, offering elevated gas fees to ensure their transactions are prioritized in the next block. In certain high-stakes scenarios, such as Decentralized Exchange (DEX) arbitrage, searchers might allocate up to 90% of their potential MEV earnings to gas fees.

The Ethereum ecosystem has witnessed the emergence of "Generalized Frontrunners", bots that continuously monitor the mempool for lucrative transactions. These bots replicate profitable transactions, modifying them with higher gas prices to effectively "frontrun" the original transaction. The narrative shared by Dan Robinson and Georgios Konstantopoulos in "Ethereum is a Dark Forest" offers a poignant depiction of the challenges posed by these frontrunners. Their account underscores the intricate nature of Ethereum's landscape and the pressing need to address the pervasive issue of MEV extraction.

Several techniques, such as "Gas Golfing", have been developed to optimize gas usage. By employing addresses with leading zeroes or maintaining minimal ERC-20 token balances in contracts, searchers can achieve significant gas savings. These methods exploit the nuances of Ethereum's storage cost structure and the Patricia Merkle trie's data management.

Flashbots, an initiative designed to counteract frontrunning, enables searchers to directly submit MEV transactions to validators, bypassing the public mempool. This approach mitigates the risks associated with exposing transactions to potential frontrunners.

MEV's manifestations are diverse, ranging from DEX arbitrage and liquidation processes to NFT MEV. While MEV can contribute positively by ensuring protocol stability and accurate pricing in DeFi, its adverse effects are pronounced. At the application layer, MEV can degrade user experience due to increased slippage. At the network layer, it can induce congestion, elevate gas prices, and in extreme cases, incentivize block reorganizations, compromising the blockchain's integrity.

The MEV landscape underwent significant transformation in 2021, marked by a surge in MEV extraction and consequent gas price escalation. The introduction of Flashbots has curtailed the influence of generalized frontrunners, leading to a reduction in gas prices. The impending transition to PoS and the implementation of Ethereum scaling solutions are poised to further reshape the MEV ecosystem. In the PoS context, unchecked MEV could hasten validator centralization and give rise to permissioned mempools. Initiatives like Proposer-Builder Separation (PBS) and the builder API have been proposed to counteract these potential challenges.

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-01.webp" width="1200" height="614" loading="lazy" decoding="async" />

Figure 1: MEV Dashboard Pre-Merge (source: [<u>flashbots.net</u>](https://explore.flashbots.net/))

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-03.webp" width="1200" height="491" loading="lazy" decoding="async" />

Figure 2: MEV (REV) Dashboard Pre-Merge (source: [<u>flashbots.net</u>](https://transparency.flashbots.net/))

Following the Ethereum merge, there were expectations that the MEV challenge might be mitigated. However, post-merge data reveals a concerning linear surge in MEV extraction. As of September 23, 2023, the post-merge reaches $500 million. To place it into perspective, the total MEV extracted before the merge was valued around $675 million. The rapid approach to pre-merge value in just a year stresses the gravity of the situation. It is important to note that these figures represent arbitrages and liquidations. Another significant form of MEV attack, the sandwich attack, has yet to be factored.

**2.1 SANDWICH ATTACKS**

In both traditional and crypto markets, privileged access to information has always been a coveted advantage. Historical examples, such as the Rothschild family's rapid information network in the 1800s, highlight the immense value of obtaining information faster than competitors. In the crypto realm, this competition for information has manifested in the form of Maximal Extractable Value (MEV).

A particularly concerning form of MEV is the "Sandwich Attack". This technique involves an adversarial entity, termed the 'Searcher', monitoring the mempool for pending transactions. Upon identifying a lucrative transaction, the Searcher strategically places two transactions around the target transaction, effectively "sandwiching" it. The first transaction, or "frontrun", is designed to manipulate the asset's price in a manner detrimental to the original transaction. The second transaction, or "backrun", capitalizes on the artificially inflated asset price, securing a profit for the Searcher.

Consider a user, Joe, who wishes to swap ETH for USDC on a decentralized exchange (DEX) like Uniswap. Joe's transaction, with a specified slippage tolerance, is broadcasted to the Ethereum network and awaits confirmation in the mempool. This pending transaction becomes visible to all, including predatory Searchers. Identifying an opportunity, a Searcher can:

1.  Front-run Joe's Transaction: The Searcher initiates a similar swap transaction with a higher gas fee, ensuring it gets processed before Joe's transaction. This action manipulates the asset's price, causing Joe's transaction to experience a less favorable rate due to increased slippage.

2.  Back-run Joe's Transaction: After Joe's transaction is processed, the Searcher immediately sells the asset, capitalizing on the inflated price and securing a profit.


While arbitrage and liquidation strategies can be viewed as natural outcomes of market inefficiencies, Sandwich Attacks are largely seen as predatory and value-extractive. They exploit users' lack of awareness and can lead to significant financial losses. Moreover, these attacks contribute to network congestion, volatile gas prices, and a degraded user experience.

The concept of MEV and its manifestations, such as Sandwich Attacks, have been extensively studied. Research indicates that the profitability of Sandwich Attacks increases with the victim's transaction size and slippage tolerance. Historically, bots would compete for these opportunities through Priority Gas Auctions (PGAs), driving up gas prices. However, with the advent of flashbots, Searchers can now guarantee the execution order of their transactions, further amplifying the threat of Sandwich Attacks.

To better comprehend the landscape of this attack, we have sourced data from *eigenphi*, which gathers its insights from on-chain raw data through *erigon* (previously known as *Turbo-Geth*). Their findings are then crossed-referenced with *Flashbot*’s *mev-inspect-py*.

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-04.webp" width="1200" height="456" loading="lazy" decoding="async" />

Figure 3: MEV Attacks Distributions by Profit (source: [<u>eigenphi.io</u>](https://eigenphi.io/))

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-05.webp" width="1200" height="454" loading="lazy" decoding="async" />

Figure 4: MEV Attack Distribution by Volume (source: [<u>eigenphi.io</u>](https://eigenphi.io/))

While sandwich attacks are predatory in nature, their prevalence is undeniable. In terms of profit, the data highlights that sandwich attacks are second to arbitrage. When considering the volume of MEV attacks, however, sandwich attacks lead by a significant margin. This massive difference serves as a concrete demonstration of the methodology we explained previously, with each attack consisting of a before and after transaction. Naturally, it effectively ‘doubles’ the counted volume for each instance of the attack. The data not only highlights the financial implication, but also draws attention to the congestion and strain these attacks impose on the network.

**3 UNISWAP V4**

Uniswap v4 is the latest iteration of the renowned decentralized exchange protocol. Building upon its predecessors, v4 introduces a myriad of enhancements aimed at optimizing user experience, reducing gas costs, and providing more flexibility to liquidity providers. One of the standout features of Uniswap v4 is the introduction of hooks, which are externally deployed contracts that execute developer-defined logic at specific points during a pool's execution. These hooks empower integrators to craft a concentrated liquidity pool with tailored execution, allowing for modifications to pool parameters and the addition of new features and functionalities.

**3.1 ACTION HOOKS**

Within the realm of Uniswap v4's hooks, the protocol supports a variety of callbacks, two of which are beforeSwap and afterSwap. When a pool on Uniswap v4 is created, a hook contract can be specified. This contract contains custom logic that the pool will invoke during its operation. The beforeSwap and afterSwap hooks are part of the swap execution flow, with the former being called prior to the swap and the latter post-swap.

These hooks are particularly significant when considering potential sandwich attacks. In a sandwich attack, a malicious actor observes a pending transaction on the blockchain and attempts to exploit it by placing their own transactions before and after the target transaction. By leveraging the beforeSwap and afterSwap hooks, developers can implement measures to detect or mitigate the effects of such attacks, ensuring that swaps occur in a secure and fair manner.

**4 FLASHBOTS**

Flashbots was created in response to the challenges posed by MEV (Miner Extractable Value) to the Ethereum blockchain. Their goal is to ensure that Ethereum remains transparent, open to everyone, and fair. Here's what Flashbots focuses on:

- Making MEV Transparent: Many Ethereum users don't fully understand MEV. Flashbots developed a tool called MEV-Inspect. This tool helps users see how MEV works and its impact over time.

- Fair Access to MEV: There's a risk that only a few big players could control MEV. Flashbots introduced MEV-Geth, a tool that allows everyone, big or small, to have a say in how transactions are ordered. This keeps Ethereum's open and decentralized nature.

- Sharing MEV Benefits: MEV can be profitable, but Flashbots believes these profits should benefit the wider Ethereum community. They're working to make sure that everyone, from miners to regular users, gets a fair share.

**5 POTENTIAL COUNTERMEASURES**

Front-running vulnerabilities necessitate robust countermeasures. As we delve into solutions, here are some examples that are pertinent considerations for our implementation. Strategies such as transaction counters and off-chain solutions have been developed to enhance both security and efficiency.

**5.1 TX COUNTER**

A universal transaction counter can be integrated within a smart contract. Each time a state-modifying transaction occurs, this counter is incremented. When a user sends a potentially front-runnable transaction, they also send a transactionCount value, specifying the expected value of the transaction counter when their transaction is initiated. If there's a mismatch, the transaction is reverted.

**5.2 GAS PRICE LIMITING**

By setting a maximum gas price (MAX_GAS_PRICE), this method curtails the ability of users to jump ahead in the transaction queue by offering higher gas prices.

**5.3 OFF-CHAIN ORDERING**

Off-chain ordering involves two steps: ordering (done off-chain) and settlement (done on-chain). This method can reduce costs and increase efficiency, but may introduce complexity and potential centralization.

**5.4 INTERMEDIATE STATES**

By introducing intermediate states in transactional processes, the potential damages from arbitrary transaction orders can be minimized. This method spreads logic across multiple blocks or transactions, ensuring consistent outcomes regardless of transaction order.

**5.5 APPLICATION LAYER SECURITY**

In the blockchain domain, smart contract security is a primary concern. While there's a clear need for enhanced protection, implementing contract-based countermeasures often requires more computational resources. This can lead to longer transaction times, potentially affecting user experience.

Design decisions must balance security enhancements with user experience implications.

Flashbots, via their MEV-Share protocol, aim to redistribute MEV back to its creators: the users. Their method, which operates at an abstraction level, redistributes MEV without diving deep into the contract layer. This approach ensures users are rewarded for the MEV their transactions generate while maintaining a decentralized and scalable system.

However, there's value in exploring contract layer security. Contract-based solutions provide more specific control and can be adapted to particular transaction scenarios. By working directly at the contract layer, there's an opportunity for direct interaction with transaction data, allowing for real-time adjustments.

In summary, while abstraction methods like Flashbots offer a broad solution to the MEV issue, exploring contract layer solutions is essential. These solutions can provide specific countermeasures, balancing enhanced security with user experience.

**6 SOLUTION MECHANICS**

The essence of this solution revolves around detecting potential frontrunning. When such a potential is identified, possibly through a transaction counter, the victim's transaction and the frontrunning transaction are discreetly placed in an intermediate state. During this pause, a scan of the mempool is initiated to ascertain if the sender address of the frontrunning transaction initiates a backrunning transaction for an opposite swap. The detection of such a sequence confirms a sandwich attack. Consequently, the frontrunning and backrunning transactions are reverted, and the victim's transaction is executed. This methodology might elongate transaction times for specific cases, but its strength lies in its ability to not just mitigate but entirely prevent the attack.

However, several considerations arise:

Do malicious bots initiate both frontrunning and backrunning orders simultaneously, or is there a delay post the execution of the victim's transaction?

The beforeSwap hook seems promising in determining the vulnerability of a transaction to a sandwich attack. What criteria are being evaluated to ascertain this vulnerability? Is a mere transaction counter adequate for this purpose?

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-06.webp" width="560" height="2048" loading="lazy" decoding="async" />

Figure X: Attack Detection Flow

**7 CODE SNIPPETS (HACKATHON)**

The TX_COUNT variable, which corresponds to the number of swap transactions executed by the given Liquidity Pool, is defined as both public and global to the smart contract. This allows us to retrieve the contract’s current count and calculate the intended position of a swap upon execution, by leveraging the gas-free implicit “view” capability of solidity. The implementation is further elaborated on in this section.

For the implementation of UniSwap’s V4 Hooks to correspond to the previously illustrated architecture (see data flow diagram in Section 6), 3 of the 8 uniswap v4 hooks are utilized: afterInitialize, beforeSwap, & afterSwap.

1.  **afterInitialize Uniswap V4 Hook**

The afterInitialize hook is triggered immediately after the addition /deployment of a liquidity pool.

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-07.webp" width="844" height="440" loading="lazy" decoding="async" />

In order to set up the transaction counter workflow, the afterInitialize hook is used to set the TX_COUNT variable to an initial value of 0.

2.  **afterSwap Uniswap V4 Hook**

The afterSwap hook is triggered upon the completion of a swap.<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-08.webp" width="832" height="454" loading="lazy" decoding="async" />

Hence, it is used to ensure that TX_COUNT is incremented upon the completion of a swap transaction - thus ensuring that the variable corresponds to the number of completed transactions - to allow for the determination of execution order.

**3. beforeSwap Uniswap V4 Hook**

When a swap request is sent, the beforeSwap hook is triggered with set parameters and calldata. Within this hook lies the beginning of the sandwich attack detection mechanism.

Within the calldata of the sent transaction, the intended position of execution is also sent across by the swap request. This parameter is decoded by copying into memory and decoded to uint form (see swap_tx_count variable in the snippet below). Typically, this should be TX_COUNT +1 if normal transaction order is executed. However, in the case of a front-run, where normal transaction order has been manipulated, the value of swap_tx_count will be lesser than TX_COUNT because the front-run would have cut ahead of the intended order. Hence, at any point where the inequality TX_COUNT \> swap_tx_count is true, an event is emitted to trigger a back-end check through a OpenZeppelin Defender. Once the back end analyzes other factors characteristic of a Sandwich attack through deeper analysis of the mempool for aback-run transaction, total paid gas price, and timestamps, the appropriate action is taken to revert the back-run transaction prior to execution.<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-09.webp" width="1200" height="852" loading="lazy" decoding="async" />

**8 FRONTEND CONSIDERATIONS**

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-10.webp" width="1200" height="661" loading="lazy" decoding="async" />

Figure X: Acknowledgement checkbox left unchecked. User unable to confirm transaction.

<img alt="" src="/musings/mev-sandwich-mitigation-protocol/image-02.webp" width="1200" height="658" loading="lazy" decoding="async" />

Figure X: Acknowledge checkbox checked. Users are able to confirm transactions.

Uniswap’s traditional swap process is intuitive with just a few clicks. However, a possible enhancement could be introduced at the 5th step (after the user signs the message to “Allow TOKEN to be used for swapping”). Once a user signs the message, an algorithm promptly evaluates the potential risk of an MEV attack on their transaction. If detected, a warning pops up, granting users an informed choice:

1.  *Modify*: Users are given several adjustable attributes to reduce the risk of MEV (i.e. slippage).

2.  *Acknowledge* and *Confirm*: Ensures the users are completely aware of the dangers of MEV and the potential vulnerabilities.

Pros:

1.  User Awareness: This step would educate users on the potential thread of MEV attacks.

2.  Flexibility: Users are given freedom to adjust their transaction parameters

3.  Preventive: The platform actively guides users towards safer transaction

Cons:

1.  Additional Complexity: An extra step might be cumbersome for novice users. Possibly leading to a drop in transaction completions.

2.  Over-reliant on User Action: Some users, despite the warning, habitually click through without comprehending it.

**9 CONCLUSION**

In conclusion, this paper has explored the complexities and vulnerabilities associated with Maximal Extractable Value (MEV) in the DeFi landscape. The significant risks posed by Sandwich Attacks necessitate a robust solution to protect both individual traders and the broader financial ecosystem. Utilizing the enhanced features available in Uniswap V4, specifically action hooks, we have designed a protocol to identify and mitigate these attacks at the contract layer.

Our proposed solution focuses on the real-time detection of potentially malicious transactions and deploys various countermeasures, including a transaction counter and mempool scanning, to prevent the execution of Sandwich Attacks. While our protocol may introduce additional complexities, such as slightly extended transaction times in specific cases, its overarching benefit lies in its capacity to thwart MEV attacks effectively.

Despite these advancements, MEV remains a dynamic and evolving challenge that demands continuous research and refinement of countermeasures. Further studies could explore how our protocol interacts with other MEV mitigation strategies and how it can be adapted for various DeFi platforms and services.

By directly confronting the issues surrounding MEV and Sandwich Attacks, we hope to contribute to a more secure and equitable DeFi ecosystem, thereby fostering greater confidence in decentralized financial technologies.
