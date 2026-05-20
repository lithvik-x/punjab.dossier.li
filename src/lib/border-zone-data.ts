// Border Zone KPI Data for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/geography/border-zone.md
// Research Date: 19 May 2026

import type {
  BorderOverview,
  BorderSecurityInfrastructure,
  CrossBorderPoint,
  AttariWagahICP,
  KartarpurCorridor,
  DrugTraffickingData,
  BorderFarmerImpact,
  BorderConstituencies,
  CongressBorderStrategy,
  BorderZoneKPI,
  DroneSeizure,
} from "@/types/border-zone-types";
import {
  BORDER_DISTRICTS,
  BORDER_LENGTH_TOTAL,
  BORDER_LENGTH_LAND,
  BORDER_LENGTH_RIVERINE,
  BORDER_FENCED,
  BORDER_UNFENCED,
  BORDER_FARMING_FAMILIES,
  BORDER_LAND_BEYOND_FENCE,
  BORDER_VILLAGES,
  BORDER_ACS_COUNT,
  BORDER_DISTRICTS_COUNT,
} from "@/types/border-zone-types";

// ==========================================
// BORDER ZONE OVERVIEW
// ==========================================

/**
 * Border Zone Overview - 553 km International Border with Pakistan
 */
export const borderZoneOverview: BorderOverview = {
  totalLength: {
    international: BORDER_LENGTH_TOTAL,
    landBorder: BORDER_LENGTH_LAND,
    riverine: BORDER_LENGTH_RIVERINE,
  },
  fencing: {
    fenced: BORDER_FENCED,
    unfenced: BORDER_UNFENCED,
  },
  riverineVulnerablePoints: 60,
  districts: [
    { name: "Pathankot", region: "Majha", keyACs: ["Pathankot", "Sujanpur"] },
    { name: "Gurdaspur", region: "Majha", keyACs: ["Dera Baba Nanak", "Gurdaspur", "Qadian", "Batala", "Fatehgarh Churian"] },
    { name: "Amritsar", region: "Majha", keyACs: ["Attari", "Amritsar South", "Amritsar North", "Amritsar West", "Amritsar Central", "Rajasansi"] },
    { name: "Tarn Taran", region: "Malwa", keyACs: ["Tarn Taran", "Khem Karan", "Patti"] },
    { name: "Ferozepur", region: "Malwa", keyACs: ["Ferozepur City", "Ferozepur Rural", "Guru Har Sahai", "Jalalabad"] },
    { name: "Fazilka", region: "Malwa", keyACs: ["Fazilka", "Abohar", "Balluana"] },
  ],
  bsfCommand: {
    headquarters: "Jalandhar",
    westernCommand: "Chandigarh (covers Punjab, J&K, Rajasthan, Gujarat)",
  },
  floodDamage2025: {
    fencingDestroyed: "80 km",
    borderOutpostsSubmerged: "nearly 100",
  },
};

// ==========================================
// BORDER SECURITY INFRASTRUCTURE
// ==========================================

/**
 * Border Security Infrastructure
 */
export const borderSecurityInfrastructure: BorderSecurityInfrastructure = {
  fence: {
    builtYears: "1988-1993",
    age: "nearly 40 years old",
    status: "poor physical condition",
  },
  technologies: [
    { name: "Laser Walls", function: "Detect movement through invisible beam networks", deployment: "45 laser walls at riverine gaps", yearActivated: "2016" },
    { name: "Electro-Optical Targeting Systems (EOTS)", function: "Passive camera-based sensors fused with radar for long-range observation" },
    { name: "Radar Systems", function: "Detect drone and human movement across the border" },
    { name: "Radio-Frequency Analysers", function: "Detect drone communication signals" },
    { name: "Anti-Drone Systems", function: "Laser-equipped anti-drone guns at 30+ locations", yearActivated: "2022" },
    { name: "Anti-Drone Forensics Lab", function: "Drone forensics in Amritsar" },
    { name: "Decision Support System (DSS)", function: "AI and GIS-powered command centre for real-time border management", yearActivated: "2025" },
    { name: "Anti-Tunnel Systems", function: "Detect underground infiltration routes" },
    { name: "BOP Connectivity", function: "Link all border outposts with each other and hinterland" },
  ],
  bsfDeployment: {
    mandate: "Guard 553 km Indo-Pak border in Punjab",
    totalBattalions: 193,
    totalPersonnel: "2.76 lakh",
    additionalJammu2025: 2,
  },
  recoveries2025: {
    dronesRecovered: 278,
    heroinSeized: "380+ kg",
    weaponsSeized: "200+",
    pakistaniIntrudersApprehended: 53,
  },
};

// ==========================================
// CROSS-BORDER POINTS
// ==========================================

