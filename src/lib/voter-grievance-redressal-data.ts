// @ts-nocheck
// Voter Grievance Redressal System Data
// Derived from: direct-documentation/cat-3-party-propulsion/g41-voter-grievance-redressal-system.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { VoterGrievanceRedressalData, GrievanceCategory } from "@/types/voter-grievance-redressal-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  documentType: "Operational System Design",
  track: "B — Documentation",
  version: "1.0",
  electionContext: "February 2027 (~8.5 months away)",
  confidence: "HIGH" as const,
};

// ==========================================
// EXECUTIVE SUMMARY
// ==========================================

const executiveSummary =
  "A voter grievance redressal system transforms voter frustration into a strategic advantage. When voters feel heard, complaints become loyalty. This system creates a structured pipeline from complaint collection to resolution to permanent supporter conversion. Core Premise: Every grievance is an opportunity. An unresolved grievance is a lost vote. A resolved grievance is a guaranteed vote plus two more through word-of-mouth.";

// ==========================================
// CHANNEL DATA
// ==========================================

const whatsappChannel = {
  numberStrategy:
    "Single memorable WhatsApp number per Lok Sabha constituency (10 numbers for Punjab's 10 LS seats)",
  protocol: [
    "Voter sends complaint via WhatsApp with photo/document if available",
    "Auto-reply within 5 minutes: 'Your complaint is registered. Reference: G-[DATE]-[SEQUENCE]. Our team will respond within 24 hours.'",
    "Complaint forwarded to relevant booth-level worker for verification",
    "Worker acknowledges within 4 hours",
    "Resolution timeline begins from submission timestamp",
  ],
  handlingTemplate: `Namaste! Thank you for contacting Punjab Congress Grievance Cell.
Your complaint has been registered.
Reference: G-[DATE]-[NUMBER]
Our team will investigate and respond within 24 hours.
Together, we will fix what AAP broke.
— Punjab Congress`,
  autoReply:
    "Your complaint is registered. Reference: G-[DATE]-[SEQUENCE]. Our team will respond within 24 hours.",
};

const phoneHotline = {
  tier1: {
    numberType: "Toll-free 1800 number",
    purpose: "Initial complaint registration",
    timing: "8 AM – 10 PM",
  },
  tier2: {
    numberType: "District-level landlines",
    purpose: "Local issue escalation",
    timing: "9 AM – 6 PM",
  },
  tier3: {
    numberType: "State HQ control room",
    purpose: "VIP/Media-sensitive escalation",
    timing: "24/7",
  },
};

const socialMediaChannel = {
  twitter: {
    account: "@PunjabCongressHelpline",
    hashtagMonitoring: ["#PunjabGrievance", "#AAPFailedPunjab", "#PunjabKaNana"],
    responseTime: "Response within 2 hours during daylight hours",
  },
  facebook: {
    pagesMonitored:
      "Monitor Facebook pages of Punjab Congress and candidate pages",
    complaintKeywords: ["complaint", "failed", "broken", "not working"],
    responseTime:
      "Private message within 1 hour, public reply within 4 hours",
  },
  protocol: [
    "Screenshot complaint with timestamp",
    "Register in CRM with source 'Social Media'",
    "Public reply acknowledging receipt: 'We see your concern. DM us your details.'",
    "Move to private channel for resolution tracking",
    "Public update only after resolution (with permission)",
  ],
};

const inPersonCollection = {
  atRallies:
    "Complaint counters at rally exit points (separate from registration/catering). 2-3 trained volunteers per counter with tablets. QR code linking to digital complaint form.",
  boothLevel:
    "Booth-level workers carry complaint slip books (carbon-copy format). Slips: Name, Phone, Address, Issue Category, Description, Signature.",
  doorToDoor:
    "During constituency padyatras, workers carry grievance forms. Every 10th house: 'Do you have a complaint about government services?'",
};

// ==========================================
// COMPLAINT CATEGORIES
// ==========================================

