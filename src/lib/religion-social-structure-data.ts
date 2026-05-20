// Religion and Social Structure Data
// Source: direct-documentation/cat-1-demography/b2-punjab-religion-social-structure.md

import type { ReligionSocialStructure } from '../types/religion-social-structure-types';

export const RELIGION_SOCIAL_STRUCTURE_DATA: ReligionSocialStructure = {
  sikhism: {
    percentage: '58-60%',
    denominations: [
      { type: 'Amritdhari', description: 'Initiated Sikhs who have taken Amrit, maintain Five Ks' },
      { type: 'Sehajdhari', description: 'Non-baptized Sikhs who identify as Sikh but may maintain caste distinctions' },
      { type: 'Nirankari', description: 'Emphasizes monotheism, rejects caste distinctions, strong in Malwa' },
      { type: 'Namdhari', description: 'Distinguished by white dress, strict vegetarianism, reform movement' },
      { type: 'Ravidassia', description: 'Centers on Guru Ravidas, predominantly SC backgrounds, Dera Sachkhand Ballan connection' },
      { type: 'Nirmala', description: 'Scholar monks' },
      { type: 'Udasi', description: 'Ascetic tradition' },
      { type: 'Nihang', description: 'Traditional Sikh cavalry order with distinctive blue dress and martial traditions' },
    ],
    keyPractices: ['Naam Japna', 'Kirtan', 'Langar', 'Sewa', 'Prakash'],
    sgpcSignificance: 'Controls major gurdwaras including Harmandir Sahib, political messaging reaches millions',
    akalTakhtRole: 'Highest temporal authority in Sikhism, jathedar can issue hukamnamas with moral authority',
  },
  hinduism: {
    percentage: '35-38%',
    sects: [
      { type: 'Sanatani', description: 'Majority follow Vedic traditions, temple worship, major festivals' },
      { type: 'Arya Samaj', description: 'Reform movement emphasizing Vedic teachings, social reform, women education' },
      { type: 'Dev Samaj', description: 'Founded by Bhagat Dev, emphasizes spiritual development and social service' },
    ],
    majorTemples: ['Shri Durgiana Temple (Amritsar)', 'Various local temples throughout Punjab'],
    aryaSamajInstitutions: ['DAV College Chandigarh', 'Saraswati Vedic College (Amritsar)', 'Local Arya Samaj mandirs in most towns'],
  },
  islam: {
    percentage: '1.6-1.9%',
    sectarianDistribution: 'Predominantly Sunni with smaller Shia minority, Deobandi and Barelvi orientations exist',
    geographicConcentration: ['Malerkotla: Largest concentration, ~35-40% of town', 'Urban concentrations: Ludhiana, Jalandhar, Amritsar', 'Border areas: Ferozepur, Muktsar, Pathankot'],
  },
  christianity: {
    percentage: '1.1-1.3%',
    denominations: ['Catholic', 'Protestant', 'Pentecostal'],
    geographicDistribution: ['Urban areas: Ludhiana, Jalandhar, Amritsar, Chandigarh', 'Doaba region', 'Border districts: Pathankot, Gurdaspur'],
  },
  otherReligions: {
    buddhism: 'Small population, primarily recent conversion backgrounds, Sikhs sometimes identify as Buddhist for census',
    jainism: 'Small urban community in trade and business',
    sikhSects: ['Nirmalas (scholar monks)', 'Udasis (ascetic tradition)', 'Nihang Sikhs (traditional cavalry order)'],
  },
  deras: [
    {
      name: 'Dera Sacha Sauda',
      headquarters: 'Sirsa, Haryana (~100km from Punjab border)',
      foundedBy: 'Shah Mastana Shah',
      currentHead: 'Gurmeet Ram Rahim Singh (incarcerated)',
      communityConnection: 'Draws followers primarily from Sikh community, particularly Sehajdhari Sikhs',
      primaryCommunities: ['Mazhabi Sikh', 'Ravidasia', 'SC communities'],
      malwaDistricts: ['Bathinda', 'Mansa', 'Muktsar', 'Faridkot', 'Ferozepur'],
      followerEstimate: '10-15% of Sikh voters in Malwa region [NEEDS VERIFICATION]',
      politicalSignificance: 'One of most politically influential deras, voter mobilization capacity significant',
      currentStatus: 'Operates under management committee following conviction, influence diminished but remains significant',
      officialStance: 'Officially maintains political neutrality',
    },
    {
      name: 'Dera Sachkhand Ballan',
      headquarters: 'Ballan, Jalandhar district, Doaba region',
      foundedBy: 'Pir Sadruddin (Shah Shamas)',
      currentHead: 'Pir Nazam',
      communityConnection: 'Ravidassia community, SC backgrounds',
      primaryCommunities: ['Ravidassia', 'SC communities'],
      malwaDistricts: [],
      followerEstimate: 'Significant in Doaba region',
      politicalSignificance: 'Most significant religious institution for Ravidassia community, substantial SC voter mobilization in Doaba 23 seats',
      currentStatus: 'Active with strong community support',
      officialStance: 'Generally maintains public neutrality',
    },
    {
      name: 'Radha Soami Satsang Beas',
      headquarters: 'Beas, Amritsar district',
      foundedBy: 'Shiv Dayal Singh (Tribune)',
      communityConnection: 'Members from multiple faiths including Sikhs, Hindus',
      primaryCommunities: ['Various faiths'],
      malwaDistricts: [],
      followerEstimate: 'Distributed across Punjab rather than concentrated regionally',
      politicalSignificance: 'Officially apolitical but commands significant following across religious boundaries',
      currentStatus: 'Active, maintains apolitical stance officially',
      officialStance: 'Does not endorse candidates or parties officially',
    },
    {
      name: 'Dera Dukh Bhanjani',
      headquarters: 'Sultan Lodhi, Kapurthala district',
      foundedBy: 'Sant Puran',
      communityConnection: 'Primarily Sikh, with connections to Mazhabi Sikh community',
      primaryCommunities: ['Mazhabi Sikh'],
      malwaDistricts: [],
      politicalSignificance: 'Significant but smaller dera with strong local following in Doaba region',
      currentStatus: 'Active with local influence',
    },
    {
      name: 'Nirankari',
      headquarters: 'Chandigarh',
      communityConnection: 'Sikh reformist',
      primaryCommunities: ['Sikh reformist community'],
      malwaDistricts: [],
      followerEstimate: 'Urban concentration',
      politicalSignificance: 'Traditionally Congress-leaning Sikh reform movement',
      currentStatus: 'Active',
    },
  ],
  familySystems: [
    {
      type: 'joint_family',
      description: 'Traditional system called "thaa" or "parivar" - 3-4 generations often reside together',
    },
    {
      type: 'nuclear_family',
      description: 'Urbanization, economic modernization, NRI remittances have accelerated nuclear family formation',
    },
    {
      type: 'biradari',
      description: 'Caste brotherhood network functioning as mutual aid society and informal governance',
    },
    {
      type: 'gotra',
      description: 'Clan system among Jats, Rajputs, Brahmins - exogamous marriage rules apply',
    },
  ],
  kinshipNetworks: [
    {
      type: 'Biradari (Caste Brotherhood)',
      description: 'Functions as mutual aid network, collective decisions on community matters',
      electoralRole: 'Can deliver votes as bloc when biradari leadership issues guidance',
    },
    {
      type: 'Gotra System',
      description: 'Clan exogamy among Jat Sikhs - major gotras include Sandhu, Gill, Sidhu, Brar, Minhas',
      electoralRole: 'Matters when candidate gotra matches dominant gotra in constituency',
    },
    {
      type: 'Maternal Kinship',
      description: 'Maternal uncles (taaya) hold significant respect, particularly in Mazhabi Sikh community',
      electoralRole: 'Maternal uncle networks used for youth outreach',
    },
  ],
  socialHierarchy: [
    {
      category: 'Upper Castes',
      approximatePopulation: '15-20%',
      casteCommunities: ['Brahmin', 'Rajput', 'Bania'],
    },
    {
      category: 'Backward Castes (OBC)',
      approximatePopulation: '15-18%',
      casteCommunities: ['Various OBC communities'],
    },
    {
      category: 'Scheduled Castes',
      approximatePopulation: '30-32%',
      casteCommunities: ['Mazhabi Sikh', 'Valmiki', 'Ravidasia', 'Ad-Dharmi', 'Bazigar'],
    },
    {
      category: 'Other',
      approximatePopulation: 'Remaining',
      casteCommunities: ['Religious minorities'],
    },
  ],
  institutionalPowerCenters: [
    {
      name: 'SGPC (Shiromani Gurdwara Parbandhak Committee)',
      type: 'Religious-Political Institution',
      description: 'Elected body managing major gurdwaras including Harmandir Sahib. 190 members, 3-year terms',
      electoralSignificance: 'SGPC elections serve as bellwether, panel supporting ruling state government typically wins',
      resources: ['Gurdwara infrastructure', 'Educational institutions', 'Charitable programs', 'Employment (sevadars, granthis)'],
    },
    {
      name: 'Verka (Punjab State Cooperative Milk Producers Federation)',
      type: 'Cooperative Network',
      description: 'Vast network of milk producers across Punjab',
      electoralSignificance: 'Major voter mobilization capacity through rural electorate',
    },
    {
      name: 'Sugar Mill Cooperatives',
      type: 'Cooperative Network',
      description: 'Multiple sugar mills owned by cooperative societies, farmer shareholders constitute significant voter bloc',
      electoralSignificance: 'Mill workers and families add to electoral influence, particularly in Malwa region',
    },
  ],
};

// Helper functions
export function getDeraByName(name: string) {
  return RELIGION_SOCIAL_STRUCTURE_DATA.deras.find(
    d => d.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function getDerasByDistrict(district: string) {
  return RELIGION_SOCIAL_STRUCTURE_DATA.deras.filter(
    d => d.malwaDistricts?.some(dd => dd.toLowerCase() === district.toLowerCase())
  );
}

export function getSikhDenominationByType(type: string) {
  return RELIGION_SOCIAL_STRUCTURE_DATA.sikhism.denominations.find(
    d => d.type.toLowerCase() === type.toLowerCase()
  );
}

export function getHinduSectByType(type: string) {
  return RELIGION_SOCIAL_STRUCTURE_DATA.hinduism.sects.find(
    d => d.type.toLowerCase() === type.toLowerCase()
  );
}
