"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Globe, Users, AlertTriangle, Vote, TrendingUp, Building, Flag } from "lucide-react";

const nriVoterData = {
  totalNRIPunjab: "7 lakh (700,000)",
  totalDiasporaGlobal: "3-5 million",
  canada: "~950,000",
  usa: "~600,000+",
  uk: "~400,000-500,000",
  australia: "~300,000",
  registeredVoters2019: 393,
  actualVotesCast2019: 0,
  voterRegistrationRate: "<0.1%",
  influenceMultiplier: "5-8x through family pressure",
  doabaConcentration: "Highest per-capita NRI population",
  nriSabhaCrisis: "Jan 2026 - elections delayed, governance paralyzed",
  propertyFraud: "~50% of NRI complaints to Punjab State Commission",
};

const nriPlatformUsage = [
  { platform: "WhatsApp", usage: "75-80%", ageGroup: "25-70+", contentType: "Text, voice notes, group chains", politicalUtility: "Primary family influence tool" },
  { platform: "Facebook", usage: "70-75%", ageGroup: "30-65+", contentType: "Video, live streams, groups", politicalUtility: "Community mobilization" },
  { platform: "YouTube", usage: "55-65%", ageGroup: "18-55+", contentType: "Long/short video, commentary", politicalUtility: "Punjabi news channels, political commentary" },
  { platform: "Instagram", usage: "35-45%", ageGroup: "18-40", contentType: "Reels, stories", politicalUtility: "Limited direct political influence" },
  { platform: "Twitter/X", usage: "15-25%", ageGroup: "25-55", contentType: "Text, threads", politicalUtility: "Elite influence, journalists" },
  { platform: "Telegram", usage: "10-15%", ageGroup: "20-45", contentType: "Channels, group chats", politicalUtility: "Pro-Khalistan networks" },
];

const nriSabhaCrisis = {
  established: "1996/1998",
  registeredMembers: "23,000",
  presidentTermExpired: "January 4, 2026",
  currentStatus: "Elections delayed, governance paralyzed",
  courtCase: "Punjab & Haryana High Court petition filed",
  chiefPatron: "Chief Minister",
  allegations: "Constitutional violations, no AGM, no financial transparency",
};

const indiaCanadaTensions = {
  csisReport: "May 1, 2026 - India conducts foreign interference in Canada",
  confirmedActivities: ["Assassination", "Murder plots", "Extortion", "Electoral interference"],
  canadaResponse: "Liberal MPs condemned ongoing interference (Feb 2026)",
  diplomaticReset: "Modi-Carney meeting March 2026 at G7",
  impactOnPunjab: "Dual-edge: emboldens radical Sikh voices + boosts BJP anti-separatist narrative",
};

const bjpNriStrategy = {
  diasporaMeet: "First-ever Punjabi Diaspora Meet - Chandigarh, February 2026",
  rajyaSabhaPlatform: "6 of 7 Punjab MPs now BJP",
  missionPunjab: "Amit Shah's NRI voter engagement component",
  advantage: "RSS/VHP global networks, resource advantage",
  weakness: "1984 perception problem in Sikh diaspora",
};

const nriData = {
  total: "7 lakh",
  influence: "Doaba NRI belt (23 assembly seats)",
  votingImpact: "Proxy voting, remittance influence on families",
  concern: "Canada-India interference (CSIS May 2026)",
};

