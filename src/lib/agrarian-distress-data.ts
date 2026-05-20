// Governance - Agrarian Distress Data
// Derived from: research-M2/MP1-foundational/governance/agrarian-distress.md
// Research Date: 20 May 2026 | Data Currency: 2025-2026

import {
  AgrarianDistressKPI,
  FarmerSuicideData,
  FarmerProtestEvent,
} from "@/types/governance-agrarian-types";

// ==========================================
// FARMER SUICIDE DATA
// ==========================================

const FARMER_SUICIDE_DATA: FarmerSuicideData[] = [
  { year: 2019, recordedSuicides: 302, source: "State Agriculture Department via KBS Sidhu Substack" },
  { year: 2020, recordedSuicides: 257, source: "State Agriculture Department" },
  { year: 2021, recordedSuicides: 270, source: "State Agriculture Department" },
  { year: 2022, recordedSuicides: 204, cultivators: 157, labourers: 47, source: "State Agriculture Department" },
];

// ==========================================
// FARMER PROTESTS 2025-2026
// ==========================================

const FARMER_PROTESTS_2025_2026: FarmerProtestEvent[] = [
  {
    date: "Jan 26, 2025",
    event: "Tractor march (100+ tractors, Baroudi-Kurali route)",
    demands: ["Long-standing farmer demands"],
    scale: "100+ tractors",
  },
  {
    date: "March 20, 2025",
    event: "Statewide protests against detention of farmers",
    demands: ["Detention of farmer leaders"],
    scale: "Statewide",
  },
  {
    date: "April 6, 2025",
    event: "Jagjit Singh Dallewal ended 4-month hunger strike",
    demands: ["Long-standing MSP/loan demands"],
  },
  {
    date: "July 30, 2025",
    event: "Tractor march in Ludhiana area",
    demands: ["Land pooling opposition"],
  },
  {
    date: "August 24, 2025",
    event: "Large rally at Mullapur Dhakha near Ludhiana",
    demands: ["Land pooling opposition"],
    scale: "Large rally",
  },
];

// ==========================================
// MAIN KPI DATA OBJECT
// ==========================================

