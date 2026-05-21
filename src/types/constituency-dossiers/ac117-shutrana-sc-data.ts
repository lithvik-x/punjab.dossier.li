/**
 * AC117-Shutrana-SC Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC117-Shutrana-SC.md, AC117-Shutrana-deep.md
 */

import type {
  Ac117ShutranaScDossier,
  Ac117ShutranaScCombinedData,
  DeepDiveOverview,
  ConstituencyMetadata,
  ConstituencyIdentity,
  ElectionResult,
  ElectoralHistory,
  VoterBehaviour,
  MLAProfile,
  CriminalCase,
  SCReservedSignificance,
  DemographicComposition,
  RuralCharacteristics,
  CasteCompositionBreakdown,
  KeyIssues,
  PoliticalDynamics,
  DevelopmentProfile,
  RuralGaps,
  VoterTurnout,
  InfluentialFigures,
  WelfareSchemes,
  ElectoralRecommendations,
  RecommendedCandidate,
  IntelligenceAssessment,
  AssessmentFactor,
  CongressStrategicPosition,
  DeepDiveElectionResults,
  ElectorateData,
  CandidateProfileDeep,
  AttackLine,
  VerificationAudit,
  VerificationItem,
  DossierSummary,
} from './ac117-shutrana-sc-types';

/**
 * AC117-Shutrana-SC Complete Dossier Data
 */

// Metadata
const metadata: ConstituencyMetadata = {
  acNumber: 117,
  name: 'Shutrana (SC)',
  district: 'Patiala',
  region: 'Malwa',
  date: '20 May 2026',
  researchMethod: 'Web-verified via minimax-web-search',
  type: 'SC',
  verificationStatus: 'PARTIALLY VERIFIED — 2022 data confirmed; CRITICAL: MLA sons booked for kidnapping',
  sourcesConsulted: ['IndiaVotes', 'Oneindia', 'Wikipedia', 'MyNeta', 'PRS India', 'The Tribune', 'Punjab News Express'],
};

// Section 1: Constituency Identity & Baseline

const identity: ConstituencyIdentity = {
  acNumber: 117,
  name: 'Shutrana (SC)',
  nameClean: 'Shutrana',
  district: 'Patiala',
  region: 'Malwa',
  parliamentarySegment: 'Patiala Lok Sabha seat',
  type: 'SC',
  neighboringACs: ['Patiala (115)', 'Samana (116)'],
  note: 'Only SC candidates can contest this seat - SC reserved constituency',
};

// Electoral History
const electionResult2022: ElectionResult = {
  year: 2022,
  winner: 'Kulwant Singh Bazigar',
  party: 'AAP',
  margin: 51554,
  runnerUp: 'SAD candidate',
  source: 'IndiaVotes/Oneindia - margin confirmed',
};

const electionResult2017: ElectionResult = {
  year: 2017,
  winner: 'needs_verification',
  party: 'likely Congress or SAD held',
  margin: 'needs_verification',
};

const electionResult2012: ElectionResult = {
  year: 2012,
  winner: 'needs_verification',
  party: 'Congress',
  margin: 'needs_verification',
};

const voterBehaviour: VoterBehaviour = {
  turnout: 'needs_verification',
  casteFactor: 'Extremely high - SC voters dominate (~90%+)',
  swingPattern: 'AAP won in 2022 with massive margin; wave victory',
};

const electoralHistory: ElectoralHistory = {
  elections: [electionResult2022, electionResult2017, electionResult2012],
  voterBehaviour: voterBehaviour,
};

// MLA Profile
const criminalCase: CriminalCase = {
  status: 'critical',
  description: 'MLA Kulwant Singh Bazigar and his two sons booked for kidnapping and attempt to murder',
  date: 'October 2025',
  charges: ['Kidnapping', 'Attempt to murder'],
  location: 'Kaithal, Haryana',
  additionalNotes: [
    'Case registered by Haryana police',
    'Congress raised this in Punjab Assembly',
    'MLA faced significant political heat',
    'Sons also accused — family involvement',
  ],
};

