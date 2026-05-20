// Punjab Ideological Spectrum & Political Positioning Data
// Derived from: direct-documentation/cat-3-party-propulsion/b37-ideological-spectrum-political-positioning.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { IdeologicalSpectrumData } from "@/types/ideological-spectrum-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  agent: "Track B",
  taskId: "B37",
  frameworkReference: "Section 3.9-3.10",
  confidence: "HIGH" as const,
};

// ==========================================
// LEFT-RIGHT SPECTRUM DATA
// ==========================================

const leftistTraditions = {
  historicalPresence:
    "One of India's deepest leftist intellectual and political traditions — gained significant traction among educated classes, industrial workers, and agrarian communities from 1940s through 1970s",
  cpiStrongholds: [
    "Tuberculosis Hospital employees",
    "Punjab Agricultural University faculty",
  ],
  naxaliteMovement:
    "1968-74 Naxalite movement drew substantial Punjab support among young intellectuals and landless laborers",
  tradeUnionCulture:
    "INTUC (Congress-affiliated) and AITUC (Communist-affiliated) competed for worker loyalty in Ludhiana and Jalandhar",
  culturalProduction:
    "Films and literature by leftist artists enjoyed disproportionate influence. Poet Pash (1970s martyr) became iconic among Sikh youth",
  currentStatus:
    "After 1984 insurgency, leftist electoral space largely migrated to Congress (center-left) and AAP",
};

const partySocialistPositioning = [
  {
    party: "Congress",
    positioning: "Center-left, welfare state framing, pro-poor schemes, land reform legacy",
  },
  {
    party: "BJP",
    positioning:
      "Center-right, market liberalization, corporate welfare, Hindu-rate-of-growth contrast",
  },
  {
    party: "AAP",
    positioning:
      "Anti-establishment, pseudo-leftist welfare populism (freebies, electricity, mohalla clinics)",
  },
  {
    party: "SAD",
    positioning: "Agrarian socialism, Sikh communal socialism, kisan (farmer) advocacy",
  },
  {
    party: "Communist Parties (CPI, CPM)",
    positioning: "Explicitly socialist, declining but niche influence",
  },
];

const voterPreferenceParadox = {
  proMarket:
    "State has among India's highest rates of small-business entrepreneurship, truck ownership, and diaspora remittance-driven consumption",
  proWelfare:
    "Schemes like free electricity, free water, and free public transport have broad popular support among lower-caste and agrarian voters",
  campaignImplication:
    "Pro-farmer positioning (MSP guarantee, debt relief, procurement reforms) rather than anti-capitalist framing. Welfare without fiscal recklessness — AAP's territory requires differentiation",
};

// ==========================================
// SECULAR-COMMUNAL POLITICS DATA
// ==========================================

const congressSecularPositioning = {
  pre1947:
    "Congress represented Indian nationalist consensus bridging religious communities in freedom movement — Hindu, Sikh, and Muslim leaders within single framework",
  post1947:
    "Partition along religious lines fundamentally damaged Congress's bridging narrative. Congress became increasingly perceived as Hindu-party in East Punjab while losing Muslim voters entirely",
  "1970s1980s":
    "Congress exploited Sikh religious sentiments during Green Revolution and Anandpur Sahib resolution debates while playing Hindu and Sikh elites against each other — established reputation for opportunistic secularism",
  post1984:
    "Most catastrophic secular failure — anti-Sikh riots following Indira Gandhi's assassination permanently damaged Congress's secular credentials among Sikh voters",
  "2020s":
    "Secular positioning largely performative — anti-BJP coalitions and rhetoric without substantive outreach to Muslim voters (only ~2% of Punjab's population)",
};

const bjpCommunalPolitics = {
  constraints:
    "Sikh majority (~60%) makes Hindu nationalist narrative structurally incompatible with Punjab's religious demography",
  historicalPresence:
    "Best Punjab results came in alliance with SAD (1997-2020) where communal politics was mediated through SAD's Sikh religious positioning",
  currentPositioning: [
    "Pro-business economic messaging",
    "Anti-Congress alliance building",
    "Targeting specific Hindu sub-castes (especially in Doaba)",
    "Ram temple / cultural nationalism as secondary narrative",
  ],
  demographicLimitation:
    "Cannot win majority through Hindu mobilization alone in Sikh-majority state",
};

const aapPostIdeological = {
  antiIdeology:
    "AAP explicitly rejects traditional left-right, secular-communal framing — pitch is competence-based (aam aadmi) rather than ideology-based",
  secularLite:
    "Courts Muslim voters through minority welfare schemes while avoiding explicit secularist rhetoric that might alienate Sikh voters",
  antiCommunalFraming:
    "Positions itself as above communal politics — 2022 campaign emphasized 'Punjabiyat' (Punjabi identity) over religious identity",
  welfarePopulism:
    "Free electricity (up to 300 units), free water, mohalla clinics, Bhagat Singh-themed governance — positioned as pragmatic governance, not socialist redistribution",
  "2022GovernanceRecord":
    "Broadly center-left in economic terms without explicit ideological framework — allowed AAP to attract both left-leaning urban voters and pragmatic Sikh agrarian voters",
};

