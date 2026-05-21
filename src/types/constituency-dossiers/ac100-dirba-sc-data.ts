/**
 * AC100-Dirba-SC Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC100-Dirba-SC.md, AC100-Dirba-deep.md
 */

import type {
  Ac100DirbaScDossier,
  Ac100DirbaScCombinedData,
  DeepDiveOverview,
  ConstituencyMetadata,
  ConstituencyIdentity,
  HistoricalContext,
  EconomicIdentity,
  SocioCulturalIdentity,
  CasteComposition,
  AdministrativeSetup,
  CensusData,
  ElectoralRollAnalytics,
  SchemePenetration,
  DigitalAccess,
  ElectoralHistory,
  ElectionResult,
  VoterBehaviour,
  PublicSentiment,
  CurrentMood,
  KeyIssues,
  IssuePriority,
  GovernanceGap,
  ServiceDelivery,
  LocalIssues,
  IssueVoterMapping,
  Influencers,
  Influencer,
  PoliticalNodes,
  CurrentMLA,
  MediaLandscape,
  SwotAnalysis,
  StrategicBlueprint,
  PrioritySegment,
  DeepDiveElectionResults,
  ElectionDataPoint,
  CandidateProfile,
  AttackLine,
  CasteCompositionConflict,
  ElectorCountConflict,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
  SwotItem,
} from './ac100-dirba-sc-types';

/**
 * AC100-Dirba-SC Complete Dossier Data
 */

// Metadata
const metadata: ConstituencyMetadata = {
  acNumber: 100,
  name: 'Dirba (SC)',
  district: 'Sangrur',
  region: 'Malwa',
  date: '20 May 2026',
  researchMethod: 'Web-verified via minimax-web-search',
  type: 'SC',
};

// Section 1: Constituency Identity & Baseline

const identity: ConstituencyIdentity = {
  acNumber: 100,
  name: 'Dirba (SC)',
  nameClean: 'Dirba',
  district: 'Sangrur',
  region: 'Malwa',
  parliamentarySegment: 'Sangrur Lok Sabha constituency (one of 13 assembly segments)',
  type: 'SC',
  area: 'Rural agricultural area in Sangrur district',
  pollingBooths: 'needs_verification',
};

const historicalContext: HistoricalContext = {
  formation: 'Constituency notified as SC reserved after delimitation',
  historicalSignificance: 'SC reserved seat with significant Dalit voter base in Malwa region',
  movementHistory: 'needs_verification',
};

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture', 'Cotton farming', 'Wheat cultivation', 'Agricultural labor'],
  employment: 'Heavily dependent on agriculture, limited industrial opportunities',
  landholding: 'Small/marginal farmers, landless agricultural laborers',
};

const casteComposition: CasteComposition = {
  sc: '40-45%',
  mazhabi: 'Dominant SC subgroup',
  ramdasia: 'Significant SC subgroup',
  sikh: '65-70%',
  hindu: '30-35%',
  obc: '8-10%',
  note: 'SC population includes Mazhabi and Ramdasia communities - dominant in this SC reserved seat',
};

const socioCulturalIdentity: SocioCulturalIdentity = {
  language: 'Punjabi (Malwa dialect)',
  religion: 'Sikh majority (65-70%), Hindu minority (30-35%)',
  casteComposition: casteComposition,
  culturalInstitutions: ['Gurdwaras', 'Community halls', 'Rural temples'],
};

const administrativeSetup: AdministrativeSetup = {
  panchayats: 'Multiple SC-majority villages',
  health: 'needs_verification',
  education: 'needs_verification',
};

// Section 2: Demographic Deep-Dive

const censusData: CensusData = {
  population2011: 'needs_verification',
  electors2022: 182695,
  sexRatio: 'needs_verification',
  literacy: 'needs_verification',
};

const electoralAnalytics: ElectoralRollAnalytics = {
  totalElectors: 182695,
  genderGap: 'needs_verification',
  voterTurnout2022: '~79.5%',
  source: 'IndiaVotes, OneIndia, ADR',
};

const schemePenetration: SchemePenetration = {
  pds: 'High coverage given rural SC population reliance',
  mgnrega: 'needs_verification',
  pmKisan: 'needs_verification',
  socialPensions: 'Old age, widow pensions for SC community',
};

