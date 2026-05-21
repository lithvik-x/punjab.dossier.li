/**
 * Data file for AC009-Fatehgarh-Churian constituency dossier
 * 100% content coverage from source files
 * Cycle 2: Enhancement and refinement
 */

import type {
  FatehgarhChurianDossier,
  ConstituencyIdentity,
  HistoricalContext,
  GeographicInfo,
  EconomicIdentity,
  SchemePenetration,
  SocioCulturalIdentity,
  AdministrativeSetup,
  Demographics,
  ElectoralHistory,
  PublicSentiment,
  GovernanceGap,
  IssueVoterMapping,
  Influencers,
  SWOTAnalysis,
  StrategicBlueprint,
  RecommendedCandidate,
  AttackLines,
  CongressStrategicPosition,
  DataSource,
} from './ac009-fatehgarh-churian-types';

// =============================================================================
// 1. CONSTITUENCY IDENTITY & BASELINE
// =============================================================================

const identity: ConstituencyIdentity = {
  acNumber: 9,
  name: 'Fatehgarh Churian',
  nameDerivations: ['Fatehgarh fort', 'Churian locality'],
  parliamentarySegment: 'Gurdaspur Lok Sabha constituency',
  district: 'Gurdaspur',
  region: 'Majha',
  type: 'GEN',
  area: 'Border area, agricultural belt',
  significance: 'Name from "Fatehgarh" fort and "Churian" locality',
};

// =============================================================================
// HISTORICAL & GEOGRAPHIC
// =============================================================================

const historicalContext: HistoricalContext = {
  fort: 'Historical fort (Fatehgarh)',
  borderLocation: 'Near international border with Pakistan',
  movementHistory: '[NEEDS VERIFICATION - 1947 partition, freedom movement]',
  borderSecurity: '[NEEDS VERIFICATION - current issues]',
};

const geographicInfo: GeographicInfo = {
  borderArea: true,
  agriculturalBelt: true,
  proximityToPakistan: true,
};

// =============================================================================
// ECONOMIC IDENTITY
// =============================================================================

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture', 'border trade'],
  employmentSources: ['Agriculture', 'MGNREGA', 'army/border security'],
  crops: ['Wheat', 'rice'],
  borderTrade: '[NEEDS VERIFICATION - historical]',
};

const schemePenetration: SchemePenetration = {
  pds: 'High coverage',
  mgnrega: '[NEEDS VERIFICATION - border area]',
  borderArea: '[NEEDS VERIFICATION]',
};

// =============================================================================
// SOCIO-CULTURAL IDENTITY
// =============================================================================

const socioCultural: SocioCulturalIdentity = {
  language: 'Punjabi',
  dialect: 'Majha dialect',
  religiousComposition: {
    sikh: 60,
    hindu: 35,
    others: 5,
  },
  casteComposition: {
    jatSikh: 24,
    sc: 31,
    obc: 14,
    upperCaste: 16,
    minority: 8,
    other: 7,
  },
  borderCommunity: 'Mix of military families, farmers',
};

// =============================================================================
// ADMINISTRATIVE SETUP
// =============================================================================

const administrativeSetup: AdministrativeSetup = {
  rural: ['Multiple panchayats'],
  health: ['[NEEDS VERIFICATION]'],
  education: ['[NEEDS VERIFICATION]'],
};

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

const demographics: Demographics = {
  population: '[NEEDS VERIFICATION]',
  electors2022: {
    totalElectors: 177846,
    voterTurnout2022: '[NEEDS VERIFICATION]',
  },
  sexRatio: '[NEEDS VERIFICATION]',
  literacy: '[NEEDS VERIFICATION]',
};

// =============================================================================
// ELECTORAL HISTORY
// =============================================================================

const electoralHistory: ElectoralHistory = {
  elections: [
    {
      year: 2022,
      winner: 'Tript Rajinder Singh Bajwa',
      party: 'INC',
      votes: 46311,
      margin: 'Won vs Lakhbir Singh (SAD) 40,766 votes',
      runnerUp: 'Lakhbir Singh',
      runnerUpVotes: 40766,
      runnerUpParty: 'SAD',
    },
    {
      year: 2017,
      winner: 'Tript Rajinder Singh Bajwa',
      party: 'INC',
    },
    {
      year: 2012,
      winner: '[NEEDS VERIFICATION]',
      party: '',
    },
  ],
  voterBehaviour: {
    turnout: '[NEEDS VERIFICATION]',
    swingPattern: 'Congress traditional strength in area',
    borderFactor: 'Security concerns influence voting',
  },
};

// =============================================================================
// PUBLIC SENTIMENT
// =============================================================================

