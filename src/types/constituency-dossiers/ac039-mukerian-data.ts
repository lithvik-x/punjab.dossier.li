/**
 * AC039-Mukerian Assembly Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Sources: AC039-Mukerian.md, AC039-Mukerian-deep.md
 */

import type {
  AC039MukerianFinal,
  Ac039MukerianTypes,
  ConstituencyBasicInfo,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  CasteComposition,
  VoterTurnout,
  LocalIssue,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLine,
  DemographicData,
  SentimentIndicator,
  GovernanceGap,
  Influencer,
  StrategicBlueprint,
  PartyStrategy,
  KeyLocalIssue,
  CandidateResult,
  MarginAnalysis,
  WinnerAnalysis,
  ConstituencyVerdict,
} from './ac039-mukerian-types';

// Cycle 1: Basic Information
const basicInfo: ConstituencyBasicInfo = {
  acNumber: 39,
  officialName: 'Mukerian',
  district: 'Hoshiarpur',
  region: 'Doaba',
  lokSabha: 'Hoshiarpur',
  reservation: 'None (General)',
  totalElectors2022: 202924,
};

// Cycle 2: Election Results
const electionResults2022: ElectionResult2022 = {
  winner: 'Jangi Lal Mahajan',
  party: 'Bharatiya Janata Party',
  voteShare: '~36%',
  margin: 2691,
  marginDescription: 'TIGHT RACE',
  runnerUp: 'Not specified',
};

const electionResults2017: ElectionResult2017 = {
  winner: 'Rajnish Kumar Babbi',
  party: 'Indian National Congress',
  note: 'DECEASED 2019, bypoll won by Indu Bala (Congress)',
};

const electionResults2012: ElectionResult2012 = {
  winner: 'Rajnish Kumar Babbi',
  party: 'Indian National Congress',
};

// Cycle 3: Caste Composition
const casteComposition: CasteComposition[] = [
  { category: 'Hindu (Brahmin/Rajput)', percentage: '~35-40%' },
  { category: 'Jat Sikh', percentage: '~25-30%' },
  { category: 'SC (Mazhabi/Ramdasia)', percentage: '~20-25%' },
  { category: 'OBC', percentage: '~10-12%' },
  { category: 'Muslim', percentage: '~2-3%' },
];

// Cycle 4: Voter Turnout
const voterTurnout: VoterTurnout[] = [
  { year: 2022, percentage: '~68-70%' },
  { year: 2017, percentage: '~74-76%' },
];

// Cycle 5: Key Local Issues
const keyLocalIssues: LocalIssue[] = [
  { issue: 'Drug crisis', priority: 1, isMajor: true, source: '2022 elections' },
  { issue: 'Illegal mining', priority: 2, isMajor: true, source: 'Tribune reported' },
  { issue: 'Border security', priority: 3 },
  { issue: 'Agriculture (canal water, MSP)', priority: 4 },
  { issue: 'Infrastructure (roads, rural connectivity)', priority: 5 },
  // Deep research issues
  { issue: 'Border security and smuggling', priority: 1 },
  { issue: 'Agricultural distress', priority: 2 },
  { issue: 'Water table depletion', priority: 3 },
  { issue: 'Youth unemployment', priority: 4 },
  { issue: 'Road infrastructure', priority: 5 },
];

// Congress Strategic Position
const congressStrategicPosition: CongressStrategicPosition = {
  status: 'CHALLENGING',
  bjpMargin: 2691,
  historicalContext:
    'Congress had MLA Rajnish Kumar Babbi (died 2019), Indu Bala won 2019 bypoll for Congress',
  currentScenario: 'BJP (Jangi Lal Mahajan) won 2022 by only 2,691 votes - very contestable',
};

// Candidate Profile
const recommendedCandidateProfile: CandidateProfile = {
  caste: 'Hindu Rajput/Brahmin or Jat Sikh',
  profile: 'Local leader, development focus, clean image',
  keyQualification: 'Must have credibility on illegal mining and drug issues',
  mustHave: 'Address local issues directly',
};

// Attack Lines Against BJP
const attackLinesAgainstBJP: AttackLine[] = [
  { line: 'Jangi Lal Mahajan: What did he do in 4 years?' },
  { line: 'Illegal mining: Still rampant despite BJP government' },
  { line: 'Drug crisis: Mukerian vulnerable, no action taken' },
  { line: 'Broken promises: Development funds misused' },
  { line: 'We need local representative, not party loyalist' },
];

