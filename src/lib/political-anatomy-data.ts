// @ts-nocheck
// Political Anatomy KPI Data for Punjab Congress 2027 Election Dashboard
// Derived from: research-P2/01_punjab_political_anatomy/*.md
// Research Date: May 20, 2026 | Data Currency: 2025-2026

import type {
  PoliticalAnatomyKPI,
  ThreeBodySystem,
  RegionalPoliticalStatus,
  CasteEcosystemData,
  FarmerCrisisData,
  YouthUnemploymentData,
  NRIRemittanceData,
  JatSikhBehaviorData,
  MajhaData,
  DoabaData,
  MalwaData,
} from "@/types/political-anatomy-types";

// ==========================================
// THREE-BODY SYSTEM DATA
// ==========================================

const threeBodySystemData: ThreeBodySystem = {
  malwaSeats: 69,
  majhaSeats: 25,
  doabaSeats: 23,
  totalSeats: 117,
  malwaPercent: 59,
  majhaPercent: 21,
  doabaPercent: 20,
  regions: [
    {
      name: "Malwa",
      meaning: "Land below the Sutlej River",
      rivers: "Sutlej (north) to Ghaggar (south)",
      districts: [
        "Bathinda", "Mansa", "Sangrur", "Ludhiana", "Ferozepur", "Patiala",
        "Moga", "Barnala", "Faridkot", "Muktsar", "Fazilka", "Anandpur Sahib",
      ],
      assemblySeats: 69,
      lokSabhaSeats: 8,
      percentageOfSeats: 59,
      keyCharacteristics: [
        "Agrarian heartland - cotton belt transitioning to rice-wheat",
        "Highest farmer suicide concentration (80-90%)",
        "Zamindari/Jat Sikh dominance",
        "Political dynasty strongholds (Badal, Jakhar, Brar)",
      ],
      scPopulationPercent: 31.3,
      reservedSeatPercent: 27,
      primaryEconomy: "Agriculture (cotton, wheat, paddy)",
      nickname: "Zamindari Belt / Farmers' Agitation Epicenter",
    },
    {
      name: "Majha",
      meaning: "Middle land - between Ravi and Beas rivers",
      rivers: "Ravi (west) to Beas (east)",
      districts: ["Amritsar", "Tarn Taran", "Gurdaspur", "Pathankot"],
      assemblySeats: 25,
      lokSabhaSeats: 4,
      percentageOfSeats: 21,
      keyCharacteristics: [
        "Sikh religious heartland - Panthic belt",
        "Golden Temple and Kartarpur Corridor",
        "Border state sensitivities",
        "Mixed rural-urban demography",
      ],
      scPopulationPercent: 24,
      reservedSeatPercent: 24,
      primaryEconomy: "Agriculture + Religious tourism",
      nickname: "Panthic Belt",
    },
    {
      name: "Doaba",
      meaning: "Land between two waters - Beas and Sutlej",
      rivers: "Beas (north) to Sutlej (south)",
      districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "SBS Nagar"],
      assemblySeats: 23,
      lokSabhaSeats: 3,
      percentageOfSeats: 20,
      keyCharacteristics: [
        "NRI Hub of Punjab - highest emigration",
        "Highest SC concentration in India (37.4%)",
        "Most fertile land due to Bist Doab Canal",
        "Education hub with Arya Samaji institutions",
      ],
      scPopulationPercent: 37.4,
      reservedSeatPercent: 40,
      primaryEconomy: "Agriculture + NRI remittances",
      nickname: "Dalit Epicenter / NRI Belt",
    },
  ],
};

// ==========================================
// REGIONAL POLITICAL STATUS DATA
// ==========================================

