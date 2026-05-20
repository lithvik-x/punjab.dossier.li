// @ts-nocheck
// Sikhism Internal Taxonomy & Political Issues Data for Punjab 2027
// Derived from: research-M2/MP1-foundational/demographics/sikhism-internal.md
// Date: 19 May 2026 | Status: COMPLETE

import type {
  SikhPopulationData,
  SikhObservanceTierData,
  SectData,
  DamdamiTaksalData,
  NihangData,
  NamdhariData,
  NirankariData,
  RadhaSoamiData,
  AKJData,
  UdasiNirmalaData,
  AkalTakhtData,
  SGPCData,
  FiveTakhtsData,
  SacrilegeIssue,
  Riot1984Issue,
  OperationBlueStar,
  BandiSinghIssue,
  KhalistanIssue,
  AnandpurSahibResolution,
  SYLCanalIssue,
  DiasporaIssue,
  ConstituencyBeltMapping,
  StrategicSummary,
  SourceDocument,
  SikhismInternalData,
} from "@/types/sikhism-internal-types";

// ==========================================
// SIKH POPULATION CONTEXT
// ==========================================

export const sikhPopulationData: SikhPopulationData = {
  census2011: {
    percentage: 57.69,
  },
  census2001: {
    percentage: 59.91,
  },
  currentEstimates2025: {
    percentage: "54-56%",
    range: "~54-56%",
  },
  drivers: [
    "Lower fertility rates among Sikhs compared to Hindus",
    "Higher emigration rates from Punjab (Canada, UK, Australia, US)",
    "Hindu migration into Punjab from other states (Bihar, UP for labour)",
  ],
  verificationNote: "2021 Census data not yet published; all post-2011 figures are projections",
};

// ==========================================
// SIKH IDENTITY TIERS (OBSERVANCE LEVELS)
// ==========================================

export const amritdhariData: SikhObservanceTierData = {
  type: "Amritdhari",
  percentage: "5-8%",
  definition:
    "Initiated through Amrit Sanchar ceremony; observe strict Khalsa rehat (code of conduct) including Five Ks (Kesh, Kara, Kanga, Kirpan, Kachera); abstain from alcohol, tobacco, halal meat",
  politicalBehavior:
    "Highest religious consciousness; most sensitive to sacrilege, Akal Takht authority, Panthic issues; form the core of SGPC electorate",
  geographicNotes: "Amritsar, Tarn Taran, Gurdaspur (Majha belt); parts of Fatehgarh Sahib",
  electoralSignificance:
    "Disproportionate influence as opinion-shapers within gurdwara networks; their endorsement signals credibility to Keshdhari voters",
};

export const keshdhariData: SikhObservanceTierData = {
  type: "Keshdhari",
  percentage: "45-50%",
  definition:
    "Keep unshorn hair and wear turban but have not undergone Amrit initiation; may consume alcohol; form the mainstream Sikh identity",
  politicalBehavior:
    "Identify strongly as Sikh; react emotionally to sacrilege and Panthic issues but less rigidly orthodox than Amritdharis; swing voters on religious sentiment issues",
  electoralSignificance:
    "THE decisive Sikh voting bloc — large enough to determine outcomes across Malwa and Majha",
  additionalInfo: {
    sgpcVoters2011: 5500000,
    swingVoterBehavior: "Swing voters on religious sentiment issues",
    regionalInfluence: "Determines outcomes across Malwa and Majha",
  },
};

export const sehajdhariData: SikhObservanceTierData = {
  type: "Sehajdhari",
  percentage: "40-45%",
  definition:
    'Sikhs with shorn hair (cut hair, no turban); may or may not maintain other Sikh practices; contentious category — some Sikh bodies consider them "lapsed" while others recognise them as legitimate Sikhs',
  politicalBehavior:
    "Lower religious consciousness on Panthic issues but still emotionally connected to Sikh identity (especially on 1984, discrimination); more economically-driven voters",
  electoralSignificance:
    "A Congress-leaning constituency; Congress must not alienate them while courting Keshdhari/Amritdhari voters",
  additionalInfo: {
    legalStatus:
      "Sehajdhari voting rights in SGPC elections were stripped by a 2003 Central government notification, upheld after legal battles; a 2025 court petition challenges this",
  },
};

export const observanceTiers: SikhObservanceTierData[] = [
  amritdhariData,
  keshdhariData,
  sehajdhariData,
];

// ==========================================
// MAJOR SECTS & SAMPARDAS
// ==========================================