/**
 * Attari-Wagah ICP Trade Data
 */
export const attariWagahICP: AttariWagahICP = {
  name: "Attari-Wagah Integrated Check Post",
  type: "ICP",
  location: "Attari, Amritsar district",
  district: "Amritsar",
  inaugurated: "April 2012",
  area: "120 acres",
  access: "NH-1",
  status: "closed",
  tradeHistory: {
    peak: { value: "Rs 4,370.78 crore", year: "2018-19" },
    postPulwama: { value: "Rs 2,257.55 crore", year: "2022-23", reason: "India imposed 200% duty on Pakistani goods" },
    recovery: { value: "Rs 3,886.53 crore", year: "2023-24", note: "highest in five years" },
    postPahalgam2025: { status: "closed", tradeHalted: "Rs 3,886 crore", employmentImpact: "thousands in Amritsar/Attari" },
    exports: ["soya bean", "poultry feed", "vegetables", "red chillies", "plastic granules", "plastic yarn", "straw reapers", "cotton yarn"],
    imports: ["dry fruits", "dates", "gypsum", "cement", "glass", "rock salt", "herbs"],
    bilateralPotential: { current: "~$2 billion", potential: "$37 billion" },
  },
  closureInfo: { date: "April 2025", reason: "Post-Pahalgam" },
  dailyCeremony: "Wagah border retreat ceremony - major tourist attraction and soft-power symbol",
};

/**
 * Kartarpur Corridor Data
 */
export const kartarpurCorridor: KartarpurCorridor = {
  name: "Dera Baba Nanak - Kartarpur Corridor",
  type: "Corridor",
  location: "Dera Baba Nanak, Gurdaspur district",
  district: "Gurdaspur",
  inaugurated: "November 2019",
  opened: "November 2019",
  length: "4.1 km",
  status: "limited",
  connectivity: "Dera Baba Nanak to Gurdwara Darbar Sahib Kartarpur (Pakistan)",
  statusHistory: [
    { period: "November 2019 - April 2025", status: "operational", note: "Opened after long political negotiations" },
    { period: "April 2025", status: "closed", note: "Closed after Pahalgam attack" },
    { period: "November 2025", status: "limited", note: "Reopened for Sikh pilgrims" },
  ],
  emotionalSignificance: "High emotional and religious significance for Sikh voters",
  politicalLeverage: "Political leverage point - repeated closures frustrate pilgrims",
};

// ==========================================
// DRUG TRAFFICKING
// ==========================================

/**
 * Drug Trafficking Data
 */
export const drugTraffickingData: DrugTraffickingData = {
  droneSeizures: [
    { year: 2021, cases: 3, source: "BSF" },
    { year: 2023, cases: 107, source: "BSF" },
    { year: 2024, cases: 179, source: "NCB" },
    { year: 2024, cases: 250, source: "BSF", note: "drones recovered" },
    { year: 2025, cases: 278, source: "BSF", note: "through December" },
  ],
  primaryRoute: "Afghanistan -> Pakistan (trans-shipment, processing) -> Punjab border (drone drops) -> Indian distribution network",
  hotspotDistricts: ["Amritsar", "Tarn Taran", "Ferozepur", "Gurdaspur"],
  drugTypes: [
    { type: "Heroin", note: "primary" },
    { type: "Opium" },
    { type: "Hashish" },
    { type: "Synthetic drugs" },
    { type: "Amphetamine-type stimulants (ATS)" },
  ],
  traffickingMethods: [
    "Drone-driven drops at border belt villages",
    "Riverine gaps (Ravi and Sutlej)",
    "Tunnel networks",
    "Damaged fencing (flood seasons)",
    "Contraband in legitimate trade",
    "Darknet markets and cryptocurrency",
  ],
};

// ==========================================
// BORDER FARMER IMPACT
// ==========================================

/**
 * Border Farmer Impact Data
 */
