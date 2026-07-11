// Single source of truth for the featured project lineup.

export type Status = 'live' | 'archived' | 'open-source' | 'in-dev';

export interface Project {
  name: string;
  description: string;
  status: Status;
  since: string;
  stack: string[];
  metrics: string[];
  repo?: string;
  link?: string;
}

export const STATUS_LABEL: Record<Status, string> = {
  live: 'live',
  archived: 'archived',
  'open-source': 'open source',
  'in-dev': 'in dev',
};

export const projects: Project[] = [
  {
    name: 'AEGIS',
    description:
      'A workspace for researching, backtesting, and deploying multiple quantitative strategies under one engineering process. Built on vectorbt and CCXT, with a per-strategy spec-and-review gate so every program is reproducible and comparable before it touches risk.',
    status: 'live',
    since: 'Jan 2026',
    stack: ['Python', 'vectorbt', 'CCXT'],
    metrics: ['multi-strategy', 'backtested'],
  },
  {
    name: 'ring-mcp',
    description:
      'An MCP server that gives any agent access to your Oura Ring data: sleep, readiness, and activity as clean tools over the official v2 API. Bring your own token. Built so an assistant can reason about your recovery instead of just charting it.',
    status: 'open-source',
    since: 'Jul 2026',
    stack: ['TypeScript', 'MCP', 'Oura API'],
    metrics: ['3 tools', 'open source'],
    repo: 'https://github.com/stanleytejakusuma/ring-mcp',
  },
  {
    name: 'citadel-finance',
    description:
      'A self-hosted personal-finance stack: a dashboard for net worth and runway with an interactive spend-sensitivity slider, a REST API with audit logging, and ingestion via a Telegram bot and iOS Shortcuts. Built end to end in two days, then trimmed to what real use proved necessary.',
    status: 'live',
    since: 'Jun 2026',
    stack: ['FastAPI', 'HTMX', 'SQLite'],
    metrics: ['runway modeling', '2-day build'],
  },
  {
    name: 'antebot',
    description:
      'A betting-strategy lab: 79 scripted strategies across dice, blackjack, roulette, baccarat, and more, from Martingale to D’Alembert, built to measure exactly how every progression system meets the house edge. Negative EV, empirically confirmed. The orchestration, bankroll simulation, and variance tracking outlived the thesis.',
    status: 'archived',
    since: 'Mar 2026',
    stack: ['JavaScript', 'Node', 'statistics'],
    metrics: ['79 strategies', '-EV, proven'],
  },
  {
    name: 'knowledge-graph',
    description:
      'A projection system that merges four separate memory sources into one lint-enforced knowledge graph: atomic 1:1 nodes, semantic and rollup edges, conflict-aware sweeps, and annotation-preserving regeneration.',
    status: 'live',
    since: 'Mar 2026',
    stack: ['Python', 'Qdrant', 'Obsidian'],
    metrics: ['4 sources -> 1 graph', 'lint-enforced'],
  },
  {
    name: 'market-data-service',
    description:
      'A self-hosted market-data pipeline that backfills and incrementally archives one-minute OHLCV for around 196 instruments into a TimescaleDB hypertable, served behind a FastAPI read API. Built for reliability, with freshness watchdogs and multi-route egress.',
    status: 'live',
    since: 'Feb 2026',
    stack: ['Python', 'FastAPI', 'TimescaleDB'],
    metrics: ['196 symbols', '1m OHLCV'],
  },
  {
    name: 'card-counter',
    description:
      'A full-stack decision engine: Hi-Lo counting, basic strategy with index deviations, and Kelly bet sizing, on a pure-logic core with zero framework dependencies. Applied probability you can drill with.',
    status: 'open-source',
    since: 'Mar 2026',
    stack: ['React 19', 'TypeScript', 'Zustand'],
    metrics: ['pure-logic engine', 'Kelly sizing'],
    repo: 'https://github.com/stanleytejakusuma/card-counter',
  },
  {
    name: 'Kairos',
    description:
      'A personal agent OS built on the Hermes runtime: finances, health, feeds, and daily routines behind one brain, delivered as a daily digest. Spec-first, in active development.',
    status: 'in-dev',
    since: 'Jul 2026',
    stack: ['Python', 'LLM agents'],
    metrics: ['life-OS', 'daily digest'],
  },
  {
    name: 'telegram-archiver',
    description:
      'A self-hosted pipeline that archives the Telegram channels I follow into TimescaleDB. Incremental sync, freshness watchdogs, and a search API over years of message history. Built because scroll-back is not a database.',
    status: 'live',
    since: 'Feb 2026',
    stack: ['Python', 'Telethon', 'TimescaleDB'],
    metrics: ['self-hosted', 'searchable history'],
  },
  {
    name: 'solagin-live',
    description:
      'An autonomous execution-and-risk layer for a live futures signal feed. It parses incoming signals, applies adaptive risk controls, and executes with slippage-aware entry logic. The engineering is in the risk management and trade reconciliation, not the signals.',
    status: 'live',
    since: 'Jan 2026',
    stack: ['Python', 'asyncio', 'exchange APIs'],
    metrics: ['risk engine', 'live reconciliation'],
  },
  {
    name: 'probabilistic-stdev-bands',
    description:
      'A TradingView indicator that models price dispersion with probabilistic standard-deviation bands. Gives a statistical read on volatility and likely ranges instead of fixed levels.',
    status: 'open-source',
    since: 'Mar 2026',
    stack: ['Pine Script', 'statistics'],
    metrics: ['open source'],
    repo: 'https://github.com/stanleytejakusuma/probabilistic-stdev-bands',
  },
  {
    name: 'kumaguard',
    description:
      'An agent that sits on top of Uptime Kuma: batches alerts, diagnoses the failing container, and proposes (or applies, with approval) the fix over Telegram. Ops turned into a conversation.',
    status: 'live',
    since: 'May 2026',
    stack: ['Python', 'FastAPI', 'Docker'],
    metrics: ['auto-heal', 'human-in-the-loop'],
  },
  {
    name: 'atlas',
    description:
      'A self-hosted, sovereign LLM: fine-tuning an open model on my own knowledge-graph corpus so an assistant that actually knows my context runs entirely on local hardware. Staged evaluation gates each checkpoint before it ships, and the recipe is still evolving.',
    status: 'in-dev',
    since: 'Apr 2026',
    stack: ['Python', 'Unsloth', 'TRL', 'Ollama'],
    metrics: ['self-hosted LLM', 'QLoRA fine-tune'],
  },
  {
    name: 'trading-journal',
    description:
      'A post-trade journal that runs itself: a Telegram bot watches my futures account, pings me for the rationale while the trade is fresh, and has a language model score the decision after it closes. Turns hindsight into a structured dataset.',
    status: 'live',
    since: 'Apr 2026',
    stack: ['Python', 'Telegram', 'LLM'],
    metrics: ['auto trade capture', 'LLM scoring'],
  },
  {
    name: 'axiom homelab',
    description:
      "A NAS-based homelab that runs my life's backend: market-data and Telegram archivers, dashboards, bots, and monitoring as a Docker fleet, with backups, alerting, and multi-network egress. Uptime is a feature.",
    status: 'live',
    since: 'Nov 2025',
    stack: ['Docker', 'Linux', 'Tailscale'],
    metrics: ['24/7', 'self-hosted'],
  },
];
