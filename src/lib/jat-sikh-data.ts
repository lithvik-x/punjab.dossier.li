// Jat Sikh Demographics & Clan Structure Data
// Source: MP1-foundational/demographics/jat-sikh-clans.md

import type {
  JatSikhData,
  JatPopulation,
  JatRegionDistribution,
  ClanInfo,
  LandholdingStrata,
  AgriculturalDebt,
  JatPoliticalAlignment,
  ConstituencyPriority,
  JatClan,
} from '../types/demographics';

// Population Estimates
export const JAT_POPULATION: JatPopulation[] = [
  { metric: 'Punjab total population (est. 2026)', estimate: '~30-31 million', source: 'Census projection' },
  { metric: 'Sikh share of Punjab population', estimate: '~58-60% (declining from 63.5% in 2001)', source: 'Census + media estimates' },
  { metric: 'Jat Sikh share of total Punjab population', estimate: '20-25% (6-8 million)', source: 'Wikipedia/Jat Sikh article citing India Today 2012, academic sources' },
  { metric: 'Jat Sikh share of Sikh population', estimate: '50-66%', source: 'Multiple academic sources; Wikipedia demographic section' },
  { metric: 'Jat Sikh share of rural population', estimate: '~35-40%', source: 'VERIFICATION_NEEDED' },
];

// Regional Distribution
export const REGIONAL_DISTRIBUTION: JatRegionDistribution[] = [
  {
    region: 'Malwa',
    assemblySeats: 69,
    concentration: 'Highest (~30-35% of regional population)',
    character: 'Zamindari belt; large landholdings; farmer activism; suicide belt',
  },
  {
    region: 'Majha',
    assemblySeats: 25,
    concentration: 'Moderate-High (~25-30%)',
    character: 'Panthic belt; religious; historically SAD-leaning',
  },
  {
    region: 'Doaba',
    assemblySeats: 23,
    concentration: 'Lower (~15-20%)',
    character: 'NRI belt; Dalit politics dominant; most diverse',
  },
];