export const borderFarmerImpact: BorderFarmerImpact = {
  landBeyondFence: {
    total: BORDER_LAND_BEYOND_FENCE,
    privateFarmland: "21,500 acres",
    agriculturalLand: "~22,000 acres",
    governmentCommonLand: "remaining",
  },
  farmingFamilies: BORDER_FARMING_FAMILIES,
  villages: {
    total: `${BORDER_VILLAGES} villages`,
    amritsarUnderBADP: 360,
  },
  restrictions: {
    accessHours: { winter: "9 AM to 4 PM", summer: "6 PM" },
    kisanID: "mandatory",
    escortRequirement: "2-4 BSF Kisan Guards per tractor/group",
    cropHeightLimit: "3 feet maximum (no sugarcane, commercial cash crops)",
    prohibited: ["overnight stay in fields beyond fence"],
    effectiveFarmingDays: 200,
    cropDamage: {
      cause: "wild boar, nilgai from Pakistan side",
      extent: "up to 50% of harvest",
    },
  },
  compensation: {
    committee: "Kapoor Committee",
    yearFormed: 1986,
    initialRate: "Rs 2,500/acre (1988)",
    currentRate: "Rs 10,000/acre (2015)",
    courtOrder: "Punjab & Haryana High Court, Justice Surya Kant bench",
    disbursementIssues: [
      "Compensation irregular",
      "Not indexed to inflation",
      "Does not reach farmers",
      "Disbursement chain leaks funds (DC -> SDM -> Tehsildar -> Patwari -> Sarpanch -> farmer)",
      "2023-2024 compensation not disbursed in many areas as of 2026",
    ],
    status: "Arrears pending",
  },
  fenceRealignment: {
    announcement: {
      date: "January 2026",
      cm: "Bhagwant Mann",
      status: "Centre agreed in principle to move fence closer to zero line",
    },
    landRestoration: "~45,000 acres",
    farmersPosition: {
      willingDistance: "up to 300 metres from border",
      permanentAcquisitionRate: "Rs 1 crore per acre if land acquired permanently",
    },
    bsfPosition: "Supports advancement 'wherever feasible' but cites logistical challenges",
    challenges: [
      "Dismantling old fence",
      "Procuring materials",
      "Realigning patrol routes",
      "40-year-old fence in poor condition",
    ],
    politicalTrustDeficit: "Similar assurances during previous election cycles without implementation",
  },
};

// ==========================================
// BORDER CONSTITUENCIES
// ==========================================

/**
 * Border Constituencies Data
 */
export const borderConstituencies: BorderConstituencies = {
  totalACs: 28,
  totalDistricts: BORDER_DISTRICTS_COUNT,
  byDistrict: [
    { district: "Gurdaspur", totalACs: 5, borderACs: ["Dera Baba Nanak", "Gurdaspur", "Qadian", "Batala", "Fatehgarh Churian"] },
    { district: "Amritsar", totalACs: 6, borderACs: ["Attari", "Amritsar South", "Amritsar North", "Amritsar West", "Amritsar Central", "Rajasansi"] },
    { district: "Tarn Taran", totalACs: 3, borderACs: ["Tarn Taran", "Khem Karan", "Patti"] },
    { district: "Ferozepur", totalACs: 4, borderACs: ["Ferozepur City", "Ferozepur Rural", "Guru Har Sahai", "Jalalabad"] },
    { district: "Fazilka", totalACs: 3, borderACs: ["Fazilka", "Abohar", "Balluana"] },
    { district: "Pathankot", totalACs: 2, borderACs: ["Pathankot", "Sujanpur"] },
  ],
  keyElectoralIssues: [
    { priority: 1, issue: "Fence realignment and land access", affectedPopulation: "12,000+ farming families", politicalRelevance: "Single most emotive issue for border farmers" },
    { priority: 2, issue: "Drug menace", affectedPopulation: "Families across border districts", politicalRelevance: "Directly linked to border trafficking" },
    { priority: 3, issue: "Employment loss from Attari closure", affectedPopulation: "Thousands of traders, porters, transporters, hospitality workers", politicalRelevance: "Post-April 2025 trade suspension" },
    { priority: 4, issue: "Compensation arrears", affectedPopulation: "Border farmers with pending claims", politicalRelevance: "Erodes trust in both state and central governments" },
    { priority: 5, issue: "Development deficit", affectedPopulation: "Border villages", politicalRelevance: "BADP funds not reaching beneficiaries (e.g., Burj village 18.7% literacy)" },
    { priority: 6, issue: "Kartarpur Corridor", affectedPopulation: "Sikh pilgrims", politicalRelevance: "Repeated closures frustrate voters" },
    { priority: 7, issue: "BSF-civilian friction", affectedPopulation: "Border village residents", politicalRelevance: "Restricted movement, search protocols, land disputes" },
    { priority: 8, issue: "Wild animal crop damage", affectedPopulation: "Farmers beyond fence", politicalRelevance: "No compensation mechanism" },
  ],
};

// ==========================================
// CONGRESS STRATEGY
// ==========================================

/**
 * Congress Border Strategy
 */
