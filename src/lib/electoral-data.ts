// Electoral Data - Punjab 2024 Lok Sabha & Assembly Composition
// Derived from: research-P3/electoral-data/A6.01_ls2024_detailed.md, A6.05_assembly_composition.md
// Research Date: May 2026 | Status: COMPLETE

import type {
  ElectoralDataKPI,
  LS2024ConstituencyResult,
  LS2024PartyPerformance,
  LS2024RegionalBreakdown,
  LS2024TurnoutAnalysis,
  LS2024MarginAnalysis,
  LS2024AssemblySegmentLead,
  AssemblyPartyComposition,
  AssemblyMLA,
  AssemblyLeadership,
  BypollResult,
  DefectionEvent,
} from "@/types/electoral-data-types";

// ==========================================
// METADATA
// ==========================================

const electoralDataMetadata = {
  researchDate: "May 2026",
  sourceType: "Live Web Research (Stream A)",
  analyst: "AI Research Agent",
  status: "COMPLETE" as const,
};

// ==========================================
// LOK SABHA 2024 DATA
// ==========================================

const ls2024Overview = {
  totalElectors: 21461741,
  totalVotesPolled: 13530923,
  turnout: 62.8,
  totalCandidates: 286,
  totalConstituencies: 13,
};

const ls2024PartyPerformance: LS2024PartyPerformance[] = [
  {
    party: "INC",
    seatsWon: 7,
    voteShare: 26.3,
    votesPolled: 3543824,
    change: -1,
  },
  {
    party: "AAP",
    seatsWon: 3,
    voteShare: 26.02,
    votesPolled: 3506939,
    change: 2,
  },
  {
    party: "IND",
    seatsWon: 2,
    voteShare: 7.86,
    votesPolled: 1058241,
    change: 2,
  },
  {
    party: "SAD",
    seatsWon: 1,
    voteShare: 13.42,
    votesPolled: 1808837,
    change: -1,
  },
  {
    party: "BJP",
    seatsWon: 0,
    voteShare: 18.56,
    votesPolled: 2500877,
    change: -2,
  },
  {
    party: "SAD(Amritsar)",
    seatsWon: 0,
    voteShare: 3.84,
    votesPolled: 517024,
    change: 0,
  },
  {
    party: "BSP",
    seatsWon: 0,
    voteShare: 2.49,
    votesPolled: 335921,
    change: 0,
  },
];

