/**
 * AC082-Balluana-SC Constituency Data
 * Generated through research enhancement pipeline
 * Source files: AC082-Balluana-SC.md, AC082-Balluana-deep.md
 */

import type {
  AC082BalluanaSCTypes,
  MainDossierData,
  DeepResearchData,
  ConstituencyHeader,
  ConstituencyIdentity,
  GeographicProfile,
  ElectionResults,
  Demographics,
  KeyLocalIssue,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLinesAgainstAAP,
} from './ac082-balluana-sc-types';

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

const header: ConstituencyHeader = {
  acNumber: 82,
  name: 'Balluana (SC)',
  district: 'Muktsar',
  region: 'Malwa',
  category: 'SC',
  date: '20 May 2026',
};

const constituencyOverview = 'Balluana (AC082) is a Scheduled Caste (SC) reserved assembly constituency in Muktsar district of Punjab Malwa region. The constituency witnessed an AAP victory in 2022 with a significant margin. Key issues include agricultural distress, unemployment, and social welfare concerns of the SC community.';

const electionResults: ElectionResults = {
  results2022: {
    winner: 'Amandeep Singh Goldy Musafir',
    party: 'AAP',
    voteShare: '~48% (estimated)',
    margin: '19,173 votes',
    runnerUp: 'Nathu Ram',
    runnerUpParty: 'INC',
    totalElectors: '1,84,434',
    turnout: '78.06%',
    source: 'IndiaVotes',
  },
  results2017: {
    winner: 'Nathu Ram',
    party: 'INC',
    voteShare: '45.96%',
    margin: '15,449 votes',
    runnerUp: 'Parkash Singh Bhatti',
    runnerUpParty: 'SAD',
    status: 'verified',
  },
  results2012: {
    winner: 'Gurtej Singh',
    party: 'SAD',
    margin: '~8,000 votes (estimated)',
    status: 'estimated',
  },
};

const casteComposition = {
  sc: '~55-60%',
  jatSikh: '~20-25%',
  hindu: '~10-15% (Brahmin, Baniya, Rajput)',
  obc: '~5-10% (Saini, Kamboj)',
  scSubCommunities: ['Mazhabi', 'Ramdasia', 'Ravidassia'],
  note: 'SC dominant community in this reserved constituency',
};

const keyLocalIssues: KeyLocalIssue[] = [
  {
    rank: 1,
    title: 'Drug Addiction',
    description: 'Major concern in rural SC communities, affecting youth disproportionately',
  },
  {
    rank: 2,
    title: 'Unemployment',
    description: 'Limited job opportunities for rural youth, broken AAP promise of jobs',
  },
  {
    rank: 3,
    title: 'Land Issues',
    description: 'Small farmer distress, land rights issues unresolved',
  },
  {
    rank: 4,
    title: 'Drinking Water',
    description: 'Rural water supply problems in SC-majority villages',
  },
  {
    rank: 5,
    title: 'Health Infrastructure',
    description: 'Poor rural healthcare facilities, SC welfare neglected',
  },
];

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: {
    position2022: 'Lost badly - Nathu Ram (INC) defeated by AAP margin of 19,173 votes',
    historicalBase: 'Won in 2017 (Nathu Ram), historically competitive in SC seats',
    challenge: 'AAP has deep penetration in SC communities, need strong SC candidate with grassroots connect',
  },
  keyChallenges: [
    'AAP won convincingly in 2022',
    'SC vote typically splits between Congress and AAP',
    'Need strong local candidate with community connect',
    'Anti-incumbency against sitting MLA',
  ],
  opportunities: [
    'Consider alliance with BSP for SC vote consolidation',
    'Project viable SC candidate with Dalit rights background',
    'Can leverage SC community grievances against AAP',
  ],
};

const recommendedCandidateProfile: RecommendedCandidateProfile = {
  ideal: {
    caste: 'SC community (Mazhabi, Ramdasia, or Ravidassia)',
    background: 'Dalit rights activist, Panchayat experience, social work',
    profile: 'SC community leader with grassroots presence, accessible to rural poor',
    keyTraits: ['Known for social work', 'Strong community connect', 'Panchayat leadership'],
    targetVoter: 'SC communities (55-60%), rural voters, small farmers',
  },
};

