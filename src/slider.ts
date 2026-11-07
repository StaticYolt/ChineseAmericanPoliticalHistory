// The time slider: era bands, a native range input, a tick per turning point,
// previous/next buttons and a play button.
import { turningPoints } from './content';
import { CURRENT_YEAR, FIRST_YEAR, eraAt, eras } from './content/eras';
import { prefersReducedMotion, esc } from './util';

const SPAN = CURRENT_YEAR - FIRST_YEAR;
// Position along the track, matching where the range thumb sits for that year.
// --thumb is the thumb width set in styles.css.
const at = (year: number) => `calc(var(--thumb) / 2 + (100% - var(--thumb)) * ${(year - FIRST_YEAR) / SPAN})`;

interface SliderCallbacks {
  onYear: (year: number) => void;
}

let input: HTMLInputElement;
let playButton: HTMLButtonElement;
let announcer: HTMLElement;
let timer: number | undefined;
let announceTimer: number | undefined;
let currentYear = FIRST_YEAR;
let callbacks: SliderCallbacks;

export function createSlider(container: HTMLElement, cb: SliderCallbacks) {
  callbacks = cb;
  container.innerHTML = `
    <div class="slider-track relative">
      <div class="relative h-7 mb-1" aria-hidden="true">
        ${eras
          .map((e) => {
            const left = at(e.start);
            const width = `calc((100% - var(--thumb)) * ${(Math.min(e.end + 1, CURRENT_YEAR) - e.start) / SPAN})`;
            return `<button type="button" tabindex="-1" class="era-band" data-era="${e.id}" style="left:${left};width:${width}" title="${esc(e.name)}, ${e.start}">
              <span class="truncate">${esc(e.name)}</span></button>`;
          })
          .join('')}
      </div>
      <div class="relative">
        <input id="year-input" type="range" min="${FIRST_YEAR}" max="${CURRENT_YEAR}" step="1" value="${FIRST_YEAR}"
          aria-label="Year" class="year-range w-full">
        <div class="pointer-events-none absolute inset-x-0 top-1/2" aria-hidden="true">
          ${turningPoints.map((tp) => `<span class="tick" style="left:${at(tp.start)}"></span>`).join('')}
        </div>
      </div>
    </div>
    <div class="mt-3 flex flex-wrap items-center gap-2">
      <button type="button" id="play" class="ctrl" aria-label="Play">
        <svg viewBox="0 0 16 16" class="size-4" aria-hidden="true"><path class="play-icon" d="M4 2.5v11l9-5.5z" fill="currentColor"/><path class="pause-icon hidden" d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/></svg>
      </button>
      <button type="button" id="prev-tp" class="ctrl">Previous turning point</button>
      <button type="button" id="next-tp" class="ctrl">Next turning point</button>
    </div>
    <p id="year-announcer" class="sr-only" aria-live="polite"></p>
  `;

  input = container.querySelector('#year-input')!;
  playButton = container.querySelector('#play')!;
  announcer = container.querySelector('#year-announcer')!;

  input.addEventListener('input', () => {
    stop();
    callbacks.onYear(Number(input.value));
  });
  container.querySelector('#prev-tp')!.addEventListener('click', () => { stop(); jump(-1); });
  container.querySelector('#next-tp')!.addEventListener('click', () => { stop(); jump(1); });
  playButton.addEventListener('click', () => (timer ? stop() : play()));
  container.querySelectorAll<HTMLButtonElement>('.era-band').forEach((b) =>
    b.addEventListener('click', () => {
      stop();
      callbacks.onYear(eras.find((e) => e.id === b.dataset.era)!.start);
    }),
  );
}

export function updateSlider(year: number) {
  currentYear = year;
  input.value = String(year);
  const era = eraAt(year);
  document.querySelectorAll<HTMLElement>('.era-band').forEach((b) => b.classList.toggle('is-current', b.dataset.era === era.id));
  document.getElementById('prev-tp')!.toggleAttribute('disabled', !turningPoints.some((tp) => tp.start < year));
  document.getElementById('next-tp')!.toggleAttribute('disabled', !turningPoints.some((tp) => tp.start > year));

  // Announce the year once the slider settles, not on every step.
  clearTimeout(announceTimer);
  announceTimer = window.setTimeout(() => (announcer.textContent = `${year}: ${era.name}`), 600);
}

function jump(direction: 1 | -1) {
  const target =
    direction === 1
      ? turningPoints.find((tp) => tp.start > currentYear)
      : [...turningPoints].reverse().find((tp) => tp.start < currentYear);
  if (target) callbacks.onYear(target.start);
}

// Play: about 4 years a second, pausing for a moment on each turning point.
// With reduced motion turned on it steps from turning point to turning point.
function play() {
  if (currentYear >= CURRENT_YEAR) callbacks.onYear(FIRST_YEAR);
  playButton.setAttribute('aria-label', 'Pause');
  playButton.querySelector('.play-icon')!.classList.add('hidden');
  playButton.querySelector('.pause-icon')!.classList.remove('hidden');

  const step = () => {
    if (prefersReducedMotion()) {
      const next = turningPoints.find((tp) => tp.start > currentYear);
      if (!next) return stop();
      callbacks.onYear(next.start);
      timer = window.setTimeout(step, 2000);
      return;
    }
    const next = currentYear + 1;
    if (next > CURRENT_YEAR) return stop();
    callbacks.onYear(next);
    const isTurningPoint = turningPoints.some((tp) => tp.start === next);
    timer = window.setTimeout(step, isTurningPoint ? 1800 : 250);
  };
  timer = window.setTimeout(step, 250);
}

export function stop() {
  clearTimeout(timer);
  timer = undefined;
  if (!playButton) return;
  playButton.setAttribute('aria-label', 'Play');
  playButton.querySelector('.play-icon')!.classList.remove('hidden');
  playButton.querySelector('.pause-icon')!.classList.add('hidden');
}
