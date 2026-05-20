// Election Violence & Security Planning Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b31-election-violence-security-planning.md

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
// SECURITY ASSESSMENT
// ==========================================

export const historicalViolencePatterns = {
  period: "1977-1992",
  severity: "Highest",
  description: "Punjab experienced severe election-related violence during insurgency period",
  incidents: "Multiple killings of polling officials and voters",
  notableElections: ["1977", "1980", "1985", "1992"],
};

export const recentElectionsSecurity = {
  "2022": {
    violenceLevel: "Lowest in recent history",
    capfDeployment: "Effective",
    statePoliceCoordination: "Strong",
    incidents: "Isolated booth capture attempts",
  },
  "2017": {
    violenceLevel: "Moderate",
    incidents: "Some candidate and worker violence",
  },
  "2012": {
    violenceLevel: "Moderate",
    incidents: "Isolated incidents in rural constituencies",
  },
};

// ==========================================
// THREAT CATEGORIES
// ==========================================

export const threatCategories = [
  {
    category: "Militant/Extremist Residual Threat",
    description: "Dormant modules connected to cross-border networks",
    riskLevel: "Low-Medium",
    indicators: ["Unexplained cash recoveries", "Suspicious gatherings", "Intelligence inputs"],
  },
  {
    category: "Criminal-Political Nexus",
    description: "Private armed supporters and muscle power networks in rural areas",
    riskLevel: "Medium-High",
    indicators: ["Prior violence incidents", "Candidate criminal history", "Booth capture reports"],
  },
  {
    category: "Communal Fault Lines",
    description: "Disputed religious sites, transient communities, targeted polarization",
    riskLevel: "Medium",
    indicators: ["Recent communal incidents", "Social media polarization", "Disputed site proximity"],
  },
  {
    category: "Factional Violence",
    description: "Intra-party disputes over ticket distribution",
    riskLevel: "High",
    indicators: ["Multiple aspirants", "Faction leader criticism", "Worker slowdowns"],
  },
];

// ==========================================
// SENSITIVE AREAS IDENTIFICATION
// ==========================================

export const sensitiveRegions = [
  {
    region: "Malwa",
    seats: 69,
    districts: ["Bhatinda", "Mansa", "Sangrur", "Faridkot"],
    riskFactors: [
      "Highest farmer suicides and agrarian distress",
      "Dera settlement political alignments",
      "Drug network penetration history",
    ],
    priorityLevel: "Highest",
  },
  {
    region: "Border Districts",
    seats: "Multiple",
    districts: ["Ferozepur", "Tarn Taran", "Gurdaspur", "Pathankot"],
    riskFactors: [
      "Smuggling networks",
      "Illegal immigration",
      "Potential militant infiltration",
    ],
    priorityLevel: "High",
  },
  {
    region: "Urban Industrial",
    seats: "Multiple",
    towns: ["Ludhiana", "Jalandhar", "Amritsar", "Mohali"],
    riskFactors: [
      "Labor unrest",
      "Organized crime activity",
      "Protests intersecting elections",
    ],
    priorityLevel: "Medium",
  },
  {
    region: "SC Dominant Areas",
    seats: "Concentrated in Doaba and Malwa",
    communities: ["Mazhabi Sikh", "Valmiki", "Ravidasia"],
    riskFactors: [
      "Land disputes",
      "Dignity issues",
      "Political representation struggles",
    ],
    priorityLevel: "Medium-High",
  },
];

// ==========================================
// CRIMINAL-POLITICIAN NEXUS RISKS
// ==========================================

export const criminalNexusRiskFactors = [
  "Candidates with pending criminal cases seeking electoral influence",
  "Booth-level agents carrying weapons or engaging in voter intimidation",
  "Organized booth capturing groups in rural constituencies",
  "Blurred boundary between private security and criminal gangs",
  "Money power influencing electoral outcomes",
];

export const enforcementMechanisms = [
  "ECI guidelines on candidates with criminal cases (Supreme Court directions 2018)",
  "Mandatory disclosure of criminal antecedents in nomination papers",
  "Special courts for election-related crimes",
  "Rapid response teams for violence reporting",
];

// ==========================================
// CAPF DEPLOYMENT FRAMEWORK
// ==========================================

export const capfDeploymentPhases = [
  {
    phase: "Pre-Election Deployment",
    timing: "10-15 days before first phase polling",
    activities: ["Area domination", "Route marches", "Confidence building among voters"],
    forcesAvailable: ["CRPF", "BSF (border districts)", "CISF (urban/industrial)", "SSB"],
  },
  {
    phase: "Polling Day Deployment",
    timing: "Election day",
    activities: ["Secure outer perimeter of polling stations", "Support state police inner arrangement"],
    ratio: "1 CAPF constable minimum per sensitive booth",
  },
];

