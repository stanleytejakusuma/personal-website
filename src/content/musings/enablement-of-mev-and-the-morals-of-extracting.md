---
title: Enablement of MEV and the Morals of Extracting
description: Notes on the ethics of MEV extraction — who bears the cost, how searchers and proposers split the value, and whether outsourcing extraction is defensible.
date: '2023-01-01'
venue: boiler
tags:
- MEV
- Research
subtags:
- 'approximate date: 2023'
- MEV ethics
tickers:
- ETH
research: true
---

# **Notes**

- Typically, an actor who successfully captures MEV will do so at the expense of another party.

- Both searchers and proposers could be two different parties/actors.

💡 **Outsourcing vs. Monopoly in MEV Profit Maximisation:** There is an interesting debate whether it is more lucrative for a proposer to subcontract the task of identifying and capitalising on MEV to an open marketplace of searchers or if they should instead aim to consolidate the opportunity through a monopolistic approach.

- Assumptions used:

  - **Proposer** act as an honest party — sticking to their promised transaction ordering policy.

  - **Searchers** and **Proposers** are always separate agents.

- A blockchain network can have a variety of ordering policies to offer ‘fairness’ to all users.

- Prompts the inquiry of fairness itself:

  - What is the definition of fairness?

  - Should all users pay the same fee transactions are ordered on a FIFO?

  - Should users pay a fee in accordance with the transactions’ priority and all transactions are ordered based on the fee paid?

- Be that as it may, the general principle is that a user can transact as long as they have the capability to pay.

<img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-04.webp" width="1200" height="446" loading="eager" fetchpriority="high" decoding="async" />

- The concept of fairness falls short within a smart-contract-enabled system.

- Therefore, we revisit the definition of fairness itself.

\<aside\> 💡 **Recognising the Vital Role of User Intent in Fairness.** Users gauge fairness, not only on the ability to include a transaction in a timely manner, but by evaluating the actual outcome of their transaction and whether it aligns with their initial expectations when they signed the transaction.

\</aside\>

- This introduces the new concept of being censorship-resistant (CR); Now it’s not about ***whether*** a transaction is included, but ***how*** it’s included.

  - Weak CR: The traditional definition. A user can always order a tx for execution as long as they are willing to pay for it.

  - Strong CR: A user can ‘force’ the intended outcome of their tx with the appropriate fee.