const sadReligiousBalance = {
  coreIdentity:
    "Positions itself as political representative of Sikhism — gives natural ceiling (~30-35% Sikh vote) but deep loyalty within that community",
  secularOutreach:
    "Historically balanced Sikh religious base with secular outreach to Hindus through 'RajHit' (good governance) and secular social reform messaging",
  badalEraContradiction:
    "Under Parkash Singh Badal and Sukhbir Singh Badal, SAD became increasingly perceived as corrupt, dynastic, and disconnected — 2012-14 retail corruption severely damaged religious legitimacy",
  communalPositioning: [
    "Resistance to central government interference in Sikh religious affairs (Anandpur Sahib Resolution)",
    "Support for SYL water sharing (protecting Punjabi farmers)",
    "Campaigning against 'drugs' targeting Muslim and Punjabi Muslim dealers",
  ],
  post2022Crisis:
    "Electoral collapse (only 3 seats in 2022) created identity crisis — trying to rebuild with more explicitly religious-Sikh pitch while maintaining BJP alliance",
};

const voterCommunalResponse = {
  sikhVoters:
    "Deeply sensitive to perceived threats to Sikh identity, religious institutions, and Punjab's territorial integrity. Communal messaging targeting Sikhs produces strong backlash. Voters punish parties perceived as anti-Sikh",
  hinduVoters:
    "More responsive to BJP's communal messaging but diverse — upper-caste urban Hindus may respond positively to Hindutva while Mazhabi (convert) Hindus and lower-caste Hindus often align with Congress or AAP",
  muslimVoters:
    "Tiny (~2%) but significant minority — Congress historically took for granted, AAP actively courted through welfare schemes. Highly sensitive to anti-Muslim communal messaging",
  overallPattern:
    "Punjab voters punish explicit communal appeals more than implicit ones — BJP's overt Hindutva fails, AAP's implicit religious-Sikh positioning succeeds",
};

// ==========================================
// SOCIALIST-CAPITALIST POSITIONING DATA
// ==========================================

const punjabSocialistHeritage = {
  ghadarParty:
    "Proto-communist revolutionary ideology mixing Marxist anti-colonialism with Sikh egalitarianism — emphasized land redistribution, worker cooperatives, opposition to British capitalism and Indian landlordism",
  kisanMovements:
    "Punjab's farmers developed sophisticated socialist-agrarian consciousness — Bhartiya Kisan Union and MSP movement framed farming as dignified, socialistic vocation deserving state support",
  awaraCulture:
    "Rural poor developed cultural tradition of流动 labor, seasonal migration, and collective action — precursor to contemporary kisan and labor movements",
  anandpurSahibResolution:
    "Though primarily Sikh political manifesto, included socialist-adjacent demands for decentralized governance, land reform, and resource distribution to states",
};

const farmerVsIndustry = {
  proFarmer: {
    politicalLogic:
      "~70% of Punjab's population directly or indirectly depends on agriculture — farmer voting blocs are decisive in Malwa",
    seats: "69 Malwa seats",
    parties: "Congress (historically), AAP (2022), SAD (traditional)",
  },
  proIndustry: {
    politicalLogic:
      "Ludhiana and Jalandhar industrialists are powerful — urban voters seek jobs",
    urbanVoters: "Urban seats in Ludhiana-Jalandhar region",
    parties: "BJP (most explicitly), Congress (pragmatically), AAP (ambivalently)",
  },
  proMSME:
    "Punjab's entrepreneurial culture — truck owners, small shops, artisan communities; multiple parties compete here",
  proDiaspora:
    "~10% of Punjab's GDP from diaspora remittances — Congress (traditional patron), AAP (newer appeal)",
};

const governmentJobPolitics = {
  aspirationalAppeal:
    "Punjab's educated youth disproportionately seek government jobs (stability, pension, status) over private sector employment",
  congressPitch:
    "Historically strong — Congress government employment generation record resonated with aspirational voters",
  aapDisruption:
    "AAP's 2022 campaign implicitly accepted government job culture while also promoting private investment",
  "2027Strategy": [
    "Promise administrative reform (streamlining recruitment, ending paper leaks)",
    "Position government jobs as transitional measure while building private sector",
    "Target SC/ST government job aspirations explicitly (constitutional protections, reliable Congress voters)",
  ],
};

