---
title: Mina Protocol (Thread)
description: "Any blockchain has the problem of sizing. Imagine one blockchain that\
  \ has a constant size relatively similar to a JPEG. $MINA\u2019s, previously Coda\
  \ Protocol, proposition is to..."
date: '2022-04-04'
venue: wagmi
tags:
- L1/L2
tickers:
- MINA
---

Any blockchain has the problem of sizing. Imagine one blockchain that has a constant size relatively similar to a JPEG.

$MINA’s, previously Coda Protocol, proposition is to build the privacy and security layer of web3 by producing the lightest blockchain.

<img src="/musings/mina-protocol-thread/image-06.webp" width="899" height="502" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://medium.com/minaprotocol/introducing-mina-protocol-d8b3a8e8b2bc))

MINA’s blockchain has a fixed size of 22KB compared to other predominant blockchains – 300GB.

The blockchain is built by zkApps and the SDK is based on Typescript.

Team:

- @eshap (CEO) co-founder of @o1_labs

- @itsjoonkim (General Counsel)

- @sherrylin (Marketing)

Funding:

- Seed Round $15M

@paradigm

@generalcatalyst

@coinbase ventures

@Accomplices

- Venture Round $10.9M

#ThreeArrowsCapital

@BixinVentures

- ICO $18.8M + $92M

@leonhillmann

@zhusu

@PanteraCapital

$FTT Ventures

@FinalityCap

@circlepay

#brevanhoward

@blockchain

@ambergroup_io

Alan Howard

Benefits of using MINA:

- Self-custodial data

- Interoperability

- Connecting to real-world data

- Every participant is full node

- Vibrant community

Now, diving into MINA itself!

Thanks to zk-SNARKS, the blockchain is accessible from any device (i.e. mobile phone or PC).

Not only ease of access, but also each block generates a SNARK proof which would be sufficient enough for all nodes to store instead of the entire chain.

@o1_labs formulated their contributions to MINA:

1.  Succinct blockchain

2.  Approach to constructing a succinct blockchain for generic functionalities through SNARK

3.  Concrete implementation of payment system – MINA

4.  Ouroboros Samasika → secure PoS based on Cardano’s Ouroboros that is adaptively secure and bootstraps from genesis

5.  Performance evaluation report

To summarize, MINA is a succinct blockchain based on recursive SNARKs

The key participants in the network architecture are

- Verifiers (Node)

- Block Producers (Stakers)

- SNARKers (Responsible for taking snapshots)

The transaction flow in MINA is as follows:

- block producers (BP) select a tx →

- SNARKers take snapshot and bid to have their snapshot chosen by BP →

- BP takes the snapshot of all tx snapshot →

- BP takes snapshot of current blockchain state →

- sent to verifiers.

This enables MINA to achieve never-before blockchain accomplishment. As an example, find a user’s credit score on dApp without revealing identity.

A block inside MINA is constituted of:

- Protocol State

- Protocol State Proof

- Staged Ledger

- Delta Transition Chain Proof

- Current Protocol Version

- Proposed Protocol Version

MINA doesn’t require a data oracle. It takes the price snapshot from multiple DEX to determine the underlying price.

MINA continues to build more and more mind-blowing applications, such as logging into MINA without revealing email addresses with the help of zk-SNARK.

$MINA is the native token of MINA protocol without a supply cap and it is inflationary. The total distributed token at launch is 1B (will be fully unlocked after 8 years).

<img src="/musings/mina-protocol-thread/image-01.webp" width="1024" height="791" loading="lazy" decoding="async" />

<img src="/musings/mina-protocol-thread/image-02.webp" width="1024" height="702" loading="lazy" decoding="async" />

<img src="/musings/mina-protocol-thread/image-07.webp" width="1200" height="630" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://minaprotocol.com/blog/mina-token-distribution-and-supply))

During TGE, the community has the most amount of token allocation. However, after all the planned supply has been released, most allocations goes to block rewards.

<img src="/musings/mina-protocol-thread/image-04.webp" width="1200" height="623" loading="lazy" decoding="async" />

<img src="/musings/mina-protocol-thread/image-03.webp" width="1200" height="623" loading="lazy" decoding="async" />

(source: same as above)

MINA protocol is the game-winner of decentralization. That said, the same can’t be said on **scalability** and **security**.

The blockchain could only achieve 22 TPS and it takes 15 block confirmation for a transaction to have 99% finality confidence (roughly 1 hour).

Despite the source code having been thoroughly audited, a question came to mind: if verifiers hold zero knowledge and block producers hold the **current** state of the network, where does the rest of blockchain history go?

A video by @coinbureau reveals that MINA actually has an unofficial network component – Archives.

The archive nodes store the historical blockchain data. Seems safe right? No. The archiver nodes actually store the historical data on @Google cloud. Where’s the decentralization in this?

Being a smart contract, MINA’s most relevant competitor is $DOT in terms of interoperability.

MINA’s TPS could merely reach 22 TPS whereas DOT could achieve ~166.66 TPS!

Security-wise, MINA has relatively similar amount of block producers with DOT (155 and 297 respectively)

<img src="/musings/mina-protocol-thread/image-05.webp" width="943" height="385" loading="lazy" decoding="async" />

imo MINA wins over DOT in terms of block size and access convenience, though in other features it still needs improvement
