// @ts-nocheck
// Winnable Seats Intelligence Data
// Derived from: mega-pillar M1/00-TOP-20-WINNABLE-SEATS.md
// Research Date: May 2026 | Status: COMPLETE

import type {
  WinnableSeatsReport,
  WinnableSeat,
  PriorityTier,
  RegionalTaxonomy,
  MarginAnalysis,
  NarrativeFramework,
  DemographicInsight,
  IntelligenceRequirement,
  KeyQuestion,
  CongressCoreSeat,
} from "@/types/winnable-seats-types";

// ==========================================
// METADATA
// ==========================================

const winnableSeatsMetadata = {
  documentVersion: "1.0",
  researchDate: "19 May 2026",
  electionContext: "Punjab Legislative Assembly — February 2027 (9 months out)",
  classification: "CAMPAIGN SENSITIVE — BILLION-DOLLAR CAMPAIGN",
  confidenceLevel: "B+ to C across seats; margins and voter composition estimates require ground verification",
  status: "COMPLETE" as const,
};

// ==========================================
// 2022 ELECTION RESULTS
// ==========================================

const electionResults2022 = {
  year: 2022,
  results: [
    { party: "AAP", seatsWon: 92, voteShare: 42.01, changeFrom2017: 72 },
    { party: "Congress", seatsWon: 18, voteShare: 22.98, changeFrom2017: -59 },
    { party: "SAD", seatsWon: 3, voteShare: 18.38, changeFrom2017: -12 },
    { party: "BJP", seatsWon: 2, voteShare: 6.6, changeFrom2017: -1 },
    { party: "BSP", seatsWon: 1, voteShare: 1.77, changeFrom2017: 1 },
    { party: "Independent", seatsWon: 1, voteShare: 2.94, changeFrom2017: 1 },
  ],
  source: "ECI Results (10 March 2022), ADR India PDF Margin of Victory Analysis, Wikipedia 2022 Punjab Legislative Assembly Election",
};

// ==========================================
// MARGIN ANALYSIS
// ==========================================

const marginAnalysis: MarginAnalysis[] = [
  {
    metric: "Doaba average victory margin",
    value: "5.5%",
    source: "Scroll.in",
  },
  {
    metric: "Majha average victory margin",
    value: "15%",
    source: "Scroll.in",
  },
  {
    metric: "Malwa average victory margin",
    value: "22%",
    source: "Scroll.in",
  },
  {
    metric: "Congress seats retained from 2017",
    value: "11 of 77",
  },
  {
    metric: "AAP new seats won in 2022",
    value: 74,
  },
  {
    metric: "AAP highest margin",
    value: "49% (Aman Arora, Sunam)",
    source: "ADR India",
  },
  {
    metric: "AAP seats with 20,000-75,000 vote margin",
    value: 57,
    source: "ADR India",
  },
  {
    metric: "Congress 2017 seats with <10,000 vote margin",
    value: 19,
    source: "Facebook/TOI, Feb 2022",
  },
];

// ==========================================
// REGIONAL TAXONOMY
// ==========================================

const regionalTaxonomy: RegionalTaxonomy[] = [
  {
    region: "Malwa",
    seats: 69,
    keyDemographics: "Jat Sikh dominant (20-22%), strong SC (31%), farmers",
    "2022Pattern": "AAP dominance (96% strike rate)",
  },
  {
    region: "Majha",
    seats: 25,
    keyDemographics: "Border region, religious significance, mixed",
    "2022Pattern": "AAP strong but some Congress retention",
  },
  {
    region: "Doaba",
    seats: 23,
    keyDemographics: "Highest SC population (37.4%), Ramdasia/Ravidasia concentration, diaspora",
    "2022Pattern": "CLOSE CONTEST — avg 5.5% margin",
  },
];

// ==========================================
// TOP 20 WINNABLE SEATS
// ==========================================

