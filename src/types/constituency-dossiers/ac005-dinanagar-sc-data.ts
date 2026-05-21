/**
 * AC005 - Dina Nagar (SC) Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC005-Dina-Nagar-SC.md + AC005-DinaNagarSC-deep.md
 */

import type {
  DinaNagarSCDossier,
  ConstituencyIdentity,
  HistoricalContext,
  AdministrativeSetup,
  EconomicIdentity,
  SocioCulturalIdentity,
  CensusData,
  ElectoralRollAnalytics,
  SchemePenetration,
  ElectoralHistory,
  VoterBehaviour,
  PublicSentiment,
  GovernanceGap,
  LocalIssues,
  PowerStructure,
  SwotAnalysis,
  StrategicBlueprint,
  CasteComposition,
  ElectionResultDeep,
  CongressPosition,
  CandidateProfile,
  AttackLine,
  KeyIssue,
  IssueVoterMapping,
  Narrative,
  PrioritySegment,
  PoliticalInfluencer,
  CommunityInfluencer,
} from './ac005-dinanagar-sc-types';

// ============================================================================
// CYCLE 3: DATA CONSOLIDATION - ALL CONTENT FROM SOURCE FILES
// ============================================================================

// --- Identity ---
const identity: ConstituencyIdentity = {
  acNumber: 5,
  name: 'Dina Nagar (SC)',
  district: 'Gurdaspur',
  region: 'Majha',
  parliamentarySegment: 'Gurdaspur Lok Sabha constituency',
  type: 'SC',
  town: 'Dina Nagar - municipal council',
  areaDescription: 'Urban center with surrounding rural SC-majority villages',
};

// --- Historical Context ---
const historicalContext: HistoricalContext = {
  origin: '[NEEDS VERIFICATION - named after Dina community?]',
  significance: 'Area with large SC population, post-independence settlement',
  development: '[NEEDS VERIFICATION]',
  needsVerification: true,
};

// --- Administrative Setup ---
const administrativeSetup: AdministrativeSetup = {
  municipalCouncil: 'Dina Nagar MC',
  health: 'CHC level facilities [NEEDS VERIFICATION]',
  education: 'Government schools [NEEDS VERIFICATION]',
  needsVerification: true,
};

// --- Economic Identity ---
const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture (small holdings)', 'Labor', 'Small businesses'],
  employment: ['MGNREGA', 'Agriculture labor', 'Government jobs'],
  economicStatus: 'Economically weaker section dominant',
};

// --- Socio-Cultural Identity ---
const socioCulturalIdentity: SocioCulturalIdentity = {
  language: 'Punjabi (Majha dialect)',
  religion: 'Sikh majority among SC, also Hindu',
  casteComposition: 'SC population ~60-70% [NEEDS VERIFICATION]',
  socialProfile: 'Traditional SC community, agricultural laborers',
  needsVerification: true,
};

// --- Census Data ---
const censusData: CensusData = {
  townPopulation2011: null,
  districtContext: 'Gurdaspur district SC population significant',
  sexRatio: null,
  literacy: null,
  needsVerification: true,
};

// --- Electoral Roll Analytics ---
const electoralRollAnalytics: ElectoralRollAnalytics = {
  totalElectors: null,
  voterTurnout2022: null,
  needsVerification: true,
};

// --- Scheme Penetration ---
const schemePenetration: SchemePenetration = {
  pds: 'High coverage for SC families',
  mgnrega: 'Critical employment source',
  scWelfare: ['Pre-metric scholarships', 'Post-metric scholarships'],
  pensions: ['Old age pension', 'Widow pension', 'Disability pension for SC'],
};

// --- Voter Behaviour ---
const voterBehaviour: VoterBehaviour = {
  casteFactor: 'Dominant - SC voters (~60-70%) decide winner',
  partyLoyalty: 'INC strong among SC community historically',
  swing: 'Limited swing - strong base politics',
};

// --- Electoral History ---
const electoralHistory: ElectoralHistory = {
  pastElections: [
    {
      year: 2022,
      winner: 'Aruna Chaudhary',
      party: 'INC',
      voteCount: 50547,
      margin: 'Won vs [NEEDS VERIFICATION]',
      runnerUp: undefined,
      runnerUpParty: undefined,
      needsVerification: true,
    },
    {
      year: 2017,
      winner: 'Aruna Chaudhary',
      party: 'INC',
      voteCount: null,
      margin: 'Won vs BJP\'s Bishan Dass',
      runnerUp: 'Bishan Dass',
      runnerUpParty: 'BJP',
      needsVerification: false,
    },
    {
      year: 2012,
      winner: '[NEEDS VERIFICATION]',
      party: '',
      voteCount: null,
      margin: '',
      needsVerification: true,
    },
  ],
  voterBehaviour,
};

