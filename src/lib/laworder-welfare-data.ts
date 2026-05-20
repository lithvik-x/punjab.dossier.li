// Law, Order & Welfare Data for Punjab 2022-2027
// Derived from: research-M2/MP1-foundational/governance/laworder-welfare.md
// Research Date: 20 May 2026 | Data Coverage: 2024-2026

import type {
  LawOrderWelfareData,
  LawOrderWelfareMetadata,
  AAPGovernmentClaims,
  CrimeStatistics2025,
  EncounterStats,
  IndependentVerification,
  EncounterData,
  ThreeMonthEncounterData,
  EncounterCase,
  YearlyEncounterData,
  GangsterNetworkData,
  GangsterProfile,
  PoliceCorruptionIncidents,
  RegionalImpact,
  DistrictEncounterData,
  CampaignData,
  CongressStrategy,
  ComparativeAnalysis,
  IntelligenceGap,
  SourceEntry,
  ConfidenceAssessment,
} from "@/types/laworder-welfare-types";

// ==========================================
// METADATA
// ==========================================

const METADATA: LawOrderWelfareMetadata = {
  researchDate: "20 May 2026",
  dataCoverage: "2024-2026 (current as of research date)",
  confidence: "HIGH",
  source: "web-research",
  megaPillar: "MP1 — Foundational Scan",
  domain: "Governance",
  taskId: "T-MP1-GOV-003",
  status: "COMPLETE",
};

// ==========================================
// OFFICIAL CRIME STATISTICS
// ==========================================

const DRUG_SEIZURES_2025: CrimeStatistics2025 = {
  casesRegistered: 29784,
  arrests: 39867,
  heroinSeized: 2021, // kg - record claimed
  methamphetamineSeized: 26, // kg ("ice")
  opiumSeized: 698, // kg
  poppyHuskSeized: 35000, // kg
  intoxicantPillsSeized: 5578000, // 55.78 lakh
  drugMoneyRecovered: 16.81, // Rs crore
  ndpsConvictionRate: 88, // percentage
};

const ENCOUNTER_STATS_SINCE_APRIL_2022: EncounterStats = {
  encounters: 324,
  deaths: 24,
  arrests: 515,
  bulletInjured: 319,
  bulletInjuryRate: 62, // 62% of arrested gangsters had bullet injuries
};

const OFFICIAL_CLAIMS: AAPGovernmentClaims = {
  crimeRatePerLakh: 227,
  nationalAverageCrimeRate: 448,
  himachalPradeshCrimeRate: 267,
  gangstersArrested2025: 925,
  foreignGangstersIdentified: 60,
  redCornerNoticesIssued: 23,
  drugSeizures: DRUG_SEIZURES_2025,
  encounterStatsSinceApril2022: ENCOUNTER_STATS_SINCE_APRIL_2022,
};

// ==========================================
// INDEPENDENT VERIFICATION
// ==========================================

const INDEPENDENT_VERIFICATION: IndependentVerification = {
  murderRate: {
    from: 3952,
    to: 3022,
    reduction: 24, // percentage - genuine improvement
  },
  gangRapeDecrease2025: "79%", // VERIFICATION_NEEDED - Pakistani source
  officialCrimeDecrease2024_2025: 1.9, // less than 2%, contradicts CM's 70-80% claim
  ndpsRanking: "Highest in India (NCRB 2024)",
  verificationNotes: [
    "NCRB 2024 report figures for Punjab should be confirmed directly from NCRB official release",
    "Discrepancy between AAP's claimed crime reduction and Punjab's continued ranking at top of NDPS Act violations",
    "CM's claim of 70-80% crime reduction proven false by official data (Geo News fact-check, 6 Jan 2026)",
  ],
};

// ==========================================
// ENCOUNTER DATA
// ==========================================

