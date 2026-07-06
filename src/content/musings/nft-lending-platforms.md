---
title: NFT Lending Platforms
description: "JPEG\u2019d has the notion of bridging the gap between DeFi and NFTs.\
  \ First of all, one of the pillars in DeFi is permissonless and trustless collateralized\
  \ debt position. Whilst,..."
date: '2022-02-21'
venue: wagmi
tags:
- NFT
- DeFi
subtags:
- Marketplace
tickers:
- STRIP
---

JPEG’d has the notion of bridging the gap between DeFi and NFTs. First of all, one of the pillars in DeFi is permissonless and trustless collateralized debt position. Whilst, NFT is basically money in the form of JPEGs (hahaha). The project was announced in the TGE to launch a new DeFi primitive: NFDPs – Non-Fungible Debt Positions. Meaning that NFT enthusiasts are now able to borrow using NFT as collateral.

The protocol will be able to transform cryptopunks from static investments into yield-earning products, which would earn the user $PUSd. JPEG’d is managed by a governance token – JPEG.

Diving deeper into the lending mechanics, Cryptopunk holders will deposit their punks as collateral into a vault to mint PUSd. The DAO will initially peg PUSd amongst other baskets of tokens to peg its value as close to $1 as possible at all times. The initial interest at launch will be 2% along with a 0.5% withdrawal fee. This interest rate would be dynamically adjusted to ensure competitiveness in the future. All debt positions will allow 32% of LTV ratio and liquidation occurs when the debt/equity ratio is 33%. Only the DAO can conduct liquidations: they may choose to either hold the punk, sell it on a secondary market, or OTC. It is not automatically liquidated. In the event that the NFT is liquidated, the borrower could repurchase their punk back after repaying debt, accrued interest, and 25% liquidation penalty.

To this end, the team has stated in their medium post [<u>here</u>](https://medium.com/@jpegd/the-lending-mechanics-f59da95eb894), that Aliens will be valued at 4,000 ETH, Apes at 2,000 ETH, Punks will be valued at punk floor. Initially, the collateral values are capped at launch, however governance can change these values later. Initial Cryptopunk vaults are capped at $10M.

Regarding valuing the NFT itself, the project partners with $LINK to build a custom price oracle that will feed the vault’s floor price in ETH. The initial integration will feed Chainlink to quantify the Time-Weighted Average Price (TWAP) of both sales and floor prices to output a blended price. This oracle currently only supports Cryptopunks and excludes wash-sales, outliers, and will be periodically written on-chain.

<img alt="" src="/musings/nft-lending-platforms/image-01.webp" width="1200" height="450" loading="eager" fetchpriority="high" decoding="async" />

As stated above, $JPEG is a valueless token that has a sole purpose of governance. The DAO will receive 35% of TGE token allocation.

JPEG’d also [<u>announced</u>](https://medium.com/@jpegd/the-weenis-inspection-a18532957663) a utility NFT cards that will be eligible to stake for 1% of the JPEG supply over a monthly period. Total NFT mint supply is 1,000 plus 20 additional honoraries, costing 0.

To further increase the credit limit, the borrower needs to lock JPEG for 1 year, which would be unlocked thereafter. The amount locked depends on the maximum loan the borrower is willing to draw. Taking this into perspective, if a user and governance both agree a Tiara is worth $1M, the users will have to lock up $82,500 worth of JPEG for 1 year – $1M collateral \* 33% (max loan) \* 25%.

Partners:

- Chainlink: Oracle price feed

- Kovan Network: Platform for loan~borrow

- Olympus DAO: Olympus Pro bonds → NFT-focused protocols to utilize bonds for liquidity

- Tokemak: Benefits the token reactor to reduce the incentives paid to LP in JPEG/ETH pool

- Abracadabra Money: Swap PUSd with MIM, USDC, or USDT – earning pool trading fees from PUSd/MIM curve factory pool

- Dopex: Call options on JPEG and purchase ETH call options using NFT as collateral from PUSd.

Roadmap:

- Liquidation free vaults

- Utility for $JPEG

- Additional NFT collections

- Permissioned Liquidators

- Explore on decentralized perpetual futures on key NFT collections

## 

## NFTfi (ETH)

NFTfi is a protocol that allows NFT owners to use assets to borrow liquidity by receiving secured ETH and DAI loans.

The general mechanics of lending and borrowing are dependent on the price agreement of both the lender and borrower. Simply list an NFT for a loan and several users would have to make a loan offer for that asset. If the borrower agrees on the price, the NFT would be locked as collateral and the loan would be paid in wETH.

In the event of a loan not being repaid back in time, the asset becomes available for foreclosure to the lender. The lender does not need to foreclose immediately, but if they do the NFT would be transferred to their account and they will have to claim for the outstanding loan amount. NFTs are not automatically liquidated but it is solely at the lender’s discretion.

Roadmap:

- Loan against ERC1155 and ERC998 bundles

- Unlimited duration loans

- Pro-rata loans

- Loan extensions and renegotiations

- Listings with binding terms

- Loan obligation receipts

## Soltomm (SOL)

Not much information here. I don’t know if the project is up or not.

## Strip Finance

Strip Finance introduces the collateralization of NFT in the DeFi liquidity protocol. The project aims to solve two underlying problems in the NFT space, namely: liquidity and price discovery. NFTs as an asset class suffers from wide disparities between buyers and sellers to be the fair market value of the art.

The asset price discovery for the NFT would be directly fetched from the NFT marketplaces. The team will not arbitrarily change the price data, but has the right to make adjustments to the valuation based on their own risk assessment.

The team classified NFT based on a work of art or a financial one. For the art NFT, they are able to take instant or flash loans through the specific pool that consists of individual funds and NFT studios’ funds. Conversely for the financial NFT, the team has a predetermined methodology: debt duration and project age/availability as the main predictor of APR, has the team been doxxed or not, quality of partnerships in venture or other projects, listed on exchange or high liquidity, valuation of collateral, and revenue from platform fees.

In a higher perspective, Strip Finance employs a decentralized P2P lending mechanism, in which the lender will decide the fair value of NFT. To this end, the borrower will upload their NFT asset on the lending marketplace by entering the following information: desired asset value, capital requirement, loan duration,and number of installment. Another method of aggregating and deploying capital is through centralized pool lending. The strip team and strategic partners will identify unique assets/offerings to collateralize and offer loans to individuals on the platform. This method is centralized since, in a sense, the value would be curated by the team.

In the case of no repayment, the lender could file a settlement action which would give the lender the right to the NFT asset. Penalties for missed installments as as follows:

- 1 missed installment: pay 10% of the total instrument value

- 2 consecutive missed installment: pay 20% from each of the missed installment values.

In the event of liquidation, the amount pledged by the underwriters will be distributed back to the pool and the NFT will be transferred to the underwriters for pool lending.

Roadmap:

- Mainnet launch on BSC

- More use cases for $STRIP

- Support for other blockchains – SOL, MATIC, DOT, WAX, HBAR

- Enabling cross-protocol bids

- Pool lending along Financial NFT launch

- AI-powered proprietary price assessment built using SupraOracles

- GameFi asset rental built on MATIC
