"use client";

import { motion } from "framer-motion";
import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Users } from "lucide-react";

interface YoungTurk {
  name: string;
  age: number;
  role: string;
  caste: string;
  education: string;
  base: string;
  ticketProb: string;
  status: string;
  winnability: string;
}

const youngTurks: YoungTurk[] = [
  { name: "Mohit Mohindra", age: 32, role: "PYC President", caste: "Sood (Hindu)", education: "BA LLB, Punjabi University", base: "Patiala", ticketProb: "85%", status: "Likely ticket", winnability: "Uncertain" },
  { name: "Amrinder Singh Raja Warring", age: 48, role: "PPCC President", caste: "Not specified", education: "10th Pass", base: "Ludhiana/Gidderbaha", ticketProb: "95%", status: "Very Likely", winnability: "Strong" },
  { name: "Kanhaiya Kumar", age: 39, role: "AICC NSUI In-charge", caste: "Non-elite", education: "PhD (JNU)", base: "Bihar native", ticketProb: "20%", status: "Long shot", winnability: "No Punjab base" },
  { name: "Jaiveer Shergill", age: 42, role: "Former Congress", caste: "Not specified", education: "LLB, UC Berkeley/NUJS", base: "Left for BJP", ticketProb: "0%", status: "Resigned Aug 2022", winnability: "BJP spokesperson" },
];

export default function CandidateYoungTurksPage() {
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
              <Users className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Young Turks - Next generation candidate profiles
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </motion.div>

      {/* Congress Young Turks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Congress Young Turks (A-04-05)
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Party plans 60-70% young candidates (70-80 out of 117 seats) for 2027
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Name", "Age", "Role", "Caste", "Education", "Base", "Ticket Prob", "Status"]}
                rows={youngTurks.map((y) => [
                  y.name,
                  y.age.toString(),
                  y.role,
                  y.caste,
                  y.education,
                  y.base,
                  y.ticketProb,
                  y.status,
                ])}
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-teal-50 p-3 dark:bg-teal-900/20">
                <p className="text-xs font-semibold text-teal-600">Mohit Mohindra (Tier 1)</p>
                <p className="text-sm text-teal-700 dark:text-teal-300">PYC President, 85% ticket likely. Father Brahm Mohindra&apos;s legacy provides support base.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                <p className="text-xs font-semibold text-blue-600">Raja Warring (Tier 1)</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">PPCC President, 95% ticket. 2024 Ludhiana winner, controls party machinery.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs font-semibold text-slate-500">Kanhaiya Kumar (Tier 3)</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">No Punjab base, 20% ticket probability. National youth symbol, not electoral candidate.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Youth Ticket Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Youth Ticket Strategy (2027)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Youth Target</p>
                    <p className="text-sm text-slate-500">50% under 50 years</p>
                  </div>
                  <p className="text-3xl font-bold text-green-600">50%</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Youth Winnability Bonus</p>
                    <p className="text-sm text-slate-500">+15% advantage</p>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">+15%</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Selection Criteria:</strong> Survey-based winnability combined with organizational feedback. Youth bonus does not guarantee ticket - local acceptance and worker network remain critical factors.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Young Turk Profiles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Detailed Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {/* Mohit Mohindra */}
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Mohit Mohindra</h4>
                    <p className="text-sm text-slate-500">PYC President | Age 32</p>
                  </div>
                  <Badge variant="success">Tier 1</Badge>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-teal-600">Caste:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Sood (Hindu)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-teal-600">Education:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">BA LLB, Punjabi University</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-teal-600">Base:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Patiala</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-teal-600">Ticket Prob:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">85%</span>
                  </div>
                </div>
                <div className="mt-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Father Brahm Mohindra legacy provides support base. Strong organizational backing from family connections.</p>
                </div>
              </div>

              {/* Raja Warring */}
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Amrinder Singh Raja Warring</h4>
                    <p className="text-sm text-slate-500">PPCC President | Age 48</p>
                  </div>
                  <Badge variant="success">Tier 1</Badge>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-blue-600">Caste:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Jat Sikh</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-blue-600">Education:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">10th Pass</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-blue-600">Base:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Ludhiana/Gidderbaha</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-blue-600">Ticket Prob:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">95%</span>
                  </div>
                </div>
                <div className="mt-3 p-2 rounded bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-xs text-blue-600 dark:text-blue-400">2024 Ludhiana LS winner. Controls party machinery. Strong organizational control enables ticket certainty.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