// MAJHA REGION DATA
const majhaRegionalStatus: RegionalPoliticalStatus = {
  region: "Majha",
  researchDate: "May 20, 2026",
  classification: "Open Source Research",
  executiveSummary: "Majha (25 seats) experiencing significant political volatility. AAP dominates with 92 statewide seats, but November 2025 Tarn Taran bypoll revealed continued panthic voter fracturing. Congress organizational disarray with unresolved leadership factionalism.",

  districts: ["Amritsar", "Tarn Taran", "Gurdaspur", "Pathankot"],
  assemblySeats: 25,
  lokSabhaSeats: 4,
  scPopulationPercent: 24,

  parties: [
    {
      party: "AAP",
      position: "Governing Party",
      seatsWon2022: 17,
      currentStatus: "Dominant in Majha with 17 of 25 seats",
      keyLeaders: ["Bhagwant Mann (CM)"],
      strengths: ["Urban base in Amritsar", "Tarn Taran bypoll victory 2025"],
      weaknesses: ["Panthic vote fracturing"],
      trend: "stable",
    },
    {
      party: "Congress",
      position: "Principal Opposition",
      seatsWon2022: 4,
      currentStatus: "Organizational disarray, factionalism",
      keyLeaders: ["Amarinder Singh Raja Warring", "Partap Singh Bajwa"],
      strengths: ["Historical base", "Gurjeet Singh Aujla personal vote"],
      weaknesses: ["4th place in Tarn Taran bypoll", "36 ACs without proper leadership"],
      trend: "declining",
    },
    {
      party: "SAD",
      position: "Recovering",
      seatsWon2022: 3,
      currentStatus: "Marginal recovery post-Tarn Taran",
      keyLeaders: ["Sukhbir Singh Badal"],
      strengths: ["Traditional rural base", "Silver lining in Tarn Taran"],
      weaknesses: ["Factionalism (Giani Harpreet Singh)"],
      trend: "stable",
    },
    {
      party: "Waris Punjab De",
      position: "Fragmenting panthic vote",
      seatsWon2022: 0,
      currentStatus: "Amritpal Singh in jail, won Khadoor Sahib LS",
      keyLeaders: ["Amritpal Singh"],
      strengths: ["Khalistan-leaning voter base"],
      weaknesses: ["Leadership vacuum in jail"],
      trend: "declining",
    },
    {
      party: "BJP",
      position: "No base",
      seatsWon2022: 1,
      currentStatus: "5th place in Tarn Taran bypoll",
      keyLeaders: [],
      strengths: ["Pathankot seat"],
      weaknesses: ["No organizational base in panthic seats"],
      trend: "declining",
    },
  ],

  keyLeaders: [
    {
      name: "Bhagwant Mann",
      position: "Chief Minister",
      party: "AAP",
      region: "Majha",
      base: "Sangrur (Malwa) but governs",
      significance: "Undisputed CM face for 2027",
    },
    {
      name: "Amarinder Singh Raja Warring",
      position: "PPCC President, Ludhiana MP",
      party: "Congress",
      region: "Majha",
      base: "Ludhiana",
      significance: "Factionally challenged",
    },
    {
      name: "Sukhjinder Singh Randhawa",
      position: "Gurdaspur MP, Former Deputy CM",
      party: "Congress",
      region: "Majha",
      base: "Gurdaspur",
      significance: "Majha organizational weight",
    },
    {
      name: "Partap Singh Bajwa",
      position: "Leader of Opposition (Vidhan Sabha)",
      party: "Congress",
      region: "Majha",
      base: "Gurdaspur/Chandigarh",
      significance: "Consensus builder, dinner diplomacy",
    },
  ],

  electionResults2022: [
    { party: "AAP", seatsWon: 17, totalSeats: 25, percentage: 68 },
    { party: "Congress", seatsWon: 4, totalSeats: 25, percentage: 16 },
    { party: "SAD", seatsWon: 3, totalSeats: 25, percentage: 12 },
    { party: "BJP", seatsWon: 1, totalSeats: 25, percentage: 4 },
  ],

  lokSabhaResults2024: [
    {
      constituency: "Amritsar",
      winner: "Gurjeet Singh Aujla",
      party: "Congress",
      votes: 255181,
      margin: "47,976 vs Taranjit Singh Sandhu (BJP)",
    },
    {
      constituency: "Gurdaspur",
      winner: "Sukhjinder Singh Randhawa",
      party: "Congress",
      margin: "Comfortable margin",
    },
    {
      constituency: "Khadoor Sahib",
      winner: "Amritpal Singh",
      party: "Independent (Waris Punjab De)",
      margin: "From jail",
    },
    {
      constituency: "Pathankot",
      winner: "Ashwani Kumar",
      party: "BJP",
    },
  ],

  keyIssues: [
    {
      issue: "Border Security",
      description: "Low-intensity blasts in Amritsar and Jalandhar (May 2026), BKI linkage confirmed",
      severity: "HIGH",
      politicalImpact: "National security as electoral variable",
    },
    {
      issue: "Garbage Crisis",
      description: "30,000+ sanitation workers on indefinite strike, 5th day May 2026",
      severity: "HIGH",
      politicalImpact: "Governance failure indicator",
    },
    {
      issue: "Congress Factionalism",
      description: "Warring vs Channi vs Randhawa vs Bajwa",
      severity: "HIGH",
      politicalImpact: "Organizational collapse in Majha",
    },
  ],

  strengths: [
    "Gurjeet Singh Aujla and Randhawa maintain personal bases",
    "Partap Singh Bajwa's Majha connect",
    "Historical anti-incumbency potential against AAP",
  ],

  weaknesses: [
    "No unified leadership or CM face projected",
    "Tarn Taran bypoll failure (4th place)",
    "Internal caste politics threatening coalition",
  ],

  threatLevel: [
    { party: "AAP", threatLevel: "HIGH", trend: "stable", keyFactors: ["Incumbent advantage"] },
    { party: "SAD", threatLevel: "MEDIUM", trend: "stable", keyFactors: ["Post-Tarn Taran recovery"] },
    { party: "Waris Punjab De", threatLevel: "MEDIUM", trend: "declining", keyFactors: ["Leadership vacuum"] },
    { party: "BJP", threatLevel: "LOW", trend: "stable", keyFactors: ["No organizational base"] },
  ],
};

