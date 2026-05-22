"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/MetricCard";
import { Map } from "lucide-react";

export default function RegionalAnalysisPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
              <Map className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Regional Analysis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Malwa, Majha, and Doaba grievances and dynamics
          </p>
        </div>
        <Badge variant="info">117 Seats</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">MALWA</h3>
              <Badge variant="danger">69 Seats</Badge>
            </div>
            <p className="text-sm font-medium text-red-600 dark:text-red-300 mt-2">Drugs + Debt</p>
            <div className="mt-4 space-y-2 text-sm text-red-600 dark:text-red-300">
              <p>Highest drug network penetration</p>
              <p>Bargari sacrilege legacy</p>
              <p>Farmer debt is cultural narrative</p>
              <p>Jat Sikh dominance</p>
              <p>3-way contest (AAP-Congress-SAD)</p>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-white dark:bg-slate-800">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Key Issues:</p>
              <p className="text-xs text-slate-500 mt-1">Drug crisis, farmer debt, groundwater depletion, cancer cases (1 in 20 households Malwa)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">MAJHA</h3>
              <Badge variant="warning">27 Seats</Badge>
            </div>
            <p className="text-sm font-medium text-orange-600 dark:text-orange-300 mt-2">Jobs + Security</p>
            <div className="mt-4 space-y-2 text-sm text-orange-600 dark:text-orange-300">
              <p>Border area, military/farm concentration</p>
              <p>Youth migration to armed forces/overseas</p>
              <p>4-way contest (AAP-Congress-SAD-BJP)</p>
              <p>Strong BJP in urban areas</p>
              <p>SAD retains some pockets</p>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-white dark:bg-slate-800">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Key Issues:</p>
              <p className="text-xs text-slate-500 mt-1">Border security, drug smuggling routes, youth unemployment, religious sentiment</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">DOABA</h3>
              <Badge variant="info">23 Seats</Badge>
            </div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-300 mt-2">Water + Work</p>
            <div className="mt-4 space-y-2 text-sm text-blue-600 dark:text-blue-300">
              <p>Highest groundwater depletion in Punjab</p>
              <p>Highest NRI population</p>
              <p>Remittance dependency creates aspiration gap</p>
              <p>Highest SC concentration (8 SC-reserved seats)</p>
              <p>BSP splits Dalit vote</p>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-white dark:bg-slate-800">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Key Issues:</p>
              <p className="text-xs text-slate-500 mt-1">Water crisis, NRI voter influence, SC representation, educational opportunities</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Vote Share Math
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-slate-700 dark:text-white">59</p>
              <p className="text-xs text-slate-500">Seats for Majority</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-slate-700 dark:text-white">~32-35%</p>
              <p className="text-xs text-slate-500">Vote Share Needed</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">+8.7%</p>
              <p className="text-xs text-slate-500">From Current 26.3%</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">1.2M</p>
              <p className="text-xs text-slate-500">New Voters Needed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Caste Composition by Region
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <div className="flex justify-between">
                <span className="font-medium text-red-700 dark:text-red-400">Malwa (69 seats)</span>
                <span className="text-sm text-slate-500">Jat Sikh 25%, OBC 31%, SC 32%, Sikh 58%</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <div className="flex justify-between">
                <span className="font-medium text-orange-700 dark:text-orange-400">Majha (27 seats)</span>
                <span className="text-sm text-slate-500">Jat Sikh 20%, SC 28%, Sikh 65%, Hindu 32%</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex justify-between">
                <span className="font-medium text-blue-700 dark:text-blue-400">Doaba (23 seats)</span>
                <span className="text-sm text-slate-500">SC 38% (highest), OBC 29%, Ravidasia heartland</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