const ls2024ConstituencyResults: LS2024ConstituencyResult[] = [
  {
    id: 1,
    name: "Gurdaspur",
    winner: "Sukhjinder Singh Randhawa",
    party: "INC",
    votes: 364043,
    percent: 33.78,
    runnerUp: "Dinesh Singh",
    runnerUpParty: "BJP",
    runnerUpVotes: 281182,
    runnerUpPercent: 26.09,
    margin: 82861,
    turnout: 66.67,
    region: "Majha",
    reserved: "GEN",
  },
  {
    id: 2,
    name: "Amritsar",
    winner: "Gurjeet Singh Aujla",
    party: "INC",
    votes: 255181,
    percent: 28.18,
    runnerUp: "Kuldeep Singh Dhaliwal",
    runnerUpParty: "AAP",
    runnerUpVotes: 214880,
    runnerUpPercent: 23.73,
    margin: 40301,
    turnout: 56.06,
    region: "Majha",
    reserved: "GEN",
  },
  {
    id: 3,
    name: "Khadoor Sahib",
    winner: "Amritpal Singh",
    party: "IND",
    votes: 404430,
    percent: 38.62,
    runnerUp: "Kulbir Singh Zira",
    runnerUpParty: "INC",
    runnerUpVotes: 207310,
    runnerUpPercent: 19.8,
    margin: 197120,
    turnout: 62.55,
    region: "Majha",
    reserved: "GEN",
  },
  {
    id: 4,
    name: "Jalandhar",
    winner: "Charanjit Singh Channi",
    party: "INC",
    votes: 390053,
    percent: 39.43,
    runnerUp: "Sushil Kumar Rinku",
    runnerUpParty: "BJP",
    runnerUpVotes: 214060,
    runnerUpPercent: 21.64,
    margin: 175993,
    turnout: 59.7,
    region: "Doaba",
    reserved: "SC",
  },
  {
    id: 5,
    name: "Hoshiarpur",
    winner: "Raj Kumar Chabbewal",
    party: "AAP",
    votes: 303859,
    percent: 32.04,
    runnerUp: "Yamini Gomar",
    runnerUpParty: "INC",
    runnerUpVotes: 259748,
    runnerUpPercent: 27.39,
    margin: 44111,
    turnout: 58.86,
    region: "Doaba",
    reserved: "SC",
  },
  {
    id: 6,
    name: "Anandpur Sahib",
    winner: "Malwinder Singh Kang",
    party: "AAP",
    votes: 313217,
    percent: 29.08,
    runnerUp: "Vijay Inder Singla",
    runnerUpParty: "INC",
    runnerUpVotes: 302371,
    runnerUpPercent: 28.07,
    margin: 10846,
    turnout: 61.98,
    region: "Malwa",
    reserved: "GEN",
  },
  {
    id: 7,
    name: "Ludhiana",
    winner: "Amrinder Singh Raja Warring",
    party: "INC",
    votes: 322224,
    percent: 30.42,
    runnerUp: "Ravneet Singh Bittu",
    runnerUpParty: "BJP",
    runnerUpVotes: 301282,
    runnerUpPercent: 28.45,
    margin: 20942,
    turnout: 60.12,
    region: "Malwa",
    reserved: "GEN",
  },
  {
    id: 8,
    name: "Fatehgarh Sahib",
    winner: "Amar Singh",
    party: "INC",
    votes: 332591,
    percent: 34.14,
    runnerUp: "Gurpreet Singh GP",
    runnerUpParty: "AAP",
    runnerUpVotes: 298389,
    runnerUpPercent: 30.63,
    margin: 34202,
    turnout: 62.53,
    region: "Malwa",
    reserved: "SC",
  },
  {
    id: 9,
    name: "Faridkot",
    winner: "Sarabjeet Singh Khalsa",
    party: "IND",
    votes: 298062,
    percent: 29.38,
    runnerUp: "Karamjit Anmol",
    runnerUpParty: "AAP",
    runnerUpVotes: 228009,
    runnerUpPercent: 22.48,
    margin: 70053,
    turnout: 63.34,
    region: "Malwa",
    reserved: "SC",
  },
  {
    id: 10,
    name: "Firozpur",
    winner: "Sher Singh Ghubaya",
    party: "INC",
    votes: 266626,
    percent: 23.7,
    runnerUp: "Jagdeep Singh Kaka Brar",
    runnerUpParty: "AAP",
    runnerUpVotes: 263384,
    runnerUpPercent: 23.41,
    margin: 3242,
    turnout: 67.02,
    region: "Malwa",
    reserved: "GEN",
  },
  {
    id: 11,
    name: "Bathinda",
    winner: "Harsimrat Kaur Badal",
    party: "SAD",
    votes: 376558,
    percent: 32.71,
    runnerUp: "Gurmeet Singh Khudian",
    runnerUpParty: "AAP",
    runnerUpVotes: 326902,
    runnerUpPercent: 28.4,
    margin: 49656,
    turnout: 69.36,
    region: "Malwa",
    reserved: "GEN",
  },
  {
    id: 12,
    name: "Sangrur",
    winner: "Gurmeet Singh Meet Hayer",
    party: "AAP",
    votes: 364085,
    percent: 36.06,
    runnerUp: "Sukhpal Singh Khaira",
    runnerUpParty: "INC",
    runnerUpVotes: 191525,
    runnerUpPercent: 18.97,
    margin: 172560,
    turnout: 64.63,
    region: "Malwa",
    reserved: "GEN",
  },
  {
    id: 13,
    name: "Patiala",
    winner: "Dharamvir Gandhi",
    party: "INC",
    votes: 305616,
    percent: 26.54,
    runnerUp: "Balbir Singh",
    runnerUpParty: "AAP",
    runnerUpVotes: 290785,
    runnerUpPercent: 25.25,
    margin: 14831,
    turnout: 63.63,
    region: "Malwa",
    reserved: "GEN",
  },
];