export const agrarianDistressKPI: AgrarianDistressKPI = {
  // Metadata
  reportDate: "2026-05-20",
  megaPillar: "MP1 — Foundational Scan",
  domain: "Governance",
  taskId: "T-MP1-GOV-007",
  status: "COMPLETE",
  source: "web-research",
  confidence: "HIGH",

  // Farmer Debt Data
  farmerDebt: {
    averageDebtPerFarmer: "VERIFICATION_NEEDED — no unified 2025-26 state figure available",
    keyDriver: {
      informalCreditShare: 20, // 20% of suicides linked to commission agent debt
      note: "Commission agent (arhtiya) informal credit is a specific Punjab structural vulnerability",
      source: "Sage Journals (2023)",
    },
    flood2025: {
      damagedAcres: 4.8, // lakh acres
      reliefPerAcre: 20000, // Rs per acre
      reliefType: "Crop loss compensation — NOT debt relief",
    },
  },

  // Farmer Suicides
  farmerSuicides: {
    data: FARMER_SUICIDE_DATA,
    peakYear: {
      year: 2016,
      rate: 17.08, // percentage in South-Western Punjab
      note: "Study published in Indian Journals (April 2026)",
    },
    national2022: {
      total: 11290,
      dailyAverage: 30,
      source: "Statista/Wikipedia",
    },
    cumulative2023To2026: 2809, // 2023-24 to Nov 2025-26
    verificationNeeded: [
      "Punjab farmer debt average/median (2025-26)",
      "Number of farmers excluded from 2017 waiver",
    ],
  },

  // MSP Procurement
  mspProcurement: {
    wheat2026: {
      procured: 123, // lakh tonnes
      target: 122, // lakh tonnes
      exceeded: true,
      source: "Government Source via Instagram, 12 May 2026",
    },
    national: {
      wheatProcured: 298, // LMT
      disbursed: 68000, // Rs crore
    },
    mspRates: {
      wheat: 2425, // Rs per quintal (VERIFICATION_NEEDED — confirm from CACP)
      paddy: 2389, // Rs per quintal
      moistureCap: 17, // percentage
    },
    structuralIssues: [
      "MSP exists for 23 crops but procurement largely limited to wheat and rice",
      "Infrastructure gaps prevent farmers in remote Malwa and Doaba from accessing mandis",
      "Private traders/commission agents procure below MSP for non-mainstream crops",
      "Farmers demand legal MSP guarantee — government procures at MSP but refuses legal right",
    ],
    legalGuaranteeDemand: "Central demand of 2020-21 farmer protests — remains unfulfilled",
  },

  // Groundwater Crisis
  groundwater: {
    declineRate: {
      worstArea: 46, // cm/year
      averageAnnual: "0.49 meters",
    },
    overExploitedBlocks: {
      percentage: 80, // approximately 80% of blocks
      source: "Central Ground Water Board, 2024",
    },
    waterExhaustionTimeline: {
      year: 2039,
      source: "SavingPunjab.org / Instagram analysis",
    },
    primaryDriver: "Water-intensive paddy/rice cultivation in summer when water tables are stressed",
    malwaCancer: {
      ratePer100k: "90-110 per 100,000",
      linkedContaminants: ["arsenic", "uranium"],
      source: "Punjab Cancer Atlas, 2023",
    },
  },

  // Stubble Burning
  stubbleBurning: {
    fires2024_25: {
      count: 10909,
      changeFrom2023: 70, // 70% decrease from 36,663 in 2023
      source: "Punjab Pollution Control Board",
    },
    historicalData: [
      { year: 2024, fires: 36663 },
      { year: 2023, fires: 49922 },
      { year: 2022, fires: 71304 },
      { year: 2021, fires: 76590 },
      { year: 2020, fires: 50590 },
      { year: 2019, fires: 55210 },
      { year: 2018, fires: 50590 },
    ],
    wheatSeason2025: {
      events: 10207,
      source: "ISRO-IARI Protocol via CAQM (February 2026)",
    },
    paddySeason2025: {
      events: 95,
      dateRange: "September 15-29, 2025",
      hotspotDistricts: [
        { district: "Amritsar", incidents: 55 },
        { district: "Tarn Taran", incidents: 11 },
        { district: "Patiala", incidents: 10 },
      ],
    },
    farmerDemands: {
      bkuUgrahan: {
        demand: "Cash incentive for crop residue management",
        amount: 2500, // Rs per acre
      },
      skm: {
        demand: "Per quintal for stubble management + CRM machinery provision",
        amount: 200, // Rs per quintal
      },
    },
    punitiveMeasures: {
      firSection: "223 BNS",
      environmentalCompensation: 2.3, // Rs lakh
      landRecordPenalty: "Red entries blocking loans/sale of farmland",
    },
  },

  // Protests
  protests: {
    recentEvents: FARMER_PROTESTS_2025_2026,
    may2026: {
      event: "Farmers march toward Chandigarh; clash with police at Mohali border; water cannons used",
      demands: [
        "Legal guarantee of MSP for all crops",
        "Restoration of cancelled cooperative credit limits",
        "Uninterrupted electricity and canal water during paddy season",
        "Repeal of Electricity Amendment Bill 2025 and Seed Law 2025",
        "River water distribution according to riparian principle",
        "Repeal of certain provisions of Punjab Reorganisation Act",
      ],
      outcome: "Police sealed all entry points from Punjab; ongoing as of May 2026",
    },
    landPooling: {
      scope: {
        acres: 65000, // 65,000+ acres
        cities: 21,
      },
      governmentOffer: {
        return: "400%",
        annualCompensation: "Rs 1 lakh/acre",
      },
      farmerRejection: {
        label: "Land grabbing",
        concern: "Turn farmers from landlords to landless",
      },
      politicalAlignment: [
        "BJP",
        "Congress",
        "Shiromani Akoli Dal",
        "Left parties",
      ],
      result: "AAP forced to retreat — policy 'staggered' and confined to major cities (Ludhiana, Patiala, Mohali)",
      aapInternalCracks: [
        "Block-level AAP president Tapinder Singh Grewal resigned",
        "MP Malvinder Singh Kang briefly criticized before retracting",
      ],
    },
  },

  // Debt Waivers
  debtWaivers: {
    2017: {
      announcement: "Total waiver of crop loans for small and marginal farmers (June 2017)",
      waiverAmount: 5900, // Rs crore
      additionalAllocation: 1200, // Rs crore (December 2021)
      phase2RepaymentResume: "October 15, 2025",
      impact: "Improved livelihoods but incomplete — many farmers had debt beyond waiver ceiling (DESAGRI, 2024)",
    },
    currentAAP: {
      statement: "CM Bhagwant Mann stated government is 'actively considering' waiving loans of small farmers",
      date: "September 2025",
      formalWaiver: "No formal waiver announced as of May 2026",
    },
    farmerDemands2027: [
      "Complete crop loan waiver for small/marginal farmers (up to Rs 2 lakh as per previous Punjab scheme)",
      "Debt relief for those excluded from 2017 waiver due to procedural issues",
      "Interest-free or subsidized credit from institutional sources",
    ],
  },

  // Political Positioning
  politicalPositioning: {
    congress: {
      historicalStrength: "Farmer vote was Congress bastion for decades before 2022 collapse",
      delivered2017: "Significant Rs 5,900 crore debt waiver — tangible evidence of farmer-first governance",
      current2025_26: "Led opposition to AAP's land pooling; MLAs and leaders actively participating in dharnas",
      designatedLeaders: [
        "Amrinder Singh Raja Warring (Punjab Congress president)",
        "Sukhpal Singh Khaira (All India Kisan Congress chair)",
      ],
      risk: "Internal party splits have weakened Kisan Congress; needs visible, credible farmer champion",
    },
    aap: {
      rise2022: "AAP won 92 seats partly due to tactical support from farmer unions angry at Congress and BJP over 2020-21 farm laws",
      currentReality: "Now facing the same farmer unions over land pooling, stubble burning penalties, and unmet MSP guarantee promises",
      farmerPerception: "Betrayed — promised MSP guarantee, delivered neither that nor meaningful relief",
      strength: [
        "Control of state machinery",
        "Can announce pre-election doles",
        "Benefits from anti-Congress sentiment",
      ],
      weakness: [
        "Farmer unions that brought AAP to power are now actively opposing it",
      ],
    },
    bjp: {
      stance2020_21: "Directly opposed by farmers over farm laws; SAD quit NDA over the issue",
      pivot2025: "Unexpectedly providing 'tactical support' to farmer protests against AAP's land pooling",
      leaders: ["Kewal Dhillon (senior BJP leader) attended SKM meeting with all parties"],
      risk: "Farmers remember 2020-21; BJP cannot easily shed 'anti-farmer' label despite 2025 pivot",
    },
    sad: {
      stance2020_21: "Split from NDA over farm laws; briefly gained farmer goodwill",
      currentPosition: "Allied with Congress and BJP in opposing land pooling; has farmer history but no independent mobilization capability",
      dilemma: "Dependent on Congress alliance for 2027; cannot position as independent farmer champion",
    },
  },

  // Regional Distress
  regionalDistress: {
    mostAffected: [
      {
        region: "Malwa",
        districts: ["Sangrur", "Mansa", "Bathinda", "Barnala", "Faridkot", "Moga"],
        distressLevel: "HIGHEST",
        keyIssues: [
          "Highest stubble burning",
          "Worst groundwater depletion",
          "Highest cancer rates",
          "2022 suicides concentrated here",
        ],
      },
      {
        region: "Doaba",
        districts: ["Hoshiarpur", "Kapurthala (partial)", "Shaheed Bhagat Singh Nagar"],
        distressLevel: "HIGH",
        keyIssues: [
          "Suicide clusters documented",
          "Fragmented land holdings",
        ],
      },
      {
        region: "Majha",
        districts: ["Amritsar", "Tarn Taran", "Gurdaspur"],
        distressLevel: "HIGH",
        keyIssues: [
          "Stubble burning incidents (Amritsar highest in 2025)",
          "Border area issues",
        ],
      },
    ],
    leastAffected: {
      region: "PUADH",
      districts: ["Patiala", "SAS Nagar", "Rupnagar", "Fatehgarh Sahib"],
      note: "Relatively better water situation; more diversified economy; but not immune to MSP/land pooling issues",
    },
  },

  // Policy Recommendations
  policyRecommendations: {
    topTier: [
      {
        tier: "top",
        priority: 1,
        title: "Legal MSP Guarantee Act",
        description: "Legislation that all crops covered under MSP must be purchased at MSP. Single most demanded policy since 2020.",
        voteImpact: "Highest — directly addresses core farmer demand",
      },
      {
        tier: "top",
        priority: 2,
        title: "Complete Crop Loan Waiver",
        description: "Waiver for small/marginal farmers up to Rs 2 lakh. Follow Telangana model. Congress delivered Rs 5,900 crore in 2017; AAP has not.",
        voteImpact: "High — tangible relief with precedent",
      },
      {
        tier: "top",
        priority: 3,
        title: "Withdraw Stubble Burning Cases/Fines",
        description: "Annul FIRs and environmental compensation penalties. Immediately wins goodwill without cost.",
        voteImpact: "High — directly affects rural Punjab",
      },
    ],
    secondTier: [
      {
        tier: "second",
        priority: 4,
        title: "Crop Diversification Support",
        description: "Introduce MSP-procured alternatives to paddy (maize, pulses, cotton) with guaranteed purchase. Addresses water crisis while providing income security.",
        voteImpact: "Medium — addresses existential crisis",
      },
      {
        tier: "second",
        priority: 5,
        title: "Custom Hiring Centres for CRM Machinery",
        description: "Rent-free access for small/marginal farmers; eliminates Rs 2,500/acre burden.",
        voteImpact: "Medium — addresses economic burden",
      },
      {
        tier: "second",
        priority: 6,
        title: "Withdraw/Revise Land Pooling Policy",
        description: "Cancel entirely or make unambiguously voluntary with zero coercive elements. AAP's partial retreat is insufficient.",
        voteImpact: "Medium — restores trust",
      },
    ],
    thirdTier: [
      {
        tier: "third",
        priority: 7,
        title: "River Water Distribution Reform",
        description: "Implement riparian principle; resolve inter-state water disputes with Punjab-first approach.",
      },
      {
        tier: "third",
        priority: 8,
        title: "Commission Agent (Arhtiya) Regulation",
        description: "Bring informal credit under oversight; reduce interest rates; prevent exploitation driving suicides.",
      },
      {
        tier: "third",
        priority: 9,
        title: "Flood Relief Expansion",
        description: "Rs 20,000/acre is insufficient; increase to market rate compensation.",
      },
    ],
  },

  // Strategic Recommendations for Congress
  strategicRecommendations: [
    {
      number: 1,
      title: "Own the 2017 Waiver Legacy",
      description: "Remind farmers that Congress delivered what AAP only promises. Create visible 'Congress delivered debt relief' narrative.",
    },
    {
      number: 2,
      title: "Champion MSP Guarantee Legislation",
      description: "Commit to legally binding MSP if voted to power. Differentiates from AAP (promised but didn't deliver) and BJP (opposed in 2020-21).",
    },
    {
      number: 3,
      title: "Build Farmer Union Alliances",
      description: "Not all unions, but specific ones (BKU Lakhowal, SKM factions) that are currently anti-AAP. Avoid appearing to have abandoned farmers after the land pooling coalition.",
    },
    {
      number: 4,
      title: "Target Malwa Specifically",
      description: "Highest suicide rates, worst water crisis, most stubble burning penalties. Intensified Malwa relief package would be politically powerful.",
    },
    {
      number: 5,
      title: "Do NOT Align with BJP on Farmer Issues",
      description: "The 2025 tactical cooperation is situational. For 2027, Congress must be seen as independently pro-farmer, not part of anti-AAP coalition.",
    },
    {
      number: 6,
      title: "Pre-election Waiver Announcement",
      description: "Even partial waiver commitment (targeting most distressed: small/marginal farmers, flood-affected, those excluded from 2017) would be significant electoral signal.",
    },
    {
      number: 7,
      title: "Promote Crop Diversification Credibly",
      description: "Farmers know paddy is unsustainable. If Congress offers MSP-guaranteed alternative with water savings, addresses existential crisis while being economically rational.",
    },
  ],

  // Data Gaps
  dataGaps: [
    { dataPoint: "Punjab farmer debt average/median (2025-26)", status: "NOT_FOUND" },
    { dataPoint: "Actual MSP for wheat/paddy 2026-27 official rates", status: "VERIFICATION_NEEDED", note: "CACP schedule" },
    { dataPoint: "Number of farmers excluded from 2017 waiver", status: "NOT_FOUND" },
    { dataPoint: "BJP farmer vote share in 2022", status: "NOT_FOUND", note: "Only total seat counts available" },
    { dataPoint: "AAP's exact vote share in Malwa (2022)", status: "NOT_FOUND" },
    { dataPoint: "Water table recovery rates under alternative crops", status: "NOT_FOUND" },
  ],

  // Sources
  sources: [
    { id: 1, title: "Punjab News Line (May 2026)", source: "Mohali border farmer protest" },
    { id: 2, title: "The Hindu, 30 September 2025", source: "Stubble burning FIRs/crackdown" },
    { id: 3, title: "Indian Express, August 2025", source: "Land pooling opposition, Congress positioning" },
    { id: 4, title: "New Indian Express, July 2025", source: "BJP-Congress-Akali coalition against land pooling" },
    { id: 5, title: "Times of India, September 2025", source: "Bhagwant Mann loan waiver statement" },
    { id: 6, title: "Pressenza, March 2026", source: "Farmer suicide March 2026" },
    { id: 7, title: "KBS Sidhu Substack (October 2025)", source: "Punjab suicide data 2019-2022" },
    { id: 8, title: "Sage Journals (2023)", source: "Economic model of agrarian suicide in Punjab" },
    { id: 9, title: "CGWB (2024)", source: "Groundwater resources data" },
    { id: 10, title: "ISRO-IARI Protocol via CAQM (February 2026)", source: "10,207 wheat fire events" },
    { id: 11, title: "Punjab Pollution Control Board (September 2025)", source: "95 fire incidents data" },
    { id: 12, title: "DESAGRI (2024)", source: "Farm Debt Waiver impact evaluation" },
    { id: 13, title: "SavingPunjab.org (March 2025)", source: "Water crisis analysis" },
    { id: 14, title: "Punjab Cancer Atlas (2023)", source: "Malwa cancer rates" },
  ],
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get farmer suicide data for a specific year
 */
export function getFarmerSuicideByYear(year: number): FarmerSuicideData | undefined {
  return agrarianDistressKPI.farmerSuicides.data.find((d) => d.year === year);
}

/**
 * Get total farmer suicides across a year range
 */
export function getTotalSuicides(startYear: number, endYear: number): number {
  return agrarianDistressKPI.farmerSuicides.data
    .filter((d) => d.year >= startYear && d.year <= endYear)
    .reduce((sum, d) => sum + d.recordedSuicides, 0);
}

/**
 * Get protests by year
 */
export function getProtestsByYear(year: number): FarmerProtestEvent[] {
  return agrarianDistressKPI.protests.recentEvents.filter((p) => p.date.includes(year.toString()));
}

/**
 * Get regional distress level
 */
export function getRegionalDistress(region: string): { distressLevel: string; keyIssues: string[] } | undefined {
  const mostAffected = agrarianDistressKPI.regionalDistress.mostAffected.find(
    (r) => r.region.toLowerCase() === region.toLowerCase()
  );
  if (mostAffected) {
    return { distressLevel: mostAffected.distressLevel, keyIssues: mostAffected.keyIssues };
  }
  if (agrarianDistressKPI.regionalDistress.leastAffected.region.toLowerCase() === region.toLowerCase()) {
    return { distressLevel: "LOW", keyIssues: [agrarianDistressKPI.regionalDistress.leastAffected.note] };
  }
  return undefined;
}

/**
 * Get top policy recommendations
 */
export function getTopPolicyRecommendations(): { title: string; description: string }[] {
  return agrarianDistressKPI.policyRecommendations.topTier.map((p) => ({
    title: p.title,
    description: p.description,
  }));
}

/**
 * Get stubble burning trend data for charts
 */
export function getStubbleBurningTrend(): { year: number; fires: number }[] {
  return agrarianDistressKPI.stubbleBurning.historicalData;
}

/**
 * Get suicide trend data for charts
 */
export function getSuicideTrend(): { year: number; suicides: number }[] {
  return agrarianDistressKPI.farmerSuicides.data.map((d) => ({
    year: d.year,
    suicides: d.recordedSuicides,
  }));
}