const grievanceCategories = [
  {
    code: "G-01" as GrievanceCategory,
    name: "Government Services Denied",
    description:
      "Documents (Aadhaar, Ration, PAN), scheme benefits, pensions",
    primaryHandler: "District Coordinator + Govt Liaison",
    sla: "48 hours",
  },
  {
    code: "G-02" as GrievanceCategory,
    name: "Local Infrastructure",
    description: "Roads, water supply, drainage, streetlights, garbage",
    primaryHandler: "Local Corporator/Councillor",
    sla: "1 week",
  },
  {
    code: "G-03" as GrievanceCategory,
    name: "Law & Order",
    description: "Police inaction, crime report ignored, safety concerns",
    primaryHandler: "District President + Legal Cell",
    sla: "24 hours",
  },
  {
    code: "G-04" as GrievanceCategory,
    name: "Government Employee Corruption",
    description: "Bribe demanded, files delayed for payment",
    primaryHandler: "Anti-Corruption Cell",
    sla: "48 hours",
  },
  {
    code: "G-05" as GrievageCategory,
    name: "AAP Governance Failure",
    description: "Policy failure, broken promises, service collapse",
    primaryHandler: "Research Cell + Media Cell",
    sla: "72 hours",
  },
  {
    code: "G-06" as GrievanceCategory,
    name: "Agricultural Distress",
    description: "Mandi issues, crop failure compensation, debt",
    primaryHandler: "Kisan Cell",
    sla: "1 week",
  },
  {
    code: "G-07" as GrievanceCategory,
    name: "Employment/Youth",
    description: "Job loss, scholarship denied, migration",
    primaryHandler: "Youth Cell",
    sla: "1 week",
  },
  {
    code: "G-08" as GrievanceCategory,
    name: "Women's Safety/Issues",
    description: "Harassment, domestic violence, institutional inaction",
    primaryHandler: "Mahila Cell",
    sla: "24 hours",
  },
  {
    code: "G-09" as GrievanceCategory,
    name: "Dera/Community Issues",
    description: "Community-specific grievances, religious sentiment",
    primaryHandler: "Minority/Cell relevant",
    sla: "72 hours",
  },
];

const categoryProtocols = {
  g01_GovernmentServices:
    "Verify if voter has proper documentation. Connect with relevant government department liaison. Help complete application, track status. Template: 'We are connecting you with [Official Name] at [Department]. Reference: [Ref]. If not resolved in 7 days, call 1800-XXX-XXXX.'",
  g02_LocalInfrastructure:
    "Photograph evidence. Assign local worker to physically inspect. File municipal/municipal corporation complaint on voter's behalf. Track with civic body official. Escalate to MLA candidate if unresolved.",
  g03_LawOrder:
    "Document complaint in writing. Connect with SHO/Commissioner through party channels. Help file online complaint at cybercrime.gov.in if police inaction. Legal cell review within 24 hours.",
  g04_GovernmentEmployeeCorruption:
    "Document: name of official, department, nature of bribe/delay. Do NOT promise prosecution without evidence. Connect with Anti-Corruption Helpline (104). Raise in Assembly if elected. Keep complainant confidential.",
  g05_AAPGovernanceFailure:
    "Register with full details. Research team compiles aggregate data. If pattern (10+ similar complaints): potential for campaign ammunition. Response: 'Thank you. Your complaint adds to hundreds of similar failures. We are documenting them for accountability.'",
  g06_AgriculturalDistress:
    "Connect with Kisan Cell. Document mandi issues, crop failure. Help with compensation applications. Track debt relief programs.",
  g07_EmploymentYouth:
    "Connect with Youth Cell. Document scholarship denials. Help with job placement resources. Track migration patterns.",
  g08_WomensSafety:
    "Immediate referral to Mahila Cell (women volunteers). Do NOT ask victim to repeat story multiple times. Connect with One Stop Helpline (181) if needed. Follow up within 48 hours regardless of resolution.",
  g09_DeraCommunityIssues:
    "Connect with relevant minority/community cell. Document specific grievance. Escalate to community leaders if needed. Maintain religious/cultural sensitivity.",
};

// ==========================================
// RESPONSE PROTOCOLS
// ==========================================