export const damdamiTaksalData: DamdamiTaksalData = {
  name: "Damdami Taksal",
  headquarters: {
    location: "Chowk Mehta",
    district: "Gurdaspur district",
  },
  currentHead: "Baba Harnam Singh Dhumma",
  jathedarNumber: 14,
  description:
    "The most politically significant Sikh sect in Punjab. Controls extensive network of preachers across SGPC gurdwaras, including the Golden Temple. Its graduates hold granthi positions worldwide (US, Canada, UK).",
  historicalSignificance:
    "Headed by Jarnail Singh Bhindranwale (1977-1984); became symbol of Sikh resistance after Operation Blue Star",
  politicalAlignment: {
    current: "Broken from SAD (Badal); openly supported BJP in Maharashtra elections (Nov 2024); head met BJP Amritsar candidate Taranjit Singh Sandhu during 2024 LS elections",
    historical: "Hosted RSS chief in 2000; historical ties with RSS",
  },
  influence: {
    regions: ["Majha", "Doaba"],
    constituencies: ["Gurdaspur", "Amritsar", "Tarn Taran", "Hoshiarpur", "parts of Kapurthala"],
    sgpcSeats: 20,
  },
  congressRisk:
    "Damdami Taksal-BJP alignment could mobilise Panthic voters against Congress; Congress must not be seen as anti-panthic",
};

export const nihangData: NihangData = {
  name: "Nihang Sikhs (Akali Nihang)",
  headquarters: {
    location: "Majha region and around Anandpur Sahib",
  },
  description:
    "Traditional warrior Sikh order; distinctive blue attire, large turbans (dumalla), weapons (including swords and spears); claim direct lineage from Guru Gobind Singh's army",
  factions: ["Budha Dal (largest)", "Taruna Dal", "several independent deras"],
  politicalBehavior:
    "Generally apolitical but assertive on maryada (religious protocol) issues; opposed Akal Takht acting Jathedar's June 2026 address alongside Damdami Taksal",
  influence: {
    regions: ["Majha"],
    constituencies: ["Around Anandpur Sahib"],
  },
  congressNote:
    "Nihangs are respected as traditional guardians of Sikh heritage; engaging them on maryada concerns avoids unnecessary friction",
};

export const namdhariData: NamdhariData = {
  name: "Namdhari Sikhs (Kuka Sikks)",
  headquarters: {
    location: "Bhaini Sahib",
    district: "Ludhiana district",
  },
  belief:
    "Believe in living Guru (Satguru) post-Guru Gobind Singh — a point of doctrinal divergence from mainstream Sikhism; opposed by SGPC/Akal Takht",
  population: "~200,000-300,000 in Punjab",
  politicalBehavior: "Generally vote as a disciplined bloc following dera guidance",
  politicalAlignment: {
    current: "Disciplined bloc voting per dera guidance",
  },
  constituencyInfluence: ["Ludhiana rural", "parts of Fatehgarh Sahib", "Barnala", "Sangrur"],
  congressOpportunity:
    "With SAD weakened, Congress can court Namdhari votes through engagement with Bhaini Sahib leadership on community-specific issues",
};

export const nirankariData: NirankariData = {
  name: "Nirankari Sikhs (Sant Nirankari Mission)",
  headquarters: {
    location: "Delhi",
    note: "with significant Punjab presence",
  },
  description:
    "Considered heretical by mainstream Sikh bodies since 1978 clash (13 Sikhs killed in Amritsar confrontation); Akal Takht has excommunicated Nirankaris",
  conflictNote: "1978 clash in Amritsar — 13 Sikhs killed",
  populationVerification: "VERIFICATION_NEEDED — significant in Doaba region (Jalandhar, Hoshiarpur)",
  politicalSignificance:
    "Any overt Congress association with Nirankaris would be politically suicidal among mainstream Sikhs; must maintain distance",
  congressRisk:
    "Even perceived closeness triggers backlash from mainstream Sikhs",
  influence: {
    regions: ["Doaba"],
    constituencies: ["Jalandhar", "Hoshiarpur"],
  },
};

export const radhaSoamiData: RadhaSoamiData = {
  name: "Radha Soami Satsang Beas (RSSB)",
  headquarters: {
    location: "Beas",
    district: "Amritsar district",
  },
  nature: "Spiritual movement with large following across religions; not exclusively Sikh",
  politicalBehavior: "Followers (estimated millions in Punjab) vote as disciplined bloc per dera guidance",
  politicalAlignment: {
    current: "Disciplined bloc per dera guidance",
    historical: ["Has supported Congress", "SAD", "and AAP at different times"],
  },
  constituencyInfluence: ["Amritsar rural", "Gurdaspur", "Kapurthala", "Hoshiarpur", "parts of Malwa"],
  congressOpportunity:
    "Massive vote-bank; courting RSSB through respectful engagement with current head (Gurinder Singh Dhillon) is electorally decisive",
  influence: {
    regions: ["Majha", "Malwa"],
    constituencies: ["Amritsar rural", "Gurdaspur", "Kapurthala", "Hoshiarpur", "parts of Malwa"],
  },
};

