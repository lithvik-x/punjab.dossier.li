// @ts-nocheck
// Voter Behavior Data for Punjab
// Derived from: mega-pillar M1/02-VOTER-BEHAVIOR.md
// Research Date: May 2026 | Status: COMPLETE

import type {
  VoterBehaviorReport,
  VotingMotivator,
  IssueMotivator,
  Barrier,
  TurnoutTrigger,
  IssueSalience,
  IssueOwnership,
  IssueShift,
  CandidatePreferenceFactor,
  KeyVoterBehaviorInsight,
  RegionalVoterPattern,
} from "@/types/voter-behavior-types";

// ==========================================
// METADATA
// ==========================================

const voterBehaviorMetadata = {
  documentVersion: "1.0",
  researchDate: "19 May 2026",
  electionContext: "Punjab Legislative Assembly — February 2027 (9 months out)",
  classification: "CAMPAIGN SENSITIVE — BILLION-DOLLAR CAMPAIGN",
  status: "COMPLETE" as const,
};

// ==========================================
// KEY BEHAVIORAL PATTERNS
// ==========================================

const keyBehavioralPatterns = [
  "Strong anti-incumbency sentiment against sitting governments (~2-term pattern)",
  "Local candidate factors often override party affiliation at booth level",
  "Caste-community voting blocks remain significant but are fluid",
  "Emotional voting centered on anger (drug deaths), fear (crime), hope (jobs)",
  "Issue salience shifts dramatically between elections based on recent events",
  "Split-ticket voting is common (LS vs Assembly)",
];

// ==========================================
// VOTING MOTIVATORS
// ==========================================

export const votingMotivators: VotingMotivator[] = [
  {
    rank: 1,
    name: "Candidate Like/Personality",
    priority: "HIGHEST",
    description:
      "Punjab voters demonstrate strong personal loyalty to candidates independent of party label. The 'local candidate' factor often overrides party affiliation.",
    evidence: [
      "2022 AAP wave was significantly driven by Bhagwant Mann's personal popularity as a clean, accessible leader",
      "Local strongmen (Gurdas, Badal, Sukhbir) maintain electoral bases through personal networks",
      "Rebel candidates regularly win 10-15% of seats by splitting the vote",
    ],
    campaignImplication:
      "Candidate selection is critical. Invest in candidate branding alongside party messaging.",
  },
  {
    rank: 2,
    name: "Party Support / Brand Loyalty",
    priority: "HIGH",
    description:
      "Congress remains the default party for ~30-35% of voters (primarily older, rural, Jat Sikh base from Malwa).",
    evidence: [
      "Congress secured 18 seats in 2022 but maintained 23.4% vote share",
      "Traditional Congress voters from Majha and Doaba regions show higher party loyalty",
      "Historical pattern: Congress loyalists comprise roughly 25-30% of electorate",
    ],
    campaignImplication:
      "Need both party messaging and candidate quality to win.",
  },
  {
    rank: 3,
    name: "Community Winning (Caste/Religious Identity)",
    priority: "HIGH",
    description:
      '"Ek varak, ek vote" (one community, one vote) remains significant in specific constituencies.',
    evidence: [
      "Mazhabi Sikh blocks (10-12%) vote cohesively in reserved constituencies",
      "Jat Sikh gotra politics affects inner-party candidate selection",
      "Dalit consolidation around BSP was 5-8% historically, now fluid between BSP/AAP",
    ],
    campaignImplication:
      "Caste-based outreach and candidate-caste matching are important.",
  },
  {
    rank: 4,
    name: "Good Governance Reward",
    priority: "MEDIUM",
    description:
      "Voters demonstrate capacity to reward good governance and punish failures.",
    evidence: [
      "AAP's 2022 victory was partially a reward for perceived 'clean' governance in Delhi",
      "Free electricity (300 units) became AAP's strongest positive achievement",
      "Voters track delivery on specific promises rather than general governance",
    ],
    campaignImplication:
      "Focus on specific deliverables rather than general claims.",
  },
  {
    rank: 5,
    name: "Hope for Change",
    priority: "HIGH",
    description:
      'Change-oriented voting is dominant in Punjab — "throw the bums out" pattern.',
    evidence: [
      "2017: Congress wave (77 seats) on change platform after 10-year SAD-BJP rule",
      "2022: AAP wave (92 seats) on change platform after 5-year Congress rule",
      "Anti-incumbency is the most consistent predictor of Punjab election outcomes",
    ],
    campaignImplication:
      "AAP government failures create opportunity for Congress as change agent.",
  },
];