export default function NRIVotersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              NRI Voters
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            NRI voter data, diaspora influence, and platform preferences
          </p>
        </div>
        <Badge variant="success">7 Lakh NRIs from Punjab</Badge>
      </div>

      {/* NRI Voter Data */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>NRI Voter Data - Complete Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a23-punjab-nri-political-influence-2026, g22-nri-digital-outreach-mobilization-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total NRI Punjab</span>
                  <span className="font-bold text-purple-500">{nriVoterData.totalNRIPunjab}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Global Diaspora</span>
                  <span className="font-bold text-purple-500">{nriVoterData.totalDiasporaGlobal}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                    <span className="text-slate-400">Canada: </span><strong>{nriVoterData.canada}</strong>
                  </div>
                  <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                    <span className="text-slate-400">USA: </span><strong>{nriVoterData.usa}</strong>
                  </div>
                  <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                    <span className="text-slate-400">UK: </span><strong>{nriVoterData.uk}</strong>
                  </div>
                  <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                    <span className="text-slate-400">Australia: </span><strong>{nriVoterData.australia}</strong>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Registered Voters (2019)</span>
                  <Badge variant="danger">{nriVoterData.registeredVoters2019}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Actual Votes Cast (2019)</span>
                  <Badge variant="danger">0</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Voter Registration Rate</span>
                  <Badge variant="warning">{nriVoterData.voterRegistrationRate}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Influence Multiplier</span>
                  <Badge variant="success">{nriVoterData.influenceMultiplier}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">NRI Sabha Crisis</span>
                  <Badge variant="danger">{nriVoterData.nriSabhaCrisis}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>NRI Voter Influence Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">NRIs from Punjab</span>
                  <span className="font-bold text-purple-500">{nriData.total}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Key region</span>
                  <span className="font-bold text-slate-500">{nriData.influence}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Canada interference</span>
                  <Badge variant="warning">CSIS May 2026</Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">{nriData.votingImpact}. NRI Sabha crisis Jan 2026.</p>

              <div className="mt-6 rounded bg-purple-50 p-4 dark:bg-purple-900/20">
                <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Top Issues for NRI Voters</h4>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-red-600">#1</span>
                    <span className="text-slate-600">Drug abuse - top concern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-orange-600">#2</span>
                    <span className="text-slate-600">Youth unemployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-yellow-600">#3</span>
                    <span className="text-slate-600">Property disputes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-600">#4</span>
                    <span className="text-slate-600">1984 anti-Sikh riots</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* NRI Platform Usage */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>NRI Platform Usage - Digital Channel Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-6">From g22-nri-digital-outreach-mobilization-2026</p>
            <div className="overflow-x-auto">
              <DataTable
                headers={["Platform", "Usage %", "Age Group", "Content Type", "Political Utility"]}
                rows={nriPlatformUsage.map((p) => [p.platform, p.usage, p.ageGroup, p.contentType, p.politicalUtility])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* NRI Sabha Crisis */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>NRI Sabha Crisis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From a23-punjab-nri-political-influence-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">NRI Sabha Established</span>
                  <span className="font-bold text-slate-500">{nriSabhaCrisis.established}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Registered Members</span>
                  <Badge variant="info">{nriSabhaCrisis.registeredMembers}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">President Term Expired</span>
                  <Badge variant="danger">{nriSabhaCrisis.presidentTermExpired}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Current Status</span>
                  <Badge variant="danger">Elections delayed, paralyzed</Badge>
                </div>
              </div>
              <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-xs font-bold text-red-700 dark:text-red-400">CSIS Report (May 1, 2026):</p>
                <p className="text-xs text-red-600 dark:text-red-300">India confirmed conducting foreign interference in Canada - assassination, murder plots, extortion. Liberal MPs condemned ongoing interference (Feb 2026).</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>BJP NRI Strategy - Accelerated Push</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From g22-nri-digital-outreach-mobilization-2026</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Diaspora Meet</span>
                  <Badge variant="danger">{bjpNriStrategy.diasporaMeet}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Rajya Sabha Platform</span>
                  <Badge variant="info">{bjpNriStrategy.rajyaSabhaPlatform}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Mission Punjab</span>
                  <Badge variant="info">{bjpNriStrategy.missionPunjab}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">BJP Advantage</span>
                  <Badge variant="info">{bjpNriStrategy.advantage}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">BJP Weakness</span>
                  <Badge variant="warning">{bjpNriStrategy.weakness}</Badge>
                </div>
              </div>
              <div className="mt-4 rounded bg-orange-50 p-3 dark:bg-orange-900/20">
                <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Congress IOC Status:</p>
                <p className="text-xs text-orange-600 dark:text-orange-300">Chairman: Sam Pitroda (reappointed June 2024). 25+ country chapters. Rahul Gandhi met IOC Europe Dec 2025. Structural intent exists but execution gap vs BJP&apos;s resource advantage.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* India-Canada Tensions Impact */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-red-700 dark:text-red-400">India-Canada Tensions Impact on Punjab</p>
                <p className="text-sm text-red-600 dark:text-red-300">{indiaCanadaTensions.impactOnPunjab}</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-bold text-slate-600">Confirmed Activities (CSIS May 2026):</p>
                <ul className="mt-2 text-xs text-slate-500">
                  {indiaCanadaTensions.confirmedActivities.map((a) => (
                    <li key={a}>- {a}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-bold text-slate-600">Diplomatic Developments:</p>
                <p className="mt-2 text-xs text-slate-500">{indiaCanadaTensions.diplomaticReset}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Party Support */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>NRI Party Support Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400">AAP</p>
                <p className="mt-2 text-xs text-slate-600">Strong NRI support in 2017 and 2022 elections; planeloads of NRIs (3,500 in 2017) flew to campaign</p>
                <p className="mt-2 text-xs text-red-500">Concerns: Silence on India-Canada Nijjar crisis, Pro-Khalistan elements in support base</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-sm font-bold text-green-700 dark:text-green-400">Congress</p>
                <p className="mt-2 text-xs text-slate-600">Indian Overseas Congress (IOC) structured engagement; coordinators in UK, Europe, USA, Canada, Australia</p>
                <p className="mt-2 text-xs text-slate-500">Activity: Planning virtual strategy meeting ahead of 2027</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="text-sm font-bold text-orange-700 dark:text-orange-400">SAD</p>
                <p className="mt-2 text-xs text-slate-600">Historically strong NRI support especially in Canada; significantly eroded since 2017</p>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="text-sm font-bold text-purple-700 dark:text-purple-400">BJP</p>
                <p className="mt-2 text-xs text-slate-600">No distinct NRI voter base; primarily Hindu NRI segments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
