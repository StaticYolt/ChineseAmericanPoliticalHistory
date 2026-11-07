// The non-map views: List (every item as a timeline) and Sources (built from
// every source in the content files). The argument page is plain HTML in index.html.
import { items, turningPoints, yearRange } from './content';
import { eras } from './content/eras';
import type { MapItem, Source } from './types';
import { esc, typeLabel } from './util';

export function renderList(el: HTMLElement) {
  el.innerHTML = eras
    .map((era) => {
      const inEra = items.filter((i) => i.start >= era.start && i.start <= era.end);
      return `
        <section class="mb-10" aria-labelledby="era-${era.id}">
          <h2 id="era-${era.id}" class="text-2xl font-semibold">${esc(era.name)} <span class="font-normal text-muted">${era.start}–${era.id === 'contested' ? 'today' : era.end}</span></h2>
          <p class="mt-1 max-w-prose text-muted">${esc(era.summary)}</p>
          ${
            inEra.length
              ? `<ol class="mt-4 grid gap-3">${inEra.map(listItem).join('')}</ol>`
              : `<p class="mt-4 rounded border border-dashed border-rule p-4 text-muted">Nothing added for this era yet.</p>`
          }
        </section>`;
    })
    .join('');
}

function listItem(item: MapItem): string {
  const summary =
    item.type === 'turning-point' ? firstSentence(item.whatHappened) : item.type === 'fact' ? firstSentence(item.body) : item.person.role;
  return `
    <li class="list-row" data-type="${item.type}">
      <span class="marker-shape static-shape" aria-hidden="true"></span>
      <div class="min-w-0 flex-1">
        <p class="text-sm text-muted">${typeLabel[item.type]} · ${yearRange(item)} · ${esc(item.places[0].name)}</p>
        <h3 class="text-lg font-semibold leading-snug">${esc(item.title)}</h3>
        <p class="mt-0.5 max-w-prose">${esc(summary)}</p>
      </div>
      <a class="ctrl shrink-0" href="#/${item.start}/${item.id}">Show on map</a>
    </li>`;
}

function firstSentence(markdown: string): string {
  const text = markdown.replace(/[*_`#>\[\]]|\(http[^)]*\)/g, '').trim();
  // Ends at a period after a lowercase letter or number, so "Chester A. Arthur" isn't cut off.
  const match = text.match(/^[\s\S]+?[a-z0-9)"'][.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

export function renderSources(el: HTMLElement) {
  const byItem = items.map((item) => {
    const all: Source[] = [...item.sources];
    if (item.type === 'turning-point') {
      item.people.forEach((p) => all.push(...p.sources));
      item.media.forEach((m) => all.push(m.source));
    }
    if (item.type === 'figure') all.push(...item.person.sources);
    const unique = all.filter((s, i) => all.findIndex((t) => t.url === s.url) === i);
    return { item, sources: unique };
  });

  el.innerHTML = `
    <h1 class="text-3xl font-semibold">Sources and method</h1>
    <section class="mt-6 max-w-prose">
      <h2 class="text-xl font-semibold">Main reference</h2>
      <p class="mt-1"><a href="https://www.foundationsandfutures.org/chapter/chinese-americans-and-the-making-of-american-history/" target="_blank" rel="noopener">Chinese Americans and the Making of American History</a>, Foundations and Futures</p>
    </section>
    <section class="mt-6 max-w-prose">
      <h2 class="text-xl font-semibold">How items were chosen</h2>
      <p class="mt-1 text-muted">TODO: explain how you picked the ${turningPoints.length} turning points, the facts and the figures.</p>
      <h2 class="mt-4 text-xl font-semibold">About the map</h2>
      <p class="mt-1">State borders are today's. A state not yet admitted to the Union in the selected year is drawn as a territory, even where the real territory had different borders.</p>
      <h2 class="mt-4 text-xl font-semibold">Content note</h2>
      <p class="mt-1">This site shows racist cartoons and describes violence, including massacres, as historical evidence.</p>
    </section>
    <section class="mt-8">
      <h2 class="text-xl font-semibold">Sources by item</h2>
      <div class="mt-3 grid gap-5">
        ${byItem
          .map(
            ({ item, sources }) => `
          <div>
            <h3 class="font-semibold"><a href="#/${item.start}/${item.id}">${esc(item.title)}</a> <span class="font-normal text-muted">${yearRange(item)}</span></h3>
            <ul class="sources">${sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}</ul>
          </div>`,
          )
          .join('')}
      </div>
    </section>`;
}

export function renderArgumentLinks(el: HTMLElement) {
  el.innerHTML = turningPoints
    .map((tp) => `<li><a href="#/${tp.start}/${tp.id}">${esc(tp.title)}</a> <span class="text-muted">(${yearRange(tp)})</span></li>`)
    .join('');
}
