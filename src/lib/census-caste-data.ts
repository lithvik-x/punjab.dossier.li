// Census 2011 and Caste Classification Data
// Source: direct-documentation/cat-1-demography/b1-punjab-census-2011-caste-framework.md

import type {
  PunjabCensus2011StateSummary,
  DistrictCensusData,
  WorkParticipationRate,
  CasteClassificationFramework,
  RegionalCharacteristic,
} from '../types/census-caste-types';

export const PUNJAB_CENSUS_2011_STATE_SUMMARY: PunjabCensus2011StateSummary = {
  totalPopulation: 27743338,
  malePopulation: 14639465,
  femalePopulation: 13103873,
  sexRatio: 895,
  urbanPopulation: 10399146,
  urbanPercentage: 37.5,
  ruralPopulation: 17344192,
  ruralPercentage: 62.5,
  literacyRate: 76.9,
  maleLiteracy: 81.2,
  femaleLiteracy: 71.3,
  scPopulation: 8860000,
  scPercentage: 31.9,
  stPopulation: 28000,
  stPercentage: 0.1,
};

export const DISTRICT_CENSUS_DATA: DistrictCensusData[] = [
  { name: 'Amritsar', totalPopulation: 2490656, male: 1318408, female: 1172248, urbanPercentage: 41.2, literacyPercentage: 76.9, scPercentage: '~28-30%' },
  { name: 'Bathinda', totalPopulation: 1388525, male: 739990, female: 648535, urbanPercentage: 41.7, literacyPercentage: 68.3, scPercentage: '~25-27%' },
  { name: 'Faridkot', totalPopulation: 617508, male: 327121, female: 290387, urbanPercentage: 34.6, literacyPercentage: 70.6, scPercentage: '~32-34%' },
  { name: 'Fatehgarh Sahib', totalPopulation: 600163, male: 318541, female: 281622, urbanPercentage: 32.9, literacyPercentage: 79.7, scPercentage: '~28-30%' },
  { name: 'Fazilka', totalPopulation: 1034754, male: 550346, female: 484408, urbanPercentage: 24.8, literacyPercentage: 65.8, scPercentage: '~30-32%' },
  { name: 'Ferozepur', totalPopulation: 2029930, male: 1079579, female: 950351, urbanPercentage: 29.6, literacyPercentage: 68.9, scPercentage: '~30-33%' },
  { name: 'Gurdaspur', totalPopulation: 2298323, male: 1213789, female: 1084534, urbanPercentage: 23.5, literacyPercentage: 73.8, scPercentage: '~28-30%' },
  { name: 'Hoshiarpur', totalPopulation: 1586625, male: 803512, female: 783113, urbanPercentage: 15.4, literacyPercentage: 84.6, scPercentage: '~25-27%' },
  { name: 'Jalandhar', totalPopulation: 2193590, male: 1144715, female: 1048875, urbanPercentage: 47.8, literacyPercentage: 82.4, scPercentage: '~24-26%' },
  { name: 'Kapurthala', totalPopulation: 815784, male: 428011, female: 387773, urbanPercentage: 33.1, literacyPercentage: 80.3, scPercentage: '~22-24%' },
  { name: 'Ludhiana', totalPopulation: 3487607, male: 1855717, female: 1631890, urbanPercentage: 58.9, literacyPercentage: 82.5, scPercentage: '~18-20%' },
  { name: 'Mansa', totalPopulation: 769751, male: 404357, female: 365394, urbanPercentage: 20.6, literacyPercentage: 61.8, scPercentage: '~35-37%' },
  { name: 'Moga', totalPopulation: 992589, male: 524828, female: 467761, urbanPercentage: 21.4, literacyPercentage: 67.9, scPercentage: '~34-36%' },
  { name: 'Mohali (SAS Nagar)', totalPopulation: 994628, male: 531103, female: 463525, urbanPercentage: 60.5, literacyPercentage: 84.9, scPercentage: '~16-18%' },
  { name: 'Muktsar', totalPopulation: 901896, male: 479809, female: 422087, urbanPercentage: 22.4, literacyPercentage: 64.8, scPercentage: '~33-35%' },
  { name: 'Pathankot', totalPopulation: 1199215, male: 637486, female: 561729, urbanPercentage: 37.3, literacyPercentage: 81.4, scPercentage: '~22-24%' },
  { name: 'Patiala', totalPopulation: 1892335, male: 1007612, female: 884723, urbanPercentage: 38.2, literacyPercentage: 75.3, scPercentage: '~26-28%' },
  { name: 'Rupnagar', totalPopulation: 1016143, male: 535575, female: 480568, urbanPercentage: 36.8, literacyPercentage: 82.0, scPercentage: '~24-26%' },
  { name: 'Sangrur', totalPopulation: 1654408, male: 875889, female: 778519, urbanPercentage: 24.7, literacyPercentage: 66.8, scPercentage: '~36-38%' },
  { name: 'SBS Nagar (Nawanshahr)', totalPopulation: 626606, male: 328521, female: 298085, urbanPercentage: 20.7, literacyPercentage: 79.1, scPercentage: '~30-32%' },
  { name: 'Tarn Taran', totalPopulation: 1119627, male: 593487, female: 526140, urbanPercentage: 15.2, literacyPercentage: 68.9, scPercentage: '~38-40%' },
  { name: 'Barnala', totalPopulation: 596670, male: 316845, female: 279825, urbanPercentage: 22.8, literacyPercentage: 64.9, scPercentage: '~36-38%' },
];