const ls2024RegionalBreakdown: LS2024RegionalBreakdown[] = [
  {
    region: "Malwa",
    totalSeats: 8,
    congress: 4,
    aap: 2,
    sad: 1,
    independent: 1,
    bjp: 0,
    turnout: 64,
  },
  {
    region: "Majha",
    totalSeats: 3,
    congress: 2,
    aap: 0,
    sad: 0,
    independent: 1,
    bjp: 0,
    turnout: 62,
  },
  {
    region: "Doaba",
    totalSeats: 2,
    congress: 1,
    aap: 1,
    sad: 0,
    independent: 0,
    bjp: 0,
    turnout: 60,
  },
];

const ls2024TurnoutAnalysis: LS2024TurnoutAnalysis[] = [
  { constituency: "Patiala", turnout: 74.02, changeVs2019: -4.14 },
  { constituency: "Bathinda", turnout: 72.43, changeVs2019: -4.8 },
  { constituency: "Jalandhar", turnout: 71.92, changeVs2019: -3.34 },
  { constituency: "Sangrur", turnout: 69.46, changeVs2019: -7.77 },
  { constituency: "Gurdaspur", turnout: 66.67, changeVs2019: -2.57 },
  { constituency: "Firozpur", turnout: 67.02, changeVs2019: -5.45 },
  { constituency: "Faridkot", turnout: 63.34, changeVs2019: 0.09 },
  { constituency: "Fatehgarh Sahib", turnout: 62.53, changeVs2019: -3.16 },
  { constituency: "Khadoor Sahib", turnout: 62.55, changeVs2019: -1.41 },
  { constituency: "Anandpur Sahib", turnout: 61.98, changeVs2019: -1.71 },
  { constituency: "Ludhiana", turnout: 60.12, changeVs2019: -2.08 },
  { constituency: "Hoshiarpur", turnout: 58.86, changeVs2019: -3.22 },
  { constituency: "Amritsar", turnout: 56.06, changeVs2019: -1.01 },
];

const ls2024MarginAnalysisClose: LS2024MarginAnalysis[] = [
  {
    constituency: "Firozpur",
    winner: "INC",
    margin: 3242,
    winnerPercent: 23.7,
    type: "close",
  },
  {
    constituency: "Anandpur Sahib",
    winner: "AAP",
    margin: 10846,
    winnerPercent: 29.08,
    type: "close",
  },
  {
    constituency: "Patiala",
    winner: "INC",
    margin: 14831,
    winnerPercent: 26.54,
    type: "close",
  },
  {
    constituency: "Ludhiana",
    winner: "INC",
    margin: 20942,
    winnerPercent: 30.42,
    type: "close",
  },
  {
    constituency: "Amritsar",
    winner: "INC",
    margin: 40301,
    winnerPercent: 28.18,
    type: "close",
  },
  {
    constituency: "Fatehgarh Sahib",
    winner: "INC",
    margin: 34202,
    winnerPercent: 34.14,
    type: "close",
  },
];

const ls2024MarginAnalysisLargest: LS2024MarginAnalysis[] = [
  {
    constituency: "Khadoor Sahib",
    winner: "IND (Amritpal)",
    margin: 197120,
    winnerPercent: 38.62,
    type: "landslide",
  },
  {
    constituency: "Jalandhar",
    winner: "INC (Channi)",
    margin: 175993,
    winnerPercent: 39.43,
    type: "landslide",
  },
  {
    constituency: "Sangrur",
    winner: "AAP (Hayer)",
    margin: 172560,
    winnerPercent: 36.06,
    type: "landslide",
  },
];

