---
title: Gearbox Protocol
description: You a seasoned trader? Or a normal trader that loves using leverage to
  amplify your gain? Take a look at @GearboxProtocol!!! Gearbox allows anyone to use
  leverage on selected...
date: '2022-03-21'
venue: wagmi
tags:
- DeFi
subtags:
- DEX
- Leverage Trading
tickers:
- GEAR
---

You a seasoned trader? Or a normal trader that loves using leverage to amplify your gain?

Take a look at @GearboxProtocol!!! Gearbox allows anyone to use leverage on selected DeFi protocols be it either margin trading, leverage farming, or much more!

**Credit Account** enables the decentralized leverage

1.  The user/borrower (interested in leverage) opens a credit account

2.  Choose a collateral and all positions within the account similar to cross-margin

3.  Leverage up to 10x

4.  Be sure to manage the account below liquidation threshold

<img alt="" src="/musings/gearbox-protocol/image-01.webp" width="846" height="311" loading="eager" fetchpriority="high" decoding="async" />

(source: [<u>here</u>](https://gearbox.fi/))

There is no information on partnerships/investors of Gearbox.

Being a community-led protocol, Gearbox contributors are @0xmikko_eth – Founder and Core Dev, @apeir99n – Product and Math, and @ivangbi\_ – Narratives.

Though, there is no outside fundings, don’t worry the protocol has undergone 3 different audits: @chain_security, @MixBytes – Incorrect Calculation of Borrowed Amount (CRITICAL), @ConsenSysAudits.

Into the protocol mechanics we go! The vision that Gearbox aims for is in being a **composable leverage protocol**. Users are able to utilize leverage without interacting with a specific interface.

i.e. a DeFi protocol integrates Gearbox as an added functionality. Users are able to “take leverage with Gearbox” in that DeFi ecosystem.

Feature offerings:

- Composable

- 0% Funding Rate

- Leverage as a Service

- Permissionless Strategies

- Low Gas Overhead

Now, we start diving into Composable Leverage 2.0. Traditional leverage system is merely long or short. With Gearbox, users are not limited between two options. They could stake, yield farm, or any DeFi primitives on the selected contract list (below). Possibilities are endless!

<img alt="" src="/musings/gearbox-protocol/image-07.webp" width="1200" height="602" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.gearbox.finance/leverage-2.0-is-composable))

Allowed Contract List:

- @CurveFinance 3pool

- @Uniswap V2 and V3

- @iearnfinance yUSDC and yDAI

- @SushiSwap

Allowed Token List:

https://docs.gearbox.finance/overview/credit-account/allowedlist-policy

Gearbox Protocol Participant:

- Lenders/LP: earn Diesel Tokens (dTokens) as a ‘receipt’. dTokens grow with the pool.

- Borrowers/Traders and Farmers – Leveraged users

The Credit Account binds both lenders and borrowers. Specifically, the account is an isolated smart contract holding user’s and borrowed funds. Your funds are self-custodial in the account.

<img alt="" src="/musings/gearbox-protocol/image-03.webp" width="1200" height="411" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.gearbox.finance/overview/how-it-works))

Note: The credit accounts are not deployed by users every time as separate smart contracts but are ‘borrowed’ from Gearbox by users. Resulting in no cost of deployment for new users.

Liquidation

User’s Credit Account is the collateral. Gearbox uses a risk model that continuously assesses Quality to Value for a credit account. It follows the formula below.

<img alt="" src="/musings/gearbox-protocol/image-05.webp" width="1200" height="671" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.gearbox.finance/overview/liquidations))

<img alt="" src="/musings/gearbox-protocol/image-06.webp" width="416" height="126" loading="lazy" decoding="async" />

<img alt="" src="/musings/gearbox-protocol/image-02.webp" width="482" height="181" loading="lazy" decoding="async" />

The treasury accrues fees from the LP tokens and becomes a part of the LP. This part of the treasury, in the event of liquidation, covers the losses and burns part of their LP tokens – restoring dTokens rate.

Speaking of fees, below are the protocol fee schedule:

- LP withdrawal fee: 1%

- Liquidation fee: 5% (liquidator) 2% (protocol)

- APY spread fee

$GEAR is an ERC-20 utility token that has an initial purpose of governance. The total supply is capped at 10 billion that started as a non-transferable but could be changed through DAO.

Gearbox implements a system of Reverse Voting Escrow ($CRV counterpart) – locked tokens have lower voting power than liquid ones.

<img alt="" src="/musings/gearbox-protocol/image-04.webp" width="1200" height="803" loading="lazy" decoding="async" />

(source: [<u>here</u>](https://docs.gearbox.finance/gear-token/gear-overview))

The distributions that would be vested are for Initial External Contributors, Initial Core Contributors, and Company Wallet.

DAO is responsible for:

- Adding more assets/contract to the list policy

- Future updates

- Any future changes in general related to the project

TL;DR Think of Gearbox not as a trading platform of itself, but as an ‘upgrade’ to existing or new DeFi Primitives in the future that would add a new functionality – leverage.

More technical information at the whitepaper

https://drive.google.com/file/d/1cEHhsHZFF2rgQCnHyFOvi-FweGqh5nbJ/view
