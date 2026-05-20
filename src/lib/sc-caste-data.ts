// @ts-nocheck
// ==========================================
// SC CASTE DEMOGRAPHICS DATA
// Source: research-M2/MP1-foundational/demographics/sc-caste-mapping.md
// Date: 19 May 2026 | Data Currency: 2011 Census base, supplemented with 2022-2026 reports
// ==========================================

import type {
  SCPopulationOverview,
  SCSubGroup,
  ChamarCluster,
  MazhabiSikhProfile,
  ValmikiProfile,
  DistrictSCData,
  RegionalSCDistribution,
  SCReservedConstituency,
  PartyPerformanceInReservedSeats,
  HistoricalPoliticalDynamics,
  SCFaultLine,
  SupremeCourtVerdictImpact,
  DeraInfluence,
  SCVoterTurnout,
  CurrentSCLeader,
  HistoricalSCLeader,
  CongressOpportunity,
  CongressRisk,
  CongressStrategy,
  TargetSeatMatrix,
  DataGap,
  SCCasteMappingData,
} from "@/types/sc-caste-types";

// ==========================================
// POPULATION OVERVIEW
// ==========================================

export const scPopulationOverview: SCPopulationOverview = {
  totalSCPopulation: 8886583,
  scShareOfStatePopulation: 31.94,
  ruralSCPercent: 73.3,
  urbanSCPercent: 26.7,
  scSikhPercent: 60.8,
  scHinduPercent: 38.2,
  scChristianPercent: 0.8,
  totalSCReservedAssemblySeats: 34,
  totalSCReservedParliamentarySeats: 4,
};

// ==========================================
// MAJOR SC SUB-GROUPS
// ==========================================

export const scSubGroups: SCSubGroup[] = [
  {
    name: "Mazhabi Sikh",
    percentOfSCPopulation: 26.33,
    approximatePopulation: 2340000,
    religion: "Sikh",
    traditionalOccupation: "Agricultural labour, sweeping",
    regionConcentration: "Malwa, Majha",
  },
  {
    name: "Ravidasia + Ramdasia (combined)",
    percentOfSCPopulation: 20.76,
    approximatePopulation: 1840000,
    religion: "Mixed (Sikh/Hindu/Ravidasia religion)",
    traditionalOccupation: "Leather, crafts",
    regionConcentration: "Doaba (dominant), Malwa",
  },
  {
    name: "Ad-Dharmi",
    percentOfSCPopulation: 10.17,
    approximatePopulation: 1020000,
    religion: "Originally distinct, now classified Hindu",
    traditionalOccupation: "Leather, agriculture",
    regionConcentration: "Doaba, Malwa",
  },
  {
    name: "Valmiki / Chuhra / Bhangi",
    percentOfSCPopulation: 8.6,
    approximatePopulation: 760000,
    religion: "Hindu (majority), some Sikh",
    traditionalOccupation: "Sweeping, sanitation",
    regionConcentration: "Majha, Doaba, urban centres",
  },
  {
    name: "Other SC communities (39 total listed)",
    percentOfSCPopulation: 34.14,
    approximatePopulation: 2900000,
    religion: "Mixed",
    traditionalOccupation: "Various",
    regionConcentration: "Statewide",
  },
];

// ==========================================
// CHAMAR CLUSTER (Deep Dive)
// ==========================================

export const chamarCluster: ChamarCluster = {
  totalPopulation: 3095324,
  adDharmi: 1017192,
  sikhRamdasia: 1443079,
  hinduRamdasiaRavidasia: 629157,
  economicAdvantage:
    "Historically benefited from British-era leather trade (military boots), enabling education and upward mobility. Dominant in Jalandhar's surgical instrument, sporting goods, and leather industries.",
  politicalDominance:
    "Of 34 SC-reserved seats, Mazhabi/Valmiki MLAs hold only ~8. Of 4 SC-reserved parliamentary seats, ALL are held by Ravidasia-community MPs.",
  keyInstitution:
    "Dera Sachkhand Ballan (Jalandhar) — commands lakhs of followers across Ravidasia and Ramdasia communities. Its annual Varanasi pilgrimage draws ~20 lakh devotees.",
};

// ==========================================
// MAZHABI SIKH PROFILE
// ==========================================

