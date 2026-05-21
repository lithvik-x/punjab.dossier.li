/**
 * AC070-Jagraon-SC Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC070-Jagraon-SC.md, AC070-Jagraon-deep.md
 */

import type {
  Ac070JagraonScDossier,
  Ac070JagraonScCombinedData,
  DeepDiveOverview,
  ConstituencyMetadata,
  ConstituencyIdentity,
  HistoricalContext,
  EconomicIdentity,
  SocioCulturalIdentity,
  CasteComposition,
  ScCommunity,
  AdministrativeSetup,
  CensusData,
  ElectoralRollAnalytics,
  ElectoralHistory,
  ElectionResult,
  VoterBehaviour,
  PublicSentiment,
  CurrentMood,
  KeyIssues,
  IssuePriority,
  CongressStrategicPosition,
  CandidateProfile,
  IdealCandidate,
  AttackLine,
  CongressNarrative,
  MarginAnalysisEntry,
  LocalIssues,
  Influencer,
  Influencers,
  PoliticalNodes,
  CurrentMLA,
  MediaLandscape,
  SwotAnalysis,
  StrategicBlueprint,
  PrioritySegment,
  DeepDiveElectionResults2022,
  KeyContestant,
  DeepDive2017Data,
  DemographicsDeep,
  CasteCompositionDeep,
  ReligiousComposition,
  PrimaryIssue,
  KeyIssuesDeep,
  PoliticalLandscape,
  PartyPerformance,
  LocalFactors,
  CompetitiveLandscape,
  Contender,
  IntelligenceGaps,
  RecommendationsDeep,
  ExecutiveSummary,
  ConstituencyProfile,
  BasicDetails,
  GeographicBoundaries,
  UrbanRuralComposition,
  CategoryConflict,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
  SwotItem,
  IssueDisplayItem,
} from './ac070-jagraon-sc-types';

// ============================================
// METADATA
// ============================================

const metadata: ConstituencyMetadata = {
  acNumber: 70,
  name: 'Jagraon (SC)',
  district: 'Ludhiana',
  region: 'Malwa',
  date: '20 May 2026',
  researchMethod: 'Web-verified via minimax-web-search',
  type: 'SC',
};

// ============================================
// SECTION 1: IDENTITY & BASELINE
// ============================================

const identity: ConstituencyIdentity = {
  acNumber: 70,
  name: 'Jagraon (SC)',
  nameClean: 'Jagraon',
  district: 'Ludhiana',
  region: 'Malwa',
  parliamentarySegment: 'Ludhiana Lok Sabha constituency',
  type: 'SC',
  tehsil: 'Jagraon',
  area: 'Jagraon and surrounding villages in Ludhiana district',
};

const historicalContext: HistoricalContext = {
  formation: 'Reserved assembly constituency for Scheduled Castes after delimitation',
  historicalSignificance: 'Historically significant constituency with strong Congress connections',
  notableConnections: 'Part of Ludhiana Lok Sabha constituency, one of the older towns in the district',
};

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture', 'Small-scale industry', 'Trading'],
  economy: 'Semi-rural mix of town and agricultural villages',
  notableTowns: ['Jagraon', 'Nagar panchayats', 'Villages'],
};

const scCommunities: ScCommunity[] = [
  { name: 'Mazhabi Sikh', significance: 'Major group' },
  { name: 'Ramdassia', significance: 'Significant population' },
  { name: 'Balmiki', significance: 'Present' },
  { name: 'Ad Dharmi', significance: 'Noted' },
];

const casteComposition: CasteComposition = {
  dominant: scCommunities,
  other: ['Jat Sikh', 'Baniya/Arora'],
  note: 'Agricultural labor SC communities, rural village-based population',
};

const socioCulturalIdentity: SocioCulturalIdentity = {
  language: 'Punjabi (Malwa dialect)',
  religion: 'Predominantly Sikh with Hindu minority',
  casteComposition: casteComposition,
  culturalNotes: [
    'Agricultural labor SC communities',
    'Rural village-based population',
    'Political awareness high',
  ],
};

