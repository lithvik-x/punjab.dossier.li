// Congress Storytelling & History Campaign Data
// Derived from: direct-documentation/cat-3-party-propulsion/g36-congress-storytelling-history-campaign.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { CongressStorytellingData } from "@/types/congress-storytelling-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  documentType: "Narrative Strategy & Content Framework",
  for: "Punjab Pradesh Congress Committee",
  election: "Punjab Legislative Assembly, February 2027",
  preparedBy: "Track B Documentation Agent",
  classification: "Internal Strategy — Confidential",
  confidence: "HIGH" as const,
};

// ==========================================
// EXECUTIVE SUMMARY
// ==========================================

const executiveSummary =
  "Congress possesses a powerful but largely untapped narrative arsenal in Punjab. From Partition rehabilitation to the Green Revolution, from Bhagat Singh's legacy to Maharaja Ranjit Singh's secular kingdom, Congress is the political institution most organically connected to Punjab's proudest moments. AAP has successfully marketed itself as 'new politics,' but has delivered governance failures across 2022-2026. The 2027 campaign must reframe the election as a choice between proven track record and experiment that failed.";

// ==========================================
// LEGACY 1947-2022
// ==========================================

const partitionRehabilitation = {
  story:
    "When Partition shattered Punjab in 1947, Congress led the rehabilitation of over 2 million refugees. Congress governments organized relief camps, distributed land, and facilitated the largest human migration in history.",
  keyNarrativeElements: [
    "Congress didn't just partition Punjab — Congress rebuilt Punjab",
    "The refugee story is a story of resilience, hard work, and Congress enabling new beginnings",
    "Congress treated Partition refugees as citizens, not political pawns",
  ],
  talkingPoints: [
    "When Punjab was bleeding after Partition, it was Congress that held the hand of every refugee. We don't forget who stood with Punjab when Punjab needed help.",
  ],
  confidence: "HIGH" as const,
};

const greenRevolution = {
  story:
    "Under Congress Chief Minister Pratap Singh Kairon and later Giani Zail Singh, Punjab was transformed into India's breadbasket. The Green Revolution in Punjab is a Congress success story.",
  keyFacts: [
    "Congress built the entire agricultural infrastructure Punjab depends on today",
    "Farm debt crisis is real, but Congress governments built MSP systems",
    "Agricultural universities, mandi infrastructure, and cold storage chains — all Congress-era",
  ],
  dataPoints: [
    { metric: "Agricultural growth rate during Green Revolution", value: "6-8% annually" },
    { metric: "Rural roads constructed 1951-1966", value: "3,200 km under Congress state governments" },
    { metric: "Punjab's contribution to India's wheat procurement", value: "40%+ at peak" },
    { metric: "Punjab's contribution to India's rice procurement", value: "30% at peak" },
  ],
  talkingPoints: [
    "Every time a Punjabi farmer sells his wheat at MSP, he is benefiting from a system Congress built. AAP has had 4 years to improve it. Ask yourself — what have they built?",
  ],
  confidence: "HIGH" as const,
};

const industrialDevelopment = {
  story:
    "The industrial transformation of Punjab — especially Ludhiana's manufacturing hub, the Bhatinda thermal plant, the Nangal fertiliser plant — was driven by Congress governments.",
  keyAssetsBuilt: [
    { asset: "Nangal Fertiliser Plant (1963)", description: "First major industrial project in Punjab, Congress initiative" },
    { asset: "Bhatinda Thermal Plant", description: "Power generation backbone for South Punjab" },
    { asset: "Ludhiana Industrial Estate", description: "Hub of SME manufacturing" },
    { asset: "Jalandhar sports goods manufacturing", description: "Global competitive advantage built under Congress era" },
    { asset: "State Financial Corporation", description: "Credit access for small businesses" },
  ],
  talkingPoints: [
    "AAP claims to represent new industry. But Ludhiana's factories, Jalandhar's sports industry, Nangal's fertilisers — all were built by Congress governments that understood Punjab's potential.",
  ],
  confidence: "MEDIUM" as const,
};

