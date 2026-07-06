---
title: Polygon and Helium
description: '- Ethereum scaling solution - Problems: throughput, not user friendly
  (cost), limited options (adopts eth problems) - Over 80 big names were migrated
  from eth to polygon -...'
date: '2021-12-27'
venue: wagmi
tags:
- L1/L2
tickers:
- MATIC
- HNT
---

- Ethereum scaling solution

- Problems: throughput, not user friendly (cost), limited options (adopts eth problems)

- Over 80 big names were migrated from eth to polygon

- Unclog

- An ecosystem

## <u>Polygon Scaling Solution</u>

After the Matic team rebrands the project to Polygon in February 2021, the protocol shifts its goal to focusing on developing and augmenting the Ethereum blockchain. Polygon is a layer 2 scaling solution for Ethereum, by definition it does not change the Ethereum’s blockchain but designed to optimize computation and transaction storage of the main chain – Polygon is dubbed the sidechain.

Polygon is an ecosystem that provides several scaling solutions for Ethereum that employs a Proof-of-Stake (PoS) consensus mechanism. In this article, Ethereum is defined as the main chain, whereas Polygon is the side chain. The solution consists of three main methods:

1.  Plasma Chain : Bundles transaction into blocks batched into a single submission to the main chain.

2.  Optimistic Rollup : Similar to Plasma Chain, however have capability of scaling Ethereum Smart Contracts.

3.  zk-Rollup : Multiple transfers aggregated into a single transaction.

Being a side chain, Polygon does not modify the attributes of Ethereum, but instead augments for network optimization. All the transactions done on Polygon would be sent to the main chain to be combined on the blockchain. In simple terms, Polygon is an added arm of Ethereum.

The project uses a hybrid PoS and Plasma Chain by implementing two unique types of chains: Stand-alone and Secured chains. Stand-alone chain has its own consensus model, it could either be PoS or Delegated PoS similar to Cardano (ADA); this chain has its own sovereignty. The latter chain leverages security-as-a-service schemes while using Plasma Chain as the consensus model. Much preferred by startups and security-focused projects, Plasma chain is a blockchain that is anchored to the main chain that uses fraud proofs (i.e. zk-rollups or optimistic rollups), or it could be validated by professionals. To enable PoS mechanism, Polygon runs Heimdall and Bor nodes on the Plasma Chain. The Heimdall nodes run in parallel with Ethereum in real-time with responsibilities to monitor sets of contracts on the Ethereum network and choose PoS validators. Whereas, the Bor nodes produce the blocks after being shuffled by the Heimdall nodes.

To facilitate the goal, Polygon operates an abstract and composable network architecture that consists of four distinct layers. The Ethereum Layer is the base layer and leverages Ethereum’s high security with several sets of smart contracts; the main usage of this layer revolves around finality and checkpoints, staking, resolving disputes, and communication between Ethereum and Polygon chains. The Security layer runs in parallel with Ethereum to manage validators, distribution of rewards, shuffling, and Polygon chain validation. Since it is implemented directly on Ethereum, Polygon could leverage Ethereum miners as validators. These two layers are optional to be applied, however the next layers are mandatory to run in the Polygon ecosystem. The Polygon Network layer is responsible for transaction collation, local consensus, and block protection. Finally, the execution layer is responsible for interpreting and executing transactions which consists of the execution environment and execution logic. Polygon is designed to be generic and abstract to facilitate projects that are looking for scaling solutions which could be tailored to suit their needs.

## <u>State of Polygon</u>

The ecosystem has only seen exponential growth ever since the Matic team rebranded its network to Polygon. With the latest major roadmap achievement implementing zk-rollups by welcoming Mir into its ecosystem. That in mind, Polygon is always eager to expand its ecosystem acting as a platform for developers similar to AWS. It is realized with their services: Polygon SDK (open source modular and extensive framework for building Ethereum-compatible blockchain networks), Polygon PoS Chain (EVM-compatible Ethereum sidechain), Polygon Hermez and Avail (zk-rollup validity proof scaling solution), Polygon Miden (STARK-based scaling solution), Enterprise Chain (blockchains that use security-as-a-service), and Polygon Zero (zk-rollups based on plonky 2 – a recursive proof system).

