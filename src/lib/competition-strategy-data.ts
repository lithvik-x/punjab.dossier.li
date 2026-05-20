// Competition Strategy Data for Punjab 2027
// Derived from: direct-documentation/cat-6-competition/
// Date: 20 May 2026 | Data Currency: May 2026

import type {
  AAPHistoryReport,
  SADHistoryReport,
  BJPHistoryReport,
  CompetitiveIntelligenceReport,
  FarmersProtestReport,
  DeraPoliticsReport,
  PanthicPoliticsReport,
  AAPAttackSurfaceReport,
  DigitalCounterCampaignReport,
} from "../types/competition-strategy-types";

// ==========================================
// AAP HISTORY DATA (from b15)
// ==========================================

export const aapHistoryReport: AAPHistoryReport = {
  reportDate: "20 May 2026",
  origin: {
    movement: "India Against Corruption (IAC) movement",
    year: 2011,
    founder: "Arvind Kejriwal",
    background: "IIT Kharagpur graduate, former IRS officer, RTI activist",
  },
  delhiGovernance: {
    firstGovernment: {
      year: 2013,
      duration: "49 days",
      reason: "Resigned over Lokpal bill disagreement",
    },
    secondGovernment: {
      year: 2015,
      seats: 67,
      voteShare: 54.3,
      keyInitiatives: [
        "Jan Lokpal Act 2015",
        "Mohalla Clinics (450+ free primary healthcare clinics)",
        "Free electricity up to 200 units",
        "Odd-even vehicle rationing",
        "Improved school infrastructure",
      ],
    },
    mohallaClinics: {
      established: 500,
      patientsPerDay: 90,
      status: "Operational and expanded",
    },
    electricityScheme: {
      freeUnits: 200,
      subsidyModel: "Direct benefit transfer",
    },
  },
  punjabEntry: {
    year: 2014,
    firstElection: "Lok Sabha",
    seatsWon: 0,
    voteShare: 4.4,
    breakthrough: "First Punjab candidates fielded",
  },
  victory2022: {
    seats: 92,
    voteShare: 42,
    chiefMinister: "Bhagwant Mann",
    breakthrough: "Historic mandate, ended Congress-Akali bipolar competition",
  },
  keyPromises: [
    {
      promise: "25 lakh jobs",
      delivery: "~1.3 lakh claimed (-94.8%)",
      status: "FAILED",
      details: "PLFS Data Oct-Dec 2024: Youth unemployment at 14.9%, 4th highest in India",
    },
    {
      promise: "Drug-free Punjab",
      delivery: "Drugs still freely available",
      status: "FAILED",
      details: "Village-level reports confirm continued drug availability despite enforcement",
    },
    {
      promise: "MSP for 22 crops",
      delivery: "Not implemented",
      status: "FAILED",
      details: "Farmers continue protesting at Khanauri border demanding legal MSP guarantee",
    },
    {
      promise: "Rs 1,000/month to women",
      delivery: "Delivered March 2026",
      status: "DELIVERED 4 YEARS LATE",
      details: "NDTV March 8, 2026: AAP fulfilled promise 4 years after polls",
    },
    {
      promise: "Jan Lokpal bill",
      delivery: "Never introduced in Assembly",
      status: "FAILED",
    },
    {
      promise: "End VIP culture",
      delivery: "Failed - Raman Arora had 12 gunmen",
      status: "FAILED",
    },
  ],
  governanceRecord: {
    freeElectricity: {
      delivered: true,
      scheme: "300 units free monthly",
      cost: "Rs 6,500 crore per year",
      sustainability: "Contributing to state's fiscal crisis (debt ~Rs 4.5 lakh crore)",
    },
    mohallaClinics: {
      established: 881,
      status: "Built but understaffed",
      specialistVacancies: "49% of specialist doctor posts vacant in government hospitals",
    },
    drugCrisis: {
      ooatClinics: "Expanded across Punjab",
      enforcement: "8,344 FIRs, 14,734 arrests, 586 kg heroin seized",
      status: "UNCHANGED despite increased enforcement",
    },
    lawAndOrder: {
      encounters: "Multiple encounter deaths of alleged gangsters",
      gangsterism: "WORSENED - July 2025 businessman shot dead, December 2025 kabaddi athlete killed",
      status: "Crisis - 24 grenade attacks on police installations since Sep 2024",
    },
  },
  leaders: [
    {
      name: "Bhagwant Mann",
      position: "Chief Minister",
      background: "Comedian/actor, MP from Sangrur 2014, 2019",
      strengths: ["Common man image", "Punjabi cultural connect", "Youth appeal"],
      vulnerabilities: ["Limited administrative experience", "Subordinate to Delhi leadership"],
    },
    {
      name: "Harpal Singh Cheema",
      position: "Finance Minister",
      background: "Former SAD member, agricultural community connections",
    },
  ],
};

// ==========================================
// SAD HISTORY DATA (from b15)
// ==========================================

export const sadHistoryReport: SADHistoryReport = {
  reportDate: "20 May 2026",
  origins: {
    movementYear: 1920,
    sgpcFormation: 1920,
    founders: ["Teja Singh Samundri", "S. Avit Singh", "S. Santokh Singh"],
    purpose: "Gurdwara reform movement combined religious purification with political organization",
  },
  governancePeriods: [
    {
      period: "1977-1980",
      chiefMinister: "Giani Zail Singh",
      highlights: ["First Akali government post-independence", "Managed communal harmony during Akali agitation"],
    },
    {
      period: "1997-2002",
      chiefMinister: "Parkash Singh Badal",
      highlights: ["Infrastructure development", "BJP alliance maintained", "Allegations of corruption"],
    },
    {
      period: "2007-2012",
      chiefMinister: "Parkash Singh Badal",
      highlights: ["Major infrastructure projects", "Sukhbir Singh Badal as Deputy Chief Minister"],
      controversies: ["2010-2011 unflodded Sikh protests", "Perceived authoritarian governance"],
    },
    {
      period: "2012-2017",
      chiefMinister: "Parkash Singh Badal",
      highlights: ["Highway expansions", "Sand mining controversies"],
      controversies: ["Extreme anti-incumbency", "Perceived looting of Punjab resources"],
    },
  ],
  alliance: {
    partner: "BJP",
    duration: "1996-2020 (~25 years)",
    status: "collapsed",
    endDate: "2020",
    reason: "Farm laws controversy - Harsimrat Kaur Badal resignation, formal NDA exit",
  },
  collapse2022: {
    seats: 3,
    voteShare: "18%",
    reasons: [
      "Bargari and Kotkapura sacrilege incidents (2015)",
      "Farm laws protest - BJP alliance cost rural support",
      "Severe anti-incumbency from corruption allegations",
      "Sukhbir Badal's combative campaign style",
      "AAP emergence as anti-incumbent vehicle",
    ],
  },
  leadership: [
    {
      name: "Parkash Singh Badal",
      position: "Former Chief Minister",
      status: "95+ years old, declining health",
    },
    {
      name: "Sukhbir Singh Badal",
      position: "Party President",
      status: "De facto leader",
      notes: "Controversial - corruption allegations, sand mining links",
    },
    {
      name: "Harsimrat Kaur Badal",
      position: "Former Union Minister",
      status: "Resigned over farm laws",
    },
  ],
  keyIssues: [
    "Bargari sacrilege (2015) - desecration of Guru Granth Sahib",
    "Kotkapura police firing - killed several Sikhs protesting sacrilege",
    "Farm laws support (2020) - broke with rural Sikh base",
    "BJP alliance cost Panthic credibility",
  ],
};

// ==========================================
// BJP HISTORY DATA (from b15)
// ==========================================