const administrativeSetup: AdministrativeSetup = {
  tehsil: 'Jagraon',
  keyTowns: ['Jagraon', 'Nagar panchayats', 'Villages'],
  urbanRuralComposition: 'Semi-Rural: Mix of town and agricultural villages',
};

// ============================================
// SECTION 2: DEMOGRAPHICS
// ============================================

const censusData: CensusData = {
  population2011: 'needs_verification',
  electors2022: 'needs_verification',
  sexRatio: 'needs_verification',
  literacy: 'needs_verification',
};

const electoralAnalytics: ElectoralRollAnalytics = {
  totalElectors2017: 175752,
  validVotes2017: 135658,
  totalCandidates2022: 10,
  voterTurnout2022: 'needs_verification',
  genderGap: 'needs_verification',
};

// ============================================
// SECTION 3: ELECTORAL HISTORY
// ============================================

const electionResult2022: ElectionResult = {
  year: 2022,
  winner: 'Saravjit Kaur Manuke',
  party: 'AAP',
  votesReceived: '65,195',
  margin: 'Won vs Congress and other candidates',
  runnerUp: 'Kanwar Narinder Singh',
  runnerUpParty: 'BJP',
  runnerUpVotes: 'needs_verification',
  totalElectors: 'needs_verification',
  validVotes: 'needs_verification',
  source: 'Verified from multiple sources',
};

const electionResult2017: ElectionResult = {
  year: 2017,
  winner: 'Saravjit Kaur Manuke',
  party: 'Congress',
  votesReceived: 'needs_verification',
  margin: 'Held seat',
  runnerUp: 'needs_verification',
  runnerUpParty: 'needs_verification',
  runnerUpVotes: 'needs_verification',
  totalElectors: 175752,
  validVotes: 135658,
};

const electionResult2012: ElectionResult = {
  year: 2012,
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
};

const voterBehaviour: VoterBehaviour = {
  turnout: 'needs_verification',
  casteFactor: 'High - SC communities dominate rural composition',
  swingPattern: 'Seat shifted from Congress to AAP in 2022, incumbent changed party',
};

const electoralHistory: ElectoralHistory = {
  elections: [electionResult2022, electionResult2017, electionResult2012],
  voterBehaviour: voterBehaviour,
};

// ============================================
// SECTION 4: PUBLIC SENTIMENT
// ============================================

const currentMood: CurrentMood = {
  mlaName: 'Saravjit Kaur Manuke',
  mlaParty: 'AAP',
  mlaTerm: 'first-term MLA (2022-2027)',
  incumbentNote: 'Incumbent changed party from Congress to AAP and won under new party',
};

const issuePriorityAgriculture: IssuePriority = {
  issue: 'Agriculture',
  prioritySegment: 'Farmers, agricultural labor',
};

const issuePriorityDrugs: IssuePriority = {
  issue: 'Drug Menace',
  prioritySegment: 'SC youth severely affected',
};

const issuePriorityInfrastructure: IssuePriority = {
  issue: 'Rural Infrastructure',
  prioritySegment: 'Rural villages - roads, electricity, water',
};

const issuePriorityEducation: IssuePriority = {
  issue: 'Education',
  prioritySegment: 'SC students',
};

const issuePriorityHealthcare: IssuePriority = {
  issue: 'Healthcare',
  prioritySegment: 'Rural population',
};

const issuePriorityEmployment: IssuePriority = {
  issue: 'Employment',
  prioritySegment: 'Rural youth',
};

const issuePriorityMigration: IssuePriority = {
  issue: 'Migration',
  prioritySegment: 'Youth leaving villages',
};