As of writing, Polygon has reached a block height of 23,379,126 with 2.7 seconds finality. The block height is slightly higher than that of Ethereum 13,947,040 with 13 seconds finality and Bitcoin 717,332 with 10 minutes finality. Provided that Polygon bundles transactions and a scaling solution for Ethereum, the number of block heights is reasonable enough. Transaction-wise, however, Polygon is slightly lower than Ethereum with 1.27 billion compared to 1.4 billion total number of transactions. Polygon wins over Ethereum in transactions per seconds, 43.4 TPS compared to 10 TPS. Despite high throughput, Polygon has an immensely lower gas fees compared to Ethereum.

<img alt="" src="/musings/polygon-and-helium/image-10.webp" width="1137" height="281" loading="lazy" decoding="async" />

*Ethereum and Polygon Transaction Fees*

As seen from the chart, there is no distinct correlation between market cap and number of daily transactions in Polygon. An interesting aspect, though, is that daily transactions turn volatile when the market cap is declining. One of the possible explanations relies on the assumption that there are more assets in circulation during the period of decline.

<img alt="" src="/musings/polygon-and-helium/image-07.webp" width="432" height="288" loading="lazy" decoding="async" />

*Market Cap vs. Daily Transactions*

Polygon has a low number of token holders, 326,337, which could make the price vulnerable to whale attacks. However, do note that the top 5 of the token holders are all owned by the Polygon ecosystem itself: Staking contract, Vesting, Plasma Bridge, and Ecosystem token wallet to unlock for developer growth (not for public) – respectively.

<img alt="" src="/musings/polygon-and-helium/image-09.webp" width="704" height="436" loading="lazy" decoding="async" />

*Polygon Wealth Distribution (cryptorank.io)*

As one of the easiest commit chains integrated with Ethereum, the Polygon ecosystem has reached an astonishing $9.76 billion in Total Value Locked (TVL) – almost half of its market cap – taking into account staking, borrowing, pools, offers, and treasury. The TVL in DeFi is only $5.28 billion, however, relatively half from the all-time high in June 2021. The spike started when the Matic team rebranded its ecosystem into Polygon and started to integrate its network infrastructure into Ethereum. Most of its dominance is controlled by AAVE – a DeFi lending platform as high as 44.60%. Continued by Quickswap – Polygon’s AMM for DeFi as high as 14.89%, and Curve Finance – a decentralized trading platform efficient for stablecoins as high as 6.68%.

<img alt="" src="/musings/polygon-and-helium/image-05.webp" width="1200" height="616" loading="lazy" decoding="async" />

*Polygon Total Value Locked*

Polygon’s main GitHub repository (matic.js) has a total number of 44 contributors and 973 commits. The most recent release is support for ERC-1155 in the PoS consensus mechanism. The ecosystem also has undergone several audits: Token Contract audit by Nomic Labs in 2019 and Plasma Contract audit by Quantstamp in 2020.

## <u>Team and Investors</u>

Founders:

1.  Jaynti Kanani

- Data Scientist

- Software Engineer

- Focuses on the software and interoperability of Polygon

2.  Sandeep Nailwal

- Investment Banker

- Consultant

- MBA from NITIE

- Focuses on the finance side of Polygon

3.  Anurag Arjun

- Project Manager

- Product Design and Manager

- Focuses on the product that Polygon offers

Polygon received most of its funding through ICO as much as $450 thousand. Mark Cuban and Coinbase Ventures are the lead investors in the financial fundings.

## <u>Tokenomics</u>

Polygon has a native token called MATIC (from its previous brand) with a max supply of 10 billion MATIC. The current circulating supply is half of its max supply. The main use cases of the token revolves around governance and transaction fees.

<img alt="" src="/musings/polygon-and-helium/image-14.webp" width="1200" height="440" loading="lazy" decoding="async" />

*Polygon Token Distribution*

## <u>Quantitatives</u>

