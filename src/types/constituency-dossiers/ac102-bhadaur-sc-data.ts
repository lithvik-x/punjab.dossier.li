/**
 * AC102-Bhadaur-SC Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC102-Bhadaur-SC.md, AC102-Bhadaur-deep.md
 */

import type {
  Ac102BhadaurScDossier,
  Ac102BhadaurScCombinedData,
  Ac102BhadaurDeepResearch,
  ConstituencyMetadata,
  ExecutiveSummary,
  ConstituencyIdentity,
  GeographicContext,
  CasteComposition,
  ElectorateData,
  CensusDemographics,
  ElectoralHistory,
  ElectionResult,
  VoterBehaviour,
  KeyLocalIssue,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLine,
  DeepResearchData,
  DeepDiveElectionResults,
  ElectionDataPoint,
  DeepDiveKeyIssues,
  PoliticalLeadership,
  VoterOutreach,
  GovernmentSchemes,
  IntelligenceGap,
  ResearchPriority,
  CongressAttackLine,
  CasteCompositionConflict,
  ElectorCountConflict,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
  SwotItem,
} from './ac102-bhadaur-sc-types';

/**
 * AC102-Bhadaur-SC Complete Dossier Data
 */

// Metadata
const metadata: ConstituencyMetadata = {
  acNumber: 102,
  name: 'Bhadaur (SC)',
  district: 'Barnala',
  region: 'Malwa',
  category: 'Scheduled Castes (SC)',
  dataCurrency: 'As of 19 May 2026',
};

// Executive Summary
const executiveSummary: ExecutiveSummary = {
  overview: 'Bhadaur is an SC-reserved constituency in Barnala district, Malwa region. The seat was captured by AAP in 2022 with candidate Labh Singh Ugoke. Congress has traditional support among SC voters (Mazhabi Sikh, Ravidasia) but failed to convert in 2022. The constituency has high SC population (~38-42%) making it a potential Congress revival seat if candidate selection is right.',
  dataCurrency: 'As of 19 May 2026',
};

// Section 1: Identity & Baseline

const identity: ConstituencyIdentity = {
  acNumber: 102,
  name: 'Bhadaur (SC)',
  nameClean: 'Bhadaur',
  district: 'Barnala',
  region: 'Malwa',
  parliamentarySegment: 'Barnala district assembly constituency',
  type: 'SC',
  area: 'Bhadaur and surrounding SC-dominated villages',
  pollingBooths: 'needs_verification',
};

const geographicContext: GeographicContext = {
  location: 'Barnala district',
  district: 'Barnala',
  description: 'Bhadaur is situated in Barnala district, one of the smaller districts of Punjab created in 2012. The area has a significant SC population and is primarily agricultural.',
};

// Section 2: Demographics

const casteComposition: CasteComposition = {
  sc: '38-42% (Mazhabi Sikh) + 8-10% (Ravidasia/Chamar) = ~46-52% total SC',
  scMazhabiSikh: '38-42%',
  scRavidasiaChamar: '8-10%',
  jatSikh: '20-24%',
  obc: '15-18%',
  hinduUpperCaste: '8-10%',
  muslim: '1-2%',
  note: 'SC population ~38-42% Mazhabi Sikh + 8-10% Ravidasia/Chamar = significant SC majority',
};

const electorateData: ElectorateData = {
  totalElectors: '~140,000-150,000',
  totalElectorsNumeric: 145000,
  voterTurnout2022: '~74-77%',
  voterTurnout2022Numeric: 75.5,
  scElectors: '~55,000-62,000',
  scElectorsNumeric: 58500,
};

const censusDemographics: CensusDemographics = {
  totalPopulation: 595527,
  male: 316169,
  female: 279358,
  sexRatio: '875 females per 1000 males',
  scPopulationNote: 'needs_verification',
};

// Section 3: Electoral History

const electionResults2022: ElectionResult = {
  year: 2022,
  winner: 'Labh Singh Ugoke',
  party: 'AAP',
  margin: 'Strong AAP victory',
  runnerUp: 'Congress Candidate',
  source: 'AC102-Bhadaur-SC.md',
};