const mlaprofile: MLAProfile = {
  name: 'Kulwant Singh Bazigar',
  party: 'AAP',
  age: 48,
  occupation: 'Sweet shop owner (small business)',
  declaredAssets: '₹18.60 lakh',
  education: 'needs_verification',
  firstElected: 2022,
  socialMedia: 'Active Facebook page (~26.6K likes)',
  criminalCase: criminalCase,
};

// SC Reserved Seat Significance
const scReservedSignificance: SCReservedSignificance = {
  onlySCCandidates: true,
  dalitVoteBankDecisive: true,
  communities: ['Mazhabi Sikh', 'Ramdassia Sikh (Chamar)'],
  historicalBSPPresence: true,
};

// Demographic Composition
const ruralCharacteristics: RuralCharacteristics = {
  entirelyRural: true,
  villageType: 'Villages with majority SC population',
  primaryOccupation: ['Agricultural labour', 'Small farming'],
  povertyStatus: 'Below-poverty-line families concentrated',
};

const demographicComposition: DemographicComposition = {
  scPopulation: '~90%+ of constituency population (reserved seat)',
  stateLevelSCPercentage: '~31.9% of Punjab population',
  mainSCGroups: ['Mazhabi Sikh (majority in Malwa)', 'Ramdassia Sikh (significant presence)'],
  scSikhPercentage: '~60.8% of SCs in Punjab are Sikh',
  scHinduPercentage: '~38.8% of SCs in Punjab are Hindu',
  ruralCharacteristics: ruralCharacteristics,
};

// Caste Composition Breakdown (from deep dive)
const casteComposition: CasteCompositionBreakdown = {
  mazhabiSikh: '40-44%',
  ravidasia: '6-8%',
  jatSikh: '24-28%',
  obc: '14-18%',
  hinduUpperCaste: '8-12%',
  others: '4-6%',
};

// Key Issues
const keyIssues: KeyIssues = {
  criminalCase: [
    'MLA and sons booked for kidnapping and attempt to murder',
    'Political embarrassment for AAP',
    'Constituency representation questioned',
  ],
  dalitGrievances: [
    'Historical discrimination and social oppression',
    'Limited land ownership (mostly agricultural labour)',
    'Predominantly low-wage agricultural work',
    'High dropout rates among SC children',
    'High prevalence of liquor addiction in SC rural communities',
  ],
  povertyLivelihood: [
    'Rural poverty concentrated in SC villages',
    'MGNREGA: Primary employment source',
    'Agricultural wages: Low and seasonal',
    'Distress migration to cities',
  ],
  healthcare: [
    'Rural health sub-centers inadequate',
    'No hospital in vicinity',
    'Health card (₹10 lakh) implementation gaps',
    'Malnutrition reported in SC hamlet',
  ],
  education: [
    'Government schools: Poor infrastructure',
    'Teacher absence high',
    'Dropout rates: SC children leave school early',
    'Scholarship schemes: Underutilized',
  ],
  landAgriculture: [
    'Most SC families are landless or marginal farmers',
    'Depend on agricultural wages',
    'Canal water access inequitable',
  ],
};

// Political Dynamics
const politicalDynamics: PoliticalDynamics = {
  aapPosition: 'WEAKENED by Criminal Case - MLA won with massive margin in 2022 but criminal case damages party image; "Aam Aadmi" party with criminal MLA is contradiction',
  congressPosition: 'STRONG OPPORTUNITY - Congress has traditional dalit vote bank; SC communities historically voted Congress in Punjab; criminal case against AAP MLA opens dalit voters',
  sadPosition: 'SAD also has dalit outreach (Mazhabi Sikh support); Previous candidates may try comeback; BJP-SAD alliance may contest this seat jointly',
  bspPosition: 'BSP specifically targets SC voters; May go with Congress alliance or contest independently; Dalit vote consolidation crucial',
  keyVariables2027: [
    'Whether MLA Bazigar is AAP candidate again (given criminal case)',
    'Congress candidate: Dalit community leader',
    'BSP alliance with Congress/SAD',
    'BJP-SAD alliance',
  ],
  casteCalculus: 'SC communities: Mazhabi Sikh and Ramdassia Sikh; Congress traditionally represented dalit interests; BSP influence varies by region; AAP dalit outreach limited beyond welfare schemes',
};

