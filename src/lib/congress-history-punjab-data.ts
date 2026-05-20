// Congress Party History in Punjab Data
// Derived from: direct-documentation/cat-3-party-propulsion/b8-congress-party-history-punjab.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { CongressHistoryPunjabData } from "@/types/congress-history-punjab-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  agent: "Track B",
  taskId: "B8",
  frameworkReference: "Section 3.1",
  confidence: "HIGH" as const,
};

// ==========================================
// PRE-INDEPENDENCE DATA
// ==========================================

const ghadarPartyConnection = {
  description:
    "Revolutionary organization primarily composed of Punjabi Sikh and Hindu immigrants in North America (1913-1944)",
  region: "Malwa region of Punjab",
  districts: ["Ludhiana", "Jalandhar", "Hoshiarpur"],
  relationshipWithCongress:
    "Many Ghadar Party members were Congress workers upon returning to India. Congress provided institutional support while Ghadar represented more radical nationalist sentiment",
};

const congressMovements = {
  movements: [
    "Non-Cooperation Movement (1920-1922)",
    "Civil Disobedience Movement (1930-1934)",
    "Quit India Movement (1942)",
  ],
  leaders: [
    {
      name: "Dr. Satyapal",
      role: "Led Congress movements in Lahore, imprisoned multiple times",
    },
    {
      name: "Dr. Mukhtar Ahmed",
      role: "Congress leader from Lyallpur (now Pakistan)",
    },
    {
      name: "Sardar Swaran Singh",
      role: "Later served in Union Cabinet, represented moderate Congress faction",
    },
    {
      name: "Giani Kartar Singh",
      role: "Congress leader from Lahore",
    },
    {
      name: "Sardar Partap Singh Kairon",
      role: "Emerged as key Congress leader from 1930s onward",
    },
  ],
};

const freedomFighters = [
  {
    name: "Bhagat Singh",
    role: "Revolutionary socialist — his actions influenced Congress strategy",
    notes: "1907-1931",
  },
  {
    name: "Raj Guru",
    role: "Revolutionary, associate of Bhagat Singh",
  },
  {
    name: "Lala Lajpat Rai",
    role: "Nationalist leader from Punjab, played key role in Congress",
    notes: "1865-1928",
  },
  {
    name: "Master Tara Singh",
    role:
      "Sikh leader with complex relationship to Congress; founded Shiromani Akali Dal in 1920",
    notes: "1885-1967",
  },
];

const partitionRole = {
  leagueCongressTalks:
    "Congress leadership engaged in negotiations with Muslim League regarding partition terms",
  boundaryDetermination:
    "Punjabi leaders like Dr. Gopi Chand Bhargava advocated against partition but accepted eventual settlement",
  refugeeRehabilitation:
    "Congress organized relief efforts for refugees from West Punjab (Pakistan)",
  noakhaliConnection:
    "While Gandhi focused on Noakhali, Congress workers managed Punjab refugee operations",
  demographicImpact:
    "Millions of Sikhs and Hindus relocated from West Pakistan to East Punjab (Indian Punjab)",
};

// ==========================================
// POST-INDEPENDENCE DATA
// ==========================================

const congressDominance = {
  restingFactors: [
    "Legacy of freedom movement participation",
    "Strong organizational network (especially in rural areas)",
    "Support from agricultural community post-Green Revolution",
    "Central government resources and patronage",
    "Leadership of figures like Pratap Singh Kairon",
  ],
  competitors: [
    "Shiromani Akali Dal (SAD) — for Sikh votes",
    "Bharatiya Jana Sangh (predecessor to BJP) — for Hindu votes",
  ],
};

const kaironEra = {
  tenure: "1956-1964",
  industrialization:
    "Promoted industrial growth, established Punjab Industrial Development Corporation",
  agriculturalDevelopment:
    "Supported Green Revolution inputs, though state lacked major reforms",
  punjabiSubaMovement:
    "Congress under Kairon supported demand for separate Punjabi-speaking state (achieved 1966)",
  landReforms:
    "Implemented limited land ceiling reforms; Congress's support constrained by powerful landed interests",
  controversies: [
    "Faced allegations of corruption and nepotism",
    "Power consolidation within family — his son remained involved in politics",
    "Friction with Sikh religious leadership over certain policies",
  ],
};

const greenRevolution = {
  supportSystems: [
    "Mandi system improvements",
    "Minimum support prices",
    "Agricultural extension services",
  ],
  punjabAgriculturalUniversity: "Established 1962 — research hub for high-yield varieties",
  cooperativeCredit:
    "Congress-backed cooperative banks channeled credit to farmers",
  inputSubsidies: "Fertilizers, pesticides, electricity subsidies",
  benefitDistribution:
    "Benefits distributed unequally — large farmers benefited more, marginal farmers and agricultural laborers saw limited gains. Created socio-economic tensions",
};

const congressSplit = {
  cause: "Indira Gandhi's leadership style and policy disagreements",
  congressO:
    "Organization — regional leaders opposing Indira's radical policies",
  congressR:
    "Requisition — pro-Indira faction controlling official party apparatus",
  punjabImpact:
    "Weakened Congress's dominant position, created factional warfare, enabled Akali Dal to emerge as main challenger, Giani Zail Singh emerged as key Congress (R) figure",
  keyFigure: "Giani Zail Singh",
};

const emergencyPeriod = {
  positiveForCongress: [
    "Centralized authority enabled some development decisions",
    "Certain infrastructure projects accelerated",
  ],
  negativeConsequences: [
    "Massive unpopularity among Sikh community",
    "Forced sterilizations (especially under Sanjay Gandhi's population control program) caused particular resentment",
    "Congress lost significant credibility in rural Punjab",
    "Akali Dal mobilized opposition to Emergency",
  ],
  electoralResult:
    "1977 elections marked Congress's first major defeat in Punjab — Janata Party (combination of opposition parties) won with Akali Dal as dominant partner",
};