// ==========================================
// ISSUE-BASED MOTIVATORS
// ==========================================

export const issueBasedMotivators: IssueMotivator[] = [
  {
    rank: 1,
    issue: "DRUG ERADICATION",
    salience: "CRITICAL",
    voterPriority: "Drug deaths, addiction rates, drug mafia connections",
    emotionalDriver: "Anger, fear for children's future",
    aapPosition: "Promised eradication in 1 month; FAILED",
    congressOpportunity:
      "AAP's failure on this promise is the #1 anti-AAP message",
    evidence: [
      "During 2022 elections, AAP consistently criticized Congress/BJP for drug connections",
      "Punjab Congress leaders continue to hammer AAP's drug crisis failure (July 2024)",
      "Drug-related deaths and addiction rates remain high under AAP government",
      "Youth deaths days after returning from rehab reported (2025-2026)",
    ],
  },
  {
    rank: 2,
    issue: "EMPLOYMENT / YOUTH JOBS",
    salience: "VERY HIGH",
    voterPriority: "Job creation, unemployment, better opportunities",
    emotionalDriver: "Fear, frustration, hopelessness",
    congressOpportunity: "Youth emigration accelerating under AAP government",
    evidence: [
      "Youth emigration accelerating under AAP government",
      "Employment remains top concern for 18-35 demographic",
      "Campaign promise: AAP promised 1 lakh jobs; delivery unclear",
    ],
  },
  {
    rank: 3,
    issue: "MSP / FARMER WELFARE",
    salience: "VERY HIGH",
    voterPriority: "Minimum Support Price guarantee, farm debt waiver",
    emotionalDriver: "Pride, fear of financial ruin",
    congressOpportunity: "AAP failed to deliver on MSP; farmer anger is opportunity",
    evidence: [
      "2024-2025: Farmers' protest at Shambhu/Khanauri borders (ongoing)",
      "Jagjit Singh Dallewal's hunger strike (Nov 2024 - April 2025)",
      "MSP guarantee law remains unmet promise",
      "Farmer leaders demanding loan relief, MSP legal guarantee",
      "Congress positioned as farmer-friendly (historical)",
    ],
  },
  {
    rank: 4,
    issue: "FREE ELECTRICITY",
    salience: "HIGH",
    voterPriority: "300 units free electricity (delivered)",
    emotionalDriver: "Relief, gratitude",
    aapPosition: "AAP's signature achievement - DELIVERED",
    congressOpportunity: undefined,
    evidence: [
      "AAP owns this issue strongly",
      "Congress must either counter with alternative welfare promise, argue quality concerns, or target urban middle-class",
    ],
  },
];

// ==========================================
// VOTING DETERRENTS
// ==========================================

export const votingDeterrents: Barrier[] = [
  // Registration Barriers
  {
    type: "registration",
    category: "Not Registered / Migration Issues",
    description:
      "Significant voter movement within Punjab (rural to urban); Estimated 8-12% voter list errors in fast-growing areas",
    affectedVoters: "Internal migrants, urban-rural movers",
    mitigation:
      "ECI's online registration has improved but rural access remains problematic",
  },
  {
    type: "registration",
    category: "NRI Challenge",
    description:
      "Only 393 registered NRI voters in Punjab (2019 data); NRIs cannot vote despite financial involvement",
    affectedVoters: "NRI community",
  },
  // Logistical Barriers
  {
    type: "logistical",
    category: "Distance & Transportation",
    description:
      "Booth proximity is critical in rural Malwa/Doaba; Traffic, parking at polling stations deters urban voters",
    affectedVoters: "Rural Malwa/Doaba, urban voters",
    mitigation: "2022 saw increased transportation arrangements by parties",
  },
  {
    type: "logistical",
    category: "Work Hours",
    description:
      "Industrial workers face shift constraints; Agricultural workers affected during harvest (April-May, October-November); Urban professionals need early/late polling options",
    affectedVoters:
      "Industrial workers, agricultural workers, urban professionals",
  },
  // Motivational Barriers
  {
    type: "motivational",
    category: "Cynicism / Futility",
    description:
      '8-12% of urban youth express "my vote doesn\'t matter" view; 15-20% cite disgust with politics',
    affectedVoters: "Urban youth, disillusioned voters",
    mitigation:
      "Emphasize close contests, impact messaging",
  },
  {
    type: "motivational",
    category: "No Good Candidate",
    description:
      "Voters sometimes choose 'least bad' rather than positive preference; Candidate quality is key — AAP won 92 seats on candidate desirability",
    affectedVoters: "All voter segments",
  },
  // Social Barriers
  {
    type: "social",
    category: "Family Pressure",
    description:
      "Conservative areas: family head may dictate voting choice; More common in women in rural Malwa",
    affectedVoters: "Women in rural Malwa",
  },
  {
    type: "social",
    category: "Community Boycott",
    description:
      "Some deras issue voting instructions to followers; Dera Sacha Sauda has issued voting diktats historically",
    affectedVoters: "Dera followers",
    mitigation:
      "Gurmeet Ram Rahim released on furlough before 2022 elections",
  },
  // Informational Barriers
  {
    type: "informational",
    category: "Date/Location Unawareness",
    description:
      "30% of first-time voters don't know exact polling date initially",
    affectedVoters: "First-time voters",
    mitigation: "ECI's multi-channel awareness campaigns",
  },
  {
    type: "informational",
    category: "Candidate Information",
    description:
      "60%+ of voters don't know party manifestos; 20-30% cannot name their MLA candidate",
    affectedVoters: "All voter segments",
    mitigation: "Simplify messages to 1-2 key promises per candidate",
  },
];

