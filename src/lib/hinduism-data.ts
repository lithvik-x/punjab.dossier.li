// Hinduism & Interfaith Dynamics Data for Punjab Congress 2027 Election Dashboard
// Derived from: research-M2/MP1-foundational/demographics/hinduism-interfaith.md
// Date: 19 May 2026 | Status: COMPLETE

import type {
  HinduPopulationOverview,
  HinduRegionalDistribution,
  HinduTradition,
  AryaSamajData,
  DevSamajData,
  ISKCONData,
  OtherTraditions,
  Temple,
  RSSDistrictDensity,
  RSSVictoryPlan2026,
  HinduMobilizationIssue,
  HinduDalitVotingPattern,
  SharedWorshipPattern,
  SharedSacredCalendar,
  StrategicImplication,
  SourceDocument,
} from "@/types/hinduism-interfaith";

// ==========================================
// HINDU POPULATION DATA
// ==========================================

/**
 * Hindu Population Overview in Punjab
 * Source: Research estimate based on Census 2011 (57.69% Sikh, 38.49% Hindu)
 */
export const hinduPopulationOverview: HinduPopulationOverview = {
  percentageOfState: "37-38%",
  estimatedPopulation: "~10-11 million",
  concentration: "Urban centres and border districts",
  regionalDistribution: [
    {
      region: "Doaba",
      seats: 23,
      hinduShare: "30-40%",
      keyDistricts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr"],
    },
    {
      region: "Malwa",
      seats: 69,
      hinduShare: "25-35%",
      keyDistricts: ["Ludhiana", "Bathinda", "Fazilka", "Firozpur", "Muktsar"],
    },
    {
      region: "Majha",
      seats: 25,
      hinduShare: "30-40%",
      keyDistricts: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
    },
  ],
};

/**
 * Hindu Dalit population in Punjab
 * Critical swing constituency - 12-13% of Punjab population
 * 34 of 117 seats are SC-reserved
 */
export const hinduDalitData = {
  populationPercentage: "12-13%",
  reservedSeats: 34,
  totalSeats: 117,
  scReservedSeatsNote: "34 of 117 seats are SC-reserved",
};

// ==========================================
// HINDU TRADITIONS DATA
// ==========================================

/**
 * Sanatan Dharma (Mainstream Hindu)
 * Temple-based worship of Shiva, Durga/Kali, Vishnu, Hanuman
 */
export const sanatanDharmaData: HinduTradition = {
  name: "Sanatan Dharma",
  description: "Mainstream Hindu tradition in Punjab",
  keyCharacteristics: [
    "Shakti worship dominant: Durga, Kali, Sheetla Mata, Chintpurni",
    "Shiva temples widespread in every town and village cluster",
    "Ramlila tradition deeply embedded — annual performances during Navratra",
    "Home worship: Tulsi plant, Hanuman images, Satyanarayan Katha",
  ],
  electoralSignificance: "Base Hindu voters in urban areas",
};

/**
 * Arya Samaj Data
 * Single most influential Hindu reform movement in Punjab
 * Founded by Swami Dayanand Saraswati (1875)
 */
export const aryaSamajData: AryaSamajData = {
  founded: "1875",
  founder: "Swami Dayanand Saraswati",
  davNetwork: {
    colleges: "1,200+",
    schools: "10,000+",
    concentration: "Punjab (Jalandhar, Amritsar, Ludhiana, Patiala, Pathankot)",
  },
  ideologicalStance: [
    "Monotheistic, Vedic authority",
    "Opposes idol worship (though many Punjab Arya Samajis are flexible in practice)",
    "Strong emphasis on education, Hindi language",
    "Social reform including opposition to caste and child marriage",
  ],
  politicalAlignment: "Historically Congress-leaning",
  voterBehavior:
    "Arya Samaj-influenced Hindus (urban, educated, upper-caste) in Jalandhar, Amritsar, and Ludhiana have historically favoured Congress but some sections shifted to BJP post-2014",
};

/**
 * Dev Samaj Data
 * Smaller but historically significant reform movement
 */
