"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, Badge } from "@/components/ui/MetricCard";
import { MapPin, AlertTriangle, Droplets, Users, ShieldAlert, Target } from "lucide-react";

export default function RegionalIssuesPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            <MapPin className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Local Issues: Majha & Doaba
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Region-specific issues ranked by voter priority - Research Date: 19 May 2026
            </p>
          </div>
        </div>
      </motion.div>

      {/* Meta Info */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-4 grid gap-4 md:grid-cols-4"
      >
        <MetricCard title="Majha AAP 2022" value="17/25" subtitle="seats won" color="cyan" />
        <MetricCard title="Majha Congress 2022" value="3/25" subtitle="seats won" color="orange" />
        <MetricCard title="Doaba AAP 2022" value="13/23" subtitle="seats won" color="cyan" />
        <MetricCard title="Doaba Congress 2022" value="7/23" subtitle="seats won" color="orange" />
      </motion.div>

      {/* MAJHA ISSUES */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-red-500" />
              MAJHA REGION - Top 5 Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="danger" className="mb-4">Border Security | Drug Crisis | Water | Sacrilege</Badge>

            {/* Issue 1: Border Farming */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">1</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Border Farming Restrictions & Land Access</h4>
                    <Badge variant="danger">HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">10-12 border seats affected | 21,500 acres farmer land + 10,000 acres govt land</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-3">
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Affected Villages</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">~220</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Total Hectares</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">15-17 Lakh</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Resolution</p>
                      <p className="text-lg font-bold text-yellow-600">PARTIAL</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-amber-50 p-2 dark:bg-amber-900/20">
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      <strong>Key Grievance:</strong> BSF gates open 9am-5pm (summer) / 10am-4pm (winter); 2 Kisan Guards per tractor; some villages (Chhina Bhidichand, Khalra, Vaan, Dhal in Tarn Taran) have fencing 1 km inside Indian territory
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="warning">Central Govt blamed (BSF protocol)</Badge>
                    <Badge variant="warning">AAP blamed (slow implementation)</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 2: Drug Menace */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">2</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Drug Menace & Youth Addiction</h4>
                    <Badge variant="danger">EXTREME Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Tarn Taran (all 3 seats), Amritsar rural, Gurdaspur border belt | Worst district in Punjab</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-4">
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Deaths (32 days)</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">42</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Hooch Deaths (5 yrs)</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">176</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Arrests Claimed</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">992</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Budget 2025-26</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">Rs 438 Cr</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-red-100 p-2 dark:bg-red-900/40">
                    <p className="text-sm text-red-700 dark:text-red-400">
                      <strong>Crucial Data:</strong> 2020 Majha hooch tragedy killed 121 (80 in Tarn Taran alone). Methanol-based spurious liquor killed 27 in Majitha (May 2025). Drone drops from Pakistan routine in Tarn Taran/Amritsar border villages.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="warning">Centre blamed (border sealing)</Badge>
                    <Badge variant="warning">State blamed (rehabilitation)</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 3: Groundwater Contamination */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">3</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Groundwater Contamination - Arsenic & Uranium</h4>
                    <Badge variant="warning">SEVERE Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Amritsar (worst), Tarn Taran, Gurdaspur | Silent public health emergency</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-4">
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Samples Analysed</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">2,709</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Exceed Arsenic Limit</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">16%</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Uranium Contamination</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">62%</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Arsenic Habitations</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">60%</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-blue-100 p-2 dark:bg-blue-900/40">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      <strong>Amritsar:</strong> Highest arsenic - 111 ppb found (safe limit: 0.05 ppm / 50 ppb). 44.10% of samples show &quot;very high&quot; health risk. Tarn Taran has highest uranium in Majha. Study published in Environmental Geochemistry and Health (2024).
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="info">CGWB 2025 Data</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 4: Sacrilege Justice */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">4</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sacrilege Justice & Sikh Religious Sentiment</h4>
                    <Badge variant="warning">HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">All Majha seats | Emotive, politically volatile, mobilises Sikh vote</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-3">
                    <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                      <p className="text-xs text-purple-600 dark:text-purple-400">Cases Since 2015</p>
                      <p className="text-lg font-bold text-purple-700 dark:text-purple-300">97</p>
                    </div>
                    <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                      <p className="text-xs text-purple-600 dark:text-purple-400">Convictions</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">ZERO</p>
                    </div>
                    <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                      <p className="text-xs text-purple-600 dark:text-purple-400">Law Passed Apr 2026</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">Life Imprisonment</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-purple-100 p-2 dark:bg-purple-900/40">
                    <p className="text-sm text-purple-700 dark:text-purple-400">
                      AAP passed &quot;Jagat Jot Sri Guru Granth Sahib Satkar (Amendment) Act&quot; (Apr 2026) with life imprisonment - but ZERO past convictions achieved. Justice Ranjit Singh Commission findings still not acted upon.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="warning">PARTIAL</Badge>
                    <Badge variant="info">Prospective law only</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 5: Hooch Tragedies */}
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold">5</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Spurious Liquor / Hooch Tragedies</h4>
                    <Badge variant="warning">HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Majitha (Amritsar), Tarn Taran seats, Batala (Gurdaspur) | Recurring, deeply emotional</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-3">
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Majitha Deaths (May 2025)</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">27</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Majha Deaths (2020)</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">121</p>
                    </div>
                    <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                      <p className="text-xs text-red-600 dark:text-red-400">Total (5 Years)</p>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">176</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="warning">AAP blamed (excise policy)</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* DOABA ISSUES */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              DOABA REGION - Top 5 Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="success" className="mb-4">NRI Issues | Migration | Industry | Sugarcane</Badge>

            {/* Issue 1: NRI Property */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">1</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">NRI Property Disputes & Diaspora Alienation</h4>
                    <Badge variant="danger">EXTREME Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">All Doaba seats; especially Jalandhar rural, Kapurthala, Nawanshahr, Hoshiarpur</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-4">
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">NRI Commission Complaints</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">50%</p>
                    </div>
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">Actual Estimate</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">10x higher</p>
                    </div>
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">MEA Complaints (2025)</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">140</p>
                    </div>
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">Households Overseas</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">24%</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-green-100 p-2 dark:bg-green-900/40">
                    <p className="text-sm text-green-700 dark:text-green-400">
                      <strong>Key Data:</strong> 80% of NRI complaints are land-related (illegal possession, forged documents, family conflicts). NRI Sabha in institutional crisis (ThePrint, Mar 2026). Canada-India diplomatic rift (2024-25) creating panic. US deportations hitting Doaba families hard.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="info">24% households have overseas members (highest in Punjab)</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 2: Youth Unemployment */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">2</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Youth Unemployment & Migration Crisis</h4>
                    <Badge variant="danger">EXTREME Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">All 23 seats | Existential for Doaba&apos;s demographic future</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-3">
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">Assets Sold (2021-23)</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">Rs 5,636 Cr</p>
                    </div>
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">Borrowed</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">Rs 14,342 Cr</p>
                    </div>
                    <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                      <p className="text-xs text-green-600 dark:text-green-400">Migrants Left After 2016</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">73%</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-green-100 p-2 dark:bg-green-900/40">
                    <p className="text-sm text-green-700 dark:text-green-400">
                      <strong>Pressure Valve Closing:</strong> Visa tightening in Canada (2024), UK deportations, US removals. &quot;Reverse dowry&quot; system emerging - families finance women&apos;s IELTS/education as pathway for men to emigrate through marriage. Inability to migrate seen as social failure affecting marriage prospects.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="info">PAU Survey 2021-23</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 3: Sports & Leather Industry */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">3</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sports Goods & Leather Industry Decline</h4>
                    <Badge variant="warning">HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Jalandhar (all 7 seats), parts of Kapurthala | Core economic identity of Jalandhar</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-4">
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">India&apos;s Sports Goods</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">75%</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Export Countries</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">100+</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Employment</p>
                      <p className="text-lg font-bold text-blue-700 dark:text-blue-300">500,000+</p>
                    </div>
                    <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                      <p className="text-xs text-blue-600 dark:text-blue-400">Policy 2026</p>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">Released</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-blue-100 p-2 dark:bg-blue-900/40">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      <strong>Key Developments:</strong> Punjab Sports & Leather Manufacturing Policy 2026 (Jan 2026). MoU for R&D centre in Jalandhar (Jan 2026). Sports Technology Extension Centre announced (Dec 2025). Despite announcements, actual disbursement and infrastructure creation remains slow.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="warning">PARTIAL</Badge>
                    <Badge variant="info">NITI Aayog seminar held Jan 2026</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 4: Sugarcane Farmer */}
            <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">4</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sugarcane Farmer Arrears & Sugar Mill Crisis</h4>
                    <Badge variant="warning">HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Kapurthala, Nawanshahr (SBS Nagar), Hoshiarpur rural seats | Recurring agitation cycle</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    <div className="rounded bg-amber-50 p-2 dark:bg-amber-900/30">
                      <p className="text-xs text-amber-600 dark:text-amber-400">Total Arrears</p>
                      <p className="text-lg font-bold text-amber-700 dark:text-amber-300">Rs 93 Crore</p>
                    </div>
                    <div className="rounded bg-amber-50 p-2 dark:bg-amber-900/30">
                      <p className="text-xs text-amber-600 dark:text-amber-400">Pending from 2021-22</p>
                      <p className="text-lg font-bold text-amber-700 dark:text-amber-300">Rs 27 Crore</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded bg-amber-100 p-2 dark:bg-amber-900/40">
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      <strong>Key Data:</strong> BKU Doaba demanding reopening of closed sugar mills BUT only after arrears cleared (Nov 2025). Government mills in Nawanshahr and Kapurthala struggling with outdated infrastructure. Hoshiarpur and Nawanshahr also affected by seleniferous soils (PAU study, Dec 2025).
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="warning">PARTIAL</Badge>
                    <Badge variant="info">BKU Doaba agitation intensifying</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 5: Industrial Decline */}
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold">5</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">Industrial Decline & Lack of Private Investment</h4>
                    <Badge variant="warning">MEDIUM-HIGH Priority</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Jalandhar, Kapurthala, Phagwara (industrial belt seats) | Slow-motion crisis</p>
                  <div className="mt-3 rounded bg-slate-100 p-2 dark:bg-slate-700">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Key Dynamics:</strong> Capital flight to Himachal/Haryana. GT Road belt losing competitiveness. Kapurthala&apos;s rail coach factory is only major public-sector employer. Phagwara&apos;s industrial base eroding - sugar, paper, textile units shutting. Hoshiarpur&apos;s horticulture economy (Kinnow, mango, guava) needs processing infrastructure.
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="danger">UNRESOLVED</Badge>
                    <Badge variant="info">Doaba Industrial Corridor needed</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CROSS-CUTTING THEMES */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="bg-purple-50/50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-purple-500" />
              Cross-Cutting Themes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="info" className="mb-4">AAP Performance | Operation Sindoor | Migration Pressure</Badge>

            {/* AAP Performance */}
            <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">AAP Performance Perception (Majha + Doaba)</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded bg-red-50 p-3 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">AAP MLAs Criticised Own Government (Mar 2025)</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">&quot;Feels like Pakistan, ask Finance Minister for funds&quot;</p>
                </div>
                <div className="rounded bg-red-50 p-3 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Congress Claim (Feb 2025)</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">30-32 AAP MLAs ready to switch sides</p>
                </div>
                <div className="rounded bg-amber-50 p-3 dark:bg-amber-900/30">
                  <p className="text-xs text-amber-600 dark:text-amber-400">Delhi Loss Impact (Feb 2025)</p>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Sent shockwaves through Punjab cadre; Mann rejected dissent claims</p>
                </div>
                <div className="rounded bg-amber-50 p-3 dark:bg-amber-900/30">
                  <p className="text-xs text-amber-600 dark:text-amber-400">Block Elections (Dec 2025)</p>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300">&quot;Semi-finals&quot; before 2027 - AAP vs Congress direct fight in Doaba</p>
                </div>
              </div>
            </div>

            {/* Operation Sindoor */}
            <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Operation Sindoor Impact (May 2025)</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
                  <p className="text-xs text-red-600 dark:text-red-400">Blackouts</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Amritsar, Gurdaspur, Tarn Taran - multiple nights</p>
                </div>
                <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
                  <p className="text-xs text-red-600 dark:text-red-400">Schools Shut</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">5-6 border districts for extended periods</p>
                </div>
                <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
                  <p className="text-xs text-red-600 dark:text-red-400">Farmers Impact</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Unplanned evacuations, no compensation, crops damaged</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-cyan-50 p-2 dark:bg-cyan-900/30">
                <p className="text-sm text-cyan-700 dark:text-cyan-400">
                  <strong>Congress Opportunity:</strong> Demand border area compensation package and disaster relief framework
                </p>
              </div>
            </div>

            {/* Migration Pressure Valve */}
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Migration as Political Pressure Valve</h4>
              <div className="mt-3 rounded bg-amber-50 p-3 dark:bg-amber-900/30">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  <strong>Historical Context:</strong> Emigration has acted as &quot;pressure valve&quot; for Jat Sikh discontent - without it, agrarian anger would explode politically (Frontline analysis). Canada/UK visa tightening + US deportations = pressure valve closing.
                </p>
              </div>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Canada</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Visa tightening (2024)</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">UK</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Visa tightening</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">US</p>
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">Deportations hitting families hard</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-green-50 p-2 dark:bg-green-900/30">
                <p className="text-sm text-green-700 dark:text-green-400">
                  <strong>Congress Strategy:</strong> Create local jobs AND protect migration pathways for those who choose them
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CONGRESS STRATEGIC POSITIONING */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="bg-blue-50/50 dark:bg-blue-900/10 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Congress Strategic Positioning Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Majha Strategy */}
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">Majha (25 seats)</h4>
                  <Badge variant="info">Target: 12-15 seats</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Border Champion:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Own border farmer issue - fence realignment, compensation, development package</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Drug Rehabilitation:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Not just interdiction - rehabilitation centres, youth engagement</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Sacrilege Justice:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Beyond AAP&apos;s prospective law - demand convictions for 97 past cases</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Water Crisis:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Make groundwater contamination visible - health camps, RO plants</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Anti-Hooch:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">CBI inquiry into liquor mafia; excise policy overhaul</span>
                  </div>
                </div>
              </div>

              {/* Doaba Strategy */}
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">Doaba (23 seats)</h4>
                  <Badge variant="info">Target: 12-14 seats</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">NRI Rights Champion:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Fast-track courts, digital land records, property protection</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">Industrial Revival:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Doaba Industrial Corridor, sports/leather policy execution</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">Sugarcane Justice:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Clear arrears, modernise mills, cooperative ownership</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">Jobs at Home:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Counter migration narrative with concrete employment programmes</span>
                  </div>
                  <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">Dalit Outreach:</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Doaba&apos;s high SC population needs targeted commitments</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