export const akjData: AKJData = {
  name: "Akhand Kirtani Jatha (AKJ)",
  headquarters: {
    location: "Scattered across Punjab",
  },
  description:
    "Strict Amritdhari group emphasising kirtan (devotional singing); relatively small but influential among devout Sikhs",
  politicalBehavior:
    "Generally apolitical but vocal on maryada issues; historically critical of SAD corruption",
  influence: {
    regions: ["Malwa"],
    constituencies: ["Ludhiana", "Moga", "Barnala"],
  },
};

export const udasiNirmalaData: UdasiNirmalaData = {
  name: "Udasi and Nirmala Orders",
  headquarters: {
    location: "Various",
  },
  description:
    "Traditional ascetic orders; historically managed gurdwaras before SGPC formation; now marginalised",
  politicalSignificance: "Negligible direct electoral impact",
};

export const allSects: SectData[] = [
  damdamiTaksalData,
  nihangData,
  namdhariData,
  nirankariData,
  radhaSoamiData,
  akjData,
  udasiNirmalaData,
];

// ==========================================
// KEY SIKH INSTITUTIONS
// ==========================================

export const akalTakhtData: AkalTakhtData = {
  status: "Highest temporal seat of Sikh authority",
  location: "Within Golden Temple complex, Amritsar",
  currentJathedar: "Giani Raghbir Singh",
  actingJathedar: "Giani Kuldeep Singh Gargaj (since June 2026 reshuffle)",
  politicalRole2024:
    "Dramatically reasserted authority over SAD in Dec 2024 — pronounced tankhah (religious punishment) on Sukhbir Singh Badal",
  significanceForCongress:
    "Akal Takht's punishment of Badal family signals opportunity — Congress can position itself as respecting Akal Takht authority without being subservient",
  recentAction: {
    date: "December 2024",
    action: "Tankhah (religious punishment)",
    target: "Sukhbir Singh Badal",
    reasons: [
      "Undermining Sikh faith",
      "Promoting officers linked to 1980s Sikh massacres",
      "Facilitating Dera Sacha Sauda pardon (2015 sacrilege)",
      "Failing to punish sacrilege culprits",
      "Misusing Golden Temple donations",
    ],
  },
};

export const sgpcData: SGPCData = {
  structure: {
    electedMembers: 170,
    nominatedMembers: 15,
    takhtJathedars: 5,
    goldenTempleHeadGranthi: 1,
    annualBudgetCrore: 1500,
  },
  electionStatus: {
    lastElection: 2011,
    yearsOverdue: 15,
    control: "SAD (Badal) retains control through expired mandate",
  },
  voterRegistration: {
    keshdhariVoters: 5000000,
    sejhdhariNote: "Sehajdharis were barred from voting by 2003 notification",
  },
  keyTension:
    "Damdami Taksal, Nihang groups, and Sant Samaj now contest SAD's control; Damdami Taksal led dharna outside SGPC office in March 2026 over sacking of Takht Jathedars",
  congressImplication:
    "SGPC elections (whenever held) will reshape Panthic politics; Congress should advocate for timely SGPC elections as a democratic reform position",
};

export const fiveTakhtsData: FiveTakhtsData = {
  takhts: [
    {
      name: "Akal Takht",
      location: "Amritsar, Punjab",
      jurisdiction: "Supreme authority",
    },
    {
      name: "Takht Sri Patna Sahib",
      location: "Patna, Bihar",
      jurisdiction: "Eastern India",
    },
    {
      name: "Takht Sri Hazur Sahib",
      location: "Nanded, Maharashtra",
      jurisdiction: "Western/Central India",
    },
    {
      name: "Takht Sri Kesgarh Sahib",
      location: "Anandpur Sahib, Punjab",
      jurisdiction: "Birthplace of Khalsa",
    },
    {
      name: "Takht Sri Damdama Sahib",
      location: "Talwandi Sabo, Punjab",
      jurisdiction: "Educational hub",
    },
  ],
};

// ==========================================
// CRITICAL POLITICAL ISSUES
// ==========================================

