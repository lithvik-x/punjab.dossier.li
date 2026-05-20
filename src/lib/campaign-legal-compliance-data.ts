// Campaign Legal Compliance & ECI Navigation Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g42-campaign-legal-compliance-eci.md

import type {
  PartyPerceptionMetrics,
  LeaderPerceptionMetrics,
  IssueOwnershipAnalysis,
  PositioningQuadrant,
  VoterSegmentClassification,
  MediaToneAnalysis,
  DeraLandscape,
  CampaignObjectives,
  RegionalVoteShift,
  VictoryPathway,
  ResourceAllocation,
  TimelinePhase,
  MilestoneCheckpoint,
  ContingencyScenario,
  StakeholderAlignment,
  MasterNarrative,
  SubNarrative,
  EmotionalArchitecture,
  MessageHierarchy,
  NarrativeTesting,
} from '@/types/perception-audit-types';

// ==========================================
// MODEL CODE OF CONDUCT
// ==========================================

export const mccKeyProvisions = [
  {
    rule: "Rule 6 - No Gifts",
    prohibition: "Any gift, freebies, cash, liquor, food, clothing, utensils, consumer goods valued above Rs 100",
    legalThreshold: "Any item offered to voters to influence their vote",
    punjabRisk: "Dera support mobilization often involves gift distribution - ensure dera leaders understand MCC boundaries",
  },
  {
    rule: "Rule 7 - No Hate Speech",
    prohibition: "Speech promoting enmity between groups on grounds of religion, caste, race, language, community",
    additional: "Remarks about ISI, Pakistan, anti-national activities in electoral context",
    punjabRisk: "Farm bills, drug trafficking, religious sentiment are emotional triggers - frame as policy critique, not community attacks",
  },
  {
    rule: "Rule 10 - No Paid News",
    prohibition: "Publishing news content in exchange for payment",
    requirement: "Legitimate party advertising must be clearly marked as 'Paid Advertisement'",
  },
  {
    rule: "No Booth Baiting",
    prohibition: "Stationing persons at polling stations to 'assist' voters",
    additional: "Providing transport to voters on polling day (exception: voter with disability/illness may be assisted)",
  },
];

export const silencePeriodRules = {
  duration: "48 hours before polling day + entire polling day",
  prohibited: [
    "No public rallies, processions, elections meetings",
    "No election-related public announcements via loudspeakers",
    "No election-related content on social media",
    "No canvassing in any form",
  ],
  permitted: [
    "Static publicity material (posters, banners) already installed may remain",
    "Cannot be illuminated or highlighted",
  ],
};

// ==========================================
// EXPENDITURE LIMITS
// ==========================================

export const expenditureLimits = [
  {
    category: "Candidate Expenditure Limit",
    limit: "Rs 54 lakhs per candidate (Punjab Assembly Elections)",
    included: [
      "Public rallies and meetings",
      "Campaign materials (banners, posters, pamphlets, cutouts)",
      "Media advertisements",
      "Social media promotion",
      "Canvassing expenses",
      "Vehicles used for campaign",
      "Office expenses",
      "Celebrity endorsements",
      "Opinion polls",
    ],
    excluded: [
      "Party headquarters expenses",
      "Candidate's personal assets used without cost",
      "Volunteer time (unpaid)",
      "Security personnel costs",
      "Candidate's own travel (personal, not campaign-related)",
    ],
  },
];

export const socialMediaExpenditureTracking = {
  mustTrack: [
    "Facebook/Meta ad spend",
    "Google/YouTube ad spend",
    "Twitter/X promoted posts",
    "Instagram sponsored content",
    "WhatsApp bulk messaging services",
    "Influencer fees",
    "Content creation costs",
  ],
  countingAsExpenditure: [
    "Party worker time on social media (if quantifiable)",
    "Use of party assets for social media campaigns",
    "Any 'in-kind' support from supporters",
  ],
};

export const overspendingConsequences = [
  { violation: "Exceeding candidate limit (minor)", consequence: "ECI disqualification of candidate" },
  { violation: "Exceeding candidate limit (substantial)", consequence: "Criminal prosecution under RPA Section 171-I" },
  { violation: "Failure to file expenditure return", consequence: "Disqualification for 5 years under Section 10A RPA" },
  { violation: "False expenditure statement", consequence: "Criminal prosecution for false declaration" },
  { violation: "Party-funded excess spending", consequence: "IT Department scrutiny, potential party deregistration" },
];