// Clan Information
const CLAN_RECORDS: Record<JatClan, ClanInfo> = {
  'Sidhu-Brar': {
    name: 'Sidhu-Brar',
    estimatedRank: 'Largest clan',
    primaryRegion: 'Malwa (Bathinda, Mansa, Muktsar, Patiala)',
    notableFigures: ['Navjot Singh Sidhu (Congress)', 'Amarinder Singh (ex-CM, formerly Congress/PLC/BJP)', 'Simranjit Singh Mann (SAD-Amritsar)'],
    notes: 'Royal families of Patiala, Faridkot; historically ruling clan; massive prestige',
  },
  'Sandhu': {
    name: 'Sandhu',
    estimatedRank: '2nd largest',
    primaryRegion: 'Majha (Amritsar, Tarn Taran), Malwa',
    notableFigures: [],
    notes: 'Originally from Lahore/Amritsar district; founder of Sukerchakia Misl',
  },
  'Gill': {
    name: 'Gill',
    estimatedRank: 'Very large',
    primaryRegion: 'Malwa (Ludhiana, Moga, Faridkot), Doaba',
    notableFigures: ['M.S. Gill (ex-IAS, Union Minister)'],
    notes: 'Traditionally regarded as "superior"; some link to Sidhu-Virk-Shergill as descendants',
  },
  'Dhillon': {
    name: 'Dhillon',
    estimatedRank: 'Very large',
    primaryRegion: 'Malwa (Bathinda, Sangrur), Majha',
    notableFigures: [],
    notes: 'Ancient clan; major zamindars; also found among Muslim Jats',
  },
  'Bajwa': {
    name: 'Bajwa',
    estimatedRank: 'Large',
    primaryRegion: 'Majha (Gurdaspur, Pathankot), Malwa',
    notableFigures: ['Partap Singh Bajwa (Congress MP, ex-CLP leader)'],
    notes: 'Prominent in border belt; Suryavanshi claim',
  },
  'Randhawa': {
    name: 'Randhawa',
    estimatedRank: 'Large',
    primaryRegion: 'Malwa (Gurdaspur, Amritsar, Kapurthala), Majha',
    notableFigures: [],
    notes: 'Early Sikh converts; Ajita Randhawa was disciple of Guru Nanak',
  },
  'Grewal': {
    name: 'Grewal',
    estimatedRank: 'Large',
    primaryRegion: 'Malwa (Ludhiana, Moga), Doaba',
    notableFigures: [],
    notes: 'Notable for military/administrative roles; unique -- practices clan endogamy',
  },
  'Cheema': {
    name: 'Cheema',
    estimatedRank: 'Large',
    primaryRegion: 'Malwa (Moga, Faridkot), Doaba',
    notableFigures: ['Harpal Cheema (AAP, Punjab Finance Minister)'],
    notes: 'Also prominent among Muslim Jats in Pakistani Punjab',
  },
  'Aulakh': {
    name: 'Aulakh',
    estimatedRank: 'Medium-Large',
    primaryRegion: 'Malwa (Muktsar, Faridkot, Mansa)',
    notableFigures: [],
    notes: 'Concentrated in cotton belt',
  },
  'Dhaliwal': {
    name: 'Dhaliwal',
    estimatedRank: 'Medium-Large',
    primaryRegion: 'Malwa (Sangrur, Barnala, Mansa)',
    notableFigures: [],
    notes: 'Significant in Malwa agricultural belt',
  },
  'Dhindsa': {
    name: 'Dhindsa',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa (Sangrur)',
    notableFigures: ['Sukhdev Singh Dhindsa (SAD, ex-Union Minister)'],
    notes: 'Political family in Sangrur belt',
  },
  'Toor': {
    name: 'Toor',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa (Bathinda, Mansa)',
    notableFigures: [],
    notes: 'Concentrated in southern Malwa',
  },
  'Bhullar': {
    name: 'Bhullar',
    estimatedRank: 'Medium',
    primaryRegion: 'Majha, Malwa',
    notableFigures: [],
    notes: 'One of the "asal Jat" clans',
  },
  'Maan': {
    name: 'Maan',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa (Sangrur, Barnala)',
    notableFigures: ['Bhagwant Mann (AAP, CM Punjab)'],
    notes: 'Current CM belongs to this clan',
  },
  'Virk': {
    name: 'Virk',
    estimatedRank: 'Medium',
    primaryRegion: 'Majha (Amritsar, Gurdaspur)',
    notableFigures: [],
    notes: 'Some link to Gill descendants',
  },
  'Pannu': {
    name: 'Pannu',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa (Moga, Faridkot)',
    notableFigures: [],
    notes: '',
  },
  'Bains': {
    name: 'Bains',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa (Ludhiana), Doaba',
    notableFigures: [],
    notes: '',
  },
  'Warraich': {
    name: 'Warraich',
    estimatedRank: 'Medium-Large',
    primaryRegion: 'Majha, Malwa',
    notableFigures: [],
    notes: 'Also prominent in Pakistani Punjab',
  },
  'Deol': {
    name: 'Deol',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa, Doaba',
    notableFigures: [],
    notes: '',
  },
  'Uppal': {
    name: 'Uppal',
    estimatedRank: 'Medium',
    primaryRegion: 'Doaba, Malwa',
    notableFigures: [],
    notes: '',
  },
  'Kahlon': {
    name: 'Kahlon',
    estimatedRank: 'Medium',
    primaryRegion: 'Doaba (Hoshiarpur), Majha',
    notableFigures: [],
    notes: '',
  },
  'Sodhi': {
    name: 'Sodhi',
    estimatedRank: 'Medium',
    primaryRegion: 'Majha (Amritsar)',
    notableFigures: [],
    notes: '',
  },
  'Hundal': {
    name: 'Hundal',
    estimatedRank: 'Medium',
    primaryRegion: 'Malwa',
    notableFigures: [],
    notes: '',
  },
};

// Landholding Strata
export const LANDHOLDING_STRATA: LandholdingStrata[] = [
  { category: 'Large', sizeRange: '>10 acres', shareOfJatSikhFarmers: '~15-20%', trend: 'DECLINING' },
  { category: 'Medium', sizeRange: '5-10 acres', shareOfJatSikhFarmers: '~25-30%', trend: 'STABLE but squeezed' },
  { category: 'Small', sizeRange: '2-5 acres', shareOfJatSikhFarmers: '~30-35%', trend: 'GROWING' },
  { category: 'Marginal', sizeRange: '<2 acres', shareOfJatSikhFarmers: '~20-25%', trend: 'GROWING RAPIDLY' },
];

// Agricultural Debt Data
export const AGRICULTURAL_DEBT: AgriculturalDebt[] = [
  { indicator: 'Punjab total farm-related debt', figure: '>Rs 3 lakh crore (projected Rs 3.5L Cr by March 2025)', source: 'PTC News/RBI/NABARD, Feb 2025' },
  { indicator: 'Agricultural loan outstanding', figure: '>Rs 1 lakh crore', source: 'RBI data as of March 2024' },
  { indicator: 'Punjab cultivator debt (Punjab State Farmers Commission study)', figure: 'Rs 1.04 lakh crore', source: 'Dec 2025 study' },
  { indicator: 'Punjab total state debt/GSDP ratio', figure: '>46%', source: 'Punjab Budget 2024-25' },
  { indicator: 'Farmer suicides (NCRB 2023)', figure: '174 in Punjab (133 small landholders)', source: 'NCRB 2023 report' },
  { indicator: 'Suicide concentration', figure: '97%+ in Malwa region', source: 'Joint study: Punjabi University/PAU/GNDU' },
];