// ==========================================
// STATE POLICE DEPLOYMENT
// ==========================================

export const policeDeploymentStructure = [
  {
    level: "Commissionerate (Urban)",
    areas: ["Ludhiana", "Jalandhar", "Amritsar", "Patiala"],
    authority: "Police Commissioners",
  },
  {
    level: "District Level",
    areas: "Rural areas",
    authority: "Senior Superintendents of Police (SSPs)",
    supervision: "District Election Officer (DEO)",
  },
];

export const specializedUnits = [
  "Counter Intelligence unit (monitoring potential troublemakers)",
  "Crime Branch (investigating election-related crimes)",
  "Cyber Crime unit (monitoring social media polarization)",
  "Anti-Terrorist Squad (handling militant threats)",
  "Punjab Armed Police (PAP) and India Reserve Police (IRP) battalions",
];

// ==========================================
// SURVEILLANCE AND RESPONSE TEAMS
// ==========================================

export const staticSurveillanceTeams = {
  description: "Fixed teams at polling booths and counting centers",
  composition: "2-4 personnel depending on threat assessment",
  criticalLocations: "Sensitive booth locations with highest risk",
};

export const flyingSquads = {
  description: "Mobile teams for rapid response and area patrol",
  functions: [
    "Respond to electoral malpractice complaints",
    "Intercept suspicious vehicles",
    "Conduct surprise premises checks",
    "Provide backup to static teams",
  ],
};

export const videoSurveillanceTeams = {
  description: "Body-worn cameras and portable recording equipment",
  criticalCoverage: ["Counting centers", "Sensitive booth locations"],
  requirements: [
    "Live streaming to ECI central monitoring in New Delhi",
    "Comprehensive video coverage at counting centers",
    "Chain of custody maintenance for evidence",
  ],
};

// ==========================================
// BOOTH CAPTURE PREVENTION
// ==========================================

export const boothCaptureIndicators = [
  "Sudden interruption of polling",
  "Unusual clustering of voters leaving without casting ballots",
  "Reports of hostile groups approaching polling stations",
  "Movement of suspected booth-capturing teams in vehicles",
];

export const preventionMechanisms = [
  "CAPF deployment at vulnerable booths",
  "Micro-observers (civilian ECI observers) at each booth",
  "Randomization of polling personnel assignments",
  "VVPAT verification for voter confidence",
];

export const responseProtocol = [
  "Returning Officer authority to suspend polling at affected booth",
  "Dispatch additional security forces",
  "ECI approval required for countermanding poll",
  "Re-polling with enhanced security",
];

// ==========================================
// SENSITIVE BOOTH IDENTIFICATION
// ==========================================

export const sensitiveBoothCriteria = [
  {
    criterion: "Historical Incident Data",
    description: "Booths with prior electoral violence, booth capturing, or significant malpractices",
  },
  {
    criterion: "Criminal Antecedents",
    description: "Areas with high concentration of candidates/individuals with criminal cases",
  },
  {
    criterion: "Communal Sensitivity",
    description: "Booths near disputed religious sites or demographic polarization potential",
  },
  {
    criterion: "Social Network Mapping",
    description: "Intelligence on family, community, or political faction rivalries",
  },
  {
    criterion: "Expenditure Patterns",
    description: "Historically high black money circulation areas",
  },
];

export const vulnerabilityMappingFactors = [
  "Geographic vulnerability concentration",
  "Temporal vulnerability (candidate filing, night before polling)",
  "Social vulnerability (low cohesion, high unemployment, recent trauma)",
  "Infrastructure vulnerability (isolated structures, limited communications)",
  "Counterparty vulnerability (close contests creating mutual malpractice incentive)",
];

// ==========================================
// RISK TIER CLASSIFICATION
// ==========================================

export const riskTierClassification = [
  {
    tier: "Tier 1 (Critical)",
    criteria: [
      "Previous booth capturing incidents",
      "Ongoing threats from criminal elements",
      "Highly contentious electoral contests",
    ],
    securityLevel: "Maximum CAPF and police deployment, continuous video surveillance, micro-observer assignment",
  },
  {
    tier: "Tier 2 (Sensitive)",
    criteria: [
      "Elevated risk indicators without severe historical data",
    ],
    securityLevel: "Substantial police presence, CAPF support where available, random verification visits",
  },
  {
    tier: "Tier 3 (Normal)",
    criteria: [
      "No specific risk indicators",
    ],
    securityLevel: "Normal police deployment per standard operating procedures",
  },
];

// ==========================================
// RAPID RESPONSE PROTOCOLS
// ==========================================