export const sacrilegeIssue: SacrilegeIssue = {
  issue: "Sacrilege (Beadbi) — THE defining religious-political issue",
  "2015Bargari": {
    date: "October 2015",
    location: "Bargari village",
    district: "Faridkot district",
    description: "Guru Granth Sahib pages found torn in Bargari village",
    protests:
      "Sparked statewide protests; two protesters killed in police firing at Behbal Kalan and Kotkapura",
    casualties: [
      { location: "Behbal Kalan", killed: 2 },
      { location: "Kotkapura", killed: 0 },
    ],
    investigation:
      "Punjab Police SIT traced conspiracy to Dera Sacha Sauda; cases transferred from Faridkot to Chandigarh courts",
    currentStatus: "Justice remains undelivered after 11 years",
  },
  politicalImpact:
    "Single biggest factor in SAD's rout in 2017 (won 15 seats vs 77 in 2012) and 2022 elections",
  newLaw: {
    name: "Jagat Jyot Sri Guru Granth Sahib Satkar (Amendment) Bill, 2026",
    date: "April 2026",
    provision: "Life imprisonment for Guru Granth Sahib sacrilege",
    controversy:
      "No community consensus on the law; some Sikh groups see it as distraction from delivering justice in 2015 cases",
  },
  congressPositioning:
    "Must demand justice in 2015 cases (not just new laws); support strict punishment but insist on prosecution of the guilty; this differentiates from AAP's law-only approach",
};

export const riots1984Issue: Riot1984Issue = {
  issue: "1984 Anti-Sikh Riots — Congress's Original Sin",
  killings: "~3,000-8,000 Sikhs across India (primarily Delhi) after Indira Gandhi's assassination by her Sikh bodyguards (Oct 31, 1984)",
  congressLiability: [
    "Congress leaders Jagdish Tytler and Sajjan Kumar accused of orchestrating violence",
    "Sajjan Kumar convicted in 2018",
    "CBI chargesheet filed against Tytler (2025)",
  ],
  currentStatus2025:
    "Tytler chargesheet gives Congress partial closure narrative; but decades of inaction remain a wound",
  punjabElectoralImpact:
    "Diminishing but not gone — younger voters (under 40) have lower emotional connection; but any Congress candidate with 1984 ties is toxic",
  congressStrategy:
    "Support full accountability (Tytler prosecution); ensure no 1984-tainted candidates; acknowledge historical wrong publicly; focus on forward-looking Sikh welfare agenda",
};

export const operationBlueStar: OperationBlueStar = {
  issue: "Operation Blue Star (June 1984)",
  date: "June 1984",
  description:
    "Indian Army assault on Golden Temple complex to remove armed militants; hundreds/thousands killed; Akal Takht destroyed and rebuilt",
  politicalSalience:
    "Moderate but persistent; annual commemorations (June) revive memory; Congress (as party of Indira Gandhi) carries permanent association",
  congressMitigation:
    "Public expressions of regret (Manmohan Singh's 2005 apology in Parliament); must avoid any rhetoric perceived as justifying military action",
};

export const bandiSinghIssue: BandiSinghIssue = {
  issue: "Bandi Singhs (Sikh Prisoners) — Active emotional issue",
  description:
    "Sikh prisoners convicted during militancy era (1980s-1990s) still in jail after 25-32 years; community demands release on humanitarian grounds",
  keyPrisoners: [
    {
      name: "Balwant Singh Rajoana",
      status: "Death sentence commuted to life",
      conviction: "CM Beant Singh assassination",
    },
    { name: "Lakhwinder Singh", status: "Convicted", conviction: "Militancy era" },
    { name: "Gurmeet Singh", status: "Convicted", conviction: "Militancy era" },
    { name: "Shamsher Singh", status: "Convicted", conviction: "Militancy era" },
    {
      name: "Prof. Davinderpal Singh Bhullar",
      status: "Convicted",
      conviction: "Militancy era",
    },
    { name: "Jagtar Singh Hawara", status: "Convicted", conviction: "Militancy era" },
  ],
  politicalDynamics:
    "SGPC, Akal Takht, and Sikh organisations across spectrum demand release; BJP Punjab working chief (Nov 2025) said will 'follow constitutional protocol' for release; Congress Rajya Sabha MP Vikram Sahney repeatedly raised in Parliament (2025)",
  congressPositioning:
    "Strongly advocate for release of prisoners who have served 25+ years — this is a humanitarian position with near-unanimous Sikh support; contrasts with AAP's inaction despite promises",
};

export const khalistanIssue: KhalistanIssue = {
  issue: "Khalistan — Low electoral salience, high media amplifier",
  realityCheck:
    "Pro-Khalistan sentiment has MINIMAL electoral traction in Punjab; overwhelming majority of Punjab Sikhs reject separatism",
  mediaExaggeration:
    "Diaspora-driven Khalistan Referendum (SFJ) events in Canada, UK, US, Australia generate outsized media coverage but near-zero Punjab ground support",
  recentDevelopments: [
    {
      name: "Amritpal Singh (Waris Punjab De)",
      description:
        "Won 2024 Lok Sabha from Khadoor Sahib while jailed under NSA — but his vote was anti-establishment protest, not pro-Khalistan mandate",
    },
    {
      name: "Sarabjeet Singh (son of Indira Gandhi's assassin)",
      description: "Won as independent",
    },
  ],
  congressPositioning:
    "Acknowledge Sikh grievances without validating separatism; oppose extrajudicial actions (Nijjar killing allegations) while supporting India's territorial integrity; frame as democracy + rights issue",
};