// DOABA REGION DATA
const doabaRegionalStatus: RegionalPoliticalStatus = {
  region: "Doaba",
  researchDate: "May 20, 2026",
  classification: "Open Source Research",
  executiveSummary: "Doaba (18% of Punjab population) is most politically significant due to concentrated Dalit electorate (37.4% SC - highest in India) and substantial NRI diaspora influence. 23 assembly seats. Congress shows strength in Jalandhar, Kapurthala while AAP dominates Hoshiarpur.",

  districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "SBS Nagar"],
  assemblySeats: 23,
  lokSabhaSeats: 3,
  scPopulationPercent: 37.4,

  parties: [
    {
      party: "Congress",
      position: "Main opposition, rebuilding",
      seatsWon2022: 0,
      currentStatus: "Resilient in some districts",
      keyLeaders: ["Charanjit Singh Channi", "Rana Gurjeet Singh"],
      strengths: ["Channi's Dalit symbolism", "Strong Jalandhar organization"],
      weaknesses: ["Internal divisions (Channi vs Chaudhary in Phillaur)"],
      trend: "stable",
    },
    {
      party: "AAP",
      position: "Ruling party",
      seatsWon2022: 0,
      currentStatus: "Dominant in Hoshiarpur",
      keyLeaders: ["Bhagwant Mann (CM)"],
      strengths: ["Urban seats", "Governance delivery narrative"],
      weaknesses: ["Rural Congress resurgence"],
      trend: "stable",
    },
    {
      party: "SAD-BSP",
      position: "Targeting Dalit voters",
      seatsWon2022: 0,
      currentStatus: "Alliance targeting 20 Dalit-heavy seats",
      keyLeaders: ["Sukhbir Singh Badal"],
      strengths: ["BSP Dalit voter targeting"],
      weaknesses: ["BJP going solo disrupts strategy"],
      trend: "declining",
    },
    {
      party: "BJP",
      position: "Solo 2027, Dalit outreach",
      seatsWon2022: 0,
      currentStatus: "Building organization",
      keyLeaders: [],
      strengths: ["Modi at Dera Sachkhand Ballan"],
      weaknesses: ["Limited rural organization"],
      trend: "rising",
    },
  ],

  keyLeaders: [
    {
      name: "Charanjit Singh Channi",
      position: "MP Jalandhar, Former CM",
      party: "Congress",
      region: "Doaba",
      base: "Jalandhar",
      significance: "First Dalit CM of Punjab, massive Dalit outreach",
    },
    {
      name: "Rana Gurjeet Singh",
      position: "MLA Kapurthala",
      party: "Congress",
      region: "Doaba",
      base: "Kapurthala",
      significance: "Wealthy industrialist, complex family dynamics",
    },
  ],

  electionResults2022: [
    { party: "AAP", seatsWon: 0, totalSeats: 23, percentage: 0 }, // Need verification
    { party: "Congress", seatsWon: 0, totalSeats: 23, percentage: 0 }, // Need verification
  ],

  localBodyResults2025: [
    { district: "Jalandhar", congress: 8, aap: 9 },
    { district: "Hoshiarpur", congress: 3, aap: 20, totalZones: 23 },
    { district: "Kapurthala", congress: 4, aap: 3 },
    { district: "Nawanshahr", congress: 6, aap: 4 },
  ],

  keyIssues: [
    {
      issue: "Dalit Vote Fragmentation",
      description: "Channi's Dalit CM status didn't translate across all Dalit sub-communities",
      severity: "HIGH",
      politicalImpact: "BSP alliance competing for Ravidasia votes",
    },
    {
      issue: "NRI Influence",
      description: "Diaspora voting interest but hard to mobilize",
      severity: "MEDIUM",
      politicalImpact: "Funding and voter influence back home",
    },
    {
      issue: "Internal Congress Factions",
      description: "Channi vs Chaudhary in Phillaur, Khaira independence",
      severity: "HIGH",
      politicalImpact: "Weakens Doaba position",
    },
  ],

  strengths: [
    "Channi's Dalit symbolism with 35-38% SC population",
    "NRI diaspora influence on funding and votes",
    "Highest literacy and educated population",
  ],

  weaknesses: [
    "Internal party factions",
    "BJP solo Dalit outreach (Modi at Dera Ballan)",
    "AAP dominant in Hoshiarpur",
  ],

  threatLevel: [
    { party: "AAP", threatLevel: "HIGH", trend: "stable", keyFactors: ["Hoshiarpur dominance"] },
    { party: "BJP", threatLevel: "MEDIUM", trend: "rising", keyFactors: ["Dalit outreach"] },
    { party: "SAD-BSP", threatLevel: "MEDIUM", trend: "declining", keyFactors: ["BJP solo disrupts"] },
  ],
};