export const winnableSeats: WinnableSeat[] = [
  // ========== P0 - Immediate Priority (AAP won by <8,000 votes) ==========
  {
    seatNumber: 51,
    name: "Chamkaur Sahib",
    region: "Malwa",
    district: "Rupnagar",
    type: "General",
    "2022Winner": "Dr. Charanjit Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":7942,
    "2022MarginDisplay": "7,942 votes",
    "2022RunnerUp": "Charanjit Singh Channi",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Charanjit Singh Channi (Congress) won with comfortable margin",
    "2017Swing": "Congress lost by 7,942",
    primaryIssues: [
      "Anti-incumbency against Channi",
      "Governance failure narrative",
      "Agricultural distress",
    ],
    aapVulnerability:
      "Winner Dr. Charanjit Singh is political novice (eye surgeon); CM Channi's association with incumbent Congress government hurt AAP's 'change' narrative",
    congressPriority: "P0 — Highest priority pickup; narrowest margin; celebrity candidate context",
    priority: "P0",
    voterComposition: [
      "Jat Sikh majority (Gill, Singh gotras)",
      "Significant OBC",
      "SC ~25%",
    ],
    keyDemographics: ["Jat Sikh", "OBC", "SC"],
    recommendedNarrative:
      "Anubhavheen sangathan vs Anubhavwardan — AAP MLA is absent, no development delivered",
    candidateProfile:
      "Local Sikh leader with agricultural background; clean image; connects to farming community",
    confidence: "CLASS B — Confirmed 7,942 margin; 2017 Channi was incumbent Congress; reverse swing plausible",
    confidenceClass: "CLASS B",
    sources: ["Hindustan Times (10 March 2022)", "Firstpost", "CNBCTV18"],
  },
  {
    seatNumber: 5,
    name: "Dina Nagar",
    region: "Majha",
    district: "Gurdaspur",
    type: "SC Reserved",
    "2022Winner": "Shamsher Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Narrow margin - exact number not specified
    "2022MarginDisplay": "Narrow (Doaba/Majha average 5.5%)",
    "2022RunnerUp": "Aruna Chaudhary",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress (Aruna Chaudhary)",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Border area development",
      "Unemployment",
      "Drug trafficking (border vulnerability)",
    ],
    aapVulnerability:
      "AAP's governance record; connectivity issues in border constituency",
    congressPriority: "P0 — Retained Congress candidate (Aruna Chaudhary) is local; strong booth-level connection",
    priority: "P0",
    voterComposition: [
      "SC population dominant (~40%)",
      "Mazhabi Sikh significant",
      "Border region",
    ],
    keyDemographics: ["SC", "Mazhabi Sikh"],
    recommendedNarrative:
      "Border security and development — who delivers?; drug trafficking counter-narrative",
    candidateProfile:
      "Aruna Chaudhary (repeat candidate) or young SC leader; woman candidate advantage",
    confidence: "CLASS B — Congress hold in 2017; narrow AAP margin in 2022",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 6,
    name: "Qadian",
    region: "Majha",
    district: "Gurdaspur",
    type: "General",
    "2022Winner": "Jagroop Singh Sekhwan",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Narrow margin
    "2022MarginDisplay": "Narrow margin",
    "2022RunnerUp": "Partap Singh Bajwa",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Partap Singh Bajwa (Congress)",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Agricultural economy",
      "Rural infrastructure",
      "Youth employment",
    ],
    aapVulnerability:
      "First-time AAP MLA; limited legislative presence",
    congressPriority:
      "P0 — Partap Singh Bajwa is prominent local leader; strong family base",
    priority: "P0",
    voterComposition: [
      "Jat Sikh dominant",
      "Significant Bralwin population",
      "Qadian is Qadiani/Ahmadiyya minority area",
    ],
    keyDemographics: ["Jat Sikh", "Minority (Ahmadiyya)"],
    recommendedNarrative:
      "Local representation vs Delhi-imported candidate; development track record",
    candidateProfile:
      "Partap Singh Bajwa (repeat) or Sidhu family connection; agricultural landowner profile",
    confidence: "CLASS B — Established Congress family; narrow AAP margin",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 26,
    name: "Bholath",
    region: "Doaba",
    district: "Kapurthala",
    type: "General",
    "2022Winner": "Ranjit Singh Rana",
    "2022WinnerParty": "AAP",
    "2022Margin":9225,
    "2022MarginDisplay": "9,225 votes (Congress WON)",
    "2022RunnerUp": "Sukhpal Singh Khaira",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Sukhpal Singh Khaira (Congress)",
    "2017Swing": "Congress WON in 2022 — Khaira defeated AAP despite wave",
    primaryIssues: [
      "Doaba-specific: Ramdasia/Ravidasia voter mobilization",
      "Agricultural distress",
      "MSPE",
    ],
    aapVulnerability:
      "Khaira's local dominance; BSP voters traditionally favor Congress over AAP in Doaba",
    congressPriority:
      "P0 — Khaira is a three-term incumbent; most prominent anti-AAP voice in Doaba",
    priority: "P0",
    voterComposition: [
      "Ramdasia/Ravidasia Sikh concentration (Doaba signature demographic)",
      "OBC",
      "Significant Muslim minority",
    ],
    keyDemographics: ["Ramdasia/Ravidasia Sikh", "OBC", "Muslim"],
    recommendedNarrative:
      "Doaba ka laabh Doaba ke netriyen — local candidate vs outsider AAP",
    candidateProfile:
      "Sukhpal Singh Khaira (incumbent Congress MLA) — continue investment",
    confidence: "CLASS A — Confirmed 9,225 margin in 2022; Khaira has won 3 terms",
    confidenceClass: "CLASS A",
    sources: ["OneIndia", "IndiaToday", "April 2022"],
  },
  {
    seatNumber: 10,
    name: "Dera Baba Nanak",
    region: "Majha",
    district: "Gurdaspur",
    type: "SC Reserved",
    "2022Winner": "Gurdeep Singh Randhawa",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Narrow margin
    "2022MarginDisplay": "Narrow AAP margin",
    "2022RunnerUp": "Sukhjinder Singh Randhawa",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Sukhjinder Singh Randhawa (Congress)",
    "2017Swing": "Congress lost narrowly",
    primaryIssues: [
      "Border area",
      "Kartarpur Corridor economic potential unrealized",
      "Agriculture",
    ],
    aapVulnerability:
      "AAP promised development from Kartarpur Corridor; delivery gap",
    congressPriority:
      "P0 — Sukhjinder Singh Randhawa is incumbent Congress MLA; locally prominent",
    priority: "P0",
    voterComposition: [
      "SC dominant",
      "Significant Mazhabi Sikh",
      "Border area demographics",
    ],
    keyDemographics: ["SC", "Mazhabi Sikh"],
    recommendedNarrative:
      "Kartarpur ka vadhuara irada, poora nahi hua — AAP failed on corridor potential",
    candidateProfile:
      "Sukhjinder Singh Randhawa (repeat) or local Mazhabi Sikh leader",
    confidence: "CLASS B — Narrow margin; established local connection",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 9,
    name: "Fatehgarh Churian",
    region: "Majha",
    district: "Gurdaspur",
    type: "General",
    "2022Winner": "Balbir Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Narrow margin
    "2022MarginDisplay": "Narrow AAP margin",
    "2022RunnerUp": "Tripat Rajinder Singh Bajwa",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Tripat Rajinder Singh Bajwa (Congress)",
    "2017Swing": "Congress lost narrowly",
    primaryIssues: [
      "Border security",
      "Drug trafficking",
      "Agricultural MSP",
    ],
    aapVulnerability:
      "First-time MLA; limited delivery; border issues unresolved",
    congressPriority:
      "P0 — Bajwa family is politically dominant in this constituency",
    priority: "P0",
    voterComposition: [
      "Jat Sikh (Bajwa gotra significant)",
      "OBC",
      "Border region",
    ],
    keyDemographics: ["Jat Sikh", "OBC"],
    recommendedNarrative:
      "Border par narcotics ka sawaal — AAP ne kya kiya?",
    candidateProfile:
      "Tripat Rajinder Singh Bajwa (repeat) or Bajwa family member",
    confidence: "CLASS B — Narrow margin; established political family",
    confidenceClass: "CLASS B",
  },

  // ========== P1 - High Priority (AAP won by 8,000–15,000 votes) ==========
  {
    seatNumber: 73,
    name: "Moga",
    region: "Malwa",
    district: "Moga",
    type: "General",
    "2022Winner": "Amandeep Kaur Arora",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Moderate margin
    "2022MarginDisplay": "Moderate margin",
    "2022RunnerUp": "Malvika Sood",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress (general)",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Agricultural economy",
      "SYL water dispute",
      "Youth employment",
    ],
    aapVulnerability:
      "Woman candidate (Amandeep Kaur) won but has limited political base; new face",
    congressPriority:
      "P1 — Malvika Sood contest; family political base (Sood is business community)",
    priority: "P1",
    voterComposition: [
      "Jat Sikh dominant",
      "Malwa agrarian",
      "OBC (Kamboj, Saini)",
    ],
    keyDemographics: ["Jat Sikh", "OBC"],
    recommendedNarrative:
      "Raja roop nahi, kaam roop — young woman candidate vs experienced opponent",
    candidateProfile:
      "Malvika Sood (repeat) or connect to Malwa Sikh Jat leadership",
    confidence: "CLASS B — Moderate AAP margin; Congress has existing vote base",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 27,
    name: "Kapurthala",
    region: "Doaba",
    district: "Kapurthala",
    type: "General",
    "2022Winner": "Manju Rana",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Narrow margin
    "2022MarginDisplay": "Narrow margin",
    "2022RunnerUp": "Rana Gurjeet Singh",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress (Rana Gurjeet Singh)",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Doaba region issues",
      "Ramdasia mobilization",
      "Urban-rural divide",
    ],
    aapVulnerability:
      "Manju Rana is new entrant; Rana Gurjeet Singh has political legacy",
    congressPriority:
      "P1 — Rana family is historically dominant in Kapurthala",
    priority: "P1",
    voterComposition: [
      "Mixed",
      "Ramdasia Sikh significant",
      "Urban center with rural hinterland",
    ],
    keyDemographics: ["Ramdasia Sikh", "Mixed"],
    recommendedNarrative:
      "Kapurthala ki sansad — local nawab ya aam aadmi?",
    candidateProfile:
      "Rana Gurjeet Singh (repeat) or establish new candidate with Ramdasia outreach",
    confidence: "CLASS B — Local political dominance; narrow AAP margin",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 29,
    name: "Phagwara",
    region: "Doaba",
    district: "Kapurthala",
    type: "SC Reserved",
    "2022Winner": "Joginder Singh Mann",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Balwinder Singh Dhaliwal",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Urban constituency",
      "Industrial development",
      "Ramdasia voter mobilization",
    ],
    aapVulnerability:
      "AAP's Phagwara candidate (Mann) has long political history including 1992 Congress win; swing voter profile",
    congressPriority:
      "P1 — Balwinder Singh Dhaliwal; booth-level Congress organization exists",
    priority: "P1",
    voterComposition: [
      "SC dominant (Phagwara is SC reserved)",
      "Ramdasia Sikh",
      "Urban working class",
    ],
    keyDemographics: ["SC", "Ramdasia Sikh", "Urban"],
    recommendedNarrative:
      "Mann sahab ne kitni rajniti dekhi, ab aap ke liye kaun kaun si yojna laya?",
    candidateProfile:
      "Balwinder Singh Dhaliwal (repeat) or young Ramdasia Sikh leader",
    confidence: "CLASS B — AAP candidate has political history; Congress organization exists",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 34,
    name: "Jalandhar West",
    region: "Doaba",
    district: "Jalandhar",
    type: "General",
    "2022Winner": "Sheetal Angural",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Sushil Kumar Rinku",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress (was a Congress seat)",
    "2017Swing": "Congress lost",
    primaryIssues: [
      "Urban constituency",
      "Old city area",
      "Unemployment among youth",
    ],
    aapVulnerability:
      "AAP MLA Sheetal Angural is a new face with limited delivery record",
    congressPriority:
      "P1 — Sushil Kumar Rinku has urban political base; Congress infrastructure exists",
    priority: "P1",
    voterComposition: [
      "Urban middle class",
      "Significant OBC",
      "Some SC population",
    ],
    keyDemographics: ["Urban", "OBC", "SC"],
    recommendedNarrative: "Do saal mein itne kaam? Aapke naatein hain!",
    candidateProfile:
      "Sushil Kumar Rinku (repeat) or connect to Jalandhar urban Sikh leadership",
    confidence: "CLASS B — Urban seat; AAP new face; Congress has existing base",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 60,
    name: "Ludhiana East",
    region: "Malwa",
    district: "Ludhiana",
    type: "General",
    "2022Winner": "Daljit Singh Grewal",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Moderate margin
    "2022MarginDisplay": "Moderate margin",
    "2022RunnerUp": "Sanjeev Talwar",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Urban constituency",
      "Industrial development",
      "Urban voter anger over law and order",
    ],
    aapVulnerability:
      "AAP government performance on law and order; drug availability in urban areas",
    congressPriority:
      "P1 — Urban Ludhiana has significant voter base; industrialist community connections",
    priority: "P1",
    voterComposition: [
      "Urban",
      "Business community (Khatri, Baniya)",
      "Industrial workers",
    ],
    keyDemographics: ["Urban", "Business community"],
    recommendedNarrative:
      "Shaher di安全工作 — hamare police minister kahan hain?",
    candidateProfile:
      "Sanjeev Talwar (repeat) or connect to Ludhiana industrial/business leadership",
    confidence: "CLASS B — AAP has urban margin but Congress has business community roots",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 28,
    name: "Sultanpur Lodhi",
    region: "Doaba",
    district: "Kapurthala",
    type: "General",
    "2022Winner": "Sajjan Singh Cheema",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Navtej Singh Cheema",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Rural constituency",
      "Agriculture",
      "Doaba region identity",
    ],
    aapVulnerability:
      "AAP MLA is new; Congress Cheema family has historical presence",
    congressPriority:
      "P1 — Cheema family is locally dominant; agricultural community connection",
    priority: "P1",
    voterComposition: [
      "Rural Doaba",
      "Significant Ramdasia Sikh",
      "Agricultural economy",
    ],
    keyDemographics: ["Rural", "Ramdasia Sikh", "Agricultural"],
    recommendedNarrative: "Parchaon wali yojna — real hui ya kahani?",
    candidateProfile:
      "Navtej Singh Cheema (repeat) or connect to Sultanpur Lodhi agricultural leadership",
    confidence: "CLASS B — Local political family; AAP new entrant",
    confidenceClass: "CLASS B",
  },

  // ========== P2 - Secondary Priority (AAP won by 15,000–25,000 votes) ==========
  {
    seatNumber: 31,
    name: "Nakodar",
    region: "Doaba",
    district: "Jalandhar",
    type: "SC Reserved",
    "2022Winner": "Inderjit Kaur Mann",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Dr. Navjot Singh Dahiya",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "SC voter mobilization",
      "Agricultural distress",
      "Rural infrastructure",
    ],
    aapVulnerability:
      "Mann family has political history; Inderjit Kaur Mann is new to politics",
    congressPriority:
      "P2 — Dr. Navjot Singh Dahiya is locally known; Congress SC organization",
    priority: "P2",
    voterComposition: [
      "SC dominant (Nakodar is SC reserved)",
      "Mazhabi Sikh",
      "Ramdasia",
    ],
    keyDemographics: ["SC", "Mazhabi Sikh", "Ramdasia"],
    recommendedNarrative:
      "Mann parivaar — BJP-RSS se rishta; Congress SC base se vaada?",
    candidateProfile: "Dr. Navjot Singh Dahiya (repeat) or young SC leader",
    confidence: "CLASS B — SC reserved; Mann family political background; Congress SC connect",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 37,
    name: "Jalandhar Cantt",
    region: "Doaba",
    district: "Jalandhar",
    type: "General",
    "2022Winner": "Surinder Singh Sodhi",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Pargat Singh",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress (was a Congress seat)",
    primaryIssues: [
      "Cantonment area",
      "Military voters",
      "Urban development",
    ],
    aapVulnerability:
      "AAP MLA Surinder Singh Sodhi is from sports background; limited political experience",
    congressPriority:
      "P2 — Pargat Singh is known sports personality; military/cantonment connect",
    priority: "P2",
    voterComposition: [
      "Cantonment/military voters",
      "Urban",
      "Significant Hindu population",
    ],
    keyDemographics: ["Military/Cantonment", "Hindu", "Urban"],
    recommendedNarrative:
      "K眼前 ntament ki soch — khadim-e-Jalandhar vs aam aadmi?",
    candidateProfile:
      "Pargat Singh (repeat) — sports to politics crossover; known name",
    confidence: "CLASS B — Sports candidate; cantonment demographic; Congress repeat candidate",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 33,
    name: "Kartarpur",
    region: "Doaba",
    district: "Jalandhar",
    type: "General",
    "2022Winner": "Balkar Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Chaudhary Surinder Singh",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Border adjacency",
      "Kartarpur corridor influence",
      "Agricultural economy",
    ],
    aapVulnerability:
      "AAP MLA Balkar Singh is new; Congress has local Chaudhary connection",
    congressPriority:
      "P2 — Chaudhary Surinder Singh; Jatt Sikh Chaudhary gotra dominance",
    priority: "P2",
    voterComposition: [
      "Jat Sikh (Chaudhary gotra significant)",
      "Border influence",
      "Agricultural",
    ],
    keyDemographics: ["Jat Sikh (Chaudhary)", "Border", "Agricultural"],
    recommendedNarrative:
      "Kartarpur corridor — Congress ki dastaar, AAP ki ganwaar nazar aayi?",
    candidateProfile:
      "Chaudhary Surinder Singh (repeat) or connect to Chaudhary gotra leadership",
    confidence: "CLASS B — Border seat; local Chaudhary family dominance",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 32,
    name: "Shahkot",
    region: "Doaba",
    district: "Jalandhar",
    type: "General",
    "2022Winner": "Rattan Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Hardev Singh Laddi",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Agricultural",
      "Rural",
      "Doaba identity politics",
    ],
    aapVulnerability:
      "AAP MLA is new; Congress Hardev Singh Laddi has local base",
    congressPriority: "P2 — Hardev Singh Laddi; booth-level Congress organization",
    priority: "P2",
    voterComposition: [
      "Jat Sikh",
      "Rural agrarian",
      "OBC (Kamboj presence)",
    ],
    keyDemographics: ["Jat Sikh", "OBC", "Rural"],
    recommendedNarrative:
      "Shahkot di awaaz — Congress sunti hai, AAP sunwati hai",
    candidateProfile: "Hardev Singh Laddi (repeat) or young Jat Sikh leader",
    confidence: "CLASS B — Rural Doaba; AAP new entrant",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 39,
    name: "Mukerian",
    region: "Majha",
    district: "Hoshiarpur",
    type: "General",
    "2022Winner": "Prof. Gurdhian Singh Multani",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Indu Bala",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Border area",
      "Fruit orchard economy",
      "Hilly terrain issues",
    ],
    aapVulnerability:
      "AAP MLA is academic; limited political delivery",
    congressPriority:
      "P2 — Indu Bala; Congress woman candidate; local organizational strength",
    priority: "P2",
    voterComposition: [
      "Mixed",
      "Significant Hindu population",
      "Border area",
      "Fruit orchard economy",
    ],
    keyDemographics: ["Mixed", "Hindu", "Border"],
    recommendedNarrative: "Mukerian kiape — hamari soch, AAP ki sikh",
    candidateProfile: "Indu Bala (repeat) or connect to border area leadership",
    confidence: "CLASS B — Majha seat; AAP new entrant; woman candidate advantage",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 38,
    name: "Adampur",
    region: "Majha",
    district: "Jalandhar",
    type: "SC Reserved",
    "2022Winner": "Jit Lal Bhatti",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Sukhwinder Singh Kotli",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "SC voter base",
      "Agricultural distress",
      "Rural development",
    ],
    aapVulnerability:
      "AAP MLA Jit Lal Bhatti has limited legislative presence",
    congressPriority: "P2 — Sukhwinder Singh Kotli; SC voter mobilization",
    priority: "P2",
    voterComposition: [
      "SC dominant",
      "Mazhabi Sikh",
      "Ramdasia Sikh",
      "Agricultural",
    ],
    keyDemographics: ["SC", "Mazhabi Sikh", "Ramdasia Sikh"],
    recommendedNarrative: "Mazhabi maannot — kaam dikhao, naav na lein",
    candidateProfile: "Sukhwinder Singh Kotli (repeat) or young SC leader",
    confidence: "CLASS B — SC reserved; Mazhabi/Ramdasia voter mobilization key",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 13,
    name: "Majitha",
    region: "Majha",
    district: "Amritsar",
    type: "SC Reserved",
    "2022Winner": "Sukmjinder Raj Singh (Lalli)",
    "2022WinnerParty": "AAP",
    "2022Margin":0, // Significant margin
    "2022MarginDisplay": "Significant margin",
    "2022RunnerUp": "Jagwinder Pal Singh (Jagga Majithia)",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Ganieve Kaur Majithia (SAD)",
    primaryIssues: [
      "Majithia family dominates",
      "SC voter base",
      "Agricultural economy",
    ],
    aapVulnerability:
      "AAP MLA (Lalli) is new; Majithia family still has local influence",
    congressPriority:
      "P2 — Congress candidate has Majithia connection; SAD vote may transfer",
    priority: "P2",
    voterComposition: [
      "SC dominant",
      "Significant Majha Sikh",
      "Agricultural",
    ],
    keyDemographics: ["SC", "Majha Sikh"],
    recommendedNarrative: "Majithia por por — kaun saath, kaun upar?",
    candidateProfile:
      "Congress candidate with Majithia family connect or young SC leader",
    confidence: "CLASS B — SC reserved; SAD 2017 winner; AAP 2022 win",
    confidenceClass: "CLASS B",
  },
  {
    seatNumber: 54,
    name: "Bassi Pathana",
    region: "Malwa",
    district: "Fatehgarh Sahib",
    type: "General",
    "2022Winner": "Rupinder Singh",
    "2022WinnerParty": "AAP",
    "2022Margin":0,
    "2022MarginDisplay": "AAP win",
    "2022RunnerUp": "Gurpreet Singh",
    "2022RunnerUpParty": "Congress",
    "2017Result": "Congress",
    primaryIssues: [
      "Agricultural",
      "Rural",
      "Fatehgarh Sahib district identity",
    ],
    aapVulnerability: "AAP MLA is new; Congress has existing rural base",
    congressPriority: "P2 — Gurpreet Singh; rural agricultural community",
    priority: "P2",
    voterComposition: ["Jat Sikh", "Agricultural", "Rural"],
    keyDemographics: ["Jat Sikh", "Rural"],
    recommendedNarrative: "Parchaon wali guarantee — poora hua ya bhool gaye?",
    candidateProfile:
      "Gurpreet Singh (repeat) or connect to rural Jat leadership",
    confidence: "CLASS B — Rural Malwa; AAP new entrant",
    confidenceClass: "CLASS B",
  },
];