export const devSamajData: DevSamajData = {
  founded: "1887",
  founder: "Shiv Narayan Agnihotri",
  headquarters: "Chandigarh (moved from Lahore post-Partition)",
  emphasis: ["Ethics", "Social service", "Education"],
  politicalProfile: "Politically low-profile but culturally influential among certain Khatri and Brahmin families",
};

/**
 * ISKCON Data
 * Growing presence since 1990s
 */
export const iskconData: ISKCONData = {
  temples: ["Ludhiana", "Jalandhar", "Amritsar", "Patiala", "Bathinda"],
  activities: [
    "Rathyatra processions (annual in Ludhiana, Jalandhar)",
    "Youth programmes and Bhagavad Gita distribution",
    "Prison outreach and anti-addiction campaigns",
  ],
  youthEngagement: "Attracts middle-class Hindu youth",
  politicalNote:
    "RSS 2025-26 annual report specifically notes ISKCON participation in Samajik Sadbhav Baithaks in Malwa region",
};

/**
 * Other Hindu Traditions in Punjab
 */
export const otherTraditionsData: OtherTraditions[] = [
  {
    name: "Radha Soami Satsang",
    description: "Primarily attracts Sikh followers but significant Hindu membership",
    location: "Beas, Amritsar district",
    politicalSignificance:
      "Politically neutral but socially influential across 15+ constituencies in Amritsar-Gurdaspur area",
  },
  {
    name: "Nirankari Mission",
    description: "Spiritual movement with both Sikh and Hindu followers",
    location: "Sant Nirankari colony in Jalandhar; HQ in Delhi",
    politicalSignificance: "Cross-faith movement with Punjab presence",
  },
  {
    name: "Namdhari sect",
    description: "Sikh-origin but some Hindu adherents",
    politicalSignificance: "Politically low-profile",
  },
  {
    name: "Sant Ravidas tradition",
    description:
      "Critical for Dalit Hindus and Dalit Sikhs. Dera Sachkhand Ballan (Jalandhar) is headquarters",
    location: "Dera Sachkhand Ballan, Jalandhar",
    politicalSignificance:
      "Head Niranjan Das received Padma Shri in January 2026 — political significance for Dalit outreach",
  },
];

// ==========================================
// MAJOR TEMPLES DATA
// ==========================================

/**
 * Major Hindu Temples in Punjab
 */
export const majorTemplesData: Temple[] = [
  {
    name: "Shri Durgiana Mandir",
    location: "Amritsar",
    deity: "Goddess Durga",
    significance: "Architecture mirrors Golden Temple",
    constituencyRelevance: "Amritsar Central/Central",
  },
  {
    name: "Mata Lal Devi Mandir",
    location: "Amritsar",
    deity: "Goddess Lal Devi",
    significance: "Fertility shrine",
    constituencyRelevance: "Amritsar (multiple ACs)",
  },
  {
    name: "Valmiki Tirth Sthal (Ram Tirth)",
    location: "Amritsar",
    deity: "Maharishi Valmiki ashram",
    significance: "Sita exile site",
    constituencyRelevance: "Amritsar South/West",
  },
  {
    name: "Kali Mata Mandir",
    location: "Patiala",
    deity: "Devi",
    significance: "Devi Talab Mandir complex",
    constituencyRelevance: "Patiala Urban/Rural",
  },
  {
    name: "Shiv Mandir",
    location: "Jalandhar (Gur Mandi)",
    deity: "Lord Shiva",
    significance: "Ancient Shiva shrine",
    constituencyRelevance: "Jalandhar Central",
  },
  {
    name: "Bhagwati Mandir",
    location: "Maisar Khanna, Bathinda",
    deity: "Goddess Bhagwati",
    significance: "Regional pilgrimage site",
    constituencyRelevance: "Bathinda Urban/Rural",
  },
  {
    name: "Mansa Devi Shrine",
    location: "Various locations",
    deity: "Goddess Mansa",
    significance: "Widespread worship",
    constituencyRelevance: "Multiple districts",
  },
  {
    name: "Sheetla Mata Mandir",
    location: "Multiple (esp. Gurdaspur, Amritsar)",
    deity: "Goddess Sheetla",
    significance: "Majha region prominence",
    constituencyRelevance: "Majha region",
  },
  {
    name: "Shri Krishna Janam Sthal",
    location: "Amritsar",
    deity: "Lord Krishna",
    significance: "1600-year-old Krishna footprints",
    constituencyRelevance: "Amritsar Central",
  },
];