const electionResults2017: ElectionResult = {
  year: 2017,
  winner: 'Pirmal Singh',
  party: 'AAP',
  source: 'AC102-Bhadaur-SC.md',
};

const electionResults2012: ElectionResult = {
  year: 2012,
  winner: 'Congress',
  party: 'INC',
  source: 'AC102-Bhadaur-SC.md',
};

const voterBehaviour: VoterBehaviour = {
  turnout: 'needs_verification',
  casteFactor: 'High - SC voters (Mazhabi Sikh, Ravidasia) are decisive',
  swingPattern: 'Changed from Congress to AAP in 2017 and 2022',
};

const electoralHistory: ElectoralHistory = {
  elections: [electionResults2022, electionResults2017, electionResults2012],
  voterBehaviour: voterBehaviour,
};

// Section 4: Key Local Issues

const keyLocalIssues: KeyLocalIssue[] = [
  {
    issue: 'Drug addiction',
    description: 'Severe crisis in rural SC-dominated villages',
    affectedSegments: ['SC youth', 'Rural SC community'],
    priority: 1,
  },
  {
    issue: 'Manual scavenging',
    description: 'Continued practice despite prohibition',
    affectedSegments: ['Ravidasia/Chamar community', 'SC women'],
    priority: 2,
  },
  {
    issue: 'Land rights',
    description: 'Many SC families landless or dispute-ridden',
    affectedSegments: ['Landless SC families', 'Small landholders'],
    priority: 3,
  },
  {
    issue: 'Employment',
    description: 'MGNREGA payments delayed, no industry',
    affectedSegments: ['SC workers', 'Rural youth'],
    priority: 4,
  },
  {
    issue: 'Alcoholism',
    description: 'Social menace particularly acute in SC villages',
    affectedSegments: ['SC families', 'Women and children'],
    priority: 5,
  },
];

// Section 5: Congress Strategic Position

const congressStrategicPosition: CongressStrategicPosition = {
  currentPosition: 'Opposition, needs strong SC candidate',
  historicalStrength: 'Traditional SC vote bank; Congress won here before AAP surge',
  lesson2022: 'Wrong candidate or poor campaign led to loss',
  strengths: [
    'Deep roots among Mazhabi Sikh community',
    'Congress has historically represented SC issues',
    'Anti-incumbency against AAP government',
  ],
  weaknesses: [
    'AAP made inroads with welfarist promises',
    'Local leader Labh Singh Ugoke has incumbency advantage now',
  ],
};

// Section 6: Recommended Candidate Profile

const recommendedCandidateProfile: CandidateProfile = {
  caste: 'Mazhabi Sikh',
  castePreference: 'Preferred for SC-reserved seat',
  profile: 'Community worker with grassroots connect',
  attributes: [
    'Clean image',
    'Strong stand on drug issue',
    'Grassroots connect',
  ],
  background: 'Possible: Relative of former MLA, or young social activist',
  keyQualities: [
    'Strong social base',
    'Worker connect',
    'Clean image',
    'Stand on drug issue',
  ],
};

// Section 7: Attack Lines Against AAP

const attackLinesAgainstAAP: AttackLine[] = [
  {
    category: 'Drug Crisis',
    description: 'Drug lords operate freely - Labh Singh Ugoke failed to act',
  },
  {
    category: 'Broken Promises',
    description: 'Welfare schemes remain on paper - where is the 1000/month for women?',
  },
  {
    category: 'Caste Discrimination',
    description: 'SC communities still face discrimination - government insensitive',
  },
  {
    category: 'Manual Scavenging',
    description: 'Manual scavenging still exists - shame on promises',
  },
  {
    category: 'Employment',
    description: 'Employment schemes fake - youth still leaving for Gulf',
  },
];

// Section 8: Notes

const notes: string[] = [
  'SC-reserved seat requires candidate from SC community',
  'Mazhabi Sikh and Ravidasia communities both important',
  'High margin of victory for AAP suggests strong anti-Congress wave, but winnable with right candidate',
];

