// Power, Agriculture & Employment KPI Data for Punjab Congress 2027 Election Dashboard
// Derived from: research-M2/MP1-foundational/governance/power-agri-employment.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026
// Confidence Level: HIGH (multi-source verification)

import type {
  PowerAgriEmploymentKPI,
  PowerSectorKPI,
  AgricultureSectorKPI,
  EmploymentSectorKPI,
  IndustryInvestmentKPI,
  StrategicVulnerabilityMatrix,
  DataVerificationStatus,
  SourceCitation,
  FreeElectricityScheme,
  PSPCLFinancialHealth,
  PowerSupplyQuality,
  SolarPumpData,
  MSPGuaranteeData,
  FarmerDebtReliefData,
  FloodCompensationData,
  CropInsuranceData,
  CanalWaterSupplyData,
  JobCreationData,
  UnemploymentData,
  UnfulfilledEmploymentPromises,
  InvestmentSummitData,
  FDIData,
  MSMEData,
  AAPVulnerabilityEntry,
  DeliveryStatus,
} from "@/types/governance-power-agri-employment-types";

// ==========================================
// POWER SECTOR DATA
// ==========================================

/**
 * Free 300 Units Electricity Scheme
 */
export const freeElectricityScheme: FreeElectricityScheme = {
  promise: "300 units free electricity per household per month",
  launchDate: "1 July 2022",
  deliveryStatus: "DELIVERED",
  beneficiaryHouseholds: 800000, // ~80 lakh
  beneficiaryHouseholdsNote: "approx. 90% of total households",
  billingCycle: "600 units free per two-month billing cycle",
  domesticSubsidyCost: {
    fy2025_26: 6589, // Rs crore
    fy2026_27: 5490, // Rs crore
  },
};

/**
 * PSPCL Financial Health
 */
export const pspclFinancialHealth: PSPCLFinancialHealth = {
  totalAnnualSubsidyRequirement: 19657, // Rs crore, FY 2025-26
  subsidyBreakdown: {
    agriculture: 10413, // Rs crore
    domestic300Units: 6589, // Rs crore
    industrial: 2384, // Rs crore
  },
  unpaidSubsidy: {
    totalAsOfDec2025: 10000, // Rs crore
    currentYear2025_26: 6000, // Rs crore
    legacyUnpaid: 4093, // Rs crore
    legacyBreakdown: {
      dueMarch2025: 2289, // Rs crore
      otherLegacy: 1804, // Rs crore
    },
  },
  governmentDeptOutstandingBills: 2500, // Rs crore
  criticalConcern:
    "PSPCL has unfortunately become a milch cow in the hands of non-professionals, pushed to the brink of virtual bankruptcy.",
  associationWarning:
    "PSEB Engineers' Association wrote to CM Mann in December 2025 warning about PSPCL bankruptcy risk",
  revenueGapControversy: {
    originalGap: 1713, // Rs crore (Nov 2025 filing)
    revisedSurplus: 7851, // Rs crore
    lossReductionClaim: 2.75, // percentage points
    disputedDistributionLoss: {
      original: 12.75, // percentage
      claimed: 10, // percentage
    },
    concern:
      "This 2.75 percentage point loss reduction in a single year is considered implausible by industry observers and raises serious questions about accounting manipulation to reduce the visible subsidy burden ahead of elections.",
  },
};

/**
 * Power Supply Quality
 */
export const powerSupplyQuality: PowerSupplyQuality = {
  peakDemandMet: {
    value: 16670, // MW
    date: "June 2025",
    note: "new record",
  },
  ruralSupplyHours: "VERIFICATION_NEEDED (historically 8-12 hours)",
  urbanSupply: "Generally reliable",
  transformerFailureRate: "VERIFICATION_NEEDED",
  distributionLosses: {
    original: 12.75, // percentage
    claimed: 10, // percentage
    disputed: true,
  },
};

/**
 * Solar Pump Penetration
 */
export const solarPumpData: SolarPumpData = {
  maxInstallablePumps: 78000, // under PM-KUSUM
  applicationsInvited: {
    count: 20000, // September 2024
    date: "September 2024",
  },
  subsidyPercentage: 90, // under PM-KUSUM scheme
  actualInstallations: "VERIFICATION_NEEDED",
  paceAssessment:
    "Pace of solarisation remains slow relative to Punjab's massive agricultural power needs",
};

/**
 * Power Sector KPI
 */