/**
 * Cross-Border Pilgrimage Links
 */
export const crossBorderPilgrimage = {
  katasRajTemples: {
    location: "Pakistan Punjab",
    deity: "Shiva",
    significance: "Linked to Mahabharata",
    status: "Post-Partition: not accessible",
  },
  kartarpurCorridor: {
    opened: "2019",
    significance: "Symbolic pilgrimage for both Sikhs and Hindus",
  },
  sharadaPeeth: {
    location: "Pakistan-occupied Kashmir",
    significance: "Aspirational pilgrimage site",
    status: "Not accessible",
  },
};

/**
 * Temple-Adjacent Economy
 */
export const templeEconomy = {
  description: "Temples generate significant local employment and are centres of social organisation",
  localNetworks: ["Ramlila committees", "Temple trusts", "DAV managements"],
  politicalInfluence: "Represent local Hindu elite networks with political influence",
};

// ==========================================
// RSS/VHP MAPPING DATA
// ==========================================

/**
 * RSS Shakha Density in Punjab
 */
export const rssShakhaData = [
  { year: 2016, count: "900+", source: "Wikipedia citing RSS data" },
  {
    year: 2025,
    count: "1,000-1,200 (estimated)",
    source: "Based on national growth from 83,129 to 88,949 (RSS Annual Report 2025-26)",
  },
];

export const rssDistrictDensity: RSSDistrictDensity[] = [
  {
    districtCluster: "Jalandhar-Kapurthala",
    estimatedShakhas: "150-200",
    strength: "Strongest — DAV/Arya Samaj base",
  },
  {
    districtCluster: "Amritsar-Gurdaspur-Pathankot",
    estimatedShakhas: "150-200",
    strength: "Strong — border district focus",
  },
  {
    districtCluster: "Ludhiana-Moga",
    estimatedShakhas: "100-150",
    strength: "Growing — urban Hindu population",
  },
  {
    districtCluster: "Patiala-Fatehgarh Sahib",
    estimatedShakhas: "80-120",
    strength: "Moderate",
  },
  {
    districtCluster: "Bathinda-Muktsar-Fazilka",
    estimatedShakhas: "60-100",
    strength: "Moderate — RSS targets Dalits here",
  },
  {
    districtCluster: "Firozpur-Tarn Taran",
    estimatedShakhas: "50-80",
    strength: "Lower — Sikh-majority areas",
  },
];

/**
 * RSS Punjab Victory Plan 2026
 * Source: Bhaskar English, April 2026
 */
export const rssVictoryPlan2026: RSSVictoryPlan2026 = {
  name: "Punjab Victory Plan (2026)",
  fivePointStrategy: [
    {
      number: 1,
      name: "Samrasta Abhiyan",
      description:
        "Merging separate Dalit-upper caste cremation grounds; 250 villages identified with segregated grounds; 'model village' creation with shared cremation grounds and yoga centres",
    },
    {
      number: 2,
      name: "Dalit-Ram Connect",
      description:
        "Distributing Valmiki Ramayan to every household (Sikh and Hindu); Dalit saints narrating Ramkatha; ceremonial light from Valmiki Tirth for Ramleela in multiple states",
    },
    {
      number: 3,
      name: "Sant Ravidas 650th Anniversary",
      description:
        "Year-long celebrations (June 2026 - June 2027) at block level; installing Valmiki and Ravidas idols in temples",
    },
    {
      number: 4,
      name: "Dalit Saints Network",
      description:
        "Four years of building a cadre of Dalit saints who narrate Luv-Kush stories, connecting to Bedi/Sodhi lineages",
    },
    {
      number: 5,
      name: "Vidya Bharati Schools",
      description: "150+ RSS-run schools in Punjab, ~7,000-8,000 students; prioritising economically weaker sections",
      scale: "150+ schools",
    },
  ],
};

/**
 * VHP/BJP-affiliated Organisations
 */