// Political Alignment History
export const POLITICAL_ALIGNMENT: JatPoliticalAlignment[] = [
  { period: '1966-1992', primary: 'Congress + SAD alternating', secondary: 'Jat Sikhs split: landowning elite to SAD, others to Congress' },
  { period: '1992-2017', primary: 'SAD (Badal) dominant', secondary: 'Congress as alternative; BJP through SAD alliance' },
  { period: '2017', primary: 'Congress surge (77 seats)', secondary: 'AAP breakthrough (20 seats, mostly Malwa Jat belt)' },
  { period: '2022', primary: 'AAP landslide (92 seats)', secondary: 'Congress collapse (18 seats); SAD destroyed (3 seats)' },
  { period: '2024 LS', primary: 'Mixed -- Congress won 7, AAP 3, SAD 1', secondary: 'INDIA alliance underperformed due to seat-sharing issues' },
];

// Constituency Priorities
const CONSTITUENCY_PRIORITIES: Record<1 | 2 | 3, ConstituencyPriority> = {
  1: {
    priority: 1,
    description: 'Jat Sikh dominant, must-win',
    seats: 'Bathinda region (6-7 seats), Sangrur-Barnala-Mansa (8-10 seats), Muktsar-Faridkot-Moga (8-10 seats), Patiala rural (3-4 seats), Fatehgarh Sahib (2 seats)',
  },
  2: {
    priority: 2,
    description: 'Significant Jat Sikh presence',
    seats: 'Ludhiana rural (4-5 seats), Ferozepur (3-4 seats), Amritsar rural (4-5 seats), Gurdaspur rural (3-4 seats), Tarn Taran (3 seats)',
  },
  3: {
    priority: 3,
    description: 'Mixed demographics',
    seats: 'Kapurthala, Jalandhar rural, Hoshiarpur rural, Rupnagar -- Jat Sikhs influential but not dominant due to high Dalit/OBC population',
  },
};

// Complete Jat Sikh Data Object
export const JAT_SIKH_DATA: JatSikhData = {
  population: JAT_POPULATION,
  regionalDistribution: REGIONAL_DISTRIBUTION,
  clans: CLAN_RECORDS,
  landholdingStrata: LANDHOLDING_STRATA,
  agriculturalDebt: AGRICULTURAL_DEBT,
  politicalAlignment: POLITICAL_ALIGNMENT,
  constituencyPriorities: CONSTITUENCY_PRIORITIES,
};

// Helper functions
export function getClanByName(name: string): ClanInfo | null {
  const normalized = name.replace(/[\s-]/g, '').toLowerCase();
  for (const [key, clan] of Object.entries(CLAN_RECORDS)) {
    if (key.replace(/[\s-]/g, '').toLowerCase() === normalized) {
      return clan;
    }
  }
  return null;
}

export function getClansByRegion(region: string): ClanInfo[] {
  return Object.values(CLAN_RECORDS).filter(
    c => c.primaryRegion.toLowerCase().includes(region.toLowerCase())
  );
}

export function getJatSikhConcentrationByDistrict(district: string): string {
  const veryHigh = ['Bathinda', 'Mansa', 'Barnala', 'Sangrur', 'Muktsar', 'Faridkot', 'Moga', 'Fatehgarh Sahib', 'Patiala'];
  const high = ['Ludhiana', 'Ferozepur', 'Tarn Taran', 'Amritsar', 'Gurdaspur'];
  const moderate = ['Kapurthala', 'Jalandhar', 'Hoshiarpur', 'Rupnagar', 'SAS Nagar'];
  const lower = ['Pathankot', 'Nawanshahr', 'urban constituencies'];

  if (veryHigh.some(d => district.toLowerCase().includes(d.toLowerCase()))) return 'Very High';
  if (high.some(d => district.toLowerCase().includes(d.toLowerCase()))) return 'High';
  if (moderate.some(d => district.toLowerCase().includes(d.toLowerCase()))) return 'Moderate';
  if (lower.some(d => district.toLowerCase().includes(d.toLowerCase()))) return 'Lower';
  return 'Unknown';
}

export function getRegionalLandholding(region: string): { over10Acres: string; character: string } {
  const data: Record<string, { over10Acres: string; character: string }> = {
    malwa: { over10Acres: '~27.5%', character: 'Highest average landholding. Zamindari belt. Highest proportion of large landholders.' },
    doaba: { over10Acres: '~23%', character: 'More diversified economy, NRI remittances supplement agriculture.' },
    majha: { over10Acres: '~17%', character: 'More urban-proximate, military employment historically significant.' },
  };
  return data[region.toLowerCase()] || { over10Acres: 'Unknown', character: 'Unknown' };
}
