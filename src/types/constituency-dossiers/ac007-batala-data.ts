/**
 * AC007-Batala Constituency Dossier - Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC007-Batala.md + AC007-Batala-deep.md
 */

import type {
  AC007BatalaDossier,
  ConstituencyIdentity,
  HistoricalContext,
  EconomicIdentity,
  SocioCulturalIdentity,
  AdministrativeSetup,
  CensusData,
  ElectoralRollAnalytics,
  SchemePenetration,
  ElectionResult,
  VoterBehaviour,
  CurrentMood,
  KeyIssues,
  GovernanceGap,
  Influencers,
  SWOTAnalysis,
  StrategicBlueprint,
  LocalIssue,
  CasteComposition,
  StrategicPosition,
  CandidateProfile,
  AttackLine,
} from './ac007-batala-types';

// ============================================================================
// IDENTITY & BASELINE
// ============================================================================

const identity: ConstituencyIdentity = {
  acNumber: 7,
  name: 'Batala',
  district: 'Gurdaspur',
  region: 'Majha',
  type: 'GEN',
  date: '20 May 2026',
  parliamentarySegment: 'Gurdaspur Lok Sabha constituency',
  city: 'Batala - historical industrial town',
  area: 'Urban center with dense rural surrounding',
  significance: 'Historically known for textiles, brass, sports goods',
};

const historicalContext: HistoricalContext = {
  industrialHeritage: 'Famous for brass industry, sports goods, textiles',
  britishEra: 'Important trade center',
  partitionImpact: 'Significant population exchange, industry disruption',
  sikhHeritage: 'Many gurdwaras, religious significance',
};

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Industry (brass, sports goods)', 'Agriculture', 'Trade'],
  employment: ['Factory workers', 'Agriculture', 'Small business'],
  industry: 'Brass band instruments, sports goods - famous nationally',
  signatureProducts: ['Batala brass', 'Sports equipment'],
};

const socioCultural: SocioCulturalIdentity = {
  language: 'Punjabi (Majha dialect)',
  religiousComposition: {
    'Sikh': 65,
    'Hindu': 32,
    'Others': 3,
  },
  casteComposition: {
    'Jat Sikh': 24,
    'SC': 31,
    'OBC': 14,
    'Upper Caste': 16,
    'Minority': 8,
    'Other': 7,
  },
  cultural: 'Artisan traditions, industrial workforce culture',
};

const administrative: AdministrativeSetup = {
  municipalCouncil: 'Batala MC (former municipal corporation)',
  health: ['Civil hospital', 'CHCs [NEEDS VERIFICATION]'],
  education: ['Degree colleges', 'ITI [NEEDS VERIFICATION]'],
  industry: 'Small scale industry hub',
};

// ============================================================================
// DEMOGRAPHIC DEEP-DIVE
// ============================================================================

const census: CensusData = {
  cityPopulation2011: 180000,
  urbanAgglomeration: 200000,
  sexRatio: null,
  literacy: 85,
};

const electoralRoll: ElectoralRollAnalytics = {
  totalElectors2017: 176725,
  voterTurnout2022: null,
};

const schemePenetration: SchemePenetration = {
  pds: 'Full coverage',
  mgnrega: 'Active - Batala block',
  industrialSchemes: null,
};

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

const electionHistory: ElectionResult[] = [
  {
    year: 2022,
    winner: 'Amansher Singh (Sherry Kalsi)',
    party: 'AAP',
    votePercentage: 45,
    margin: 28472,
    opponent: '[NEEDS VERIFICATION]',
    notes: 'MAJOR SHIFT - from SAD to AAP, BIG MARGIN',
  },
  {
    year: 2017,
    winner: 'Lakhbir Singh',
    party: 'SAD',
    votePercentage: null,
    margin: null,
    opponent: null,
    notes: 'NEEDS VERIFICATION',
  },
  {
    year: 2012,
    winner: null,
    party: null,
    votePercentage: null,
    margin: null,
    opponent: null,
    notes: 'NEEDS VERIFICATION',
  },
];

const voterBehaviour: VoterBehaviour = {
  turnout: null,
  swing: 'Major swing from SAD to AAP in 2022',
  urbanFactor: 'Batala city voters decisive',
  industryFactor: 'Workers affected by industrial decline',
};

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

const currentMood: CurrentMood = {
  mla: 'Amansher Singh (Sherry Kalsi)',
  party: 'AAP',
  term: 'first-term',
  expectations: ['Industrial revival', 'Jobs', 'Development'],
};