export const powerSectorKPI: PowerSectorKPI = {
  freeElectricity: freeElectricityScheme,
  pspclFinancialHealth: pspclFinancialHealth,
  supplyQuality: powerSupplyQuality,
  solarPumps: solarPumpData,
};

// ==========================================
// AGRICULTURE DATA
// ==========================================

/**
 * MSP Guarantee Status
 */
export const mspGuaranteeData: MSPGuaranteeData = {
  promise: "Legal guarantee of MSP for 22 crops (matching Delhi model claim)",
  deliveryStatus: "NOT DELIVERED",
  cropsCovered: 22,
  governmentPosition: "Blames Centre; Mann urges PM to talk to farmers",
  farmerProtests: {
    startDate: "January 2025",
    locations: ["Khanauri border", "Shambhu border"],
    ongoing: true,
  },
  oppositionAttacks: ["Congress (Warring)", "SAD have targeted AAP in Assembly"],
  procurementStatus:
    "The government has not procured any crops at MSP beyond the existing wheat-paddy procurement system.",
};

/**
 * Farmer Debt Relief
 */
export const farmerDebtReliefData: FarmerDebtReliefData = {
  averageFarmDebt: 2.03, // Rs lakh
  debtRanking: "among highest in India (per Lok Sabha data)",
  aapPromise: "Complete debt waiver for farmers",
  aapDelivery: "NO new debt waiver scheme launched",
  previousWaiver: {
    scheme: "Congress (Capt Amarinder)",
    amount: 1771, // Rs crore
    beneficiaries: 109000, // 1.09 lakh farmers
  },
  farmerDemands: {
    model: "Telangana model",
    amount: 200000, // Rs 2 lakh per farmer
    totalCost: 31000, // Rs 31,000 crore
  },
};

/**
 * Flood Compensation
 */
export const floodCompensationData: FloodCompensationData = {
  year: 2023,
  amountPerAcre: 6800, // Rs
  assessment: "significantly below actual losses",
  cropInsurancePolicy: "No dedicated crop insurance policy exists for Punjab despite recurring flood risk",
  compensationNature: "Compensation remains ad hoc and inadequate",
};

/**
 * Crop Insurance (PMFBY)
 */
export const cropInsuranceData: CropInsuranceData = {
  scheme: "PMFBY (central scheme)",
  statePolicy: "Punjab does not have a state-specific crop insurance policy",
  claimSettlementNational: {
    min: 51, // percentage
    max: 69, // percentage
  },
  punjabSpecificData: "VERIFICATION_NEEDED",
  adoptionRateNational: "~25% national average",
};

/**
 * Canal Water Supply
 */
export const canalWaterSupplyData: CanalWaterSupplyData = {
  improvementStatus: "VERIFICATION_NEEDED",
  infrastructureNote:
    "Punjab's canal infrastructure continues to age; no major new canal projects announced",
  majorNewProjects: "None announced",
  groundwaterDepletion: "continues at alarming rates",
};

/**
 * Agriculture Sector KPI
 */
export const agricultureSectorKPI: AgricultureSectorKPI = {
  mspGuarantee: mspGuaranteeData,
  debtRelief: farmerDebtReliefData,
  floodCompensation: floodCompensationData,
  cropInsurance: cropInsuranceData,
  canalWater: canalWaterSupplyData,
};

// ==========================================
// EMPLOYMENT DATA
// ==========================================

/**
 * Job Creation Data
 */
export const jobCreationData: JobCreationData = {
  manifestoPromise: {
    totalJobs: 2500000, // 25 lakh
    govtVacancies: 125000, // 1.25 lakh
  },
  governmentJobs: {
    claimedByNov2024: 48000, // (AAP claim, zero-bribe recruitment)
    firstTranche: 26074,
    secondTranche: 44786,
    totalClaimedBySep2024: 70860, // ~70,860 claimed
    cabinetApprovedFeb2025: 60000, // additional
    recruitmentClaim: "zero-bribe recruitment",
  },
  privateSector: {
    claimedByCMMann: 550000, // 5.5 lakh (Mar 2026)
    assessment:
      "unverifiable and likely conflate 'employment opportunities' with actual jobs",
  },
  deliveryAssessment:
    "Government job creation is the most verifiable metric. AAP claims ~48,000 to 70,000 government jobs created over 3+ years. Even at the higher claim, this is far short of the 1.25 lakh vacancy fill promise. Private sector job claims of 5.5 lakh are unverifiable. The manifesto target of 25 lakh total jobs remains extremely distant.",
};

/**
 * Unemployment Data
 */
