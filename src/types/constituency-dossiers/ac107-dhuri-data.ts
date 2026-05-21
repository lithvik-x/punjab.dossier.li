/**
 * AC107-Dhuri Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC107-Dhuri.md, AC107-Dhuri-deep.md
 */

import type {
  Ac107DhuriDossier,
  MainDossierData,
  DeepResearchData,
  ConstituencyIdentity,
  ElectionResult,
  CasteComposition,
  ElectorateData,
  LocalIssue,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLine,
  ConstituencyNotes,
  ResearchMetadata,
  DeepDiveExecutiveSummary,
  DeepDiveConstituencyProfile,
  DeepDive2022Results,
  DistrictDemographics,
  DeepDiveCasteDemographics,
  DeepDiveElectoralTrends,
  DeepDiveKeyIssues,
  DeepDivePoliticalLeadership,
  DeepDiveVoterOutreach,
  DeepDiveGovernmentSchemes,
  DeepDiveIntelligenceGaps,
  DeepDiveRecommendations,
  VoteCountConflict,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
  CasteDemographics,
  GeographicContext,
} from './ac107-dhuri-types';

// ============================================
// MAIN DOSSIER DATA (from AC107-Dhuri.md)
// ============================================

const dhuriIdentity: ConstituencyIdentity = {
  acNumber: 107,
  name: 'Dhuri',
  nameClean: 'Dhuri',
  district: 'Sangrur',
  region: 'Malwa',
  category: 'General',
  dataCurrency: 'As of 19 May 2026',
};

const dhuriGeographicContext: GeographicContext = {
  description: 'Dhuri is located in Sangrur district in the Malwa region. The area has an agricultural economy with a mix of rural and small urban population.',
  economy: 'Agricultural with industrial potential (Bhushan Power)',
  populationType: 'Mix of rural and small urban',
};

const dhuriExecutiveSummary = `Dhuri is a prestigious general-category seat because it elected Bhagwant Mann (AAP) as Chief Minister in 2022 with a margin of 58,206 votes. Mann contested from Dhuri after vacated his Sangrur Lok Sabha seat. This is now a high-profile CM seat. Congress faces an extremely difficult challenge here but local body results and anti-incumbency signals are being monitored.`;

const dhuriElectionResults2022: ElectionResult = {
  year: 2022,
  winner: 'Bhagwant Mann',
  party: 'AAP',
  margin: '58,206 votes',
  marginVotes: 58206,
  runnerUp: 'Dalvir Singh',
  runnerUpParty: 'Congress',
  note: 'CM election; high profile',
};

const dhuriElectionResults2017: ElectionResult = {
  year: 2017,
  winner: 'AAP',
  party: 'Aam Aadmi Party',
};

const dhuriElectionResults2012: ElectionResult = {
  year: 2012,
  winner: 'Congress',
  party: 'Indian National Congress',
};

const dhuriCasteComposition: CasteComposition = {
  jatSikh: '32-36%',
  obc: '18-22%',
  sc: '22-26%',
  hinduUpperCaste: '10-14%',
  others: '5-7%',
};

const dhuriElectorateData: ElectorateData = {
  totalElectors: '~155,000-165,000',
  voterTurnout2022: '~78-80%',
};

const dhuriLocalIssues: LocalIssue[] = [
  {
    issue: 'Drug menace',
    description: 'Despite CM\'s promises, continues',
  },
  {
    issue: 'Governance',
    description: 'High expectations from CM\'s home seat',
  },
  {
    issue: 'Agricultural distress',
    description: 'Farmers demands MSP, stubble',
  },
  {
    issue: 'Unemployment',
    description: 'Youth restless',
  },
  {
    issue: 'Healthcare',
    description: 'Hospital upgrades expected',
  },
];