const KEY_ENCOUNTER_CASES: EncounterCase[] = [
  {
    date: "November 2025",
    name: "Harkaran Singh & Gurtej Singh",
    location: "Khanna",
    type: "custody",
    outcome: "killed",
    details: "Custody encounter; Khanna SSP claimed self-defence after sub-inspector was struck",
  },
  {
    date: "November 2025",
    name: "Harjinder Singh (notorious gangster)",
    location: "Amritsar",
    type: "checkpoint",
    outcome: "killed",
    details: "Killed 13 days after release from prison; encounter killed him at checkpoint",
  },
  {
    date: "December 2025",
    name: "Daler Singh",
    location: "Amritsar",
    type: "custody",
    outcome: "injured",
    details: "Custody encounter during weapon recovery; shot in leg",
  },
  {
    date: "January 2026",
    name: "Harnur (associate of Prabh Dasuwal & Afridi)",
    location: "Tarn Taran",
    type: "encounter",
    outcome: "killed",
    details: "DIG stated he opened fire; bullet hit officer's jacket",
  },
  {
    date: "January 2026",
    name: "Sukhraj Singh alias Gunga",
    location: "Amritsar",
    type: "weapon-recovery",
    outcome: "killed",
    details: "Linked to Prabh Dasuwal gang; allegedly attempted to snatch service pistol during recovery",
  },
  {
    date: "January 2026",
    name: "Karan Pathak alias Karan 'Defaulter'",
    location: "Punjab",
    type: "custody",
    outcome: "killed",
    details:
      "Arrested for killing kabaddi promoter Rana Balachauria in front of a stadium full of people; shot in custody, later died",
  },
];

const THREE_MONTH_ENCOUNTER_DATA: ThreeMonthEncounterData = {
  period: "November 2025 - January 2026",
  totalEncounters: 34, // approximately one every three days
  deaths: 5,
  injured: 45,
  january2026Alone: 15,
  custodyEncountersPercentage: 33, // more than one-third
  keyCases: KEY_ENCOUNTER_CASES,
};

const YEARLY_ENCOUNTER_DATA_2024: YearlyEncounterData = {
  year: 2024,
  encounters: 64,
  deaths: 4, // including one police personnel
  accusedInjured: 56,
  policeInjured: 9,
  policeDeaths: 1,
};

const ENCOUNTER_DATA: EncounterData = {
  sinceApril2022: ENCOUNTER_STATS_SINCE_APRIL_2022,
  threeMonthIntensive: THREE_MONTH_ENCOUNTER_DATA,
  yearlyData: {
    2024: YEARLY_ENCOUNTER_DATA_2024,
    "2025_Jan_Jul": {
      encounters: 20, // encounters involving accused already in custody
      custodyDeaths: 5,
      note: "Prompted advocate Nikhil Saraf to approach NHRC",
    },
  },
  nhrcNotice: {
    issued: true,
    noticeDate: "November 2025",
    stateResponse: "No reply filed after two months",
    unansweredQuestions: [
      "If an accused sustains grievous injuries in a police encounter, an FIR must be registered",
      "Investigation must be conducted by a police officer senior to the head of the police party",
      "If casualty is reported, a magistrate inquiry is mandatory",
    ],
  },
};

// ==========================================
// GANGS AND ORGANISED CRIME
// ==========================================

const FOREIGN_BASED_GANGSTERS: GangsterProfile[] = [
  {
    name: "Lawrence Bishnoi",
    alias: "Bishnoi Gang Kingpin",
    base: "Jail (India) / formerly overseas",
    knownNetwork: "Bishnoi Gang",
    keyActivities: ["Targeted killings", "Extortion", "International reach", "Links to ISI"],
    status: "jail",
  },
  {
    name: "Goldy Brar",
    base: "Foreign",
    knownNetwork: "Lawrence Bishnoi network",
    keyActivities: ["Organized crime"],
    status: "foreign",
  },
  {
    name: "Prabh Dasuwal",
    alias: "Prabh Dasuwal gang",
    base: "US (reported)",
    keyActivities: ["Targeted killings", "Extortion"],
    status: "foreign",
  },
  {
    name: "Sukhmeet Pal Singh",
    alias: "Sukh Bhikhariwal",
    base: "Foreign",
    knownNetwork: "Lovepreet Singh Lovi connection",
    keyActivities: ["Extortion calls"],
    status: "foreign",
  },
  {
    name: "Parminder Singh",
    alias: "Pindi",
    base: "UAE",
    keyActivities: ["International operations"],
    status: "foreign",
    note: "Active during 2025",
  },
  {
    name: "Jaggu Bhagwanpuria",
    base: "Jail/foreign",
    keyActivities: ["Cross-border operations", "Organized crime network"],
    status: "jail",
  },
];

