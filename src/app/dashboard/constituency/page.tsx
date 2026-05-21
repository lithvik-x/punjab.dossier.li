"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { REGIONS } from "@/lib/constants";
import {
  synthesisDemographicData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

// Import Election Intelligence components
import ElectionIntelligenceSection from "@/components/dashboard/ElectionIntelligenceSection";

// ==========================================
// CYCLE 2: ELECTORAL DATA (from research-P3/electoral-data)
// ==========================================

// ==========================================
// CYCLE 2: SOCIO-ECONOMIC DATA (from research-P2/10_socio_economic)
// ==========================================

interface PunjabSocioEconomic {
  perCapitaIncome: string;
  youthUnemployment: string;
  stateDebt: string;
  debtToGSDP: string;
  groundwaterExtraction: string;
  drugUsers: string;
  farmDebt: string;
  hdi: string;
  mpiPoverty: string;
  districtPCIDisparity: string;
  giniCoefficient: string;
}

const socioEconomicData: PunjabSocioEconomic = {
  perCapitaIncome: "₹2,30,523",
  youthUnemployment: "19.3%",
  stateDebt: "₹4.17 Lakh Crore",
  debtToGSDP: "44.47%",
  groundwaterExtraction: "156.36%",
  drugUsers: "6.6 Million",
  farmDebt: "₹1.04 Lakh Crore",
  hdi: "0.740 (Rank 12)",
  mpiPoverty: "4.75%",
  districtPCIDisparity: "8.47:1",
  giniCoefficient: "0.48"
};

const punjabVsHaryanaData = [
  { metric: "Per Capita Income", punjab: "₹2,30,523", haryana: "₹3,25,000", gap: "41% less" },
  { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", gap: "+4.5pp higher" },
  { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", gap: "+16.17pp higher" },
  { metric: "Groundwater", punjab: "156%", haryana: "112%", gap: "Over-exploited" },
  { metric: "HDI Rank", punjab: "12", haryana: "9", gap: "3 ranks lower" },
];

// LS 2024 Punjab Results
const ls2024Data = {
  totalVoters: "2.14 crore",
  turnout: "62.80%",
  results: { congress: 7, aap: 3, sad: 1, bjp: 0, ind: 2 },
  voteShareShift: [
    { party: "Congress", shift: "-13.82pp", direction: "down" },
    { party: "AAP", shift: "+18.16pp", direction: "up" },
    { party: "BJP", shift: "+8.93pp", direction: "up" },
    { party: "SAD", shift: "-14.03pp", direction: "down" },
  ],
  assemblySegmentLeads: { congress: 37, aap: 33, bjp: 23 },
};

const byElectionData = [
  { seat: "Jalandhar West", result: "AAP win", netChange: "+1 AAP" },
  { seat: "Gidderbaha", result: "AAP win", netChange: "+1 AAP" },
  { seat: "Tarn Taran", result: "AAP win", netChange: "+1 AAP (from Congress)" },
];

const currentAssemblyComposition = [
  { party: "AAP", seats: 94, color: "bg-orange-500" },
  { party: "INC", seats: 16, color: "bg-blue-500" },
  { party: "SAD", seats: 3, color: "bg-yellow-500" },
  { party: "BJP", seats: 2, color: "bg-green-500" },
  { party: "BSP", seats: 1, color: "bg-purple-500" },
  { party: "IND", seats: 1, color: "bg-gray-500" },
];

// 2024 Lok Sabha Results
const lokSabha2024Results = [
  { constituency: "Gurdaspur", winner: "Congress", margin: "72,847", trend: "INC" },
  { constituency: "Amritsar", winner: "Congress", margin: "40,146", trend: "INC" },
  { constituency: "Khadoor Sahib", winner: "IND (Amritpal Singh)", margin: "Won", trend: "AAP→IND" },
  { constituency: "Jalandhar", winner: "Congress (Channi)", margin: "1,76,000", trend: "INC" },
  { constituency: "Hoshiarpur", winner: "Congress", margin: "Won", trend: "INC" },
  { constituency: "Anandpur Sahib", winner: "AAP", margin: "Won", trend: "AAP" },
  { constituency: "Ludhiana", winner: "Congress (Warring)", margin: "20,942", trend: "INC" },
  { constituency: "Fatehgarh Sahib", winner: "Congress", margin: "34,202", trend: "INC" },
  { constituency: "Faridkot", winner: "IND (Khalsa)", margin: "Won", trend: "IND" },
  { constituency: "Ferozpur", winner: "Congress", margin: "3,242", trend: "INC" },
  { constituency: "Bathinda", winner: "SAD", margin: "52,584", trend: "SAD" },
  { constituency: "Sangrur", winner: "AAP (Meet Hayer)", margin: "1,73,000", trend: "AAP" },
];

// 2022 Assembly Election Results
const assembly2022Results = [
  { party: "AAM AADMI PARTY (AAP)", seats: 92, votes: "42.01%", trend: "up" },
  { party: "CONGRESS", seats: 18, votes: "22.98%", trend: "down" },
  { party: "SHIROMANI AKALI DAL (SAD)", seats: 3, votes: "18.38%", trend: "down" },
  { party: "BHARATIYA JANTA PARTY (BJP)", seats: 2, votes: "18.56%", trend: "down" },
];

// Caste Demographics
const casteData = [
  { community: "SC (Scheduled Caste)", percentage: 32, seats: 34 },
  { community: "Jat Sikh", percentage: 21, seats: 0 },
  { community: "OBC (Other Backward Classes)", percentage: 31, seats: 0 },
  { community: "Hindu (General)", percentage: 38, seats: 0 },
];

// Crisis Metrics
const crisisData = [
  { issue: "Groundwater Extraction", value: "157%", detail: "115/153 blocks over-exploited" },
  { issue: "Drug Users", value: "6.6M", detail: "106 overdose deaths (2024)" },
  { issue: "Farmer Debt", value: "₹2.03L", detail: "Per household average" },
  { issue: "Youth Unemployment", value: "18.8%", detail: "Ages 15-29" },
];

// Top Flip Opportunity Seats (Narrowest Margins)
const flipSeats = [
  { seat: "Dera Baba Nanak", margin: "5,699", winner: "AAP", district: "Gurdaspur" },
  { seat: "Ferozpur", margin: "3,242", winner: "Congress", district: "Ferozpur" },
  { seat: "Jalandhar", margin: "1,76,000", winner: "Congress", district: "Jalandhar" },
  { seat: "Bhattinda", margin: "52,584", winner: "SAD", district: "Bathinda" },
  { seat: "Gurdaspur", margin: "72,847", winner: "Congress", district: "Gurdaspur" },
  { seat: "Ludhiana", margin: "20,942", winner: "Congress", district: "Ludhiana" },
  { seat: "Amritsar", margin: "40,146", winner: "Congress", district: "Amritsar" },
  { seat: "Fatehgarh Sahib", margin: "34,202", winner: "Congress", district: "Fatehgarh Sahib" },
  { seat: "Khadoor Sahib", margin: "Won", winner: "IND", district: "Tarn Taran" },
  { seat: "Faridkot", margin: "Won", winner: "IND", district: "Faridkot" },
];

// Congress MLA Safety Ratings
const congressMlaSafety = [
  { mla: "Sukhjinder Singh Randhawa", constituency: "Dera Baba Nanak", margin: 466, safety: "Critical" },
  { mla: "Sukhpal Singh Khaira", constituency: "Bholath", safety: "Denied Ticket" },
  { mla: "Jagbir Singh", constituency: "Nakodar", margin: 1200, safety: "Critical" },
  { mla: "Parminder Singh", constituency: "Moga", margin: 2100, safety: "Low" },
  { mla: "3-4 Others", constituency: "Various", margin: "3000-5000", safety: "Moderate" },
];

// Regional Power Centres
const powerCentres = [
  { name: "Dera Sachkhand Ballan", followers: "20+ lakh", seats: 19, region: "Doaba", influence: "Critical" },
  { name: "SGPC (Shiromani Gurdwara Prabandhak Committee)", followers: "Sikh community", seats: 0, region: "State", influence: "High" },
  { name: "Arhtiyas (Commission Agents)", followers: "15,000", seats: 0, region: "State", influence: "High" },
  { name: "Bishnoi Gang (Lawrence)", followers: "Criminal network", seats: 0, region: "South Punjab", influence: "Medium" },
];

// Infrastructure Metrics
const infraMetrics = [
  { project: "Road Development", value: "44,920 km", cost: "₹16,209 Cr", status: "Ongoing" },
  { project: "NH Projects Delayed", value: "37", detail: "4 stalled projects" },
  { project: "Malwa Uranium Contamination", value: "53%", detail: "Water samples exceed limits" },
];

// Welfare Schemes
const welfareSchemes = [
  { scheme: "Women Cash Transfer", amount: "₹1,000/month", launched: "April 2026", target: "Women voters" },
  { scheme: "SVEEP Outreach", reach: "30-40%", detail: "Voter education program" },
  { scheme: "First-Time Voters", count: "12-14 lakh", detail: "Eligible voters" },
];

// BJP Growth Trajectory
const bjpGrowth = [
  { year: "2019", voteShare: "9.63%", seats: 0 },
  { year: "2024", voteShare: "18.56%", seats: 0 },
];

// Issue Salience (12 categories from research)
const issueSalience = [
  { issue: "Drug Crisis", priority: "Critical", affected: "6.6M users" },
  { issue: "Groundwater/Environment", priority: "Critical", affected: "115/153 blocks" },
  { issue: "Farmer Debt Relief", priority: "High", affected: "100% rural households" },
  { issue: "Unemployment", priority: "High", affected: "18.8% youth" },
  { issue: "Health Infrastructure", priority: "Medium", affected: "Rural areas" },
  { issue: "Road Infrastructure", priority: "Medium", affected: "44,920 km" },
  { issue: "Sacred Religious Sites", priority: "Medium", affected: "597 cases pending" },
  { issue: "Caste Politics", priority: "Medium", affected: "32% SC population" },
];

// Critical Booth Categories (MP2-009)
const criticalBoothCategories = [
  { category: "Border Booths", count: "~2,500", seats: "17 border ACs", threat: "Pakistan infiltration, drug smuggling routes", vulnerability: "HIGH" },
  { category: "Urban Communal", count: "~1,800", seats: "8 MC towns", threat: "Communal tension, BJP polarization", vulnerability: "MEDIUM-HIGH" },
  { category: "Rural Caste Fault-line", count: "~3,200", seats: "22 SC-reserved ACs", threat: "Caste consolidation, local dynamics", vulnerability: "HIGH" },
  { category: "Repeat Offender", count: "~890", seats: "45 ACs", threat: "Booth capture history, ECI flagged", vulnerability: "CRITICAL" },
];

// Booth Classification by AC Type (MP2-009)
const acBoothClassification = [
  { type: "Urban", acCount: "~20", totalBooths: "~4,500", avgVotersPerBooth: "~1,100", vulnerability: "Communal + migration" },
  { type: "Semi-Urban/Mixed", acCount: "~42", totalBooths: "~7,500", avgVotersPerBooth: "~950", vulnerability: "Caste + economic" },
  { type: "Rural", acCount: "~55", totalBooths: "~11,000", avgVotersPerBooth: "~850", vulnerability: "Dera + agrarian" },
];

// Party Stronghold Booth Estimates (MP2-009)
const partyStrongholdBooths = [
  { party: "AAP", boothEstimate: "8,000-9,000", region: "Malwa + Urban", voteShare: "42% (2022)" },
  { party: "Congress", boothEstimate: "5,500-6,500", region: "Doaba + Majha", voteShare: "23% (2022)" },
  { party: "SAD", boothEstimate: "3,500-4,000", region: "Rural Malwa", voteShare: "18% (2022)" },
  { party: "BJP", boothEstimate: "2,000-2,500", region: "Urban + OBC", voteShare: "6.6% (2022)" },
];

// Regional Seat Distribution (MP2-010)
const regionalSeatDistribution = [
  { region: "Malwa", total: 69, scReserved: 17, general: 52, keyDera: "Dera Sacha Sauda (53L followers)", margin: "6-8% swing" },
  { region: "Majha", total: 25, scReserved: 8, general: 17, keyDera: "Radha Soami (diffuse)", margin: "8-10% swing" },
  { region: "Doaba", total: 23, scReserved: 9, general: 14, keyDera: "Dera Ballan (15L followers)", margin: "12-15% swing" },
];

// AC Category Classification (MP2-010)
const acCategoryClassification = [
  { category: "A - Urban Communal", count: 8, example: "Jalandhar, Ludhiana, Amritsar", risk: "BJP polarization" },
  { category: "B - Border Strategic", count: 17, example: "Ferozpur, Tarn Taran, Gurdaspur", risk: "Drug routes, infiltration" },
  { category: "C - SC Reserved Rural", count: 22, example: "Moga, Bathinda, Sangrur", risk: "Caste consolidation" },
  { category: "D - Jat Sikh Dominant", count: 28, example: "Malwa rural seats", risk: "SAD split vote" },
  { category: "E - Dera Influence", count: 19, example: "Doaba seats", risk: "Dera Ballan sway" },
  { category: "F - Mixed Urban-Rural", count: 23, example: "Mohali, Pathankot", risk: "Floating voters" },
];

// MP10-003: Marginal Seat Thresholds
const marginSeatData = [
  { threshold: "<10% margin", seats: 68, note: "Contested seats requiring targeted outreach" },
  { threshold: "<5% margin", seats: 23, note: "High-priority marginal seats" },
  { threshold: "<2% margin", seats: 9, note: "Extremely narrow margins - decisive battleground" },
];

// SC Reserved Seats Data (from A-05-20)
const scReservedSeats = [
  { region: "Malwa", seats: 20, percentage: "58.8%", districts: "Bathinda, Moga, Ferozpur, Sangrur, Barnala, Mansa, Patiala" },
  { region: "Doaba", seats: 8, percentage: "23.5%", districts: "Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar" },
  { region: "Majha", seats: 6, percentage: "17.6%", districts: "Gurdaspur, Amritsar, Tarn Taran" },
];

// SC Seat Performance by Party 2022
const scSeatPerformance2022 = [
  { party: "AAP", seats: "23-28", percentage: "68-82%" },
  { party: "Congress", seats: "3-5", percentage: "9-15%" },
  { party: "SAD", seats: "2-3", percentage: "6-9%" },
  { party: "BJP", seats: "0", percentage: "0%" },
  { party: "Others", seats: "1-2", percentage: "3-6%" },
];

// Dalit Sub-caste Demographics
const dalitSubcastes = [
  { subcaste: "Mazhabi Sikhs", percentage: "30%", region: "Malwa, Doaba", politicalAffiliation: "Congress (traditional), AAP (growing)" },
  { subcaste: "Ravidasias", percentage: "24%", region: "Malwa, Doaba", politicalAffiliation: "Congress, BSP (historical)" },
  { subcaste: "Ad Dharmis", percentage: "11%", region: "Doaba", politicalAffiliation: "BSP (traditional)" },
  { subcaste: "Ramdasias", percentage: "8%", region: "Spread", politicalAffiliation: "Congress" },
  { subcaste: "Valmikis", percentage: "5%", region: "Urban", politicalAffiliation: "Congress (Hindu Dalit)" },
];

// Border Constituencies (from A-05-24)
const borderConstituencies = [
  { district: "Gurdaspur", seats: 10, borderIssue: "Drug smuggling, drone deliveries", threat: "CRITICAL" },
  { district: "Tarn Taran", seats: 6, borderIssue: "Panthic politics, drug routes", threat: "HIGH" },
  { district: "Amritsar", seats: 9, borderIssue: "Cross-border smuggling", threat: "HIGH" },
  { district: "Ferozpur/Fazilka", seats: 8, borderIssue: "Drone deliveries, agriculture distress", threat: "CRITICAL" },
  { district: "Muktsar", seats: 3, borderIssue: "Border farming issues", threat: "MEDIUM" },
];

// Drone Smuggling Data
const droneSmugglingData = [
  { year: "2021", cases: 3 },
  { year: "2022", cases: 179 },
  { year: "2023", cases: 311 },
  { year: "2024", cases: 179 },
];

// Urban Constituencies (from A-05-25)
const urbanConstituencies = [
  { district: "Ludhiana", seats: 8, electorate: "1.3M+", keyIssue: "Industrial decline, unemployment" },
  { district: "Jalandhar", seats: 4, electorate: "731K", keyIssue: "Youth unemployment, urban decay" },
  { district: "Amritsar", seats: 5, electorate: "909K", keyIssue: "Tourism decline, border security" },
  { district: "Patiala", seats: 2, electorate: "387K", keyIssue: "Urban infrastructure" },
  { district: "Mohali", seats: 3, electorate: "793K", keyIssue: "Floating voters, development" },
  { district: "Bathinda", seats: 1, electorate: "229K", keyIssue: "Urban migration, drug crisis" },
];

// Regional Deep Dive Data (from A-05-17, 18, 19)
const regionalDeepDives = [
  {
    region: "Malwa",
    seats: 69,
    color: "bg-orange-500",
    keyIssues: ["Drug crisis", "Groundwater depletion", "Farmer suicides", "Agrarian debt"],
    dalitPopulation: "31%",
    jatSikh: "Dominant",
    apVoteShare2022: "66/69 seats",
    congress2022: "~10 seats",
    sad2022: "3 seats",
    projection2027: { aap: "35-42", congress: "12-18", sad: "8-12", bjp: "2-4" },
  },
  {
    region: "Majha",
    seats: 25,
    color: "bg-blue-500",
    keyIssues: ["Border security", "Drug trafficking", "Panthic politics", "Unemployment"],
    dalitPopulation: "29%",
    jatSikh: "Strong presence",
    apVoteShare2022: "Mixed",
    congress2022: "4 seats",
    sad2022: "Traditional base",
    projection2027: { aap: "4-6", congress: "10-12", sad: "8-12", bjp: "2-4" },
  },
  {
    region: "Doaba",
    seats: 23,
    color: "bg-green-500",
    keyIssues: ["Dera influence", "NRI remittances", "Youth unemployment", "Dalit politics"],
    dalitPopulation: "37%",
    jatSikh: "Moderate",
    apVoteShare2022: "9/23 seats",
    congress2022: "10 seats",
    sad2022: "Some seats",
    projection2027: { aap: "9-11", congress: "7-9", bjp: "2-3", sad: "1-2" },
  },
];

// Winnability Analysis (from constituency deep dives)
const winnabilityAnalysis = [
  { constituency: "Amritsar", type: "Lok Sabha", winner: "Congress (Gurjeet Aujla)", margin: "40,146", winnability: "SAFE" },
  { constituency: "Jalandhar", type: "Lok Sabha", winner: "Congress (Channi)", margin: "1,76,000", winnability: "SAFE" },
  { constituency: "Ludhiana", type: "Lok Sabha", winner: "Congress (Warring)", margin: "20,942", winnability: "MODERATE" },
  { constituency: "Gurdaspur", type: "Lok Sabha", winner: "Congress (Randhawa)", margin: "72,847", winnability: "SAFE" },
  { constituency: "Khadoor Sahib", type: "Lok Sabha", winner: "IND (Amritpal)", margin: "Won", winnability: "FLIP OPPORTUNITY" },
  { constituency: "Sangrur", type: "Lok Sabha", winner: "AAP (Meet Hayer)", margin: "1,73,000", winnability: "SAFE AAP" },
  { constituency: "Bathinda", type: "Lok Sabha", winner: "SAD", margin: "52,584", winnability: "MODERATE" },
  { constituency: "Ferozpur", type: "Lok Sabha", winner: "Congress", margin: "3,242", winnability: "CRITICAL" },
];

// Amritsar Assembly Segments (from A-05-01)
const amritsarSegments = [
  { segment: "Ajnala", district: "Amritsar", mla: "Kuldeep Singh Dhaliwal", party: "AAP", margin: "AAP won" },
  { segment: "Raja Sansi", district: "Amritsar", mla: "Sukhbinder Singh Sarkaria", party: "Congress", margin: "INC retained" },
  { segment: "Majitha", district: "Amritsar", mla: "Ganieve Kaur Majithia", party: "SAD", margin: "SAD held" },
  { segment: "Amritsar North", district: "Amritsar", mla: "Kunwar Vijay Pratap Singh", party: "AAP", margin: "AAP won" },
  { segment: "Amritsar West (SC)", district: "Amritsar", mla: "Jasbir Singh Sandhu", party: "Congress", margin: "INC retained" },
];

// Jalandhar Assembly Segments (from A-05-02)
const jalandharSegments = [
  { segment: "Jalandhar Central", electors: "174,003", winner: "Raman Arora", party: "AAP", margin: "32,642" },
  { segment: "Jalandhar North", electors: "192,058", winner: "AAP", party: "AAP", margin: "AAP won" },
  { segment: "Jalandhar Cantt", electors: "193,666", winner: "AAP", party: "AAP", margin: "AAP won" },
  { segment: "Jalandhar West (SC)", electors: "171,632", winner: "AAP", party: "AAP", margin: "AAP won" },
];

// Ludhiana Assembly Segments (from A-05-03)
const ludhianaSegments = [
  { segment: "Ludhiana East", electors: "217,728", winner: "Congress", party: "INC", margin: "Narrow margin" },
  { segment: "Ludhiana Central", electors: "158,931", winner: "Ashok Prashar (Pappi)", party: "AAP", margin: "From INC" },
  { segment: "Ludhiana West", electors: "182,455", winner: "AAP", party: "AAP", margin: "AAP won" },
  { segment: "Ludhiana North", electors: "205,063", winner: "AAP", party: "AAP", margin: "AAP won" },
  { segment: "Gill (SC)", electors: "273,104", winner: "AAP", party: "AAP", margin: "AAP won" },
];

// Moga Constituency (from A-05-06)
const mogaData = {
  constituency: "Moga (AC-73)",
  district: "Moga",
  region: "Malwa",
  electors: "203,541",
  category: "General",
  winner2022: "Dr. Amandeep Kaur Arora (AAP)",
  margin2022: "20,915",
  runnerUp: "Congress candidate",
  keyIssue: "Agrarian distress - 880 farmer suicides (2000-2018)",
  scPopulation: "36.5%",
};

// Hoshiarpur Constituency (from A-05-11)
const hoshiarpurData = {
  constituency: "Hoshiarpur (AC-43)",
  district: "Hoshiarpur",
  region: "Doaba",
  electors: "192,794",
  category: "General",
  winner2022: "Brahm Shankar Jimpa (AAP)",
  margin2022: "13,859",
  runnerUp: "Sunder Sham Arora (Congress)",
  keyIssue: "SC population 34.3% with Ravidassias dominant at 26.34%",
  scPopulation: "34.3%",
};

// Pathankot Constituency (from A-05-12)
const pathankotData = {
  constituency: "Pathankot (AC-3)",
  district: "Pathankot",
  region: "Majha",
  electors: "198,000+",
  category: "General",
  winner2022: "Ashwani Kumar Sharma (BJP)",
  margin2022: "BJP retained",
  keyIssue: "Border security, strategic importance, drug smuggling",
  specialFactor: "_only district bordering Himachal Pradesh and J&K",
};

// Kapurthala Constituency (from A-05-13)
const kapurthalaData = {
  constituency: "Kapurthala (AC-29)",
  district: "Kapurthala",
  region: "Doaba",
  electors: "168,000+",
  category: "General",
  winner2022: "Rana Gurjeet Singh (Congress)",
  margin2022: "Congress retained",
  keyIssue: "Industrial decline, NRI influence",
  specialFactor: "Industrial town with significant diaspora",
};

// Nawanshahr Constituency (from A-05-14)
const nawanshahrData = {
  constituency: "Nawanshahr (AC-45)",
  district: "SBS Nagar",
  region: "Doaba",
  electors: "165,000+",
  category: "SC Reserved",
  winner2022: "Congress candidate",
  margin2022: "Congress retained",
  keyIssue: "Dalit politics, Dera influence",
  scPopulation: "38%+",
};

// Ropar Constituency (from A-05-15)
const roparData = {
  constituency: "Ropar (AC-51)",
  district: "Ropar",
  region: "Powadh",
  electors: "178,000+",
  category: "General",
  winner2022: "AAP candidate",
  margin2022: "AAP won",
  keyIssue: "Urban fringe, IT corridor proximity",
  specialFactor: "Emerging urban constituency near Chandigarh",
};

// Fatehgarh Sahib (from A-05-16)
const fatehgarhSahibData = {
  constituency: "Fatehgarh Sahib (AC-55)",
  district: "Fatehgarh Sahib",
  region: "Malwa",
  electors: "161,754",
  category: "General",
  winner2022: "Lakhbir Singh Rai (AAP)",
  margin2022: "32,199",
  runnerUp: "Kuljit Singh Nagra (Congress - 3-term incumbent)",
  turnout2022: "77.41%",
  keyIssue: "Religious significance, agrarian distress",
};

// Major Deras and Their Influence
const deraInfluence = [
  { name: "Dera Sachkhand Ballan", followers: "20+ lakh", seats: 19, region: "Doaba", subcaste: "Nirankari", influence: "CRITICAL" },
  { name: "Dera Sacha Sauda", followers: "53+ lakh", seats: "Variable", region: "Malwa", subcaste: "Socioreligious", influence: "HIGH (post-conviction declining)" },
  { name: "Radha Soami Beas", followers: "Diffuse", seats: "Variable", region: "All", subcaste: "Spiritual", influence: "MEDIUM" },
  { name: "Dera Ralley", followers: "Significant", seats: "Local", region: "Doaba", subcaste: "Ravidassia", influence: "LOCAL" },
];

// 2027 Seat Projections by Region
const seatProjections2027 = [
  { region: "Malwa", aap: "35-42", congress: "12-18", sad: "8-12", bjp: "2-4", others: "0-2" },
  { region: "Majha", aap: "4-6", congress: "10-12", sad: "8-12", bjp: "2-4", others: "0-1" },
  { region: "Doaba", aap: "9-11", congress: "7-9", sad: "1-2", bjp: "2-3", others: "0-1" },
  { region: "Total", aap: "52-62", congress: "25-35", sad: "15-22", bjp: "5-10", others: "2-5" },
];

// NRI Voter Impact
const nriImpact = [
  { region: "Doaba", nriDensity: "Highest", remittanceInfluence: "5-8x family vote multiplier", politicalImpact: "Significant" },
  { region: "Malwa", nriDensity: "High", remittanceInfluence: "3-5x family vote multiplier", politicalImpact: "Moderate" },
  { region: "Majha", nriDensity: "Moderate", remittanceInfluence: "2-3x family vote multiplier", politicalImpact: "Moderate" },
];

// Agricultural Distress Data (Malwa focus)
const agrarianDistress = [
  { district: "Sangrur", farmerSuicides: 738, avgDebt: "₹3.36L", severity: "CRITICAL" },
  { district: "Mansa", farmerSuicides: "High", avgDebt: "₹2.5L+", severity: "CRITICAL" },
  { district: "Bathinda", farmerSuicides: "Moderate", avgDebt: "₹2.0L", severity: "HIGH" },
  { district: "Moga", farmerSuicides: 880, avgDebt: "₹2.0L", severity: "HIGH" },
  { district: "Ferozpur", farmerSuicides: "Moderate", avgDebt: "₹1.8L", severity: "HIGH" },
];

export default function ConstituencyPage() {

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
              2
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Constituency Proliferation
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            117 Assembly constituencies • Booth-level targeting • Regional analysis
          </p>
        </div>
        <Badge variant="success">117 ACs Active</Badge>
      </div>

      {/* Region Navigation Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="flex gap-1 -mb-px">
          <a
            href="/dashboard/constituency"
            className="px-4 py-3 text-sm font-medium border-b-2 border-green-500 text-green-600 dark:text-green-400"
          >
            Overview
          </a>
          <a
            href="/dashboard/constituency/malwa"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Malwa (69)
            </span>
          </a>
          <a
            href="/dashboard/constituency/majha"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              Majha (25)
            </span>
          </a>
          <a
            href="/dashboard/constituency/doaba"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Doaba (23)
            </span>
          </a>
          <a
            href="/dashboard/constituency/powadh"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              Powadh (10)
            </span>
          </a>
        </nav>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Constituencies"
          value="117"
          subtitle="Assembly seats"
          color="bg-green-500"
        />
        <MetricCard
          title="Booths"
          value="23,847"
          subtitle="Across 117 ACs (ECI data)"
          color="bg-cyan-500"
        />
        <MetricCard
          title="Avg Voters/Booth"
          value="906"
          subtitle="Per booth (2.16Cr voters)"
          color="bg-blue-500"
        />
        <MetricCard
          title="SC Reserved Seats"
          value="34"
          subtitle="Out of 117 total ACs"
          color="bg-purple-500"
        />
      </div>

      {/* CYCLE 2: SOCIO-ECONOMIC CRISIS IMPACT ON CONSTITUENCIES (from research-P2/10_socio_economic) */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Socio-Economic Crisis Impact on Constituencies (research-P2/10_socio_economic)</p>
            <p className="text-sm text-red-600 dark:text-red-300">Economic distress driving voter anger across 117 assembly constituencies</p>
          </div>
        </div>

        {/* Critical Crisis Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Youth Unemployment"
            value="19.3%"
            subtitle="Ages 15-29 (CRITICAL)"
            color="bg-red-500"
          />
          <MetricCard
            title="State Debt"
            value="₹4.17L Cr"
            subtitle="LAST in NITI FHI"
            color="bg-red-500"
          />
          <MetricCard
            title="Drug Users"
            value="6.6 Million"
            subtitle="18% of population"
            color="bg-red-500"
          />
          <MetricCard
            title="Groundwater"
            value="156%"
            subtitle="Over-exploited"
            color="bg-red-500"
          />
        </div>

        {/* Progress Bars for Crisis Metrics */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
              <span className="text-sm font-bold text-red-600">19.3%</span>
            </div>
            <ProgressBar label="" value={19.3} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">vs National Average 14.3% — 5pp higher in Punjab</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
              <span className="text-sm font-bold text-red-600">44.47%</span>
            </div>
            <ProgressBar label="" value={44.47} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">Fiscal limit: 25% — Punjab is 1.78x over limit</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
              <span className="text-sm font-bold text-red-600">156.36%</span>
            </div>
            <ProgressBar label="" value={100} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited — agricultural crisis</p>
          </div>
        </div>

        {/* Punjab vs Haryana Comparison */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800 mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab vs Haryana Economic Comparison</h4>
          <DataTable
            headers={["Metric", "Punjab", "Haryana", "Impact"]}
            rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.gap])}
          />
        </div>

        {/* Additional Metrics */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Per Capita Income</p>
            <p className="text-xl font-bold text-red-600">₹2,30,523</p>
            <p className="text-xs text-slate-500">vs Haryana ₹3,25,000</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Farm Debt</p>
            <p className="text-xl font-bold text-orange-600">₹1.04L Cr</p>
            <p className="text-xs text-slate-500">Avg ₹2.03L/household</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">HDI Rank</p>
            <p className="text-xl font-bold text-yellow-600">0.740</p>
            <p className="text-xs text-slate-500">Rank 12 among states</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Gini Coefficient</p>
            <p className="text-xl font-bold text-orange-600">0.48</p>
            <p className="text-xs text-slate-500">High inequality</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Constituency Impact:</strong> Economic crisis affects all 117 ACs. Youth unemployment (19.3%) drives anger in urban seats. Farm debt and groundwater crisis hit rural Malwa hardest. Drug crisis (6.6M users) is the #1 issue in 40+ rural seats. Anti-incumbent sentiment is high across all constituencies.
          </p>
        </div>
      </div>

      {/* 2022 Assembly Election Results */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              2022 Assembly Election Results
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AAP won 92 seats with 42.01% vote share • Congress collapsed to 18 seats
            </p>
          </div>
          <Badge variant="warning">AAP Dominance</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {assembly2022Results.map((result) => (
            <div key={result.party} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2 py-1 text-xs font-bold ${
                  result.party.includes("AAP") ? "bg-orange-100 text-orange-700" :
                  result.party.includes("CONGRESS") ? "bg-blue-100 text-blue-700" :
                  result.party.includes("SAD") ? "bg-yellow-100 text-yellow-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {result.seats}
                </span>
                <span className={`text-sm ${result.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {result.trend === "up" ? "↑" : "↓"}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-400">{result.party}</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{result.votes}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">AAP Vote Collapse Warning</span>
          </div>
          <p className="mt-1 text-sm text-amber-600 dark:text-amber-500">
            AAP vote share collapsed from 42.01% (2022) to ~26% (2024 Lok Sabha) — losing 16 points in 2 years
          </p>
        </div>
      </div>

      {/* BJP Growth Despite Zero Seats */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              BJP Growth Trajectory (Zero Lok Sabha Seats)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              9.63% (2019) → 18.56% (2024) = +8.93 points growth • Led 24 assembly segments
            </p>
          </div>
          <Badge variant="danger">2027 Target</Badge>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <DataTable
              headers={["Year", "Vote Share", "Lok Sabha Seats"]}
              rows={bjpGrowth.map((r) => [r.year, r.voteShare, r.seats])}
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">2027 Assembly Prediction</h4>
              <p className="mt-2 text-3xl font-bold text-green-600">12-18 Seats</p>
              <p className="text-sm text-slate-500">BJP projected seats based on growth trajectory</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Assembly Segment Control</h4>
              <p className="mt-2 text-3xl font-bold text-blue-600">24 Segments</p>
              <p className="text-sm text-slate-500">BJP led despite 0 LS seats (2024)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Caste Demographics */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste & Demographic Composition
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab&apos;s electorate is predominantly rural (66.7%) with significant caste diversity
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {casteData.map((caste) => (
              <div key={caste.community}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{caste.community}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{caste.percentage}%</span>
                </div>
                <ProgressBar
                  label=""
                  value={caste.percentage}
                  color={caste.community.includes("SC") ? "bg-purple-500" : "bg-blue-500"}
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Demographics</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Rural Population</span>
                <span className="font-bold text-green-600">66.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Urban Population</span>
                <span className="font-bold text-blue-600">33.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">First-Time Voters</span>
                <span className="font-bold text-purple-600">12-14 Lakh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Women Voters Target</span>
                <span className="font-bold text-pink-600">₹1,000/mo</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">
                Women cash scheme launched April 2026 — pilot program targeting female voters
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Constituency Distribution
          </h3>
          <div className="mt-6 space-y-5">
            {REGIONS.map((region) => (
              <div key={region.id}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {region.name}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">({region.border})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {region.constituencies} ACs
                    </span>
                  </div>
                </div>
                <ProgressBar
                  label=""
                  value={(region.constituencies / 117) * 100}
                  color="bg-green-500"
                  showPercentage={false}
                />
                <p className="mt-1 text-xs text-slate-500">
                  ~{(27700000 / 117).toFixed(0)}L voters per constituency
                </p>
              </div>
            ))}
          </div>
          {/* Regional Analysis Note */}
          <div className="mt-4 rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs text-orange-600 dark:text-orange-400">
              <strong>Malwa Alert:</strong> AAP won 66/69 Malwa seats in 2022 (96% win rate).
              BJP now leading 24 assembly segments despite 0 LS seats.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Constituency Type Breakdown
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Urban</p>
                  <p className="text-sm text-slate-500">City constituencies</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">39</p>
                <p className="text-sm text-slate-500">33.3%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Rural</p>
                  <p className="text-sm text-slate-500">Village constituencies</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">78</p>
                <p className="text-sm text-slate-500">66.7%</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Key Target</span>
            </div>
            <p className="mt-1 text-sm text-amber-600 dark:text-amber-500">
              12 urban seats are swing constituencies with &lt;5% margin
            </p>
          </div>
        </div>

        {/* Crisis Metrics Grid */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Constituency Crisis Indicators
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Critical issues impacting voter sentiment and turnout
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {crisisData.map((crisis) => (
              <div key={crisis.issue} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{crisis.issue}</span>
                  <Badge variant="danger">{crisis.value}</Badge>
                </div>
                <p className="mt-2 text-xs text-slate-500">{crisis.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-medium">Critical Infrastructure Alert</span>
            </div>
            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
              Uranium contamination: 53% water samples in Malwa exceed safe limits.
              Groundwater extraction at 157% — 115 of 153 blocks over-exploited.
            </p>
          </div>
        </div>
      </div>

      {/* Flip Opportunity Seats */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Top 10 Flip Opportunity Seats
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Narrowest margins from 2024 Lok Sabha — highest conversion potential
            </p>
          </div>
          <Badge variant="warning">Priority Targets</Badge>
        </div>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Constituency", "Margin", "Winner (2024)", "District"]}
            rows={flipSeats.map((s) => [s.seat, s.margin, s.winner, s.district])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-xs font-medium text-red-700 dark:text-red-400">Critical Margins</p>
            <p className="text-lg font-bold text-red-600">3 Seats</p>
            <p className="text-xs text-red-500">Under 10,000 votes</p>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p className="text-xs font-medium text-yellow-700 dark:text-yellow-400">Low Margins</p>
            <p className="text-lg font-bold text-yellow-600">4 Seats</p>
            <p className="text-xs text-yellow-500">Under 75,000 votes</p>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
            <p className="text-xs font-medium text-green-700 dark:text-green-400">IND Seats</p>
            <p className="text-lg font-bold text-green-600">2 Seats</p>
            <p className="text-xs text-green-500">Khadoor Sahib, Faridkot</p>
          </div>
        </div>
      </div>

      {/* Congress MLA Safety Ratings */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Congress MLA Safety Audit
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Only 3-4 of 18 Congress MLAs are &quot;safe&quot; • Sukhpal Singh Khaira denied ticket (ED case)
            </p>
          </div>
          <Badge variant="danger">18 MLAs Total</Badge>
        </div>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["MLA Name", "Constituency", "Margin/Safety", "Status"]}
            rows={congressMlaSafety.map((m) => [
              m.mla,
              m.constituency,
              typeof m.margin === "number" ? m.margin.toLocaleString() : (m.margin || "N/A"),
              m.safety,
            ])}
          />
        </div>
        <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">Most Vulnerable</span>
          </div>
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-500">
            Sukhjinder Singh Randhawa (Dera Baba Nanak) won by only 466 votes in 2022 — the narrowest margin among all Congress MLAs.
            Dera Ballan influence is critical in this seat.
          </p>
        </div>
      </div>

      {/* Regional Power Centres */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Informal Power Centres
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Deras, religious bodies, and economic networks that influence voting patterns
            </p>
          </div>
          <Badge variant="info">Key Stakeholders</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {powerCentres.map((centre) => (
            <div key={centre.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{centre.name}</h4>
                  <p className="mt-1 text-sm text-slate-500">{centre.followers} followers</p>
                </div>
                <Badge variant={centre.influence === "Critical" ? "danger" : centre.influence === "High" ? "warning" : "default"}>
                  {centre.influence}
                </Badge>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
                <span className="text-xs text-slate-500">{centre.region}</span>
                {centre.seats > 0 && (
                  <span className="text-xs font-medium text-green-600">{centre.seats} seats influenced</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">Dera Sachkhand Ballan — Critical for Congress</span>
          </div>
          <p className="mt-1 text-sm text-purple-600 dark:text-purple-500">
            20+ lakh followers • Controls 19 Doaba seats • Sukhjinder Singh Randhawa most vulnerable at 466 votes
            • NRI influence strong in Doaba region
          </p>
        </div>
      </div>

      {/* Infrastructure & Development */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Infrastructure & Development Metrics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Rs 16,209 Cr road program • 37 NH projects delayed • 4 stalled
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {infraMetrics.map((infra) => (
            <div key={infra.project} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{infra.project}</span>
                <Badge variant={infra.project.includes("Uranium") ? "danger" : "info"}>{infra.value}</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">{infra.detail || infra.cost}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Road Program"
            value="44,920 km"
            subtitle="Under development"
            color="bg-blue-500"
          />
          <MetricCard
            title="NH Projects"
            value="37"
            subtitle="Delayed projects"
            color="bg-yellow-500"
          />
          <MetricCard
            title="Stalled Projects"
            value="4"
            subtitle="National highways"
            color="bg-red-500"
          />
          <MetricCard
            title="Uranium Risk"
            value="53%"
            subtitle="Water contamination"
            color="bg-orange-500"
          />
        </div>
      </div>

      {/* Welfare Schemes & Voter Outreach */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Welfare Schemes & Voter Outreach
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          SVEEP reaches 30-40% • Booth sevak strategy: 25,000 planned under Panna Pramukh model
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {welfareSchemes.map((scheme) => (
            <div key={scheme.scheme} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{scheme.scheme}</h4>
              <p className="mt-2 text-2xl font-bold text-green-600">{scheme.amount || scheme.reach || scheme.count}</p>
              <p className="mt-1 text-xs text-slate-500">{scheme.detail}</p>
              {scheme.launched && (
                <Badge variant="success">Launched {scheme.launched}</Badge>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Booth Sevak Strategy</span>
          </div>
          <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-500">
            Congress plans 25,000 booth sevaks under Panna Pramukh model.
            Target: 8-10 booth-level agents per booth for 100% coverage across 23,847 booths.
          </p>
        </div>
      </div>

      {/* Issue Salience Matrix */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Issue Salience Matrix
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              12 issue categories measured via surveys, social media, news, KII, and focus groups
            </p>
          </div>
          <Badge variant="info">12 Categories</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {issueSalience.map((issue) => (
            <div key={issue.issue} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{issue.issue}</span>
                <Badge variant={issue.priority === "Critical" ? "danger" : issue.priority === "High" ? "warning" : "default"}>
                  {issue.priority}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">{issue.affected}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Regional Issue Signatures</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-slate-500">Malwa</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Drug crisis, groundwater, farmer debt</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Majha</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Border security, drug trafficking, unemployment</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Doaba</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dera influence, NRI remittances, youth unemployment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          2024 Lok Sabha Results — Punjab
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Congress 7 | AAP 3 | SAD 1 | BJP 0 | IND 2 • Vote share: BJP 18.56%, Congress 22.98%, AAP 26%
        </p>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Lok Sabha Seat", "Winner", "Margin", "Trend"]}
            rows={lokSabha2024Results.map((r) => [
              r.constituency,
              r.winner,
              r.margin,
              r.trend,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-xs text-blue-600 dark:text-blue-400">Congress Vote Share</p>
            <p className="text-xl font-bold text-blue-700">22.98%</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs text-orange-600 dark:text-orange-400">AAP Vote Share</p>
            <p className="text-xl font-bold text-orange-700">26%</p>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-xs text-green-600 dark:text-green-400">BJP Vote Share</p>
            <p className="text-xl font-bold text-green-700">18.56%</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-xs text-yellow-600 dark:text-yellow-400">SAD Vote Share</p>
            <p className="text-xl font-bold text-yellow-700">18.38%</p>
          </div>
        </div>
      </div>

      {/* CYCLE 2: LS 2024 Electoral Data Section */}
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">LS 2024 Electoral Data (Cycle 2)</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-300">2.14 crore voters | 62.80% turnout | Vote share shifts | By-election results</p>
          </div>
        </div>

        {/* Voter Registration & Turnout */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 mb-6">
          <MetricCard
            title="Total Voters"
            value="2.14 Cr"
            subtitle="LS 2024"
            color="bg-emerald-500"
          />
          <MetricCard
            title="Turnout"
            value="62.80%"
            subtitle="LS 2024"
            color="bg-teal-500"
          />
          <MetricCard
            title="First-Time Voters"
            value="5.38 L"
            subtitle="New registrations"
            color="bg-cyan-500"
          />
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Congress LS Seats</p>
            <p className="text-2xl font-bold text-blue-600">{ls2024Data.results.congress}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">AAP LS Seats</p>
            <p className="text-2xl font-bold text-orange-600">{ls2024Data.results.aap}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">BJP LS Seats</p>
            <p className="text-2xl font-bold text-green-600">{ls2024Data.results.bjp}</p>
          </div>
        </div>

        {/* Vote Share Shifts */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Shift (2022 Assembly vs 2024 LS)</h4>
          <div className="grid gap-4 md:grid-cols-4">
            {ls2024Data.voteShareShift.map((shift) => (
              <div key={shift.party} className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{shift.party}</span>
                  <Badge variant={shift.direction === "up" ? "success" : "danger"}>{shift.shift}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assembly Segment Leads */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Assembly Segment Leads (2024 LS)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Congress Leads</p>
              <p className="text-3xl font-bold text-blue-700">{ls2024Data.assemblySegmentLeads.congress}</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">AAP Leads</p>
              <p className="text-3xl font-bold text-orange-700">{ls2024Data.assemblySegmentLeads.aap}</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">BJP Leads</p>
              <p className="text-3xl font-bold text-green-700">{ls2024Data.assemblySegmentLeads.bjp}</p>
            </div>
          </div>
        </div>

        {/* By-Election Results */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">By-Election Results (AAP net +2 seats)</h4>
          <div className="overflow-x-auto">
            <DataTable
              headers={["Seat", "Result", "Net Change"]}
              rows={byElectionData.map((b) => [b.seat, b.result, b.netChange])}
            />
          </div>
        </div>

        {/* Current Assembly Composition */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Current Assembly Composition (117 seats)</h4>
          <div className="grid gap-4 md:grid-cols-6">
            {currentAssemblyComposition.map((comp) => (
              <div key={comp.party} className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-3 w-3 rounded-full ${comp.color}`} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{comp.party}</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{comp.seats}</p>
                <p className="text-xs text-slate-500">seats</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <strong>Note:</strong> Assembly composition reflects post-defection state. AAP 94 includes original 92 + 2 (Chog 1,IND 1). Congress reduced from 18 to 16 after Jakhar brothers&apos; resignation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Booth-Level Strategy</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• 23,847 total booths across 117 ACs</li>
            <li>• 8-10 booth-level agents per booth</li>
            <li>• Target: 100% booth coverage</li>
            <li>• Real-time turnout monitoring</li>
            <li>• First-hour & last-hour focus</li>
            <li>• Congress: 25,000 booth sevaks planned</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Margin Analysis</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Safe seats: 45 (margin &gt;10%)</li>
            <li>• Target seats: 38 (margin 5-10%)</li>
            <li>• Swing seats: 34 (margin &lt;5%)</li>
            <li>• Requires: 60+ for majority</li>
            <li>• 12 urban seats &lt;5% margin</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Critical Metrics</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Voter slip distribution</li>
            <li>• Booth capture probability</li>
            <li>• Agent deployment ratio</li>
            <li>• EVM management score</li>
            <li>• Dera influence: 19 Doaba seats</li>
          </ul>
        </div>
      </div>

      {/* Electoral History Summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Electoral History: Congress vs AAP Seat Share
        </h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-400">2017 Assembly</span>
                <span className="font-bold text-blue-600">Congress 77 | AAP 18</span>
              </div>
              <ProgressBar label="" value={77} max={117} color="bg-blue-500" showPercentage={false} />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-400">2022 Assembly</span>
                <span className="font-bold text-orange-600">AAP 92 | Congress 18</span>
              </div>
              <ProgressBar label="" value={92} max={117} color="bg-orange-500" showPercentage={false} />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-400">2024 Lok Sabha</span>
                <span className="font-bold text-blue-600">Congress 7 | AAP 3</span>
              </div>
              <ProgressBar label="" value={58.3} max={100} color="bg-blue-500" showPercentage={false} />
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">2027 Assembly Prediction</h4>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">Congress</p>
                <p className="text-2xl font-bold text-blue-600">40-50</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">AAP</p>
                <p className="text-2xl font-bold text-orange-600">45-55</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">BJP</p>
                <p className="text-2xl font-bold text-green-600">12-18</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">SAD</p>
                <p className="text-2xl font-bold text-yellow-600">8-12</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Based on BJP growth trajectory and AAP vote collapse</p>
          </div>
        </div>
      </div>

      {/* SGPC & Religious Politics */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              SGPC & Religious Politics
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              SGPC elections frozen since 2011 • SAD controls SGPC • Akal Takht-May 2026 conflict
            </p>
          </div>
          <Badge variant="warning">Sacred Sites</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sacrilege Cases</h4>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">Total Cases</p>
                <p className="text-2xl font-bold text-red-600">597</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Conviction Rate</p>
                <p className="text-2xl font-bold text-yellow-600">7%</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Convictions</p>
                <p className="text-xl font-bold text-slate-600">44</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Jaagat Jot Act 2026: Life imprisonment for sacrilege</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">SGPC Control</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Shiromani Akali Dal (SAD) has controlled SGPC since 2011.
              SGPC controls gurdwaras and Sikh religious institutions.
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              <strong>Akal Takht-May 2026 Conflict:</strong> Direct confrontation between SGPC and state government.
            </p>
          </div>
        </div>
      </div>

      {/* MP10-006 Regional Caste Bloc Data */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">MP10-006 Regional Caste Bloc Predictions</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">Malwa 69 | Majha 25 | Doaba 23 seats with Dera influence analysis</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Malwa (69 seats)</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Seats</span>
                <span className="font-bold text-orange-600">69</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Congress 2022</span>
                <span className="font-bold text-slate-600">11-12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Target 2027</span>
                <span className="font-bold text-green-600">30-35</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Dera Influence</span>
                <span className="font-bold text-amber-600">12-18%</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Sikh-majority region. Drug crisis, groundwater critical. AAP&apos;s strongest region.</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Majha (25 seats)</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Seats</span>
                <span className="font-bold text-blue-600">25</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Congress 2022</span>
                <span className="font-bold text-slate-600">4</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Target 2027</span>
                <span className="font-bold text-green-600">10-12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Dera Influence</span>
                <span className="font-bold text-slate-600">Minimal</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Border region. Channi&apos;s weakness (Jat-Sikh ceiling). BJP organizational presence.</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Doaba (23 seats)</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Seats</span>
                <span className="font-bold text-green-600">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Congress 2022</span>
                <span className="font-bold text-slate-600">2-3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Target 2027</span>
                <span className="font-bold text-green-600">8-10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Dera Influence</span>
                <span className="font-bold text-red-600">High</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">NRI belt. 9,000+ deras concentrated. Channi&apos;s Dalit base strongest here.</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Dera Network Analysis</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs text-slate-500">Dera Sachkhand Ballan</p>
              <p className="text-sm font-medium">20+ lakh followers | 19 seats</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Dera Influence Range</p>
              <p className="text-sm font-medium">12-18% in Dera-concentrated areas</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">NRI Remittance Chain</p>
              <p className="text-sm font-medium">5-8x family vote multiplier</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Key Insight:</strong> Congress must expand beyond Channi&apos;s Dalit base (Doaba) into Jat-Sikh dominant Malwa and Majha regions. Regional candidate archetype vs national candidate strategy critical for 2027.
          </p>
        </div>
      </div>

      {/* MP10-003: Constituency-Level Prediction Engine */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          MP10-003: Constituency Prediction Engine
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Win probability calculations • Confidence tiers • Marginal seat thresholds
        </p>

        {/* Win Probability Calculation Methodology */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Win Probability Calculation
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <strong>Formula:</strong> P(win) = f(vote_share, historical_swing, candidate_quality_index, local_issue_score)
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <strong>Method:</strong> CVM-weighted responses + booth-level sampling
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <strong>Accuracy Track Record:</strong> 60% within margin of error (Berkeley Haas study)
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Confidence Tier Classification
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">Safe (&gt;10% lead)</span>
                <Badge variant="success">85-95%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">Likely (5-10%)</span>
                <Badge variant="info">65-80%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">Lean (1-5%)</span>
                <Badge variant="warning">52-65%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">Tossup (&lt;1%)</span>
                <Badge variant="danger">40-55%</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Marginal Seat Alert Thresholds */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Marginal Seat Alert Thresholds
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-xs text-red-600 dark:text-red-400">Narrow Margin (&lt;5% MOV)</p>
              <p className="text-lg font-bold text-red-700 dark:text-red-300">Competitive</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">Very Marginal (&lt;3% MOV)</p>
              <p className="text-lg font-bold text-orange-700 dark:text-orange-300">Highly Competitive</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs text-yellow-600 dark:text-yellow-400">Extremely Marginal (&lt;1% MOV)</p>
              <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300">Tossup</p>
            </div>
          </div>
        </div>

        {/* Congress Survey Timeline */}
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
            <strong>Congress Survey Timeline:</strong> 3 independent surveys (mid-May to July 2026) • Hidden observers deployed (45 from outside Punjab) • Winnability is sole ticket criterion
          </p>
        </div>
      </div>

      {/* MP10-006: Regional Caste Bloc Prediction */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          MP10-006: Regional Caste Bloc Prediction
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Malwa • Majha • Doaba regional voting patterns • Dera influence quantification
        </p>

        {/* Regional Predictions */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-700 dark:bg-orange-900/20">
            <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">Malwa (69 seats)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">AAP 2027</span>
                <span className="font-bold text-orange-600">30-38</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Congress 2027</span>
                <span className="font-bold text-blue-600">15-22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">SAD+BJP 2027</span>
                <span className="font-bold text-purple-600">10-15</span>
              </div>
              <div className="mt-2 pt-2 border-t border-orange-200 dark:border-orange-700">
                <p className="text-xs text-slate-500">Key: Drug crisis, agrarian distress, zamindari networks</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Majha (25 seats)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Congress 2027</span>
                <span className="font-bold text-blue-600">10-12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">AAP 2027</span>
                <span className="font-bold text-orange-600">4-6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">SAD+BJP 2027</span>
                <span className="font-bold text-purple-600">8-12</span>
              </div>
              <div className="mt-2 pt-2 border-t border-blue-200 dark:border-blue-700">
                <p className="text-xs text-slate-500">Key: Religious identity, border security, Hindu consolidation</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Doaba (23 seats)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Congress 2027</span>
                <span className="font-bold text-blue-600">8-10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">AAP 2027</span>
                <span className="font-bold text-orange-600">10-12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">SAD 2027</span>
                <span className="font-bold text-purple-600">2-4</span>
              </div>
              <div className="mt-2 pt-2 border-t border-green-200 dark:border-green-700">
                <p className="text-xs text-slate-500">Key: Dalit consolidation, Dera Ballan, NRI remittance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dera Influence Quantification */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Dera Vote Influence (Combined: 12-18% of SC electorate)
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
              <p className="text-xs text-slate-500">Dera Sachkhand Ballan</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">350,000-500,000</p>
              <p className="text-xs text-green-600 dark:text-green-400">Stable | Doaba 15-18 seats</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
              <p className="text-xs text-slate-500">Dera Sacha Sauda</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">100,000-200,000</p>
              <p className="text-xs text-red-600 dark:text-red-400">Declining | Post-conviction</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
              <p className="text-xs text-slate-500">Other Deras Combined</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">50,000-100,000</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Stable</p>
            </div>
          </div>
        </div>

        {/* Caste Voting Patterns */}
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
            <strong>2027 Caste Vote Prediction:</strong> SC (31-33%): AAP 35-40%, Congress 25-30%, SAD 15-20%, BSP 5-8% | Jat Sikh (20-22%): SAD 35%, AAP 30%, Congress 25% | OBC (15-18%): AAP 40%, Congress 35%, SAD+BJP 25%
          </p>
        </div>
      </div>

      {/* MP10-003: Marginal Seat Thresholds */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">MP10-003: Marginal Seat Thresholds</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">Congress must win swing seats - narrow margin analysis for targeting</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {marginSeatData.map((item) => (
            <div key={item.threshold} className="rounded-lg bg-white p-4 dark:bg-slate-800 text-center">
              <p className="text-3xl font-bold text-amber-600">{item.seats}</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.threshold}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Strategic Implication:</strong> 9 seats with &lt;2% margin are essentially coin flips - winning these requires maximum ground game intensity
          </p>
        </div>
      </div>

      {/* SC Reserved Seats Analysis (from A-05-20) */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-purple-700 dark:text-purple-400">SC Reserved Seats Analysis</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">34 SC seats | 31.9% SC population | Dalit vote bank critical</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {scReservedSeats.map((sc) => (
            <div key={sc.region} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{sc.region}</span>
                <Badge variant="info">{sc.seats} seats</Badge>
              </div>
              <p className="text-2xl font-bold text-purple-600">{sc.percentage}</p>
              <p className="text-xs text-slate-500 mt-1">{sc.districts}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">2022 SC Seat Performance by Party</h4>
          <DataTable
            headers={["Party", "Seats Won", "Percentage"]}
            rows={scSeatPerformance2022.map((r) => [r.party, r.seats, r.percentage])}
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {dalitSubcastes.map((dalit) => (
            <div key={dalit.subcaste} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{dalit.subcaste}</p>
              <p className="text-lg font-bold text-purple-600">{dalit.percentage}</p>
              <p className="text-xs text-slate-500">{dalit.region}</p>
              <div className="mt-2"><Badge variant="default">{dalit.politicalAffiliation}</Badge></div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-purple-100 p-4 dark:bg-purple-900/30">
          <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">Channi Factor</span>
          </div>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400">
            Punjab&apos;s first Dalit CM (Charanjit Singh Channi) elevated in Sept 2021. Despite losing both seats in 2022, his Ravidasia identity remains a key variable for Congress&apos;s Dalit coalition strategy in 2027.
          </p>
        </div>
      </div>

      {/* Border Constituencies Analysis (from A-05-24) */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Border Constituencies Analysis</p>
            <p className="text-sm text-red-600 dark:text-red-300">22 border seats | 553km with Pakistan | Drug smuggling routes</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {borderConstituencies.map((bc) => (
            <div key={bc.district} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{bc.district}</span>
                <Badge variant={bc.threat === "CRITICAL" ? "danger" : bc.threat === "HIGH" ? "warning" : "default"}>{bc.threat}</Badge>
              </div>
              <p className="text-lg font-bold text-red-600">{bc.seats} seats</p>
              <p className="text-xs text-slate-500 mt-1">{bc.borderIssue}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Drone-Based Smuggling (NCB Data)</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-xs text-slate-500 mb-2">Drone Sightings Along Indo-Pak Border</p>
              <MiniChart data={droneSmugglingData.map((d) => d.cases)} color="bg-red-500" height={60} />
              <div className="mt-2 flex justify-between text-xs">
                {droneSmugglingData.map((d) => (
                  <span key={d.year} className="text-slate-500">{d.year}</span>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">Critical Threat</p>
              <p className="text-2xl font-bold text-red-600 mt-1">5,967%</p>
              <p className="text-xs text-red-500">Increase in drone smuggling (2021-2024)</p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">45% of India&apos;s heroin trade occurs in Punjab</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-sm font-medium">Key Border Seats</span>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Tarn Taran (AC-21)</span>
              <Badge variant="warning">36.2% AAP (2025 bypoll)</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Khadoor Sahib LS</span>
              <Badge variant="danger">Amritpal Singh (IND) from prison</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Ferozpur/Fazilka</span>
              <Badge variant="danger">Drone delivery hub</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Urban Constituencies Analysis (from A-05-25) */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">Urban Constituencies Analysis</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">25-28 urban seats | Ludhiana, Jalandhar, Amritsar, Patiala, Mohali, Bathinda</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {urbanConstituencies.map((uc) => (
            <div key={uc.district} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{uc.district}</span>
                <Badge variant="info">{uc.seats} seats</Badge>
              </div>
              <p className="text-lg font-bold text-cyan-600">{uc.electorate}</p>
              <p className="text-xs text-slate-500 mt-1">{uc.keyIssue}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">2022 Urban Results Summary</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">AAP Urban Seats</span>
                <span className="font-bold text-orange-600">~90%+ won</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Congress Urban Seats</span>
                <span className="font-bold text-blue-600">2-3 seats</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">SAD Urban Seats</span>
                <span className="font-bold text-green-600">0 seats</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">BJP Urban Seats</span>
                <span className="font-bold text-purple-600">0 seats</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-cyan-100 p-4 dark:bg-cyan-900/30">
            <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Urban Voter Priorities</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="danger">1</Badge>
                <span className="text-slate-600">Youth unemployment (22-38%)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning">2</Badge>
                <span className="text-slate-600">Urban infrastructure decay</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="info">3</Badge>
                <span className="text-slate-600">Municipal governance quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">4</Badge>
                <span className="text-slate-600">Healthcare & education</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Ludhiana Urban Assembly Segments (8 seats)</h4>
          <DataTable
            headers={["Segment", "Electors", "Winner 2022", "Party", "Margin"]}
            rows={ludhianaSegments.map((s) => [s.segment, s.electors, s.winner, s.party, s.margin])}
          />
        </div>
      </div>

      {/* NRI Impact Analysis */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">NRI Voter Impact</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">Diaspora influence | Remittance-driven politics | Doaba highest NRI density</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {nriImpact.map((nri) => (
            <div key={nri.region} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{nri.region}</span>
                <Badge variant={nri.nriDensity === "Highest" ? "danger" : "warning"}>{nri.nriDensity}</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Remittance Influence</p>
              <p className="text-lg font-bold text-yellow-600">{nri.remittanceInfluence}</p>
              <p className="text-xs text-slate-500 mt-1">Political Impact: {nri.politicalImpact}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30">
          <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">NRI Voter Registration Crisis</span>
          </div>
          <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-400">
            Only 393 registered NRI voters in Punjab (2019). NRIs exert influence through informal channels: financial support to candidates, phone/social media campaigning, and visiting during election periods.
          </p>
        </div>
      </div>

      {/* Agrarian Distress Data */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Agrarian Distress Index</p>
            <p className="text-sm text-green-600 dark:text-green-300">Malwa region epicenter | Farmer debt trap | Suicide concentration</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {agrarianDistress.map((ad) => (
            <div key={ad.district} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ad.district}</span>
                <Badge variant={ad.severity === "CRITICAL" ? "danger" : "warning"}>{ad.severity}</Badge>
              </div>
              <p className="text-lg font-bold text-green-600">{typeof ad.farmerSuicides === "number" ? ad.farmerSuicides + " suicides" : ad.farmerSuicides}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Avg Debt: {ad.avgDebt}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-300">Punjab Farm Debt Crisis</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Avg debt per household</span>
                <span className="font-bold text-green-600">₹2.03 lakh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Households in debt</span>
                <span className="font-bold text-green-600">54%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Total farm loans</span>
                <span className="font-bold text-green-600">₹1.4 lakh Cr</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Paddy Monoculture Trap</h4>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-slate-600">90% Kharif acreage under paddy</p>
              <p className="text-slate-600">97% Rabi land under wheat</p>
              <p className="text-slate-600">5,000L water per 1kg rice</p>
              <p className="text-xs text-red-500">Only 30% land suited for paddy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Winnability Analysis - Key Constituencies */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Winnability Analysis - Key Constituencies
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Lok Sabha 2024 results | Margin analysis | 2027 projection
            </p>
          </div>
          <Badge variant="info">8 Key Seats</Badge>
        </div>

        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Constituency", "Type", "Winner 2024", "Margin", "Winnability"]}
            rows={winnabilityAnalysis.map((w) => [
              w.constituency,
              w.type,
              w.winner,
              w.margin,
              w.winnability,
            ])}
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-xs text-green-600 dark:text-green-400">Safe Congress</p>
            <p className="text-xl font-bold text-green-700">3 Seats</p>
            <p className="text-xs text-green-500">Jalandhar, Gurdaspur, Amritsar</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-xs text-yellow-600 dark:text-yellow-400">Moderate</p>
            <p className="text-xl font-bold text-yellow-700">2 Seats</p>
            <p className="text-xs text-yellow-500">Ludhiana, Bathinda</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs text-orange-600 dark:text-orange-400">Critical</p>
            <p className="text-xl font-bold text-orange-700">1 Seat</p>
            <p className="text-xs text-orange-500">Ferozpur (3,242)</p>
          </div>
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs text-red-600 dark:text-red-400">Flip Opportunity</p>
            <p className="text-xl font-bold text-red-700">2 Seats</p>
            <p className="text-xs text-red-500">Khadoor Sahib, Faridkot</p>
          </div>
        </div>
      </div>

      {/* Regional Deep Dive - Malwa, Majha, Doaba */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Regional Deep Dive
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Malwa (69) | Majha (25) | Doaba (23) - Constituency-wise analysis
            </p>
          </div>
          <Badge variant="success">117 Total ACs</Badge>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {regionalDeepDives.map((rd) => (
            <div key={rd.region} className={`rounded-xl border-2 p-4 ${rd.region === "Malwa" ? "border-orange-200 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20" : rd.region === "Majha" ? "border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20" : "border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20"}`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">{rd.region}</h4>
                <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">{rd.seats}</span>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Dalit Population</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{rd.dalitPopulation}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Jat Sikh</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{rd.jatSikh}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 mb-2">Key Issues</p>
                <div className="flex flex-wrap gap-1">
                  {rd.keyIssues.map((issue) => (
                    <Badge key={issue} variant="default">{issue}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">2027 Seat Projections</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <p className="text-xs text-orange-500">AAP</p>
                    <p className="font-bold text-orange-600">{rd.projection2027.aap}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-500">Cong</p>
                    <p className="font-bold text-blue-600">{rd.projection2027.congress}</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-500">SAD</p>
                    <p className="font-bold text-green-600">{rd.projection2027.sad}</p>
                  </div>
                  <div>
                    <p className="text-xs text-purple-500">BJP</p>
                    <p className="font-bold text-purple-600">{rd.projection2027.bjp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">2027 Statewide Seat Projections</h4>
          <DataTable
            headers={["Region", "AAP", "Congress", "SAD", "BJP", "Others"]}
            rows={seatProjections2027.map((sp) => [sp.region, sp.aap, sp.congress, sp.sad, sp.bjp, sp.others])}
          />
        </div>
      </div>

      {/* Dera Influence Deep Dive */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">Dera Politics &amp; Religious Networks</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300">Parallel social mobilization | Vote bank consolidation | 9,000+ deras in Punjab</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {deraInfluence.map((di) => (
            <div key={di.name} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{di.name}</span>
                <Badge variant={di.influence === "CRITICAL" ? "danger" : di.influence === "HIGH" ? "warning" : "default"}>{di.influence}</Badge>
              </div>
              <p className="text-lg font-bold text-indigo-600">{di.followers}</p>
              <p className="text-xs text-slate-500">{di.region} | {di.subcaste}</p>
              <p className="text-xs text-slate-400 mt-1">Seats: {di.seats}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/30">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm font-medium">Strategic Insight</span>
          </div>
          <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
            Dera Sachkhand Ballan (20+ lakh followers, 19 seats) is the most critical electoral variable in Doaba. Sant Niranjan Das received Padma Shri in January 2026, signaling mainstream recognition. Any realignment of dera support could alter 4-8 marginal seats.
          </p>
        </div>
      </div>

      {/* Individual Constituency Snapshots */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Key Constituency Snapshots
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              District-wise deep dive from constituency research files
            </p>
          </div>
          <Badge variant="info">9 Districts</Badge>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{mogaData.constituency}</h4>
              <Badge variant="info">{mogaData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{mogaData.district} | {mogaData.category} | {mogaData.electors} electors</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{mogaData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium text-green-600">{mogaData.margin2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SC Population</span>
                <span className="font-medium">{mogaData.scPopulation}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-red-500">Key Issue: {mogaData.keyIssue}</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{hoshiarpurData.constituency}</h4>
              <Badge variant="info">{hoshiarpurData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{hoshiarpurData.district} | {hoshiarpurData.category} | {hoshiarpurData.electors} electors</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{hoshiarpurData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium text-green-600">{hoshiarpurData.margin2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SC Population</span>
                <span className="font-medium">{hoshiarpurData.scPopulation}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-amber-500">Key Issue: {hoshiarpurData.keyIssue}</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{fatehgarhSahibData.constituency}</h4>
              <Badge variant="info">{fatehgarhSahibData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{fatehgarhSahibData.district} | {fatehgarhSahibData.category} | {fatehgarhSahibData.electors} electors</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{fatehgarhSahibData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium text-green-600">{fatehgarhSahibData.margin2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Turnout 2022</span>
                <span className="font-medium">{fatehgarhSahibData.turnout2022}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-amber-500">Key Issue: {fatehgarhSahibData.keyIssue}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{pathankotData.constituency}</h4>
              <Badge variant="info">{pathankotData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{pathankotData.district} | General</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{pathankotData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium">{pathankotData.margin2022}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-red-500">Key Issue: {pathankotData.keyIssue}</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{kapurthalaData.constituency}</h4>
              <Badge variant="info">{kapurthalaData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{kapurthalaData.district} | General</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{kapurthalaData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium">{kapurthalaData.margin2022}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-blue-500">Special: {kapurthalaData.specialFactor}</p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{roparData.constituency}</h4>
              <Badge variant="info">{roparData.region}</Badge>
            </div>
            <p className="text-xs text-slate-500">{roparData.district} | General</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Winner 2022</span>
                <span className="font-medium">{roparData.winner2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Margin</span>
                <span className="font-medium">{roparData.margin2022}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-purple-500">Special: {roparData.specialFactor}</p>
          </div>
        </div>
      </div>

      {/* Assembly Segment Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Amritsar Assembly Segments
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">9 segments | Lok Sabha: Amritsar</p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Segment", "District", "MLA", "Party"]}
              rows={amritsarSegments.map((s) => [s.segment, s.district, s.mla, s.party])}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Jalandhar Assembly Segments
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">4 urban segments | Lok Sabha: Jalandhar (SC)</p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Segment", "Electors", "Winner", "Party", "Margin"]}
              rows={jalandharSegments.map((s) => [s.segment, s.electors, s.winner, s.party, s.margin])}
            />
          </div>
        </div>
      </div>

      {/* CYCLE 1 ENHANCEMENT: 117 Constituency Summary */}
      <div className="rounded-xl border-2 border-violet-500 bg-violet-50 p-6 dark:border-violet-700 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">117</span>
          <div>
            <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-400">117 Constituency Profiles — Cycle 1</h3>
            <p className="text-sm text-violet-600 dark:text-violet-400">Complete constituency data with margin analysis</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Total Seats" value="117" subtitle="Punjab Assembly" color="bg-violet-500" />
          <MetricCard title="SC Reserved" value="34" subtitle="29% — highest in India" color="bg-purple-500" />
          <MetricCard title="General" value="83" subtitle="71% of seats" color="bg-blue-500" />
          <MetricCard title="Swing Margin" value="79%" subtitle="92 seats within margin" color="bg-orange-500" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Top Flip Opportunities (Narrow Margins)</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Dera Baba Nanak:</span><span className="font-medium">5,699 (AAP)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Ferozpur:</span><span className="font-medium">3,242 (Congress)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Ludhiana:</span><span className="font-medium">20,942 (Congress)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Amritsar:</span><span className="font-medium">40,146 (Congress)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Bathinda:</span><span className="font-medium">52,584 (SAD)</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Seat Classification</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Safe Congress:</span><span className="font-medium text-blue-600">~25-30</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Safe AAP:</span><span className="font-medium text-orange-600">~35-40</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Contestable:</span><span className="font-medium text-red-600">~45-55</span></div>
              <div className="flex justify-between"><span className="text-slate-500">SAD strongholds:</span><span className="font-medium text-yellow-600">~10-15</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-violet-100 p-3 dark:bg-violet-900/40">
          <p className="text-sm text-violet-700 dark:text-violet-300">
            <strong>Key Insight:</strong> 79% of seats (92/117) are within swing margin — three-way splits determine winners. Congress must defend 2024 LS momentum in urban seats while fighting AAP for SC reserved seats. Priority: narrow-margin Congress seats (Dera Baba Nanak, Ferozpur).
          </p>
        </div>
      </div>

      {/* CYCLE 2: GEOGRAPHIC PROFILE DATA (from MP1-foundational/geography/constituency-profile-cards.md) */}
      <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6 dark:border-emerald-700 dark:bg-emerald-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Geographic & Constituency Profiles</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">Regional overview, district data, crop patterns, border analysis</p>
          </div>
        </div>

        {/* Regional Overview */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Regional Overview</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white">M</span>
                <span className="font-semibold">Majha</span>
                <Badge variant="info">25 seats</Badge>
              </div>
              <p className="text-xs text-slate-500">Border belt, Ravi/Beas rivers, high defence presence, sacred Sikh sites</p>
              <p className="mt-2 text-xs text-slate-400">Districts: Amritsar, Gurdaspur, Pathankot, Tarn Taran</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-sm font-bold text-white">D</span>
                <span className="font-semibold">Doaba</span>
                <Badge variant="success">23 seats</Badge>
              </div>
              <p className="text-xs text-slate-500">NRI hub, Beas/Sutlej rivers, high literacy, hoshiarpur foothills</p>
              <p className="mt-2 text-xs text-slate-400">Districts: Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">M</span>
                <span className="font-semibold">Malwa</span>
                <Badge variant="warning">69 seats</Badge>
              </div>
              <p className="text-xs text-slate-500">Largest region, cotton belt, paddy-wheat dominant, semi-arid south</p>
              <p className="mt-2 text-xs text-slate-400">15 districts including Ludhiana, Bathinda, Patiala, Sangrur</p>
            </div>
          </div>
        </div>

        {/* District Reference Table */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">District Reference (Census 2011)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">District</th>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">Area</th>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">Population</th>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">Density</th>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">Region</th>
                  <th className="px-2 py-1 text-left text-slate-600 dark:text-slate-300">Border</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
                <tr><td className="px-2 py-1">Amritsar</td><td className="px-2 py-1">2,647</td><td className="px-2 py-1">24.9L</td><td className="px-2 py-1">932</td><td className="px-2 py-1">Majha</td><td><Badge variant="danger">YES</Badge></td></tr>
                <tr><td className="px-2 py-1">Ludhiana</td><td className="px-2 py-1">3,767</td><td className="px-2 py-1">34.9L</td><td className="px-2 py-1">975</td><td className="px-2 py-1">Malwa</td><td><Badge variant="default">No</Badge></td></tr>
                <tr><td className="px-2 py-1">Bathinda</td><td className="px-2 py-1">3,385</td><td className="px-2 py-1">13.9L</td><td className="px-2 py-1">414</td><td className="px-2 py-1">Malwa</td><td><Badge variant="default">No</Badge></td></tr>
                <tr><td className="px-2 py-1">Jalandhar</td><td className="px-2 py-1">2,632</td><td className="px-2 py-1">21.8L</td><td className="px-2 py-1">831</td><td className="px-2 py-1">Doaba</td><td><Badge variant="default">No</Badge></td></tr>
                <tr><td className="px-2 py-1">Patiala</td><td className="px-2 py-1">3,218</td><td className="px-2 py-1">18.9L</td><td className="px-2 py-1">596</td><td className="px-2 py-1">Malwa</td><td><Badge variant="default">No</Badge></td></tr>
                <tr><td className="px-2 py-1">Mansa</td><td className="px-2 py-1">2,171</td><td className="px-2 py-1">7.7L</td><td className="px-2 py-1">350</td><td className="px-2 py-1">Malwa</td><td><Badge variant="default">No</Badge></td></tr>
                <tr><td className="px-2 py-1">Pathankot</td><td className="px-2 py-1">929</td><td className="px-2 py-1">6.8L</td><td className="px-2 py-1">728</td><td className="px-2 py-1">Majha</td><td><Badge variant="danger">YES</Badge></td></tr>
                <tr><td className="px-2 py-1">Tarn Taran</td><td className="px-2 py-1">2,449</td><td className="px-2 py-1">11.2L</td><td className="px-2 py-1">464</td><td className="px-2 py-1">Majha</td><td><Badge variant="danger">YES</Badge></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Agricultural Zones */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Agricultural Zones & Crop Patterns</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Paddy-Wheat (Central)</p>
              <p className="text-xs text-slate-500 mt-1">Ludhiana, Jalandhar, Moga, Patiala</p>
              <p className="text-xs text-slate-400 mt-1">Green Revolution heartland; MSP critical</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Cotton Belt (Southwest)</p>
              <p className="text-xs text-slate-500 mt-1">Bathinda, Mansa, Muktsar, Fazilka, Faridkot</p>
              <p className="text-xs text-slate-400 mt-1">Bt cotton, pink bollworm, water scarcity</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Basmati Zone</p>
              <p className="text-xs text-slate-500 mt-1">Gurdaspur, Amritsar, Tarn Taran, Firozpur</p>
              <p className="text-xs text-slate-400 mt-1">Export-oriented, premium pricing</p>
            </div>
          </div>
        </div>

        {/* Border Constituencies */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Border Districts & Key Constituencies</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">Pathankot (3 seats)</p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">J&K + Pakistan border; defence-heavy</p>
              <p className="text-xs text-slate-500 mt-1">Sujanpur, Bhoa, Pathankot</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">Tarn Taran (4 seats)</p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">Pakistan border; Harike wetland; flood risk</p>
              <p className="text-xs text-slate-500 mt-1">Tarn Taran, Khem Karan, Patti, Khadoor Sahib</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">Fazilka (4 seats)</p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">Pakistan border; Sulemanki post; cotton belt</p>
              <p className="text-xs text-slate-500 mt-1">Jalalabad, Fazilka, Abohar, Balluana</p>
            </div>
          </div>
        </div>

        {/* Geographic Type Summary */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Constituency Classification</h4>
          <div className="grid gap-3 md:grid-cols-5">
            <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/20">
              <p className="text-2xl font-bold text-blue-600">~20</p>
              <p className="text-xs text-blue-600">Urban</p>
            </div>
            <div className="rounded-lg bg-cyan-50 p-3 text-center dark:bg-cyan-900/20">
              <p className="text-2xl font-bold text-cyan-600">~35</p>
              <p className="text-xs text-cyan-600">Semi-Urban</p>
            </div>
            <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-900/20">
              <p className="text-2xl font-bold text-green-600">~55</p>
              <p className="text-xs text-green-600">Rural</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 text-center dark:bg-red-900/20">
              <p className="text-2xl font-bold text-red-600">~18</p>
              <p className="text-xs text-red-600">Border</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-center dark:bg-purple-900/20">
              <p className="text-2xl font-bold text-purple-600">~6</p>
              <p className="text-xs text-purple-600">Pilgrimage</p>
            </div>
          </div>
        </div>

        {/* Strategic Insights */}
        <div className="rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/40">
          <h4 className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">Strategic Implications for Congress</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Malwa Dominance is Key</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">69 seats; reclaim cotton belt through farmer distress messaging</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Border Constituencies</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">18-20 seats with unique BSF, drug smuggling concerns</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">3</span>
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Urban-Rural Divide</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">Tailored messaging: urban=jobs, rural=MSP/water</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">4</span>
              <div>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Pilgrimage Rally Points</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">Anandpur Sahib, Muktsar, Talwandi Sabo for mass outreach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Data Source:</strong> MP1-foundational/geography/constituency-profile-cards.md (Research Date: 19 May 2026) |
            Census 2011, ECI 2022, Punjab State Disaster Management Plan |
            Confidence: MEDIUM (district-level verified; granular AC-level data marked VERIFICATION_NEEDED)
          </p>
        </div>

        {/* ========================================== */}
        {/* SYNTHESIS INTELLIGENCE SECTION */}
        {/* Derived from: s1-s4 synthesis MD files */}
        {/* ========================================== */}

        {/* Regional Seats Synthesis */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
          <h3 className="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-400">
            Synthesis Intelligence: Regional Demographics
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Malwa Seats</div>
              <div className="text-2xl font-bold text-indigo-600">{synthesisDemographicData.regionalSeats.malwa}</div>
              <div className="text-xs text-slate-400">Dominant region</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Majha Seats</div>
              <div className="text-2xl font-bold text-blue-600">{synthesisDemographicData.regionalSeats.majha}</div>
              <div className="text-xs text-slate-400">Border region</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Doaba Seats</div>
              <div className="text-2xl font-bold text-green-600">{synthesisDemographicData.regionalSeats.doaba}</div>
              <div className="text-xs text-slate-400">Kashmir border</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Total Voters</div>
              <div className="text-2xl font-bold text-amber-600">{synthesisDemographicData.voterData.voters}</div>
              <div className="text-xs text-slate-400">First-time: {synthesisDemographicData.voterData.firstTimeVoters}</div>
            </div>
          </div>
        </div>

        {/* Demographics Key Metrics from Synthesis */}
        <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Demographics Key Metrics (Synthesized from s1 Cross-Reference)
          </h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {KEY_SYNTHESIS_METRICS
              .filter(m => m.category === "Demographics")
              .map((metric) => (
                <div key={metric.id} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-700">
                  <div className="flex flex-col items-center">
                    <span className={`h-2 w-2 rounded-full ${
                      metric.status === "CORROBORATED" ? "bg-green-500" :
                      metric.status === "PARTIAL" ? "bg-yellow-500" : "bg-red-500"
                    }`}></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500">{metric.metric}</div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{metric.value}</div>
                    <div className="text-xs text-slate-400">Source: {metric.source}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Gap Analysis - Constituency (WEAK) */}
        <div className="mb-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
            Gap Analysis: Constituency (WEAK Coverage)
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Coverage Rating</div>
              <div className="text-xl font-bold text-amber-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.coverageRating || "WEAK"}
              </div>
              <div className="text-xs text-slate-400">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.coveragePercent || 0}% framework coverage
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Documents in Category</div>
              <div className="text-xl font-bold text-indigo-600">
                Track A: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.trackAFiles || 0} /
                Track B: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.trackBFiles || 0}
              </div>
              <div className="text-xs text-slate-400">Framework sections: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.frameworkSections || 0}</div>
            </div>
          </div>
          {/* Missing Sections */}
          {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.missingSections && (
            <div className="mt-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Missing Sections:</div>
              <div className="flex flex-wrap gap-2">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Constituency")?.missingSections.map((gap, idx) => (
                  <span key={idx} className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    gap.severity === "CRITICAL" ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400" :
                    gap.severity === "HIGH" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400" :
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"
                  }`}>
                    {gap.section}: {gap.description} ({gap.severity})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quality Validation Summary */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
            Quality Validation Summary (s3)
          </h4>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Total Documents</div>
              <div className="text-xl font-bold text-indigo-600">{qualityValidation.scope.total}</div>
              <div className="text-xs text-slate-400">Pass Rate: {qualityValidation.passRate}%</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackASummary.high}/{qualityValidation.trackASummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track B HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackBSummary.high}/{qualityValidation.trackBSummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Assessment</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.overallAssessment}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Election Intelligence Section - From enhanced batch analysis */}
      <ElectionIntelligenceSection />
    </div>
  );
}
