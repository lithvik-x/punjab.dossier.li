"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { CAMPAIGN_CHANNELS, KEY_ISSUES_VERIFIED, POLITICAL_ANATOMY } from "@/lib/constants";

const outreachMetrics = [
  { channel: "WhatsApp", sent: "45L", delivered: "42L", read: "31L", engagement: 72 },
  { channel: "Facebook", reach: "18.5L", engaged: "8.3L", engagement: 45 },
  { channel: "Instagram", reach: "12L", engaged: "8.1L", engagement: 68 },
  { channel: "Door-to-Door", contacts: "8.5L", households: "2.1L", coverage: 38 },
  { channel: "Rallies", events: 245, attendance: "12.3L", engagement: 78 },
];

const regionalSeats = [
  { region: "Malwa", seats: 69, share: "59%", description: "Decisive battleground, Jat Sikh dominance, highest farm distress" },
  { region: "Majha", seats: 27, share: "23%", description: "Amritsar, Gurdaspur; Hindu-Sikh mix, border security issues" },
  { region: "Doaba", seats: 23, share: "20%", description: "NRI belt, highest SC concentration (39% in Jalandhar), dera density" },
];

export default function VoterOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Voter Enticement
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Voter outreach - Micro-targeting - Issue-based campaigns
          </p>
        </div>
        <Badge variant="success">2.14Cr Registered Voters</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Messages Delivered"
          value="62L"
          subtitle="Digital outreach"
          change={34}
          trend="up"
          color="bg-pink-500"
        />
        <MetricCard
          title="Read Rate"
          value="71%"
          subtitle="Message engagement"
          change={8}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="Door-to-Door"
          value="38%"
          subtitle="Household coverage"
          change={12}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Event Attendance"
          value="12.3L"
          subtitle="Rally participation"
          change={23}
          trend="up"
          color="bg-purple-500"
        />
      </div>

      {/* Political Anatomy - Voter Demographics Context */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Political Anatomy - Voter Demographics
          </h3>
          <Badge variant="success">Cycle 2 Data</Badge>
        </div>
        <p className="mb-6 text-sm text-emerald-700 dark:text-emerald-400">
          Understanding the electorate composition that shapes voting behavior
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2.14 Cr</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Electors</div>
            <div className="mt-1 text-xs text-slate-500">SC: 32% | Rural: 62.5%</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">57.7%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Sikh Population</div>
            <div className="mt-1 text-xs text-slate-500">Census 2011: 1.24 Cr</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">38.5%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Hindu Population</div>
            <div className="mt-1 text-xs text-slate-500">82.3L voters</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">32%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">SC Population</div>
            <div className="mt-1 text-xs text-slate-500">Highest in India</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Seat Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Malwa</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">69 seats (59%)</span>
              </div>
              <ProgressBar label="" value={59} color="bg-orange-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Majha</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">25 seats (21%)</span>
              </div>
              <ProgressBar label="" value={21} color="bg-blue-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba</span>
                <span className="font-medium text-green-600 dark:text-green-400">23 seats (20%)</span>
              </div>
              <ProgressBar label="" value={20} color="bg-green-500" showPercentage={false} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Caste Composition</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">SC</span><span className="font-medium">32%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">OBC</span><span className="font-medium">31%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Jat Sikh</span><span className="font-medium">21%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Mazhabi Sikh</span><span className="font-medium">6.3%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Upper Caste</span><span className="font-medium">16%</span></div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Farmer Crisis (2027 Context)</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Farmer Suicides</span><span className="font-medium text-red-600">9,291</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Debt-Related</span><span className="font-medium">88%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Crisis Districts</span><span className="font-medium">5</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Malwa Share</span><span className="font-medium">80-90%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Issue-Based Campaigning
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Top voter priorities driving our narrative
          </p>
          <div className="mt-6 space-y-4">
            {KEY_ISSUES_VERIFIED.slice(0, 6).map((issue, i) => (
              <div key={issue.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {i + 1}. {issue.name}
                  </span>
                  <Badge variant={issue.sentiment < -0.6 ? "danger" : issue.sentiment < -0.3 ? "warning" : "info"}>
                    {issue.sentiment < 0 ? "Negative" : "Mixed"}
                  </Badge>
                </div>
                <ProgressBar
                  label=""
                  value={100 - (i * 10)}
                  color={issue.id === "drugs" ? "bg-red-500" : "bg-blue-500"}
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Channel Effectiveness
          </h3>
          <div className="mt-6 space-y-4">
            {CAMPAIGN_CHANNELS.slice(0, 5).map((channel) => (
              <div key={channel.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{channel.name}</span>
                    <span className="text-sm text-slate-500">{(channel.reach / 1000000).toFixed(1)}M</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={channel.engagement * 100}
                    color="bg-pink-500"
                    showPercentage={false}
                  />
                </div>
                <Badge variant={channel.engagement > 0.6 ? "success" : "info"}>
                  {channel.engagement * 100}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Drugs Crisis - 6.6 Million Users, 75%+ Youth Affected</p>
            <p className="text-sm text-red-600 dark:text-red-300">106 overdose deaths (2024), 8,973 NDPS cases. BJP promises &ldquo;Nasha Mukt Punjab&rdquo; in 2 years. Congress must own this narrative.</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Outreach Campaign Matrix
        </h3>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Channel", "Sent/Reach", "Delivered/Engaged", "Read/Attendance", "Engagement"]}
            rows={outreachMetrics.map((m) => [
              m.channel,
              (m.sent || m.reach || m.events || "-") as string,
              (m.delivered || m.engaged || m.households || "-") as string,
              (m.read || m.attendance || "-") as string,
              `${m.engagement}%`,
            ])}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Unemployment Crisis
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth unemployment</span>
              <span className="font-bold text-red-500">18-20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">National average</span>
              <span className="font-bold text-slate-500">9.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP jobs promise</span>
              <span className="font-bold text-orange-500">1 lakh (unfulfilled)</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Rural youth migration to cities accelerating. 697K children using drugs - pipeline issue.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Farmer Distress Data
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farm households in debt</span>
              <span className="font-bold text-red-500">89%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Avg debt per household</span>
              <span className="font-bold text-red-500">Rs 2.03L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farmer suicides (2023-25)</span>
              <span className="font-bold text-red-500">2,809</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">MSP guarantee promise unfulfilled. Farm laws repealed but no legal backup.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Healthcare Emergency
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Doctor to patient ratio</span>
              <span className="font-bold text-red-500">1:7,000+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">WHO norm</span>
              <span className="font-bold text-slate-500">1:1,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rural health crisis</span>
              <Badge variant="danger">Critical</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Malwa cancer rate: 1 in 20 households linked to pesticide exposure. CAG Report 2025.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Voter ID Collection</h4>
          <p className="mt-2 text-2xl font-bold text-pink-500">67%</p>
          <p className="text-sm text-slate-500">Target: 95%</p>
          <ProgressBar label="" value={67} color="bg-pink-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">EPIC Linked Mobile</h4>
          <p className="mt-2 text-2xl font-bold text-blue-500">43%</p>
          <p className="text-sm text-slate-500">Critical for SMS alerts</p>
          <ProgressBar label="" value={43} color="bg-blue-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Booth Volunteers</h4>
          <p className="mt-2 text-2xl font-bold text-green-500">4.2</p>
          <p className="text-sm text-slate-500">Avg per booth (target: 8)</p>
          <ProgressBar label="" value={52} color="bg-green-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Issue Awareness</h4>
          <p className="mt-2 text-2xl font-bold text-purple-500">58%</p>
          <p className="text-sm text-slate-500">Voters recall Congress msg</p>
          <ProgressBar label="" value={58} color="bg-purple-500" showPercentage={false} />
        </div>
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">CRITICAL: Congress Leadership Gap - 1984 Sikh Genocide Legacy</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">No senior Sikh leader at state command. Congress-SKM connection: 3 of 7 SKM leaders have family ties to Congress. RSS Sikh outreach 2019-2024: 200+ Sikh morcha activations, 50+ dharam sabhas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