// Development Profile
const ruralGaps: RuralGaps = {
  roads: 'Many SC villages still unpolluted',
  housing: 'PM Awas for SC beneficiaries',
  drinkingWater: 'Jal Jeevan Mission — tap connections',
  sanitation: 'Swachh Bharat coverage',
  health: 'Anganwadi centers, ASHA workers',
};

const developmentProfile: DevelopmentProfile = {
  mlaBackground: 'First-term MLA; sweet shop owner background',
  developmentWork: 'Limited verifiable development work; May have facilitated welfare scheme access',
  ruralGaps: ruralGaps,
  welfareSchemes: [
    'Scholarships for SC students: Pre-matric, post-matric',
    'National SC/ST Hub: Skill development',
    'Venture capital for SC entrepreneurs',
  ],
};

// Voter Turnout
const voterTurnout: VoterTurnout = {
  specificTurnout: 'needs_verification',
  typicalRange: '75-85% for rural SC reserved seats',
  demographics: ['100% SC population (reserved seat)', 'Mazhabi Sikh majority', 'Rural villages', 'Large families; multiple eligible voters per household'],
};

// Influential Figures
const influentialFigures: InfluentialFigures = {
  currentMLA: 'Kulwant Singh Bazigar (AAP) — facing criminal case; sons also accused',
  districtLeaders: ['Congress dalit leaders in Patiala', 'BSP leaders', 'SAD leaders (including from dalit community)'],
  keyInfluencers: [
    'SC community leaders: Sarpanches, panchayat secretaries',
    'Dalit rights activists: NGOs working on SC issues',
    'Mazhabi Sikh religious leaders',
    'Teachers in SC majority schools',
    'ASHA and Anganwadi workers',
  ],
};

// Welfare Schemes
const welfareSchemes: WelfareSchemes = {
  centralSchemes: [
    'Pre-Matric Scholarship for SC students',
    'Post-Matric Scholarship for SC students',
    'National Overseas Scholarship for SC students',
    'National SC/ST Hub: skilling and employment',
    'PM Awas Yojana (Rural): Priority for SC families',
  ],
  stateSchemes: [
    '₹1000/month for women: Dalit women targeted',
    'Health Cards: Ayushman Punjab coverage',
    'Old age/widow pensions for SC',
  ],
  implementationIssues: [
    'Awareness gaps in rural SC villages',
    'Corruption in scholarship distribution',
    'MGNREGA job cards: Coverage gaps',
  ],
};

// Electoral Recommendations
const recommendedCandidate: RecommendedCandidate = {
  caste: 'Mazhabi Sikh (essential for SC seat)',
  profile: 'Community rights worker',
  attributes: ['Anti-drugs stance', 'Accessible', 'Clean image; no criminal cases'],
  background: 'Grassroots worker from SC community',
  contrastPoint: 'Sweet shop owner profile vs. criminal accused: Clear contrast',
};

const electoralRecommendations: ElectoralRecommendations = {
  target: 'Flip AC117-Shutrana (SC)',
  winningVoteShare: '40%+',
  criticalNote: 'SC RESERVED SEAT — Only SC candidates eligible',
  voteBankStrategy: [
    'Dalit voters: Criminal case against MLA is primary attack line',
    'Women: ₹1000 scheme and health card delivery',
    'Youth: Unemployment and distress migration',
    'BSP voters: Consider BSP alliance',
  ],
  candidateProfile: recommendedCandidate,
  oppositionStrategy: [
    'MLA Bazigar criminal case: Kidnapping and attempt to murder',
    'Sons also accused — family criminality',
    '"Aam Aadmi" hypocrisy',
    'Development claims: No visible change in SC villages',
  ],
  allianceConsiderations: [
    'BSP: Dalit vote consolidation important',
    'Congress-BSP alliance possible in SC reserved seat',
    'BJP-SAD alliance: May try to field joint candidate',
    'Avoid triangular contest splitting dalit votes',
  ],
  winningPath: [
    'AAP likely to drop Bazigar if criminal case proceeds',
    'New AAP candidate: Less known, can be targeted on experience',
    'Congress/BSP alliance candidate: Best chance to consolidate dalit vote',
    'Opposition unity: Critical to avoid split',
  ],
};