- TVL to Market Cap : 5.27 billion / 14.4 billion = 36.5%

- TVL to FDV : 5.27 billion / 20.97 billion = 25%

- Circulating to Max Supply : 6.87 billion / 10 billion = 68.7%

- TVL to # of protocols : 5.27 billion / 160 = 32,937,500

- Market Cap to #developers : 14.4 billion / 44 = 327,272,727

- Market Cap to #commits : 14.4 billion / 973 = 14,799,588

As seen in the TVL and the number of daily transactions exponential increase during the period of June and October, the number of commit activity is also sporadic during those periods. However, during June the market cap of Polygon went through a steady decline, this could partially indicate that the commit was considered detrimental by the public. However, during the high commit activity on October, the ecosystem’s market cap went through an exponential increase.

<img alt="" src="/musings/polygon-and-helium/image-03.webp" width="1200" height="857" loading="lazy" decoding="async" /><img alt="" src="/musings/polygon-and-helium/image-06.webp" width="1200" height="857" loading="lazy" decoding="async" />

Written by Stanley Tejakusuma

Helium

## <u>Executive Summary</u>

Helium (HNT) is a blockchain protocol that provides a network for Internet of Things devices and management of wireless devices through decentralization. The protocol leverages Hotspots, devices that work in duality as network miners and wireless access points, to provide long range (LongFi) connectivity through the LoRaWAN platform. To this end, Helium employs a Proof-of-Coverage consensus mechanism with goals of verifying whether the hotspot is indeed providing coverage for the geographical location.

## <u>Helium Network Protocol</u>

Most consensus protocols in blockchain generally implements a Proof-of-Work or a Proof-of-Stake mechanism, its main use cases is to verify transactions. Helium blockchain, on the other hand, uses a mechanism called Proof-of-Coverage (PoC). The consensus protocol not only verifies transactions, but also to verify Helium’s hotspots in the network. This is done to achieve the main objective of Helium – to create a blockchain powered by a physical and decentralized network of hotspots while also providing possible services to LoRaWAN devices. These hotspots are equivalent to GPU/ASIC mining for other cryptocurrencies, however HNT miners have a lower cost, noise, and energy usage.

Proof-of-Coverage upholds the notion of powering Internet of Things devices through wireless connectivity leveraging the unique and undeniable nature of radio frequencies (RF) to produce proofs. The blockchain itself has several underlying fundamental design goals: Users would be able to participate freely and come and go willingly, no incentive to take advantage of inexpensive energy cost or deploying hardware in a clustered location, should be tolerant to Byzantine failures; to this end, Helium uses HoneyBadgerBFT – Enables group of nodes to achieve consensus over unreliable links by relying on threshold encryption and transactions are encrypted using shared public key which is decryptable only when elected consensus group collaborate in decrypting them, consensus should be useful and reusable to the network, able to achieve high rate of confirmed transactions, and blockchain should not be able to censor (select/deselect transactions).

The success of the network is based on reliable coverage the hotspots can create for users to connect LoRaWAN devices. To this end, Helium relies on three fundamentals of RFs: limited physical propagation, the strength of received RF signals is inversely proportional to the square distance from the transmitter; the longer the distance the weaker the RF strength, RF travels with no latency – effectively faster than the internet. These unique characteristics of RF leads leads to the blockchain constantly ‘interrogates’ hotspots to verify whether it is indeed providing coverage.

The Proof-of-Coverage mechanism starts with a random hotspot, called Challenger, generating a PoC hotspot verification challenge and a SHA256 public/private key pair to the blockchain. Each hotspot is required to submit a challenge proof once every 360 blocks. The challenge and the key is then transmitted to the hotspot (Beacon) that the Challenger targeted. The beacon transmits the PoC packet to surrounding hotspots geographically; the more hotspots transmitted, the more reward the beacon hotspot recieves. This method of broadcasting is the only method of proving that the hotspot is an active node of the Helium network. The hotspots that received the transmission PoC packet are called witnesses and they would report to the challenger. Before Helium Improvement Protocol (HIP) 11, 25 hotspots are chosen to witness then the fastest hotspot to report back would receive the reward, this poses a problem since validators could exploit centralization or a stronger processing power hotspot has the higher chance of receiving reward. Currently, 10 hotspots would be chosen at random and the completion speed does not matter. These chosen hotspots are the consensus group of that specific block; they have a task of decrypting and verifying the transaction. Afterwards, the consensus group sends back a PoC receipt collaboratively to the blockchain.