// Data sources
const dataSources: string[] = [
  'AC102-Bhadaur-SC.md',
  'AC102-Bhadaur-deep.md',
  'Grokipedia (grokipedia.com)',
  'CNBC TV18 (cnbctv18.com)',
  'BBC (bbc.com)',
  'ADR India (adrindia.org)',
];

// Main dossier object
const dossier: Ac102BhadaurScDossier = {
  metadata,
  executiveSummary,
  identity,
  geographicContext,
  casteComposition,
  electorateData,
  censusDemographics,
  electoralHistory,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  notes,
  dataSources,
};

// ============================================
// DEEP DIVE DATA (from AC102-Bhadaur-deep.md)
// ============================================

const deepResearchMetadata: DeepResearchData = {
  researchMicroTaskId: 'AC102-Bhadaur',
  topic: 'Bhadaur Assembly Constituency - Deep Research',
  tier: 2,
  date: '20 May 2026',
  agent: 'Research-Orchestrator',
  sourcesConsulted: ['grokipedia.com', 'cnbctv18.com', 'bbc.com', 'adrindia.org'],
  verificationStatus: 'PARTIALLY VERIFIED',
  dataCurrency: 'As of May 2026 (2022 election data is most recent)',
};

const deepGeographicContext: GeographicContext = {
  location: 'Barnala district, Malwa region',
  district: 'Barnala',
  description: 'Bhadaur is situated in Barnala district, one of the smaller districts of Punjab created in 2012. The area has a significant SC population and is primarily agricultural.',
};

const deepDiveElectionResults2022: ElectionDataPoint = {
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
  note: 'Winner name and party needs verification - main file states Labh Singh Ugoke (AAP)',
};

const deepDiveElectionResults2017: ElectionDataPoint = {
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
  note: 'Previous election results need verification - main file states Pirmal Singh (AAP)',
};

const deepDiveElectionResults2012: ElectionDataPoint = {
  winner: 'needs_verification',
  party: 'needs_verification',
  margin: 'needs_verification',
  note: 'Earlier results need verification - main file states Congress won',
};

const deepDiveElectionResults: DeepDiveElectionResults = {
  year2022: deepDiveElectionResults2022,
  year2017: deepDiveElectionResults2017,
  year2012: deepDiveElectionResults2012,
};

const casteDemographicsDeep: CasteComposition = {
  sc: 'needs_verification',
  note: 'Barnala district has significant Scheduled Caste population given its status as SC-reserved seat',
};

const deepCensusDemographics: CensusDemographics = {
  totalPopulation: 595527,
  male: 316169,
  female: 279358,
  sexRatio: '875 females per 1000 males',
  scPopulationNote: 'needs_verification',
};

const keyIssuesDeep: DeepDiveKeyIssues = {
  drugCrisis: [
    'Malwa region affected',
    'Youth addiction concern',
  ],
  agrarianDistress: [
    'MSP issues',
    'Groundwater depletion',
    'Stubble management',
  ],
  developmentGaps: [
    'Healthcare for SC community',
    'Education infrastructure',
    'Employment for youth',
  ],
  casteSpecificIssues: [
    'Social justice concerns',
    'Representation issues',
    'Access to government schemes',
  ],
};

const politicalLeadership: PoliticalLeadership = {
  currentMLA: 'needs_verification',
  keyPoliticalFigures: 'needs_verification',
};

const voterOutreach: VoterOutreach = {
  voterTurnout2022: 'needs_verification',
  stateAverage: '72%',
};

const governmentSchemes: GovernmentSchemes = {
  scSpecificBeneficiaryData: 'needs_verification',
};

const congressAttackLines: CongressAttackLine[] = [
  { category: 'Drug Crisis', description: 'Uncontrolled' },
  { category: 'Farmer Distress', description: 'Unresolved' },
  { category: 'Broken Promises', description: 'Rs 1000/month' },
  { category: 'SC Community', description: 'Welfare schemes delivery' },
  { category: 'Unemployment', description: 'Youth joblessness' },
];

