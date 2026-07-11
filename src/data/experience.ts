// Single source of truth for the work timeline — rendered by both the
// experience tab (Experience.astro) and the standalone /resume page.
export interface Entry {
  dates: string;
  role: string;
  org: string;
  bullets: string[];
  // /resume renders education under its own heading (ATS parsing); the
  // experience tab keeps the single unified timeline.
  kind?: 'education';
  // Public artifact for this entry — rendered as a small link on the
  // experience tab only (the print resume stays link-free per entry).
  repo?: string;
}

export const entries: Entry[] = [
  {
    dates: 'Oct 2024 – May 2026',
    role: 'Analytics Engineer',
    org: 'Flipside Crypto',
    bullets: [
      'Built Snowflake + dbt medallion ELT pipelines across 10+ chains: NEAR, Solana, Aptos, Monad, Flow, Sei, and cross-chain protocols.',
      'Designed an agent-driven cost-intelligence pipeline for Snowflake spend: outlier detection → root-cause diagnosis → auto-drafted remediation PRs, human-gated.',
      'Anchored the NEAR client relationship; shipped an Intents intelligence layer showing NEAR Intents acts as a cross-chain swap aggregator.',
      'Shipped cross-EVM hot-wallet detection and a weekly external-parity audit cross-validating DEX, bridge, and lending coverage against DeFiLlama.',
    ],
  },
  {
    dates: '2022–2024',
    role: 'Research & Delegation Lead',
    org: 'Boiler Blockchain, Purdue',
    bullets: [
      'Led the delegations team overseeing $6M+ in governance votes across Optimism, dYdX, Stader Labs, and Origin. Personally ran the Optimism delegation with transparent voting rationales.',
      'Built and taught the “Introduction to Blockchain” certification course (top chains, DeFi, stablecoins, DeFi vs CeFi vs TradFi) with bi-weekly forums.',
      'Published bi-weekly research on Medium and Twitter backed by original Dune Analytics, including decomposing the Gains Network ($GNS) economic flywheel.',
    ],
  },
  {
    dates: 'Dec 2021 – Jun 2022',
    role: 'Data Scientist Intern',
    org: 'Kargo Technologies',
    bullets: [
      'Built automated business-line P&L trackers (financing, fulfillment, logistics) for a B2B freight marketplace. Metabase SQL piped to Sheets, then automated in Python.',
      'Produced investor-relations analytics: GTV, disbursement, and NPL metrics, route-level profitability, and comparable-company benchmarking against 8 public comps.',
      'Reported directly to the COO and finance team; researched cohort-retention and customer-lifetime-value models.',
    ],
  },
  {
    dates: '2021–2022',
    role: 'Research Writer',
    org: 'Wagmi Journal',
    bullets: [
      'My first crypto role. Self-taught Dune Analytics on the job to pair data with the writing. Bi-weekly research theses across DeFi, NFTs, DAOs, and regulation for angel investors.',
      'Built my first Dune queries (incl. a DeFi Pulse Index $DPI holder tracker) and a Python + Binance price-action screener.',
      'Much of that research lives on in the musings archive here.',
    ],
  },
  {
    dates: '2021',
    role: 'Data Scientist',
    org: 'The Data Mine, Purdue',
    bullets: [
      'Built electricity-usage prediction models covering the Midwest and South for the Midcontinent ISO (MISO).',
      'Applied random forests and feature importance to model electricity-fluctuation edge cases.',
    ],
    repo: 'https://github.com/stanleytejakusuma/MISO_DM',
  },
  {
    dates: '2021',
    role: 'Barista',
    org: 'Starbucks',
    bullets: [
      'My first employment, ever. Survived the 7am rush. Turns out that was my first lesson in high-frequency order flow.',
    ],
  },
  {
    dates: 'Aug 2020 – May 2024',
    role: 'B.S. Data Science',
    org: 'Purdue University',
    kind: 'education',
    bullets: [
      'Business economics minor. Boiler Blockchain, boxing club, Dean’s List.',
    ],
  },
];