const keyIssues: KeyIssues[] = [
  { issue: 'Industrial Decline - Brass industry struggling, job losses', segment: 'Youth, workers, business' },
  { issue: 'Unemployment - Youth without jobs', segment: 'Youth' },
  { issue: 'Drug Menace - Youth addiction', segment: 'Families, youth' },
  { issue: 'Urban Services - Infrastructure, roads', segment: 'City voters' },
  { issue: 'Agriculture - Rural area concerns', segment: 'Rural voters' },
];

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

const governanceGap: GovernanceGap[] = [
  {
    sector: 'Industrial',
    details: [
      'Brass Industry: Struggling - competition, raw material costs',
      'Sports Goods: NEEDS VERIFICATION',
      'Jobs Lost: NEEDS VERIFICATION',
    ],
  },
  {
    sector: 'Urban',
    details: [
      'Municipal Services: NEEDS VERIFICATION',
      'Power/Water: NEEDS VERIFICATION',
    ],
  },
];

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

const influencers: Influencers = {
  industrial: [
    { type: 'Factory Owners', name: 'Brass industry association' },
    { type: 'Traders', name: 'Batala market traders association' },
    { type: 'Workers Unions', name: 'NEEDS VERIFICATION' },
  ],
  political: [
    { name: 'Amansher Singh (Sherry Kalsi)', role: 'AAP MLA', party: 'AAP', status: 'Political newcomer' },
    { name: 'SAD Workers', role: 'Party organization', status: 'Still exists' },
    { name: 'Congress Workers', role: 'Party workers', status: 'NEEDS VERIFICATION' },
  ],
};

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

const swot: SWOTAnalysis = {
  strengths: [
    'AAP won decisively 2022 (28,472 margin)',
    'Urban voter base',
    'Industrial heritage',
  ],
  weaknesses: [
    'MLA may be first-term, limited experience',
    'Industrial decline',
  ],
  opportunities: [
    'Industrial revival schemes',
    'Skill development for youth',
    'Tourism (heritage)',
  ],
  threats: [
    'SAD revival attempt',
    'Congress consolidation',
    'Industrial job losses',
  ],
};

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

const strategicBlueprint: StrategicBlueprint = {
  narratives: [
    'Industrial Revival - Bring back Batala\'s glory',
    'Jobs for Youth - Employment generation',
    'Development Focus - Urban infrastructure',
  ],
  prioritySegments: [
    'Industrial workers',
    'Youth (jobs)',
    'Urban voters (infrastructure)',
  ],
};

// ============================================================================
// KEY LOCAL ISSUES (From AC007-Batala.md)
// ============================================================================

const localIssues: LocalIssue[] = [
  { id: 1, issue: 'Urban development of Batala town' },
  { id: 2, issue: 'Industrial development and employment' },
  { id: 3, issue: 'Agricultural marketing (Batala is agrarian hub)' },
  { id: 4, issue: 'Drug addiction crisis' },
  { id: 5, issue: 'Historical preservation (Gurdwara sites)' },
];

// ============================================================================
// CASTE COMPOSITION (Gurdaspur District)
// ============================================================================

const casteComposition: CasteComposition = {
  jathSikh: 24,
  sc: 31,
  obc: 14,
  upperCaste: 16,
  minority: 8,
  other: 7,
};

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

const strategicPosition: StrategicPosition = {
  situation: 'AAP won decisively with 28,472 margin - Congress must work hard to reclaim',
  requirements: 'Need strong candidate with local connect and development narrative',
};

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

const candidateProfile: CandidateProfile = {
  profile: 'Urban/rural balance, business community connect',
  casteConsideration: 'Jat Sikh or Arora background',
  keyQualities: ['Developmental agenda', 'Anti-AAP swing voter appeal'],
};

// ============================================================================
// ATTACK LINES AGAINST AAP INCUMBENT
// ============================================================================

const attackLines: AttackLine[] = [
  { category: 'Broken Promises', message: '₹1000/month for women not delivered' },
  { category: 'Drug Crisis', message: 'Despite AAP claims, addiction problem persists' },
  { category: 'Governance', message: 'Municipal issues unresolved' },
  { category: 'Unemployment', message: 'No new jobs created' },
];

// ============================================================================
// COMPLETE DOSSIER
// ============================================================================

export const ac007BatalaDossier: AC007BatalaDossier = {
  identity,
  historicalContext,
  economicIdentity,
  socioCultural,
  administrative,
  census,
  electoralRoll,
  schemePenetration,
  electionHistory,
  voterBehaviour,
  currentMood,
  keyIssues,
  governanceGap,
  influencers,
  swot,
  strategicBlueprint,
  localIssues,
  casteComposition,
  strategicPosition,
  candidateProfile,
  attackLines,
  sources: ['OneIndia', 'resultuniversity', 'MGNREGA website'],
  researchStatus: 'Partial - requires local verification',
};

export default ac007BatalaDossier;
