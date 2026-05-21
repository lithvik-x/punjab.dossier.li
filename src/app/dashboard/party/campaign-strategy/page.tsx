"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

// Volunteer Recruitment Data
const volunteerRecruitment = {
  targetTotal: 200000,
  boothLevelWorkers: 170000,
  sectorSupervisors: 20000,
  boothPresidents: 15000,
  sources: [
    { source: "Existing Party Workers", yield: "30-40%", activation: "Direct assignment, existing networks" },
    { source: "Youth Congress", yield: "20-25%", activation: "State leadership activation" },
    { source: "NSUI", yield: "15-20%", activation: "College campus activation" },
    { source: "Seva Dal", yield: "10-15%", activation: "Door-to-door, welfare activities" },
    { source: "Mahila Congress", yield: "15-20%", activation: "Women's outreach" },
    { source: "Professional Cells", yield: "5-10%", activation: "Doctor, lawyer, engineer associations" },
    { source: "College Campuses", yield: "10-15%", activation: "Youth festivals, placements" },
  ],
  nonMonetaryIncentives: [
    { type: "Recognition", description: "Public appreciation, certificates, social media shoutouts", effectiveness: "High" },
    { type: "Progression", description: "Path to official ticket, party position", effectiveness: "Very High" },
    { type: "Training", description: "Skill development, leadership training", effectiveness: "Medium-High" },
    { type: "Community", description: "Belonging to larger mission, social network", effectiveness: "High" },
  ],
};

// Volunteer Training Program
const volunteerTraining = {
  totalHours: "16-18 hours per volunteer",
  modules: [
    { module: "Party Ideology & History", duration: "2 hours", content: "Congress heritage, values, current context" },
    { module: "Current Political Context", duration: "2 hours", content: "AAP failures, Congress narrative, issues" },
    { module: "Voter Contact Skills", duration: "3 hours", content: "Conversation guide, objection handling, empathy" },
    { module: "Data Collection", duration: "2 hours", content: "App usage, form filling, privacy" },
    { module: "Communication & Messaging", duration: "2 hours", content: "Talking points, language, tone" },
    { module: "Social Media", duration: "2 hours", content: "WhatsApp, Facebook, Instagram basics" },
    { module: "Booth Management", duration: "2 hours", content: "Structure, roles, logistics" },
    { module: "Polling Day Operations", duration: "2 hours", content: "Setup, turnout tracking, ECI rules" },
    { module: "ECI Guidelines & Compliance", duration: "1 hour", content: "Code of conduct, permissible activities" },
  ],
};

// Booth Level Structure
const boothStructure = {
  roles: [
    { role: "Booth President", quantity: 1, responsibility: "Overall booth coordination" },
    { role: "Vice President", quantity: 1, responsibility: "Worker mobilization" },
    { role: "Secretary", quantity: 1, responsibility: "Voter list management, data" },
    { role: "Treasurer", quantity: 1, responsibility: "Small expenses" },
    { role: "Women's Wing Head", quantity: 1, responsibility: "Women voter contact" },
    { role: "Youth Coordinator", quantity: 1, responsibility: "Youth voter engagement" },
  ],
  pollingDayOps: [
    { time: "6 AM", action: "Booth workers at station" },
    { time: "7 AM-6 PM", action: "Continuous booth monitoring" },
    { time: "Hourly", action: "Turnout reporting to command center" },
    { time: "All Day", action: "Transport arrangement for elderly/disabled" },
  ],
};

