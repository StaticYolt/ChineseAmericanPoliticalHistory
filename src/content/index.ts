import type { Fact, Figure, MapItem, TurningPoint } from '../types';
import { CURRENT_YEAR } from './eras';

// Every .ts file in these folders is picked up automatically.
// To add an item: copy a file from src/templates/, put it in the right folder, fill it in.
// Files starting with "_" are ignored, so you can park drafts as _draft-name.ts.
const tpFiles = import.meta.glob<{ default: TurningPoint }>(['./turning-points/*.ts', '!./turning-points/_*.ts'], { eager: true });
const factFiles = import.meta.glob<{ default: Fact }>(['./facts/*.ts', '!./facts/_*.ts'], { eager: true });
const figureFiles = import.meta.glob<{ default: Figure }>(['./figures/*.ts', '!./figures/_*.ts'], { eager: true });

const fromFiles = <T>(files: Record<string, { default: T }>) => Object.values(files).map((f) => f.default);

const byStart = (a: MapItem, b: MapItem) => a.start - b.start || a.title.localeCompare(b.title);

export const turningPoints: TurningPoint[] = fromFiles(tpFiles).sort(byStart);
export const facts: Fact[] = fromFiles(factFiles).sort(byStart);
export const figures: Figure[] = fromFiles(figureFiles).sort(byStart);
export const items: MapItem[] = [...turningPoints, ...facts, ...figures].sort(byStart);

export const itemById = new Map(items.map((item) => [item.id, item]));

// A turning point stays bright from its start year until the year before the
// next turning point starts. You don't need to set this; it's worked out here.
const activeUntil = new Map<string, number>();
turningPoints.forEach((tp, i) => {
  const next = turningPoints[i + 1];
  activeUntil.set(tp.id, next ? Math.max(tp.start, next.start - 1) : CURRENT_YEAR);
});

export type ItemState = 'hidden' | 'active' | 'past';

// A fact that lasted a year or two would blink past while the slider moves, so
// facts and figures stay on the map for at least this many years from their start.
// The years shown in the panel are still the real `start`–`end`.
export const MIN_VISIBLE_YEARS = 5;

export function stateAt(item: MapItem, year: number): ItemState {
  if (year < item.start) return 'hidden';
  if (item.type === 'turning-point') {
    return year <= (activeUntil.get(item.id) ?? item.end) ? 'active' : 'past';
  }
  const lastYear = Math.max(item.end, item.start + MIN_VISIBLE_YEARS - 1);
  return year <= lastYear ? 'active' : 'hidden';
}

export function yearRange(item: MapItem): string {
  if (item.start === item.end) return String(item.start);
  if (item.end >= CURRENT_YEAR) return `${item.start}–today`;
  return `${item.start}–${item.end}`;
}

// Catch mistakes the type checker can't: duplicate ids and backwards years.
// Problems show in the browser console and as a red bar on the page in dev.
export const contentProblems: string[] = [];
const seen = new Set<string>();
for (const item of items) {
  if (seen.has(item.id)) contentProblems.push(`Two items use the id "${item.id}".`);
  seen.add(item.id);
  if (item.end < item.start) contentProblems.push(`"${item.id}" ends (${item.end}) before it starts (${item.start}).`);
  if (!/^[a-z0-9-]+$/.test(item.id)) contentProblems.push(`"${item.id}": ids may only use lowercase letters, numbers and dashes.`);
}
for (const figure of figures) {
  for (const id of figure.turningPoints) {
    if (!itemById.has(id)) contentProblems.push(`Figure "${figure.id}" links to a turning point "${id}" that doesn't exist.`);
  }
}
if (contentProblems.length) console.warn('Content problems:\n' + contentProblems.join('\n'));