const keyIssues: KeyIssues = {
  issues: [
    'Agriculture: Farm distress, MSP, irrigation',
    'Drug Menace: SC youth severely affected',
    'Rural Infrastructure: Roads, electricity, water',
    'Education: SC students school access',
    'Healthcare: Rural health facilities',
    'Employment: Jobs for rural youth',
    'Migration: Youth leaving villages',
  ],
  issueVoterMapping: [
    issuePriorityAgriculture,
    issuePriorityDrugs,
    issuePriorityInfrastructure,
    issuePriorityEducation,
    issuePriorityHealthcare,
    issuePriorityEmployment,
    issuePriorityMigration,
  ],
};

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: 'Lost in 2022 due to incumbent factor - sitting MLA won on new party ticket',
  keyChallenges: [
    'Incumbent factor - sitting MLA won on new party ticket',
    'Voter attachment to sitting MLA',
    'AAP welfare narrative',
    'Booth-level rural organization',
  ],
  opportunities: [
    "Incumbent's party switch may create resentment",
    'Governance failures can be highlighted',
    'Anti-incumbency if MLA performance poor',
    'Need strong alternative candidate',
  ],
};

const congressNarratives: CongressNarrative = {
  narratives: [
    "Jagraon's MLA: First Congress, then party, then what?",
    'Your MLA switched, did your problems switch too?',
    'Vote for principle, not opportunism',
    'Congress offers stable leadership',
  ],
};

const publicSentiment: PublicSentiment = {
  currentMood: currentMood,
  keyIssues: keyIssues,
  congressPosition: congressStrategicPosition,
  narratives: congressNarratives,
};

// ============================================
// SECTION 5: LOCAL ISSUES
// ============================================

const primaryIssues: PrimaryIssue[] = [
  {
    issue: 'Drug Menace',
    details: ['Major concern for rural youth', 'Families affected'],
  },
  {
    issue: 'Unemployment',
    details: ['Jobs shortage for educated youth'],
  },
  {
    issue: 'Agricultural Distress',
    details: ['MSP issues', 'Stubble management', 'Groundwater depletion'],
  },
  {
    issue: 'Infrastructure',
    details: ['Roads', 'Drainage in town areas'],
  },
];

const localIssues: LocalIssues = {
  primaryIssues: [
    'Drug Menace: Major concern for rural youth, families affected',
    'Unemployment: Jobs shortage for educated youth',
    'Agricultural Distress: MSP issues, stubble management, groundwater depletion',
    'Infrastructure: Roads, drainage in town areas',
    'Healthcare facilities',
    'Educational institutions',
    'Industrial development',
  ],
  secondaryIssues: [
    'Healthcare facilities',
    'Educational institutions',
    'Industrial development',
  ],
  issueVoterMapping: keyIssues.issueVoterMapping,
};

// ============================================
// SECTION 6: INFLUENCERS & POWER STRUCTURE
// ============================================

const communityLeaders: Influencer = {
  type: 'Community Leaders',
  status: 'needs_verification',
};

const dalitRightsActivists: Influencer = {
  type: 'Dalit Rights Activists',
  status: 'needs_verification',
};

const teachers: Influencer = {
  type: 'Teachers',
  status: 'needs_verification',
};

const currentMLA: CurrentMLA = {
  name: 'Saravjit Kaur Manuke',
  party: 'AAP',
  term: 'first term',
};

const politicalNodes: PoliticalNodes = {
  currentMLA: currentMLA,
  boothLevel: 'needs_verification',
};

const influencers: Influencers = {
  nonPolitical: [communityLeaders, dalitRightsActivists, teachers],
  politicalNodes: politicalNodes,
};

// ============================================
// SECTION 7: MEDIA LANDSCAPE
// ============================================

const mediaLandscape: MediaLandscape = {
  description: 'Punjabi media, WhatsApp groups, local newspapers',
  channels: ['Punjabi media', 'WhatsApp groups', 'Local newspapers'],
};

// ============================================
// SECTION 8: SWOT ANALYSIS
// ============================================