export const congressBorderStrategy: CongressBorderStrategy = {
  positioning: "Party that delivered Attari ICP and advocates for border farmer welfare",
  keyPromises: [
    { number: 1, promise: "Time-bound fence realignment implementation", historicalContext: "Congress built Attari ICP (2012, UPA era) and enabled peak bilateral trade" },
    { number: 2, promise: "Proper compensation indexed to inflation with direct benefit transfer", historicalContext: "Address Kapoor Committee recommendations" },
    { number: 3, promise: "Kartarpur Corridor permanence", historicalContext: "Opened under Congress-led UPA (2019)" },
    { number: 4, promise: "Border-area development package beyond BADP failures", historicalContext: "Address 40-year infrastructure neglect" },
  ],
  voterCoalition: "Border belt voters with grievances against AAP (compensation failures) and BJP (trade closure, border security policies)",
  attackVectors: {
    againstAAP: [
      "Compensation failures for border farmers",
      "Unfulfilled fence realignment promises",
      "Failed to address drug menace effectively",
    ],
    againstBJP: [
      "Trade closure (Attari ICP) since April 2025",
      "Border security policy failures (drone surge)",
      "Compensation arrears from central schemes",
    ],
  },
};

// ==========================================
// COMPLETE BORDER ZONE KPI
// ==========================================

/**
 * Complete Border Zone KPI Data
 */
export const borderZoneKPI: BorderZoneKPI = {
  overview: borderZoneOverview,
  security: borderSecurityInfrastructure,
  crossBorderPoints: [attariWagahICP, kartarpurCorridor],
  drugTrafficking: drugTraffickingData,
  farmerImpact: borderFarmerImpact,
  constituencies: borderConstituencies,
  strategy: congressBorderStrategy,
  dataSources: [
    { source: "BSF Western Command ADG press briefing", date: "December 2025", publication: "Times of India" },
    { source: "NCB Annual Report 2024", date: "September 2025", publication: "The Hindu" },
    { source: "Punjab Border Fence Realignment analysis", date: "2026", publication: "Sanskriti IAS" },
    { source: "Border village farmers navigate conflict and survival", date: "May 2025", publication: "Mongabay India" },
    { source: "Analyzing the plight of Punjab's border farmers", date: "April 2026", publication: "IAS Gyan" },
    { source: "Attari border closure to hit Rs 3,800 crore trade", date: "April 2025", publication: "Indian Express" },
    { source: "BSF, Home Ministry consider moving border fence closer", date: "December 2023", publication: "Swarajya" },
    { source: "BSF laser walls deployment", date: "April 2016", publication: "PIB / HuffPost India" },
    { source: "India-Pakistan trade data", date: "2025-26", publication: "Land Ports Authority of India / OEC World" },
    { source: "CM Mann fence realignment announcement", date: "April 2026", publication: "Hindustan Times" },
  ],
  dataFreshness: {
    status: "COMPLETE",
    note: "Most data points from 2025-2026 reporting. Some demographic figures (literacy rates) from 2011 census - marked VERIFICATION_NEEDED where currency is uncertain.",
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get drone seizure trend data
 */
export function getDroneSeizureTrend(): DroneSeizure[] {
  return drugTraffickingData.droneSeizures;
}

/**
 * Get border districts
 */
export function getBorderDistricts(): string[] {
  return BORDER_DISTRICTS;
}

/**
 * Get total border length in km
 */
export function getTotalBorderLength(): number {
  return BORDER_LENGTH_TOTAL;
}

/**
 * Get fenced vs unfenced border length
 */
export function getFencingStatus(): { fenced: number; unfenced: number; percentageFenced: number } {
  const percentageFenced = Math.round((BORDER_FENCED / BORDER_LENGTH_TOTAL) * 100);
  return {
    fenced: BORDER_FENCED,
    unfenced: BORDER_UNFENCED,
    percentageFenced,
  };
}

/**
 * Get border farmer statistics
 */
export function getBorderFarmerStats(): { families: number; land: string; villages: string } {
  return {
    families: BORDER_FARMING_FAMILIES,
    land: BORDER_LAND_BEYOND_FENCE,
    villages: `${BORDER_VILLAGES} villages`,
  };
}

/**
 * Get key electoral issues in border belt
 */
export function getBorderElectoralIssues(): { priority: number; issue: string }[] {
  return borderConstituencies.keyElectoralIssues.map(i => ({
    priority: i.priority,
    issue: i.issue,
  }));
}

/**
 * Get Attari trade value in crore
 */
export function getAttariTradeValue(year: "peak" | "postPulwama" | "recovery"): string {
  const tradeHistory = attariWagahICP.tradeHistory;
  if (year === "peak") return tradeHistory.peak.value;
  if (year === "postPulwama") return tradeHistory.postPulwama.value;
  return tradeHistory.recovery.value;
}

/**
 * Check if border security is adequate based on drone recovery trend
 */
export function isBorderSecurityImproving(): boolean {
  const seizures = drugTraffickingData.droneSeizures;
  if (seizures.length < 2) return false;
  const latest = seizures[seizures.length - 1].cases;
  const previous = seizures[seizures.length - 2].cases;
  return latest > previous;
}
