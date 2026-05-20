// Party Branding, Crisis & Organization Data
// Derived from: direct-documentation/cat-3-party-propulsion/b10-party-branding-crisis-organization.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import {
  PartyBrandingCrisisData,
  CrisisTypology,
  CrisisType,
} from "@/types/party-branding-crisis-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  agent: "Track B",
  taskId: "B10",
  frameworkReference: "Section 3 (Party Propulsion)",
  confidence: "HIGH" as const,
};

// ==========================================
// CONGRESS SYMBOL DATA
// ==========================================

const congressSymbol = {
  name: "Congress Hand",
  description:
    "A clenched right hand palm-forward, fingers together pointing upward — one of India's most recognized political symbols",
  origin:
    "Adopted in 1947 (informally) and standardized in 1951 under the Election Symbols Order",
  designLineage:
    "Stylized vectorized hand in single block color (black on white, or party-flag green on white)",
  legalProtection:
    "Reserved symbol under Representation of the People Act, 1951 — unique among Indian parties",
  punjabUsage:
    "PPCC uses same hand symbol; perceived as secular and inclusive in Punjab's multi-religious electorate",
};

// ==========================================
// COLOR PALETTE DATA
// ==========================================

const colorPalette = {
  saffron: {
    hex: "#FF671F",
    usage: "Tricolour, some state units (Gujarat, Rajasthan)",
  },
  green: {
    hex: "#138808",
    usage: "Party flag base (historically — white charkha on green)",
  },
  black: {
    hex: "#000000",
    usage: "Hand symbol, text",
  },
  white: {
    hex: "#FFFFFF",
    usage: "Background, contrast elements",
  },
  modernAccent: {
    hex: "#003B8E",
    usage:
      "Digital properties — signals modernity without abandoning heritage colors",
  },
};

// ==========================================
// TYPOGRAPHY DATA
// ==========================================

const typography = {
  historical: "Gopi Krishna font — long-time official artist who designed many party materials",
  digital: "Clean sans-serif fonts (similar to Proxima Nova or Inter)",
  print: "Heavy-weighted display type for headlines, medium-weighted sans-serif for body",
  punjabiScript:
    "Modernized dual-script typography system (Roman + Gurmukhi) with consistent kerning",
  requirement:
    "Congress materials in Punjab have historically suffered from poor Gurmukhi typesetting",
};

// ==========================================
// VISUAL LANGUAGE DATA
// ==========================================

const visualLanguage = {
  foundingFatherImagery: ["Gandhi", "Nehru", "Patel", "Subhas Chandra Bose"],
  punjabHeroes: ["Bhagat Singh", "Rajguru", "Sukhdev"],
  farmerLaborerIconography:
    "Agricultural workers, industrial laborers — important in Punjab's agrarian economy",
  womenYouthDepiction:
    "Increasingly central in Congress branding as targeted demographic segments",
  punjabSpecificVisuals: [
    "Agriculture and canal imagery",
    "Jainudd ( beard and turban) for dera outreach",
    "Misl imagery — used carefully to avoid appropriation",
  ],
};

// ==========================================
// SLOGANS DATA
// ==========================================

const slogans = {
  preIndependence: [
    {
      era: "Pre-independence",
      slogan: '"Do or Die"',
      significance: "Gandhi, 1942 — mobilization under extreme repression",
    },
  ],
  earlyPostIndependence: [
    {
      era: "Early post-independence",
      slogan: '"Ayaari Neta, Garib Ki Behna"',
      significance: "Anti-corruption, pro-poor",
    },
  ],
  emergency: [
    {
      era: "Emergency era",
      slogan: '"Save Democracy"',
      significance: "Civil liberties framing",
    },
  ],
  1977: [
    {
      era: "1977",
      slogan: '"Leave the Streets to the Bicycle"',
      significance: "Combined with opposition to the Congress",
    },
  ],
  "1990s": [
    {
      era: "1990s",
      slogan: '"Shakti"',
      significance: "Attempted organizational modernization",
    },
  ],
  "2004_2014": [
    {
      era: "2004-2014",
      slogan: '"Congress Hum Aayenge" / "The Voice of Conscience"',
      significance: "Rahul Gandhi's soft-modernization",
    },
  ],
  punjabSpecific: [
    {
      era: "Punjab-specific",
      slogan: '"Har Worker Ko Mita, Congress Ko Jita"',
      significance:
        "Organizational slogan — mobilize every worker, win with Congress",
    },
    {
      era: "Punjab-specific",
      slogan: '"Punjab Di Aawaz, Congress Sanid"',
      significance: "Identity framing",
    },
  ],
};

