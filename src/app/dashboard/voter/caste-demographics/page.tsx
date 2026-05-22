"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, UserCircle, AlertTriangle, TrendingUp, Vote, Target } from "lucide-react";

const casteComposition = {
  sc: { value: "31.94%", label: "SC (Scheduled Caste)", note: "Highest proportion in India" },
  jatSikh: { value: "20-25%", label: "Jat Sikh", note: "Dominant landowning caste, Malwa" },
  obc: { value: "31%", label: "OBC (Other Backward Classes)", note: "Saini, Kamboj, Labana communities" },
  upperCaste: { value: "10-12%", label: "Upper Caste Hindu", note: "Brahmin, Bania, Khatri, Rajput" },
  mazhabiSikh: { value: "30-31.5%", label: "Mazhabi Sikh", note: "Largest SC sub-caste, rural Malwa" },
  ravidasia: { value: "23-26%", label: "Ravidasia", note: "Doaba concentration, Dera Ballan link" },
  valmiki: { value: "10-11%", label: "Valmiki", note: "Urban, sanitation workers" },
  adDharmi: { value: "11-15%", label: "Ad-Dharmi", note: "SC sub-caste, agricultural laborers" },
  raiSikh: { value: "6%", label: "Rai Sikh", note: "Smallest SC sub-caste" },
};

const scVotingPatterns = {
  congressShare: "42-48%",
  aapShare2017: "8%",
  aapShare2022: "27%",
  aapGrowth: "+19 percentage points",
  bjpDalitOutreach: "Growing via OBC strategy",
  deraInfluence: "90% donations in dera areas",
  scReservedSeats: 34,
};

const microTargetingSegments = [
  { segment: "Mazhabi Sikh (SC)", population: "8-10%", issues: ["Land rights", "Dignity", "Employment"], channel: "SCpora leaders, community meetings" },
  { segment: "Jat Sikh", population: "20-22%", issues: ["MSP", "Debt relief", "Canal water"], channel: "Mandi meetings, farmer unions" },
  { segment: "Ravidasia (Doaba)", population: "4-5%", issues: ["Dera recognition", "Business promotion", "Education"], channel: "Dera Ballan networks" },
  { segment: "OBC Communities", population: "15-18%", issues: ["Reservation", "Credit access", "Skill development"], channel: "OBC leaders, trader associations" },
  { segment: "Urban Middle Class", population: "~35-40%", issues: ["Services", "Infrastructure", "Safety"], channel: "Digital, RWA partnerships" },
];

const ageCohortPatterns = [
  { cohort: "First-Time Voters (18-25)", share: "15-18%", priority: ["Unemployment", "Education", "Startup support"], influence: "Social media, peer networks, celebrity" },
  { cohort: "Young Adults (26-35)", share: "18-22%", priority: ["Housing", "Employment", "Healthcare"], influence: "Aspirational messaging, concrete proposals" },
  { cohort: "Established Adults (36-50)", share: "28-32%", priority: ["Children education", "Agricultural sustainability", "Family business"], influence: "Personal contact, local candidate reputation" },
  { cohort: "Mature Adults (51-65)", share: "22-25%", priority: ["Pension security", "Healthcare", "Traditional values"], influence: "Traditional media, community outreach" },
  { cohort: "Senior Citizens (65+)", share: "10-12%", priority: ["Old age security", "Healthcare", "Social respect"], influence: "Personal outreach, family recommendations" },
];