// ==========================================
// TURNOUT TRIGGERS
// ==========================================

export const turnoutTriggers: TurnoutTrigger[] = [
  {
    effectiveness: "MOST_EFFECTIVE",
    name: "Door-to-door canvassing",
    description:
      "Door-to-door canvassing remains the #1 turnout driver. Personal invitation from known party worker increases likelihood by 15-20%.",
    impact: "Personal contact increases voting likelihood by 15-20%",
    evidence: [
      "Congress's 2017 wave was built on massive booth-level organization",
      "AAP's 2022 wave included 100,000+ volunteers for ground contact",
    ],
  },
  {
    effectiveness: "EFFECTIVE",
    name: "Candidate Visit",
    description:
      "Direct candidate meeting (even brief) significantly increases turnout; Family Effect: Candidate visiting voter's home creates obligation",
    impact: "Significantly increases turnout",
  },
  {
    effectiveness: "EFFECTIVE",
    name: "Compelling Local Issue",
    description:
      "Local road, water, school issue drives turnout in that area. Example: Several constituencies in 2022 had 80%+ turnout due to local candidate/issue combination.",
    impact: "Local issues can drive 80%+ turnout",
  },
  {
    effectiveness: "MODERATELY_EFFECTIVE",
    name: "Perception of Close Contest",
    description:
      '"My vote matters" effect: Tight races see 5-10% higher turnout; Can be used as campaign tool to emphasize close races',
    impact: "5-10% higher turnout in tight races",
  },
  {
    effectiveness: "MODERATELY_EFFECTIVE",
    name: "Peer/Community Mobilization",
    description:
      "WhatsApp groups for voter mobilization; Religious institutions (Gurdwaras) mobilize effectively; Deras (Radha Soami, Dera Sacha Sauda) can mobilize followers",
    impact: "Community-based mobilization effective",
  },
  {
    effectiveness: "MODERATELY_EFFECTIVE",
    name: "Transportation Provided",
    description:
      "Each party arranges voter transport in targeted areas; ECI provides special arrangements for elderly/disabled",
    impact: "Party-organized transport increases turnout",
  },
  {
    effectiveness: "MODERATELY_EFFECTIVE",
    name: "Holiday Effect",
    description:
      "When election day is declared holiday, turnout increases 3-5%; February elections (2022) had good weather turnout",
    impact: "3-5% higher turnout when holiday declared",
  },
  {
    effectiveness: "MODERATELY_EFFECTIVE",
    name: "Social Media FOMO",
    description:
      '"I voted" posts create social pressure; Strongest effect among 18-35 demographic',
    impact: "Social pressure drives youth turnout",
  },
];

// ==========================================
// ISSUE SALIENCE BY CYCLE
// ==========================================