const dhuriCongressStrategicPosition: CongressStrategicPosition = {
  currentPosition: 'Extremely difficult - CM\'s seat',
  historicalChallenge: 'AAP won with massive margin',
  opportunity: 'Anti-incumbency on CM specifically',
  strengths: [
    'CM\'s personal seat = personal accountability',
    'Broken promises on drugs resonate',
    'High expectations created, not met',
  ],
  weaknesses: [
    'Massive AAP wave still strong',
    'CM has resources and visibility',
    'Local Congress organization weak',
  ],
};

const dhuriCandidateProfile: CandidateProfile = {
  caste: 'Jat Sikh (preferred)',
  profile: 'Bold, vocal critic of CM',
  attributes: ['Farmer leader', 'Anti-drugs crusader'],
  background: 'Strong local presence; may need to be volunteer-based campaign',
};

const dhuriAttackLines: AttackLine[] = [
  { line: '58,206 votes for drugs continue - Bhagwant Mann failed' },
  { line: 'CM\'s own constituency, no hospital built' },
  { line: 'Promise: End drugs in 6 months - 5 years, nothing' },
  { line: 'Punjab bleeding - youth leaving, families destroyed' },
  { line: 'CM too busy with Delhi politics, Punjab ignored' },
];

const dhuriNotes: ConstituencyNotes = {
  cmPersonalConstituency: 'CM\'s personal constituency - highest visibility seat',
  antiIncumbency: 'Anti-incumbency specifically against CM must be amplified',
  industrialPotential: 'Dhuri has industrial potential (Bhushan Power, etc.) - use for jobs argument',
  symbolicVictory: 'Winning here would be massive symbolic victory for Congress',
};

// ============================================
// DEEP RESEARCH DATA (from AC107-Dhuri-deep.md)
// ============================================

const deepResearchMetadata: ResearchMetadata = {
  microTaskId: 'AC107-Dhuri',
  topic: 'Dhuri Assembly Constituency - Deep Research',
  tier: 2,
  date: '20 May 2026',
  agent: 'Research-Orchestrator',
  sourcesConsulted: ['proneta.in', 'cnbctv18.com', 'moneycontrol.com', 'wikipedia.org'],
  verificationStatus: 'verified',
  dataCurrency: 'As of May 2026 (2022 election data is most recent)',
};

const deepDiveExecutiveSummary: DeepDiveExecutiveSummary = {
  summary: 'Dhuri is a significant assembly constituency in Punjab as it was the winning seat of Bhagwant Mann, who became the Chief Minister of Punjab after AAP\'s 2022 victory. The constituency is part of Sangrur district in Malwa region. Mann won with an overwhelming margin of approximately 45,000 votes, defeating Congress leader Dalvir Singh Goldy. This seat had been held by Congress previously.',
  keyContext: [
    'Mann was AAP\'s Chief Ministerial candidate',
    'Seat was previously held by Congress',
    'Massive margin reflects anti-incumbency against Congress',
  ],
};

const deepDiveConstituencyProfile: DeepDiveConstituencyProfile = {
  acNumber: 107,
  district: 'Sangrur',
  region: 'Malwa',
  type: 'needs_verification',
  geographicContext: 'Dhuri is located in Sangrur district in the Malwa region. The area has an agricultural economy with a mix of rural and small urban population.',
};

const deepDive2022Results: DeepDive2022Results = {
  winner: 'Bhagwant Mann',
  party: 'Aam Aadmi Party',
  votes: 82592,
  votesAlternative: 65858,
  status: 'Won, became Chief Minister of Punjab',
  runnerUp: 'Dalvir Singh Goldy',
  runnerUpVotes: 20767,
  margin: '~45,000 votes',
  marginVotes: 45000,
  keyContext: ['Per Moneycontrol - votes vary by source (82,592 or 65,858)'],
};

const sangrurDistrictDemographics: DistrictDemographics = {
  totalPopulation: 1655169,
  male: 878029,
  female: 777140,
  rural: '68.8%',
  urban: '31.2%',
};

const deepDiveCasteDemographics: DeepDiveCasteDemographics = {
  communityComposition: 'needs_verification',
  districtLevelDemographics: sangrurDistrictDemographics,
};

