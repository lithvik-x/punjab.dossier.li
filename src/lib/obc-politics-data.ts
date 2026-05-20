// OBC Politics and Caste Census Data
// Source: direct-documentation/cat-1-demography/b25-caste-census-obc-politics.md

import type { OBCPoliticsData } from '../types/obc-politics-types';

export const OBC_POLITICS_DATA: OBCPoliticsData = {
  casteCensusContext: {
    nationalDebate: 'Caste census has been polarizing since 2011 census. UPA-II opposed inclusion, BJP central government has maintained ambivalent stance citing operational challenges and political calculations around OBC reservation caps.',
    bjpCentralPosition: [
      'Operational concerns: complexity of enumerating thousands of castes',
      'Political calculation: core support base among upper castes vs alliance politics with OBC parties',
      'Uses SECC 2011 partial data for welfare targeting rather than reservation policy',
      'Supports OBC creamy layer exclusion and sub-categorization',
    ],
    stateLevelImplications: [
      "Punjab's unique demography: Sikh majority with historical impact of Sikh reform movements",
      'Land reforms in 1950s-60s broke up feudal estates and distributed to peasant castes',
      'SECC 2011 data not fully released for Punjab - no authoritative OBC enumeration',
      'Political sensitivity: Akali Dal represents peasant caste interests, BJP alliance dynamics',
    ],
    obcEnumerationChallenges: [
      'Caste fluidity and identity: many Punjabis have multiple caste identities not consistently reported',
      'Rural-urban differences: OBC populations distributed across both with different occupational profiles',
      'Sub-caste proliferation: numerous sub-castes within broader OBC category',
      'Self-identification issues: OBC status determined by state-level lists that vary',
    ],
    secDataUsage: 'SECC 2011 designed for granular data on educational/occupational status, social category, economic status, caste-wise household enumeration. Data never fully published in caste-disaggregated form nationally, partially released for some states and purposes.',
    politicalImplications: [
      'Accurate OBC data would legitimize or challenge existing reservation percentages',
      'Disaggregated data would fuel competition between OBC sub-groups',
      'Congress could position as champion of OBC empowerment with data',
      'SAD-BJP alliance dynamics could be affected by increased OBC mobilization',
      'AAP positioned as caste-neutral alternative',
    ],
  },
  obcDemographics: {
    estimatedPercentage: '15-18% of total state population',
    regionalDistribution: [
      {
        region: 'Malwa',
        seats: 69,
        characteristics: 'Largest concentration of OBC population, agricultural and rural economic activities, dominant region for OBC politics',
      },
      {
        region: 'Majha',
        seats: 27,
        characteristics: 'Moderate OBC presence, communities engaged in agriculture, small businesses, artisan trades',
      },
      {
        region: 'Doaba',
        seats: 23,
        characteristics: 'Significant OBC population including Valmiki/Ravidasia community with SC overlaps in self-identification',
      },
    ],
    urbanRuralDistribution: "Predominantly rural reflecting state's agricultural economy, significant urban communities in Ludhiana, Jalandhar, Amritsar, Patiala",
    majorCommunities: [
      { name: 'Saini', description: 'One of largest and most politically significant, agrarian, Malwa region, spans Hindu and Sikh populations' },
      { name: 'Kamboj', description: 'Historical ties to agriculture and land ownership, active in political mobilization, Doaba and Malwa presence' },
      { name: 'Labana', description: 'Distinct identity, agricultural ties, Malwa concentration, sought OBC status at various points' },
      { name: 'Tarkhan', description: 'Traditional artisan community (carpenters), both Hindu and Sikh, distributed across Punjab' },
      { name: 'Lohar', description: 'Traditional blacksmith/artisan community, villages and small towns' },
      { name: 'Kumhar', description: 'Traditional pottery-making community, rural areas with some urban presence' },
      { name: 'Nai', description: 'Traditional barber community, organized politically around welfare and identity recognition' },
      { name: 'Jatia', description: 'Primarily Malwa region with distinct cultural and occupational characteristics' },
    ],
  },
  reservationPolitics: {
    demands: [
      'Increased reservation percentage: from current ~12-15% to match or exceed 27% central quota',
      'Sub-categorization within OBC: dominant groups demand more equitable distribution',
      'Creamy layer exclusion reform: debates about threshold levels',
      'Education and employment quotas: improved OBC representation in state institutions and government jobs',
    ],
    creamyLayerDebate: {
      argumentsFor: [
        'Benefits currently captured by affluent OBC families rather than truly backward sections',
        'Educational and employment outcomes for most disadvantaged OBCs remain poor',
        'Creamy layer exclusion aligns with Supreme Court requirements',
      ],
      argumentsAgainst: [
        'Creamy layer thresholds set too high, fail to capture actual disadvantage',
        'OBC communities argue 27% central quota is insufficient regardless',
        'Sub-categorization preferred over creamy layer by dominant OBC groups',
      ],
      punjabConsiderations: "Punjab's relative prosperity makes creamy layer debate somewhat different from states with more widespread poverty, state has not expanded OBC reservation to maximum possible under 50% ceiling, political parties have avoided creamy layer debate",
    },
    mobilizationPatterns: 'Fragmented mobilization - communities mobilized more on individual community lines rather than unified OBC political bloc, integrated into broader agrarian political economy',
    partyPositioning: [
      { party: 'Congress', position: 'Generally supportive of maintaining and potentially expanding OBC reservation, historical ties through broad social coalition' },
      { party: 'AAP', position: 'Caste-neutral positioning with focus on governance, some OBC outreach and representation in party structures' },
      { party: 'SAD', position: 'Historically claimed peasant and backward class interests, primary base among Jat Sikh limits credible OBC positioning' },
      { party: 'BJP', position: 'National OBC initiatives (OBC Morcha) have limited Punjab impact, focus on Hindutva and national security' },
      { party: 'BSP', position: 'Explicit caste-based mobilization among SC communities, not OBC-focused' },
    ],
  },
  congressStrategy: {
    voteConsolidation: 'OBCs represent 15-18% but not monolithic - must develop community-specific outreach strategies rather than assuming automatic consolidation',
    casteCensusPositioning: 'If national debate continues, position as supporting OBC data collection and welfare, distinguishing from BJP ambivalence',
    welfareSchemeDelivery: 'Improving delivery of existing OBC welfare schemes (scholarships, reservation in education/employment, welfare grants) builds credibility',
    leadershipRepresentation: 'Ensure OBC faces in Congress candidate selection, particularly for winnable seats in Malwa region',
    subCategorizationSensitivity: 'Handle carefully to avoid fragmenting OBC support - dominant groups may favor while smaller groups oppose',
    artisanCommunityFocus: 'Targeted schemes for skill development, credit access, market linkages for economically vulnerable traditional artisan OBC communities',
    aapDifferentiation: 'Clearly distinguish OBC commitment from AAP ambiguous positioning, highlighting Congress track record vs AAP failures during 2017-2022 government',
  },
};

// Helper functions
export function getOBCCommunityByName(name: string) {
  return OBC_POLITICS_DATA.obcDemographics.majorCommunities.find(
    c => c.name.toLowerCase() === name.toLowerCase()
  );
}

export function getOBCTotalPopulationPercentage(): string {
  return OBC_POLITICS_DATA.obcDemographics.estimatedPercentage;
}

export function getRegionalOBCSeats(region: 'Malwa' | 'Majha' | 'Doaba'): number {
  const regional = OBC_POLITICS_DATA.obcDemographics.regionalDistribution.find(
    r => r.region.toLowerCase() === region.toLowerCase()
  );
  return regional?.seats ?? 0;
}