// ==========================================
// FORM 26 AFFIDAVIT REQUIREMENTS
// ==========================================

export const form26Contents = [
  {
    part: "Part A - Criminal Antecedents",
    contents: [
      "All criminal cases pending (FIR details, court, charges)",
      "Any conviction in the past 5 years",
      "Any ongoing investigation/inquiry",
    ],
  },
  {
    part: "Part B - Financial Assets",
    contents: [
      "Movable and immovable assets (self, spouse, dependent children)",
      "Liabilities (loans, mortgages, outstanding amounts)",
      "Net worth calculation",
    ],
  },
  {
    part: "Part C - Education Qualifications",
    contents: [
      "Highest educational qualification",
      "Degree details and institution",
    ],
  },
  {
    part: "Part D - PAN Status",
    contents: ["PAN Card number", "Declaration if PAN not possessed"],
  },
];

export const affidavitPreparationProtocol = [
  { step: 1, name: "Self-Assessment", timing: "2-3 weeks before filing", actions: ["Candidate discloses ALL criminal cases", "Provides all asset documents", "Signs declaration in presence of notary"] },
  { step: 2, name: "Legal Scrutiny", timing: "Before filing", actions: ["Party legal team reviews each case", "Identify cases with 'stay' or 'acquittal' pending", "Prepare explanatory notes for serious charges"] },
  { step: 3, name: "Filing", timing: "Within deadline", actions: ["File with Returning Officer", "File additional copies with SP/DCP of district"] },
  { step: 4, name: "Post-Filing", timing: "After filing", actions: ["Prepare for media queries", "Monitor for errors that can be corrected within time window"] },
];

// ==========================================
// CRIMINAL CASE MANAGEMENT
// ==========================================

export const criminalCaseStrategy = {
  eciPosition: "All criminal cases MUST be declared - no legal option to hide",
  tacticalApproach: [
    "Declare early and completely",
    "Frame narrative: 'Case is politically motivated' or 'Case arises from false accusation'",
    "Prepare legal defense documentation",
    "Have sympathetic media narrative ready",
  ],
  concealmentRisk: [
    "ECI can disqualify candidate at any stage",
    "Criminal prosecution under Section 125 RPA",
    "If elected and case concealed - election can be voided under RPA Section 100",
    "Party reputation suffers more from exposure than from declaration",
  ],
};

export const screeningFramework = [
  { phase: 1, name: "Self-Declaration", timing: "2 months before nomination", actions: ["Comprehensive criminal disclosure form", "Police clearance certificate from all districts of residence"] },
  { phase: 2, name: "Legal Verification", timing: "6 weeks before nomination", actions: ["Independent check against court records", "SP office verification", "NIA/ED/CBI records check if relevant"] },
  { phase: 3, name: "Risk Assessment", timing: "4 weeks before nomination", actions: ["Categorize: High Risk / Medium Risk / Low Risk", "For High Risk: substitution candidate, legal defense fund, media strategy"] },
  { phase: 4, name: "Final Decision", timing: "Nomination filing", actions: ["Central Election Committee makes final call"] },
];

// ==========================================
// FCRA & FOREIGN FUNDING RULES
// ==========================================

export const fcraProhibitedSources = [
  "Any foreign company, foreign government, foreign NGO",
  "Indian subsidiaries of foreign companies (unless Indian-incorporated with no foreign equity above 49%)",
  "OCI (Overseas Citizen of India) individuals - NO donations to political parties (FCRA 2020 amendment)",
  "Persons of Indian Origin (PIOs) - treated as foreign nationals under FCRA",
];

export const fcraProhibitedMechanisms = [
  "Routing donation through third party to obscure source",
  "'Donation' disguised as sale of goods/services above market value",
  "Free services provided by foreign-influenced entity",
];

export const corporateDonationRules = [
  "Indian companies CAN donate to political parties",
  "100% foreign-owned companies CANNOT donate",
  "Indian subsidiaries: only if foreign equity < 49% AND board resolution authorizes",
  "Donation must be from company's 'profit after earning' - not borrowed funds",
];

