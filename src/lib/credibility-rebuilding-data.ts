// @ts-nocheck
// Credibility Rebuilding Strategy Data
// Derived from: direct-documentation/cat-3-party-propulsion/g17-credibility-rebuilding-strategy.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { CredibilityRebuildingData } from "@/types/credibility-rebuilding-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  documentClassification: "Track B — Stable Framework/Documentation",
  reference: "G8 Perception Bottleneck Framework (P-5, P-9)",
  confidence: "HIGH" as const,
};

// ==========================================
// EXECUTIVE SUMMARY
// ==========================================

const executiveSummary =
  "The single largest obstacle to Congress victory in Punjab 2027 is not AAP's strength — it is Congress's credibility deficit. Breaking through these bottlenecks requires: (1) honest acknowledgment of past failures that stops short of self-annihilation, and (2) demonstrated behavioral change through specific actions, not messaging alone. Credibility is rebuilt through consistent action over 6-9 months, not through better advertising.";

// ==========================================
// 2017-2022 FAILURES
// ==========================================

const drugCrisisFailure = {
  promise: "End drug menace in 6 months",
  reality: "Failed spectacularly",
  policeComplicity:
    "No meaningful crackdown on drug networks despite posturing; police complicity allegations documented but unaddressed",
  outcome: "Drug overdose deaths continued at high rates throughout term",
};

const farmerDistressFailure = {
  promise: "Rs 10 lakh crore farm debt waiver",
  reality: "Full waiver not delivered",
  procurementFailures:
    "Many farmers left without Minimum Support Price guarantees",
  stubbleBurning: "Continued unchecked despite promises",
  incomeStagnation: "Agricultural income stagnation worsened",
};

const economicEmploymentFailure = {
  youthUnemployment: "Youth unemployment remained at 28-30% throughout term",
  industrialDevelopment:
    "No meaningful industrial development or investment attraction",
  formalSectorJobs: "Near zero formal sector job creation",
  msmeSector: "MSME sector collapse accelerated",
};

const governanceDeliveryFailure = {
  mlasLostDeposits: 18,
  ministerCorruption:
    "Multiple ministers faced corruption allegations with no action",
  schemeImplementation:
    "Delivery mechanisms (Rozgar, Bache, Gudiya, etc.) were poorly implemented and largely symbolic",
  basicServices:
    "No visible improvement in basic services: water, power, roads",
};

const lawOrderFailure = {
  deraEmboldened: "Dera Sacha Sauda and other fringe elements emboldened",
  sacrilegeIncidents: "Sacrilege incidents (Kashmir, Bargari) handled catastrophically",
  policeReforms: "Police reforms promised, not delivered",
  mobViolence: "Mob violence incidents increased",
};

// ==========================================
// ACKNOWLEDGMENTS
// ==========================================

const specificAcknowledgments = {
  drugPromise:
    '"We promised to end drugs in 6 months. That was not a realistic promise. We said what people wanted to hear rather than what we could deliver. We apologize for that."',
  farmDebtWaiver:
    '"We promised full farm debt waiver. We should have been honest that the state\'s fiscal situation did not allow that scale of waiver. We should have targeted the most distressed farmers rather than overpromising universal coverage."',
  serviceDelivery:
    '"Congress governments at the state level did improve some infrastructure but failed to deliver the basic services that matter most to ordinary Punjab families — reliable electricity, clean water, functional schools, and responsive police. We are sorry we did not do more."',
  corruption:
    '"We did not do enough to clean up Punjab\'s governance. There were ministers and officials in our government who should not have been there. We did not act against them when we should have. That is on us."',
  "2022Loss":
    '"The voters of Punjab in 2022 sent us a clear message. We did not listen in 2017. We deserved to lose."',
};

const acknowledgmentMessaging = {
  title: "Calibrated Delivery Without Self-Destruction",
  principle:
    "Acknowledge failures specifically without converting every acknowledgment into a self-flagellation exercise. Voters want to know you understand what went wrong, not that you are in despair.",
  dos: [
    "Use specific numbers and failures (not vague generalities)",
    "Connect acknowledgments to specific corrective actions",
    "Make acknowledgments in town halls and grassroots settings (not just media)",
    "Let local leaders and candidates acknowledge local failures",
    "Acknowledge in third person initially before moving to first person",
  ],
  donts: [
    "Hold 'mea culpa' press conferences that dominate news cycles for days",
    "Acknowledge past failures without immediately following with 'here is what we changed'",
    "Let critics control the narrative by forcing endless acknowledgments",
    "Apologize for every policy decision (including correct ones)",
    "Acknowledge failures that AAP also committed (maintains false equivalence)",
  ],
  keyPhraseFramework: [
    '"We heard you in 2022." — acknowledges loss without dwelling',
    '"We learned these specific lessons." — demonstrates change',
    '"Here is what we did about it." — transitions to action',
    '"2027 will be different because..." — forward-looking',
  ],
};

// ==========================================
// LESSONS LEARNED
// ==========================================

const internalReviewFindings = {
  overpromising:
    "Overpromising on deliverables without realistic fiscal assessment",
  ticketDistribution: "Ticket distribution prioritized loyalty over winnability",
  localOrganization: "Local organization disconnected from central leadership",
  socialMedia: "Social media and narrative warfare能力不足 (capability不足)",
  antiCorruptionPositioning:
    "Failure to anticipate AAP's positioning on anti-corruption",
  developmentContrast:
    "Did not effectively contrast Congress's actual development work with AAP's promises",
};