const ls2024AssemblySegmentLeads: LS2024AssemblySegmentLead[] = [
  { party: "INC", segmentsLed2024: 37, assemblySeatsWon2022: 18, change: 19 },
  { party: "AAP", segmentsLed2024: 33, assemblySeatsWon2022: 92, change: -59 },
  { party: "BJP", segmentsLed2024: 23, assemblySeatsWon2022: 2, change: 21 },
  { party: "Independent", segmentsLed2024: 15, assemblySeatsWon2022: 1, change: 14 },
  { party: "SAD", segmentsLed2024: 9, assemblySeatsWon2022: 3, change: 6 },
  { party: "BSP", segmentsLed2024: 0, assemblySeatsWon2022: 1, change: -1 },
];

const ls2024KeyTakeaways = [
  "Congress remains the frontrunner based on 2024 Lok Sabha segment leads (37 of 117)",
  "AAP's rural Malwa base is eroding - led only 33 segments vs 92 won in 2022",
  "BJP is the rising force - 23 segment leads shows growing relevance",
  "Independent candidates can swing results - two Independent wins",
  "SC-reserved seats remain Congress strongholds",
];

// ==========================================
// ASSEMBLY COMPOSITION DATA
// ==========================================

const assemblyCurrentSeats: AssemblyPartyComposition[] = [
  {
    party: "AAP",
    originalSeats2022: 92,
    currentSeatsMay2026: 94,
    change: 2,
    voteShare2022: 42.01,
    status: "GOVERNMENT",
  },
  {
    party: "INC",
    originalSeats2022: 18,
    currentSeatsMay2026: 16,
    change: -2,
    voteShare2022: 22.8,
    status: "OPPOSITION",
  },
  {
    party: "SAD",
    originalSeats2022: 3,
    currentSeatsMay2026: 3,
    change: 0,
    voteShare2022: 3.78,
    status: "OPPOSITION",
  },
  {
    party: "BJP",
    originalSeats2022: 2,
    currentSeatsMay2026: 2,
    change: 0,
    voteShare2022: 6.6,
    status: "OPPOSITION",
  },
  {
    party: "BSP",
    originalSeats2022: 1,
    currentSeatsMay2026: 1,
    change: 0,
    voteShare2022: 1.78,
    status: "OTHER",
  },
  {
    party: "IND",
    originalSeats2022: 1,
    currentSeatsMay2026: 1,
    change: 0,
    voteShare2022: 0,
    status: "OTHER",
  },
];

const assemblyLeadership: AssemblyLeadership[] = [
  { position: "Speaker", name: "Kultar Singh Sandhwan", party: "AAP", since: "March 21, 2022" },
  { position: "Deputy Speaker", name: "Jai Krishan Singh", party: "AAP", since: "June 30, 2022" },
  { position: "Chief Minister (Leader of House)", name: "Bhagwant Mann", party: "AAP", since: "March 16, 2022" },
  { position: "Deputy Leader of House", name: "Harpal Singh Cheema", party: "AAP", since: "March 21, 2022" },
  { position: "Minister of Legislative Affairs", name: "Ravjot Singh", party: "AAP", since: "September 23, 2024" },
  { position: "Leader of Opposition", name: "Partap Singh Bajwa", party: "INC", since: "April 9, 2022" },
  { position: "Deputy Leader of Opposition", name: "Aruna Chaudhary", party: "INC", since: "September 3, 2024" },
];