const threeTierResponse = {
  tier1: {
    name: "ACKNOWLEDGE",
    timeframe: "0-24 hours",
    actions: [
      "Complaint received and logged",
      "SMS/WhatsApp acknowledgment with reference number",
      "Assigned to relevant category handler",
      "Initial assessment completed",
    ],
  },
  tier2: {
    name: "INVESTIGATE",
    timeframe: "24 hours – 1 week",
    actions: [
      "Booth worker verifies complaint",
      "Evidence collected (photos, documents, witness)",
      "Department/official contacted for response",
      "Interim update sent to complainant",
      "Escalation if no response from department",
    ],
  },
  tier3: {
    name: "ACT/RESOLVE",
    timeframe: "1 week – 1 month",
    actions: [
      "Solution identified and communicated",
      "Action taken with complainant (document, photo, completion)",
      "Resolution confirmed with complainant (verbal + written)",
      "If unresolvable: documented reason + candidate awareness",
    ],
  },
};

const escalationTriggers = [
  { trigger: "VIP complainant (media, celebrity, political)", escalationPath: "Direct to State HQ control room" },
  { trigger: "Safety threat (life/property)", escalationPath: "Immediate law enforcement + District President" },
  { trigger: "10+ complaints on same issue", escalationPath: "Research Cell + Media Cell for campaign potential" },
  { trigger: "Police inaction on crime report", escalationPath: "Legal Cell + District President" },
  { trigger: "Government employee corruption", escalationPath: "Anti-Corruption Cell + Whistleblower protection" },
];

// ==========================================
// CRM & TRACKING
// ==========================================

const crmFields = {
  referenceNumber: "Format: G-[DATE]-[SEQUENCE] (e.g., G-20260520-001)",
  timestamp: "Auto-captured at submission",
  category: "G-01 through G-09",
  location: "Assembly constituency + specific address",
  voterContact: "Phone number (required for follow-up)",
  assignedTo: "District nodal + booth worker",
  status: "Received / Under Investigation / Resolved / Unresolvable",
  resolutionDate: "Auto-captured on resolution",
};

// ==========================================
// DASHBOARD METRICS
// ==========================================

const dashboardMetrics = {
  totalComplaints: 0, // To be tracked in real-time
  resolvedPercentage: 0, // Target: 80%+ within SLA
  averageResolutionTime: "5-7 days",
  categoryBreakdown: {
    "G-01": 0,
    "G-02": 0,
    "G-03": 0,
    "G-04": 0,
    "G-05": 0,
    "G-06": 0,
    "G-07": 0,
    "G-08": 0,
    "G-09": 0,
  },
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const voterGrievanceRedressalData: VoterGrievanceRedressalData = {
  metadata,
  executiveSummary,
  channels: {
    whatsapp: whatsappChannel,
    phoneHotline,
    socialMedia: socialMediaChannel,
    inPerson: inPersonCollection,
  },
  complaintCategories: grievanceCategories,
  categoryProtocols,
  responseProtocols: {
    threeTier: threeTierResponse,
    escalationTriggers,
  },
  crmFields,
  dashboardMetrics,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getCategoryByCode(code: GrievanceCategory): typeof grievanceCategories[0] | undefined {
  return grievanceCategories.find((c) => c.code === code);
}

export function getSLABreakdown(): { code: GrievanceCategory; name: string; sla: string }[] {
  return grievanceCategories.map((c) => ({
    code: c.code,
    name: c.name,
    sla: c.sla,
  }));
}

export function getThreeTierOverview(): { tier: string; timeframe: string }[] {
  return [
    { tier: threeTierResponse.tier1.name, timeframe: threeTierResponse.tier1.timeframe },
    { tier: threeTierResponse.tier2.name, timeframe: threeTierResponse.tier2.timeframe },
    { tier: threeTierResponse.tier3.name, timeframe: threeTierResponse.tier3.timeframe },
  ];
}

export function getEscalationTriggersList(): { trigger: string; path: string }[] {
  return escalationTriggers.map((e) => ({
    trigger: e.trigger,
    path: e.escalationPath,
  }));
}

export function getWhatsAppTemplate(): string {
  return whatsappChannel.handlingTemplate;
}

export function getResponseRateTarget(): number {
  return 80; // 80% within SLA
}