const GANGS_AND_ORGANISED_CRIME: GangsterNetworkData = {
  foreignBasedGangsters: FOREIGN_BASED_GANGSTERS,
  bishnoiNetwork: {
    kingpin: "Lawrence Bishnoi (born 1993)",
    internationalReach: true,
    isiLinks: true, // November 2025: Ludhiana police busted "gangster-terror module" with ISI links
    californiaConnection: true, // April 2026: Cal Matters report on Indian gangs terrorizing Sikh immigrants in California
    note: "International extortion network targeting diaspora communities",
  },
  extortionData: {
    totalFIRs3Years: 569,
    firs2023: 220,
    firs2024: 279,
    firsTillMarch2025: 70,
    dgpQuote:
      "Around 80% of extortion calls are made by local criminals with no gang links. Only about 20% are linked to organised gangs abroad.",
    localVsOrganised: {
      localExtortion: 80,
      organisedGangs: 20,
    },
  },
  agtfInfo: {
    established: "6 April 2022",
    predecessor: "Organised Crime Control Unit (OCCU) - existed from 1 April 2017",
    role: "Operations unit gathering technical intelligence and operational support for police commissionerates and districts",
    legislationGap: "Punjab currently operates without specific anti-organised crime legislation",
    pcocaProposal: {
      firstSent: "27 November 2011",
      neverPromulgated: true,
      freshProposalAfterAAP: "27 June 2022",
      stillNotPromulgated: true,
    },
  },
};

// ==========================================
// POLICE INCIDENTS
// ==========================================

const POLICE_INCIDENTS: PoliceCorruptionIncidents = {
  cbiRaidDIG: {
    officer: "Harcharan Singh Bhullar (former Ropar Range DIG)",
    outcome: "CBI raid consequent to seizure of huge cache of cash, gold, and valuable items from Chandigarh residence",
  },
  suspendedOfficers: [
    "Tarn Taran SSP Dr Ravjot Grewal (suspended by ECI)",
    "DGP Gaurav Yadav (summoned by ECI)",
    "ADGP-rank officer SPS Parmar (suspended as Chief Director of Vigilance, April - reinstated August)",
  ],
  highProfileCases: [
    {
      incident: "Assault on Serving Army Colonel and Son",
      date: "March 2025",
      location: "Patiala",
      outcome:
        "Then SSP Patiala (Nanak Singh) allowed accused to walk free; Punjab & Haryana High Court ordered CBI probe",
      politicalImpact: "Most damaging incident for AAP's law-and-order narrative",
    },
    {
      incident: "CBI Raid on Former DIG",
      date: "2025",
      location: "Chandigarh residence",
      outcome: "Huge cache of cash, gold, valuable items seized",
      politicalImpact: "Police credibility damaged",
    },
  ],
};

// ==========================================
// REGIONAL IMPACT
// ==========================================

const DISTRICT_ENCOUNTER_DATA: DistrictEncounterData[] = [
  {
    district: "Amritsar",
    encountersNov2025_Jan2026: 9,
    notableIncidents: [
      "Harjinder Singh killed 13 days after prison release",
      "Multiple custody-related encounters",
      "Sukhraj Singh alias Gunga killed",
    ],
  },
  {
    district: "Ludhiana",
    encountersNov2025_Jan2026: 5,
    notableIncidents: [
      "Punjab's economic hub - direct business community impact",
      '"Gangster-terror module" busted with ISI links (November 2025)',
    ],
  },
  {
    district: "Tarn Taran",
    encountersNov2025_Jan2026: 2,
    notableIncidents: [
      "2025 by-election controversy",
      "SSP suspended by ECI",
      "Harnur killing (associate of Prabh Dasuwal & Afridi)",
    ],
  },
  {
    district: "Patiala",
    encountersNov2025_Jan2026: 1,
    notableIncidents: ["Colonel assault scandal", "High Court intervention"],
  },
];

const REGIONAL_IMPACT: RegionalImpact = {
  mostAffectedDistricts: DISTRICT_ENCOUNTER_DATA,
  firstWeekJanuary2026: {
    murders: 9,
    period: "1-7 January 2026",
    notableIncidents: [
      "AAP sarpanch's killing",
      "Bouncer Gagandeep Singh from Manuke village (shot dead due to old rivalry)",
      "Gang rivalry murders",
    ],
  },
  kabaddiPromoterCase: {
    victim: "Kanwar Digvijay Singh alias Rana Balachauria",
    date: "15 December 2025",
    location: "Outside stadium",
    significance: "Killed in front of stadium full of people - maximum visibility",
    highCourtAction:
      "Punjab & Haryana High Court took suo motu cognisance; DGP summoned to next hearing",
    subsequentEncounter:
      "Suspects arrested and then killed in custody (Karan Pathak) - became symbol of gangster impunity",
  },
};