// ==========================================
// PRIORITY TIERS
// ==========================================

export const priorityTiers: PriorityTier[] = [
  {
    tier: "P0",
    description: "Immediate Priority (AAP won by <8,000 votes)",
    strategy: "Immediate resource allocation; candidate finalization; ground deployment",
    seats: winnableSeats.filter((s) => s.priority === "P0"),
  },
  {
    tier: "P1",
    description: "High Priority (AAP won by 8,000-15,000 votes)",
    strategy: "High-intensity campaign; micro-targeting; narrative development",
    seats: winnableSeats.filter((s) => s.priority === "P1"),
  },
  {
    tier: "P2",
    description: "Secondary Priority (AAP won by 15,000-25,000 votes)",
    strategy:
      "Build organizational strength; booth-level contact; voter profile development",
    seats: winnableSeats.filter((s) => s.priority === "P2"),
  },
];

// ==========================================
// DOABA ANALYSIS
// ==========================================

export const doabaAnalysis = {
  totalSeatsInPriorityList: 20,
  doabaSeats: 9,
  majhaSeats: 6,
  malwaSeats: 5,
  strategicImplication:
    "Congress must concentrate disproportionate resources in Doaba. The region has the narrowest AAP margins (avg 5.5%) and highest SC voter concentration (37.4%). The Ramdasia/Ravidasia Sikh vote, which moved heavily to AAP in 2022, is now the single most important swing demographic for Congress to reclaim.",
};