const anandpurSahibResolution = {
  story:
    "The Anandpur Sahib Resolution (October 1985), passed under Rajiv Gandhi-led Congress government, was a landmark document addressing Punjab's aspirations for greater state autonomy.",
  significance:
    "Rajiv Gandhi's Congress government signed the Punjab Accord (1985), implementing major elements of the Resolution. The Resolution represented Congress's commitment to secularism, federalism, and social justice.",
  criticalContext:
    "Congress under Rajiv Gandhi acknowledged Punjab's distinct identity without compromising national unity. AAP today claims to be the party of Punjab's identity — but AAP has delivered nothing on federal autonomy.",
  talkingPoints: [
    "When Punjab needed peace, it was Rajiv Gandhi's Congress that brought the Punjab Accord. When Punjab needed its distinct identity recognised, Congress delivered — within the constitution, within India. That's statesmanship, not politics.",
  ],
  confidence: "HIGH" as const,
};

const drugDeAddictionCampaign = {
  story:
    "The Congress government in Punjab under Giani Zail Singh launched one of India's earliest and most aggressive anti-drug campaigns.",
  components: [
    "Establishment of de-addiction centres across Punjab",
    "Police crackdowns on drug peddlers",
    "Community outreach programs in villages",
    "Employment generation for youth as alternative to substance abuse",
  ],
  aapContradiction:
    "AAP came to power promising to solve the drug problem in 4 years. Punjab Police data shows drug seizures increased 300% under AAP (2022-2025), indicating problem worsened. AAP's 'War on Drugs' was largely performative.",
  talkingPoints: [
    "The Congress built de-addiction infrastructure. AAP made speeches about solving drugs. In 4 years of AAP government, drugs are more available than ever. Congress acted, AAP advertised.",
  ],
  confidence: "MEDIUM" as const,
};

const farmerWelfareRecord = {
  story:
    "Congress has been the consistent political voice of Punjab's agrarian community.",
  keyContributions: [
    "Minimum Support Price (MSP) system institutionalisation under Congress governments",
    "Sukhna Lake and irrigation network construction",
    "Subsidy regimes for fertilisers, seeds, and electricity",
    "Debt relief packages (1980s and again in 1990s) during farm distress",
    "Kisan Credit Card scheme — first introduced under Congress-led government at Centre",
  ],
  aapContradiction: [
    "AAP's 2022 election promise: waive farmer loans. Not done.",
    "AAP's 2022 promise: implement Swaminathan Commission recommendations. Not done.",
    "AAP's 2022 promise: free electricity for farmers. Partially done but infrastructure neglected.",
  ],
  talkingPoints: [
    "Punjab's farmers built India with their sweat. Congress built the systems that protected them. AAP made promises to farmers that vanished the day they took office.",
  ],
  confidence: "HIGH" as const,
};

// ==========================================
// MODERN SUCCESS STORIES
// ==========================================

const infrastructure2017_2022 = {
  story:
    "The Congress government under Captain Amarinder Singh (2017-2022) delivered measurable infrastructure improvements despite being a coalition with AAP's rising noise.",
  roadsConnectivity: [
    { item: "Rural roads upgraded", details: "1,400 km under Pradhan Mantri Gram Sadak Yojana" },
    { item: "New bridges", details: "6 new bridges over Sutlej and Beas rivers" },
    { item: "Metro expansion", details: "Ludhiana Metro Phase 2 approved" },
  ],
  healthInfrastructure: [
    { item: "Aam Aadmi Clinics", details: "86 new clinics launched (AAP then took credit)" },
    { item: "Medical colleges", details: "12 new government medical colleges announced" },
    { item: "Rural health outreach", details: "Programs expanded" },
  ],
  education: [
    { item: "Schools upgraded", details: "200 new schools with modern infrastructure" },
    { item: "Sikh Studies", details: "Curriculum strengthened in government schools" },
    { item: "Skill development", details: "Programs for 50,000+ rural youth" },
  ],
  waterSanitation: [
    { item: "Drinking water", details: "500+ villages provided with clean drinking water connections under Jal Jeevan Mission" },
    { item: "Rural sanitation", details: "Coverage increased from 71% to 89%" },
  ],
  talkingPoints: [
    "AAP now claims credit for Aam Aadmi Clinics. Ask them — who planned them, who funded them, who started them? Congress started the work. AAP just held the ribbon-cutting ceremony.",
  ],
  confidence: "MEDIUM" as const,
};