const structuralChanges = {
  decentralization:
    "Decentralized decision-making to Punjab Congress Committee (PCC) with reduced central interference",
  accountabilityCells: "Created 'Congress Accountability Cells' in each district",
  pratibhaVikaas:
    "Established 'Pratibha Vikaas' talent identification program for new candidate pipeline",
  policyTicketSeparation:
    "Separated policy formulation from ticket distribution (previously same individuals controlled both)",
};

const grassrootsStructure = {
  congressMitra: "Restarted 'Congress Mitra' membership drive (suspended since 2019)",
  sevaDal: "Created 'Seva Dal' volunteer corps separate from party machinery",
  kisanCell: "Established 'Kisan Cell' as autonomous body with elected leadership",
  youthCell: "Established 'Yuva Cell' as autonomous body with elected leadership",
  newMemberQuota:
    "50% of organizational posts now require new members (post-2022) to prevent old-guard capture",
};

const leadershipTransitions = {
  sidhuRemoval: "Removed as party president (December 2021, post-election review)",
  amarinderRemoval: "Removed as Chief Minister (September 2021, before election)",
  channiElevation:
    "Elevated as CM face (September 2021) — represented shift to OBC/Dalit outreach",
  localLeadership: "60% of 2022 candidates were first-time contestants",
};

const policyPositionChanges = [
  {
    "2017Position": "End drugs in 6 months",
    "2027Position": "Phased enforcement with rehabilitation",
    rationale: "Realistic, achievable framing",
  },
  {
    "2017Position": "Full farm debt waiver",
    "2027Position": "Targeted distress waiver + credit access reform",
    rationale: "Fiscal responsibility + targeted help",
  },
  {
    "2017Position": "Free power for all",
    "2027Position": "Subsidized power with efficiency reform",
    rationale: "Fiscal sustainability",
  },
  {
    "2017Position": "Industrial revolution",
    "2027Position": "MSME support and rural employment",
    rationale: "Grounded in Punjab's actual economy",
  },
  {
    "2017Position": "Strong anti-Dera action",
    "2027Position": "Community dialogue + legal action",
    rationale: "More nuanced approach",
  },
];

// ==========================================
// PROMISE ACCOUNTABILITY
// ==========================================

const threePartTest = {
  fiscallyRealistic:
    "Can the state actually fund this given current revenues and obligations?",
  administrativelyFeasible: "Does the bureaucracy have capacity to implement this?",
  legallyPermissible: "Can this be implemented within constitutional and legal framework?",
};

const promiseCategories = {
  commitment: "Core governance promises with defined delivery timelines (e.g., drug enforcement framework, power reform)",
  aspiration:
    "Desirable outcomes without guaranteed delivery (e.g., 10 lakh jobs, full farmer debt waiver)",
  intention: "Direction of travel, not specific promises (e.g., 'Will work towards' economic growth)",
};

const thirdPartyVerification = {
  expertCommittees:
    "Establish 'Punjab Promise Tracker' with independent economists, retired judges, and civil society; publish annual 'Promise Delivery Report'",
  citizenJuries:
    "Create 'Mohalla Juries' — 12-member citizen panels in each assembly segment; jurors selected by lottery; meet quarterly",
  lokpalMechanism:
    "Promise to establish Punjab Lokpal if not established by 2027; currently (May 2026) Punjab has NO Lokpal",
};

const sunsetClauses = {
  description:
    "Time-bound implementation milestones that automatically expire or trigger review if not met",
  deadlineTypes: [
    "First 100 days (emergency actions)",
    "First year (foundation laying)",
    "Full term (complete implementation)",
  ],
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const credibilityRebuildingData: CredibilityRebuildingData = {
  metadata,
  executiveSummary,
  failures2017_2022: {
    drugCrisis: drugCrisisFailure,
    farmerDistress: farmerDistressFailure,
    economicEmployment: economicEmploymentFailure,
    governanceDelivery: governanceDeliveryFailure,
    lawOrder: lawOrderFailure,
  },
  acknowledgments: {
    specificAcknowledgments,
    messaging: acknowledgmentMessaging,
  },
  lessonsLearned: {
    internalReviewFindings,
    structuralChanges,
    grassrootsStructure,
    leadershipTransitions,
    policyPositionChanges,
  },
  promiseAccountability: {
    threePartTest,
    promiseCategories,
    thirdPartyVerification,
    sunsetClauses,
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getAcknowledgmentStatements(): { topic: string; statement: string }[] {
  return [
    { topic: "Drug Promise", statement: specificAcknowledgments.drugPromise },
    { topic: "Farm Debt Waiver", statement: specificAcknowledgments.farmDebtWaiver },
    { topic: "Service Delivery", statement: specificAcknowledgments.serviceDelivery },
    { topic: "Corruption", statement: specificAcknowledgments.corruption },
    { topic: "2022 Loss", statement: specificAcknowledgments["2022Loss"] },
  ];
}

export function getKeyPhraseFramework(): string[] {
  return acknowledgmentMessaging.keyPhraseFramework;
}

export function getPolicyPositionChanges(): {
  "2017Position": string;
  "2027Position": string;
  rationale: string;
}[] {
  return policyPositionChanges;
}

export function getPromiseTestQuestions(): string[] {
  return [
    threePartTest.fiscallyRealistic,
    threePartTest.administrativelyFeasible,
    threePartTest.legallyPermissible,
  ];
}

export function getMLAsLostDeposits(): number {
  return governanceDeliveryFailure.mlasLostDeposits;
}
