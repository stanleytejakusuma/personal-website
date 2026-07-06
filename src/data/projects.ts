// Single source of truth for the featured project lineup.

export type Category =
  | 'data & analytics'
  | 'markets & systems'
  | 'ai & agents'
  | 'infra & homelab'
  | 'probability & games';
export type Status = 'live' | 'archived' | 'open-source' | 'in-dev';

export interface Project {
  name: string;
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
    name: 'Flipside on-chain analytics',
    description:
      'A library of 128 dbt data models spanning 10+ blockchains (Solana, Ethereum, Bitcoin, Aptos, NEAR, Sei, and more) on Snowflake. Curated, tested transformations that turn raw chain data into queryable analytics, exposed through an endpoint for downstream tools.',
    category: 'data & analytics',
    status: 'archived',
    stack: ['dbt', 'Snowflake', 'SQL'],
    metrics: ['128 dbt models', '10+ blockchains'],
    order: 1,
  },
  {
    name: 'citadel-finance',
    description:
      'A self-hosted personal-finance stack: a dashboard for net worth and runway with an interactive spend-sensitivity slider, a REST API with audit logging, and frictionless ingestion via a Telegram bot and iOS Shortcuts. Built end to end in two days, then trimmed to what real use proved necessary.',
    category: 'data & analytics',
    status: 'live',
    stack: ['FastAPI', 'HTMX', 'SQLite'],
    metrics: ['runway modeling', '2-day build'],
    order: 2,
  },
  {
    name: 'probabilistic-stdev-bands',
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
    name: 'AEGIS',
    description:
      'A governed workspace for researching, backtesting, and deploying multiple quantitative strategies under one engineering process. Built on vectorbt and CCXT, with a per-strategy spec-and-review gate so every program is reproducible and comparable before it touches risk.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'vectorbt', 'CCXT'],
    metrics: ['multi-strategy', 'backtested'],
    order: 3,
  },
  {
    name: 'solagin-live',
    description:
      'An autonomous execution-and-risk layer for a live futures signal feed. It parses incoming signals, applies adaptive risk controls, and executes with slippage-aware entry logic. The engineering is in the risk management and trade reconciliation, not the signals.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'asyncio', 'exchange APIs'],
    metrics: ['risk engine', 'live reconciliation'],
    order: 4,
  },
  {
    name: 'market-data-service',
    description:
      'A self-hosted market-data pipeline that backfills and incrementally archives one-minute OHLCV for around 196 instruments into a TimescaleDB hypertable, served behind a FastAPI read API. Built for reliability, with freshness watchdogs and multi-route egress.',
    category: 'markets & systems',
    status: 'live',
    stack: ['Python', 'FastAPI', 'TimescaleDB'],
    metrics: ['196 symbols', '1m OHLCV'],
    order: 5,
  },
  {
    name: 'trading-journal',
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
    name: 'atlas',
    description:
      'A self-hosted, sovereign LLM: fine-tuning an open model on my own knowledge-graph corpus so an assistant that actually knows my context runs entirely on local hardware. Staged evaluation gates each checkpoint before it ships — and the recipe is still evolving.',
    category: 'ai & agents',
    status: 'in-dev',
    stack: ['Python', 'Unsloth', 'TRL', 'Ollama'],
    metrics: ['self-hosted LLM', 'QLoRA fine-tune'],
    order: 7,
  },
  {
    name: 'knowledge-graph',
    description:
      'A projection system that merges four heterogeneous memory sources into one lint-enforced knowledge graph: atomic 1:1 nodes, semantic and rollup edges, conflict-aware sweeps, and annotation-preserving regeneration.',
    category: 'ai & agents',
    status: 'live',
    stack: ['Python', 'Qdrant', 'Obsidian'],
    metrics: ['4 sources -> 1 graph', 'lint-enforced'],
    order: 8,
  },
  {
    name: 'Hermes',
    description:
      'A personal operating system built on a self-improving agent runtime: finances, health, feeds, and daily routines behind one brain, delivered as a daily digest. Spec-first, in active development.',
    category: 'ai & agents',
    status: 'in-dev',
    stack: ['Python', 'LLM agents'],
    metrics: ['life-OS', 'daily digest'],
    order: 9,
  },
  {
    name: 'oura-mcp',
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
    name: 'kumaguard',
    description:
      'An agent that sits on top of Uptime Kuma: batches alerts, diagnoses the failing container, and proposes (or applies, with approval) the fix over Telegram. Ops turned into a conversation.',
    category: 'infra & homelab',
    status: 'live',
    stack: ['Python', 'FastAPI', 'Docker'],
    metrics: ['auto-heal', 'human-in-the-loop'],
    order: 11,
  },
  {
    name: 'axiom homelab',
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
    name: 'card-counter',
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
