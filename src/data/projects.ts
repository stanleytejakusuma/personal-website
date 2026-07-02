// Single source of truth for the featured project lineup.

export type Domain = 'Data' | 'Quant' | 'AI' | 'Infra' | 'Tooling' | 'Full-stack' | 'Personal';
export type Status = 'live' | 'archived' | 'open-source' | 'in-dev';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  domain: Domain;
  status: Status;
  stack: string[];
  metrics: string[];
  repo?: string;
  link?: string;
  featured: boolean;
  group: 'work' | 'personal';
  order: number;
}

export const STATUS_LABEL: Record<Status, string> = {
  live: 'live',
  archived: 'archived',
  'open-source': 'open source',
  'in-dev': 'in dev',
};

export const projects: Project[] = [
  {
    slug: 'flipside-analytics',
    name: 'Flipside on-chain analytics',
    tagline: 'On-chain data at scale',
    description:
      'A library of 128 dbt data models spanning 12+ blockchains (Solana, Ethereum, Bitcoin, Aptos, NEAR, Sei, and more) on Snowflake. Curated, tested transformations that turn raw chain data into queryable analytics, exposed through an endpoint for downstream tools.',
    domain: 'Data',
    status: 'archived',
    stack: ['dbt', 'Snowflake', 'SQL'],
    metrics: ['128 dbt models', '12+ blockchains'],
    featured: true,
    group: 'work',
    order: 1,
  },
  {
    slug: 'aegis',
    name: 'AEGIS',
    tagline: 'Systematic trading research',
    description:
      'A governed workspace for researching, backtesting, and deploying multiple quantitative strategies under one engineering process. Built on vectorbt and CCXT, with a per-strategy spec-and-review gate so every program is reproducible and comparable before it touches risk.',
    domain: 'Quant',
    status: 'live',
    stack: ['Python', 'vectorbt', 'CCXT'],
    metrics: ['multi-strategy', 'backtested'],
    featured: true,
    group: 'work',
    order: 2,
  },
  {
    slug: 'solagin-live',
    name: 'solagin-live',
    tagline: 'Autonomous execution + risk',
    description:
      'An autonomous execution-and-risk layer for a live futures signal feed. It parses incoming signals, sizes positions with ATR-adaptive stops and staged risk scaling, and enters over a TWAP window to limit slippage. The engineering is in the risk management and trade reconciliation, not the signals.',
    domain: 'Quant',
    status: 'live',
    stack: ['Python', 'asyncio', 'Binance Futures'],
    metrics: ['ATR risk scaling', 'TWAP execution'],
    featured: true,
    group: 'work',
    order: 3,
  },
  {
    slug: 'atlas',
    name: 'atlas',
    tagline: 'Local LLM fine-tuning',
    description:
      'An end-to-end fine-tuning pipeline: QLoRA SFT plus DPO, quantized to GGUF and served via Ollama. A 32B model tuned to run on a single consumer GPU, with a staged evaluation gate that each checkpoint has to clear before it ships.',
    domain: 'AI',
    status: 'in-dev',
    stack: ['Python', 'Unsloth', 'TRL', 'Ollama'],
    metrics: ['32B model', 'QLoRA + DPO'],
    featured: true,
    group: 'work',
    order: 4,
  },
  {
    slug: 'market-data-service',
    name: 'market-data-service',
    tagline: 'Market data infrastructure',
    description:
      'A self-hosted market-data pipeline that backfills and incrementally archives one-minute OHLCV for around 196 instruments into a TimescaleDB hypertable, served behind a FastAPI read API. Built for reliability, with freshness watchdogs and multi-route egress.',
    domain: 'Infra',
    status: 'live',
    stack: ['Python', 'FastAPI', 'TimescaleDB'],
    metrics: ['196 symbols', '1m OHLCV'],
    featured: true,
    group: 'work',
    order: 5,
  },
  {
    slug: 'knowledge-graph',
    name: 'knowledge-graph',
    tagline: 'Memory-to-graph projection',
    description:
      'A projection system that merges four heterogeneous memory sources into one lint-enforced knowledge graph: atomic 1:1 nodes, semantic and rollup edges, conflict-aware sweeps, and annotation-preserving regeneration.',
    domain: 'Infra',
    status: 'live',
    stack: ['Python', 'Qdrant', 'Obsidian'],
    metrics: ['4 sources -> 1 graph', 'lint-enforced'],
    featured: true,
    group: 'work',
    order: 6,
  },
  {
    slug: 'probabilistic-stdev-bands',
    name: 'probabilistic-stdev-bands',
    tagline: 'Volatility analysis indicator',
    description:
      'A TradingView indicator that models price dispersion with probabilistic standard-deviation bands, giving a statistical read on volatility and likely ranges instead of fixed levels.',
    domain: 'Data',
    status: 'open-source',
    stack: ['Pine Script', 'statistics'],
    metrics: ['open source'],
    repo: 'https://github.com/stanleytejakusuma/probabilistic-stdev-bands',
    featured: true,
    group: 'work',
    order: 7,
  },
  {
    slug: 'kairos',
    name: 'Kairos',
    tagline: 'Personal life-OS agent',
    description:
      "A personal operating system I'm building for myself: an autonomous assistant that connects my finances, career ops, information feeds, and daily routines behind one brain. Designed spec-first, in active development.",
    domain: 'Personal',
    status: 'in-dev',
    stack: ['Python', 'LLM agents'],
    metrics: ['personal project', 'in development'],
    featured: true,
    group: 'personal',
    order: 8,
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export const workProjects = featuredProjects.filter((p) => p.group === 'work');
export const personalProjects = featuredProjects.filter((p) => p.group === 'personal');