export const mazhabiSikhProfile: MazhabiSikhProfile = {
  percentOfDalitPopulation: 26.33,
  religion: "Sikh (exclusively)",
  alternateName: "Rangreta Sikhs",
  geography: "Malwa and Majha regions. Particularly strong in districts like Mansa, Bathinda, Barnala, Tarn Taran, Amritsar.",
  socioEconomicStatus:
    "Among the most disadvantaged SC communities. Primarily agricultural labourers, historically landless. Lower literacy rates than Chamar-origin groups.",
  militaryTradition:
    "Recruited into British Indian Army as Mazhabi-Ramdasia regiments post-1857. This military heritage remains a source of community pride.",
  politicalAllegiance:
    "Traditional Congress voters (since Giani Zail Singh's 1975 reservation directive). Shifted partially to SAD in 2007. AAP made massive inroads in 2022.",
  subCategorizationStance:
    "STRONGLY FAVOURS SC sub-categorisation (along with Valmikis). This is a critical fault line.",
};

// ==========================================
// VALMINKI PROFILE
// ==========================================

export const valmikiProfile: ValmikiProfile = {
  percentOfSCPopulation: 8.6,
  approximatePopulation: 760000,
  religion: "Predominantly Hindu, some Sikh",
  geography: "Urban centres, Majha region, Doaba towns",
  socioEconomicStatus:
    "Among the most marginalised. Traditional sanitation work. Low representation in government jobs and political offices.",
  keyReligiousLeader: "Darshan Ratna Raavan",
  politicalAllegiance:
    "Traditional Congress base (since Zail Singh's 1975 directive). BJP has been actively courting this community, especially post-2022.",
  subCategorizationStance:
    "STRONGLY FAVOURS sub-categorisation alongside Mazhabis.",
};

// ==========================================
// DISTRICT-WISE SC POPULATION
// ==========================================

export const districtWiseSCData: DistrictSCData[] = [
  {
    district: "Nawanshahr (Shahid Bhagat Singh Nagar)",
    scPercentOfDistrict: 39.6,
    region: "Doaba",
    dominantSCSubGroup: "Ravidasia / Ad-Dharmi",
  },
  {
    district: "Kapurthala",
    scPercentOfDistrict: 34.2,
    region: "Doaba",
    dominantSCSubGroup: "Ravidasia / Ad-Dharmi",
  },
  {
    district: "Jalandhar",
    scPercentOfDistrict: 33.5,
    region: "Doaba",
    dominantSCSubGroup: "Ravidasia / Ramdasia",
  },
  {
    district: "Tarn Taran",
    scPercentOfDistrict: 33.7,
    region: "Majha",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Mansa",
    scPercentOfDistrict: 33.6,
    region: "Malwa",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Bathinda",
    scPercentOfDistrict: 32.4,
    region: "Malwa",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Barnala",
    scPercentOfDistrict: 32.2,
    region: "Malwa",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Fatehgarh Sahib",
    scPercentOfDistrict: 32.1,
    region: "Malwa",
    dominantSCSubGroup: "Mixed",
  },
  {
    district: "Amritsar",
    scPercentOfDistrict: 31.0,
    region: "Majha",
    dominantSCSubGroup: "Mazhabi Sikh / Valmiki",
  },
  {
    district: "Hoshiarpur",
    scPercentOfDistrict: 30.8,
    region: "Doaba",
    dominantSCSubGroup: "Ravidasia / Ad-Dharmi",
  },
  {
    district: "Muktsar",
    scPercentOfDistrict: 31.5,
    region: "Malwa",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Sangrur",
    scPercentOfDistrict: 30.2,
    region: "Malwa",
    dominantSCSubGroup: "Mazhabi Sikh",
  },
  {
    district: "Firozpur",
    scPercentOfDistrict: 30.0,
    region: "Malwa",
    dominantSCSubGroup: "Mixed",
  },
];

// ==========================================
// REGIONAL DISTRIBUTION
// ==========================================

export const regionalSCDistribution: RegionalSCDistribution[] = [
  {
    region: "Malwa",
    totalSeats: 69,
    scReservedSeats: 18,
    scPopulationShare: 30,
    dominantSCSubGroup: "Mazhabi Sikh (majority)",
  },
  {
    region: "Majha",
    totalSeats: 25,
    scReservedSeats: 8,
    scPopulationShare: 32,
    dominantSCSubGroup: "Mazhabi Sikh, Valmiki",
  },
  {
    region: "Doaba",
    totalSeats: 23,
    scReservedSeats: 8,
    scPopulationShare: 40,
    dominantSCSubGroup: "Ravidasia / Ramdasia / Ad-Dharmi",
  },
];

