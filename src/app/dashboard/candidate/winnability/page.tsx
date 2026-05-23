"use client";

import { motion } from "framer-motion";
import { ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { TrendingUp } from "lucide-react";

interface PriorityCandidate {
  name: string;
  incumbent: string;
  winnability: number;
  antiIncumbency: number;
  candidateScore: number;
  margin: string | null;
  status: string;
}

interface TicketAuthority {
  decisionMaker: string;
  notPPCC: boolean;
  inCharge: string;
  directive: string;
  surveyCount: number;
  note: string;
}

interface RenominationData {
  electedMPRenomination: string;
  postgraduateBonus: string;
  criminalCasesBonus: string;
  crorepatiBonus: string;
  fieldWorkRequirement: string;
  womenScoringDifferential: string;
  youthScoringDifferential: string;
}

const winnabilityFactors = [
  { factor: "Party Factors", weight: 40, sub: "Symbol strength 20%, local org 20%, caste-community 25%, election trend 20%" },
  { factor: "Candidate Factors", weight: 35, sub: "Local status 20%, caste match 25%, vote bank 20%, name recognition 20%" },
  { factor: "Campaign Factors", weight: 25, sub: "Personal wealth 30%, network 25%, commitment 25%, charisma 20%" },
];

const candidates: PriorityCandidate[] = [
  { name: "Amritsar West", incumbent: "None", winnability: 72, antiIncumbency: 0, candidateScore: 82, margin: null, status: "Strong" },
  { name: "Ludhiana North", incumbent: "AAP MLA", winnability: 45, antiIncumbency: 78, candidateScore: 52, margin: "~4,200", status: "Review" },
  { name: "Jalandhar Central", incumbent: "None", winnability: 68, antiIncumbency: 0, candidateScore: 75, margin: null, status: "Strong" },
  { name: "Patiala", incumbent: "Congress MLA", winnability: 65, antiIncumbency: 34, candidateScore: 71, margin: "~3,100", status: "Strong" },
  { name: "Sangrur", incumbent: "AAP MLA", winnability: 38, antiIncumbency: 82, candidateScore: 41, margin: "~2,600", status: "Review" },
  { name: "Chabbewal", incumbent: "AAP MLA", winnability: 52, antiIncumbency: 65, candidateScore: 58, margin: "~3,400", status: "Review" },
  { name: "Dera Baba Nanak", incumbent: "AAP MLA", winnability: 61, antiIncumbency: 55, candidateScore: 67, margin: "~2,100", status: "Strong" },
  { name: "Barnala", incumbent: "Congress (2024)", winnability: 88, antiIncumbency: 8, candidateScore: 91, margin: "~7,200", status: "Priority" },
  { name: "Malerkotla", incumbent: "Congress MLA", winnability: 85, antiIncumbency: 12, candidateScore: 89, margin: "~5,600", status: "Priority" },
  { name: "Ajnala", incumbent: "Congress MLA", winnability: 79, antiIncumbency: 18, candidateScore: 84, margin: "~2,800", status: "Priority" },
];

const ticketAuthority: TicketAuthority = {
  decisionMaker: "AICC High Command",
  notPPCC: true,
  inCharge: "Bhupesh Baghel (AICC General Secretary)",
  directive: "Winnability is the sole criterion",
  surveyCount: 3,
  note: "High Command controls ticket distribution over PPCC preference",
};

const renominationData: RenominationData = {
  electedMPRenomination: "53%",
  postgraduateBonus: "+28%",
  criminalCasesBonus: "+27%",
  crorepatiBonus: "+14%",
  fieldWorkRequirement: "6 months minimum before election",
  womenScoringDifferential: "Higher weight for winnability vs experience",
  youthScoringDifferential: "Youth candidates get +15% winnability bonus",
};

const cqiDimensions = [
  { dimension: "Caste/Community Match", weight: 20, sub: "Local presence, acceptance, vote bank" },
  { dimension: "Electoral History", weight: 15, sub: "Past wins, margin trends" },
  { dimension: "Organizational Backin", weight: 15, sub: "Party support, worker network" },
  { dimension: "Financial Resources", weight: 15, sub: "Personal wealth, fundraising" },
  { dimension: "Name Recognition", weight: 10, sub: "Media, family legacy" },
  { dimension: "Leadership Qualities", weight: 15, sub: "Public speaking, crisis mgmt" },
  { dimension: "Issue Alignment", weight: 10, sub: "Local issues, constituency needs" },
];

export default function CandidateWinnabilityPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Winnability Analysis - CQI framework & ticket authority
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </motion.div>

      {/* 3-Domain Winnability Model */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              3-Domain Winnability Model
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Survey-based selection framework (Sunil Kanugolu)
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 space-y-4">
              {winnabilityFactors.map((factor) => (
                <div key={factor.factor} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{factor.factor}</span>
                    <span className="text-sm font-bold text-teal-600">{factor.weight}%</span>
                  </div>
                  <p className="text-xs text-slate-500">{factor.sub}</p>
                  <ProgressBar
                    label=""
                    value={factor.weight}
                    color="cyan"
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Survey methodology: Ground-level support + worker feedback + caste-community equations + anti-incumbency factors
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ticket Allocation Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Ticket Allocation Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    NEW
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">New Faces</p>
                    <p className="text-sm text-slate-500">60-70 candidates fresh</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600">60-70</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                    YTH
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Youth Target</p>
                    <p className="text-sm text-slate-500">50% under 50 years</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600">50%</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                    F
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Women Quota</p>
                    <p className="text-sm text-slate-500">33% target confirmed</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-pink-600">33%</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Selection Method</p>
                    <p className="text-sm text-slate-500">3 independent surveys</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-teal-600">3SURV</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Priority Constituency Candidates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Priority Constituency Candidates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Constituency", "Incumbent", "Winnability", "Anti-Inc", "Score", "Margin", "Status"]}
                rows={candidates.map((c) => [
                  c.name,
                  c.incumbent,
                  `${c.winnability}%`,
                  c.antiIncumbency > 50 ? "High" : c.antiIncumbency > 25 ? "Med" : "Low",
                  `${c.candidateScore}/100`,
                  c.margin || "-",
                  c.status,
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CQI 7-Dimension Framework */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Candidate Quality Index (CQI) - 7 Dimension Framework
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              100-point scale for candidate evaluation
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 space-y-4">
              {cqiDimensions.map((dim) => (
                <div key={dim.dimension} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{dim.dimension}</span>
                    <span className="text-sm font-bold text-teal-600">{dim.weight} pts</span>
                  </div>
                  <p className="text-xs text-slate-500">{dim.sub}</p>
                  <ProgressBar
                    label=""
                    value={dim.weight}
                    color="cyan"
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <p className="text-sm text-green-700 dark:text-green-300">
                <strong>Grade A (85+):</strong> Strong candidate - priority nomination
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP10-001/005: Ticket Authority & Winnability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="border-2 border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-violet-700 dark:text-violet-400">MP10-001/005: Ticket Authority & Winnability</p>
                <p className="text-sm text-violet-600 dark:text-violet-300">AICC High Command controls tickets, survey-based selection, renomination analysis</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Decision Maker</p>
                <p className="text-sm font-bold text-violet-600">{ticketAuthority.decisionMaker}</p>
                <p className="text-xs text-slate-400">NOT PPCC</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Punjab In-Charge</p>
                <p className="text-sm font-bold text-violet-600">{ticketAuthority.inCharge}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Ticket Criterion</p>
                <p className="text-sm font-bold text-red-600">{ticketAuthority.directive}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Surveys Commissioned</p>
                <p className="text-sm font-bold text-blue-600">{ticketAuthority.surveyCount} surveys</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Renomination Rate (Elected MPs)</p>
                <p className="text-2xl font-bold text-green-600">{renominationData.electedMPRenomination}</p>
                <p className="text-xs text-slate-500">vs 19% for lost candidates</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Winnability Multipliers</p>
                <div className="space-y-1 text-xs">
                  <p>Postgrad: <span className="text-green-600 font-bold">+{renominationData.postgraduateBonus}</span></p>
                  <p>Criminal Cases: <span className="text-amber-600 font-bold">+{renominationData.criminalCasesBonus}</span></p>
                  <p>Crorepati: <span className="text-blue-600 font-bold">+{renominationData.crorepatiBonus}</span></p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Field Work Requirement</p>
                <p className="text-xl font-bold text-violet-600">{renominationData.fieldWorkRequirement}</p>
                <p className="text-xs text-slate-500">Minimum before elections</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-violet-50 p-3 dark:bg-violet-900/30">
              <p className="text-sm text-violet-700 dark:text-violet-300">
                <strong>Note:</strong> Women and youth candidates receive differential scoring - youth get +15% winnability bonus. High Command authority overrides PPCC factional claims.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP10-005 Candidate Viability Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="border-2 border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-teal-700 dark:text-teal-400">MP10-005 Candidate Viability Analysis</p>
                <p className="text-sm text-teal-600 dark:text-teal-300">1,020 candidates analyzed, winnability multipliers from survey data</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Total Candidates Analyzed</p>
                <p className="text-2xl font-bold text-teal-600">1,020</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Renomination Rate</p>
                <p className="text-2xl font-bold text-teal-600">35%</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Postgraduate +Winnability</p>
                <p className="text-2xl font-bold text-green-600">+28%</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Criminal Cases +Winnability</p>
                <p className="text-2xl font-bold text-amber-600">+27%</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Crorepati Status +Winnability</p>
                <p className="text-2xl font-bold text-blue-600">+14%</p>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Key Insight:</strong> Wrong candidate selection across 30+ seats could cost Congress 8-12 seat equivalents. Survey-derived candidates with high name recognition may have weak party worker backing. &quot;Gadkhunt&quot; risk: workers may actively campaign against &quot;imported&quot; candidates.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-medium text-slate-500 mb-2">Winnability Multiplier Effect</p>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <p>High winnability candidate: <span className="font-bold text-green-600">+3-5 seats</span> via local coattails</p>
                  <p>Poor candidate selection: <span className="font-bold text-red-600">-5-8%</span> party vote in constituency</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-medium text-slate-500 mb-2">Survey Mechanics</p>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <p>3 independent surveys across all 117 ACs</p>
                  <p>Questions to general public AND party workers</p>
                  <p>Sunil Kanugolu supervised methodology</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-medium text-slate-500 mb-2">Risk Mitigation</p>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <p>Validate surveys against organizational feedback</p>
                  <p>Cross-check district-level worker sentiment</p>
                  <p>Investigate contradictions before finalizing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