// ==========================================
// PUNJAB CRISIS PERIOD DATA
// ==========================================

const congressRoleMilitancy = {
  pre1984:
    "Congress (I) under Indira Gandhi pursued aggressive centralization; Akali Dal's morchas characterized as anti-national by Congress; police excesses contributed to alienation",
  duringMilitancy:
    "Congress supported military operation Blue Star (June 1984); security measures implemented; human rights abuses by police documented",
  operationBlueStar:
    "Congress supported military operation — significant backlash from Sikh community",
  postBlueStar:
    "Congress sought to rebuild bridges with Sikh community; negotiation attempts with moderate Akali leaders; limited success due to ongoing violence",
};

const antiSikhRiots = {
  congressInvolvement:
    "Congress party workers implicated in violence in Delhi following Indira Gandhi's assassination (October 31, 1984). Senior Congress leader Jagdish Tytler implicated. Congress officially condemned violence but critics argue insufficient action against perpetrators",
  longTermImpact:
    "Sikh community trust in Congress significantly damaged. Congress lost Sikh majority constituencies for decades. Akali Dal successfully weaponized 1984 memory against Congress. Congress's secular credentials questioned",
};

const rajivGandhiPunjab = {
  earlyTenure:
    "Direct rule from center (1984-1985); 1985 Rajiv-Longowal accord signed with Akali Dal president Harchand Singh Longowal",
  rajivLongowalAccord:
    "Accord signed 1985 — major step towards peace in Punjab",
  accordCollapse:
    "Longowal's assassination (1985) — accord collapsed after signing",
  laterPeriod:
    "Congress lost 1985 state elections to Akali Dal-BJP alliance; direct rule continued with Governor's administration; Rajiv sought to rebuild Congress organization",
  assessment:
    "Rajiv's approach largely unsuccessful in restoring Congress dominance; personal popularity did not translate to party revival in Punjab",
};

const congressRevivalAttempts = {
  period1985_1992:
    "Congress struggled to regain footing as Akali Dal governed with BJP support",
  "1992Election":
    "Congress won 87 of 117 seats — significant revival. Some constituencies had low turnout due to militants' poll boycott call",
  beantSinghChiefMinister: "Beant Singh became Chief Minister (1992-1995)",
  revivalFactors: [
    "Voter fatigue with Akali Dal government",
    "Congress's 'secular' positioning attracted Hindu votes",
    "Economic development promises",
    "Central government schemes",
  ],
  challenges: [
    "Security situation remained difficult",
    "Accusations of police excess continued",
  ],
};

// ==========================================
// KEY LEADERS
// ==========================================

const keyLeaders = [
  {
    name: "Pratap Singh Kairon",
    role: "Chief Minister 1956-1964",
    assessment: "Congress's most successful period in Punjab",
  },
  {
    name: "Giani Zail Singh",
    role: "Chief Minister 1972-1977, later President of India",
    assessment: "Key Congress (R) figure after 1966 split",
  },
  {
    name: "Beant Singh",
    role: "Chief Minister 1992-1995",
    assessment: "Led Congress revival in 1992 elections",
  },
  {
    name: "Amarinder Singh",
    role: "Chief Minister 2017-2021",
    assessment: "Lost to AAP in 2022, later left Congress",
  },
  {
    name: "Charanjit Singh Channi",
    role: "Chief Minister Sept 2021-March 2022",
    assessment: "First Dalit Chief Minister of Punjab — Congress lost heavily in 2022",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const congressHistoryPunjabData: CongressHistoryPunjabData = {
  metadata,
  preIndependence: {
    ghadarPartyConnection,
    congressMovements,
    freedomFighters,
    partitionRole,
  },
  postIndependence: {
    congressDominance,
    kaironEra,
    greenRevolution,
    congressSplit,
    emergencyPeriod,
  },
  crisisPeriod: {
    congressRoleMilitancy,
    antiSikhRiots,
    rajivGandhiPunjab,
    revivalAttempts: congressRevivalAttempts,
  },
  keyLeaders,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getCongressEraByPeriod(
  period: "pre-independence" | "post-independence" | "crisis"
): string[] {
  const eras = {
    "pre-independence": [
      "Ghadar Party connection (1913-1944)",
      "Congress movements (1920-1942)",
      "Partition role (1947)",
    ],
    "post-independence": [
      "Congress dominance (1947-1966)",
      "Kairon era (1956-1964)",
      "Green Revolution (1960s-1970s)",
      "Congress split (1966)",
      "Emergency period (1975-1977)",
    ],
    crisis: [
      "Pre-1984 militancy buildup",
      "Operation Blue Star (1984)",
      "Anti-Sikh riots (1984)",
      "Rajiv Gandhi period (1984-1989)",
      "Revival attempts (1985-1992)",
    ],
  };
  return eras[period];
}

export function getKeyCongressLeader(name: string) {
  return keyLeaders.find(
    (l) => l.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function getGreenRevolutionImpact(): {
  metric: string;
  value: string;
}[] {
  return [
    { metric: "Agricultural growth rate during Green Revolution", value: "6-8% annually" },
    { metric: "Rural roads constructed 1951-1966", value: "3,200 km" },
    { metric: "Punjab's contribution to India's wheat procurement", value: "40%+ at peak" },
    { metric: "Punjab's contribution to India's rice procurement", value: "30% at peak" },
  ];
}