export const bjpHistoryReport: BJPHistoryReport = {
  reportDate: "20 May 2026",
  limitedBase: {
    urbanHindu: "Consistent support in Ludhiana, Jalandhar, Amritsar, Patiala",
    borderAreas: "Limited support among refugee populations near Pakistan border",
    merchantCommunity: "Business and trader community support in cities",
  },
  allianceHistory: {
    partner: "SAD",
    startYear: 1996,
    endYear: 2020,
    seatSharing: "SAD ~70-80 seats, BJP ~35-45 seats",
  },
  performance2022: {
    seats: 2,
    voteShare: 6.6,
    soloRun: true,
    mlAsElected: "Urban constituencies only",
  },
  currentStatus: {
    statePresident: "Sanjay Tandon [NEEDS VERIFICATION]",
    assemblySeats: 2,
    lokSabhaSeats: 2,
    soloStatus: "Confirmed - attempting to rebuild organization",
  },
  rssConnection:
    "RSS Pracharaks provide organizational discipline; RSS historically struggled to organize among Sikh communities due to separate religious identity",
};

// ==========================================
// COMPETITIVE INTELLIGENCE DATA (from b16)
// ==========================================

export const competitiveIntelligenceReport: CompetitiveIntelligenceReport = {
  reportDate: "20 May 2026",
  swot: [
    {
      dimension: "strengths",
      items: [
        "Established booth-level organization in Malwa (69 seats)",
        "Brand recognition and anti-corruption positioning",
        "Pre-existing vote banks among Jat Sikh landlords in Malwa, Valmiki in Doaba",
        "Coalition partnerships with smaller parties",
      ],
    },
    {
      dimension: "weaknesses",
      items: [
        "2022 assembly election worst in decades (18 seats)",
        "Internal factionalism between leadership factions",
        "Limited youth outreach vs AAP's organizational penetration",
        "Weaker digital/media presence vs AAP",
        "Anti-incumbency against sitting MLAs in winnable seats",
      ],
    },
    {
      dimension: "opportunities",
      items: [
        "AAP's 5-year governance failures creating disillusionment",
        "Drug abuse crisis not adequately addressed",
        "Farmer distress continuing despite state intervention",
        "Potential SAD-BSP realignment creating vote transfer opportunities",
        "Economic migration creating returning migrant voter concerns",
      ],
    },
    {
      dimension: "threats",
      items: [
        "AAP's deep penetration in Malwa through booth-level organization",
        "Potential Congress vote consolidation toward AAP in anti-BJP sentiment",
        "SAD's continued consolidation in traditional strongholds",
        "BJP's limited but potentially decisive role through adjustment deals",
      ],
    },
  ],
  pestle: [
    {
      category: "Political",
      factors: [
        "State-level party fragmentation (Congress, AAP, SAD, BJP, BSP)",
        "Central government alignment effects on state voting",
        "Caste-based voting patterns requiring coalition management",
        "Regional party state rights narrative resonating in Punjab",
      ],
    },
    {
      category: "Economic",
      factors: [
        "Farm debt crisis impacting rural voter behavior",
        "Unemployment rates among educated youth (Punjab's higher literacy)",
        "Remittance economy from overseas Punjabis (NRI voting impact)",
        "Small business distress from large retail competition",
      ],
    },
    {
      category: "Social",
      factors: [
        "Caste composition varies 20-45% SC population by constituency",
        "Religious community boundaries (Sikh majority in Malwa/Majha, more Hindu in border areas)",
        "Dera influence zones (Sacha Sauda in Malwa, Radha Soami in Doaba)",
        "Youth bulge (18-35 demographic ~40% of electorate)",
      ],
    },
    {
      category: "Technological",
      factors: [
        "Social media penetration affecting campaign reach",
        "WhatsApp-based voter contact and mobilization",
        "Digital payment systems enabling targeted welfare delivery",
        "Mobile phone saturation affecting polling patterns",
      ],
    },
    {
      category: "Legal",
      factors: [
        "Election symbol allocation rules",
        "Anti-defection law implications for coalition negotiations",
        "Reservation quota stability affecting SC/ST constituency dynamics",
        "Criminalization of politics provisions affecting candidate selection",
      ],
    },
    {
      category: "Environmental",
      factors: [
        "Stubble burning restrictions creating farmer frustration",
        "Groundwater depletion concerns in central Punjab",
        "SYL canal dispute with Haryana creating inter-state dimensions",
        "Agricultural sustainability concerns affecting rural voting",
      ],
    },
  ],
  vulnerabilities: [
    {
      type: "Marginal Seat Vulnerability",
      description: "Congress's 18 seats largely in narrow margin category",
      seats: 18,
    },
    {
      type: "Caste Combination Vulnerability",
      description: "Target community 15-30% of electorate (swing zone)",
    },
    {
      type: "Tactical Vulnerability",
      description: "Three-cornered contests vs direct Congress-AAP binaries",
    },
  ],
  competitorProfiles: [
    {
      party: "AAP",
      strengths: [
        "Booth-level organization built during 2014-2022 anti-Congress mobilization",
        "Strong social media presence, particularly among urban youth",
        "Crowdfunding small donations; limited corporate backing",
      ],
      weaknesses: [
        "Governance delivery failures (drugs, health infrastructure, law and order)",
        "Mann as electoral anchor but also liability",
      ],
      morphology: "Erupted from anti-corruption movement; now established regional machine",
      leadership: "Bhagwant Mann (Chief Minister)",
      digitalFootprint: "Strong - 200-300 core volunteers, 500+ WhatsApp groups",
      financial: "Crowdfunding; limited corporate backing",
    },
    {
      party: "SAD",
      strengths: [
        "Traditional Jat Sikh agrarian community foundation in Malwa",
        "Extensive organizational infrastructure through gurdwara networks",
      ],
      weaknesses: [
        "BJP coalition alienating core voters; 2022 wipeout",
        "Family dynasty controlling party",
      ],
      morphology: "Caste-classic regional agrarian party with feudal leadership structure",
      leadership: "Sukhbir Singh Badal as patriarch",
      financial: "Agricultural business connections, NRI remittances",
    },
    {
      party: "BJP",
      strengths: [
        "Central government halo effect",
        "Limited but loyal core in urban areas",
      ],
      weaknesses: [
        "Historically weak in Punjab (2 seats in 2022)",
        "Anti-Sikh past overhang",
      ],
      morphology: "Central government sponsored presence; lacks indigenous leadership",
      leadership: "Sanjay Tandon (State President)",
      financial: "Central funding; corporate connections through central linkages",
    },
    {
      party: "BSP",
      strengths: [
        "SC community organization, particularly among Mazhabi Sikh and Valmiki",
      ],
      weaknesses: [
        "No independent electoral viability in Punjab",
        "2022 alliance with SAD failed",
      ],
      morphology: "Caste-umbrella movement without strong local leadership",
      leadership: "No significant local leadership mentioned",
    },
  ],
  voteTransferEfficiency: [
    {
      from: "SAD",
      to: "Congress",
      efficiencyRate: "~35-40%",
      notes: "Sukhbir Singh Badal's appeal to supporters",
    },
    {
      from: "Congress",
      to: "AAP",
      efficiencyRate: "~25-30%",
      notes: "Anti-incumbency transfer to newer party",
    },
    {
      from: "AAP",
      to: "Congress",
      efficiencyRate: "~15-20%",
      notes: "Limited reverse transfer from AAP to Congress",
    },
    {
      from: "BSP",
      to: "Congress",
      efficiencyRate: "~40-50%",
      notes: "When BSP withdraws and backs Congress",
    },
    {
      from: "NOTA",
      to: "Congress",
      efficiencyRate: "Variable (1-3%)",
      notes: "Usually reverts to anti-establishment",
    },
    {
      from: "BJP",
      to: "Congress",
      efficiencyRate: "~10-15%",
      notes: "Limited crossover in Punjab's religious context",
    },
  ],
  seatSharingFactors: [
    {
      factor: "Winnability Assessment",
      description: "Each seat scored on historical vote share, caste match, organizational strength, anti-incumbency, funding capacity",
      formula: "Score = Weighted sum of factors → Winnability Index (0-1 scale)",
    },
    {
      factor: "Complementarity Score",
      description:
        "Measures how much seat-sharing fills gaps in each party's coverage",
      formula: "Congress_Complementarity = (Congress_winnable_seats - Total_seats) / Total_seats",
    },
    {
      factor: "Legacy Preservation",
      description:
        "Parties claim incumbent seats, stronghold seats (won 3+ consecutive elections), founder/leader seats",
    },
    {
      factor: "Negotiation Power",
      description:
        "Derived from total seats contested, win rate, alternative coalition options, central leadership cohesion",
    },
  ],
  allianceScenarios: [
    {
      scenario: "AAP Dominance (Status Quo 2022)",
      seats: "AAP 90+, Congress 80+, SAD 30+",
      effect: "Three-cornered contests benefit AAP in urban and semi-urban seats",
      probability: "HIGH if no alliance changes",
    },
    {
      scenario: "Congress-SAD Alliance",
      seats: "Congress 80, SAD 30, BSP backing in SC seats",
      effect: "Eliminates SAD-Congress vote splitting in 20-30 seats",
      marginalSeats: ["Ferozepur", "Sangrur", "Bathinda"],
      probability: "MEDIUM - requires SAD to abandon BJP orientation",
    },
    {
      scenario: "Congress-AAP Understanding",
      seats: "Would require major territory cession",
      effect: "AAP concede Malwa to Congress; Congress concede urban seats to AAP",
      probability: "LOW - both parties see themselves as primary alternative",
    },
    {
      scenario: "BJP-SAD Alliance Restoration",
      seats: "Lok Sabha-style seat adjustment",
      effect: "Would split Jat Sikh votes, potentially letting AAP win Malwa",
      probability: "LOW - SAD learned from 2022 wipeout",
    },
  ],
  gameTheoryModels: [
    {
      model: "Spatial Competition (Hotelling-Downs)",
      application:
        "Parties position along ideological dimension. Congress challenge: occupying center while AAP (left-populist) and SAD (regional-conservative) occupy flanks",
      formula: "Hotelling's Law of minimal differentiation",
    },
    {
      model: "Entry Game",
      application:
        "Third-party entry (SAD) affects outcomes when base vote exceeds 20%",
      formula: "Expected payoff = (Probability of winning) × (Seat value) - (Entry cost)",
    },
    {
      model: "Coordination Game",
      application:
        "Voters face coordination problem in multi-party contests - strategic vs expressive voting",
    },
    {
      model: "Coalition Formation Game",
      application:
        "Alliance forms if Net_coalition_value > Sum of individual pursuit values",
      formula:
        "Net coalition value = Sum of (Seats_contested × Win_probability) - Alliance_costs",
    },
  ],
  historicalElectionResults: [
    { year: 2012, congress: 46, aap: 0, sad: 14, bjp: 12, bsp: 0, others: 3 },
    { year: 2017, congress: 77, aap: 20, sad: 12, bjp: 3, bsp: 1, others: 4 },
    { year: 2022, congress: 18, aap: 92, sad: 3, bjp: 2, bsp: 0, others: 2 },
  ],
};

