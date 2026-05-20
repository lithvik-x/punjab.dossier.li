// @ts-nocheck
// Religious Minorities Demographics Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/religious-minorities.md
// Research Date: 19 May 2026

import type {
  ReligiousMinoritiesData,
  ReligiousMinorityPopulation,
  DistrictMuslimPopulation,
  MuslimDenominationalBreakdown,
  MuslimKeyInstitution,
  ChristianDenominationalBreakdown,
  DalitChristianReservationIssue,
  BuddhistCommunity,
  JainCommunity,
  ReligiousMinoritiesStrategicImplications,
  ReligiousMinorityDataPoint,
  DataGap,
} from "@/types/religious-minorities-types";

// ==========================================
// OVERVIEW
// ==========================================

const religiousMinorityPopulations: ReligiousMinorityPopulation[] = [
  { religion: "muslim", population2011: 535489, sharePercent: 1.93 },
  { religion: "christian", population2011: 348098, sharePercent: 1.26 },
  { religion: "buddhist", population2011: 33237, sharePercent: 0.12 },
  { religion: "jain", population2011: 45040, sharePercent: 0.16 },
];

// ==========================================
// MUSLIM COMMUNITY DATA
// ==========================================

const districtMuslimPopulation: DistrictMuslimPopulation[] = [
  { district: "Sangrur (incl. Malerkotla)", muslimPopulation: 179116, percentOfDistrict: 10.82 },
  { district: "Ludhiana", muslimPopulation: 77713, percentOfDistrict: 2.22 },
  { district: "Patiala", muslimPopulation: 40043, percentOfDistrict: 2.11 },
  { district: "SAS Nagar (Mohali)", muslimPopulation: 29488, percentOfDistrict: 2.96 },
  { district: "Jalandhar", muslimPopulation: 30233, percentOfDistrict: 1.38 },
  { district: "Rupnagar", muslimPopulation: 14492, percentOfDistrict: 2.12 },
  { district: "Pathankot", muslimPopulation: 14317, percentOfDistrict: 2.12 },
  { district: "Bathinda", muslimPopulation: 16299, percentOfDistrict: 1.17 },
  { district: "Barnala", muslimPopulation: 13100, percentOfDistrict: 2.2 },
  { district: "Fatehgarh Sahib", muslimPopulation: 16808, percentOfDistrict: 2.8 },
  { district: "Hoshiarpur", muslimPopulation: 23089, percentOfDistrict: 1.46 },
  { district: "Amritsar", muslimPopulation: 12502, percentOfDistrict: 0.5 },
  { district: "Gurdaspur", muslimPopulation: 13350, percentOfDistrict: 0.82 },
  { district: "Mansa", muslimPopulation: 10375, percentOfDistrict: 1.35 },
  { district: "Moga", muslimPopulation: 9388, percentOfDistrict: 0.94 },
  { district: "Kapurthala", muslimPopulation: 10190, percentOfDistrict: 1.25 },
  { district: "SBS Nagar", muslimPopulation: 6829, percentOfDistrict: 1.12 },
  { district: "Muktsar", muslimPopulation: 4333, percentOfDistrict: 0.48 },
  { district: "Faridkot", muslimPopulation: 3125, percentOfDistrict: 0.51 },
  { district: "Firozpur", muslimPopulation: 3150, percentOfDistrict: 0.38 },
  { district: "Tarn Taran", muslimPopulation: 3855, percentOfDistrict: 0.34 },
  { district: "Fazilka", muslimPopulation: 3694, percentOfDistrict: 0.31 },
];

const muslimDenominationalBreakdown: MuslimDenominationalBreakdown[] = [
  {
    denomination: "Sunni",
    description: "Majority of Punjabi Muslims, especially in Malerkotla and among migrant laborers",
    populationStatus: "verified",
  },
  {
    denomination: "Ahmadiyya",
    description: "Concentrated in Qadian (Gurdaspur district); headquarters of the Ahmadiyya Muslim Community",
    location: "Qadian, Gurdaspur district",
    populationStatus: "NOT_FOUND",
  },
  {
    denomination: "Shia",
    description: "Small presence, primarily in urban centers",
    populationStatus: "NOT_FOUND",
  },
];

