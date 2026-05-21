/**
 * AC075 - Zira Assembly Constituency
 * Data File
 *
 * Generated from:
 * - AC075-Zira.md (basic dossier)
 * - AC075-Zira-deep.md (deep research dossier)
 *
 * Document IDs: AC075-Zira / AC075-Zira-deep
 * Last Updated: 20 May 2026
 * Data Currency: As of May 2026 | Election Data: 2022
 * Verification Status: VERIFIED - Winner confirmed
 */

import type {
  AC075ZiraDossier,
  DocumentMetadata,
  ResearchMetadata,
  ConstituencyIdentity,
  ExecutiveSummary,
  GeographicContext,
  GeographicBoundaries,
  UrbanRuralComposition,
  HistoricalPattern,
  Demographics,
  DistrictDemographics,
  CasteComposition,
  KeyCommunities,
  ReligiousComposition,
  ElectoralHistory,
  ElectionResult2022,
  VoterTurnout,
  PoliticalLandscape,
  PartyPerformanceTrend,
  KeyIssues,
  PrimaryIssues,
  SecondaryIssues,
  SentimentDrivers,
  GovernanceGap,
  KeyLocalIssues,
  LocalIssue,
  PowerStructure,
  PoliticalActor,
  MediaLandscape,
  PhysicalMapping,
  BorderContext,
  SWOTAnalysis,
  CongressStrategy,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  CandidateProfile,
  SelectionCriteria,
  AttackLines,
  AttackLine,
  CongressNarrative,
  IntelligenceGaps,
  IntelligenceGap,
  Recommendations,
} from "./ac075-zira-types";

// ============================================================
// METADATA
// ============================================================

const basicDossierMetadata: DocumentMetadata = {
  dossierId: "AC075-Zira",
  topic: "Zira Assembly Constituency (AC075), Punjab",
  date: "20 May 2026",
  dataCurrency: "As of May 2026",
  sources: "Wikipedia, IndiaVotes, CEO Punjab, India Today",
  verificationStatus: "VERIFIED - Winner confirmed",
};

const deepDossierMetadata: DocumentMetadata = {
  dossierId: "AC075-Zira-deep",
  topic: "Zira Assembly Constituency (AC075), Punjab",
  tier: "2",
  date: "20 May 2026",
  dataCurrency: "As of May 2026 | Election Data: 2022",
  sources: "Web search, Wikipedia, IndiaVotes, CEO Punjab, India Today",
  verificationStatus: "VERIFIED - Winner confirmed",
};

const researchMetadata: ResearchMetadata = {
  compiledDate: "20 May 2026",
  frameworkVersion: "3.0",
};

// ============================================================
// SECTION 1: IDENTITY & GEOGRAPHIC CONTEXT
// ============================================================

const identity: ConstituencyIdentity = {
  acNumber: 75,
  officialName: "Zira",
  district: "Firozpur",
  region: "Malwa",
  category: "General",
  lokSabha: "Firozpur",
  tehsil: "Zira",
  borderStatus: "Border",
  reservation: "None (General)",
};

const executiveSummary: ExecutiveSummary = {
  overview:
    "Zira (AC075) is a General (GEN) category assembly constituency located in Firozpur district, Malwa region of Punjab. It borders Pakistan (553km border state) and falls under the Firozpur parliamentary constituency. In the 2022 elections, Aam Aadmi Party (AAP) candidate Naresh Kataria won this seat, defeating the Congress candidate. The constituency has significant border area characteristics.",
  borderSignificance: "Part of Firozpur Lok Sabha constituency with significant agricultural activity",
  currentRepresentation: "Naresh Kataria (AAP) won in 2022 defeating Congress",
  keyCharacteristic: "Border constituency with agricultural heartland",
};

const geographicContext: GeographicContext = {
  description:
    "Zira is located in northwestern Firozpur district, Malwa region. The area is characterized by significant agricultural activity and border proximity to Pakistan.",
  borderProximity: true,
  keyTowns: ["Zira"],
  agriculturalCharacter: "Agricultural heartland with canal irrigation",
};

const geographicBoundaries: GeographicBoundaries = {
  location: "Located in northwestern Firozpur district",
  borderArea: "Border area with Pakistan proximity",
};

const urbanRuralComposition: UrbanRuralComposition = {
  character: "Predominantly Rural: Agricultural villages",
  economy: ["Agriculture", "Some small industry"],
  borderCharacter: "Security concerns, cross-border issues",
};

const historicalPattern: HistoricalPattern = {
  traditionalStronghold: "Congress traditionally strong in Firozpur district",
  sadPresence: "SAD also had presence",
  aapBreakthrough: "AAP breakthrough in 2022",
  notes: "Part of Firozpur Lok Sabha constituency",
};

// ============================================================
// SECTION 2: DEMOGRAPHIC DATA
// ============================================================

const districtDemographics: DistrictDemographics = {
  scPopulation: "~32-35%",
  borderAreas: "Strategic importance",
  sexRatio: "[NEEDS VERIFICATION]",
};