export const anandpurSahibResolution: AnandpurSahibResolution = {
  issue: "Anandpur Sahib Resolution (1973)",
  content:
    "SAD resolution demanding greater Punjab autonomy, Chandigarh transfer, river waters sharing, and decentralisation of power",
  currentResonance:
    "Moderate — the specific demands (SYL canal, Chandigarh, Punjabi-speaking areas) remain unresolved; the autonomy principle resonates with Sikh federalism sentiment",
  congressNote:
    "Any Congress support for decentralisation/autonomy principles helps with Sikh intellectual class without endorsing separatism",
};

export const sylCanalIssue: SYLCanalIssue = {
  issue: "SYL Canal & Water Sharing",
  description:
    "Sutlej-Yamuna Link canal to share Punjab's river waters with Haryana; Punjab opposes as violation of riparian rights",
  sikhDimension:
    "Framed as Sikh/Punjab rights issue; any party supporting SYL is seen as anti-Punjab",
  congressPosition: "Must OPPOSE SYL construction — non-negotiable in Punjab",
  internalConflict:
    "Congress's Haryana unit supports SYL, creating internal conflict",
};

export const diasporaIssue: DiasporaIssue = {
  issue: "Diaspora Influence",
  countries: [
    {
      name: "Canada",
      population: "~771,790 Sikhs",
      notes: "Politically active; Khalistan Referendum events; Canada-India diplomatic crisis over Nijjar killing (2023)",
    },
    {
      name: "UK",
      population: "~500,000+ Sikhs",
      notes: "Active gurdwara networks; moderate political engagement",
    },
    {
      name: "US",
      population: "Growing community",
      notes: "Remittance flows to Punjab; political influence through social media amplification",
    },
    {
      name: "Australia",
      population: "Growing community",
      notes: "Political influence through social media",
    },
    {
      name: "Italy",
      population: "Growing community",
      notes: "Political influence through social media",
    },
  ],
  punjabElectoralImpact:
    "Diaspora shapes narrative through social media but does NOT determine voting; their amplified pro-Khalistan voices can create false perceptions about ground reality",
};

// ==========================================
// SECT-CONSTITUENCY MAPPING
// ==========================================

export const sectConstituencyMapping: ConstituencyBeltMapping[] = [
  {
    constituencyBelt: "Amritsar Central, Amritsar East/West",
    dominantSect: "SGPC/Akal Takht establishment",
    politicalLean: "Panthic",
  },
  {
    constituencyBelt: "Tarn Taran, Khadoor Sahib",
    dominantSect: "Damdami Taksal, Nihang",
    politicalLean: "Panthic",
  },
  {
    constituencyBelt: "Gurdaspur, Batala",
    dominantSect: "Damdami Taksal (Mehta Chowk HQ)",
    politicalLean: "Panthic",
  },
  {
    constituencyBelt: "Anandpur Sahib, Ropar",
    dominantSect: "Nihang, Takht Kesgarh Sahib",
    politicalLean: "Panthic",
  },
  {
    constituencyBelt: "Ludhiana Rural",
    dominantSect: "Namdhari (Bhaini Sahib), AKJ",
    politicalLean: "Swing",
  },
  {
    constituencyBelt: "Sangrur, Barnala",
    dominantSect: "AKJ, radical pockets",
    politicalLean: "AAP",
  },
  {
    constituencyBelt: "Faridkot, Kotkapura, Bathinda",
    dominantSect: "Sacrilege belt — highest sensitivity",
    politicalLean: "Swing",
  },
  {
    constituencyBelt: "Jalandhar, Hoshiarpur (Doaba)",
    dominantSect: "Nirankari pockets, Radha Soami, Namdhari",
    politicalLean: "Dera-influenced",
  },
  {
    constituencyBelt: "Ferozepur, Moga, Muktsar",
    dominantSect: "Radha Soami (Beas influence)",
    politicalLean: "Dera-influenced",
  },
  {
    constituencyBelt: "Fatehgarh Sahib",
    dominantSect: "Sikh historical memory (younger Sahibzadas)",
    politicalLean: "Panthic",
  },
  {
    constituencyBelt: "Patiala, Mohali",
    dominantSect: "Urban, mixed, lower Panthic salience",
    politicalLean: "Development-focused",
  },
];

// ==========================================
// STRATEGIC SUMMARY
// ==========================================