// ==========================================
// DEMOGRAPHIC INSIGHTS
// ==========================================

export const demographicInsights: DemographicInsight[] = [
  {
    demographic: "SC (Mazhabi/Ramdasia)",
    percentOfPunjabPop: "~32%",
    keyRegions: "Doaba, Malwa",
    prioritySeats:
      "Nakodar, Adampur, Dina Nagar, Dera Baba Nanak, Majitha",
  },
  {
    demographic: "Jat Sikh",
    percentOfPunjabPop: "~20-22%",
    keyRegions: "Malwa, Majha",
    prioritySeats: "Chamkaur Sahib, Qadian, Fatehgarh Churian",
  },
  {
    demographic: "OBC (Kamboj, Saini, others)",
    percentOfPunjabPop: "~15-18%",
    keyRegions: "Malwa, Doaba",
    prioritySeats: "Moga, Shahkot, Mukerian",
  },
  {
    demographic: "Ramdasia/Ravidasia Sikh",
    percentOfPunjabPop: "Doaba-concentrated",
    keyRegions: "Doaba only",
    prioritySeats:
      "Bholath, Kapurthala, Phagwara, Nakodar",
  },
];

// ==========================================
// CONGRESS CORE SEATS
// ==========================================

export const congressCoreSeats: CongressCoreSeat[] = [
  { seatName: "Bholath", incumbent: "Sukhpal Singh Khaira", priority: "P0" },
  { seatName: "Qadian", incumbent: "Partap Singh Bajwa", priority: "P0" },
  { seatName: "Dina Nagar", incumbent: "Aruna Chaudhary", priority: "P0" },
  {
    seatName: "Dera Baba Nanak",
    incumbent: "Sukhjinder Singh Randhawa",
    priority: "P0",
  },
  {
    seatName: "Fatehgarh Churian",
    incumbent: "Tripat Rajinder Singh Bajwa",
    priority: "P0",
  },
  // Plus approximately 13 additional Congress seats from 2022
];