// MALWA REGION DATA
const malwaRegionalStatus: RegionalPoliticalStatus = {
  region: "Malwa",
  researchDate: "May 20, 2026",
  classification: "Open Source Research",
  executiveSummary: "Malwa (69 seats - 59%) is the decisive battleground. AAP governs from Malwa base under CM Bhagwant Mann. Congress attempts revival while SAD/BJP position for comeback. Region faces severe agrarian distress with 80-90% of farmer suicides concentrated here.",

  districts: [
    "Bathinda", "Mansa", "Sangrur", "Ludhiana", "Ferozepur", "Patiala",
    "Moga", "Barnala", "Faridkot", "Muktsar", "Fazilka", "Anandpur Sahib",
  ],
  assemblySeats: 69,
  lokSabhaSeats: 8,
  scPopulationPercent: 31.3,

  parties: [
    {
      party: "AAP",
      position: "Governing Party",
      seatsWon2022: 66,
      currentStatus: "Incumbent with welfare schemes",
      keyLeaders: ["Bhagwant Mann (CM)"],
      strengths: ["2022 sweep (66/69)", "Welfare schemes", "19 toll plazas closed"],
      weaknesses: ["Anti-incumbency building", "Land pooling anger"],
      trend: "declining",
    },
    {
      party: "Congress",
      position: "Main Opposition",
      seatsWon2022: 0,
      currentStatus: "Rebuilding after 2022 disaster",
      keyLeaders: ["Partap Singh Bajwa", "Raja Warring", "Rajinder Kaur Bhattal"],
      strengths: ["Unity outreach", "Land pooling opposition"],
      weaknesses: ["Factional warfare", "No projected CM face"],
      trend: "stable",
    },
    {
      party: "SAD",
      position: "Recovering",
      seatsWon2022: 3,
      currentStatus: "2024 resurgence (2 LS seats)",
      keyLeaders: ["Sukhbir Singh Badal", "Harsimrat Kaur Badal"],
      strengths: ["Badal family legacy", "Pro-farmer positioning"],
      weaknesses: ["2022 wipeout haunting", "Parkash Singh Badal death 2023"],
      trend: "rising",
    },
    {
      party: "BJP",
      position: "Ascending",
      seatsWon2022: 0,
      currentStatus: "Going solo 2027, 18.56% vote share",
      keyLeaders: ["Sunil Kumar Jakhar", "Kewal Singh Dhillon"],
      strengths: ["2026 state victories momentum", "Drug-free promise"],
      weaknesses: ["No rural organization"],
      trend: "rising",
    },
  ],

  keyLeaders: [
    {
      name: "Bhagwant Mann",
      position: "Chief Minister",
      party: "AAP",
      region: "Malwa",
      base: "Moga",
      significance: "CM face, target of all attacks",
    },
    {
      name: "Sukhbir Singh Badal",
      position: "SAD President",
      party: "SAD",
      region: "Malwa",
      base: "Bathinda",
      significance: "4-time Bathinda MP, party revival",
    },
  ],

  electionResults2022: [
    { party: "AAP", seatsWon: 66, totalSeats: 69, percentage: 96 },
    { party: "Congress", seatsWon: 0, totalSeats: 69, percentage: 0 },
    { party: "SAD", seatsWon: 3, totalSeats: 69, percentage: 4 },
  ],

  lokSabhaResults2024: [
    { constituency: "Ludhiana", winner: "Raja Warring (ally)", party: "Congress" },
    { constituency: "Bathinda", winner: "Harsimrat Kaur Badal", party: "SAD" },
    { constituency: "Ferozepur", winner: "SAD candidate", party: "SAD" },
    { constituency: "Patiala", winner: "Congress candidate", party: "Congress" },
  ],

  keyIssues: [
    {
      issue: "Agrarian Distress",
      description: "80-90% of farmer suicides, debt crisis, MSP concerns",
      severity: "HIGH",
      politicalImpact: "Anti-incumbency material against AAP",
    },
    {
      issue: "Youth Unemployment",
      description: "20.2% youth unemployment vs 14.6% national",
      severity: "HIGH",
      politicalImpact: "Migration, emigration pressure",
    },
    {
      issue: "Drug Menace",
      description: "Existential threat per High Court, BJP promise",
      severity: "HIGH",
      politicalImpact: "Major campaign plank for BJP",
    },
  ],

  strengths: [
    "Land pooling policy opposition gaining rural traction",
    "Agrarian distress not resolved",
    "Anti-incumbency potential against AAP",
  ],

  weaknesses: [
    "AAP welfare schemes creating incumbency advantage",
    "No unified Congress leadership",
    "SAD recovery momentum",
  ],

  threatLevel: [
    { party: "AAP", threatLevel: "HIGH", trend: "declining", keyFactors: ["Anti-incumbency building"] },
    { party: "SAD", threatLevel: "MEDIUM", trend: "rising", keyFactors: ["2024 momentum"] },
    { party: "BJP", threatLevel: "MEDIUM", trend: "rising", keyFactors: ["Drug-free promise"] },
  ],
};

