"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Wallet, Zap, Target, TrendingUp, AlertCircle, Users, BarChart3, Eye, Shield, Activity } from "lucide-react";

export default function MediaStrategyPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              <Target className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Strategy & Budget
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Media budget phases • Endgame creative • Rapid response • Polls & alliances
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </motion.div>

      {/* Congress Media Budget: Rs 100-150 Crore */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader>
            <CardTitle className="text-purple-700 dark:text-purple-400">
              Congress Media Budget: Rs 100-150 Crore (MP5 Deliverable 2)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Phase-wise spending allocation
            </p>

            <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Phase-wise Spending Allocation</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">1</span>
                  <span className="text-sm font-bold text-blue-600">FOUNDATION</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">May–October 2026</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">15-20%</p>
                <p className="text-xs text-slate-500">Rs 15-30 Cr of Rs 100-150 Cr total</p>
                <p className="text-xs text-slate-600 mt-2">Organizational infrastructure, surveys, war room setup</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">2</span>
                  <span className="text-sm font-bold text-indigo-600">CAMPAIGN PERIOD</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Nov 2026 – Last 14 Days</p>
                <p className="text-2xl font-bold text-indigo-600 mt-2">55-60%</p>
                <p className="text-xs text-slate-500">Rs 55-90 Cr of Rs 100-150 Cr total</p>
                <p className="text-xs text-slate-600 mt-2">Paid TV + digital + ground activation</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
                  <span className="text-sm font-bold text-red-600">ENDGAME</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Final 14 Days</p>
                <p className="text-2xl font-bold text-red-600 mt-2">35-40%</p>
                <p className="text-xs text-slate-500">Rs 35-40 Cr of Rs 100-150 Cr total</p>
                <p className="text-xs text-slate-600 mt-2">60% of undecided voters decide in last 10 days</p>
              </motion.div>
            </div>

            {/* Channel Breakdown */}
            <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Channel Breakdown (Rs 100 Cr Scenario)</h4>
            <DataTable
              headers={["Channel", "%", "Rs Crore", "Key Components"]}
              rows={[
                ["TV (Punjabi + Hindi GECs)", "25-30%", "₹25-30 Cr", "PTC Punjabi, Channel 5, Zee Punjabi, DD Punjabi"],
                ["Digital (Meta + Google/YouTube)", "13-17%", "₹13-17 Cr", "Facebook/Instagram, Google search, YouTube pre-roll"],
                ["Outdoor/Billboard", "8-10%", "₹8-10 Cr", "GT Road hoardings, Amritsar 100ft Chowk"],
                ["Print Display", "8-10%", "₹8-10 Cr", "Punjab Kesari, Ajit, Dainik Bhaskar"],
                ["Ground Audio (jangla/chawk)", "2-3%", "₹2-3 Cr", "Mobile audio, village announcements"],
                ["Contingency Reserve", "15-20%", "₹15-30 Cr", "48-hr activation inventory"],
              ]}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Rapid Response Cell */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-400">
              Rapid Response Cell (MP5-016)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600 dark:text-orange-400">
              5-person team • 90-min text rebuttal SLA • 5,000+ misinformation monitors
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-bold text-orange-600">Rapid Response Cell</p>
                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <p>• 5-person team on shift basis</p>
                  <p>• Sunrise test monitoring (velocity tracking)</p>
                  <p>• 90-min text rebuttal SLA</p>
                  <p>• 3-hr video rebuttal SLA</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-bold text-orange-600">Misinformation Monitors</p>
                <p className="text-2xl font-bold text-orange-600 mt-2">5,000+</p>
                <p className="text-xs text-slate-500">Ground workers trained to screenshot and escalate</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-bold text-orange-600">Alt News / Boom Liaison</p>
                <p className="text-xs text-slate-600 mt-2">2-person contact cell within RRC for fact-check institutions</p>
              </div>
            </div>

            {/* Response Time Benchmarks */}
            <h4 className="mt-6 font-semibold text-orange-900 dark:text-orange-100">Response Time Benchmarks</h4>
            <DataTable
              headers={["Response Type", "SLA", "Owner"]}
              rows={[
                ["Social media rebuttal", "<15 minutes", "Social media responders"],
                ["Press statement", "<60 minutes", "Spokespersons"],
                ["Text rebuttal", "<90 minutes", "Rapid Response Cell"],
                ["Video rebuttal", "<3 hours", "Content team"],
                ["Legal notice", "<24 hours", "Legal officer"],
              ]}
            />

            <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-sm text-red-700 dark:text-red-300">
                <strong>Critical Gap:</strong> Congress&apos;s WhatsApp counter-misinformation capability is underdeveloped. BJP IT Cell has 150,000+ WhatsApp workers vs Congress&apos;s 5,000 monitors.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Endgame Creative Sequence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20">
          <CardHeader>
            <CardTitle className="text-pink-700 dark:text-pink-400">
              Endgame Creative Sequence (MP5-020)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-pink-600 dark:text-pink-400">
              Final 14 days creative deployment strategy
            </p>

            <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 1-7: Negative Contrast</h4>
            <div className="mt-2 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700">Intensify anti-AAP messaging:</p>
              <div className="mt-2 grid gap-2 md:grid-cols-4">
                <span className="text-xs">• Drugs crisis</span>
                <span className="text-xs">• Broken promises</span>
                <span className="text-xs">• Governance failures</span>
                <span className="text-xs">• Sheesh Mahal framing</span>
              </div>
            </div>

            <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 8-12: Aspiration</h4>
            <div className="mt-2 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-700">Positive Congress agenda:</p>
              <div className="mt-2 grid gap-2 md:grid-cols-4">
                <span className="text-xs">• Farmer income</span>
                <span className="text-xs">• Youth employment</span>
                <span className="text-xs">• Rural development</span>
                <span className="text-xs">• Congress positive vision</span>
              </div>
            </div>

            <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 13-14: Turnout</h4>
            <div className="mt-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700">Mobilization and wave narrative:</p>
              <div className="mt-2 grid gap-2 md:grid-cols-3">
                <span className="text-xs">• &quot;Every vote counts&quot;</span>
                <span className="text-xs">• Congress wave narrative</span>
                <span className="text-xs">• Anti-BJP nationalist framing</span>
              </div>
            </div>

            <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Pre-Produced Assets Ready for Deployment</h4>
            <DataTable
              headers={["Asset", "Timeline", "Notes"]}
              rows={[
                ["Victory/failure 30-min content package", "Ready within 2 hrs of exit poll", "Pre-filmed for rapid distribution"],
                ["Print + digital ad inventory (post-result)", "₹5 Cr reserved", "Immediate post-result messaging"],
                ["Rahul Gandhi final rally content", "Pre-filmed", "For rapid distribution"],
              ]}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Opinion Polls for Punjab 2027 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20">
          <CardHeader>
            <CardTitle className="text-indigo-700 dark:text-indigo-300">
              Opinion Polls: Punjab 2027 Assembly (A-07-14 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Congress leads in anti-incumbency wave; No party crosses majority (59 seats) in most polls
            </p>

            <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Historical Results Baseline</h4>
            <DataTable
              headers={["Party", "2017 Vote %", "2017 Seats", "2022 Vote %", "2022 Seats"]}
              rows={[
                ["AAP", "23.72%", "20", "42.01%", "92"],
                ["Congress", "38.50%", "77", "22.98%", "18"],
                ["SAD", "25.24%", "15", "18.38%", "3"],
                ["BJP", "5.44% (alliance)", "3", "6.59%", "2"],
              ]}
            />

            <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">2027 Assembly Seat Projections (May 2026 Polls)</h4>
            <DataTable
              headers={["Pollster/Source", "Date", "Congress", "AAP", "SAD", "BJP", "Methodology"]}
              rows={[
                ["InsightRadarX", "May 18, 2026", "45-52", "28-33", "14-18", "8-10", "Aggregated surveys"],
                ["YouTube Poll", "May 5, 2026", "58", "32", "15", "9", "Social media"],
                ["YouTube Poll", "April 23, 2026", "55", "37", "12", "8", "Social media"],
                ["Facebook Poll", "April 12, 2026", "51", "32", "18", "11", "Social media"],
                ["Facebook Poll", "~May 2026", "57", "33", "17", "9", "Social media"],
              ]}
            />

            <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Key Poll Findings for Congress</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Consistent Congress lead across all polls (45-58 seats range)</li>
                <li>No party crosses 59-seat majority mark in most projections</li>
                <li>BJP surge from 7% (2022) to 18%+ shows significant vote transfer from SAD</li>
                <li>Congress must resolve CM face ambiguity to convert lead to majority</li>
                <li>Party commissioned 3 internal surveys (mid-May 2026) under Sunil Kanugolu</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Media Alliances & Political Affiliations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardHeader>
            <CardTitle className="text-amber-700 dark:text-amber-300">
              Media Alliances & Political Affiliations (A-07-13 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              PTC Network (Badal/SAD) most overt political ownership; AAP government spent Rs 1,534 crore on ads (2017-2025)
            </p>

            <h4 className="mt-6 font-semibold text-amber-900 dark:text-amber-100">Media Outlet Political Affiliations</h4>
            <DataTable
              headers={["Outlet", "Type", "Owner", "Political Alignment", "Confidence"]}
              rows={[
                ["PTC News", "TV", "Sukhbir Singh Badal (via Gur-Baz Media)", "SAD (direct ownership)", "VERIFIED"],
                ["PTC Punjabi", "TV", "Badal family", "SAD (direct ownership)", "VERIFIED"],
                ["Punjab Kesari", "Print (Hindi)", "Chopra family", "Centre-right / anti-AAP", "VERIFIED"],
                ["Jagbani", "Print (Punjabi)", "Hind Samachar Group", "Centre-right / anti-AAP", "VERIFIED"],
                ["Ajit", "Print (Punjabi)", "Barjinder Singh Hamdard", "Independent with influence", "UNCERTAIN"],
                ["The Tribune", "Print (English)", "Dyal Singh Trust", "Independent / centrist", "VERIFIED"],
                ["ABP Sanjha", "TV", "ABP Network", "Neutral / commercially driven", "UNCERTAIN"],
                ["Zee Punjab", "TV", "Subhash Chandra (BJP Rajya Sabha)", "BJP-aligned", "VERIFIED"],
              ]}
            />

            <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-300">Key Hostile Actions (2025-2026)</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Jan 2026: Raids on Punjab Kesari Group establishments (excise, GST, food dept)</li>
                <li>Nov 2025: Government stopped ads to newspapers publishing &quot;sheeshmahal&quot; story</li>
                <li>Nov 2025: Trucks stopped/searched under drug pretext, delaying newspaper delivery</li>
                <li>Apr 2026: Journalists filed formal complaints about censorship by AAP government</li>
                <li>May 2026: Rs 10.59 crore contract for &quot;online reputation management&quot;</li>
              </ul>
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Congress Media Structural Gap</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>No dedicated media arm in Punjab (unlike PTC for SAD)</li>
                <li>Limited government advertising leverage (not in power)</li>
                <li>Relies on neutral/independent outlets (The Tribune, Rozana Spokesman)</li>
                <li>Must build relationships with Ajit post-Badal alignment uncertainty</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top 3 Media Relationships */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader>
            <CardTitle className="text-cyan-700 dark:text-cyan-400">
              Top 3 Media Relationships (MP5 Deliverable 6)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">
              Critical cultivation targets for Congress media strategy
            </p>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
                <span className="text-sm font-bold text-red-600">Punjab Kesari</span>
                <Badge variant="danger">CRITICAL</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-2">Highest-circulation Punjabi newspaper in Punjab</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div><span className="text-xs font-medium">Circulation:</span> <span className="text-xs">~2-3 lakh+ copies/day</span></div>
                <div><span className="text-xs font-medium">Reach:</span> <span className="text-xs">All 3 regions, all castes</span></div>
                <div><span className="text-xs font-medium">Lean:</span> <span className="text-xs">BJP-RSS leaning (2/5)</span></div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Cultivation: Regular off-the-record briefings, exclusive content, op-ed placement, advertising commitment</p>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">2</span>
                <span className="text-sm font-bold text-red-600">Punjabi YouTube Ecosystem</span>
                <Badge variant="danger">CRITICAL</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-2">Primary info platform for urban youth (18-35)</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div><span className="text-xs font-medium">Targets:</span> <span className="text-xs">3-5 key creators 100K+ subscribers</span></div>
                <div><span className="text-xs font-medium">Budget:</span> <span className="text-xs">₹3-5 Cr of total media</span></div>
                <div><span className="text-xs font-medium">Format:</span> <span className="text-xs">Comedy/political satire effective</span></div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Cultivation: Pre-briefing sessions, exclusive visual content, sponsored content (ECI compliant)</p>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">3</span>
                <span className="text-sm font-bold text-blue-600">Alt News + Boom (Fact-Check)</span>
                <Badge variant="info">HIGH</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-2">Third-party credibility amplifiers for rebuttals</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div><span className="text-xs font-medium">Alt News 2025:</span> <span className="text-xs">61% viral misinformation pro-BJP</span></div>
                <div><span className="text-xs font-medium">Amit Malviya:</span> <span className="text-xs">Top peddler (12 fact-checks)</span></div>
                <div><span className="text-xs font-medium">Rahul Gandhi:</span> <span className="text-xs">Most targeted individual (17/46)</span></div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Cultivation: Proactive flagging, filing for verification, leveraging data in narrative</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment & Opinion Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20">
          <CardHeader>
            <CardTitle className="text-indigo-700 dark:text-indigo-300">
              Sentiment & Opinion Tracking (MP7-003)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Real-time dashboard components • Sentiment shift alerts • Buzz tracking • Emotion analysis
            </p>

            <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Sentiment Shift Alert Thresholds</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-4">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <Badge variant="info">Level 1</Badge>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">5-10% swing in 24h</p>
                <p className="text-xs text-slate-500">Log, monitor</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <Badge variant="warning">Level 2</Badge>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">10-20% swing in 24h</p>
                <p className="text-xs text-slate-500">Team notification, preliminary assessment</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <Badge variant="danger">Level 3</Badge>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">&gt;20% swing in 24h</p>
                <p className="text-xs text-slate-500">Senior leadership alert, strategy review</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <Badge variant="danger">CRISIS</Badge>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Extreme negative spike</p>
                <p className="text-xs text-slate-500">Immediate war room escalation</p>
              </div>
            </div>

            <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Emotion Detection Categories (MP7-003)</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-4">
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-sm font-semibold text-red-700">Anger</p>
                <p className="text-xs text-slate-500">Drug deaths, broken promises, corruption</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
                <p className="text-sm font-semibold text-orange-700">Fear</p>
                <p className="text-xs text-slate-500">Crime, unemployment, lawlessness</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <p className="text-sm font-semibold text-green-700">Hope</p>
                <p className="text-xs text-slate-500">Change expectation, new leadership</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                <p className="text-sm font-semibold text-purple-700">Pride</p>
                <p className="text-xs text-slate-500">Punjabiyat, Sikh identity, achievement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Competitive Monitoring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
          <CardHeader>
            <CardTitle className="text-emerald-700 dark:text-emerald-300">
              Competitive Monitoring (MP7-004)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              AAP Activity Tracker • Competitor KPI Dashboard • Counter-Narrative Tracking
            </p>

            <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Social Media KPI Comparison</h4>
            <DataTable
              headers={["Platform", "Metric", "AAP (Baseline)", "Congress (Target)", "SAD", "BJP"]}
              rows={[
                ["Facebook", "Page Likes", "45L", "12L", "8L", "5L"],
                ["Facebook", "Engagement Rate", "4.2%", "2.1%", "1.8%", "1.5%"],
                ["Twitter/X", "Followers", "18L", "6L", "2L", "9L"],
                ["Instagram", "Followers", "32L", "9L", "3L", "4L"],
                ["YouTube", "Subscribers", "22L", "4L", "1L", "6L"],
              ]}
            />

            <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">AAP Vulnerability Matrix</h4>
            <DataTable
              headers={["Issue", "AAP Vulnerability", "Congress Opportunity", "Priority"]}
              rows={[
                ["Drug Crisis", "High (promised eradication)", "Actual death data, failed promise", "CRITICAL"],
                ["Employment", "High (youth emigration)", "Skill development, industry", "HIGH"],
                ["Governance", "Medium (sand mining, liquor)", "Anti-corruption narrative", "HIGH"],
                ["Farmer Welfare", "Medium (MSP demand)", "MSP guarantee commitment", "HIGH"],
              ]}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
