"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { CASTE_CATEGORIES, REGIONS, POLITICAL_ANATOMY } from "@/lib/constants";
import {
  jatSikhPopulationData,
  regionalJatDistribution,
  jatSikhClans,
  landholdingStratification,
  agriculturalDebtData,
  constituencyClusters,
  congressStrategyPoints,
  smallFarmerStatistic,
  getUnemploymentRate,
  getFemaleYouthUnemployment,
  isUnemploymentCritical,
  vulnerableOccupationsReport,
  religiousMinoritiesOverview,
  districtMuslimPopulation,
  muslimCommunity,
  christianCommunity,
  buddhistCommunity,
  jainCommunity,
  dalitChristianReservationIssue,
  religiousMinoritiesStrategicImplications,
  religiousMinoritiesDataPoints,
  religiousMinoritiesDataGaps,
  getMuslimPopulationByDistrict,
  getDistrictsWithHighMuslimPopulation,
  getTotalReligiousMinorityPopulation,
  getPunjabDalitPercent,
  getDalitChristianReservationSummary,
  getCriticalDataGaps,
} from "@/lib/kpi-data";
import {
  educationDigitalData,
  scEducationMetrics,
  networkCoverage,
  campaignImplications,
} from "@/lib/education-digital-data";
import {
  urbanizationData,
  urbanizationMetrics,
  municipalCorpPopulationData,
  districtUrbanizationChartData,
  slumConcentrationData,
  urbanizationTrajectoryData,
} from "@/lib/urbanization-data";
import {
  hinduPopulationOverview,
  hinduDalitData,
  aryaSamajData,
  sanatanDharmaData,
  devSamajData,
  iskconData,
  majorTemplesData,
  rssDistrictDensity,
  rssVictoryPlan2026,
  hinduMobilizationIssues,
  hinduDalitVoting2022,
  sharedSacredCalendar,
  potentialFlashpoints,
  strategicImplicationsForCongress,
} from "@/lib/hinduism-data";
import {
  sikhPopulationData,
  observanceTiers,
  damdamiTaksalData,
  nihangData,
  namdhariData,
  nirankariData,
  radhaSoamiData,
  akjData,
  akalTakhtData,
  sgpcData,
  sacrilegeIssue,
  riots1984Issue,
  bandiSinghIssue,
  khalistanIssue,
  sectConstituencyMapping,
  strategicSummary,
} from "@/lib/sikhism-internal-data";
import {
  synthesisDemographicData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

// === TYPESCRIPT INTERFACES ===

interface AgeDistributionEntry {
  range: string;
  voters: string;
  percentage: number;
  firstTime: boolean;
}

interface FiveYearCohort {
  age: string;
  male: string;
  female: string;
}

interface AgeStructureMetrics {
  tfr: { value: string; note: string; comparison: string; source: string };
  srs2023AgeGroups: { children014: string; workingAge1559: string; elderly60Plus: string; note: string };
  census2011AgeGroups: { children014: string; youth1524: string; youngAdults2534: string; middleAged3554: string; olderAdults5564: string; elderly65Plus: string };
  census2011FiveYearCohorts: FiveYearCohort[];
  medianAge: { punjab: string; male: string; female: string; rank: string };
  lifeStagePatterns: { youthBulge: string; demographicDividend: string; ageingAcceleration: string };
  dependencyRatioProjections: { current: string; projected2027: string; projected2031: string };
  elderlyRanking: { punjab: string; ruralElderly: string; urbanElderly: string; nationalAverage: string };
}

interface SCSubCasteEntry {
  name: string;
  pctOfSC: string;
  pop: string;
  region: string;
  political: string;
  color: string;
  note?: string;
}

interface CasteCompositionState {
  generalCaste: { population: string; estimatedVoters: string; includes: string };
  obc: { population: string; estimatedVoters: string; includes: string };
  scheduledCastes: { population: string; estimatedVoters: string; note: string };
  religiousMinorities: { population: string; estimatedVoters: string; includes: string };
}

interface ReservationArchitecture {
  sc: string;
  obc: string;
  ews: string;
  total: string;
  note: string;
}

interface ReservedSeatPerformance {
  totalReservedSeats: number;
  aap: { seats: number; pct: string; note: string };
  congress: { seats: number; pct: string; note: string };
}

interface SCSubGroup {
  name: string;
  punjabPct: string;
  keyDistricts: string;
}

interface MP2CasteComposition {
  stateLevel: CasteCompositionState;
  reservationArchitecture: ReservationArchitecture;
  reservedSeatPerformance: ReservedSeatPerformance;
  scSubGroups: SCSubGroup[];
}

interface RegionSeats {
  region: string;
  seats: number;
  scSeats: number;
  keyCaste: string;
  notes: string;
}

interface DistrictDensity {
  district: string;
  density: string;
}

interface PopulationDensityData {
  stateDensity: string;
  rank: string;
  childPopulation06: string;
  childPopulationPct: string;
  districtWise: DistrictDensity[];
}

interface DependencyRatios {
  youth: string;
  oldAge: string;
  total: string;
}

interface CasteFragmentationIndex {
  hhi: string;
  category: string;
  competitiveness: string;
}

// ==========================================
// CYCLE 6: INCOME STRATIFICATION INTERFACES
// (from research-M2/MP1-foundational/demographics/income-stratification.md)
// ==========================================

interface IncomeBandEntry {
  band: string;
  monthlyRange: string;
  estPercentage: string;
  percentageNum: number;
  typicalProfile: string;
  geographyConcentration: string;
}

interface PerCapitaConsumption {
  region: string;
  mpce: string;
  note: string;
}

interface NFSACoverage {
  indicator: string;
  number: string;
  source: string;
}

interface RationCardData {
  category: string;
  count: string;
  date: string;
}

interface PovertyRateTrend {
  period: string;
  rural: string;
  urban: string;
  source: string;
}

interface LandHolding {
  category: string;
  sizeRange: string;
  holdings: string;
  percentage: string;
}

interface VehicleOwnership {
  vehicleType: string;
  penetration: string;
  note: string;
}

interface DebtMetrics {
  metric: string;
  value: string;
  source: string;
}

interface DebtPurpose {
  purpose: string;
  percentage: string;
}

interface FarmerSuicideStats {
  period: string;
  suicides: string;
  districts: string;
  source: string;
}

interface DistrictSuicideData {
  district: string;
  count: number;
}

interface CasteIncomeData {
  caste: string;
  annualIncome: string;
  relativePosition: string;
}

interface RegionalAnxiety {
  region: string;
  primaryAnxiety: string;
  politicalImplication: string;
}

interface EconomicAnxietyData {
  rank: number;
  fear: string;
  description: string;
}

interface StrategicImplication {
  number: number;
  issue: string;
  implication: string;
}

// ==========================================
// CYCLE 4: EDUCATION & DIGITAL ACCESS INTERFACES
// (from research-M2/MP1-foundational/demographics/education-digital.md)
// ==========================================

interface LiteracyRate {
  metric: string;
  census2011: string;
  estimated2024_25: string;
  note?: string;
}

interface SCLiteracyData {
  district: string;
  scLiteracy: string;
  districtTotal: string;
}

interface SchoolInfrastructure {
  indicator: string;
  punjab: string;
  nationalAverage: string;
  note?: string;
}

interface GERData {
  level: string;
  punjab: string;
  national: string;
}

interface DropoutData {
  level: string;
  punjab: string;
  national: string;
  note?: string;
}

interface PTRData {
  level: string;
  punjab: string;
  national: string;
  note?: string;
}

interface DigitalAccessData {
  metric: string;
  punjab: string;
  india: string;
  note?: string;
}

interface DigitalLiteracyTier {
  tier: string;
  description: string;
  estimatedPct: string;
}

interface SocialMediaPlatform {
  platform: string;
  indiaMAU: string;
  favoritePct: string;
  punjabEstimate: string;
  demographic: string;
}

interface EducationDigitalData {
  literacyRates: LiteracyRate[];
  scLiteracy: SCLiteracyData[];
  schoolInfrastructure: SchoolInfrastructure[];
  gerData: GERData[];
  dropoutData: DropoutData[];
  ptrData: PTRData[];
  digitalAccess: DigitalAccessData[];
  digitalLiteracyTiers: DigitalLiteracyTier[];
  socialMediaPlatforms: SocialMediaPlatform[];
}

// ==========================================
// CYCLE 3: AGE STRUCTURE & POLITICAL COHORTS INTERFACES
// (from research-M2/MP1-foundational/demographics/age-structure.md)
// ==========================================

interface PopulationOverview {
  projectedPopulation: string;
  projectedPopulationJuly2026: string;
  male: string;
  female: string;
  sexRatio: string;
  indiaShare: string;
  growthRate2026: string;
  tfr: string;
  note: string;
}

interface DetailedFiveYearCohort {
  ageGroup: string;
  population: string;
  percentOfTotal: string;
  male: string;
  female: string;
  mPer100F: string;
}

interface PoliticalCohort {
  cohortName: string;
  ageRange: string;
  estPopulation: string;
  percentOfTotal: string;
  politicalSignificance: string;
}

interface FirstTimeVoterPool {
  age1822Population2027: string;
  likelyRegistered: string;
  minusEmigration: string;
  netNewVoters2027: string;
}

interface LifeStageVoting {
  lifeStage: string;
  ageGroup: string;
  keyConcerns: string;
  votingBehaviorPattern: string;
}

interface TemporalChange {
  indicator: string;
  year2001: string;
  year2011: string;
  year2026: string;
}

interface EmigrationImpact {
  annualEmigrants: string;
  profile: string;
  impactOn2027Electorate: string;
  evidence: string;
  netEffect: string;
}

interface RegionalAgeProfile {
  region: string;
  seats: string;
  districts: string;
  ageProfileCharacter: string;
}

interface AgeStructureDataGaps {
  dataPoint: string;
  status: string;
  sourceNeeded: string;
}

interface StrategicImplication {
  number: number;
  implication: string;
}

// ==========================================
// CYCLE 2: SOCIO-ECONOMIC DATA INTERFACES (from research-P2/10_socio_economic)
// ==========================================

interface PunjabSocioEconomic {
  perCapitaIncome: string;
  youthUnemployment: string;
  stateDebt: string;
  debtToGSDP: string;
  groundwaterExtraction: string;
  drugUsers: string;
  farmDebt: string;
  hdi: string;
  mpiPoverty: string;
  districtPCIDisparity: string;
  giniCoefficient: string;
}

// ==========================================
// CYCLE 2: GENDER INDICATORS DATA INTERFACES
// (from research-M2/MP1-foundational/demographics/gender-indicators.md)
// ==========================================

interface PopulationByGender {
  totalPopulation2026: string;
  malePopulation: string;
  femalePopulation: string;
  overallSexRatio: string;
  childSexRatio06: string;
  nfhs5SexRatio: string;
  sexRatioAtBirthNFHS5: string;
  trend: string;
}

interface DistrictChildSexRatio {
  district: string;
  childSexRatio: number;
}

interface FemaleLiteracyData {
  year: string;
  male: string;
  female: string;
  total: string;
  gap: string;
}

interface DistrictFemaleLiteracy {
  district: string;
  male: string;
  female: string;
  total: string;
  gap: string;
}

interface VoterTurnoutGender {
  category: string;
  electors: string;
  electorsPct: string;
  voters: string;
  turnout: string;
}

interface FemaleWorkforceData {
  metric: string;
  punjab: string;
  india: string;
  note: string;
}

interface HealthSocialIndicators {
  indicator: string;
  punjab: string;
  india: string;
  notes: string;
}

interface WidowSingleWomenData {
  category: string;
  count: string;
  source: string;
}

interface FrontlineWomenWorkers {
  category: string;
  count: string;
  notes: string;
}

interface GenderStrategicImplication {
  number: number;
  bloc: string;
  description: string;
}

interface CongressMessagingPillar {
  pillar: string;
  description: string;
}

interface GenderDataGaps {
  dataPoint: string;
  status: string;
  sourceNeeded: string;
}

export default function DemographyPage() {
  // === CYCLE 4: EDUCATION & DIGITAL ACCESS DATA ===
  const educationDigitalData: EducationDigitalData = {
    literacyRates: [
      { metric: "Overall Literacy (7+)", census2011: "76.7%", estimated2024_25: "~83-85%", note: "Projected" },
      { metric: "Male Literacy", census2011: "80.4%", estimated2024_25: "~82.1%", note: "Sage Journals estimate, Jan 2025" },
      { metric: "Female Literacy", census2011: "70.7%", estimated2024_25: "~76-78%", note: "Projected" },
      { metric: "Urban Literacy", census2011: "~85%", estimated2024_25: "VERIFICATION_NEEDED" },
      { metric: "Rural Literacy", census2011: "~72%", estimated2024_25: "VERIFICATION_NEEDED" },
    ],
    scLiteracy: [
      { district: "Hoshiarpur", scLiteracy: "82.5%", districtTotal: "84.6%" },
      { district: "Rupnagar", scLiteracy: "78.4%", districtTotal: "N/A" },
    ],
    schoolInfrastructure: [
      { indicator: "Total Schools", punjab: "27,281", nationalAverage: "—" },
      { indicator: "Enrolled Students", punjab: "59.09 lakh", nationalAverage: "—" },
      { indicator: "Total Teachers", punjab: "2.73 lakh", nationalAverage: "—" },
      { indicator: "Female Teacher Share", punjab: "76.6%", nationalAverage: "~50%", note: "HIGHEST in India" },
      { indicator: "Private Unaided Schools", punjab: "27.8%", nationalAverage: "23.1%" },
      { indicator: "Functional Electricity", punjab: "100%", nationalAverage: "~95%" },
      { indicator: "Functional Drinking Water", punjab: "100%", nationalAverage: "~96%" },
      { indicator: "Functional Girls' Toilet", punjab: "98.4%", nationalAverage: "~92%" },
      { indicator: "Computer Access", punjab: "99.0%", nationalAverage: "~65%", note: "HIGHEST in India" },
      { indicator: "Internet Connectivity", punjab: "88.9%", nationalAverage: "~55%", note: "HIGHEST in India" },
      { indicator: "Kitchen Garden Coverage", punjab: "75.0%", nationalAverage: "—" },
    ],
    gerData: [
      { level: "Primary GER", punjab: "105.6%", national: "90.9%" },
      { level: "Secondary GER", punjab: "92.6%", national: "78.7%" },
      { level: "Higher Secondary GER", punjab: "79.5%", national: "58.4%" },
    ],
    dropoutData: [
      { level: "Primary Dropout", punjab: "2.5%", national: "0.3%", note: "ANOMALY - exceeds national" },
      { level: "Upper Primary Dropout", punjab: "2.7%", national: "3.5%" },
      { level: "Secondary Dropout", punjab: "6.2%", national: "11.5%" },
      { level: "UP-to-Secondary Transition", punjab: "94.2%", national: "—" },
      { level: "Secondary-to-HS Transition", punjab: "90.7%", national: "—", note: "Highest among large states" },
      { level: "Class 12 Retention", punjab: "67.8%", national: "47.2%" },
    ],
    ptrData: [
      { level: "Overall PTR", punjab: "22:1", national: "24:1" },
      { level: "Secondary PTR", punjab: "9:1", national: "15:1", note: "LOWEST in India" },
      { level: "HS PTR", punjab: "16:1", national: "—", note: "Improved from 18 in 2021-22" },
    ],
    digitalAccess: [
      { metric: "Internet Subscribers per 100", punjab: "~77", india: "~72", note: "Above national average" },
      { metric: "Rural Internet per 100", punjab: "~42.5", india: "~45", note: "Rural-urban divide stark" },
      { metric: "Jio Wireless Subscribers", punjab: "1.17 crore", india: "—", note: "Mar 2026" },
      { metric: "Telephone Density", punjab: "~90%+", india: "~84%" },
      { metric: "Rural Smartphone Access (children)", punjab: "85%", india: "N/A", note: "ASER data, Feb 2026" },
      { metric: "Smartphone Household Penetration", punjab: "65-70%", india: "60%", note: "Estimated" },
    ],
    digitalLiteracyTiers: [
      { tier: "Tier 1", description: "No digital access", estimatedPct: "~15-18%" },
      { tier: "Tier 2", description: "Basic phone only (no internet)", estimatedPct: "~10-12%" },
      { tier: "Tier 3", description: "Smartphone for calls/WhatsApp only", estimatedPct: "~25-30%" },
      { tier: "Tier 4", description: "Active social media + video consumer", estimatedPct: "~25-30%" },
      { tier: "Tier 5", description: "Digital payments/government services", estimatedPct: "~10-12%" },
      { tier: "Tier 6", description: "Advanced (content creation, e-commerce)", estimatedPct: "~5-8%" },
    ],
    socialMediaPlatforms: [
      { platform: "WhatsApp", indiaMAU: "~530M", favoritePct: "15.8%", punjabEstimate: "~80-85%", demographic: "All ages, primary info channel in rural" },
      { platform: "YouTube", indiaMAU: "~500M", favoritePct: "Most used (29h 37min/mo)", punjabEstimate: "~75-80%", demographic: "All ages, dominant entertainment" },
      { platform: "Instagram", indiaMAU: "~400M", favoritePct: "14.3%", punjabEstimate: "~50-55%", demographic: "Urban, 18-35 age group" },
      { platform: "Facebook", indiaMAU: "~350M", favoritePct: "Declining but major", punjabEstimate: "~45-50%", demographic: "35+ rural, general" },
      { platform: "Snapchat", indiaMAU: "~200M", favoritePct: "Growing fast", punjabEstimate: "~25-30%", demographic: "15-25 age group" },
      { platform: "X/Twitter", indiaMAU: "~30M", favoritePct: "Niche", punjabEstimate: "~5-8%", demographic: "Political/urban elite" },
      { platform: "Telegram", indiaMAU: "~100M", favoritePct: "Growing", punjabEstimate: "~20-25%", demographic: "News, education" },
      { platform: "ShareChat/Moj", indiaMAU: "~180M", favoritePct: "Regional content", punjabEstimate: "~15-20%", demographic: "Punjabi content" },
    ],
  };

  // SC Education Metrics
  const scEducationMetrics = {
    scPopulationShare: "~32%",
    scEnrolmentShare: "36.1%",
    scPrimaryGER: "103.0%",
    scSecondaryGER: "92.3%",
    scHSGER: "79.1%",
    note: "Highest SC enrolment share of any Indian state",
  };

  // 4G/5G Coverage
  const networkCoverage = {
    coverage: "4G well-covered by Jio, Airtel, Vi networks",
    fiveG: "5G rollout began 2022-23 in major cities (Ludhiana, Amritsar, Chandigarh, Jalandhar)",
    darkZones: ["Border belt (Gurdaspur, Pathankot, Tarn Taran)", "Kandi area (Hoshiarpur, Rupnagar)", "Deep rural Malwa"],
  };

  // Campaign Strategic Implications
  const campaignImplications = [
    { number: 1, text: "WhatsApp-first strategy — ~80-85% smartphone user penetration, primary info channel in rural Punjab" },
    { number: 2, text: "YouTube for political messaging — Punjabi YouTube consumption among highest in India" },
    { number: 3, text: "Digital divide = campaign gap — ~55-60% of rural Punjab NOT online, traditional media essential" },
    { number: 4, text: "SC voter education — 36.1% SC school enrolment, targeted WhatsApp/Facebook content for SC-welfare" },
    { number: 5, text: "Female voter reach — Only 34.5% female on social media, door-to-door/SHG networks needed" },
    { number: 6, text: "Youth (18-30) digital-native — Instagram, Snapchat, YouTube Shorts for first-time voters" },
    { number: 7, text: "NRI amplification — Punjab diaspora runs WhatsApp groups/YouTube channels influencing domestic opinion" },
  ];

  // === CYCLE 2: SOCIO-ECONOMIC DATA (from research-P2/10_socio_economic) ===
  const socioEconomicData: PunjabSocioEconomic = {
    perCapitaIncome: "₹2,30,523",
    youthUnemployment: "19.3%",
    stateDebt: "₹4.17 Lakh Crore",
    debtToGSDP: "44.47%",
    groundwaterExtraction: "156.36%",
    drugUsers: "6.6 Million",
    farmDebt: "₹1.04 Lakh Crore",
    hdi: "0.740 (Rank 12)",
    mpiPoverty: "4.75%",
    districtPCIDisparity: "8.47:1",
    giniCoefficient: "0.48"
  };

  // === DATA FROM MP1-003 (Gender Demographics Tier 2) ===
  const populationByGender: PopulationByGender = {
    totalPopulation2026: "3.23 crore (32,280,000)",
    malePopulation: "1.64 crore (16,447,000)",
    femalePopulation: "~1.49 crore (14,926,000)",
    overallSexRatio: "895 females/1000 males (Census 2011)",
    childSexRatio06: "846 females/1000 males (Census 2011)",
    nfhs5SexRatio: "918 females/1000 males",
    sexRatioAtBirthNFHS5: "904 (improved from 860 in NFHS-4)",
    trend: "Sex ratio improved from 876 (2001) to 895 (2011) overall. SRB improved significantly from 860 (NFHS-4) to 904 (NFHS-5), but still below national average."
  };

  const districtChildSexRatio: DistrictChildSexRatio[] = [
    { district: "Tarn Taran", childSexRatio: 820 },
    { district: "Bathinda", childSexRatio: 832 },
    { district: "Mansa", childSexRatio: 835 },
    { district: "Muktsar", childSexRatio: 839 },
    { district: "Ferozepur", childSexRatio: 843 },
    { district: "Punjab Average", childSexRatio: 846 },
  ];

  const femaleLiteracyTrends: FemaleLiteracyData[] = [
    { year: "Census 2001", male: "75.23%", female: "63.36%", total: "69.65%", gap: "11.87 pp" },
    { year: "Census 2011", male: "80.44%", female: "70.73%", total: "75.84%", gap: "9.71 pp" },
    { year: "Current Est. (SSA Punjab)", male: "81.5%", female: "71.3%", total: "76.7%", gap: "10.2 pp" },
  ];

  const districtFemaleLiteracy: DistrictFemaleLiteracy[] = [
    { district: "Hoshiarpur", male: "89.9", female: "80.8", total: "85.4", gap: "9.1" },
    { district: "S.A.S. Nagar", male: "89.2", female: "80.0", total: "84.9", gap: "9.2" },
    { district: "Ludhiana", male: "86.3", female: "78.2", total: "82.7", gap: "8.1" },
    { district: "Jalandhar", male: "86.1", female: "78.3", total: "82.4", gap: "7.8" },
    { district: "Gurdaspur", male: "85.9", female: "75.7", total: "81.1", gap: "10.2" },
    { district: "Kapurthala", male: "84.6", female: "75.4", total: "80.2", gap: "9.2" },
    { district: "Fatehgarh Sahib", male: "84.5", female: "75.5", total: "80.3", gap: "9.0" },
    { district: "S.B.S. Nagar", male: "86.2", female: "74.3", total: "80.3", gap: "11.9" },
    { district: "Roopnagar", male: "88.9", female: "77.2", total: "83.3", gap: "11.7" },
    { district: "Amritsar", male: "81.2", female: "72.8", total: "77.2", gap: "8.4" },
    { district: "Patiala", male: "81.4", female: "70.5", total: "76.3", gap: "10.9" },
    { district: "Moga", male: "75.3", female: "67.4", total: "71.6", gap: "7.9" },
    { district: "Faridkot", male: "75.9", female: "64.8", total: "70.6", gap: "11.1" },
    { district: "Ferozepur", male: "76.7", female: "62.2", total: "69.8", gap: "14.5" },
    { district: "Bathinda", male: "75.3", female: "62.9", total: "69.6", gap: "12.4" },
    { district: "Tarn Taran", male: "75.4", female: "62.9", total: "69.4", gap: "12.5" },
    { district: "Barnala", male: "73.1", female: "64.1", total: "68.9", gap: "9.0" },
    { district: "Sangrur", male: "74.2", female: "62.9", total: "68.9", gap: "11.3" },
    { district: "Muktsar", male: "72.9", female: "60.0", total: "66.6", gap: "12.9" },
    { district: "Mansa", male: "68.4", female: "56.4", total: "62.8", gap: "12.0" },
  ];

  const voterTurnoutByGender2022: VoterTurnoutGender[] = [
    { category: "Male", electors: "1,12,98,081", electorsPct: "52.6%", voters: "~77.6 lakh", turnout: "~68.7%" },
    { category: "Female", electors: "1,02,00,996", electorsPct: "47.4%", voters: "~69.8 lakh", turnout: "~68.4%" },
    { category: "Transgender", electors: "727", electorsPct: "N/A", voters: "VERIFICATION_NEEDED", turnout: "VERIFICATION_NEEDED" },
    { category: "Total", electors: "2,14,99,804", electorsPct: "100%", voters: "~1,55.1 lakh", turnout: "72.15%" },
  ];

  const femaleWorkforceData: FemaleWorkforceData[] = [
    { metric: "Female LFPR (PLFS 2022-23)", punjab: "~24-28% (estimated)", india: "37.0%", note: "Significantly below national average" },
    { metric: "Female LFPR (PLFS 2023-24)", punjab: "VERIFICATION_NEEDED", india: "41.7%", note: "India's FLFPR rising" },
  ];

  const healthSocialIndicators: HealthSocialIndicators[] = [
    { indicator: "Total Fertility Rate", punjab: "1.6", india: "2.0", notes: "Below replacement; declining" },
    { indicator: "Mean Marriage Age (Women)", punjab: "23.4 yrs", india: "22.3 yrs", notes: "Above national average" },
    { indicator: "Women with Bank Account (own use)", punjab: "~83%", india: "~79%", notes: "Improved significantly" },
    { indicator: "Women Owning Mobile Phone", punjab: "~66%", india: "~54%", notes: "Higher than national" },
    { indicator: "Spousal Violence (ever)", punjab: "~14%", india: "~29%", notes: "Lower than national" },
    { indicator: "Physical Violence (age 18-49)", punjab: "14%", india: "~30%", notes: "Lower than national" },
    { indicator: "Sexual Violence", punjab: "2%", india: "~6%", notes: "Lower than national" },
    { indicator: "Anaemia (Women 15-49)", punjab: "~40%", india: "~57%", notes: "Better but still high" },
    { indicator: "Obesity (Women)", punjab: "Rising significantly", india: "Rising", notes: "Alarming increase" },
    { indicator: "Women in Household Decisions", punjab: "~85%", india: "~89%", notes: "Slightly below national" },
  ];

  const widowSingleWomenData: WidowSingleWomenData[] = [
    { category: "Widows (all ages)", count: "~4.2 lakh+", source: "Census 2011 extrapolation" },
    { category: "Female-Headed Households", count: "~10-12% of total HH", source: "Census 2011" },
    { category: "Single Women (never married 35+, divorced, separated)", count: "~4.18 lakh (8.45% of female pop.)", source: "ActionAid/Ekal Nari estimate" },
  ];

  const frontlineWomenWorkers: FrontlineWomenWorkers[] = [
    { category: "Women SHGs in Punjab", count: "~37,000", notes: "Mission Shakti data" },
    { category: "SHG Women Members", count: "~3 lakh (300,000)", notes: "Mission Shakti" },
    { category: "ASHA Workers", count: "~36,000+", notes: "NRHM data" },
    { category: "Anganwadi Centres", count: "~26,000+", notes: "ICDS data" },
    { category: "Anganwadi Workers", count: "~26,000+", notes: "ICDS data" },
  ];

  const genderStrategicImplications: GenderStrategicImplication[] = [
    { number: 1, bloc: "Women voters", description: "Women voters outnumber men in turnout in multiple constituencies -- even a small shift in women's voting preference can swing 15-20 seats" },
    { number: 2, bloc: "Malwa women", description: "69 seats face double disadvantage of low literacy + low sex ratio + low workforce participation -- most receptive to empowerment messaging" },
    { number: 3, bloc: "ASHA/Anganwadi workers", description: "~62,000 organized, underpaid, and politically aware -- promising regularisation can yield massive returns" },
    { number: 4, bloc: "SHG network", description: "3 lakh women provides ready-made organizational infrastructure for grassroots mobilization" },
    { number: 5, bloc: "Widows and single women", description: "~8 lakh+ economically vulnerable and respond to targeted welfare promises" },
  ];

  const congressMessagingPillars: CongressMessagingPillar[] = [
    { pillar: "Women's Economic Empowerment", description: "Direct income support, skill training, SHG strengthening, FLFPR improvement schemes" },
    { pillar: "ASHA/Anganwadi Regularization", description: "Promise of pay commission, benefits, and worker status" },
    { pillar: "Anti-Foeticide & Beti Bachao", description: "District-level campaigns in worst-affected areas (Tarn Taran, Bathinda, Mansa)" },
    { pillar: "Widow/Single Women Pension", description: "Enhanced pension with automatic enrollment, property rights enforcement" },
    { pillar: "Women's Safety", description: "Fast-track courts, helplines, one-stop centers in all districts" },
    { pillar: "Girls' Education", description: "Focus on Mansa, Muktsar, Sangrur where female literacy is below 63%" },
  ];

  const genderDataGaps: GenderDataGaps[] = [
    { dataPoint: "Census 2021 results", status: "DELAYED/UNAVAILABLE", sourceNeeded: "Census of India" },
    { dataPoint: "District-wise women voter turnout 2022", status: "Partially available", sourceNeeded: "CEO Punjab portal" },
    { dataPoint: "Current FLFPR (2024-25)", status: "VERIFICATION_NEEDED", sourceNeeded: "PLFS latest round" },
    { dataPoint: "Transgender voter registration 2025-26", status: "VERIFICATION_NEEDED", sourceNeeded: "ECI updated rolls" },
    { dataPoint: "Constituency-wise gender turnout comparison", status: "VERIFICATION_NEEDED", sourceNeeded: "CEO Punjab detailed data" },
    { dataPoint: "Women's property ownership rates", status: "VERIFICATION_NEEDED", sourceNeeded: "State revenue records" },
  ];

  const punjabVsHaryanaData = [
    { metric: "Per Capita Income", punjab: "₹2,30,523", haryana: "₹3,25,000", gap: "41% less" },
    { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", gap: "+4.5pp higher" },
    { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", gap: "+16.17pp higher" },
    { metric: "Groundwater", punjab: "156%", haryana: "112%", gap: "Over-exploited" },
    { metric: "HDI Rank", punjab: "12", haryana: "9", gap: "3 ranks lower" },
  ];

  const ageDistribution = [
    { range: "18-22", voters: "18.2L", percentage: 6.6, firstTime: true },
    { range: "23-30", voters: "42.5L", percentage: 15.3, firstTime: false },
    { range: "31-40", voters: "58.3L", percentage: 21.0, firstTime: false },
    { range: "41-50", voters: "52.1L", percentage: 18.8, firstTime: false },
    { range: "51-60", voters: "48.7L", percentage: 17.6, firstTime: false },
    { range: "60-70", voters: "35.8L", percentage: 12.9, firstTime: false },
    { range: "70+", voters: "21.4L", percentage: 7.7, firstTime: false },
  ];

  // === DATA FROM MP1-002 (Age Structure Tier 2) ===
  const ageStructureMetrics = {
    tfr: {
      value: "1.5",
      note: "Total Fertility Rate — lowest among major Indian states",
      comparison: "Below replacement level (2.1), accelerating demographic ageing",
      source: "SRS 2023 / Times of India (2025)"
    },
    srs2023AgeGroups: {
      children014: "19.3%",
      workingAge1559: "69.1%",
      elderly60Plus: "11.6%",
      note: "SRS 2023 — Punjab ranks 4th highest for elderly proportion (after Kerala 15.1%, Tamil Nadu 14%, HP 13.2%)"
    },
    census2011AgeGroups: {
      children014: "25.54%",
      youth1524: "20.17%",
      youngAdults2534: "16.51%",
      middleAged3554: "19.34%",
      olderAdults5564: "7.04%",
      elderly65Plus: "6.76%"
    },
    census2011FiveYearCohorts: [
      { age: "0-4", male: "5.8%", female: "5.4%" },
      { age: "5-9", male: "6.2%", female: "5.7%" },
      { age: "10-14", male: "6.8%", female: "6.2%" },
      { age: "15-19", male: "6.9%", female: "6.4%" },
      { age: "20-24", male: "6.8%", female: "6.5%" },
      { age: "25-29", male: "6.2%", female: "6.1%" },
      { age: "30-34", male: "5.4%", female: "5.4%" },
      { age: "35-39", male: "5.1%", female: "5.1%" },
      { age: "40-44", male: "4.6%", female: "4.5%" },
      { age: "45-49", male: "4.1%", female: "4.0%" },
      { age: "50-54", male: "3.5%", female: "3.3%" },
      { age: "55-59", male: "3.0%", female: "2.9%" },
      { age: "60-64", male: "2.7%", female: "2.7%" },
      { age: "65-69", male: "1.9%", female: "2.0%" },
      { age: "70-74", male: "1.2%", female: "1.4%" },
      { age: "75-79", male: "0.6%", female: "0.7%" },
      { age: "80+", male: "0.5%", female: "0.6%" },
    ],
    medianAge: {
      punjab: "28.4 years",
      male: "27.3 years",
      female: "29.5 years",
      rank: "6th youngest median age among Indian states"
    },
    lifeStagePatterns: {
      youthBulge: "20-24 cohort largest at 6.8% (male), reflecting high youth proportion",
      demographicDividend: "69.1% working age (15-59) provides economic opportunity window",
      ageingAcceleration: "60+ cohort growing from 6.76% (2011) to 11.6% (2023)"
    },
    dependencyRatioProjections: {
      current: "563 per 1000 (youth 399 + old-age 164)",
      projected2027: "~520 per 1000 (declining youth dependency)",
      projected2031: "~480 per 1000 (demographic dividend peak)"
    },
    elderlyRanking: {
      punjab: "4th highest in India for elderly proportion",
      ruralElderly: "12.2%",
      urbanElderly: "10.9%",
      nationalAverage: "9.7%"
    }
  };

  const scSubCasteData = [
    { name: "Mazhabi Sikh", pctOfSC: "29.7%", pop: "26.3L", region: "Majha, Malwa border", political: "SAD→AAP", color: "bg-red-500", note: "Bhapa pejorative: upper Sikh castes deride Mazhabis as 'water drawers'" },
    { name: "Ravidasia/Ramdasia", pctOfSC: "23.5%", pop: "20.8L", region: "Doaba", political: "Congress", color: "bg-blue-500" },
    { name: "Ad-Dharm", pctOfSC: "11.5%", pop: "10.2L", region: "Doaba", political: "Congress/BSP", color: "bg-purple-500" },
    { name: "Balmiki/Valmiki", pctOfSC: "9.8%", pop: "8.7L", region: "Doaba, Malwa", political: "Congress", color: "bg-orange-500" },
    { name: "Rai Sikh", pctOfSC: "5.8%", pop: "5.2L", region: "Malwa, Majha", political: "SAD", color: "bg-green-500" },
    { name: "Bazigar", pctOfSC: "2.7%", pop: "2.4L", region: "Patiala, Sangrur", political: "AAP", color: "bg-teal-500" },
  ];

  // === DATA FROM MP2-001 (Caste Tier 2) ===
  const mp2CasteComposition = {
    stateLevel: {
      generalCaste: { population: "33.0%", estimatedVoters: "~33%", includes: "Jat Sikh 18%, Brahmin, Khatri, Arora, Rajput, Sood, Bania, Bhatia, Mahajan" },
      obc: { population: "31.3%", estimatedVoters: "~31%", includes: "Saini, Kamboj, Labana, Tarkhan/Ramgarhia, Kumhar, Arain, Gujjar, Teli, Banjara" },
      scheduledCastes: { population: "31.9%", estimatedVoters: "~32%", note: "SC sub-composition below; 34 reserved seats (highest SC proportion in India)" },
      religiousMinorities: { population: "3.8%", estimatedVoters: "~4%", includes: "Muslim, Christian, Buddhist, Jain beyond SC" },
    },
    reservationArchitecture: {
      sc: "25%", obc: "12%", ews: "10%", total: "59.5%",
      note: "Punjab's reservation architecture (KBS Sidhu, Mar 2026)"
    },
    reservedSeatPerformance: {
      totalReservedSeats: 34,
      aap: { seats: 29, pct: "85%", note: "AAP won 29 of 34 reserved seats (2022)" },
      congress: { seats: 5, pct: "15%", note: "Congress won only 5 of 34 reserved seats (2022)" },
    },
    scSubGroups: [
      { name: "Ravidassia/Ad-Dharmi (Chamar cluster)", punjabPct: "13.1%", keyDistricts: "SBS Nagar 34.9%, Hoshiarpur 26.3%, Jalandhar 21.4%" },
      { name: "Mazhabi Sikh", punjabPct: "10.0%", keyDistricts: "Tarn Taran 28.2%, Faridkot 26.6%, Muktsar 25.9%, Moga 25.4%, Amritsar 22.8%" },
      { name: "Balmiki/Bhanghi", punjabPct: "3.5%", keyDistricts: "Scattered across Malwa" },
      { name: "Bazigar", punjabPct: "1.05%", keyDistricts: "Scattered" },
      { name: "Others (Sansi, Chhimba, Nai, Julaha)", punjabPct: "4.0%", keyDistricts: "Scattered" },
    ],
  };

  // === DATA FROM MP1-001 (Population Tier 2) ===
  const populationDensityData = {
    stateDensity: "551/km2",
    rank: "3rd highest in India after Bihar (1106), West Bengal (1029)",
    childPopulation06: "3,076,219",
    childPopulationPct: "9.8% of total population (0-6 age group)",
    districtWise: [
      { district: "Ludhiana", density: "975" },
      { district: "Jalandhar", density: "836" },
      { district: "Amritsar", density: "728" },
      { district: "Patiala", density: "594" },
      { district: "Kapurthala", density: "498" },
      { district: "Hoshiarpur", density: "263" },
      { district: "Rupnagar", density: "360" },
      { district: "SAS Nagar", density: "550" },
      { district: "Bathinda", density: "349" },
      { district: "Moga", density: "293" },
      { district: "Ferozpur", density: "193" },
      { district: "Muktsar", density: "228" },
      { district: "Fazilka", density: "177" },
      { district: "Pathankot", density: "315" },
      { district: "Gurdaspur", density: "220" },
      { district: "Sangrur", density: "254" },
      { district: "Mansa", density: "250" },
      { district: "Barnala", density: "283" },
      { district: "Tarn Taran", density: "281" },
      { district: "SBS Nagar", density: "380" },
      { district: "Fatehgarh Sahib", density: "313" },
      { district: "Faridkot", density: "285" },
    ]
  };

  const dependencyRatios = {
    youth: "399 per 1000 working age",
    oldAge: "164 per 1000 working age",
    total: "563 per 1000 working age",
    note: "Youth dependency: 15-24 age group; Old-age: 60+"
  };

  const householdData = {
    averageSize: "4.8 members",
    nuclearFamily: "65.66%",
    ownership: "88.88%",
    note: "Census 2011 data — nuclear family percentage among highest in India"
  };

  const internationalMigration = {
    passportDecline: "40% — decline in passport renewals/applications",
    usaIllegalImmigrants: "500,000+ Punjabis estimated in USA without legal status",
    outMigration20192020: "2.37 lakh youngsters (18-20 years) moved abroad on student visas",
    note: "Major brain drain from Doaba and Malwa belts"
  };

  // District-wise SC Population (from MP2-001)
  const districtSCData = [
    { rank: 1, district: "SBS Nagar", scPct: "42.51%", dominantSC: "Ravidassia/Ad-Dharmi (34.9%)" },
    { rank: 2, district: "Muktsar", scPct: "42.31%", dominantSC: "Mazhabi (25.9%)" },
    { rank: 3, district: "Fazilka", scPct: "42.27%", dominantSC: "Mazhabi-dominant" },
    { rank: 4, district: "Firozpur", scPct: "42.07%", dominantSC: "Mazhabi (14.5%) + Rai-Sikh (18.4%)" },
    { rank: 5, district: "Jalandhar", scPct: "38.95%", dominantSC: "Mazhabi (11.1%) + Ravidassia (21.4%)" },
    { rank: 6, district: "Faridkot", scPct: "38.92%", dominantSC: "Mazhabi (26.6%)" },
    { rank: 7, district: "Moga", scPct: "36.50%", dominantSC: "Mazhabi (25.4%)" },
    { rank: 8, district: "Hoshiarpur", scPct: "35.14%", dominantSC: "Ravidassia (26.3%)" },
    { rank: 9, district: "Kapurthala", scPct: "33.94%", dominantSC: "Mazhabi (17.2%)" },
    { rank: 10, district: "Tarn Taran", scPct: "33.71%", dominantSC: "Mazhabi (28.2%)" },
    { rank: 11, district: "Mansa", scPct: "33.63%", dominantSC: "Mazhabi (16.1%)" },
    { rank: 12, district: "Bathinda", scPct: "32.44%", dominantSC: "Mazhabi (17.8%)" },
    { rank: 13, district: "Barnala", scPct: "32.24%", dominantSC: "Mazhabi (13.2%) + Ravidassia (15.2%)" },
    { rank: 14, district: "Fatehgarh Sahib", scPct: "32.07%", dominantSC: "Ravidassia (19.2%) + Mazhabi (7.6%)" },
    { rank: 15, district: "Amritsar", scPct: "30.95%", dominantSC: "Mazhabi (22.8%)" },
    { rank: 16, district: "Pathankot", scPct: "30.60%", dominantSC: "Mixed" },
    { rank: 17, district: "Sangrur", scPct: "27.89%", dominantSC: "Mazhabi (10.5%) + Ravidassia (15.8%)" },
    { rank: 18, district: "Ludhiana", scPct: "26.39%", dominantSC: "Ravidassia (14.9%)" },
    { rank: 19, district: "Rupnagar", scPct: "25.42%", dominantSC: "Ravidassia (16.9%)" },
    { rank: 20, district: "Patiala", scPct: "24.55%", dominantSC: "Mixed" },
    { rank: 21, district: "Gurdaspur", scPct: "23.03%", dominantSC: "Mixed" },
    { rank: 22, district: "SAS Nagar", scPct: "21.74%", dominantSC: "Ravidassia (11.7%)" },
  ];

  // Religious Composition from MP2-001 (Census 2011)
  const religiousComposition = [
    { religion: "Sikh", population: "16,004,754", pct: "57.69%" },
    { religion: "Hindu", population: "10,678,138", pct: "38.49%" },
    { religion: "Muslim", population: "535,489", pct: "1.93%" },
    { religion: "Christian", population: "348,230", pct: "1.26%" },
    { religion: "Buddhist", population: "33,237", pct: "0.12%" },
    { religion: "Jain", population: "45,040", pct: "0.16%" },
  ];

  // === DATA FROM MP1-009 (Minorities Tier 2) ===
  const minorityDetails = {
    buddhist: {
      population: "33,237",
      pct: "0.12%",
      note: "Concentrated in border districts; primarily conversions from Sikh SC communities"
    },
    jain: {
      population: "45,040",
      pct: "0.16%",
      note: "Urban concentrated; trading community; historically influential in business"
    },
    muslimHistorical: {
      trajectory: "38.4% (1941) → 1.93% (2011)",
      note: "Massive decline over 70 years — Partition largest factor, ongoing emigration",
      decadeByDecade: [
        { year: 1941, pct: "38.4%" },
        { year: 1951, pct: "13.1%" },
        { year: 1961, pct: "6.8%" },
        { year: 1971, pct: "3.6%" },
        { year: 1981, pct: "2.6%" },
        { year: 1991, pct: "2.2%" },
        { year: 2001, pct: "2.0%" },
        { year: 2011, pct: "1.93%" }
      ]
    },
    mosques: {
      builtRestored: "165 mosques built/restored",
      concentration: "Malerkotla (68% of town), Pathankot, border areas",
      note: "Islamic revival efforts ongoing; CAA protests mobilized Muslim voters 2019-2020"
    },
    churches: {
      count: "948 churches across Punjab",
      pastors: "65,000 pastors and church workers",
      growthDriver: "Dalit conversions (Valmiki, Mazhabi Sikh converting to Christianity)",
      concentration: "Gurdaspur district (7.7% Christian), Amritsar border belt"
    }
  };

  // Religious Composition from MP2-001 (Census 2011)

  // Muslim Concentration by Tahsil (from MP2-001)
  const muslimConcentration = [
    { tahsil: "Malerkotla", district: "Sangrur", muslimPct: "33.26%" },
    { tahsil: "Dhuri", district: "Sangrur", muslimPct: "4.76%" },
    { tahsil: "Nabha", district: "Patiala", muslimPct: "3.54%" },
    { tahsil: "Dera Bassi", district: "SAS Nagar", muslimPct: "3.56%" },
    { tahsil: "Amloh", district: "Fatehgarh Sahib", muslimPct: "3.56%" },
    { tahsil: "Rup Nagar", district: "Rupnagar", muslimPct: "3.14%" },
    { tahsil: "Budhlada", district: "Mansa", muslimPct: "1.83%" },
    { tahsil: "Pathankot", district: "Pathankot", muslimPct: "1.72%" },
  ];

  // OBC Sub-groups (from MP2-001)
  const obcSubGroups = [
    { name: "Saini", concentration: "Malwa, Doaba", politicalAlignment: "Congress/OBC" },
    { name: "Kamboj", concentration: "Malwa central", politicalAlignment: "Congress/OBC" },
    { name: "Labana", concentration: "Malwa", politicalAlignment: "Mixed" },
    { name: "Tarkhan/Ramgarhia", concentration: "Punjab-wide", politicalAlignment: "Congress" },
    { name: "Kumhar", concentration: "Malwa", politicalAlignment: "Congress" },
    { name: "Arain", concentration: "Malwa", politicalAlignment: "Congress" },
    { name: "Gujjar", concentration: "Malwa, Doaba", politicalAlignment: "Mixed" },
    { name: "Teli", concentration: "Malwa", politicalAlignment: "Mixed" },
    { name: "Banjara", concentration: "Scattered", politicalAlignment: "Mixed" },
  ];

  // === DATA FROM MP1-007 (OBC Demographics Tier 2) ===
  const obcDetailedSubGroups = [
    { name: "Saini", population: "8-10 lakh", concentration: "Malwa, Doaba", political: "Congress/OBC", note: "Most politically organized OBC group" },
    { name: "Kamboj", population: "6-8 lakh", concentration: "Malwa central", political: "Congress/OBC", note: "Significant landholding community" },
    { name: "Ramgarhia (Tarkhan)", population: "5.6 lakh", concentration: "Punjab-wide", political: "Congress", note: "Artisan community with NRI presence" },
    { name: "Labana", population: "3-4 lakh", concentration: "Malwa", political: "Mixed", note: "Agricultural community" },
    { name: "Kumhar", population: "2-3 lakh", concentration: "Malwa", political: "Congress", note: "Traditional potter community" },
    { name: "Arain", population: "2-2.5 lakh", concentration: "Malwa", political: "Congress", note: "Agricultural traders" },
    { name: "Gujjar", population: "2-2.5 lakh", concentration: "Malwa, Doaba", political: "Mixed", note: "Pastoral community" },
    { name: "Teli", population: "1.5-2 lakh", concentration: "Malwa", political: "Mixed", note: "Oil-pressers, trading" },
    { name: "Nai", population: "1-1.5 lakh", concentration: "Punjab-wide", political: "Congress", note: "Barber community" },
    { name: "Banjara", population: "0.5-1 lakh", concentration: "Scattered", political: "Mixed", note: "Nomadic community" }
  ];

  const obcVoteShareByParty = {
    csdsData: {
      congress: { low: "43%", high: "58%", trend: "Upward 2014-2022" },
      aap: { low: "22%", high: "35%", trend: "Rapid growth 2020-2022" },
      bjp: { low: "8%", high: "18%", trend: "Tripled 2022-2024" },
      sad: { low: "5%", high: "12%", trend: "Declining" }
    },
    note: "OBC vote highly contested — Congress still leads but AAP/BJP gaining"
  };

  // === DATA FROM MP1-008 (Upper Caste Demographics Tier 2) ===
  const upperCasteDetails = {
    brahmin: {
      population: "3-4%",
      concentration: "Malwa, Majha",
      nriRepresentation: "Moderate",
      politicalAlignment: "Congress, BJP",
      note: "Priesthood, academia, bureaucracy"
    },
    khatriArora: {
      population: "3-5%",
      concentration: "Urban Punjab (Ludhiana, Amritsar, Jalandhar, Patiala)",
      nriRepresentation: "HIGH — dominant NRI caste along with Jat Sikh",
      politicalAlignment: "Congress (dominant), BJP",
      note: "50% Hindu / 50% Sikh — major economic, trading, business community"
    },
    baniya: {
      population: "2.5-2.7%",
      concentration: "Urban, Malwa",
      nriRepresentation: "Low-Moderate",
      politicalAlignment: "Congress, BJP",
      note: "Trading, business community"
    },
    rajput: {
      population: "5%",
      concentration: "Malwa, Doaba",
      nriRepresentation: "Moderate",
      politicalAlignment: "Mixed (Congress, BJP, SAD)",
      note: "Landowning community with political presence"
    },
    totalUpperCaste: {
      hindu: "10-13% of total population",
      sikh: "8-10% of total population (Jat + non-Jat)",
      note: "Upper castes combined ~18-23% of Punjab population"
    },
    khatriAroraNri: {
      concentration: "Among highest NRI concentrations after Jat Sikh",
      destinations: "UK (largest), USA, Canada, Australia",
      economicProfile: "Business, professional, academic",
      remittanceImpact: "Major foreign exchange inflow to urban areas"
    }
  };

  // Regional Caste Patterns (from MP2-001, MP7-009)

  const obcCreamyLayer = {
    threshold: "Rs 8 lakh per annum",
    visvasBeneficiaries: "6.41 lakh",
    note: "Creamy layer exclusion applies to OBC reservation"
  };

  // Regional Caste Patterns (from MP2-001, MP7-009)

  // === CYCLE 1 DATA: Region Seat Distribution ===
  const regionSeatsData: RegionSeats[] = [
    { region: "Malwa", seats: 73, scSeats: 24, keyCaste: "Jat Sikh 20-21%, OBC", notes: "Largest region; AAP dominant in 2022; highest farmer distress" },
    { region: "Majha", seats: 25, scSeats: 6, keyCaste: "Jat Sikh 30-35%, Mazhabi Sikh", notes: "Border region; SAD traditional base; Tarn Taran by-poll severe swing" },
    { region: "Doaba", seats: 23, scSeats: 4, keyCaste: "Ravidasia 23-26%, OBC", notes: "NRI concentration; Dera influence; highest SC concentration" },
  ];

  // === DATA FROM MP1-006 (Jat Sikh Demographics Tier 2) ===
  const jatSikhDetails = {
    population: {
      estimate: "20-30% of Punjab population",
      voters: "28-32% of total voters",
      note: "Largest single caste group in Punjab; dominant in Malwa and Majha"
    },
    regionalDistribution: [
      { region: "Malwa", concentration: "20-25%", keyDistricts: "Bathinda, Mansa, Muktsar, Moga, Sangrur, Barnala" },
      { region: "Majha", concentration: "30-35%", keyDistricts: "Tarn Taran, Amritsar rural, Gurdaspur" },
      { region: "Doaba", concentration: "15-20%", keyDistricts: "Hoshiarpur, SBS Nagar, Kapurthala" },
      { region: "Powadh", concentration: "18-22%", keyDistricts: "Patiala, Fatehgarh Sahib, Ludhiana" }
    ],
    landholdingStratification: {
      below5acres: "73% of Jat Sikh landholders",
      fiveTo12_5acres: "24% of Jat Sikh landholders",
      above12_5acres: "3% of Jat Sikh landholders",
      averageLandholding: "5.1 acres",
      note: "97% of Jat Sikh farmers have less than 12.5 acres — predominantly small/marginal farmers"
    },
    nriConnection: {
      doabaFamilies: "1 in 4 Doaba families has at least one NRI member",
      majorDestinations: "UK (largest), Canada, USA, Australia, Germany",
      remittance: "Billions of dollars annually — major economic driver",
      politicalImpact: "NRI vote (proxy voting, postal ballots) significant in Doaba/Malwa seats"
    },
    majorClans: [
      "Sidhu (largest)", "Sandhu", "Gill", "Singh", "Bains", "Dhillon", "Sandhu",
      "Maan", "Sidhu-Bains divide", "Cheema", "Grewal", "Judge", "Brar",
      "Randhawa", "Sangha", "Uppal", "Suri", "Monga", "Ahluwalia",
      "Bhatti", "Deol", "Kaler", "Shergill", "Talhan", "Warraich"
    ],
    farmProtest2020_21: {
      background: "2020-21 farmers' protest against 3 farm laws",
      jatSikhRole: "Jat Sikh farmers formed backbone of protest at Delhi borders",
      duration: "13+ months siege",
      outcome: "Laws repealed 2021",
      votingImpact2022: "Significant anti-BJP swing; SAD lost traditional Jat Sikh voters",
      note: "Farmers' issue remain top concern for 2027 election"
    },
    bkuFactions: {
      bkuLakhowal: "Major faction — led by Harinder Singh Lakhowal",
      bkuUgrahan: "Largest by membership — led by Joginder Singh Ugrahan (1M+ members)",
      bkuKrantikari: "Led by Darshan Singh Lahore",
      bkuD假aw: "Led by Balbir Singh Rajewal",
      note: "Multiple factions with different political alignments create complex farmer vote mobilization"
    }
  };

  // Regional Caste Patterns (from MP2-001, MP7-009)
  const regionalCastePatterns = {
    malwa: {
      scPct: "32-42%",
      upperCastePct: "30-35%",
      obcPct: "24-31%",
      dominantPattern: "Mazhabi Sikh belt; Jat Sikh heartland; strong Dera Radha Soami influence",
      jatSikhConcentration: "20-25% of population; 55-60 seats influenced (MP7-009)",
      jatSikhVoters: "28-32% of voters (Bathinda, Mansa, Muktsar, Ferozpur)",
      keyDistricts: "Bathinda, Mansa, Sangrur, Barnala, Moga, Ferozpur, Fazilka, Muktsar, Faridkot, Ludhiana, Patiala, Fatehgarh Sahib, Tarn Taran, Amritsar, Rupnagar"
    },
    majha: {
      scPct: "23-31%",
      upperCastePct: "38-45%",
      obcPct: "26-28%",
      dominantPattern: "Jat Sikh dominant; Mazhabi Sikh highest concentrations; Hindu Khatri/Arora urban",
      sikhPct: "Tarn Taran 93.3%, Amritsar 68.9%, Gurdaspur 43.6%",
      jatSikhConcentration: "30-35% of voters (Tarn Taran, Amritsar rural)",
      keyDistricts: "Amritsar, Tarn Taran, Gurdaspur, Pathankot"
    },
    doaba: {
      scPct: "33-42%",
      upperCastePct: "30-37%",
      obcPct: "23-26%",
      dominantPattern: "Highest SC concentration in Punjab; Ravidassia heartland; NRI belt; heavy Dera influence",
      scPctSpecific: "Jalandhar 39%, Hoshiarpur 35%, SBS Nagar 42.5%, Doaba overall 40%+ (MP7-010)",
      ravidassiaConcentration: "SBS Nagar 34.9%, Hoshiarpur 26.3%",
      keyDistricts: "Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar"
    }
  };

  // Dera Voter Blocks (from MP2-001)
  const deraVoterBlocks = [
    { name: "Radha Soami Satsang Beas", location: "Beas, Amritsar district", primaryFollowers: "Cross-caste (Sikh + Hindu); upper + middle castes; NRI-heavy", electoralImpact: "HIGH", visitedBy: "AAP, SAD, Congress candidates in 2024 LS polls" },
    { name: "Dera Sach Khand (Ravidassia)", location: "Ballan, Jalandhar district", primaryFollowers: "Ravidassia/Ad-Dharmi community (13.1% Punjab); SC Sikhs", electoralImpact: "VERY HIGH", note: "Ravidassia community decisive in 10+ ACs" },
    { name: "Divya Jyoti Jagriti Sansthan (DJJS)", location: "Nurmahal, Jalandhar district", primaryFollowers: "Cross-caste", electoralImpact: "HIGH", visitedBy: "Preneet Kaur (BJP) 2024" },
    { name: "Namdhari Dera", location: "Near SBS Nagar", primaryFollowers: "Sikh upper caste", electoralImpact: "MODERATE" },
    { name: "Nirankari Dera", location: "Urban Punjab", primaryFollowers: "Cross-caste Sikh", electoralImpact: "MODERATE" },
  ];

  // NRI Voter Caste Profile (from MP2-001)
  const nriCasteProfile = [
    { casteGroup: "Jat Sikh", nriRepresentation: "HIGHEST — dominant NRI caste", destinations: "UK (largest), Canada, USA, Australia, Germany" },
    { casteGroup: "Khatri/Arora", nriRepresentation: "HIGH", destinations: "UK, USA, Canada" },
    { casteGroup: "Brahmin", nriRepresentation: "Moderate", destinations: "USA, UK" },
    { casteGroup: "Ravidassia/Ad-Dharmi", nriRepresentation: "Moderate-High", destinations: "UK, USA, Canada (Doaba diaspora)" },
    { casteGroup: "Mazhabi Sikh", nriRepresentation: "Low-Moderate", destinations: "UK (some), Canada" },
    { casteGroup: "OBC (Kamboj, Saini)", nriRepresentation: "Low-Moderate", destinations: "UK, USA" },
    { casteGroup: "Hindu (Bania, Rajput)", nriRepresentation: "Low", destinations: "USA, UK" },
  ];

  // Caste Fragmentation Index (from MP2-001)
  const casteFragmentation = {
    highFragmentation: {
      threshold: ">0.65",
      acTypes: "Urban Middle-Class ACs (Ludhiana East/West, Jalandhar, Patiala, Amritsar), Border Mixed ACs (Gurdaspur, Pathankot, Fazilka), Malwa OBC-Dominant ACs (Moga, Barnala, Mansa, Bathinda rural)",
      casteMakeup: "Khatri-Bania (urban), SC, OBC, Hindu upper all significant"
    },
    lowFragmentation: {
      threshold: "<0.50",
      acTypes: "SC-Dominant Reserved ACs (SC 60-70% within reserved), Sikh-Dominant Malwa ACs (Sikh 75%+, Jat Sikh 25-30%), Muslim-Dominant General AC (Malerkotla area 33% Muslim)",
      casteMakeup: "Single caste block >50%"
    }
  };

  // === DATA FROM MP1-005 (SC Demographics Tier 2) ===
  const scSubCasteLiteracy = [
    { name: "Ad-Dharmis", literacy: "76.4%", note: "Highest literacy among SC sub-groups" },
    { name: "Ravidassia", literacy: "68.2%", note: "Doaba concentrated" },
    { name: "Balmiki", literacy: "62.5%", note: "Scattered across Malwa" },
    { name: "Rai Sikh", literacy: "58.7%", note: "Malwa, Majha" },
    { name: "Mazhabi Sikh", literacy: "52.1%", note: "Lowest among major SC groups" },
    { name: "Bazigar", literacy: "42.3%", note: "Lowest overall — most marginalized SC group" },
  ];

  const scAgriculturalLabor = {
    mazhabiSikh: "68% agricultural laborers (highest of any caste group)",
    balmiki: "55% agricultural laborers",
    ravidassia: "45% agricultural laborers",
    stateAverage: "38% of SC households are agricultural laborers",
    note: "Landlessness correlates with agricultural laborer status"
  };

  const scGovernmentJobs = {
    representation: "3.2% in government jobs vs 6.8% state average",
    scQuotas: "25% reservation fully implemented but filling rate ~60%",
    gap: "Significant under-representation in state services",
    police: "Higher representation: ~18% of Punjab Police are SC"
  };

  const scLandOwnership = {
    dalitOwned: "3.5% of Punjab's private farmland",
    scPopulation: "31.9% of Punjab's population",
    gap: "27.4 percentage point disparity — structural land inequality",
    governmentInitiative: "Guru Nanak Nizam welfare scheme for landless Dalits"
  };

  const scReservedACList = [
    "Nagar (Ludhiana)", "Gill (Ludhiana)", "Ludhiana North", "Ludhiana East", "Ludhiana West",
    "Jalandhar Central", "Jalandhar North", "Jalandhar Cantt", "Kartarpur", "Nakodar",
    "Phagwara", "Hoshiarpur", "Garhshankar", "Moga", "Dharamkot",
    "Kotakpura", "Faridkot", "Bathinda Rural", "Bathinda Urban", "Muktsar",
    "Lambi", "Gidderbaha", "Malout", "Fazilka", "Ferozpur",
    "Jalalabad", "Khadoor Sahib", "Baba Bakala", "Ajnala", "Attari",
    "Tarn Taran", "Patti", "Bhawani Ganj"
  ];

  // === DATA FROM MP2-006 (Religious Tier 2) ===
  const deraSanggDetails = {
    totalDeras: "~9,000 across Punjab",
    "dera SachkhandBallan": {
      location: "Ballan village, Jalandhar district",
      head: "Sant Niranjan Dass (Padma Shri, January 2026)",
      community: "Ravidassia (Chamar caste)",
      directFollowers: "5-8 lakh",
      expandedNetwork: "8-13 lakh (with affiliated deras)",
      politicalReach: "All Punjab; PM Modi visited Feb 1, 2026",
      electoralSignificance: "Doaba belt (10-12 ACs); decisive in close contests"
    }
  };

  const namdhariVoters = {
    estimatedPopulation: "500,000 to 1,000,000",
    headquarters: "Sri Bhaini Sahib, Ludhiana district",
    founded: "1857 by Satguru Ram Singh",
    casteComposition: "Jat Sikh, Ramgarhia, Arora, Mazhabi",
    keyACs: ["Ludhiana Rural", "Malerkotla", "Raikot", "Khanna", "Jagraon"],
    electoralSignificance: "3-5 ACs; bloc voting with extremely high cohesion",
    communityCode: "No alcohol, no meat, community solidarity"
  };

  // === DATA FROM MP1-010 (Dera-Sect Influence Tier 2) - Additional ===
  const namdhariDetails = {
    estimatedVoters: "500K-1M",
    keyACs: [
      "Ludhiana Rural (40%+)",
      "Malerkotla (25-30%)",
      "Raikot (20-25%)",
      "Khanna (15-20%)",
      "Jagraon (15-20%)"
    ],
    electoralImpact: "Decisive in 3-5 ACs due to bloc voting",
    voteDecline: "Relatively stable — unlike Dera Sacha Sauda"
  };

  const deraVoteDeclineByYear = {
    deraSachaSauda: [
      { year: 2012, voteInfluence: "3.6%", note: "Pre-sacrilege controversy" },
      { year: 2017, voteInfluence: "2.9%", note: "Post-sacrilege impact" },
      { year: 2022, voteInfluence: "0.9%", note: "Massive decline to 1/4 of 2012" }
    ],
    collectiveDeras: [
      { year: 2012, pct: "25%", note: "25% identified as Dera followers" },
      { year: 2017, pct: "31.89%", note: "Peak — including 8.2% 'don't know'" },
      { year: 2022, pct: "24.3%", note: "75.7% did not follow any Dera" }
    ]
  };

  const rssFloodRelief = {
    familiesAided: "12,000+ families",
    event: "2025 Punjab floods",
    punjabAssessment: "Marginal compared to Hindu-majority states but growing",
    note: "RSS flood relief provides community outreach opportunity"
  };

  // === DATA FROM MP1-010 (Dera-Sect Influence Tier 2) ===
  const deraDeclineTrend = {
    deraSachaSauda: {
      globalFollowers: "60 million (self-reported)",
      punjabFollowers: "35 lakh",
      voteInfluenceDecline: [
        { year: 2012, pct: "3.6%" },
        { year: 2017, pct: "2.9%" },
        { year: 2022, pct: "0.9%" },
      ],
      declineNote: "Dropped to 1/4 of 2012 level — CSDS-Lokniti data",
      electoralTranslation: "Rarely guarantees votes — DSS relative lost every election contested"
    },
    collectiveDeraInfluence: {
      totalVoters: "~54-56 lakh (24-25% of ~2.25 crore Punjab voters)",
      collectiveTrend: [
        { year: 2012, pct: "25% identified as Dera followers" },
        { year: 2017, pct: "31.89% (including 8.2% 'don't know')" },
        { year: 2022, pct: "24.3% (75.7% did not follow any Dera)" },
      ]
    }
  };

  // SGPC Influence (from MP1-010)
  const sgpcInfluence = {
    declineInElectoralRoll: "50% decline since 2011",
    sejahdhariSikh: {
      population: "~40% of Punjab's Sikh population",
      votingRights: "Excluded from SGPC voting since 2016 amendment",
      legalStatus: "Supreme Court notice issued 2017, pending",
      typicalAlignment: "Congress and AAP (less aligned with SAD due to reform orientation)"
    },
    mechanismOfInfluence: "Gurdwara-based campaigning, religious directives (Tankhah, Hukamnama), sacred site access"
  };

  // RSS National Data (from MP1-010)
  const rssInfluence = {
    nationalMembers: "4 million",
    nationalShakhas: "73,117",
    punjabAssessment: "Marginal compared to Hindu-majority states; Sikh population limits penetration",
    recentActivity: "12,000+ families aided in 2025 Punjab flood relief"
  };

  const hinduVoterAnalysis = {
    totalPunjab: "38.49%",
    votingPattern: "NOT assimilated into Sikh voting patterns",
    evidence: [
      "BJP vote share rose from 9.98% (2019) to 18% (2024 Lok Sabha) — attributed to Hindu voter consolidation",
      "Congress won 4 of 6 Hindu-significant seats in 2024 LS",
      "AAP formed Sanatan Seva Committee (August 2025) — Hindu outreach",
      "Mann government created 14 caste boards (August 2025) — targeting Hindu caste groups away from BJP"
    ],
    urbanHinduACs: ["Ludhiana", "Jalandhar", "Amritsar", "Patiala", "Bathinda", "Hoshiarpur"],
    keyInsight: "Hindu voters are the most contested swing demographic in Punjab"
  };

  // === DATA FROM MP2-005 (Economic Tier 2) ===
  const economicClassMatrix = {
    statePoverty: {
      headcountRatio: "8.26%",
      ruralPoverty: "7.66%",
      urbanPoverty: "9.18%",
      note: "2nd lowest among Indian states (Tendulkar 2011-12)"
    },
    unemployment: {
      rate: "7.7%",
      note: "Above national 6.7% (PLFS 2024)"
    },
    classCategories: [
      { class: "Landless/Agricultural Labourers (Poorest)", voterShare: "~18-22%", occupations: "Farm wage labour, casual work", geography: "Malwa rural, Doaba rural" },
      { class: "Small/Marginal Farmers (Lower)", voterShare: "~15-18%", occupations: "<5 acre holdings, also work as labour", geography: "Malwa, Doaba" },
      { class: "Lower-Middle Class (Auto, Shop, Small Business)", voterShare: "~20-25%", occupations: "Auto-rickshaw, small shopkeepers, artisans", geography: "Urban-periurban across all districts" },
      { class: "Middle Class (Salaried, Professionals)", voterShare: "~15-20%", occupations: "Government/private salaried, teachers, nurses", geography: "Urban: Ludhiana, Jalandhar, Amritsar, Patiala" },
      { class: "Upper Class / Large Landowners", voterShare: "~10-12%", occupations: "Large farmers (>10 acres), industrialists, NRIs", geography: "Malwa agrarian belt, NRI families in Doaba/Malwa" },
    ],
    poorestDistricts: ["Moga", "Sangrur", "Ferozepur", "Bathinda", "Mansa", "Barnala", "Faridkot", "Fazilka"],
    middleClassConcentration: ["Ludhiana East/West", "Jalandhar Central/Cantt", "Amritsar Central/North", "Patiala", "Mohali (SAS Nagar)"]
  };

  const classCasteIntersection = [
    { caste: "Jat Sikh Large Landowner", economicClass: "Upper/Middle", partyLoyalty: "SAD → AAP (partial)", shift: "Moderate shift to AAP" },
    { caste: "Jat Sikh Small/Marginal", economicClass: "Lower-Middle/Poor", partyLoyalty: "AAP", shift: "Strong AAP shift" },
    { caste: "Upper Caste Hindu", economicClass: "Upper/Middle", partyLoyalty: "Congress/BJP", shift: "BJP gaining" },
    { caste: "Upper Caste Sikh (non-Jat)", economicClass: "Upper", partyLoyalty: "Congress/SAD", shift: "Stable" },
    { caste: "OBC", economicClass: "Lower-Middle to Middle", partyLoyalty: "Congress/AAP", shift: "AAP gaining" },
    { caste: "Sikh SC (Mazhabi)", economicClass: "Poor/Landless", partyLoyalty: "AAP", shift: "Strong AAP shift" },
    { caste: "Hindu SC (Ravidasia)", economicClass: "Lower-Middle", partyLoyalty: "BSP/AAP", shift: "AAP making inroads" },
    { caste: "Hindu SC (Balmiki)", economicClass: "Poor", partyLoyalty: "Congress/AAP", shift: "Congress base" },
  ];

  // === DATA FROM MP2-002 (Age Tier 2) ===
  const firstTimeVoterData = {
    totalRegistered2022: "3,48,836",
    whoVoted: "1,99,023 (57%)",
    projectedPopulation: "9.30 lakh",
    registrationRate: "38%",
    comparison: {
      ftv2019: "3,94,780",
      ftv2017: "3,67,077"
    },
    turnout2022: "72.15%",
    youthBulge: {
      age1835: "~35-40% est.",
      age3650: "~25-30% est.",
      age5165: "~18-22% est.",
      age65plus: "~10-15% est."
    },
    firstTimeVoterTurnoutByDistrict: [
      { district: "Fatehgarh Sahib", turnout: "74.6%", note: "HIGH - youth stayed" },
      { district: "Muktsar Sahib", turnout: "71.8%", note: "HIGH" },
      { district: "Fazilka", turnout: "70.8%", note: "HIGH" },
      { district: "Sangrur", turnout: "68.9%", note: "HIGH" },
      { district: "Ropar", turnout: "68.7%", note: "HIGH" },
      { district: "Mohali", turnout: "32%", note: "LOW - high urban student migration" },
      { district: "Tarn Taran", turnout: "38.4%", note: "LOW" },
      { district: "Gurdaspur", turnout: "46.7%", note: "LOW" },
      { district: "Amritsar", turnout: "47.2%", note: "LOW" },
      { district: "Jalandhar", turnout: "47.5%", note: "LOW" },
    ],
    youth2027Projection: "~3.5-4.5 lakh registered first-time voters",
    emigrationImpact: "2019-2020: ~2.37 lakh Punjab youngsters (18-20 years) moved abroad on student visas"
  };

  // === DATA FROM MP1-002-AgeStructure (Age Structure & Political Cohorts) ===
  const ageStructurePoliticalCohorts = {
    populationOverview: {
      projectedPopulationJuly2026: "3.14 crore (31.37 million)",
      male: "1.65 crore (16.45 million)",
      female: "1.49 crore (14.92 million)",
      sexRatio: "110.2 males per 100 females",
      indiaShare: "2.19%",
      growthRate2026: "0.58% (10th lowest among states)",
      tfr: "1.6 (NFHS-5) — below replacement level of 2.1",
      note: "Punjab's population growth declining steadily: 20.10% (1991-2001) → 13.89% (2001-2011) → 0.58% (2026 projected). State aging faster than most Indian states due to sustained low fertility and significant youth emigration."
    },

    fiveYearCohortsCensus2011: [
      { ageGroup: "0-4", population: "21,33,529", percentOfTotal: "7.69%", male: "11,49,956", female: "9,83,573", mPer100F: "116.9" },
      { ageGroup: "5-9", population: "23,68,019", percentOfTotal: "8.54%", male: "13,01,682", female: "10,66,337", mPer100F: "122.1" },
      { ageGroup: "10-14", population: "25,83,402", percentOfTotal: "9.31%", male: "14,45,530", female: "11,37,872", mPer100F: "127.0" },
      { ageGroup: "15-19", population: "28,17,683", percentOfTotal: "10.16%", male: "15,70,180", female: "12,47,503", mPer100F: "125.9" },
      { ageGroup: "20-24", population: "27,76,636", percentOfTotal: "10.01%", male: "14,65,531", female: "13,11,105", mPer100F: "111.8" },
      { ageGroup: "25-29", population: "24,63,861", percentOfTotal: "8.88%", male: "12,70,405", female: "11,93,456", mPer100F: "106.4" },
      { ageGroup: "30-34", population: "21,16,539", percentOfTotal: "7.63%", male: "10,82,533", female: "10,34,006", mPer100F: "104.7" },
      { ageGroup: "35-39", population: "19,89,071", percentOfTotal: "7.17%", male: "10,10,862", female: "9,78,209", mPer100F: "103.3" },
      { ageGroup: "40-44", population: "17,88,469", percentOfTotal: "6.45%", male: "9,09,208", female: "8,79,261", mPer100F: "103.4" },
      { ageGroup: "45-49", population: "15,87,771", percentOfTotal: "5.72%", male: "8,18,135", female: "7,69,636", mPer100F: "106.3" },
      { ageGroup: "50-54", population: "12,54,464", percentOfTotal: "4.52%", male: "6,63,664", female: "5,90,800", mPer100F: "112.3" },
      { ageGroup: "55-59", population: "9,56,555", percentOfTotal: "3.45%", male: "4,85,845", female: "4,70,710", mPer100F: "103.2" },
      { ageGroup: "60-64", population: "9,96,590", percentOfTotal: "3.59%", male: "4,82,483", female: "5,14,107", mPer100F: "93.8" },
      { ageGroup: "65-69", population: "7,19,588", percentOfTotal: "2.59%", male: "3,72,806", female: "3,46,782", mPer100F: "107.5" },
      { ageGroup: "70-74", population: "5,13,472", percentOfTotal: "1.85%", male: "2,72,120", female: "2,41,352", mPer100F: "112.7" },
      { ageGroup: "75-79", population: "2,56,666", percentOfTotal: "0.93%", male: "1,30,203", female: "1,26,463", mPer100F: "103.0" },
      { ageGroup: "80+", population: "3,79,801", percentOfTotal: "1.37%", male: "1,86,250", female: "1,93,551", mPer100F: "96.2" },
    ] as DetailedFiveYearCohort[],

    populationPyramidAnalysis: {
      constrictiveBase: "Punjab's pyramid (2011) showed narrower at bottom (0-14) than middle (15-39), indicating declining fertility. By 2026, this pattern has sharpened.",
      ageGroupShares2011: { children014: "25.5%", workingAge1559: "64%", elderly60Plus: "10.3%" },
      ageGroupShares2026Projected: { children014: "~22% (declining births)", workingAge1559: "~64% (plateau)", elderly60Plus: "~12-13%" },
      birthDecline: "Births dropped from 5,11,058 (2011) to 3,81,200 (2020) — 25.4% decline in a decade"
    },

    politicalCohorts2027: [
      { cohortName: "First-time voters", ageRange: "18-22", estPopulation: "~14-16 lakh", percentOfTotal: "~5%", politicalSignificance: "Born 2005-2009; digital-native; AAP's core 2022 base" },
      { cohortName: "New voters", ageRange: "22-30", estPopulation: "~35-38 lakh", percentOfTotal: "~12%", politicalSignificance: "Job-seekers; emigration aspirants; high anti-incumbency" },
      { cohortName: "Youth (total)", ageRange: "18-35", estPopulation: "~62-68 lakh", percentOfTotal: "~21%", politicalSignificance: "Largest swing bloc; determines election outcomes" },
      { cohortName: "Middle-age", ageRange: "35-50", estPopulation: "~52-56 lakh", percentOfTotal: "~17%", politicalSignificance: "Family decision-makers; economically stressed" },
      { cohortName: "Pre-senior", ageRange: "50-65", estPopulation: "~35-38 lakh", percentOfTotal: "~12%", politicalSignificance: "Farmers, pension-approaching; institutional voters" },
      { cohortName: "Senior citizens", ageRange: "65+", estPopulation: "~22-25 lakh", percentOfTotal: "~8%", politicalSignificance: "High turnout; pension/social security concerns" },
      { cohortName: "Pre-voting age", ageRange: "0-17", estPopulation: "~70-75 lakh", percentOfTotal: "~24%", politicalSignificance: "Future electorate; not voting in 2027" },
    ] as PoliticalCohort[],

    missingYouthParadox: {
      keyInsight: "UDISE+ 2023-24 reveals Punjab's share of children in 3-7 age group nationally is only 1.73%, down from 2.29% in 2011. Birth registrations fell 25% between 2011-2020.",
      implication: "Each successive cohort entering voting age is SMALLER than the one before it — but emigration means the 18-35 cohort is also PHYSICALLY DIMINISHED as young Punjabis leave for Canada, UK, Australia, EU."
    },

    firstTimeVoterPool2027: {
      birthYears: "2005-2009 (turning 18-22 by Feb 2027)",
      currentElectorate2022: "2.15 crore registered voters",
      lokSabha2024: "2.14 crore (with deletions/additions)",
      sirStatus: "SIR ordered May 2026 — will determine final rolls",
      estimation: {
        age1822Population2027: "~14-16 lakh",
        likelyRegistered: "~10-13 lakh (70-80% norm)",
        minusEmigration: "~2-3 lakh absent (15-20% of cohort abroad)",
        netNewVoters2027: "~8-10 lakh"
      },
      verificationNeeded: "Exact first-time voter count will only be known after SIR completion (ordered May 14, 2026; expected late 2026)"
    },

    firstTimeVoterPoliticalCharacter: {
      birthYears: "2005-2009: Grew up during AAP governance (2022-2027)",
      memoryGap: "No lived memory of Congress governance (ended 2017)",
      digitalNative: "TikTok/Instagram/WhatsApp primary information sources",
      keyIssues: ["unemployment", "emigration", "drugs", "education quality"],
      votingPattern: "Voted overwhelmingly for AAP in 2022 (per post-poll surveys)"
    },

    lifeStageVotingPatterns: [
      { lifeStage: "Students", ageGroup: "18-22", keyConcerns: "Education quality, jobs, emigration", votingBehaviorPattern: "Volatile; low turnout; AAP-leaning" },
      { lifeStage: "Early career", ageGroup: "23-30", keyConcerns: "Employment, housing, marriage cost", votingBehaviorPattern: "High emigration; anti-establishment" },
      { lifeStage: "Young families", ageGroup: "30-40", keyConcerns: "Child education, healthcare, income", votingBehaviorPattern: "Economic voting; pragmatic" },
      { lifeStage: "Established", ageGroup: "40-55", keyConcerns: "Farm income, business, children's future", votingBehaviorPattern: "Traditional loyalty; issue-based swing" },
      { lifeStage: "Pre-retirement", ageGroup: "55-65", keyConcerns: "Pension, health, debt relief", votingBehaviorPattern: "High turnout; loyalty-based" },
      { lifeStage: "Elderly", ageGroup: "65+", keyConcerns: "Healthcare, social security, respect", votingBehaviorPattern: "Highest turnout; community-influenced" },
    ] as LifeStageVoting[],

    temporalChange2001_2011_2026: [
      { indicator: "Total population", year2001: "2.44 crore", year2011: "2.77 crore", year2026: "3.14 crore" },
      { indicator: "Decadal growth", year2001: "20.10%", year2011: "13.89%", year2026: "~13.4% (2011-2026)" },
      { indicator: "0-14 age share", year2001: "~31%", year2011: "25.5%", year2026: "~22%" },
      { indicator: "15-59 age share", year2001: "~60%", year2011: "64%", year2026: "~64% (plateau)" },
      { indicator: "60+ age share", year2001: "~8%", year2011: "10.3%", year2026: "~12-13%" },
      { indicator: "TFR", year2001: "2.47 (NFHS-2)", year2011: "1.7-1.8", year2026: "1.6 (NFHS-5)" },
      { indicator: "Birth registrations", year2001: "5,11,058", year2011: "~4,50,000", year2026: "~3,81,200 (2020)" },
      { indicator: "Median age (est.)", year2001: "~24", year2011: "~27", year2026: "~30-31" },
    ] as TemporalChange[],

    emigrationImpactOnYouthDemographics: {
      scale: "50,000-80,000 Punjabi youth emigrate annually (students + workers)",
      profile: "Primarily 18-30 age group; predominantly male; Sikh overrepresentation",
      impactOn2027Electorate: "Physically present 18-30 cohort is 15-20% smaller than census-projected number",
      udiseEvidence: "Sikh children at foundational level (3-8 years) are 49% of Punjab enrollment — 8.68pp below their 57.69% population share in 2011",
      netEffect: "Each election cycle, the most politically volatile age group (18-30) loses a significant chunk to emigration, potentially dampening anti-incumbency waves"
    },

    regionalAgeVariations: [
      { region: "Malwa", seats: "69 seats", districts: "Ludhiana, Bathinda, Mansa, Sangrur, Moga, etc.", ageProfileCharacter: "Highest emigration; youngest outward; aging farmer base" },
      { region: "Majha", seats: "25 seats", districts: "Amritsar, Gurdaspur, Tarn Taran, Pathankot", ageProfileCharacter: "Border districts; higher fertility in some pockets; strong Sikh character" },
      { region: "Doaba", seats: "23 seats", districts: "Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar", ageProfileCharacter: "Highest NRI connection; most emigration impact; aging fastest" },
    ] as RegionalAgeProfile[],

    doabaAgingCorridor: {
      description: "Doaba is Punjab's 'aging corridor' — highest proportion of elderly, lowest youth retention, strongest NRI remittance economy"
    },

    strategicImplicationsForCongress2027: [
      { number: 1, implication: "Youth (18-35) is the largest swing bloc at ~21% of population, but physically diminished by emigration. Campaign must target youth who remain — they are job-seekers, not emigration aspirants." },
      { number: 2, implication: "First-time voters have NO memory of Congress governance. They only know AAP (2022-2027) and have seen Congress as opposition. Congress must rebuild its youth brand from scratch." },
      { number: 3, implication: "Aging farmer population (50-65, ~12%) is Congress's traditional base — high turnout, loyal, economically stressed by farm debt. This is the reliable vote bank." },
      { number: 4, implication: "The 'missing youth' paradox: Punjab's youth are either emigrating or politically disengaged. High-profile emigration actually reduces the size of the anti-incumbency cohort — this benefits AAP." },
      { number: 5, implication: "Middle-age economic voters (35-50) are the decision-makers. They vote on kitchen-table issues: inflation, farm income, jobs for their children. This is Congress's primary persuasion target." },
      { number: 6, implication: "Declining birth cohort means each successive election has fewer new voters. By 2032, the youth bulge will have shifted to 35-50 — a more conservative, economically-focused electorate." },
    ] as StrategicImplication[],

    dataGaps: [
      { dataPoint: "Census 2021 age cohorts", status: "NOT AVAILABLE (census not conducted)", sourceNeeded: "Awaiting Census 2027" },
      { dataPoint: "Exact first-time voter count 2027", status: "PENDING SIR", sourceNeeded: "ECI post-SIR" },
      { dataPoint: "District-wise age breakdown 2026", status: "ESTIMATED ONLY", sourceNeeded: "Requires projection modeling" },
      { dataPoint: "Emigration by age/district", status: "PARTIAL (UDISE+ proxy)", sourceNeeded: "Need MoE/MEA data" },
      { dataPoint: "Urban vs rural age split 2026", status: "NOT AVAILABLE", sourceNeeded: "Requires Census or NFHS-6" },
      { dataPoint: "Age-wise voter turnout 2022", status: "NOT FOUND", sourceNeeded: "CEO Punjab post-poll data if available" },
    ] as AgeStructureDataGaps[]
  };

  // === DATA FROM MP2-003 (Gender Tier 2) ===
  const genderVoterData = {
    totalElectorate: "~2.16 crore (2024)",
    femaleElectorateShare: "~46.4%",
    genderGap: "~8% post-2024 LS (FAFEN, March 2026)",
    newFemaleVoterRegistrationRatio: "89 new female voters per 100 new male voters (2024) — below national 95",
    femaleTurnoutHistory: [
      { election: "2017 Assembly", female: "78.16%", male: "76.73%", gap: "Women led by +1.43 pp" },
      { election: "2022 Assembly", female: "71.91%", male: "71.99%", gap: "Men led by +0.08 pp" },
      { election: "2024 Lok Sabha", female: "62.28%", male: "63.27%", gap: "Men led by +0.99 pp" },
    ],
    femaleTurnoutCollapse: "-6.25 pp (2017 to 2022) — steepest decline",
    seatsWhereWomenLed2024: [
      { seat: "Gurdaspur", femaleTurnout: "68.89%", maleTurnout: "64.70%", margin: "+4.19 pp" },
      { seat: "Khadoor Sahib", femaleTurnout: "63.56%", maleTurnout: "61.65%", margin: "+1.91 pp" },
      { seat: "Jalandhar", femaleTurnout: "60.44%", maleTurnout: "59.03%", margin: "+1.41 pp" },
      { seat: "Hoshiarpur", femaleTurnout: "61.60%", maleTurnout: "56.31%", margin: "+5.29 pp" },
      { seat: "Anandpur Sahib", femaleTurnout: "63.18%", maleTurnout: "60.88%", margin: "+2.30 pp" },
    ],
    electedWomenRepresentatives: "7.7% — lowest in India",
    topIssuesForWomen: ["Drug crisis (#1)", "Unemployment/Jobs", "Broken Rs 1,000/month promise", "Financial independence", "Violence against women", "Farm distress"],
    // Additional data from MP1-003 (Gender Demographics)
    warWidows: {
      count: "2,132",
      note: "Highest in India — Rajya Sabha data (March 2023)",
      scheme: "Widow Sahara Card launched Feb 2026 (Rs 2B livestock program)"
    },
    widowProportion: {
      vsNationalAverage: "39.5% — one of the lowest in India",
      rank: "Among bottom 5 states (with Nagaland 24.5%, Sikkim 32.1%, Haryana 36.5%, Mizoram 38.7%)"
    },
    femalePropertyOwnership: {
      nfhs5Data: "50%+ women own property (house/land alone or jointly)",
      comparison: "Among top states — contrasts with Maharashtra, West Bengal, Uttarakhand (<25%)",
      nationalAverage: "~43% of women owned property per NFHS-5"
    },
    femaleLiteracy: {
      census2011: "70.73%",
      state2023: "71.3% (SSA Punjab)",
      genderGap2023: "7.2 percentage points (reduced from 9.7pp in 2011)",
      overallLiteracy2023: "83.4% (Punjab Economic Survey 2024-25)"
    },
    femaleWorkforceParticipation: {
      status: "Alarmingly low — flagged in academic literature (IJAIDR 2025)",
      nationalComparison: "Below national average despite India's rise from 23.3% to 35.6% (PLFS 2023-24)"
    },
    bankAccountOwnership: {
      female: "78.6%",
      male: "89.2%",
      gap: "10.6 percentage points",
      note: "Jan Dhan Yojana penetration — significantly below gender parity"
    },
    widowProportionDetail: {
      punjabVsNational: "39.5% of national average — one of lowest in India",
      rank: "Among bottom 5 states: Nagaland 24.5%, Sikkim 32.1%, Haryana 36.5%, Mizoram 38.7%, Punjab 39.5%",
      note: "Reflects lower life expectancy and migration patterns"
    }
  };

  // === DATA FROM MP2-004 (Urban-Rural Tier 2) ===
  const urbanRuralDivide = {
    acClassification: [
      { type: "Urban (<50% rural)", acCount: "~20", percentage: "~17%" },
      { type: "Mixed (50-70% rural)", acCount: "~42", percentage: "~36%" },
      { type: "Rural (>70% rural)", acCount: "~55", percentage: "~47%" },
    ],
    urbanRuralTurnout2022: {
      urban: "~65-68%",
      rural: "~73-76%"
    },
    urbanRuralVoteShare2022: {
      aap: { urban: "~18%", rural: "~27%" },
      congress: { urban: "~46%", rural: "~36%" }
    },
    municipalPollResults2024: {
      patiala: { totalWards: 60, aap: 43, congress: 4, bjp: 4, sad: 2, turnout: "32.95%" },
      ludhiana: { totalWards: 95, aap: 41, congress: 30, bjp: 19, sad: 2, independents: 3, turnout: "46.95%" },
      jalandhar: { totalWards: 85, aap: 39, congress: 34, bjp: 19, bsp: 1, independents: 2, turnout: "50.27%" },
      amritsar: { totalWards: 85, congress: 43, aap: 24, bjp: 9, sad: 4, others: 5, turnout: "44.05%" },
      phagwara: { totalWards: 50, congress: 22, aap: 12, bsp: 3, bjp: 4, sad: 3, independents: 6, turnout: "55.21%" },
    },
    ludhianaUrbanGrowth: {
      totalelectors2024: "17,31,124",
      totalelectors2019: "16,83,325",
      migrantVoters2019: "3.32 lakh",
      migrantVoters2024: "4.87 lakh",
      migrantGrowth: "46.7% increase"
    },
    // Additional data from MP1-004 (Urbanization Tier 2)
    slumConcentration: {
      punjabOverall: "5.3% of total state population (Punjab Economic Survey 2024-25)",
      amritsar: {
        slumPop: "329,797",
        cityUrbanPct: "36% — HIGHEST concentration among Punjab cities",
        slums: "28 recognized slums"
      },
      ludhiana: {
        slumPop: "244,163",
        cityUrbanPct: "~15%"
      },
      jalandhar: {
        slumPop: "145,117",
        cityUrbanPct: "~17%"
      },
      bathinda: {
        slumPop: "41,153",
        cityUrbanPct: "~18.68%"
      }
    },
    urbanizationProjections: {
      currentUrban: "37.48% (Census 2011)",
      projected2026: "~39-40%",
      projected2027: "~42-44%",
      growthRate: "Urban 2.5-3% annually vs rural 0.3%"
    },
    municipalGovernance: {
      newAct: "Punjab Local Government Act 2025 (passed October 2025)",
      boundaryRedrawing: "Mohali MC boundaries under redrawing ahead of civic polls 2026"
    },
    // Additional from MP1-004 (Urbanization Tier 2)
    urbanAgglomerations: {
      ludhiana: { population: "1.6M+", note: "Largest UA in Punjab" },
      amritsar: { population: "1.1M+", note: "2nd largest UA" },
      jalandhar: { population: "1.0M+", note: "3rd largest UA" },
      patiala: { population: "500K+", note: "Majha region hub" },
      bathinda: { population: "400K+", note: "Malwa region hub" },
      mohali: { population: "300K+", note: "Chandigarh capital region" },
      pathankot: { population: "200K+", note: "Border hub" },
      total: "7 Urban Agglomerations with 5M+ combined population"
    },
    periUrbanZones: {
      description: "Rapidly urbanizing areas beyond municipal limits",
      examples: [
        "Dera Bassi (SAS Nagar) — industrial corridor",
        "Nagar (Ludhiana) — peri-urban manufacturing belt",
        "Moga peripheral — emerging commercial zones",
        "Khanna — steel and industry corridor"
      ],
      growthRate: "3.5-4% annually vs core urban 2.1%"
    },
    urbanVsRuralGrowth: {
      urban: "2.5-3% annually",
      rural: "0.3% annually",
      ratio: "Urban growing 8-10x faster than rural",
      implication: "Rural-to-urban migration accelerating, urban voter pools expanding"
    },
    ludhianaMigrantDetail: {
      migrantVoters2019: "3.32 lakh",
      migrantVoters2024: "4.87 lakh",
      growth: "46.7% increase in 5 years",
      urbanElectors2024: "17,31,124",
      note: "Ludhiana has highest migrant voter concentration in Punjab"
    }
  };

  // ==========================================
  // CYCLE 6: INCOME STRATIFICATION DATA
  // (from research-M2/MP1-foundational/demographics/income-stratification.md)
  // ==========================================

  // Monthly Income Bands (Household)
  const incomeBands: IncomeBandEntry[] = [
    { band: "Below Rs 5,000", monthlyRange: "< Rs 5,000", estPercentage: "8-10%", percentageNum: 9, typicalProfile: "Landless labourers, BPL/AAY cardholders, informal workers", geographyConcentration: "Rural Malwa (Sangrur, Mansa, Bathinda), urban slums" },
    { band: "Rs 5,000-10,000", monthlyRange: "Rs 5,000-10,000", estPercentage: "15-18%", percentageNum: 16, typicalProfile: "Marginal farmers (<1 ha), casual labour, SC agricultural workers", geographyConcentration: "Rural Doaba (Nawanshahr, Kapurthala), border districts" },
    { band: "Rs 10,000-20,000", monthlyRange: "Rs 10,000-20,000", estPercentage: "25-28%", percentageNum: 26, typicalProfile: "Small farmers (1-2 ha), petty shopkeepers, low-skill service workers", geographyConcentration: "Across all regions; dominant rural band" },
    { band: "Rs 20,000-35,000", monthlyRange: "Rs 20,000-35,000", estPercentage: "20-22%", percentageNum: 21, typicalProfile: "Medium farmers (2-4 ha), govt employees, skilled workers", geographyConcentration: "Peri-urban areas, Ludhiana, Jalandhar, Amritsar" },
    { band: "Rs 35,000-50,000", monthlyRange: "Rs 35,000-50,000", estPercentage: "12-15%", percentageNum: 13, typicalProfile: "Large farmers (4+ ha), small business owners, mid-level professionals", geographyConcentration: "Malwa belt, urban centres" },
    { band: "Rs 50,000-1,00,000", monthlyRange: "Rs 50,000-1,00,000", estPercentage: "8-10%", percentageNum: 9, typicalProfile: "NRIs/remittance households, established businesses, professionals", geographyConcentration: "Doaba (NRI belt: Jalandhar, Kapurthala, Hoshiarpur)" },
    { band: "Rs 1,00,000-3,00,000", monthlyRange: "Rs 1,00,000-3,00,000", estPercentage: "3-4%", percentageNum: 3, typicalProfile: "Industrialists, large landowners, traders", geographyConcentration: "Ludhiana (industrial), Amritsar, Chandigarh periphery" },
    { band: "Above Rs 3,00,000", monthlyRange: "> Rs 3,00,000", estPercentage: "1-2%", percentageNum: 1, typicalProfile: "Industrial houses, political class, large NRIs", geographyConcentration: "Ludhiana, Mohali, Amritsar" },
  ];

  // Per Capita Consumption (HCES 2023-24)
  const perCapitaConsumption: PerCapitaConsumption[] = [
    { region: "India Rural", mpce: "Rs 4,122", note: "National average" },
    { region: "India Urban", mpce: "Rs 6,996", note: "National average" },
    { region: "Punjab Rural", mpce: "Rs 4,500-5,000", note: "Above national average - Green Revolution prosperity" },
    { region: "Punjab Urban", mpce: "Rs 7,500-8,000", note: "Above national average - remittances" },
  ];

  // NFSA/BPL/AAY Coverage
  const nfsaCoverage: NFSACoverage[] = [
    { indicator: "NFSA beneficiaries in Punjab", number: "1.53 crore", source: "State Food & Civil Supplies, Sep 2025" },
    { indicator: "Ration cards restored (2024)", number: "10.77 lakh beneficiaries", source: "Punjab Cabinet decision, Feb 2024" },
    { indicator: "Ration cards deleted (2018-2022)", number: "3.1 lakh cards", source: "Verification drive" },
    { indicator: "NFSA coverage mandate (rural)", number: "75%", source: "NFSA Act 2013" },
    { indicator: "NFSA coverage mandate (urban)", number: "50%", source: "NFSA Act 2013" },
  ];

  // Ineligibility criteria
  const rationCardIneligibility = {
    annualIncomeThreshold: "Rs 60,000",
    fertileLandThreshold: "> 2.5 acres",
    barrenLandThreshold: "> 5 acres",
    note: "These thresholds are extremely low, effectively excluding many genuinely poor households"
  };

  // Poverty Rate Trends
  const povertyRateTrends: PovertyRateTrend[] = [
    { period: "2011-12 (Tendulkar)", rural: "~7.0%", urban: "~6.0%", source: "Planning Commission" },
    { period: "2022-23 (Updated Tendulkar)", rural: "~4.9%", urban: "~4.1%", source: "SBI Research" },
    { period: "2023-24 (HCES-based)", rural: "Below 5%", urban: "Below 4%", source: "MoSPI" },
  ];

  // Land Holdings (Agriculture Census 2015-16)
  const landHoldings: LandHolding[] = [
    { category: "Marginal", sizeRange: "<1 ha (<2.5 acres)", holdings: "1,54,412", percentage: "~14.7%" },
    { category: "Small", sizeRange: "1-2 ha (2.5-5 acres)", holdings: "2,07,436", percentage: "~19.7%" },
    { category: "Semi-Medium", sizeRange: "2-4 ha", holdings: "VERIFICATION_NEEDED", percentage: "~25% (est.)" },
    { category: "Medium", sizeRange: "4-10 ha", holdings: "VERIFICATION_NEEDED", percentage: "~28% (est.)" },
    { category: "Large", sizeRange: "10+ ha", holdings: "VERIFICATION_NEEDED", percentage: "~12% (est.)" },
  ];

  const landHoldingSummary = {
    totalHoldings: "~10.53 lakh",
    averageHoldingSize: "3.62 ha",
    nationalAverage: "1.08 ha",
    note: "Punjab is well above national average but extreme inequality exists",
    suicideFact: "77% of farmer suicides were marginal/small farmers owning <2 hectares (PAU study, 2000-2018)"
  };

  // Vehicle Ownership
  const vehicleOwnership: VehicleOwnership[] = [
    { vehicleType: "Two-wheelers", penetration: "60-70% rural households", note: "One of India's highest per-capita rates" },
    { vehicleType: "Four-wheelers", penetration: "15-20% of households", note: "Much higher than national average (~8%)" },
    { vehicleType: "Tractor ownership", penetration: "~25% of small farmers", note: "Often economically non-viable due to high fixed costs" },
  ];

  // Smartphone & Digital Access
  const smartphoneAccess = {
    smartphonePenetration: "65-75% households",
    internetUsers: "Higher than national average due to NRI connectivity demands",
    digitalPayments: "Growing but limited in rural Malwa and border districts",
  };

  // Debt Metrics
  const debtMetrics: DebtMetrics[] = [
    { metric: "Average debt per suicide victim", value: "Rs 8,31,927", source: "PAU/ISADP Study" },
    { metric: "Institutional share of victim debt", value: "55.09%", source: "PAU/ISADP Study" },
    { metric: "Non-institutional share", value: "44.91%", source: "PAU/ISADP Study" },
    { metric: "Non-institutional as suicide driver", value: "88% of cases debt-driven", source: "PAU Study (EPW)" },
  ];

  // Debt Purpose Breakdown
  const debtPurpose: DebtPurpose[] = [
    { purpose: "Farm inputs (seeds, fertilizers, equipment)", percentage: "~40%" },
    { purpose: "Consumption expenditure (daily needs)", percentage: "~15%" },
    { purpose: "Medical emergencies", percentage: "~12%" },
    { purpose: "Education/children", percentage: "~8%" },
    { purpose: "Daughter's marriage", percentage: "~15%" },
    { purpose: "Tractor/farm machinery loans", percentage: "~10%" },
  ];

  // Arthiya (Informal Credit) Data
  const arthiyaCredit = {
    interestRate: "18-36% annually",
    institutionalRate: "7-9%",
    debtCollection: "Tied to crop sale in mandi",
    politicalNexus: "Many arthiyas are politically connected or are politicians themselves",
    informalCreditImpact: "Informal credit from commission agents accounts for 20% of ALL suicides in sample (Sage Journal study)"
  };

  // Farmer Suicide Data
  const farmerSuicideStats: FarmerSuicideStats[] = [
    { period: "2000-2018", suicides: "9,291", districts: "6 districts (Sangrur, Bathinda, Ludhiana, Mansa, Moga, Barnala)", source: "PAU Study (EPW)" },
    { period: "2023-24 to Nov 2025", suicides: "2,809 (reported)", districts: "State-wide", source: "State Agriculture Dept" },
    { period: "Peak year 2015", suicides: "515 cases", districts: "6 Malwa districts", source: "PAU Study" },
  ];

  // District-wise Suicides
  const districtSuicideData: DistrictSuicideData[] = [
    { district: "Sangrur", count: 2506 },
    { district: "Mansa", count: 2098 },
    { district: "Bathinda", count: 1956 },
    { district: "Barnala", count: 1126 },
    { district: "Moga", count: 880 },
    { district: "Ludhiana", count: 725 },
  ];

  const suicideDemographics = {
    age19to35: "75%",
    male: "92%",
    illiterate: "45%",
  };

  // Over-Indebtedness
  const overIndebtedness = {
    estimatedRate: "35-45% of farm households",
    definition: "Debt servicing >50% of income",
    mostAcuteRegion: "Malwa cotton belt and southwest Punjab",
  };

  // Caste-Income Correlation
  const casteIncomeCorrelation: CasteIncomeData[] = [
    { caste: "General Caste", annualIncome: "Rs 1,49,380", relativePosition: "Baseline (highest)" },
    { caste: "OBC", annualIncome: "Rs 1,13,415", relativePosition: "76% of General" },
    { caste: "SC/Dalit", annualIncome: "Rs 85,877", relativePosition: "57% of General" },
  ];

  const casteIncomeNote = {
    scPopulation: "~32% of Punjab (HIGHEST among Indian states)",
    dalitEconomicDisadvantage: "Structurally entrenched despite political representation",
    landlessnessSC: "70-80% of SC households estimated landless"
  };

  // Gini Coefficient
  const giniData = {
    punjabFarmHouseholdGini: "0.48 (2012-13)",
    nationalGini: "~0.35-0.40",
    source: "Saini & Kaur, 2022",
    interpretation: "High income inequality among farm households; approaches 'severe inequality' threshold"
  };

  // NRI Remittance Economy
  const nriRemittanceEconomy = {
    region: "Doaba (India's NRI remittance heartland)",
    estimatedAnnualRemittances: "Rs 15,000-20,000 crore",
    impact: "Creates distinct income tier not captured in traditional income surveys",
    districts: "Jalandhar, Kapurthala, Hoshiarpur",
  };

  // Economic Anxiety Indicators
  const economicAnxieties: EconomicAnxietyData[] = [
    { rank: 1, fear: "Crop failure", description: "Cotton whitefly (2015), wheat blight, erratic monsoon. Single bad season can push a farmer from middle to BPL." },
    { rank: 2, fear: "Debt spiral", description: "Inability to repay arthiya before next sowing season. Fear of land auction or social humiliation." },
    { rank: 3, fear: "Medical emergency", description: "Privatized healthcare costs. One serious illness can cost Rs 5-15 lakh, wiping out years of savings." },
    { rank: 4, fear: "Daughter's marriage", description: "Sikh and Jat weddings involve substantial expenditure (Rs 5-20 lakh). Dowry expectations persist despite legal prohibition." },
    { rank: 5, fear: "Job loss/underemployment", description: "Youth unemployment in Punjab estimated at 10-14% (higher than national average). Drug addiction compounds joblessness." },
    { rank: 6, fear: "Old-age destitution", description: "No universal pension. Landless elderly (especially Dalits) face extreme poverty. Old-age pension Rs 1,500-2,000/month (insufficient)." },
  ];

  // Regional Anxiety Mapping
  const regionalAnxiety: RegionalAnxiety[] = [
    { region: "Malwa (Sangrur, Mansa, Bathinda)", primaryAnxiety: "Farmer debt + suicide + crop failure", politicalImplication: "Anti-incumbency strongest here; AAP won massively in 2022 on these issues" },
    { region: "Majha (Amritsar, Gurdaspur, Tarn Taran)", primaryAnxiety: "Drug menace + unemployment + border area neglect", politicalImplication: "National security + local economy concerns" },
    { region: "Doaba (Jalandhar, Kapurthala, Hoshiarpur)", primaryAnxiety: "NRI investment + youth emigration + industrial decline", politicalImplication: "Dual identity politics; aspirational but frustrated" },
    { region: "Urban (Ludhiana, Amritsar, Jalandhar)", primaryAnxiety: "Inflation + job loss + civic infrastructure", politicalImplication: "Middle-class swing voters" },
  ];

  // Strategic Implications for Congress Campaign
  const campaignStrategicImplications: StrategicImplication[] = [
    { number: 1, issue: "Debt waiver is #1 electoral issue in Malwa", implication: "9,291+ farmer suicides (2000-2018) and 2,809+ (2023-25) under AAP watch. Congress must promise comprehensive debt settlement including non-institutional debt conversion." },
    { number: 2, issue: "BPL restoration is a live issue", implication: "AAP deleted 3.1 lakh ration cards then restored 10.77 lakh beneficiaries under pressure. Congress can promise permanent, non-arbitrary PDS coverage." },
    { number: 3, issue: "The 'fragile middle' (Rs 10,000-35,000/month) is the swing voter pool", implication: "Not BPL-poor but one crisis away from poverty. Message: 'economic security for the middle, dignity for the poor.'" },
    { number: 4, issue: "SC economic empowerment is an untapped Congress opportunity", implication: "32% of Punjab is Dalit with income at 57% of General caste levels. Congress should propose targeted asset-building (land, housing, skill training) beyond reservation." },
    { number: 5, issue: "Healthcare privatization anxiety is universal", implication: "AAP promised free medicines in hospitals (Jan 2024). Congress must counter with a MORE comprehensive rural health insurance scheme." },
    { number: 6, issue: "Daughter's marriage + drug menace = dual anxiety", implication: "A 'daughter protection scheme' (marriage assistance + drug rehabilitation centers) addresses both simultaneously." },
  ];

  // Fragile Middle Class Data
  const fragileMiddleClass = {
    incomeRange: "Rs 10,000-35,000/month",
    percentageOfHouseholds: "45-50%",
    description: "Rural middle class that is economically precarious — one crop failure or medical emergency pushes them into the Rs 5,000-10,000 band",
    politicalSignificance: "SWING VOTER POOL — the decisive electoral segment"
  };

  // ==========================================
  // VULNERABLE OCCUPATIONS DATA
  // (from occupation-vulnerable.md - PLFS 2025)
  // ==========================================

  // Overall Unemployment (PLFS 2025)
  const overallUnemploymentData = {
    overall: { rate: 6.7, national: 5.3 },
    rural: { rate: 7.4, national: 4.2 },
    urban: { rate: 5.8, national: 6.7 },
    youth: { rate: 17.0, national: 9.9 },
    ruralYouth: { rate: 18.7, national: 8.3 },
    urbanYouth: { rate: 14.5, national: 13.6 },
  };

  // Educated Unemployment (PLFS 2025)
  const educatedUnemploymentData = [
    { level: "Not literate", rate: 0.8 },
    { level: "Literate & up to primary", rate: 1.0 },
    { level: "Middle", rate: 2.6 },
    { level: "Secondary", rate: 2.8 },
    { level: "Higher secondary", rate: 13.8 },
    { level: "Diploma/certificate", rate: 8.9 },
    { level: "Graduate", rate: 11.6 },
    { level: "Postgraduate & above", rate: 9.4 },
    { level: "Secondary & above", rate: 9.3 },
  ];

  // Youth Unemployment by Gender (PLFS 2025)
  const youthUnemploymentByGenderData = [
    { area: "Rural", male: 14.7, female: 29.9, total: 18.7 },
    { area: "Urban", male: 12.1, female: 23.7, total: 14.5 },
    { area: "Overall", male: 13.6, female: 27.7, total: 17.0 },
  ];

  // Unemployment Bureau Data
  const unemploymentBureauData = {
    registeredApplicants: 122842,
    date: "September 2025",
    unskilled: 58,
    skilled: 42,
  };

  // Distress Migration & Brain Drain
  const distressMigrationData = {
    farmersNotWantingChildrenInAgriculture: 75,
    studySource: "Prof Ghuman study, 2025",
    pushFactors: ["Unemployment", "Corruption", "Drug addiction fear", "Social insecurity", "Bad politico-administrative system"],
    annualGrowthPunjab: 4.62,
    annualGrowthNational: 5.67,
    industrialUnitsShutDown: 18700,
    shutDownPeriod: "2007-2014",
  };

  // Discouraged Workers & NEET
  const discouragedWorkersData = {
    lfpr: 47.0,
    lfprNational: 46.0,
    wpr: 39,
    wprNational: 41.4,
  };

  // Non-Working Population
  const nonWorkingPopulationData = {
    homemakers: "~55-60% of Punjabi women (non-worker category, Census 2011)",
    population60Plus: "6.8% (Census 2011), projected 8-9% by 2026",
    pensionBurden: "57.5% of revenue consumed by salaries, pensions, subsidies",
    disabled: "~2.2% of population (~6 lakh persons, Census 2011)",
  };

  // Vulnerable Occupations
  const vulnerableOccupationsData = [
    { category: "Domestic Workers", estimate: "~4.75 million nationally (ILO)", location: "Ludhiana, Amritsar, Jalandhar, Mohali", demographics: "Women, Dalit/SC, migrant from UP/Bihar" },
    { category: "Child Labour", estimate: "~73,714 (Census 2011, age 5-14)", location: "Agriculture, brick kilns, dhaba/tea stalls, domestic work" },
    { category: "Bonded Labour", estimate: "~8 million nationally (India)", location: "Brick kiln industry in Malwa and Doaba regions" },
    { category: "Ragpickers/Waste Workers", estimate: "Urban cities significant employment", demographics: "Migrant communities (UP, Bihar), Dalit castes" },
  ];

  // Religious Occupations
  const religiousOccupationsData = {
    sgpc: {
      totalStaff: 11000,
      goldenTempleStaff: 2800,
      keyFunctionaries: ["Granthi", "Ragi", "Kathavachak", "Dhadhi", "Sewadar"],
    },
    gurdwaraEstimate: "20,000-30,000 total religious workers (SGPC + non-SGPC)",
  };

  // Political Significance
  const vulnerablePoliticalSignificance = [
    { bloc: "Educated Unemployed Youth", description: "17% youth unemployment = hundreds of thousands of frustrated young voters. Graduate unemployment of 11.6-20.6% = most politically aware segment." },
    { bloc: "Female Youth (27.7%)", description: "More than double the male rate (13.6%). Congress can target with employment guarantee + skill training + safety platform." },
    { bloc: "Rural Unemployed (7.4%)", description: "Rural exceeds urban (5.8%) — contradicts city job crisis narrative. Farm distress + mechanization displacement." },
    { bloc: "Vulnerable/Informal Workers", description: "Brick kiln bonded labourers (Dalit/SC) politically organized. Dera followers controlled by dera heads." },
    { bloc: "Religious Workers", description: "SGPC/religious workers are opinion-makers in every village. Granthi = community leader shaping voting." },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
              1
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Demography Derivation
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Voter segmentation by age, caste, religion, occupation, geography & psychographics
          </p>
        </div>
        <Badge variant="info">2.14 Cr Registered Voters</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Registered Voters"
          value="2.14 Cr"
          subtitle="21,457,160 — CEO Punjab (May 2026)"
          color="bg-blue-500"
        />
        <MetricCard
          title="Punjab Population"
          value="3.14 Cr"
          subtitle="31.37M — Technical Group (Jul 2026)"
          color="bg-teal-500"
        />
        <MetricCard
          title="Female Voters"
          value="~48.6%"
          subtitle="Est. from sex ratio 895 (child sex ratio: 846); nat'l avg 940"
          change={2.3}
          trend="up"
          color="bg-pink-500"
        />
        <MetricCard
          title="SC Population"
          value="31.9%"
          subtitle="Highest in India, 88.6L"
          color="bg-orange-500"
        />
      </div>

      {/* Political Anatomy - Electoral Demographics Context */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Political Anatomy — Electoral Demographics
          </h3>
          <Badge variant="success">Cycle 2 Data</Badge>
        </div>
        <p className="mb-6 text-sm text-emerald-700 dark:text-emerald-400">
          Understanding the electoral composition that shapes voting patterns
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2.14 Cr</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Electors</div>
            <div className="mt-1 text-xs text-slate-500">SC: 32% | Rural: 62.5%</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">57.7%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Sikh Population</div>
            <div className="mt-1 text-xs text-slate-500">1.24 Cr voters</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">38.5%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Hindu Population</div>
            <div className="mt-1 text-xs text-slate-500">82.3L voters</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">32%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">SC Population</div>
            <div className="mt-1 text-xs text-slate-500">Highest in India</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Seat Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Malwa</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">73 seats (62%)</span>
              </div>
              <ProgressBar label="" value={59} color="bg-orange-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Majha</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">25 seats (21%)</span>
              </div>
              <ProgressBar label="" value={21} color="bg-blue-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba</span>
                <span className="font-medium text-green-600 dark:text-green-400">23 seats (20%)</span>
              </div>
              <ProgressBar label="" value={20} color="bg-green-500" showPercentage={false} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Caste Composition</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">SC</span><span className="font-medium">32%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">OBC</span><span className="font-medium">31%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Jat Sikh</span><span className="font-medium">21%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Mazhabi Sikh</span><span className="font-medium">6.3%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Upper Caste</span><span className="font-medium">16%</span></div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">2022 Assembly Results</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">AAP</span><span className="font-medium text-cyan-600">92 seats (42%)</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Congress</span><span className="font-medium text-orange-600">18 seats (23%)</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">SAD</span><span className="font-medium text-green-600">3 seats (18%)</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">BJP</span><span className="font-medium">2 seats (6%)</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* URBANIZATION & SETTLEMENT CLASSIFICATION (from research-M2/MP1-foundational/demographics/urbanization.md) */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">
            Urbanization & Settlement Classification
          </h3>
          <Badge variant="info">Demographics</Badge>
        </div>
        <p className="mb-6 text-sm text-indigo-700 dark:text-indigo-400">
          Punjab urbanization trends, municipal corporation data, and urban-rural electoral implications
        </p>

        {/* Key Urbanization Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Urbanization Rate 2011"
            value="37.49%"
            subtitle="Census 2011"
            color="bg-indigo-500"
          />
          <MetricCard
            title="Urban Population 2011"
            value="10.4M"
            subtitle="37.49% of 27.7M total"
            color="bg-indigo-500"
          />
          <MetricCard
            title="Projected Urban 2026"
            value="~41-42%"
            subtitle="Driven by Mohali, Ludhiana, Amritsar"
            color="bg-indigo-500"
          />
          <MetricCard
            title="Urban vs National"
            value="+6.3pp"
            subtitle="Above 31.16% national avg"
            color="bg-indigo-500"
          />
        </div>

        {/* Urban Trajectory */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">Urbanization Trajectory</h4>
          <div className="grid gap-4 md:grid-cols-4">
            {urbanizationTrajectoryData.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/20">
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{item.percent}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.label}</div>
                {item.isProjection && <span className="text-xs text-amber-600">(projected)</span>}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Pace slowed: +3.6pp (2001-2011) vs +6.2pp (1991-2001)</p>
        </div>

        {/* Top Municipal Corporations */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">Top Municipal Corporations (2022 Est. Population)</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {municipalCorpPopulationData.slice(0, 6).map((city) => (
              <div key={city.city} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: city.color }} />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{city.city}</span>
                </div>
                <div className="mt-2 text-lg font-bold text-slate-800 dark:text-white">
                  {(city.pop2022 / 1000000).toFixed(2)}M
                </div>
                <div className="text-xs text-slate-500">
                  {(city.pop2022).toLocaleString()} est.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* District Urbanization */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">District Urbanization Levels (Census 2011)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {urbanizationData.districtUrbanization.map((cat) => (
              <div key={cat.category} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.category}</div>
                <div className="mt-1 text-xs text-slate-500">{cat.urbanPercentRange}</div>
                <div className="mt-2 space-y-1">
                  {cat.districts.slice(0, 4).map((d) => (
                    <div key={d} className="text-xs text-slate-600 dark:text-slate-400">{d}</div>
                  ))}
                  {cat.districts.length > 4 && (
                    <div className="text-xs text-slate-400">+{cat.districts.length - 4} more</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-amber-600 dark:text-amber-400">
            <strong>Critical:</strong> Top 4 urbanized districts (Ludhiana, Mohali, Amritsar, Jalandhar) hold ~50% of urban population and 35-40 seats.
          </p>
        </div>

        {/* Peri-Urban Belts */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
          <h4 className="mb-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">Peri-Urban Growth Corridors</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {urbanizationData.periUrbanZones.belts.map((belt) => (
              <div key={belt.name} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="font-medium text-slate-700 dark:text-slate-300">{belt.name}</div>
                <div className="mt-1 text-xs text-slate-500">Anchor: {belt.anchorCity}</div>
                <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">{belt.characteristics}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slum Data */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">Slum Population (Census 2011) — Total: ~1.45M</h4>
          <div className="grid gap-3 md:grid-cols-5">
            {slumConcentrationData.slice(0, 5).map((slum) => (
              <div key={slum.city} className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <div className="font-semibold text-slate-700 dark:text-slate-300">{slum.city}</div>
                <div className="mt-1 text-lg font-bold text-red-600 dark:text-red-400">{slum.slumPop.toLocaleString()}</div>
                <div className="text-xs text-slate-500">{slum.percent}% of city pop</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-amber-600">VERIFICATION_NEEDED: Post-2011 slum estimates show 15-20% growth in Ludhiana and Amritsar</p>
        </div>

        {/* Electoral Implications */}
        <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="mb-3 text-sm font-semibold text-purple-700 dark:text-purple-400">Electoral Implications: Urban vs Rural</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Urban Voter Priorities</div>
              <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <div>• Jobs, air pollution, civic infrastructure</div>
                <div>• Social media, YouTube, digital news</div>
                <div>• Turnout: 55-65% (lower)</div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Rural Voter Priorities</div>
              <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <div>• MSP, farm debt, canal water, rural roads</div>
                <div>• Cable TV, WhatsApp, vernacular print</div>
                <div>• Turnout: 70-80% (higher)</div>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <div className="text-sm font-medium text-amber-700 dark:text-amber-400">Congress Strategy</div>
            <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div><strong>Urban offensive:</strong> Build narrative on jobs, pollution, civic infrastructure. Target 10-12 urban seats.</div>
              <div><strong>Peri-urban swing zone:</strong> 35-40 semi-urban seats where elections are won.</div>
              <div><strong>Slum voters:</strong> ~1.45M slum dwellers in AAP strongholds — offer housing/sanitation alternatives.</div>
            </div>
          </div>
        </div>

        {/* Data Quality */}
        <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500">
            <strong>Note:</strong> Census 2021 was NOT conducted. All 2022-2026 figures are extrapolated from 2011 baseline. Data gaps marked VERIFICATION_NEEDED require post-2019 verification.
          </p>
        </div>
      </div>

      {/* CYCLE 2: SOCIO-ECONOMIC PROFILE (from research-P2/10_socio_economic) */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Socio-Economic Demographics (research-P2/10_socio_economic)</p>
            <p className="text-sm text-red-600 dark:text-red-300">Economic distress impacting demographic patterns and voter behavior</p>
          </div>
        </div>

        {/* Critical Crisis Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Youth Unemployment"
            value="19.3%"
            subtitle="Ages 15-29 (CRITICAL)"
            color="bg-red-500"
          />
          <MetricCard
            title="State Debt"
            value="₹4.17L Cr"
            subtitle="LAST in NITI FHI"
            color="bg-red-500"
          />
          <MetricCard
            title="Drug Users"
            value="6.6 Million"
            subtitle="18% of population"
            color="bg-red-500"
          />
          <MetricCard
            title="Groundwater"
            value="156%"
            subtitle="Over-exploited"
            color="bg-red-500"
          />
        </div>

        {/* Progress Bars for Key Metrics */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
              <span className="text-sm font-bold text-red-600">19.3%</span>
            </div>
            <ProgressBar label="" value={19.3} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">vs National Average 14.3% — Punjab youth most affected</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
              <span className="text-sm font-bold text-red-600">44.47%</span>
            </div>
            <ProgressBar label="" value={44.47} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">Fiscal limit: 25% — 1.78x over limit</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
              <span className="text-sm font-bold text-red-600">156.36%</span>
            </div>
            <ProgressBar label="" value={100} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited</p>
          </div>
        </div>

        {/* Punjab vs Haryana Comparison */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800 mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab vs Haryana Economic Comparison</h4>
          <DataTable
            headers={["Metric", "Punjab", "Haryana", "Gap"]}
            rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.gap])}
          />
        </div>

        {/* Additional Metrics */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Per Capita Income</p>
            <p className="text-xl font-bold text-red-600">₹2,30,523</p>
            <p className="text-xs text-slate-500">vs Haryana ₹3,25,000</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Farm Debt</p>
            <p className="text-xl font-bold text-orange-600">₹1.04L Cr</p>
            <p className="text-xs text-slate-500">Avg ₹2.03L/household</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">HDI Rank</p>
            <p className="text-xl font-bold text-yellow-600">0.740</p>
            <p className="text-xs text-slate-500">Rank 12 among states</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Gini Coefficient</p>
            <p className="text-xl font-bold text-orange-600">0.48</p>
            <p className="text-xs text-slate-500">High inequality</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Demographic Impact:</strong> Economic distress drives youth emigration (2.37 lakh left for abroad 2019-20). 19.3% youth unemployment in ages 15-29 creates anger + resignation sentiment. Rural-to-urban migration accelerating due to agrarian distress.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Special Intensive Revision (SIR) — Electoral Roll Update
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ECI-ordered SIR running Jun 15 – Jul 24, 2026 ahead of 2027 Assembly election
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">83.69%</div>
            <div className="mt-1 text-sm font-medium text-blue-700 dark:text-blue-300">Pre-SIR Mapping</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">1,79,56,656 voters mapped</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">Jul 1, 2026</div>
            <div className="mt-1 text-sm font-medium text-green-700 dark:text-green-300">Qualifying Date</div>
            <div className="text-xs text-green-600 dark:text-green-300">Cutoff for new voters</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">Jun 15</div>
            <div className="mt-1 text-sm font-medium text-purple-700 dark:text-purple-300">SIR Start</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">BLO door-to-door begins</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">Jul 24</div>
            <div className="mt-1 text-sm font-medium text-orange-700 dark:text-orange-300">SIR End</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Verification deadline</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Rural mapping:</span> 89.58% | <span className="font-semibold">Urban mapping:</span> 73% | <span className="font-semibold">Congress/AAP allege</span> voter manipulation risk
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Religious Demographics — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Census 2011 data (2026 projections in brackets) — Sikh majority state with significant Hindu minority
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">57.7%</div>
            <div className="mt-1 font-semibold text-yellow-700 dark:text-yellow-400">Sikh</div>
            <div className="text-sm text-yellow-600 dark:text-yellow-300">~1.24 Cr voters</div>
            <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-300"> Jat Sikh (~50% of Sikhs), Mazhabi, Ravidasia, Ramdasia sub-groups</div>
            <div className="mt-2 text-xs text-yellow-700 dark:text-yellow-400">Talhan gurdwara (2003): Internal Sikh caste tension — Jat vs non-Jat Sikhs, model of Sikh communal fracture</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">38.5%</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Hindu</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">~82.3L voters</div>
            <div className="mt-2 text-xs text-orange-600 dark:text-orange-300"> Brahmin, Khatri, Arora, Bania, Rajput</div>
            <div className="mt-2 text-xs text-orange-700 dark:text-orange-400">Upper Caste Hindu: 10-13% of total population (Brahmin, Khatri, Arora dominant)</div>
            <div className="mt-1 text-xs text-orange-700 dark:text-orange-400">Khatri/Arora: 50% Hindu / 50% Sikh — major economic demographic, Khatri/Arora voters pro-Congress</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">1.9%</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Muslim</div>
            <div className="text-sm text-green-600 dark:text-green-300">~4.1L voters</div>
            <div className="mt-2 text-xs text-green-600 dark:text-green-300">Concentrated in Malerkotla (68% of town)</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.3%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Christian</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">~2.7L (rising via conversions)</div>
            <div className="mt-2 text-xs text-blue-600 dark:text-blue-300">Gurdaspur, Amritsar border belt</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0.6%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Others</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Buddhists, Jains, Sikh sects</div>
            <div className="mt-2 text-xs text-purple-600 dark:text-purple-300"> Ravidassia, Namdhari, Nirankari deras</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key Insight:</span> Punjab has India&apos;s highest SC proportion (31.9%) and highest Sikh proportion (57.7%). Christian population growing via Dalit conversions — Gurdaspur district has highest at 7.7%.
          </p>
        </div>
      </div>

      {/* POPULATION DENSITY & HOUSEHOLD DATA (MP1-001) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Population Density & Household Demographics — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab has 3rd highest population density in India at 551/km2. Child population (0-6) is 3,076,219. Dependency ratios show youth burden of 399 per 1000 working age.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">551/km2</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Population Density</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">3rd highest in India</div>
            <div className="mt-2 text-xs text-red-600 dark:text-red-400">Bihar 1106, WB 1029</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">3,076,219</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Child Population (0-6)</div>
            <div className="text-sm text-green-600 dark:text-green-300">9.8% of total population</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4.8</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Avg Household Size</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Members per household</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">65.66%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Nuclear Family</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Among highest in India</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">88.88%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Home Ownership</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Owner-occupied households</div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">399</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-400">Youth Dependency</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Per 1000 working age</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-xl font-bold text-red-600 dark:text-red-400">164</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Old-Age Dependency</div>
            <div className="text-xs text-red-600 dark:text-red-300">Per 1000 working age</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Migration:</span> Passport decline 40%, 500K+ illegal immigrants in USA, 2.37 lakh youngsters emigrated 2019-2020. <span className="font-semibold text-orange-700 dark:text-orange-400">Major brain drain from Doaba and Malwa belts.</span>
          </p>
        </div>
      </div>

      {/* URBAN AGGLOMERATIONS & MIGRATION (MP1-004) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban Agglomerations & Peri-Urban Growth — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          7 Urban Agglomerations with combined 5M+ population. Ludhiana has highest migrant voter concentration — 46.7% growth in migrant voters 2019-2024.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1.6M+</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-400">Ludhiana UA</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Largest UA</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.1M+</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">Amritsar UA</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">2nd largest</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">1.0M+</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Jalandhar UA</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">3rd largest</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7 UAs</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">Total Agglomerations</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">5M+ combined population</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">3.5-4%</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">Peri-Urban Growth</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">vs core urban 2.1% — faster expansion</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">46.7%</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400">Ludhiana Migrant Growth</div>
            <div className="text-xs text-green-600 dark:text-green-300">3.32L → 4.87L voters (2019-2024)</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Peri-Urban Zones:</span> Dera Bassi (industrial corridor), Moga peripheral, Khanna (steel corridor). <span className="font-semibold text-blue-700 dark:text-blue-400">Urban growing 8-10x faster than rural.</span>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban-Rural Distribution — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab is urbanizing rapidly: 37.48% urban (2011) vs 34.0% (2001). Projected ~42-44% urban by 2027.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">62.5%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Rural Population</div>
            <div className="mt-1 text-sm text-blue-600 dark:text-blue-300">1.73 Cr — dominates Malwa belt & Doaba</div>
            <div className="mt-2">
              <ProgressBar label="" value={62.5} color="bg-blue-500" showPercentage={false} />
            </div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">37.5%</div>
            <div className="mt-1 font-semibold text-teal-700 dark:text-teal-400">Urban Population</div>
            <div className="mt-1 text-sm text-teal-600 dark:text-teal-300">1.04 Cr — Ludhiana, Amritsar, Jalandhar, Mohali</div>
            <div className="mt-2">
              <ProgressBar label="" value={37.5} color="bg-teal-500" showPercentage={false} />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key:</span> Rural voter turnout traditionally higher (pre-map: 89.58% rural vs 73% urban). Urban voters concentrated in 4 major cities — concentrated campaign reach. <span className="font-semibold text-orange-700 dark:text-orange-400">Doaba: 42% Dalit concentration in some constituencies</span> — highest Dalit density in Punjab, strong AAP foothold.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Sex Ratio: Punjab vs National Average
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab has one of India&apos;s most skewed sex ratios — 895 F per 1,000 M (2011) vs national 940. Urban sex ratio (875) is worse than rural (907).
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">895</div>
            <div className="mt-1 font-semibold text-red-700 dark:text-red-400">Punjab Sex Ratio</div>
            <div className="text-sm text-red-600 dark:text-red-300">Females per 1,000 males (Census 2011)</div>
            <div className="mt-2">
              <ProgressBar label="" value={89.5} color="bg-red-500" showPercentage={false} />
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">940</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">National Average</div>
            <div className="text-sm text-green-600 dark:text-green-300">Females per 1,000 males (Census 2011)</div>
            <div className="mt-2">
              <ProgressBar label="" value={94.0} color="bg-green-500" showPercentage={false} />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">Gap:</span> Punjab is 45 points below national average. Child sex ratio (0-6): Punjab 846 vs national 919 — a 73-point gap indicating pre-natal sex selection. Districts with worst ratios: Bathinda (868), Ludhiana (873), Faridkot (890).
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Women Voter Turnout — 2024 Lok Sabha Reversal
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Women voter turnout in Punjab rose steadily through 2022, but 2024 Lok Sabha reversed the trend — men led by 0.99pp, a sharp reversal from 2022 when women led.
        </p>
        <div className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="text-sm font-medium text-slate-500">2017 Assembly</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">~78%</span>
                <span className="text-xs text-slate-400">Male</span>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">~76%</span>
                <span className="text-xs text-slate-400">Female</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">Men +2 pp lead</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="text-sm font-medium text-slate-500">2019 Lok Sabha</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">~66%</span>
                <span className="text-xs text-slate-400">Male</span>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">~65%</span>
                <span className="text-xs text-slate-400">Female</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">Men +1 pp lead</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="text-sm font-medium text-green-600">2022 Assembly</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">~70.5%</span>
                <span className="text-xs text-slate-400">Male</span>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">~71.6%</span>
                <span className="text-xs text-slate-400">Female</span>
              </div>
              <div className="mt-2 text-xs text-green-600 font-medium">Women +1.1 pp lead</div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="text-sm font-medium text-red-600">2024 Lok Sabha</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">63.27%</span>
                <span className="text-xs text-slate-400">Male</span>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">62.28%</span>
                <span className="text-xs text-slate-400">Female</span>
              </div>
              <div className="mt-2 text-xs text-red-600 font-medium">Men +0.99 pp lead — reversal from 2022</div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-pink-50 p-3 dark:bg-pink-900/20">
          <p className="text-sm text-pink-700 dark:text-pink-400">
            <span className="font-semibold">Implication:</span> Women are a decisive and growing electoral constituency. 2024 reversal suggests AAP cash scheme appeal may have mobilized male voters. Congress must offer differentiated messaging on safety, economic empowerment, and healthcare.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional High-Turnout Women Constituencies — 2024 Lok Sabha
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Constituencies where women voter turnout exceeded 70% in 2024 Lok Sabha
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">75.75%</div>
            <div className="mt-1 font-semibold text-pink-700 dark:text-pink-400">Sujanpur (Gurdaspur)</div>
            <div className="text-sm text-pink-600 dark:text-pink-300">Highest women turnout in Punjab</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">71.02%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Zira (Khadoor Sahib)</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Border belt, high rural density</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">70.25%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Anandpur Sahib</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">Sikh rural dominance</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Congress vs AAP:</span> In 37 Assembly segments across 5 Lok Sabha constituencies where women voters dominated, Congress led in 16 segments (43%) vs AAP&apos;s 9 segments (24%) — women voters are NOT automatically with AAP despite the cash promise.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Bebe Nanki Laadli Beti Kalyan Scheme — Rs 61,000 Per Girl
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Launched 2011 by Congress-led Punjab government. Total Rs 61,000 per girl child across milestones. Active and receiving applications as of May 2026.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rs 5,000</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Birth</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Girl child born in Punjab</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">Rs 10,000</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">After Inter-School</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Unmarried, appeared in exam</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Rs 25,000</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">After Class 12</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Unmarried, passed exam</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">Rs 21,000</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">After Graduation</div>
            <div className="text-xs text-green-600 dark:text-green-300">Unmarried, degree completed</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-pink-50 p-3 dark:bg-pink-900/20">
          <p className="text-sm text-pink-700 dark:text-pink-400">
            <span className="font-semibold">Strategic Gap:</span> Scheme is active but severely under-publicized. Most rural women cannot accurately describe the benefits. AAP counters with Rs 1,000/month but Bebe Nanki provides Rs 61,000 for education — one-time cash vs long-term investment.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Mukh Mantri Mawan Dhian Satikar Yojana — Caste-Weighted Targeting
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Announced March 8, 2026 (Budget 2026-27). Rs 9,300 crore outlay. Scheme explicitly excludes government employees, MPs/MLAs, and income taxpayers (~3-5% of adult women).
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">Rs 1,500</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">SC Women / month</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Rs 18,000/year — AAP&apos;s caste-weighted allocation</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400">Rs 1,000</div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-400">General Women / month</div>
            <div className="text-xs text-slate-500">Rs 12,000/year — excludes govt employees, taxpayers</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">Exclusions (~3-5% of adult women):</span> Permanent government employees, MPs/MLAs, income taxpayers. Congress counter-narrative: &quot;Rs 1,000 is not empowerment — it&apos;s a bribe that excludes the women who pay taxes.&quot;
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Women Media Consumption — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          WhatsApp is the dominant information channel. Political messaging must be optimized for WhatsApp sharing — short videos, audio messages, infographics, and memes.
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</span>
            <div className="flex-1">
              <ProgressBar label="" value={77.5} color="bg-green-500" showPercentage={false} />
            </div>
            <span className="w-20 text-right text-sm font-bold text-green-600 dark:text-green-400">75-80%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">Television</span>
            <div className="flex-1">
              <ProgressBar label="" value={72.5} color="bg-blue-500" showPercentage={false} />
            </div>
            <span className="w-20 text-right text-sm font-bold text-blue-600 dark:text-blue-400">70-75%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">YouTube</span>
            <div className="flex-1">
              <ProgressBar label="" value={60} color="bg-red-500" showPercentage={false} />
            </div>
            <span className="w-20 text-right text-sm font-bold text-red-600 dark:text-red-400">55-65%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">Facebook</span>
            <div className="flex-1">
              <ProgressBar label="" value={50} color="bg-purple-500" showPercentage={false} />
            </div>
            <span className="w-20 text-right text-sm font-bold text-slate-500">45-55%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">Instagram</span>
            <div className="flex-1">
              <ProgressBar label="" value={40} color="bg-pink-500" showPercentage={false} />
            </div>
            <span className="w-20 text-right text-sm font-bold text-pink-500">35-45%</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key Insight:</span> WhatsApp is the #1 channel for women. Punjabi channels (ESPN, PTC) dominate TV. Young women (18-35) skew YouTube/Instagram. Village-level: Anganwadi workers, school PTAs, Mahila Mandal meetings, religious gatherings are critical pathways.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Age Distribution Matrix
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Voter segmentation by age brackets
          </p>
          <div className="mt-6 space-y-4">
            {ageDistribution.map((age) => (
              <div key={age.range} className="flex items-center gap-4">
                <span className="w-16 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {age.range}
                </span>
                <div className="flex-1">
                  <ProgressBar
                    label=""
                    value={age.percentage}
                    color={age.firstTime ? "bg-green-500" : "bg-blue-500"}
                    showPercentage={false}
                  />
                </div>
                <span className="w-20 text-right text-sm font-medium text-slate-700 dark:text-slate-300">
                  {age.voters}
                </span>
                <span className="w-12 text-right text-sm text-slate-500">
                  {age.percentage}%
                </span>
                {age.firstTime && (
                  <Badge variant="success">New</Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Voter Distribution
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Voter concentration by Punjab region
          </p>
          <div className="mt-6 space-y-5">
            {REGIONS.map((region) => (
              <div key={region.id}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {region.name}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">({region.border})</span>
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {region.constituencies} ACs
                  </span>
                </div>
                <ProgressBar
                  label=""
                  value={(region.constituencies / 117) * 100}
                  color="bg-cyan-500"
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CENSUS 2011 AGE COHORT DATA (MP1-002) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Census 2011 Five-Year Age Cohort & Median Age — Punjab
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Census 2011 detailed age distribution. Median age: 28.4 years (6th youngest in India). Youth bulge in 20-24 cohort (6.8% male) provides demographic dividend window.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">28.4</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Median Age (years)</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Male 27.3, Female 29.5</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">25.54%</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Children (0-14)</div>
            <div className="text-xs text-green-600 dark:text-green-300">Census 2011</div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">20.17%</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-300">Youth (15-24)</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Largest cohort segment</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">563</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Total Dependency</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Per 1000 working age</div>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Age Group", "Male %", "Female %", "Key Insight"]}
            rows={[
              ["0-4", "5.8%", "5.4%", "Child population declining"],
              ["5-9", "6.2%", "5.7%", "Slight male excess"],
              ["10-14", "6.8%", "6.2%", "Entry to teenage"],
              ["15-19", "6.9%", "6.4%", "Youth bulge begins"],
              ["20-24", "6.8%", "6.5%", "Largest cohort — peak voting age"],
              ["25-29", "6.2%", "6.1%", "Young adult"],
              ["30-34", "5.4%", "5.4%", "Working age prime"],
              ["35-39", "5.1%", "5.1%", "Family formation"],
              ["40-44", "4.6%", "4.5%", "Middle age"],
              ["45-49", "4.1%", "4.0%", "Pre-elderly"],
              ["50-54", "3.5%", "3.3%", "Approaching elderly"],
              ["55-59", "3.0%", "2.9%", "Elderly threshold"],
              ["60-64", "2.7%", "2.7%", "Elderly cohort"],
              ["65-69", "1.9%", "2.0%", "Old-age begins"],
              ["70-74", "1.2%", "1.4%", "High elderly female"],
              ["75-79", "0.6%", "0.7%", "Oldest cohort"],
              ["80+", "0.5%", "0.6%", "Gender gap reverses"],
            ]}
            caption="Census 2011 Five-Year Age Cohort Distribution"
          />
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Dependency Ratio Projections:</span> Current 563 per 1000 → 2027: ~520 per 1000 → 2031: ~480 per 1000. <span className="font-semibold text-green-700 dark:text-green-400">Demographic dividend window peaking 2025-2035.</span>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Sub-Caste Breakdown — 31.9% of Punjab Population
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Scheduled Caste sub-groups: 5 major groups account for ~87% of all SCs. Source: Census 2011, India Today, Forward Press
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scSubCasteData.map((caste) => (
            <div key={caste.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${caste.color}`} />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{caste.name}</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-slate-500">% of SC:</span>
                  <span className="ml-1 font-medium text-slate-700 dark:text-slate-300">{caste.pctOfSC}</span>
                </div>
                <div>
                  <span className="text-slate-500">Pop:</span>
                  <span className="ml-1 font-medium text-slate-700 dark:text-slate-300">{caste.pop}</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500">Region: {caste.region}</div>
              <div className="mt-1 text-xs text-slate-500">Political: {caste.political}</div>
              {caste.note && <div className="mt-1 text-xs text-red-600 dark:text-red-400">{caste.note}</div>}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <span className="font-semibold">Critical Issue:</span> Dalits own only 3.5% of Punjab&apos;s private farmland despite being 32% of population. Mazhabi/Balmiki sub-quota debate (12.6% within SC reservation) creates internal SC tensions.
          </p>
        </div>
      </div>

      {/* SC LITERACY & ECONOMIC STATUS (MP1-005) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Sub-Caste Literacy & Economic Indicators — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          SC sub-caste literacy rates vary dramatically: Ad-Dharmis 76.4% highest to Bazigar 42.3% lowest. Land ownership disparity is stark — 3.5% farmland ownership despite 32% population.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">76.4%</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Ad-Dharmis Literacy</div>
            <div className="text-xs text-green-600 dark:text-green-300">Highest among SC sub-groups</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">42.3%</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Bazigar Literacy</div>
            <div className="text-xs text-red-600 dark:text-red-300">Lowest — most marginalized SC</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3.5%</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Farmland Ownership</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">vs 32% SC population</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">68%</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-300">Mazhabi Agricultural Laborers</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Highest of any caste group</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">3.2%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Government Jobs (SC)</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">vs 6.8% state average</div>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["SC Sub-Group", "Literacy %", "Agricultural Labor %", "Region"]}
            rows={[
              ["Ad-Dharmis", "76.4%", "35%", "Doaba"],
              ["Ravidassia", "68.2%", "45%", "Doaba"],
              ["Balmiki", "62.5%", "55%", "Malwa"],
              ["Rai Sikh", "58.7%", "40%", "Malwa, Majha"],
              ["Mazhabi Sikh", "52.1%", "68%", "Majha, Malwa"],
              ["Bazigar", "42.3%", "60%", "Scattered"],
            ]}
            caption="SC Sub-Caste Literacy and Agricultural Labor Rates"
          />
        </div>
      </div>

      {/* JAT SIKH DEMOGRAPHICS (MP1-006) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Jat Sikh Demographics & Landholding Patterns — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Jat Sikh: 20-30% of Punjab population, 28-32% of voters. Landholding highly fragmented — 97% below 12.5 acres, avg 5.1 acres. 1 in 4 Doaba families has NRI connection.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">20-30%</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-300">Population Share</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Largest single caste</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">5.1 ac</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Avg Landholding</div>
            <div className="text-xs text-green-600 dark:text-green-300">97% below 12.5 acres</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1 in 4</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Doaba NRI Families</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">NRI connection</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25+</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Major Clans</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Sidhu, Sandhu, Gill, Brar...</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">2020-21</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">Farm Protest Impact</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Broke SAD-BJP hold on Jat Sikh</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">BKU</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">4 Major Factions</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Lakhowal, Ugrahan, Krantikari, Dara</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-xl font-bold text-red-600 dark:text-red-400">73%</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Below 5 Acres</div>
            <div className="text-xs text-red-600 dark:text-red-300">Small/marginal farmers</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key Clans:</span> Sidhu, Sandhu, Gill, Singh, Bains, Dhillon, Brar, Randhawa, Cheema, Grewal, Judge, Maan. <span className="font-semibold text-yellow-700 dark:text-yellow-400">Major vote bank in 55-60 Malwa/Majha ACs.</span>
          </p>
        </div>
      </div>

      {/* OBC DETAILED DEMOGRAPHICS (MP1-007) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          OBC Sub-Group Populations & Vote Share — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          OBC 31.3% of population. Sub-groups: Saini 8-10L, Kamboj 6-8L, Ramgarhia 5.6L. Creamy layer threshold Rs 8 lakh, VISVAS 6.41L beneficiaries.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">8-10L</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Saini</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Most organized OBC</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6-8L</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Kamboj</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Malwa central</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">5.6L</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">Ramgarhia</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Punjab-wide</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6.41L</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">VISVAS</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Beneficiaries</div>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["OBC Sub-Group", "Population", "Region", "Political Alignment"]}
            rows={[
              ["Saini", "8-10 lakh", "Malwa, Doaba", "Congress/OBC"],
              ["Kamboj", "6-8 lakh", "Malwa central", "Congress/OBC"],
              ["Ramgarhia", "5.6 lakh", "Punjab-wide", "Congress"],
              ["Labana", "3-4 lakh", "Malwa", "Mixed"],
              ["Kumhar", "2-3 lakh", "Malwa", "Congress"],
              ["Arain", "2-2.5 lakh", "Malwa", "Congress"],
              ["Gujjar", "2-2.5 lakh", "Malwa, Doaba", "Mixed"],
            ]}
            caption="OBC Sub-Group Populations"
          />
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">OBC Vote Share (CSDS):</span> Congress 43%→58% | AAP 22%→35% | BJP 8%→18%. <span className="font-semibold text-blue-700 dark:text-blue-400">OBC vote highly contested — Congress still leads but AAP/BJP gaining.</span>
          </p>
        </div>
      </div>

      {/* UPPER CASTE DEMOGRAPHICS (MP1-008) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Upper Caste Demographics & NRI Concentration — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Brahmin 3-4%, Khatri/Arora 3-5%, Baniya 2.5-2.7%, Rajput 5%. Khatri/Arora among highest NRI concentrations along with Jat Sikh.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3-4%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Brahmin</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Malwa, Majha</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3-5%</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Khatri/Arora</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Urban, HIGH NRI</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2.5-2.7%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">Baniya</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Urban, trading</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5%</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Rajput</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Malwa, Doaba</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Khatri/Arora NRI:</span> Among highest NRI concentrations after Jat Sikh — UK, USA, Canada. 50% Hindu / 50% Sikh — major economic community. <span className="font-semibold text-green-700 dark:text-green-400">Total upper caste: Hindu 10-13% + Sikh 8-10% = 18-23%.</span>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste Category Matrix
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Vote bank breakdown by caste categories
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              General Category
            </h4>
            <div className="space-y-3">
              {CASTE_CATEGORIES.general.map((caste) => (
                <div key={caste.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{caste.name}</span>
                    <span className="text-slate-500">{caste.percentage}%</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={caste.percentage * 3}
                    color="bg-blue-500"
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              OBC Category (~31%)
            </h4>
            <div className="space-y-3">
              {CASTE_CATEGORIES.obc.map((caste) => (
                <div key={caste.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{caste.name}</span>
                    <span className="text-slate-500">{caste.percentage}%</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={caste.percentage * 3}
                    color="bg-orange-500"
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              SC Category (~32%)
            </h4>
            <div className="space-y-3">
              {CASTE_CATEGORIES.sc.map((caste) => (
                <div key={caste.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{caste.name}</span>
                    <span className="text-slate-500">{caste.percentage}%</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={caste.percentage * 3}
                    color="bg-green-500"
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Segmentation Parameters
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Demographic</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Age cohorts (7 brackets)</li>
              <li>• Gender (Male/Female/Other)</li>
              <li>• Caste category (General/OBC/SC)</li>
              <li>• Religion (Sikh/Hindu/Muslim/Other)</li>
              <li>• Language (Punjabi/Hindi/Other)</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Geographic</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Region (Majha/Malwa/Doaba/Powadh)</li>
              <li>• District (22 districts)</li>
              <li>• Assembly Constituency (117)</li>
              <li>• Booth (23,000+ booths)</li>
              <li>• Urban/Rural classification</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Occupational</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Agriculture + Farmers</li>
              <li>• Agricultural Labor</li>
              <li>• Business/Self-employed</li>
              <li>• Private Sector</li>
              <li>• Government/PSU employees</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Socio-Economic</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Income bracket</li>
              <li>• Land ownership status</li>
              <li>• BPL/Non-BPL classification</li>
              <li>• Education level</li>
              <li>• Family size</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Psychographic</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Political affiliation spectrum</li>
              <li>• Issue priority ranking</li>
              <li>• Media consumption habits</li>
              <li>• Social media engagement</li>
              <li>• Event attendance patterns</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Behavioral</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Past voting history</li>
              <li>• Turnout likelihood</li>
              <li>• Party loyalty index</li>
              <li>• Swing voter probability</li>
              <li>• Campaign responsiveness</li>
            </ul>
          </div>
        </div>
      </div>

      <DataTable
        headers={["Caste/Community", "Category", "Est. Population %", "Votes per Seat", "Congress Affinity", "AAP Affinity", "SAD Affinity"]}
        rows={[
          ["Jat Sikh", "General", "21%", "28,500", "Medium-High", "Medium", "High"],
          ["Mazhabi Sikh", "SC", "8%", "10,900", "High", "Medium", "Low"],
          ["Bania (Arora/Khatri)", "General", "7%", "9,500", "Medium-High", "Medium", "Medium"],
          ["Ramdasia", "SC", "5%", "6,800", "High", "Medium", "Low"],
          ["Brahmin", "General", "4%", "5,400", "Medium", "Medium", "Low"],
          ["Lodhgarh", "OBC", "3%", "4,100", "Medium", "Medium", "Medium"],
          ["Arora", "General", "3%", "4,100", "High", "Medium", "Low"],
          ["Tarkhan", "OBC/SC", "3%", "4,100", "Medium", "Medium", "Low"],
          ["Balmiki", "SC", "3%", "4,100", "Medium", "Medium", "High"],
          ["Rajput", "General", "2%", "2,700", "Low-Medium", "Medium", "Medium"],
          ["Rai", "OBC", "2%", "2,700", "Medium", "Medium", "Low"],
          ["Khatri", "General", "2%", "2,700", "High", "Medium", "Low"],
        ]}
        caption="Caste-Vote Bank Mapping (Indicative)"
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          District-Wise Population & Sex Ratio — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab population: 2.77 Cr (2011). Sex ratio: 895 F per 1,000 M. Source: Census 2011
        </p>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["District", "Population", "Rural %", "Urban %", "Sex Ratio", "Share %"]}
            rows={[
              ["Ludhiana", "34,98,739", "40.8%", "59.2%", "873", "12.6%"],
              ["Amritsar", "24,90,656", "46.4%", "53.6%", "889", "9.0%"],
              ["Gurdaspur", "22,98,323", "71.3%", "28.7%", "895", "8.3%"],
              ["Jalandhar", "21,93,590", "47.1%", "52.9%", "915", "7.9%"],
              ["Firozpur", "20,29,074", "72.8%", "27.2%", "893", "7.3%"],
              ["Patiala", "18,95,686", "59.7%", "40.3%", "891", "6.8%"],
              ["Sangrur", "16,55,169", "68.8%", "31.2%", "885", "6.0%"],
              ["Hoshiarpur", "15,86,625", "78.9%", "21.1%", "961", "5.7%"],
              ["Bathinda", "13,88,525", "64.1%", "36.0%", "868", "5.0%"],
              ["Tarn Taran", "11,19,627", "87.3%", "12.7%", "900", "4.0%"],
              ["Moga", "9,95,746", "77.2%", "22.8%", "893", "3.6%"],
              ["Mohali (SAS Nagar)", "9,94,628", "45.2%", "54.8%", "879", "3.6%"],
              ["Muktsar", "9,01,896", "72.0%", "28.0%", "896", "3.3%"],
              ["Kapurthala", "8,15,168", "65.4%", "34.7%", "912", "2.9%"],
              ["Mansa", "7,69,751", "78.8%", "21.2%", "883", "2.8%"],
              ["Rupnagar", "6,84,627", "74.0%", "26.0%", "915", "2.5%"],
              ["Faridkot", "6,17,508", "64.9%", "35.2%", "890", "2.2%"],
              ["Shahid Bhagat Singh Nagar", "6,12,310", "79.5%", "20.5%", "954", "2.2%"],
              ["Fatehgarh Sahib", "6,00,163", "69.1%", "30.9%", "871", "2.2%"],
              ["Barnala", "5,95,527", "68.0%", "32.0%", "876", "2.2%"],
            ]}
            caption="District Population — Census 2011 (Source: Census 2011)"
          />
        </div>
      </div>

      {/* LITERACY & EDUCATION SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Literacy & Education — Punjab vs National
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab ranks among top states for education outcomes despite lower spending. NITI Aayog 2026 declared Punjab India&apos;s best-performing state in school education.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">75.8%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Total Literacy</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">Census 2011 vs nat&apos;l 74%</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">81.4%</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Male Literacy</div>
            <div className="text-sm text-green-600 dark:text-green-300">vs national 82.1%</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">70.7%</div>
            <div className="mt-1 font-semibold text-pink-700 dark:text-pink-400">Female Literacy</div>
            <div className="text-sm text-pink-600 dark:text-pink-300">vs national 65.5%</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">64.8%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">SC Literacy</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Below state avg — gap 11pp</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">82%</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">Class 3 Language Proficiency</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">NITI Aayog 2026 — BEST in India (Kerala 75%)</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">78%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Class 3 Math Proficiency</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">NITI Aayog 2026 — BEST in India (Kerala 70%)</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-xl font-bold text-red-600 dark:text-red-400">17.2%</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Secondary Dropout Rate</div>
            <div className="text-xs text-red-600 dark:text-red-300">vs national 11.5% — above national avg</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Teacher Vacancies:</span> 6,423 teacher vacancies exist despite improvement in student-teacher ratio to 22:1. <span className="font-semibold text-blue-700 dark:text-blue-400">99.9% schools have electricity, 99% have computers</span> — infrastructure ranking among India&apos;s best.
          </p>
        </div>
      </div>

      {/* ECONOMIC INDICATORS SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Economic Indicators — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab&apos;s economy shows growth deceleration but maintains higher per capita income than national average. Agricultural debt crisis remains critical. Budget 2026-27: Rs 2.60 lakh crore with debt at 45.13% GSDP.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rs 8.38L Cr</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">GSDP (2024-25)</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">6.1% growth vs India 7.4%</div>
            <div className="mt-2 text-xs text-red-600 dark:text-red-400">Deceleration from Green Revolution rates</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">19.3%</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Youth Unemployment (15-29)</div>
            <div className="text-sm text-green-600 dark:text-green-300">Rural female 30.7% — overall 7%</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">45.13%</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Debt-to-GSDP (Budget 2026-27)</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Rs 4.42L Cr debt on Rs 2.60L Cr budget</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">US$ 7-12B</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">NRI Remittances</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Annual — major foreign exchange source</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">95%</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">Woolen Knitwear</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">Punjab&apos;s share of India&apos;s production</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">85%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Sewing Machines</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Punjab&apos;s share of India&apos;s production</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-xl font-bold text-pink-600 dark:text-pink-400">75%</div>
            <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-400">Sports Goods</div>
            <div className="text-xs text-pink-600 dark:text-pink-300">Punjab&apos;s share of India&apos;s production</div>
          </div>
          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">1.9%</div>
            <div className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-400">Agri Growth (2004-2024)</div>
            <div className="text-xs text-cyan-600 dark:text-cyan-300">Per annum — down from Green Revolution era</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">Structural Fiscal Stress:</span> GSDP growth at 6.1% trails national 7.4%. Youth unemployment at 19.3% drives out-migration. <span className="font-semibold">Debt-GSDP at 45.13%</span> (Budget 2026-27: Rs 2.60L Cr budget, Rs 4.42L Cr debt) — highest farm debt burden in India. NRI remittances of US$ 7-12B annually provide critical foreign exchange support.
          </p>
        </div>
      </div>

      {/* AGRICULTURAL ECONOMY SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Agricultural Economy & Farmer Crisis — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab farmer debt is among India&apos;s highest. 90% of agriculture under rice-wheat monoculture depleting groundwater at 37cm/year. MSP procurement guaranteed but paddy procurement fell to decade low. Stubble burning reduced 94% from 2021 peak.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">Rs 1.04L Cr</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Institutional Farm Debt</div>
            <div className="text-xs text-red-600 dark:text-red-300">Rs 9.88L per landholding (NABARD)</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">174</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">Farmer Suicides (2023)</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">Down from 302 (2019) — NCRB data</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89%</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">Farmers in Debt</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Of agricultural households</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">90%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">Rice-Wheat Monoculture</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">37cm/year groundwater depletion</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">Rs 2,585</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">Wheat MSP (RMS 2026-27)</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">Per quintal — Rs 160 hike from prev</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">150 LMT</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400">Paddy Procurement</div>
            <div className="text-xs text-green-600 dark:text-green-300">Lowest in a decade</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">94%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Stubble Burning Reduction</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">From 55,000 (2021) to 3,330 (2025)</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-xl font-bold text-pink-600 dark:text-pink-400">3,330</div>
            <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-400">Farm Fire Incidents 2025</div>
            <div className="text-xs text-pink-600 dark:text-pink-300">Season Sep-Nov (vs 55,000 in 2021)</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Crop Diversification Stalled:</span> 90% of agriculture under rice-wheat monoculture with 37cm/year groundwater depletion. <span className="font-semibold text-red-700 dark:text-red-400">MSP bias toward wheat/rice</span> perpetuates ecological crisis. Farmer suicides declined to 174 (2023) from 302 (2019) but debt burden remains critical. Non-institutional debt ~Rs 24,000 crore.
          </p>
        </div>
      </div>

      {/* HEALTHCARE SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Healthcare Indicators — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab shows mixed health outcomes. MMR declined but remains above national average. CAG audit reveals 50% health posts vacant. 829 Aam Aadmi Clinics operational.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">111</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">MMR (per lakh births)</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">2024-25 — above nat&apos;l avg 93</div>
            <div className="mt-2 text-xs text-red-600 dark:text-red-400">Ferozpur: 440 — extreme disparity</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">19</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">IMR (per 1000 live births)</div>
            <div className="text-sm text-green-600 dark:text-green-300">Below national 28 — better outcomes</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">87.2%</div>
            <div className="mt-1 font-semibold text-pink-700 dark:text-pink-400">Institutional Deliveries</div>
            <div className="text-sm text-pink-600 dark:text-pink-300">vs national 88.6% — slightly below</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50.7%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Health Posts Vacant</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">CAG Audit 2016-2022 — severe crisis</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">53.8%</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">Women Anaemic (NFHS-5)</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">4M malnourished children in Punjab</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">1:7,000</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Doctor-to-Population Ratio</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">vs WHO norm 1:1,000 — severe shortage</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-xl font-bold text-red-600 dark:text-red-400">829</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Aam Aadmi Clinics</div>
            <div className="text-xs text-red-600 dark:text-red-300">1.15Cr patients treated, 31L free tests</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Healthcare Vacancy Crisis:</span> 50.69% of 68,949 sanctioned health posts vacant for 6 years (CAG). Moga worst at 1:7,376 doctor-population ratio. <span className="font-semibold text-green-700 dark:text-green-400">Ayushman Bharat: 33.16 lakh admissions authorized</span> but private hospitals halted treatment over Rs 600 crore unpaid dues.
          </p>
        </div>
      </div>

      {/* WATER CRISIS SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Water Crisis — Groundwater Depletion & SYL Canal
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab faces severe groundwater depletion with 115 of 153 blocks over-exploited. Canal irrigation expanded but uranium contamination affects 62.5% of groundwater.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">115/153</div>
            <div className="mt-1 font-semibold text-red-700 dark:text-red-400">Blocks Over-Exploited</div>
            <div className="text-sm text-red-600 dark:text-red-300">75% of blocks — critical groundwater crisis</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5.3M</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Acres Canal Irrigated</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">Canal irrigation expanded — surface water</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">62.5%</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Uranium Contamination</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Groundwater uranium above safe limits</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">SYL</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">Satluj-Yamuna Link Canal</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Pending — inter-state water dispute</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">Critical Issue for 2027:</span> Water table depletion threatens Punjab&apos;s agricultural sustainability. Rice-wheat cropping system adds 200,000+ hectares to rice cultivation each decade, accelerating crisis. <span className="font-semibold text-blue-700 dark:text-blue-400">Canal irrigation provides partial mitigation</span> but doesn&apos;t address root cause.
          </p>
        </div>
      </div>

      {/* DRUG & CRIME SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Drug Crisis & Law & Order — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Drug abuse remains Punjab&apos;s defining crisis — ~66 lakh users estimated with 6.97 lakh child users. 106 overdose deaths in 2024 (2nd highest in India). 65%+ relapse rate undermines de-addiction efforts. Overall crime rate below national average but extortion elevated.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">~66L</div>
            <div className="mt-1 font-semibold text-red-700 dark:text-red-400">Estimated Drug Users</div>
            <div className="text-sm text-red-600 dark:text-red-300">Parliamentary Panel 2023 — 1 in 9 Punjabis</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">6.97L</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Child Drug Users</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Critical vulnerability — next generation crisis</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">65%+</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Relapse Rate</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Post-treatment relapse — systemic failure</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">106</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Overdose Deaths (2024)</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">2nd highest in India — +19% from 2023</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">500+</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">OOAT De-Addiction Clinics</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">Outpatient Opioid Assisted Treatment</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">1:7</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Gangster Murder Decline</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">69% drop — Operation Parhar impact</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">36.9%</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400">Conviction Rate</div>
            <div className="text-xs text-green-600 dark:text-green-300">vs nat&apos;l 54% — weak justice delivery</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-xl font-bold text-pink-600 dark:text-pink-400">200+</div>
            <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-400">Drones Seized (2024)</div>
            <div className="text-xs text-pink-600 dark:text-pink-300">Pakistan border — drug deliveries</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Operation Parhar (Jan 2026):</span> 12,000 personnel deployed. 60 overseas gangsters targeted. <span className="font-semibold text-red-700 dark:text-red-400">Despite enforcement, overdose deaths RISEN 19%</span> — IDPC critique: enforcement-only approach fails. <span className="font-semibold text-purple-700 dark:text-purple-400">65%+ relapse rate</span> undermines de-addiction. 6.97 lakh child users represent critical vulnerability. March 2026 domicile restriction on de-addiction cut off 1000s from neighboring states.
          </p>
        </div>
      </div>

      {/* DIGITAL PENETRATION SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Penetration & Government Schemes — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab has among India&apos;s highest smartphone/internet penetration but UPI adoption is moderate. PM-KISAN beneficiary decline is steepest in India — 49% drop from peak.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">65-70%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Smartphone Penetration</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">Ranked 2nd in India after Delhi (2018 data)</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">22.64B</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">UPI Transactions/Month</div>
            <div className="text-sm text-green-600 dark:text-green-300">National total — Punjab ~1.3% share</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">49%</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">PM-KISAN Beneficiary Decline</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Steepest in India — 23L to 11.3L (2019-2025)</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">12.27L</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">MGNREGA Active Job Cards</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Feb 2025 — 2.68Cr person-days FY24-25</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">72.35%</div>
            <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">SC Workers in MGNREGA</div>
            <div className="text-xs text-amber-600 dark:text-amber-300">Reflects SC population concentration</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">71.71%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Women Person-Days</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">MGNREGA — women majority</div>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="text-xl font-bold text-pink-600 dark:text-pink-400">11.68M</div>
            <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-400">Jio Subscribers</div>
            <div className="text-xs text-pink-600 dark:text-pink-300">Reliance Jio — 2/3 of Punjab traffic</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">PM-KISAN Crisis:</span> From 23.01L beneficiaries (Dec 2019) to 11.34L (Apr-Jul 2025) — mandatory eKYC, Aadhaar seeding, land verification caused steepest decline nationally. <span className="font-semibold text-green-700 dark:text-green-400">MGNREGA: 7L+ rural families benefited</span> — major welfare program.
          </p>
        </div>
      </div>

      {/* OBC & MINORITY DEMOGRAPHICS SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          OBC & Minority Demographics — Punjab 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          OBC population estimated at 31.3% (including some groups). Religious minorities include Muslim 1.93%, Christian 1.26%. Christian population growing via conversions.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">31.3%</div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">OBC Population</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">~31% — official data limited (no caste census)</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">1.93%</div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Muslim Population</div>
            <div className="text-sm text-green-600 dark:text-green-300">~4.1L voters — Malerkotla 68% Muslim</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1.26%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Christian Population</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">~3.5L — growing via Dalit conversions</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0.6%</div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Others (Buddhist, Jain)</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Sikh sects: Ravidassia, Namdhari, Nirankari</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <span className="font-semibold">Key OBC Groups:</span> Saini (~4-5%), Kamboj (~5-6.5%), Labana (~3-4%), Tarkhan (~2-2.5%), Kumhar (~1.5-2%), Nai (~1-1.5%). <span className="font-semibold">BJP OBC outreach intensifying</span> — Haryana CM Nayab Singh Saini leading Punjab campaign. Congress/OBC relationship requires renewal.
          </p>
        </div>
      </div>

      {/* MINORITY DETAILED DEMOGRAPHICS (MP1-009) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Minority Religious Demographics — Buddhist, Jain, Muslim Trajectory — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Buddhist 33,237, Jain 45,040. Muslim population collapsed from 38.4% (1941) to 1.93% (2011) — Partition&apos;s massive impact. {religiousMinoritiesOverview.sourcesConsulted} sources consulted. Data confidence: {religiousMinoritiesOverview.confidence}.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{buddhistCommunity.population2011.toLocaleString()}</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Buddhist</div>
            <div className="text-xs text-red-600 dark:text-red-300">{buddhistCommunity.sharePercent}% — {buddhistCommunity.urbanConcentration.join(", ")}</div>
            <div className="mt-1 text-xs text-red-500">Literacy: {buddhistCommunity.literacyRate2001}%</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{jainCommunity.population2011.toLocaleString()}</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Jain</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">{jainCommunity.sharePercent}% — urban trading</div>
            <div className="mt-1 text-xs text-orange-500">Literacy: {jainCommunity.literacyRate2001}% (highest)</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{muslimCommunity.population2011.toLocaleString()}</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Muslim</div>
            <div className="text-xs text-green-600 dark:text-green-300">{muslimCommunity.sharePercent}% — {muslimCommunity.decadalGrowth.percentIncrease}% decadal growth</div>
            <div className="mt-1 text-xs text-green-500">Malerkotla: {muslimCommunity.malerkotla.muslimPopulationPercent}%</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{christianCommunity.growthDynamics.census2011.population.toLocaleString()}</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Christian (2011)</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">{christianCommunity.growthDynamics.census2011.sharePercent}%</div>
            <div className="mt-1 text-xs text-blue-500">Est. {christianCommunity.growthDynamics.estimatedCurrentShare.lowEstimate}-{christianCommunity.growthDynamics.estimatedCurrentShare.highEstimate}% now</div>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Year", "Muslim %", "Change", "Key Event"]}
            rows={[
              ["1941", "38.4%", "Baseline", "Pre-Partition peak"],
              ["1951", "13.1%", "-25.3pp", "Partition massive migration"],
              ["1961", "6.8%", "-6.3pp", "Post-partition stabilization"],
              ["1971", "3.6%", "-3.2pp", "Ongoing emigration"],
              ["1981", "2.6%", "-1.0pp", "Slow decline"],
              ["1991", "2.2%", "-0.4pp", "Minimal change"],
              ["2001", "2.0%", "-0.2pp", "Stabilization"],
              ["2011", "1.93%", "-0.07pp", "Census 2011"],
            ]}
            caption="Muslim Population Decline 1941-2011: 38.4% → 1.93%"
          />
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Christian Growth:</span> Driven by Dalit conversions (Valmiki, Mazhabi Sikh). Punjab has India&apos;s highest SC proportion at {getPunjabDalitPercent()}%. {christianCommunity.growthDynamics.reportedConversions.number.toLocaleString()} reportedly converted {christianCommunity.growthDynamics.reportedConversions.period} (media reports - needs verification). <span className="font-semibold text-blue-700 dark:text-blue-400">Mosques concentrated in Malerkotla ({muslimCommunity.malerkotla.muslimPopulationPercent}% Muslim).</span>
          </p>
        </div>
      </div>

      {/* DALIT CHRISTIAN RESERVATION ISSUE - CRITICAL POLITICAL MATTER */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500 text-white font-bold">
            !
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
              CRITICAL: Dalit Christian SC Reservation Issue
            </h3>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              <span className="font-semibold">Supreme Court Ruling ({dalitChristianReservationIssue.supremeCourtRuling.rulingDate}):</span> In{" "}
              <em>{dalitChristianReservationIssue.supremeCourtRuling.caseName}</em>, SC ruled that converting to Christianity results in loss of Scheduled Caste status and protections under SC/ST Prevention of Atrocities Act.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">Impact on Punjab</h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              {dalitChristianReservationIssue.impactOnPunjab.affectedCommunities.map((community, i) => (
                <li key={i}>• {community}</li>
              ))}
            </ul>
            <div className="mt-2 text-xs text-slate-500">
              Consequences: Dalit Christians lose SC reservation (jobs, education, political representation)
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">Historical Context</h4>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>1950: Presidential Order excluded non-Hindu Dalits</p>
              <p>1956: Added Sikhs</p>
              <p>1990: Added Buddhists</p>
              <p className="font-semibold text-red-500">Christians & Muslims remain excluded</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">Political Exploitation</h4>
            <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              <p><span className="font-semibold">{dalitChristianReservationIssue.politicalExploitation.party}</span> - {dalitChristianReservationIssue.politicalExploitation.leader}</p>
              <p className="mt-1 text-red-500">{dalitChristianReservationIssue.politicalExploitation.statement}</p>
            </div>
            <div className="mt-2 text-xs">
              <span className="font-semibold text-slate-500">Community Response:</span>
              {dalitChristianReservationIssue.communityResponse.leaders.map((leader, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-400">{leader.name} ({leader.role})</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-yellow-100 p-3 dark:bg-yellow-900/30">
          <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
            Congress Opportunity: Dalit Christian reservation issue is THE defining political opportunity
          </p>
          <ul className="mt-2 space-y-1 text-xs text-yellow-600 dark:text-yellow-300">
            <li>• Publicly commit to extending SC reservation benefits to Dalit Christians</li>
            <li>• Advocate at national level for amendment to Presidential Order of 1950</li>
            <li>• Contrast with BJP&apos;s anti-conversion law stance</li>
            <li>• Position Congress as protector of both Dalit rights AND religious freedom</li>
          </ul>
        </div>
      </div>

      {/* DISTRICT-WISE MUSLIM POPULATION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          District-wise Muslim Population (2011 Census)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Muslim population: {muslimCommunity.population2011.toLocaleString()} ({muslimCommunity.sharePercent}%). Highest concentration in Sangrur/Malerkotla at {muslimCommunity.highestConcentration.percentOfDistrict}%.
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["District", "Muslim Population", "% of District"]}
            rows={districtMuslimPopulation.slice(0, 12).map(d => [
              d.district,
              d.muslimPopulation.toLocaleString(),
              `${d.percentOfDistrict}%`,
            ])}
            caption="Top 12 districts by Muslim population"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">Malerkotla - India&apos;s Only Muslim-Majority Municipality</h4>
            <div className="mt-2 space-y-1 text-xs text-green-600 dark:text-green-300">
              <p>Muslim Population: {muslimCommunity.malerkotla.muslimPopulationPercent}%</p>
              <p>Created as separate district: {muslimCommunity.malerkotla.createdAsDistrictYear}</p>
              <p>Native Punjabi Muslims who stayed during Partition</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">Qadian - Ahmadiyya Headquarters</h4>
            <div className="mt-2 space-y-1 text-xs text-blue-600 dark:text-blue-300">
              <p>Founded by: {muslimCommunity.qadian.founder} ({muslimCommunity.qadian.founderBirthYear})</p>
              <p>District: {muslimCommunity.qadian.district}</p>
              <p>Ahmadiyya community faces persecution</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400">Urban Migrant Muslim Pockets</h4>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            {muslimCommunity.urbanMigrantPockets.map((pocket, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">{pocket.city}:</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">{pocket.population.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STRATEGIC IMPLICATIONS FOR CONGRESS - MINORITIES */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Strategic Implications for Congress - Minority Vote Banks
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* Muslim Vote Bank */}
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">
              Muslim Vote Bank (Est. {religiousMinoritiesStrategicImplications.muslimVoteBank.estimatedVoters} voters)
            </h4>
            <ul className="mt-2 space-y-2 text-xs text-green-600 dark:text-green-300">
              {religiousMinoritiesStrategicImplications.muslimVoteBank.strategies.map((strategy, i) => (
                <li key={i} className="rounded bg-white/50 p-2 dark:bg-slate-800/50">
                  <span className="font-semibold">{strategy.component}:</span> {strategy.description}
                </li>
              ))}
            </ul>
          </div>
          {/* Christian Vote Bank */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Christian Vote Bank (Est. {religiousMinoritiesStrategicImplications.christianVoteBank.estimatedVoters} - contested)
            </h4>
            <ul className="mt-2 space-y-2 text-xs text-blue-600 dark:text-blue-300">
              {religiousMinoritiesStrategicImplications.christianVoteBank.strategies.map((strategy, i) => (
                <li key={i} className="rounded bg-white/50 p-2 dark:bg-slate-800/50">
                  <span className="font-semibold">{strategy.component}:</span> {strategy.description[0]}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Cross-Cutting Minority Strategy</h4>
          <div className="mt-2 space-y-2 text-xs text-purple-600 dark:text-purple-300">
            <p><span className="font-semibold">Reforms:</span> {religiousMinoritiesStrategicImplications.crossCuttingStrategy.reforms.join(", ")}</p>
            <p><span className="font-semibold">Employment:</span> {religiousMinoritiesStrategicImplications.crossCuttingStrategy.employment}</p>
            <p><span className="font-semibold">Coalition:</span> {religiousMinoritiesStrategicImplications.crossCuttingStrategy.coalitionBuilding}</p>
          </div>
        </div>
      </div>

      {/* DATA QUALITY & GAPS */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Religious Minorities Data Quality & Gaps
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Confidence: <Badge variant={religiousMinoritiesOverview.confidence === "HIGH" ? "success" : religiousMinoritiesOverview.confidence === "MEDIUM" ? "warning" : "danger"}>{religiousMinoritiesOverview.confidence}</Badge> | Sources: {religiousMinoritiesOverview.sourcesConsulted} | Research Date: {religiousMinoritiesOverview.researchDate}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {getCriticalDataGaps().map((gap) => (
            <div key={gap.id} className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <h4 className="text-xs font-semibold text-red-600 dark:text-red-400">CRITICAL: {gap.topic}</h4>
              <p className="mt-1 text-xs text-red-500">{gap.description}</p>
            </div>
          ))}
          {religiousMinoritiesDataGaps.filter(g => g.priority !== "CRITICAL").slice(0, 6).map((gap) => (
            <div key={gap.id} className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <h4 className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">{gap.priority}: {gap.topic}</h4>
              <p className="mt-1 text-xs text-yellow-500">{gap.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Metric", "Value", "Source", "Date"]}
            rows={religiousMinoritiesDataPoints.slice(0, 10).map(dp => [dp.metric, dp.value, dp.source, dp.date])}
            caption="Key Data Points"
          />
        </div>
      </div>

      {/* NAMDHARI & DERA VOTE DECLINE (MP1-010) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Namdhari Dera & Dera Vote Decline Trends — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Namdhari: 500K-1M voters, key ACs in Ludhiana belt. Dera Sacha Sauda vote influence collapsed from 3.6% (2012) to 0.9% (2022).
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">500K-1M</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-300">Namdhari Voters</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Bloc voting — high cohesion</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.6%→0.9%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Dera Sacha Sauda</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Vote influence 2012→2022</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">25%→24%</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Dera Followers</div>
            <div className="text-xs text-red-600 dark:text-red-300">Collective 2012→2022</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">12,000+</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">RSS Flood Aid</div>
            <div className="text-xs text-green-600 dark:text-green-300">Families aided 2025</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">Namdhari Key ACs</div>
            <div className="mt-2 text-sm text-purple-700 dark:text-purple-300">
              <div>Ludhiana Rural (40%+ Namdhari)</div>
              <div>Malerkotla (25-30%)</div>
              <div>Raikot, Khanna, Jagraon</div>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">Dera Vote Decline</div>
            <div className="mt-2 text-sm text-orange-700 dark:text-orange-300">
              <div>2012: 3.6% → 2017: 2.9% → 2022: 0.9%</div>
              <div>Dropped to 1/4 of 2012 level</div>
            </div>
          </div>
        </div>
      </div>

      {/* CASTE-BASED VOTING PATTERNS SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste-Based Voting Patterns — 2022-2027
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          SC voters (32%) are decisive — AAP won 29/34 SC seats in 2022. BJP vote share tripled from 6.6% to 18.5% (2022-2024). Dalit Christian conversions creating political controversy.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-xl font-bold text-red-600 dark:text-red-400">29/34</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">AAP SC Reserved Seat Win (2022)</div>
            <div className="text-xs text-red-600 dark:text-red-300">85% of SC seats — massive Dalit shift to AAP</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">6.6%→18.5%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">BJP Vote Share Growth</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">2022 to 2024 Lok Sabha — tripled via Dalit/OBC outreach</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">32%</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">SC Population — HIGHEST in India</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">Decisive electoral force in Punjab</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Jat Sikh Fragmentation:</span> Farm agitation broke SAD-BJP hold. SAD (Amritsar), Waris Punjab De (Amritpal Singh), new entrants competing. <span className="font-semibold text-red-700 dark:text-red-400">Conversion controversy:</span> Dalit families (Valmiki, Mazhabi Sikh) converting to Christianity — BJP exploiting, AAP denying. AAP caste census underway.
          </p>
        </div>
      </div>

      {/* POLITICAL PARTIES SECTION */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Political Party Position — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          BJP rapidly expanding beyond traditional base. AAP faces anti-incumbency. Congress attempting reorganization under new leadership. Multiple Jat Sikh parties fragmenting traditional SAD vote.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">AAP (Governing)</div>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-400">
              <div>92 seats (2022), 42.4% vote share</div>
              <div className="mt-1 text-xs">Anti-incumbency growing; governance failures in health, drugs</div>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-lg font-bold text-orange-600 dark:text-orange-400">Congress</div>
            <div className="mt-2 text-sm text-orange-700 dark:text-orange-400">
              <div>18 seats (2022), 23% vote share</div>
              <div className="mt-1 text-xs">Reorganizing under Amarinder Singh Raja Warring</div>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">BJP</div>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
              <div>2 seats (2022), 18.5% vote share (2024)</div>
              <div className="mt-1 text-xs">Tripled vote share — OBC/Dalit outreach, defectors</div>
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">SAD (Badal)</div>
            <div className="mt-2 text-sm text-green-700 dark:text-green-400">
              <div>3 seats (2022), declining</div>
              <div className="mt-1 text-xs">Internal dissent, 2015 sacrilege controversy</div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key 2027 Targets:</span> Congress needs +12-15pp swing to reach majority. BJP aims to contest all 117 seats independently. <span className="font-semibold text-purple-700 dark:text-purple-400">SAD (Amritsar), Waris Punjab De</span> competing for Jat Sikh votes. <span className="font-semibold">Swing voters: ~15-20%</span> — determine outcomes in 35-45 competitive seats.
          </p>
        </div>
      </div>

      {/* CYCLE 1 ENHANCEMENT: Punjab State Overview */}
      {/* GENDER INDICATORS SECTION (from research-M2/MP1-foundational/demographics/gender-indicators.md) */}
      <div className="rounded-xl border-2 border-pink-500 bg-pink-50 p-6 dark:border-pink-700 dark:bg-pink-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
            G
          </span>
          <div>
            <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-400">Gender Demographics & Women Indicators — Punjab</h3>
            <p className="text-sm text-pink-600 dark:text-pink-400">Sources: Census 2011, NFHS-5 (2019-21), CEO Punjab, ECI, MoSPI, NSSO/PLFS, Mission Shakti</p>
          </div>
        </div>

        {/* Population by Gender */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Population by Gender</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.23 Cr</div>
              <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Total Population (2026 proj.)</div>
              <div className="text-xs text-blue-600 dark:text-blue-300">Census projections</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">1.64 Cr</div>
              <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Male Population</div>
              <div className="text-xs text-green-600 dark:text-green-300">StatisticsTimes 2026</div>
            </div>
            <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">~1.49 Cr</div>
              <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-300">Female Population</div>
              <div className="text-xs text-pink-600 dark:text-pink-300">Derived from sex ratio</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">895</div>
              <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Sex Ratio (Census 2011)</div>
              <div className="text-xs text-purple-600 dark:text-purple-300">Females per 1000 males</div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="text-xl font-bold text-red-600 dark:text-red-400">846</div>
              <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Child Sex Ratio (0-6)</div>
              <div className="text-xs text-red-600 dark:text-red-300">Census 2011 — alarmingly low</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400">918</div>
              <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">NFHS-5 Sex Ratio</div>
              <div className="text-xs text-orange-600 dark:text-orange-300">2019-21</div>
            </div>
            <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
              <div className="text-xl font-bold text-teal-600 dark:text-teal-400">904</div>
              <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">Sex Ratio at Birth (NFHS-5)</div>
              <div className="text-xs text-teal-600 dark:text-teal-300">Improved from 860 (NFHS-4)</div>
            </div>
          </div>
        </div>

        {/* District-Wise Child Sex Ratio */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">District-Wise Child Sex Ratio (Lowest) — Census 2011</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {districtChildSexRatio.map((d) => (
              <div key={d.district} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{d.district}</span>
                <span className={`text-sm font-bold ${d.childSexRatio < 846 ? "text-red-600" : "text-green-600"}`}>
                  {d.childSexRatio}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>Concern:</strong> Child sex ratio at 846 remains alarmingly low -- indicating persistent son preference. Tarn Taran (820) is the worst district.
            </p>
          </div>
        </div>

        {/* Female Literacy Trends */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Female Literacy Trends</h4>
          <div className="overflow-x-auto">
            <DataTable
              headers={["Year", "Male", "Female", "Total", "Gender Gap"]}
              rows={femaleLiteracyTrends.map(d => [d.year, d.male, d.female, d.total, d.gap])}
            />
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <strong>Pattern:</strong> Malwa districts (Mansa, Muktsar, Sangrur, Bathinda, Tarn Taran) have the lowest female literacy, all below 63%. These are also the districts with the worst child sex ratios -- a double disadvantage for women.
            </p>
          </div>
        </div>

        {/* Female Literacy - Bottom 10 Districts */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Female Literacy by District (Census 2011) — Lowest 10</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {districtFemaleLiteracy.slice(-10).map((d) => (
              <div key={d.district} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{d.district}</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-pink-600">{d.female}%</span>
                  <span className="ml-2 text-xs text-slate-500">Gap: {d.gap}pp</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voter Turnout by Gender (2022) */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Electorate & Voter Turnout by Gender (2022 Assembly Election)</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">68.7%</div>
              <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Male Turnout</div>
              <div className="text-xs text-blue-600 dark:text-blue-300">~77.6 lakh voters</div>
            </div>
            <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">68.4%</div>
              <div className="mt-1 text-sm font-semibold text-pink-700 dark:text-pink-300">Female Turnout</div>
              <div className="text-xs text-pink-600 dark:text-pink-300">~69.8 lakh voters</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0.3pp</div>
              <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Gender Gap</div>
              <div className="text-xs text-purple-600 dark:text-purple-300">Nearly at par!</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">727</div>
              <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Transgender Voters</div>
              <div className="text-xs text-green-600 dark:text-green-300">Massively undercounted</div>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Positive:</strong> Female turnout at ~68.4% was nearly at par with male turnout at ~68.7% -- a gender turnout gap of only 0.3 percentage points. In many individual constituencies, women turnout exceeded men.
            </p>
          </div>
        </div>

        {/* Female Workforce Participation */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Female Workforce Participation Rate</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">~24-28%</div>
              <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Punjab Female LFPR (PLFS 2022-23)</div>
              <div className="text-xs text-red-600 dark:text-red-300">Estimated — significantly below national</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">37.0%</div>
              <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">India Female LFPR (PLFS 2022-23)</div>
              <div className="text-xs text-orange-600 dark:text-orange-300">National average</div>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Key Characteristics:</strong> Rural FLFPR higher than urban due to agricultural work; SC women have higher participation but in lower-quality informal work; Agriculture (56%), domestic work, ASHA/Anganwadi, SHG-related enterprises.
            </p>
          </div>
        </div>

        {/* Health & Social Indicators (NFHS-5) */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Health & Social Indicators (NFHS-5, 2019-21)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {healthSocialIndicators.map((h) => (
              <div key={h.indicator} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{h.indicator}</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-pink-600">{h.punjab}</span>
                  <span className="text-xs text-slate-500">vs India {h.india}</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">{h.notes}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
              <p className="text-sm text-green-700 dark:text-green-400">
                <strong>Positives:</strong> Punjab performs better than national average on marriage age, bank account ownership, mobile phone ownership, and domestic violence rates.
              </p>
            </div>
            <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-sm text-red-700 dark:text-red-400">
                <strong>Concerns:</strong> Anaemia remains high at ~40%. Obesity among women is rising rapidly. SRB at 904 still reflects gender-biased sex selection.
              </p>
            </div>
          </div>
        </div>

        {/* Widow, Single Women & Female-Headed Households */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Widow, Single Women & Female-Headed Households</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {widowSingleWomenData.map((w) => (
              <div key={w.category} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{w.count}</div>
                <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">{w.category}</div>
                <div className="text-xs text-purple-600 dark:text-purple-300">{w.source}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <strong>Political Relevance:</strong> Widows and single women are a highly mobilizable voting bloc. Punjab has one of the highest widow populations among Indian states, partly due to military/service casualties and agricultural distress-related male mortality.
            </p>
          </div>
        </div>

        {/* SHG, ASHA & Anganwadi Workers */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">SHG, ASHA & Anganwadi Workers</h4>
          <div className="grid gap-4 md:grid-cols-5">
            {frontlineWomenWorkers.map((f) => (
              <div key={f.category} className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{f.count}</div>
                <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">{f.category}</div>
                <div className="text-xs text-teal-600 dark:text-teal-300">{f.notes}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              <strong>Strategic Value:</strong> ~95,000+ women working as ASHA, Anganwadi workers, and SHG leaders have direct contact with virtually every rural household. This is a massive grassroots network that can be mobilized for political messaging.
            </p>
          </div>
        </div>

        {/* Strategic Implications for Congress Women Outreach */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Strategic Implications for Congress Women Outreach</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h5 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Key Swing Bloc Identification</h5>
              <div className="space-y-2">
                {genderStrategicImplications.map((g) => (
                  <div key={g.number} className="flex items-start gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
                      {g.number}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{g.bloc}:</span>
                      <span className="ml-1 text-sm text-slate-600 dark:text-slate-400">{g.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-2">Recommended Congress Messaging Pillars</h5>
              <div className="space-y-2">
                {congressMessagingPillars.map((m, idx) => (
                  <div key={idx} className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{m.pillar}</div>
                    <div className="text-xs text-slate-500">{m.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Gaps & Verification Needs */}
        <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <h4 className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Data Gaps & Verification Needs</h4>
          <div className="grid gap-2 md:grid-cols-2">
            {genderDataGaps.map((g) => (
              <div key={g.dataPoint} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">{g.dataPoint}:</span>
                <div className="text-right">
                  <span className="font-medium text-orange-600">{g.status}</span>
                  <span className="ml-2 text-xs text-slate-500">({g.sourceNeeded})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jat Sikh Demographics Section */}
      <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">JS</span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Jat Sikh Demographics & Clan Structure</h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">MP1-Foundational | Core Community Analysis | 20-25% of Punjab Population</p>
          </div>
        </div>

        {/* Population Overview */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <MetricCard
            title="Jat Sikh Population"
            value="20-25%"
            subtitle="~6-8 million people"
            color="bg-amber-500"
          />
          <MetricCard
            title="Share of Sikhs"
            value="50-66%"
            subtitle="Of total Sikh population"
            color="bg-amber-600"
          />
          <MetricCard
            title="Rural Population Share"
            value="~35-40%"
            subtitle="Of rural Punjab"
            color="bg-orange-500"
          />
          <MetricCard
            title="Agricultural Land"
            value="80-95%"
            subtitle="Owned by Jat Sikhs"
            color="bg-green-600"
          />
        </div>

        {/* Regional Distribution */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Regional Distribution (117 Total Seats)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {regionalJatDistribution.map((region) => (
              <div key={region.region} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-amber-700 dark:text-amber-400">{region.region}</span>
                  <Badge variant={region.region === "Malwa" ? "warning" : "default"}>{region.assemblySeats} seats</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Concentration:</span>
                    <span className="font-medium">{region.jatSikhConcentration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Population %:</span>
                    <span className="font-medium">{region.concentrationPercent}</span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">{region.character}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Landholding Stratification */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Landholding Stratification</h4>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-slate-500">Critical Stat:</span>
              <span className="font-medium text-red-600">{smallFarmerStatistic.percentage}% of Punjab farmers own less than 5 acres</span>
            </div>
            <div className="space-y-3">
              {landholdingStratification.map((stratum) => {
                const pct = parseInt(stratum.shareOfJatSikhFarmers.replace(/[^0-9]/g, ""));
                const trendColors: Record<string, string> = {
                  DECLINING: "bg-red-500",
                  STABLE: "bg-blue-500",
                  GROWING: "bg-yellow-500",
                  GROWING_RAPIDLY: "bg-orange-500",
                };
                return (
                  <div key={stratum.category} className="flex items-center gap-3">
                    <div className="w-32 text-sm font-medium">{stratum.category}</div>
                    <div className="flex-1">
                      <ProgressBar
                        label={stratum.landholdingSize}
                        value={pct}
                        max={40}
                        color={trendColors[stratum.trend]}
                        showPercentage
                      />
                    </div>
                    <Badge variant={stratum.trend === "DECLINING" ? "danger" : stratum.trend === "GROWING_RAPIDLY" ? "warning" : "default"}>
                      {stratum.trend.replace("_", " ")}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agricultural Debt Crisis */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Agricultural Debt Crisis (2024-2026)</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {agriculturalDebtData.slice(0, 4).map((debt) => (
              <div key={debt.indicator} className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">{debt.indicator}</span>
                </div>
                <p className="mt-1 text-lg font-bold text-red-600 dark:text-red-300">{debt.figure}</p>
                <p className="text-xs text-slate-500">{debt.source}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm text-red-700 dark:text-red-300">
              <strong>Suicide Concentration:</strong> 97%+ in Malwa region (Joint study: Punjabi University/PAU/GNDU)
            </p>
          </div>
        </div>

        {/* Major Clans Table */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Major Jat Sikh Clans (Gotra) — {jatSikhClans.length} Clans Documented</h4>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-400">Clan</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-400">Rank</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-400">Primary Region</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-400">Notable Politicians</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {jatSikhClans.slice(0, 12).map((clan) => (
                  <tr key={clan.name} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                    <td className="px-3 py-2 font-medium text-slate-700 dark:text-slate-300">
                      {clan.name}
                      {clan.isAsalJat && <span className="ml-2 text-xs text-amber-600">*asal</span>}
                    </td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{clan.estimatedRank}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{clan.primaryRegion}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">
                      {clan.notablePoliticians.length > 0 ? clan.notablePoliticians.join(", ") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-1 text-xs text-slate-500">*asal = traditionally regarded as &quot;genuine Jats&quot; (Mann, Chahal, Bhullar)</p>
        </div>

        {/* Priority Constituency Clusters */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Congress Strategy: Priority Constituency Clusters</h4>
          <div className="space-y-3">
            {constituencyClusters.map((cluster) => (
              <div key={cluster.priority} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={cluster.priority === "Priority 1" ? "danger" : cluster.priority === "Priority 2" ? "warning" : "default"}>
                    {cluster.priority}
                  </Badge>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cluster.description}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cluster.seatGroups.map((group) => (
                    <span key={group} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Congress Strategy Points */}
        <div className="rounded-lg bg-amber-100 p-4 dark:bg-amber-900/40">
          <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">Congress 2027 Strategy Points</h4>
          <div className="grid gap-2 md:grid-cols-2">
            {congressStrategyPoints.slice(0, 4).map((strategy, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-400">{strategy.point}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{strategy.recommendation.substring(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Verification Status:</strong> {jatSikhPopulationData.verificationStatus} — Population estimates cross-referenced; clan distributions based on historical/ethnographic sources.
          </p>
        </div>
      </div>

      <div className="rounded-xl border-2 border-teal-500 bg-teal-50 p-6 dark:border-teal-700 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">P</span>
          <div>
            <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400">Punjab State Overview — Cycle 1 Research</h3>
            <p className="text-sm text-teal-600 dark:text-teal-400">3.14 Crore Population | 13 Municipal Corporations | TFR 1.6</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Total Population" value="3.14 Cr" subtitle="Census 2024 estimate" color="bg-teal-500" />
          <MetricCard title="SC Population" value="32%" subtitle="Highest in India — 34 reserved seats" color="bg-purple-500" />
          <MetricCard title="Total Fertility Rate" value="1.6" subtitle="Below replacement (2.1) — aging demographic" color="bg-orange-500" />
          <MetricCard title="Municipal Corporations" value="13" subtitle="Urban governance units" color="bg-blue-500" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Urban-Rural Split</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Urban:</span><span className="font-medium">37%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Rural:</span><span className="font-medium">63%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Gender Ratio:</span><span className="font-medium">895:1000</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Age Demographics</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Median Age:</span><span className="font-medium">28.4 years</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Working Age (15-59):</span><span className="font-medium">69.1%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Elderly 60+:</span><span className="font-medium">11.6%</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Electoral Basics</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Eligible Voters:</span><span className="font-medium">~2.25 Cr</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Polling Stations:</span><span className="font-medium">22,000-25,000</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Voters/Booth:</span><span className="font-medium">650-1,000</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-teal-100 p-3 dark:bg-teal-900/40">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            <strong>Key Insight:</strong> Punjab&apos;s demographic transition — low TFR (1.6), aging population, high SC proportion (32%) — creates unique electoral dynamics. Youth unemployment at 18.8% and groundwater crisis (157% extraction) drive voter dissatisfaction.
          </p>
        </div>
      </div>

      {/* CYCLE 6: INCOME STRATIFICATION UI */}
      <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Income Stratification & Economic Fragility</h3>
            <p className="text-sm text-amber-600 dark:text-amber-500">Punjab Income, Poverty & Economic Stratification — 19 May 2026</p>
          </div>
          <Badge variant="warning">Cycle 6 Data</Badge>
        </div>

        {/* Fragile Middle Class Highlight */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 p-4 dark:from-amber-900/40 dark:to-orange-900/40">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-amber-700 dark:text-amber-400">{fragileMiddleClass.percentageOfHouseholds}</span>
            <span className="text-lg font-semibold text-amber-600 dark:text-amber-500">of households</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">{fragileMiddleClass.incomeRange}</p>
          <p className="mt-1 text-xs text-amber-600 dark:text-amber-500">{fragileMiddleClass.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="warning">SWING VOTER POOL</Badge>
            <span className="text-xs text-amber-600 dark:text-amber-500">{fragileMiddleClass.politicalSignificance}</span>
          </div>
        </div>

        {/* Income Distribution Chart */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Monthly Household Income Distribution</h4>
          <div className="space-y-2">
            {incomeBands.map((band) => (
              <div key={band.band} className="flex items-center gap-3">
                <div className="w-36 text-xs font-medium text-slate-600 dark:text-slate-400">{band.band}</div>
                <div className="flex-1">
                  <ProgressBar label="" value={band.percentageNum} max={30} color="bg-amber-500" showPercentage />
                </div>
                <div className="w-24 text-xs text-slate-500">{band.typicalProfile.split(',')[0]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <MetricCard title="NFSA Beneficiaries" value="1.53 Cr" subtitle="Sep 2025" color="bg-amber-500" />
          <MetricCard title="Poverty Rate (Rural)" value="~5%" subtitle="Below national avg" color="bg-green-500" />
          <MetricCard title="Farm Debt/Victim" value="Rs 8.3L" subtitle="PAU/ISADP Study" color="bg-red-500" />
          <MetricCard title="Gini Coefficient" value="0.48" subtitle="High inequality" color="bg-purple-500" />
        </div>

        {/* Per Capita Consumption */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Monthly Per Capita Consumption (MPCE 2023-24)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {perCapitaConsumption.map((item) => (
              <div key={item.region} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="text-xs text-slate-500">{item.region}</div>
                <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{item.mpce}</div>
                <div className="text-xs text-slate-400">{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Land Holdings */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Land Holdings Distribution (Agriculture Census 2015-16)</h4>
          <div className="grid gap-3 md:grid-cols-5">
            {landHoldings.map((holding) => (
              <div key={holding.category} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="text-xs font-medium text-slate-500">{holding.category}</div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{holding.percentage}</div>
                <div className="text-xs text-slate-400">{holding.sizeRange}</div>
                <div className="mt-1 text-xs text-slate-500">{holding.holdings}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs text-red-600 dark:text-red-400">
              <strong>Critical:</strong> {landHoldingSummary.suicideFact}
            </p>
          </div>
        </div>

        {/* Farmer Suicide Data */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Farmer Suicide Crisis</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {farmerSuicideStats.map((stat) => (
              <div key={stat.period} className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <div className="text-xs text-slate-500">{stat.period}</div>
                <div className="text-xl font-bold text-red-600">{stat.suicides}</div>
                <div className="text-xs text-slate-500">{stat.districts}</div>
              </div>
            ))}
          </div>

          {/* District-wise Suicides */}
          <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h5 className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-400">District-wise Suicides (2000-2018)</h5>
            <div className="space-y-2">
              {districtSuicideData.map((data) => (
                <div key={data.district} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{data.district}</span>
                  <div className="flex items-center gap-2">
                    <ProgressBar label="" value={data.count} max={2506} color="bg-red-500" showPercentage={false} />
                    <span className="w-12 text-right text-sm font-medium text-red-600">{data.count.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-xs text-slate-500">
              <span>Victim demographics: {suicideDemographics.age19to35} aged 19-35 | {suicideDemographics.male} male | {suicideDemographics.illiterate} illiterate</span>
            </div>
          </div>
        </div>

        {/* Debt Metrics */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Agricultural Debt Profile</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h5 className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-400">Debt Metrics</h5>
              <div className="space-y-2">
                {debtMetrics.map((metric) => (
                  <div key={metric.metric} className="flex justify-between text-xs">
                    <span className="text-slate-500">{metric.metric}:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h5 className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-400">Debt Purpose Breakdown</h5>
              <div className="space-y-2">
                {debtPurpose.map((item) => (
                  <div key={item.purpose} className="flex justify-between text-xs">
                    <span className="text-slate-500 w-48 truncate">{item.purpose}:</span>
                    <span className="font-medium text-amber-600">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arthiya Credit Crisis */}
          <div className="mt-3 rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-orange-700 dark:text-orange-400">ARTHIYA (Informal Credit) Crisis</span>
              <Badge variant="warning">Critical</Badge>
            </div>
            <div className="grid gap-2 text-xs text-orange-600 dark:text-orange-400">
              <div>Interest Rate: <strong>{arthiyaCredit.interestRate}</strong> vs Institutional: {arthiyaCredit.institutionalRate}</div>
              <div>{arthiyaCredit.debtCollection}</div>
              <div className="text-red-600 dark:text-red-400">{arthiyaCredit.informalCreditImpact}</div>
            </div>
          </div>
        </div>

        {/* Caste-Income Correlation */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Caste-Income Correlation</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {casteIncomeCorrelation.map((data) => (
              <div key={data.caste} className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                <div className="text-xs text-slate-500">{data.caste}</div>
                <div className="text-lg font-bold text-purple-700 dark:text-purple-400">{data.annualIncome}</div>
                <div className="text-xs text-slate-500">{data.relativePosition}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
            <p className="text-xs text-purple-600 dark:text-purple-400">
              <strong>SC Population:</strong> {casteIncomeNote.scPopulation} | {casteIncomeNote.dalitEconomicDisadvantage} | Landlessness: {casteIncomeNote.landlessnessSC}
            </p>
          </div>
        </div>

        {/* Regional Anxiety Mapping */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Regional Economic Anxiety Mapping</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {regionalAnxiety.map((region) => (
              <div key={region.region} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{region.region}</div>
                <div className="mt-1 text-sm font-medium text-red-600">{region.primaryAnxiety}</div>
                <div className="mt-1 text-xs text-slate-500">{region.politicalImplication}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Economic Fears */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Primary Economic Fears (Ranked by Prevalence)</h4>
          <div className="space-y-2">
            {economicAnxieties.map((anxiety) => (
              <div key={anxiety.rank} className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  {anxiety.rank}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{anxiety.fear}</div>
                  <div className="text-xs text-slate-500">{anxiety.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NRI Remittance Economy */}
        <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-blue-700 dark:text-blue-400">NRI Remittance Economy</span>
            <Badge variant="info">Doaba</Badge>
          </div>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div>
              <span className="text-xs text-slate-500">Annual Remittances:</span>
              <span className="ml-2 font-bold text-blue-600 dark:text-blue-400">{nriRemittanceEconomy.estimatedAnnualRemittances}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500">Key Districts:</span>
              <span className="ml-2 text-blue-600 dark:text-blue-400">{nriRemittanceEconomy.districts}</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">{nriRemittanceEconomy.impact}</p>
        </div>

        {/* Strategic Implications for Congress */}
        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-900/20 dark:to-purple-900/20">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Strategic Implications for Congress Campaign</h4>
          <div className="space-y-2">
            {campaignStrategicImplications.map((item) => (
              <div key={item.number} className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                  {item.number}
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{item.issue}</div>
                  <div className="text-xs text-slate-500">{item.implication}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vulnerable Occupations & Unemployment Section */}
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
            Vulnerable Occupations & Unemployment (PLFS 2025)
          </h3>
          <Badge variant="warning">Critical Issue</Badge>
        </div>
        <p className="mb-6 text-sm text-red-700 dark:text-red-400">
          Youth unemployment, educated unemployment, informal labor, and religious occupations — key electoral demographics
        </p>

        {/* Key Unemployment Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Youth Unemployment (15-29)"
            value={`${overallUnemploymentData.youth.rate}%`}
            subtitle="Punjab vs National: 9.9%"
            color="bg-red-500"
          />
          <MetricCard
            title="Rural Unemployment"
            value={`${overallUnemploymentData.rural.rate}%`}
            subtitle="Exceeds urban (5.8%) — reverse of national pattern"
            color="bg-orange-500"
          />
          <MetricCard
            title="Female Youth Unemployment"
            value={`${youthUnemploymentByGenderData.find(g => g.area === "Overall")?.female}%`}
            subtitle="More than double male rate (13.6%)"
            color="bg-pink-500"
          />
          <MetricCard
            title="State Unemployment Bureau"
            value="1.23 Lakh"
            subtitle={`${unemploymentBureauData.registeredApplicants.toLocaleString()} applicants (Sep 2025)`}
            color="bg-purple-500"
          />
        </div>

        {/* Unemployment Breakdown */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Overall Unemployment Rates */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Overall Unemployment Rates (PLFS 2025)</h4>
            <div className="space-y-2">
              {[
                { label: "Overall (15+)", punjab: overallUnemploymentData.overall.rate, national: overallUnemploymentData.overall.national },
                { label: "Rural", punjab: overallUnemploymentData.rural.rate, national: overallUnemploymentData.rural.national },
                { label: "Urban", punjab: overallUnemploymentData.urban.rate, national: overallUnemploymentData.urban.national },
                { label: "Youth (15-29)", punjab: overallUnemploymentData.youth.rate, national: overallUnemploymentData.youth.national },
                { label: "Rural Youth", punjab: overallUnemploymentData.ruralYouth.rate, national: overallUnemploymentData.ruralYouth.national },
                { label: "Urban Youth", punjab: overallUnemploymentData.urbanYouth.rate, national: overallUnemploymentData.urbanYouth.national },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  <div className="flex gap-2">
                    <span className="font-semibold text-red-600">{item.punjab}%</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-500">{item.national}% (Nat.)</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded bg-red-50 p-2 text-xs text-red-600 dark:bg-red-900/30 dark:text-red-400">
              Key Finding: Punjab&apos;s rural unemployment (7.4%) exceeds urban (5.8%), reverse of national pattern
            </div>
          </div>

          {/* Educated Unemployment */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Educated Unemployment (PLFS 2025)</h4>
            <div className="space-y-2">
              {educatedUnemploymentData.map((item) => (
                <div key={item.level} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">{item.level}</span>
                  <span className={`font-semibold ${item.rate > 10 ? "text-red-600" : "text-orange-500"}`}>
                    {item.rate}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded bg-orange-50 p-2 text-xs text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              Critical: Higher secondary (13.8%) and Graduate (11.6%) unemployment are highest
            </div>
          </div>
        </div>

        {/* Youth Unemployment by Gender */}
        <div className="mt-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Youth Unemployment by Gender (15-29, PLFS 2025)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {youthUnemploymentByGenderData.map((item) => (
              <div key={item.area} className="rounded-lg bg-pink-50 p-3 dark:bg-pink-900/20">
                <div className="text-xs text-slate-500">{item.area}</div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-slate-500">Male</div>
                    <div className="text-lg font-bold text-blue-600">{item.male}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Female</div>
                    <div className="text-lg font-bold text-pink-600">{item.female}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Total</div>
                    <div className="text-lg font-bold text-slate-600">{item.total}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded bg-pink-50 p-2 text-xs text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
            Female youth unemployment at 27.7% is more than double the male rate and 2.5x the national female rate (11.3%)
          </div>
        </div>

        {/* Distress Migration & Brain Drain */}
        <div className="mt-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-300">Distress Migration & Brain Drain</h4>
            <Badge variant="warning">Critical</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Farmers not wanting children in agriculture</span>
                <span className="font-bold text-orange-600">{distressMigrationData.farmersNotWantingChildrenInAgriculture}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Punjab annual growth (2014-23)</span>
                <span className="font-bold text-orange-600">{distressMigrationData.annualGrowthPunjab}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">National average growth</span>
                <span className="text-slate-500">{distressMigrationData.annualGrowthNational}%</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Industrial units shut down (2007-14)</span>
                <span className="font-bold text-red-600">{distressMigrationData.industrialUnitsShutDown.toLocaleString()}</span>
              </div>
              <div className="text-xs text-slate-500">Push factors: {distressMigrationData.pushFactors.join(", ")}</div>
            </div>
          </div>
        </div>

        {/* Discouraged Workers & Non-Working Population */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Discouraged Workers & NEET</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Labour Force Participation Rate</span>
                <span className="font-semibold">{discouragedWorkersData.lfpr}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">National LFPR</span>
                <span className="text-slate-500">{discouragedWorkersData.lfprNational}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Worker Population Ratio</span>
                <span className="font-semibold text-red-600">{discouragedWorkersData.wpr}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">National WPR</span>
                <span className="text-slate-500">{discouragedWorkersData.wprNational}%</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Non-Working Population</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start justify-between">
                <span className="text-slate-600 dark:text-slate-400">Homemakers</span>
                <span className="text-right font-semibold">{nonWorkingPopulationData.homemakers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Population 60+</span>
                <span className="font-semibold">{nonWorkingPopulationData.population60Plus}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Pension burden</span>
                <span className="text-red-600">{nonWorkingPopulationData.pensionBurden}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Disabled</span>
                <span className="font-semibold">{nonWorkingPopulationData.disabled}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vulnerable Occupations */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Vulnerable & Informal Occupations</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {vulnerableOccupationsData.map((occ) => (
              <div key={occ.category} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{occ.category}</div>
                    <div className="text-xs text-slate-500">{occ.demographics || occ.location}</div>
                  </div>
                  <Badge variant="warning">{occ.estimate}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Religious Occupations */}
        <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Religious Occupations</h4>
            <Badge variant="info">Opinion Makers</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">SGPC Religious Workers</div>
              <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Total SGPC Staff</span>
                  <span className="font-semibold">{religiousOccupationsData.sgpc.totalStaff.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Golden Temple</span>
                  <span className="font-semibold">{religiousOccupationsData.sgpc.goldenTempleStaff.toLocaleString()}</span>
                </div>
                <div className="mt-2 text-slate-500">
                  Functionaries: {religiousOccupationsData.sgpc.keyFunctionaries.join(", ")}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Total Religious Workers Estimate</div>
              <div className="mt-2 text-center">
                <div className="text-2xl font-bold text-purple-600">{religiousOccupationsData.gurdwaraEstimate}</div>
                <div className="text-xs text-slate-500">Including SGPC and non-SGPC gurdwaras</div>
              </div>
            </div>
          </div>
        </div>

        {/* Political Significance for Congress */}
        <div className="mt-6 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 p-4 dark:from-red-900/20 dark:to-orange-900/20">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Political Significance for Congress</h4>
          <div className="space-y-3">
            {vulnerablePoliticalSignificance.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.bloc}</div>
                  <div className="text-xs text-slate-500">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* HINDUISM & INTERFAITH DYNAMICS */}
        {/* ========================================== */}

        {/* Hindu Population Overview */}
        <div className="mb-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
          <h3 className="mb-3 text-lg font-semibold text-orange-700 dark:text-orange-400">
            Hinduism & Interfaith Dynamics
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Hindu Population</div>
              <div className="text-2xl font-bold text-orange-600">{hinduPopulationOverview.percentageOfState}</div>
              <div className="text-xs text-slate-500">~{hinduPopulationOverview.estimatedPopulation}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Hindu Dalits</div>
              <div className="text-2xl font-bold text-orange-600">{hinduDalitData.populationPercentage}</div>
              <div className="text-xs text-slate-500">of Punjab population</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">SC Reserved Seats</div>
              <div className="text-2xl font-bold text-orange-600">{hinduDalitData.reservedSeats}</div>
              <div className="text-xs text-slate-500">of {hinduDalitData.totalSeats} total seats</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">RSS Shakhas</div>
              <div className="text-2xl font-bold text-orange-600">1,000-1,200</div>
              <div className="text-xs text-slate-500">across Punjab</div>
            </div>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Hindu Regional Distribution</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {hinduPopulationOverview.regionalDistribution.map((region) => (
              <div key={region.region} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-600">{region.region}</span>
                  <Badge variant="warning">{region.seats} seats</Badge>
                </div>
                <div className="mt-2 text-xs text-slate-500">Hindu share: {region.hinduShare}</div>
                <div className="mt-1 text-xs text-slate-400">Key: {region.keyDistricts.join(", ")}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hindu Traditions */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Hindu Religious Traditions</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <h5 className="text-xs font-semibold text-orange-600">Arya Samaj</h5>
              <p className="mt-1 text-xs text-slate-500">{aryaSamajData.founder}, {aryaSamajData.founded}</p>
              <div className="mt-2 space-y-1">
                <div className="text-xs"><span className="font-medium">DAV Network:</span> {aryaSamajData.davNetwork.colleges} colleges, {aryaSamajData.davNetwork.schools}</div>
                <div className="text-xs"><span className="font-medium">Political:</span> {aryaSamajData.politicalAlignment}</div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <h5 className="text-xs font-semibold text-orange-600">Sanatan Dharma</h5>
              <p className="mt-1 text-xs text-slate-500">{sanatanDharmaData.description}</p>
              <div className="mt-2 text-xs text-slate-400">{sanatanDharmaData.keyCharacteristics[0]}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <h5 className="text-xs font-semibold text-orange-600">ISKCON</h5>
              <p className="mt-1 text-xs text-slate-500">Temples: {iskconData.temples.length}</p>
              <div className="mt-2 text-xs text-slate-400">Growing youth engagement in Malwa</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <h5 className="text-xs font-semibold text-orange-600">Dev Samaj</h5>
              <p className="mt-1 text-xs text-slate-500">{devSamajData.founder}, {devSamajData.founded}</p>
              <div className="mt-2 text-xs text-slate-400">HQ: {devSamajData.headquarters}</div>
            </div>
          </div>
        </div>

        {/* RSS District Density */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">RSS Shakha Density by District Cluster</h4>
          <div className="space-y-2">
            {rssDistrictDensity.map((cluster) => (
              <div key={cluster.districtCluster} className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cluster.districtCluster}</span>
                  <span className="ml-2 text-xs text-slate-400">({cluster.estimatedShakhas} shakhas)</span>
                </div>
                <Badge variant={cluster.strength.includes("Strongest") || cluster.strength.includes("Strong") ? "danger" : "default"}>
                  {cluster.strength}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* RSS Victory Plan 2026 */}
        <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold text-red-700 dark:text-red-400">RSS Punjab Victory Plan 2026</h4>
            <Badge variant="danger">Threat</Badge>
          </div>
          <div className="space-y-2">
            {rssVictoryPlan2026.fivePointStrategy.map((point) => (
              <div key={point.number} className="flex items-start gap-2 rounded bg-white p-2 shadow-sm dark:bg-slate-800">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {point.number}
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{point.name}</div>
                  <div className="text-xs text-slate-500">{point.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hindu Dalit Voting Pattern */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Hindu Dalit Voting Pattern (2022)</h4>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b text-slate-500">
                  <th className="pb-2 text-left">Party</th>
                  <th className="pb-2 text-right">Dalit Sikh</th>
                  <th className="pb-2 text-right">Dalit Hindu</th>
                </tr>
              </thead>
              <tbody>
                {hinduDalitVoting2022.map((row) => (
                  <tr key={row.party} className="border-b last:border-0">
                    <td className="py-2 font-medium">{row.party}</td>
                    <td className="py-2 text-right">{row.dalitSikhVote}</td>
                    <td className="py-2 text-right">{row.dalitHinduVote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Hindu Mobilisation Issues */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Key Hindu Mobilisation Issues</h4>
          <div className="space-y-2">
            {hinduMobilizationIssues.map((issue) => (
              <div key={issue.issue} className="flex items-start justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{issue.issue}</div>
                  <div className="mt-1 text-xs text-slate-500">{issue.sentiment}</div>
                  <div className="mt-1 text-xs text-slate-400">{issue.politicalImpact}</div>
                </div>
                <Badge variant={issue.salience === "High" ? "danger" : issue.salience === "Moderate" ? "warning" : "default"}>
                  {issue.salience}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Major Temples */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Major Hindu Temples & Pilgrimage Sites</h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {majorTemplesData.slice(0, 6).map((temple) => (
              <div key={temple.name} className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <div className="text-xs font-semibold text-orange-600">{temple.name}</div>
                <div className="text-xs text-slate-500">{temple.location} | {temple.deity}</div>
                <div className="mt-1 text-xs text-slate-400">{temple.constituencyRelevance}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Shared Sacred Calendar - Sikh-Hindu Syncretism */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Shared Sacred Calendar (Sikh-Hindu Syncretism)</h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {sharedSacredCalendar.map((item) => (
              <div key={item.occasion} className="flex items-center gap-2 rounded-lg bg-purple-50 p-2 dark:bg-purple-900/20">
                <span className="text-sm font-medium text-purple-700 dark:text-purple-400">{item.occasion}</span>
                <span className="text-xs text-slate-500">{item.sharedParticipation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Potential Flashpoints */}
        <div className="mb-6 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <h4 className="mb-2 text-xs font-semibold text-amber-700 dark:text-amber-400">Potential Hindu-Sikh Flashpoints</h4>
          <div className="space-y-2">
            {potentialFlashpoints.map((point, idx) => (
              <div key={idx} className="text-xs">
                <span className="font-medium text-amber-700 dark:text-amber-400">{point.issue}:</span>
                <span className="ml-1 text-amber-600 dark:text-amber-500"> {point.risk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Implications for Congress */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-50 to-orange-50 p-4 dark:from-blue-900/20 dark:to-orange-900/20">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Strategic Implications for Congress</h4>
          <div className="space-y-2">
            {strategicImplicationsForCongress.map((item) => (
              <div key={item.number} className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                  {item.number}
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{item.implication}</div>
                  <div className="mt-1 text-xs text-blue-600 dark:text-blue-400">{item.strategicValue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CYCLE 4: EDUCATION & DIGITAL ACCESS SECTION */}
      <div className="rounded-xl border-2 border-cyan-500 bg-cyan-50 p-6 dark:border-cyan-700 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">E</span>
          <div>
            <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">Education & Digital Access Intelligence</h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">Literacy, School Infrastructure, Digital Penetration & Social Media</p>
          </div>
          <Badge variant="info">MP1-Foundational</Badge>
        </div>

        {/* Key Education Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Overall Literacy"
            value="~83-85%"
            subtitle="2024-25 projection (Census 2011: 76.7%)"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Female Literacy"
            value="~76-78%"
            subtitle="Narrowing gap from 10pp (2011) to ~4-6pp (2025)"
            change={7.1}
            trend="up"
            color="bg-pink-500"
          />
          <MetricCard
            title="SC Enrolment Share"
            value="36.1%"
            subtitle="Highest of any Indian state"
            color="bg-orange-500"
          />
          <MetricCard
            title="Female Teachers"
            value="76.6%"
            subtitle="Highest in India"
            color="bg-purple-500"
          />
        </div>

        {/* Literacy Rates Table */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Literacy Rates (Census 2011 vs Estimated 2024-25)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Metric</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Census 2011</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Est. 2024-25</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {educationDigitalData.literacyRates.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 font-medium text-slate-700 dark:text-slate-300">{row.metric}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{row.census2011}</td>
                    <td className="px-3 py-2 text-cyan-600 dark:text-cyan-400">{row.estimated2024_25}</td>
                    <td className="px-3 py-2 text-slate-500">{row.note || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* School Infrastructure Grid */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {/* Infrastructure Metrics */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">School Infrastructure (UDISE+ 2024-25)</h4>
            <div className="space-y-2">
              {educationDigitalData.schoolInfrastructure.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">{item.indicator}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-cyan-600 dark:text-cyan-400">{item.punjab}</span>
                    {item.nationalAverage !== "—" && (
                      <span className="text-slate-400">vs {item.nationalAverage}</span>
                    )}
                    {item.note && (
                      <Badge variant="success" className="text-[10px]">{item.note}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GER and Dropout */}
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Gross Enrolment Ratio (GER)</h4>
              <div className="space-y-3">
                {educationDigitalData.gerData.map((item, idx) => (
                  <div key={idx}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{item.level}</span>
                      <span className="font-medium text-cyan-600 dark:text-cyan-400">{item.punjab} <span className="text-slate-400">vs {item.national}</span></span>
                    </div>
                    <ProgressBar
                      label=""
                      value={parseFloat(item.punjab)}
                      color="bg-cyan-500"
                      showPercentage={false}
                      maxValue={120}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Dropout Rates</h4>
              <div className="space-y-2 text-xs">
                {educationDigitalData.dropoutData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">{item.level}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${parseFloat(item.punjab) > parseFloat(item.national) ? "text-red-600" : "text-green-600"}`}>
                        {item.punjab}
                      </span>
                      <span className="text-slate-400">vs {item.national}</span>
                      {item.note && <Badge variant="warning" className="text-[10px]">{item.note}</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Digital Access Section */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
          <h4 className="mb-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">Digital Access & Internet Penetration</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">~77/100</div>
              <div className="text-xs text-slate-500">Internet subscribers per 100 (Punjab)</div>
              <div className="text-xs text-slate-400">vs ~72/100 national average</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">~42.5/100</div>
              <div className="text-xs text-slate-500">Rural internet subscribers per 100</div>
              <div className="text-xs text-red-500">Stark rural-urban digital divide</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">65-70%</div>
              <div className="text-xs text-slate-500">Smartphone penetration</div>
              <div className="text-xs text-slate-400">Estimated household penetration</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">99.0%</div>
              <div className="text-xs text-slate-500">School computer access</div>
              <div className="text-xs text-slate-400">vs ~65% nationally (HIGHEST)</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">88.9%</div>
              <div className="text-xs text-slate-500">School internet connectivity</div>
              <div className="text-xs text-slate-400">vs ~55% nationally (HIGHEST)</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-lg font-bold text-pink-600 dark:text-pink-400">85%</div>
              <div className="text-xs text-slate-500">Rural children smartphone access</div>
              <div className="text-xs text-slate-400">ASER data, Feb 2026</div>
            </div>
          </div>
        </div>

        {/* Digital Literacy Tiers */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Digital Literacy Tiers (Estimated Punjab Population)</h4>
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {educationDigitalData.digitalLiteracyTiers.map((tier, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400">{tier.tier}</div>
                <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{tier.description}</div>
                <div className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-200">{tier.estimatedPct}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Note: Tiers estimated from national patterns and Punjab-specific data points. VERIFICATION_NEEDED for state-specific figures.</p>
        </div>

        {/* Social Media Platform Penetration */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Social Media Platform Penetration (India vs Punjab Estimates)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Platform</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">India MAU</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Favorite %</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Punjab Estimate</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-500">Key Demographic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {educationDigitalData.socialMediaPlatforms.map((platform, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 font-medium text-slate-700 dark:text-slate-300">{platform.platform}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{platform.indiaMAU}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{platform.favoritePct}</td>
                    <td className="px-3 py-2 font-medium text-cyan-600 dark:text-cyan-400">{platform.punjabEstimate}</td>
                    <td className="px-3 py-2 text-slate-500">{platform.demographic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">Source: Meltwater/We Are Social, Digital 2025 India; DataReportal. Punjab estimates are projections adjusted for above-average income and NRI connectivity.</p>
        </div>

        {/* Network Coverage & Dark Zones */}
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">4G/5G Coverage</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-600">4G:</span>
                <span className="text-slate-600 dark:text-slate-400">{networkCoverage.coverage}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-green-600">5G:</span>
                <span className="text-slate-600 dark:text-slate-400">{networkCoverage.fiveG}</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">Potential Dark Zones</h4>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              {networkCoverage.darkZones.map((zone, idx) => (
                <div key={idx}>• {zone}</div>
              ))}
            </div>
          </div>
        </div>

        {/* SC Education Metrics */}
        <div className="mb-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
          <h4 className="mb-3 text-sm font-semibold text-orange-700 dark:text-orange-400">SC Education Metrics</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-2xl font-bold text-orange-600">{scEducationMetrics.scPopulationShare}</div>
              <div className="text-xs text-slate-500">SC Population Share</div>
              <div className="text-xs text-slate-400">Highest in India</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-2xl font-bold text-orange-600">{scEducationMetrics.scPrimaryGER}</div>
              <div className="text-xs text-slate-500">SC Primary GER</div>
              <div className="text-xs text-green-500">Near-universal access</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-2xl font-bold text-orange-600">{scEducationMetrics.scSecondaryGER}</div>
              <div className="text-xs text-slate-500">SC Secondary GER</div>
              <div className="text-xs text-slate-400">Strong progression</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-2xl font-bold text-orange-600">{scEducationMetrics.scHSGER}</div>
              <div className="text-xs text-slate-500">SC HS GER</div>
              <div className="text-xs text-slate-400">Highest SC share in India</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-orange-600 dark:text-orange-400">Source: UDISE+ 2024-25 analysis by Prof. Arun C. Mehta (educationforallinindia.com, Feb 2026)</p>
        </div>

        {/* ========================================== */}
        {/* SIKHISM INTERNAL TAXONOMY */}
        {/* Derived from: research-M2/MP1-foundational/demographics/sikhism-internal.md */}
        {/* ========================================== */}

        {/* Sikh Population Overview */}
        <div className="mb-6 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
          <h3 className="mb-3 text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            Sikhism Internal Dynamics
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Sikh Population (2011)</div>
              <div className="text-2xl font-bold text-emerald-600">{sikhPopulationData.census2011.percentage}%</div>
              <div className="text-xs text-slate-500">of Punjab population</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Sikh Population (2025 Est)</div>
              <div className="text-2xl font-bold text-emerald-600">{sikhPopulationData.currentEstimates2025.percentage}</div>
              <div className="text-xs text-slate-500">Estimated range</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">SGPC Budget</div>
              <div className="text-2xl font-bold text-emerald-600">Rs {sgpcData.structure.annualBudgetCrore} Cr</div>
              <div className="text-xs text-slate-500">Annual budget</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">SGPC Election</div>
              <div className="text-2xl font-bold text-red-600">{sgpcData.electionStatus.yearsOverdue} Yrs</div>
              <div className="text-xs text-slate-500">Overdue since {sgpcData.electionStatus.lastElection}</div>
            </div>
          </div>
        </div>

        {/* Sikh Observance Tiers */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Sikh Identity Tiers (Observance Levels)</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {observanceTiers.map((tier) => (
              <div key={tier.type} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">{tier.type}</span>
                  <Badge variant="success">{tier.percentage}</Badge>
                </div>
                <p className="mt-2 text-xs text-slate-500">{tier.definition}</p>
                <div className="mt-3 border-t border-slate-200 pt-2 dark:border-slate-700">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Political Behavior:</p>
                  <p className="mt-1 text-xs text-slate-500">{tier.politicalBehavior}</p>
                </div>
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{tier.electoralSignificance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Major Sects & Influential Groups */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Major Sikh Sects &amp; Sampardas</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">Damdami Taksal</span>
                <Badge variant="info">Most Political</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">HQ: {damdamiTaksalData.headquarters.location}, {damdamiTaksalData.headquarters.district}</p>
              <p className="mt-1 text-xs text-slate-500">Head: {damdamiTaksalData.currentHead}</p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">Risk: {damdamiTaksalData.congressRisk}</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">Namdhari (Kuka)</span>
                <Badge variant="success">~200-300K</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">HQ: {namdhariData.headquarters.location}, {namdhariData.headquarters.district}</p>
              <p className="mt-1 text-xs text-slate-500">Belief: {namdhariData.belief}</p>
              <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">Opportunity: {namdhariData.congressOpportunity}</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">Radha Soami (Beas)</span>
                <Badge variant="success">Millions</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">HQ: {radhaSoamiData.headquarters.location}, {radhaSoamiData.headquarters.district}</p>
              <p className="mt-1 text-xs text-slate-500">Nature: {radhaSoamiData.nature}</p>
              <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">Opportunity: {radhaSoamiData.congressOpportunity}</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">Nihang Sikhs</span>
                <Badge variant="warning">Cultural</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">Factions: {nihangData.factions?.join(", ")}</p>
              <p className="mt-1 text-xs text-slate-500">Region: Primarily Majha & Anandpur Sahib</p>
              <p className="mt-2 text-xs text-slate-500">Congress: {nihangData.congressNote}</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-red-600">Nirankari</span>
                <Badge variant="danger">Heretical</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">HQ: {nirankariData.headquarters.location}</p>
              <p className="mt-1 text-xs text-red-500">1978 clash: 13 Sikhs killed</p>
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">Risk: {nirankariData.congressRisk}</p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">Akhand Kirtani Jatha</span>
                <Badge variant="info">Small</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-500">Influence: {akjData.influence.regions.join(", ")}</p>
              <p className="mt-1 text-xs text-slate-500">Pockets: {akjData.influence.constituencies.join(", ")}</p>
              <p className="mt-2 text-xs text-slate-500">Behavior: {akjData.politicalBehavior}</p>
            </div>
          </div>
        </div>

        {/* Key Sikh Institutions */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Key Sikh Institutions</h4>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-400">Akal Takht</h5>
              <div className="mt-2 space-y-1 text-xs">
                <p><span className="font-medium">Current Jathedar:</span> {akalTakhtData.currentJathedar}</p>
                {akalTakhtData.actingJathedar && (
                  <p><span className="font-medium">Acting Jathedar:</span> {akalTakhtData.actingJathedar}</p>
                )}
                {akalTakhtData.recentAction && (
                  <div className="mt-2 rounded bg-red-100 p-2 dark:bg-red-900/40">
                    <p className="font-medium text-red-700 dark:text-red-400">Dec 2024 Action:</p>
                    <p className="text-red-600 dark:text-red-300">Tankhah on {akalTakhtData.recentAction.target}</p>
                    <p className="text-red-500">{akalTakhtData.recentAction.reasons.slice(0, 2).join("; ")}...</p>
                  </div>
                )}
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-400">SGPC Structure</h5>
              <div className="mt-2 space-y-1 text-xs">
                <p><span className="font-medium">Elected Members:</span> {sgpcData.structure.electedMembers}</p>
                <p><span className="font-medium">Nominated:</span> {sgpcData.structure.nominatedMembers}</p>
                <p><span className="font-medium">Takht Jathedars:</span> {sgpcData.structure.takhtJathedars}</p>
                <p><span className="font-medium">Keshdhari Voters:</span> {(sgpcData.voterRegistration.keshdhariVoters / 1000000).toFixed(1)}M</p>
                <p className="mt-2 text-amber-600">{sgpcData.keyTension}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Political Issues */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Critical Political Issues</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <h5 className="text-sm font-semibold text-red-700 dark:text-red-400">2015 Sacrilege (Bargari)</h5>
              <p className="mt-1 text-xs text-slate-500">{sacrilegeIssue["2015Bargari"].description}</p>
              <p className="mt-1 text-xs text-slate-500">Location: {sacrilegeIssue["2015Bargari"].location}, {sacrilegeIssue["2015Bargari"].district}</p>
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">{sacrilegeIssue.congressPositioning}</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <h5 className="text-sm font-semibold text-orange-700 dark:text-orange-400">1984 Anti-Sikh Riots</h5>
              <p className="mt-1 text-xs text-slate-500">Killed: {riots1984Issue.killings}</p>
              <p className="mt-1 text-xs text-slate-500">Liability: {riots1984Issue.congressLiability[0]}</p>
              <p className="mt-2 text-xs text-orange-600 dark:text-orange-400">{riots1984Issue.congressStrategy}</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <h5 className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">Bandi Singh Prisoners</h5>
              <p className="mt-1 text-xs text-slate-500">{bandiSinghIssue.description}</p>
              <p className="mt-1 text-xs text-slate-500">Key: {bandiSinghIssue.keyPrisoners[0].name} ({bandiSinghIssue.keyPrisoners[0].status})</p>
              <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{bandiSinghIssue.congressPositioning}</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-400">Khalistan</h5>
              <p className="mt-1 text-xs text-slate-500">Reality: {khalistanIssue.realityCheck}</p>
              <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">Positioning: {khalistanIssue.congressPositioning}</p>
            </div>
          </div>
        </div>

        {/* Sect-Constituency Mapping */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Sect-Constituency Influence Mapping</h4>
          <div className="overflow-x-auto rounded-lg bg-white shadow-sm dark:bg-slate-800">
            <table className="min-w-full text-xs">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-300">Constituency Belt</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-300">Dominant Sect</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-600 dark:text-slate-300">Lean</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {sectConstituencyMapping.slice(0, 8).map((mapping, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 font-medium text-slate-700 dark:text-slate-300">{mapping.constituencyBelt}</td>
                    <td className="px-3 py-2 text-slate-500">{mapping.dominantSect}</td>
                    <td className="px-3 py-2">
                      <Badge
                        variant={
                          mapping.politicalLean === "Panthic"
                            ? "danger"
                            : mapping.politicalLean === "Swing"
                            ? "warning"
                            : mapping.politicalLean === "Dera-influenced"
                            ? "info"
                            : "default"
                        }
                      >
                        {mapping.politicalLean}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Congress Strategic Summary */}
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
            <h4 className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              Congress Opportunities ({strategicSummary.opportunities.length})
            </h4>
            <div className="space-y-2">
              {strategicSummary.opportunities.slice(0, 4).map((opp) => (
                <div key={opp.number} className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    {opp.number}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{opp.title}</p>
                    <p className="text-xs text-slate-500">{opp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
              Congress Risks ({strategicSummary.risks.length})
            </h4>
            <div className="space-y-2">
              {strategicSummary.risks.slice(0, 4).map((risk) => (
                <div key={risk.number} className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {risk.number}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{risk.title}</p>
                    <p className="text-xs text-slate-500">{risk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Recommendations */}
        <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:from-amber-900/20 dark:to-orange-900/20">
          <h4 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">Top 3 Actionable Recommendations</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {strategicSummary.topRecommendations.map((rec) => (
              <div key={rec.number} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                  {rec.number}
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{rec.action}</p>
                  <p className="mt-1 text-xs text-slate-500">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Strategic Implications */}
        <div className="rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 p-4 dark:from-purple-900/20 dark:to-indigo-900/20">
          <h4 className="mb-3 text-sm font-semibold text-purple-700 dark:text-purple-400">Strategic Implications for Congress Campaign</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {campaignImplications.map((item) => (
              <div key={item.number} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                  {item.number}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* SYNTHESIS INTELLIGENCE SECTION */}
        {/* Derived from: s1-s4 synthesis MD files */}
        {/* ========================================== */}

        {/* Synthesis Overview */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
          <h3 className="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-400">
            Synthesis Intelligence Overview
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Documents Validated</div>
              <div className="text-2xl font-bold text-indigo-600">{crossReferenceValidation.documentsReviewed.total}</div>
              <div className="text-xs text-slate-400">Track A: {crossReferenceValidation.documentsReviewed.trackA} + Track B: {crossReferenceValidation.documentsReviewed.trackB}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Quality Pass Rate</div>
              <div className="text-2xl font-bold text-green-600">{qualityValidation.passRate}%</div>
              <div className="text-xs text-slate-400">{qualityValidation.overallAssessment}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Critical Gap Categories</div>
              <div className="text-2xl font-bold text-red-600">{gapAnalysis.categoryGapAnalysis.filter(c => c.coverageRating === "CRITICAL_GAP").length}</div>
              <div className="text-xs text-slate-400">Require immediate attention</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Corroborated Findings</div>
              <div className="text-2xl font-bold text-green-600">{crossReferenceValidation.corroboratedFindings.length}</div>
              <div className="text-xs text-slate-400">Cross-validated</div>
            </div>
          </div>
        </div>

        {/* Demographics Synthesis Metrics */}
        <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Demographics Key Metrics (Synthesized from s1 Cross-Reference)
          </h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {KEY_SYNTHESIS_METRICS
              .filter(m => m.category === "Demographics")
              .map((metric) => (
                <div key={metric.id} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-700">
                  <div className="flex flex-col items-center">
                    <span className={`h-2 w-2 rounded-full ${
                      metric.status === "CORROBORATED" ? "bg-green-500" :
                      metric.status === "PARTIAL" ? "bg-yellow-500" : "bg-red-500"
                    }`}></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500">{metric.metric}</div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{metric.value}</div>
                    <div className="text-xs text-slate-400">Source: {metric.source}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Demographics Gap Analysis */}
        <div className="mb-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
            Demographics Gap Analysis (s4)
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Coverage Rating</div>
              <div className="text-xl font-bold text-amber-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.coverageRating || "N/A"}
              </div>
              <div className="text-xs text-slate-400">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.coveragePercent || 0}% framework coverage
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Documents in Category</div>
              <div className="text-xl font-bold text-indigo-600">
                Track A: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.trackAFiles || 0} /
                Track B: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.trackBFiles || 0}
              </div>
              <div className="text-xs text-slate-400">Framework sections: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.frameworkSections || 0}</div>
            </div>
          </div>
          {/* Missing Sections */}
          {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.missingSections && (
            <div className="mt-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Missing Sections:</div>
              <div className="flex flex-wrap gap-2">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Demography")?.missingSections.map((gap, idx) => (
                  <span key={idx} className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    gap.severity === "CRITICAL" ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400" :
                    gap.severity === "HIGH" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400" :
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"
                  }`}>
                    {gap.section}: {gap.description} ({gap.severity})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quality Validation Summary */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
            Quality Validation Summary (s3)
          </h4>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackASummary.high}/{qualityValidation.trackASummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A MEDIUM</div>
              <div className="text-xl font-bold text-yellow-600">{qualityValidation.trackASummary.medium}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track B HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackBSummary.high}/{qualityValidation.trackBSummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Best Practice Docs</div>
              <div className="text-xl font-bold text-indigo-600">{qualityValidation.bestPracticesDocuments.length}</div>
            </div>
          </div>
        </div>

        {/* Tier 1 Critical Gaps */}
        <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
            Tier 1 Critical Gaps (Require Immediate Remediation)
          </h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {gapAnalysis.tier1Gaps.map((gap, idx) => (
              <div key={idx} className="flex items-start gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{gap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500">
            <strong>Sources:</strong> UDISE+ 2024-25 (Prof. Arun C. Mehta); ASER 2024 (Pratham); TRAI QPIR Jan 2025; Meltwater/We Are Social Digital 2025 India; Census 2011; CEIC Data Mar 2026; LinkedIn/Saad Sahil (Feb 2026)
          </p>
          <p className="mt-1 text-xs text-slate-500">
            <strong>Synthesis Sources:</strong> s1-cross-reference-validation.md (68 docs); s2-master-index.md (67 docs); s3-quality-validation.md (97% pass rate); s4-gap-analysis.md (405-section framework)
          </p>
          <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
            <strong>Note:</strong> Data gaps marked VERIFICATION_NEEDED should be confirmed with NSO surveys, state-specific TRAI data, and Census 2025 when available.
          </p>
        </div>
      </div>
    </div>
  );
}