const congressMlas: AssemblyMLA[] = [
  { acNumber: 1, constituency: "Sujanpur", name: "Naresh Puri", party: "INC" },
  { acNumber: 4, constituency: "Gurdaspur", name: "Barinderjeet Singh Pahra", party: "INC" },
  { acNumber: 5, constituency: "Dina Nagar", name: "Aruna Chaudhary", party: "INC", position: "Deputy LoP" },
  { acNumber: 6, constituency: "Qadian", name: "Partap Singh Bajwa", party: "INC", position: "LoP" },
  { acNumber: 9, constituency: "Fatehgarh Churian", name: "Tript Rajender Singh Bajwa", party: "INC" },
  { acNumber: 12, constituency: "Raja Sansi", name: "Sukhwinder Singh Sarkaria", party: "INC" },
  { acNumber: 26, constituency: "Bholath", name: "Sukhpal Singh Khaira", party: "INC" },
  { acNumber: 27, constituency: "Kapurthala", name: "Rana Gurjeet Singh", party: "INC" },
  { acNumber: 29, constituency: "Phagwara", name: "Balwinder Singh Dhaliwal", party: "INC" },
  { acNumber: 30, constituency: "Phillaur", name: "Vikramjit Singh Chaudhary", party: "INC" },
  { acNumber: 32, constituency: "Shahkot", name: "Hardev Singh Ladi", party: "INC" },
  { acNumber: 36, constituency: "Jalandhar North", name: "Avtar Singh Junior", party: "INC" },
  { acNumber: 37, constituency: "Jalandhar Cantt", name: "Pargat Singh", party: "INC" },
  { acNumber: 38, constituency: "Adampur", name: "Sukhwinder Singh Kotli", party: "INC" },
  { acNumber: 81, constituency: "Abohar", name: "Sandeep Jakhar", party: "INC" },
  { acNumber: 103, constituency: "Barnala", name: "Kuldeep Singh Kala Dhillon", party: "INC", notes: "Won Nov 2024 bypoll" },
];

const sadMlas: AssemblyMLA[] = [
  { acNumber: 13, constituency: "Majitha", name: "Ganieve Kaur Majithia", party: "SAD" },
  { acNumber: 46, constituency: "Banga", name: "Sukhwinder Singh Sukhi", party: "SAD" },
  { acNumber: 68, constituency: "Dakha", name: "Manpreet Singh Ayali", party: "SAD" },
];

const bjpMlas: AssemblyMLA[] = [
  { acNumber: 3, constituency: "Pathankot", name: "Ashwini Kumar Sharma", party: "BJP" },
  { acNumber: 39, constituency: "Mukerian", name: "Jangilal Mahajan", party: "BJP" },
];

const bypollResults: BypollResult[] = [
  {
    date: "July 2024",
    constituency: "Jalandhar West",
    winner: "Bhupinder Singh",
    winnerParty: "AAP",
    previousWinner: "Sheetal Angural",
    previousParty: "AAP (defected to BJP)",
    swing: "AAP retained",
  },
  {
    date: "November 2024",
    constituency: "Gidderbaha",
    winner: "Hardeep Singh Dhillon",
    winnerParty: "AAP",
    previousWinner: "Amrinder Singh Raja Warring",
    previousParty: "INC",
    swing: "AAP gain from INC",
  },
  {
    date: "November 2024",
    constituency: "Dera Baba Nanak",
    winner: "AAP candidate",
    winnerParty: "AAP",
    previousWinner: "Sukhjinder Singh Randhawa",
    previousParty: "INC",
    swing: "AAP gain from INC",
  },
  {
    date: "November 2024",
    constituency: "Chabbewal",
    winner: "AAP candidate",
    winnerParty: "AAP",
    previousWinner: "Dr. Raj Kumar",
    previousParty: "INC",
    swing: "AAP gain from INC",
  },
  {
    date: "November 2024",
    constituency: "Barnala",
    winner: "Kuldeep Singh Kala Dhillon",
    winnerParty: "INC",
    previousWinner: "Gurmeet Singh Meet Hayer",
    previousParty: "AAP",
    swing: "INC gain from AAP",
  },
  {
    date: "June 2025",
    constituency: "Ludhiana West",
    winner: "Sanjeev Arora",
    winnerParty: "AAP",
    previousWinner: "Gurpreet Singh Gogi",
    previousParty: "AAP (died Jan 2025)",
    swing: "AAP retained",
  },
  {
    date: "November 2025",
    constituency: "Tarn Taran",
    winner: "AAP candidate",
    winnerParty: "AAP",
    previousWinner: "Kashmir Singh Sohal",
    previousParty: "AAP (died Aug 2025)",
    swing: "AAP retained",
  },
];