- [<u>Office of Foreign Assets Control</u>](https://www.mevwatch.info/) (OFAC) is actively testing whether a blockchain network can continue to treat users fairly.

- To understand deeper into the technical aspects of MEV:

  - **Locating MEV**: Understanding how a searcher discovers transactions.

    - Methodology to find transactions:

      - Gossip Protocol: User submits their tx to P2P network and the tx is propagated to all nodes within a quick time frame.

      - Proposer Feed: Proposer publishes pending or recently ordered tx.\
        \
        <img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-03.webp" width="1200" height="543" loading="lazy" decoding="async" />

    - The majority of users send their tx to the gossip protocol.

  - **To date, the only way to defeat the dark forest is to avoid sending transactions to the P2P network in the first place.\
    \**

    - The article [<u>Escaping the Dark Forest</u>](https://www.paradigm.xyz/2020/09/escaping-the-dark-forest) eventually led to Flashbot offering a direct transaction feature.

    - MEV exploitation does not apply to rollups since users have a direct communication to the Proposer (Sequencer)

    - In truth, the success relied on the trustworthiness of Proposer to not exploit MEV.

    - Instead, searchers shifted their focus to locating recently confirmed tx to find arbitrage-like opportunities.

- \<aside\> 💡 To conclude, **any information about transactions can enable MEV.** \*\*Most discourse about MEV focuses on the ability for searchers to locate and interfere with the execution of pending transactions. However, even if the Proposer is completely trusted not to allow searchers to locate pending transactions, there's still the potential for searchers to utilize any information made available by the Proposer.\
  \
  \</aside\>

  - **Execution Environment**: Examining the technical environment under which the tx is executed.

    - Every blockchain network can be viewed as a finite state machine. Essentially, whenever a new transaction occurs, it changes the state in some predictable manner (i.e. current state → incoming tx → new state).

  - $$ \text{STF}(\text{database\\state}, \text{user's input}) = \text{new\\database\\state} $$

    - Typical smart contracts are designed to be permissionless with an inclusive policy, meaning that anyone can interact as long as they adhere to the conditions of the smart contract.

      - **Non-commitment to Output**: When a user signs a tx, they aren’t locked into a specific execution outcome. They can’t predict the exact final state of the blockchain when their tx will be executed. This unpredictability gives miners the opportunity to extract MEV.

      - **Smart Contract Preconditions**: Smart contracts enforce what must be met for a successful tx. These conditions merely revolve around enforcing protocol rules rather than the identity of the caller.

    - Author mentioned an issue with Cardano back in 2021.

  - <img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-02.webp" width="1200" height="571" loading="lazy" decoding="async" />

  - **Exploitation Strategies**: Investigating various strategies employed to exploit MEV opportunities.

- <img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-01.webp" width="960" height="540" loading="lazy" decoding="async" />\
  \
  \<aside\> 💡 Due to the public nature of user transactions and shared database state, the searcher can simulate pending tx to have full insight into future database states.\
  \
  \</aside\>

  - If they found the future database that is profitable for them, they strive to make sure the future database occurs.

  - The searcher then can execute one of the two strategies:

    - **Do not interfere**: allows the user’s tx to execute as expected and searcher will follow up with their own tx (i.e. backrun)

    - **Do interfere**: searcher must issue tx that sets up ideal conditions before user’s tx is executed (i.e. frontrun/sandwich)

  - **Influencing Ordering**: Exploring how a searcher can ‘influence’ proposer to prioritize the inclusion of their MEV exploitation tx.

    - The approach depends on the ordering policy implemented by proposer, but generally:

      - **Priority Auction**: searcher must pay a bid higher than all other.

      - **Latency Games**: searcher must send their tx before all other.

- <img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-05.webp" width="1200" height="600" loading="lazy" decoding="async" />\
  [<u>An example of PGA</u>](https://mirror.xyz/totlsota.eth/Vy8-41kYphcFt40rh8SpFsDojwlwGBGkWCafqD4nTak) as searchers constantly broadcast new tx with a higher fee.

  - If a single searcher finds an MEV opportunity, then it’s highly likely that other searcher finds it as well.

  - In the chart above, there is at least 100 tx within a 12-second window. Only one tx can succeed and capture the MEV opportunity. The others are still included in the block but will likely fail to execute — wasting both bandwidth and space.

  - Here, flashbots comes into play. They take the PGA to off-chain.

    - All searchers were encouraged to submit bundles to a **Relay** run by Flashbots

    - It’s up to the relay to pick the winning bid, the others were discarded.

    - This, consequently, paved the development of **Proposer-Builder Separation** (PBS). Distinguishing between the block builder (orders transaction) and the block proposer (finalizes the content).

    - Their primary goal is to ensure no single party can take all profit generated by MEV opportunities.

  - The process is substantially different for rollups (i.e. Arbitrum).

| **Ethereum**     | **Arbitrum**                 |
|------------------|------------------------------|
| ~800k Validators | Single Sequencer (Proposer)  |
| Public mempool   | Private mempool              |
| Random beacon    | Users have direct connection |

- Searchers discovered that the feed will randomly prioritize a different web-socket connection.

- This results in the best strategy was to open as many connections as possible.

- Leading to the \>150k connections to the Arbitrum Sequencer.

<!-- -->

- \<aside\> 💡 **[<u>Timeboost</u>](https://arxiv.org/abs/2306.02179) proposal.** Combines first-come-first-serve with priority auctions. The majority of transactions can be ordered according to FCFS, but searchers have an opportunity to participate in a priority auction for back-running opportunities. Thus, it removes any latency advantage while still allowing users to enjoy a FCFS ordering policy.\
  \
  \</aside\>

- Morality of MEV:

  - ANTI-MEV: MEV is harmful. Similar to throwing degens into a pack of wolves allowing them to be maximally exploited.

  - PRO-MEV: MEV is good. Providing financial incentives to perform actions that ultimately benefit the UX and stabilize the marketplace. Even more so, MEV is inevitable and we should embrace it.

  - To completely understand whether MEV is morally justifiable, we should evaluate its impact on the blockchain system itself:

    - **Fair Reward for All Proposers**: a fundamental notion held in L1 blockchains is to reward all proposers equally.

      - Decentralize Proposer Set: preventing a single proposer from growing disproportionately larger than the others to reduce 51% attacks.

      - Longest Chain Incentive: ensuring that all proposers consistently extends the longest chain. Since a re-org might happen if another block’s reward is significantly higher than the original block — [<u>resulting user instability</u>](https://www.cs.princeton.edu/~arvindn/publications/mining_CCS.pdf).

    - Fair reward in a **rollup** ecosystem is different due to the underlying trust assumptions.

      - Safety: an honest party to safeguard the system’s integrity.

      - Liveness: any users can submit tx using the on-chain forced inclusion mechanism.

    - The important conclusion is that a rollup doesn’t have to ensure continuous uptime for hundreds of thousands of participants or even achieve decentralization. What’s crucial is making sure the system remains open to all; And, that a single honest party can intervene when needed to safeguard it.

    - Another perspective to evaluate the morality of MEV is to review the impact/influence that a searcher’s transaction bundle can exert on user’s transaction:

  - <img alt="" src="/musings/enablement-of-mev-and-the-morals-of-extracting/image-06.webp" width="1200" height="161" loading="lazy" decoding="async" />

    - Front-Running:

      - Guaranteed Tx Delivery (Positive): Near’s Rainbow Bridge took advantage of MEV bots to guarantee transaction delivery for their fraud proofs.

      - Censorship Issues (Negative): frontrunners forces the user’s transaction to fail. Evident when [<u>Vitalik</u>](https://twitter.com/lawmaster/status/1392543598609059842) was trying to “dump” $SHIB.

      - Exposed Funds (Positive): In the dark forest example, the MEV bot stole funds while the user tried to recover it.

    - Sandwiching:

      - Worse Exchange Rate (Negative): Typically a sandwich process ends up with the worst exchange rate for the user’s side. Searcher benefits by creating an arbitrage-like opportunity and collect slippage. However, there are still arguments that [<u>sandwich is beneficial for routing trades</u>](https://twitter.com/tarunchitra/status/1549134678036303873).

      - Best Exchange Rate (Positive): Just In Time Liquidity (JIT) is a method in which the searcher injects concentrated liquidity just before the user’s swap and consequently withdraws immediately after the swap. User receives favourable exchange rate while searcher earn the fees, however passive LPs may find themselves with minimum to no fees.

      - Note: Both [<u>sandwich strategies</u>](https://twitter.com/danrobinson/status/1697438923918844054) can be combined and it will result in the worse of both. Users and passive LPs lose.

    - Back-Running:

      - Arbitrage Opportunity (Positive): the most common case for backrunning is to arbitrage the exchange rate after a large swap. Beneficial to synchronize DeFi protocols.

    - There is an increasing need for enhanced methodology/framework to review the impact of MEV, several of these criteria include:

      - Transaction bundle strategy

      - Application-specific effects

      - Profitability for agents it benefits

      - Potential losses for agents that do not benefit

      - Frequency of occurrence

    - For example, in Just In Time’s case, it provides users with a better exchange rate for tail-end assets. If and only if, it represents \<1% of all trades, then it could be a justifiable MEV strategy.

    - Author raises concerns that the on-chain data is available but the dataset is not yet easily accessible.

    - It all falls upon individual proposers/builders to exclude certain types of MEV. However, it’s highly unlikely due to impracticality without coordinative collective action.

  - Time-boost proposal is an example that combines: FIFO, ordering agreement by committee, enable back-running via micro-auctions.
