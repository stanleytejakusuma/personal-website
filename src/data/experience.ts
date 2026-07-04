// Single source of truth for the work timeline — rendered by both the
// experience tab (Experience.astro) and the standalone /resume page.
export interface Entry {
  dates: string;
  role: string;
  org: string;
  bullets: string[];
}

export const entries: Entry[] = [
  {
    dates: '2024–2026',
    role: 'Analytics Engineer',
    org: 'Flipside Crypto',
    bullets: [
      'Built Snowflake + dbt ELT pipelines across 10+ chains — 150K+ MAU, 10M+ transactions.',
      'Designed an agent-driven cost-intelligence pipeline watching $1M+ of annual compute spend.',
      'Anchored the NEAR client relationship; shipped an Intents intelligence layer validated against $12B+ in cumulative volume.',
    ],
  },
  {
    dates: '2022–2024',
    role: 'Research & Delegation Lead',
    org: 'Boiler Blockchain, Purdue',
    bullets: [
      'Led a three-person team overseeing $6M+ in governance votes across Optimism, dYdX, Stader, and Origin.',
      'Built and taught the club’s Introduction to Blockchain certification course.',
    ],
  },
  {
    dates: '2021–2022',
    role: 'Data Scientist Intern',
    org: 'Kargo Technologies',
    bullets: [
      'Cohort retention and customer-lifetime-value models for a freight-logistics marketplace; weekly reviews with the COO.',
    ],
  },
  {
    dates: '2021–2022',
    role: 'Research Writer',
    org: 'Wagmi Journal',
    bullets: [
      'Bi-weekly crypto research for angel investors — my first Dune Analytics dashboards and on-chain deep dives.',
    ],
  },
  {
    dates: '2021',
    role: 'Data Scientist',
    org: 'The Data Mine, Purdue',
    bullets: [
      'Cut electricity-usage prediction times by 24% for the Midcontinent Independent System Operator.',
    ],
  },
  {
    dates: '2021',
    role: 'Barista',
    org: 'Starbucks',
    bullets: [
      'My first employment, ever. Survived the 7am rush — turns out that was my first lesson in high-frequency order flow.',
    ],
  },
  {
    dates: '2020–2024',
    role: 'B.S. Data Science',
    org: 'Purdue University',
    bullets: [
      'Business economics minor. Boiler Blockchain, boxing club, Dean’s List.',
    ],
  },
];
