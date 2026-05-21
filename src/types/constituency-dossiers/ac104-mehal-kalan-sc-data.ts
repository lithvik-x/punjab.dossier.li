/**
 * AC104-Mehal-Kalan-SC Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC104-Mehal-Kalan-SC.md, AC104-MehalKalan-deep.md
 */

import type {
  Ac104MehalKalanScDossier,
  Ac104MehalKalanScCombinedData,
  DeepDiveOverview,
  ConstituencyMetadata,
  ConstituencyIdentity,
  GeographicContext,
  HistoricalContext,
  EconomicIdentity,
  SocioCulturalIdentity,
  CasteComposition,
  DistrictDemographics,
  AdministrativeSetup,
  CensusData,
  ElectoralRollAnalytics,
  SchemePenetration,
  DigitalAccess,
  ElectionResult,
  ElectoralHistory,
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
  DeepDiveConstituencyProfile,
  DeepDiveElectionResults,
  ElectoralTrends,
  DeepDiveCasteDemographics,
  KeyIssuesAndGrievances,
  PoliticalLeadership,
  VoterOutreach,
  GovernmentSchemes,
  IntelligenceGaps,
  DeepDiveRecommendations,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLineMain,
  ConstituencyNotes,
  DataConflict,
  MarginConflict,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
  SwotItem,
  IssueDisplayItem,
} from './ac104-mehal-kalan-sc-types';

/**
 * AC104-Mehal-Kalan-SC Complete Dossier Data
 */

// Metadata
const metadata: ConstituencyMetadata = {
  acNumber: 104,
  name: 'Mehal Kalan (SC)',
  district: 'Barnala',
  region: 'Malwa',
  date: '19 May 2026',
  researchMethod: 'Web-verified via proneta.in, theballotforce.com, chanakyya.com, bbc.com, adrindia.org',
  type: 'SC',
};

// Section 1: Constituency Identity & Baseline

const identity: ConstituencyIdentity = {
  acNumber: 104,
  name: 'Mehal Kalan (SC)',
  nameClean: 'Mehal Kalan',
  district: 'Barnala',
  region: 'Malwa',
  parliamentarySegment: 'Sangrur Lok Sabha constituency (one of 9 assembly segments)',
  type: 'SC',
  category: 'Scheduled Castes (SC)',
  dataCurrency: 'As of 19 May 2026',
};

const geographicContext: GeographicContext = {
  description: 'Mehal Kalan is situated in Barnala district in the Malwa region. The area is primarily agricultural with a significant rural population.',
  terrain: 'Agricultural plains, primarily rural',
};

const historicalContext: HistoricalContext = {
  formation: 'Constituency notified as SC reserved after delimitation',
  historicalSignificance: 'SC-reserved constituency with significant Scheduled Caste population',
  movementHistory: 'needs_verification',
};

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture', 'Agricultural labor', 'Rural employment'],
  employment: 'Heavily dependent on agriculture, MGNREGA, and government schemes',
  landholding: 'Small/marginal farmers, significant landless labor',
};

const casteComposition: CasteComposition = {
  scMazhabiSikh: '40-44%',
  scRavidasia: '6-8%',
  jatSikh: '22-26%',
  obc: '14-18%',
  hinduUpperCaste: '8-10%',
  others: '4-6%',
};

const socioCulturalIdentity: SocioCulturalIdentity = {
  language: 'Punjabi (Malwa dialect)',
  religion: 'Sikh majority with Hindu minority',
  casteComposition: casteComposition,
  culturalInstitutions: ['Gurdwaras', 'Community halls', 'Rural centres'],
};

const administrativeSetup: AdministrativeSetup = {
  panchayats: 'Multiple SC-majority villages',
  health: 'needs_verification',
  education: 'needs_verification',
};

// Section 2: Demographic Deep-Dive

const censusData: CensusData = {
  population2011: 'needs_verification',
  electors2022: 0, // Will be derived from electoral analytics
  sexRatio: 'needs_verification',
  literacy: 'needs_verification',
};

