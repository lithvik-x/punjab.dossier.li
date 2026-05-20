// Governance - AAP Department Scorecard Data for Punjab 2022-2026
// Derived from: research-M2/MP1-foundational/governance/department-scorecard.md
// Research Date: 19 May 2026 | Data Currency: March-April 2026

import type {
  DepartmentScorecardData,
  Grade,
  DepartmentScorecard,
  CampaignAttackVector,
  RegionPriority,
  DataPointSummary,
  DataGap,
  DepartmentMetric,
} from "@/types/governance-department-types";

// ==========================================
// METADATA
// ==========================================

const METADATA = {
  researchDate: "19 May 2026",
  sourcesConsulted: 14,
  dataFreshness: "March-April 2026 (AAP 4-year report card, Outlook India analysis, Indian Express year-ender, Hindustan Times, Indian Masterminds, budget documents)",
  confidence: "MEDIUM" as const,
  aggregateGrade: "C+" as Grade,
  aggregateScore: 6.94,
};

// ==========================================
// OVERALL SUMMARY
// ==========================================

const OVERALL_SUMMARY = {
  aggregateGrade: "C+" as Grade,
  aggregateScore: 6.94,
  topPerformers: ["Power", "Health", "Education"],
  worstPerformers: ["Home (Police)", "Agriculture", "Industries", "Transport", "Urban Dev", "Revenue", "Food & Civil Supplies"],
  gradeDistribution: [
    { category: "Grade A/A-" as const, departments: ["Power", "Health"] },
    { category: "Grade B/B-" as const, departments: ["Finance", "Rural Development"] },
    { category: "Grade C/C-" as const, departments: ["PWD/Roads", "Water Supply", "Social Security"] },
    { category: "Grade D/F" as const, departments: ["Home (Police)", "Agriculture", "Industries", "Transport", "Urban Dev", "Revenue", "Food & Civil Supplies"] },
  ],
  congressMessaging: "Free electricity bills cannot mask paid-for lives — Punjab pays the price of AAP's Delhi-model experiment.",
};

// ==========================================
// HELPER FUNCTION FOR METRICS
// ==========================================

function createMetric(promise: string, achieved: string, assessment: DepartmentMetric["assessment"]): DepartmentMetric {
  return { promise, achieved, assessment };
}

// ==========================================
// DEPARTMENT DATA
// ==========================================