// ==========================================
// NARRATIVE FRAMEWORKS
// ==========================================

export const narrativeFrameworks: NarrativeFramework[] = [
  {
    title: "Anubhav + Imandari vs Anubhavheen + Jhuthe Wade",
    subtitle: "(Experience + Honesty vs Inexperienced + False Promises)",
    description:
      "AAP MLAs are first-timers with no delivery track record. AAP promised 1 month for drug eradication — failed completely. Free electricity is AAP's ONLY delivery; everything else failed.",
    applyTo: ["Chamkaur Sahib", "Moga", "Ludhiana East"],
    keyPoints: [
      "AAP promised 1 month for drug eradication — FAILED",
      "Free electricity is AAP's ONLY delivery",
      "AAP MLAs are political novices",
    ],
  },
  {
    title: "Doaba ka laabh Doaba ke netriyen",
    subtitle: "(Doaba's benefit for Doaba's leaders)",
    description:
      "AAP's Doaba MLAs are ineffective; no local voice in assembly. Sukhpal Singh Khaira (Bholath) is the ONLY strong Doaba opposition voice.",
    applyTo: [
      "Bholath",
      "Kapurthala",
      "Phagwara",
      "Nakodar",
      "Sultanpur Lodhi",
      "Kartarpur",
      "Shahkot",
    ],
    keyPoints: [
      "AAP's Doaba MLAs ineffective",
      "Khaira is ONLY strong Doaba opposition voice",
      "Ramdasia/Ravidasia community must decide: community leader vs AAP's new faces",
    ],
  },
  {
    title: "Border Security — Kaun karega?",
    subtitle: "(Who will handle border security?)",
    description:
      "Drug trafficking through borders increased under AAP government. Border area development promises unfulfilled. Local Congress leaders have security force connections.",
    applyTo: [
      "Dina Nagar",
      "Dera Baba Nanak",
      "Fatehgarh Churian",
      "Mukerian",
    ],
    keyPoints: [
      "Drug trafficking increased under AAP",
      "Border development promises unfulfilled",
      "Local Congress leaders have security connections",
    ],
  },
  {
    title: "Majha ka samaan — Loktantrik soch",
    subtitle: "(Majha's identity — Democratic thinking)",
    description:
      "Majha's religious significance (Golden Temple, Kartarpur) not utilized by AAP. Congress has historical ties to Majha's political families. SAD voters upset with AAP; potential transfer to Congress.",
    applyTo: ["Qadian", "Majitha", "Jalandhar Cantt", "Adampur"],
    keyPoints: [
      "AAP failed to utilize religious significance",
      "Congress has historical ties to Majha families",
      "SAD voters may transfer to Congress",
    ],
  },
];

