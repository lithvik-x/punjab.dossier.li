"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { MapPin, Users, AlertTriangle, TrendingUp, Target, Vote } from "lucide-react";

const regionalSeats = [
  { region: "Malwa", seats: 69, share: "59%", description: "Decisive battleground, Jat Sikh dominance, highest farm distress" },
  { region: "Majha", seats: 27, share: "23%", description: "Amritsar, Gurdaspur; Hindu-Sikh mix, border security issues" },
  { region: "Doaba", seats: 23, share: "20%", description: "NRI belt, highest SC concentration (39% in Jalandhar), dera density" },
];

const regionalBoothDistribution = {
  malwa: { districts: 15, estimatedBooths: "~11,000-13,000" },
  majha: { districts: 4, estimatedBooths: "~3,000-4,000" },
  doaba: { districts: 4, estimatedBooths: "~2,500-3,000" },
};

const regionalSwingVoters = {
  malwa: { swingPct: "6-8%", aapFloor: "38-42%", congressCeiling: "25-28%" },
  doaba: { swingPct: "12-15%", note: "Highest swing concentration; only sub-region with genuine AAP-Congress contest" },
  majha: { swingPct: "8-10%", note: "More stable voting patterns due to religious/cultural identity" },
};

const aapRegionalStrength = {
  malwa: { seats: "66/69", percentage: "95.7%", characteristics: "AAP fortress, highest margins in Budhlada, Bathinda Urban, Mansa" },
  majha: { seats: "5-6", percentage: "~24%", characteristics: "Competitive, border districts, urban Sikh voter base traditionally Congress/SAD" },
  doaba: { seats: "1", percentage: "~4%", characteristics: "AAP desert, Congress stronghold, Dera Ballan influence" },
};

const marginalSeats = [
  { rank: 1, seat: "Gidderbaha", margin: "AAP+22,000 (by-poll)", priority: "CRITICAL" },
  { rank: 2, seat: "Tarn Taran", margin: "AAP+15,000+", priority: "CRITICAL" },
  { rank: 3, seat: "Khadoor Sahib", margin: "AAP+12,000+", priority: "CRITICAL" },
  { rank: 4, seat: "Patti", margin: "AAP+10,000+", priority: "HIGH" },
  { rank: 5, seat: "Bholath", margin: "AAP+8,000+", priority: "HIGH" },
  { rank: 6, seat: "Nakodar", margin: "Congress+7,500", priority: "HIGH" },
  { rank: 7, seat: "Jalandhar North", margin: "AAP+7,000+", priority: "HIGH" },
  { rank: 8, seat: "Phagwara", margin: "Congress+6,500", priority: "MEDIUM" },
  { rank: 9, seat: "Mukerian", margin: "Congress+6,000", priority: "MEDIUM" },
  { rank: 10, seat: "Dasuya", margin: "Congress+5,500", priority: "MEDIUM" },
  { rank: 11, seat: "Shahkot", margin: "Congress+5,500", priority: "MEDIUM" },
  { rank: 12, seat: "Kartarpur", margin: "Congress+5,000", priority: "MEDIUM" },
  { rank: 13, seat: "Majitha", margin: "SAD+5,000", priority: "MEDIUM" },
  { rank: 14, seat: "Ajnala", margin: "Congress+4,500", priority: "MEDIUM" },
  { rank: 15, seat: "Baba Bakala", margin: "AAP+4,500", priority: "MEDIUM" },
  { rank: 16, seat: "Sultanpur Lodhi", margin: "AAP+4,000", priority: "MEDIUM" },
  { rank: 17, seat: "Phillaur", margin: "Congress+4,000", priority: "MEDIUM" },
  { rank: 18, seat: "Jalandhar West", margin: "AAP+3,500", priority: "MEDIUM" },
  { rank: 19, seat: "Chamkaur Sahib", margin: "Congress+3,500", priority: "MEDIUM" },
  { rank: 20, seat: "Anandpur Sahib", margin: "AAP+3,000", priority: "MEDIUM" },
];

const criticalBoothCategories = {
  categoryA: { name: "Border Security Booths", districts: ["Pathankot", "Gurdaspur", "Tarn Taran", "Ferozepur", "Muktsar", "Fazilka"], estimatedBooths: "800-1,200" },
  categoryB: { name: "Urban Communal Tension", cities: ["Ludhiana", "Jalandhar", "Amritsar"], estimatedBooths: "500-800" },
  categoryC: { name: "Rural Caste Fault-Line", region: "Malwa (Jat-Dalit interface)", estimatedBooths: "600-1,000" },
  categoryD: { name: "Repeat Offender/Booth Capture", region: "Doaba", estimatedBooths: "200-400" },
};