const deepDiveElectoralTrends: DeepDiveElectoralTrends = {
  aapWon2022: true,
  cmSeat: true,
  margin: '~45,000 votes',
  historicalPattern: 'Congress held this seat previously',
  historicalPatternStatus: 'needs_verification',
};

const deepDiveKeyIssues: DeepDiveKeyIssues = {
  drugCrisis: ['Malwa region affected', 'Youth addiction concern'],
  agrarianDistress: ['MSP issues', 'Groundwater depletion', 'Stubble management'],
  developmentGaps: ['Healthcare', 'Education', 'Employment'],
};

const deepDivePoliticalLeadership: DeepDivePoliticalLeadership = {
  currentMla: 'Bhagwant Mann',
  party: 'AAP',
  position: 'Chief Minister of Punjab',
  keyPoliticalFigures: ['Dalvir Singh Goldy (Congress)'],
  keyPoliticalFiguresStatus: 'needs_verification',
};

const deepDiveVoterOutreach: DeepDiveVoterOutreach = {
  turnout2022: 'needs_verification',
  stateAverage: '72%',
};

const deepDiveGovernmentSchemes: DeepDiveGovernmentSchemes = {
  note: 'needs_verification',
};

const deepDiveIntelligenceGaps: DeepDiveIntelligenceGaps = {
  gaps: [
    'Precise 2022 vote shares',
    '2017 result',
    'Demographics breakdown',
    'Local political mapping',
    'Scheme beneficiaries',
  ],
  requiresVerification: [
    'Precise 2022 vote shares',
    '2017 result',
    'Demographics breakdown',
    'Local political mapping',
    'Scheme beneficiaries',
  ],
};

const deepDiveRecommendations: DeepDiveRecommendations = {
  researchPriorities: [
    'Analyze Congress decline in CM\'s constituency',
    'Assess governance delivery in CM\'s home seat',
    'Map Jat Sikh and Dalit voting patterns',
  ],
};

const deepResearchSources = [
  'Proneta Dhuri (https://proneta.in/Dhuri_assembly_constituency_Punjab-10)',
  'Moneycontrol Dhuri (https://www.moneycontrol.com/news/politics/assembly-election-results-bhagwant-mann-wins-dhuri-seat-by-45000-votes-set-to-be-aaps-first-punjab-cm-8215231.html)',
  'CNBC TV18 Dhuri (https://www.cnbctv18.com/politics/dhuri-election-result-2022-live-how-to-check-dhuri-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12656862.htm)',
];

// ============================================
// COMPLETE DEEP RESEARCH DATA OBJECT
// ============================================

const dhuriDeepResearch: DeepResearchData = {
  metadata: deepResearchMetadata,
  executiveSummary: deepDiveExecutiveSummary,
  constituencyProfile: deepDiveConstituencyProfile,
  electionResults2022: deepDive2022Results,
  casteDemographics: deepDiveCasteDemographics,
  electoralTrends: deepDiveElectoralTrends,
  keyIssuesAndGrievances: deepDiveKeyIssues,
  politicalLeadership: deepDivePoliticalLeadership,
  voterOutreach: deepDiveVoterOutreach,
  governmentSchemes: deepDiveGovernmentSchemes,
  intelligenceGaps: deepDiveIntelligenceGaps,
  recommendations: deepDiveRecommendations,
  sources: deepResearchSources,
};

// ============================================
// COMPLETE MAIN DOSSIER DATA OBJECT
// ============================================

const dhuriMainDossier: MainDossierData = {
  identity: dhuriIdentity,
  executiveSummary: dhuriExecutiveSummary,
  electionResults: {
    year2022: dhuriElectionResults2022,
    year2017: dhuriElectionResults2017,
    year2012: dhuriElectionResults2012,
  },
  casteComposition: dhuriCasteComposition,
  electorateData: dhuriElectorateData,
  localIssues: dhuriLocalIssues,
  congressStrategicPosition: dhuriCongressStrategicPosition,
  recommendedCandidateProfile: dhuriCandidateProfile,
  attackLinesAgainstAAP: dhuriAttackLines,
  notes: dhuriNotes,
};