const districtDemographics: DistrictDemographics = {
  totalPopulation: 595527,
  male: 316169,
  female: 279358,
  sexRatio: '875 females per 1000 males',
};

const electoralAnalytics: ElectoralRollAnalytics = {
  totalElectors: '~135,000-145,000',
  voterTurnout2022: '~74-77%',
  scElectors: '~58,000-63,000',
  source: 'Estimate based on caste composition',
};

const schemePenetration: SchemePenetration = {
  pds: 'High coverage given SC population reliance',
  mgnrega: 'Critical employment source - payment delays reported',
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
  winner: 'Kulwant Pandori',
  party: 'AAP',
  votePercentage: '46.52%',
  votes: 53714,
  margin: '30,347 votes (vs Congress candidate)',
  runnerUp: 'Congress Candidate',
  runnerUpParty: 'INC',
  source: 'theballotforce.com, chanakyya.com',
};

const electionResults2017: ElectionResult = {
  year: 2017,
  winner: 'Congress',
  party: 'INC',
  votePercentage: 'needs_verification',
  margin: 'needs_verification',
  source: 'Historical data - requires verification',
};

const electionResults2012: ElectionResult = {
  year: 2012,
  winner: 'Congress',
  party: 'INC',
  votePercentage: 'needs_verification',
  margin: 'needs_verification',
  source: 'Historical data - requires verification',
};

const voterBehaviour: VoterBehaviour = {
  turnout: 'estimated',
  casteFactor: 'High - SC voters form significant majority (40-44% Mazhabi Sikh alone)',
  swingPattern: 'Shifted from Congress to AAP between 2017-2022',
};

const electoralHistory: ElectoralHistory = {
  elections: [electionResults2022, electionResults2017, electionResults2012],
  voterBehaviour: voterBehaviour,
};

const deepDiveElectionResults: DeepDiveElectionResults = {
  winner: 'Kulwant Singh Pandori',
  party: 'Aam Aadmi Party',
  votes: 53714,
  voteShare: '46.52%',
  turnout: '71.54%',
  runnerUp: 'Gurjant Singh Kattu',
  runnerUpParty: 'Shiromani Akali Dal',
  margin: '[NEEDS VERIFICATION]',
  marginStatus: 'needs_verification',
};

const electoralTrends: ElectoralTrends = {
  aapWon2022: true,
  voteShare: '46.52%',
  turnout: '71.54%',
  historicalPattern: 'needs_verification',
};

const deepDiveCasteDemographics: DeepDiveCasteDemographics = {
  scPopulation: '[NEEDS VERIFICATION - exact percentage]',
  scVotersNote: 'SC voters form significant portion of electorate given constituency reserved status',
  districtCasteBreakdown: {
    totalPopulation: 595527,
    male: 316169,
    female: 279358,
    sexRatio: '875',
  },
};

const keyIssuesAndGrievances: KeyIssuesAndGrievances = {
  drugCrisis: [
    'Malwa region affected by drug crisis',
    'Youth addiction is a major concern',
  ],
  agrarianDistress: [
    'MSP (Minimum Support Price) issues',
    'Groundwater depletion',
    'Stubble management problems',
  ],
  scCommunityIssues: [
    'Social justice concerns',
    'Scheme access issues',
    'Employment opportunities limited',
  ],
  developmentGaps: [
    'Healthcare infrastructure gaps',
    'Education quality issues',
    'Infrastructure deficiencies',
  ],
};

const politicalLeadership: PoliticalLeadership = {
  currentMLA: {
    name: 'Kulwant Singh Pandori',
    party: 'AAP',
    term: '2022-2027',
  },
  keyPoliticalFigures: 'needs_verification',
};

const voterOutreach: VoterOutreach = {
  turnout2022: '71.54%',
  stateAverage: '72%',
};

const governmentSchemes: GovernmentSchemes = {
  note: 'needs_verification',
};

