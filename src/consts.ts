export const SITE_TITLE = 'Stanley Tejakusuma';
export const AUTHOR = 'Stanley Tejakusuma';
export const SITE_URL = 'https://gregoriustanley.com';
export const SITE_DESC =
  'Stanley Tejakusuma. I live and breathe data: statistics, modeling, and the tools that act on it.';

export const TAGLINE = 'data · statistics · modeling · the tools that act on it';
export const SECONDARY_LINE = 'I turn messy data into decisions.';

// Hero name lockup style — 'mono' (gregorius_stanley, decrypt) | 'grotesk' (Gregorius Stanley).
// A/B these during the build; flip and re-screenshot to compare.
export const WORDMARK_STYLE: 'mono' | 'grotesk' = 'mono';

// Email kept as parts so the page never ships a plain mailto string in markup.
export const EMAIL_USER = 'gstanleytejakusuma';
export const EMAIL_DOMAIN = 'gmail.com';

export const SOCIALS = {
  handle: 'stanleytejakusuma',
  github: 'https://github.com/stanleytejakusuma',
  linkedin: 'https://www.linkedin.com/in/stanleytejakusuma/',
  x: 'https://x.com/stanzteja',
} as const;

export const NAV_LINKS = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'writing', href: '/blog' },
  { label: 'contact', href: '#contact' },
] as const;