export const issueSalienceByCycle: IssueSalience[] = [
  {
    cycle: "2012-2017",
    issues: [
      { rank: 1, issue: "Rural distress / Agricultural crisis" },
      { rank: 2, issue: "Corruption (Congress)" },
      { rank: 3, issue: "Drug problem (emerging)", note: "Emerging issue" },
      { rank: 4, issue: "Unemployment" },
    ],
  },
  {
    cycle: "2017-2022",
    issues: [
      { rank: 1, issue: "Drug eradication", note: "MOST IMPORTANT" },
      { rank: 2, issue: "Change/anti-incumbency" },
      { rank: 3, issue: "Employment" },
      { rank: 4, issue: "Governance/corruption" },
    ],
  },
  {
    cycle: "2022-2027 (Projected)",
    issues: [
      { rank: 1, issue: "Drug crisis", note: "AAP FAILED - opportunity for Congress" },
      { rank: 2, issue: "Employment/youth emigration", note: "Growing crisis" },
      { rank: 3, issue: "MSP/Farmer welfare", note: "Farmer anger from unmet promises" },
      { rank: 4, issue: "Governance corruption", note: "AAP's eroded clean image" },
      { rank: 5, issue: "Law and order", note: "Gang wars, crime" },
      { rank: 6, issue: "Free electricity", note: "AAP strength, hard to counter" },
    ],
  },
];

// ==========================================
// ISSUE OWNERSHIP ANALYSIS
// ==========================================

export const issueOwnershipAnalysis: IssueOwnership[] = [
  {
    issue: "Farmers",
    congress: "STRONG",
    aap: "Weak",
    sad: "Moderate",
    bjp: "Weak",
    note: "AAP failed on MSP",
  },
  {
    issue: "Drug Eradication",
    congress: "Weak",
    aap: "FAILED",
    sad: "Moderate",
    bjp: "Moderate",
    note: "AAP failed - opportunity",
  },
  {
    issue: "Employment",
    congress: "Moderate",
    aap: "Failed",
    sad: "Weak",
    bjp: "Moderate",
    note: "Emigration crisis",
  },
  {
    issue: "Free Electricity",
    congress: "Weak",
    aap: "STRONG",
    sad: "Weak",
    bjp: "Weak",
    note: "Cannot counter easily",
  },
  {
    issue: "Law & Order",
    congress: "Moderate",
    aap: "Weak",
    sad: "Moderate",
    bjp: "Strong",
    note: "Crime up under AAP",
  },
  {
    issue: "Corruption",
    congress: "Moderate",
    aap: "Eroded",
    sad: "Moderate",
    bjp: "Moderate",
    note: "Multiple scandals",
  },
  {
    issue: "Infrastructure",
    congress: "Moderate",
    aap: "Moderate",
    sad: "Strong",
    bjp: "Strong",
  },
  {
    issue: "Women Safety",
    congress: "Moderate",
    aap: "Moderate",
    sad: "Moderate",
    bjp: "Moderate",
  },
];

// ==========================================
// ISSUE SHIFTS
// ==========================================

export const issueShifts: IssueShift[] = [
  {
    fromCycle: "Congress's Traditional Strengths",
    toCycle: "AAP's Eroded Strengths",
    changes: [
      "Farmers/agriculturists — MSP, cooperative federalism",
      "Rural development",
      "Secularism/communal harmony",
      "Clean governance — multiple scandals under Mann government",
      "Drug eradication — failed promise",
      "Honest administration — ED raids on ministers (2024-2025)",
    ],
  },
  {
    fromCycle: "SAD's Weakened Position",
    toCycle: "BJP's Emerging Position",
    changes: [
      "Panthic/farmer vote — damaged by 2020-2021 farm laws support",
      "Still has some Dalit base through BSP alliance history",
      "Improved from 6.6% (2022) to 18.56% (2024 LS) vote share",
      "Strong among urban voters, some Khatri/Baniya/Upper Caste",
      "Mazhabi Sikh outreach (positive discrimination)",
    ],
    criticalNotes:
      "Congress's Traditional Strengths: Farmers/agriculturists, rural development, secularism. AAP's Eroded Strengths: Clean governance, drug eradication, honest administration.",
  },
];

// ==========================================
// CANDIDATE PREFERENCE FACTORS
// ==========================================