const POWER_ELECTRICITY: DepartmentScorecard = {
  id: 1,
  name: "Power & Electricity",
  grade: "A-",
  metrics: {
    freeElectricity: createMetric(
      "300 units free/month for households",
      "90-91% households get zero bills year-round; 75-80% even in peak summer",
      "DELIVERED"
    ),
    daytimePowerForFarmers: createMetric(
      "Daytime power to tubewells",
      "Extended daytime supply to agricultural tubewells (67% of agriculture budget goes to free tubewell power)",
      "DELIVERED"
    ),
    pspclProfitability: createMetric(
      "Make power corp profitable",
      "PSPCL posted profits for 3 consecutive years; Rs 5,000 crore overhaul of transmission/distribution initiated (Oct 2025)",
      "LARGELY DELIVERED"
    ),
    powerInfrastructure: createMetric(
      "Zero power cuts",
      "Rs 5,000 crore modernization plan announced Oct 2025 — ongoing; outages still reported in rural areas",
      "PARTIAL"
    ),
    tariffReduction: createMetric(
      "Reduce tariffs",
      "Domestic, commercial, industrial tariffs reduced; 540 MW private thermal plant purchased to lower generation costs",
      "DELIVERED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
    utilization: "NOT_FOUND",
  },
  publicSatisfaction: "HIGH",
  keyStats: {
    householdsZeroBills: 90.5,
    peakSummerCoverage: 77.5,
    tubewellPowerShare: 67,
    pspclProfitYears: 3,
    transmissionOverhaul: 5000,
    modernizationsPlan: 5000,
  },
  congressCounterNarrative: "AAP bought votes with free electricity while PSPCL's 'profits' hide deferred payments and mounting subsidy liabilities. Who pays for the free power? Punjab's future generations through debt.",
};

const HEALTH_WELFARE: DepartmentScorecard = {
  id: 2,
  name: "Health & Family Welfare",
  grade: "B+",
  metrics: {
    aamAadmiClinics: createMetric(
      "Mohalla Clinics in every locality",
      "881 Aam Aadmi Clinics operational (target was higher); 5+ crore OPD visits cumulative",
      "LARGELY DELIVERED"
    ),
    freeDiagnostics: createMetric(
      "80+ tests free at clinics",
      "80 diagnostic tests free at AACs confirmed",
      "DELIVERED"
    ),
    healthInsurance: createMetric(
      "Cashless treatment for poor",
      "Mukh Mantri Sehat Yojana — up to Rs 10 lakh/family cashless in empanelled hospitals",
      "DELIVERED"
    ),
    doctorRecruitment: createMetric(
      "Fill vacancies",
      "1,575 doctors recruited in 4 years",
      "PARTIAL (vacancies remain)"
    ),
    medicalColleges: createMetric(
      "Expand medical education",
      "7 new medical colleges under construction; ~600 MBBS seats to be added",
      "IN PROGRESS"
    ),
    farishteyScheme: createMetric(
      "Accident victim support",
      "1,700+ beneficiaries — scheme operational but limited reach",
      "PARTIAL"
    ),
    aimsPunjab: createMetric(
      "Push for AIIMS",
      "NOT_FOUND — no concrete progress reported",
      "NOT DELIVERED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND (embedded in Rs 2.36 lakh crore budget 2025-26)",
  },
  publicSatisfaction: "MODERATE-HIGH",
  keyStats: {
    clinicsOperational: 881,
    targetHigher: true,
    opdVisitsCumulative: 50000000,
    diagnosticTestsFree: 80,
    healthInsuranceCoverage: 1000000,
    doctorsRecruited4Years: 1575,
    medicalCollegesUnderConstruction: 7,
    mbbsSeatsToAdd: 600,
    farishteyBeneficiaries: 1700,
  },
  clinicFundingDisputes: "Centre-AAP clash over naming/funding; clinics renamed from Mohalla to Aam Aadmi causing central fund disputes (reported Jun 2023-2024)",
  congressCounterNarrative: "881 clinics in 4 years when 2,000+ were promised. And who pays when medicines run out by the 10th of every month? The Mann government's health model is a PR exercise, not a healthcare system.",
};

const HOME_POLICE: DepartmentScorecard = {
  id: 3,
  name: "Home (Police / Law & Order)",
  grade: "D+",
  metrics: {
    endGangsterCulture: createMetric(
      "Eliminate gangsters",
      "992 gangsters arrested in 2025; BUT grenade attacks, extortion, targeted killings INCREASED",
      "FAILED"
    ),
    drugElimination: createMetric(
      "End drug menace within months",
      "Yudh Nasheya Virudh campaign — 2,021 kg heroin recovered in 2025 (highest ever); BUT no reduction in street-level drug availability",
      "FAILED"
    ),
    bulldozerJustice: createMetric(
      "Demolish drug mafia properties",
      "Houses of drug mafia demolished (Feb 2025); theatrical but limited deterrence",
      "PARTIAL"
    ),
    policeReform: createMetric(
      "Professionalize police",
      "Multiple SSP/ADGP suspensions for political reasons; CBI raids on officers; morale 'bruised and battered'",
      "FAILED"
    ),
    antiTerror: createMetric(
      "Prevent terror incidents",
      "Grenade attacks on police stations, BJP HQ, Mohali intelligence HQ; BKI modules busted but threat persists",
      "FAILED"
    ),
    convictionRate: createMetric(
      "Improve convictions",
      "Official claim of improved conviction rate — NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW",
  keyStats: {
    gangstersArrested2025: 992,
    grenadeAttacksIncreased: true,
    extortionIncreased: true,
    heroinRecovered2025: 2021,
    recordBusts: true,
    threatPersists: true,
  },
  keyFailures: [
    "Daylight murders (kabaddi promoter Rana Balachauria Dec 2025, Abohar businessman Jul 2025)",
    "Punjab-Haryana HC suo motu cognisance",
    "Serving Colonel assaulted by police in Patiala",
    "Newspaper delivery vehicles stopped under drug check pretext (political intimidation)",
  ],
  congressCounterNarrative: "AAP turned Punjab into a playground for gangsters. When the High Court has to summon the DGP, you know the government has lost control. Free electricity cannot protect your family from extortion calls at midnight.",
};

const EDUCATION: DepartmentScorecard = {
  id: 4,
  name: "Education",
  grade: "B",
  metrics: {
    improveGovernmentSchools: createMetric(
      "Delhi-model transformation",
      "Punjab ranked #1 in National Achievement Survey (NAS); 9,000 smart classrooms, 5,000 computer labs, 1 lakh+ desks supplied",
      "LARGELY DELIVERED"
    ),
    teacherRecruitment: createMetric(
      "Fill all vacancies",
      "15,000+ teachers recruited; contractual teachers regularised",
      "PARTIAL (vacancies remain)"
    ),
    teacherTraining: createMetric(
      "World-class training",
      "Teachers/principals sent to Finland, Singapore; management training in India",
      "DELIVERED"
    ),
    competitiveExams: createMetric(
      "Government school students in JEE/NEET",
      "305 JEE Main + 845 NEET qualifiers from govt schools in 2026",
      "IMPROVED"
    ),
    budgetIncrease: createMetric(
      "Significant increase",
      "Education budget up 52% in 4 years (CM claim, Mar 2026)",
      "DELIVERED"
    ),
    universities: createMetric(
      "Improve higher education",
      "Universities remain in 'pretty bad situation'; lack of government support noted",
      "FAILED"
    ),
  },
  budget: {
    allocation: 16000,
    utilization: "NOT_FOUND verification needed",
  },
  publicSatisfaction: "MODERATE-HIGH",
  keyStats: {
    nasRanking: "#1 in National Achievement Survey",
    smartClassrooms: 9000,
    computerLabs: 5000,
    desksSupplied: 100000,
    teachersRecruited: 15000,
    contractualTeachersRegularised: true,
    teacherTrainingCountries: ["Finland", "Singapore"],
    jeeMainQualifiers2026: 305,
    neetQualifiers2026: 845,
    budgetIncrease4Years: 52,
  },
  congressCounterNarrative: "AAP spent on smart classrooms but forgot the teachers. 15,000 recruited when 40,000+ posts are vacant. And Punjab's universities — the real engines of social mobility — are crumbling under AAP's neglect.",
};

const AGRICULTURE: DepartmentScorecard = {
  id: 5,
  name: "Agriculture",
  grade: "D+",
  metrics: {
    mspForAllCrops: createMetric(
      "Procurement of 22 crops at MSP",
      "NOT DELIVERED — agriculture policy still being finalized by state farmers' commission",
      "FAILED"
    ),
    debtWaiver: createMetric(
      "Relieve farmer distress",
      "No new debt waiver scheme; farmers remain debt-ridden and suicides continue",
      "FAILED"
    ),
    cropDiversification: createMetric(
      "Move away from paddy-wheat",
      "FAILED — cotton area dropped to 1.75 lakh hectares (13-year low in 2023); kinnow prices crashed; diversification still remains a challenge",
      "FAILED"
    ),
    stubbleBurning: createMetric(
      "Reduce farm fires",
      "26% reduction in fire incidents in 2023; Rs 500 crore subsidy for residue management; area under fires still increased 25%",
      "PARTIAL"
    ),
    farmerNegotiations: createMetric(
      "Resolve farmer demands",
      "Multiple meetings with CM Mann FAILED; farmers detained Mar 2025; Dhaniyat and Khanauri protests ongoing",
      "FAILED"
    ),
    canalIrrigation: createMetric(
      "Expand canal network",
      "Canal water extended to tail ends in Fazilka-Abohar belt",
      "PARTIAL"
    ),
  },
  budget: {
    allocation2024_25: 13784,
    allocation2023_24: 13888,
    tubewellPowerShare: 67,
  },
  publicSatisfaction: "LOW",
  keyStats: {
    mspDelivery: "NOT DELIVERED",
    debtWaiverStatus: "No new scheme",
    cottonArea2023: 1.75,
    cropDiversificationStatus: "FAILED",
    stubbleBurningReduction2023: 26,
    stubbleBurningAreaIncrease: 25,
    canalWaterExtension: "Fazilka-Abohar belt",
  },
  congressCounterNarrative: "AAP promised MSP for 22 crops and delivered zero. Farmer suicides continue. The agriculture budget is actually a power subsidy budget disguised as farmer welfare. When farmers protested, Mann sent police to dismantle their tents.",
};

const FINANCE_PLANNING: DepartmentScorecard = {
  id: 6,
  name: "Finance & Planning",
  grade: "B-",
  metrics: {
    debtManagement: createMetric(
      "Reduce Punjab's debt burden",
      "Debt-to-GSDP ratio reduced from 48.25% to 44.47% (4-point drop); outstanding debt still Rs 3+ lakh crore",
      "PARTIAL"
    ),
    revenueGrowth: createMetric(
      "Increase state revenue",
      "Own tax revenue: Rs 37,327 cr (2021-22) to Rs 57,919 cr (2024-25) — among top 3 states in revenue growth",
      "DELIVERED"
    ),
    exciseRevenue: createMetric(
      "Improve collections",
      "Rs 6,157 cr (2021-22) to projected Rs 11,500 cr (2025-26) — 86.77% increase",
      "DELIVERED"
    ),
    gstCollection: createMetric(
      "Improve GST mop-up",
      "Rs 15,542 cr (2021-22) to projected Rs 26,500 cr (2025-26) — 70.5% growth",
      "DELIVERED"
    ),
    stampDuty: createMetric(
      "Increase registration revenue",
      "Annual average Rs 5,091 cr vs Congress era Rs 2,494 cr — 60% more in 4 years vs previous 5-year terms",
      "DELIVERED"
    ),
    capexSpending: createMetric(
      "Increase capital expenditure",
      "Rs 31,630 cr proposed vs Congress Rs 19,356 cr",
      "IMPROVED"
    ),
    centralSupportDecline: createMetric(
      "Central support",
      "Central grants dropped from Rs 72,340 cr (2017-22) to Rs 27,832 cr (2022-Jan 2026); RDG and GST compensation discontinued",
      "NEGATIVE (not AAP's fault)"
    ),
  },
  budget: {
    total2025_26: 236000,
    theme: "Badalda Punjab",
  },
  publicSatisfaction: "NOT_FOUND",
  keyStats: {
    debtToGSDPBefore: 48.25,
    debtToGSDPAfter: 44.47,
    debtReduction: 4,
    outstandingDebt: 300000,
    ownTaxRevenue2021_22: 37327,
    ownTaxRevenue2024_25: 57919,
    taxRevenueGrowth: 55,
    exciseRevenue2021_22: 6157,
    exciseRevenue2025_26: 11500,
    exciseGrowth: 86.77,
    gst2021_22: 15542,
    gst2025_26: 26500,
    gstGrowth: 70.5,
    stampDutyAnnualAvg: 5091,
    stampDutyCongressEra: 2494,
    stampDutyIncrease: 60,
    capexProposed: 31630,
    capexCongress: 19356,
    centralGrantsDrop2017_22: 72340,
    centralGrantsDrop2022_26: 27832,
  },
  caveat: "85% of new borrowings go to servicing old debt; less than 15% available for actual governance",
  congressCounterNarrative: "AAP claims fiscal discipline while Punjab's debt has actually GROWN in absolute terms to Rs 3+ lakh crore. They service old debt with new borrowing — this is not management, it's a Ponzi scheme on Punjab's future.",
};

const RURAL_DEVELOPMENT: DepartmentScorecard = {
  id: 7,
  name: "Rural Development & Panchayats",
  grade: "B-",
  metrics: {
    ruralRoads: createMetric(
      "Pucca roads to every village",
      "13,400 km link roads approved for construction; 43,000 km under work via state boards; Rs 16,209 crore commitment",
      "LARGELY DELIVERED"
    ),
    financeCommissionFunds: createMetric(
      "Effective utilization",
      "Rs 2,367.64 cr spent in 2025-26 — double previous year (CM claim)",
      "IMPROVED"
    ),
    panchayatEmpowerment: createMetric(
      "Strengthen local governance",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
    ruralEmployment: createMetric(
      "Job creation",
      "NOT_FOUND verification needed (beyond 65,000 govt jobs claim)",
      "UNVERIFIED"
    ),
  },
  budget: {
    roads2026: 12597,
    totalInfrastructure2025_26: 33550,
  },
  publicSatisfaction: "MODERATE",
  keyStats: {
    linkRoadsApproved: 13400,
    roadsUnderWork: 43000,
    roadsCommitment: 16209,
    fcFunds2025_26: 2367.64,
    fcFundsVsPreviousYear: 2,
  },
  congressCounterNarrative: "Roads are being built, but at what cost? No transparency in contracts, and the quality of AAP-built roads is already deteriorating within one monsoon season. This is infrastructure for the camera, not for the community.",
};

const URBAN_DEVELOPMENT: DepartmentScorecard = {
  id: 8,
  name: "Urban Development",
  grade: "C-",
  metrics: {
    smartCities: createMetric(
      "Transform urban infrastructure",
      "NOT_FOUND — no significant progress reported beyond central scheme participation",
      "FAILED"
    ),
    mohallaClinicsUrban: createMetric(
      "Urban health coverage",
      "Clinics operational in urban areas — covered under health department",
      "DELIVERED"
    ),
    urbanLandAcquisition: createMetric(
      "Planned development",
      "65,533 acres from 21 cities for residential/commercial development; government accused of acting as 'property dealer'",
      "CONTROVERSIAL"
    ),
    aamAadmiCanteens: createMetric(
      "Affordable food canteens",
      "Non-starters per Outlook India analysis",
      "FAILED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW",
  keyStats: {
    smartCitiesProgress: "NOT_FOUND",
    landAcquired: 65533,
    citiesAffected: 21,
    canteensStatus: "Non-starters",
  },
  congressCounterNarrative: "AAP is not developing urban Punjab — it is auctioning it. 65,000 acres of land being acquired from farmers and handed to colonizers. The AAP government has become Punjab's biggest property dealer.",
};

const PUBLIC_WORKS: DepartmentScorecard = {
  id: 9,
  name: "Public Works (Roads & Bridges)",
  grade: "C+",
  metrics: {
    roadConstruction: createMetric(
      "Massive road network upgrade",
      "13,400 km link roads approved; Rs 12,597 cr for roads in Budget 2026; 'corruption-free road mission' claimed",
      "LARGELY DELIVERED"
    ),
    bridgeConstruction: createMetric(
      "New bridges",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
    roadQuality: createMetric(
      "Durable roads",
      "Quality concerns raised; 'corruption-free road mission' tagline suggests previous corruption acknowledged",
      "PARTIAL"
    ),
  },
  budget: {
    roads2026: 12597,
    totalInfrastructure: 33550,
  },
  publicSatisfaction: "MODERATE",
  keyStats: {
    linkRoadsApproved: 13400,
    roadsWork: 43000,
    corruptionFreeMission: true,
  },
  congressCounterNarrative: "AAP's 'corruption-free road mission' is itself an admission that corruption existed. The roads built in the first two years are already breaking. Punjab deserves infrastructure that lasts, not roads that last only until the next election.",
};

const WATER_SUPPLY: DepartmentScorecard = {
  id: 10,
  name: "Water Supply & Sanitation",
  grade: "C",
  metrics: {
    tapWaterHousehold: createMetric(
      "100% rural piped water",
      "99.93% tap water coverage claimed (AAP source); 78.30% nationally per JJM data (Jan 2025)",
      "LARGELY DELIVERED"
    ),
    canalWaterTailEnds: createMetric(
      "Irrigation access",
      "Canal water extended to tail ends in Fazilka-Abohar belt",
      "PARTIAL"
    ),
    sanitation: createMetric(
      "Rural and urban sanitation",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
  },
  budget: {
    allocation: "embedded in multiple schemes",
  },
  publicSatisfaction: "MODERATE",
  keyStats: {
    tapCoverageAAP: 99.93,
    tapCoverageNationally: 78.3,
    canalWaterExtension: "Fazilka-Abohar belt",
  },
  congressCounterNarrative: "99% tap connections mean nothing when the water runs for two hours a day. AAP counted connections, not quality of supply. Punjab's water table is falling while AAP celebrates paper targets.",
};

const SOCIAL_SECURITY: DepartmentScorecard = {
  id: 11,
  name: "Social Security & Women/Child Development",
  grade: "C-",
  metrics: {
    womenHonorarium: createMetric(
      "Rs 1,000/month for women",
      "Monthly honorarium Rs 1,000-1,500 proposed — NOT confirmed as fully operational",
      "PARTIAL"
    ),
    meriRasoi: createMetric(
      "Food support",
      "Ration support planned for ~40 lakh families — 'being planned' status",
      "NOT FULLY DELIVERED"
    ),
    childWelfare: createMetric(
      "Comprehensive child development",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
    oldAgePensions: createMetric(
      "Improve pension delivery",
      "Pension Seva Portal digitized — process improvement",
      "PARTIAL"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW-MODERATE",
  keyStats: {
    womenHonorariumAmount: "Rs 1,000-1,500/month (proposed)",
    honorariumOperational: "NOT confirmed",
    rationFamiliesTargeted: 4000000,
    rationStatus: "being planned",
  },
  congressCounterNarrative: "AAP promised Rs 1,000/month to every woman. Four years later, it's still 'being planned.' The Mann government treats women's dignity as a press release, not a policy.",
};

const INDUSTRIES: DepartmentScorecard = {
  id: 12,
  name: "Industries & Commerce",
  grade: "C",
  metrics: {
    investmentAttraction: createMetric(
      "Bring industry to Punjab",
      "Rs 1.55 lakh crore investment proposals (Progressive Punjab Investors Summit); claimed 5.5 lakh potential jobs",
      "PARTIAL"
    ),
    easeOfBusiness: createMetric(
      "Simplify approvals",
      "Right to Business Act — MSMEs get approvals in 5-18 days; FastTrack Punjab portal with 200+ services",
      "DELIVERED"
    ),
    jobCreation: createMetric(
      "25 lakh jobs",
      "65,000 govt jobs; private jobs from investment remain proposals",
      "FAILED"
    ),
    exitOfIndustry: createMetric(
      "Stop industrial flight",
      "NOT_FOUND verification needed; organized crime/extortion driving business away",
      "UNVERIFIED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW-MODERATE",
  keyStats: {
    investmentProposals: 155000,
    potentialJobs: 550000,
    governmentJobsCreated: 65000,
    rightToBusinessAct: true,
    fastTrackPunjabServices: 200,
    approvalDays: "5-18 days for MSMEs",
  },
  congressCounterNarrative: "Rs 1.55 lakh crore in 'proposals' means nothing when businessmen are receiving extortion calls. Industry doesn't invest in states where gangsters operate with impunity. AAP's investment summit was a photo opportunity, not an industrial policy.",
};

const TRANSPORT: DepartmentScorecard = {
  id: 13,
  name: "Transport",
  grade: "D+",
  metrics: {
    publicTransportOverhaul: createMetric(
      "Modernize buses and routes",
      "NOT_FOUND verification needed; no major transport reform reported",
      "UNVERIFIED"
    ),
    endTransportMafia: createMetric(
      "Break transport mafia",
      "Transport mafia continues to flourish per Outlook India analysis",
      "FAILED"
    ),
    electricBuses: createMetric(
      "Green transport",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW",
  keyStats: {
    transportMafiaStatus: "continues to flourish",
  },
  congressCounterNarrative: "AAP promised to end the transport mafia. Instead, the mafia runs the roads while Punjab's bus fleet ages. The common man waits at bus stands while AAP leaders travel in convoys of SUVs.",
};

const REVENUE: DepartmentScorecard = {
  id: 14,
  name: "Revenue & Rehabilitation",
  grade: "C-",
  metrics: {
    stampDutyRevenue: createMetric(
      "Increase property registrations",
      "Rs 19,515 cr collected in 4 years — 60% more than Congress/SAD-BJP 5-year terms",
      "DELIVERED"
    ),
    landAcquisitionPolicy: createMetric(
      "Fair rehabilitation",
      "Controversial — mass land acquisition from farmers for urban development; rehabilitation unclear",
      "CONTROVERSIAL"
    ),
    digitization: createMetric(
      "Modernize records",
      "e-Deposit Management System introduced; Rs 800 cr central incentive for SNA-SPARSH digitization",
      "PARTIAL"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW",
  keyStats: {
    stampDuty4Years: 19515,
    stampDutyVsCongress: 60,
    landAcquisition: 65533,
    citiesAffected: 21,
    digitizationIncentive: 800,
  },
  congressCounterNarrative: "AAP's revenue growth comes from selling Punjab's land to the highest bidder. Farmers lose their fields, and the government calls it 'development.'",
};

const FOOD_CIVIL_SUPPLIES: DepartmentScorecard = {
  id: 15,
  name: "Food & Civil Supplies",
  grade: "C-",
  metrics: {
    rationDelivery: createMetric(
      "Efficient PDS",
      "Meri Rasoi programme being planned for 40 lakh families — not operational",
      "NOT DELIVERED"
    ),
    procurementSystem: createMetric(
      "Smooth procurement",
      "Problems with procurement — arhtiya (commission agent) strike disrupted operations",
      "FAILED"
    ),
    foodSecurity: createMetric(
      "Ensure no hunger",
      "NOT_FOUND verification needed",
      "UNVERIFIED"
    ),
  },
  budget: {
    allocation: "NOT_FOUND",
  },
  publicSatisfaction: "LOW",
  keyStats: {
    meriRasoiFamiliesTargeted: 400000,
    meriRasoiStatus: "not operational",
    arhtiyaStrike: "disrupted operations",
  },
  congressCounterNarrative: "When arhtiyas went on strike, AAP had no plan. The foodgrain procurement system that feeds the nation ground to a halt because Mann couldn't manage the commission agents. This is not governance — this is chaos.",
};

// ==========================================
// ALL DEPARTMENTS ARRAY
// ==========================================

const DEPARTMENTS: DepartmentScorecard[] = [
  POWER_ELECTRICITY,
  HEALTH_WELFARE,
  HOME_POLICE,
  EDUCATION,
  AGRICULTURE,
  FINANCE_PLANNING,
  RURAL_DEVELOPMENT,
  URBAN_DEVELOPMENT,
  PUBLIC_WORKS,
  WATER_SUPPLY,
  SOCIAL_SECURITY,
  INDUSTRIES,
  TRANSPORT,
  REVENUE,
  FOOD_CIVIL_SUPPLIES,
];

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

const STRATEGIC_IMPLICATIONS = {
  topAttackVectors: [
    {
      rank: 1,
      department: "Law & Order",
      grade: "D+" as Grade,
      description: "The single most potent issue. Grenade attacks, gangster extortion, targeted killings, drug availability unchanged despite war. High Court interventions undermine AAP's governance credibility.",
      campaignSuggestion: "Congress should run a 'Punjab Safe Again' campaign.",
    },
    {
      rank: 2,
      department: "Agriculture",
      grade: "D+" as Grade,
      description: "Zero MSP delivery, no debt waiver, continuing suicides, farmer protests violently suppressed. In a state where 70%+ voters are rural, this is existential.",
      campaignSuggestion: "Congress must promise MSP guarantee and debt relief.",
    },
    {
      rank: 3,
      department: "Jobs",
      grade: "FAILED" as Grade,
      description: "The gap between promise and delivery on employment is 97.4%. This directly hits youth (highest unemployment demographic).",
      campaignSuggestion: "Congress should promise employment-linked industrialization.",
    },
    {
      rank: 4,
      department: "Urban Land Grab",
      grade: "C-" as Grade,
      description: "65,533 acres being acquired. AAP as 'property dealer' narrative resonates with both farmers losing land and urban poor facing housing crisis.",
      campaignSuggestion: "Frame AAP as 'property dealer' not developer.",
    },
    {
      rank: 5,
      department: "Anti-Corruption Hypocrisy",
      grade: "FAILED" as Grade,
      description: "AAP came to power on anti-corruption platform but: no Jan Lokpal, ministers/MLAs resigned on corruption charges, VIP culture unchanged.",
      campaignSuggestion: "Congress must position itself as the genuine clean alternative.",
    },
  ] as CampaignAttackVector[],

  regionPriorities: [
    {
      region: "Malwa" as const,
      seats: 69,
      priorityDepartments: ["Agriculture", "Power", "Health"],
      keyMessage: "Free electricity can't save your crop. MSP promise was a lie.",
    },
    {
      region: "Majha" as const,
      seats: 25,
      priorityDepartments: ["Home (Border Security)", "Drugs", "Employment"],
      keyMessage: "Gangsters rule while youth flee abroad. Punjab deserves safety.",
    },
    {
      region: "Doaba" as const,
      seats: 23,
      priorityDepartments: ["Education", "Employment", "Industries"],
      keyMessage: "Smart classrooms without jobs just prepare youth for immigration.",
    },
  ] as RegionPriority[],
};

// ==========================================
// DATA POINTS SUMMARY
// ==========================================

const DATA_POINT_SUMMARY: DataPointSummary[] = [
  { id: 1, department: "Power & Electricity", grade: "A-", budgetUtil: "NOT_FOUND", keyMetric: "90% zero bills", congressHook: "Profits hide deferred payments" },
  { id: 2, department: "Health & Family Welfare", grade: "B+", budgetUtil: "NOT_FOUND", keyMetric: "881 clinics (target higher)", congressHook: "Medicines run out by the 10th" },
  { id: 3, department: "Home / Police", grade: "D+", budgetUtil: "NOT_FOUND", keyMetric: "Grenade attacks, extortion up", congressHook: "Playground for gangsters" },
  { id: 4, department: "Education", grade: "B", budgetUtil: "52% budget increase", keyMetric: "#1 in NAS", congressHook: "40,000 teacher posts still vacant" },
  { id: 5, department: "Agriculture", grade: "D+", budgetUtil: "Rs 13,784 cr (67% = power)", keyMetric: "Zero MSP delivered", congressHook: "MSP promise was a lie" },
  { id: 6, department: "Finance & Planning", grade: "B-", budgetUtil: "Rs 2.36L cr budget", keyMetric: "Debt-to-GSDP down 4pts", congressHook: "Debt grew in absolute terms" },
  { id: 7, department: "Rural Development", grade: "B-", budgetUtil: "Rs 2,368 cr (15th FC)", keyMetric: "13,400 km roads approved", congressHook: "Roads that last one monsoon" },
  { id: 8, department: "Urban Development", grade: "C-", budgetUtil: "NOT_FOUND", keyMetric: "65,533 acres acquired", congressHook: "AAP = property dealer" },
  { id: 9, department: "Public Works / Roads", grade: "C+", budgetUtil: "Rs 12,597 cr (roads)", keyMetric: "43,000 km under work", congressHook: "Corruption-free claim = admission" },
  { id: 10, department: "Water Supply", grade: "C", budgetUtil: "NOT_FOUND", keyMetric: "99.93% tap connections", congressHook: "Connections ≠ supply quality" },
  { id: 11, department: "Social Security / Women", grade: "C-", budgetUtil: "NOT_FOUND", keyMetric: "Honorarium still planned", congressHook: "Women's dignity = press release" },
  { id: 12, department: "Industries", grade: "C", budgetUtil: "NOT_FOUND", keyMetric: "Rs 1.55L cr proposals", congressHook: "Proposals ≠ investment" },
  { id: 13, department: "Transport", grade: "D+", budgetUtil: "NOT_FOUND", keyMetric: "Transport mafia flourishes", congressHook: "Mafia runs the roads" },
  { id: 14, department: "Revenue / Rehabilitation", grade: "C-", budgetUtil: "Rs 19,515 cr collected", keyMetric: "Land acquisition controversy", congressHook: "Revenue from selling farmer land" },
  { id: 15, department: "Food & Civil Supplies", grade: "C-", budgetUtil: "NOT_FOUND", keyMetric: "Arhtiya strike disruption", congressHook: "Can't manage procurement" },
];

// ==========================================
// DATA GAPS
// ==========================================

const DATA_GAPS: DataGap[] = [
  { id: 1, dataPoint: "Budget utilization data", verificationNeeded: "Most department-specific budget utilization figures. Need Punjab Finance Department annual reports or CAG audit reports." },
  { id: 2, dataPoint: "PSPCL detailed financials", verificationNeeded: "Profit claims need verification — operational profits vs accounting adjustments, subsidy liability." },
  { id: 3, dataPoint: "Aam Aadmi Clinic functioning", verificationNeeded: "881 operational vs target, medicine availability, staff vacancies, patient satisfaction." },
  { id: 4, dataPoint: "Drug seizure vs availability", verificationNeeded: "Official claims of record seizures vs ground-level drug availability (NDPS cases, rehabilitation centre admissions)." },
  { id: 5, dataPoint: "Investment proposals vs realization", verificationNeeded: "Rs 1.55 lakh crore in proposals — how much actually invested on ground? Need DPIIT/MoSPI data." },
  { id: 6, dataPoint: "Employment data", verificationNeeded: "65,000 govt jobs — need breakdown by department, regular vs contractual, verification through appointment letters." },
  { id: 7, dataPoint: "Farmer suicide data", verificationNeeded: "Claims numbers have 'come down' — need NCRB/state crime records data for 2022-2026." },
  { id: 8, dataPoint: "Road quality audits", verificationNeeded: "Third-party quality audit data for 'corruption-free road mission' claims." },
  { id: 9, dataPoint: "Water supply regularity", verificationNeeded: "Tap connections exist but daily supply hours, water quality, maintenance data needed." },
  { id: 10, dataPoint: "Women's scheme operationalization", verificationNeeded: "Rs 1,000-1,500 honorarium — actually being disbursed? How many beneficiaries?" },
];

// ==========================================
// SOURCES
// ==========================================

const SOURCES = [
  "Indian Express (Dec 2025 year-ender, Mar 2026 Cheema interview)",
  "Outlook India (Apr 2026 analysis by Prof. Ashutosh Kumar, PU)",
  "Indian Masterminds (4-year report)",
  "Hindustan Times (agriculture, education)",
  "AAP official statements",
  "PSPCL social media",
  "NDTV",
  "Economic Times",
  "New Indian Express",
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const departmentScorecardData: DepartmentScorecardData = {
  metadata: METADATA,
  overallSummary: OVERALL_SUMMARY,
  departments: DEPARTMENTS,
  strategicImplications: STRATEGIC_IMPLICATIONS,
  dataPointSummary: DATA_POINT_SUMMARY,
  dataGaps: DATA_GAPS,
  sources: SOURCES,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get grade color for Badge component
 */
export function getGradeColor(grade: Grade): "success" | "warning" | "danger" | "default" | "info" {
  if (grade.startsWith("A")) return "success";
  if (grade.startsWith("B")) return "info";
  if (grade.startsWith("C")) return "warning";
  return "danger";
}

/**
 * Get satisfaction color
 */
export function getSatisfactionColor(satisfaction: string): "success" | "warning" | "danger" | "default" | "info" {
  if (satisfaction === "HIGH" || satisfaction === "MODERATE-HIGH") return "success";
  if (satisfaction === "MODERATE" || satisfaction === "LOW-MODERATE") return "warning";
  if (satisfaction === "LOW") return "danger";
  if (satisfaction === "NOT_FOUND") return "info";
  return "default";
}

/**
 * Get assessment status color
 */
export function getAssessmentColor(assessment: string): "success" | "warning" | "danger" | "info" | "default" {
  if (assessment === "DELIVERED" || assessment === "LARGELY DELIVERED") return "success";
  if (assessment === "IMPROVED" || assessment === "PARTIAL" || assessment === "IN PROGRESS") return "warning";
  if (assessment === "FAILED" || assessment === "NOT DELIVERED") return "danger";
  if (assessment === "UNVERIFIED" || assessment === "NOT_FOUND") return "info";
  return "default";
}

/**
 * Get departments by grade
 */
export function getDepartmentsByGrade(gradePrefix: string): DepartmentScorecard[] {
  return DEPARTMENTS.filter((d) => d.grade.startsWith(gradePrefix));
}

/**
 * Get department by ID
 */
export function getDepartmentById(id: number): DepartmentScorecard | undefined {
  return DEPARTMENTS.find((d) => d.id === id);
}

/**
 * Format currency in Crores
 */
export function formatCurrency(crore: number): string {
  if (crore >= 100000) {
    return `Rs ${(crore / 100000).toFixed(2)} lakh crore`;
  }
  return `Rs ${crore.toLocaleString("en-IN")} crore`;
}

/**
 * Format large numbers with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-IN");
}