export const unemploymentData: UnemploymentData = {
  overall: {
    punjab: 7.7, // percentage
    national: 6.7, // percentage
    source: "PLFS",
  },
  youthUnemployment: {
    q3FY25: {
      punjab: 14.9, // percentage
      note: "up from 12.2% in Q2",
      source: "PLFS Oct-Dec 2024",
    },
    feb2026: {
      punjab: 19.3, // percentage
      source: "PLFS, Feb 2026",
    },
    rural: {
      punjab: 22.5, // percentage
      source: "BJP data, Feb 2026",
    },
    female: {
      punjab: 21.7, // percentage
      note: "up from 18.5%",
      source: "PLFS Oct-Dec 2024",
    },
  },
  ranking: {
    punjabRank: "4th highest in India",
    note: "Various sources, Feb 2026",
  },
  nationalComparison: "Significantly lower than Punjab",
  migrationData: {
    usDeportees: {
      total: 332,
      fromPunjab: 126,
      percentage: 38, // 38%
    },
    illegalMigrationNote:
      "High rates of illegal migration (126 of 332 recent US deportees were from Punjab = 38%)",
  },
};

/**
 * Unfulfilled Employment Promises
 */
export const unfulfilledEmploymentPromises: UnfulfilledEmploymentPromises = {
  womenMonthlyPayment: {
    promise: "Rs 1,000/month for women",
    deliveryStatus: "DELAYED",
    rolloutDate: "March 2026",
    delayYears: 4, // nearly 4 years
    congressDemand: "Arrears for the full 4-year period",
  },
  contractRegularisation: {
    policy: "No comprehensive policy announced",
    status: "VERIFICATION_NEEDED for specific department-level actions",
  },
  drugFreePunjab: {
    deadline: "May 2025",
    status: "Self-imposed deadline passed without success",
    dgpStatement: "battle is 'not yet over'",
  },
};

/**
 * Employment Sector KPI
 */
export const employmentSectorKPI: EmploymentSectorKPI = {
  jobCreation: jobCreationData,
  unemployment: unemploymentData,
  unfulfilledPromises: unfulfilledEmploymentPromises,
};

// ==========================================
// INDUSTRY & INVESTMENT DATA
// ==========================================

/**
 * Investment Summit Data
 */
export const investmentSummitData: InvestmentSummitData = {
  name: "Progressive Punjab Investors Summit",
  date: "March 2026",
  moUsCommitted: 12250, // Rs crore
};

/**
 * FDI Data
 */
export const fdiData: FDIData = {
  cumulativeInflow: {
    amount: 12088, // Rs crore
    period: "Oct 2019 - Sep 2025",
  },
  nationalRanking: {
    before: 14, // 14th
    current: 11, // 11th
    improvement: "suggests some reversal of capital flight",
  },
};

/**
 * MSME Data
 */
export const msmeData: MSMEData = {
  totalUnits: 160000, // ~1.6 lakh
  newPolicy: {
    name: "Industrial & Business Development Policy 2026",
    launched: "March 2026",
    focus: "MSMEs",
  },
  outcomes: "VERIFICATION_NEEDED (policy just launched)",
  creditFlow: "VERIFICATION_NEEDED",
};

/**
 * Industry Investment KPI
 */
export const industryInvestmentKPI: IndustryInvestmentKPI = {
  investmentSummit: investmentSummitData,
  fdi: fdiData,
  investmentRealized2025_26: 4000, // Rs crore claimed by Dept of Industries
  startupsRegistered: 1127,
  artisansSupported: 439000, // 4.39 lakh
  msme: msmeData,
  capitalFlightAssessment: {
    historicalPattern:
      "Historical pattern of industry migration to Himachal Pradesh, Uttarakhand (tax holidays) and other states",
    recentTrend: "Recent FDI ranking improvement (14th to 11th) suggests some reversal",
    remainingConcerns: [
      "High power subsidy burden",
      "Fiscal deficit",
      "Regulatory uncertainty",
      "Continue to deter large-scale manufacturing investment",
    ],
    mouConversionRate: "VERIFICATION_NEEDED",
  },
};

// ==========================================
// STRATEGIC VULNERABILITY MATRIX
// ==========================================