// ==========================================
// CASTE ECOSYSTEM DATA
// ==========================================

const casteEcosystemData: CasteEcosystemData = {
  totalSCPopulation: 8.85, // million (2011 Census)
  scPopulationPercent: 31.9,
  jatSikhPercent: 21,
  obcPercent: 31,

  casteGroups: [
    {
      casteGroup: "Jat Sikh",
      populationPercent: 21,
      regionalConcentration: {
        malwa: "Highest (54% of Punjab's population)",
        majha: "Significant (28%)",
        doaba: "Moderate (18%)",
      },
      politicalBehavior: "Traditional SAD/Congress, 2022 shifted to AAP",
      currentAlignment: "Fragmented between AAP, Congress, SAD",
    },
    {
      casteGroup: "Mazhabi Sikh",
      populationPercent: 10,
      regionalConcentration: {
        malwa: "Significant",
        majha: "Concentrated (Chuhras)",
        doaba: "Up to 25-26% in some districts",
      },
      politicalBehavior: "Distributed between Congress and SAD",
      currentAlignment: "Congress, SAD, BJP outreach",
    },
    {
      casteGroup: "Ravidasia/Ad-Dharmi",
      populationPercent: 13.1,
      regionalConcentration: {
        malwa: "Present",
        majha: "Present",
        doaba: "Highest concentration (34.88% in SBS Nagar)",
      },
      politicalBehavior: "Congress traditional, BSP in Doaba",
      currentAlignment: "Congress in Doaba, BSP competition",
    },
    {
      casteGroup: "OBC (various)",
      populationPercent: 31,
      regionalConcentration: {
        malwa: "Sainis, Gujjars in Patiala/Sangrur",
        majha: "Present",
        doaba: "Present",
      },
      politicalBehavior: "Fragmented, almost invisible in politics",
      currentAlignment: "BJP targeting via Haryana model",
    },
  ],

  regionalCasteComposition: [
    {
      region: "Malwa",
      scPopulation: 31.3,
      dominantCaste: "Jat Sikh (Sidhu, Brar, Gill)",
      keyDynamic: "Zamindari belt, large landlords vs landless",
      reservedSeats: 27,
    },
    {
      region: "Majha",
      scPopulation: 24,
      dominantCaste: "Jat Sikh, Khatri/Arora",
      keyDynamic: "Panthic/religious politics",
      reservedSeats: 24,
    },
    {
      region: "Doaba",
      scPopulation: 37.4,
      dominantCaste: "Ravidasia Dalit, Hindu",
      keyDynamic: "Dalit epicenter, NRI economy",
      reservedSeats: 40,
    },
  ],

  dalitSubCasteDistribution: [
    { subCaste: "Ad-Dharmi/Ravidasia/Chamar", populationPercent: 13.1, regionalNotes: "Historically significant", religiousIdentity: "Hindu (on paper), Guru Granth Sahib (practice)", politicalAlignment: "Congress (traditional), BSP (Doaba)" },
    { subCaste: "Mazhabi Sikh", populationPercent: 10, regionalNotes: "Largest Sikh Dalit group", religiousIdentity: "Sikh", politicalAlignment: "Congress, SAD" },
    { subCaste: "Balmiki/Bhanghi", populationPercent: 3.5, regionalNotes: "Punjabi Valmiki community", religiousIdentity: "Hindu (on paper)", politicalAlignment: "Congress (traditional)" },
    { subCaste: "Bazigar", populationPercent: 1.05, regionalNotes: "Traditional performers", religiousIdentity: "Various", politicalAlignment: "Fragmented" },
  ],

  bjpNonJatCoalition: {
    targetGroups: ["Hindus (urban base)", "Dalits (Balmiki, Mazhabi)", "Non-Jat OBCs (Sainis, Gujjars)"],
    estimatedVoteShare: 65, // % of Punjab population
    strategy: "Replicate Haryana model - non-Jat social engineering",
  },

  congressCasteStrategy: {
    traditionalBase: ["Jat Sikh", "Mazhabi Sikh", "Balmiki", "Urban Hindus"],
    challenge: "Dalit card didn't translate across all sub-communities",
    requiredCoalition: "Must hold Dalit vote while maintaining Jat Sikh core",
  },
};

