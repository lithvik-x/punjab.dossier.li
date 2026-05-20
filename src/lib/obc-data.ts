// OBC Communities Demographics Data
// Source: MP1-foundational/demographics/obc-communities.md

import type {
  OBCData,
  ReservationFramework,
  OBCCommunity,
  ArtisanCommunity,
  PoliticalRepresentation,
  OBCRegionalDistribution,
} from '../types/demographics';

// OBC Population Estimate
const OBC_POPULATION_PERCENT = '31-32%';
const ESTIMATED_POPULATION = '~8.5-9 million';

// Reservation Framework
export const RESERVATION_FRAMEWORK: ReservationFramework[] = [
  { category: 'Scheduled Castes (SC)', reservationPercent: 25, populationShare: '~31.9%' },
  { category: 'Backward Classes / OBC', reservationPercent: 12, populationShare: '~31-32%' },
  { category: 'General / Open', reservationPercent: 63, populationShare: '~36-37% (Jats, Khatris, Aroras, Brahmins)' },
];

// Major OBC Communities
export const OBC_COMMUNITIES: OBCCommunity[] = [
  {
    name: 'Saini',
    population: 'Estimated 8-10 lakh in Punjab',
    religion: 'Predominantly Sikh and Hindu',
    geography: 'Sub-mountainous region: Hoshiarpur, SBS Nagar (Nawanshahr), Jalandhar, Rupnagar, Kapurthala, Pathankot. Significant presence in Amritsar and Gurdaspur. Concentrated in Doaba and parts of Majha.',
    traditionalOccupation: 'Agriculture (historically cultivators); vegetable/flower farming',
    economy: 'Moderately prosperous agrarian community; significant landholdings in Doaba',
    identity: 'Claim Yaduvanshi Rajput/Surasena lineage from Mathura region. Strong clan identity.',
    politicalDisposition: 'Traditionally Congress-leaning in Doaba; has shifted between Congress and AAP. Community is politically organised.',
    bcStatus: 'Added to Punjab BC list in September 2016 (notification 3/01/2010-RC-2/133-143)',
  },
  {
    name: 'Kamboj (also Kamboh)',
    population: 'Estimated 10-12 lakh in Punjab; among the largest individual OBC communities',
    religion: 'Sikh majority (~42%), substantial Hindu minority, negligible Muslim post-1947',
    geography: 'Ferozepur, Fazilka, Patiala, Sangrur, Mansa, Muktsar, Faridkot -- concentrated in Malwa and border districts. Over 2.5 lakh voters in Ferozepur LS seat alone (2024 data).',
    traditionalOccupation: 'Agriculture (agrarian community); historically among Punjab\'s prominent cultivating tribes',
    economy: 'Significant land-owning agrarian community; well-represented in farming',
    identity: 'Ancient community tracing origins to Kamboja kingdom. Strong biradari (brotherhood) identity.',
    politicalDisposition: 'Politically assertive and organised. Demand 27% ticket allocation. Kamboj Bhaichara Maha Sammelan (Feb 2024) in Ferozepur demonstrated mobilisation capacity. Present across party lines -- AAP MLA Jagdip Singh Goldy Kamboj (Jalalabad), Congress leaders, SAD figures.',
    bcStatus: 'Declared BC in 1959; initially for five years, made indefinite from 1979',
  },
  {
    name: 'Ramgarhia (Tarkhan, Dhiman)',
    population: 'Estimated 6-8 lakh in Punjab',
    religion: 'Predominantly Sikh',
    geography: 'Widespread across Punjab; concentrations in Jalandhar, Kapurthala, Hoshiarpur, Ludhiana, Amritsar. Doaba has highest density.',
    traditionalOccupation: 'Carpentry, woodworking, construction',
    economy: 'Significant presence in construction, furniture manufacturing, and small-scale industry. Moderate economic status with upward mobility.',
    identity: 'Named after Fort Ramgarhia (Amritsar). Strong community identity tied to Sikh martial heritage.',
    politicalDisposition: 'Traditionally Congress-leaning; community has been politically active since the Praja Mandal movement.',
    bcStatus: 'Added to Punjab BC list in August 2001 (notification 8/21/99-2SCWI/982) as "Ramgarhia, Tarkhan & Dhiman"',
  },
  {
    name: 'Labana (Lubana)',
    population: 'Estimated 5-7 lakh in Punjab',
    religion: 'Predominantly Sikh',
    geography: 'Concentrated in Gurdaspur, Pathankot, Hoshiarpur, Rupnagar, and pockets of Malwa. Historically nomadic; now settled across Punjab.',
    traditionalOccupation: 'Transporters, traders (historically carriers/load-bearers); now in trucking, logistics, agriculture',
    economy: 'Economically diverse -- some prosperous transport operators, others marginal farmers',
    identity: 'Claim Rajput ancestry. Historical connection to Sikh Gurus -- Guru Nanak\'s companion Bhai Mardana is associated with the community. Strong Sikh identity.',
    politicalDisposition: 'Historically Congress-leaning; community mobilises around Sikh identity and economic issues.',
    bcStatus: 'Declared BC in October 1956 (notification 28585-WG-56/6014)',
  },
];