export const crisisCommunicationProtocols = {
  chainOfCommand: "District Information Officer (DIO) under DEO guidance manages crisis communication at district level",
  stateCoordination: "State Information Center coordinates across districts",
  stakeholderCommunication: [
    "Direct lines to candidates' election agents",
    "Regular situation briefings to party headquarters",
    "ECI media certification and monitoring committee",
  ],
};

export const legalResponseFramework = {
  immediateActions: [
    "Section 229A IPC (booth capturing) - same-day FIR registration",
    "Section 171 IPC (illegal voting)",
    "Section 186 IPC (obstructing public servant)",
    "Section 307 IPC (attempt to murder)",
    "Section 120B IPC (criminal conspiracy)",
  ],
  electionSpecificMechanisms: [
    "Special courts for election-related crimes",
    "Returning Officer authority for warrantless arrests",
    "ECI authority to countermand polls and order re-polling",
  ],
};

export const medicalEmergencyProtocols = {
  prePositioned: [
    "Ambulances with BLS capability at strategic locations",
    "ALS ambulances at district hospitals and major healthcare facilities",
  ],
  casualtyCollectionPoints: "Pre-identified schools, community halls, or healthcare facilities",
  hospitalCoordination: [
    "Mass casualty response plan activation",
    "Trauma centers and burn units on standby",
    "Elevated blood bank inventory levels",
  ],
};

// ==========================================
// EVIDENCE PRESERVATION
// ==========================================

export const evidencePreservationProtocols = [
  {
    type: "Scene Documentation",
    requirements: ["Photograph and videograph before modification", "Detailed measurements and positions", "Environmental conditions documented"],
  },
  {
    type: "Witness Protection",
    requirements: ["Prompt statement recording", "Protective custody when necessary", "Video testimony technology"],
  },
  {
    type: "Digital Evidence",
    requirements: ["Mobile phone and social media content collection", "CCTV footage following forensic protocols", "Cyber Crime unit coordination"],
  },
  {
    type: "Ballot Box Integrity",
    requirements: ["Strict chain of custody for affected boxes", "Secure transportation to safe location", "Recounting availability for legal scrutiny"],
  },
];

// ==========================================
// IPC PROVISIONS RELATED TO ELECTION VIOLENCE
// ==========================================

export const ipcProvisions = [
  { section: "229A", title: "Booth Capturing", punishment: "Imprisonment up to 2 years, fine, or both" },
  { section: "171", title: "Illegal Voting", description: "Various sub-sections addressing voting without qualification, multiple voting" },
  { section: "186", title: "Obstructing Public Servant", description: "Applies to attacks on polling officials and security personnel" },
  { section: "350/351", title: "Criminal Force and Assault", description: "Attacks on voters, candidates, and election officials" },
  { section: "319-326", title: "Hurt and Grievous Hurt", description: "Physical injuries with enhanced penalties for public servant victims" },
  { section: "147-148", title: "Rioting", description: "Organized violence by 5+ persons with enhanced penalties for armed rioting" },
  { section: "120B", title: "Criminal Conspiracy", description: "Organized attempts holding organizers accountable even if not physically present" },
];

// ==========================================
// COMPENSATION FRAMEWORKS
// ==========================================

export const compensationMechanisms = [
  {
    type: "State Compensation",
    description: "Punjab Victim Compensation Scheme under Criminal Procedure Code",
    coverage: ["Medical expenses", "Rehabilitation costs", "Economic losses"],
  },
  {
    type: "ECI Compensation Orders",
    description: "Authority to award compensation for malpractice resulting from negligence",
  },
  {
    type: "Criminal Injuries Compensation",
    description: "Courts can direct perpetrators to pay compensation as part of sentences",
  },
  {
    type: "Re-Polling Compensation",
    description: "Additional election expenses recoverable from perpetrators",
  },
];

// ==========================================
// KEY CONCEPTS
// ==========================================

export const securityKeyConcepts = {
  CAPF: "Central Armed Police Forces under Ministry of Home Affairs providing neutral security presence",
  sensitiveBooth: "Polling station with elevated risk based on historical data, intelligence, or contextual factors",
  boothCapturing: "Offense under Section 229A IPC involving unauthorized takeover of polling station",
  flyingSquad: "Mobile police/CAPF team responding to electoral malpractice complaints",
  VVPAT: "Voter Verifiable Paper Audit Trail providing visual verification of vote recording",
  microObserver: "Civilian ECI observer at polling stations for independent monitoring",
  modelCodeOfConduct: "ECI guidelines governing campaign conduct including security-related restrictions",
  DEO: "District Election Officer - chief election official at district level",
  countermand: "ECI power to cancel poll at affected stations and order re-polling",
  staticSurveillanceTeam: "Fixed security position at polling station or counting center",
  rapidResponseTeam: "Designated team for emergent security situations during elections",
};
