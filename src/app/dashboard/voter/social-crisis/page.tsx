"use client";

import { Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Users, DollarSign, Droplets, Shield, Plane } from "lucide-react";

const drugCrisisData = {
  totalUsers: "6.6 million",
  opioidDependent: "230,000",
  overdoseDeaths2024: 106,
  ndpsCases: "8,973",
  youthAffected: "75%+ youth",
  childrenUsingDrugs: "697,000",
  relapseRate: "80-90%",
  ganglandKillings2025: 31,
};

const farmerDistressData = {
  avgDebtPerHousehold: "Rs 2.03 lakh",
  debtRank: "3rd highest in India (after Kerala, Andhra Pradesh)",
  farmingFamiliesInDebt: "54%+",
  totalFarmerLoans: "Rs 1.4 lakh crore",
  farmSuicides2019: 302,
  farmSuicides2023: 174,
  lastLoanWaiver: "2016",
  compensationPerSuicide: "Rs 3 lakh",
  msprocuredAtDeclaredMSP: "<15%",
  malwaRegion: "80-90% of suicides in Malwa",
  apricot2026Case: "Two brothers died March 23, 2026 - debt doubled from Rs 25L to Rs 50L",
};

const waterCrisisData = {
  blocksOverExploited: "115 of 153",
  districtsCritical: "70%+",
  malwaUraniumSamples: "53% exceeding limits",
  groundwaterExtraction: "156% of recharge rate",
  canalIrrigation: "5.3 million acres",
  sylCanalStatus: "Deadlocked",
};

const scAtrocityData = {
  cases2019: 166,
  cases2015: 147,
  rankInIndia: "5th highest for atrocities against SCs",
  nationalCommissionAlert: "May 2025 - urgent corrective steps required",
  scholarshipScam: "2023 vigilance probe delayed",
  virtualCourtroom: "India's first dedicated SC virtual courtroom - operational Jan 2026",
};

const youthMigrationData = {
  studentsToCanada2022: "136,000",
  percentOfIndiaToCanada: "60%",
  totalBorrowedForMigration: "Rs 14,342 crore (2021-23)",
  totalAssetsSold: "Rs 5,636 crore",
  ieltsCenters: "5,000+",
  villageStudyAnandpur: "27.6% landowning households with IELTS enrollees",
  villageStudyFaridkot: "9% landowning households with members overseas",
  villageStudyTarnTaran: "16.2% landowning households with members abroad",
  villageStudyDosanjh: "~40% households have at least one member overseas (NRI village)",
  womenOutmigration: "More women than men leaving Punjab for abroad (first time)",
};

const fiscalCrisisData = {
  nitiAayogRank: "Last among 18 major states (fiscal health 2025)",
  stateDebt: "Rs 4.17 lakh crore",
  debtToGSDP: "40-45%",
  interestPayments: "Rs 28,755 crore (FY 2026-27)",
  percentRevenueDebtServicing: "~40%",
  gsdpGrowth: "6.1% vs India 7.4%",
  perCapitaIncome: "Rs 2.36 lakh",
};