// ==========================================
// FARMERS PROTEST DATA (from b27)
// ==========================================

export const farmersProtestReport: FarmersProtestReport = {
  reportDate: "20 May 2026",
  farmLaws: [
    {
      name: "Farmers' Produce Trade and Commerce Act, 2020",
      year: 2020,
      description:
        "Permitted trade of agricultural produce outside APMC mandis",
      coreGrievances: [
        "Fear that laws would eventually dismantle APMC mandis and erode MSP system",
        "No statutory provision making MSP mandatory for all buyers",
        "Concerns that contract farming favored corporations over small farmers",
      ],
    },
    {
      name: "Farmers (Empowerment and Protection) Agreement on Price Assurance and Farm Services Act, 2020",
      year: 2020,
      description: "Framework for contract farming agreements",
      coreGrievances: [
        "Pre-determined pricing could exploit farmers",
        "Large corporations would have advantage over small farmers",
        "Lack of meaningful consultation with farmer unions",
      ],
    },
    {
      name: "Essential Commodities (Amendment) Act, 2020",
      year: 2020,
      description: "Removed cereals, pulses, onions, potatoes from essential commodities list",
      coreGrievances: [
        "Stock limits removed for large traders",
        "Export restrictions relaxed",
        "Could lead to price manipulation",
      ],
    },
  ],
  keyUnions: [
    {
      name: "BKU-Ekta Ugrahan",
      base: "Largest; millions of members",
      politicalAlignment: "Neutral/protest-focused; historically Congress",
      currentPosition:
        "Strong independent mobilization identity; maintains distance from all parties",
    },
    {
      name: "Kirti Kisan Union",
      base: "Punjab; concentrated in Doaba",
      politicalAlignment: "Left/syndicalist",
      currentPosition: "Strong ties to CPI(M); opposition to corporate farming",
    },
    {
      name: "Punjab Pradesh Kisan Union",
      base: "Punjab state-level",
      politicalAlignment: "Congress-aligned",
      currentPosition:
        "Historically close to Congress; provides electoral support",
    },
    {
      name: "Doaba Kisan Union",
      base: "Doaba region",
      politicalAlignment: "Variable",
      currentPosition: "Active in region-specific issues",
    },
  ],
  bkuFactions: [
    {
      name: "BKU-Ekta Ugrahan",
      leader: "Joginder Singh Ugrahan",
      orientation: "Largest faction, led 2020-2021 Delhi agitation",
      notes: "Maintains distance from electoral politics while exercising political influence",
    },
    {
      name: "BKU-Krantikari",
      leader: "Surinder Maikini",
      orientation: "More militant, socialist",
      notes: "Active in Haryana and South Punjab",
    },
    {
      name: "BKU-Ekta (Dakoda)",
      leader: "Unknown",
      orientation: "Smaller faction",
      notes: "Less prominent in recent protests",
    },
  ],
  protestTimeline: [
    { date: "June 2020", event: "Three ordinances promulgated via ordinance route" },
    {
      date: "September 2020",
      event: "Ordinances converted into Acts; farmer protests begin",
    },
    {
      date: "August-October 2020",
      event: "Protests intensify; tractor parades organized in Punjab",
    },
    {
      date: "November 25, 2020",
      event: "Delhi border agitation begins; farmers march to Delhi",
    },
    {
      date: "November 26, 2020",
      event: "Delhi borders (Tikri, Ghazipur, Singhu) sealed with police barricades",
    },
    {
      date: "December 2020",
      event: "Multiple rounds of talks between farmer unions and Union Ministers collapse",
    },
    { date: "January 2021", event: "Supreme Court stays implementation of laws; sets up committee" },
    { date: "January 26, 2021", event: "Republic Day tractor parade turns violent at Red Fort" },
    {
      date: "March-April 2021",
      event: "Farmer unions intensify sit-ins; COVID second wave devastates India",
    },
    { date: "November 19, 2021", event: "PM Modi announces repeal of all three farm laws" },
    {
      date: "November 29, 2021",
      event: "Parliament passes Farm Laws Repeal Act, 2021",
    },
  ],
  allianceBreakup: {
    party: "SAD",
    date: "September 2020",
    reason: "SAD withdrew from BJP-led union ministry over farm laws",
    impact:
      "Major factor in SAD's catastrophic 2022 electoral performance (only 3 seats, down from 18 in 2017)",
  },
  mspStatus: {
    legalGuarantee: "NOT ENACTED",
    currentStatus:
      "Central government maintains MSP as administrative mechanism; cannot be made legally enforceable without distorting markets",
    coverage:
      "MSP effectively covers 23-25 crops; wheat and rice primary procurement crops",
    procurementData:
      "FCI procures 70-75% of wheat crop in Punjab at MSP; paddy procurement 85-90%",
  },
  stubbleManagement: {
    problem:
      "Combine harvesting leaves 8-12 inches of stubble that cannot be grazed by cattle",
    cost: "In-situ stubble management costs Rs 1,500-2,500 per acre per season",
    subsidy: "State and central schemes provide 50-80% subsidies on in-situ machines",
    environmentalPenalty: "Rs 5,000-15,000 per instance for stubble burning",
  },
  farmerVoteDynamics: {
    ruralPopulation: "~65-68% of total electorate",
    farmHouseholds: "~18-20 lakh (landowning families) plus agricultural laborers",
    influencedVotes: "40-50% of total electorate",
    votingFactors: [
      "Caste/community affiliation",
      "Regional identity (Malwa vs Majha vs Doaba)",
      "Perceived party concern for agriculture",
      "Incumbent performance on farm issues",
      "Local influential figures' recommendations",
    ],
    partyAppeal: {
      congress:
        "Historical dominance in rural politics until 1990s; rebuilding trust post-Amarinder",
      aap: "2022 massive mandate; MSP promise unfulfilled; governance failures",
      sad: "Traditional agrarian identity; damaged by farm laws protest",
    },
  },
  policyPromises2027: [
    {
      promise: "MSP Guarantee Act",
      feasibility: "LOW - requires central cooperation; constitutional issues",
      challenges: [
        "Entry 33 of Concurrent List gives Parliament overriding power",
        "State act would face legal challenge",
        "Credibility trap - promise made but cannot be kept",
      ],
    },
    {
      promise: "Debt Waiver",
      feasibility: "MEDIUM - fiscal capacity constraints (~Rs 3 lakh crore state debt)",
      challenges: [
        "Punjab's state debt among India's highest",
        "Debt waiver primarily helps medium/large farmers",
        "Targeting challenges and political manipulation",
      ],
    },
    {
      promise: "Stubble Management",
      feasibility: "MODERATE - achievable within state budgets with central assistance",
      challenges: [
        "100% subsidy for small/marginal farmers",
        "Stubble collection centers and biomass plants",
      ],
    },
    {
      promise: "Crop Diversification",
      feasibility: "DIFFICULT - without guaranteed markets, farmers resist switching from MSP paddy",
      challenges: [
        "Incentivize basmati with floor price mechanisms",
        "Crop insurance for non-traditional crops",
        "Processing infrastructure for fruits/vegetables",
      ],
    },
  ],
};