// Artisan/Service Communities
export const ARTISAN_COMMUNITIES: ArtisanCommunity[] = [
  { community: 'Kumhar (Prajpatti)', traditionalOccupation: 'Pottery, ceramics', populationEstimate: '3-4 lakh', geography: 'Statewide; rural concentration', bcStatus: 'Declared BC 1958' },
  { community: 'Sunar (Swarankar/Suniar)', traditionalOccupation: 'Goldsmithing, jewellery', populationEstimate: '2-3 lakh', geography: 'Statewide; market towns', bcStatus: 'Added to BC list 2016' },
  { community: 'Nai (Hajjam)', traditionalOccupation: 'Barber, traditional services', populationEstimate: '2-3 lakh', geography: 'Statewide; rural villages', bcStatus: 'Declared BC 1956' },
  { community: 'Teli', traditionalOccupation: 'Oil pressing', populationEstimate: '1-2 lakh', geography: 'Malwa, border districts', bcStatus: 'Declared BC 1959' },
  { community: 'Dhobi', traditionalOccupation: 'Laundry/washing', populationEstimate: '1-2 lakh', geography: 'Statewide', bcStatus: 'Declared BC 1958' },
  { community: 'Lohar', traditionalOccupation: 'Blacksmithing', populationEstimate: '1-2 lakh', geography: 'Statewide; rural', bcStatus: 'Declared BC 1959' },
  { community: 'Jheer/Kahar/Jhinwar', traditionalOccupation: 'Water-carrying, fishing', populationEstimate: '1-2 lakh', geography: 'Majha, Doaba river belts', bcStatus: 'Declared BC 1955' },
];

// Political Representation Data
export const POLITICAL_REPRESENTATION: PoliticalRepresentation[] = [
  { institution: 'Gram Panchayat Sarpanches (13,236 total)', total: 13236, obcRepresentation: 'Zero' },
  { institution: 'Panches', total: 0, obcRepresentation: '~3%' },
  { institution: 'Panchayat Samiti Chairpersons (154)', total: 154, obcRepresentation: 'Zero' },
  { institution: 'Panchayat Samiti Zones (32)', total: 32, obcRepresentation: '~1%' },
  { institution: 'Zila Parishad Chairpersons (23)', total: 23, obcRepresentation: 'Zero' },
  { institution: 'Zila Parishad Zones (357)', total: 357, obcRepresentation: 'Zero' },
];

// Regional Distribution
export const REGIONAL_DISTRIBUTION: OBCRegionalDistribution[] = [
  {
    region: 'Malwa',
    assemblySeats: 69,
    dominantGroups: 'Kamboj, Saini, Teli, Kumhar, Yadav, Arain, Rai Sikh',
    estimatedOBCShare: '~30-33%',
    keyConstituencies: 'Ferozepur, Fazilka, Patiala, Sangrur, Mansa, Muktsar, Bathinda',
  },
  {
    region: 'Majha',
    assemblySeats: 25,
    dominantGroups: 'Saini, Ramgarhia, Labana, Kumhar, Nai',
    estimatedOBCShare: '~28-32%',
    keyConstituencies: 'Amritsar, Gurdaspur, Pathankot, Tarn Taran',
  },
  {
    region: 'Doaba',
    assemblySeats: 23,
    dominantGroups: 'Saini, Kamboj, Ramgarhia, Labana, Kumhar, Kachhi',
    estimatedOBCShare: '~33-35%',
    keyConstituencies: 'Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar',
  },
];

// Complete OBC Data Object
export const OBC_DATA: OBCData = {
  populationPercent: OBC_POPULATION_PERCENT,
  estimatedPopulation: ESTIMATED_POPULATION,
  reservationFramework: RESERVATION_FRAMEWORK,
  communities: OBC_COMMUNITIES,
  artisanCommunities: ARTISAN_COMMUNITIES,
  politicalRepresentation: POLITICAL_REPRESENTATION,
  regionalDistribution: REGIONAL_DISTRIBUTION,
};

// Helper functions
export function getOBCCommunity(name: string): OBCCommunity | null {
  const normalized = name.toLowerCase();
  return OBC_COMMUNITIES.find(c => c.name.toLowerCase().includes(normalized)) || null;
}

export function getArtisanCommunity(name: string): ArtisanCommunity | null {
  const normalized = name.toLowerCase();
  return ARTISAN_COMMUNITIES.find(c => c.community.toLowerCase().includes(normalized)) || null;
}

export function getOBCShareByRegion(region: string): string {
  const rd = REGIONAL_DISTRIBUTION.find(r => r.region.toLowerCase() === region.toLowerCase());
  return rd?.estimatedOBCShare || 'Unknown';
}

export function getDominantOBCByRegion(region: string): string[] {
  const rd = REGIONAL_DISTRIBUTION.find(r => r.region.toLowerCase() === region.toLowerCase());
  return rd?.dominantGroups.split(', ').map(s => s.trim()) || [];
}

export function getReservationGap(): { current: number; recommended: number; gap: number } {
  const current = 12;
  const recommended = 25;
  return { current, recommended, gap: recommended - current };
}

export function getAllOBCCommunities(): { name: string; population: string; occupation: string }[] {
  const major = OBC_COMMUNITIES.map(c => ({ name: c.name, population: c.population, occupation: c.traditionalOccupation }));
  const artisan = ARTISAN_COMMUNITIES.map(c => ({ name: c.community, population: c.populationEstimate, occupation: c.traditionalOccupation }));
  return [...major, ...artisan];
}