export const WORK_PARTICIPATION_RATES: WorkParticipationRate[] = [
  { region: 'Punjab Average', wprTotal: '~35.4%', wprMale: '~56.2%', wprFemale: '~12.8%' },
  { region: 'Malwa Region', wprTotal: '~36-38%', wprMale: '~56-58%', wprFemale: '~14-16%' },
  { region: 'Majha Region', wprTotal: '~34-36%', wprMale: '~55-57%', wprFemale: '~12-14%' },
  { region: 'Doaba Region', wprTotal: '~32-34%', wprMale: '~54-56%', wprFemale: '~10-12%' },
];

export const HIGH_SC_CONCENTRATION_DISTRICTS = [
  'Tarn Taran (~38-40%)',
  'Barnala (~36-38%)',
  'Sangrur (~36-38%)',
  'Moga (~34-36%)',
  'Muktsar (~33-35%)',
];

export const LOW_SC_CONCENTRATION_DISTRICTS = [
  'Ludhiana (~18-20%)',
  'Mohali (SAS Nagar) (~16-18%)',
  'Jalandhar (~24-26%)',
  'Kapurthala (~22-24%)',
];

export const HIGH_LITERACY_DISTRICTS = [
  'Hoshiarpur (84.6%)',
  'Mohali (SAS Nagar) (84.9%)',
  'Ludhiana (82.5%)',
  'Jalandhar (82.4%)',
  'Rupnagar (82.0%)',
];

export const LOW_LITERACY_DISTRICTS = [
  'Mansa (61.8%)',
  'Bathinda (68.3%)',
  'Muktsar (64.8%)',
  'Ferozepur (68.9%)',
];

export const REGIONAL_CHARACTERISTICS: RegionalCharacteristic[] = [
  {
    name: 'Malwa',
    totalSeats: 69,
    keyFeatures: ['Largest region by seats', 'Highest SC concentration', 'Jat Sikh dominant', 'Agricultural economy'],
    dominantCasteGroups: ['Jat Sikh', 'Mazhabi Sikh', 'OBC'],
    electoralCharacter: 'Decisive region - no party can win majority without dominating Malwa',
  },
  {
    name: 'Majha',
    totalSeats: 27,
    keyFeatures: ['Border area', 'Mixed demographics', 'More BJP presence', 'Major Sikh institutions'],
    dominantCasteGroups: ['Jat Sikh', 'Hindu Upper Caste'],
    electoralCharacter: 'Border security consciousness, less volatile',
  },
  {
    name: 'Doaba',
    totalSeats: 23,
    keyFeatures: ['NRI belt', 'Highest SC concentration', 'Industrial', 'Highest out-migration'],
    dominantCasteGroups: ['Ravidasia', 'Mazhabi Sikh', 'Valmiki'],
    electoralCharacter: 'Highest AAP performance 2022, youth turnout, transnational ties',
  },
];