export const strategicSummary: StrategicSummary = {
  reportDate: "19 May 2026",
  opportunities: [
    {
      number: 1,
      title: "Sacrilege justice gap",
      description:
        "AAP promised, didn't deliver; Congress can own this space",
    },
    {
      number: 2,
      title: "Bandi Singh release",
      description:
        "Near-unanimous Sikh support; Congress MPs already advocating",
    },
    {
      number: 3,
      title: "SGPC democratisation",
      description:
        "Support timely elections — positions Congress as reformist",
    },
    {
      number: 4,
      title: "Damdami Taksal-BJP alignment",
      description: "Expose BJP infiltration of Sikh institutions",
    },
    {
      number: 5,
      title: "SAD collapse",
      description:
        "Panthic vote is now fractured and available; Congress can capture moderate Panthic segment",
    },
    {
      number: 6,
      title: "Dera networks",
      description: "Engage RSSB, Namdharis for organised vote-banks",
    },
  ],
  risks: [
    {
      number: 1,
      title: "1984 legacy",
      description:
        "Any 1984-linked candidate is electoral poison; zero tolerance needed",
    },
    {
      number: 2,
      title: "Nirankari association",
      description:
        "Even perceived closeness triggers backlash from mainstream Sikhs",
    },
    {
      number: 3,
      title: "SYL position",
      description:
        "Must oppose; Haryana Congress tension is unavoidable",
    },
    {
      number: 4,
      title: "Khalistan trap",
      description:
        "Don't let BJP/AAP paint Congress as soft on separatism; don't let Sikh bodies paint Congress as anti-Sikh",
    },
    {
      number: 5,
      title: "Akal Takht respect",
      description:
        "Any perceived disrespect (as happened with Captain Amarinder's government) costs heavily",
    },
  ],
  topRecommendations: [
    {
      number: 1,
      action: "Public commitment to 2015 sacrilege case prosecution",
      description:
        "Not just new laws but actual convictions",
    },
    {
      number: 2,
      action: "Champion Bandi Singh release",
      description: "As a humanitarian cause in Punjab campaign",
    },
    {
      number: 3,
      action: "Ensure ZERO candidates with 1984 associations",
      description: "This is non-negotiable",
    },
  ],
};

// ==========================================
// SOURCES
// ==========================================

export const sourceDocuments: SourceDocument[] = [
  {
    source: "Indian Express",
    date: "Oct 2024",
    title: "How do SGPC elections work? Why have they not been held in 13 years?",
  },
  {
    source: "Fronline/The Hindu",
    date: "Dec 2024",
    title: "SAD locks horns with Akal Takht",
  },
  {
    source: "Times of India",
    date: "Jun 2025",
    title: "SAD vs Damdami Taksal: Panthic crisis rooted in contest for control",
  },
  {
    source: "Times of India",
    date: "Apr 2026",
    title: "Sacrilege cases: Goal post shifts from justice to stricter law",
  },
  {
    source: "Indian Express",
    date: "Nov 2024",
    title: "Akalis question Damdami Taksal backing for BJP",
  },
  {
    source: "Times of India",
    date: "Nov 2025",
    title: "Will follow constitutional protocol for Bandi Singhs' release",
  },
  {
    source: "Asia Samachar",
    date: "Dec 2024",
    title: "India Census: The shrinking Sikh population",
  },
  {
    source: "Caravan Magazine",
    date: "Mar 2016",
    title: "The question of Sehajdhari rights",
  },
  {
    source: "Wikipedia",
    date: "Various",
    title: "2015 Guru Granth Sahib desecration controversy, Sects of Sikhism",
  },
  {
    source: "Scroll.in",
    date: "May 2016",
    title: "Nearly 10 million Sikhs have lost their religion",
  },
  {
    source: "Article-14",
    date: "May 2023",
    title: "The Wait To Free Bandi Singhs",
  },
  {
    source: "Tribune India",
    date: "Feb 2023",
    title: "Centre, states mum over release of Bandi Singhs",
  },
];

// ==========================================
// COMPLETE DATA EXPORT
// ==========================================