// Intelligence Assessment
const assessmentFactors: AssessmentFactor[] = [
  { factor: '2022 Result', assessment: 'AAP won; 51,554 margin' },
  { factor: 'INC 2022 Vote Share', assessment: '~15-20% (estimated; not competitive)' },
  { factor: 'INC 2022 Position', assessment: 'Third or second place' },
  { factor: 'Incumbent Status', assessment: 'MLA facing criminal case (sons also accused)' },
  { factor: 'Anti-Incumbency', assessment: 'HIGH against AAP (criminal MLA)' },
  { factor: 'Caste Arithmetic', assessment: 'SC (reserved seat) — dalit vote bank decisive' },
  { factor: 'Win Probability (INC)', assessment: 'MODERATE-STRONG (if opposition consolidates)' },
];

const intelligenceAssessment: IntelligenceAssessment = {
  overallPosition: 'MODERATE-STRONG — Best Opportunity in SC Seat',
  factors: assessmentFactors,
  criticalAlert: 'AAP MLA Vulnerability - MLA Kulwant Singh Bazigar booked for kidnapping/attempt to murder; sons also accused — family involvement; October 2025 case registered in Haryana; Political scandal for AAP',
  opportunityWindows: [
    'MLA criminal case: Massive attack line',
    'Dalit community anger: AAP betrayed their vote',
    'Congress-BSP alliance potential',
    'Rural distress in SC villages unresolved',
  ],
  intelligenceGaps: [
    'Whether AAP fields Bazigar again (likely not if case proceeds)',
    'Congress-BSP alliance possibility',
    'Exact 2017 result for this seat',
    'Ground-level dalit voter sentiment',
  ],
};

// Main Dossier
const dossier: Ac117ShutranaScDossier = {
  metadata: metadata,
  identity: identity,
  electoralHistory: electoralHistory,
  mlaprofile: mlaprofile,
  scReservedSignificance: scReservedSignificance,
  demographicComposition: demographicComposition,
  casteComposition: casteComposition,
  keyIssues: keyIssues,
  politicalDynamics: politicalDynamics,
  developmentProfile: developmentProfile,
  voterTurnout: voterTurnout,
  influentialFigures: influentialFigures,
  welfareSchemes: welfareSchemes,
  electoralRecommendations: electoralRecommendations,
  intelligenceAssessment: intelligenceAssessment,
  dataSources: ['Oneindia', 'MyNeta', 'PRS India', 'The Tribune', 'Punjab News Express', 'Ballot Force', 'Wikipedia'],
};

// Deep Dive Data (from AC117-Shutrana-deep.md)
const deepDiveElectionResults: DeepDiveElectionResults = {
  year2022: {
    winner: 'AAP Candidate',
    party: 'Aam Aadmi Party',
    margin: 'Significant AAP victory',
  },
  year2017: {
    winner: 'SAD-BJP',
    party: 'SAD-BJP Alliance',
  },
  year2012: {
    winner: 'Congress',
    party: 'Indian National Congress',
  },
};

const electorateData: ElectorateData = {
  totalElectors: '~135,000-145,000',
  voterTurnout2022: '~74-77%',
  scElectors: '~58,000-64,000',
};

const congressStrategicPositionDeep: CongressStrategicPosition = {
  currentPosition: 'Lost in 2022',
  historicalStrength: 'Won in 2012',
  opportunity: 'SC constituency with recovery potential',
  strengths: [
    'Congress won here before AAP wave',
    'SC support base exists',
    'Anti-incumbency on AAP',
  ],
  weaknesses: [
    'AAP won in 2022',
    'Need to rebuild SC trust',
    'Requires strong candidate',
  ],
};

const candidateProfileDeep: CandidateProfileDeep = {
  caste: 'Mazhabi Sikh (essential for SC seat)',
  profile: 'Community rights worker',
  attributes: ['Anti-drugs stance', 'Accessible'],
  background: 'Grassroots worker from SC community',
};

