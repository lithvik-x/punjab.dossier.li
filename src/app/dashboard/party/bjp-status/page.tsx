"use client";

import { MetricCard, Badge, ProgressBar } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Users, Wallet, Map, Target, Zap, Building2 } from "lucide-react";

export default function BJPStatusPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            B
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              BJP Punjab — Party Intelligence
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Organisational structure, war chest, strategy analysis, district-wise strength
            </p>
          </div>
        </div>
      </motion.div>

      {/* BREAKING - Going Solo Alert */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-orange-700 dark:text-orange-400">BJP Going Solo 2027 — Confirmed March 2026</p>
                <p className="text-sm text-orange-600 dark:text-orange-300">
                  Amit Shah declared BJP will contest all 117 seats independently. Alliance with SAD (1997-2020) permanently dissolved.
                  23-year partnership replaced by solo expansion strategy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CORE METRICS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Vote Share 2024 LS"
            value="18.56%"
            subtitle="Up from 6.6% in 2022 Assembly (+182%)"
            change={182}
            trend="up"
            color="orange"
          />
          <MetricCard
            title="Assembly Seats"
            value="2 / 117"
            subtitle="Won 2 in 2022 (Mukerian, Pathankot)"
            change={0}
            trend="neutral"
            color="orange"
          />
          <MetricCard
            title="Lok Sabha 2024"
            value="0 / 13"
            subtitle="Drew blank despite 18.56% vote share"
            color="rose"
          />
          <MetricCard
            title="Target 2027"
            value="25-30%"
            subtitle="Vote share ambition; Amit Shah projection"
            color="blue"
          />
        </div>
      </motion.div>

      {/* VOTE SHARE TRAJECTORY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-slate-600" />
              <CardTitle>Vote Share Trajectory — The 3x Surge</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sources: ECI, IndiaVotes, Hindustan Times, Indian Express (June 2024)
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-300">2017 Assembly</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">6.6%</p>
                  <p className="mt-1 text-xs text-slate-500">Alliance with SAD (part of 23-yr pact)</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-300">2019 Lok Sabha</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">9.63%</p>
                  <p className="mt-1 text-xs text-slate-500">Alliance with SAD; won 2 of 13 LS seats</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-300">2022 Assembly</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">6.6%</p>
                  <p className="mt-1 text-xs text-slate-500">Alliance with SAD; won 2/117 seats</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-300">2024 Lok Sabha</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">18.56%</p>
                  <p className="mt-1 text-xs text-slate-500">Solo; 0/13 seats but 3x vote share surge</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Key Insight:</strong> BJP&apos;s 2024 surge was driven by <strong>Hindu vote polarisation</strong> in urban/semi-urban areas — a counter-consolidation against farmer protest disruptions. Party led in 23 of 117 assembly segments and crossed 20,000 votes in 46 segments despite winning zero Lok Sabha seats.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ORGANISATIONAL STRUCTURE */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-orange-600" />
              <CardTitle>Organisational Structure</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              36 organisational districts — 21 new district presidents elected August 2025
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard
                title="State President"
                value="Sunil Jakhar"
                subtitle="Appointed July 2023; Hindu Jat face from Abohar"
                color="orange"
              />
              <MetricCard
                title="Working President"
                value="Ashwani Sharma"
                subtitle="Appointed July 2025; Pathankot MLA; 4th term"
                color="orange"
              />
              <MetricCard
                title="Punjab Incharge"
                value="BL Santosh"
                subtitle="National Gen. Secretary (Org); key strategist"
                color="orange"
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Organisational Districts</p>
                  <p className="text-2xl font-bold text-orange-600">36</p>
                  <p className="text-xs text-slate-500">Some revenue districts have multiple org districts</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">New District Presidents</p>
                  <p className="text-2xl font-bold text-orange-600">21 (Aug 2025)</p>
                  <p className="text-xs text-slate-500">Elected unopposed; trigger for state president election</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Org. Mandals</p>
                  <p className="text-2xl font-bold text-orange-600">600+</p>
                  <p className="text-xs text-slate-500">Booth-level mandal infrastructure</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 rounded-lg border border-orange-200 bg-orange-100/50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <p className="text-sm font-medium text-orange-600">Defection-Driven Expansion Model</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Unlike AAP (volunteer-built) or Congress (inherited networks), BJP Punjab is building through elite poaching.
                Since 2021, 15+ sitting/former MLAs and MPs from Congress, SAD, and AAP have joined BJP.
                <strong> Risk:</strong> No organic grassroots cadre in rural Sikh-majority areas; over-reliance on outsourced
                leaders creates ideological incoherence (Frontline, Feb 2026).
              </p>
            </div>

            {/* Defectors Timeline */}
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold text-orange-700 dark:text-orange-400">Defector Intake Timeline</h4>
              <div className="grid gap-2 md:grid-cols-5">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3 text-xs">
                    <span className="font-bold text-orange-600">2021</span>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">Captain Amarinder Singh, Sunil Jakhar</p>
                    <p className="text-slate-400">from Congress</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3 text-xs">
                    <span className="font-bold text-orange-600">2022</span>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">Arvind Khanna, Parampal Kaur</p>
                    <p className="text-slate-400">from Congress/SAD</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3 text-xs">
                    <span className="font-bold text-orange-600">2023</span>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">Daman Thind Bajwa</p>
                    <p className="text-slate-400">from Congress</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3 text-xs">
                    <span className="font-bold text-orange-600">2024</span>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">Sushil Rinku, Manjinder Singh Sirsa, Ravneet Bittu</p>
                    <p className="text-slate-400">from AAP/SAD/Congress</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3 text-xs">
                    <span className="font-bold text-orange-600">2025</span>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">Jagdeep Cheema, Inder Iqbal Singh</p>
                    <p className="text-slate-400">from SAD</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* KEY LEADERS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-slate-600" />
              <CardTitle>Key Leaders</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      SJ
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Sunil Jakhar</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">State President (since July 2023)</p>
                      <p className="mt-1 text-xs text-slate-500">Former Congress Punjab chief; Hindu Jat face</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      AS
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Ashwani Sharma</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">Working President (since July 2025)</p>
                      <p className="mt-1 text-xs text-slate-500">Pathankot MLA; 4th term as working president</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      AM
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Amarinder Singh</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">Former CM (Joined BJP since 2021)</p>
                      <p className="mt-1 text-xs text-slate-500">2-term Congress CM (2002-07, 2017-21)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      RB
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Ravneet Singh Bittu</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">Union Minister (since 2024)</p>
                      <p className="mt-1 text-xs text-slate-500">Congress MP from Ludhiana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      SR
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Sushil Kumar Rinku</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">Sitting MP (Joined since 2024)</p>
                      <p className="mt-1 text-xs text-slate-500">AAP MP from Jalandhar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-100 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-900/10">
                <CardContent className="pt-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      MS
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Manjinder Singh Sirsa</p>
                      <p className="text-xs text-orange-600 dark:text-orange-300">Senior Leader (since 2024)</p>
                      <p className="mt-1 text-xs text-slate-500">SAD leader; joined BJP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-3 text-xs dark:bg-slate-700">
              <p className="text-slate-600 dark:text-slate-300">
                <strong>Leadership Gap:</strong> No mass-level Sikh leader emerged despite high-profile defections.
                Sunil Jakhar is a Hindu Jat, Ashwani Sharma a Hindu Rajput, Amarinder Singh a Sikh royal but past electoral prime.
                Party lacks organic Sikh face in rural Sikh-majority belts.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* RSS NETWORK */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <CardTitle>RSS Network & Organisational Infrastructure</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              RSS provides the organisational backbone BJP lacks organically in Punjab
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-5">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">Swayamsevaks</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-400">1,700+</p>
                  <p className="text-xs text-slate-500">Core RSS cadre in Punjab</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">Shakhas</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-400">41+</p>
                  <p className="text-xs text-slate-500">Locations across urban centres</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">Organisational Mandals</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-400">600+</p>
                  <p className="text-xs text-slate-500">Booth-level coverage</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">Shakti Kendras</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-400">Booth-level</p>
                  <p className="text-xs text-slate-500">Micro-organisation grid</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">Vidya Bharati Schools</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-400">150+</p>
                  <p className="text-xs text-slate-500">7,000-8,000 students enrolled</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4">
              <h4 className="mb-3 text-sm font-semibold text-purple-700 dark:text-purple-400">Five Point Victory Plan (RSS-Designed)</h4>
              <div className="space-y-2">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">Samrasta Abhiyan</p>
                        <p className="text-xs text-slate-500">Shared cremation grounds campaign targeting 250 villages to build inter-community trust</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">Ram Tradition Link</p>
                        <p className="text-xs text-slate-500">Valmiki Tirth promotion, Valmiki Ramayan distribution, Luv-Kush narrative for Dalit outreach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">Sant Ravidas Celebrations</p>
                        <p className="text-xs text-slate-500">650th Birth Anniversary (June 2026-June 2027) celebrated at block level across Doaba</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                        4
                      </span>
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">Dalit Saints Network</p>
                        <p className="text-xs text-slate-500">4-year project developing saint-based narrative delivery mechanism for SC communities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                        5
                      </span>
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">Ghar Wapsi</p>
                        <p className="text-xs text-slate-500">Homecoming campaign framed around discrimination as cause of religious conversion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-600" />
                <p className="text-sm font-medium text-purple-600">Dalit + OBC Outreach Target</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Punjab has 32% SC population (highest in India) and 31% OBC population. BJP&apos;s Dalit Saints Network +
                Sant Ravidas anniversary campaign targets Dalit vote fragmentation away from Congress/AAP.
                Reserved seats: 34 of 117 assembly constituencies.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* WAR CHEST */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-amber-600" />
              <CardTitle>Financial War Chest</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              National-level financial dominance; 93% of Punjab donations captured
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="BJP National Donations"
                value="6,074 Cr"
                subtitle="FY 2024-25; 5,522 donations via Form 24A"
                color="amber"
              />
              <MetricCard
                title="BJP Punjab Donations"
                value="60.30 Cr"
                subtitle="93% of total Rs 64.74 Cr donated in Punjab (2024-25)"
                color="amber"
              />
              <MetricCard
                title="AAP Punjab Donations"
                value="0.71 Cr"
                subtitle="Just 1.1% of Punjab donations; vastly outspent"
                color="rose"
              />
              <MetricCard
                title="Congress Punjab Donations"
                value="3.73 Cr"
                subtitle="5.8% of Punjab donations (2024-25)"
                color="blue"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Corporate Share</p>
                  <p className="text-2xl font-bold text-amber-600">88%</p>
                  <p className="text-xs text-slate-500">Rs 57.10 Cr from corporate/business houses of total Rs 64.74 Cr</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">BJP Cash & Equivalents (National)</p>
                  <p className="text-2xl font-bold text-amber-600">~4,500 Cr</p>
                  <p className="text-xs text-slate-500">Audited annual report; Indian Express Jan 2026</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2024 LS Election Spend</p>
                  <p className="text-2xl font-bold text-amber-600">1,738 Cr</p>
                  <p className="text-xs text-slate-500">BJP national LS 2024 spending; highest ever by any party</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-100/50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-600">Implication for Punjab 2027</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                BJP nationally outspent Congress ~4:1 in 2024-25 (Rs 6,074 Cr vs Rs ~500 Cr). With 93% donation capture in Punjab,
                BJP can deploy vastly superior resources vs AAP (Rs 71 lakh) and Congress (Rs 3.73 Cr). Yet Punjab is a
                high-expenditure state — spending on ads, rallies, and voter outreach will be critical.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* DISTRICT-WISE STRENGTH MAP */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Map className="h-5 w-5 text-emerald-600" />
              <CardTitle>District-Wise Strength & Key Constituencies</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              BJP led in 23/117 assembly segments in 2024 LS; strong in 35+ Hindu/urban segments
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">Top 22 Urban Hindu Strongholds</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {["Abohar", "Balluana", "Jalandhar Central", "Jalandhar North", "Rajpura", "Dera Bassi", "Patiala", "Ludhiana East", "Ludhiana South", "Ludhiana Central", "Ludhiana North", "Ludhiana West", "Amritsar Central", "Amritsar East", "Ferozepur City", "Mukerian", "Dasuya", "Hoshiarpur", "Sujanpur", "Bhoa", "Pathankot", "Bathinda Urban"].map((s) => (
                      <span key={s} className="rounded bg-emerald-100 px-2 py-1 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Source: Hindustan Times assembly-wise analysis (June 2024)</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">Border Districts — Strategic Focus</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Pathankot</span><span className="font-medium text-emerald-600">Strongest — BJP ahead in all segments</span></div>
                    <div className="flex justify-between"><span>Gurdaspur</span><span className="font-medium text-emerald-600">Strong — over 20,000 votes; LS seat lost narrowly</span></div>
                    <div className="flex justify-between"><span>Hoshiarpur</span><span className="font-medium text-emerald-600">Incumbent LS seat lost but strong vote share</span></div>
                    <div className="flex justify-between"><span>Ferozepur</span><span className="font-medium text-emerald-600">City segment strong; rural weak</span></div>
                    <div className="flex justify-between"><span>Amritsar</span><span className="font-medium text-emerald-600">Central/East segments strong; rural weak</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Gained leads in</p>
                  <p className="text-2xl font-bold text-emerald-600">23 segments</p>
                  <p className="text-xs text-slate-500">Out of 117 assembly segments (2024 LS)</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Crossed 20,000 votes in</p>
                  <p className="text-2xl font-bold text-emerald-600">46 segments</p>
                  <p className="text-xs text-slate-500">Demonstrates broad-based urban reach</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Urban segments outperformed</p>
                  <p className="text-2xl font-bold text-emerald-600">35+</p>
                  <p className="text-xs text-slate-500">Hindu/urban/semi-urban dominated constituencies</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-100/50 p-3 dark:border-emerald-800 dark:bg-emerald-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-emerald-600" />
                <p className="text-sm font-medium text-emerald-600">Rural Weakness — The Sikh Belt Gap</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                BJP is virtually absent in Sikh-dominated rural areas of Malwa (Bathinda Rural, Muktsar, Faridkot, Barnala)
                and Majha (Tarn Taran, Amritsar Rural, Gurdaspur Rural). In Khadoor Sahib (Panthic seat), BJP candidate
                Manjit Manna still outpolled SAD in Patti, Kapurthala, Sultanpur Lodhi — showing Sikh voter fragmentation
                between Congress, AAP, and SAD benefits BJP as third/fourth option.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* STRATEGY ANALYSIS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              <CardTitle>Strategy Analysis — The Long Game</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Booth-level construction, caste outreach, Sikh symbolism, elite poaching
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Strengths</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>Massive financial advantage — 93% of Punjab donations</li>
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>RSS provides booth-level cadre BJP lacks organically</li>
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>Urban Hindu vote consolidated and growing (35+ strong segments)</li>
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>High-profile defections weakening rivals simultaneously</li>
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>National government leverage + central schemes messaging</li>
                    <li className="flex gap-2"><span className="text-emerald-500">&#9656;</span>National IT cell of 1.5L workers; largest WhatsApp army</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <h4 className="text-sm font-semibold text-rose-600">Weaknesses</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>No organic rural presence in Sikh-majority belts</li>
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>Over-reliance on defectors with weak ideological commitment</li>
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>Zero LS seats despite 18.56% — first-past-the-post disadvantage</li>
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>No mass-level Sikh face in leadership</li>
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>Farmer protest hangover in rural Malwa/Majha</li>
                    <li className="flex gap-2"><span className="text-rose-500">&#9656;</span>"Welcome all" approach creates ideological incoherence (Frontline)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">Alliance Status</p>
                  <Badge variant="success">SOLO — Confirmed</Badge>
                  <p className="mt-2 text-xs text-slate-500">Amit Shah announcement March 14, 2026. 23-year SAD alliance (1997-2020) permanently ended.</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">Model</p>
                  <Badge variant="warning">HARYANA MODEL</Badge>
                  <p className="mt-2 text-xs text-slate-500">Non-Jat consolidation: 70% non-Jat voter strategy targeting OBC (31%), SC (32%), and urban upper castes.</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 dark:border-slate-700">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">Central Message</p>
                  <Badge variant="info">NATIONALISM + WELFARE</Badge>
                  <p className="mt-2 text-xs text-slate-500">Modi guarantee, central schemes, Ram Mandir effect, anti-drug campaign, Sikh symbolism.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-600" />
                <p className="text-sm font-medium text-purple-600">Bottom Line</p>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                BJP Punjab is building a long-term organisational infrastructure rather than chasing a single election win.
                The 2027 target of 25-30% vote share is realistic if urban Hindu consolidation holds and Dalit/OBC outreach
                gains traction. However, winning seats requires translating vote share into constituency-level victories —
                a challenge given the 18.56% → 0 LS seats outcome in 2024. A hung assembly scenario where BJP holds
                balance of power is the most plausible 2027 outcome if growth trajectory continues.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ALLIANCE BREAKDOWN */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <Card className="border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
              <CardTitle>Alliance Breakdown — SAD Split March 2026</CardTitle>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              23-year alliance (1997-2020) permanently dissolved; SAD-BJP partnership defined Punjab politics for two decades
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <MetricCard
                title="Alliance Duration"
                value="1997-2020"
                subtitle="23 years; ended over farm laws 2020"
                color="rose"
              />
              <MetricCard
                title="BJP Go Solo"
                value="March 14, 2026"
                subtitle="Amit Shah declaration; all 117 seats"
                color="rose"
              />
              <MetricCard
                title="Post-Split SAD Vote"
                value="13.26%"
                subtitle="2024 LS vs BJP 18.56% — BJP now larger"
                color="rose"
              />
              <MetricCard
                title="SAD-BJP Rapprochment"
                value="NIL"
                subtitle="Sukhbir cosying up; BJP not interested"
                color="rose"
              />
            </div>

            <div className="mt-4 rounded-lg border border-rose-200 bg-rose-100/50 p-3 dark:border-rose-800 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <p className="text-sm font-medium text-rose-600">Impact Assessment</p>
              </div>
              <div className="mt-1 space-y-1 text-xs text-slate-600">
                <p>1. SAD reduced to 13.26% LS vote share (2024) — lowest ever — from alliance-era highs of 30%+.</p>
                <p>2. BJP overtook SAD as Punjab&apos;s third-largest party by vote share (18.56% vs 13.26%).</p>
                <p>3. SAD is now a weakened partner; BJP sees no electoral benefit from revival.</p>
                <p>4. SAD&apos;s rural Sikh base does not automatically transfer to BJP even if alliance revived.</p>
                <p>5. Both sides contesting separately ensures tri-cornered contests benefit Congress/AAP in rural seats.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
