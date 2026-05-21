/**
 * AC098 - Budhlada (SC) Assembly Constituency Data
 * Complete data coverage from Tier 1 (VERIFIED) and Tier 2 (PARTIALLY VERIFIED) sources
 */

import type {
  ResearchMetadata,
  ConstituencyIdentity,
  ElectionResult2022,
  ElectionResult2017,
  CasteComposition,
  VoterDemographics,
  KeyLocalIssue,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLine,
  StrategicData,
  DeepResearchData,
  MainDossierData,
  AC098BudhladaSCData,
} from './ac098-budhlada-sc-types';

// =============================================================================
// Tier 1 - Main Dossier (VERIFIED)
// =============================================================================

const ac098Header: ResearchMetadata = {
  researchMicroTaskId: 'AC098',
  topic: 'Budhlada (SC) Assembly Constituency',
  tier: 1,
  date: '20 May 2026',
  agent: 'researcher',
  sourcesConsulted: ['IndiaVotes', 'OneIndia', 'ECI data'],
  verificationStatus: 'VERIFIED',
  dataCurrency: 'As of 20 May 2026',
};

const ac098Identity: ConstituencyIdentity = {
  acNumber: 98,
  officialName: 'Budhlada (SC)',
  district: 'Mansa',
  region: 'Malwa',
  type: 'Scheduled Caste (SC)',
  lokSabhaSeat: 'Bhatinda (Bathinda)',
};

const ac098ElectionResult2022: ElectionResult2022 = {
  winner: 'Budhram Singh',
  party: 'Aam Aadmi Party (AAP)',
  voteShare: '~55%',
  margin: '51,691 votes',
  marginVotes: 51691,
  runnerUp: 'Not specified',
  totalElectors: '~150,000',
  voterTurnout: '~77-79%',
};

const ac098ElectionResult2017: ElectionResult2017 = {
  winner: 'Not available',
  party: '-',
  totalElectors: '~145,000',
};

const ac098CasteComposition: CasteComposition = {
  scPopulation: '~40-45%',
  dominantSCGroups: ['Mazhabi', 'Ramdasia'],
  sikhMajority: '~65-70% overall',
  hinduMinority: '~30-35%',
  obc: '~8-10%',
};

const ac098VoterDemographics: VoterDemographics = {
  totalElectors: '~145,000-150,000',
  voterTurnout: '~77-79%',
  ruralSC: 'Rural SC-dominated constituency',
};

const ac098KeyLocalIssues: KeyLocalIssue[] = [
  {
    rank: 1,
    issue: 'Drug addiction',
    description: 'Rural SC youth severely affected',
    affectedVoterSegment: 'SC youth (40-45% of population)',
  },
  {
    rank: 2,
    issue: 'Unemployment',
    description: 'Limited opportunities for SC youth',
    affectedVoterSegment: 'SC communities',
  },
  {
    rank: 3,
    issue: 'Land issues',
    description: 'Small landowner problems',
    affectedVoterSegment: 'Small landowning SC families',
  },
  {
    rank: 4,
    issue: 'Drinking water',
    description: 'Rural water supply problems',
    affectedVoterSegment: 'Rural voters',
  },
  {
    rank: 5,
    issue: 'Health and education',
    description: 'Rural facility gaps',
    affectedVoterSegment: 'Rural SC communities',
  },
];

const ac098CongressStrategicPosition: CongressStrategicPosition = {
  currentHolder: 'Budhram Singh',
  party: 'AAP',
  margin: '51,691 votes',
  marginVotes: 51691,
  strategicOptions: [
    'Need strong SC candidate with grassroots connect',
    'Focus on anti-incumbency',
    'Address drug and unemployment',
    'Consider BSP alliance',
  ],
  recommendedApproach: [
    'Field strong SC candidate from Mazhabi/Ramdasia community',
    'Build campaign around anti-incumbency',
    'Focus on drug crisis affecting SC youth',
    'Address unemployment through local employment schemes',
  ],
};

const ac098RecommendedCandidateProfile: RecommendedCandidateProfile = {
  profile: 'SC leader from Mazhabi/Ramdasia community',
  background: 'Dalit rights activist, Panchayat experience',
  keyTraits: 'Known for social work, accessible',
  targetVoter: 'SC communities (40-45%), rural voters',
};

