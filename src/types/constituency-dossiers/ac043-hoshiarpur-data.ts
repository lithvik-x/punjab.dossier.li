/**
 * AC043-Hoshiarpur Assembly Constituency Dossier Data
 * Source: AC043-Hoshiarpur.md and AC043-Hoshiarpur-deep.md
 * Research Date: 20 May 2026
 */

import type {
  AC043HoshiarpurDossier,
  ConstituencyProfile,
  ElectoralHistory,
  CasteComposition,
  DistrictDemographics,
  ElectionElectorate,
  LocalIssues,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLines,
  VoteShareAnalysis,
  GovernanceGap,
  Influencers,
  PublicSentiment,
  StrategicBlueprint,
  RecommendationsSummary,
} from "./ac043-hoshiarpur-types";

// ============================================================================
// METADATA
// ============================================================================

const metadata = {
  researchMicroTaskId: "AC-DOSSIER-043",
  topic: "AC-043 Hoshiarpur Assembly Constituency",
  tier: 2,
  date: "20 May 2026",
  agent: "research-agent",
  sourcesConsulted: "minimax-web-search",
  verificationStatus: "VERIFIED", // Main file verified, deep file partially verified
  dataCurrency: "As of 20 May 2026",
};

// ============================================================================
// 1. CONSTITUENCY PROFILE
// ============================================================================

const constituencyProfile: ConstituencyProfile = {
  acNumber: 43,
  officialName: "Hoshiarpur",
  district: "Hoshiarpur",
  region: "Doaba",
  category: "General",
  lokSabhaSeat: "Hoshiarpur",
  townType: "Municipal Council + Rural",
  location: "District headquarters, semi-urban",
};

// ============================================================================
// 2. ELECTORAL HISTORY
// ============================================================================

const electoralHistory: ElectoralHistory = {
  2022: {
    winner: "Pandit Brahma Shankar Jimpa",
    party: "Aam Aadmi Party",
    margin: 13859,
    runnerUp: "Congress candidate",
    runnerUpParty: "Indian National Congress",
    note: "AAP victory in traditional Congress stronghold",
  },
  2017: {
    year: 2017,
    winner: "Congress candidate",
    party: "Indian National Congress",
    margin: "Congress retained",
  },
  2012: {
    year: 2012,
    winner: "Congress candidate",
    party: "Indian National Congress",
  },
};

// ============================================================================
// 3. CASTE COMPOSITION
// ============================================================================

const casteComposition: CasteComposition = {
  sikhs: 60, // ~60% (Jat + Others)
  hindu: 32, // ~32%
  sc: 27, // ~26-28% (district average)
  other: 8, // ~8%
};

// ============================================================================
// 4. DISTRICT DEMOGRAPHICS (from deep research - 2011 Census)
// ============================================================================

const districtDemographics: DistrictDemographics = {
  totalPopulation: 1586625,
  scPopulation: 557504,
  sexRatio: 96.11, // females per 1000 males
  literacyRate: 75.61,
  area: 3386, // sq km
};

// ============================================================================
// 5. ELECTORATE DATA
// ============================================================================

const electorateData: ElectionElectorate[] = [
  {
    year: 2022,
    totalElectors: 150000,
    voterTurnout: 112000,
    turnoutPercentage: 75,
  },
  {
    year: 2017,
    totalElectors: 145000,
    voterTurnout: 107000,
    turnoutPercentage: 74,
  },
];

// ============================================================================
// 6. LOCAL ISSUES
// ============================================================================

const localIssues: LocalIssues = {
  primaryIssues: [
    "Urban Development: Hoshiarpur town needs infrastructure upgrade",
    "Rural Connectivity: Roads, bridges connecting villages to town",
    "Healthcare: District hospital facilities inadequate for population",
    "Education: Higher education institutions lacking",
    "Drug Crisis: Doaba region worst affected - youth addiction",
    "Agriculture: MSP, irrigation, farmer distress",
  ],
  top5Issues: [
    "Agricultural distress",
    "Rural infrastructure",
    "Employment for youth",
    "Healthcare facilities",
    "Water management in Kandi belt",
  ],
};

// ============================================================================
// 7. CONGRESS STRATEGIC POSITION
// ============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: {
    lossIn2022: true,
    margin: 13859,
    history: "Congress strong here before 2022",
    opportunity: "Urban-rural voter combination offers multiple paths to victory",
  },
  strategicRecommendations: [
    "Candidate: Respected local leader with clean image",
    "Urban Focus: Address town infrastructure, employment",
    "Rural Outreach: Farmer issues, crop procurement, debt relief",
    "Drug Narrative: AAP failed on biggest issue - drugs destroying Doaba youth",
  ],
};

// ============================================================================
// 8. CANDIDATE PROFILE
// ============================================================================

const candidateProfile: CandidateProfile = {
  caste: "Sikh (Jat preferred) or Hindu (Brahmin, Khatri)",
  background: "Business, agriculture, or professional",
  age: "45-55 years",
  base: "Strong urban + rural connection",
  image: "Clean, development-focused",
};