const publicSentiment: PublicSentiment = {
  currentMLA: {
    name: 'Tript Rajinder Singh Bajwa',
    party: 'INC',
    termStatus: '[NEEDS VERIFICATION - first term or multi-term]',
  },
  expectations: [
    'Border area development',
    'Agriculture',
    'Jobs',
  ],
  keyIssues: [
    {
      issue: 'Border Security',
      description: 'Smuggling, infiltration concerns',
      segment: 'Entire constituency',
    },
    {
      issue: 'Drug Menace',
      description: 'Border makes it worse',
      segment: 'Youth, families',
    },
    {
      issue: 'Agriculture',
      description: 'MSP, irrigation',
      segment: 'Farmer families',
    },
    {
      issue: 'Infrastructure',
      description: 'Roads, power',
      segment: 'Rural areas',
    },
    {
      issue: 'Employment',
      description: 'Youth jobs',
      segment: 'Youth',
    },
  ],
};

// =============================================================================
// GOVERNANCE GAP
// =============================================================================

const governanceGap: GovernanceGap = {
  borderIssues: {
    security: '[NEEDS VERIFICATION]',
    smuggling: ['Drug smuggling', 'Arms smuggling - affects local youth'],
    connectivity: '[NEEDS VERIFICATION]',
  },
  ruralServices: {
    healthEducation: '[NEEDS VERIFICATION]',
    mgnrega: '[NEEDS VERIFICATION]',
  },
};

// =============================================================================
// ISSUE-VOTER MAPPING
// =============================================================================

const issueVoterMapping: IssueVoterMapping[] = [
  { issue: 'Border security', segment: 'Entire constituency' },
  { issue: 'Drug prevention', segment: 'Youth, families' },
  { issue: 'Agriculture', segment: 'Farmer families' },
  { issue: 'Jobs', segment: 'Youth' },
];

// =============================================================================
// INFLUENCERS & POWER STRUCTURE
// =============================================================================

const influencers: Influencers = {
  political: [
    {
      name: 'Tript Rajinder Singh Bajwa',
      role: 'INC MLA',
      familyConnection: 'Bajwa family',
      verificationStatus: '[NEEDS VERIFICATION]',
    },
    {
      name: 'Bajwa Political Family',
      role: 'Political dynasty',
      verificationStatus: '[NEEDS VERIFICATION - prominence in Gurdaspur]',
    },
    {
      name: 'SAD Workers',
      role: 'Opposition',
      party: 'SAD',
      verificationStatus: 'Active despite loss',
    },
  ],
  community: [
    {
      group: 'Border Villagers',
      verificationStatus: '[NEEDS VERIFICATION]',
    },
    {
      group: 'Farmers',
      verificationStatus: '[NEEDS VERIFICATION]',
    },
  ],
};

// =============================================================================
// SWOT ANALYSIS
// =============================================================================

const swot: SWOTAnalysis = {
  strengths: [
    'INC won 2022',
    'Congress traditional area',
    'Border community support',
  ],
  weaknesses: [
    'Border security issues',
    'Drug smuggling',
  ],
  opportunities: [
    'Border development funds',
    'Agriculture modernization',
  ],
  threats: [
    'SAD revival attempt',
    'AAP growth',
    'Security incidents',
  ],
};

// =============================================================================
// STRATEGIC BLUEPRINT
// =============================================================================

const strategicBlueprint: StrategicBlueprint = {
  narratives: [
    'Border Security & Development',
    'Agricultural Prosperity',
    'Drug-Free Border',
  ],
  prioritySegments: [
    { segment: 'Border voters (security)', priority: 1 },
    { segment: 'Farmers', priority: 2 },
    { segment: 'Youth (jobs)', priority: 3 },
  ],
};

// =============================================================================
// CANDIDATE PROFILE & ATTACK LINES
// =============================================================================

const recommendedCandidate: RecommendedCandidate = {
  profile: 'Agrarian leader, Bajwa family connection',
  casteConsideration: 'Jat Sikh or Rajput background',
  keyQualities: ['Farmer-friendly', 'Rural development focus'],
};

const attackLines: AttackLines = {
  crisis: ['Rural communities affected by drug addiction crisis'],
  distress: ['MSP, stubble issues unresolved'],
  neglect: ['Border areas need development'],
  exodus: ['No employment opportunities for youth'],
};

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  incumbentStatus: 'Tript Rajinder Singh Bajwa has won consecutively',
  marginAnalysis: 'Margin in 2022 was competitive (~5,545 votes)',
  strategyFocus: 'Congress must maintain by addressing agrarian distress',
};

// =============================================================================
// DATA SOURCE
// =============================================================================

const dataSource: DataSource = {
  sources: ['IndiaVotes', 'OneIndia', 'resultuniversity', 'India Today'],
  researchStatus: 'Partial - requires local verification',
};

// =============================================================================
// MASTER EXPORT
// =============================================================================

export const fatehgarhChurianDossier: FatehgarhChurianDossier = {
  identity,
  historicalContext,
  geographicInfo,
  economicIdentity,
  schemePenetration,
  socioCultural,
  administrativeSetup,
  demographics,
  electoralHistory,
  publicSentiment,
  governanceGap,
  issueVoterMapping,
  influencers,
  swot,
  strategicBlueprint,
  recommendedCandidate,
  attackLines,
  congressStrategicPosition,
  dataSource,
};

export default fatehgarhChurianDossier;
