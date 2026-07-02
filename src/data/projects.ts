// Single source of truth for the featured project lineup.

export type Category =
  | 'data & analytics'
  | 'markets & systems'
  | 'ai & agents'
  | 'infra & homelab'
  | 'probability & games';
export type Status = 'live' | 'archived' | 'open-source' | 'in-dev';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  status: Status;
  stack: string[];
  metrics: string[];
  repo?: string;
  link?: string;
  order: number;
}

export const STATUS_LABEL: Record<Status, string> = {
  live: 'live',
  archived: 'archived',
  'open-source': 'open source',
  'in-dev': 'in dev',
};

export const CATEGORY_ORDER: Category[] = [
  'data & analytics',
  'markets & systems',
  'ai & agents',
  'infra & homelab',
  'probability & games',
];

export const projects: Project[] = [
  // data & analytics
  {
    slug: 'flipside-analytics',
    name: 'Flipside on-chain analytics',
    tagline: 'On-chain data at scale',
    description:
      'A library of 128 dbt data models spanning 12+ blockchains (Solana, Ethereum, Bitcoin, Aptos, NEAR, Sei, and more) on Snowflake. Curated, tested transformations that turn raw chain data into queryable analytics, exposed through an endpoint for downstream tools.',
    category: 'data & analytics',
    status: 'archived',
    stack: ['dbt', 'Snowflake', 'SQL'],
    metrics: ['128 dbt models', '12+ blockchains'],
    order: 1,
  },
  {
    slug: 'citadel-finance',
    name: 'citadel-finance',
    tagline: 'Personal finance dashboard + API',
    description:
      'A self-hosted personal-finance stack: a dashboard for net worth and runway with an interactive spend-sensitivity slider, a REST API with audit logging, and frictionless ingestion via a Telegram bot and iOS Shortcuts. Built end to end in two days, then trimmed to what real use proved necessary.',
    category: 'data & analytics',
    status: 'live',
    stack: ['FastAPI', 'HTMX', 'SQLite'],
    metrics: ['runway modeling', '2-day build'],
    order: 2,
  },
  {
    slug: 'probabilistic-stdev-bands',
    name: 'probabilistic-stdev-bands',
    tagline: 'Volatility analysis indicator',
    description:
      'A TradingView indicator that models price dispersion with probabilistic standard-deviation bands, giving a statistical read on volatility and likely ranges instead of fixed levels.',
    category: 'data & analytics',
    status: 'open-source',
    stack: ['Pine Script', 'statistics'],
    metrics: ['open source'],
    repo: 'https://github.com/stanleytejakusuma/probabilistic-stdev-bands',
    order: 3,
  },

  // markets & systems
  {
    slug: 'aegis',
    name: 'AEGIS',
    tagline: 'Systematic trading research',
    description:
      'A governed workspace for researching, backtesting, and deploying multiple quantitative strategies under one engineering process. Built on vectorbt and CCXT, with a per-strategy spec-and-review gate so every program is reproducible and comparable before it touches risk.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'vectorbt', 'CCXT'],
    metrics: ['multi-strategy', 'backtested'],
    order: 3,
  },
  {
    slug: 'solagin-live',
    name: 'solagin-live',
    tagline: 'Autonomous execution + risk',
    description:
      'An autonomous execution-and-risk layer for a live futures signal feed. It parses incoming signals, applies adaptive risk controls, and executes with slippage-aware entry logic. The engineering is in the risk management and trade reconciliation, not the signals.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'asyncio', 'Binance Futures'],
    metrics: ['risk engine', 'live reconciliation'],
    order: 4,
  },
  {
    slug: 'market-data-service',
    name: 'market-data-service',
    tagline: 'Market data infrastructure',
    description:
      'A self-hosted market-data pipeline that backfills and incrementally archives one-minute OHLCV for around 196 instruments into a TimescaleDB hypertable, served behind a FastAPI read API. Built for reliability, with freshness watchdogs and multi-route egress.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'FastAPI', 'TimescaleDB'],
    metrics: ['196 symbols', '1m OHLCV'],
    order: 5,
  },
  {
    slug: 'trading-journal',
    name: 'trading-journal',
    tagline: 'LLM-powered trade journal',
    description:
      'A post-trade journal that runs itself: a Telegram bot watches my futures account, pings me for the rationale while the trade is fresh, and has a language model score the decision after it closes. Turns hindsight into a structured dataset.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'Telegram', 'LLM'],
    metrics: ['auto trade capture', 'LLM scoring'],
    order: 6,
  },

  // ai & agents
  {
    slug: 'atlas',
    name: 'atlas',
    tagline: 'Local LLM fine-tuning',
    description:
      'An end-to-end fine-tuning pipeline: QLoRA SFT plus DPO, quantized to GGUF and served via Ollama. A 32B model tuned to run on a single consumer GPU, with a staged evaluation gate that each checkpoint has to clear before it ships.',
    category: 'ai & agents',
    status: 'in-dev',
    stack: ['Python', 'Unsloth', 'TRL', 'Ollama'],
    metrics: ['32B model', 'QLoRA + DPO'],
    order: 7,
  },
  {
    slug: 'knowledge-graph',
    name: 'knowledge-graph',
    tagline: 'Memory-to-graph projection',
    description:
      'A projection system that merges four heterogeneous memory sources into one lint-enforced knowledge graph: atomic 1:1 nodes, semantic and rollup edges, conflict-aware sweeps, and annotation-preserving regeneration.',
    category: 'ai & agents',
    status: 'live',
    stack: ['Python', 'Qdrant', 'Obsidian'],
    metrics: ['4 sources -> 1 graph', 'lint-enforced'],
    order: 8,
  },
  {
    slug: 'hermes',
    name: 'Hermes',
    tagline: 'Personal life-OS agent (fka Kairos)',
    description:
      'A personal operating system built on a self-improving agent runtime: finances, health, feeds, and daily routines behind one brain, delivered as a daily digest. Spec-first, in active development.',
    category: 'ai & agents',
    status: 'in-dev',
    stack: ['Python', 'LLM agents'],
    metrics: ['life-OS', 'daily digest'],
    order: 9,
  },
  {
    slug: 'oura-mcp',
    name: 'oura-mcp',
    tagline: 'Oura Ring MCP connector',
    description:
      'An MCP server that gives any agent access to your Oura Ring data — sleep, readiness, and activity as clean tools over the official v2 API. Bring your own token; built so an assistant can reason about your recovery, not just chart it.',
    category: 'ai & agents',
    status: 'open-source',
    stack: ['TypeScript', 'MCP', 'Oura API'],
    metrics: ['3 tools', 'open source'],
    repo: 'https://github.com/stanleytejakusuma/oura-mcp',
    order: 10,
  },

  // infra & homelab
  {
    slug: 'kumaguard',
    name: 'kumaguard',
    tagline: 'Agentic uptime remediation',
    description:
      'An agent that sits on top of Uptime Kuma: batches alerts, diagnoses the failing container, and proposes (or applies, with approval) the fix over Telegram. Ops turned into a conversation.',
    category: 'infra & homelab',
    status: 'live',
    stack: ['Python', 'FastAPI', 'Docker'],
    metrics: ['auto-heal', 'human-in-the-loop'],
    order: 11,
  },
  {
    slug: 'axiom-homelab',
    name: 'axiom homelab',
    tagline: '24/7 self-hosted stack',
    description:
      "A NAS-based homelab that runs my life's backend: market-data and Telegram archivers, dashboards, bots, and monitoring as a Docker fleet — with backups, alerting, and multi-network egress. Uptime is a feature.",
    category: 'infra & homelab',
    status: 'live',
    stack: ['Docker', 'Linux', 'Tailscale'],
    metrics: ['24/7', 'self-hosted'],
    order: 12,
  },

  // probability & games
  {
    slug: 'card-counter',
    name: 'card-counter',
    tagline: 'Real-time blackjack decision HUD',
    description:
      'A full-stack decision engine: Hi-Lo counting, basic strategy with index deviations, and Kelly bet sizing, on a pure-logic core with zero framework dependencies. Applied probability you can drill with.',
    category: 'probability & games',
    status: 'open-source',
    stack: ['React 19', 'TypeScript', 'Zustand'],
    metrics: ['pure-logic engine', 'Kelly sizing'],
    repo: 'https://github.com/stanleytejakusuma/card-counter',
    order: 13,
  },
];

export const projectsByCategory: Array<{ category: Category; items: Project[] }> =
  CATEGORY_ORDER.map((category) => ({
    category,
    items: projects
      .filter((p) => p.category === category)
      .sort((a, b) => a.order - b.order),
  })).filter((group) => group.items.length > 0);