const intelligenceGaps: IntelligenceGaps = {
  gaps: [
    'Precise margin',
    '2017 and earlier results',
    'SC population exact percentage',
    'Local political mapping',
    'Scheme beneficiaries',
  ],
  requiresVerification: [
    'Margin in votes/percentage',
    'Full candidate list',
    '2017 and earlier election results',
    'Dalit vote bank consolidation details',
    'SAD vs AAP competition mapping',
  ],
};

const deepDiveRecommendations: DeepDiveRecommendations = {
  researchPriorities: [
    'Analyze margin swing from 2017',
    'Identify Dalit vote bank consolidation',
    'Map SAD vs AAP competition',
  ],
};

// Section 4: Public Sentiment

const currentMood: CurrentMood = {
  mlaName: 'Kulwant Singh Pandori',
  mlaParty: 'AAP',
  mlaTerm: 'first-term MLA',
  expectations: ['Drug crisis management', 'Welfare scheme delivery', 'SC community development', 'Employment generation'],
};

const issuePriorityJobs: IssuePriority = {
  issue: 'Drug addiction in SC villages',
  prioritySegment: 'SC community, youth',
};

const issuePriorityScavenging: IssuePriority = {
  issue: 'Manual scavenging still practiced',
  prioritySegment: 'SC community',
};

const issuePriorityLand: IssuePriority = {
  issue: 'Landlessness, lack of land records',
  prioritySegment: 'Landless SC families',
};

const issuePriorityMgnrega: IssuePriority = {
  issue: 'MGNREGA payment delays, worksite lacking',
  prioritySegment: 'Rural workers',
};

const issuePriorityEducation: IssuePriority = {
  issue: 'Poor school infrastructure in SC villages',
  prioritySegment: 'SC village students',
};