// ==========================================
// SOUND BRANDING DATA
// ==========================================

const soundBranding = {
  rhythmPercussion:
    "Dholak and dhol rhythms in Punjab campaign songs — modernized with contemporary Punjabi pop production",
  voiceSpeeches:
    "Capturing Congress's oratorical tradition — deployed in consistent audio branding format",
  jingles:
    "Short, memorable campaign audio signature (5-15 seconds) for radio, digital, and WhatsApp",
  avoidElements:
    "Avoid religious chants or music that could alienate non-Sikh voters (37% Hindu)",
};

// ==========================================
// CRISIS TYPOLOGY DATA
// ==========================================

const crisisTypology: CrisisTypology[] = [
  {
    type: "Internal Rebellion" as CrisisType,
    definition:
      "A faction within the party openly challenges leadership decisions, candidates, or policy positions",
    detectionSignals: [
      "Whipping violations in legislative voting",
      "Dissenting statements by senior leaders to media",
      "Organized dissent at party committee meetings",
      "Formal or informal resignation threats",
      "Social media criticism by party members with institutional backing",
    ],
    punjabContext:
      "PPCC has historically experienced internal rebellions around candidate selection. 2027 risks similar rebellions given incumbent MLAs whose tickets may not be renewed",
    severityIndicators: [
      "Number of legislators involved",
      "Seniority of rebels",
      "Public platform chosen",
      "Timing relative to election cycle",
    ],
  },
  {
    type: "Corruption Scandal" as CrisisType,
    definition:
      "Allegations or evidence that party leaders, candidates, or office-bearers have engaged in financial misconduct",
    detectionSignals: [
      "Investigative journalism reports",
      "IT raids or enforcement directorate actions",
      "Leaked documents",
      "Internal whistleblower complaints",
      "Electoral bond data releases",
    ],
    punjabContext:
      "Previous Congress governments (2017-2022 under Amarinder Singh, then Channi) faced multiple corruption allegations including transport contracts, sand mining, and medication procurement scandals",
    severityIndicators: [
      "Timing before election cycle",
      "Media coverage intensity",
      "Legal exposure",
    ],
  },
  {
    type: "Communal Flare-Up" as CrisisType,
    definition:
      "An incident or statement that inflames religious or inter-community tensions",
    detectionSignals: [
      "Religious leaders' statements attributing blame to party leaders",
      "Social media trending on communal lines",
      "Law-and-order incidents in constituency",
      "Counter-complaints (false flag accusations)",
      "Rivals framing party as anti-minority or pro-majoritarian",
    ],
    punjabContext:
      "Sakala (Jat Sikh agrarian dominance) vs Mazhabi Sikh (Dalit Sikh) fault lines; dera-community relations",
    severityIndicators: [
      "Geographic spread of incident",
      "Involvement of religious leaders",
      "Police response",
    ],
  },
  {
    type: "Leadership Controversy" as CrisisType,
    definition:
      "A statement, action, or omission by the party's principal leader that generates sustained negative coverage",
    detectionSignals: [
      "Viral social media posts critical of a leader",
      "Sustained negative coverage in regional and national media",
      "Polling shifts following controversy",
      "Internal party concern expressed through formal channels",
    ],
    punjabContext:
      "PPCC leadership situation involves transition considerations around perceived unelectability, family dynasty signals",
    severityIndicators: [
      "Duration of negative coverage",
      "Polling impact",
      "Internal party fractures",
    ],
  },
  {
    type: "Misinformation Attack" as CrisisType,
    definition:
      "Coordinated or viral spread of false or misleading information about the party, its leaders, or its policies",
    detectionSignals: [
      "Unusual trending patterns on social media",
      "Identical messaging across multiple accounts simultaneously",
      "Fact-check queries received by party cell",
      "Media queries about statements the party never made",
    ],
    punjabContext:
      "WhatsApp and Facebook dominate in Punjab. AI-generated deep fake audio/video likely in 2027. Congress historically targeted by misattributed quotes about Rahul Gandhi's religious identity",
    severityIndicators: [
      "Viral velocity",
      "Fact-check response time",
      "Believability of fabricated content",
    ],
  },
  {
    type: "Defection" as CrisisType,
    definition:
      "One or more elected representatives or significant party functionaries leave the party to join a rival",
    detectionSignals: [
      "Whispers within party organization",
      "Rival party signals being sent",
      "Electoral bond or donation patterns showing re-routing",
      "Statements by potential defector signaling displeasure",
      "Individual leaders meeting rival party's central leadership",
    ],
    punjabContext: "The 'Aaya Ram, Gaya Ram' phenomenon — legislators switching parties before elections",
    severityIndicators: [
      "Number of defectors",
      "Electoral significance of defectors",
      "Timing before elections",
    ],
  },
];

