"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable } from "@/components/ui/MetricCard";
import { Shield, AlertTriangle } from "lucide-react";

export default function ElectionSecurityPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-white shadow-lg">
              <Shield className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Election Security Intelligence
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            High-risk constituencies, gangster networks, CAPF deployment
          </p>
        </div>
        <Badge variant="danger">CRITICAL</Badge>
      </motion.div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Security Infrastructure
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-red-700 dark:text-red-400">CAPF Deployment 2022</h4>
                <Badge variant="danger">~1,050 Companies</Badge>
              </div>
              <div className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
                <p>~1,050 companies of Central Armed Police Forces deployed in 2022 Assembly elections</p>
                <p>Tarn Taran bypoll (Nov 2025): 12 companies for single constituency</p>
                <p>Security war room recommended by October 2026</p>
              </div>
            </div>

            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400">23,232 Polling Stations</h4>
                <Badge variant="warning">Critical Infrastructure</Badge>
              </div>
              <div className="mt-3 space-y-2 text-sm text-orange-600 dark:text-orange-300">
                <p>Electoral rolls mapped at 83.69%</p>
                <p>Sensitive booth identification critical</p>
                <p>Risk tier classification required</p>
              </div>
            </div>

            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">Lawrence Bishnoi Syndicate</h4>
                <Badge variant="danger">700+ Members</Badge>
              </div>
              <div className="mt-3 space-y-2 text-sm text-purple-600 dark:text-purple-300">
                <p>700+ active members</p>
                <p>2,500+ known associates</p>
                <p>Cross-border network operations</p>
                <p>Sukha Duneke also operational</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            10 High-Risk Constituencies
          </h3>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Constituency", "Risk Level", "Primary Threat", "Security Priority"]}
              rows={[
                ["Tarn Taran", "CRITICAL", "gangster networks + border", "Immediate"],
                ["Moga", "HIGH", "Drug networks", "High"],
                ["Ludhiana Rural", "HIGH", "Urban-extremism link", "High"],
                ["Ferozpur", "HIGH", "Border + contraband", "High"],
                ["Jalandhar", "MEDIUM-HIGH", "Criminal syndicates", "Medium"],
                ["Kapurthala", "MEDIUM", "Inter-state networks", "Medium"],
                ["Pathankot", "MEDIUM", "Strategic location", "Medium"],
                ["Hoshiarpur", "MEDIUM", "Rural crime", "Medium"],
                ["Gurdaspur", "MEDIUM", "Border dynamics", "Medium"],
                ["Mansa", "MEDIUM", "Drug money", "Medium"],
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
        <CardContent className="flex items-center gap-3 pt-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">Cyber Security Warning</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">ECI systems vulnerable to intrusions. Mock poll websites, fake news dissemination, and voter data breaches are documented risks. 229A IPC penalties for electoral malpractice.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            WhatsApp Army Sizes
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Digital reach comparison</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <span className="font-medium text-slate-700 dark:text-slate-300">BJP</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-white">8-10 lakh</span>
                <Badge variant="success">Growing</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <span className="font-medium text-slate-700 dark:text-slate-300">AAP</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-white">4-5 lakh</span>
                <Badge variant="info">Stable</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <span className="font-medium text-slate-700 dark:text-slate-300">Congress</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-white">2-3 lakh</span>
                <Badge variant="info">Growing slowly</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <span className="font-medium text-slate-700 dark:text-slate-300">SAD</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-white">1-2 lakh</span>
                <Badge variant="danger">Declining</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