<img alt="" src="/musings/polygon-and-helium/image-12.webp" width="1200" height="481" loading="lazy" decoding="async" />

*Proof-of-Coverage (Image taken from Youtube)*

## <u>State of Helium</u>

Helium was founded in 2013 by Shawn Fanning, Amir Haleem, and Sean Carey, with an ambition to ease the connection of Internet of Things devices – specifically Low Powered Wide Area Network (LoRaWAN). The team launched the first Helium hotspots powered network at New York, San Francisco, and Austin in the year 2019. The same year, Helium released its mainnet and most of its network components as open source – LongFi wireless protocol, various hardware schematics, developer client libraries, hardware schematics, and cloud APIs.

As of writing, the blockheight of the Helium blockchain has reached 1,163,936, almost a tenth of Ethereum (13,930,447). With regards to a substantially lower blockheight, its block time is around 70 seconds in the last 24 hours compared to Ethereum’s 15 seconds block time. Furthermore, each block consists of around 12 - 15 transactions, whereas Ethereum has up to 200 transactions per block. One of the possible explanations, Helium is designed to power interconnectivity of IoT devices not to facilitate lightning speed transactions or smart contracts functionality.

HNT is used to facilitate blockchain activities (i.e. transfers, network validator payments, etc), whereas Helium’s Data Credit is used for data transfer in bytes. Similar to mobile data, Data Credit is a non-transferable and Non-Fungible Token that is unique to each user in the Helium network. The main use case is enabling users to transfer bytes of data and several transaction fees. The price of Data Credit is fixed at 1 Data Credit = $0.00001 USD.

Diving deeper into Helium’s network, the blockchain currently employs 439,524 hotspots with a 30-days up trend – 16% increase. Furthermore, there is a fluctuation in the percentage rate of the online hotspot, however the average is 80%, an adequate amount to hold the network. The hotspot is divided amongst 161 countries, though it is mainly clustered in the USA, UK, West Europe, and China. This could possibly pose a problem since some of these countries are still debating the imminent widespread implementation of 5G or IoT devices and a sudden ban could affect the network integrity in that geographical area.

<img alt="" src="/musings/polygon-and-helium/image-08.webp" width="1102" height="386" loading="lazy" decoding="async" />

*Helium vs. Bitcoin vs. Ethereum Miners*

The chart above represents the comparison between Helium miners with Bitcoin and Ethereum. Though the payback estimate could reach a relatively low amount, it has a low probability since the reward is evenly distributed to all of the hotspots based on the frequency of that hotspot validating the integrity of the network. Though on one hand, increase in hotspots leads to further implementation of LoRaWAN, it would also decrease each miner’s individual payout rate. This presents the economic flywheel that fuels the Helium network by Multicoin Capital.

<img alt="" src="/musings/polygon-and-helium/image-04.webp" width="1200" height="655" loading="lazy" decoding="async" />

*Helium Economic Flywheel (Multicoin Capital)*

Looking forward, Helium is building the next generation network platform with the potential to connect Internet of Things devices. Helium also has recently launched a Proof-of-Stake model to further scaling and network integrity. The Helium network also entered a new business line, D-Web Technologies, implementing LongFi sensor solutions for leading businesses.

## <u>Team and Investors</u>

1.  Amir Haleem (CEO)

    1.  Experiences in the video game industry

    2.  Member of the original Battlefield 1942 at DICE

2.  Marc Nijdam (CTO)

    1.  Tech leader with 25 years of experience

    2.  Extensive experience in Qualcomm, highly relevant to Helium

    3.  Focuses on design, scalability, and resilience of product