const acCategories = {
  categoryA: { name: "AAP Strongholds", acCount: "~55-60", aapVoteShare: ">45%", margin: ">15%", regions: "Malwa" },
  categoryB: { name: "Congress Strongholds", acCount: "~12-15", congressFloor: "28-35%", regions: "Doaba, Majha" },
  categoryC: { name: "True Swing/Marginal", acCount: "~20-25", margin: "<10%", regions: "Doaba dominates" },
  categoryD: { name: "AAP Vulnerable", acCount: "~15-20", margin: "Won by AAP 2022 but declining", regions: "Governance failures prominent" },
  categoryE: { name: "SAD/BJP Residual", acCount: "~5-8", coreLoyalist: "18-25%", regions: "Traditional SAD areas" },
  categoryF: { name: "NRI-Dominated", acCount: "~8-12", regions: "Doaba concentration" },
};

const congress2027Scenarios = {
  bestCase: { seats: "65-75", conditions: "Anti-incumbency peaks, excellent candidate selection, caste coalition consolidation" },
  baseCase: { seats: "50-58", conditions: "Normal anti-incumbency, average candidate selection, BJP does not surge" },
  worstCase: { seats: "38-45", conditions: "AAP recovers on development narrative, Congress candidate selections cause rebellions" },
};

export default function RegionalAnalysisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Regional Analysis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Malwa/Majha/Doaba breakdown and marginal seat analysis
          </p>
        </div>
        <Badge variant="success">117 Assembly Seats</Badge>
      </div>

      {/* Regional Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400">MALWA</h3>
                <span className="text-2xl font-bold text-orange-600">{regionalSeats[0].seats} seats</span>
              </div>
              <p className="text-sm text-orange-600 dark:text-orange-300">{regionalSeats[0].share} of Assembly</p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{regionalSeats[0].description}</p>
              <div className="mt-3 rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Booths: {regionalBoothDistribution.malwa.estimatedBooths}</p>
                <p className="text-xs text-slate-500">Districts: {regionalBoothDistribution.malwa.districts}</p>
              </div>
              <div className="mt-3 rounded bg-orange-100 p-2 dark:bg-orange-900/40">
                <p className="text-xs font-bold text-orange-700">AAP: {aapRegionalStrength.malwa.seats} ({aapRegionalStrength.malwa.percentage})</p>
                <p className="text-xs text-orange-600">{aapRegionalStrength.malwa.characteristics}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">MAJHA</h3>
                <span className="text-2xl font-bold text-blue-600">{regionalSeats[1].seats} seats</span>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-300">{regionalSeats[1].share} of Assembly</p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{regionalSeats[1].description}</p>
              <div className="mt-3 rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Booths: {regionalBoothDistribution.majha.estimatedBooths}</p>
                <p className="text-xs text-slate-500">Districts: {regionalBoothDistribution.majha.districts}</p>
              </div>
              <div className="mt-3 rounded bg-blue-100 p-2 dark:bg-blue-900/40">
                <p className="text-xs font-bold text-blue-700">AAP: {aapRegionalStrength.majha.seats} ({aapRegionalStrength.majha.percentage})</p>
                <p className="text-xs text-blue-600">{aapRegionalStrength.majha.characteristics}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-green-700 dark:text-green-400">DOABA</h3>
                <span className="text-2xl font-bold text-green-600">{regionalSeats[2].seats} seats</span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-300">{regionalSeats[2].share} of Assembly</p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{regionalSeats[2].description}</p>
              <div className="mt-3 rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Booths: {regionalBoothDistribution.doaba.estimatedBooths}</p>
                <p className="text-xs text-slate-500">Districts: {regionalBoothDistribution.doaba.districts}</p>
              </div>
              <div className="mt-3 rounded bg-green-100 p-2 dark:bg-green-900/40">
                <p className="text-xs font-bold text-green-700">AAP: {aapRegionalStrength.doaba.seats} ({aapRegionalStrength.doaba.percentage})</p>
                <p className="text-xs text-green-600">{aapRegionalStrength.doaba.characteristics}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Swing Voter Concentration */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Regional Swing Voter Concentration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="text-sm font-bold text-orange-700 dark:text-orange-400">Malwa Swing</p>
                <p className="text-2xl font-bold text-orange-600">{regionalSwingVoters.malwa.swingPct}</p>
                <p className="mt-2 text-xs text-slate-600">AAP floor: {regionalSwingVoters.malwa.aapFloor}</p>
                <p className="text-xs text-slate-600">Congress ceiling: {regionalSwingVoters.malwa.congressCeiling}</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-sm font-bold text-green-700 dark:text-green-400">Doaba Swing</p>
                <p className="text-2xl font-bold text-green-600">{regionalSwingVoters.doaba.swingPct}</p>
                <p className="mt-2 text-xs text-green-600">{regionalSwingVoters.doaba.note}</p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400">Majha Swing</p>
                <p className="text-2xl font-bold text-blue-600">{regionalSwingVoters.majha.swingPct}</p>
                <p className="mt-2 text-xs text-blue-600">{regionalSwingVoters.majha.note}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Assembly Constituency Categories */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Assembly Constituency Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(acCategories).map(([key, cat]) => (
                <div key={key} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
                  <span className="inline-block rounded bg-purple-100 px-2 py-1 text-xs font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    {cat.name}
                  </span>
                  <div className="mt-2 text-xs space-y-1">
                    <div>Count: <strong>{cat.acCount}</strong></div>
                    {"aapVoteShare" in cat && <div>AAP Vote Share: <strong>{cat.aapVoteShare}</strong></div>}
                    {"congressFloor" in cat && <div>Congress Floor: <strong>{cat.congressFloor}</strong></div>}
                    {"coreLoyalist" in cat && <div>Core Loyalist: <strong>{cat.coreLoyalist}</strong></div>}
                    {"margin" in cat && <div>Margin: <strong>{cat.margin}</strong></div>}
                    <div>Regions: <strong>{cat.regions}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Critical Booth Categories */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
              Critical Booth Categories — Special Attention Required
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-sm font-bold text-slate-700">{criticalBoothCategories.categoryA.name}</p>
                <p className="text-xs text-slate-500">Districts: {criticalBoothCategories.categoryA.districts.join(", ")}</p>
                <p className="text-xs text-slate-400">Est. booths: {criticalBoothCategories.categoryA.estimatedBooths}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-sm font-bold text-slate-700">{criticalBoothCategories.categoryB.name}</p>
                <p className="text-xs text-slate-500">Cities: {criticalBoothCategories.categoryB.cities.join(", ")}</p>
                <p className="text-xs text-slate-400">Est. booths: {criticalBoothCategories.categoryB.estimatedBooths}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-sm font-bold text-slate-700">{criticalBoothCategories.categoryC.name}</p>
                <p className="text-xs text-slate-500">Region: {criticalBoothCategories.categoryC.region}</p>
                <p className="text-xs text-slate-400">Est. booths: {criticalBoothCategories.categoryC.estimatedBooths}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-sm font-bold text-slate-700">{criticalBoothCategories.categoryD.name}</p>
                <p className="text-xs text-slate-500">Region: {criticalBoothCategories.categoryD.region}</p>
                <p className="text-xs text-slate-400">Est. booths: {criticalBoothCategories.categoryD.estimatedBooths}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top 20 Marginal Seats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Top 20 Most Marginal Seats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">2022 margins of 3,000-22,000; small swings can flip government</p>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
              {marginalSeats.map((seat) => (
                <div key={seat.rank} className={`rounded p-2 ${seat.priority === "CRITICAL" ? "bg-red-50 dark:bg-red-900/20" : seat.priority === "HIGH" ? "bg-orange-50 dark:bg-orange-900/20" : "bg-slate-50 dark:bg-slate-800"}`}>
                  <div className="flex items-center gap-2">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${seat.priority === "CRITICAL" ? "bg-red-500 text-white" : seat.priority === "HIGH" ? "bg-orange-500 text-white" : "bg-slate-500 text-white"}`}>
                      {seat.rank}
                    </span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{seat.seat}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{seat.margin}</p>
                  <Badge variant={seat.priority === "CRITICAL" ? "danger" : seat.priority === "HIGH" ? "warning" : "info"}>
                    {seat.priority}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-bold text-red-700 dark:text-red-400">Investment Priority:</p>
              <p className="text-xs text-red-600 dark:text-red-300">Gidderbaha (22,000 margin), Tarn Taran (15,000), Khadoor Sahib (12,000) require MAXIMUM resource deployment for Congress flips.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 2027 Scenarios */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>2027 Congress Seat Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-sm font-bold text-green-700 dark:text-green-400">BEST CASE</p>
                <p className="text-2xl font-bold text-green-600">{congress2027Scenarios.bestCase.seats}</p>
                <p className="mt-2 text-xs text-green-600">{congress2027Scenarios.bestCase.conditions}</p>
              </div>
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">BASE CASE</p>
                <p className="text-2xl font-bold text-yellow-600">{congress2027Scenarios.baseCase.seats}</p>
                <p className="mt-2 text-xs text-yellow-600">{congress2027Scenarios.baseCase.conditions}</p>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-sm font-bold text-red-700 dark:text-red-400">WORST CASE</p>
                <p className="text-2xl font-bold text-red-600">{congress2027Scenarios.worstCase.seats}</p>
                <p className="mt-2 text-xs text-red-600">{congress2027Scenarios.worstCase.conditions}</p>
              </div>
            </div>
            <div className="mt-4 rounded bg-purple-50 p-3 dark:bg-purple-900/20">
              <p className="text-sm font-bold text-purple-700 dark:text-purple-400">Congress needs 38-40% vote share for majority (59 seats).</p>
              <p className="text-xs text-purple-600">Current trajectory: 28-32%. Hidden voter activation is critical gap.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