// ==========================================
// RPA SECTION 126 RESTRICTIONS
// ==========================================

export const section126Prohibitions = [
  "Holding, convening, or addressing any public meeting",
  "Organizing any public rally, procession, or campaign event",
  "Publishing any election-related advertisement in newspapers/TV",
  "Displaying any election matter (including results forecasts) on social media",
  "Using any vehicle (including two-wheelers) for election propaganda",
];

export const exitPollBlackout = {
  restriction: "No exit poll results publication after close of voting",
  extendedBlackout: "No publication/prediction of results until final polling in all constituencies complete",
  ifMultiPhase: "Exit poll publication banned until entire state polling is complete",
};

export const final48HoursProhibitedContent = [
  "Election campaign content",
  "Results forecasts or exit poll data",
  "Any matter 'likely to influence the voter'",
  "Advertisements related to elections",
];

// ==========================================
// PAID NEWS RULES
// ==========================================

export const paidNewsDefinition = {
  description: "Any news/analysis or comments published in any newspaper, magazine, periodical, or electronic media against payment",
  characteristics: [
    "Appears in editorial section (not clearly marked as advertisement)",
    "Does not carry 'Paid Advertisement' or 'Sponsored Content' label",
    "Media outlet has received direct/indirect payment from party/candidate",
    "Content is coordinated between party and media outlet",
  ],
};

export const legitimateVsPaidNews = [
  { type: "Legitimate", examples: ["Ad marked 'Paid Advertisement'", "Press release used as source (clearly attributed)", "Paid political advertisement with disclosure"] },
  { type: "Paid News (Illegal)", examples: ["Editorial-style article without disclosure", "Sponsored 'news' segment", "Reporter covering event after receiving 'hospitality' from party"] },
];

// ==========================================
// BOOTH-LEVEL COMPLIANCE
// ==========================================

export const canvassingTiming = {
  beforeNomination: "Canvassing permitted once election is announced (after MCC effective)",
  afterNomination: "Canvassing continues through campaign period",
  restrictions: [
    "No canvassing after: Final day of campaign (usually 2 days before polling)",
    "No canvassing at all during: Silence Period (48 hours before polling)",
  ],
};

export const pollingStationRestrictions = {
  prohibitedWithin100Meters: [
    "No canvassing of any kind",
    "No display of party flags, symbols, posters",
    "No loudspeakers or public address systems",
    "No distribution of voting instructions",
  ],
  prohibitedAnyDistanceOnPollingDay: [
    "No giving of any gift or inducement (48 hours before + polling day)",
    "No transport of voters (except disabled voter with assistant)",
    "No bribing, threatening, or intimidating voters",
    "No publishing of election-related content including social media",
  ],
  permitted: [
    "Candidate or party representative as 'polling agent' inside booth",
    "Candidate casting own vote (must not canvass while doing so)",
    "Voter approaching booth freely to cast vote",
  ],
};

// ==========================================
// COMMON VIOLATIONS & PENALTIES
// ==========================================

export const commonMistakes = [
  { mistake: "Not marking paid advertisements as 'paid'", risk: "Paid news inquiry" },
  { mistake: "Exceeding social media ad limits", risk: "Expenditure violation" },
  { mistake: "Publishing manifesto after MCC effect (if promises violate fiscal logic)", risk: "Court case" },
  { mistake: "Using government transport/aircraft for campaign", risk: "Poll code violation" },
  { mistake: "Holding rally after silence period", risk: "Criminal prosecution" },
  { mistake: "Giving water/tea to voters near booth", risk: "Voter inducement (gray area)" },
  { mistake: "Sharing opinion polls on social media (48 hours)", risk: "Section 126 violation" },
  { mistake: "Not filing expenditure return on time", risk: "5-year disqualification" },
  { mistake: "Declaring wrong/no criminal cases", risk: "Criminal prosecution" },
  { mistake: "Accepting OCI/foreign donation", risk: "FCRA violation" },
];