// ============================================
// COMPLETE COMBINED DOSSIER
// ============================================

export const ac107DhuriDossier: Ac107DhuriDossier = {
  metadata: {
    acNumber: 107,
    name: 'Dhuri',
    district: 'Sangrur',
    region: 'Malwa',
    date: '20 May 2026',
    researchMethod: 'Multi-source verification',
  },
  mainDossier: dhuriMainDossier,
  deepResearch: dhuriDeepResearch,
};

// ============================================
// DATA CONFLICTS TRACKING
// ============================================

export const voteCountConflict: VoteCountConflict = {
  deepFileVotes: 82592,
  deepFileVotesAlternative: 65858,
  runnerUpVotesDeep: 20767,
  marginMainFile: '58,206 votes',
  marginDeepFile: '~45,000 votes',
  conflictNote: 'Main file (AC107-Dhuri.md) reports margin as 58,206 votes from 2022 election. Deep file (AC107-Dhuri-deep.md) reports margin as ~45,000 votes. Vote counts vary by source: 82,592 or 65,858 for Mann, 20,767 for Goldy per Moneycontrol. Deep file margin (~45,000) is marked as approximate.',
};

// ============================================
// VERIFICATION AUDIT
// ============================================

const verificationItems: VerificationItem[] = [
  { field: 'margin', section: '2022 Election Results', status: 'needs_verification', priority: 'high', notes: 'Conflict: 58,206 (main) vs ~45,000 (deep)' },
  { field: 'voteCounts', section: '2022 Election Results', status: 'needs_verification', priority: 'high', notes: 'Two different vote totals reported: 82,592 vs 65,858' },
  { field: '2017Result', section: 'Electoral History', status: 'needs_verification', priority: 'high' },
  { field: 'constituencyType', section: 'Constituency Profile', status: 'needs_verification', priority: 'medium' },
  { field: 'communityComposition', section: 'Demographics', status: 'needs_verification', priority: 'medium' },
  { field: 'voterTurnout2022', section: 'Voter Outreach', status: 'needs_verification', priority: 'medium' },
  { field: 'governmentSchemes', section: 'Government Schemes', status: 'needs_verification', priority: 'low' },
  { field: 'keyPoliticalFigures', section: 'Political Leadership', status: 'needs_verification', priority: 'medium' },
];

export const verificationAudit: VerificationAudit = {
  constituencyId: 'AC107-Dhuri',
  totalFields: 24,
  verified: 12,
  needsVerification: 8,
  pending: 4,
  estimated: 0,
  highPriorityItems: verificationItems.filter(v => v.priority === 'high'),
  lastUpdated: '20 May 2026',
};

// ============================================
// DOSSIER SUMMARY FOR DASHBOARD
// ============================================

export const dossierSummary: DossierSummary = {
  acNumber: 107,
  name: 'Dhuri',
  district: 'Sangrur',
  region: 'Malwa',
  currentMLA: 'Bhagwant Mann',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 50,
};

// ============================================
// CASTE DEMOGRAPHICS FOR CHARTS
// ============================================

export const casteDemographicsChart: CasteDemographics[] = [
  { category: 'Jat Sikh', percentage: 34 },
  { category: 'SC', percentage: 24 },
  { category: 'OBC', percentage: 20 },
  { category: 'Hindu Upper Caste', percentage: 12 },
  { category: 'Others', percentage: 6 },
];

// ============================================
// EXPORTS
// ============================================

export {
  dhuriIdentity,
  dhuriGeographicContext,
  dhuriExecutiveSummary,
  dhuriElectionResults2022,
  dhuriElectionResults2017,
  dhuriElectionResults2012,
  dhuriCasteComposition,
  dhuriElectorateData,
  dhuriLocalIssues,
  dhuriCongressStrategicPosition,
  dhuriCandidateProfile,
  dhuriAttackLines,
  dhuriNotes,
  dhuriMainDossier,
  dhuriDeepResearch,
};

export default ac107DhuriDossier;