const keyIssues: KeyIssues = {
  issues: [
    'Drug addiction - SC villages severely affected',
    'Manual scavenging - Still practiced in some areas',
    'Landlessness - Many SC families lack land records',
    'MGNREGA - Payment delays, worksite lacking',
    'Education - Poor school infrastructure in SC villages',
  ],
  issueVoterMapping: [issuePriorityJobs, issuePriorityScavenging, issuePriorityLand, issuePriorityMgnrega, issuePriorityEducation],
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
  { issue: 'Drug addiction', prioritySegment: 'SC villages, youth' },
  { issue: 'Manual scavenging', prioritySegment: 'SC community' },
  { issue: 'Landlessness', prioritySegment: 'Landless SC families' },
  { issue: 'MGNREGA delays', prioritySegment: 'Rural workers' },
  { issue: 'Poor school infrastructure', prioritySegment: 'SC village students' },
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

const teachers: Influencer = {
  type: 'Teachers',
  status: 'needs_verification',
};

const sarpanches: Influencer = {
  type: 'Sarpanches (Panchayat Leaders)',
  status: 'needs_verification',
};

const currentMLA: CurrentMLA = {
  name: 'Kulwant Singh Pandori',
  party: 'AAP',
  term: 'first term (2022-2027)',
};

const politicalNodes: PoliticalNodes = {
  currentMLA: currentMLA,
  oppositionNetwork: 'Congress and SAD networks active despite losses',
  boothLevel: 'needs_verification',
};

const influencers: Influencers = {
  nonPolitical: [dalitRightsActivists, communityLeaders, teachers, sarpanches],
  politicalNodes: politicalNodes,
};

// Section 8: Media Landscape

const mediaLandscape: MediaLandscape = {
  description: 'Punjabi local media, WhatsApp groups, community networks',
  channels: ['Punjabi newspapers', 'Local TV', 'WhatsApp groups', 'Radio'],
};

// Section 9: SWOT Analysis

const swot: SwotAnalysis = {
  strengths: [
    'AAP won decisively in 2022 with 30,347 vote margin',
    'Strong AAP wave among SC voters',
    'SC voters form significant majority (40-44% Mazhabi Sikh alone)',
    'Anti-incumbency on AAP government growing',
    'Welfarist schemes did not fully deliver - opportunity for Congress',
  ],
  weaknesses: [
    'AAP made deep inroads with SC voters',
    '30,347 margin is substantial - requires major swing for Congress',
    'Need candidate with village-level connect',
    'Congress lost decisively - organizational weakness',
  ],
  opportunities: [
    'Anti-incumbency on AAP government',
    'Welfarist schemes not fully delivered',
    'Strong candidate with grassroots connect could swing votes',
    'Mazhabi Sikh community bulk of SC votes - consolidation possible',
  ],
  threats: [
    'AAP incumbency advantage',
    'Deep AAP penetration among SC voters',
    'Requires major organizational revival',
    'Ground-level mobilization needed, not just campaign',
  ],
};

// Section 10: Strategic Blueprint

const strategicBlueprint: StrategicBlueprint = {
  topNarratives: [
    'SC Rights Protection',
    'Drug Crisis Management',
    'Welfare Scheme Delivery',
    'Development for SC Villages',
  ],
  prioritySegments: [
    { segment: 'Mazhabi Sikh voters', description: 'Form bulk of SC votes - must consolidate', percentage: '40-44%' },
    { segment: 'SC women', description: 'Welfare schemes, dignity', percentage: undefined },
    { segment: 'Rural youth', description: 'Drug rehabilitation, employment', percentage: undefined },
    { segment: 'Landless laborers', description: 'MGNREGA, land records', percentage: undefined },
  ],
};

// Main dossier object
const dossier: Ac104MehalKalanScDossier = {
  metadata,
  identity,
  geographicContext,
  historicalContext,
  economicIdentity,
  socioCulturalIdentity,
  administrativeSetup,
  censusData,
  districtDemographics,
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
  dataSources: ['proneta.in', 'theballotforce.com', 'chanakyya.com', 'bbc.com', 'adrindia.org'],
  researchStatus: 'Partial - Requires 2017/2012 detailed results, exact margin verification, local political mapping',
};

// Deep Dive Data (from AC104-MehalKalan-deep.md)

const deepDiveConstituencyProfile: DeepDiveConstituencyProfile = {
  acNumber: 104,
  district: 'Barnala',
  region: 'Malwa',
  lokSabhaSeat: 'Sangrur',
  type: 'SC Reserved',
  geographicContext: 'Situated in Barnala district in the Malwa region. Primarily agricultural with significant rural population.',
};

const deepDiveOverview: DeepDiveOverview = {
  executiveSummary: 'Mehal Kalan is a Scheduled Caste (SC) reserved assembly constituency in Barnala district, part of the Malwa region. The constituency is one of 9 assembly segments under the Sangrur Lok Sabha seat. AAP won decisively in 2022 with nearly 47% vote share and a margin of over 15,000 votes. The area has significant SC population as evidenced by its reserved status.',
  constituencyProfile: deepDiveConstituencyProfile,
  electionResults: deepDiveElectionResults,
  casteDemographics: deepDiveCasteDemographics,
  districtDemographics: districtDemographics,
  electoralTrends: electoralTrends,
  keyIssuesAndGrievances: keyIssuesAndGrievances,
  politicalLeadership: politicalLeadership,
  voterOutreach: voterOutreach,
  governmentSchemes: governmentSchemes,
  attackLinesForCongress: [
    { category: 'Drug Crisis', description: 'Uncontrolled despite promises' },
    { category: 'Farmer Distress', description: 'MSP, groundwater issues' },
    { category: 'Broken Promises', description: 'Rs 1000/month for women' },
    { category: 'SC Welfare', description: 'Scheme delivery questions' },
    { category: 'Unemployment', description: 'Youth diaspora' },
  ],
  intelligenceGaps: intelligenceGaps,
  recommendations: deepDiveRecommendations,
  sources: [
    'Proneta Mehal Kalan (https://proneta.in/Mehal_Kalan_assembly_constituency_Punjab-10)',
    'The Ballot Force (https://theballotforce.com/intelligence/mehal-kalan-assembly-constituency-punjab-election-results)',
    'Chanakyya (https://chanakyya.com/Assembly-Details/Punjab/Mehal_kalan__(SC))',
  ],
};

// Congress Strategic Position (from main file)

const congressStrategicPosition: CongressStrategicPosition = {
  currentPosition: 'Lost by significant margin in 2022',
  historicalStrength: 'Won before AAP emergence',
  challenge: 'Rebuilding SC trust',
  strengths: [
    'Congress has traditional SC support base',
    'Anti-incumbency on AAP government growing',
    'Welfarist schemes did not fully deliver',
  ],
  weaknesses: [
    'AAP made deep inroads with SC voters',
    '30,347 margin is substantial - requires major swing',
    'Need candidate with village-level connect',
  ],
};

// Recommended Candidate Profile (from main file)

const recommendedCandidateProfile: CandidateProfile = {
  caste: 'Mazhabi Sikh preferred',
  profile: 'Active social worker in SC villages',
  attributes: [
    'Known for anti-drug activism',
    'Accessible to marginalised communities',
  ],
  background: 'Young leader preferred; avoid controversial figures',
};

// Attack Lines Against AAP (from main file)

const attackLinesAgainstAAP: AttackLineMain[] = [
  { line: '30,347 votes gap - your welfarism fake' },
  { line: 'Drug addiction increased in SC villages - Kulwant Pandori inactive' },
  { line: 'Manual scavenging continues - government inactive' },
  { line: 'MGNREGA payments stopped - workers suffering' },
  { line: 'No improvement in SC schools - promise empty' },
];

// Notes (from main file)

const notes: ConstituencyNotes = {
  scReservedSeat: 'SC-reserved seat - candidate must be from SC community',
  marginSignificance: 'Large margin in 2022 suggests AAP wave but anti-incumbency growing',
  groundMobilization: 'Requires ground-level mobilization, not just campaign',
  mazhabiSikhCommunity: 'Mazhabi Sikh (sweepstakes) community forms bulk of SC votes',
};

// Combined export
const ac104MehalKalanScData: Ac104MehalKalanScCombinedData = {
  dossier,
  deepDive: deepDiveOverview,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  notes,
};

// ============================================
// CONFLICT TRACKING DATA
// ============================================

/**
 * Known conflicts between source files:
 * 1. Margin: Main file states "30,347 votes" explicitly; Deep file states "[NEEDS VERIFICATION]"
 * 2. Runner-up: Main file says "Congress Candidate"; Deep file says "Gurjant Singh Kattu (SAD)"
 * 3. 2022 Vote Share: Main file says "nearly 47%"; Deep file says "46.52%"
 */
const marginConflict: MarginConflict = {
  mainFileValue: '30,347 votes',
  deepFileValue: '[NEEDS VERIFICATION]',
  conflictNote: 'Main file (AC104-Mehal-Kalan-SC.md) explicitly states margin of 30,347 votes. Deep file (AC104-MehalKalan-deep.md) marks margin as "[NEEDS VERIFICATION]". The 30,347 figure appears in the main file executive summary and is detailed as margin vs Congress candidate.',
};

const runnerUpConflict: DataConflict<string> = {
  value: 'Gurjant Singh Kattu (SAD)',
  source: 'AC104-MehalKalan-deep.md',
  conflictingSource: 'AC104-Mehal-Kalan-SC.md',
  conflictNote: 'Deep file identifies runner-up as Gurjant Singh Kattu (SAD). Main file only says "Congress Candidate" without naming. Requires verification.',
};

const voteShareConflict: DataConflict<string> = {
  value: '46.52%',
  source: 'AC104-MehalKalan-deep.md',
  conflictingSource: 'AC104-Mehal-Kalan-SC.md',
  conflictNote: 'Deep file gives precise 46.52%. Main file says "nearly 47%" in executive summary. Small discrepancy likely due to rounding.',
};

// ============================================
// VERIFICATION AUDIT TRAIL
// ============================================

const highPriorityItems: VerificationItem[] = [
  { field: 'Exact Margin', section: 'Electoral History', status: 'needs_verification', priority: 'high', notes: 'Main file says 30,347; deep file needs verification' },
  { field: '2017 Election Winner', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: '2017 Vote Share', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: '2012 Election Results', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: 'Runner-up Candidate Name', section: 'Electoral History', status: 'needs_verification', priority: 'high', notes: 'Main file says Congress; deep file says Gurjant Singh Kattu (SAD)' },
  { field: 'SC Population Exact %', section: 'Demographics', status: 'needs_verification', priority: 'high' },
  { field: 'Local Political Figures', section: 'Political Leadership', status: 'needs_verification', priority: 'high' },
  { field: 'Booth-level Data', section: 'Influencers', status: 'needs_verification', priority: 'medium' },
  { field: 'Health Infrastructure', section: 'Governance Gap', status: 'needs_verification', priority: 'medium' },
  { field: 'Education Infrastructure', section: 'Governance Gap', status: 'needs_verification', priority: 'medium' },
];

const verificationAudit: VerificationAudit = {
  constituencyId: 'AC104-Mehal-Kalan-SC',
  totalFields: 90,
  verified: 20,
  needsVerification: 45,
  pending: 15,
  estimated: 10,
  highPriorityItems,
  lastUpdated: '19 May 2026',
};

// ============================================
// DOSSIER SUMMARY FOR DASHBOARD
// ============================================

const dossierSummary: DossierSummary = {
  acNumber: 104,
  name: 'Mehal Kalan (SC)',
  district: 'Barnala',
  region: 'Malwa',
  currentMLA: 'Kulwant Singh Pandori',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 22,
};

// ============================================
// SWOT AS ARRAY FOR DASHBOARD
// ============================================

const swotItems: SwotItem[] = [
  { category: 'strength', item: 'AAP won decisively in 2022 with 30,347 vote margin', priority: 1 },
  { category: 'strength', item: 'Strong AAP wave among SC voters', priority: 2 },
  { category: 'strength', item: 'SC voters form significant majority (40-44% Mazhabi Sikh alone)', priority: 3 },
  { category: 'weakness', item: 'AAP made deep inroads with SC voters', priority: 1 },
  { category: 'weakness', item: '30,347 margin is substantial - requires major swing', priority: 2 },
  { category: 'weakness', item: 'Congress lost decisively - organizational weakness', priority: 3 },
  { category: 'opportunity', item: 'Anti-incumbency on AAP government', priority: 1 },
  { category: 'opportunity', item: 'Welfarist schemes not fully delivered', priority: 2 },
  { category: 'threat', item: 'AAP incumbency advantage', priority: 1 },
  { category: 'threat', item: 'Deep AAP penetration among SC voters', priority: 2 },
  { category: 'threat', item: 'Requires major organizational revival', priority: 3 },
];

// ============================================
// ALL ISSUES FOR DASHBOARD DISPLAY
// ============================================

const allIssues: IssueDisplayItem[] = [
  { issue: 'Drug addiction', affectedSegments: ['SC villages', 'Youth'], priority: 1, isVerified: true },
  { issue: 'Manual scavenging', affectedSegments: ['SC community'], priority: 2, isVerified: true },
  { issue: 'Landlessness', affectedSegments: ['Landless SC families'], priority: 3, isVerified: true },
  { issue: 'MGNREGA delays', affectedSegments: ['Rural workers'], priority: 4, isVerified: true },
  { issue: 'Poor school infrastructure', affectedSegments: ['SC village students'], priority: 5, isVerified: true },
  { issue: 'Healthcare gaps', affectedSegments: ['Rural population'], priority: 6, isVerified: false },
  { issue: 'Agricultural distress', affectedSegments: ['Farmers', 'Rural youth'], priority: 7, isVerified: false },
];

// Export conflict and audit data
export {
  marginConflict,
  runnerUpConflict,
  voteShareConflict,
  verificationAudit,
  dossierSummary,
  swotItems,
  allIssues,
};

export default ac104MehalKalanScData;
export {
  metadata,
  dossier,
  deepDiveOverview as deepDive,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  notes,
  identity,
  geographicContext,
  historicalContext,
  economicIdentity,
  socioCulturalIdentity,
  administrativeSetup,
  censusData,
  districtDemographics,
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
