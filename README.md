# Chinese American Political Identity: A Timeline Map

A static site: a US map with a time slider from 1848 to today. Turning points, fun facts and important figures appear as the slider moves; clicking one opens its story.

Built with Vite, TypeScript, Tailwind CSS v4 and d3-geo. Hosted on GitHub Pages.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173, reloads as you edit
npm run build     # type-checks everything, then builds to dist/
```

## Add content

Everything on the map comes from files in `src/content/`. Adding a file is all it takes: no list to update.

| To add a… | Copy this template | Into this folder |
|---|---|---|
| Turning point | `src/templates/turning-point.ts` | `src/content/turning-points/` |
| Fun fact | `src/templates/fact.ts` | `src/content/facts/` |
| Important figure | `src/templates/figure.ts` | `src/content/figures/` |

1. Copy the template and name it `year-short-name.ts`, e.g. `1898-wong-kim-ark.ts`.
2. Change the import at the top from `'../types'` to `'../../types'`.
3. Fill it in. Give it a unique `id` (lowercase, dashes).
4. Save. The dev server reloads and the item is on the map.

**The type checker enforces the content model.** A turning point needs exactly three people, at least one media item and at least one source. Every person needs a source. If something's missing, your editor underlines it in red and `npm run build` fails with a message that says what's missing.

**Drafts:** start a file name with `_` (e.g. `_1943-repeal.ts`) and the site ignores it.

**Images:** put files in `public/images/` and refer to them as `images/name.webp`. Convert to `.webp`, about 1600 px on the longest side.

**Coordinates:** right-click a spot on Google Maps or OpenStreetMap to copy its latitude and longitude. The first entry in `places` is where the marker goes.

The five example items (three turning points, one fact, one figure) are there so you can see how everything fits. The parts marked TODO are placeholders. Replace or delete them.

## What controls what

| File | What it does |
|---|---|
| `src/content/eras.ts` | Era names, years and one-line summaries (slider bands, year banner, list view) |
| `src/content/statehood.ts` | Year each state joined; earlier years draw it as a territory |
| `src/types.ts` | The content model |
| `src/styles.css` | Colors (`@theme` block at the top), marker shapes and sizes, layout |
| `index.html` | Page structure, intro text, and the **My argument** essay |
| `src/map.ts` | Draws the map and places markers |
| `src/slider.ts` | Slider, era bands, ticks, play and previous/next |
| `src/overlay.ts` | The panel with the Story / People / Generations / Media bookmarks |
| `src/views.ts` | List and Sources pages (built automatically from the content) |
| `src/state.ts` | Current year, open item and view, kept in sync with the URL |

How a turning point's brightness works: it's bright from its `start` year until the year before the next turning point starts, then stays on the map as a hollow square. You don't set this; it's worked out from the start years. Facts and figures show from `start` to `end`, then disappear.

## Links

Every view has a link you can share or put in a paper:

- `#/1882` opens the map at 1882
- `#/1892/geary-act` opens the map at 1892 with that item open
- `#/list`, `#/argument`, `#/sources`

## Publish on GitHub Pages

1. Create a GitHub repo and push this folder to its `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. The site appears at `https://<your-username>.github.io/<repo-name>/` after a minute or two.
# ChineseAmericanPoliticalHistory
