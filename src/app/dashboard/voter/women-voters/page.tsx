"use client";

import { MetricCard, ProgressBar, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, AlertTriangle, TrendingUp, Heart, Baby, Smartphone, Tv, Youtube, Facebook, Instagram } from "lucide-react";

const womenVoterDetailed = {
  totalWomenElectorate: "~1 crore (48-50% of 2.08 crore)",
  genderGap: "3-4 percentage points (narrowed from 8-10pp in 1990s)",
  turnout2022Women: "71.6%",
  turnout2022Men: "~70.5%",
  turnout2024Women: "62.28%",
  turnout2024Men: "63.27%",
  womenMLA2022: 6,
  totalMLAs: 117,
  womenMLAPercentage: "5.1%",
  scWomenShare: "~32% of Punjab population",
  topTurnout2024: [
    { constituency: "Sujanpur (Gurdaspur)", turnout: "75.75%" },
    { constituency: "Zira (Khadoor Sahib)", turnout: "71.02%" },
    { constituency: "Anandpur Sahib", turnout: "70.25%" },
  ],
  aapScheme: "Rs 1,000/month (SC: Rs 1,500) - Mukh Mantri Mawan Dhian Satikar Yojana",
  aapSchemeExcludes: "Govt employees, MPs/MLAs, income taxpayers (3-5% excluded)",
  congressBebeNanki: "Rs 61,000 per girl child (birth to graduation)",
  womenCrimeRise: "+35% gender-based violence (2019-2024 NCRB)",
  congressWomenLead2024: "16 of 37 segments (43%) where women dominated turnout",
};

const womenVoterData = {
  percentage: "~48%",
  turnout2022Women: "71.6%",
  turnout2022Men: "~70.5%",
  turnout2024Male: "63.27%",
  turnout2024Female: "62.28%",
  genderGap2024: "Men +0.99 pp lead",
  reversalNote: "2024 reversal from 2022 when women led by 1.1pp",
  congressAAPLead: "43%",
  congressAAPSegs: "16 of 37 Assembly segments",
  genderViolence: "+35% increase (2019-2024)",
  scheme: "Mukh Mantri Mawan Dhian Satikar Yojana: Rs 1,000/month (SC: Rs 1,500) announced March 2026",
};