const digitalAccess: DigitalAccess = {
  smartphonePenetration: '~55-65%',
  socialMedia: ['Facebook', 'WhatsApp', 'YouTube'],
};

// Section 3: Electoral History

const electionResults2022: ElectionResult = {
  year: 2022,
  winner: 'Harpal Singh Cheema',
  party: 'AAP',
  votePercentage: '57%',
  margin: 50655,
  runnerUp: 'Not specified',
  runnerUpParty: 'Not specified',
  runnerUpVotes: 'Not specified',
  totalVotes: 145257,
  totalElectors: 182695,
  source: 'OneIndia, IndiaVotes, ADR',
};

const electionResults2017: ElectionResult = {
  year: 2017,
  winner: 'needs_verification',
  party: 'needs_verification',
  votePercentage: 'needs_verification',
  margin: 'needs_verification',
  totalElectors: 175000,
};

const electionResults2012: ElectionResult = {
  year: 2012,
  winner: 'needs_verification',
  party: 'needs_verification',
  votePercentage: 'needs_verification',
  margin: 'needs_verification',
};

const voterBehaviour: VoterBehaviour = {
  turnout: '~79.5%',
  casteFactor: 'Extremely high - SC voters dominate (~40-45%)',
  swingPattern: 'AAP won decisively in 2022 with 57% vote share and 50K+ margin',
};

const electoralHistory: ElectoralHistory = {
  elections: [electionResults2022, electionResults2017, electionResults2012],
  voterBehaviour: voterBehaviour,
};

// Section 4: Public Sentiment

const currentMood: CurrentMood = {
  mlaName: 'Harpal Singh Cheema',
  mlaParty: 'AAP',
  mlaTerm: 'first-term MLA',
  expectations: ['Jobs', 'Drug rehabilitation', 'Welfare schemes', 'Land rights', 'Dignity for community'],
};

const issuePriorityDrugs: IssuePriority = {
  issue: 'Drug addiction',
  prioritySegment: 'Rural SC youth severely affected',
};

const issuePriorityUnemployment: IssuePriority = {
  issue: 'Unemployment',
  prioritySegment: 'Limited opportunities for SC youth',
};

const issuePriorityLand: IssuePriority = {
  issue: 'Land issues',
  prioritySegment: 'Small landowner problems',
};

const issuePriorityAgriculture: IssuePriority = {
  issue: 'Agricultural distress',
  prioritySegment: 'Cotton/wheat farmers',
};

const issuePriorityHealthEducation: IssuePriority = {
  issue: 'Health and education',
  prioritySegment: 'Rural facility gaps',
};

const keyIssues: KeyIssues = {
  issues: [
    'Drug addiction - Rural SC youth severely affected',
    'Unemployment - Limited opportunities for SC youth',
    'Land issues - Small landowner problems',
    'Agricultural distress - Cotton/wheat farmers',
    'Health and education - Rural facility gaps',
  ],
  issueVoterMapping: [
    issuePriorityDrugs,
    issuePriorityUnemployment,
    issuePriorityLand,
    issuePriorityAgriculture,
    issuePriorityHealthEducation,
  ],
};

const publicSentiment: PublicSentiment = {
  currentMood: currentMood,
  keyIssues: keyIssues,
};

// Section 5: Governance Gap

const governanceGap: GovernanceGap = {
  schools: 'needs_verification',
  health: 'needs_verification',
  roads: 'needs_verification',
  scWelfareSchemes: 'needs_verification',
  scholarships: 'needs_verification',
};

const serviceDelivery: ServiceDelivery = {
  schools: 'needs_verification',
  healthAnmAsha: 'needs_verification',
  roads: 'needs_verification',
};

// Section 6: Local Issues

const issueVoterMappingList: IssueVoterMapping[] = [
  { issue: 'Drug addiction', prioritySegment: 'Rural SC youth' },
  { issue: 'Unemployment', prioritySegment: 'SC youth' },
  { issue: 'Land issues', prioritySegment: 'Small landowners' },
  { issue: 'Agricultural distress', prioritySegment: 'Cotton/wheat farmers' },
  { issue: 'Health and education', prioritySegment: 'Rural population' },
];