const casteComposition: CasteComposition = {
  jatSikh: "Majority in rural areas",
  scheduledCaste: "~32-35%",
  obc: "~20-25%",
  upperCastes: "~25-30%",
  borderCommunities: "Rajput, Jatt, etc.",
};

const keyCommunities: KeyCommunities = {
  jatSikh: "Dominant agrarian community",
  rajput: "Significant in rural areas",
  mazhabiRamdassia: "SC population",
  punjabiMuslim: "In some areas",
  borderHindu: "Border Hindu communities",
};

const religiousComposition: ReligiousComposition = {
  sikh: "Predominantly Sikh",
  hindu: "Hindu minority",
};

const demographics: Demographics = {
  districtDemographics,
  casteComposition,
  keyCommunities,
  religiousComposition,
};

// ============================================================
// SECTION 3: ELECTORAL HISTORY
// ============================================================

const electionResult2022: ElectionResult2022 = {
  winner: "Naresh Kataria",
  party: "Aam Aadmi Party (AAP)",
  margin: "22,776 votes",
  marginValue: 22776,
  acType: "GEN",
  defeated: "Congress and other candidates",
};

const electoralHistory: ElectoralHistory = {
  year2022: electionResult2022,
  year2017: {
    winner: "[NEEDS VERIFICATION]",
    party: "[NEEDS VERIFICATION]",
  },
  year2012: {
    winner: "[NEEDS VERIFICATION]",
    party: "[NEEDS VERIFICATION]",
  },
};

const voterTurnout: VoterTurnout = {
  year2022: "[NEEDS VERIFICATION]",
  stateAverage: "62.80%",
};

const partyPerformanceTrend: PartyPerformanceTrend[] = [
  {
    year: 2022,
    aap: "W",
    inc: "2nd",
    sad: "LOST",
    notes: "AAP wave in Malwa",
  },
  {
    year: 2017,
    inc: "[W/2nd]",
    sad: "[W/2nd]",
    notes: "[NEEDS VERIFICATION]",
  },
];

const politicalLandscape: PoliticalLandscape = {
  currentMLA: "Naresh Kataria",
  currentParty: "Aam Aadmi Party",
  mlATenure: "2022-2027",
  partyPerformanceTrend,
};

// ============================================================
// SECTION 4: KEY ISSUES
// ============================================================

const primaryIssues: PrimaryIssues = {
  borderSecurity: "Proximity to Pakistan, smuggling concerns",
  drugMenace: "Border areas particularly affected by drug trafficking",
  agriculturalDistress: "MSP, stubble, groundwater",
  unemployment: "Limited jobs in border area",
};

const secondaryIssues: SecondaryIssues = {
  infrastructure: "Infrastructure development",
  healthcare: "Healthcare facilities",
  education: "Education access",
};

const keyIssues: KeyIssues = {
  primaryIssues,
  secondaryIssues,
};

const sentimentDrivers: SentimentDrivers = {
  borderSecurity: "Proximity to Pakistan",
  agriculturalDistress: "Farm distress, MSP, canal irrigation",
  drugMenace: "Severe in Malwa",
  connectivity: "Border roads, rural connectivity",
  youthEmployment: "Youth emigration",
};

// ============================================================
// SECTION 5: GOVERNANCE GAP
// ============================================================

const governanceGap: GovernanceGap = {
  currentRepresentative: "Naresh Kataria",
  currentParty: "AAP",
  electedYear: 2022,
  district: "Firozpur",
  state: "Punjab (AAP Government)",
};

// ============================================================
// SECTION 6: LOCAL ISSUES
// ============================================================

const localIssues: KeyLocalIssues = {
  issues: [
    {
      rank: 1,
      title: "Border Security",
      description: "Proximity to Pakistan",
    },
    {
      rank: 2,
      title: "Agriculture",
      description: "Farm distress, MSP, canal irrigation",
    },
    {
      rank: 3,
      title: "Drug Menace",
      description: "Severe in Malwa",
    },
    {
      rank: 4,
      title: "Migration",
      description: "Youth emigration",
    },
    {
      rank: 5,
      title: "Infrastructure",
      description: "Border roads, rural connectivity",
    },
    {
      rank: 6,
      title: "Groundwater",
      description: "Depletion near border",
    },
    {
      rank: 7,
      title: "Stubble Burning",
      description: "Environmental concern",
    },
  ],
};

// ============================================================
// SECTION 7: POWER STRUCTURE
// ============================================================

const politicalActors: PoliticalActor[] = [
  {
    name: "Naresh Kataria",
    party: "AAP",
    role: "MLA (Current)",
    status: "Current",
  },
];

const powerStructure: PowerStructure = {
  politicalActors,
  notes: "Congress traditionally strong in Firozpur district. SAD also had presence. AAP breakthrough in 2022.",
};

// ============================================================
// SECTION 8: MEDIA LANDSCAPE
// ============================================================

const mediaLandscape: MediaLandscape = {
  primaryChannels: "Punjabi vernacular press",
  socialMedia: "WhatsApp for political messaging",
};

// ============================================================
// SECTION 9: PHYSICAL MAPPING
// ============================================================