// Deep Research Data
const demographicData: DemographicData = {
  districtPopulation: 1586625,
  censusYear: 2011,
  sexRatio: '96.11% females per 1000 males',
  literacyRate: '75.61%',
  scPopulation: 'Significant rural presence',
};

const electorateDescription: string =
  'Semi-rural border area, Agricultural communities, Business class in town';

const electoralHistory2022: CandidateResult[] = [
  { candidate: 'Jangi Lal Mahajan', party: 'BJP', votes: 0, margin: 2691 },
  { candidate: '[Runner-up]', party: 'AAP/Congress', votes: 0, margin: -2691 },
];

const historicalPattern: string =
  '2022: BJP won against AAP, AAP had strong challenge, Congress also in contention';

const publicSentiment: SentimentIndicator[] = [
  { indicator: 'Border security concerns' },
  { indicator: 'Agricultural water issues' },
  { indicator: 'Rural infrastructure' },
  { indicator: 'Youth outmigration' },
];

const governanceGaps: GovernanceGap[] = [
  { area: 'Border infrastructure' },
  { area: 'Agricultural marketing' },
  { area: 'Rural road network' },
];

const influencers: Influencer[] = [
  { type: 'Border area leaders' },
  { type: 'Agricultural committees' },
  { type: 'Cooperative societies' },
  { type: 'Trading community' },
];

// Strategic Blueprint
const bjpStrategy: PartyStrategy[] = [
  { party: 'BJP', strategy: 'Border security narrative' },
  { party: 'BJP', strategy: 'Hindu card (Mukerian has significant Hindu population)' },
  { party: 'BJP', strategy: 'Central schemes showcase' },
];

const aapStrategy: PartyStrategy[] = [
  { party: 'AAP', strategy: 'Governance delivery claims' },
  { party: 'AAP', strategy: 'Anti-BJP positioning' },
];

const congressStrategy: PartyStrategy[] = [{ party: 'Congress', strategy: 'Traditional vote base' }];

const strategicBlueprint: StrategicBlueprint = {
  bjpStrategy,
  aapStrategy,
  congressStrategy,
};

// Top 5 Issues Priority Order
const top5IssuesPriority: KeyLocalIssue[] = [
  { issue: 'Border security and smuggling', priority: 1 },
  { issue: 'Agricultural distress', priority: 2 },
  { issue: 'Water table depletion', priority: 3 },
  { issue: 'Youth unemployment', priority: 4 },
  { issue: 'Road infrastructure', priority: 5 },
];

// Sources
const sources: string[] = [
  'Wikipedia',
  'Oneindia',
  'ECI data',
  'Tribune reports',
  'minimax-web-search: "Mukerian Punjab 2022 election results winner vote share margin"',
];

// Assembly of full data structure
const ac039MukerianData: Ac039MukerianTypes = {
  basicInfo,
  electionResults2022,
  electionResults2017,
  electionResults2012,
  casteComposition,
  voterTurnout,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstBJP,
  // Deep research
  demographicData,
  electorateDescription,
  electoralHistory2022,
  historicalPattern,
  publicSentiment,
  governanceGaps,
  influencers,
  strategicBlueprint,
  top5IssuesPriority,
  sources,
};

// Analysis components
const marginAnalysis: MarginAnalysis = {
  margin: 2691,
  status: 'TIGHT_RACE',
  description: 'Only 2,691 margin - very contestable seat',
};

const winnerAnalysis: WinnerAnalysis = {
  winner: 'Jangi Lal Mahajan',
  party: 'Bharatiya Janata Party',
  voteShare: '~36%',
  isIncumbent: true,
};

const verdict: ConstituencyVerdict = {
  isSwingSeat: true,
  marginStatus: 'TIGHT_RACE',
  previousWinner: 'Indu Bala (Congress, 2019 bypoll)',
  currentWinner: 'Jangi Lal Mahajan (BJP, 2022)',
  recommendation:
    'Congress must focus heavily - only 2,691 margin makes this very contestable. Recommended candidate: Hindu Rajput/Brahmin or Jat Sikh, local leader with credibility on illegal mining and drug issues.',
};

// Final export
export const ac039MukerianFinal: AC039MukerianFinal = {
  metadata: {
    cycleVersion: 6,
    generatedDate: '2026-05-21',
    sourcesCount: sources.length,
    verificationStatus: 'PARTIALLY_VERIFIED',
  },
  data: ac039MukerianData,
  analysis: {
    marginAnalysis,
    winnerAnalysis,
    verdict,
  },
};

// Default export for convenience
export default ac039MukerianFinal;