3.  Frank Mong (COO)

    1.  20 years in cyber security

    2.  Companies include Hortonworks, Palo Alto Networks, and HP

Furthermore, the team that designed Helium’s [<u>whitepaper</u>](http://whitepaper.helium.com/) consists of Amir Haleem, Marc Nijdam, Andrew Allen, Andrew Thompson, and Rahul Garg.

The project was initially funded $2.8 million with 8 investors during the seed round back in 2013. Helium then went on the three stages of venture fundings from Series A, B, to C with lead investor and total money raised from all investors as follows: Khosla Ventures $16 million; GV $20 million; Khosla Ventures, Multicoin Capital, Union Square Ventures $15 million. Furthermore, the project raised $111 million from Initial Coin Offerings in 2020 with Andreessen Horowitz as the lead investor. Since, Helium went through all three stages of startup funding, it indicates that the project was already prospective and viable even before it launched a coin.

## <u>Tokenomics</u>

The tokenomics are mainly divided into two parts: Helium ($HNT) and Data Credits (DC).

There are no pre-mined tokens of HNT, so every HNT currently circulating is the result of mined HNTs. The max supply for HNT is 223 million which was mined at genesis, then starts at a rate of 5 million HNT/month and halves every 2 years. As of 1 August 2021 (the most recent halving), the target production rate of new HNT is 2.5 million HNT/month. Currently, there are almost half of the max supply in circulation. The distribution of tokens as follows from HNT mining:

<img alt="" src="/musings/polygon-and-helium/image-02.webp" width="1200" height="740" loading="lazy" decoding="async" />

*Token Distribution*

However, since the network raised funds from investors pre-ICO stage, the team decided to create a token distribution based on several factors as well:

<img alt="" src="/musings/polygon-and-helium/image-01.webp" width="1200" height="517" loading="lazy" decoding="async" />

*Token Allocation*

Each Data Credits (DC) costs $0.00001 – a fixed rate. Furthermore, 4,136,000 is being used for every HNT token mined with an Oracle price (price of DC produced for every HNT burned) closely similar to that of HNT. The market cap of DC has reached $4.331 billion USD, taken into rough comparison to traditional service providers such as Xfinity $230.50 billion, Verizon $216.19 billion, and AT&T $180.29 billion. Though there is a considerable difference in market cap, considering that the network has only been live since December 2020 – merely 30 months ago. Leading to a market value increase of DC $144.37 million each month. Using an assumption from the average of DSL, Cable, and Fiber Optics for each user per month – $53.67, a rough estimate would indicate that 2.7 million use services from Helium each month.

## <u>Quantitatives</u>

TVL to Market Cap: 1,241,884,800 to 4,184,654,017 = 29.67%

TVL to FDV: 1,241,884,800 to 9,281,716,409 = 13.37%

Circulating Supply to Max Supply: 100,539,361 to 223,000,000 = 45%

Market Cap to number of developers: 1,241,884,800 to 26 = 47.74 million

Market Cap to number of commits: 1,241,884,800 to 281 = 4.4 million

Judging from the TVL to Market Cap and TVL to Fully Diluted Valuation ratios, Helium has a relatively secure network. Though the TVL to Market Cap is lower than other blockchains, Helium’s main consensus mechanism is not through Proof-of-Stake, but through Proof-of-Coverage. However, Helium made a wise decision in slowly changing the consensus protocol to PoS since all the HNT would be mined then PoC would be worthless. Furthermore, the difference in TVL to MC and TVL to FDV is healthy since the ratio of Circulating Supply to Max Supply is relatively the difference.

Each major commit activity contributed by the developers has a significant effect towards the Market Cap. As seen in the chart, the month February and November went through one of the highest commit activity (data from CoinGecko) – resulting in exponential increase in the market cap.

<img alt="" src="/musings/polygon-and-helium/image-13.webp" width="616" height="457" loading="lazy" decoding="async" /><img alt="" src="/musings/polygon-and-helium/image-11.webp" width="636" height="457" loading="lazy" decoding="async" />

*High Commit Activity Month (data from CoinGecko)*

Written by Stanley Tejakusuma