// ==========================================
// DERA POLITICS DATA (from b33)
// ==========================================

export const deraPoliticsReport: DeraPoliticsReport = {
  reportDate: "20 May 2026",
  deraTypes: ["Sikh-derived", "Hindu-derived", "Syncretic"],
  socialMechanisms: [
    {
      mechanism: "Charna (Initiation)",
      description: "Formal initiation ceremony creating lifelong spiritual bond with Dera chief",
    },
    {
      mechanism: "Dasondh (Tenth)",
      description: "Traditional 10% income contribution to Dera creating economic interdependence",
    },
    {
      mechanism: "Seva (Service)",
      description: "Compulsory volunteer labor for Dera activities building collective identity",
    },
    {
      mechanism: "Guru-Sishta Parampara",
      description: "Guru-disciple relationship transcending normal social hierarchies",
    },
  ],
  organizationalInfrastructure: [
    { component: "Dera Headquarters", description: "Large campuses with accommodation, langar, schools, healthcare" },
    { component: "Branches (Chheja)", description: "Distributed across villages and urban areas, often hundreds per Dera" },
    { component: "Communication Networks", description: "WhatsApp groups, dedicated apps, SMS lists for rapid mobilization" },
    { component: "Youth Wings", description: "Organized youth wings for election-time activity" },
    { component: "Women's Wings", description: "Female mobilization for booth-level work" },
    { component: "Dera Media", description: "YouTube channels, Facebook pages, WhatsApp statuses" },
  ],
  voterContactMethods: [
    { method: "Booth-Level Mapping", description: "Each Dera branch knows exact followers at each polling booth" },
    { method: "Transport Logistics", description: "Free transport for followers to polling stations" },
    { method: "Voter ID Assistance", description: "Help followers navigate voter registration and ID processes" },
    { method: "Paid Entry (Supari)", description: "Professional mobilization for a price" },
    { method: "Social Pressure Campaigns", description: "Public declaration of voting intentions at Dera functions" },
    { method: "Post-Voting Verification", description: "Followers required to show inked finger as proof of voting" },
  ],
  followerCategories: [
    {
      category: "Hardcore Loyalists",
      percentage: "30-40%",
      votingBehavior: "Vote as directed, no deliberation",
    },
    {
      category: "Conditional Loyalists",
      percentage: "25-35%",
      votingBehavior: "Follow Dera directive unless core interests threatened",
    },
    {
      category: "Soft Followers",
      percentage: "20-30%",
      votingBehavior: "Influenced by Dera but make independent decisions",
    },
    {
      category: "Nominal Followers",
      percentage: "5-15%",
      votingBehavior: "Database followers, occasional attendees, vote independently",
    },
  ],
  regionalPatterns: [
    {
      region: "Malwa",
      seats: 69,
      keyDeras: ["Sacha Sauda", "Sachkhand Ballan", "Sant Garib Dass", "Baba Ranjit Singh"],
      notes: "Highest Dera concentration in Punjab; Deras fill vacuum left by declining traditional institutions",
    },
    {
      region: "Majha",
      seats: 27,
      keyDeras: ["Moderate Dera influence"],
      notes: "More polarized between traditional Sikh institutions and deras; border migration disrupted some networks",
    },
    {
      region: "Doaba",
      seats: 23,
      keyDeras: ["Dera Sant Charat Singh (Jalandhar)"],
      notes: "Lower Dera influence; higher NRI voter concentration reduces Dera effectiveness",
    },
  ],
  constituencyLinkages: [
    {
      constituency: "Moga",
      dera: "Dera Sachkhand Ballan",
      influence: "HIGH",
      followerBloc: "60-70% followers vote cohesively",
    },
    {
      constituency: "Sirsa",
      dera: "Dera Sacha Sauda",
      influence: "HIGH",
      followerBloc: "Dominant force in rural seat",
    },
    {
      constituency: "Batala",
      dera: "Dera Sant Garib Dass",
      influence: "HIGH",
      followerBloc: "Substantial voter bloc",
    },
    {
      constituency: "Nawanshahr",
      dera: "Dera Radha Soami Beas",
      influence: "HIGH",
      followerBloc: "Organized voting",
    },
  ],
  casteMappings: [
    { caste: "Mazhabi Sikh", primaryDera: "Dera Sacha Sauda, Dera Sant Garib Dass" },
    { caste: "Ravidasia", primaryDera: "Dera Baba Roop Chand" },
    { caste: "Ad-Dharmi", primaryDera: "Multiple smaller deras", secondary: "Congress" },
    { caste: "Jat Sikh", primaryDera: "Radha Soami, Sachkhand Ballan", secondary: "Traditional" },
    { caste: "OBC Hindu", primaryDera: "Dera Sacha Sauda" },
  ],
  supariSystem: {
    definition:
      "Practice where political parties or candidates pay deras for guaranteed voter turnout and voting patterns",
    paymentTypes: [
      { type: "Cash Payment", form: "Direct monetary payment", amount: "₹5-25 lakhs per assembly seat [NEEDS VERIFICATION]" },
      { type: "Ticket Provision", form: "Nomination of Dera-associated candidate", amount: "Party ticket value" },
      { type: "Development Projects", form: "Infrastructure in Dera's area", amount: "₹50 lakhs - ₹5 crores" },
      { type: "Post-Election Positions", form: "Board seats, corporation posts", amount: "Per position value" },
      { type: "Favor Trading", form: "Policy considerations, regulatory approvals", amount: "Context-dependent" },
    ],
    marketDynamics: [
      "Multiple deras may operate in same constituency",
      "Competition between deras can drive prices up",
      "Deras with loyal followers command premium prices",
      "Small deras offer cheaper rates but less reliable delivery",
    ],
    legalStatus:
      "Dera as social institution is legal; vote buying/vote trading is illegal but difficult to prosecute",
  },
  majorDeras: [
    {
      name: "Dera Sacha Sauda",
      headquarters: "Sirsa, Haryana border",
      leader: "Gurmeet Ram Rahim Singh (until 2017 CBI case) [NEEDS VERIFICATION post-2017]",
      followerBase: "60-80 lakh followers (nationwide); Punjab portion ~15-20 lakh",
      casteComposition: "Primarily Mazhabi Sikh, Valmiki, Bazigar; also some Hindu OBC",
      politicalAlignment: "Historically Congress; demonstrated capacity for independent candidate support",
      keySeats: "Voting influence in 15-20 Punjab assembly seats",
    },
    {
      name: "Dera Sachkhand Ballan",
      headquarters: "Jalandhar, Doaba",
      leader: "Maharaj Jagjit Singh lineage [NEEDS VERIFICATION]",
      followerBase: "10-15 lakh followers",
      casteComposition: "Predominantly Ravidasia, Ad-Dharmi, some Mazhabi",
      politicalAlignment: "Congress-leaning; pragmatic engagement with whoever forms government",
      keySeats: "Jalandhar Cantonment, Jalandhar North, Kartarpur, Nakodar, Moga",
    },
    {
      name: "Dera Sant Garib Dass",
      headquarters: "Moga, Malwa",
      leader: "Maharaj Manoj Singh [NEEDS VERIFICATION]",
      followerBase: "5-10 lakh followers",
      casteComposition: "Mazhabi Sikh, Valmiki",
      politicalAlignment: "Variable; follows senior family guidance",
      keySeats: "Moga, Nihal Singh Wala, Budhlada",
    },
    {
      name: "Radha Soami Satsang Beas",
      headquarters: "Beas, Doaba",
      leader: "Maharaj Gurinder Singh Dhillon",
      followerBase: "50+ lakh followers (nationwide); 8-12 lakh in Punjab",
      casteComposition: "Cross-caste, including upper castes, business communities",
      politicalAlignment: "Institutionally neutral; individual followers vary",
      keySeats: "Subtle influence through member socioeconomic status",
    },
  ],
  engagementFramework: [
    {
      phase: "12-18 months before election",
      timeline: "Booking Phase",
      action: "Dera chiefs begin signaled political negotiations; Supari negotiations commence",
    },
    {
      phase: "6-12 months before",
      timeline: "Confirmation Phase",
      action: "Dera chief's preference publicly known; machinery prepared; followers receive coded messages",
    },
    {
      phase: "3-6 months before",
      timeline: "Formal Phase",
      action: "Formal/endorsement announced; booth-level deployment plans prepared",
    },
    {
      phase: "Election Week",
      timeline: "Delivery Phase",
      action: "Maximum Dera mobilization; supervised voting; Supari payments finalized",
    },
  ],
  congressStrategy: {
    advantages: [
      "Historic relationship with Mazhabi/Ravidasia deras",
      "Better positioned than BJP/SAD to offer inter-caste coalition approach",
      "Congress's social justice framework aligns with many Dera values",
    ],
    risks: [
      "AAP aggressively courting Dera support",
      "Transactional approach erodes trust over time",
      "Dera supari creates dependency rather than genuine alliance",
    ],
    negotiationTips: [
      "Approach with respect to spiritual authority",
      "Senior leaders should lead high-level Dera meetings",
      "Establish relationship 18+ months before election",
      "Avoid supari-heavy approach - seek genuine endorsement",
    ],
  },
};

