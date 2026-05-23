"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, AlertTriangle, Home } from "lucide-react";

/**
 * Demography - Income Section
 * Income stratification, economic fragility, poverty, land holdings, farmer suicides
 */

// Type definitions
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

interface OverallUnemploymentData {
  overall: { rate: number; national: number };
  rural: { rate: number; national: number };
  urban: { rate: number; national: number };
  youth: { rate: number; national: number };
  ruralYouth: { rate: number; national: number };
  urbanYouth: { rate: number; national: number };
}

interface YouthUnemploymentGender {
  area: string;
  male: number;
  female: number;
  total: number;
}

interface DistressMigrationData {
  farmersNotWantingChildrenInAgriculture: number;
  studySource: string;
  pushFactors: string[];
  annualGrowthPunjab: number;
  annualGrowthNational: number;
  industrialUnitsShutDown: number;
  shutDownPeriod: string;
}

export default function DemographyIncomePage() {
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

  // Overall Unemployment (PLFS 2025)
  const overallUnemploymentData: OverallUnemploymentData = {
    overall: { rate: 6.7, national: 5.3 },
    rural: { rate: 7.4, national: 4.2 },
    urban: { rate: 5.8, national: 6.7 },
    youth: { rate: 17.0, national: 9.9 },
    ruralYouth: { rate: 18.7, national: 8.3 },
    urbanYouth: { rate: 14.5, national: 13.6 },
  };

  // Youth Unemployment by Gender (PLFS 2025)
  const youthUnemploymentByGenderData: YouthUnemploymentGender[] = [
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
  const distressMigrationData: DistressMigrationData = {
    farmersNotWantingChildrenInAgriculture: 75,
    studySource: "Prof Ghuman study, 2025",
    pushFactors: ["Unemployment", "Corruption", "Drug addiction fear", "Social insecurity", "Bad politico-administrative system"],
    annualGrowthPunjab: 4.62,
    annualGrowthNational: 5.67,
    industrialUnitsShutDown: 18700,
    shutDownPeriod: "2007-2014",
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
              <DollarSign className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Income & Economic Stratification
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Income distribution, poverty, land holdings, farmer suicides, and economic anxieties
          </p>
        </div>
        <Badge variant="warning">Economic</Badge>
      </motion.div>

      {/* INCOME STRATIFICATION SECTION */}
      <Card padding="lg" className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            <DollarSign className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Income Stratification & Economic Fragility</h3>
            <p className="text-sm text-amber-600 dark:text-amber-500">Punjab Income, Poverty & Economic Stratification</p>
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
                  <ProgressBar label="" value={band.percentageNum} max={30} color="amber" showPercentage />
                </div>
                <div className="w-24 text-xs text-slate-500">{band.typicalProfile.split(',')[0]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <MetricCard title="NFSA Beneficiaries" value="1.53 Cr" subtitle="Sep 2025" color="amber" />
          <MetricCard title="Poverty Rate (Rural)" value="~5%" subtitle="Below national avg" color="emerald" />
          <MetricCard title="Farm Debt/Victim" value="Rs 8.3L" subtitle="PAU/ISADP Study" color="rose" />
          <MetricCard title="Gini Coefficient" value="0.48" subtitle="High inequality" color="purple" />
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
                    <ProgressBar label="" value={data.count} max={2506} color="rose" showPercentage={false} />
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
      </Card>

      {/* Vulnerable Occupations & Unemployment Section */}
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
            Vulnerable Occupations & Unemployment (PLFS 2025)
          </h3>
          <Badge variant="warning">Critical Issue</Badge>
        </div>
        <p className="mb-6 text-sm text-red-700 dark:text-red-400">
          Youth unemployment, educated unemployment, informal labor, and religious occupations
        </p>

        {/* Key Unemployment Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Youth Unemployment (15-29)"
            value={`${overallUnemploymentData.youth.rate}%`}
            subtitle="Punjab vs National: 9.9%"
            color="rose"
          />
          <MetricCard
            title="Rural Unemployment"
            value={`${overallUnemploymentData.rural.rate}%`}
            subtitle="Exceeds urban (5.8%)"
            color="orange"
          />
          <MetricCard
            title="Female Youth Unemployment"
            value={`${youthUnemploymentByGenderData.find(g => g.area === "Overall")?.female}%`}
            subtitle="More than double male rate"
            color="rose"
          />
          <MetricCard
            title="State Unemployment Bureau"
            value="1.23 Lakh"
            subtitle={`${unemploymentBureauData.registeredApplicants.toLocaleString()} applicants (Sep 2025)`}
            color="purple"
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

          {/* Youth Unemployment by Gender */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
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
              Female youth unemployment at 27.7% is more than double the male rate
            </div>
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
      </div>
    </div>
  );
}