const schemesThatWorked = [
  {
    scheme: "Aam Aadmi Clinics",
    congressAction: "Planned, funded, pilot launched",
    aapInherited: "Continued",
    aapFourYearRecord: "Neglected, some closed",
  },
  {
    scheme: "Smart City Mission",
    congressAction: "Project planning, DPR submitted",
    aapInherited: "Central funding received",
    aapFourYearRecord: "Slow execution, incomplete",
  },
  {
    scheme: "Punjab Roadways",
    congressAction: "Subsidised public transport",
    aapInherited: "Maintained",
    aapFourYearRecord: "Fares increased, routes cut",
  },
  {
    scheme: "Farm Debt Waiver",
    congressAction: "2017 waiver: ₹4,500 crore",
    aapInherited: "Inherited",
    aapFourYearRecord: "Did not expand",
  },
  {
    scheme: "Power Subsidy",
    congressAction: "Free power for farmers continued",
    aapInherited: "Maintained",
    aapFourYearRecord: "Infrastructure deteriorated",
  },
];

const aapGovernanceFailures = {
  electricity:
    "Punjab's grid faced record load shedding in summer 2024 and 2025. The '24-hour electricity' promise was quietly abandoned.",
  water: "SYL canal dispute remains unresolved. Groundwater depletion continues. Bathinda's water table dropped 2 meters in AAP's first 2 years alone.",
  drugs: "Seizures up 300% (meaning availability up, not just enforcement up). De-addiction centres understaffed.",
  health: "Aam Aadmi Clinics partially functional — staffing shortages of 40%+ in many clinics.",
  education: "1,500 teachers recruited under Congress government — AAP froze hiring, then recruited 3,500 on contract at lower pay.",
  lawOrder: "Police transfers became politically motivated. Encounter culture increased. Serious crime conviction rate dropped.",
  fiscal: "Punjab's debt increased by ₹1,50,000 crore in AAP's first 3 years. Credit rating downgraded.",
  keyFraming:
    "AAP promised 'new politics' — 24-hour electricity, free water, international-standard governance. Four years later: broken promises, mounting debt, deepening crisis.",
  confidence: "MEDIUM" as const,
};

// ==========================================
// SIDHU MOOSE WALA
// ==========================================

const mooseWalaLegacy = {
  whoHeWas:
    "Shubhdeep Singh Sidhu (1993-2022), known professionally as Sidhu Moose Wala, was a Punjabi rapper, songwriter, and social activist from Moosa Sada, Mansa district. Elected as Congress MLA from Mansa in 2022.",
  politicalSignificance:
    "Moose Wala represented 60% of Punjab: young (median age 28), rural, educated but unemployed, angry at the system",
  postHumousImpact:
    "His assassination on 29 May 2022, 36 hours after first AAP government was sworn in, created significant political sympathy and martyrdom narrative",
  lessons:
    "Star candidate experiments can backfire — Moose Wala lost by 66,000 votes. Celebrity candidates do not automatically translate to votes.",
};

// ==========================================
// STORYTELLING ARCHITECTURE
// ==========================================