const vulnerabilityEntries: AAPVulnerabilityEntry[] = [
  {
    policyArea: "Free Electricity",
    deliveryScore: "HIGH",
    keyVulnerability: "PSPCL bankruptcy risk; Rs 10,000 crore arrears; accounting manipulation",
    congressAttackVector: '"Free today, bankrupt tomorrow"',
  },
  {
    policyArea: "MSP Guarantee",
    deliveryScore: "ZERO",
    keyVulnerability: "Complete non-delivery; farmers still protesting",
    congressAttackVector: '"4 years, zero MSP — betrayed annadata"',
  },
  {
    policyArea: "Farm Debt Relief",
    deliveryScore: "ZERO",
    keyVulnerability: "No new scheme; Rs 2.03 lakh average debt",
    congressAttackVector: '"Congress gave Rs 1,771 crore waiver; AAP gave nothing"',
  },
  {
    policyArea: "Employment",
    deliveryScore: "LOW",
    keyVulnerability: "19.3% youth unemployment; 4th worst in India",
    congressAttackVector: '"5% of promises kept, 95% of youth abandoned"',
  },
  {
    policyArea: "Women's Rs 1,000",
    deliveryScore: "LOW",
    keyVulnerability: "Delivered only when elections approach",
    congressAttackVector: '"4 years of betrayal, election year lollipop"',
  },
  {
    policyArea: "Industry",
    deliveryScore: "LOW",
    keyVulnerability: "First investor summit only in year 4",
    congressAttackVector: '"Industry fled, AAP slept, woke up in election year"',
  },
];

export const strategicVulnerabilityMatrix: StrategicVulnerabilityMatrix = {
  entries: vulnerabilityEntries,
};

// ==========================================
// DATA GAPS
// ==========================================