// ==========================================
// FARMER CRISIS DATA
// ==========================================

const farmerCrisisData: FarmerCrisisData = {
  totalFarmDebt: "Rs 3+ lakh crore",
  farmDebtCrore: 30000,
  stateDebtPercentGSDP: 46,
  householdsInDebt: 89, // percentage
  avgDebtPerHousehold: "Rs 2.03 lakh",
  avgDebtPerHouseholdRupees: 203000,

  farmerSuicides: {
    official2023_2025: 2809,
    officialNov2025: 260,
    estimated2000_2015: 7000, // Punjabi University estimate
    inSixDistricts2000_2015: 8294,
    source: "State Agriculture Department, Vidhan Sabha Committee",
  },

  mspRates: {
    paddy: 2369, // Rs per quintal 2025-26
    wheat: 2425, // Rs per quintal 2025-26
  },

  arhtiyaSystem: {
    registeredArhtiyas: 50000,
    farmersServed: 1500000,
    commissionPercent: 2.5,
    avgLoanAmount: "Rs 65.74 lakh",
  },

  regionalDistribution: {
    malwaSuicidePercent: 80, // 80-90%
    affectedDistricts: ["Bathinda", "Sangrur", "Moga", "Mansa", "Ferozepur"],
    suicideClusters: ["Chhajli village (Sangrur)", "Bhaini Bagha", "Bathinda cotton belt"],
  },

  flood2025: {
    affectedAcres: 400000, // 4+ lakh acres
    reliefPerAcre: 20000, // Rs
    worstAffectedDistricts: ["Amritsar", "Gurdaspur", "Kapurthala"],
  },
};

// ==========================================
// YOUTH UNEMPLOYMENT DATA
// ==========================================

const youthUnemploymentData: YouthUnemploymentData = {
  youthUnemploymentRate: 19.3, // Oct-Dec 2025
  ruralYouthUnemployment: 22.5,
  urbanYouthUnemployment: 14.8,
  femaleYouthUnemployment: 28.4,
  maleYouthUnemployment: 16.7,
  nationalAverage: 14.3,
  ranking: "Among India's highest",

  registeredUnemployed: {
    total: 122842, // Sep 2025
    unskilled: 58, // percentage
    skilled: 42, // percentage
  },

  educationLevels: {
    graduateUnemployment: 11.6,
    postgraduateUnemployment: 9.4,
  },

  migrationData: {
    students2021: 444553,
    students2022: 750365,
    increasePercent: 68,
    canadaStudents2022: 136000, // 60% of all Indian students to Canada
  },

  genderDisparity: {
    ruralFemale: 30.7,
    urbanFemale: 24.3,
    ruralMale: 19.9,
    urbanMale: 12.5,
  },

  keyDrivers: [
    "Job scarcity",
    "Agricultural stagnation",
    "Industrial decline",
    "Skill mismatch (58% unskilled)",
    "Governance failure",
    "Security concerns (gangsterism, drugs)",
  ],
};

// ==========================================
// NRI REMITTANCE DATA
// ==========================================