const intelligenceGaps: IntelligenceGap[] = [
  {
    item: '[ ] Full 2022 results',
    field: 'electionResults.year2022',
    section: 'DeepDiveElectionResults',
    priority: 'high',
  },
  {
    item: '[ ] 2017 and earlier results',
    field: 'electionResults.year2017',
    section: 'DeepDiveElectionResults',
    priority: 'high',
  },
  {
    item: '[ ] SC population exact percentage',
    field: 'casteDemographics.sc',
    section: 'CasteComposition',
    priority: 'high',
  },
  {
    item: '[ ] Local political mapping',
    field: 'politicalLeadership',
    section: 'PoliticalLeadership',
    priority: 'medium',
  },
  {
    item: '[ ] Scheme beneficiaries',
    field: 'governmentSchemes',
    section: 'GovernmentSchemes',
    priority: 'medium',
  },
];

const researchPriorities: ResearchPriority[] = [
  { priority: 1, item: 'Identify winner and margin' },
  { priority: 2, item: 'Analyze Dalit vote bank dynamics' },
  { priority: 3, item: 'Map influential families' },
];

const deepDiveSources: string[] = [
  'Grokipedia Bhadaur (https://grokipedia.com/page/bhadaur_assembly_constituency)',
  'CNBC TV18 Bhadaur (https://www.cnbctv18.com/politics/bhadaur-election-result-2022-live-how-to-check-bhadaur-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12663742.htm)',
];

const deepDive: Ac102BhadaurDeepResearch = {
  metadata: deepResearchMetadata,
  constituencyOverview: 'Bhadaur is a Scheduled Caste (SC) reserved assembly constituency located in Barnala district of Punjab. The seat is designated for candidates from the Scheduled Caste community. In 2022, the election results were closely watched as part of the broader Punjab assembly elections. The constituency reflects the political importance of Dalit voters in Punjab\'s electoral landscape.',
  geographicContext: deepGeographicContext,
  electionResults: deepDiveElectionResults,
  casteDemographics: casteDemographicsDeep,
  censusDemographics: deepCensusDemographics,
  electoralTrends: 'needs_verification',
  keyIssues: keyIssuesDeep,
  politicalLeadership: politicalLeadership,
  voterOutreach: voterOutreach,
  governmentSchemes: governmentSchemes,
  attackLinesForCongress: congressAttackLines,
  intelligenceGaps: intelligenceGaps,
  researchPriorities: researchPriorities,
  sources: deepDiveSources,
};

// Combined export
const ac102BhadaurScData: Ac102BhadaurScCombinedData = {
  dossier,
  deepDive,
};

// ============================================
// CONFLICT TRACKING DATA
// ============================================

/**
 * Known conflicts between source files:
 * 1. Caste Composition: Main file provides detailed breakdown (38-42% Mazhabi, 8-10% Ravidasia)
 *    Deep file marks SC population as needs_verification
 * 2. Election Results: Main file provides winner names and parties for all years
 *    Deep file marks all election data as needs_verification
 * 3. Voter Turnout: Main file estimates ~74-77%, Deep file says needs_verification
 */
const casteCompositionConflict: CasteCompositionConflict = {
  mainFileValue: '38-42% Mazhabi Sikh + 8-10% Ravidasia/Chamar = ~46-52% total SC',
  deepFileValue: 'needs_verification',
  conflictNote: 'Main file (AC102-Bhadaur-SC.md) provides detailed caste breakdown. Deep file (AC102-Bhadaur-deep.md) marks SC population as needing verification. Barnala district has significant SC population given SC-reserved seat status.',
  requiresVerification: true,
};

const electorCountConflict: ElectorCountConflict = {
  mainFileValue: '~140,000-150,000',
  deepFileValue: 'needs_verification',
  conflictNote: 'Main file estimates total electors. Deep file electoral trends marked needs_verification. Voter turnout and exact elector counts require ECI data verification.',
  requiresVerification: true,
};

