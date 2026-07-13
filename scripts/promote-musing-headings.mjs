import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const musingsDir = fileURLToPath(new URL('src/content/musings', root));
const write = process.argv.includes('--write');
const connectorWord = /^(?:a|an|and|as|at|but|by|for|from|in|into|nor|of|on|or|over|per|the|to|via|with)\b/i;
const titleCaseConnector = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'in',
  'into',
  'nor',
  'of',
  'on',
  'or',
  'over',
  'per',
  'the',
  'to',
  'via',
  'with',
]);

const readFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return match?.[1] ?? '';
};

const readTitle = (frontmatter) => {
  const match = frontmatter.match(/^title:\s*(?:'([^']*)'|"([^"]*)"|(.+))$/m);
  return (match?.[1] ?? match?.[2] ?? match?.[3] ?? '').trim();
};

const numberedLabel = (label) => {
  const match = label.match(/^(\d+(?:\.\d+)*)\.?(?:\s+|\s*[:\-–—]\s*)(.+)$/u);
  if (!match || connectorWord.test(match[2])) return null;
  return match[1];
};

const isAllCapsLabel = (label) => {
  const letters = label.match(/[A-Za-z]/g);
  return Boolean(letters?.some((letter) => letter >= 'A' && letter <= 'Z')) && label === label.toUpperCase();
};

const isTitleCaseLabel = (label) => {
  const words = label.match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)?/g);
  if (!words || words.length < 1) return false;

  return words.every((word) => {
    if (titleCaseConnector.has(word.toLowerCase())) return true;
    return /^[A-Z][A-Za-z0-9'’]*$/.test(word) || /^[A-Z0-9_]+$/.test(word);
  });
};

const boldLabel = (line) => {
  const match = line.match(/^\*\*([^*]+)\*\*$/u);
  if (!match) return null;

  const label = match[1];
  if (!label || label !== label.trim() || label.length > 60 || /[.!?]$/.test(label)) return null;
  return label;
};

const headingLevel = (label) => {
  const number = numberedLabel(label);
  return number ? '#'.repeat(number.split('.').length + 1) : '##';
};

const promoteHeadings = (source) => {
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const lines = source.split(/\r?\n/);
  const frontmatter = readFrontmatter(source);
  const title = readTitle(frontmatter);
  const titleCaseLabels = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;

    const label = boldLabel(line);
    if (label && !numberedLabel(label) && !isAllCapsLabel(label) && label !== title && isTitleCaseLabel(label)) {
      titleCaseLabels.push(label);
    }
  }

  const useTitleCaseSeries = titleCaseLabels.length >= 3;
  let promoted = 0;
  inFence = false;
  const updated = lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;

    const label = boldLabel(line);
    if (!label) return line;

    const shouldPromote =
      Boolean(numberedLabel(label)) ||
      isAllCapsLabel(label) ||
      (useTitleCaseSeries && label !== title && isTitleCaseLabel(label));
    if (!shouldPromote) return line;

    const heading = `${headingLevel(label)} ${label}`;
    if (heading.slice(heading.indexOf(' ') + 1) !== label) {
      throw new Error(`Heading text changed while processing: ${label}`);
    }
    promoted += 1;
    return heading;
  });

  return { content: updated.join(newline), promoted };
};

const entries = readdirSync(musingsDir)
  .filter((name) => name.endsWith('.md'))
  .sort();
const changed = [];
let localCount = 0;

for (const name of entries) {
  const file = join(musingsDir, name);
  const source = readFileSync(file, 'utf8');
  if (/^external:/m.test(readFrontmatter(source))) continue;
  localCount += 1;

  const result = promoteHeadings(source);
  if (result.promoted === 0) continue;
  if (write) writeFileSync(file, result.content);
  changed.push({ name, count: result.promoted });
}

console.log(`${write ? 'Promoted' : 'Would promote'} headings in ${changed.length} of ${localCount} local musings:`);
for (const { name, count } of changed) {
  console.log(`${name}: ${count}`);
}