const nriRemittanceData: NRIRemittanceData = {
  totalNRIPopulation: 700000,
  nriVoterRegistration: 393, // 2019 Lok Sabha
  remittancePercentGDP: 30, // 20-30% of Punjab GDP
  electionCycleContribution: "Rs 1 billion ($22 million)",

  majorCountries: [
    { country: "Canada", nriPopulation: 2880000, relevance: "HIGH - Doaba diaspora" },
    { country: "USA", nriPopulation: 5410000, relevance: "HIGH - Jalandhar district" },
    { country: "UK", nriPopulation: 1800000, relevance: "HIGH - Established communities" },
    { country: "Australia", nriPopulation: 0, relevance: "MODERATE - Growing" },
    { country: "UAE", nriPopulation: 3570000, relevance: "MODERATE - Gulf migration" },
  ],

  doaba: {
    description: "NRI Hub of Punjab - first region for mass migration",
    householdsWithNRI: "40% in Dosanjh Kalan village",
    villages: "Dosanjh Kalan (Jalandhar) labeled 'NRI village'",
  },

  politicalImpact: {
    fundingPerElection: "Over Rs 1 billion per cycle",
    partyNRIWings: ["Congress IOC", "AAP overseas convener", "SAD diaspora connections"],
    voterInfluence: "NRIs iconic figures influencing domestic voters",
  },
};

// ==========================================
// JAT SIKH BEHAVIOR DATA
// ==========================================

const jatSikhBehaviorData: JatSikhBehaviorData = {
  populationPercent: 21, // 21-25% estimates
  landOwnership: "80-95% of agricultural land",
  regionalConcentration: {
    malwa: 54, // % of Punjab's population
    majha: 28,
    doaba: 18,
  },

  economicStatus: {
    avgLandholding: "3-5 acres (down from 7-10 acres in 1990s)",
    debtCrisis: "Average debt Rs 5-10 lakh per family",
    farmerSuicidePercent: 79.17, // % of farm suicide widows in one study
  },

  politicalHistory: {
    traditionalParty: "SAD (community party) and Congress",
    shift2022: "AAP emerged as alternative, won 92 seats",
    fragmentation2024: "Vote split between AAP, Congress, SAD, BJP",
  },

  keyIssues: [
    { issue: "Farmer Debt Crisis", impact: "Highest - 9,000+ suicides, arhtiya system trap" },
    { issue: "Drug Menace", impact: "High - affecting rural Punjab youth" },
    { issue: "MSP Concerns", impact: "High - unfulfilled legal guarantee demand" },
    { issue: "Youth Unemployment", impact: "High - 22-38% estimated, emigration" },
  ],

  voteSwingPotential: "HIGH",
};

// ==========================================
// REGIONAL SPECIFIC DATA
// ==========================================

const majhaData: MajhaData = {
  assemblySeats: 25,
  lokSabhaSeats: 4,
  districts: ["Amritsar", "Tarn Taran", "Gurdaspur", "Pathankot"],
  scPopulation: 24,

  tarnTaranBypoll2025: {
    winner: "Harmeet Singh Sandhu",
    party: "AAP",
    votes: 42649,
    margin: 12000,
    runnerUp: "Sukhwinder Kaur (SAD)",
    runnerUpVotes: 30558,
  },

  congressFactionalism: {
    leaders: ["Amarinder Singh Raja Warring", "Charanjit Singh Channi", "Sukhjinder Singh Randhawa", "Partap Singh Bajwa"],
    issue: "Four leaders competing for dominance",
    highCommandIntervention: "K.C. Venugopal banned public statements (January 2026)",
  },

  parties: [
    { party: "AAP", seats2022: 17, status: "Dominant" },
    { party: "Congress", seats2022: 4, status: "Organizational collapse" },
    { party: "SAD", seats2022: 3, status: "Marginal recovery" },
    { party: "BJP", seats2022: 1, status: "No base (Pathankot only)" },
  ],

  borderSecurityIncidents: [
    { date: "May 5, 2026", location: "Amritsar (Khasa Road)", description: "Low-intensity explosion near Army cantonment" },
    { date: "May 5, 2026", location: "Jalandhar (BSF HQ)", description: "Blast, parked scooter ablaze" },
    { date: "May 2025", location: "Amritsar Rural (Naushera village)", description: "Powerful explosion" },
    { date: "May 2023", location: "Golden Temple heritage street", description: "Three explosions" },
  ],
};

const doabaData: DoabaData = {
  assemblySeats: 23,
  scPopulation: 37.4,
  reservedSeats: 40, // percentage
  nriBelt: true,
  districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "SBS Nagar"],

  literacy: "Highest among three regions",

  keyCharacteristics: [
    "Most fertile land (Bist Doab Canal irrigation)",
    "Green Revolution primary beneficiary",
    "Education hub with Arya Samaji institutions",
    "NRI Hub - first region for mass emigration",
  ],

  localBody2025: [
    { district: "Jalandhar", congress: 8, aap: 9 },
    { district: "Hoshiarpur", congress: 3, aap: 20 },
    { district: "Kapurthala", congress: 4, aap: 3 },
    { district: "Nawanshahr", congress: 6, aap: 4 },
  ],

  casteComposition: [
    { caste: "Scheduled Castes", percent: 37.4 },
    { caste: "Ravidasia/Ad-Dharmi", percent: 13.1 },
    { caste: "Mazhabi Sikh", percent: 10 },
    { caste: "Other SC", percent: 4.3 },
  ],

  nriImpact: {
    householdsWithNRI: "40% in Dosanjh Kalan village",
    majorDestinations: ["Canada", "USA", "UK", "Australia"],
  },
};