export const sikhismInternalData: SikhismInternalData = {
  reportDate: "19 May 2026",
  megaPillar: "MP1 — Foundational Scan (Demographics)",
  status: "RESEARCH COMPLETE",
  confidence: {
    observanceLevels: "HIGH",
    sectData: "HIGH",
    institutionalStructure: "HIGH",
    exactConstituencyMapping: "MEDIUM",
  },
  populationContext: sikhPopulationData,
  observanceTiers: observanceTiers,
  sects: allSects,
  institutions: {
    akalTakht: akalTakhtData,
    sgpc: sgpcData,
    fiveTakhts: fiveTakhtsData,
  },
  criticalIssues: {
    sacrilege: sacrilegeIssue,
    riots1984: riots1984Issue,
    operationBlueStar: operationBlueStar,
    bandiSingh: bandiSinghIssue,
    khalistan: khalistanIssue,
    anandpurSahibResolution: anandpurSahibResolution,
    sylCanal: sylCanalIssue,
    diaspora: diasporaIssue,
  },
  sectConstituencyMapping: sectConstituencyMapping,
  strategicSummary: strategicSummary,
  sources: sourceDocuments,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get Sikh population percentage for a given year
 */
export function getSikhPopulationPercentage(
  year: "2001" | "2011" | "2025"
): number | string {
  switch (year) {
    case "2001":
      return 59.91;
    case "2011":
      return 57.69;
    case "2025":
      return "54-56%";
    default:
      return "Unknown";
  }
}

/**
 * Get observance tier data by type
 */
export function getObservanceTier(
  type: "Amritdhari" | "Keshdhari" | "Sehajdhari"
): SikhObservanceTierData | undefined {
  return observanceTiers.find((tier) => tier.type === type);
}

/**
 * Get sect data by name
 */
export function getSectByName(name: string): SectData | undefined {
  return allSects.find((sect) => sect.name.toLowerCase().includes(name.toLowerCase()));
}

/**
 * Get constituencies by sect influence
 */
export function getConstituenciesBySect(
  sectName: string
): string[] {
  const mapping = sectConstituencyMapping.find(
    (m) => m.dominantSect.toLowerCase().includes(sectName.toLowerCase())
  );
  return mapping ? [mapping.constituencyBelt] : [];
}

/**
 * Get all Panthic-leaning constituencies
 */
export function getPanthicConstituencies(): ConstituencyBeltMapping[] {
  return sectConstituencyMapping.filter((m) => m.politicalLean === "Panthic");
}

/**
 * Get all Swing constituencies
 */
export function getSwingConstituencies(): ConstituencyBeltMapping[] {
  return sectConstituencyMapping.filter((m) => m.politicalLean === "Swing");
}

/**
 * Get all Dera-influenced constituencies
 */
export function getDeraInfluencedConstituencies(): ConstituencyBeltMapping[] {
  return sectConstituencyMapping.filter((m) => m.politicalLean === "Dera-influenced");
}

/**
 * Get critical issues count
 */
export function getCriticalIssuesCount(): number {
  return strategicSummary.opportunities.length;
}

/**
 * Get top recommendations
 */
export function getTopRecommendations(): { number: number; action: string; description: string }[] {
  return strategicSummary.topRecommendations;
}

/**
 * Check if a constituency is in the sacrilege belt
 */
export function isInSacrilegeBelt(constituency: string): boolean {
  const sacrilegeBelt = sectConstituencyMapping.find(
    (m) => m.dominantSect.toLowerCase().includes("sacrilege belt")
  );
  return sacrilegeBelt
    ? sacrilegeBelt.constituencyBelt.toLowerCase().includes(constituency.toLowerCase())
    : false;
}

// ==========================================
// ADDITIONAL UTILITY FUNCTIONS
// ==========================================

/**
 * Get Sikh population decline from 2001 to 2025
 */
export function getSikhPopulationDecline(): { decline: number; note: string } {
  return {
    decline: 59.91 - 54.5, // midpoint of 54-56%
    note: "Lower fertility rates, higher emigration, Hindu migration into Punjab",
  };
}

/**
 * Get SGPC election status
 */
export function getSGPCElectionStatus(): {
  overdue: boolean;
  yearsOverdue: number;
  lastElection: number;
} {
  return {
    overdue: true,
    yearsOverdue: 15,
    lastElection: sgpcData.electionStatus.lastElection,
  };
}

/**
 * Get Damdami Taksal current head
 */
export function getDamdamiTaksalHead(): string {
  return damdamiTaksalData.currentHead;
}

/**
 * Get Akal Takht recent action details
 */
export function getAkalTakhtRecentAction(): {
  date: string;
  target: string;
  reasons: string[];
} | null {
  if (!akalTakhtData.recentAction) return null;
  return {
    date: akalTakhtData.recentAction.date,
    target: akalTakhtData.recentAction.target,
    reasons: akalTakhtData.recentAction.reasons,
  };
}

/**
 * Get Bandi Singh prisoners list
 */
export function getBandiSinghPrisoners(): Array<{
  name: string;
  status: string;
  conviction: string;
}> {
  return bandiSinghIssue.keyPrisoners;
}

/**
 * Get Congress risks count
 */
export function getCongressRisksCount(): number {
  return strategicSummary.risks.length;
}

/**
 * Get diaspora countries data
 */
export function getDiasporaCountries(): Array<{
  name: string;
  population: string;
  notes: string;
}> {
  return diasporaIssue.countries;
}

/**
 * Get total diaspora estimated population
 */
export function getTotalDiasporaPopulation(): string {
  const canada = diasporaIssue.countries.find((c) => c.name === "Canada");
  const uk = diasporaIssue.countries.find((c) => c.name === "UK");
  return `${canada?.population || "N/A"} in Canada, ${uk?.population || "N/A"} in UK`;
}

/**
 * Get Five Takhts list
 */
export function getFiveTakhts(): Array<{
  name: string;
  location: string;
  jurisdiction: string;
}> {
  return fiveTakhtsData.takhts;
}

/**
 * Get sect by constituency belt
 */
export function getSectByConstituencyBelt(
  belt: string
): ConstituencyBeltMapping | undefined {
  return sectConstituencyMapping.find(
    (m) => m.constituencyBelt.toLowerCase() === belt.toLowerCase()
  );
}

/**
 * Get political lean summary
 */
export function getPoliticalLeanSummary(): Record<string, number> {
  const summary: Record<string, number> = {};
  sectConstituencyMapping.forEach((mapping) => {
    summary[mapping.politicalLean] = (summary[mapping.politicalLean] || 0) + 1;
  });
  return summary;
}

/**
 * Get verification status for data quality
 */
export function getDataVerificationStatus(): Record<string, string> {
  return {
    observanceLevels: "HIGH",
    sectData: "HIGH",
    institutionalStructure: "HIGH",
    exactConstituencyMapping: "MEDIUM - requires field intelligence",
  };
}

/**
 * Check if issue is high priority for Congress
 */
export function isHighPriorityIssue(issueName: string): boolean {
  const highPriorityIssues = [
    "sacrilege",
    "bandi singh",
    "1984",
    "sgpc",
    "damdami taksal",
  ];
  return highPriorityIssues.some((priority) =>
    issueName.toLowerCase().includes(priority)
  );
}

/**
 * Get Amritdhari geographic concentration
 */
export function getAmritdhariConcentration(): string[] {
  return [
    "Amritsar",
    "Tarn Taran",
    "Gurdaspur (Majha belt)",
    "Parts of Fatehgarh Sahib",
  ];
}

/**
 * Get key Sikh institutional figures
 */
export function getKeyInstitutionalFigures(): {
  akalTakhtJathedar: string;
  actingJathedar: string;
  damdamiTaksalHead: string;
} {
  return {
    akalTakhtJathedar: akalTakhtData.currentJathedar,
    actingJathedar: akalTakhtData.actingJathedar || "N/A",
    damdamiTaksalHead: damdamiTaksalData.currentHead,
  };
}

/**
 * Get AAP vs Congress issue differentiation
 */
export function getAAPCongressDifferentiation(): Record<string, string> {
  return {
    sacrilege:
      "AAP: New laws only | Congress: Actual prosecution and convictions",
    bandiSingh:
      "AAP: Inaction despite promises | Congress: Humanitarian release advocacy",
    sgpc: "AAP: No position | Congress: Democratic reform - timely elections",
  };
}

/**
 * Get 2024 election impact on SAD
 */
export function getSAD2024Impact(): {
  seatsWon: number;
  previousSeats: number;
  impact: string;
} {
  return {
    seatsWon: 1,
    previousSeats: 77,
    impact:
      "SAD's electoral collapse undermines their legitimacy in SGPC control",
  };
}

/**
 * Get Namdhari population estimate
 */
export function getNamdhariPopulation(): string {
  return namdhariData.population;
}

/**
 * Get RSSB constituency influence
 */
export function getRSSBInfluence(): string[] {
  return radhaSoamiData.constituencyInfluence;
}

/**
 * Get Nihang major factions
 */
export function getNihangFactions(): string[] {
  return nihangData.factions || [];
}

/**
 * Get 2015 sacrilege case status
 */
export function getSacrilegeCaseStatus(): {
  yearsUnresolved: number;
  currentStatus: string;
} {
  return {
    yearsUnresolved: 11,
    currentStatus: sacrilegeIssue.currentStatus,
  };
}

/**
 * Get Congress positioning for an issue
 */
export function getCongressPositioning(issue: string): string | null {
  const positions: Record<string, string> = {
    sacrilege: sacrilegeIssue.congressPositioning,
    "1984": riots1984Issue.congressStrategy,
    "operation blue star": operationBlueStar.congressMitigation,
    "bandi singh": bandiSinghIssue.congressPositioning,
    khalistan: khalistanIssue.congressPositioning,
    anandpur: anandpurSahibResolution.congressNote,
    syl: sylCanalIssue.congressPosition,
    diaspora: "Acknowledge grievances without validating separatism",
  };

  const key = Object.keys(positions).find((k) =>
    issue.toLowerCase().includes(k)
  );
  return key ? positions[key] : null;
}