export const vhpOrganizations = [
  {
    name: "Vishwa Hindu Parishad",
    focus: "Ramleela coordination, temple renovation, 'ghar wapsi' campaigns",
    activities: ["Temple renovation", "Ramleela coordination", "Conversion outreach"],
  },
  {
    name: "Dharm Jagran Manch",
    focus: "Anti-conversion activities, particularly in border districts",
    activities: ["Anti-conversion campaigns", "Border district focus"],
    targetDistricts: ["Gurdaspur", "Amritsar", "Pathankot", "Fazilka"],
  },
  {
    name: "Vidya Bharati",
    focus: "150+ schools, educational infrastructure for Hindutva outreach",
    activities: ["School network", "Education for Hindutva"],
  },
  {
    name: "Bajrang Dal",
    focus: "Youth wing",
    activities: ["Hanuman Jayanti processions", "Ram Navami celebrations"],
  },
];

// ==========================================
// HINDU POLITICAL ISSUES DATA
// ==========================================

/**
 * Key Hindu Mobilisation Issues
 */
export const hinduMobilizationIssues: HinduMobilizationIssue[] = [
  {
    issue: "Ram Mandir",
    sentiment: "Positive pride but less visceral than UP/Bihar",
    politicalImpact: "Moderate BJP benefit in 2024 LS; less salient for 2027",
    salience: "Moderate",
  },
  {
    issue: "CAA-NRC",
    sentiment: "Divisive. Punjab Assembly passed anti-CAA resolution (Jan 2020)",
    politicalImpact: "Net negative for BJP in Punjab; Congress/AAP opposed",
    salience: "Moderate",
  },
  {
    issue: "Cow Protection",
    sentiment: "Most Punjabi Hindus are non-vegetarian; cow slaughter ban already in force",
    politicalImpact: "Less mobilising than in Hindi belt",
    salience: "Low",
  },
  {
    issue: "UCC",
    sentiment: "Limited organic demand; some Arya Samaj support in principle",
    politicalImpact: "Low salience",
    salience: "Low",
  },
  {
    issue: "Article 370",
    sentiment: "Approved by urban Hindus but not a defining Punjab issue",
    politicalImpact: "Low-moderate",
    salience: "Low",
  },
  {
    issue: "Christian Conversion",
    sentiment: "High concern in border districts",
    politicalImpact: "Growing salience; potential BJP wedge issue",
    salience: "High",
  },
];

/**
 * Hindu Dalit Voting Pattern (2022 Assembly)
 * Source: Bhaskar English citing post-poll surveys - VERIFICATION_NEEDED
 */
export const hinduDalitVoting2022: HinduDalitVotingPattern[] = [
  { party: "AAP", dalitSikhVote: "46%", dalitHinduVote: "~32%" },
  { party: "Congress", dalitSikhVote: "~20%", dalitHinduVote: "~32%" },
  { party: "BJP", dalitSikhVote: "3%", dalitHinduVote: "~10%" },
  { party: "Others", dalitSikhVote: "~31%", dalitHinduVote: "~26%" },
];

// ==========================================
// SIKH-HINDU DYNAMICS DATA
// ==========================================

/**
 * Historical Context for Sikh-Hindu Relations
 */
export const historicalSikhHinduContext = [
  {
    period: "Pre-Partition",
    description:
      "Amritsar was a model of syncretic coexistence — shared festivals, inter-communal businesses, mixed neighbourhoods",
    impact: "The 1947 Partition violently disrupted this but did not eliminate it",
  },
  {
    period: "1980s Insurgency",
    description:
      "Bhindranwale's strategy explicitly targeted Hindus to trigger exodus and communal polarisation",
    impact:
      "~3,000 Sikhs killed in 1984 Delhi riots aftermath. Deep scars persist, particularly in Majha",
  },
  {
    period: "Post-1995 Recovery",
    description: "Gradual normalisation. By the 2000s, communal violence in Punjab was minimal",
    impact:
      "The peace held through 2015 Guru Granth Sahib desecration crisis (Sikh-state tension, not Hindu-Sikh)",
  },
];