const physicalMapping: PhysicalMapping = {
  districtFeatures: "553 km border with Pakistan, 6 border districts total",
  strategicImportance: "Strategic importance",
  agriculturalHeartland: "Agricultural heartland",
  traffickingRoutes: "Drug trafficking routes",
};

const borderContext: BorderContext = {
  districtFeatures: "553 km border with Pakistan",
  borderLength: "553 km",
  borderDistricts: "6 border districts total",
  strategicImportance: "Strategic importance",
  agriculturalHeartland: "Agricultural heartland",
  traffickingRoutes: "Drug trafficking routes",
};

// ============================================================
// SECTION 10: SWOT ANALYSIS
// ============================================================

const swotAnalysis: SWOTAnalysis = {
  congressPosition: "Lost by 22,776 votes in 2022. Congress had presence historically. Challenge: Rebuilding in border Malwa.",
  strengths: [
    "Congress traditionally strong in Firozpur district",
    "Historical base exists",
    "Border and security concerns",
    "Farm distress issues",
  ],
  challenges: [
    "Significant margin to overcome (22,776 votes)",
    "AAP's welfare schemes appealed",
    "Border-specific issues",
    "Rural organization needs repair",
  ],
  opportunities: [
    "Border and security concerns rising",
    "Farm distress continues",
    "Youth migration/drug crisis",
    "AAP government perceived failures",
  ],
};

// ============================================================
// SECTION 11: CONGRESS STRATEGY
// ============================================================

const congressStrategicPosition: CongressStrategicPosition = {
  status: "Contestable",
  margin: "Lost by 22,776 votes",
  marginValue: 22776,
  historicalBase: "Congress had presence in Firozpur district",
  challenges: [
    "Significant margin to overcome",
    "AAP's welfare schemes appealed",
    "Border-specific issues",
    "Rural organization needs repair",
  ],
  opportunities: [
    "Border and security concerns",
    "Farm distress",
    "Youth migration/drug crisis",
    "AAP government failures",
  ],
};

const candidateProfile: CandidateProfile = {
  caste: "Jat Sikh or Rajput with rural base",
  background: "Farmer leader OR border region representative",
  profile: "Strong local connect",
  priority: "Understanding of border issues",
};

const selectionCriteria: SelectionCriteria = {
  criteria: [
    "Border region recognition",
    "Farmer leader credentials",
    "Village-level network",
    "Youth outreach capability",
  ],
};

const recommendedCandidateProfile: RecommendedCandidateProfile = {
  idealCandidate: candidateProfile,
  selectionCriteria,
};

const attackLine: AttackLine = {
  vulnerability: "Border Security",
  description: "Neglected by AAP government",
};

const attackLines: AttackLines = {
  vulnerabilities: [
    {
      vulnerability: "Border Security",
      description: "Neglected by AAP government",
    },
    {
      vulnerability: "Farm Crisis",
      description: "MSP, procurement failures",
    },
    {
      vulnerability: "Drug Menace",
      description: "Youth emigration/destruction",
    },
    {
      vulnerability: "Migration",
      description: "Youth leaving Punjab",
    },
    {
      vulnerability: "Broken Promises",
      description: "Development claims",
    },
  ],
  congressNarrative: {
    narrative: [
      "Border Punjab needs Congress's attention",
      "AAP ignores border security concerns",
      "Farmers and youth: Congress's priority vs AAP's neglect",
    ],
  },
};

const congressStrategy: CongressStrategy = {
  currentStatus: congressStrategicPosition,
  recommendedCandidateProfile,
  attackLines,
};

// ============================================================
// SECTION 12: INTELLIGENCE GAPS
// ============================================================

const intelligenceGaps: IntelligenceGaps = {
  missingData: [
    {
      item: "Vote shares and margin",
    },
    {
      item: "2017, 2012 results",
    },
    {
      item: "Caste demographics",
    },
    {
      item: "Local influential families",
    },
    {
      item: "Border-specific issues",
    },
  ],
};

const recommendations: Recommendations = {
  congressStrategy:
    "Strong local with border area connect, Focus: Border security, drug trafficking, farmers",
  focusAreas: ["Border security", "Drug trafficking", "Farmers"],
  message: "Governance vs AAP's unfulfilled promises",
};

// ============================================================
// SOURCES
// ============================================================

const sources: string[] = [
  "Wikipedia",
  "IndiaVotes",
  "CEO Punjab",
  "India Today",
  "Web search",
  "Census data",
];

// ============================================================
// MAIN EXPORT
// ============================================================

export const ac075ZiraDossier: AC075ZiraDossier = {
  metadata: {
    basicDossier: basicDossierMetadata,
    deepDossier: deepDossierMetadata,
    researchMetadata,
  },
  identity,
  executiveSummary,
  geographicContext,
  geographicBoundaries,
  urbanRuralComposition,
  historicalPattern,
  demographics,
  electoralHistory,
  voterTurnout,
  politicalLandscape,
  keyIssues,
  sentimentDrivers,
  governanceGap,
  localIssues,
  powerStructure,
  mediaLandscape,
  physicalMapping,
  borderContext,
  swotAnalysis,
  congressStrategy,
  intelligenceGaps,
  recommendations,
  sources,
};