const welfareSchemePolitics = {
  aapWelfareRollout: [
    "Free electricity (up to 300 units)",
    "Free water",
    "Mohalla clinics",
    "Bhagat Singh legacy projects",
  ],
  congressChallenge:
    "Cannot simply match AAP's freebies (fiscally irresponsible, also AAP's territory)",
  differentiationStrategy: [
    "Targeted vs universal welfare — means-tested schemes reaching genuinely poor rather than universal freebies",
    "Agricultural welfare — farm debt relief, MSP, irrigation, crop insurance (AAP underperformer)",
    "SC/ST welfare — dedicated schemes, land reform implementation, educational scholarships, employment reservations",
  ],
  freebiesTrap:
    "AAP has created voter expectation of free services — exiting is costly, continuing is fiscally ruinous. Best reframe: 'We will make welfare sustainable by building an economy that generates resources'",
};

// ==========================================
// REGIONAL-NATIONAL IDENTITY DATA
// ==========================================

const distinctIdentity = {
  linguisticIdentity:
    "Punjabi language is marker of Punjabiyat — distinct from both Hindi (North Indian) and pan-Indian English-Hindi bilingual elite",
  culturalDistinctiveness:
    "Bhangra, gidda, Punjabi cuisine, Singh (lion) identity, kesh (unshorn hair) as religious-cultural marker, Sikh gurdwara complex — visible, felt Punjabiness transcending religion",
  historicalStatehood:
    "History as separate province (pre-partition), 1966 reorganization as unilingual Punjabi-speaking state, ongoing SYL water dispute reinforce Punjab-first identity",
  farmersAsIdentity:
    "Being kisan (farmer) is not just occupation but identity category — cuts across religious and caste lines, provides cultural framework distinct from urban-industrial India",
};

const punjabvsIndia = {
  sylCanalWater:
    "Punjabi farmers view Sutlej Yamuna Link canal water as rightfully Punjabi — central government perceived as stealing Punjab's water. Generates strong Punjabi-nationalist sentiment regardless of party",
  drugsAsCrisis:
    "Narrative of Punjab being targeted by drug mafia from outside (Pakistan via Border States, Nepal) reinforces victimized Punjab identity against external threats",
  armyMilitaryService:
    "Paradoxically, Punjabi Sikhs are disproportionately represented in Indian Army — 'Sikh soldier' myth creates tension between Punjabi identity and Indian nationalism managed through silence",
  khalistanIssue:
    "Persistent low-level Khalistan movement represents extreme end of Punjab-vs-India identity politics. Even voters rejecting Khalistan express frustration with central government's Punjab handling",
};

const federalismDebates = {
  statesRights:
    "Punjab's truncated post-partition territory created persistent grievances about central government domination. Anandpur Sahib Resolution demands for greater state autonomy remain broadly popular",
  centralGovernmentOverreach:
    "Intelligence agency activities, central forces (CRPF, BSF), central legislation affecting Punjab (agricultural laws, environmental regulations) generate anti-centralization sentiment",
  congressPositioning:
    "Congress at state level historically more amenable to Punjab's autonomy demands than Congress high command — 'Congress Punjab vs Congress Delhi' provides distinctive positioning",
  allPartyConsensus:
    "SYL issue produces unusual cross-party consensus. Congress, AAP, SAD, even local BJP leaders have supported Punjab's water rights at various times — limits Congress's differentiation on federalism alone",
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const ideologicalSpectrumData: IdeologicalSpectrumData = {
  metadata,
  leftRightSpectrum: {
    leftistTraditions,
    communistInfluence:
      "Shapes vocabulary of political debate (pro-poor rhetoric, anti-corporate framing) even among non-leftist parties",
    partySocialistPositioning,
    voterPreferenceParadox,
  },
  secularCommunal: {
    congress: congressSecularPositioning,
    bjp: bjpCommunalPolitics,
    aap: aapPostIdeological,
    sad: sadReligiousBalance,
    voterResponses: voterCommunalResponse,
  },
  socialistCapitalist: {
    socialistHeritage: punjabSocialistHeritage,
    farmerVsIndustry,
    governmentJobs: governmentJobPolitics,
    welfareScheme: welfareSchemePolitics,
  },
  regionalNational: {
    distinctIdentity,
    punjabvsIndia,
    federalismDebates,
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getPartyPositioning(
  party: string
): { party: string; positioning: string } | undefined {
  return partySocialistPositioning.find((p) => p.party === party);
}

export function getVoterCommunalProfile(
  community: "sikh" | "hindu" | "muslim"
): string {
  const profiles = {
    sikh: voterCommunalResponse.sikhVoters,
    hindu: voterCommunalResponse.hinduVoters,
    muslim: voterCommunalResponse.muslimVoters,
  };
  return profiles[community];
}

export function getCongress2027Positioning(): string[] {
  return [
    "Pro-farmer positioning (MSP, debt relief, procurement reforms)",
    "Welfare without fiscal recklessness — differentiated from AAP",
    "Targeted SC/ST welfare with means-tested schemes",
    "Diaspora capitalism as positive — NRHM/NRIS remittances",
    "'Congress Punjab vs Congress Delhi' federalism angle",
  ];
}