/**
 * Current Sikh-Hindu Dynamics (2025-26)
 */
export const currentSikhHinduDynamics = {
  minorityPerspective:
    '"Punjabi Hindus suffer from a "minority persecution complex in the state and a majority complex in the country" — scholar Pritam Singh (cited in Tandfonline, June 2025)',
  sharedCulturalSpace:
    "Both communities celebrate each other's festivals. Many Hindus visit gurdwaras regularly; many Sikhs participate in Hindu temples and Ramlila. This syncretism is strongest in rural Malwa and Doaba",
  languageReality:
    "Punjabi Hindus predominantly speak Punjabi at home (contrary to RSS narrative pushing Hindi). The Hindi-Punjabi language divide is politicised but overstated — most urban Hindus are bilingual",
  marriagePatterns: "Inter-community marriages (Sikh-Hindu) remain common in urban Punjab, especially among Khatris and Aroras",
};

/**
 * Potential Flashpoints
 */
export const potentialFlashpoints = [
  {
    issue: "RSS attempts to 'integrate' Sikhism into Hindu fold",
    risk: "The 'Sikhs are part of Hindu family' narrative generates resentment among practising Sikhs",
    potentialImpact: "RSS distributing Valmiki Ramayan to Sikh households could backfire",
  },
  {
    issue: "Religious conversion",
    risk: "Christian conversion in border districts creates Hindu-Sikh common cause against perceived demographic change",
    potentialImpact:
      "Tension if Dalits convert to escape caste in both communities",
  },
  {
    issue: "Temple-Gurdwara disputes",
    risk: "Rare but inflammatory when they occur",
    potentialImpact: "Can trigger communal tensions",
  },
];

// ==========================================
// INTERFAITH SYNCRETISM DATA
// ==========================================

/**
 * Shared Worship Patterns
 */
export const sharedWorshipPatterns: SharedWorshipPattern[] = [
  {
    practice: "Sikhs visiting Hindu temples",
    description: "Durgiana Mandir (Amritsar) sees significant Sikh footfall",
    temples: ["Durgiana Mandir, Amritsar"],
    trend: "Continuing",
  },
  {
    practice: "Hindus visiting gurdwaras",
    description:
      "Nearly universal among Punjabi Hindus. Daily visits, matha-teking, langar participation. Many Hindus consider the Golden Temple their own sacred space",
    temples: ["Golden Temple, Harmandir Sahib"],
    trend: "Strong continuing",
  },
  {
    practice: "Dargah visitation",
    description: "Both Sikhs and Hindus visit Sufi dargahs",
    temples: ["Mazaar of Baba Murad Shah (Nakodar)", "Haider Shaykh (Malerkotla)"],
    trend: "Declining in urban areas under RSS/Arya Samaj influence",
  },
  {
    practice: "Sultanis/Sultaniyas",
    description: "A syncretic tradition unique to Punjab where followers practiced elements of both Islam and Sikhism/Hinduism",
    temples: [],
    trend: "Now largely historical",
  },
];

/**
 * Shared Sacred Calendar
 */
export const sharedSacredCalendar: SharedSacredCalendar[] = [
  { occasion: "Baisakhi", sharedParticipation: "Harvest festival celebrated by all communities" },
  {
    occasion: "Diwali / Bandi Chhor Divas",
    sharedParticipation: "Sikhs celebrate Bandi Chhor Divas; Hindus celebrate Diwali; often jointly",
  },
  { occasion: "Hola Mohalla / Holi", sharedParticipation: "Overlapping spring festivals" },
  { occasion: "Gurpurabs", sharedParticipation: "Hindu families often attend gurdwara celebrations" },
  { occasion: "Ramlila", sharedParticipation: "Some Sikh families attend; historically joint productions in villages" },
];

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export const strategicImplicationsForCongress: StrategicImplication[] = [
  {
    number: 1,
    implication:
      "Hindu voters are NOT a BJP monolith: Arya Samaj's Congress affinity, syncretic traditions, and Punjabi identity create openings",
    strategicValue:
      "Congress should emphasise Punjabi Hindu identity over pan-Hindu identity",
  },
  {
    number: 2,
    implication:
      "Dalit Hindu-Sikh unity is the key: 34 reserved seats + Dalit influence in general seats",
    strategicValue:
      "The Sant Ravidas tradition, Valmiki tradition, and shared Dalit experience across Sikh-Hindu lines is a natural Congress coalition",
  },
  {
    number: 3,
    implication:
      "RSS penetration is growing but contested: The Punjab Victory Plan is real and well-funded",
    strategicValue:
      "Congress must monitor the Dalit-Ram connect campaign; RSS faces resistance from Arya Samaj networks and Sikh institutions",
  },
  {
    number: 4,
    implication: "Anti-conversion sentiment can be bipartisan",
    strategicValue:
      "Congress need not concede this issue to BJP. Supporting regulation of predatory conversion while protecting religious freedom can appeal to both Hindu and Sikh voters",
  },
  {
    number: 5,
    implication: "Syncretism as political messaging",
    strategicValue:
      "Celebrating shared Sikh-Hindu heritage (Durgiana Mandir + Golden Temple, shared festivals, shared language) reinforces Congress's secular-Punjabi positioning against BJP's Hindutva",
  },
];