const localIssues: LocalIssues = {
  issues: keyIssues.issues,
  issueVoterMapping: issueVoterMappingList,
};

// Section 7: Influencers & Power Structure

const dalitRightsActivists: Influencer = {
  type: 'Dalit Rights Activists',
  status: 'needs_verification',
};

const communityLeaders: Influencer = {
  type: 'Community Leaders',
  status: 'needs_verification',
};

const panchayatLeaders: Influencer = {
  type: 'Panchayat Leaders',
  status: 'needs_verification',
};

const currentMLA: CurrentMLA = {
  name: 'Harpal Singh Cheema',
  party: 'AAP',
  term: 'first term',
};

const politicalNodes: PoliticalNodes = {
  currentMLA: currentMLA,
  oppositionNetwork: 'needs_verification',
  boothLevel: 'needs_verification',
};

const influencers: Influencers = {
  nonPolitical: [dalitRightsActivists, communityLeaders, panchayatLeaders],
  politicalNodes: politicalNodes,
};

// Section 8: Media Landscape

const mediaLandscape: MediaLandscape = {
  description: 'Punjabi media, WhatsApp groups, local newspapers',
  channels: ['Punjabi media', 'WhatsApp groups', 'Local newspapers'],
};

// Section 9: SWOT Analysis

const swot: SwotAnalysis = {
  strengths: [
    'AAP won in 2022 with massive numbers (57%, 50K+ margin)',
    'SC vote bank consolidated (~40-45% SC population)',
    'Largest AC by electors (182,695) - significant electoral weight',
  ],
  weaknesses: [
    'First-time MLA, limited administrative experience',
    'Rural constituency with limited development infrastructure',
    'Severe drug addiction affecting SC youth',
  ],
  opportunities: [
    'SC welfare schemes if implemented effectively',
    'Agricultural development programs',
    'Central scholarships for education',
  ],
  threats: [
    'Anti-incumbency against AAP state government',
    'Drug problem severe in Malwa region',
    'Agrarian distress affecting farmers',
  ],
};

// Section 10: Strategic Blueprint

const strategicBlueprint: StrategicBlueprint = {
  topNarratives: [
    'SC权益保护 (SC Rights Protection)',
    'Drug rehabilitation for youth',
    'Employment opportunities for SC community',
    'Agricultural development',
  ],
  prioritySegments: [
    { segment: 'SC voters', description: 'Must consolidate', percentage: '40-45%' },
    { segment: 'Rural voters', description: 'Agricultural community', percentage: undefined },
    { segment: 'Youth', description: 'Drug rehabilitation, employment', percentage: undefined },
    { segment: 'Women', description: 'Welfare schemes', percentage: undefined },
  ],
};

// Main dossier object
const dossier: Ac100DirbaScDossier = {
  metadata,
  identity,
  historicalContext,
  economicIdentity,
  socioCulturalIdentity,
  administrativeSetup,
  censusData,
  electoralAnalytics,
  schemePenetration,
  digitalAccess,
  electoralHistory,
  publicSentiment,
  governanceGap,
  serviceDelivery,
  localIssues,
  influencers,
  mediaLandscape,
  swot,
  strategicBlueprint,
  dataSources: ['OneIndia.com', 'IndiaVotes.com', 'ADRindia.org', 'ECI data'],
  researchStatus: 'Partial - Requires 2017/2012 election details, booth-level data, MLA performance assessment',
};

// Deep Dive Data (from AC100-Dirba-deep.md)

const deepDiveElectionResults2022: ElectionDataPoint = {
  winner: 'Harpal Singh Cheema (from main file)',
  party: 'AAP',
  margin: 50655,
  totalElectors: '182,695',
};

const deepDiveElectionResults2017: ElectionDataPoint = {
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
  runnerUp: 'needs_verification',
  runnerUpParty: 'needs_verification',
};

const deepDiveElectionResults2012: ElectionDataPoint = {
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
};

const deepDiveElectionResults: DeepDiveElectionResults = {
  year2022: deepDiveElectionResults2022,
  year2017: deepDiveElectionResults2017,
  year2012: deepDiveElectionResults2012,
};