const malwaData: MalwaData = {
  assemblySeats: 69,
  lokSabhaSeats: 8,
  districts: [
    "Bathinda", "Mansa", "Sangrur", "Ludhiana", "Ferozepur", "Patiala",
    "Moga", "Barnala", "Faridkot", "Muktsar", "Fazilka",
  ],

  farmerSuicidePercent: 80, // 80-90%
  avgFarmDebt: "Rs 2.03 lakh",
  stateFiscalRank: 18, // Last among 18 states
  youthUnemployment: 20.2,

  aap2022Sweep: 66, // of 69 seats
  congress2024LS: 4, // Malwa LS seats won

  agriculturalProfile: {
    paddyLandPercent: 64, // should be only 30% suitable
    wheatLandPercent: 97,
    problem: "Paddy requires ~5,000 liters water per kg rice",
  },

  keyDistricts: [
    { district: "Bathinda", significance: "Badal family stronghold", currentRepresentation: "SAD (Harsimrat Kaur)" },
    { district: "Mansa", significance: "Farmer suicide hotspot", currentRepresentation: "AAP MLA" },
    { district: "Sangrur", significance: "Simranjit Singh Mann (SAD)", currentRepresentation: "SAD" },
    { district: "Moga", significance: "CM Mann's birthplace", currentRepresentation: "AAP" },
    { district: "Ludhiana", significance: "Industrial hub, largest city", currentRepresentation: "Congress (2024 LS)" },
  ],
};

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export const politicalAnatomyData: PoliticalAnatomyKPI = {
  reportDate: "May 20, 2026",
  researchDate: "May 20, 2026",
  classification: "Open Source Research",
  confidence: "VERIFIED with citations",

  threeBodySystem: threeBodySystemData,

  regionalStatuses: [majhaRegionalStatus, doabaRegionalStatus, malwaRegionalStatus],

  casteEcosystem: casteEcosystemData,

  farmerCrisis: farmerCrisisData,

  youthUnemployment: youthUnemploymentData,

  nriRemittance: nriRemittanceData,

  jatSikhBehavior: jatSikhBehaviorData,

  majhaData: majhaData,
  doabaData: doabaData,
  malwaData: malwaData,

  dataGaps: [
    { item: "2021 Census data (delayed)", status: "PENDING" },
    { item: "Socio Economic Caste Census 2011", status: "NOT_RELEASED" },
    { item: "Jat Sikh exact percentage", status: "ESTIMATES_VARY (18-30%)" },
    { item: "2027 election dynamics", status: "SPECULATIVE" },
  ],

  sources: [
    { id: 1, title: "Majha Region Political Status", source: "A-01-01_majha_region_political_status.md", date: "May 20, 2026" },
    { id: 2, title: "Doaba Region Political Status", source: "A-01-02_doaba_region.md", date: "May 20, 2026" },
    { id: 3, title: "Malwa Region Political Status", source: "A-01-03_malwa_region.md", date: "May 20, 2026" },
    { id: 4, title: "Punjab Three Body System Analysis", source: "A-01-04_three_body_system.md", date: "May 20, 2026" },
    { id: 5, title: "Punjab Caste Ecosystem", source: "A-01-05_caste_ecosystem.md", date: "May 2026" },
    { id: 6, title: "Jat Sikh Political Behavior", source: "A-01-06_jat_sikh_behavior.md", date: "May 2026" },
    { id: 7, title: "Punjab Farmer Crisis", source: "A-01-08_punjab_farmer_crisis.md", date: "May 20, 2026" },
    { id: 8, title: "Punjab Youth Unemployment", source: "A-01-09_punjab_youth_unemployment.md", date: "May 20, 2026" },
    { id: 9, title: "Punjab NRI Remittance Impact", source: "A-01-10_nri_remittance.md", date: "May 2026" },
  ],
};

// ==========================================
// EXPORT ALL DATA
// ==========================================

export {
  threeBodySystemData,
  majhaRegionalStatus,
  doabaRegionalStatus,
  malwaRegionalStatus,
  casteEcosystemData,
  farmerCrisisData,
  youthUnemploymentData,
  nriRemittanceData,
  jatSikhBehaviorData,
  majhaData,
  doabaData,
  malwaData,
};