// --- Public Sentiment ---
const keyIssues: KeyIssue[] = [
  { issue: 'Employment', priority: 1 },
  { issue: 'Education', priority: 2 },
  { issue: 'Drug Menace', priority: 3 },
  { issue: 'Land Rights', priority: 4 },
  { issue: 'Social Justice', priority: 5 },
];

const publicSentiment: PublicSentiment = {
  currentMood: {
    mla: 'Aruna Chaudhary',
    party: 'INC',
    terms: 2,
    expectations: ['More welfare schemes', 'SC rights', 'Development'],
  },
  keyIssues,
};

// --- Governance Gap ---
const governanceGap: GovernanceGap = {
  scWelfareImplementation: '[NEEDS VERIFICATION - gaps in delivery]',
  scholarships: 'Often not reaching eligible students',
  housing: '[NEEDS VERIFICATION]',
  needsVerification: true,
};

// --- Local Issues ---
const issueVoterMappings: IssueVoterMapping[] = [
  { issue: 'Jobs', prioritySegment: 'SC youth' },
  { issue: 'Education', prioritySegment: 'Students' },
  { issue: 'Drug rehabilitation', prioritySegment: 'Youth, families' },
  { issue: 'Caste dignity', prioritySegment: 'Entire SC community' },
];

const localIssues: LocalIssues = { issueVoterMappings };

// --- Power Structure ---
const political: PoliticalInfluencer[] = [
  {
    name: 'Aruna Chaudhary',
    role: 'Two-term INC MLA',
    party: 'INC',
    notes: 'Female SC leader',
  },
  {
    name: 'Bishan Dass',
    role: 'BJP Candidate 2017',
    party: 'BJP',
  },
];

const community: CommunityInfluencer[] = [
  {
    category: 'Dalit Rights Activists',
    details: '[NEEDS VERIFICATION]',
    needsVerification: true,
  },
  {
    category: 'Panchayat Leaders',
    details: '[NEEDS VERIFICATION]',
    needsVerification: true,
  },
];

const powerStructure: PowerStructure = {
  political,
  boothAgents: '[NEEDS VERIFICATION]',
  community,
};

// --- SWOT Analysis ---
const swotAnalysis: SwotAnalysis = {
  strengths: [
    'INC holding the seat (Aruna Chaudhary two terms)',
    'Strong SC voter base for Congress',
    'Female SC representation',
  ],
  weaknesses: [
    'Limited development visible',
    'MLA may face anti-incumbency',
  ],
  opportunities: [
    'SC welfare schemes delivery',
    'Education scholarships',
    'Skill development',
  ],
  threats: [
    'AAP making inroads in SC community',
    'Drug problem affecting youth',
  ],
};

// --- Strategic Blueprint ---
const topNarratives: Narrative[] = [
  { title: 'DinaNagar SC Rights', description: 'Focus on welfare' },
  { title: 'Female Leadership', description: 'Aruna Chaudhary\'s women empowerment' },
  { title: 'Jobs & Education', description: 'Youth-focused' },
];

const prioritySegments: PrioritySegment[] = [
  { segment: 'SC voters (60-70%)', percentage: '60-70%', strategy: 'must consolidate' },
  { segment: 'Women voters', percentage: '', strategy: 'target women voters' },
  { segment: 'Youth', percentage: '', strategy: 'address employment and drug issues' },
];

const strategicBlueprint: StrategicBlueprint = { topNarratives, prioritySegments };

// ============================================================================
// CYCLE 4: DEEP DOSSIER DATA
// ============================================================================

// --- Caste Composition ---
const casteComposition: CasteComposition[] = [
  { category: 'SC', percentage: '~35-38% (dominant in this SC seat)' },
  { category: 'Jat Sikh', percentage: '~26%' },
  { category: 'OBC', percentage: '~13%' },
  { category: 'Upper Caste', percentage: '~12%' },
  { category: 'Minority', percentage: '~8%' },
];

// --- Election Results Deep ---
const electionResultsDeep: ElectionResultDeep[] = [
  {
    year: 2022,
    winner: 'Aruna Chaudhary',
    party: 'INC',
    margin: 1131,
    totalElectors: 152000,
    voterTurnout: 73,
    needsVerification: false,
  },
  {
    year: 2017,
    winner: '[NEEDS VERIFICATION]',
    party: '[NEEDS VERIFICATION]',
    margin: '[NEEDS VERIFICATION]',
    needsVerification: true,
  },
  {
    year: 2012,
    winner: '[NEEDS VERIFICATION]',
    party: '[NEEDS VERIFICATION]',
    margin: '[NEEDS VERIFICATION]',
    needsVerification: true,
  },
];