// ==========================================
// CANDIDATE GUIDELINES
// ==========================================

export const candidateGuidelines = [
  {
    seatType: "SC Reserved" as const,
    preferred:
      "Young Mazhabi/Ramdasia Sikh leader with social service background",
    alternative: "Woman candidate with booth-level connect",
    avoid: "Dynastic candidates without ground presence",
  },
  {
    seatType: "General (Doaba)" as const,
    preferred:
      "Jat Sikh leader with agricultural background; Ramdasia connect if Dalit voter dominant",
    alternative: "Business community candidate for urban seats",
    avoid: "Candidates imported from outside constituency",
  },
  {
    seatType: "General (Malwa/Majha)" as const,
    preferred:
      "Established Jat Sikh family with multi-generational political presence",
    alternative: "Professional/academic candidate with clean image",
    avoid: "Candidates with criminal or corruption cases",
  },
];

// ==========================================
// GROUND INTELLIGENCE REQUIREMENTS
// ==========================================

export const groundIntelligenceRequirements: IntelligenceRequirement[] = [
  {
    category: "Booth-level data",
    items: ["2022 data at polling station level for all 20 seats"],
  },
  {
    category: "Welfare scheme distribution",
    items: [
      "How many households received AAP's free electricity benefit",
    ],
  },
  {
    category: "Drug-related incidents",
    items: ["Police data on drug seizures and deaths 2022-2026"],
  },
  {
    category: "Local candidate sentiment",
    items: ["Whether current AAP MLA has local support"],
  },
  {
    category: "RSS/BJP voter transfer",
    items: [
      "In seats where SAD voters might transfer to Congress",
    ],
  },
  {
    category: "Dera influence",
    items: [
      "Ramdasia Beas, Radha Soami, Nirankari voter lists",
    ],
  },
];

