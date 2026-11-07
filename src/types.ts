// The content model from the design plan. Every content file must match one of
// these shapes, so a turning point with two people or no sources fails the build.

export type ItemType = 'turning-point' | 'fact' | 'figure';

export type EraId = 'gold-mountain' | 'exclusion' | 'citizenship' | 'movement' | 'suspicion' | 'contested';

export interface Place { name: string; lat: number; lon: number }

export interface Source { title: string; url: string }

export interface Image {
  src: string;               // file in public/images/, e.g. "images/nast-1882.webp"
  alt: string;               // describes what the image shows
  credit: string;            // creator, publication, date
  rights: 'public-domain' | 'fair-use' | 'licensed';
  source: Source;
}

// one of the three representative Chinese Americans in a turning point
export interface Person {
  name: string;
  chineseName?: string;      // traditional characters, if known
  years: string;             // e.g. "1858–1898"
  role: string;
  affiliation: string;       // party, organization or side
  motivation: string;
  sources: [Source, ...Source[]];    // research on this person, at least one
  image?: Image;
}

export interface MediaItem extends Image {
  title: string;
  year: number;
  context: string;           // what it shows and the stereotype or argument it pushed
}

interface BaseItem {
  id: string;                // used in the URL: #/1882/exclusion-act
  type: ItemType;
  title: string;
  start: number;             // first year it appears on the map
  end: number;               // last year of the event (turning points) or last year shown (facts, figures)
  places: [Place, ...Place[]];   // the first place is where the marker goes
  sources: [Source, ...Source[]];   // every turning point, fact and figure needs at least one
}

export interface TurningPoint extends BaseItem {
  type: 'turning-point';
  era: EraId;
  whatHappened: string;      // Markdown
  whyItMatters: string;      // Markdown
  people: [Person, Person, Person];   // exactly three
  generations: {             // daily life, struggles and good things for each age group (Markdown)
    children: string;
    teens?: string;          // leave out when it isn't relevant
    adults: string;
    elderly: string;
  };
  media: [MediaItem, ...MediaItem[]]; // at least one
}

export interface Fact extends BaseItem { type: 'fact'; body: string; image?: Image }

export interface Figure extends BaseItem {
  type: 'figure';
  person: Person;
  impact: string[];
  turningPoints: string[];   // ids of related turning points
}

export type MapItem = TurningPoint | Fact | Figure;

// bookmark tabs on the right edge of the overlay; 'story' opens first
export type OverlayTab = 'story' | 'people' | 'generations' | 'media';
export const DEFAULT_TAB: OverlayTab = 'story';

export interface Era {
  id: EraId;
  name: string;
  start: number;
  end: number;               // use CURRENT_YEAR for the last era
  summary: string;
}