export const candidatePreferenceFactors: CandidatePreferenceFactor[] = [
  {
    rank: 1,
    factor: "SAME CASTE/COMMUNITY",
    description:
      "Very significant in reserved constituencies (34 SC seats); Jat Sikh candidates in Jat-heavy constituencies; Mazhabi Sikh in SC-reserved areas",
    importance: "HIGHEST",
  },
  {
    rank: 2,
    factor: "CLEAN IMAGE",
    description:
      '"No criminal cases" preference is strong; Anti-corruption sentiment; "Accessible" leader who is approachable',
    importance: "HIGHEST",
  },
  {
    rank: 3,
    factor: "ACCESSIBILITY",
    description:
      "Candidates who are available to constituents; Known in constituency (prior representation, local roots)",
    importance: "HIGH",
  },
  {
    rank: 4,
    factor: "EDUCATED / YOUNG",
    description:
      "Growing preference for young, educated candidates; AAP emphasized this in 2022 (Mann, other new faces)",
    importance: "HIGH",
  },
  {
    rank: 5,
    factor: "WOMAN CANDIDATE",
    description:
      "33% reservation in tickets (but implementation varies); Some constituencies show preference for women candidates; More significant in urban, younger demographics",
    importance: "MEDIUM",
  },
  {
    rank: 6,
    factor: "FINANCIALLY CAPABLE",
    description:
      "Self-funded candidates have advantage; Ability to do development work from personal funds",
    importance: "MEDIUM",
  },
  {
    rank: 7,
    factor: "GOOD ORATOR",
    description:
      "Campaign rally attendance correlates with oratory skills",
    importance: "LOW",
  },
];

// ==========================================
// REGIONAL PATTERNS
// ==========================================

export const regionalVoterPatterns: RegionalVoterPattern[] = [
  {
    region: "Malwa",
    dominantFactors: [
      "Jat Sikh dominance",
      "Agricultural economy",
      "Family voting patterns",
    ],
    turnoutPattern: "Moderate to high; rural organization matters",
    keyCharacteristics: [
      "69 seats - largest region",
      "Wave elections amplify here most",
      "Anti-incumbency strong",
    ],
  },
  {
    region: "Majha",
    dominantFactors: [
      "Border dynamics",
      "Religious significance",
      "Mixed demographics",
    ],
    turnoutPattern: "Moderate; religious mobilization helps",
    keyCharacteristics: [
      "23 seats",
      "Congress stronghold historically",
      "Complex voter profile",
    ],
  },
  {
    region: "Doaba",
    dominantFactors: [
      "SC voter concentration",
      "Ramdasia/Ravidasia identity",
      "Diaspora influence",
    ],
    turnoutPattern: "High when mobilized; SC vote decisive",
    keyCharacteristics: [
      "25 seats",
      "Highest SC concentration (37.4%)",
      "BSP history strong here",
    ],
  },
];

// ==========================================
// KEY INSIGHTS
// ==========================================

export const keyVoterBehaviorInsights: KeyVoterBehaviorInsight[] = [
  {
    category: "Anti-Incumbency",
    insight:
      "Punjab exhibits the strongest anti-incumbency pattern among Indian states. Since 1967, no ruling party has been re-elected for a third consecutive term.",
    strategicImplication:
      "AAP completes second term in 2027 - historical pattern strongly favors Congress.",
  },
  {
    category: "Wave Elections",
    insight:
      "Wave elections (2017, 2022) can override structural factors. Both waves produced 70+ seat swings.",
    strategicImplication:
      "Congress needs to create wave momentum, not just rely on anti-incumbency.",
  },
  {
    category: "Candidate vs Party",
    insight:
      "Local candidate factors often override party label. Personal loyalty is stronger than party ID in Punjab.",
    strategicImplication:
      "Candidate selection is critical - invest in candidate quality and branding.",
  },
  {
    category: "Caste Dynamics",
    insight:
      "Caste-community voting blocks are significant but fluid. BSP-AAP-Congress SC vote is now contested.",
    strategicImplication:
      "Congress must carefully match candidates to caste composition of each seat.",
  },
  {
    category: "Doaba Battlefield",
    insight:
      "Doaba average victory margin is only 5.5% - genuinely competitive. Malwa average is 22% (AAP dominance).",
    strategicImplication:
      "Concentrate resources in Doaba where margins are narrowest.",
  },
];

// ==========================================
// COMPLETE REPORT
// ==========================================

export const voterBehaviorReport: VoterBehaviorReport = {
  metadata: voterBehaviorMetadata,
  keyBehavioralPatterns,
  votingMotivators,
  issueBasedMotivators,
  votingDeterrents,
  turnoutTriggers,
  issueSalienceByCycle,
  issueOwnershipAnalysis,
  issueShifts,
  candidatePreferenceFactors,
  regionalPatterns: regionalVoterPatterns,
  keyInsights: keyVoterBehaviorInsights,
};