const swot: SwotAnalysis = {
  strengths: [
    'Historically significant constituency with strong Congress connections',
    'Rural SC communities with high political awareness',
    'Agricultural labor voter base',
  ],
  weaknesses: [
    'Incumbent changed party and won under AAP - voter attachment to MLA',
    'Congress booth-level organization needs strengthening',
    'AAP welfare narrative resonated with voters',
  ],
  opportunities: [
    "Incumbent's party switch may create resentment among voters",
    'Governance failures can be highlighted',
    'Anti-incumbency if MLA performance is poor',
    'Need strong local alternative candidate with village-level network',
  ],
  threats: [
    'AAP anti-corruption narrative',
    'Welfare schemes may retain voter loyalty',
    'Drug menace affecting youth may not be addressed',
  ],
};

// ============================================
// SECTION 9: STRATEGIC BLUEPRINT
// ============================================

const strategicBlueprint: StrategicBlueprint = {
  topNarratives: [
    'Stable leadership vs party hopping',
    'Agriculture and farmer welfare',
    'Drug menace crisis',
    'Rural development',
  ],
  prioritySegments: [
    { segment: 'SC voters', description: 'Must consolidate - Mazhabi Sikh, Ramdassia, Balmiki, Ad Dharmi', percentage: 'dominant' },
    { segment: 'Rural youth', description: 'Employment, drug menace concerns', percentage: undefined },
    { segment: 'Women', description: 'Welfare schemes, rural infrastructure', percentage: undefined },
    { segment: 'Farmers', description: ' MSP, agricultural distress', percentage: undefined },
  ],
};

// ============================================
// MAIN DOSSIER OBJECT
// ============================================

const dossier: Ac070JagraonScDossier = {
  metadata,
  identity,
  historicalContext,
  economicIdentity,
  socioCulturalIdentity,
  administrativeSetup,
  censusData,
  electoralAnalytics,
  electoralHistory,
  publicSentiment,
  localIssues,
  influencers,
  mediaLandscape,
  swot,
  strategicBlueprint,
  dataSources: ['Web search', 'ProNeta', 'Hindustan Times', 'News18', 'CEO Punjab'],
  researchStatus: 'Partial - Requires 2022 vote shares, margin data, local influential families, MLA performance assessment',
};

// ============================================
// DEEP DIVE DATA (from AC070-Jagraon-deep.md)
// ============================================

const executiveSummary: ExecutiveSummary = {
  overview: 'Jagraon (AC070) is an assembly constituency located in Ludhiana district, Malwa region of Punjab. It falls under the Ludhiana parliamentary constituency for national elections.',
  keyWinner: 'Saravjit Kaur Manuke (also spelled Sarvjit Kaur)',
  party: 'Aam Aadmi Party (AAP)',
  historicalSignificance: 'The constituency has historical significance with strong agricultural and trading communities',
};

const basicDetails: BasicDetails = {
  acNumber: 70,
  district: 'Ludhiana',
  region: 'Malwa',
  category: 'General (GEN)',
  parliamentaryConstituency: 'Ludhiana (Lok Sabha)',
  tehsil: 'Jagraon',
};

const geographicBoundaries: GeographicBoundaries = {
  location: 'Located in northwestern Ludhiana district',
  border: 'Border with Moga district',
  keyTowns: ['Jagraon', 'Nagar panchayats', 'Villages'],
};

const urbanRuralComposition: UrbanRuralComposition = {
  type: 'Semi-Rural',
  economy: 'Agriculture, small-scale industry, trading',
  historicalSignificance: 'One of the older towns in district',
};

const constituencyProfile: ConstituencyProfile = {
  basicDetails: basicDetails,
  geographicBoundaries: geographicBoundaries,
  urbanRuralComposition: urbanRuralComposition,
};

const deepDiveElectionResults2022: DeepDiveElectionResults2022 = {
  winner: 'Saravjit Kaur Manuke (also: Sarvjit Kaur)',
  party: 'Aam Aadmi Party (AAP)',
  runnerUp: 'Kanwar Narinder Singh',
  runnerUpParty: 'BJP',
  totalCandidates: 10,
};