export default function SocialCrisisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Social Crisis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Drug crisis, farmer distress, water emergency, and SC atrocities
          </p>
        </div>
        <Badge variant="danger">Critical Issues</Badge>
      </div>

      {/* Drug Crisis */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Drug Crisis - THE Defining Issue</h3>
                <p className="text-sm text-red-600 dark:text-red-300">6.6 Million Users, 75%+ Youth Affected</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">Total Drug Users</p>
                <p className="text-2xl font-bold text-red-600">{drugCrisisData.totalUsers}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">Opioid Dependent</p>
                <p className="text-2xl font-bold text-red-500">{drugCrisisData.opioidDependent}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">Overdose Deaths 2024</p>
                <p className="text-2xl font-bold text-red-500">{drugCrisisData.overdoseDeaths2024}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">NDPS Cases</p>
                <p className="text-2xl font-bold text-slate-600">{drugCrisisData.ndpsCases}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Youth Affected</p>
                <p className="text-lg font-bold text-red-500">{drugCrisisData.youthAffected}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Children Using Drugs</p>
                <p className="text-lg font-bold text-red-500">{drugCrisisData.childrenUsingDrugs}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Relapse Rate</p>
                <p className="text-lg font-bold text-orange-500">{drugCrisisData.relapseRate}</p>
              </div>
            </div>

            <div className="mt-4 rounded bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-sm font-bold text-red-700 dark:text-red-400">BJP Promise: &quot;Nasha Mukt Punjab in 2 years&quot;</p>
              <p className="text-xs text-red-600 mt-1">Congress must own this narrative - 106 overdose deaths in 2024 alone</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Farmer Distress */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Farmer Distress - Complete Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a16-punjab-social-issues-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Avg Debt per Household</span>
                  <span className="font-bold text-red-500">{farmerDistressData.avgDebtPerHousehold}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Debt Rank in India</span>
                  <Badge variant="danger">{farmerDistressData.debtRank}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Farming Families in Debt</span>
                  <Badge variant="danger">{farmerDistressData.farmingFamiliesInDebt}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total Farmer Loans</span>
                  <span className="font-bold text-red-500">{farmerDistressData.totalFarmerLoans}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Farm Suicides 2023</span>
                  <span className="font-bold text-red-400">{farmerDistressData.farmSuicides2023}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Last Loan Waiver</span>
                  <Badge variant="warning">{farmerDistressData.lastLoanWaiver}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">MSP Procured at Declared MSP</span>
                  <Badge variant="danger">{farmerDistressData.msprocuredAtDeclaredMSP}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Malwa Region Suicides</span>
                  <Badge variant="danger">{farmerDistressData.malwaRegion}</Badge>
                </div>
              </div>
              <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-xs font-bold text-red-700 dark:text-red-400">RECENT CASE (March 23, 2026):</p>
                <p className="text-xs text-red-600 dark:text-red-300">Two farmer brothers in Kotkapura died by suicide - debt doubled from Rs 25 lakh to Rs 50 lakh. Potato crop failure. Compensation: Rs 3 lakh.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Water Crisis - Groundwater Emergency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a19-punjab-water-agriculture-crisis-2026, s1-cross-reference-validation</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Blocks Over-Exploited</span>
                  <span className="font-bold text-red-500">{waterCrisisData.blocksOverExploited}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Districts Critical</span>
                  <Badge variant="danger">{waterCrisisData.districtsCritical}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Malwa Uranium Samples</span>
                  <Badge variant="danger">{waterCrisisData.malwaUraniumSamples}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Groundwater Extraction</span>
                  <Badge variant="danger">{waterCrisisData.groundwaterExtraction}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Canal Irrigation</span>
                  <span className="font-bold text-slate-500">{waterCrisisData.canalIrrigation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">SYL Canal Status</span>
                  <Badge variant="warning">{waterCrisisData.sylCanalStatus}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* SC Atrocity & Youth Migration */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>SC Atrocity Cases - Rising Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a16-punjab-social-issues-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Punjab Rank in India</span>
                  <Badge variant="danger">{scAtrocityData.rankInIndia}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Cases 2019</span>
                  <span className="font-bold text-red-500">{scAtrocityData.cases2019}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Cases 2015</span>
                  <span className="font-bold text-slate-500">{scAtrocityData.cases2015}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Trend</span>
                  <Badge variant="danger">Rising</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">NCSC Alert</span>
                  <Badge variant="warning">{scAtrocityData.nationalCommissionAlert}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Scholarship Scam</span>
                  <Badge variant="danger">{scAtrocityData.scholarshipScam}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Virtual Courtroom</span>
                  <Badge variant="info">{scAtrocityData.virtualCourtroom}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Youth Migration - Canada & Overseas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a16-punjab-social-issues-2026, g22-nri-digital-outreach-mobilization-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Students to Canada (2022)</span>
                  <span className="font-bold text-red-500">{youthMigrationData.studentsToCanada2022}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">% of All India to Canada</span>
                  <Badge variant="danger">{youthMigrationData.percentOfIndiaToCanada}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total Borrowed (2021-23)</span>
                  <span className="font-bold text-red-400">{youthMigrationData.totalBorrowedForMigration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Assets Sold (2021-23)</span>
                  <span className="font-bold text-slate-500">{youthMigrationData.totalAssetsSold}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Women Outmigration</span>
                  <Badge variant="warning">{youthMigrationData.womenOutmigration}</Badge>
                </div>
              </div>
              <div className="mt-4 rounded bg-blue-50 p-3 dark:bg-blue-900/20">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Village Studies (Landowning Households with IELTS/Members Abroad):</p>
                <p className="text-xs text-blue-600 dark:text-blue-300">Anandpur: 27.6% | Faridkot: 9% | Tarn Taran: 16.2% | Dosanjh Kalan: ~40% (NRI village)</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Punjab Fiscal Crisis */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Punjab Fiscal Crisis - Economic Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">From a5-punjab-economic-indicators-2026, a16-punjab-social-issues-2026</p>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-900/20">
                <p className="text-xs text-slate-500">NITI Aayog Fiscal Rank</p>
                <p className="text-lg font-bold text-red-600">LAST of 18</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">State Debt</p>
                <p className="text-lg font-bold text-red-500">{fiscalCrisisData.stateDebt}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">Debt-to-GSDP</p>
                <p className="text-lg font-bold text-red-500">{fiscalCrisisData.debtToGSDP}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                <p className="text-xs text-slate-500">Interest Payments (FY26-27)</p>
                <p className="text-lg font-bold text-red-400">{fiscalCrisisData.interestPayments}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Revenue on Debt Servicing</span>
                <Badge variant="warning">{fiscalCrisisData.percentRevenueDebtServicing}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">GSDP Growth</span>
                <span className="font-bold text-slate-500">{fiscalCrisisData.gsdpGrowth}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Per Capita Income</span>
                <span className="font-bold text-slate-500">{fiscalCrisisData.perCapitaIncome}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