export default function CasteDemographicsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Caste Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Caste composition, SC voting patterns, and micro-targeting segments
          </p>
        </div>
        <Badge variant="success">32% SC Population</Badge>
      </div>

      {/* Caste Composition Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Punjab Caste Composition - Full Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-6">From a3-punjab-caste-sc-subcastes, a4-punjab-obc-minority-demographics</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "SC (Scheduled Caste)", value: casteComposition.sc.value, note: casteComposition.sc.note, color: "text-red-500" },
                { label: "OBC", value: casteComposition.obc.value, note: casteComposition.obc.note, color: "text-orange-500" },
                { label: "Jat Sikh", value: casteComposition.jatSikh.value, note: casteComposition.jatSikh.note, color: "text-amber-500" },
                { label: "Upper Caste Hindu", value: casteComposition.upperCaste.value, note: casteComposition.upperCaste.note, color: "text-blue-500" },
                { label: "Mazhabi Sikh", value: casteComposition.mazhabiSikh.value, note: "Largest SC sub-caste, rural Malwa", color: "text-purple-500" },
                { label: "Ravidasia", value: casteComposition.ravidasia.value, note: "Doaba concentration, Dera Ballan link", color: "text-green-500" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                    <span className={`font-bold ${item.color}`}>{item.value}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* SC Voting Patterns */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>SC Voting Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a25-punjab-caste-voting-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Congress SC Share</span>
                  <span className="font-bold text-green-500">{scVotingPatterns.congressShare}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit Share (2017)</span>
                  <span className="font-bold text-slate-500">{scVotingPatterns.aapShare2017}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit Share (2022)</span>
                  <span className="font-bold text-green-500">{scVotingPatterns.aapShare2022}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit Growth</span>
                  <Badge variant="success">{scVotingPatterns.aapGrowth}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">BJP Dalit Outreach</span>
                  <Badge variant="warning">{scVotingPatterns.bjpDalitOutreach}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Dera Influence</span>
                  <Badge variant="info">{scVotingPatterns.deraInfluence}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">SC Reserved Seats</span>
                  <span className="font-bold text-purple-500">{scVotingPatterns.scReservedSeats}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">AAP Dalit share grew 8% to 27% in 5 years - fastest gainer among SC voters.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Micro-Targeting Segments */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Micro-Targeting Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From b14-voter-contact-optimization-framework</p>
              <div className="space-y-3">
                {microTargetingSegments.map((seg) => (
                  <div key={seg.segment} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{seg.segment}</span>
                      <Badge variant="info">{seg.population}</Badge>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Issues: {seg.issues.join(", ")}</p>
                    <p className="mt-1 text-xs text-blue-500">Channel: {seg.channel}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Age Cohort Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Age Cohort Voting Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-6">From b14-microtargeting-turnout-contact-framework</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ageCohortPatterns.map((cohort) => (
                <div key={cohort.cohort} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{cohort.cohort}</span>
                    <Badge variant="info">{cohort.share}</Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-slate-500">Priority: {cohort.priority.join(", ")}</p>
                    <p className="text-xs text-blue-500">Influence: {cohort.influence}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Jat Sikh Congress Voter Profile */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Jat Sikh Congress Voter Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Demographic</span>
                  <span className="font-bold text-amber-600">Jat Sikh voters</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Age profile</span>
                  <Badge variant="warning">Older (45+)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Geography</span>
                  <Badge variant="info">Rural</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Occupation</span>
                  <Badge variant="info">Farmer families</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Land holdings</span>
                  <Badge variant="success">Medium-large</Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">Core Congress rural vote bank. Farmer unions, SKM connections. Responsive to MSP and debt relief messaging.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>RSS Sikh Outreach (2019-2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Sikh morcha activations</span>
                  <span className="font-bold text-red-500">200+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Dharam sabhas</span>
                  <span className="font-bold text-red-500">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Target demographic</span>
                  <Badge variant="warning">Jat Sikh youth</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Congress impact</span>
                  <Badge variant="danger">Leadership vacuum</Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">RSS systematically expanding Sikh base. Congress has no counter-social infrastructure in rural Sikh belts.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Congress Factionalism */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Congress Factionalism - Organizational Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">From s1-cross-reference-validation</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Factions</span>
                <Badge variant="warning">Warring, Bajwa, Channi</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">By-election Losses</span>
                <Badge variant="danger">6 of 7 last by-elections</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">AICC Gag Order</span>
                <Badge variant="warning">January 2026</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Channi Demand</span>
                <Badge variant="info">More Dalit representation</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">CM Face Declared</span>
                <Badge variant="danger">NO</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Ground Game Risk</span>
                <Badge variant="danger">HIGH</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