// ==========================================
// PANTHIC POLITICS DATA (from b29)
// ==========================================

export const panthicPoliticsReport: PanthicPoliticsReport = {
  reportDate: "20 May 2026",
  historicalTrajectory: [
    {
      period: "1920s-1947",
      keyEvents: [
        "Akali movement for gurdwara reform (1920)",
        "Nankana Sahib massacre (1921)",
        "SGPC formation (1920)",
        "Partition devastated Punjab demographics",
      ],
    },
    {
      period: "1950s-1966",
      keyEvents: [
        "Punjabi Suba movement",
        "1966 tripartite agreement - creation of Haryana, Himachal Pradesh, Punjab",
      ],
    },
    {
      period: "1973-1984",
      keyEvents: [
        "Anandpur Sahib Resolution (1973)",
        "Operation Blue Star (June 1984)",
        "Indira Gandhi assassination",
        "1984 anti-Sikh riots (8,000-17,000 killed)",
      ],
    },
    {
      period: "1990s-2010s",
      keyEvents: [
        "1992 Assembly elections with 87/117 seats for Congress",
        "BJP-SAD alliance (1996 onwards)",
        "AAP's stunning debut (2014)",
      ],
    },
    {
      period: "2014-Present",
      keyEvents: [
        "AAP wins 4/13 Lok Sabha seats (2014)",
        "AAP forms government with 78/117 seats (2017)",
        "Farm laws protest (2020-2021)",
        "AAP wins 92/117 seats (2022)",
      ],
    },
  ],
  sgpcElections: [
    {
      year: 2011,
      winner: "Akali Dal (SAD) + allies",
      seats: 140,
      significance: "Demonstrated complete Akali dominance of Panthic politics",
    },
    {
      year: 2015,
      winner: "SAD + Congress (post-poll alliance)",
      seats: 73,
      significance: "Unexpected Congress performance; broke Akali monopoly; AAP failed to break through",
    },
    {
      year: 2019,
      winner: "SAD + BSP alliance",
      seats: 83,
      significance: "Maintained Akali dominance despite AAP's 2017 Assembly victory",
    },
    {
      year: 2023,
      winner: "SAD",
      seats: 147,
      significance: "AAP emerged as main opposition in SGPC; Congress decimation confirmed",
    },
  ],
  sgpcStructure: {
    electedMembers: 140,
    nominatedMembers: 30,
    annualBudget: "Exceeding Rs 1,000 crores",
  },
  panthicTriggers: [
    {
      trigger: "Religious site preservation or threats",
      description: "Desecration incidents activate Panthic voting",
      activation: "Immediate, emotion-driven",
    },
    {
      trigger: "Perceived external threats to Sikh community",
      description: "1984 riots, farm laws 2020",
      activation: "High salience, durable effect",
    },
    {
      trigger: "SGPC elections and gurdwara management",
      description: "Institutional control disputes",
      activation: "Medium term, institutional",
    },
    {
      trigger: "Commemoration of historical events",
      description: "Blue Star, 1984 anniversaries",
      activation: "Periodic but consistent",
    },
  ],
  institutionalRoles: [
    {
      institution: "SGPC",
      role: "Gurdwara management, religious institutions",
      politicalSignificance:
        "Controls significant finances, employment; SGPC election serves as primary indicator of Panthic sentiment",
    },
    {
      institution: "Akal Takht",
      role: "Highest temporal authority for Sikhs",
      politicalSignificance:
        "Jathedar pronouncements carry moral and political weight",
    },
    {
      institution: "Shiromani Akali Dal",
      role: "Primary Panthic political party",
      politicalSignificance: "Monopoly on formal Panthic political representation",
    },
    {
      institution: "Gurdwaras",
      role: "Community centers, electoral mobilization points",
      politicalSignificance:
        "Physical infrastructure for political organizing",
    },
  ],
  akaliPanthicStrategy: [
    {
      strategy: "Institutional Monopoly",
      description:
        "Founders built SGPC creating organic links between party and religious institution",
    },
    {
      strategy: "Symbolic Capital",
      description:
        "Leaders with Punjabi-speaking, rural, agrarian background; familial ties to religious leadership",
    },
    {
      strategy: "Issue Ownership",
      description:
        "River water sharing, agricultural sustainability, drug trafficking, Punjabi language preservation",
    },
    {
      strategy: "BJP Alliance Complication",
      description:
        "Farm laws protest (2020) - Harsimrat Kaur Badal resignation, NDA exit - demonstrated cost of Panthic positioning failures",
    },
  ],
  congressDilemma: {
    problem:
      "Congress's 1984 legacy creates permanent credibility deficit among Sikh voters",
    mitigationStrategies: [
      "Symbolic gestures (AICC resolution expressing 'deep regret', 1985)",
      "Regular commemoration of 1984 victims",
      "Elevation of Sikh leaders to party positions",
      "Targeted CM candidate appointments (Amarinder Singh, Charanjit Singh Channi)",
    ],
    coreSikhVote:
      "Congress retains baseline ~15-20% of Sikh voters from historical legacy and anti-Akali sentiment",
  },
  aapDisruption: {
    innovation:
      "AAP's entry fundamentally disrupted Panthic-secular binary by combining development and identity",
    developmentPlusIdentity: [
      "Anti-corruption core promise",
      "Good governance (healthcare, education, electricity, water)",
      "Agricultural distress solutions (MSP guarantee, debt relief)",
      "Panthic sensitivity embedded in broader humanist framework",
    ],
    organizationalReach: [
      "Volunteer networks from anti-corruption movement roots",
      "Social media presence (youth-heavy, urban Sikh resonance)",
      "Gurdwara outreach (participation in religious events)",
      "Farmer connection through agricultural policy advocacy",
    ],
  },
};