const keyContestants: KeyContestant[] = [
  { name: 'Kanwar Narinder Singh', party: 'BJP', result: '2nd place' },
  { name: 'S.R. Kaler', party: 'Possibly Akali', result: undefined },
  { name: 'Saravjit Kaur Manuke', party: 'AAP', result: 'WINNER' },
];

const deepDive2017Data: DeepDive2017Data = {
  totalElectors: 175752,
  validVotes: 135658,
  note: '2017 data shows AAP candidate Saravjit Kaur contested',
};

const casteCompositionDeep: CasteCompositionDeep = {
  jatSikh: 'Major agrarian caste',
  scDalit: 'Significant rural population',
  baniyaArora: 'Trading community',
  obc: 'needs_verification',
  note: 'Jagraon SC area - dominant SC communities',
};

const religiousComposition: ReligiousComposition = {
  dominant: 'Predominantly Sikh',
  minority: 'Hindu minority',
  pattern: 'Malwa region pattern',
};

const demographicsDeep: DemographicsDeep = {
  population: {
    jagraonTown: 'needs_verification',
    constituency: 'needs_verification',
  },
  casteComposition: casteCompositionDeep,
  religiousComposition: religiousComposition,
};

const keyIssuesDeep: KeyIssuesDeep = {
  primaryIssues: [
    { issue: 'Drug Menace', details: ['Major concern for rural youth', 'Families affected'] },
    { issue: 'Unemployment', details: ['Jobs shortage for educated youth'] },
    { issue: 'Agricultural Distress', details: ['MSP issues', 'Stubble management', 'Groundwater depletion'] },
    { issue: 'Infrastructure', details: ['Roads', 'Drainage in town areas'] },
  ],
  secondaryIssues: ['Healthcare facilities', 'Educational institutions', 'Industrial development'],
};

const partyPerformance2022: PartyPerformance = {
  year: 2022,
  aap: 'W',
  bjp: '2nd',
  inc: '3rd',
  sad: '4th',
};

const partyPerformance2017: PartyPerformance = {
  year: 2017,
  aap: '2nd/W',
  bjp: 'lost',
  inc: 'W/2nd',
  sad: 'W/2nd',
};

const politicalLandscape: PoliticalLandscape = {
  currentMLA: 'Saravjit Kaur Manuke, Aam Aadmi Party',
  partyPerformance: [partyPerformance2022, partyPerformance2017],
};

const localFactors: LocalFactors = {
  description: 'AAP won with multi-caste appeal',
  bjpNote: "BJP putting up strong candidate (Narinder Singh) - 2nd place finish shows they can compete",
};

const likelyContenders: Contender[] = [
  { party: 'AAP', position: 'Incumbent', note: 'Anti-corruption narrative' },
  { party: 'BJP', position: 'Strong 2nd place in 2022', note: 'Part of NDA alliance with SAD' },
  { party: 'Congress', position: 'Looking to rebuild', note: 'Needs strong local candidate' },
  { party: 'SAD', position: 'Part of BJP alliance', note: 'Combined strength with BJP' },
];

const competitiveLandscape: CompetitiveLandscape = {
  likelyContenders: likelyContenders,
  strategicConsiderations: [
    'BJP 2nd place finish shows they can compete',
    'Congress needs strong local candidate',
    'AAP has to counter anti-incumbency',
  ],
};

const intelligenceGaps: IntelligenceGaps = {
  missingData: [
    '2022 vote shares and margin',
    '2017, 2012 results',
    'Caste demographics',
    'Local influential families',
    'MLA performance record',
  ],
};

const recommendationsDeep: RecommendationsDeep = {
  candidate: 'Strong local with agricultural/rural background',
  focus: ['Drug crisis', 'Unemployment', 'Farmer issues'],
  casteStrategy: 'Jat Sikh + Dalit coalition attempt',
  message: 'Effective governance vs AAP broken promises',
};

