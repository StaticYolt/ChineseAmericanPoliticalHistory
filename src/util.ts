import { marked } from 'marked';

/** Escape text before putting it into HTML. */
export function esc(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/** Render a Markdown field from a content file. */
export function md(text: string): string {
  return marked.parse(text, { async: false });
}

/** Image paths in content files are relative to public/, e.g. "images/x.webp". */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const typeLabel = { 'turning-point': 'Turning point', fact: 'Fun fact', figure: 'Important figure' } as const;
