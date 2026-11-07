// The overlay panel that opens when a marker is clicked.
// Turning points get four bookmark tabs on the right edge (Story first);
// fun facts and figures fit in a single panel.
import { itemById, yearRange } from './content';
import { eras } from './content/eras';
import type { Fact, Figure, MapItem, MediaItem, OverlayTab, Person, Source, TurningPoint } from './types';
import { asset, esc, md, typeLabel } from './util';

const TABS: { id: OverlayTab; label: string }[] = [
  { id: 'story', label: 'Story' },
  { id: 'people', label: 'People' },
  { id: 'generations', label: 'Generations' },
  { id: 'media', label: 'Media' },
];

interface OverlayCallbacks {
  onClose: () => void;
  onTab: (tab: OverlayTab) => void;
  onOpenItem: (item: MapItem) => void;
}

let panel: HTMLElement;
let callbacks: OverlayCallbacks;
let openId: string | null = null;

export function createOverlay(el: HTMLElement, cb: OverlayCallbacks) {
  panel = el;
  callbacks = cb;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden && !document.querySelector('dialog[open]')) callbacks.onClose();
  });
}

export function renderOverlay(item: MapItem | null, tab: OverlayTab) {
  if (!item) {
    panel.hidden = true;
    panel.innerHTML = '';
    openId = null;
    return;
  }
  const isNew = openId !== item.id;
  openId = item.id;
  // Re-rendering replaces the buttons, so remember what had focus (e.g. a tab).
  const focusedId = panel.contains(document.activeElement) ? document.activeElement?.id : undefined;
  panel.hidden = false;
  panel.dataset.type = item.type;

  const body =
    item.type === 'turning-point' ? turningPointBody(item, tab) : item.type === 'fact' ? factBody(item) : figureBody(item);

  panel.innerHTML = `
    <div class="flex h-full">
      <div class="flex min-w-0 flex-1 flex-col">
        <header class="flex items-start gap-3 border-b border-rule px-5 pt-4 pb-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm text-muted">${typeLabel[item.type]} · ${yearRange(item)} · ${esc(item.places.map((p) => p.name).join(', '))}</p>
            <h2 id="overlay-title" class="mt-0.5 text-xl font-semibold leading-tight text-balance">${esc(item.title)}</h2>
            ${item.type === 'turning-point' ? `<p class="mt-1 text-sm text-muted">Era: ${esc(eras.find((e) => e.id === item.era)?.name ?? item.era)}</p>` : ''}
          </div>
          <button type="button" id="overlay-close" class="ctrl -mr-2 shrink-0" aria-label="Close">
            <svg viewBox="0 0 16 16" class="size-4" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
        </header>
        <div id="overlay-body" class="prose-body flex-1 overflow-y-auto px-5 py-4" ${item.type === 'turning-point' ? `role="tabpanel" aria-labelledby="tab-${tab}"` : ''} tabindex="0">
          ${body}
        </div>
      </div>
      ${item.type === 'turning-point' ? bookmarks(tab) : ''}
    </div>`;

  panel.querySelector('#overlay-close')!.addEventListener('click', () => callbacks.onClose());
  panel.querySelectorAll<HTMLButtonElement>('[role="tab"]').forEach((b) => {
    b.addEventListener('click', () => callbacks.onTab(b.dataset.tab as OverlayTab));
    b.addEventListener('keydown', (e) => {
      const i = TABS.findIndex((t) => t.id === b.dataset.tab);
      const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const next = TABS[(i + step + TABS.length) % TABS.length].id;
      callbacks.onTab(next);
      panel.querySelector<HTMLElement>(`#tab-${next}`)?.focus();
    });
  });
  panel.querySelectorAll<HTMLButtonElement>('[data-open-item]').forEach((b) =>
    b.addEventListener('click', () => {
      const target = itemById.get(b.dataset.openItem!);
      if (target) callbacks.onOpenItem(target);
    }),
  );
  panel.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((b) =>
    b.addEventListener('click', () => openImage(b.dataset.zoom!, b.dataset.caption ?? '')),
  );

  if (isNew) {
    panel.querySelector<HTMLElement>('#overlay-body')!.scrollTop = 0;
    panel.querySelector<HTMLElement>('#overlay-close')!.focus({ preventScroll: true });
  } else if (focusedId) {
    panel.querySelector<HTMLElement>(`#${focusedId}`)?.focus({ preventScroll: true });
  }
}

function bookmarks(active: OverlayTab): string {
  return `
    <div role="tablist" aria-orientation="vertical" aria-label="Sections" class="bookmarks">
      ${TABS.map(
        (t) => `<button type="button" role="tab" id="tab-${t.id}" data-tab="${t.id}"
          aria-selected="${t.id === active}" tabindex="${t.id === active ? 0 : -1}" class="bookmark">${t.label}</button>`,
      ).join('')}
    </div>`;
}

// ---------- turning point tabs ----------

function turningPointBody(tp: TurningPoint, tab: OverlayTab): string {
  switch (tab) {
    case 'story':
      return `
        <h3>What happened</h3>${md(tp.whatHappened)}
        <h3>Why it's a turning point</h3>${md(tp.whyItMatters)}
        ${sourceList('Sources', tp.sources)}`;
    case 'people':
      return `<p class="text-muted">Three Chinese Americans whose lives show this moment.</p>${tp.people.map(personCard).join('')}`;
    case 'generations': {
      const g = tp.generations;
      const rows: [string, string | undefined][] = [
        ['Children', g.children],
        ['Teenagers', g.teens],
        ['Adults', g.adults],
        ['Elderly', g.elderly],
      ];
      return rows
        .filter(([, text]) => text)
        .map(([label, text]) => `<section class="mb-4"><h3>${label}</h3>${md(text!)}</section>`)
        .join('');
    }
    case 'media':
      return `
        <p class="note">These images show how others portrayed Chinese Americans at the time. Some are racist; they're included as historical evidence.</p>
        ${tp.media.map(mediaCard).join('')}`;
  }
}