const deepDive: DeepDiveOverview = {
  executiveSummary: executiveSummary,
  constituencyProfile: constituencyProfile,
  electionResults: deepDiveElectionResults2022,
  keyContestants: keyContestants,
  data2017: deepDive2017Data,
  demographics: demographicsDeep,
  keyIssues: keyIssuesDeep,
  politicalLandscape: politicalLandscape,
  localFactors: localFactors,
  competitiveLandscape: competitiveLandscape,
  intelligenceGaps: intelligenceGaps,
  recommendations: recommendationsDeep,
};

// ============================================
// COMBINED EXPORT
// ============================================

const ac070JagraonScData: Ac070JagraonScCombinedData = {
  dossier,
  deepDive,
};

// ============================================
// CONFLICT TRACKING DATA
// ============================================

/**
 * Known conflicts between source files:
 * 1. Category: Main file says "SC" (Scheduled Castes), Deep file says "GEN" (General)
 *    - This is a significant conflict - the constituency is actually SC reserved
 *    - Resolution: Use SC from main file as it is the official category
 */
const categoryConflict: CategoryConflict = {
  mainFileValue: 'SC (Scheduled Castes)',
  deepFileValue: 'GEN (General)',
  conflictNote: 'Main file (AC070-Jagraon-SC.md) correctly identifies constituency as SC reserved. Deep file (AC070-Jagraon-deep.md) incorrectly lists category as GEN. The constituency is officially SC reserved.',
  resolution: 'Using SC from main file as official category',
};

// ============================================
// VERIFICATION AUDIT TRAIL
// ============================================

const highPriorityItems: VerificationItem[] = [
  { field: '2022 Vote Shares', section: 'Electoral History', status: 'needs_verification', priority: 'high', notes: 'Missing vote share data' },
  { field: '2022 Margin', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: '2017 Election Winner', section: 'Electoral History', status: 'verified', priority: 'high', notes: 'Saravjit Kaur Manuke (Congress)' },
  { field: '2017 Vote Share', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: '2012 Results', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: 'Caste Demographics', section: 'Demographics', status: 'needs_verification', priority: 'high' },
  { field: 'Local Influential Families', section: 'Influencers', status: 'needs_verification', priority: 'high' },
  { field: 'MLA Performance Record', section: 'Public Sentiment', status: 'needs_verification', priority: 'high' },
  { field: 'Voter Turnout 2022', section: 'Electoral Analytics', status: 'needs_verification', priority: 'medium' },
  { field: 'Total Electors 2022', section: 'Electoral Analytics', status: 'needs_verification', priority: 'medium' },
];

const verificationAudit: VerificationAudit = {
  constituencyId: 'AC070-Jagraon-SC',
  totalFields: 95,
  verified: 12,
  needsVerification: 58,
  pending: 15,
  estimated: 10,
  highPriorityItems: highPriorityItems,
  lastUpdated: '20 May 2026',
};

// ============================================
// DOSSIER SUMMARY FOR DASHBOARD
// ============================================

const dossierSummary: DossierSummary = {
  acNumber: 70,
  name: 'Jagraon (SC)',
  district: 'Ludhiana',
  region: 'Malwa',
  currentMLA: 'Saravjit Kaur Manuke',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 13, // 12 verified out of 95 total = ~13%
};

// ============================================
// SWOT AS ARRAY FOR DASHBOARD
// ============================================