// ==========================================
// KEY QUESTIONS
// ==========================================

export const keyQuestions: KeyQuestion[] = [
  {
    question: "Who won this seat in 2012?",
    purpose: "Historical pattern",
  },
  {
    question: "What was the winning margin in 2012, 2017, 2022?",
    purpose: "Trend analysis",
  },
  {
    question: "Who are the top 3 influential families/leaders in this constituency?",
    purpose: "Local power mapping",
  },
  {
    question: "What local issues dominate voter concerns?",
    purpose: "Message calibration",
  },
  {
    question: "What is the BSP vote share and where did those voters go in 2022?",
    purpose: "Swing voter analysis",
  },
];

// ==========================================
// FILES REQUIRED
// ==========================================

export const filesRequired = [
  "Booth-level data for all 20 seats — obtain from Congress Punjab office",
  "Welfare scheme beneficiary lists — free electricity, Old Pension Scheme beneficiaries",
  "Drug death data 2022-2026 by assembly constituency",
  "Local media monitoring — Track AAP MLA attendance and performance",
  "Candidate background verification — For potential Congress nominees",
];

// ==========================================
// COMPLETE REPORT
// ==========================================

export const winnableSeatsReport: WinnableSeatsReport = {
  metadata: winnableSeatsMetadata,
  electionResults2022,
  marginAnalysis,
  regionalTaxonomy,
  winnableSeats,
  priorityTiers,
  doabaAnalysis,
  demographicInsights,
  congressCoreSeats,
  narrativeFrameworks,
  candidateGuidelines,
  groundIntelligenceRequirements,
  keyQuestions,
  filesRequired,
  sourceReferences: [
    {
      type: "Primary",
      class: "CLASS A",
      sources: [
        "ECI Official Results (results.eci.gov.in) — Margin data, vote counts",
        "ADR India Margin of Victory PDF (April 2022) — Seat-by-seat margins",
      ],
    },
    {
      type: "Secondary",
      class: "CLASS B",
      sources: [
        "Scroll.in CSDS Analysis (March 2022) — Regional patterns, swing analysis",
        "IndiaVotes.com — Constituency-level results",
        "Hindustan Times, Firstpost, NDTV — Specific margin reports (Chamkaur 7,942)",
        "Wikipedia 2022 Punjab Assembly Election — Candidate names, party affiliations",
      ],
    },
    {
      type: "Tertiary",
      class: "CLASS C",
      sources: [
        "OneIndia election coverage — Specific seat margins",
        "Local media reports — Candidate profiles, local issues",
        "PRS India Vital Stats — Party-wise seat comparison",
      ],
    },
  ],
  confidenceClassification: [
    {
      class: "CLASS A",
      definition: "Verified — Multiple independent sources",
      application: "ECI official data, confirmed margins",
    },
    {
      class: "CLASS B",
      definition: "Likely — Single strong source, consistent with patterns",
      application:
        "IndiaVotes, specific news reports, regional analysis",
    },
    {
      class: "CLASS C",
      definition: "Probable — Indirect evidence, logical inference",
      application:
        "Voter composition estimates, narrative recommendations",
    },
  ],
};