function personCard(p: Person): string {
  return `
    <article class="card">
      <div class="flex gap-3">
        ${
          p.image
            ? `<img src="${asset(p.image.src)}" alt="${esc(p.image.alt)}" class="size-16 shrink-0 rounded-full object-cover" loading="lazy">`
            : `<span class="initials" aria-hidden="true">${esc(initials(p.name))}</span>`
        }
        <div class="min-w-0">
          <h3 class="!mt-0">${esc(p.name)}${p.chineseName ? ` <span class="font-normal text-muted" lang="zh-Hant">${esc(p.chineseName)}</span>` : ''}</h3>
          <p class="text-sm text-muted">${esc(p.years)} · ${esc(p.role)}</p>
        </div>
      </div>
      <dl class="mt-3 grid gap-2 text-[0.95rem]">
        <div><dt class="font-semibold">Political affiliation</dt><dd>${esc(p.affiliation)}</dd></div>
        <div><dt class="font-semibold">Motivation</dt><dd>${esc(p.motivation)}</dd></div>
      </dl>
      ${sourceList('Sources', p.sources, true)}
    </article>`;
}

function mediaCard(m: MediaItem): string {
  const caption = `${m.title} (${m.year}). ${m.credit}`;
  return `
    <figure class="card">
      <button type="button" class="block w-full cursor-zoom-in" data-zoom="${esc(asset(m.src))}" data-caption="${esc(caption)}" aria-label="Open larger: ${esc(m.title)}">
        <img src="${asset(m.src)}" alt="${esc(m.alt)}" class="w-full rounded bg-rule/40" loading="lazy">
      </button>
      <figcaption class="mt-2">
        <p class="font-semibold">${esc(m.title)} <span class="font-normal text-muted">(${m.year})</span></p>
        <p class="text-sm text-muted">${esc(m.credit)}</p>
        <p class="mt-1">${esc(m.context)}</p>
        <p class="mt-1 text-sm"><a href="${esc(m.source.url)}" target="_blank" rel="noopener">${esc(m.source.title)}</a> · ${rightsLabel[m.rights]}</p>
      </figcaption>
    </figure>`;
}

const rightsLabel = { 'public-domain': 'Public domain', 'fair-use': 'Used under fair use', licensed: 'Used with license' };

// ---------- facts and figures ----------

function factBody(f: Fact): string {
  return `
    ${f.image ? `<img src="${asset(f.image.src)}" alt="${esc(f.image.alt)}" class="mb-3 w-full rounded" loading="lazy"><p class="text-sm text-muted">${esc(f.image.credit)}</p>` : ''}
    ${md(f.body)}
    ${sourceList('Sources', f.sources)}`;
}

function figureBody(f: Figure): string {
  const p = f.person;
  const related = f.turningPoints.map((id) => itemById.get(id)).filter((x): x is MapItem => Boolean(x));
  return `
    <div class="flex gap-3">
      ${
        p.image
          ? `<img src="${asset(p.image.src)}" alt="${esc(p.image.alt)}" class="size-20 shrink-0 rounded-full object-cover" loading="lazy">`
          : `<span class="initials !size-20 !text-xl" aria-hidden="true">${esc(initials(p.name))}</span>`
      }
      <div>
        <p class="text-lg font-semibold">${esc(p.name)}${p.chineseName ? ` <span class="font-normal text-muted" lang="zh-Hant">${esc(p.chineseName)}</span>` : ''}</p>
        <p class="text-sm text-muted">${esc(p.years)} · ${esc(p.role)}</p>
      </div>
    </div>
    <dl class="mt-4 grid gap-2">
      <div><dt class="font-semibold">Political affiliation</dt><dd>${esc(p.affiliation)}</dd></div>
      <div><dt class="font-semibold">Motivation</dt><dd>${esc(p.motivation)}</dd></div>
    </dl>
    <h3>Main impact</h3>
    <ul>${f.impact.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    ${
      related.length
        ? `<h3>Appears in</h3><ul>${related.map((r) => `<li><button type="button" class="link" data-open-item="${r.id}">${esc(r.title)} (${yearRange(r)})</button></li>`).join('')}</ul>`
        : ''
    }
    ${sourceList('Sources', [...f.sources, ...p.sources])}`;
}

// ---------- shared bits ----------

function sourceList(heading: string, sources: Source[], small = false): string {
  const unique = sources.filter((s, i) => sources.findIndex((t) => t.url === s.url) === i);
  if (!unique.length) return '';
  return `
    <div class="${small ? 'mt-3 text-sm' : 'mt-5'}">
      <p class="font-semibold">${heading}</p>
      <ul class="sources">${unique.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}</ul>
    </div>`;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

function openImage(src: string, caption: string) {
  const dialog = document.getElementById('image-viewer') as HTMLDialogElement;
  dialog.querySelector('img')!.src = src;
  dialog.querySelector('img')!.alt = caption;
  dialog.querySelector('figcaption')!.textContent = caption;
  dialog.showModal();
}