// ==========================================
// REGIONAL SLOGAN REQUIREMENT
// ==========================================

const regionalSloganRequirement =
  "Single, memorable, Gurmukhi-suitable slogan functioning across digital, print, and rally environments with cultural resonance in Malwa (69 seats), Majha (27), and Doaba (23)";

const gurumukhiSuitableSlogan = ""; // To be developed by PPCC

// ==========================================
// MAIN EXPORT
// ==========================================

export const partyBrandingCrisisData: PartyBrandingCrisisData = {
  metadata,
  organizationalStructure: {
    branding: congressSymbol,
    colorPalette,
    typography,
    visualLanguage,
    slogans,
    soundBranding,
  },
  crisisManagement: {
    crisisTypes: crisisTypology,
    internalRebellion: {
      ticketSelectionRisk:
        "Large number of incumbent MLAs whose tickets may not be renewed for 2027",
      incumbentRenewalRisk: "2022 ticket distribution controversies may repeat",
      historicalPattern:
        "PPCC has historically experienced internal rebellions around candidate selection",
    },
    corruptionScandal: {
      vulnerabilities: [
        "Transport contracts",
        "Sand mining",
        "Medication procurement",
      ],
      transportContracts:
        "Award of transport contracts under previous Congress governments",
      sandMining: "Sand mining mafia involvement allegations",
      medicationProcurement: "Medication procurement scandals during COVID",
      legalDefenseTimeline: "Typically 18-36 months for full resolution",
    },
    communalFlareUp: {
      faultLines: [
        "Sikh-Hindu relations (1947 partition violence memory)",
        "Intra-Sikh tensions (SAD vs Congress claims on Sikh identity)",
        "Dera-community relations (deras swing significant Dalit and peasant votes)",
      ],
      sakalaVsMazhabi:
        "Jat Sikh agrarian dominance vs Dalit Sikh political economy creates intra-community fault lines",
      deraCommunityRelations:
        "Deras can swing significant Dalit and peasant votes — sensitive to exploitation",
    },
    leadershipControversy: {
      transitionConsiderations:
        "PPCC leadership situation (as of May 2026) involves transition considerations",
      unelectabilitySignals:
        "Perceived unelectability of the state chief generates strong reactions",
      dynastySignals:
        "Family dynasty signals generate strong reactions both positive and negative",
    },
    misinformationAttack: {
      dominantPlatforms: ["WhatsApp", "Facebook"],
      deepfakeRisk:
        "2027 cycle will likely see AI-generated deep fake audio and video deployed by rivals",
      historicalVulnerabilities: [
        "Misattributed quotes about Rahul Gandhi's religious identity",
        "Fabricated statements on the SYL canal issue",
        "Misleading claims about farmer debt relief promises",
      ],
    },
    defection: {
      detectionSignals: [
        "Whispers within party organization",
        "Rival party signals being sent",
        "Electoral bond or donation patterns showing re-routing",
        "Individual leaders meeting rival party's central leadership",
      ],
      aayaRamGayaRam:
        "The phenomenon of legislators switching parties shortly before elections",
    },
  },
  regionalSloganRequirement,
  gurumukhiSuitableSlogan,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getCrisisByType(
  type: CrisisType
): CrisisTypology | undefined {
  return partyBrandingCrisisData.crisisManagement.crisisTypes.find(
    (c) => c.type === type
  );
}

export function getCrisisDetectionSignals(): string[] {
  return partyBrandingCrisisData.crisisManagement.crisisTypes.flatMap(
    (c) => c.detectionSignals
  );
}

export function getCongressColors(): { name: string; hex: string }[] {
  return [
    { name: "Saffron", hex: colorPalette.saffron.hex },
    { name: "Green", hex: colorPalette.green.hex },
    { name: "Black", hex: colorPalette.black.hex },
    { name: "White", hex: colorPalette.white.hex },
    { name: "Modern Blue Accent", hex: colorPalette.modernAccent.hex },
  ];
}

export function getPunjabSlogans(): { slogan: string; significance: string }[] {
  return slogans.punjabSpecific.map((s) => ({
    slogan: s.slogan,
    significance: s.significance,
  }));
}