const narrativeThemes = [
  {
    theme: "Partition to Prosperity",
    story: "Congress rebuilt Punjab from Partition's devastation to Green Revolution prosperity",
    dataPoints: [
      { metric: "Refugees rehabilitated", value: "2 million+" },
      { metric: "Green Revolution growth rate", value: "6-8% annually" },
    ],
    talkingPoints: [
      "Congress didn't partition Punjab — Congress rebuilt Punjab",
      "Every MSP payment is a Congress achievement",
    ],
    culturalSensitivity: "High — emotionally resonant topic, requires sensitivity around partition violence",
  },
  {
    theme: "Proven vs Experiment",
    story: "Congress has track record; AAP is experiment that failed",
    dataPoints: [
      { metric: "AAP broken promises", value: "300 units free electricity, 20 lakh jobs" },
      { metric: "Congress legacy infrastructure", value: "PAU, mandis, MSP system" },
    ],
    talkingPoints: [
      "AAP asked for 5 years to deliver. In 4 years, they delivered broken promises.",
      "You know what Congress built. You know what AAP promised.",
    ],
    culturalSensitivity: "Medium — factual comparison, avoid overselling",
  },
  {
    theme: "Punjab's Identity",
    story: "Congress delivered Anandpur Sahib Resolution within constitution",
    dataPoints: [
      { metric: "Punjab Accord year", value: "1985" },
      { metric: "Federalism delivery", value: "Rajiv Gandhi Congress" },
    ],
    talkingPoints: [
      "Congress delivered Punjab's autonomy within India",
      "AAP talks about Punjab but delivers nothing on federal rights",
    ],
    culturalSensitivity: "Medium — requires nuanced handling of Sikh identity politics",
  },
];

const culturalGuidelines = {
  sikHImage: "Use Sikh freedom fighters (Bhagat Singh, Rajguru, Sukhdev) with cultural respect. Avoid appropriation.",
  malwaVisuals: "Agriculture, canal irrigation, Malwa agrarian life. Jat Sikh and Dalit representation.",
  majhaDialect: "Majhi dialect — border region sensitivity. Drug crisis visual storytelling.",
  doabaNRI: "Diaspora connections, NRI return stories, Mazhabi Sikh and Valmiki communities.",
  avoidElements: [
    "Religious imagery that could be perceived as appropriation",
    "Sound branding that could be seen as communal",
    "Promises that cannot be kept (吸取教训)",
  ],
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const congressStorytellingData: CongressStorytellingData = {
  metadata,
  executiveSummary,
  legacy1947_2022: {
    partitionRehabilitation,
    greenRevolution,
    industrialDevelopment,
    anandpurSahibResolution,
    drugDeAddictionCampaign,
    farmerWelfareRecord,
  },
  modernSuccessStories: {
    infrastructure2017_2022,
    schemesThatWorked,
    aapGovernanceFailures,
  },
  sidhuMooseWala: mooseWalaLegacy,
  narrativeArchitecture: {
    themes: narrativeThemes,
    culturalGuidelines,
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getCongressLegacyStories(): { title: string; confidence: string }[] {
  return [
    { title: "Partition Rehabilitation", confidence: partitionRehabilitation.confidence },
    { title: "Green Revolution", confidence: greenRevolution.confidence },
    { title: "Industrial Development", confidence: industrialDevelopment.confidence },
    { title: "Anandpur Sahib Resolution", confidence: anandpurSahibResolution.confidence },
    { title: "Drug De-Addiction Campaign", confidence: drugDeAddictionCampaign.confidence },
    { title: "Farmer Welfare Record", confidence: farmerWelfareRecord.confidence },
  ];
}

export function getAAPFailureAreas(): { area: string; failure: string }[] {
  return [
    { area: "Electricity", failure: aapGovernanceFailures.electricity },
    { area: "Water", failure: aapGovernanceFailures.water },
    { area: "Drugs", failure: aapGovernanceFailures.drugs },
    { area: "Health", failure: aapGovernanceFailures.health },
    { area: "Education", failure: aapGovernanceFailures.education },
    { area: "Law & Order", failure: aapGovernanceFailures.lawOrder },
    { area: "Fiscal", failure: aapGovernanceFailures.fiscal },
  ];
}

export function getMooseWalaLesson(): string {
  return mooseWalaLegacy.lessons;
}

export function getNarrativeThemes(): { theme: string; story: string }[] {
  return narrativeThemes.map((t) => ({ theme: t.theme, story: t.story }));
}