// ==========================================
// AAP ATTACK SURFACE DATA (from g19)
// ==========================================

export const aapAttackSurfaceReport: AAPAttackSurfaceReport = {
  reportDate: "20 May 2026",
  brokenPromises: [
    {
      promise: "Jobs - 25 Lakh Jobs",
      originalPromise: "25 lakh jobs and 1.25 lakh government vacancies over five years",
      deliveryStatus: "FAILED (5.2%)",
      evidence: [
        "PLFS Data (Oct-Dec 2024): Youth unemployment at 14.9% - 4th highest in India",
        "Total jobs delivered: ~1.3 lakh claimed (-94.8%)",
        "38% of USA-deported illegal immigrants (332 on 3 flights) were from Punjab",
      ],
      gap: "-94.8%",
      attackLine:
        "Every Punjab family knows a young person who could not find work and had to leave",
    },
    {
      promise: "Women Stipend - Rs 1,000/Month",
      originalPromise: "Rs 1,000 per month to every adult woman",
      deliveryStatus: "DELIVERED 4 YEARS LATE",
      evidence: [
        "NDTV March 8, 2026: AAP fulfilled promise 4 years after polls",
        "Mann stated: 'I could have easily fulfilled the promise before the elections'",
        "Mann admitted they deliberately withheld benefit to avoid it expiring before election",
      ],
      attackLine:
        "AAP held Punjab's women hostage for four years. That is not a welfare scheme. That is a political ATM",
      quoteCard:
        "We had the money, we chose the timing. Four years of interest-free loans from Punjab's women",
    },
    {
      promise: "Drug-Free Punjab",
      originalPromise: "Tackle drug problem within months",
      deliveryStatus: "FAILED",
      evidence: [
        "ThePrint (May 20, 2024): Village Thetharke - 'All kinds of drugs are freely available'",
        "Governor (2026): 'Drug menace remains Punjab's biggest challenge'",
        "13-15 year-olds dying of drug addiction (documented in villages)",
        "8,344 FIRs, 14,734 arrests, 586 kg heroin seized - but trade continues",
      ],
      attackLine:
        "AAP promised to end it in months. Years later, drugs are still freely available",
    },
    {
      promise: "End Gangsterism",
      originalPromise: "Eliminate mafias - transport, sand, liquor, cable mafia",
      deliveryStatus: "WORSENED",
      evidence: [
        "July 8, 2025: Businessman Sanjay Verma shot dead in Abohar",
        "December 2025: Kabaddi athlete Kanwar Digvijay Singh shot dead",
        "January 2026: Nine murders in first week; AAP sarpanch shot dead at wedding",
        "24 grenade attacks on police installations since September 2024",
        "Police officers on gangster radar (May 2026)",
      ],
      attackLine:
        "AAP promised to eliminate the mafia. What they delivered was a government run by the mafia",
    },
    {
      promise: "MSP for 22 Crops",
      originalPromise: "MSP procurement for 22 crops beyond wheat and rice",
      deliveryStatus: "NOT DELIVERED",
      evidence: [
        "Farmers continue protests at Khanauri border demanding legal MSP guarantee",
        "January 2025: Punjab farmers held protests demanding MSP",
        "State government has no MSP scheme operational for the 22 crops",
      ],
      attackLine:
        "Not one Punjab farmer has received MSP for those crops. The farmers still protesting are the same farmers AAP promised to make debt-free",
    },
    {
      promise: "Jan Lokpal / Corruption-Free Punjab",
      originalPromise: "Punjab would be corruption-free under an effective Lokpal bill",
      deliveryStatus: "NEVER DELIVERED",
      evidence: [
        "Jan Lokpal bill never introduced in Punjab Assembly",
        "Two cabinet ministers resigned over corruption allegations",
        "Vigilance Bureau Chief suspended in driving license scam, then reinstated",
        "Raman Arora (Jalandhar Central MLA): Multiple Vigilance Bureau arrests",
        "Sanjeev Arora (Ludhiana MLA): ED arrest in money laundering case, May 2026",
      ],
      attackLine:
        "The men accused of corruption are now ruling Punjab. Jalandhar's MLA faces extortion charges. Ludhiana's minister is in ED custody",
    },
    {
      promise: "Food Security / NFSA",
      originalPromise: "Continue and improve food security under NFSA",
      deliveryStatus: "MISHANDLED",
      evidence: [
        "Door-to-door verification removed 10.77 lakh beneficiaries from NFSA",
        "Year-long disruption until cabinet reversal in January 2026",
        "Wheat replaced by wheat flour without proper communication",
        "Political targeting alleged - inclusion/exclusion influenced by political affiliation",
      ],
      attackLine:
        "AAP removed 10.77 lakh poor families from food security. That is not governance. That is a hunger tax on political dissent",
    },
    {
      promise: "End VIP Culture",
      originalPromise: "VIP culture will end",
      deliveryStatus: "FAILED",
      evidence: [
        "Jalandhar MLA Raman Arora had around a dozen gunmen - three times more than allowed",
        "Security withdrawn temporarily (May 2026) only after public outcry",
      ],
      attackLine:
        "AAP's first promise was to end VIP culture. AAP's first action was to give their leader three times the security allowed by law",
    },
    {
      promise: "Youth Immigration Check",
      originalPromise: "Create conditions to check Punjab's youth emigrating abroad",
      deliveryStatus: "FAILED",
      evidence: [
        "38% of USA-deported illegal immigrants (332 on 3 flights) from Punjab",
        "Youth unemployment at 14.9% (Oct-Dec 2024)",
        "Families exhausting savings to fund children's migration",
      ],
      attackLine:
        "AAP promised to make Punjab worth staying in. What they delivered was a state where young people sell their ancestral land to pay agents to get their children out",
    },
    {
      promise: "Free Electricity - Sustainable",
      originalPromise: "300 units free electricity",
      deliveryStatus: "DELIVERED BUT UNSUSTAINABLE",
      evidence: [
        "Scheme costs Rs 6,500 crore per year",
        "Contributing to state's fiscal crisis (debt potentially Rs 4.5 lakh crore by 2026-27)",
      ],
      attackLine:
        "Free electricity is popular. We are not going to take it away. But AAP bought votes with free electricity while pushing Punjab deeper into debt",
    },
    {
      promise: "Aam Aadmi Clinics",
      originalPromise: "881 clinics with quality healthcare",
      deliveryStatus: "PARTIALLY DELIVERED",
      evidence: [
        "881 clinics built but 49% of specialist doctor posts in government hospitals vacant",
        "Mukh Mantri Sehat Yojana covers only limited pre-approved packages with fixed caps",
      ],
      attackLine:
        "AAP built 881 clinics but could not staff them. You can get through the door. You cannot find a specialist inside",
    },
    {
      promise: "Anti-Corruption Body",
      originalPromise: "Jan Lokpal bill within first year",
      deliveryStatus: "NEVER INTRODUCED",
      evidence: [
        "No Jan Lokpal bill ever introduced in Punjab Assembly",
        "Two AAP ministers resigned over corruption charges",
        "Vigilance Bureau became subject of political interference allegations",
      ],
    },
  ],
  governanceFailures: [
    {
      sector: "Organized Crime and Gangsterism",
      assessment: "WORSENED significantly",
      incidents: [
        "July 8, 2025: Businessman Sanjay Verma shot dead in Abohar",
        "December 2025: Kabaddi athlete Kanwar Digvijay Singh shot dead",
        "January 2026: Nine murders in first week; AAP sarpanch shot dead at wedding",
        "February 2026: Lucky Oberoi killed; BJP leader Manoranjan Kalia attacked",
        "May 2026: Police officers themselves placed on gangster radar",
      ],
      statistics: [
        "24 grenade attacks on police installations since September 2024",
        "1,500 drone intrusions detected along 554-km Punjab-Pakistan border since 2019",
      ],
      congressAttackLine:
        "The families of the nine murdered in one week cannot. Crime is down on paper. Violence is up on the street",
    },
    {
      sector: "Drug Crisis",
      assessment: "UNCHANGED OR WORSENED despite enforcement",
      incidents: [
        "Village Thetharke (Dera Baba Nanak): 'All kinds of drugs freely available'",
        "Village Lakhnaur (Anandpur Sahib): peddlers operate openly",
        "13-15 year-olds dying of drug addiction (documented)",
      ],
      statistics: [
        "8,344 FIRs registered under anti-drug campaign",
        "14,734 arrests for drug-related offences",
        "586 kg heroin seized",
      ],
      congressAttackLine:
        "AAP increased enforcement. The drugs are still there. Arresting dealers does not stop the supply when Pakistan's ISI is using drones",
    },
    {
      sector: "Law and Order",
      assessment: "PERCEPTION CRISIS",
      incidents: [
        "High-profile daylight crimes on businessmen, politicians, sarpanches",
        "Frequent transfers publicly ordered by political leadership",
        "Public reprimands of police officers by politicians",
        "Attacks on police - 24 grenade attacks on installations",
      ],
      statistics: ["Punjab crime rate 227 per lakh vs national average 448 (DGP claim)"],
      congressAttackLine:
        "If you cannot protect a village sarpanch at a wedding, you cannot protect Punjab",
    },
    {
      sector: "Farmer Distress",
      assessment: "PERSISTENT - structural problems unresolved",
      incidents: [
        "Farm suicides still reported under AAP",
        "Sugarcane farmers facing delayed payments (Kotkapura, Muktsar)",
        "Cotton belt farmers report declining income",
        "Farmers continue protesting at Khanauri border (January 2025)",
      ],
      statistics: [
        "Groundwater falling in 82% of blocks",
        "Irrigation expanded from 26% to 78% (genuine achievement)",
        "Sugarcane price at Rs 416/quintal, highest in India (genuine achievement)",
      ],
      congressAttackLine:
        "AAP fixed some inputs. They did not fix the farming system. The suicides have not stopped",
    },
    {
      sector: "Healthcare",
      assessment: "PARTIALLY DELIVERED",
      incidents: [
        "881 Aam Aadmi Clinics built but referral system broken",
        "Mukh Mantri Sehat Yojana: Rs 10 lakh coverage sounds comprehensive but limited",
      ],
      statistics: [
        "49% of specialist doctor posts vacant in government hospitals",
        "984 principal posts vacant in Senior Secondary Schools (51% vacancy)",
        "One-third of headmaster positions unfilled",
      ],
      congressAttackLine:
        "881 clinics, but nearly half the specialist doctors' posts empty. You can build a clinic in every village. Without doctors, it is a building, not a hospital",
    },
  ],
  corruptionCases: [
    {
      minister: "Raman Arora",
      position: "Jalandhar Central MLA",
      caseType: "Extortion",
      date: "May 2025, September 2025",
      status: "Multiple Vigilance Bureau arrests",
      details: "His son involved in separate corruption case",
    },
    {
      minister: "Sanjeev Arora",
      position: "Ludhiana MLA, Industries Minister",
      caseType: "Money laundering",
      date: "May 2026",
      status: "ED arrest",
      details: "ED arrest in money laundering case",
    },
    {
      minister: "Vigilance Bureau Chief (SPS Parmar)",
      position: "Special DGP",
      caseType: "Driving license scam",
      date: "During tenure",
      status: "Suspended then controversially reinstated",
      details: "Signal about political interference in anti-corruption enforcement",
    },
  ],
  gangsterismIncidents: [
    { date: "July 8, 2025", incident: "Businessman Sanjay Verma shot dead", location: "Abohar" },
    { date: "December 2025", incident: "Kabaddi athlete Kanwar Digvijay Singh shot dead", location: "Mohali" },
    { date: "January 2026 (first week)", incident: "Nine murders recorded", location: "Punjab" },
    { date: "January 2026", incident: "AAP sarpanch Jharmal Singh shot dead at wedding", location: "Amritsar" },
    { date: "February 2026", incident: "Lucky Oberoi killed; BJP leader Manoranjan Kalia attacked", location: "Punjab" },
    { date: "February 2026", incident: "Dr Aniljit Singh Kambhoj murderous attack", location: "Moga" },
    { date: "Ongoing", incident: "NRI woman murdered", location: "Kapurthala" },
    { date: "Ongoing", incident: "Panchayat member killed", location: "Moga" },
    { date: "May 2026", incident: "Police officers on gangster radar", location: "Punjab" },
  ],
  drugCrisis: {
    firs: "8,344",
    arrests: "14,734",
    heroinSeized: "586 kg",
    villageReports:
      "Village Thetharke (Dera Baba Nanak): 'All kinds of drugs freely available'; Village Lakhnaur: peddlers operate openly with police awareness",
    status: "UNCHANGED despite increased enforcement",
  },
  healthcareGaps: [
    {
      metric: "Specialist doctor posts vacant",
      value: "49%",
      description: "In government hospitals - nearly half",
    },
    {
      metric: "Aam Aadmi Clinics",
      value: "881 built",
      description: "Infrastructure delivered but referral system broken due to staffing",
    },
    {
      metric: "Mukh Mantri Sehat Yojana",
      value: "Rs 10 lakh coverage",
      description: "Sounds comprehensive but covers only pre-approved packages with fixed caps",
    },
  ],
  educationGaps: [
    {
      metric: "Principal posts vacant",
      vacant: "984",
      total: "1,927",
      percentage: "51%",
    },
    {
      metric: "Headmaster positions unfilled",
      vacant: "One-third",
      total: "Senior Secondary Schools",
      percentage: "N/A",
    },
    {
      metric: "Teachers regularized",
      vacant: "15,000",
      total: "(AAP claim)",
      percentage: "Quality unclear",
    },
  ],
  summary: {
    totalPromises: 12,
    failed: 7,
    partiallyDelivered: 4,
    fulfilled: 1,
  },
};

