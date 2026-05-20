"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { CASTE_CATEGORIES, REGIONS, POLITICAL_ANATOMY } from "@/lib/constants";

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

export default function DemographyPage() {
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
          Buddhist 33,237, Jain 45,040. Muslim population collapsed from 38.4% (1941) to 1.93% (2011) — Partition's massive impact. 165 mosques, 948 churches with 65,000 pastors.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">33,237</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Buddhist</div>
            <div className="text-xs text-red-600 dark:text-red-300">0.12% — border districts</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">45,040</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Jain</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">0.16% — urban trading</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">165</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Mosques</div>
            <div className="text-xs text-green-600 dark:text-green-300">Built/restored</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">948</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Churches</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">65,000 pastors</div>
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
            <span className="font-semibold">Christian Growth:</span> 948 churches, 65,000 pastors — driven by Dalit conversions (Valmiki, Mazhabi Sikh). Gurdaspur district highest at 7.7% Christian. <span className="font-semibold text-blue-700 dark:text-blue-400">Mosques concentrated in Malerkotla (68% Muslim).</span>
          </p>
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
            <strong>Key Insight:</strong> Punjab's demographic transition — low TFR (1.6), aging population, high SC proportion (32%) — creates unique electoral dynamics. Youth unemployment at 18.8% and groundwater crisis (157% extraction) drive voter dissatisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
