---
title: Alchemix (Thread)
description: Following the on-going $CRV war, the DeFi space is only looking for more
  rise in TVL and coverage. Alchemix ($ALCX) is a DeFi platform for interest-bearing
  stablecoins that...
date: '2022-02-14'
venue: wagmi
tags:
- DeFi
subtags:
- LP
- Lending
- DAO
tickers:
- ALCX
---

Following the on-going $CRV war, the DeFi space is only looking for more rise in TVL and coverage.

Alchemix ($ALCX) is a DeFi platform for interest-bearing stablecoins that users can acquire for no cost in exchange for locking collateral. The protocol provides highly flexible instant loans that repay themselves over time.

<img src="/musings/alchemix-thread/image-02.webp" style="width:4.14792in;height:1.17364in" />

Platform Overview:

- Deposit DAI -\> mint alUSD

- Automate repayment over time

- Redeem alUSD to DAI 1-to-1

$ALCX promises NO LIQUIDATIONS. The only debt is time. Rewriting the law of finance, through the implementation of self-repaying loans.

In its core, vaults are the heart of Alchemix. The general mechanisms are as follows: deposit DAI → sent to the $YFI → yield is generated → loans repaid overtime. Essentially, the loans are automatically repaid through the vault.

The general flowchart of mechanism in Alchemix is as follows

<img src="/musings/alchemix-thread/image-03.webp" style="width:4.03646in;height:2.74272in" />

Security-wise, the platform has gone through an audit by @CertiKTech for the v1. The audit for v2 has been accomplished, however it has not yet been released to the public. [<u>https://www.certik.com/projects/alchemix</u>](https://www.certik.com/projects/alchemix)

Alchemix has attracted several strategic partners including

- @TheSpartanGroup

- @DelphiCapital

- @cmsholdings

- @gbvofficial

- @Maven11Capital

- @fisher8cap

- Protoscale Capital

- @nascentxyz

Alongside partners, Alchemix notable investors include

- @AlamedaResearch

- @ledger_prime

- @OrthoTrading

- Magic Ventures

In total, the protocol has raised $8M in seed round and venture round through the investors.

Scoopy Trooples (a pseudonym) is the Co-Founder of Alchemix and Tech Futursim enthusiast. He is the ‘brains’ behind $ALCX with the presumably twitter handle @scupytrooples

Diving deeper into the network, Alchemix consists of several fundamental components: vaults/pool, transmuter – stake synthetic asset and converted into base asset over-time, token distribution – more on this later, Alchemix DAO – the main driver of the protocol.

Vaults

Vaults are the core of Alchemix. The in-depth mechanism is as follows: deposit $DAI → borrow alUSD up to 50% (loans have an absolute 200% min ratio) → DAI instantly deposited to @iearnfinance → yield is harvested from yDAI vault →

(continued)

harvested yield pays down global debt in system or increase alUSD borrow limit → harvested yield transmuted → users withdraw max 200% collateralisation ratio.

The founders have a paradigm of no prison. Thus, users could liquidate collateral any time. There is relatively no risk of liquidation since debt would eventually decrease.

Worst case, vaults have an emergency shutdown procedure. All funds would be withdrawn from $YFI, deposits paused, and users can pay down debt.

Other additional security measures: limit for alUSD depending on level of technical, market, and legal risk for an asset; $ALCX utilizes $LINK oracle price feeds.

Transmuter

The primary pegging mechanism for $ALCX synthetic tokens. As explained above, harvested yield would instantly flow to the transmuter ensuring 1:1 redemption alUSD for DAI. As yield comes in, it will credit users DAI proportional to the amount staked.

<img src="/musings/alchemix-thread/image-05.webp" style="width:4.14063in;height:2.96612in" />

As of April 4, 2021, the transmuter was upgraded and deployed capital into $YFI yvDAI vault. Yield harvested is passed to vault contracts and boost yields of $DAI depositors. This loop compounds the yield to repay loans faster. 5M DAI buffer is used to save users gas.

Tokenomics

$ALCX is the token granting governance rights. No guarantee of value, per se. ALCX does not have a hard-cap. Token distribution: DAO 15%(premined) + 5% and 80% can be obtained by staking certain tokens.

<img src="/musings/alchemix-thread/image-01.webp" style="width:3.16146in;height:1.75805in" />

The distribution is ensured so no one from the dev team would have enough tokens to exploit the DAO.

The initial pre-mined tokens are 478,612 ALCX derived from the estimated tokens after 3 years. 358,959 ALCX allocated to the treasury for use determined by the community. 119,653 ALCX reserved bug bounties.

The staking rewards initially are 23,344 ALCX will be distributed in week one. Each week the amount would be decreased by 130 ALCX for three years. Annually, the emission would increase the total supply by 114,400.

Inflation rate at year three would be 4.5%; gradually decrease over time.

The main burning mechanism is through the transmuter when a user converts to $DAI, the equivalent amount of alUSD is burnt.

DAO

Initially starting as a developer multisig with signaling through snapshot. DAO will receive income from the protocol, portion of the yield goes into treasury. The main goal of DAO is a voting system to decide further token implementation or network upgrades.

Looking forward, around this month or March 2022, ALCX is looking to upgrade its network into the v2 state. According to the podcast, v2 transitions Alchemix to a multi-chain platform – providing a plethora of chains – one of the mentioned chains is $FTM.

<img src="/musings/alchemix-thread/image-04.webp" style="width:3.90104in;height:2.90077in" />

Audit for $ALCX v2 has gone through and the protocol partners with Runtime Verification to improve reliability, security, and preciseness. [<u>https://alchemixfi.medium.com/alchemix-v2-audit-completed-in-partnership-with-runtime-verification-ef3b4ab9b387</u>](https://alchemixfi.medium.com/alchemix-v2-audit-completed-in-partnership-with-runtime-verification-ef3b4ab9b387)