// ==========================================
// DIGITAL COUNTER-CAMPAIGN DATA (from g68)
// ==========================================

export const digitalCounterCampaignReport: DigitalCounterCampaignReport = {
  reportDate: "20 May 2026",
  threatLandscape: {
    aapDigital: {
      party: "AAP",
      teamSize: "~200-300 core volunteers across Punjab",
      whatsappReach: "500+ community groups",
      handles: 20,
      coordination:
        "Coordinated posting cycles - attack narratives released simultaneously across handles within 90-second window",
      responseTime: "30-45 minutes for visual attack content creation",
      capabilities: [
        "200-300 core volunteers",
        "WhatsApp orchestration layer",
        "40-60 Punjabi-language Facebook pages and YouTube channels",
        "Bot network suspected on X (coordinated retweet patterns)",
        "Visual attack content (quote cards, edited videos, morphed images) within 30-45 minutes",
      ],
    },
    bjpDigital: {
      party: "BJP",
      teamSize: "Command center model - Chandigarh connected to Delhi HQ",
      whatsappReach: "Not specified for Punjab-specific",
      handles: 0,
      coordination:
        "Centralized operations room; national echo chamber activation capability",
      responseTime: "Content reaches millions within minutes through RSS-VHP-BJP network",
      capabilities: [
        "15-20 Punjab-specific Facebook groups",
        "Wikipedia edit capabilities",
        "Google News seeding within 24-48 hours",
        "Amplification reach through national handles (@BJP4India, @narendramodi)",
      ],
    },
  },
  congressGaps: [
    {
      gap: "No real-time monitoring",
      description: "No social listening tool deployed",
      impact: "Responses trail attacks by 2-4 hours",
    },
    {
      gap: "WhatsApp vacuum",
      description: "No organized truth-spreader network inside community WhatsApp groups",
      impact: "Cannot counter viral rumors",
    },
    {
      gap: "Video response deficit",
      description: "Cannot produce counter-video content in under 90 minutes",
      impact: "AAP benchmark is 30 minutes",
    },
    {
      gap: "No influencer ecosystem",
      description: "Zero structured relationships with Punjabi YouTubers, Facebook pages, or Instagram personalities",
      impact: "No amplification beyond official channels",
    },
    {
      gap: "Wikipedia neglect",
      description:
        "Candidate Wikipedia pages nonexistent, outdated, or rank below negative search results",
      impact: "Negative content dominates search results",
    },
    {
      gap: "NRI blind spot",
      description:
        "No dedicated digital strategy for NRI Punjabi communities in Canada, UK, Australia",
      impact: "Missed demographic with high WhatsApp and Facebook usage",
    },
  ],
  truthStack: [
    {
      layer: 1,
      name: "Pre-Bunking (Proactive)",
      description:
        "Identify likely attack vectors; create pre-approved, pre-produced rebuttal content stored in Cached Narrative Library",
      responseTime: "Content queued 72 hours before scheduled events; Library searched within 15 min of unscheduled attacks",
    },
    {
      layer: 2,
      name: "Real-Time Rebuttal (Reactive)",
      description:
        "When AAP/BJP attack goes live, content from Cached Narrative Library deployed within 20 minutes; target 1:1.5 ratio",
      responseTime: "First counter-post within 20 min; full coordinated deployment within 60 min",
    },
    {
      layer: 3,
      name: "Search Engine Dominance",
      description:
        "Ensure top 10 search results for Congress candidate names controlled by Congress or neutral/positive",
      responseTime:
        "Wikipedia pages updated within 24 hours; Google News seeding continuous weekly; negative SEO protection monthly",
    },
    {
      layer: 4,
      name: "Narrative Persistence (Sustained)",
      description:
        "Core Congress narrative repeated across all digital channels over weeks and months until it becomes default association",
      responseTime: "2-3 core themes per week reinforced across all platforms simultaneously",
    },
  ],
  whatsappStrategy: {
    rumorTiers: [
      {
        tier: "1",
        severity: "Critical",
        description: "Doctored video, deepfake, or false death/arrest claim",
        responseTime: "Immediate War Room escalation",
      },
      {
        tier: "2",
        severity: "High",
        description: "False political claims against candidate, fabricated quotes, manipulated images",
        responseTime: "60-minute counter-response",
      },
      {
        tier: "3",
        severity: "Medium",
        description: "Misleading statistics, out-of-context claims",
        responseTime: "Added to weekly counter-content queue",
      },
    ],
    factCheckCascade:
      "For verified false narratives, produce Fact-Check Card in Punjabi with false claim, truth with source, and Congress verified badge. Distribute through Truth-Spreader Network with instructions to forward to WhatsApp groups.",
    truthSpreaderNetwork:
      "Each of 117 constituencies identifies 5-10 Digital Sevadars (700-1,000 total) - trained to identify false screenshots, forward without commentary, escalate. Budget: INR 500-1,000/month per constituency for mobile data reimbursements.",
  },
  socialMediaDefense: {
    platform: "All platforms",
    responseTime: "30 minutes",
    tone: "Fact-based, dignified, Punjabi-language first",
    rules: [
      "Never use opponent's name as subject (boosts their hashtag/handle reach)",
      "Always redirect to Congress's positive narrative - what Congress WILL do",
      "Punjabi is primary language; English/Hindi are secondary",
    ],
  },
  influencerDefense: {
    tiers: [
      {
        tier: 1,
        name: "Celebrity Level",
        followers: "5 lakh+",
        compensation: "INR 50,000-2,00,000 per content piece",
        targetContent: "3-5 pieces per month during election period",
      },
      {
        tier: 2,
        name: "Macro Influencers",
        followers: "50,000-5 lakh",
        compensation: "INR 10,000-50,000 per content piece",
        targetContent: "1-2 pieces per week during election period",
      },
      {
        tier: 3,
        name: "Micro Influencers",
        followers: "Community-level",
        compensation: "Non-monetary (recognition, access)",
        targetContent: "Organic amplification of all Tier 1 and 2 content",
      },
    ],
    nriPriority:
      "Identify 20-30 NRI Punjabi influencers (Canada 8 lakh, UK 4 lakh, Australia 2 lakh estimated populations); brief through dedicated virtual engagement program",
    hostileInfluencerResponse:
      "Not confrontation but correction and isolation - produce fact-check, have pro-Congress influencer share with 'I was wrong' statement, undercut credibility through sustained content",
  },
  memeWarfare: {
    strategy:
      "Dignified Reversal (reframe attack back on AAP) and Ironic Amplification (Where was this in 2022-2026?)",
    rules: [
      "No personal attacks on Kejriwal's health or Mann's personal life",
      "No caste or religious references in memes",
      "Punjab-specific humor references preferred",
      "Always Punjabi-language first",
    ],
    production:
      "Meme Asset Library with pre-approved templates reduces production to under 30 minutes; Meme Desk (2 persons) operates during high-traffic windows",
  },
  deepfakeResponse: {
    detection: "Community report within 10 minutes; War Room analysis within 20 minutes",
    verification: "Deepfake detection tool analysis within 30 minutes",
    legalNotice:
      "Punjab Cyber Crime Police complaint filed within 60 minutes; IT Act Section 66D primary provision",
    platformTakedown:
      "YouTube, Facebook, Instagram takedown requests filed simultaneously; YouTube typically resolves in 2-4 hours with legal documentation",
    counterVideo:
      "Produce counter-video with actual candidate (live, not scripted) within 90 minutes; distribute through influencer network and official handles",
  },
  crisisEscalation: [
    {
      level: 1,
      name: "Digital Only",
      criteria: [
        "Negative social media posts with under 10,000 impressions",
        "WhatsApp rumors confined to under 50 groups",
        "Defamatory memes without viral spread",
        "Wikipedia edit attacks on low-profile candidates",
      ],
      response: "Digital War Room handles independently",
    },
    {
      level: 2,
      name: "Digital + Limited Physical",
      criteria: [
        "Negative content exceeding 50,000 impressions within 24 hours",
        "WhatsApp rumor confirmed in 50+ groups across 3+ districts",
        "Doctored audio/video with under 5 lakh views",
        "Attack on Congress candidate's family members",
      ],
      response:
        "Inform District Congress Committee President; press statement; legal notice authorized",
    },
    {
      level: 3,
      name: "Full Crisis Response",
      criteria: [
        "Deepfake video exceeding 5 lakh views",
        "Content alleging serious criminal conduct (rape, murder, treason)",
        "Content causing communal tension (religious or caste-based false claims)",
        "NRI community targeted with false content",
      ],
      response:
        "Escalate to PPC President and High Command; press conference within 4 hours; FIR filed; public rally/press meet in affected constituency within 48 hours",
    },
  ],
  warRoomStructure: {
    roles: [
      { role: "War Room Head", count: 1, responsibility: "Overall strategy, crisis decision authority" },
      { role: "Social Media Manager", count: 2, responsibility: "Posting, comment moderation, coordinated campaigns" },
      { role: "Monitoring Analyst", count: 2, responsibility: "Social listening, alert triage, community source coordination" },
      { role: "Video Producer", count: 1, responsibility: "Counter-video production, meme production" },
      { role: "Content Writer (Punjabi)", count: 2, responsibility: "Script writing, Fact-Check Cards, narrative content" },
      { role: "Influencer Liaison", count: 1, responsibility: "Tier 1/2 influencer relationships" },
      { role: "Wikipedia/Digital Asset Manager", count: 1, responsibility: "Wikipedia pages, search dominance, SEO" },
      { role: "Regional Coordinator", count: 4, responsibility: "Regional node management (Malwa, Majha, Doaba, Border)" },
    ],
    totalStaff: 14,
  },
  budgetSummary: {
    staffing: "INR 28,00,000 - 44,80,000",
    tools: "INR 9,60,000 - 16,80,000",
    wikipedia: "INR 6,50,000 - 9,75,000",
    ads: "INR 5,00,000",
    influencers: "INR 10,00,000 - 15,00,000",
    legal: "INR 5,00,000 - 8,00,000",
    memeDesk: "INR 3,50,000",
    nriCell: "INR 3,00,000 - 5,00,000",
    total: "INR 83,10,000 - 1,39,55,000",
  },
};
