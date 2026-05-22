"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

// Caste Demographics from Intelligence
const casteDemographics = [
  { community: "Jat Sikh", population: "19-21%", congress: "25-30%", secondary: "SAD 35-40%", aap: "20-25%", keyIssue: "Drugs, farm distress, dera influence" },
  { community: "SC (Total)", population: "31.9%", congress: "42-48%", secondary: "BSP 28-35%", aap: "12-18%", keyIssue: "Land rights, unemployment, social justice" },
  { community: "Mazhabi Sikh", population: "26 lakh", congress: "Congress traditional", secondary: "SAD voters", aap: "AAP voters", keyIssue: "Rural Malwa/Majha, drug crisis" },
  { community: "OBC", population: "~31%", congress: "35-40%", secondary: "BJP 25-30%", aap: "15-20%", keyIssue: "Caste census, reservation, agrarian distress" },
  { community: "Non-Jat Sikh", population: "15-18%", congress: "25-30%", secondary: "AAP 30-35%", aap: "30-35%", keyIssue: "Governance, anti-corruption, urban development" },
  { community: "Urban Hindu", population: "8-10%", congress: "22-28%", secondary: "BJP 40-50%", aap: "15-20%", keyIssue: "National security, Hindutva, development" }
];

// Caste Coalition Math
const casteCoalitionData = [
  { caste: "SC (Dalit)", population: "31.94%", primaryParty: "Congress 42-48%", secondaryParty: "BSP 28-35%", aapShare: "12-18%", keyIssue: "Land rights, unemployment, social justice" },
  { caste: "OBC", population: "~31%", primaryParty: "Congress 35-40%", secondaryParty: "BJP 25-30%", aapShare: "15-20%", keyIssue: "Caste census, reservation, agrarian distress" },
  { caste: "Jat Sikh", population: "20-25%", primaryParty: "SAD 35-40%", secondaryParty: "Congress 25-30%", aapShare: "20-25%", keyIssue: "Drug crisis, farm bills, river water sharing" },
  { caste: "Non-Jat Sikh", population: "15-18%", primaryParty: "AAP 30-35%", secondaryParty: "Congress 25-30%", aapShare: "30-35%", keyIssue: "Governance, anti-corruption, urban development" },
  { caste: "Urban Hindu", population: "8-10%", primaryParty: "BJP 40-50%", secondaryParty: "Congress 22-28%", aapShare: "15-20%", keyIssue: "National security, Hindutva, development" },
  { caste: "Muslim", population: "1.9%", primaryParty: "Congress 45-55%", secondaryParty: "AAP 20-25%", aapShare: "15-20%", keyIssue: "Community security, Places of Worship Act" },
];

// Dalit Sub-Caste Patterns
const dalitSubCastePatterns = [
  { subCaste: "Mazhabi Sikh (18-20%)", pattern: "AAP 75-80% loyalty; Congress damaged by Raja Warring controversy; SAD at lowest ebb" },
  { subCaste: "Ravidassia/Ad-Dharmi (~8-10%)", pattern: "Congress traditional base but shifting to AAP; Doaba region (13 seats)" },
  { subCaste: "Valmiki (~4-5%)", pattern: "Congress base, BSP residual; Urban Doaba seats" },
];