// ==========================================
// CAMPAIGN DATA
// ==========================================

const CAMPAIGN_DATA: CampaignData = {
  attackLines: [
    {
      number: 1,
      title: "Encounters Without Accountability",
      message:
        "AAP promised rule of law but gave us encounters without inquiry. 324 encounters, 24 dead, and not a single independent investigation. Where is the accountability?",
    },
    {
      number: 2,
      title: "Murder Capital of 2026",
      message:
        "In the first week of January 2026 alone, nine murders. This is AAP's Punjab — where a kabaddi promoter is killed in front of a stadium full of people, and the killer is killed in police custody before he can speak.",
    },
    {
      number: 3,
      title: "Extortion Economy",
      message:
        "569 FIRs of gangster threats in three years. 279 FIRs in 2024 alone. Businesses are paying protection money. Families are living in fear. This is not the Punjab you promised.",
    },
    {
      number: 4,
      title: "Police Under Political Control",
      message:
        "AAP suspends police officers who do their duty. SSPs are transferred at election time. The serving Colonel is beaten up in Patiala and the government tries to cover it up. CBI had to investigate.",
    },
    {
      number: 5,
      title: "Gangsters Operate, Police Encounter",
      message:
        "While real gangsters operate from Dubai and Canada, AAP government kills suspects in custody. The ISI-linked modules are busted, but the masterminds remain safe. Encounter politics, not justice.",
    },
    {
      number: 6,
      title: "Drugs Still Flow",
      message:
        "Punjab ranks highest in India under NDPS Act. More heroin seized, but more also flowing. The Taliban's opium ban is reducing supply globally — AAP is claiming credit for a global market shift, not its own action.",
    },
  ],
  casesToReference: [
    {
      case: "Rana Balachauria murder",
      outragePotential:
        "Kabaddi promoter killed in public; killer killed in custody — maximum outrage potential",
    },
    {
      case: "Colonel assault (Patiala)",
      outragePotential:
        "Serving Army officer humiliated; CBI had to investigate; undermines national security narrative",
    },
    {
      case: "Abohar businessman murder",
      outragePotential: "Business community confidence shattered; daylight killing in July 2025",
    },
    {
      case: "Nine murders in first week January 2026",
      outragePotential: 'Fresh in memory; easy to frame as "AAP\'s New Year gift to Punjab"',
    },
    {
      case: "569 gangster threat FIRs in 3 years",
      outragePotential: "Systemic fear; shows this is not isolated incidents",
    },
    {
      case: "NHRC notice ignored",
      outragePotential: "Rule of law question; government's defiance of human rights commission",
    },
    {
      case: "Police suspensions during elections",
      outragePotential: "Tarn Taran bypoll — shows political interference in police operations",
    },
  ],
  whatToAvoid: [
    "Do NOT claim Congress had a clean record on law and order (2017-2022 had its own issues)",
    "Do NOT focus solely on encounters without acknowledging legitimate police action against gangsters",
    'Do NOT use "encounter" as a blanket term — acknowledge that some encounters are genuine self-defence while questioning the pattern',
    "Do NOT claim Punjab is the worst state — DGP's statistics showing crime below national average have some validity; use selective data",
  ],
  voterDemographics: [
    {
      segment: "Urban middle class (Ludhiana, Jalandhar, Amritsar, Patiala)",
      reason: "Affected by extortion calls and business confidence",
    },
    {
      segment: "Business community",
      reason: "Abohar murder had significant impact; security concerns for investment",
    },
    {
      segment: "Families of crime victims",
      reason: "Emotional capital is significant",
    },
    {
      segment: "Rural youth",
      reason: "Gangster recruitment is a concern; parents fear children being radicalized or recruited",
    },
    {
      segment: "Border region voters",
      reason: "ISI-drone-gangster nexus is a direct security threat",
    },
  ],
};

// ==========================================
// CONGRESS STRATEGY
// ==========================================

const CONGRESS_STRATEGY: CongressStrategy = {
  opportunities: [
    "AAP is most vulnerable on 'brazen crime + perceived cover-up' narrative",
    "Pattern of custody encounters, High Court interventions, and ignored NHRC notices creates governance failure narrative",
    "Law and order is a necessary but not sufficient campaign pillar",
  ],
  risks: [
    "If Congress over-reaches on law and order (implying it was perfect 2017-2022), AAP will pivot to drug corruption during Congress tenure",
    "Congress should acknowledge past failures while focusing on AAP's specific violations of due process",
  ],
  effectiveWhen: [
    "Paired with positive economic and agricultural messaging (farmers, youth employment)",
    "Supported by specific, well-documented cases (not general claims)",
    "Coupled with a credible Congress alternative for policing",
  ],
};