const attackLinesAgainstAAP: AttackLinesAgainstAAP = {
  vulnerabilities: [
    'SC communities still face discrimination despite AAP government',
    'Employment promise for youth unfulfilled',
    'Drug addiction destroying SC youth - crisis unchecked',
    'Health and education infrastructure in villages neglected',
    'Land rights issues unresolved',
    'Broken promise of Rs 1000/month for women',
  ],
  narratives: [
    'AAP failed on jobs, welfare, and governance',
    '5 years = broken promises to SC community',
    'Drug crisis continues unchecked under AAP',
  ],
};

const mainDossierNotes = [
  'District: Main file says Fazilka, Deep file says Muktsar - CONFLICT (using Muktsar from deep file as more detailed)',
  'Elector count: Main file says ~152,000, Deep file says 1,84,434 - CONFLICT (using 1,84,434 from deep file as specific)',
  'SC percentage: Main file says 32-35%, Deep file says 55-60% - CONFLICT (using 55-60% as this is SC reserved seat)',
  '2012 and 2017 data partially verified - needs ECI verification',
];

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

const deepResearchMetadata = {
  dossierId: 'AC082',
  topic: 'Balluana Assembly Constituency - Deep Research',
  tier: 2,
  date: '20 May 2026',
  dataCurrency: 'As of May 2026',
  sourcesConsulted: ['Web searches on Punjab 2022 election results', 'demographics', 'issues'],
  verificationStatus: 'PARTIALLY VERIFIED - requires local verification',
};

const deepResearchExecutiveSummary = {
  overview: 'Balluana (AC082) is a Scheduled Caste (SC) reserved assembly constituency in Muktsar district of Punjab Malwa region. The constituency witnessed an AAP victory in 2022 with a significant margin.',
  electionResult2022: 'Amandeep Singh Goldy Musafir (AAP) won with 19,173 vote margin over Nathu Ram (INC). Turnout was 78.06%.',
  constituencyCharacter: 'Predominantly rural, agricultural base, SC majority (55-60%), with significant Jat Sikh population (20-25%).',
};

const deepResearchConstituencyProfile = {
  basicDetails: {
    assemblyConstituencyNo: 82,
    district: 'Muktsar (Sri Muktsar Sahib)',
    region: 'Malwa (South-West Punjab)',
    category: 'Scheduled Caste (SC)',
    parliamentaryConstituency: 'Firozpur Lok Sabha',
  },
  geographicBoundaries: {
    location: 'Malwa region of Punjab, part of Muktsar district',
    borderAreas: 'Adjacent to Fazilka district',
  },
  urbanRuralComposition: {
    predominantlyRural: '~85-90% rural voters',
    scPopulation: '~55-60% SC population',
    economy: 'Agricultural base, small farmer distress',
  },
};

const deepResearchDemographics: Demographics = {
  casteComposition: {
    sc: '~55-60% (dominant community)',
    jatSikh: '~20-25%',
    hindu: '~10-15%',
    obc: '~5-10%',
    scSubCommunities: ['Mazhabi', 'Ramdasia', 'Ravidassia'],
    note: 'SC dominant community in this reserved constituency',
  },
  districtDemographics: {
    totalPopulation: '~1,95,000 (approximation)',
    sexRatio: 'needs_verification',
    literacy: '~71% (Muktsar district, Census 2011)',
    scPopulation: '~32-35% of district',
  },
  voterProfile: {
    rural: '~85-90%',
    urban: '~10-15%',
    youngVoters: '~30-35%',
    voterTurnout: '78.06% (2022, above state average of 72%)',
  },
};

const deepResearchKeyIssues = {
  primaryIssues: {
    issues: [
      { rank: 1, title: 'Social Welfare', description: 'Employment, education, and health for SC community' },
      { rank: 2, title: 'Agricultural Distress', description: 'Small farmer issues, MSP, stubble management' },
      { rank: 3, title: 'Drug Crisis', description: 'Youth addiction affecting all communities' },
      { rank: 4, title: 'Unemployment', description: 'Limited jobs, NRI emigration' },
      { rank: 5, title: 'Land Issues', description: 'Small landholdings, consolidation problems' },
    ],
  },
  secondaryIssues: {
    issues: [
      'Drinking water supply in rural areas',
      'Rural healthcare infrastructure',
      'Education scholarships for SC students',
      'Caste dignity and social justice',
    ],
  },
};