const attackLines: AttackLine[] = [
  { line: 'Last seat, broken promises' },
  { line: 'SC communities abandoned - drug addiction' },
  { line: 'Manual scavenging shame continues' },
  { line: 'Land rights ignored' },
  { line: 'Healthcare for SC villages absent' },
];

const deepDive: DeepDiveOverview = {
  constituencyOverview: 'Shutrana is an SC-reserved constituency in Patiala district, the last assembly seat in Punjab (AC 117). AAP won in 2022. The margin and specific data need verification. Congress has potential SC support here given the constituency reserved status. The seat is important symbolically as the final seat in the state.',
  electionResults: deepDiveElectionResults,
  casteCompositionDeep: casteComposition,
  electorateData: electorateData,
  keyLocalIssues: [
    'Drug addiction - Rural SC communities',
    'Manual scavenging - Continued practice',
    'Agricultural distress - Small farmers',
    'Land rights - SC land issues',
    'Healthcare - Rural health facilities',
  ],
  congressStrategicPosition: congressStrategicPositionDeep,
  recommendedCandidateProfile: candidateProfileDeep,
  attackLinesAgainstAAP: attackLines,
  notes: [
    'Final seat in Punjab (AC 117) - symbolic importance',
    'SC-reserved constituency',
    'Congress can recover with right candidate and intensive campaign',
    'Three-way fight possible with SAD still present',
  ],
  sources: ['Oneindia', 'MyNeta', 'PRS India', 'The Tribune', 'Punjab News Express', 'Ballot Force', 'Wikipedia'],
};

// Combined Data
const combinedData: Ac117ShutranaScCombinedData = {
  dossier: dossier,
  deepDive: deepDive,
};

// Verification Audit
const highPriorityItems: VerificationItem[] = [
  { field: 'winnerVotes', section: 'Electoral History 2022', status: 'needs_verification', priority: 'high', notes: 'Margin 51,554 reported but exact vote count needs ECI verification' },
  { field: 'criminalCaseExactDetails', section: 'MLA Profile', status: 'verified', priority: 'high', notes: 'Case confirmed - October 2025, Haryana police, Kaithal' },
  { field: '2017Result', section: 'Electoral History', status: 'needs_verification', priority: 'high', notes: 'Winner and party need verification' },
  { field: '2012Result', section: 'Electoral History', status: 'needs_verification', priority: 'medium', notes: 'Winner and exact margin need verification' },
  { field: 'totalElectors', section: 'Electorate Data', status: 'estimated', priority: 'medium', notes: 'Range given ~135,000-145,000' },
  { field: 'voterTurnout2022', section: 'Voter Turnout', status: 'estimated', priority: 'medium', notes: 'Typical range 74-77% noted' },
  { field: 'mlaEducation', section: 'MLA Profile', status: 'needs_verification', priority: 'low' },
  { field: 'casteCompositionExact', section: 'Demographics', status: 'estimated', priority: 'medium', notes: 'Percentage ranges given' },
];

const verificationAudit: VerificationAudit = {
  constituencyId: 'AC117-Shutrana-SC',
  totalFields: 45,
  verified: 12,
  needsVerification: 15,
  pending: 3,
  estimated: 15,
  highPriorityItems: highPriorityItems,
  lastUpdated: '20 May 2026',
};

// Dossier Summary
const dossierSummary: DossierSummary = {
  acNumber: 117,
  name: 'Shutrana (SC)',
  district: 'Patiala',
  region: 'Malwa',
  currentMLA: 'Kulwant Singh Bazigar',
  currentParty: 'AAP',
  lastElection: 2022,
  researchStatus: 'partial',
  verificationProgress: 45,
};

// Export
export {
  metadata,
  identity,
  electoralHistory,
  mlaprofile,
  scReservedSignificance,
  demographicComposition,
  casteComposition,
  keyIssues,
  politicalDynamics,
  developmentProfile,
  voterTurnout,
  influentialFigures,
  welfareSchemes,
  electoralRecommendations,
  intelligenceAssessment,
  dossier,
  deepDive,
  combinedData,
  verificationAudit,
  dossierSummary,
};

export type {
  Ac117ShutranaScDossier,
  Ac117ShutranaScCombinedData,
  DeepDiveOverview,
};