// ==========================================
// COMPARATIVE ANALYSIS
// ==========================================

const COMPARATIVE_ANALYSIS: ComparativeAnalysis = {
  congressWeaknesses: [
    "Promised 'zero drug' campaign that was never fully achieved",
    "Drug-related deaths and addiction rates remained high",
    "Rural crime was persistent",
    "About 60-70 extrajudicial deaths during Congress tenure (media reports)",
    "Police reform was limited",
    "Corruption scandals (including some minister-level controversies)",
  ],
  aapPromisesVsReality: [
    {
      promise: '"Gangster-free Punjab"',
      reality:
        "Gangster networks expanded; foreign-based operations grew; 24 encounter deaths since taking power",
    },
    {
      promise: "Zero tolerance on drugs",
      reality:
        "Punjab continues to rank at top of NDPS Act violations nationally; 2,021 kg heroin seized but availability allegedly continues",
    },
    {
      promise: "Safety for all",
      reality:
        "9 murders in first week of January 2026; extortion calls rampant; kabaddi promoter killed in public",
    },
    {
      promise: "Professional policing",
      reality:
        "NHRC notice unanswered; multiple police suspensions for perceived political reasons; Colonel assault scandal; AI audio controversy",
    },
    {
      promise: "Anti-corruption",
      reality:
        "CBI raid on former DIG; widespread suspensions of officers for perceived inaction against political opponents",
    },
  ],
};

// ==========================================
// INTELLIGENCE GAPS
// ==========================================

const INTELLIGENCE_GAPS: IntelligenceGap[] = [
  {
    id: 1,
    dataPoint: "NCRB 2024 data",
    verificationNeeded:
      "Confirming Punjab's top ranking under NDPS Act — should be retrieved directly from NCRB official website or publication",
  },
  {
    id: 2,
    dataPoint: "Congress-era encounter numbers (2017-2022)",
    verificationNeeded: "Comparative data is necessary for balanced campaign messaging",
  },
  {
    id: 3,
    dataPoint: "Consumer pulse surveys on safety perception",
    verificationNeeded:
      "Qualitative voter research in key constituencies would add depth to statistical data",
  },
  {
    id: 4,
    dataPoint: "AAP's own law-and-order survey data",
    verificationNeeded: "If any internal polls exist showing voter priorities, these would sharpen messaging",
  },
  {
    id: 5,
    dataPoint: "Specific constituency-level crime statistics",
    verificationNeeded:
      "Current data is state-level; assembly constituency breakdown would enable targeted micro-strategy",
  },
  {
    id: 6,
    dataPoint: "Kanwar Digvijay Singh (Rana Balachauria) case",
    verificationNeeded: "Details of the December 2025 murder and subsequent encounter require full case documentation",
  },
  {
    id: 7,
    dataPoint: "Post-Sindoor security environment",
    verificationNeeded:
      "DGP mentioned increased Pakistani arms push post-Operation Sindoor; this requires intelligence community confirmation",
  },
];

// ==========================================
// SOURCES
// ==========================================

const SOURCES: SourceEntry[] = [
  {
    source: "Indian Express (Exclusive)",
    date: "19 Feb 2026",
    keyInformation: "34 encounters (Nov 2025–Jan 2026); NHRC notice; encounter details",
  },
  {
    source: "Indian Express Year Ender",
    date: "25 Dec 2025",
    keyInformation:
      "2025 paradox; Colonel assault; kabaddi promoter case; police suspensions",
  },
  {
    source: "Hindustan Times (DGP Interview)",
    date: "31 Dec 2025",
    keyInformation: "Official claims; crime statistics; drug seizures; gangster networks",
  },
  {
    source: "Times of India",
    date: "8 Apr 2025",
    keyInformation: "569 gangster threat FIRs; AGTF details; PCOCA non-promulgation",
  },
  {
    source: "Eurasian Review",
    date: "13 Jan 2026",
    keyInformation: "Gang violence analysis; structural vulnerabilities; foreign gangster operations",
  },
  {
    source: "OpIndia",
    date: "8 Jan 2026",
    keyInformation: "Nine murders first week Jan 2026",
  },
  {
    source: "Geo News (Fact-check)",
    date: "6 Jan 2026",
    keyInformation: "CM's 70-80% crime reduction claim 'proven false' by official data",
  },
  {
    source: "New Indian Express",
    date: "20 Jan 2026",
    keyInformation: "Operation Parhar launch; 12,000 police; 2,000 locations",
  },
  {
    source: "SATP",
    date: "Various",
    keyInformation: "Murder statistics; crime trends",
  },
  {
    source: "Cal Matters",
    date: "15 Apr 2026",
    keyInformation:
      "Bishnoi gang international extortion network targeting California diaspora",
  },
];