// ============================================
// VERIFICATION AUDIT TRAIL
// ============================================

const verificationAudit: VerificationAudit = {
  constituencyId: 'AC102-Bhadaur-SC',
  totalFields: 75,
  verified: 25,
  needsVerification: 40,
  pending: 5,
  estimated: 5,
  highPriorityItems: [
    {
      field: '2022 Election Winner',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Main file says Labh Singh Ugoke (AAP), deep file marks as needs_verification',
    },
    {
      field: '2022 Vote Margin',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Main file says "Strong AAP victory" but no exact margin',
    },
    {
      field: '2017 Election Details',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Only winner name provided, no margin or vote share',
    },
    {
      field: '2012 Election Details',
      section: 'Electoral History',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Only winner party provided, no candidate name or margin',
    },
    {
      field: 'SC Population Exact Percentage',
      section: 'Caste Demographics',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Barnala district SC population percentage needs verification',
    },
    {
      field: 'Voter Turnout 2022',
      section: 'Electoral Analytics',
      status: 'estimated',
      priority: 'high',
      notes: 'Main file estimates ~74-77%, deep file says needs_verification',
    },
    {
      field: 'Current MLA Name',
      section: 'Political Leadership',
      status: 'needs_verification',
      priority: 'high',
      notes: 'Deep file marks as needs_verification',
    },
    {
      field: 'Polling Booths Count',
      section: 'Identity',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'SC Beneficiary Data',
      section: 'Government Schemes',
      status: 'needs_verification',
      priority: 'medium',
    },
    {
      field: 'Local Political Mapping',
      section: 'Political Leadership',
      status: 'needs_verification',
      priority: 'medium',
    },
  ],
  lastUpdated: '21 May 2026',
};

// ============================================
// DOSSIER SUMMARY FOR DASHBOARD
// ============================================

const dossierSummary: DossierSummary = {
  acNumber: 102,
  name: 'Bhadaur (SC)',
  district: 'Barnala',
  region: 'Malwa',
  currentMLA: 'Labh Singh Ugoke',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 33, // 25 verified out of 75 total = ~33%
};

// ============================================
// SWOT AS ARRAY FOR DASHBOARD
// ============================================

const swotItems: SwotItem[] = [
  // Strengths
  { category: 'strength', item: 'Congress has deep roots among Mazhabi Sikh community', priority: 1 },
  { category: 'strength', item: 'Traditional SC vote bank - won before AAP surge', priority: 2 },
  { category: 'strength', item: 'Anti-incumbency against AAP government', priority: 3 },
  // Weaknesses
  { category: 'weakness', item: 'AAP made inroads with welfarist promises', priority: 1 },
  { category: 'weakness', item: 'Labh Singh Ugoke has incumbency advantage now', priority: 2 },
  { category: 'weakness', item: '2022 loss due to wrong candidate or poor campaign', priority: 3 },
  // Opportunities
  { category: 'opportunity', item: 'SC population ~38-42% + 8-10% = winnable with right candidate', priority: 1 },
  { category: 'opportunity', item: 'High margin of AAP victory suggests voter sentiment change possible', priority: 2 },
  { category: 'opportunity', item: 'Drug crisis provides potent attack line', priority: 3 },
  // Threats
  { category: 'threat', item: 'AAP welfarist promises have resonated with SC voters', priority: 1 },
  { category: 'threat', item: 'Local AAP leader has grassroots connect', priority: 2 },
  { category: 'threat', item: 'Manual scavenging and land rights issues remain unresolved', priority: 3 },
];

// Export conflict, audit, and summary data
export {
  ac102BhadaurScData,
  casteCompositionConflict,
  electorCountConflict,
  verificationAudit,
  dossierSummary,
  swotItems,
};

export default ac102BhadaurScData;

export {
  metadata,
  dossier,
  deepDive,
  identity,
  geographicContext,
  casteComposition,
  electorateData,
  censusDemographics,
  electoralHistory,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  notes,
  dataSources,
};
