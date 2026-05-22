"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/MetricCard";
import { Map } from "lucide-react";

export default function ReligiousPoliticsPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg">
              <Map className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Religious Politics & Sikh Issues
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SGPC paralysis, sacrilege law conflict, 1984 justice narrative
          </p>
        </div>
        <Badge variant="warning">May 2026</Badge>
      </motion.div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Religious Politics & Sikh Issues
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">SGPC paralysis, sacrilege law conflict, 1984 justice narrative</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Jaagat Jot Act 2026</h4>
              <div className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                <p>Life imprisonment (min 10 years) for sacrilege</p>
                <p>Fines Rs 5-25 lakh</p>
                <p>Passed unanimously April 13, 2026</p>
                <p>Akal Takht challenges law validity</p>
              </div>
              <Badge variant="danger">Major Conflict Point</Badge>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">SGPC Elections Frozen</h4>
              <div className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                <p>No elections since 2011 (15 years)</p>
                <p>SAD (Badal) retains control</p>
                <p>30+ of 170 members deceased</p>
                <p>5+ million Sikh voters affected</p>
              </div>
              <Badge variant="warning">Institutional Paralysis</Badge>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">7% Conviction Rate</h4>
              <div className="mt-2 space-y-1 text-sm text-purple-600 dark:text-purple-300">
                <p>44 convictions in 597 cases</p>
                <p>2015 Bargari/Kotkapura cases</p>
                <p>Police firing on protesters unresolved</p>
                <p>Justice Ranjit Singh Commission findings</p>
              </div>
              <Badge variant="info">Justice Delivery Failure</Badge>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">1984 Anti-Sikh Violence</h4>
              <div className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                <p>BJP appeals to Sikh voters on this</p>
                <p>Congress has leadership gap</p>
                <p>40+ years without justice</p>
                <p>Perpetrators still unpunished</p>
              </div>
              <Badge variant="info">Historical Grievance</Badge>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Kartarpur Corridor</h4>
              <div className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                <p>BJP facilitates corridor outreach</p>
                <p>Sikh pilgrims pathway to Pakistan</p>
                <p>November 2019 inaugurated</p>
                <p>Political goodwill generator</p>
              </div>
              <Badge variant="success">BJP Sikh Outreach</Badge>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">GST Waivers on Langar</h4>
              <div className="mt-2 space-y-1 text-sm text-orange-600 dark:text-orange-300">
                <p>GST exemptions on langar purchases</p>
                <p>Community kitchen supplies</p>
                <p>BJP positioning as Sikh ally</p>
                <p>AAP government benefit claim</p>
              </div>
              <Badge variant="success">Religious Minorities</Badge>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Strategic Insight:</strong> SGPC control gives SAD religious voter infrastructure despite losing 2 Assembly elections. Akal Takht-Mann rift (May 2026) alienates religious Sikhs. 7% conviction rate weaponizes AAP broken promise on justice delivery.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Dera Influence Network (69 Seats)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Vote bank alignment and caste consolidation potential</p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Dera Sacha Sauda</h4>
              <div className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                <p>Followers: 1 crore+</p>
                <p>Seats Influenced: 35</p>
                <p>Primary Region: Malwa</p>
                <p>Political Lean: SAD traditional</p>
                <p>Key Issue: Social influence, rural vote bank</p>
              </div>
            </div>

            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">Dera Ballan (Ravidasia)</h4>
              <div className="mt-2 space-y-1 text-sm text-orange-600 dark:text-orange-300">
                <p>Followers: 50 lakh+</p>
                <p>Seats Influenced: 23</p>
                <p>Primary Region: Doaba</p>
                <p>Political Lean: Congress/AAP</p>
                <p>Key Issue: SC reservation, Dera recognition</p>
              </div>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Nam Dhaura</h4>
              <div className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                <p>Followers: 10 lakh+</p>
                <p>Seats Influenced: 8</p>
                <p>Primary Region: Malwa</p>
                <p>Political Lean: SAD</p>
                <p>Key Issue: Rural influence</p>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Radha Soami</h4>
              <div className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                <p>Followers: 20 lakh+</p>
                <p>Seats Influenced: 12</p>
                <p>Primary Region: Malwa/Doaba</p>
                <p>Political Lean: Swing</p>
                <p>Key Issue: Urban/rural middle class</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>Total Impact:</strong> 69 seats influenced, 2 crore+ followers, 10-15% vote shift potential in 15-20 seats from Dera declarations
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