// ==========================================
// SC-RESERVED ASSEMBLY CONSTITUENCIES
// ==========================================

export const doabaReservedSeats = {
  seats: [
    { name: "Adampur", district: "Jalandhar", likelyDominantSCGroup: "Ravidasia / Ramdasia", winner2022: "AAP", region: "Doaba" as const, notes: "Channi wanted ticket here for ally; denied" },
    { name: "Phillaur (SC)", district: "Jalandhar", likelyDominantSCGroup: "Ravidasia / Ad-Dharmi", winner2022: "AAP", region: "Doaba" as const, notes: "Congress held 2017" },
    { name: "Kartarpur (SC)", district: "Jalandhar", likelyDominantSCGroup: "Ravidasia", winner2022: "AAP", region: "Doaba" as const },
    { name: "Nawanshahr (SC)", district: "Shahid Bhagat Singh Nagar", likelyDominantSCGroup: "Ad-Dharmi", winner2022: "AAP", region: "Doaba" as const, notes: "Highest SC% district" },
    { name: "Banga (SC)", district: "Shahid Bhagat Singh Nagar", likelyDominantSCGroup: "Ravidasia / Ad-Dharmi", winner2022: "AAP", region: "Doaba" as const },
    { name: "Phagwara (SC)", district: "Kapurthala", likelyDominantSCGroup: "Ravidasia", winner2022: "AAP", region: "Doaba" as const },
    { name: "Kapurthala (SC)", district: "Kapurthala", likelyDominantSCGroup: "Ravidasia / Valmiki", winner2022: "AAP", region: "Doaba" as const },
    { name: "Chabbewal (SC)", district: "Hoshiarpur", likelyDominantSCGroup: "Mixed", winner2022: "AAP", region: "Doaba" as const },
  ],
  total: 8,
};

