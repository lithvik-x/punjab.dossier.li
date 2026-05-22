"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/MetricCard";
import { AlertTriangle } from "lucide-react";

interface GrievanceItem {
  issue: string;
  severity: number;
  salience: number;
  region: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

interface AngryVoterProfile {
  segment: string;
  grievance: string;
  intensity: number;
  AAP2022: string;
  recovery: string;
  action: string;
}

export default function GrievanceAnalysisPage() {
  const grievanceMatrix: GrievanceItem[] = [
    { issue: "Drug Abuse Persistence", severity: 9.5, salience: 10, region: "All (Malwa highest)", priority: "CRITICAL" },
    { issue: "Youth Unemployment/Migration", severity: 9, salience: 9, region: "All (Majha highest)", priority: "CRITICAL" },
    { issue: "Farmer Debt/Agricultural Distress", severity: 8, salience: 8, region: "Malwa (69 seats)", priority: "HIGH" },
    { issue: "Water Crisis (Groundwater)", severity: 7.5, salience: 7, region: "Doaba (highest), Malwa", priority: "HIGH" },
    { issue: "Law & Order/Gangster Culture", severity: 7.5, salience: 8, region: "Urban, Majha border", priority: "HIGH" },
  ];

  const angryVoterProfiles: AngryVoterProfile[] = [
    { segment: "Youth (18-35, Male)", grievance: "Unemployment + Drugs", intensity: 9.5, AAP2022: "55-60%", recovery: "HIGH", action: "Door-to-door in urban/fringe" },
    { segment: "SC Voters (All)", grievance: "Drugs + Employment", intensity: 9, AAP2022: "50-55%", recovery: "HIGH-MEDIUM", action: "Booth-level SC mobilization" },
    { segment: "Women (25-55)", grievance: "Safety + Family drugs", intensity: 8.5, AAP2022: "48-52%", recovery: "MEDIUM-HIGH", action: "Women-focused meetings" },
    { segment: "Farmers (Malwa)", grievance: "Debt + Water + MSP", intensity: 8.5, AAP2022: "40-45%", recovery: "MEDIUM", action: "Farmer union + dera outreach" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-lg">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Grievance Analysis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Priority issues and angry voter profiles for targeted outreach
          </p>
        </div>
        <Badge variant="danger">May 2026</Badge>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Grievance Priority Matrix (AAP Governance Gaps)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Gap x Salience: Severity vs Voter Importance</p>
            <div className="mt-4 space-y-3">
              {grievanceMatrix.map((g) => (
                <div key={g.issue} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-900">
                  <div className={`h-2 w-2 rounded-full ${
                    g.priority === "CRITICAL" ? "bg-red-500" : g.priority === "HIGH" ? "bg-orange-500" : "bg-yellow-500"
                  }`} />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{g.issue}</span>
                      <Badge variant={g.priority === "CRITICAL" ? "danger" : g.priority === "HIGH" ? "warning" : "info"}>
                        {g.priority}
                      </Badge>
                    </div>
                    <div className="mt-1 flex gap-4 text-xs text-slate-500">
                      <span>Severity: {g.severity}/10</span>
                      <span>Salience: {g.salience}/10</span>
                      <span>{g.region}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <p className="text-sm text-red-700 dark:text-red-400">
                <strong>Key Insight:</strong> Drug abuse + unemployment account for 65-70% of voter grievance intensity. These must anchor Congress grievance narrative.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Angry Voter Profiles (Recovery Targets)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">High-grievance segments with AAP 2022 votes to recover</p>
            <div className="mt-4 space-y-3">
              {angryVoterProfiles.map((v) => (
                <div key={v.segment} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{v.segment}</span>
                    <Badge variant={v.recovery.includes("HIGH") ? "success" : "info"}>
                      {v.recovery} Recovery
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Grievance:</span>
                      <span className="ml-1 text-slate-700 dark:text-slate-300">{v.grievance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Intensity:</span>
                      <span className="ml-1 font-medium text-red-500">{v.intensity}/10</span>
                    </div>
                    <div>
                      <span className="text-slate-500">AAP 2022:</span>
                      <span className="ml-1 text-orange-500">{v.AAP2022}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Action: {v.action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Issue Ownership Gaps
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Where Congress can capitalize on AAP failures</p>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Drug Eradication</h4>
              <p className="mt-2 text-sm text-red-600 dark:text-red-300">AAP owned but failed - opportunity for Congress</p>
              <Badge variant="danger" className="mt-2">Gap Opportunity</Badge>
            </div>

            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">Youth Employment</h4>
              <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">AAP owned but failed - anger opportunity</p>
              <Badge variant="warning" className="mt-2">Gap Opportunity</Badge>
            </div>

            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Farmer Welfare/MSP</h4>
              <p className="mt-2 text-sm text-green-600 dark:text-green-300">Congress traditional but SAD split complicates</p>
              <Badge variant="success" className="mt-2">Congress Owned</Badge>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Law & Order</h4>
              <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">BJP opportunity with Nasha Mukt narrative</p>
              <Badge variant="warning" className="mt-2">BJP Opportunity</Badge>
            </div>

            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">Good Governance</h4>
              <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">AAP owned but corruption perceptions</p>
              <Badge variant="info" className="mt-2">AAP Owned</Badge>
            </div>

            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Healthcare</h4>
              <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">AAP owned but failed - vacancy crisis</p>
              <Badge variant="info" className="mt-2">AAP Owned</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
