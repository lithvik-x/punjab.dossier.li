// Local Body Urban Politics Types
// Derived from: b26-local-body-urban-politics.md

// ==========================================
// MUNICIPAL CORPORATIONS
// ==========================================

export interface MunicipalCorporation {
  city: string;
  mcStatus: string;
  wards: number;
  populationApprox: number;
}

export const MAJOR_MUNICIPAL_CORPORATIONS: MunicipalCorporation[] = [
  { city: "Ludhiana", mcStatus: "MC Corporation", wards: 70, populationApprox: 1600000 },
  { city: "Amritsar", mcStatus: "MC Corporation", wards: 65, populationApprox: 1100000 },
  { city: "Jalandhar", mcStatus: "MC Corporation", wards: 60, populationApprox: 870000 },
  { city: "Patiala", mcStatus: "MC Corporation", wards: 50, populationApprox: 445000 },
  { city: "Phagwara", mcStatus: "MC Corporation", wards: 30, populationApprox: 130000 },
];

// ==========================================
// URBAN VOTING PATTERNS
// ==========================================

export interface UrbanVoterCharacteristic {
  characteristic: string;
  description: string;
}

export const URBAN_VOTER_CHARACTERISTICS: UrbanVoterCharacteristic[] = [
  { characteristic: "Issue-Based Flexibility", description: "Urban voters, particularly the middle class, shift more readily based on development promises" },
  { characteristic: "Caste Heterogeneity", description: "Unlike rural constituencies with dominant caste clusters, urban wards show more mixed caste compositions" },
  { characteristic: "Economic Priority Weighting", description: "Employment, infrastructure, and economic opportunity dominate urban voter concerns" },
  { characteristic: "Lower Emotional Voting", description: "Urban voters demonstrate relatively lower susceptibility to emotional/religious appeals" },
  { characteristic: "Business Network Influence", description: "In industrial cities like Ludhiana, business associations influence voter behavior through employment leverage" },
];

// ==========================================
// CITY POLITICAL DYNAMICS
// ==========================================

export interface CityPoliticalDynamics {
  city: string;
  keyCharacteristics: string[];
  congressStatus: string;
  aapStatus: string;
  sadStatus: string;
  bjpStatus: string;
}

export const CITY_POLITICAL_DYNAMICS: CityPoliticalDynamics[] = [
  {
    city: "Ludhiana",
    keyCharacteristics: [
      "Industrial capital—business community exercises significant political influence",
      "BJP has strong urban base among traders and industrialists",
      "Congress rebuilt urban presence post-2022",
      "AAP emerged as primary challenger in 2022",
    ],
    congressStatus: "Rebuilt urban presence post-2022",
    aapStatus: "Primary challenger in 2022 (Model Town, Ludhiana East, West)",
    sadStatus: "Historically present",
    bjpStatus: "Strong urban base among traders and industrialists",
  },
  {
    city: "Amritsar",
    keyCharacteristics: [
      "Religious tourism creates unique urban economy",
      "Shiromani Akali Dal historically strong among urban Sikh electorate",
      "BJP making inroads among traders and Hindu urban vote",
      "Congress suffered significant erosion in 2022",
    ],
    congressStatus: "Suffered significant erosion in 2022",
    aapStatus: "Growing presence",
    sadStatus: "Historically strong among urban Sikh electorate",
    bjpStatus: "Making inroads among traders and Hindu urban vote",
  },
  {
    city: "Jalandhar",
    keyCharacteristics: [
      "Sports goods and textiles industry defines middle-class electorate",
      "Strong BSP influence among Valmiki/SC voters in urban pockets",
      "AAP consolidation in 2022 reduced Congress to third position",
    ],
    congressStatus: "Reduced to third position in 2022",
    aapStatus: "Consolidated in 2022",
    sadStatus: "Limited presence",
    bjpStatus: "Present",
  },
  {
    city: "Patiala",
    keyCharacteristics: [
      "Royal legacy and student electorate (Punjabi University)",
      "Congress traditional stronghold showing vulnerability",
      "Regional parties maintain presence through student networks",
    ],
    congressStatus: "Traditional stronghold showing vulnerability",
    aapStatus: "Growing",
    sadStatus: "Regional presence",
    bjpStatus: "Present",
  },
  {
    city: "Phagwara",
    keyCharacteristics: [
      "Border town with significant migrant population",
      "Commercial traffic creates distinct economic interest group",
      "AAP won 2022 (Phagwara seat)",
    ],
    congressStatus: "Lost in 2022",
    aapStatus: "Won 2022",
    sadStatus: "Limited presence",
    bjpStatus: "Present",
  },
];

// ==========================================
// MC OUTCOME PATTERNS
// ==========================================

export interface MCOutcomeSignal {
  mcResult: string;
  assemblyImpact: string;
  signalStrength: "Strong" | "Moderate" | "Weak";
}