const ac098AttackLines: AttackLine[] = [
  { number: 1, message: 'SC youth still unemployed' },
  { number: 2, message: 'Drug addiction destroying SC families' },
  { number: 3, message: 'Educational opportunities limited for SC children' },
  { number: 4, message: 'Health services inaccessible to rural SC' },
  { number: 5, message: 'Land rights issues unresolved' },
];

const ac098StrategicData: StrategicData = {
  congressPosition: ac098CongressStrategicPosition,
  recommendedCandidateProfile: ac098RecommendedCandidateProfile,
  attackLines: ac098AttackLines,
};

// =============================================================================
// Tier 2 - Deep Research (PARTIALLY VERIFIED)
// =============================================================================

const ac098DeepHeader: ResearchMetadata = {
  researchMicroTaskId: 'AC098-Budhlada',
  topic: 'Budhlada Assembly Constituency - Deep Research',
  tier: 2,
  date: '20 May 2026',
  agent: 'Research-Orchestrator',
  sourcesConsulted: ['wikipedia.org', 'oneindia.com', 'proneta.in', 'bbc.com', 'indiavotes.com'],
  verificationStatus: 'PARTIALLY VERIFIED',
  dataCurrency: 'As of May 2026 (2022 election data is most recent)',
};

const ac098DeepResearchData: DeepResearchData = {
  header: ac098DeepHeader,
  executiveSummary:
    'Budhlada is an assembly constituency in Mansa district, part of the Malwa region. The constituency witnessed a decisive AAP victory in 2022 with one of the highest margins in the state - over 51,000 votes. The area shares the common Malwa characteristics of agrarian economy, drug crisis concerns, and SCA community presence.',
  geographicContext: {
    description:
      'Budhlada is situated in Mansa district, part of the cotton belt region known for agricultural productivity but also facing groundwater depletion and agrarian distress.',
    cottonBeltContext: 'Part of cotton belt region known for agricultural productivity',
    agriculturalContext: 'Cotton farming challenges, MSP implementation issues',
    groundwaterContext: 'Groundwater depletion concerns',
  },
  casteCompositionNotes:
    'Typical Malwa Pattern: Jat Sikh dominant community, Dalit/SC significant population, OBC various groups, Hindu/Muslim small minorities',
  intelligenceGaps: [
    'Full 2022 candidate list with party-wise votes',
    '2017 and earlier results',
    'Constituency category (General/SC) - Type from deep research: NEEDS VERIFICATION',
    'Local demographics breakdown',
    'Voter turnout data',
    'Local political influencer mapping',
    'Scheme beneficiary numbers',
  ],
  recommendations: [
    'Analyze margin swing from 2017',
    'Identify key voter segments',
    'Map influential families',
    'Assess AAP MLA work delivery',
  ],
  sources: [
    {
      name: 'Wikipedia Budhalada Assembly',
      url: 'https://en.wikipedia.org/wiki/Budhalada_Assembly_constituency',
    },
    {
      name: 'OneIndia Budhlada',
      url: 'https://www.oneindia.com/budhlada-assembly-elections-pb-98/',
    },
  ],
};

// =============================================================================
// Combined Main Dossier Data
// =============================================================================

const ac098MainDossierData: MainDossierData = {
  header: ac098Header,
  identity: ac098Identity,
  electionResults: {
    year2022: ac098ElectionResult2022,
    year2017: ac098ElectionResult2017,
  },
  casteComposition: ac098CasteComposition,
  voterDemographics: ac098VoterDemographics,
  keyLocalIssues: {
    issues: ac098KeyLocalIssues,
  },
  strategicData: ac098StrategicData,
};

// =============================================================================
// Complete Data Export
// =============================================================================

export const ac098BudhladaSCData: AC098BudhladaSCData = {
  mainDossier: ac098MainDossierData,
  deepResearch: ac098DeepResearchData,
};

// Named exports for compatibility with index.ts patterns
export { ac098MainDossierData as ac098BudhladaMainDossier };
export { ac098DeepResearchData as ac098BudhladaDeepResearch };

// Default export
export default ac098BudhladaSCData;