// ==========================================
// CONFIDENCE ASSESSMENT
// ==========================================

const CONFIDENCE_ASSESSMENT: ConfidenceAssessment[] = [
  {
    dimension: "Encounter statistics (official police data)",
    confidence: "HIGH",
  },
  {
    dimension: "NHRC notice and legal proceedings",
    confidence: "HIGH",
  },
  {
    dimension: "Police corruption incidents (CBI, suspensions)",
    confidence: "HIGH",
  },
  {
    dimension: "Government statistical claims",
    confidence: "MEDIUM",
  },
  {
    dimension: "Voter perception of safety",
    confidence: "MEDIUM",
  },
  {
    dimension: "Foreign gangster network connections",
    confidence: "MEDIUM",
  },
  {
    dimension: "AAP-specific attack line recommendations",
    confidence: "HIGH",
  },
  {
    dimension: "Comparative Congress vs AAP framing",
    confidence: "MEDIUM",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const lawOrderWelfareData: LawOrderWelfareData = {
  metadata: METADATA,
  officialClaims: OFFICIAL_CLAIMS,
  independentVerification: INDEPENDENT_VERIFICATION,
  encounterData: ENCOUNTER_DATA,
  gangsterNetworks: GANGS_AND_ORGANISED_CRIME,
  policeIncidents: POLICE_INCIDENTS,
  regionalImpact: REGIONAL_IMPACT,
  campaign: CAMPAIGN_DATA,
  congressStrategy: CONGRESS_STRATEGY,
  comparativeAnalysis: COMPARATIVE_ANALYSIS,
  intelligenceGaps: INTELLIGENCE_GAPS,
  sources: SOURCES,
  confidenceAssessment: CONFIDENCE_ASSESSMENT,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get encounter trend data for MiniChart
 */
export function getEncounterTrendForChart(): number[] {
  return [
    lawOrderWelfareData.encounterData.yearlyData[2024].encounters,
    lawOrderWelfareData.encounterData.threeMonthIntensive.totalEncounters,
  ];
}

/**
 * Get district encounter data sorted by priority
 */
export function getMostAffectedDistricts(): DistrictEncounterData[] {
  return lawOrderWelfareData.regionalImpact.mostAffectedDistricts.sort(
    (a, b) => b.encountersNov2025_Jan2026 - a.encountersNov2025_Jan2026
  );
}

/**
 * Get top campaign attack lines
 */
export function getTopAttackLines(): { title: string; message: string }[] {
  return lawOrderWelfareData.campaign.attackLines.slice(0, 3);
}

/**
 * Get drug seizure summary
 */
export function getDrugSeizureSummary(): { label: string; value: string }[] {
  const seizures = lawOrderWelfareData.officialClaims.drugSeizures;
  return [
    { label: "Heroin", value: `${seizures.heroinSeized} kg` },
    { label: "Methamphetamine", value: `${seizures.methamphetamineSeized} kg` },
    { label: "Opium", value: `${seizures.opiumSeized} kg` },
    { label: "Poppy Husk", value: `${(seizures.poppyHuskSeized / 1000).toFixed(0)} tonnes` },
    { label: "Drug Money", value: `Rs ${seizures.drugMoneyRecovered} crore` },
  ];
}

/**
 * Get bullet injury rate for encounters
 */
export function getBulletInjuryRate(): number {
  return lawOrderWelfareData.encounterData.sinceApril2022.bulletInjuryRate;
}

/**
 * Get NHRC notice status
 */
export function getNHRCStatus(): { issued: boolean; stateResponse: string } {
  return {
    issued: lawOrderWelfareData.encounterData.nhrcNotice.issued,
    stateResponse: lawOrderWelfareData.encounterData.nhrcNotice.stateResponse,
  };
}