const muslimKeyInstitutions: MuslimKeyInstitution[] = [
  {
    name: "Moorish Mosque",
    type: "Mosque",
    location: "Kapurthala",
    description: "Architectural heritage site, one of the most notable mosques in Punjab",
  },
];

const muslimCommunity = {
  population2011: 535489,
  sharePercent: 1.93,
  decadalGrowth: {
    2001: 382045,
    2011: 535489,
    percentIncrease: 40,
    note: "40% decadal increase, fastest among minorities",
  },
  highestConcentration: {
    district: "Sangrur",
    population: 179116,
    percentOfDistrict: 10.82,
  },
  malerkotla: {
    isIndiaOnlyMuslimMajorityMunicipality: true,
    muslimPopulationPercent: 68.5,
    createdAsDistrictYear: 2021,
    note: "Created as a separate district and Municipal Corporation in May 2021",
  },
  qadian: {
    isAhmadiyyaHeadquarters: true,
    founder: "Mirza Ghulam Ahmad",
    founderBirthYear: 1835,
    district: "Gurdaspur",
  },
  urbanMigrantPockets: [
    { city: "Ludhiana", population: 77713, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "Patiala", population: 40043, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "Jalandhar", population: 30233, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "SAS Nagar/Mohali", population: 29488, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
  ],
  districtWise: districtMuslimPopulation,
  denominationalBreakdown: muslimDenominationalBreakdown,
  keyInstitutions: muslimKeyInstitutions,
  politicalDisposition: {
    malerkotlaTendencia: "Historically Congress-leaning due to secular tradition of the erstwhile princely state",
    urbanMigrantTendencia: "Tend to support secular parties (Congress/AAP)",
    generalMessaging: "Responds positively to inclusive secular messaging and protection of minority rights",
    verificationNeeded: ["2022 voting patterns"],
  },
  estimatedVoterCount: "5.5-6 lakh voters",
};

// ==========================================
// CHRISTIAN COMMUNITY DATA
// ==========================================

const christianDenominationalBreakdown: ChristianDenominationalBreakdown[] = [
  {
    denomination: "Catholic",
    description: "Established presence through mission schools and hospitals; organized institutional structure",
    populationStatus: "verified",
  },
  {
    denomination: "Protestant (mainline)",
    description: "Church of North India, Methodist, Lutheran churches with historical presence",
    populationStatus: "verified",
  },
  {
    denomination: "Pentecostal/Independent",
    description: "Fastest-growing segment. Key ministries include Ankur Narula Ministry, Khojewal Ministry, and Barjinder Deol Ministry",
    keyOrganizations: ["Ankur Narula Ministry", "Khojewal Ministry", "Barjinder Deol Ministry"],
    populationStatus: "NOT_FOUND",
  },
];

const dalitChristianReservationIssue: DalitChristianReservationIssue = {
  supremeCourtRuling: {
    caseName: "Chinthada Anand vs State of Andhra Pradesh",
    rulingDate: "March 2026",
    keyFinding: "Converting to a religion other than Hinduism, Sikhism, or Buddhism results in loss of Scheduled Caste status and protections under the SC/ST (Prevention of Atrocities) Act",
  },
  impactOnPunjab: {
    affectedCommunities: ["Valmiki", "Majhbi Sikh", "Ad-dharmi"],
    consequences: [
      "Dalit Christians lose SC reservation benefits (jobs, education, political representation)",
      "Excluded from Punjab government employment provisions for SCs",
      "Dalit Christians work primarily in private sector or as daily wage laborers",
    ],
  },
  historicalContext: {
    presidentialOrder1950: "First excluded non-Hindu Dalits from SC status",
    "1956Amendment": "Added Sikhs to SC list",
    "1990Amendment": "Added Buddhists. Christians and Muslims remain excluded",
    currentExclusion: "Christians and Muslims are excluded from SC status and associated benefits",
  },
  pendingLegalChallenges: {
    description: "Cases pending before SC seeking extension of SC status to Dalit Christians/Muslims",
    commissions: ["Ranganath Misra Commission", "Sachar Committee"],
  },
  politicalExploitation: {
    party: "BJP",
    leader: "Amit Shah",
    statement: "Announced anti-conversion law pledge at Moga rally",
  },
  communityResponse: {
    leaders: [
      { name: "Hamid Masih", role: "President, Punjab Christian Movement" },
      { name: "Prof. Emanual Nahar", role: "Former Chairman, Punjab Minority Commission" },
    ],
  },
};

const christianCommunity = {
  growthDynamics: {
    census2011: {
      population: 348098,
      sharePercent: 1.26,
    },
    estimatedCurrentShare: {
      lowEstimate: 3,
      highEstimate: 15,
      note: "Multiple sources estimate 10-15% based on visible church growth, while Census-based estimates suggest 3-5%",
    },
    reportedConversions: {
      number: 350000,
      period: "2023-2025",
      source: "Media reports",
      verificationStatus: "NOT_FOUND — independent verification needed",
    },
    dalitConnection: {
      punjabDalitPercent: 31.9,
      rankingAmongStates: "Highest among Indian states",
      primaryDriverOfChristianGrowth: "Dalits convert seeking social dignity",
    },
  },
  geographicDistribution: [
    {
      region: "Doaba",
      dalitPercent: "32%+",
      description: "Belt with highest concentration of Dalit Christians. Districts: Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr",
    },
    {
      region: "Majha",
      dalitPercent: "Variable",
      description: "Sizeable Valmiki and Majhbi Sikh communities with significant Christian following. Districts: Amritsar, Tarn Taran, Gurdaspur, Pathankot",
    },
  ],
  denominationalBreakdown: christianDenominationalBreakdown,
  dalitChristianIssue: dalitChristianReservationIssue,
  educationalSocialInfrastructure: {
    missionSchools: "Significant network across Punjab; Catholic and Protestant missions run prominent schools and hospitals",
    churches: "Rapid growth of small independent churches in villages, especially in Doaba and Majha",
    fcraRestrictions: "Central government restrictions on foreign funding to NGOs/missions have shifted the landscape toward independent, locally-funded ministries",
  },
  estimatedVoterCount: "Potentially 5-15 lakh voters; highly contested",
  voterCountContested: true,
};

// ==========================================
// BUDDHIST COMMUNITY DATA
// ==========================================

const buddhistCommunity: BuddhistCommunity = {
  population2011: 33237,
  sharePercent: 0.12,
  urbanConcentration: ["Ludhiana", "Amritsar", "Jalandhar"],
  literacyRate2001: 72.7,
  ambedkariteMovement: {
    description: "Neo-Buddhist converts (from Dalit backgrounds, particularly from the Chamar/Ad-dharmi community) form the core",
    communityOrigin: ["Chamar", "Ad-dharmi"],
    connection: "Connection to broader Dalit political consciousness",
    reservationBenefit: "Buddhist converts benefit from SC reservation (since 1990 amendment included Buddhists), unlike Christians and Muslims",
  },
  organizationalPresence: {
    status: "NOT_FOUND",
    note: "Verification needed for specific organizational presence in Punjab",
  },
  politicalRelevance: {
    numericImpact: "Small absolute numbers but symbolically significant in Dalit politics",
    symbolicSignificance: "Intersects with Ad-dharmi and Ravidassia movements",
    regionalConnection: "Communities concentrated in Doaba region where Dalit political assertion is strongest",
  },
};

// ==========================================
// JAIN COMMUNITY DATA
// ==========================================

const jainCommunity: JainCommunity = {
  population2011: 45040,
  sharePercent: 0.16,
  literacyRate2001: 95.9,
  urbanConcentration: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  sects: {
    predominant: ["Digambar", "Shwetambar"],
    breakdownStatus: "NOT_FOUND — verification needed for sectarian breakdown",
  },
  economicProfile: {
    traditionalOccupations: ["Trade", "Money-lending", "Business"],
    industrialPresence: "Significant presence in Punjab's industrial and commercial sectors (especially Ludhiana's textile/hosiery industry)",
    perCapitaAffluence: "Among the most affluent religious communities per capita in Punjab",
    institutions: "Jain temples (derasars) and charitable trusts",
  },
  politicalRelevance: {
    voteShare: "Small vote share but disproportionate economic influence",
    economicInfluence: "Tend to support business-friendly policies and stability",
    tendency: "NOT_FOUND — verification needed for specific political affiliations",
    verificationNeeded: ["Specific political affiliations"],
  },
};

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

const strategicImplications: ReligiousMinoritiesStrategicImplications = {
  muslimVoteBank: {
    estimatedVoters: "5.5-6 lakh voters",
    strategies: [
      {
        component: "Malerkotla",
        description: "Single most concentrated Muslim vote bank. Congress must retain historical connection to Malerkotla's secular legacy. Direct engagement with local Muslim leadership critical",
        priority: "HIGH",
      },
      {
        component: "Migrant Muslim laborers",
        description: "Growing population in Ludhiana, Jalandhar, Mohali. Congress should advocate for their inclusion in electoral rolls and address labor rights",
        priority: "MEDIUM",
      },
      {
        component: "Qadian/Ahmadiyya community",
        description: "Persecuted minority; Congress position on religious freedom resonates",
        priority: "MEDIUM",
      },
      {
        component: "Urdu promotion and Waqf Board governance",
        description: "Concrete policy commitments will signal seriousness",
        priority: "LOW",
      },
    ],
  },
  christianVoteBank: {
    estimatedVoters: "Potentially 5-15 lakh voters",
    contested: true,
    strategies: [
      {
        component: "Dalit Christian reservation issue",
        description: [
          "THE defining political opportunity. Publicly commit to extending SC reservation benefits to Dalit Christians",
          "Advocate at national level for amendment to the Presidential Order of 1950",
          "Contrast with BJP's anti-conversion law stance",
          "Position Congress as protector of both Dalit rights AND religious freedom"
        ],
        politicalOpportunity: "Charter for Dalit Christian reservation extension",
      },
      {
        component: "Doaba region",
        description: [
          "Christian Dalit votes could swing 8-10 seats in Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr",
          "32%+ Dalit belt"
        ],
        politicalOpportunity: "Doaba SC-Christian swing seats",
      },
      {
        component: "Counter BJP polarization",
        description: [
          "BJP will attempt to use conversion as a polarizing issue",
          "Congress must frame the debate around social justice, not religion"
        ],
        politicalOpportunity: "Social justice framing vs polarization",
      },
      {
        component: "Church engagement",
        description: [
          "Direct outreach to both institutional churches (Catholic, CNI) and independent ministries",
          "Avoid appearing to endorse any particular denomination"
        ],
        politicalOpportunity: "Multi-denominational Christian outreach",
      },
    ],
  },
  buddhistJainCommunities: [
    {
      community: "Buddhist",
      approach: "Small numbers but connect to broader Dalit politics. Align Ambedkarite messaging with Congress Dalit outreach",
      rationale: "Symbolic significance in Dalit politics exceeds numeric strength",
    },
    {
      community: "Jain",
      approach: "Economic influence exceeds vote share. Engage Jain business community on economic policy. Their support signals stability and pro-business credentials",
      rationale: "Disproportionate economic influence in industrial/commercial sectors",
    },
  ],
  crossCuttingStrategy: {
    reforms: ["Strengthen Punjab State Minority Commission with real powers"],
    infrastructure: ["Support minority-run institutions against FCRA overreach"],
    employment: ["Address the specific complaint that Dalit Christians have no government job pathway"],
    coalitionBuilding: "Muslim + Christian + Buddhist Dalits share common exclusion from SC benefits (Buddhists now included, but solidarity messaging works)",
  },
};

// ==========================================
// DATA POINTS
// ==========================================

const dataPoints: ReligiousMinorityDataPoint[] = [
  { metric: "Muslim population (Punjab)", value: "535,489 (1.93%)", source: "Census of India", date: "2011" },
  { metric: "Christian population (Punjab)", value: "348,098 (1.26%)", source: "Census of India", date: "2011" },
  { metric: "Buddhist population (Punjab)", value: "33,237 (0.12%)", source: "Census of India", date: "2011" },
  { metric: "Jain population (Punjab)", value: "45,040 (0.16%)", source: "Census of India", date: "2011" },
  { metric: "Malerkotla Muslim %", value: "~68.5%", source: "Census 2011 data", date: "2011" },
  { metric: "Sangrur district Muslim pop.", value: "179,116 (10.82%)", source: "Census / Muslim-Census.com", date: "2011" },
  { metric: "Ludhiana Muslim pop.", value: "77,713 (2.22%)", source: "Census / Muslim-Census.com", date: "2011" },
  { metric: "SC % of Punjab population", value: "31.9% (highest among states)", source: "Census of India", date: "2011" },
  { metric: "Estimated Christian conversions (2023-25)", value: "~3.5 lakh", source: "Media reports", date: "2025" },
  { metric: "SC status denied to Christians/Muslims", value: "SC ruling (Chinthada Anand case)", source: "Supreme Court", date: "Mar 2026" },
  { metric: "Ranganath Misra Commission recommendation", value: "Include Dalit Christians/Muslims in SC", source: "GoI Commission", date: "2007" },
  { metric: "Jain literacy rate (Punjab)", value: "95.9%", source: "Census of India", date: "2001" },
  { metric: "Muslim literacy rate (Punjab)", value: "51.2%", source: "Census of India", date: "2001" },
  { metric: "Christian literacy rate (Punjab)", value: "54.6%", source: "Census of India", date: "2001" },
];

// ==========================================
// DATA GAPS
// ==========================================

const dataGaps: DataGap[] = [
  {
    id: 1,
    topic: "Post-2011 census data",
    description: "No official census since 2011. All growth figures for Christians are estimates from media, religious organizations, or political claims.",
    priority: "CRITICAL",
  },
  {
    id: 2,
    topic: "Actual Christian population (2025-2026)",
    description: "Estimates range from 3% to 15%. Wide disparity suggests political manipulation of data. Independent survey recommended.",
    priority: "CRITICAL",
  },
  {
    id: 3,
    topic: "Muslim population (2025-2026)",
    description: "No post-2011 data. Migrant Muslim worker numbers in Ludhiana/Jalandhar likely significantly higher than 2011 figures.",
    priority: "HIGH",
  },
  {
    id: 4,
    topic: "Waqf Board properties",
    description: "Number, value, and management status of Waqf properties in Punjab — verification needed.",
    priority: "MEDIUM",
  },
  {
    id: 5,
    topic: "Mosque count by district",
    description: "Number and distribution of mosques across Punjab districts.",
    priority: "LOW",
  },
  {
    id: 6,
    topic: "Denominational breakdown of Christians",
    description: "Catholic vs Protestant vs Pentecostal/Independent percentages — verification needed.",
    priority: "MEDIUM",
  },
  {
    id: 7,
    topic: "Buddhist/Jain organizational presence",
    description: "Specific temples, institutions, community organizations — verification needed.",
    priority: "LOW",
  },
  {
    id: 8,
    topic: "2022 voting patterns by minority community",
    description: "How Muslims and Christians voted in 2022 Assembly elections — verification needed.",
    priority: "HIGH",
  },
  {
    id: 9,
    topic: "Dalit Christian voter registration",
    description: "How many Dalit Christians are registered voters vs eligible but unregistered — verification needed.",
    priority: "MEDIUM",
  },
  {
    id: 10,
    topic: "FCRA impact on Christian institutions",
    description: "Quantitative data on funding cuts and institutional closures — verification needed.",
    priority: "LOW",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const religiousMinoritiesData: ReligiousMinoritiesData = {
  overview: {
    researchDate: "19 May 2026",
    sourcesConsulted: 8,
    dataFreshness: "Census 2011 (base); estimated trends from 2022-2026 reporting",
    confidence: "MEDIUM",
    totalMinorityPercent: 3.5,
    populations: religiousMinorityPopulations,
  },
  muslim: muslimCommunity,
  christian: christianCommunity,
  buddhist: buddhistCommunity,
  jain: jainCommunity,
  strategicImplications: strategicImplications,
  dataPoints: dataPoints,
  dataGaps: { gaps: dataGaps },
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const religiousMinoritiesMetrics = {
  totalMinorityPopulation: "~9.6 lakh (2011 Census)",
  minorityShare: "~3.5% of Punjab population",
  scPercentHighest: "31.9% — highest in India (driver of Christian growth)",
  malerkotlaOnlyMuslimMunicipalCorp: true,
  dalitChristianLostRights: "SC ruling March 2026",
  christianEstimateRange: "3-15% (contested)",
  malerkotlaMuslimPop: "68.5%",
  qadianAhmadiyyaHQ: true,
};

// Chart data for religious minority population distribution
export const minorityPopulationChartData = [
  { religion: "Muslim", population: 535489, percent: 1.93, color: "#22C55E" },
  { religion: "Christian", population: 348098, percent: 1.26, color: "#3B82F6" },
  { religion: "Buddhist", population: 33237, percent: 0.12, color: "#F59E0B" },
  { religion: "Jain", population: 45040, percent: 0.16, color: "#EC4899" },
];

// District-wise Muslim population for bar chart
export const districtMuslimPopulationChartData = [
  { district: "Sangrur", population: 179116, percent: 10.82 },
  { district: "Ludhiana", population: 77713, percent: 2.22 },
  { district: "Patiala", population: 40043, percent: 2.11 },
  { district: "Mohali", population: 29488, percent: 2.96 },
  { district: "Jalandhar", population: 30233, percent: 1.38 },
  { district: "Bathinda", population: 16299, percent: 1.17 },
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get Muslim population by district
 */
export function getMuslimPopulationByDistrict(district: string): DistrictMuslimPopulation | undefined {
  return districtMuslimPopulation.find(
    (d) => d.district.toLowerCase().includes(district.toLowerCase())
  );
}

/**
 * Get Christian denominational breakdown
 */
export function getChristianDenominations(): ChristianDenominationalBreakdown[] {
  return christianDenominationalBreakdown;
}

/**
 * Get Dalit Christian reservation issue details
 */
export function getDalitChristianReservationIssue(): DalitChristianReservationIssue {
  return dalitChristianReservationIssue;
}

/**
 * Get all minority data points
 */
export function getAllDataPoints(): ReligiousMinorityDataPoint[] {
  return dataPoints;
}

/**
 * Get data gaps by priority
 */
export function getDataGapsByPriority(priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"): DataGap[] {
  return dataGaps.filter((g) => g.priority === priority);
}

/**
 * Get minority population summary
 */
export function getMinorityPopulationSummary() {
  return {
    total: religiousMinorityPopulations.reduce((sum, p) => sum + p.population2011, 0),
    share: religiousMinorityPopulations.reduce((sum, p) => sum + p.sharePercent, 0),
  };
}