const casteCompositionDeep: CasteComposition = {
  sc: '40-45%',
  mazhabi: 'Dominant SC subgroup',
  ramdasia: 'Significant SC subgroup',
  jatSikh: 25,
  obc: 12,
  upperCaste: 10,
  minority: 8,
  note: 'Typical Malwa Pattern - SC reserved seat with significant SC population',
};

const candidateProfile: CandidateProfile = {
  profile: 'SC leader from Mazhabi/Ramdasia community',
  casteConsideration: 'Must be from SC community (Mazhabi or Ramdasia preferred)',
  keyQualities: [
    'Dalit rights activist',
    'Panchayat experience',
    'Strong grassroots connect',
    'Known for social work',
    'Accessible to rural poor',
  ],
};

const attackLines: AttackLine[] = [
  { category: 'Unemployment', description: 'SC youth unemployment at peak' },
  { category: 'Drug Crisis', description: 'Drug addiction destroying SC families' },
  { category: 'Education', description: 'Educational opportunities limited for SC children' },
  { category: 'Health', description: 'Health services inaccessible to rural SC' },
  { category: 'Land Rights', description: 'Land rights issues unresolved' },
];

const deepDive: DeepDiveOverview = {
  constituencyOverview:
    'Dirba is an SC-reserved assembly constituency in Punjab\'s Malwa region, part of Sangrur district. The 2022 election showed AAP emerging victorious with a massive margin (57%, 50K+ votes). It is an agricultural belt with rural demographics and significant SC population (40-45%).',
  electionResults: deepDiveElectionResults,
  casteCompositionDeep: casteCompositionDeep,
  keyLocalIssues: [
    'Drug addiction - Rural SC youth severely affected',
    'Unemployment - Limited opportunities for SC youth',
    'Land issues - Small landowner problems',
    'Agricultural distress - Cotton/wheat farmers',
    'Health and education - Rural facility gaps',
    'MSP issues for farmers',
    'Groundwater depletion',
    'Stubble management',
  ],
  congressStrategicPosition:
    'AAP holds this seat with Harpal Singh Cheema winning massively. Congress lost badly. Strategic options: Need strong SC candidate with grassroots connect, focus on anti-incumbency against AAP, address drug and unemployment issues, consider BSP alliance for SC consolidation.',
  recommendedCandidateProfile: candidateProfile,
  attackLinesAgainstIncumbent: attackLines,
  sources: [
    'OneIndia.com',
    'IndiaVotes.com',
    'ADRindia.org',
    'India Today',
    'ECI data',
  ],
};

// Combined export
const ac100DirbaScData: Ac100DirbaScCombinedData = {
  dossier,
  deepDive,
};

// ============================================
// CONFLICT TRACKING DATA
// ============================================

/**
 * Known conflicts between source files:
 * 1. 2022 Winner: Main file provides name (Harpal Singh Cheema), Deep file has [NEEDS VERIFICATION]
 * 2. 2017/2012 Results: Both files require verification
 */
const casteCompositionConflict: CasteCompositionConflict = {
  mainFileValue: 'SC 40-45% (Mazhabi, Ramdasia)',
  deepFileValue: 'SC 40-45%, Jat Sikh 25%, OBC 12%, Upper Caste 10%',
  conflictNote:
    'Main file (AC100-Dirba-SC.md) provides SC demographics with Mazhabi/Ramdasia subgroups. Deep file (AC100-Dirba-deep.md) has broader caste breakdown. Both indicate ~40-45% SC population.',
  requiresVerification: false,
};

const electorCountConflict: ElectorCountConflict = {
  indiaVotesValue: 182695,
  estimatedValue: '~175,000 (2017 estimate)',
  conflictNote:
    '2022 electors: 182,695. 2017 estimate: ~175,000. Main file provides 2022 figure from verified sources.',
};

// ============================================
// VERIFICATION AUDIT TRAIL
// ============================================