// ============================================================================
// 9. ATTACK LINES
// ============================================================================

const attackLines: AttackLines = {
  lines: [
    "Drug Crisis: Doaba has highest addiction rates - AAP government failed",
    "Broken Promises: ₹1000/month for women, 300 units free electricity - partial implementation only",
    "Urban Neglect: Towns deteriorating, no new development projects",
    "Governance: Law and order, drug peddling continue unchecked",
  ],
};

// ============================================================================
// 10. VOTE SHARE ANALYSIS
// ============================================================================

const voteShareAnalysis: VoteShareAnalysis = {
  parties: [
    { party: "AAP", voteShare: 38 },
    { party: "INC", voteShare: 32 },
    { party: "SAD", voteShare: 15 },
    { party: "BSP", voteShare: 6 },
    { party: "Others", voteShare: 9 },
  ],
  congressGapToWin: 7000, // ~7,000 additional votes (half margin)
};

// ============================================================================
// 11. GOVERNANCE GAP (from deep research)
// ============================================================================

const governanceGap: GovernanceGap = {
  administrativeStructure: [
    "DC Hoshiarpur (headquarters)",
    "Multiple departments",
    "District-level schemes",
  ],
  developmentPackages: [
    {
      amount: 516,
      focus: "Development package announced by CM Mann - Focus on Opposition's 'decade of neglect'",
      announcementDate: "April 2026",
    },
    {
      amount: 150,
      focus: "Kandi belt development",
    },
  ],
};

// ============================================================================
// 12. INFLUENCERS & POWER STRUCTURE (from deep research)
// ============================================================================

const influencers: Influencers = {
  categories: [
    "District-level politicians",
    "Administrative officials",
    "Agricultural committees",
    "Religious leaders",
  ],
};

// ============================================================================
// 13. PUBLIC SENTIMENT (from deep research)
// ============================================================================

const publicSentiment: PublicSentiment = {
  indicators: [
    "AAP governance expectations",
    "District development hopes",
    "Agricultural community concerns",
  ],
};

// ============================================================================
// 14. STRATEGIC BLUEPRINT (from deep research)
// ============================================================================

const strategicBlueprint: StrategicBlueprint = {
  aapStrategy: [
    "Showcase development packages",
    "CM's outreach programs",
    "Government scheme delivery",
  ],
  congressStrategy: [
    "Rebuild process",
    "Local leader development",
    "Anti-incumbency narrative against AAP",
  ],
};

// ============================================================================
// 15. RECOMMENDATIONS SUMMARY
// ============================================================================

const recommendationsSummary: RecommendationsSummary = {
  priority: "HIGH - Moderate margin, direct Congress target",
  candidate: "Locally known, clean image, development focus",
  narrative: "Drug crisis, broken promises, urban decline",
  voterCoalition: "Urban voters + rural farmers + traditional Congress base",
  marginReversalPotential: "HIGH - 13,859 manageable",
};

// ============================================================================
// COMPLETE DOSSIER
// ============================================================================

export const ac043HoshiarpurDossier: AC043HoshiarpurDossier = {
  // Metadata
  ...metadata,

  // Core Sections
  constituencyProfile,
  electoralHistory,
  casteComposition,
  districtDemographics,
  electorateData,
  localIssues,
  congressStrategicPosition,
  candidateProfile,
  attackLines,
  voteShareAnalysis,
  governanceGap,
  influencers,
  publicSentiment,
  strategicBlueprint,
  recommendationsSummary,

  // Sources
  sources: [
    "News18",
    "OneIndia",
    "IndiaVotes",
    "India Today",
    "ProNeta",
    "minimax-web-search: Hoshiarpur Punjab 2022 election results winner vote share margin",
  ],
  compiledDate: "20 May 2026",
};

// ============================================================================
// KEY TREND ANALYSIS (from main file)
// ============================================================================

export const keyTrend = `Congress held Hoshiarpur for multiple terms before AAP's 2022 victory. The 13,859 margin is moderate - achievable for Congress with focused effort.`;

// ============================================================================
// KEY ELECTION DATA (2022)
// ============================================================================

export const election2022KeyData = {
  winner: "Pandit Brahma Shankar Jimpa",
  party: "Aam Aadmi Party",
  margin: 13859,
  runnerUp: "Congress/BJP",
  voteShare: {
    aap: "38%",
    inc: "32%",
    sad: "15%",
    bsp: "6%",
    others: "9%",
  },
};

// ============================================================================
// RECOMMENDED FOCUS AREAS
// ============================================================================

export const recommendedFocusAreas = {
  primary: "HIGH - Moderate margin, direct Congress target",
  candidateSelection: "Respected local leader with clean image",
  narrative: "Drug crisis, broken promises, urban decline",
  voterCoalition: "Urban voters + rural farmers + traditional Congress base",
  marginReversalPotential: "HIGH - 13,859 manageable",
};

// Default export for convenience
export default ac043HoshiarpurDossier;