export const majhaReservedSeats = {
  seats: [
    { name: "Amritsar North (SC)", district: "Amritsar", likelyDominantSCGroup: "Valmiki / Mazhabi", winner2022: "AAP", region: "Majha" as const, notes: "Urban, Valmiki significant" },
    { name: "Amritsar Central (SC)", district: "Amritsar", likelyDominantSCGroup: "Valmiki / Mixed", winner2022: "AAP", region: "Majha" as const },
    { name: "Jandiala (SC)", district: "Amritsar", likelyDominantSCGroup: "Mazhabi", winner2022: "AAP", region: "Majha" as const },
    { name: "Attari (SC)", district: "Amritsar", likelyDominantSCGroup: "Mazhabi", winner2022: "AAP", region: "Majha" as const, notes: "Border area" },
    { name: "Tarn Taran (SC)", district: "Tarn Taran", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Majha" as const, notes: "High SC% district" },
    { name: "Khem Karan (SC)", district: "Tarn Taran", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Majha" as const, notes: "Border, agricultural labour" },
    { name: "Dera Baba Nanak (SC)", district: "Gurdaspur", likelyDominantSCGroup: "Mazhabi / Mixed", winner2022: "AAP", region: "Majha" as const },
    { name: "Qadian (SC)", district: "Gurdaspur", likelyDominantSCGroup: "Mixed", winner2022: "AAP", region: "Majha" as const },
  ],
  total: 8,
};

export const malwaReservedSeats = {
  seats: [
    { name: "Bhadaur (SC)", district: "Barnala", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Barnala (SC)", district: "Barnala", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Mansa (SC)", district: "Mansa", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const, notes: "High SC% district" },
    { name: "Sardulgarh (SC)", district: "Mansa", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Bathinda Rural (SC)", district: "Bathinda", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const, notes: "SAD traditional area" },
    { name: "Talwandi Sabo (SC)", district: "Bathinda", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Maur (SC)", district: "Bathinda", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Fatehgarh Sahib (SC)", district: "Fatehgarh Sahib", likelyDominantSCGroup: "Mixed", winner2022: "AAP", region: "Malwa" as const },
    { name: "Amargarh (SC)", district: "Sangrur", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Dirba (SC)", district: "Sangrur", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Sunam (SC)", district: "Sangrur", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Lehra (SC)", district: "Sangrur", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Malout (SC)", district: "Muktsar", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Gidderbaha (SC)", district: "Muktsar", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Muktsar (SC)", district: "Muktsar", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
    { name: "Faridkot (SC)", district: "Faridkot", likelyDominantSCGroup: "Mazhabi / Mixed", winner2022: "AAP", region: "Malwa" as const },
    { name: "Jandiala Guru (SC)", district: "Tarn Taran", likelyDominantSCGroup: "Mazhabi", winner2022: "AAP", region: "Malwa" as const },
    { name: "Nihal Singh Wala (SC)", district: "Moga", likelyDominantSCGroup: "Mazhabi Sikh", winner2022: "AAP", region: "Malwa" as const },
  ],
  total: 18,
};

// ==========================================
// HISTORICAL POLITICAL PATTERNS
// ==========================================

export const partyPerformanceHistory: PartyPerformanceInReservedSeats[] = [
  { election: "2012", congress: 24, aap: 0, sadBjp: 8, bsp: 2, others: 0 },
  { election: "2017", congress: 21, aap: 0, sadBjp: 7, bsp: 1, others: 5 },
  { election: "2022", congress: 2, aap: 32, sadBjp: 0, bsp: 0, others: 0 },
  { election: "2024 LS (SC seats)", congress: 3, aap: 0, sadBjp: 0, bsp: 0, others: 0, note: "leads in reserved segments" },
];

export const historicalDynamics: HistoricalPoliticalDynamics = {
  congressTraditionalBase:
    "Giani Zail Singh's 1975 directive giving 50% SC reservation quota to Mazhabis and Valmikis cemented Congress as the default SC party. This held for four decades.",
  adDharmiMovementLegacy:
    "The 1920s Ad-Dharm movement created a separate Dalit identity. Post-independence, this translated into Congress allegiance through leaders like Buta Singh.",
  bspInterlude:
    "Kanshi Ram (Ramdasia from Ropar) built BSP on Dalit identity. BSP peaked in 1992 (winning 9 seats) but never consolidated as a durable force in Punjab.",
  aapTsunami2022:
    "AAP won 32 of 34 reserved seats, sweeping across all three regions. This was a vote against incumbent parties, not a vote for AAP's SC-specific appeal.",
  partialCorrection2024:
    "Congress led in 14 of 34 SC Assembly segments during Lok Sabha polls, suggesting AAP's SC lock is weakening.",
};

// ==========================================
// INTER-SC DYNAMICS
// ==========================================

export const scFaultLines: SCFaultLine[] = [
  {
    dimension: "Population",
    chamarOrigin: "~38% of SCs",
    mazhabiValmiki: "~35% of SCs",
  },
  {
    dimension: "Economic Status",
    chamarOrigin: "Relatively better (trade, migration, industry)",
    mazhabiValmiki: "Most marginalised (agri-labour, sanitation)",
  },
  {
    dimension: "Political Representation",
    chamarOrigin: "Dominant: hold 26 of 34 reserved seats, all 4 LS seats",
    mazhabiValmiki: "Underrepresented: hold only 8 of 34 seats",
  },
  {
    dimension: "Government Jobs",
    chamarOrigin: "Disproportionate share of SC quota benefits",
    mazhabiValmiki: "Underrepresented despite 50% sub-quota",
  },
  {
    dimension: "Religious Identity",
    chamarOrigin: "Distinct (Dera Sachkhand, Ravidasia religion)",
    mazhabiValmiki: "Sikh (Mazhabi) / Hindu (Valmiki)",
  },
  {
    dimension: "Sub-Categorisation",
    chamarOrigin: "OPPOSE sub-categorisation (fear losing dominance)",
    mazhabiValmiki: "STRONGLY FAVOUR sub-categorisation",
  },
  {
    dimension: "Dera Influence",
    chamarOrigin: "Dera Sachkhand Ballan (Jalandhar)",
    mazhabiValmiki: "Less dera-dependent",
  },
];

export const subCategorizationVerdict: SupremeCourtVerdictImpact = {
  ruling: "SC ruling allowing sub-classification within SCs (August 2024)",
  mazhabiValmikiPerspective:
    "Mazhabi/Valmiki cluster sees this as path to representation in jobs and politics.",
  ravidasiaRamdasiaPerspective:
    "Ravidasia/Ramdasia cluster sees this as a threat to their dominant position.",
  bharatBandhImpact:
    "Partial response only — strong in Doaba (Ravidasia belt), negligible in Malwa/Majha (Mazhabi/Valmiki belt).",
  politicalImplications:
    "Parties must now navigate both clusters' demands simultaneously.",
};

export const deraInfluences: DeraInfluence[] = [
  {
    name: "Dera Sachkhand Ballan",
    location: "Jalandhar",
    primaryFollowers: "Ravidasia/Ramdasia followers",
    electoralImpact: "VERY HIGH",
    politicalReach: "Doaba belt, commands lakhs of followers",
    note: "Charanjit Singh Channi was a regular visitor",
  },
  {
    name: "Dera Sacha Sauda",
    location: "Sirsa, Haryana",
    primaryFollowers: "Significant following among Mazhabi Sikhs in Malwa belt",
    electoralImpact: "HIGH",
    note: "The 2015 pardon controversy severely damaged SAD",
  },
];

// ==========================================
// SC VOTER TURNOUT PATTERNS
// ==========================================

export const scVoterTurnout: SCVoterTurnout[] = [
  { metric: "SC voter turnout 2022 (reserved seats avg.)", value: "~76%", source: "ECI data", verificationNeeded: false },
  { metric: "Doaba reserved seats turnout 2022", value: "~74%", source: "VERIFICATION_NEEDED", verificationNeeded: true },
  { metric: "Malwa reserved seats turnout 2022", value: "~78%", source: "VERIFICATION_NEEDED", verificationNeeded: true },
  { metric: "Majha reserved seats turnout 2022", value: "~75%", source: "VERIFICATION_NEEDED", verificationNeeded: true },
];

// ==========================================
// SC LEADERSHIP
// ==========================================

export const currentSCLeaders: CurrentSCLeader[] = [
  {
    name: "Charanjit Singh Channi",
    party: "Congress",
    subGroup: "Ramdasia",
    position: "Former CM, MLA",
    relevance: "First SC CM of Punjab; remains Congress's most recognisable SC face",
  },
  {
    name: "Raj Kumar Verka",
    party: "Congress",
    subGroup: "Valmiki",
    position: "4-time MLA, Former Minister",
    relevance: "Key Valmiki voice in Congress",
  },
  {
    name: "Vijay Inder Singla",
    party: "Congress",
    subGroup: "SC",
    position: "Former Minister",
    relevance: "",
  },
  {
    name: "Sadhu Singh",
    party: "AAP",
    subGroup: "SC",
    position: "MP",
    relevance: "",
  },
  {
    name: "Various AAP SC MLAs",
    party: "AAP",
    subGroup: "Mixed",
    position: "32 MLAs",
    relevance: "Large bench but low national profile",
  },
];

export const historicalSCLeaders: HistoricalSCLeader[] = [
  {
    name: "Kanshi Ram",
    subGroup: "Ramdasia",
    legacy: "Founded BSP; national Dalit politics icon",
  },
  {
    name: "Buta Singh",
    subGroup: "SC",
    legacy: "Congress stalwart, Union Home Minister",
  },
  {
    name: "Mangu Ram Mugowalia",
    subGroup: "Ad-Dharmi",
    legacy: "Founded Ad-Dharm movement (1926)",
  },
  {
    name: "Giani Zail Singh",
    subGroup: "(SC ally, not SC himself)",
    legacy: "PM who implemented SC sub-quota as Punjab CM",
  },
];

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export const congressOpportunities: CongressOpportunity[] = [
  {
    number: 1,
    title: "AAP's SC vote is soft",
    description:
      "2022 was anti-incumbency, not pro-AAP ideology. 2024 Lok Sabha showed Congress regaining SC segments (led in 14 of 34). AAP has no deep SC organisation.",
  },
  {
    number: 2,
    title: "Channi as SC face",
    description:
      "The only living former SC Chief Minister in Punjab. His Ramdasia identity appeals to the Chamar-origin bloc. Congress must leverage this strategically without alienating Mazhabi/Valmiki communities.",
  },
  {
    number: 3,
    title: "Sub-categorisation wedge",
    description:
      "The August 2024 Supreme Court verdict creates a chance to promise Mazhabi/Valmiki communities genuine representation — something no party has delivered in 50 years.",
  },
  {
    number: 4,
    title: "Valmiki community is winnable",
    description:
      "BJP is actively courting Valmikis, but community leaders like Darshan Ratna Raavan warn against BJP. Congress has historical credibility here.",
  },
  {
    number: 5,
    title: "Dera Sachkhand Ballan relationship",
    description:
      "Congress's existing ties to the Dera can be deepened. The Dera's Varanasi pilgrimage influence over ~20 lakh followers is unmatched.",
  },
];

export const congressRisks: CongressRisk[] = [
  {
    number: 1,
    title: "Sub-categorisation is a double-edged sword",
    description:
      "Supporting it loses Ravidasia/Ramdasia support. Opposing it loses Mazhabi/Valmiki support. Must thread the needle with a nuanced position.",
  },
  {
    number: 2,
    title: "BJP Valmiki/Mazhabi outreach",
    description:
      "BJP is actively targeting these communities through RSS networks. If Congress ignores them, BJP will fill the vacuum.",
  },
  {
    number: 3,
    title: "32 of 34 reserved seats went AAP in 2022",
    description:
      "Breaking this requires constituency-level micro-targeting, not just statewide messaging.",
  },
  {
    number: 4,
    title: "Anti-incumbency cuts both ways",
    description:
      "If AAP government is unpopular by 2027, voters may NOT default to Congress — they could go to SAD-BSP or BJP.",
  },
];

export const congressStrategies: CongressStrategy[] = [
  {
    strategy: "Channi Plus Model",
    targetSubGroup: "Ravidasia / Ramdasia",
    approach: [
      "Channi as campaign face",
      "announce Ravidasia-specific welfare schemes",
      "deepen Dera Ballan relationship",
    ],
  },
  {
    strategy: "Mazhabi Sikh Outreach",
    targetSubGroup: "Mazhabi Sikh (26.33% of SCs)",
    approach: [
      "Promise sub-categorisation implementation",
      "field more Mazhabi candidates in reserved seats",
      "address agricultural labour issues",
    ],
  },
  {
    strategy: "Valmiki Engagement",
    targetSubGroup: "Valmiki / Chuhra (8.6% of SCs)",
    approach: [
      "Counter BJP's RSS penetration",
      "promise sanitation worker welfare",
      "elevate Valmiki leaders like Verka",
    ],
  },
  {
    strategy: "Doaba Special Focus",
    targetSubGroup: "Ravidasia-dominant belt",
    approach: [
      "15 of 23 Doaba seats were Congress in 2017",
      "lost all to AAP in 2022",
      "Win back through Dera influence + Channi factor",
    ],
  },
  {
    strategy: "SC Candidate Distribution",
    targetSubGroup: "All sub-groups",
    approach: [
      "Ensure 34 reserved candidates reflect sub-group diversity",
      "~10-12 Mazhabi, ~8-10 Ravidasia/Ramdasia, ~4-6 Valmiki, ~4-6 mixed",
    ],
  },
  {
    strategy: "SC Manifesto Committee",
    targetSubGroup: "All sub-groups",
    approach: [
      "Constituted with representation from ALL major sub-groups",
      "announce SC-specific budget allocation promises",
    ],
  },
];

export const targetSeatMatrix: TargetSeatMatrix[] = [
  {
    scenario: "Minimum viable",
    seatsNeeded: 15,
    feasibility: "Achievable if AAP anti-incumbency solid",
  },
  {
    scenario: "Comfortable",
    seatsNeeded: 20,
    feasibility: "Requires Doaba sweep + Malwa gains",
  },
  {
    scenario: "Optimal",
    seatsNeeded: 25,
    feasibility: "Requires near-total AAP collapse in SC belt",
  },
];

// ==========================================
// DATA GAPS
// ==========================================

export const dataGaps: DataGap[] = [
  {
    gap: "Constituency-level sub-group dominance for all 34 seats",
    priority: "HIGH",
    method: "Booth-level electoral analysis + field surveys",
  },
  {
    gap: "2024 Lok Sabha SC-reserved segment vote shares",
    priority: "HIGH",
    method: "ECI constituency-level data",
  },
  {
    gap: "Current Mazhabi Sikh sentiment toward AAP government",
    priority: "HIGH",
    method: "Field survey / focus groups",
  },
  {
    gap: "Dera Sachkhand Ballan current political orientation",
    priority: "MEDIUM",
    method: "Intelligence gathering",
  },
  {
    gap: "Valmiki community BJP penetration assessment",
    priority: "MEDIUM",
    method: "Field survey",
  },
  {
    gap: "SC voter turnout by sub-group",
    priority: "MEDIUM",
    method: "Booth-level analysis",
  },
  {
    gap: "NRI SC diaspora influence (Doaba)",
    priority: "LOW",
    method: "Diaspora network mapping",
  },
  {
    gap: "Inter-SC marriage / social dynamics",
    priority: "LOW",
    method: "Academic research",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const scCasteMappingData: SCCasteMappingData = {
  documentDate: "19 May 2026",
  dataCurrency: "2011 Census base, supplemented with 2022-2026 reports",
  qualityFlag:
    "Core population figures verified; constituency-level sub-group dominance is assessed from electoral analysis, not direct census — marked VERIFICATION_NEEDED where uncertain.",
  populationOverview: scPopulationOverview,
  majorSubGroups: scSubGroups,
  chamarCluster: chamarCluster,
  mazhabiSikhProfile: mazhabiSikhProfile,
  valmikiProfile: valmikiProfile,
  districtWiseSC: districtWiseSCData,
  regionalDistribution: regionalSCDistribution,
  doabaReservedSeats: doabaReservedSeats,
  majhaReservedSeats: majhaReservedSeats,
  malwaReservedSeats: malwaReservedSeats,
  partyPerformanceHistory: partyPerformanceHistory,
  historicalDynamics: historicalDynamics,
  faultLines: scFaultLines,
  subCategorizationVerdict: subCategorizationVerdict,
  deraInfluences: deraInfluences,
  voterTurnout: scVoterTurnout,
  currentLeaders: currentSCLeaders,
  historicalLeaders: historicalSCLeaders,
  opportunities: congressOpportunities,
  risks: congressRisks,
  recommendedStrategies: congressStrategies,
  targetSeatMatrix: targetSeatMatrix,
  dataGaps: dataGaps,
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get SC population statistics
 */
export function getSCPopulationStats() {
  return {
    total: scPopulationOverview.totalSCPopulation,
    percentage: scPopulationOverview.scShareOfStatePopulation,
    reservedSeats: scPopulationOverview.totalSCReservedAssemblySeats,
    parliamentarySeats: scPopulationOverview.totalSCReservedParliamentarySeats,
  };
}

/**
 * Get sub-group by name
 */
export function getSubGroupByName(name: string): SCSubGroup | undefined {
  return scSubGroups.find(
    (sg) => sg.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get constituencies by region
 */
export function getConstituenciesByRegion(
  region: "Doaba" | "Majha" | "Malwa"
): SCReservedConstituency[] {
  switch (region) {
    case "Doaba":
      return doabaReservedSeats.seats;
    case "Majha":
      return majhaReservedSeats.seats;
    case "Malwa":
      return malwaReservedSeats.seats;
  }
}

/**
 * Get party performance in reserved seats for a given election year
 */
export function getPartyPerformance(
  year: string
): PartyPerformanceInReservedSeats | undefined {
  return partyPerformanceHistory.find((p) => p.election === year);
}

/**
 * Get Congress target scenario
 */
export function getCongressTargetScenario(
  scenario: "Minimum viable" | "Comfortable" | "Optimal"
): TargetSeatMatrix | undefined {
  return targetSeatMatrix.find((t) => t.scenario === scenario);
}

/**
 * Get regional SC distribution
 */
export function getRegionalDistribution(
  region: "Malwa" | "Majha" | "Doaba"
): RegionalSCDistribution | undefined {
  return regionalSCDistribution.find((r) => r.region === region);
}

/**
 * Get districts by region
 */
export function getDistrictsByRegion(
  region: "Doaba" | "Majha" | "Malwa"
): DistrictSCData[] {
  return districtWiseSCData.filter((d) => d.region === region);
}

/**
 * Get leaders by party
 */
export function getLeadersByParty(party: string): CurrentSCLeader[] {
  return currentSCLeaders.filter((l) => l.party === party);
}

/**
 * Get leaders by sub-group
 */
export function getLeadersBySubGroup(subGroup: string): CurrentSCLeader[] {
  return currentSCLeaders.filter(
    (l) => l.subGroup.toLowerCase().includes(subGroup.toLowerCase())
  );
}

/**
 * Check if data requires verification
 */
export function hasVerificationNeeded(dataPoint: string): boolean {
  return dataPoint.toLowerCase().includes("verification_needed");
}