export const MC_OUTCOME_SIGNALS: MCOutcomeSignal[] = [
  { mcResult: "AAP wins MC in city X", assemblyImpact: "Strong AAP signal in 3-5 adjacent assembly seats", signalStrength: "Strong" },
  { mcResult: "Congress retains MC", assemblyImpact: "Congress maintains base; shift indicates anti-incumbency", signalStrength: "Moderate" },
  { mcResult: "BJP gains MC seats", assemblyImpact: "BJP's urban footprint expansion precedes assembly gains", signalStrength: "Strong" },
  { mcResult: "High NOTA/independent votes", assemblyImpact: "Voter frustration, floating voter increase", signalStrength: "Moderate" },
];

// ==========================================
// MAYORAL SYSTEM
// ==========================================

export interface MayoralRole {
  position: string;
  description: string;
  authority: string;
}

export const MAYORAL_SYSTEM: MayoralRole[] = [
  { position: "Mayor", description: "First citizen, ceremonial head, presides over corporation meetings", authority: "Ceremonial - actual administrative control resides with Commissioner" },
  { position: "Senior Deputy Mayor", description: "Elected from among corporators", authority: "Supporting role" },
  { position: "Commissioner", description: "Administrative head (IAS officer appointed by state government)", authority: "Actual administrative control" },
  { position: "Corporator", description: "Elected ward representative with significant local influence", authority: "Local representation" },
];

// ==========================================
// URBAN PRIORITIES
// ==========================================

export const URBAN_MIDDLE_CLASS_PRIORITIES = [
  "Road infrastructure and traffic management",
  "Reliable electricity and water supply",
  "Sanitation and waste management",
  "Quality healthcare and education facilities",
  "Public transport and parking infrastructure",
];

// ==========================================
// PARTY URBAN STRATEGIES
// ==========================================

export interface PartyUrbanStrategy {
  party: string;
  strategy: string[];
}

export const PARTY_URBAN_STRATEGIES: PartyUrbanStrategy[] = [
  {
    party: "Congress",
    strategy: [
      "Relies on traditional urban family networks and faction leaders",
      "Focuses on sitting corporators as micro-infrastructure conduits",
      "2022 defeat triggered urban restructuring efforts",
      "Emphasis on young urban leadership induction",
    ],
  },
  {
    party: "AAP",
    strategy: [
      "Municipal elections used as launching pad for assembly campaigns",
      "Anti-corruption messaging resonates with urban middle class",
      "Deploys urban volunteers for booth-level assembly work",
      "Councilors trained as assembly booth agents",
    ],
  },
  {
    party: "SAD",
    strategy: [
      "Urban base through business community ties",
      "Uses urban religious networks (SGPC parallel influence)",
      "Declining urban footprint as per 2022 results",
    ],
  },
  {
    party: "BJP",
    strategy: [
      "Expanding urban presence through trader/industrialist networks",
      "Hindu urban voters mobilized effectively in select cities",
      "Development messaging tailored to urban middle class",
      "Booth-level Hindu consolidation strategy",
    ],
  },
];

// ==========================================
// URBAN ELITE NETWORKS
// ==========================================

export const URBAN_ELITE_NETWORK_TYPES = [
  "Trade associations (Ludhiana Vanaspati, Jalandhar Sports Goods)",
  "Professional bodies (Bar Association, Medical Association)",
  "Religious institutions (Temple committees, Gurudwara committees)",
  "Educational institutions (Alumni networks, parent-teacher associations)",
  "Social clubs (Rotary, Lions, sports clubs)",
];

// ==========================================
// ASSEMBLY SEAT CLASSIFICATION
// ==========================================

export interface AssemblySeatClassification {
  type: string;
  approximateSeats: number;
  description: string;
  keyNotes: string[];
}

export const ASSEMBLY_SEAT_CLASSIFICATIONS: AssemblySeatClassification[] = [
  {
    type: "Urban-Dominant Seats",
    approximateSeats: 35,
    description: "Cities of Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda, Pathankot, Phagwara",
    keyNotes: ["Urban booth management critical", "Visibility and development focus critical"],
  },
  {
    type: "Semi-Urban Seats",
    approximateSeats: 25,
    description: "Town peripheries, industrial corridors, market towns",
    keyNotes: ["Hybrid rural-urban voter behavior"],
  },
];

// ==========================================
// LEGISLATIVE FRAMEWORK
// ==========================================

export const MUNICIPAL_LEGISLATION = {
  mcCorporations: "Punjab Municipal Corporation Act, 1976 (as amended)",
  smallerUrban: "Punjab Municipal Act, 1911",
  nagarCouncils: "Exist in towns with populations above 15,000",
  nagarPanchayats: "Exist in towns with populations between 5,000-15,000",
};

export const ELECTION_CYCLE = {
  mcCorporationTerm: "5 years",
  previousCycles: "2016, 2021 (delayed due to COVID, held in 2022)",
  byElectionTimeline: "Within 6 months for casual vacancies",
};