const dataGaps: DataVerificationStatus[] = [
  { dataPoint: "Actual transformer failure rates and rural power supply hours", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Canal water supply improvement/deterioration metrics", status: "VERIFICATION_NEEDED" },
  { dataPoint: "PMFBY claim settlement rate specific to Punjab", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Contract/ad-hoc worker regularisation data", status: "VERIFICATION_NEEDED" },
  { dataPoint: "MoU-to-investment conversion rate from 2026 Investors Summit", status: "VERIFICATION_NEEDED" },
  { dataPoint: "MSME credit flow during 2022-2026", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Actual solar pump installations vs applications", status: "VERIFICATION_NEEDED" },
  { dataPoint: "PSPCL distribution loss figures — independent verification of claimed 10%", status: "VERIFICATION_NEEDED" },
];

// ==========================================
// SOURCES
// ==========================================

const sources: SourceCitation[] = [
  { id: 1, title: "Free electricity announcement", source: "Indian Express", date: "Apr 2022" },
  { id: 2, title: "PSPCL subsidy default crosses Rs 10,000 crore", source: "Hindustan Times", date: "Dec 2025" },
  { id: 3, title: "PSPCL revenue puzzle, Rs 1,713 crore gap to Rs 7,851 crore surplus", source: "Punjab Today News", date: "Mar 2026" },
  { id: 4, title: "Unkept promises in Punjab haunt AAP", source: "Frontline/The Hindu", date: "Jan 2025" },
  { id: 5, title: "AAP faces heat over unmet promises", source: "Sunday Guardian", date: "Jul 2025" },
  { id: 6, title: "Youth unemployment rises to 19.3% in Punjab", source: "Times of India", date: "Feb 2026" },
  { id: 7, title: "AAP fulfils Rs 1,000 promise to Punjab women after 4 years", source: "NDTV", date: "Mar 2026" },
  { id: 8, title: "AAP claims 48,000 government jobs", source: "NDTV", date: "Nov 2024" },
  { id: 9, title: "CM Mann claims 5.5 lakh employment opportunities", source: "Gujarat First", date: "Mar 2026" },
  { id: 10, title: "AAP govt facing heat over MSP in State Assembly", source: "The Hindu", date: "Feb 2024" },
  { id: 11, title: "Punjab farmers' protest rekindles MSP guarantee demands", source: "Outlook India", date: "Jan 2025" },
  { id: 12, title: "Periodic Labour Force Survey, Ministry of Statistics", source: "PLFS Data", date: "Oct-Dec 2024" },
  { id: 13, title: "Youth unemployment data for Punjab", source: "BJP Chandigarh", date: "Feb 2026" },
  { id: 14, title: "Punjab rises to 11th in FDI rankings", source: "Babushahi", date: "Feb 2026" },
  { id: 15, title: "Punjab FDI cumulative inflow data", source: "Hindustan Times", date: "Feb 2026" },
  { id: 16, title: "PSEB Engineers' Association letter to CM Mann", source: "PSEB Engineers' Association", date: "Dec 2025" },
  { id: 17, title: "Solar pump scheme in Punjab under PM-KUSUM", source: "Renewable Watch", date: "Jan 2024" },
  { id: 18, title: "Punjab unemployment rate 7.7% above national 6.7%", source: "Facebook/PLFS", date: "Sep 2024" },
  { id: 19, title: "300 units free electricity promotion", source: "Instagram/X posts by PSPCL", date: "Oct 2025" },
  { id: 20, title: "Punjab farmers demand Telangana-style loan waiver", source: "Economic Times", date: "Jun 2024" },
];

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export const powerAgriEmploymentKPI: PowerAgriEmploymentKPI = {
  // Metadata
  reportDate: "19 May 2026",
  megaPillar: "MP1 - Foundational Scan (Governance Performance)",
  classification: "Competitor Performance Intelligence",
  confidence: "HIGH (multi-source verification)",

  // Sector Data
  power: powerSectorKPI,
  agriculture: agricultureSectorKPI,
  employment: employmentSectorKPI,
  industry: industryInvestmentKPI,

  // Strategic Analysis
  vulnerabilityMatrix: strategicVulnerabilityMatrix,

  // Data Quality
  dataGaps: dataGaps,

  // Sources
  sources: sources,
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get delivery status color for dashboard display
 */
export function getDeliveryStatusColor(status: DeliveryStatus): string {
  switch (status) {
    case "DELIVERED":
      return "text-green-600 bg-green-100";
    case "NOT DELIVERED":
      return "text-red-600 bg-red-100";
    case "PARTIAL":
      return "text-yellow-600 bg-yellow-100";
    case "DELAYED":
      return "text-orange-600 bg-orange-100";
    case "VERIFICATION_NEEDED":
      return "text-gray-600 bg-gray-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}

/**
 * Get vulnerability level color for dashboard display
 */
export function getVulnerabilityColor(level: "HIGH" | "MEDIUM" | "LOW" | "ZERO"): string {
  switch (level) {
    case "HIGH":
      return "text-red-600 bg-red-100";
    case "MEDIUM":
      return "text-yellow-600 bg-yellow-100";
    case "LOW":
      return "text-blue-600 bg-blue-100";
    case "ZERO":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}

/**
 * Get unemployment percentage with trend indicator
 */
export function getYouthUnemploymentData(): {
  current: number;
  rural: number;
  female: number;
  trend: "worsening" | "improving" | "stable";
} {
  return {
    current: unemploymentData.youthUnemployment.feb2026.punjab,
    rural: unemploymentData.youthUnemployment.rural.punjab,
    female: unemploymentData.youthUnemployment.female.punjab,
    trend: "worsening",
  };
}

/**
 * Get PSPCL unpaid subsidy total
 */
export function getPSPCLUnpaidSubsidy(): number {
  return pspclFinancialHealth.unpaidSubsidy.totalAsOfDec2025;
}

/**
 * Get government jobs claimed total
 */
export function getGovernmentJobsClaimed(): number {
  return jobCreationData.governmentJobs.totalClaimedBySep2024;
}

/**
 * Get manifesto job target vs delivery comparison
 */
export function getManifestoDeliveryRatio(): {
  target: number;
  delivered: number;
  percentage: number;
} {
  const target = jobCreationData.manifestoPromise.govtVacancies;
  const delivered = jobCreationData.governmentJobs.totalClaimedBySep2024;
  return {
    target,
    delivered,
    percentage: Math.round((delivered / target) * 100 * 10) / 10,
  };
}

/**
 * Get free electricity subsidy cost
 */
export function getFreeElectricitySubsidyCost(): {
  fy2025_26: number;
  fy2026_27: number;
} {
  return freeElectricityScheme.domesticSubsidyCost;
}

/**
 * Get AAP's most critical vulnerabilities
 */
export function getCriticalVulnerabilities(): AAPVulnerabilityEntry[] {
  return vulnerabilityEntries.filter(
    (e) => e.deliveryScore === "ZERO" || e.deliveryScore === "LOW"
  );
}

/**
 * Get employment promise delivery status
 */
export function getEmploymentPromiseStatus(): {
  jobsDelivered: number;
  jobsTarget: number;
  youthUnemployment: number;
  womenPaymentStatus: DeliveryStatus;
} {
  return {
    jobsDelivered: jobCreationData.governmentJobs.totalClaimedBySep2024,
    jobsTarget: jobCreationData.manifestoPromise.govtVacancies,
    youthUnemployment: unemploymentData.youthUnemployment.feb2026.punjab,
    womenPaymentStatus: unfulfilledEmploymentPromises.womenMonthlyPayment.deliveryStatus,
  };
}