export const penalties = [
  { violation: "Exceeding expenditure limit", penalty: "Disqualification + criminal prosecution" },
  { violation: "Failure to file expenditure return", penalty: "Disqualification for 5 years (Section 10A RPA)" },
  { violation: "Paid news (non-declared)", penalty: "Bar from election + criminal case" },
  { violation: "Hate speech", penalty: "Criminal prosecution + ECI derecognition" },
  { violation: "MCC violation (silence period)", penalty: "Criminal prosecution (Section 126)" },
  { violation: "FCRA violation", penalty: "Party deregistration + criminal case" },
  { violation: "False affidavit", penalty: "Criminal prosecution" },
  { violation: "Booth capturing", penalty: "2-year imprisonment" },
];

// ==========================================
// REPORTING OPPONENT VIOLATIONS
// ==========================================

export const reportingSteps = [
  { step: 1, action: "Document the Violation", details: ["Photograph/video evidence", "Written witness statements", "Preserve social media posts/screenshots", "Note date, time, location, perpetrator details"] },
  { step: 2, action: "Immediate Reporting", details: ["Call ECI Helpline: 1950 (toll-free)", "File online: voterservice.eci.nic.in", "Contact District Election Officer (DEO)", "Contact Returning Officer (RO)"] },
  { step: 3, action: "Follow-Up", details: ["Submit written complaint with evidence within 24 hours", "Request FIR if violation is cognizable", "Escalate to CEO, Punjab if no action"] },
  { step: 4, action: "Media", details: ["If ECI inaction, brief trusted journalists with evidence", "Social media amplification (careful - could be counter-productive)"] },
];

// ==========================================
// KEY LEGAL PROVISIONS
// ==========================================

export const keyLegalProvisions = [
  { provision: "RPA Section 123", subject: "Undue influence, bribery at elections", penalty: "Disqualification + imprisonment" },
  { provision: "RPA Section 125", subject: "Failure to disclose criminal cases", penalty: "Criminal prosecution" },
  { provision: "RPA Section 126", subject: "Silence period violations", penalty: "Imprisonment up to 2 years" },
  { provision: "RPA Section 127", subject: "Publication of false statements", penalty: "Criminal defamation" },
  { provision: "RPA Section 171-H", subject: "Illegal election expenditure", penalty: "Fine" },
  { provision: "RPA Section 10-A", subject: "Failure to file expenditure return", penalty: "Disqualification 5 years" },
  { provision: "IPC Section 499", subject: "Criminal defamation", penalty: "Imprisonment up to 2 years" },
  { provision: "IPC Section 171-B", subject: "Bribery at elections", penalty: "Imprisonment up to 1 year" },
];

// ==========================================
// ECI CONTACTS
// ==========================================

export const eciContacts = [
  { authority: "ECI Helpline", contact: "1950 (toll-free)", purpose: "Complaints, queries during election" },
  { authority: "CEO, Punjab", contact: "ceo.punjab@eci.gov.in", purpose: "State-level election administration" },
  { authority: "DEO (District)", contact: "Contact via CEO office", purpose: "District-level complaints" },
  { authority: "ECI Website", contact: "voterservice.eci.nic.in", purpose: "Online complaint filing" },
];

// ==========================================
// COMPLIANCE CALENDAR
// ==========================================

export const complianceCalendar = [
  { phase: "Pre-Announcement", timing: "Before ECI announcement", actions: ["Screen candidates", "Prepare Form 26", "Establish expenditure tracking"] },
  { phase: "Post-Announcement", timing: "MCC effective date", actions: ["Brief all candidates on MCC rules", "Stop all pre-MCC activities that violate MCC"] },
  { phase: "Nomination Phase", timing: "2-3 weeks post-announcement", actions: ["File Form 26", "Verify all documents", "Expenditure tracking begins"] },
  { phase: "Campaign Phase", timing: "Post-nomination to silence period", actions: ["Track all expenditure daily", "Review all content for MCC compliance", "No hate speech"] },
  { phase: "Silence Period", timing: "48 hours before polling", actions: ["Complete halt of all campaign activity", "Social media silence", "No new materials"] },
  { phase: "Polling Day", timing: "Polling day", actions: ["No canvassing", "Authorized agents only at booth", "Report violations immediately"] },
  { phase: "Post-Polling", timing: "Day after polling", actions: ["Prepare expenditure return", "No campaign activities"] },
  { phase: "Post-Result", timing: "30 days after result", actions: ["File expenditure return", "Close designated bank account"] },
];