// Helper functions
export function getDistrictByName(name: string): DistrictCensusData | undefined {
  return DISTRICT_CENSUS_DATA.find(d => d.name.toLowerCase() === name.toLowerCase());
}

export function getDistrictsBySCPercentage(minPercentage: number, maxPercentage: number): DistrictCensusData[] {
  return DISTRICT_CENSUS_DATA.filter(d => {
    const scValue = parseFloat(d.scPercentage.replace(/[~%]/g, ''));
    return scValue >= minPercentage && scValue <= maxPercentage;
  });
}

export function getDistrictsByLiteracy(minLiteracy: number): DistrictCensusData[] {
  return DISTRICT_CENSUS_DATA.filter(d => d.literacyPercentage >= minLiteracy);
}

export function getRegionalSeats(region: 'Malwa' | 'Majha' | 'Doaba'): number {
  const regional = REGIONAL_CHARACTERISTICS.find(r => r.name === region);
  return regional?.totalSeats ?? 0;
}

export const CENSUS_CASTE_FRAMEWORK: CasteClassificationFramework = {
  stateSummary: PUNJAB_CENSUS_2011_STATE_SUMMARY,
  districts: DISTRICT_CENSUS_DATA,
  workParticipationRates: WORK_PARTICIPATION_RATES,
  jatSikh: {
    name: 'Jat Sikh',
    populationEstimate: '5.5-6.1 million',
    populationShare: '20-22% of Punjab',
    populationPercentage: '20-22%',
    geographicDistribution: [
      'Malwa Region (69 seats): Dominant throughout',
      'Majha Region (27 seats): Significant presence',
      'Doaba Region (23 seats): Moderate presence',
      'Low presence: Hoshiarpur, Rupnagar, SBS Nagar (~5-8%)',
    ],
    historicalOccupation: 'Agricultural landowners',
    subClusters: ['Rewari', 'Awan', 'Ghotia', 'Sandhu', 'Maan', 'Sandi'],
    politicalSignificance: [
      'Dominant landowning caste historically',
      'Controls significant agricultural resources',
      'Traditional Congress votebank historically (pre-1990s), shifted to Akali Dal',
      'Key voting bloc in Malwa constituencies (69 seats)',
    ],
    historicalContext: [
      'Pre-partition: Dominant caste in Punjab agrarian economy',
      'Post-independence: Maintained political dominance through Akali Dal',
      '1970s-80s: Congress Kham Noon Yojana attempted Jat mobilization',
      '1990s-2000s: Shifted to Akali Dal, particularly after 1977',
    ],
  },
  scSubCastes: [
    {
      subCaste: 'Mazhabi Sikh',
      name: 'Mazhabi Sikh',
      populationEstimate: '~3.3 million (~12% of total, ~37% of SC)',
      populationPercentage: '~12% of total population',
      geographicDistribution: [
        'Rural Malwa: Tarn Taran, Barnala, Mansa, Sangrur, Moga, Muktsar, Ferozepur',
        'Doaba Region: Jalandhar rural, SBS Nagar, Hoshiarpur',
        'Majha: Amritsar rural, Gurdaspur rural',
        'Low: Urban areas of Ludhiana, Jalandhar, Mohali',
      ],
      historicalOccupation: 'Agricultural labor, formerly bonded labor',
      deraConnections: ['Dera Sacha Sauda (Sirsa)', 'Dera Sant Pal (Baba Balbir Singh)'],
      politicalBehavior: 'Traditionally Congress loyalists, shifted to AAP in 2012-2017',
      keyReservedConstituencies: ['Tarn Taran (SC)', 'Bholath (SC)', 'Phagwara (SC)', 'Lambi', 'Muktsar'],
    },
    {
      subCaste: 'Valmiki',
      name: 'Valmiki (Balmiki)',
      populationEstimate: '~2.2 million (~8% of total, ~25% of SC)',
      populationPercentage: '~8% of total population',
      geographicDistribution: [
        'Urban and Peri-urban: Amritsar, Jalandhar, Ludhiana, Patiala, Bathinda',
        'Industrial areas: Along railway lines, industrial corridors',
        'Municipal committees throughout Punjab',
      ],
      historicalOccupation: 'Sanitation, sweeping, conservancy work',
      politicalBehavior: 'Urban constituencies with different dynamics, issue-based voting',
    },
    {
      subCaste: 'Ravidasia',
      name: 'Ravidasia',
      populationEstimate: '~1.65 million (~6% of total, ~19% of SC)',
      populationPercentage: '~6% of total population',
      geographicDistribution: [
        'Doaba Region (NRI Belt): Jalandhar, Hoshiarpur, SBS Nagar, Kapurthala rural',
        'Majha: Gurdaspur, Amritsar',
        'Urban: Jalandhar, Ludhiana, Phagwara',
      ],
      historicalOccupation: 'Shoe-making (chamar), leather work, hide processing',
      deraConnections: ['Dera Sachkhand Ballan (head: Mastana Singh)'],
      politicalBehavior: 'Strong Congress affinity but independent voting',
    },
    {
      subCaste: 'Ad-Dharmi',
      name: 'Ad-Dharmi',
      populationEstimate: '~1.1 million (~3-4% of total, ~12-13% of SC)',
      populationPercentage: '~3-4% of total population',
      geographicDistribution: [
        'Distributed across Punjab',
        'Slightly higher: Hoshiarpur, SBS Nagar, Gurdaspur, Pathankot',
        'Minimal presence in Malwa heartland',
      ],
      historicalOccupation: 'Agricultural labor',
      politicalBehavior: 'Less organized politically, generally follows Congress leadership',
    },
    {
      subCaste: 'Bazigar',
      name: 'Bazigar',
      populationEstimate: '~550,000 (~2% of total, ~6% of SC)',
      populationPercentage: '~2% of total population',
      geographicDistribution: [
        'Migrant communities distributed across Rural Malwa (Fazilka, Ferozpur, Moga)',
        'Along Punjab-Haryana border regions',
        'Peri-urban areas of Ludhiana, Jalandhar',
      ],
      historicalOccupation: 'Migrant agricultural labor, seasonal migration, goat/herd herding',
      politicalBehavior: 'Limited political participation historically, voter registration issues',
    },
    {
      subCaste: 'Rai Sikh',
      name: 'Rai Sikh',
      populationEstimate: '~277,000 (~1% of total, ~3% of SC)',
      populationPercentage: '~1% of total population',
      geographicDistribution: [
        'Ropar (Rupnagar) district: Highest concentration',
        'Mohali (SAS Nagar) district: Significant presence',
        'Patiala district: Some rural concentration',
        'Chandigarh region: Urban Rai Sikh population',
      ],
      historicalOccupation: 'Horse care, cavalry, martial traditions',
      politicalBehavior: 'Urban-influenced voting patterns, mixed: Congress, AAP, independent',
    },
  ],
  obcGroups: [
    {
      community: 'Saini',
      name: 'Saini',
      populationEstimate: '~1.1-1.4 million (~4-5%)',
      populationPercentage: '~4-5% of total population',
      geographicDistribution: [
        'SBS Nagar (Nawanshahr): Strongest concentration, possibly 15-20%',
        'Hoshiarpur: Significant rural presence',
        'Pathankot: Notable population',
        'Gurdaspur: Some Majha presence',
      ],
      historicalOccupation: 'Rural administration, police, security services (British period)',
      politicalSignificance: [
        'Dominant in SBS Nagar district politics',
        'Strong presence in Hoshiarpur',
        'Generally Congress-affine but Akali presence in rural areas',
      ],
    },
    {
      community: 'Kamboj',
      name: 'Kamboj',
      populationEstimate: '~1.4-1.8 million (~5-6.5%)',
      populationPercentage: '~5-6.5% of total population',
      geographicDistribution: [
        'Doaba Region: Strong presence, Jalandhar rural, Kapurthala',
        'Malwa: Scattered, significant in Patiala, Sangrur',
        'Ludhiana: Urban Kamboj presence',
        'Majha: Gurdaspur, Amritsar rural areas',
      ],
      historicalOccupation: 'Agricultural community with claims to Rajput ancestry',
      politicalSignificance: [
        'Community organizations (Kamboj Sammelan) provide mobilization',
        'Strong in Doaba NRI-linked constituencies',
        'Generally supportive of Congress historically',
      ],
    },
    {
      community: 'Labana',
      name: 'Labana (Laban)',
      populationEstimate: '~830,000-1.1 million (~3-4%)',
      populationPercentage: '~3-4% of total population',
      geographicDistribution: [
        'Malwa Region: Predominant distribution',
        'Bathinda district: Significant concentration',
        'Mansa district: Strong presence',
        'Moga district: Notable',
        'Ferozpur, Faridkot, Muktsar: Agricultural belt',
      ],
      historicalOccupation: 'Primarily agricultural',
      politicalSignificance: [
        'Purely Malwa-based community',
        'Key voting bloc in Bathinda-Mansa-Moga belt',
        'Traditionally Congress-affine',
        'Sukhbir Singh Badal (Akali Dal) has significant Labana support',
      ],
    },
    {
      community: 'Tarkhan',
      name: 'Tarkhan (Lohar)',
      populationEstimate: '~550,000-700,000 (~2-2.5%)',
      populationPercentage: '~2-2.5% of total population',
      geographicDistribution: ['Jalandhar', 'Hoshiarpur', 'Ropar (Rupnagar)', 'Ludhiana urban and peri-urban'],
      historicalOccupation: 'Traditional blacksmiths, artisans, ironworking',
      politicalSignificance: ['Widespread but less politically organized'],
    },
    {
      community: 'Kumhar',
      name: 'Kumhar',
      populationEstimate: '~415,000-550,000 (~1.5-2%)',
      populationPercentage: '~1.5-2% of total population',
      geographicDistribution: ['Rural areas of Malwa', 'Doaba region villages', 'Peri-urban areas'],
      historicalOccupation: 'Traditional pottery, brick-making, construction labor',
      politicalSignificance: ['Largely agricultural labor, construction sector employment'],
    },
    {
      community: 'Nai',
      name: 'Nai (Hairdresser/Barber)',
      populationEstimate: '~280,000-415,000 (~1-1.5%)',
      populationPercentage: '~1-1.5% of total population',
      geographicDistribution: ['Urban and semi-urban centers', 'Malwa region villages', 'Majha rural areas'],
      historicalOccupation: 'Traditional hairdressing, wedding ritual priests',
      politicalSignificance: ['Widespread but generally less politically organized'],
    },
    {
      community: 'Jatia',
      name: 'Jatia (Kashmiri/Jatia)',
      populationEstimate: '~140,000-280,000 (~0.5-1%)',
      populationPercentage: '~0.5-1% of total population',
      geographicDistribution: ['Ludhiana district: Significant urban presence', 'Jalandhar: Some urban concentration', 'Amritsar: Historical Kashmiri merchant community'],
      historicalOccupation: 'Trading, commerce, money-lending',
      politicalSignificance: ['Urban trading community, limited political mobilization as distinct community'],
    },
  ],
  upperCasteHindus: [
    {
      subCaste: 'Brahmin',
      name: 'Brahmin',
      populationEstimate: '~1.1-1.4 million (~4-5%)',
      populationPercentage: '~4-5% of total population',
      geographicDistribution: ['Urban centers: Amritsar, Jalandhar, Ludhiana, Patiala', 'Administrative centers: District headquarters', 'Temple towns: Harmandir Sahib area, Patiala, Anandpur Sahib'],
      historicalOccupation: 'Priestly, educational, administrative',
      contemporaryStatus: 'Highest educational attainment among Hindu communities, dominance in white-collar professions',
      politicalBehavior: 'Generally Congress-affine historically, AAP inroads in urban educated Brahmin population',
    },
    {
      subCaste: 'Khatri',
      name: 'Khatri',
      populationEstimate: '~550,000-830,000 (~2-3%)',
      populationPercentage: '~2-3% of total population',
      geographicDistribution: ['Urban commercial centers: Ludhiana, Amritsar, Jalandhar, Patiala', 'Trading hubs: Predominantly urban'],
      historicalOccupation: 'Trading, commerce, business',
      contemporaryStatus: "Punjab's industrial and commercial elite, major role in textiles, industry, sports goods",
      politicalBehavior: 'Business-friendly policies key concern, traditionally Congress, significant Akali Dal support, Modi wave captured significant Khatri support',
    },
    {
      subCaste: 'Arora',
      name: 'Arora',
      populationEstimate: '~415,000-550,000 (~1.5-2%)',
      populationPercentage: '~1.5-2% of total population',
      geographicDistribution: ['Urban throughout Punjab cities', 'Ludhiana: Significant concentration', 'Jalandhar, Amritsar, Patiala: Historical presence'],
      historicalOccupation: 'Trading, commerce, moneylending',
      contemporaryStatus: 'Urban business community, diversified into various professions',
      politicalBehavior: 'Similar to Khatris, Congress historical dominance, recent shifts to BJP/AAP',
    },
    {
      subCaste: 'Bania',
      name: 'Bania (Baniya/Vaish)',
      populationEstimate: '~550,000-830,000 (~2-3%)',
      populationPercentage: '~2-3% of total population',
      geographicDistribution: ['Urban and semi-urban throughout Punjab', 'Market towns', 'Trading centers'],
      historicalOccupation: 'Trading, moneylending, financial services',
      contemporaryStatus: 'Continued dominance in financial sector, shop ownership, rural credit networks',
      politicalBehavior: 'Financial community networks important, Congress traditional support, recent BJP presence',
    },
    {
      subCaste: 'Rajput',
      name: 'Rajput',
      populationEstimate: '~280,000-415,000 (~1-1.5%)',
      populationPercentage: '~1-1.5% of total population',
      geographicDistribution: ['Scattered throughout Punjab', 'Some concentration in Ropar, Mohali border areas', 'Patiala region (historical Rajput principalities)', 'Hoshiarpur (Doaba)'],
      historicalOccupation: 'Landowning aristocratic lineage',
      contemporaryStatus: 'Reduced numbers due to Sikh conversion, some landowning families retain influence',
      politicalBehavior: 'Individual family influence important, limited cohesive community voting',
    },
  ],
  religiousMinorities: [
    {
      community: 'Punjabi Muslim',
      population: 535000,
      percentage: '~1.9% of total population',
      geographicConcentration: ['Malerkotla (Sangrur district): Largest concentration, ~70-75% of town', 'Khadki Banger (Malwa): Significant Muslim presence', 'Ludhiana: Urban Muslim population', 'Amritsar: Historical Muslim population in old city', 'Pathankot: Due to J&K proximity', 'Ferozpur: Border area Muslim population'],
      historicalContext: 'Pre-partition Muslim population was ~30%, post-partition remnant community established',
      politicalSignificance: 'Concentrated in Malerkotla assembly constituency (Muslim majority), Congress traditional strong support',
    },
    {
      community: 'Christian',
      population: 348000,
      percentage: '~1.26% of total population',
      geographicConcentration: ['Urban pockets: Amritsar, Jalandhar, Ludhiana, Pathankot', 'Doaba region: Some concentration', 'Dera Bassi (Mohali area): Some Christian population'],
      historicalContext: 'Primary conversions from SC communities (Mazhabi Sikh and Valmiki), Catholic and Protestant missions active since 19th century',
      politicalSignificance: 'SC Christian population may vote differently from Christian converts from upper castes',
    },
    {
      community: 'Sikh (Overall)',
      population: 16600000,
      percentage: '~60% of total population',
      geographicConcentration: ['Throughout Punjab'],
      politicalSignificance: 'Majority community broken down as: Jat Sikh ~36-37% of Sikh population, Mazhabi Sikh ~20%, Other Sikhs ~23-24%',
    },
  ],
  regionalCharacteristics: REGIONAL_CHARACTERISTICS,
  highSCConcentrationDistricts: HIGH_SC_CONCENTRATION_DISTRICTS,
  lowSCConcentrationDistricts: LOW_SC_CONCENTRATION_DISTRICTS,
  highLiteracyDistricts: HIGH_LITERACY_DISTRICTS,
  lowLiteracyDistricts: LOW_LITERACY_DISTRICTS,
};