export default function CampaignStrategyPage() {
  return (
    <div className="space-y-8">
      {/* MP4-004: Campaign Narrative & Strategy (from MP4 Section 1) */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          Campaign Narrative & Strategy (MP4-004)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          Core messaging framework • Slogans • Attack lines
        </p>

        {/* Slogan Banner */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Primary Slogan</p>
            <p className="text-2xl font-bold text-red-600 mt-1">&quot;Judega Block, Jittegi Congress&quot;</p>
            <p className="text-xs text-slate-500 mt-1">From MP4-004 — the unifying campaign cry</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Core Attack Line</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">&quot;4 Saal 0 Kaam&quot;</p>
            <p className="text-xs text-slate-500 mt-1">From MP4-012 — AAP&apos;s 4 years, zero delivery</p>
          </div>
        </div>

        {/* Five Pillar Narrative */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">Five Supporting Pillars</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-5">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-xs font-bold text-red-600">#1</span>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Drug Crisis</p>
            <p className="text-xs text-slate-500">AAP promised elimination in 3 months — persistent crisis</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-xs font-bold text-red-600">#2</span>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Broken Promises</p>
            <p className="text-xs text-slate-500">Rs 1,000/month (4 yrs late), MSP, Old Pension</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-xs font-bold text-red-600">#3</span>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Economic Despair</p>
            <p className="text-xs text-slate-500">19.3% youth unemployment, farmer distress</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-xs font-bold text-red-600">#4</span>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Law & Order</p>
            <p className="text-xs text-slate-500">Gangster-politician nexus, deteriorating security</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-xs font-bold text-red-600">#5</span>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">Positive Vision</p>
            <p className="text-xs text-slate-500">Congress 2017-2022 delivery vs AAP failures</p>
          </div>
        </div>

        {/* Message Architecture */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">Message Architecture</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm font-medium text-red-700">&quot;Haath Uthao Punjab Banao&quot;</p>
            <p className="text-xs text-red-600 mt-1">Uplift message</p>
          </div>
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm font-medium text-red-700">&quot;4 Saal 0 Kaam&quot;</p>
            <p className="text-xs text-red-600 mt-1">Attack line — 4 years, zero work</p>
          </div>
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm font-medium text-red-700">&quot;AAP Ka Haath, Bagal Mein Duniya&quot;</p>
            <p className="text-xs text-red-600 mt-1">AAP&apos;s hand, world in pocket (inaccessible)</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Central Narrative:</strong> &quot;AAP made big promises in 2022. Four years later: zero delivery. Congress will deliver from Day One.&quot;
          </p>
        </div>
      </div>

      {/* MP4-025: Campaign Timeline (from MP4 Section 3) */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
          Campaign Timeline (MP4-025)
        </h3>
        <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
          Four-phase execution: May 2026 to February 2027
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">1</span>
              <span className="text-sm font-bold text-blue-600">FOUNDATION</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">May–July 2026</p>
            <ul className="mt-2 text-xs text-slate-600 space-y-1">
              <li>• Surveys (mid-July target)</li>
              <li>• Digital infrastructure build</li>
              <li>• SIR defense (Jun 25–Jul 24)</li>
              <li>• 45 hidden observers deployed</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">2</span>
              <span className="text-sm font-bold text-indigo-600">INTENSIFICATION</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">August–October 2026</p>
            <ul className="mt-2 text-xs text-slate-600 space-y-1">
              <li>• Candidate announcements</li>
              <li>• CM face declaration (Sep-Oct)</li>
              <li>• High-profile rallies begin</li>
              <li>• Manifesto development</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">3</span>
              <span className="text-sm font-bold text-purple-600">MASS MOBILIZATION</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">November 2026–January 2027</p>
            <ul className="mt-2 text-xs text-slate-600 space-y-1">
              <li>• Manifesto launch (Dec 1st week)</li>
              <li>• Nukkad rallies 50-100/district/week</li>
              <li>• Paid media campaign launch</li>
              <li>• Daily booth-level presence</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">4</span>
              <span className="text-sm font-bold text-red-600">FINAL SPRINT</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">February 2027</p>
            <ul className="mt-2 text-xs text-slate-600 space-y-1">
              <li>• 72-hour blackout (no rallies)</li>
              <li>• Booth-level mobilization</li>
              <li>• Exit poll management</li>
              <li>• Real-time turnout tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MP4-007: Caste Coalition Targets (from MP4 Section 7) */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Caste Coalition Targets (MP4-007)
        </h3>
        <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
          Vote share targets by community
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-5">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">SC (all sub-castes)</p>
            <p className="text-2xl font-bold text-purple-600">31.9%</p>
            <p className="text-xs text-slate-500 mt-1">Pop: 55-60%</p>
            <p className="text-xs text-purple-600">Key: Channi</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">OBC</p>
            <p className="text-2xl font-bold text-purple-600">15-18%</p>
            <p className="text-xs text-slate-500 mt-1">Target: 40-45%</p>
            <p className="text-xs text-purple-600">Key: Warring</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Jat Sikh</p>
            <p className="text-2xl font-bold text-purple-600">20-22%</p>
            <p className="text-xs text-slate-500 mt-1">Target: 35-40%</p>
            <p className="text-xs text-purple-600">Key: Bajwa/Randhawa</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Urban Hindu</p>
            <p className="text-2xl font-bold text-purple-600">10-15%</p>
            <p className="text-xs text-slate-500 mt-1">Target: 25-30%</p>
            <p className="text-xs text-purple-600">Central leadership</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Minorities</p>
            <p className="text-2xl font-bold text-purple-600">5-7%</p>
            <p className="text-xs text-slate-500 mt-1">Target: 50-55%</p>
            <p className="text-xs text-purple-600">Local leaders</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-purple-100 dark:bg-purple-900/40">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>SC Sub-Caste Breakdown:</strong> Mazhabi Sikh (26.33%) → SAD voters | Ravidassia/Ramdasia (20.76%) → Congress/BSP | Ad-Dharmi (10.17%) → Congress/BSP | Valmiki (8.6%) → Congress/AAP
          </p>
        </div>
      </div>

      {/* MP6-003: Volunteer Recruitment & Training (from MP6 Section 6.3) */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">
          Volunteer Recruitment & Training (MP6-003)
        </h3>
        <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
          Target: 200,000 active volunteers across 40,000 booths
        </p>

        {/* Recruitment Targets */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Total Volunteers"
            value="200,000"
            subtitle="5 per booth target"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Booth Workers"
            value="170,000"
            subtitle="4-5 per booth"
            color="bg-blue-500"
          />
          <MetricCard
            title="Sector Supervisors"
            value="20,000"
            subtitle="1 per 2 booths"
            color="bg-teal-500"
          />
          <MetricCard
            title="Training Hours"
            value="16-18 hrs"
            subtitle="Per volunteer"
            color="bg-indigo-500"
          />
        </div>

        {/* Recruitment Sources */}
        <h4 className="mt-6 font-semibold text-cyan-900 dark:text-cyan-100">Recruitment Sources</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {volunteerRecruitment.sources.map((source, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{source.source}</span>
                <Badge variant="info">{source.yield}</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">{source.activation}</p>
            </div>
          ))}
        </div>

        {/* Training Modules */}
        <h4 className="mt-6 font-semibold text-cyan-900 dark:text-cyan-100">Training Program (MP6-003)</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {volunteerTraining.modules.map((mod, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-cyan-600">{mod.duration}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{mod.module}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{mod.content}</p>
            </div>
          ))}
        </div>

        {/* Non-Monetary Incentives */}
        <h4 className="mt-6 font-semibold text-cyan-900 dark:text-cyan-100">Non-Monetary Incentives</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {volunteerRecruitment.nonMonetaryIncentives.map((inc, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{inc.type}</span>
                <Badge variant={inc.effectiveness === "Very High" ? "success" : "info"}>{inc.effectiveness}</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">{inc.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/40">
          <p className="text-sm text-cyan-700 dark:text-cyan-300">
            <strong>Key Insight:</strong> Monetary payments create perverse incentives. Focus on recognition, progression path, and community belonging.
          </p>
        </div>
      </div>

      {/* MP6-004: Booth Level Structure (from MP6 Section 6.1.1.5) */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          Booth Level Structure (MP6-004)
        </h3>
        <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
          Target model: 1 Booth President + 5-10 Booth Workers per booth
        </p>

        {/* Booth Roles */}
        <h4 className="mt-4 font-semibold text-orange-900 dark:text-orange-100">Booth Committee Roles</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {boothStructure.roles.map((role, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{role.role}</span>
                <Badge variant="default">{role.quantity}</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">{role.responsibility}</p>
            </div>
          ))}
        </div>

        {/* Polling Day Operations */}
        <h4 className="mt-6 font-semibold text-orange-900 dark:text-orange-100">Polling Day Operations</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {boothStructure.pollingDayOps.map((op, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                {op.time.split('-')[0]}
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300">{op.action}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-orange-100 p-3 dark:bg-orange-900/40">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Critical:</strong> Hourly turnout reporting to command center enables real-time GOTV intervention for underperforming booths.
          </p>
        </div>
      </div>
    </div>
  );
}