const deepResearchPoliticalLandscape = {
  currentMla: {
    name: 'Amandeep Singh Goldy Musafir',
    party: 'AAP',
  },
  partyPerformanceTrend: [
    { year: 2022, aap: 'Won', inc: 'Lost (19,173 margin)', sad: 'Lost deposit', notes: 'AAP breakthrough' },
    { year: 2017, aap: 'Minor presence', inc: 'Won (Nathu Ram)', sad: 'Lost (15,449 margin)', notes: 'Congress strong' },
    { year: 2012, aap: 'Minimal', inc: 'Lost', sad: 'Won (Gurtej Singh)', notes: 'SAD incumbent' },
  ],
};

const deepResearchElectoralHistory = [
  { year: 2022, winner: 'Amandeep Singh Musafir', party: 'AAP', margin: '19,173', status: 'verified' as const },
  { year: 2017, winner: 'Nathu Ram', party: 'INC', margin: '15,449', status: 'needs_verification' as const },
  { year: 2012, winner: 'Gurtej Singh', party: 'SAD', margin: '~8,000', status: 'needs_verification' as const },
];

const deepResearchCompetitiveLandscape2027 = {
  likelyContenders: [
    { party: 'AAP', status: 'Incumbent, strong SC community penetration' },
    { party: 'INC', status: 'Needs strong SC candidate to challenge' },
    { party: 'BSP', status: 'Potential alliance partner for SC vote consolidation' },
  ],
  strategicConsiderations: [
    'Anti-incumbency against AAP after 5 years',
    'SC vote consolidation critical',
    'Need candidate with grassroots connect',
  ],
};

const deepResearchIntelligenceGaps = {
  criticalMissingData: [
    '2017 election results detailed data for Balluana',
    'Detailed SC community composition (sub-caste breakdown)',
    'Booth-wise 2022 results',
    'Local influential families',
    'Any intra-party issues in AAP',
  ],
};

const deepResearchRecommendations = {
  congressStrategy: {
    candidate: 'Strong SC candidate with Dalit rights background and grassroots presence',
    focus: ['Unemployment', 'Drug crisis', 'Social welfare', 'Land rights'],
    outreach: 'Dalit leadership, youth employment, small farmers',
  },
};

// ============================================================================
// COMPLETE DATA STRUCTURES
// ============================================================================

const mainDossierData: MainDossierData = {
  header,
  constituencyOverview,
  electionResults,
  casteComposition,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  notes: mainDossierNotes,
};

const deepResearchData: DeepResearchData = {
  metadata: deepResearchMetadata,
  executiveSummary: deepResearchExecutiveSummary,
  constituencyProfile: deepResearchConstituencyProfile,
  demographics: deepResearchDemographics,
  keyIssues: deepResearchKeyIssues,
  politicalLandscape: deepResearchPoliticalLandscape,
  electoralHistory: deepResearchElectoralHistory,
  competitiveLandscape2027: deepResearchCompetitiveLandscape2027,
  intelligenceGaps: deepResearchIntelligenceGaps,
  recommendations: deepResearchRecommendations,
};

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

const identity: ConstituencyIdentity = {
  acNumber: 82,
  name: 'Balluana (SC)',
  district: 'Muktsar',
  region: 'Malwa',
  type: 'SC',
  parliamentarySegment: 'Firozpur Lok Sabha constituency',
  area: 'Balluana and surrounding SC-majority villages in Malwa region',
  date: '20 May 2026',
};

const geographicProfile: GeographicProfile = {
  location: 'Malwa region of South-West Punjab',
  district: 'Muktsar (Sri Muktsar Sahib)',
  region: 'Malwa',
  character: 'Predominantly rural, agricultural',
  lokSabhaSeat: 'Firozpur',
};

const completeDossier = {
  header,
  identity,
  geographicProfile,
  electionResults,
  demographics: deepResearchDemographics,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
  deepResearchData,
  notes: mainDossierNotes,
};

const ac082BalluanaSCData: AC082BalluanaSCTypes = {
  mainDossier: mainDossierData,
  deepResearch: deepResearchData,
  completeDossier,
};

export default ac082BalluanaSCData;
export {
  header,
  mainDossierData,
  deepResearchData,
  completeDossier,
  identity,
  geographicProfile,
  constituencyOverview,
  electionResults,
  casteComposition,
  keyLocalIssues,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLinesAgainstAAP,
};
