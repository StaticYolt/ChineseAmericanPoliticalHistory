// Year each state joined the Union, keyed by the FIPS code us-atlas uses as the
// state id. Before that year the map draws the state as a territory.
// Simplification: borders are always today's (note this on the Sources page).
export const statehood: Record<string, number> = {
  '01': 1819, // Alabama
  '02': 1959, // Alaska
  '04': 1912, // Arizona
  '05': 1836, // Arkansas
  '06': 1850, // California
  '08': 1876, // Colorado
  '09': 1788, // Connecticut
  '10': 1787, // Delaware
  '11': 1790, // District of Columbia (not a state; treated as always part of the US)
  '12': 1845, // Florida
  '13': 1788, // Georgia
  '15': 1959, // Hawaii
  '16': 1890, // Idaho
  '17': 1818, // Illinois
  '18': 1816, // Indiana
  '19': 1846, // Iowa
  '20': 1861, // Kansas
  '21': 1792, // Kentucky
  '22': 1812, // Louisiana
  '23': 1820, // Maine
  '24': 1788, // Maryland
  '25': 1788, // Massachusetts
  '26': 1837, // Michigan
  '27': 1858, // Minnesota
  '28': 1817, // Mississippi
  '29': 1821, // Missouri
  '30': 1889, // Montana
  '31': 1867, // Nebraska
  '32': 1864, // Nevada
  '33': 1788, // New Hampshire
  '34': 1787, // New Jersey
  '35': 1912, // New Mexico
  '36': 1788, // New York
  '37': 1789, // North Carolina
  '38': 1889, // North Dakota
  '39': 1803, // Ohio
  '40': 1907, // Oklahoma
  '41': 1859, // Oregon
  '42': 1787, // Pennsylvania
  '44': 1790, // Rhode Island
  '45': 1788, // South Carolina
  '46': 1889, // South Dakota
  '47': 1796, // Tennessee
  '48': 1845, // Texas
  '49': 1896, // Utah
  '50': 1791, // Vermont
  '51': 1788, // Virginia
  '53': 1889, // Washington
  '54': 1863, // West Virginia
  '55': 1848, // Wisconsin
  '56': 1890, // Wyoming
};