export default function CasteDemographicsPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
          <Target className="h-5 w-5" />
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Caste Demographics
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Caste coalition math, vote bank breakdown, demographic analysis
          </p>
        </div>
      </motion.div>

      {/* Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-red-700 dark:text-red-400">AAP Won 29 of 34 SC Reserved Seats (~85%) in 2022</p>
                <p className="text-sm text-red-600 dark:text-red-300">Critical Dalit voter dominance. AAP converted social welfare into political capital. Congress must reclaim SC voter trust.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Caste Demographics Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Caste Demographics — Congress Coalition Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Community", "Population %", "Congress", "Secondary", "AAP", "Key Issue"]}
                rows={casteDemographics.map(c => [c.community, c.population, c.congress, c.secondary, c.aap, c.keyIssue])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Caste Coalition Math */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Caste Coalition Math — 70% Non-Jat Target</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Census 2011, NSS 2019, Vote transfer efficiency analysis</p>

            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Caste/Community", "Population %", "Congress Share", "BJP Share", "AAP Share", "Key Issue"]}
                rows={casteCoalitionData.map(c => [c.caste, c.population, c.primaryParty, c.secondaryParty, c.aapShare, c.keyIssue])}
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">SC Population</h4>
                <p className="text-2xl font-bold text-purple-600">31.94%</p>
                <p className="text-xs text-slate-500 mt-1">Primary targets: Congress 42-48%, BSP 28-35%</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400">OBC Population</h4>
                <p className="text-2xl font-bold text-orange-600">~31%</p>
                <p className="text-xs text-slate-500 mt-1">34 Lok Sabha seats equivalent</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Non-Jat Sikh</h4>
                <p className="text-2xl font-bold text-green-600">15-18%</p>
                <p className="text-xs text-slate-500 mt-1">AAP strong segment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Dalit Sub-Caste Voting Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Sub-Caste Dalit Voting Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-SYNTHESIS</p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {dalitSubCastePatterns.map((item) => (
                <div key={item.subCaste} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                  <p className="text-xs font-bold text-purple-600">{item.subCaste}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.pattern}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Key Insight:</strong> Dalit vote fragmentation is STRUCTURAL - cannot be consolidated behind one party. Four major sub-castes with different religious affiliations and historical loyalties.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Caste & Religious Vote Bank Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Caste & Religious Vote Bank Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Sikh Vote Bank</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Congress</span>
                    <span className="font-medium text-green-600 dark:text-green-400">26-31%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">AAP</span>
                    <span className="font-medium text-green-600 dark:text-green-400">20-25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">SAD (combined)</span>
                    <span className="font-medium text-green-600 dark:text-green-400">18-22%</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Jat Sikhs dominate; non-Jat Sikh votes swing more to AAP/Congress</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400">Hindu Vote Bank</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">BJP</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">40-50%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Congress</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">22-28%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">AAP</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">15-20%</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Urban Hindu voters trending BJP; rural Hindus more Congress</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">SC Vote Reach</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">Congress</span>
                    <span className="font-medium text-purple-600 dark:text-purple-400">42-48%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">BSP</span>
                    <span className="font-medium text-purple-600 dark:text-purple-400">28-35%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">AAP</span>
                    <span className="font-medium text-purple-600 dark:text-purple-400">12-18%</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Congress traditional SC backbone eroding to BSP</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* BSP Organizational Strength */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>BSP Organizational Strength by AC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">SC-majority ACs (&gt;35% SC population):</span>
                <span className="font-bold text-orange-600">8-10 seats where BSP still commands 10-15% vote share</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Kingmaker potential:</span>
                <span className="font-bold text-red-600">Can determine winner between AAP and Congress in these seats</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Congress opportunity:</span>
                <span className="font-bold text-green-600">Dalit outreach + ticket allocation to Dalit candidates + specific welfare promises</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Risk:</span>
                <span className="font-bold text-red-600">If BSP fields independently in 15+ constituencies, three-way splitting hands seats to AAP</span>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="text-sm font-bold text-amber-700 dark:text-amber-400">Dalit Vote Migration Intelligence</p>
              <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p>BSP collapse accelerating - whether Dalit votes flow to Congress, AAP, or fragment is unknown at constituency level.</p>
                <p>Congress traditional SC backbone eroding to BSP (28-35% in some ACs) while Congress holds 42-48%.</p>
                <p>AAP making inroads through SC-focused welfare schemes and Dalit candidate deployment (Tarn Taran example).</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Congress 70% Non-Jat Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Congress 70% Non-Jat Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20 text-center">
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">32%</p>
                <p className="text-sm text-purple-600 dark:text-purple-300">SC Population</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20 text-center">
                <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">31%</p>
                <p className="text-sm text-orange-600 dark:text-orange-300">OBC Population</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 text-center">
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">15-18%</p>
                <p className="text-sm text-green-600 dark:text-green-300">Non-Jat Sikh</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 text-center">
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">8-10%</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">Urban Hindu</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Strategy:</strong> Congress needs to build a coalition of SC + OBC + Non-Jat Sikh + Urban Hindu = ~70% of population to counter SAD/BJP Jat Sikh base.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