// --- Congress Position ---
const congressPosition: CongressPosition = {
  vulnerability: 'EXTREME',
  margin: 1131,
  strategicNotes:
    'CONGRESS WON BY JUST 1,131 VOTES - EXTREMELY VULNERABLE. This is a razor-thin margin and requires immediate strategic attention. Any anti-Congress wave could flip this seat.',
};

// --- Recommended Candidate Profile ---
const recommendedCandidateProfile: CandidateProfile = {
  profile: 'Strong SC leader with village-level connect',
  casteConsideration: 'Must be from SC community',
  keyQualities: ['Grassroots worker', 'Dedicated social service'],
};

// --- Attack Lines ---
const attackLines: AttackLine[] = [
  {
    category: 'Close Victory',
    points: ['Congress barely won - anti-incumbency strong'],
  },
  {
    category: 'SC Welfare',
    points: ['Welfare schemes not reaching SC beneficiaries'],
  },
  {
    category: 'Economic Issues',
    points: ['SC community economically backward'],
  },
  {
    category: 'Representation',
    points: ['SC voice weak in assembly'],
  },
];

// ============================================================================
// CYCLE 5: MASTER CONSTITUENCY DATA OBJECT
// ============================================================================

export const DinaNagarSCData: DinaNagarSCDossier = {
  // Identity
  identity,

  // Baseline sections
  historicalContext,
  administrativeSetup,
  economicIdentity,
  socioCulturalIdentity,

  // Demographics
  censusData,
  electoralRollAnalytics,
  schemePenetration,

  // Electoral
  electoralHistory,
  publicSentiment,

  // Governance
  governanceGap,

  // Local
  localIssues,

  // Power structure
  powerStructure,

  // Analysis
  swotAnalysis,
  strategicBlueprint,

  // Deep dossier
  casteComposition,
  electionResultsDeep,
  congressPosition,
  recommendedCandidateProfile,
  attackLines,

  // Metadata
  dataSources: ['IndiaVotes', 'India Today', 'Oneindia', 'CNBC TV18', 'search results'],
  researchStatus: 'Partial - requires local verification',
  lastUpdated: '20 May 2026',
};

// ============================================================================
// CYCLE 6: VERIFICATION - 100% CONTENT COVERAGE CHECK
// ============================================================================

/**
 * Content Coverage Verification:
 * [x] AC Number: 5
 * [x] Name: Dina Nagar (SC)
 * [x] District: Gurdaspur
 * [x] Region: Majha
 * [x] Parliamentary Segment: Gurdaspur Lok Sabha constituency
 * [x] Type: Scheduled Caste (SC)
 * [x] Town: Dina Nagar - municipal council
 * [x] Area: Urban center with surrounding rural SC-majority villages
 * [x] Historical Context (origin, significance, development)
 * [x] Economic Identity (primary activities, employment, economic status)
 * [x] Socio-Cultural Identity (language, religion, caste composition, social profile)
 * [x] Administrative Setup (Municipal Council, Health, Education)
 * [x] Census Data (population, sex ratio, literacy)
 * [x] Electoral Roll Analytics (total electors, voter turnout 2022)
 * [x] Scheme Penetration (PDS, MGNREGA, SC Welfare, Pensions)
 * [x] Election Results 2012, 2017, 2022
 * [x] Voter Behaviour (caste factor, party loyalty, swing)
 * [x] Current Mood (MLA, expectations)
 * [x] Key Issues (Employment, Education, Drug Menace, Land Rights, Social Justice)
 * [x] Governance Gap (SC welfare implementation, scholarships, housing)
 * [x] Issue-Voter Mapping table
 * [x] Political Influencers (Aruna Chaudhary, Bishan Dass)
 * [x] Community Influencers (Dalit Rights Activists, Panchayat Leaders)
 * [x] SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)
 * [x] Strategic Blueprint (Top 3 Narratives, Priority Segments)
 * [x] Caste Composition (SC, Jat Sikh, OBC, Upper Caste, Minority)
 * [x] Congress Strategic Position (vulnerability level, margin, strategic notes)
 * [x] Recommended Candidate Profile
 * [x] Attack Lines Against Incumbent
 * [x] Data Sources
 * [x] Research Status
 * [x] Date: 20 May 2026
 *
 * Coverage: 100% - All content from both source files included
 */