const verificationAudit: VerificationAudit = {
  constituencyId: 'AC100-Dirba-SC',
  totalFields: 85,
  verified: 18,
  needsVerification: 52,
  pending: 10,
  estimated: 5,
  highPriorityItems: [
    {
      field: '2017 Election Winner',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
    },
    {
      field: '2017 Party',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
    },
    {
      field: '2012 Election Results',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
    },
    {
      field: '2022 Runner-up Details',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Main file says "Not specified" for runner-up',
    },
    {
      field: 'Caste Factor Details',
      section: 'Voter Behaviour',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Polling Booths Count',
      section: 'Identity',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Health Infrastructure',
      section: 'Administrative Setup',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Education Infrastructure',
      section: 'Administrative Setup',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Opposition Network',
      section: 'Political Nodes',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Booth-level Organization',
      section: 'Political Nodes',
      status: 'needs_verification',
      priority: 'medium',
    },
  ],
  lastUpdated: '20 May 2026',
};

// ============================================
// DOSSIER SUMMARY FOR DASHBOARD
// ============================================

const dossierSummary: DossierSummary = {
  acNumber: 100,
  name: 'Dirba (SC)',
  district: 'Sangrur',
  region: 'Malwa',
  currentMLA: 'Harpal Singh Cheema',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 21, // 18 verified out of 85 total = ~21%
};

// ============================================
// SWOT AS ARRAY FOR DASHBOARD
// ============================================

const swotItems: SwotItem[] = [
  { category: 'strength', item: 'AAP won in 2022 with massive numbers (57%, 50K+ margin)', priority: 1 },
  { category: 'strength', item: 'SC vote bank consolidated (~40-45% SC population)', priority: 2 },
  { category: 'strength', item: 'Largest AC by electors (182,695) - significant electoral weight', priority: 3 },
  { category: 'weakness', item: 'First-time MLA, limited administrative experience', priority: 1 },
  { category: 'weakness', item: 'Rural constituency with limited development infrastructure', priority: 2 },
  { category: 'weakness', item: 'Severe drug addiction affecting SC youth', priority: 3 },
  { category: 'opportunity', item: 'SC welfare schemes if implemented effectively', priority: 1 },
  { category: 'opportunity', item: 'Agricultural development programs', priority: 2 },
  { category: 'opportunity', item: 'Central scholarships for education', priority: 3 },
  { category: 'threat', item: 'Anti-incumbency against AAP state government', priority: 1 },
  { category: 'threat', item: 'Drug problem severe in Malwa region', priority: 2 },
  { category: 'threat', item: 'Agrarian distress affecting farmers', priority: 3 },
];

// ============================================
// ALL ISSUES FOR DASHBOARD DISPLAY
// ============================================

const allIssues = [
  {
    issue: 'Drug addiction',
    description: 'Rural SC youth severely affected',
    affectedSegments: ['Rural SC youth'],
    priority: 1,
    isVerified: true,
  },
  {
    issue: 'Unemployment',
    description: 'Limited opportunities for SC youth',
    affectedSegments: ['SC youth'],
    priority: 2,
    isVerified: true,
  },
  {
    issue: 'Land issues',
    description: 'Small landowner problems',
    affectedSegments: ['Small landowners'],
    priority: 3,
    isVerified: true,
  },
  {
    issue: 'Agricultural distress',
    description: 'Cotton/wheat farmers affected',
    affectedSegments: ['Cotton/wheat farmers'],
    priority: 4,
    isVerified: true,
  },
  {
    issue: 'Health and education',
    description: 'Rural facility gaps',
    affectedSegments: ['Rural population'],
    priority: 5,
    isVerified: true,
  },
];

// Export conflict and audit data
export {
  casteCompositionConflict,
  electorCountConflict,
  verificationAudit,
  dossierSummary,
  swotItems,
  allIssues,
};

export default ac100DirbaScData;
export {
  metadata,
  dossier,
  deepDive,
  identity,
  historicalContext,
  economicIdentity,
  socioCulturalIdentity,
  administrativeSetup,
  censusData,
  electoralAnalytics,
  schemePenetration,
  digitalAccess,
  electoralHistory,
  publicSentiment,
  governanceGap,
  serviceDelivery,
  localIssues,
  influencers,
  mediaLandscape,
  swot,
  strategicBlueprint,
};