export default function WomenVotersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Women Voters
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Women voter data, turnout patterns, and engagement strategies
          </p>
        </div>
        <Badge variant="success">~48% Women Electorate</Badge>
      </div>

      {/* Women Voters Comprehensive Data */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Women Voters - Comprehensive Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From g13-women-voter-microtargeting-research-2026, b28-women-voting-gender-politics</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total Women Electorate</span>
                  <span className="font-bold text-pink-500">{womenVoterDetailed.totalWomenElectorate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Gender Gap (narrowed from 8-10pp)</span>
                  <Badge variant="info">{womenVoterDetailed.genderGap}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">2022 Turnout (women)</span>
                  <span className="font-bold text-green-500">{womenVoterDetailed.turnout2022Women}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">2022 Turnout (men)</span>
                  <span className="font-bold text-blue-500">{womenVoterDetailed.turnout2022Men}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Women MLAs 2022</span>
                  <Badge variant="warning">{womenVoterDetailed.womenMLA2022} of 117 ({womenVoterDetailed.womenMLAPercentage})</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Crime against women rise</span>
                  <Badge variant="danger">{womenVoterDetailed.womenCrimeRise}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Congress lead (segments)</span>
                  <Badge variant="success">{womenVoterDetailed.congressWomenLead2024}</Badge>
                </div>
                <div className="mt-3 rounded bg-pink-50 p-3 dark:bg-pink-900/20">
                  <p className="text-xs font-bold text-pink-700 dark:text-pink-400">Top Turnout 2024 Lok Sabha:</p>
                  {womenVoterDetailed.topTurnout2024.map((t) => (
                    <p key={t.constituency} className="text-xs text-pink-600 dark:text-pink-300">{t.constituency}: {t.turnout}</p>
                  ))}
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
              <CardTitle>Women Voters - 2024 Lok Sabha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Women electorate</span>
                  <span className="font-bold text-pink-500">{womenVoterData.percentage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">2024 turnout (women)</span>
                  <span className="font-bold text-pink-500">{womenVoterData.turnout2024Female}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">2024 turnout (men)</span>
                  <span className="font-bold text-blue-500">{womenVoterData.turnout2024Male}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">2024 gender gap</span>
                  <Badge variant="danger">{womenVoterData.genderGap2024}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Reversal note</span>
                  <Badge variant="warning">{womenVoterData.reversalNote}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Congress vs AAP</span>
                  <span className="font-bold text-green-500">{womenVoterData.congressAAPLead} <span className="text-xs font-normal text-slate-400">({womenVoterData.congressAAPSegs})</span></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Gender violence</span>
                  <Badge variant="danger">{womenVoterData.genderViolence}</Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">{womenVoterData.scheme}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Congress Bebe Nanki Scheme */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Congress Bebe Nanki Scheme</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Total per girl</span>
                <span className="font-bold text-green-500">Rs 61,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Birth</span>
                <span className="font-bold text-slate-500">Rs 5,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">After Inter-School</span>
                <span className="font-bold text-slate-500">Rs 10,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">After Class 12</span>
                <span className="font-bold text-slate-500">Rs 25,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">After Graduation</span>
                <span className="font-bold text-slate-500">Rs 21,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Status</span>
                <Badge variant="success">Active (May 2026)</Badge>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">Vs AAP Rs 1,000/month - one-time education investment vs monthly cash transfer.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Women Media Consumption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Women Media Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">WhatsApp</span>
                <Badge variant="success">75-80%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Television</span>
                <Badge variant="info">70-75%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">YouTube</span>
                <Badge variant="info">55-65%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Facebook</span>
                <Badge variant="info">45-55%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
                <Badge variant="info">35-45%</Badge>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">WhatsApp is #1 channel. Punjabi TV channels (ESPN, PTC) dominate. Young women skew YouTube/Instagram.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP Women Voter Appeal - Broken Promise */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-400">
              AAP Women Voter Appeal - Broken Promise Impact
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              From MP3-002 voter appeal research
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Women Stipend Promise</p>
                <p className="text-2xl font-bold text-red-600">Rs 1,000/mo</p>
                <p className="text-xs text-slate-500">Promised 2022; announced March 2026; NOT delivered</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Women Protested Outside</p>
                <p className="text-2xl font-bold text-red-600">Jan 4, 2025</p>
                <p className="text-xs text-slate-500">Holding placards &quot;Sadda haq, itthe rakh&quot; (Our right, put it here)</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Budget Allocation</p>
                <p className="text-2xl font-bold text-red-600">ZERO</p>
                <p className="text-xs text-slate-500">4th consecutive budget without implementation</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Scheme Cost Reality</p>
                <div className="mt-2 text-xs space-y-1">
                  <div>Monthly cost: Rs 12,000 Cr for ~1 crore eligible women</div>
                  <div>Annual cost: Rs 1.44 lakh crore</div>
                  <div>Fiscal liability raised in 2025-26: Rs 4,560 Cr</div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Opposition Narrative</p>
                <div className="mt-2 text-xs space-y-1">
                  <div>&quot;Kejriwal lied&quot; / &quot;jhooth di pand&quot; (sack of lies)</div>
                  <div>&quot;Those who couldn't give Rs 1,000 in Punjab, how will they give Rs 2,100 in Delhi?&quot;</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Rural Sikh Woman Persona */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-pink-200 dark:border-pink-800">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              High-Priority Voter Persona: Rural Sikh Woman
            </h3>
            <div className="mt-4 rounded-lg border border-pink-200 p-4 dark:border-pink-800">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Size</p>
                  <p className="text-lg font-bold text-pink-600">~25-30 lakh</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Age Range</p>
                  <p className="text-lg font-bold text-pink-600">30-55 yrs</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Geographic</p>
                  <p className="text-lg font-bold text-pink-600">All 117 seats</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Trigger Issues</p>
                <p className="text-sm text-slate-500">Children&apos;s future, drug crisis (lost sons/brothers)</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Engagement Message</p>
                <p className="text-lg font-semibold text-pink-600">&quot;Your children's future, your family's safety.&quot;</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
