"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  ageStructureData,
  ageStructureMetrics,
  ageCohortDistributionData,
  politicalCohortData,
  temporalChangeData,
  birthRegistrationData,
  regionalAgeProfileData,
  ageStructureStrategicImplications,
} from "@/lib/age-structure-data";
import { Users, User, Heart, AlertTriangle, Baby, GraduationCap, Briefcase, Home, Plane, Globe } from "lucide-react";

/**
 * Demography - Gender Section
 * Gender demographics, sex ratio, women voters, workforce participation
 */

// Interface definitions for Gender section
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

export default function DemographyGenderPage() {
  // District Child Sex Ratio data
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
  ];

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
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
              G
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Gender Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sex ratio, women voters, workforce participation, and gender indicators
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* GENDER INDICATORS SECTION */}
      <Card padding="lg" className="border-2 border-rose-500 dark:border-rose-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
            G
          </span>
          <div>
            <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">Gender Demographics & Women Indicators — Punjab</h3>
            <p className="text-sm text-rose-600 dark:text-rose-400">Sources: Census 2011, NFHS-5 (2019-21), CEO Punjab, ECI, MoSPI, NSSO/PLFS, Mission Shakti</p>
          </div>
        </div>

        {/* Population by Gender */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Population by Gender</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.23 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Total Population (2026 proj.)</div>
              <div className="text-xs text-blue-600 dark:text-blue-300">Census projections</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">1.64 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Male Population</div>
              <div className="text-xs text-green-600 dark:text-green-300">StatisticsTimes 2026</div>
            </div>
            <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">~1.49 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-rose-700 dark:text-rose-300">Female Population</div>
              <div className="text-xs text-rose-600 dark:text-rose-300">Derived from sex ratio</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">895</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Sex Ratio (Census 2011)</div>
              <div className="text-xs text-purple-600 dark:text-purple-300">Females per 1000 males</div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="flex items-center gap-2">
                <Baby className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div className="text-xl font-bold text-red-600 dark:text-red-400">846</div>
              </div>
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
                  <span className="text-sm font-bold text-rose-600">{d.female}%</span>
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
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">68.7%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Male Turnout</div>
              <div className="text-xs text-blue-600 dark:text-blue-300">~77.6 lakh voters</div>
            </div>
            <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">68.4%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-rose-700 dark:text-rose-300">Female Turnout</div>
              <div className="text-xs text-rose-600 dark:text-rose-300">~69.8 lakh voters</div>
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
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">~24-28%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Punjab Female LFPR (PLFS 2022-23)</div>
              <div className="text-xs text-red-600 dark:text-red-300">Estimated — significantly below national</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">37.0%</div>
              </div>
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
                  <span className="text-lg font-bold text-rose-600">{h.punjab}</span>
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
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
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
      </Card>
    </div>
  );
}
