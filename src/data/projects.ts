// Single source of truth for the featured project lineup.

export type Status = 'live' | 'archived' | 'open-source' | 'in-dev' | 'concluded';

// Curated domain taxonomy for the projects filter, kept deliberately small
// (mirrors the sector-chip pattern on the musings tab). Every project gets
// at least one; cross-cutting projects (e.g. an operated AI agent) carry two.
export type Tag = 'ai-agents' | 'trading-quant' | 'infra-ops' | 'agent-safety';

export interface Project {
  name: string;
  description: string;
  status: Status;
  since: string;
  stack: string[];
  metrics: string[];
  tags: Tag[];
  repo?: string;
  link?: string;
}

export const STATUS_LABEL: Record<Status, string> = {
  live: 'live',
  archived: 'archived',
  'open-source': 'open source',
  'in-dev': 'in dev',
  concluded: 'concluded',
};

export const TAG_LABEL: Record<Tag, string> = {
  'ai-agents': 'AI & Agents',
  'trading-quant': 'Trading & Quant',
  'infra-ops': 'Infra & Ops',
  'agent-safety': 'Agent Safety',
};

export const TAG_ORDER: Tag[] = ['ai-agents', 'trading-quant', 'infra-ops', 'agent-safety'];

export const projects: Project[] = [
  {
    name: 'AEGIS',
    description:
      "A workspace for researching, backtesting, and deploying multiple quantitative strategies under one engineering process. Built on vectorbt and CCXT, with a per-strategy spec-and-review gate so every program is reproducible and comparable before it touches risk. If it can't survive review, it doesn't ship.",
    status: 'live',
    since: 'Jan 2026',
    stack: ['Python', 'vectorbt', 'CCXT'],
    metrics: ['multi-strategy', 'backtested'],
    tags: ['trading-quant'],
  },
  {
    name: 'ring-mcp',
    description:
      'An MCP server that gives any agent access to your Oura Ring data: sleep, readiness, and activity as clean tools over the official v2 API. Bring your own token. Built so an assistant can reason about your recovery instead of just charting it.',
    status: 'open-source',
    since: 'Jul 2026',
    stack: ['TypeScript', 'MCP', 'Oura API'],
    metrics: ['3 tools', 'open source'],
    tags: ['infra-ops'],
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
    tags: ['infra-ops'],
  },
  {
    name: 'antebot',
    description:
      "A betting-strategy lab: 79 scripted strategies across dice, blackjack, roulette, baccarat, and more, from Martingale to D'Alembert, built to measure exactly how every progression system meets the house edge. Negative EV, empirically confirmed. The orchestration, bankroll simulation, and variance tracking outlived the thesis.",
    status: 'archived',
    since: 'Mar 2026',
    stack: ['JavaScript', 'Node', 'statistics'],
    metrics: ['79 strategies', '-EV, proven'],
    tags: ['trading-quant'],
  },
  {
    name: 'knowledge-graph',
    description:
      "A projection system that merges four separate memory sources into one lint-enforced knowledge graph: around 6,000 atomic nodes and 21,000 semantic edges built from embedding similarity, with conflict-aware sweeps and annotation-preserving regeneration. It powers retrieval for my agents and doubled as the training corpus for atlas. Basically: one place where nothing I've learned gets lost or contradicts itself.",
    status: 'live',
    since: 'Mar 2026',
    stack: ['Python', 'Qdrant', 'Obsidian'],
    metrics: ['6k nodes · 21k edges', '4 sources -> 1 graph'],
    tags: ['ai-agents', 'infra-ops'],
    repo: 'https://github.com/stanleytejakusuma/kg-sync',
  },
  {
    name: 'market-data-service',
    description:
      'A self-hosted market-data pipeline that backfills and incrementally archives one-minute OHLCV for 388 instruments, 223 crypto and 165 US equities, into a TimescaleDB hypertable, served behind one canonical FastAPI read API for both asset classes. Built for reliability, with freshness watchdogs, timezone-aware coverage checks, and multi-route egress.',
    status: 'live',
    since: 'Feb 2026',
    stack: ['Python', 'FastAPI', 'TimescaleDB'],
    metrics: ['388 symbols', '1m OHLCV'],
    tags: ['infra-ops', 'trading-quant'],
  },
  {
    name: 'card-counter',
    description:
      'A full-stack decision engine: Hi-Lo counting, basic strategy with index deviations, and Kelly bet sizing, on a pure-logic core with zero framework dependencies. Applied probability you can drill with.',
    status: 'open-source',
    since: 'Mar 2026',
    stack: ['React 19', 'TypeScript', 'Zustand'],
    metrics: ['pure-logic engine', 'Kelly sizing'],
    tags: ['trading-quant'],
    repo: 'https://github.com/stanleytejakusuma/card-counter',
  },
  {
    name: 'Kairos',
    description:
      'A self-hosted agentic RAG gateway on the Hermes runtime, operated daily: multi-source ingestion across chat platforms, X watchlists, Reddit, and call transcripts, a tool registry, scheduled agents, and self-hosted web search. Any action that reaches the real world routes through human approval first.',
    status: 'live',
    since: 'Jul 2026',
    stack: ['Python', 'LLM agents'],
    metrics: ['agentic RAG', 'daily driver'],
    tags: ['ai-agents', 'infra-ops'],
  },
  {
    name: 'telegram-archiver',
    description:
      'A self-hosted pipeline that archives the Telegram channels I follow into TimescaleDB. Incremental sync, freshness watchdogs, and a search API over years of message history. Built because scroll-back is not a database.',
    status: 'live',
    since: 'Feb 2026',
    stack: ['Python', 'Telethon', 'TimescaleDB'],
    metrics: ['self-hosted', 'searchable history'],
    tags: ['infra-ops'],
  },
  {
    name: 'solagin-live',
    description:
      'An autonomous execution-and-risk layer for a live futures signal feed. It parses incoming signals, applies adaptive risk controls, and executes with slippage-aware entry logic. The engineering is in the risk management and trade reconciliation, not the signals.',
    status: 'live',
    since: 'Jan 2026',
    stack: ['Python', 'asyncio', 'exchange APIs'],
    metrics: ['risk engine', 'live reconciliation'],
    tags: ['trading-quant'],
  },
  {
    name: 'probabilistic-stdev-bands',
    description:
      'A TradingView indicator that models price dispersion with probabilistic standard-deviation bands. Gives a statistical read on volatility and likely ranges instead of fixed levels. I got tired of drawing horizontal lines and pretending they meant something.',
    status: 'open-source',
    since: 'Mar 2026',
    stack: ['Pine Script', 'statistics'],
    metrics: ['open source'],
    tags: ['trading-quant'],
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
    tags: ['ai-agents', 'infra-ops'],
  },
  {
    name: 'atlas',
    description:
      'Controlled fine-tuning experiments toward a self-hosted LLM: QLoRA on 14B and 32B bases, SFT then DPO, graded by a 711-case eval harness across 14 categories with a judge ensemble on high-stakes cases. The final version beat the hosted baseline on the harness, then lost a live A/B zero topics to thirty-five and hit the pre-registered kill rule, so the fine-tunes were shelved. The harness is the point. A measured negative result is still a result.',
    status: 'concluded',
    since: 'Apr 2026',
    stack: ['Python', 'Unsloth', 'TRL', 'Ollama'],
    metrics: ['711-case eval harness', 'judge ensemble'],
    tags: ['ai-agents'],
    repo: 'https://github.com/stanleytejakusuma/atlas',
  },
  {
    name: 'proposer-verifier',
    description:
      'An architecture write-up for capital-bearing LLM agents: split the system into a brain that can only propose and a deterministic signer that verifies every intent through a layered fail-closed pipeline. No LLM in the signing path, ever. The pattern behind my live agent execution, published as docs and diagrams.',
    status: 'open-source',
    since: 'Jul 2026',
    stack: ['systems design', 'Mermaid'],
    metrics: ['fail-closed', 'no LLM signs'],
    tags: ['agent-safety', 'ai-agents'],
    repo: 'https://github.com/stanleytejakusuma/proposer-verifier',
  },
  {
    name: 'model-routing',
    description:
      'A fail-closed gate between an agent harness and irreversible actions: an LLM classifier with human confirmation, Ed25519-signed single-use intents bound to the exact action, and a red-team harness holding recall 1.0 across 59 adversarial cases. Ships with a shadow-runner path for deploying it without breaking anyone.',
    status: 'open-source',
    since: 'Jul 2026',
    stack: ['Python', 'Ed25519', 'red-teaming'],
    metrics: ['recall 1.0', '79 tests'],
    tags: ['agent-safety', 'ai-agents'],
    repo: 'https://github.com/stanleytejakusuma/model-routing',
  },
  {
    name: 'trading-journal',
    description:
      'A post-trade journal that runs itself: a Telegram bot watches my futures account, pings me for the rationale while the trade is fresh, and a language model classifies the trading psychology across the full event timeline once the trade closes. Turns hindsight into a structured behavioral dataset.',
    status: 'live',
    since: 'Apr 2026',
    stack: ['Python', 'Telegram', 'LLM'],
    metrics: ['auto trade capture', 'behavioral classification'],
    tags: ['trading-quant', 'ai-agents'],
  },
  {
    name: 'axiom homelab',
    description:
      "A NAS-based homelab that runs my life's backend: market-data and Telegram archivers, dashboards, bots, and monitoring as a Docker fleet, with backups, alerting, and multi-network egress. Uptime is a feature.",
    status: 'live',
    since: 'Nov 2025',
    stack: ['Docker', 'Linux', 'Tailscale'],
    metrics: ['24/7', 'self-hosted'],
    tags: ['infra-ops'],
  },
];