const defectionEvents: DefectionEvent[] = [
  {
    date: "April 24, 2026",
    description: "7 AAP Rajya Sabha MPs defect to BJP",
    impact: "BJP gains 6 of 7 RS seats from Punjab; no assembly seat change",
    affectedParty: "AAP",
    gainingParty: "BJP",
  },
];

const assemblyTimeline = [
  { event: "Assembly Election 2022", date: "Feb 20, 2022", impact: "AAP: 92, INC: 18, SAD: 3, BJP: 2, BSP: 1, IND: 1" },
  { event: "Sheetal Angural (AAP) joins BJP", date: "Early 2024", impact: "Seat vacated" },
  { event: "4 MLAs resign after LS election wins", date: "Jun 2024", impact: "4 seats vacated" },
  { event: "Jalandhar West bypoll", date: "Jul 2024", impact: "AAP wins" },
  { event: "Gidderbaha bypoll", date: "Nov 2024", impact: "AAP gains from INC" },
  { event: "Dera Baba Nanak bypoll", date: "Nov 2024", impact: "AAP gains from INC" },
  { event: "Chabbewal bypoll", date: "Nov 2024", impact: "AAP gains from INC" },
  { event: "Barnala bypoll", date: "Nov 2024", impact: "INC gains from AAP" },
  { event: "Gurpreet Gogi (Ludhiana West) dies", date: "Jan 2025", impact: "Seat vacated" },
  { event: "Ludhiana West bypoll", date: "Jun 2025", impact: "AAP retains seat" },
  { event: "Kashmir Singh Sohal (Tarn Taran) dies", date: "Aug 2025", impact: "Seat vacated" },
  { event: "Tarn Taran bypoll", date: "Nov 2025", impact: "AAP retains seat" },
  { event: "7 AAP Rajya Sabha MPs defect to BJP", date: "Apr 24, 2026", impact: "BJP gains RS seats; no assembly change" },
  { event: "Confidence Motion passed", date: "May 1, 2026", impact: "All 94 AAP MLAs reaffirm loyalty" },
];

// ==========================================
// SOURCES
// ==========================================

const electoralDataSources = [
  "Wikipedia -- 2024 Indian general election in Punjab",
  "IndiaVotes -- Punjab 2024 Lok Sabha results",
  "Times of India -- Punjab election results 2024",
  "The Hindu -- Punjab election results 2024",
  "NDTV -- Congress ahead in Punjab",
  "CEO Punjab -- Official election data",
  "Election Commission of India -- Results portal",
  "PRS India -- Profile of 16th Punjab Assembly",
  "Testbook -- Punjab MLA List",
];

// ==========================================
// MAIN KPI DATA
// ==========================================

export const electoralDataKPI: ElectoralDataKPI = {
  metadata: electoralDataMetadata,
  ls2024: {
    overview: ls2024Overview,
    partyPerformance: ls2024PartyPerformance,
    constituencyResults: ls2024ConstituencyResults,
    regionalBreakdown: ls2024RegionalBreakdown,
    turnoutAnalysis: ls2024TurnoutAnalysis,
    marginAnalysis: {
      closest: ls2024MarginAnalysisClose,
      largest: ls2024MarginAnalysisLargest,
    },
    assemblySegmentLeads: ls2024AssemblySegmentLeads,
    keyTakeaways: ls2024KeyTakeaways,
  },
  assemblyComposition: {
    currentSeats: assemblyCurrentSeats,
    governmentSeats: 94,
    oppositionSeats: 23,
    assemblyLeadership: assemblyLeadership,
    mlasByParty: [
      { party: "INC", mlas: congressMlas },
      { party: "SAD", mlas: sadMlas },
      { party: "BJP", mlas: bjpMlas },
    ],
    byPollResults: bypollResults,
    defectionEvents: defectionEvents,
    timeline: assemblyTimeline,
  },
  sources: electoralDataSources,
};

// ==========================================
// EXPORTS
// ==========================================

export default electoralDataKPI;