// ==========================================
// SOURCES
// ==========================================

export const sourceDocuments: SourceDocument[] = [
  { citation: "Bhaskar English, 'RSS Punjab Victory Plan: Dalit Ram Connect Targets AAP Seats'", date: "April 2026", type: "web" },
  {
    citation: "RSS Annual Report 2025-26 (presented at ABPS, Samalkha, March 2026)",
    date: "March 2026",
    type: "research",
  },
  { citation: "Wikipedia: Arya Samaj, RSS", type: "web" },
  { citation: "Caravan Magazine, 'The RSS's endeavour to subsume the Arya Samaj'", date: "June 2019", type: "magazine" },
  { citation: "Indian Express, 'Punjab government to bring resolution against CAA-NRC'", date: "January 2020", type: "web" },
  {
    citation: "Pritam Singh, cited in Tandfonline, 'Punjab: Relocations of Hindutva in a Sikh Majority State'",
    date: "June 2025",
    type: "research",
  },
  { citation: "Reddit r/punjab discussion on syncretic practices", date: "September 2025", type: "web" },
  { citation: "Dharmapedia, Religion Wiki — Punjab temple listings", type: "web" },
  { citation: "Cultural Survival, 'Ethnic and Religious Conflicts in India'", type: "research" },
  { citation: "Training knowledge: Arya Samaj history, DAV institutions, Punjab Hindu demographics", type: "training" },
];

// ==========================================
// CONSTANTS & MAPPINGS
// ==========================================

/**
 * Key Districts for Hindu Concentration
 */
export const HINDU_CONCENTRATION_DISTRICTS = {
  Doaba: ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr"],
  Malwa: ["Ludhiana", "Bathinda", "Fazilka", "Firozpur", "Muktsar"],
  Majha: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
} as const;

/**
 * RSS Shakha Growth Trajectory
 */
export const RSS_SHAKHA_GROWTH = {
  2016: { count: 900, source: "Wikipedia citing RSS data" },
  2025_26: { count: "1,000-1,200", source: "Estimated based on national data" },
} as const;

/**
 * Hindu Dalit Vote Share (2022)
 * VERIFICATION_NEEDED - Source: Bhaskar English post-poll surveys
 */
export const DALIT_VOTE_BY_CATEGORY = {
  dalitSikh: { AAP: 46, Congress: 20, BJP: 3, Others: 31 },
  dalitHindu: { AAP: 32, Congress: 32, BJP: 10, Others: 26 },
} as const;

/**
 * Major Festivals Shared Between Sikh and Hindu Communities
 */
export const SHARED_FESTIVALS = [
  "Baisakhi",
  "Diwali/Bandi Chhor Divas",
  "Hola Mohalla/Holi",
  "Gurpurabs",
  "Ramlila",
] as const;

/**
 * Arya Samaj Strongholds in Punjab
 */
export const ARYA_SAMAJ_STRONGHOLDS = [
  "Jalandhar",
  "Amritsar",
  "Ludhiana",
  "Patiala",
  "Pathankot",
] as const;