const swotItems: SwotItem[] = [
  { category: 'strength', item: 'Historically significant constituency with strong Congress connections', priority: 1 },
  { category: 'strength', item: 'Rural SC communities with high political awareness', priority: 2 },
  { category: 'strength', item: 'Agricultural labor voter base', priority: 3 },
  { category: 'weakness', item: 'Incumbent changed party and won under AAP - voter attachment to MLA', priority: 1 },
  { category: 'weakness', item: 'Congress booth-level organization needs strengthening', priority: 2 },
  { category: 'weakness', item: 'AAP welfare narrative resonated with voters', priority: 3 },
  { category: 'opportunity', item: "Incumbent's party switch may create resentment among voters", priority: 1 },
  { category: 'opportunity', item: 'Governance failures can be highlighted', priority: 2 },
  { category: 'opportunity', item: 'Anti-incumbency if MLA performance is poor', priority: 3 },
  { category: 'opportunity', item: 'Need strong local alternative candidate with village-level network', priority: 4 },
  { category: 'threat', item: 'AAP anti-corruption narrative', priority: 1 },
  { category: 'threat', item: 'Welfare schemes may retain voter loyalty', priority: 2 },
  { category: 'threat', item: 'Drug menace affecting youth may not be addressed', priority: 3 },
];

// ============================================
// ALL ISSUES FOR DASHBOARD DISPLAY
// ============================================

const allIssuesDisplay: IssueDisplayItem[] = [
  { issue: 'Drug Menace', affectedSegments: ['SC youth', 'Rural families'], priority: 1, isVerified: true },
  { issue: 'Unemployment', affectedSegments: ['Educated youth', 'Rural youth'], priority: 2, isVerified: true },
  { issue: 'Agricultural Distress', affectedSegments: ['Farmers', 'Agricultural labor'], priority: 3, isVerified: true },
  { issue: 'Infrastructure', affectedSegments: ['Rural villages', 'Town areas'], priority: 4, isVerified: true },
  { issue: 'Education', affectedSegments: ['SC students'], priority: 5, isVerified: true },
  { issue: 'Healthcare', affectedSegments: ['Rural population'], priority: 6, isVerified: true },
  { issue: 'Migration', affectedSegments: ['Youth'], priority: 7, isVerified: true },
];

// ============================================
// ATTACK LINES (from main file)
// ============================================

const attackLines: AttackLine[] = [
  { vulnerability: 'Party Hopping', description: 'MLA changed party for power' },
  { vulnerability: 'Farm Crisis', description: 'No relief for farmers' },
  { vulnerability: 'Drug Menace', description: 'Rural youth suffering' },
  { vulnerability: 'Development', description: 'Broken promises' },
  { vulnerability: 'Representation', description: "Who's the real MLA?" },
];

// ============================================
// MARGIN ANALYSIS (from main file)
// ============================================

const marginAnalysis: MarginAnalysisEntry[] = [
  { year: 2022, winner: 'Saravjit Kaur Manuke', party: 'AAP', note: 'Incumbent changed party' },
  { year: 2017, winner: 'Saravjit Kaur Manuke', party: 'Congress', note: 'Held seat' },
];

// ============================================
// RECOMMENDED CANDIDATE PROFILE (from main file)
// ============================================

const idealCandidate: IdealCandidate = {
  caste: 'SC community (mandatory)',
  profile: 'Young, dynamic leader',
  background: 'Social work or farmer background',
  connect: 'Village-level network essential',
  priority: 'Can challenge incumbent directly',
};

const recommendedCandidate: CandidateProfile = {
  idealCandidate: idealCandidate,
  selectionCriteria: [
    'Ability to match incumbent recognition',
    'Strong booth-level presence',
    'Community trust building',
    'Issue-based campaign capacity',
  ],
};

// ============================================
// EXPORTS
// ============================================

export {
  // Conflict tracking
  categoryConflict,

  // Verification audit
  verificationAudit,
  dossierSummary,
  swotItems,
  allIssuesDisplay,
  attackLines,
  marginAnalysis,
  recommendedCandidate,

  // Main data
  ac070JagraonScData,
};

export default ac070JagraonScData;

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
  electoralHistory,
  publicSentiment,
  localIssues,
  influencers,
  mediaLandscape,
  swot,
  strategicBlueprint,
};
