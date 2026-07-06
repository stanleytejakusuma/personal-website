---
title: Solana and Avalanche
description: "Solana (SOL) is a highly functioning open source\
  \ project that leverages blockchain\u2019s trustless and permissionless nature.\
  \ Solana provides an exceptional..."
date: '2021-12-21'
venue: wagmi
tags:
- L1/L2
tickers:
- SOL
- AVAX
---

### <u>Executive Summary</u>

Solana (SOL) is a highly functioning open source project that leverages blockchain’s trustless and permissionless nature. Solana provides an exceptional solution to the blockchain communication redundancy issue through its Proof-of-History addon protocol. Complemented with Proof-of-Stake, the consensus mechanism helps reduce network congestion capable of processing **2,000+ transactions per second compared to Ethereum’s ~15 transactions per second** and Bitcoin’s ~3 transactions per second with a relatively low fee. To date, Solana has one of the most vivid communities in the crypto space with more than **350 projects** building Decentralized Finance protocols, crypto gamings, NFTs, and much more.

### <u>Solana Unique Consensus Innovation</u>

Blockchains have been plagued with the scalability issue since the beginning. The farther down a blockchain’s network increases the slower it becomes. This hinders the purpose of being decentralized. Some blockchains (i.e. Ethereum) prioritize transactions based on the fees from high to low. Subsequently, disregarding those transactions with relatively low fees – pricing out microtransactions. Furthermore, the main reason for the lack of speed in blockchain is caused by discrepancies across nodes (local computer validators). Surprisingly enough, practically all blockchains disregard time in the algorithm, leading to each node communicating back and forth in deciding which event comes first becoming inefficient.

Solana solves this issue by presenting a new concept of consensus mechanism – synergizing Proof-of-History (PoH) and Proof-of-Stake (PoS). Proof-of-History primarily embeds timestamps in the blockchain metadata, by itself it is not a consensus mechanism per se an add-on protocol. However, this simple feature would enable validators to completely neglect verifying the sequence of events compared to Ethereum blockchain’s Proof-of-Work where validators need to communicate with each other to decide which transaction begins first. When the respective clocks across all decentralized networks are completely synchronized, transactions take less time to verify since the individual nodes do not have to dedicate processing power towards verifying slight differences in timestamps. Though Solana still uses Bitcoin’s native proofing algorithm – SHA256, this addon allows the network to optimize for speed thereby increasing throughput and feasible for scalability.

<img alt="" src="/musings/solana-and-avalanche/image-01.webp" width="360" height="429" loading="eager" fetchpriority="high" decoding="async" />

*Proof of History Timestamps*

Solana’s PoH evaluates the outcome based on a set of consecutive steps – a form of *Verifiable Delay Function*. Since validator nodes running in parallel are not allowed, a node is selected as the ‘leader’ in charge of generating the PoH sequence. This leader is responsible for generating the chain message across other nodes to provide a relative chronological order of events. Another integral part in Solana’s consensus mechanism involves the Byzantine Fault Tolerance (BFT) system called *Tower Consensus* in choosing the leader to generate PoH sequences. The protocol ensures that nodes are acting in the network’s best interest by allowing up to one-third faulty network nodes. Furthermore, if there was an error in the leader node, the next highest voting power would be replaced.

This system of Solana leads to a superior low blocktime without a delay in the network, with Solana achieving 0.4 seconds, Ethereum 13 seconds, and Bitcoin 10 minutes. Theoretically and practically, the main drawback is storage since each block now has more data than before. From the medium page posted by Anatoly Yakavenko, each time Nvidia doubles the number of SIMD lanes, the network would double in computational capacity. This indicates that Solana is bottlenecked by hardware and not software compared to existing blockchains.

### <u>zState of Solana</u>

