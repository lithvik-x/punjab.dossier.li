"use client";

import { MetricCard, ProgressBar, Badge, DataTable } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { CAMPAIGN_CHANNELS } from "@/lib/constants";
import { Users, TrendingUp, Building2, Smartphone, UserCheck, AlertTriangle } from "lucide-react";

const partyWorkers = [
  { level: "District Presidents (DCC)", count: 29, coverage: 100, note: "Appointed Nov 2025" },
  { level: "Block-level Officers", count: 341, coverage: 95 },
  { level: "AC Coordinators", count: 117, coverage: 100, note: "Appointed June 2025" },
  { level: "Booth-level Sevaks", count: 300000, coverage: 78, note: "Total appointed workers" },
];

export default function CongressWorkersPage() {
  const campaignChannels = CAMPAIGN_CHANNELS.slice(0, 6);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-cyan-600" />
                Worker Hierarchy
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Party organization structure & coverage
              </p>
            </CardHeader>
            <CardContent>
              <div className="mt-6 space-y-4">
                {partyWorkers.map((level, i) => (
                  <div key={level.level} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{level.level}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {level.count.toLocaleString()}
                        </span>
                      </div>
                      <ProgressBar
                        label=""
                        value={level.coverage}
                        color="cyan"
                        showPercentage={false}
                      />
                    </div>
                    <Badge variant={level.coverage === 100 ? "success" : level.coverage > 80 ? "info" : "warning"}>
                      {level.coverage}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Campaign Channel Performance
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Reach & engagement metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="mt-6 space-y-4">
                {campaignChannels.map((channel) => (
                  <div key={channel.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{channel.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">{(channel.reach / 1000000).toFixed(1)}M</span>
                        <Badge variant={channel.engagement > 0.6 ? "success" : channel.engagement > 0.3 ? "info" : "warning"}>
                          {channel.engagement * 100}%
                        </Badge>
                      </div>
                    </div>
                    <ProgressBar
                      label=""
                      value={channel.engagement * 100}
                      color="blue"
                      showPercentage={false}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-slate-600" />
                Party Leadership
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Key appointments & hierarchy
              </p>
            </CardHeader>
            <CardContent>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">PPCC President</p>
                    <p className="text-sm text-slate-500">Raja Warring</p>
                  </div>
                  <Badge variant="info">State President</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">AICC In-Charge</p>
                    <p className="text-sm text-slate-500">Bhupesh Baghel</p>
                  </div>
                  <Badge variant="info">Central Appointee</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">CLP Leader</p>
                    <p className="text-sm text-slate-500">Partap Singh Bajwa</p>
                  </div>
                  <Badge variant="success">Legislative</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">Deputy CLP Leader</p>
                    <p className="text-sm text-slate-500">Sukhjinder Singh Randhawa</p>
                  </div>
                  <Badge variant="success">Legislative</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-slate-600" />
                Congress Digital Deficit vs AAP
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Social media laggard analysis
              </p>
            </CardHeader>
            <CardContent>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Twitter/X</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-rose-600">Congress ~185K-200K</span>
                    <span className="mx-2 text-slate-400">vs</span>
                    <span className="text-sm font-medium text-emerald-600">AAP 482K</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-rose-600">Congress ~50K-100K</span>
                    <span className="mx-2 text-slate-400">vs</span>
                    <span className="text-sm font-medium text-emerald-600">AAP ~200K-300K</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Facebook</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">1,001,400</span>
                    <span className="mx-2 text-slate-400">likes</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Engagement Rate</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-rose-600">AAP generates 10-20x more</span>
                    <span className="mx-2 text-slate-400">Twitter engagement</span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
                  <p className="text-sm font-medium text-rose-600">Zero engagement with Punjabi YouTubers, Instagram creators</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-slate-600" />
              Organizational Structure
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Party committee composition
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
                <p className="text-2xl font-bold text-cyan-600">51</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">DCC Members</p>
                <p className="mt-1 text-xs text-slate-500">Per District Congress Committee</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <p className="text-2xl font-bold text-blue-600">31</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">BCC Members</p>
                <p className="mt-1 text-xs text-slate-500">Per Block Congress Committee</p>
              </div>
              <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
                <p className="text-2xl font-bold text-cyan-600">117</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Assembly Segments</p>
                <p className="mt-1 text-xs text-slate-500">One booth sevak per booth</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Digital Youth Congress Elections</span>
                <Badge variant="success">Concluded</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">Internal party democracy for youth wing leadership</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-cyan-600" />
              Sangathan Srijan Abhiyan
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Party revival & recruitment campaign
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Worker Recruitment</span>
                    <span className="text-sm font-medium text-cyan-600">3 Lakh+</span>
                  </div>
                  <p className="text-xs text-slate-500">Booth-level workers mobilized</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">DCC Restructuring</span>
                    <span className="text-sm font-medium text-blue-600">29/29 Districts</span>
                  </div>
                  <p className="text-xs text-slate-500">New presidents appointed Nov 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Booth Activation</span>
                    <span className="text-sm font-medium text-cyan-600">78% Target</span>
                  </div>
                  <p className="text-xs text-slate-500">Full coverage by August 2026</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <DataTable
          headers={["Zone", "Districts", "Workers", "Booth Agents", "Coverage", "Priority"]}
          rows={[
            ["Majha", "4", "12,500", "8,420", "85%", "High"],
            ["Malwa", "12", "45,000", "32,100", "82%", "Critical"],
            ["Doaba", "3", "15,000", "9,800", "78%", "Medium"],
            ["Powadh", "3", "8,500", "5,200", "71%", "High"],
          ]}
          caption="Zone-wise Worker Distribution"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle>Organizational Warfare — BJP vs Congress Grassroots Comparison (MP3-007, MP3-014)</CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Ground machinery determines electoral outcomes in FPTP systems
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-700 dark:text-amber-400">BJP Swayamsevak Network</h4>
                <p className="text-2xl font-bold text-amber-600 mt-2">11 Lakh+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">RSS-organized volunteers</p>
                <p className="text-xs text-slate-500 mt-2">India&apos;s largest grassroots organization. RSS integration provides ideological coherence. Active in 600+ mandals across Punjab.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress Booth Organization</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">300,000</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Booth-level workers</p>
                <p className="text-xs text-slate-500 mt-2">78% booth coverage (target 100% by Aug 2026). No equivalent to BJP&apos;s RSS-structured Swayamsevak network.</p>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Critical Gap:</strong> AAP&apos;s WhatsApp-centric model (15,000+ groups) provides fast information flow but lacks RSS-equivalent grassroots penetration. Congress digital deficit vs AAP is 2-3x on social media. <strong>Source: MP3-007</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
