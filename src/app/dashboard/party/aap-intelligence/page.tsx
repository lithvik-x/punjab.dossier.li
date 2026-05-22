"use client";

import { MetricCard, Badge, ProgressBar } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { AlertTriangle, Users, Wallet, Smartphone, Building2, TrendingUp, CheckCircle, XCircle, AlertCircle, Target, Heart, Vote } from "lucide-react";

export default function AAPIntelligencePage() {
  return (
    <div className="space-y-8">
      {/* AAP PARTY STRUCTURE & LEADERSHIP - from MP3-001 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-rose-600" />
              <CardTitle>AAP Party Structure & Organizational Strength</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AAP Punjab organizational hierarchy — centralized Delhi-controlled model
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="National Convenor"
                value="Arvind Kejriwal"
                subtitle="Founded 26 Nov 2012; Total control"
                color="rose"
              />
              <MetricCard
                title="Punjab Incharge"
                value="Manish Sisodia"
                subtitle="Replaced Sandeep Pathak, March 2025"
                color="rose"
              />
              <MetricCard
                title="State President"
                value="Aman Arora"
                subtitle="Replaced Bhagwant Mann, 2025"
                color="rose"
              />
              <MetricCard
                title="CM / State Convener"
                value="Bhagwant Mann"
                subtitle="Since 16 March 2022; Dhuri MLA"
                color="rose"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Cabinet Ministers</p>
                  <p className="text-2xl font-bold text-rose-600">16</p>
                  <p className="text-xs text-slate-500">As of January 2026</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Party Zones</p>
                  <p className="text-2xl font-bold text-rose-600">3</p>
                  <p className="text-xs text-slate-500">Majha, Doaba, Malwa (subdivided)</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Districts Covered</p>
                  <p className="text-2xl font-bold text-rose-600">28</p>
                  <p className="text-xs text-slate-500">District presidents appointed May 2025</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Wings Structure</p>
              <div className="mt-2 grid grid-cols-5 gap-2 text-center text-xs">
                <span className="rounded bg-rose-100 px-2 py-1 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Youth Wing (AYW)</span>
                <span className="rounded bg-rose-100 px-2 py-1 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Mahila Shakti (AMS)</span>
                <span className="rounded bg-rose-100 px-2 py-1 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">CYSS (Students)</span>
                <span className="rounded bg-rose-100 px-2 py-1 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">SVS (Labour)</span>
                <span className="rounded bg-rose-100 px-2 py-1 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Nasha Mukti Morcha</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-rose-200 bg-rose-100/50 p-3 dark:border-rose-800 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <p className="text-sm font-medium text-rose-600">Critical Weakness: Inner-Party Democracy = ZERO</p>
              </div>
              <p className="text-xs text-slate-600 mt-1">All positions appointed by Kejriwal; no internal elections; Punjab Incharge replaced unilaterally March 2025 without consultation</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP FINANCIAL WAR CHEST - from MP3-005 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-orange-600" />
              <CardTitle>AAP Financial Resources & War Chest</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AAP vs Congress financial comparison for Punjab 2027
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="AAP Donations (FY 24-25)"
                value="38.1 Cr"
                subtitle="Tripled from 11.06 Cr in FY 23-24"
                change={244}
                trend="up"
                color="orange"
              />
              <MetricCard
                title="Congress Donations (FY 24-25)"
                value="517.4 Cr"
                subtitle="13.6x more than AAP nationally"
                color="blue"
              />
              <MetricCard
                title="Development Fund"
                value="585 Cr"
                subtitle="Rangla Punjab Vikas Scheme"
                color="emerald"
              />
              <MetricCard
                title="Per Constituency"
                value="5 Cr"
                subtitle="117 constituencies × 5L each"
                color="orange"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2022 Punjab Campaign (Central HQ)</p>
                  <p className="text-2xl font-bold text-orange-600">6.23 Cr</p>
                  <p className="text-xs text-slate-500">vs SADs 16.57 Cr (same election)</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">ECI Expenditure Limit</p>
                  <p className="text-2xl font-bold text-orange-600">40 Lakh</p>
                  <p className="text-xs text-slate-500">Per candidate for Punjab Assembly</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Debt Burden</p>
                  <p className="text-2xl font-bold text-rose-600">4.17L Cr</p>
                  <p className="text-xs text-slate-500">Projected March 2026 (from 2.83L Cr in 2022)</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg border border-orange-200 bg-orange-100/50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-600">Advantage: Ruling Party Access to Development Funds</p>
              <p className="text-xs text-slate-600 mt-1">Timing of welfare announcements, MLA-linked constituency funds (5L each), government ad spending (10.59 Cr alleged "reputation management")</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP DIGITAL & SOCIAL MEDIA - from MP3-006 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-purple-600" />
              <CardTitle>AAP Digital & Social Media Capabilities</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              WhatsApp-centric war room model; volunteer-driven digital army
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="WhatsApp Reach/Hour"
                value="7 Lakh"
                subtitle="Single group message reach (2017 baseline)"
                color="purple"
              />
              <MetricCard
                title="Punjab Internet Penetration"
                value="84%"
                subtitle="NITI Aayog 2020-21; highest in India"
                color="emerald"
              />
              <MetricCard
                title="Digital Volunteers"
                value="450+"
                subtitle="2017 Punjab social media team size"
                color="purple"
              />
              <MetricCard
                title="Proxy Ads Spend"
                value="14 Lakh"
                subtitle="5,900+ ads on Facebook (Mar 2023-Dec 2024)"
                color="rose"
              />
            </div>
            <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-purple-600" />
                <p className="text-sm font-medium text-purple-600">Vulnerability: Volunteer Model Fragility</p>
              </div>
              <p className="text-xs text-slate-600 mt-1">Passion-driven volunteers (not paid); 8 MLA defections to BJP (2024-25) demonstrate organizational fragility; tech infrastructure weak (2017: no laptops for social media team)</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP BOOTH-LEVEL MACHINERY - from MP3-007 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-cyan-200 bg-cyan-50/50 dark:border-cyan-800 dark:bg-cyan-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-600" />
              <CardTitle>AAP Booth-Level Election Machinery</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Volunteer-dependent, technology-enabled network
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="Total Booths"
                value="13,000+"
                subtitle="Across 117 assembly constituencies"
                color="cyan"
              />
              <MetricCard
                title="AAP Volunteers (2016)"
                value="~1 Lakh"
                subtitle="Party claim for 2017 elections; no updated figure"
                color="cyan"
              />
              <MetricCard
                title="Volunteer Ratio"
                value="1:15-20"
                subtitle="1 volunteer per 15-20 households at peak"
                color="cyan"
              />
              <MetricCard
                title="Congress Booth Sevaks"
                value="25,000"
                subtitle="+ 1.25 Lakh assistants (May 2026)"
                color="rose"
              />
            </div>
            <div className="mt-4 rounded-lg border border-rose-200 bg-rose-100/50 p-3 dark:border-rose-800 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <p className="text-sm font-medium text-rose-600">Critical Weaknesses Identified</p>
              </div>
              <div className="mt-1 text-xs text-slate-600 space-y-1">
                <p>1. Rural Depth Deficit: Volunteer base concentrated in urban/semi-urban areas</p>
                <p>2. Caste-Community Anchoring: No organic networks like SAD (Sikh rural) or Congress (SC/OBC)</p>
                <p>3. Local Leadership Vacuum: First-time MLAs lack generational political networks</p>
                <p>4. Volunteer Motivation Erosion: Broken promises, governance failures, 8 MLA defections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP GOVERNANCE RECORD CARD - from MP3-003 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Vote className="h-5 w-5 text-slate-600" />
              <CardTitle>AAP Governance Record: 5 Guarantees Scorecard (2022-2026)</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Delivery assessment based on MP3-003 research
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">300 Units Free Electricity</span>
                  <span className="ml-2 text-xs text-slate-500">— Rs 23,953 Cr interest burden (23% of revenue); Punjab became first state to implement</span>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
                <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-400">Rs 1,000/Month for Women</span>
                  <span className="ml-2 text-xs text-slate-500">— No disbursement as of March 2025; 4th consecutive budget without allocation; cost: Rs 12,000 Cr/month for ~1 Cr women</span>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
                <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-400">25 Lakh Jobs</span>
                  <span className="ml-2 text-xs text-slate-500">— No significant job creation; youth immigration continues; NRI emigration to Canada/UK/Australia</span>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
                <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-400">Drug-Free Punjab</span>
                  <span className="ml-2 text-xs text-slate-500">— 4 deadlines missed (pre-2022: 3 months; Aug 2023; Dec 2024; Feb 2025); deaths: 89(2023)→106(2024); 1 in 7 Punjab residents consumes drugs</span>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
                <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400">World-Class Health/Education</span>
                  <span className="ml-2 text-xs text-slate-500">— 400+ Mohalla Clinics delivered vs 500 promised; 50% specialist doctor posts vacant; 984/1,927 principal posts vacant (51%)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Debt Trajectory</p>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between"><span>March 2022:</span><span className="font-medium">2.83L Cr</span></div>
                    <div className="flex justify-between"><span>2022-23:</span><span className="font-medium">3.14L Cr</span></div>
                    <div className="flex justify-between"><span>2023-24:</span><span className="font-medium">3.46L Cr</span></div>
                    <div className="flex justify-between"><span>2024-25:</span><span className="font-medium">3.83L Cr</span></div>
                    <div className="flex justify-between border-t pt-1"><span>Projected 2026:</span><span className="font-medium text-rose-600">4.17L Cr</span></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Drug Crisis Data</p>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between"><span>Deaths 2023:</span><span className="font-medium">89</span></div>
                    <div className="flex justify-between"><span>Deaths 2024:</span><span className="font-medium text-rose-600">106 (2nd highest India)</span></div>
                    <div className="flex justify-between"><span>Drug consumers:</span><span className="font-medium">15.4% of population</span></div>
                    <div className="flex justify-between"><span>Encounters Jan-Mar 2025:</span><span className="font-medium">41</span></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Fiscal Situation</p>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="flex justify-between"><span>Debt-to-GSDP:</span><span className="font-medium">~47%</span></div>
                    <div className="flex justify-between"><span>Interest/Revenue:</span><span className="font-medium">22.72%</span></div>
                    <div className="flex justify-between"><span>Power Subsidy:</span><span className="font-medium">~23%</span></div>
                    <div className="flex justify-between"><span>Committed Exp:</span><span className="font-medium text-rose-600">122% of revenue</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP 2027 STRATEGY INTELLIGENCE - from MP3-010 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-indigo-200 bg-indigo-50/50 dark:border-indigo-800 dark:bg-indigo-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-indigo-600" />
              <CardTitle>AAP 2027 Election Strategy Intelligence</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Incumbent defense strategy; going solo; Malwa focus
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="AAP Seat Claim (2027)"
                value="100+"
                subtitle="Manish Sisodia claim (unverified)"
                color="purple"
              />
              <MetricCard
                title="Realistic 2027 Projection"
                value="32-39"
                subtitle="April 2026 opinion polls"
                trend="down"
                color="rose"
              />
              <MetricCard
                title="CM Candidate"
                value="Bhagwant Mann"
                subtitle="Unchanged; no succession plan visible"
                color="purple"
              />
              <MetricCard
                title="Alliance Status"
                value="SOLO"
                subtitle="No pre-poll alliances; going alone"
                color="purple"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Strategic Shifts</p>
                  <div className="mt-2 space-y-2 text-xs">
                    <div><span className="font-medium text-indigo-600">Relocated to Punjab:</span> Delhi strategy team moved post-Delhi defeat (Feb 2025)</div>
                    <div><span className="font-medium text-indigo-600">War Room:</span> Chandigarh-based dedicated election war room established</div>
                    <div><span className="font-medium text-indigo-600">Rebranding:</span> "Delhi Model" → "Kejriwal Model" (Punjabi edition launched)</div>
                    <div><span className="font-medium text-indigo-600">Regional Focus:</span> Heavy Malwa concentration (69/117 seats)</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">New Policy Initiatives 2027</p>
                  <div className="mt-2 space-y-2 text-xs">
                    <div><span className="font-medium text-indigo-600">Anti-Sacrilege Bill:</span> Life imprisonment/death penalty; Panthic voter appeal</div>
                    <div><span className="font-medium text-indigo-600">Women Stipend:</span> Rs 1,000/month (announced March 2026, ~8 months before expected Feb 2027 election)</div>
                    <div><span className="font-medium text-indigo-600">Mukh Mantri Sehat Bima:</span> Rs 10 lakh cover for 65 lakh families (Jan 2026)</div>
                    <div><span className="font-medium text-indigo-600">Holy City Status:</span> Amritsar and Sri Anandpur Sahib</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg border border-rose-200 bg-rose-100/50 p-3 dark:border-rose-800 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <p className="text-sm font-medium text-rose-600">Critical Intelligence Gaps</p>
              </div>
              <div className="mt-1 text-xs text-slate-600 space-y-1">
                <p>• Booth-level organization specifics (no disclosed voter contact methodology)</p>
                <p>• Digital campaign budget (no figures available)</p>
                <p>• Mann's CM candidacy (internal deliberations opaque)</p>
                <p>• Scheme sustainability funding (no disclosed fiscal plan for Rs 1,000/month given depleted exchequer)</p>
                <p>• Defection impact (organizational damage from 7 MP defections unquantified)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP Ally/Enemy Relationships - from MP3-008 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-amber-600" />
              <CardTitle>AAP Ally & Enemy Relationships in Punjab</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No formal allies; open hostility with BJP; rivalry with Congress
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="Formal Allies"
                value="0"
                subtitle="AAP has NO allies in Punjab (2025-2026)"
                color="rose"
              />
              <MetricCard
                title="RS MP Defections (Apr 2026)"
                value="7 of 10"
                subtitle="Crossed to BJP; AAP reduced from 10 to 3 RS MPs"
                color="rose"
              />
              <MetricCard
                title="MLA Defection Risk"
                value="30"
                subtitle="Reportedly in touch with Congress (Feb 2025 claim)"
                color="rose"
              />
              <MetricCard
                title="BJP Vote Share Growth"
                value="5.4%→18.5%"
                subtitle="2017 (with SAD) to 2024 Lok Sabha (solo)"
                color="rose"
              />
            </div>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-100/50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-600">2027 Alliance Probability: NIL</p>
              </div>
              <p className="text-xs text-slate-600 mt-1">AAP and Congress will go solo in Punjab 2027. INDIA alliance at national level does NOT extend to Punjab. Mann: "AAP will get 13 seats" (Jan 2024) — confirming no seat-sharing.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