Ever since the founder of Solana, Anatoly Yakovenko, published the [<u>whitepaper</u>](https://solana.com/solana-whitepaper.pdf) in November 2017, the network has seen immense growth. Starting from the single and multi-node private testnet in 2018, continued by the development of on-chain programs and a unique Smart Contract Engine. The Solana network launched its first incentivize testnet as a prototype mainnet in February 2020 called Tour de SOL with mainnet beta the following March. The network officially released the public mainnet in early 2021 complemented with Smart Contract functionalities.

As of writing, the Solana block height has reached an astonishing amount of 113,062,357 at an 0.6 seconds block time this last month. The block height is noticeably higher than Ethereum’s at 13,867,960 with an average of 13 seconds and Bitcoin’s at 715,113 with an average of 10 minutes. This certainly indicates that Solana has more block history provided that the network is young compared to these two blockchains. Almost similar to other Proof-of-Stake blockchains, the epoch for Solana is 3 days.

Diving into the sizable amount of block height, Solana total transactions to date since genesis is 47,204,653,708 compared to Ethereum’s 1,400,000,000 and Bitcoin’s 700,000,000 total transaction with a daily average transactions of 276,480,000 with the assumption of the month average TPS of 3200.

Contrary to Ethereum, however, Solana has 7,943,323 total number of unique addresses. This could indicate that the network is more centralized compared to Ethereum. The wealth distribution is as follows (i.e. 0-10: top 10 wealthiest account).

<img alt="" src="/musings/solana-and-avalanche/image-04.webp" width="690" height="768" loading="lazy" decoding="async" />

*Solana Token Wealth Distribution Addresses*

Security-wise, Solana has a lower number of validators (1400), 76% of the total circulating SOL tokens staked, compared to Ethereum (222,052) and Bitcoin (12,000), indicating that the network is highly centralized and prone to bad actors. A possible reason for the low amount could be from the barrier to entry in being a validator for Solana. Since it requires a fixed amount of 0.1 SOL and a fee that fluctuates each epoch, currently 3 SOL, estimating the cost to be $540/3 days. To solve this issue, the team allows a Delegated Proof-of-Stake system similar to Cardano.

The Total Value Locked (TVL) in Solana reached $12.23 billion with 13.69% dominance from Raydium, Solana’s AMM for DeFi, followed by 12.3% dominance from the network’s Decentralized Exchange – Serum. Comparing Solana’s development to other blockchain, the TVL percentage for Solana is much lower than that of Ethereum, respectively 20% and 67%. The rise of Solana’s TVL began in early September 2021, presumably caused by the token price increase and Marinade Finance, a liquid staking pool built on the network.

<img alt="" src="/musings/solana-and-avalanche/image-07.webp" width="1200" height="562" loading="lazy" decoding="async" />

*Total Value Locked Growth*

Solana’s main GitHub page has 229 total number of contributors, relatively half the amount that of Ethereum. The repository has 1275 forkes with a merged pull request 15777 and 44 branches. Interestingly, the repository has an active contribution commits to an average of 250 monthly. The latest release is Solana TestNet v1.9.1. The lines of codes are 87% constructed in the language called Rust – a programming language capable of building Smart Contracts that are fundamentally distinct from its counterpart Solidity (Ethereum). Being independent of Ethereum’s programming language, Solana has its own virtual machine called Sealevel. Since Rust language is a more low-level language than Ethereum, providing more power but developers are unable to adopt code snippets from EVM to Sealevel. However, Rust is capable of parallel running, meaning that Sealevel could run several contracts at the same time efficiently.

### <u>Team and Investors</u>

Before Solana’s Initial Coin Offering, the network had raised $23.79 million in the years 2018 to 2022 at an average price of $0.13 per SOL. Solana also raised $20 million through Early Stage Venture led by Multicoin Capital with 11 other venture firms. In March 2020, Solana raised $1.76 million through exchanges at $0.22 and received $314 million funding from private investors in June 2018 with Andreessen Horowitz, Polychain Capital, and Alameda Research as the lead investors. The total funding Solana received through both private and public sale is a hefty amount of $359.55 million.

Solana is founded by Anatoly Yakovenko, with extensive experiences as a software engineer at DropBox, Qualcomm, and Mesosphere. The Co-Founder and CTO is Greg Fitzgerald, Raj Gokal as the network’s COO, and Eric Williams responsible for the tokenomics and the Data Science team.

### <u>Tokenomics</u>

Solana initially minted 500 million tokens of not fixed total supply at genesis. Of that amount, the token distribution is as follows: 12.5% were retained by the founders, 1.6% were sold at ICO, 35.4% were allocated to locked investors, 38% to fund community-driven initiatives, and 12.5% are held by the Solana Foundation – operated by an independent board in Geneva, Switzerland.

The total supply of SOL tokens currently sits around 511 million. The token is designed to be both deflationary and inflationary. Deflationary through means of burning SOL tokens that are used as a transaction fee 100%, but now decreased to 50%. Inflationary in a sense of incentivized staking rewards. Originally, the inflation started at 8%, however it would decrease daily until it reached a fixed percentage of 1.5% within the 10 years time frame – currently the total inflation rate is 5.34%.

### <u>Quantitatives</u>

- TVL:MC = 20.5%

- TVL:FDV = 12.25 bil : 511,817,811 \* 195 = 12.27% (prone to increase in total supply since is inflationary)

- TVL:n protocols = 35 million with a 350 total number of projects estimate

- MC:n developers = 256,71 million

- MC:n commits = 3,49 million

Solana has a magnitude of TVL compared to MC as low as 20.5%. This indicates that the majority value of Solana is not yet locked, hence it is highly vulnerable to market sentiment and price volatility. Likewise, the TVL compared to Fully Diluted Valuation also results in the relatively low magnitude.

\
=

# Avalanche

### <u>Executive Summary</u>

Avalanche (AVAX) is a high-performance, scalable, and customizable project developed by AVA labs. Avalanche presents a unique method of network infrastructure capable of employing multiple blockchains. Its main network consists of three chains each with their own purpose: X-chain platform for creating and trading AVAX tokens, C-chain facilitates creation of smart contracts, and P-chain coordinates transactions, validators, and staking. Integrated with a four process of validation through nodes gossiping, the network could achieve an unparalleled 4500+ transactions per second with 1 second finality compared to Ethereum ~15 transactions per second and Bitcoin ~3 transactions per second. Recently, the network saw the first-of-its-kind token, Initial Litigation Offering, intended to provide financial funding for litigation finance – traditionally a private field.

### <u>Avalanche Consensus Mechanism</u>

Practical Byzantine Fault consensus, or in other words classical consensus, was the consensus mechanism that we used predominantly before the era of decentralization. The general idea was that it is a permissioned network where all parties must know each other and create conclusions based on several input data. The main deficiency was it is not scalable. Then, the Nakamoto consensus came in during 2009, introducing Proof-of-Work – a decentralized and trustless consensus protocol based on an algorithm where validators do not know each other. Finally, Avalanche Consensus Mechanism was formulated in 2019 with the notion of a leaderless network that is highly scalable, mainly based on Directed Acyclic Graphs (DAG).

<img alt="" src="/musings/solana-and-avalanche/image-02.webp" width="252" height="346" loading="lazy" decoding="async" />

*Example of Directed Acyclic Graph*

The consensus mechanism of Avalanche is similar to Proof-of-Stake, however there are several fundamental differences. Avalanche operates through small random subsets of validators (subsample voting) which are asked about the validity of the transaction. The subsets then gossip to exchange information regarding the state of the transaction, this is done back and forth until a preference is agreed for several consecutive times. In this case, the consensus is found and the number of nodes (subset of validators) does not matter since consensus undoubtedly would be reached in a designated time frame. Furthermore, this unique approach of Avalanche benefits the network in resulting a high throughput of 4,500 transactions per seconds (TPS) per subnet (not the whole network) with finality less than 3 seconds, compared to Ethereum’s ~15 TPS with 10 minutes for finality and Bitcoin’s ~7 TPS with 1 hour for finality. Security-wise, bad actors require 80% control of the network to launch an attack, whereas Bitcoin’s Proof-of-Work requires 51% of the processing power to sabotage and Ethereum’s Proof-of-Stake requires 51% of the total token to launch an attack.

Avalanche consensus mechanism goes through four phases in validation: Slush, Snowflake, Snowball, and Avalanche. During the Slush stage, every node would start in either neutral, true, or false state. When a transaction is presented to the node, it would either choose true or false, then the node would query other nodes to adopt the exact same state. At Snowflake, the network gains a short term memory, acting as a sequence counter for the majority state of the nodes in the subnet. However, every time the subnet’s majority state changes, the counter would reset from the beginning. After a set amount of consecutive states is reached, this marks the ending period for slush cycle. The next stage, Snowball, is built upon Snowflake by adding a level of confidence that serves as a longer term memory. At this point, the state would only change based on the past queries, not consecutive snowflakes. The transaction would be tied together in finality and appended to a DAG structure in the network at the Avalanche stage.

The four phases are processes that operate in each subnet of the Avalanche network. The network consists of multiple subnets and in each subnet there could be multiple blockchains as well. The Avalanche network could theoretically deploy an infinite amount of subnets, but there is a special subnet called the primary network. This primary subnet has at least three blockchains: X-chain, C-chain, P-chain. The X-chain has the purpose of token decentralizations (creation, management, and transactions). This chain is built on the DAG-like structure for storage efficiency. The C-chain, on the other hand, is the exact copy of the Ethereum Virtual Machine (EVM). Developers could simply copy and paste their protocols from EVM to Avalanche’s Smart Contract Virtual Machine. The P-chain is the network’s metadata and the management system; it manages subnets, coordinates all validators and the staking mechanism.

The unique network infrastructure in subnets made Avalanche a highly scalable project, since each subnet is a new network. Subnets could also have multiple blockchain similar to the primary network or it could have its own consensus model (either PoW or PoS). Developers have the freedom to modify the rule for their subnets: it could be permissioned or permissionless, users could also require KYC or ID, and much more.

Several points to note: all members of the subnets must be a member of the primary network. The Snowman Protocol has a subtle but powerful difference. The protocol is optimized for Smart Contract with high throughput that is designed as the linearized version of Avalanche Consensus Mechanism, whereas ACM has the DAG-like structure. Some subnets that require a high processing power (either RAM or CPU) may require the validators to meet certain hardware requirements in efforts to not burden the general network. Double spending is treated through voting on not only the transactions itself but parents and the descendants as well.

### <u>State of Avalanche</u>

AVA labs team published four whitepapers (Platform, Consensus, Token, and Stablecoins) in May 2018 to begin the Avalanche protocol. Recently, the project has undergone a major upgrade, Apricot phase, which reduces 50% transactions fee in all chains and implemented a dynamic pruning on the X-chain.

The Avalanche network currently has several blockchains: the 3 main chains (X, C, and P), Bthereum, C-chain PoW, Dthereum, MAKOIN, Testnet, and X-chain PoW. For the main C-chain, the current block height is 8,729,807 with a 3 seconds average block time rate. The total number of unique tokens in the smart contract chain is 30,526 (24,671 ERC-20 and 5,855 ERC-721). Furthermore, the X-chain has the block height equivalent of 3,196,592 vertices.

Since genesis, the total value bridged using Avalanche has reached $6 billion. The total transactions in both the X and C chain are 54,221,776 (3,241,458 C-chain and 50,980,318 X-chain) less than that of Ethereum. However, the average TPS for both blockchains is 5.85 seconds with a finality of 0.76 seconds. This is uncommon since usually finality time is longer than the average TPS. Take Ethereum as an example, the blockchain has ~13 TPS with 1 minute finality time. A reasonable explanation could be that Avalanche could process blocks exponentially faster with the help of DAG. Furthermore, the data below proves that the more nodes participating in the network means that the more gossip happens, hence the TPS could increase as well.

<img alt="" src="/musings/solana-and-avalanche/image-05.webp" width="944" height="504" loading="lazy" decoding="async" /><img alt="" src="/musings/solana-and-avalanche/image-03.webp" width="926" height="500" loading="lazy" decoding="async" />

*Average TPS and Network Usage*

Following the network exponential increase since Q3 of 2021, the number of unique active addresses currently is around 1,452,000 – more centralized compared to Ethereum. Though relatively centralized, the AVAX token staked ratio is 59.46% with the annual rewards (APY) 9.82%.

Another reason that this network is still on its growth stage is from the total number of validators. Avalanche currently has 1,193 validators across all its blockchain, whereas Ethereum has 225,052. The main rationale for this is that Avalanche has a barrier to entry up to a minimum of 2,000 AVAX to be a validator. The developers did set this on purpose, not for the network to be highly centralized, but to ascertain that the validators are hoping the best for the network and not bad actors.

Based on DeFiLlama, the current Total Value Locked in Avalanche reached $12.07 billion. However, almost another half of the value locked in Avalanche is in the form of Staking and Borrowing (total of $20.11 billion). The growth began during early September 2021, jumping from a mere $500 million value locked to $2 billion, which was accelerated by the Avalanche Foundation in hopes to attract AAVE and Curve. As a result, the top 3 leading dominance on the value locked are AAVE (26.5%), Trader Joe (17.97%), and Benqi (13.09%).

Outside of DeFi, Avalanche saw the first of its kind token, Initial Litigation Offering (ILO), go live on Republic investment platform. The token opens up an opportunity for retail investors in the litigation finance field. Litigation finance was a private field, however ILO not only raises the money needed to pursue litigation, but it tokenizes the right to legal claims. Retails who decided to invest in these tokens could get 80% of their money back if the court dismisses the lawsuit, lose all their investments if the plaintiff loses the case, or receive a 2.5 - 3x upside return.

Avalanche’s GitHub page has a total of 7,825 commits and 57 contributors, relatively a quarter of Ethereum. The repository has 259 forks, a relatively low amount despite its commits, with 977 merged pull requests and 66 branches. The commit activity peaked during mid June 2021, since then it has been in a constant decline. The lines of code are almost all constructed in Go language.

### <u>Team and Investors</u>

Avalanche was founded by the AVA labs team consisting of people from various companies such as Microsoft, Google, Credit Suisse, Morgan Stanley, NASA, etc. The current president is John Wu, founder of multiple digital businesses companies and Harvard MBA graduate.

The project received funding first from IOSG Ventures in seed round back in January 2020 with an undisclosed amount. The ICO raised $50 thousand for the project in June 2020. Recently, the Avalanche also did a Private Sale of AVAX token back in June 2021 from multiple companies – Polychain and Three Arrow Capital as the lead investors.

### <u>Tokenomics</u>

Avalanche minted 720 million AVAX capped-supply deflationary token. Several key properties of the token include: no ‘rich-get-richer’ scheme since Avalanche is leaderless, validators are incentivized to stay online and operate correctly as their rewards are based on Proof-of-Uptime and Proof-of-Correctness, fees are burned. AVAX token also has use cases in governance future development voting. Initially, Avalanche minted 360 million tokens at the genesis block with the other 360 million being minted based on the [<u>equation in the whitepaper</u>](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bc56430d6b8792b8d1_Avalanche%20Native%20Token%20Dynamics.pdf). Furthermore, 180 million tokens are sold for an incentive program to bring Curve and AAVE to the network. Currently, there are 207.86 million tokens not time locked and 152.15 time locked based on the circulating supply.

<img alt="" src="/musings/solana-and-avalanche/image-06.webp" width="1200" height="531" loading="lazy" decoding="async" />

*360 million AVAX supply distribution*

### <u>Quantitatives</u>

1.  MC to TVL: <span class="mark"></span>27,201,733,861:12,020,000,000 = 44%

2.  FDV to TVL: 80,527,283,116:12,020,000,000 = 14.92%

3.  TVL to n protocols (defilama): 12,020,000,000:109 = 110,275,229

4.  MC to n developers: 27,201,733,861:57 = 477,223,401

5.  MC to n commits: 27,201,733,861:7,825 = 3,476,259

Almost half of Avalanche’s Market Capitalization consists of value locked in the network. This indicates a low probability of AVAX being vulnerable to market sentiment and price volatility. Compared to Fully Diluted Valuation, the magnitude is significantly lower since half of the token is not yet released. For the whole Avalanche’s DeFi network, the average sums up to $110.2 million per project contributing to the Total Value Locked.
