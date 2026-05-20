"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";

// ============================================================
// CYCLE 2: OPPOSITION INTELLIGENCE - PERCEPTION INTERFACES
// ============================================================

interface StrategyPhase {
  phase: string;
  name: string;
  timeline: string;
  objectives: number;
  status: "active" | "pending" | "completed";
}

interface NarrativePillar {
  pillar: string;
  sentiment: number;
  reach: string;
  owned: boolean;
}

interface VoteShareTrajectory {
  year: string;
  congress: number;
  aap: number;
  sad: number;
  bjp: number;
}

interface SeatScenario {
  scenario: string;
  seats: string;
  probability: number;
}

interface ScenarioPlanning {
  scenario: string;
  congressSeats: string;
  aapSeats: string;
  sadBjpSeats?: string;
  conditions: string;
}

interface CMFaceData {
  candidate: string;
  base: string;
  strength: string;
  weakness: string;
  regionalGap: string;
  impact?: string;
}

interface AnnouncementTiming {
  timing: string;
  days: string;
  status?: string;
}

interface BreakevenItem {
  variable: string;
  seatImpact: string;
}

// === CYCLE 1: Dera Influence Data (69 seats) ===
interface DeraInfluence {
  deraName: string;
  followers: string;
  seatsInfluenced: number;
  primaryRegion: string;
  politicalLean: string;
  keyIssue: string;
}

interface IssueOwnership {
  issue: string;
  congressOwned: boolean;
  aapOwned: boolean;
  sadBjpOwned: boolean;
  gap: string;
}

const deraInfluenceData: DeraInfluence[] = [
  { deraName: "Dera Ballan (Ravidasia)", followers: "50 lakh+", seatsInfluenced: 23, primaryRegion: "Doaba", politicalLean: "Congress/AAP", keyIssue: "SC reservation, Dera recognition" },
  { deraName: "Dera Sacha Sauda", followers: "1 crore+", seatsInfluenced: 35, primaryRegion: "Malwa", politicalLean: "SAD traditional", keyIssue: "Social influence, rural vote bank" },
  { deraName: "Nam Dhaura", followers: "10 lakh+", seatsInfluenced: 8, primaryRegion: "Malwa", politicalLean: "SAD", keyIssue: "Rural influence" },
  { deraName: "Radha Soami", followers: "20 lakh+", seatsInfluenced: 12, primaryRegion: "Malwa/Doaba", politicalLean: "Swing", keyIssue: "Urban/rural middle class" },
];

const deraTotalInfluence = {
  totalSeatsInfluenced: 69,
  totalFollowers: "2 crore+",
  primaryImpact: "Vote bank alignment, Caste consolidation",
  risk: "Dera declarations can shift 10-15% votes in 15-20 seats"
};

// === CYCLE 1: Issue Ownership Gaps ===
const issueOwnershipGaps: IssueOwnership[] = [
  { issue: "Drug Eradication", congressOwned: false, aapOwned: true, sadBjpOwned: false, gap: "AAP owned but failed - opportunity for Congress" },
  { issue: "Farmer Welfare/MSP", congressOwned: true, aapOwned: false, sadBjpOwned: true, gap: "Congress traditional but SAD split complicates" },
  { issue: "Youth Employment", congressOwned: false, aapOwned: true, sadBjpOwned: false, gap: "AAP owned but failed - anger opportunity" },
  { issue: "Law & Order", congressOwned: false, aapOwned: false, sadBjpOwned: true, gap: "BJP opportunity with Nasha Mukt narrative" },
  { issue: "Good Governance", congressOwned: false, aapOwned: true, sadBjpOwned: false, gap: "AAP owned but corruption perceptions" },
  { issue: "Healthcare", congressOwned: false, aapOwned: true, sadBjpOwned: false, gap: "AAP owned but failed - vacancy crisis" },
];

interface GrievanceItem {
  issue: string;
  severity: number;
  salience: number;
  region: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

interface AngryVoterProfile {
  segment: string;
  grievance: string;
  intensity: number;
  AAP2022: string;
  recovery: string;
  action: string;
}

// CYCLE 2: OPPOSITION INTELLIGENCE DATA (from research-P2/03_opposition_intelligence)

// Hung Assembly Likely
const hungAssemblyProjection = {
  likelihood: "HIGH",
  probability: "35-40%",
  reason: "AAP single largest but short of majority (59 seats needed)",
  netSwingNeeded: "Congress needs net +41 seats from current 18"
};

// Anti-Incumbency Score
const antiIncumbencyScore = {
  score: "7/10",
  meaning: "High voter dissatisfaction with AAP",
  brokenPromises: 7,
  voteShareCollapse: "42% → 26% (16 point drop)",
  affectedSeats: "45-55"
};

// BJP Going Solo
const bjpSoloIntelligence = {
  status: "CONFIRMED",
  date: "March 14, 2026",
  voteShare2017: 6.6,
  voteShare2022: 6.6,
  voteShare2024: 18.56,
  lsSeats2024: 5,
  growthFactor: "3x in one cycle"
};

// WhatsApp Army Sizes
const whatsAppArmySizes = [
  { party: "BJP", size: "8-10 lakh", trend: "Growing" },
  { party: "AAP", size: "4-5 lakh", trend: "Stable" },
  { party: "Congress", size: "2-3 lakh", trend: "Growing slowly" },
  { party: "SAD", size: "1-2 lakh", trend: "Declining" }
];

// Congress Position
const congressPositionData = {
  currentSeats: "18-22",
  ls2024Seats: 7,
  status: "FACTIONAL",
  factions: 4,
  cmFace: "Undecided (6 contenders)"
};

export default function PerceptionPage() {
  const strategies = [
    { phase: "Phase 1", name: "Foundation", timeline: "May-Jul 2026", objectives: 8, status: "active" },
    { phase: "Phase 2", name: "Build-up", timeline: "Aug-Oct 2026", objectives: 12, status: "pending" },
    { phase: "Phase 3", name: "Intensification", timeline: "Nov-Jan 2027", objectives: 15, status: "pending" },
    { phase: "Phase 4", name: "Final Push", timeline: "Feb 2027", objectives: 10, status: "pending" },
  ];

  const narrativePillars = [
    { pillar: "Drugs Eradication", sentiment: 0.72, reach: "89%", owned: true },
    { pillar: "Farmer Welfare", sentiment: 0.58, reach: "82%", owned: false },
    { pillar: "Youth Employment", sentiment: 0.45, reach: "78%", owned: true },
    { pillar: "Healthcare", sentiment: 0.52, reach: "71%", owned: true },
    { pillar: "Good Governance", sentiment: 0.38, reach: "65%", owned: false },
  ];

  const voteShareTrajectory = [
    { year: "2019 LS", congress: 40, aap: 1, sad: 26, bjp: 9 },
    { year: "2022 Assembly", congress: 23, aap: 42, sad: 18, bjp: 7 },
    { year: "2024 LS", congress: 26, aap: 26, sad: 12, bjp: 18.5 },
  ];

  const seatScenarios = [
    { scenario: "Pessimistic", seats: "30-40", probability: 15 },
    { scenario: "Realistic", seats: "40-55", probability: 55 },
    { scenario: "Optimistic", seats: "55-65", probability: 25 },
    { scenario: "Supermajority", seats: "65+", probability: 5 },
  ];

  // MP10-009: Formal Scenario Planning
  const mp10ScenarioPlanning = [
    {
      scenario: "Base Case (45-50%)",
      congressSeats: "55-65",
      aapSeats: "35-45",
      sadBjpSeats: "15-25",
      conditions: "Hung Assembly, Congress largest single party, requires coalition support"
    },
    {
      scenario: "Best Case (20-25%)",
      congressSeats: "70-85",
      aapSeats: "25-35",
      sadBjpSeats: "10-15",
      conditions: "CM face announced early, opposition fragmentation (BJP solo + Amritpal splits Panthic)"
    },
    {
      scenario: "Worst Case (25-30%)",
      congressSeats: "18-30",
      aapSeats: "60-75",
      sadBjpSeats: "8-12",
      conditions: "AAP welfare reinforcement, Congress leadership vacuum, SAD-BJP alliance"
    },
  ];

  // MP10-010: CM Face Impact Modeling
  const cmFaceAnalysis = [
    {
      candidate: "Charanjit Singh Channi",
      base: "Dalit electorate (32% SC)",
      strength: "First Dalit CM symbolism",
      weakness: "Majha region, panthic voters",
      regionalGap: "Sikh-majority constituencies",
      impact: "+5-8pp vote share with strong CM announcement"
    },
    {
      candidate: "Raja Warring",
      base: "Youth, rural organization",
      strength: "PPCC president network",
      weakness: "No separate CM claim",
      regionalGap: "Urban elite",
      impact: "+2-4pp with organizational backing"
    },
    {
      candidate: "Partap Singh Bajwa",
      base: "Legislative experience",
      strength: "Urban-professional base",
      weakness: "Age perception",
      regionalGap: "Youth, rural Dalit",
      impact: "+2-3pp with candidate quality"
    },
    {
      candidate: "Sukhjinder Randhawa",
      base: "Doaba-Malwa border",
      strength: "Regional heavyweight",
      weakness: "Limited pan-state recognition",
      regionalGap: "Majha, urban youth",
      impact: "+3-5pp in regional strongholds"
    },
  ];

  // MP10-010: Announcement Timing
  const cmAnnouncementTiming = [
    { timing: "Optimal Window", days: "180-240", status: "6-8 months before election" },
    { timing: "Minimum Viable", days: "150", status: "By November 2026" },
    { timing: "Current Status (May 2026)", days: "Delayed", status: "2-3 months behind optimal" },
    { timing: "Risk Threshold", days: "120", status: "Below this = lame duck fatigue" },
  ];

  // MP10-010: Breakeven Analysis
  const breakevenAnalysis = [
    { variable: "CM Candidate by July 2026", seatImpact: "+10-15 seats" },
    { variable: "BJP-SAD Alliance", seatImpact: "-10-15 seats" },
    { variable: "Amritpal Singh outfit >5%", seatImpact: "-5-8 seats (from AAP)" },
    { variable: "AAP new welfare scheme Q3 2026", seatImpact: "-5-10 seats" },
  ];

  const grievanceMatrix = [
    { issue: "Drug Abuse Persistence", severity: 9.5, salience: 10, region: "All (Malwa highest)", priority: "CRITICAL" },
    { issue: "Youth Unemployment/Migration", severity: 9, salience: 9, region: "All (Majha highest)", priority: "CRITICAL" },
    { issue: "Farmer Debt/Agricultural Distress", severity: 8, salience: 8, region: "Malwa (69 seats)", priority: "HIGH" },
    { issue: "Water Crisis (Groundwater)", severity: 7.5, salience: 7, region: "Doaba (highest), Malwa", priority: "HIGH" },
    { issue: "Law & Order/Gangster Culture", severity: 7.5, salience: 8, region: "Urban, Majha border", priority: "HIGH" },
  ];

  const angryVoterProfiles = [
    { segment: "Youth (18-35, Male)", grievance: "Unemployment + Drugs", intensity: 9.5, AAP2022: "55-60%", recovery: "HIGH", action: "Door-to-door in urban/fringe" },
    { segment: "SC Voters (All)", grievance: "Drugs + Employment", intensity: 9, AAP2022: "50-55%", recovery: "HIGH-MEDIUM", action: "Booth-level SC mobilization" },
    { segment: "Women (25-55)", grievance: "Safety + Family drugs", intensity: 8.5, AAP2022: "48-52%", recovery: "MEDIUM-HIGH", action: "Women-focused meetings" },
    { segment: "Farmers (Malwa)", grievance: "Debt + Water + MSP", intensity: 8.5, AAP2022: "40-45%", recovery: "MEDIUM", action: "Farmer union + dera outreach" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
              10
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Perception & Strategy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SWOT analysis • Campaign strategy • Narrative formation
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </div>

      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Congress Momentum: Lok Sabha 2024 — 7/13 Seats in Punjab</p>
            <p className="text-sm text-green-600 dark:text-green-300">Plus: 25,000 booth sevaks appointed (May 2026), 117 AC coordinators (June 2025)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Strategy Phases"
          value="4"
          subtitle="Campaign timeline"
          color="bg-rose-500"
        />
        <MetricCard
          title="Narrative Pillars"
          value="5"
          subtitle="Core messaging"
          color="bg-blue-500"
        />
        <MetricCard
          title="Message Recall"
          value="58%"
          subtitle="Voter awareness"
          change={12}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Narrative Ownership"
          value="62%"
          subtitle="Congress-owned topics"
          change={8}
          trend="up"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress SWOT Analysis (Research-Verified)
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Strengths</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                <li>• Legacy in Punjab (2017: 77 seats)</li>
                <li>• Dalit vote bank (Channi card)</li>
                <li>• Farmer community connect</li>
                <li>• Anti-SAD sentiment</li>
                <li>• Collective leadership (no CM face)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                <li>• Seats collapsed: 77 (2017) to 7 (2024 LS)</li>
                <li>• No CM candidate = leadership vacuum</li>
                <li>• Factionalism (Bajwa vs Sidhu)</li>
                <li>• Youth disenchantment</li>
                <li>• 2022 loss still weighs</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                <li>• AAP broken promises (drugs, jobs)</li>
                <li>• SAD-BJP alliance broken (March 2026)</li>
                <li>• SAD split (August 2025)</li>
                <li>• &ldquo;B-Team of BJP&rdquo; narrative (AAP defections)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Threats</h4>
              <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                <li>• BJP rising: 6.6% → 18.56% (2022→2024)</li>
                <li>• Money power (BJP: Rs 6,074 Cr war chest)</li>
                <li>• Gangster networks (Lawrence Bishnoi)</li>
                <li>• No digital narrative vs AAP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Narrative Ownership
          </h3>
          <div className="mt-6 space-y-4">
            {narrativePillars.map((pillar) => (
              <div key={pillar.pillar}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{pillar.pillar}</span>
                    {pillar.owned && <Badge variant="success">Owned</Badge>}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">{pillar.reach} reach</span>
                    <Badge variant={pillar.sentiment > 0.5 ? "success" : "info"}>
                      +{pillar.sentiment}
                    </Badge>
                  </div>
                </div>
                <ProgressBar
                  label=""
                  value={pillar.sentiment * 100}
                  color={pillar.owned ? "bg-green-500" : "bg-slate-400"}
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Campaign Timeline
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {strategies.map((phase) => (
            <div
              key={phase.phase}
              className={`rounded-xl border p-4 ${
                phase.status === "completed" ? "border-green-500 bg-green-50 dark:bg-green-900/20" :
                phase.status === "active" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" :
                "border-slate-200 dark:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Badge variant={phase.status === "completed" ? "success" : phase.status === "active" ? "info" : "default"}>
                  {phase.phase}
                </Badge>
                {phase.status === "active" && <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />}
              </div>
              <h4 className="mt-2 font-semibold text-slate-700 dark:text-slate-300">{phase.name}</h4>
              <p className="mt-1 text-sm text-slate-500">{phase.timeline}</p>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                {phase.objectives} objectives
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Strategic Priorities
        </h3>
        <DataTable
          headers={["Priority", "Action", "Timeline", "Owner", "Status"]}
          rows={[
            ["Critical", "Drugs narrative control", "Ongoing", "Media Cell", "Active"],
            ["High", "Youth engagement program", "Jun 2026", "Social Media", "Active"],
            ["High", "Farmer welfare connect", "Jul 2026", "Outreach", "Planning"],
            ["Medium", "Caste vote consolidation", "Aug 2026", "Zone Heads", "Pending"],
            ["Medium", "Digital campaign launch", "Sep 2026", "IT Cell", "Pending"],
            ["Low", "Celebrity endorsements", "Jan 2027", "PR Team", "Pending"],
          ]}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Vote Share Trajectory
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Congress decline and AAP surge (verified)</p>
          <div className="mt-4 space-y-3">
            {voteShareTrajectory.map((v) => (
              <div key={v.year} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{v.year}</span>
                <div className="flex gap-2">
                  <span className="text-xs text-blue-600">INC: {v.congress}%</span>
                  <span className="text-xs text-orange-500">AAP: {v.aap}%</span>
                  <span className="text-xs text-green-600">SAD: {v.sad}%</span>
                  <span className="text-xs text-orange-400">BJP: {v.bjp}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>BJP Warning:</strong> 6.6% → 18.56% in 2 years. From 0 Lok Sabha seats to nearly contesting all 117.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Seat Projection Scenarios
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Based on 2024 LS data and current trends</p>
          <div className="mt-4 space-y-3">
            {seatScenarios.map((s) => (
              <div key={s.scenario} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{s.scenario}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{s.seats} seats</span>
                  <Badge variant={s.probability > 40 ? "success" : s.probability > 20 ? "info" : "warning"}>
                    {s.probability}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Reality check: AAP won 92 seats in 2022 from 42% vote share. Congress needs 59 for majority.</p>
        </div>
      </div>

      {/* Poll Consensus Ranges - Research-Verified */}
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-700 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
          Poll Consensus Ranges
        </h3>
        <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-4">
          Aggregated multi-source polling projections — May 2026
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-600">Congress</span>
              <Badge variant="info">45-58</Badge>
            </div>
            <div className="mt-3">
              <ProgressBar label="" value={49} color="bg-blue-500" showPercentage={false} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 51.5 seats</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-orange-500">AAP</span>
              <Badge variant="warning">28-37</Badge>
            </div>
            <div className="mt-3">
              <ProgressBar label="" value={32} color="bg-orange-500" showPercentage={false} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 32.5 seats</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-600">SAD</span>
              <Badge variant="success">14-18</Badge>
            </div>
            <div className="mt-3">
              <ProgressBar label="" value={16} color="bg-green-500" showPercentage={false} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 16 seats</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            <strong>Key Insight:</strong> Hung assembly is the base case scenario. Congress needs to exceed the 45-58 range significantly to approach majority (59 seats). AAP is projected to lose significant seats from 2022's 92.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Grievance Priority Matrix (AAP Governance Gaps)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gap x Salience: Severity vs Voter Importance</p>
          <div className="mt-4 space-y-3">
            {grievanceMatrix.map((g) => (
              <div key={g.issue} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-900">
                <div className={`h-2 w-2 rounded-full ${
                  g.priority === "CRITICAL" ? "bg-red-500" : g.priority === "HIGH" ? "bg-orange-500" : "bg-yellow-500"
                }`} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{g.issue}</span>
                    <Badge variant={g.priority === "CRITICAL" ? "danger" : g.priority === "HIGH" ? "warning" : "info"}>
                      {g.priority}
                    </Badge>
                  </div>
                  <div className="mt-1 flex gap-4 text-xs text-slate-500">
                    <span>Severity: {g.severity}/10</span>
                    <span>Salience: {g.salience}/10</span>
                    <span>{g.region}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>Key Insight:</strong> Drug abuse + unemployment account for 65-70% of voter grievance intensity. These must anchor Congress grievance narrative.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Angry Voter Profiles (Recovery Targets)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">High-grievance segments with AAP 2022 votes to recover</p>
          <div className="mt-4 space-y-3">
            {angryVoterProfiles.map((v) => (
              <div key={v.segment} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{v.segment}</span>
                  <Badge variant={v.recovery.includes("HIGH") ? "success" : "info"}>
                    {v.recovery} Recovery
                  </Badge>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Grievance:</span>
                    <span className="ml-1 text-slate-700 dark:text-slate-300">{v.grievance}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Intensity:</span>
                    <span className="ml-1 font-medium text-red-500">{v.intensity}/10</span>
                  </div>
                  <div>
                    <span className="text-slate-500">AAP 2022:</span>
                    <span className="ml-1 text-orange-500">{v.AAP2022}</span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">Action: {v.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">Akal Takht vs AAP Government — May 2026</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Akal Takht Jathedar Kuldip Singh Gargaj gave 15-day ultimatum to remove &ldquo;objectionable clauses&rdquo; from sacrilege law. CM Mann called it an &ldquo;ego yatra&rdquo; and is conducting a statewide Shukrana Yatra since May 6, 2026.</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Religious Politics & Sikh Issues
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">SGPC paralysis, sacrilege law conflict, 1984 justice narrative</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Jaagat Jot Act 2026</h4>
            <div className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <p>• Life imprisonment (min 10 years) for sacrilege</p>
              <p>• Fines Rs 5-25 lakh</p>
              <p>• Passed unanimously April 13, 2026</p>
              <p>• Akal Takht challenges law validity</p>
            </div>
            <Badge variant="danger">Major Conflict Point</Badge>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">SGPC Elections Frozen</h4>
            <div className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
              <p>• No elections since 2011 (15 years)</p>
              <p>• SAD (Badal) retains control</p>
              <p>• 30+ of 170 members deceased</p>
              <p>• 5+ million Sikh voters affected</p>
            </div>
            <Badge variant="warning">Institutional Paralysis</Badge>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">7% Conviction Rate</h4>
            <div className="mt-2 space-y-1 text-sm text-purple-600 dark:text-purple-300">
              <p>• 44 convictions in 597 cases</p>
              <p>• 2015 Bargari/Kotkapura cases</p>
              <p>• Police firing on protesters unresolved</p>
              <p>• Justice Ranjit Singh Commission findings</p>
            </div>
            <Badge variant="info">Justice Delivery Failure</Badge>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">1984 Anti-Sikh Violence</h4>
            <div className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
              <p>• BJP appeals to Sikh voters on this</p>
              <p>• Congress has leadership gap</p>
              <p>• 40+ years without justice</p>
              <p>• Perpetrators still unpunished</p>
            </div>
            <Badge variant="info">Historical Grievance</Badge>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Kartarpur Corridor</h4>
            <div className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
              <p>• BJP facilitates corridor outreach</p>
              <p>• Sikh pilgrims pathway to Pakistan</p>
              <p>• November 2019inaugurated</p>
              <p>• Political goodwill generator</p>
            </div>
            <Badge variant="success">BJP Sikh Outreach</Badge>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">GST Waivers on Langar</h4>
            <div className="mt-2 space-y-1 text-sm text-orange-600 dark:text-orange-300">
              <p>• GST exemptions on langar purchases</p>
              <p>• Community kitchen supplies</p>
              <p>• BJP positioning as Sikh ally</p>
              <p>• AAP government benefit claim</p>
            </div>
            <Badge variant="success">Religious Minorities</Badge>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Strategic Insight:</strong> SGPC control gives SAD religious voter infrastructure despite losing 2 Assembly elections. Akal Takht-Mann rift (May 2026) alienates religious Sikhs. 7% conviction rate weaponizes AAP&apos;s broken promise on justice delivery.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Grievance Focus
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center gap-2">
                <Badge variant="danger">MALWA (69 seats)</Badge>
                <span className="text-sm font-medium text-red-700 dark:text-red-400">Drugs + Debt</span>
              </div>
              <p className="mt-2 text-sm text-red-600 dark:text-red-300">Highest drug network penetration, Bargari sacrilege legacy. Farmer debt is cultural narrative in Malwa villages.</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <div className="flex items-center gap-2">
                <Badge variant="warning">MAJHA (27 seats)</Badge>
                <span className="text-sm font-medium text-orange-700 dark:text-orange-400">Jobs + Security</span>
              </div>
              <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">Border area, military/farm殉 concentration. Youth migration to armed forces/overseas is major theme.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-2">
                <Badge variant="info">DOABA (23 seats)</Badge>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Water + Work</span>
              </div>
              <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Highest groundwater depletion in Punjab. Highest NRI population — remittance dependency creates aspiration gap.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Key Narrative Messages
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/20">
              <p className="font-medium text-blue-700 dark:text-blue-400">&ldquo;Drugs: Our War, Our Victory&rdquo;</p>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">Positioning Congress as the only party serious about drug eradication</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-500 dark:bg-green-900/20">
              <p className="font-medium text-green-700 dark:text-green-400">&ldquo;Farmers: Congress Stands With You&rdquo;</p>
              <p className="mt-1 text-sm text-green-600 dark:text-green-300">Recall Congress&apos;s role in farm laws repeal, MSP guarantee</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500 dark:bg-purple-900/20">
              <p className="font-medium text-purple-700 dark:text-purple-400">&ldquo;Youth: Jobs, Not Excuses&rdquo;</p>
              <p className="mt-1 text-sm text-purple-600 dark:text-purple-300">Contrast AAP&apos;s broken promises with Congress&apos;s action plan</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Counter-Narrative Responses
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &ldquo;Congress also didn&apos;t solve drugs&rdquo;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &ldquo;We&apos;ve arrested 45K, built de-addiction centers,追击 supply chains&rdquo;</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &ldquo;2022 loss = rejection&rdquo;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &ldquo;People elect local MLAs, not national trends&rdquo;</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &ldquo;No development in 5 years&rdquo;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &ldquo;Congress governments in 3 big states delivering, wait for Feb&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      {/* MISSING DATA: Student Politics at Panjab University - from G24 Research */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: NSUI Crushing Defeat at Panjab University</p>
            <p className="text-sm text-red-600 dark:text-red-300">ABVP won PU student council president (Gaurav Veer Sohal) — FIRST TIME IN FIVE DECADES. NSUI failed to win even one seat. Internal cracks visible.</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Panjab University Student Politics (G24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">PU student council elections are a barometer for broader youth electoral dynamics</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-red-700 dark:text-red-400">ABVP Victory (Sept 2025)</h4>
              <Badge variant="danger">Historic Win</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
              <p><strong>Gaurav Veer Sohal</strong> — PU Student Council President</p>
              <p>First ABVP president in <strong>five decades</strong></p>
              <p>NSUI suffered crushing defeat</p>
              <p>Internal cracks visible in Congress student wing</p>
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">NSUI Performance</h4>
              <Badge variant="warning">Struggling</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-orange-600 dark:text-orange-300">
              <p>Lost PUSC presidency decisively</p>
              <p>Multiple student leader defections</p>
              <p>Anurag Dalal won as independent, later joined NSUI</p>
              <p>No organic student movement visible</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Student Leaders</h4>
          <DataTable
            headers={["Name", "Affiliation", "Role", "Notes"]}
            rows={[
              ["Gaurav Veer Sohal", "ABVP", "PU Student Council President", "First ABVP president in 50 years"],
              ["Anurag Dalal", "NSUI (joined later)", "PU Student Council President", "Won as independent, later joined NSUI"],
              ["Kunwar Khanoura", "NSUI", "Student Leader", "Described as prominent figure"],
              ["Parabjot Singh Gill", "NSUI", "PUCSC Presidential Candidate", "Lost in 2024-2025 elections"],
            ]}
          />
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Strategic Warning:</strong> NSUI is NOT automatically winning student elections. ABVP (BJP/RSS) is making inroads in urban student politics. Student politics reflects broader electoral dynamics — if Congress cannot win PU, it signals deeper youth engagement problems.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Campus Placements</p>
            <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">Almost zero in many colleges — key student issue</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Skill Development</p>
            <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">Student expectation gap vs delivered programs</p>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-700 dark:text-green-300">Anti-Drug Messaging</p>
            <p className="text-xs text-green-600 dark:text-green-300 mt-1">Students want credible anti-drug campus initiatives</p>
          </div>
        </div>
      </div>

      {/* MISSING DATA SECTIONS FROM RESEARCH FILES */}

      {/* Election Security Intelligence - g27 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Election Security Intelligence
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">High-risk constituencies, gangster networks, CAPF deployment</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-red-700 dark:text-red-400">CAPF Deployment 2022</h4>
              <Badge variant="danger">~1,050 Companies</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
              <p>~1,050 companies of Central Armed Police Forces deployed in 2022 Assembly elections</p>
              <p>Tarn Taran bypoll (Nov 2025): 12 companies for single constituency</p>
              <p>Security war room recommended by October 2026</p>
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">23,232 Polling Stations</h4>
              <Badge variant="warning">Critical Infrastructure</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-orange-600 dark:text-orange-300">
              <p>Electoral rolls mapped at 83.69%</p>
              <p>Sensitive booth identification critical</p>
              <p>Risk tier classification required</p>
            </div>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">Lawrence Bishnoi Syndicate</h4>
              <Badge variant="danger">700+ Members</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-purple-600 dark:text-purple-300">
              <p>700+ active members</p>
              <p>2,500+ known associates</p>
              <p>Cross-border network operations</p>
              <p>Sukha Duneke also operational</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">10 High-Risk Constituencies</h4>
          <DataTable
            headers={["Constituency", "Risk Level", "Primary Threat", "Security Priority"]}
            rows={[
              ["Tarn Taran", "CRITICAL", " gangster networks + border", "Immediate"],
              ["Moga", "HIGH", "Drug networks", "High"],
              ["Ludhiana Rural", "HIGH", "Urban-extremism link", "High"],
              ["Ferozpur", "HIGH", "Border + contraband", "High"],
              ["Jalandhar", "MEDIUM-HIGH", "Criminal syndicates", "Medium"],
              ["Kapurthala", "MEDIUM", "Inter-state networks", "Medium"],
              ["Pathankot", "MEDIUM", "Strategic location", "Medium"],
              ["Hoshiarpur", "MEDIUM", "Rural crime", "Medium"],
              ["Gurdaspur", "MEDIUM", "Border dynamics", "Medium"],
              ["Mansa", "MEDIUM", "Drug money", "Medium"],
            ]}
          />
        </div>

        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Cyber Security Warning:</strong> ECI systems vulnerable to intrusions. Mock poll websites, fake news dissemination, and voter data breaches are documented risks. 229A IPC penalties for electoral malpractice.
          </p>
        </div>
      </div>

      {/* Booth-Level Operations - b42 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Booth-Level Ground Game
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Worker deployment ratios, voter contact programs, GOTV execution</p>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <MetricCard
            title="Claimed Booth Workers"
            value="3 Lakh"
            subtitle="5 workers per booth target"
            color="bg-blue-500"
          />
          <MetricCard
            title="Core Activists"
            value="45-60K"
            subtitle="15-20% of claimed"
            color="bg-orange-500"
          />
          <MetricCard
            title="Urban Ratio"
            value="1:40-60"
            subtitle="Worker to voters"
            color="bg-green-500"
          />
          <MetricCard
            title="Rural Ratio"
            value="1:60-80"
            subtitle="Worker to voters"
            color="bg-purple-500"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Booth Sevak Model</h4>
            <div className="mt-3 space-y-2 text-sm text-green-600 dark:text-green-300">
              <p>585 total target (target booths)</p>
              <p>5 workers per booth (3 lakh target)</p>
              <p>April 2026: 25,000 booth sevaks appointed</p>
              <p>117 AC coordinators appointed (June 2025)</p>
            </div>
            <div className="mt-3">
              <ProgressBar label="Target Achievement" value={8.3} color="bg-green-500" showPercentage={true} />
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Voter Contact Programs</h4>
            <div className="mt-3 space-y-2 text-sm text-blue-600 dark:text-blue-300">
              <p>Door-to-door voter ID verification</p>
              <p>Booth-level demographic mapping</p>
              <p>Specialized teams: youth, women, SC, agricultural</p>
              <p>GOTV (Get Out The Vote) execution critical</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Worker Tier Classification</h4>
          <DataTable
            headers={["Tier", "Description", "Count", "Activation Rate"]}
            rows={[
              ["Tier 1", "Core activists - full commitment", "45-60K", "85%"],
              ["Tier 2", "Regular supporters - periodic involvement", "120-150K", "45%"],
              ["Tier 3", "Event-based participants", "200-250K", "20%"],
              ["Tier 4", "Sympathizers - name only", "1+Lakh+", "5%"],
            ]}
          />
        </div>
      </div>

      {/* Campaign Budget - g38 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Campaign Budget Comparison
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Resource allocation: Congress vs AAP</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress Budget</h4>
              <Badge variant="info">Rs 250-400 Crore</Badge>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 dark:text-blue-300">Field Operations</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <ProgressBar label="" value={32} color="bg-blue-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 dark:text-blue-300">Media</span>
                <span className="text-sm font-medium">25%</span>
              </div>
              <ProgressBar label="" value={25} color="bg-blue-400" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 dark:text-blue-300">Digital</span>
                <span className="text-sm font-medium">12%</span>
              </div>
              <ProgressBar label="" value={12} color="bg-blue-300" showPercentage={false} />
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">AAP Budget</h4>
              <Badge variant="warning">Rs 300-500 Crore</Badge>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-600 dark:text-orange-300">Field Operations</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <ProgressBar label="" value={35} color="bg-orange-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-600 dark:text-orange-300">Digital</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <ProgressBar label="" value={20} color="bg-orange-400" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-600 dark:text-orange-300">Events</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <ProgressBar label="" value={15} color="bg-orange-300" showPercentage={false} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-700 dark:text-white">5%</p>
            <p className="text-xs text-slate-500">Security</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-700 dark:text-white">8%</p>
            <p className="text-xs text-slate-500">Staff</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-700 dark:text-white">10%</p>
            <p className="text-xs text-slate-500">Events</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-700 dark:text-white">8%</p>
            <p className="text-xs text-slate-500">Contingency</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Budget Warning:</strong> AAP has significant financial advantage with 20-25% higher war chest. Congress must optimize field efficiency to compensate.
          </p>
        </div>
      </div>

      {/* Welfare Delivery - b39 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Government Welfare Schemes Delivery
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">PM-KISAN, Ayushman Bharat, MGNREGA performance and attribution challenges</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <MetricCard
            title="PM-KISAN Farmers"
            value="2.3M"
            subtitle="Direct income support"
            color="bg-green-500"
          />
          <MetricCard
            title="Ayushman Bharat"
            value="3.9M"
            subtitle="Families eligible"
            color="bg-blue-500"
          />
          <MetricCard
            title="MGNREGA Leakage"
            value="25-35%"
            subtitle="Funds not reaching beneficiaries"
            color="bg-red-500"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">MGNREGA Issues</h4>
            <div className="mt-3 space-y-2 text-sm text-yellow-600 dark:text-yellow-300">
              <p>25-35% leakage rate (funds not reaching beneficiaries)</p>
              <p>Work demand suppression</p>
              <p>Job card irregularities</p>
              <p>Delayed wage payments</p>
            </div>
            <div className="mt-3">
              <ProgressBar label="Effective Delivery" value={72} color="bg-yellow-500" showPercentage={true} />
            </div>
          </div>

          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Attribution Challenges</h4>
            <div className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
              <p>76% shortfall in jobs promised vs delivered</p>
              <p>Drugs promise unfulfilled (6.6M users, 230K opioid-dependent)</p>
              <p>Voters may credit Central govt, not state</p>
              <p>Welfare schemes hard to convert to votes</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Strategic Note:</strong> Welfare delivery does not automatically translate to vote loyalty. Congress must use welfare data as entry point for narrative, not as primary message.
          </p>
        </div>
      </div>

      {/* KPI Framework - b23 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          KPI Framework: Campaign Execution Metrics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Phase-based metrics, leading/lagging indicators, organizational KPIs</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Leading Indicators (Predictive)</h4>
            <DataTable
              headers={["KPI", "Target", "Current", "Status"]}
              rows={[
                ["Voter ID Verification %", "95%", "78%", "Behind"],
                ["Booth Worker Activation", "80%", "15-20%", "Critical"],
                ["Narrative Recall Score", "65%", "58%", "On Track"],
                ["Event Attendance", "10K/event", "6.2K", "Behind"],
                ["Social Media Engagement", "100K/day", "45K", "Critical"],
              ]}
            />
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Lagging Indicators (Outcome)</h4>
            <DataTable
              headers={["KPI", "Baseline", "Target", "Gap"]}
              rows={[
                ["Vote Share", "26.3%", "35%+", "+8.7%"],
                ["Seat Count", "7/117", "59+", "+52"],
                ["Booth Win Rate", "12%", "50%+", "+38%"],
                ["Core Activist Count", "50K", "150K", "+100K"],
                ["Swing Voter Conversion", "8%", "25%", "+17%"],
              ]}
            />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Organizational Health KPIs</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-900/20">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">62%</p>
              <p className="text-xs text-green-600 dark:text-green-300">Narrative Ownership</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/20">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</p>
              <p className="text-xs text-blue-600 dark:text-blue-300">Observers Deployed</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-center dark:bg-orange-900/20">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">8/12</p>
              <p className="text-xs text-orange-600 dark:text-orange-300">Phase 2 Objectives</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-center dark:bg-purple-900/20">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">258</p>
              <p className="text-xs text-purple-600 dark:text-purple-300">Days to Election</p>
            </div>
          </div>
        </div>
      </div>

      {/* Perception Audit - b22 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Perception Audit: Party & Leader Tracking
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Media tone analysis, issue ownership, competitive positioning</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Party Perception</h4>
            <div className="mt-3 space-y-2 text-sm text-blue-600 dark:text-blue-300">
              <p>Congress stable: 20-25%</p>
              <p>&ldquo;No chance&rdquo; perception widespread</p>
              <p>Leadership vacuum dominant narrative</p>
              <p>Factionalism signal (Bajwa vs Sidhu)</p>
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Leader Perception</h4>
            <div className="mt-3 space-y-2 text-sm text-orange-600 dark:text-orange-300">
              <p>Channi: Dalit vote consolidator (limited survey)</p>
              <p>No CM candidate = ambiguity</p>
              <p>45 hidden observers deployed (April 2026)</p>
              <p>Collective leadership still undefined</p>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Issue Ownership</h4>
            <div className="mt-3 space-y-2 text-sm text-green-600 dark:text-green-300">
              <p>Drugs: Congress leads (but challenged)</p>
              <p>Farmer Welfare: Congress leads</p>
              <p>Youth Employment: AAP leads (perception)</p>
              <p>Governance: AAP leads (ironic)</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Media Tone Analysis</h4>
          <DataTable
            headers={["Media Source", "Congress Tone", "AAP Tone", "BJP Tone"]}
            rows={[
              ["Print (Tribune, Hindu)", "Neutral to Slightly Negative", "Neutral", "Slightly Positive"],
              ["TV (Regional)", "Neutral", "Positive", "Positive"],
              ["Social Media", "Negative", "Highly Positive", "Highly Positive"],
              ["WhatsApp/Facebook", "Neutral", "Dominant", "Growing"],
            ]}
          />
        </div>
      </div>

      {/* Post-Election Scenarios - g39 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Post-Election Scenario Planning
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Four scenarios, CM selection process, cabinet composition framework</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <Badge variant="danger">Scenario 1</Badge>
              <span className="text-xs text-red-600 dark:text-red-300">P=15%</span>
            </div>
            <h4 className="mt-2 font-semibold text-red-700 dark:text-red-400">Opposition (30-40)</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">CM: Bibi Jagir Kaur or Sukhbir. Parliamentary party leader. No budget control.</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="flex items-center justify-between">
              <Badge variant="warning">Scenario 2</Badge>
              <span className="text-xs text-yellow-600 dark:text-yellow-300">P=45%</span>
            </div>
            <h4 className="mt-2 font-semibold text-yellow-700 dark:text-yellow-400">Hung (41-58)</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">Coalition talks. CM selection via negotiation. Regional/caste balance critical.</p>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <Badge variant="success">Scenario 3</Badge>
              <span className="text-xs text-green-600 dark:text-green-300">P=30%</span>
            </div>
            <h4 className="mt-2 font-semibold text-green-700 dark:text-green-400">Minority (59-69)</h4>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">Single party majority. CM: Channi (Dalit card). Cabinet: regional+caste balance.</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <Badge variant="info">Scenario 4</Badge>
              <span className="text-xs text-blue-600 dark:text-blue-300">P=10%</span>
            </div>
            <h4 className="mt-2 font-semibold text-blue-700 dark:text-blue-400">Supermajority (70+)</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Landslide. Full mandate. Ambitious agenda. 2/3rd for constitutional changes.</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">CM Selection Criteria</h4>
          <DataTable
            headers={["Criteria", "Weight", "Channi", "Sidhu", "Bajwa"]}
            rows={[
              ["Dalit Vote Consolidation", "30%", "+++", "+", "+"],
              ["Farmers Connection", "25%", "+", "++", "+++"],
              ["Youth Appeal", "20%", "+", "+++", "++"],
              [" organizational Control", "15%", "++", "++", "+++"],
              ["Sangat Byapri", "10%", "++", "+", "+++"],
            ]}
          />
        </div>
      </div>

      {/* ECI Compliance - g42 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          ECI Compliance & Election Laws
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Expenditure limits, silence period rules, Model Code of Conduct</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Expenditure Limit</h4>
            <p className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">Rs 54 Lakh</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">Per candidate</p>
            <p className="mt-2 text-xs text-purple-500">Section 229A IPC: imprisonment up to 1 year for electoral malpractice</p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Silence Period</h4>
            <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">
              48 hours before polling day
            </p>
            <p className="mt-2 text-xs text-orange-500">No public rallies, processions, or election-related public events</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Paid News Prohibition</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">
              Banned under Representation of People Act
            </p>
            <p className="mt-2 text-xs text-blue-500">ECI monitoring social media and print media for paid content</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Model Code of Conduct:</strong> All Congress candidates must adhere to ECI guidelines. Violations result in candidate disqualification and party penalty. Security personnel deployment request must go through proper channels.
          </p>
        </div>
      </div>

      {/* Weather Planning - g29 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Weather & Election Day Logistics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">February weather patterns, fog/rain impact on turnout</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Malwa (69 seats)</h4>
              <Badge variant="info">7-21°C</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-blue-600 dark:text-blue-300">
              <p>Day: 7-21°C (cold mornings)</p>
              <p>Evening fog likely</p>
              <p>2-5% turnout reduction in fog</p>
              <p>Transport logistics affected</p>
            </div>
          </div>

          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-cyan-700 dark:text-cyan-400">Majha (27 seats)</h4>
              <Badge variant="info">5-19°C</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-cyan-600 dark:text-cyan-300">
              <p>Day: 5-19°C (coldest)</p>
              <p>Heavy fog mornings</p>
              <p>3-5% turnout reduction</p>
              <p>Border area logistics complex</p>
            </div>
          </div>

          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-teal-700 dark:text-teal-400">Doaba (23 seats)</h4>
              <Badge variant="info">6-20°C</Badge>
            </div>
            <div className="mt-3 space-y-2 text-sm text-teal-600 dark:text-teal-300">
              <p>Day: 6-20°C</p>
              <p>Moderate fog</p>
              <p>2-4% turnout reduction</p>
              <p>NRI families visiting</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Fog Impact:</strong> Historical data shows 2-5% turnout reduction in fog-affected areas. Priority: Early morning booth opening (7 AM) for Malwa/Majha. Extended hours recommended for compensating voter flow.
          </p>
        </div>
      </div>

      {/* Attack Strategy - b40 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Opposition Research & Attack Strategy
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Vulnerability identification, attack advertising, truth-squadding</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Criminal Records</h4>
            <div className="mt-2 space-y-1 text-xs text-red-600 dark:text-red-300">
              <p>• Pending cases verification</p>
              <p>• Conviction status tracking</p>
              <p>• Court appearances schedule</p>
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Financial Irregularities</h4>
            <div className="mt-2 space-y-1 text-xs text-orange-600 dark:text-orange-300">
              <p>• Disproportionate assets</p>
              <p>• Shell company connections</p>
              <p>• Benami property claims</p>
            </div>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Professional Misconduct</h4>
            <div className="mt-2 space-y-1 text-xs text-purple-600 dark:text-purple-300">
              <p>• Contract irregularities</p>
              <p>• Licensing violations</p>
              <p>• Certification fraud</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Personal Life</h4>
            <div className="mt-2 space-y-1 text-xs text-blue-600 dark:text-blue-300">
              <p>• Relationship inconsistencies</p>
              <p>• Lifestyle vs income</p>
              <p>• Social media exposure</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Truth-Squadding Protocol:</strong> All AAP claims must be fact-checked within 2 hours. Counter-narrative templates ready for: drugs promise broken (6.6M users), jobs promise broken (76% shortfall), farmer debt unchanged (Rs 2.03 lakh/household), 7% conviction rate.
          </p>
        </div>
      </div>

      {/* Intelligence-to-Agenda Framework - g82 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Intelligence-to-Agenda Conversion
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">4-stage pipeline from raw intelligence to campaign narrative</p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">1</div>
            <h4 className="mt-2 font-semibold text-blue-700 dark:text-blue-400">Collection</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Ground reports, polling data, social listening, media monitoring</p>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">2</div>
            <h4 className="mt-2 font-semibold text-green-700 dark:text-green-400">Analysis</h4>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">Cross-reference validation, gap identification, trend mapping</p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">3</div>
            <h4 className="mt-2 font-semibold text-orange-700 dark:text-orange-400">Synthesis</h4>
            <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">Narrative formation, message testing, priority ranking</p>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">4</div>
            <h4 className="mt-2 font-semibold text-purple-700 dark:text-purple-400">Activation</h4>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">Campaign integration, rapid response, feedback loop</p>
          </div>
        </div>

        <div className="mt-6">
          <MiniChart
            data={[65, 72, 68, 75, 82, 78, 85, 88]}
            color="bg-blue-500"
            height={60}
          />
          <p className="mt-2 text-center text-xs text-slate-500">Intelligence Processing Score (Recent Weeks)</p>
        </div>
      </div>

      {/* Integrated Campaign Blueprint - Victory Pathways - g9 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Victory Pathways
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Three strategic routes to majority (59 seats)</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-50 to-orange-50 p-6 dark:from-red-900/20 dark:to-orange-900/20">
            <Badge variant="danger">PRIMARY PATH</Badge>
            <h4 className="mt-3 font-bold text-red-700 dark:text-red-400">Malwa Pivot</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              Focus 70% resources on Malwa (69 seats). Drug crisis narrative + farmer debt. Convert AAP 2022 voters (42%) who are disillusioned.
            </p>
            <div className="mt-3 space-y-1 text-xs text-red-500">
              <p>Requires: 38-42 seats from Malwa</p>
              <p>Target: 42% vote share</p>
              <p>Key Issues: Drugs, Debt, Dignity</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-6 dark:from-blue-900/20 dark:to-cyan-900/20">
            <Badge variant="info">BALANCE PATH</Badge>
            <h4 className="mt-3 font-bold text-blue-700 dark:text-blue-400">Regional Balance</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">
              Maintain Majha (27) + Doaba (23) base, expand in Malwa. Caste arithmetic: BC 11%, OBC 23%, SC 32%, Sikh 58%, Hindu 38%.
            </p>
            <div className="mt-3 space-y-1 text-xs text-blue-500">
              <p>Requires: 20 Malwa + 20 Malwa + 19 Majha/Doaba</p>
              <p>Target: 35% vote share</p>
              <p>Key: Dalit + Sikh + Farmer unity</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:from-purple-900/20 dark:to-pink-900/20">
            <Badge variant="success">SPLIT PATH</Badge>
            <h4 className="mt-3 font-bold text-purple-700 dark:text-purple-400">Opposition Split</h4>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">
              SAD split (Aug 2025) + AAP-BJP defections (April 2026) = opposition divided. Congress inherits traditional votes.
            </p>
            <div className="mt-3 space-y-1 text-xs text-purple-500">
              <p>Requires: SAD defectors + AAP moderates</p>
              <p>Target: 32-34% vote share</p>
              <p>Key: B-Team narrative amplification</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Math for Majority</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-slate-700 dark:text-white">59</p>
              <p className="text-xs text-slate-500">Seats for Majority</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-slate-700 dark:text-white">~32-35%</p>
              <p className="text-xs text-slate-500">Vote Share Needed</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">+8.7%</p>
              <p className="text-xs text-slate-500">From Current 26.3%</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">1.2M</p>
              <p className="text-xs text-slate-500">New Voters Needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* AAP Governance Track Record - From research-P3/aap-governance */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance: Claims vs Delivery
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Policy delivery assessment — research-P3/aap-governance (12 areas)</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Mohalla Clinics</h4>
            <p className="mt-2 text-2xl font-bold text-green-600">881</p>
            <p className="text-xs text-green-600 dark:text-green-300">Clinics operational</p>
            <p className="mt-2 text-xs text-slate-500">5 crore+ OPD visits</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Free Electricity</h4>
            <p className="mt-2 text-2xl font-bold text-blue-600">300 units</p>
            <p className="text-xs text-blue-600 dark:text-blue-300">Free per month</p>
            <p className="mt-2 text-xs text-slate-500">90% households zero bill</p>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">NAS Ranking</h4>
            <p className="mt-2 text-2xl font-bold text-purple-600">#1</p>
            <p className="text-xs text-purple-600 dark:text-purple-300">National Achievement Survey</p>
            <p className="mt-2 text-xs text-slate-500">118 Schools of Eminence</p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Infrastructure</h4>
            <p className="mt-2 text-2xl font-bold text-orange-600">43,000 km</p>
            <p className="text-xs text-orange-600 dark:text-orange-300">Roads constructed</p>
            <p className="mt-2 text-xs text-slate-500">Rs 1.55 lakh crore investment</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Promise Delivery Scorecard</h4>
          <DataTable
            headers={["Policy Area", "Promise", "Delivery Status", "Key Metric"]}
            rows={[
              ["Healthcare (Mohalla)", "Free healthcare", "DELIVERED", "881 clinics, 5Cr+ visits"],
              ["Education", "Quality schools", "PARTIAL", "118 SoE, 14,525 teachers"],
              ["Free Electricity", "300 units free", "DELIVERED", "90% zero bill households"],
              ["Anti-Drug Campaign", "Drug-free Punjab", "UNFULFILLED", "6.6M users remain"],
              ["Employment", "25L jobs in 5 years", "UNFULFILLED", "65,264 claimed vs 19.3% youth unemployment"],
              ["Farmer Welfare", "Debt waiver", "UNFULFILLED", "Canal irrigation 26%→78%"],
              ["Women Stipend", "Rs 1,000/month", "DELAYED", "4 years late, pilot April 2026"],
              ["Infrastructure", "Road/development", "DELIVERED", "43,000 km roads, Rs 1.55L Cr"],
            ]}
          />
        </div>
      </div>

      {/* Mann Performance & Delhi Tensions */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Mann Performance & Delhi Tensions</p>
            <p className="text-sm text-red-600 dark:text-red-300">AAP governance challenges — research-P3/aap-governance</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Mann Performance</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Approval Erosion:</span>
                <span className="font-bold text-red-600">After LS 2024 rout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Alcoholism Allegations:</span>
                <span className="font-bold text-red-600">Ongoing controversy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">"Remote Control" Narrative:</span>
                <span className="font-bold text-red-600">Kejriwal vs Mann</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Rajya Sabha Defections (April 2026)</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">MPs Defected:</span>
                <span className="font-bold text-red-600">7 Rajya Sabha</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Merged To:</span>
                <span className="font-bold text-red-600">BJP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AAP Label:</span>
                <span className="font-bold text-red-600">"#Gaddar trending"</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Corruption:</strong> CBI raided Punjab Vigilance Bureau (May 2026) — first-ever raid on the anti-corruption body. Shows central government action against state officials.
          </p>
        </div>
      </div>

      {/* Governance Gap Audit - g81 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance Gap Audit
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Promises vs delivery: Jobs, Drugs, Farmer Debt, Justice</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Jobs Promise</h4>
            <p className="mt-2 text-3xl font-bold text-red-600 dark:text-red-400">76%</p>
            <p className="text-sm text-red-600 dark:text-red-300">Shortfall</p>
            <p className="mt-2 text-xs text-red-500">300K promised, actual: ~72K created</p>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Drugs Promise</h4>
            <p className="mt-2 text-3xl font-bold text-orange-600 dark:text-orange-400">UNFULFILLED</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">6.6M users, 230K opioid-dependent</p>
            <p className="mt-2 text-xs text-orange-500">106 overdose deaths (2024)</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Farmer Debt</h4>
            <p className="mt-2 text-3xl font-bold text-yellow-600 dark:text-yellow-400">Rs 2.03L</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">Per household average</p>
            <p className="mt-2 text-xs text-yellow-500">89% of farm households in debt</p>
          </div>

          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Justice Delivery</h4>
            <p className="mt-2 text-3xl font-bold text-purple-600 dark:text-purple-400">7%</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">Conviction rate</p>
            <p className="mt-2 text-xs text-purple-500">44 convictions in 597 cases</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Gap x Salience Matrix</h4>
          <DataTable
            headers={["Issue", "Gap Size", "Voter Salience", "Priority"]}
            rows={[
              ["Drug Abuse", "CRITICAL", "10/10", "IMMEDIATE"],
              ["Youth Unemployment", "CRITICAL", "9/10", "IMMEDIATE"],
              ["Farmer Debt", "HIGH", "8/10", "HIGH"],
              ["Water Crisis", "MEDIUM", "7/10", "MEDIUM"],
              ["Law & Order", "MEDIUM", "8/10", "HIGH"],
            ]}
          />
        </div>
      </div>

      {/* CYCLE 2: Opposition Intelligence Summary */}
      <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400 mb-3">
          Opposition Intelligence Summary
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant={hungAssemblyProjection.likelihood === "HIGH" ? "danger" : "warning"}>
                {hungAssemblyProjection.likelihood} LIKELIHOOD
              </Badge>
            </div>
            <p className="mt-2 text-2xl font-bold text-slate-700 dark:text-white">{hungAssemblyProjection.probability}</p>
            <p className="text-sm text-slate-500">{hungAssemblyProjection.reason}</p>
            <p className="mt-2 text-xs text-slate-400">{hungAssemblyProjection.netSwingNeeded}</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Anti-Incumbency Score</h4>
            <p className="mt-2 text-2xl font-bold text-red-600">{antiIncumbencyScore.score}</p>
            <p className="text-sm text-slate-500">{antiIncumbencyScore.meaning}</p>
            <p className="mt-2 text-xs text-slate-400">Vote share: {antiIncumbencyScore.voteShareCollapse}</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant="success">{bjpSoloIntelligence.status}</Badge>
              <span className="text-xs text-slate-500">{bjpSoloIntelligence.date}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Vote Share Growth</p>
            <p className="text-lg font-bold text-orange-600">
              {bjpSoloIntelligence.voteShare2017}% → {bjpSoloIntelligence.voteShare2024}%
            </p>
            <p className="text-xs text-slate-500">{bjpSoloIntelligence.growthFactor}</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Army & Congress Position */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            WhatsApp Army Sizes
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Digital reach comparison</p>
          <div className="mt-4 space-y-3">
            {whatsAppArmySizes.map((army) => (
              <div key={army.party} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                <span className="font-medium text-slate-700 dark:text-slate-300">{army.party}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-white">{army.size}</span>
                  <Badge variant={army.trend === "Growing" ? "success" : army.trend === "Declining" ? "danger" : "info"}>
                    {army.trend}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Position
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Current Assembly Seats</span>
              <span className="font-bold text-blue-600">{congressPositionData.currentSeats}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Lok Sabha 2024</span>
              <span className="font-bold text-blue-600">{congressPositionData.ls2024Seats}/13</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Status</span>
              <Badge variant="danger">{congressPositionData.status}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Factions</span>
              <span className="font-bold text-red-600">{congressPositionData.factions} camps</span>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>CM Face:</strong> {congressPositionData.cmFace}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offline Perception Assets - g80 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Offline Perception Assets Inventory
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Physical infrastructure, karyakarta network, regional distribution</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Karyakarta Network Reality</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                <span className="text-sm text-red-600 dark:text-red-300">Claimed Members</span>
                <span className="font-bold text-red-700 dark:text-red-400">3 Lakh</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                <span className="text-sm text-orange-600 dark:text-orange-300">Core Activists (Tier 1)</span>
                <span className="font-bold text-orange-700 dark:text-orange-400">45-60K</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                <span className="text-sm text-yellow-600 dark:text-yellow-300">Regular Supporters (Tier 2)</span>
                <span className="font-bold text-yellow-700 dark:text-yellow-400">120-150K</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <span className="text-sm text-blue-600 dark:text-blue-300">Event-Based (Tier 3)</span>
                <span className="font-bold text-blue-700 dark:text-blue-400">200-250K</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Activation Rate Analysis</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 1 (Core)</span>
                  <span className="font-medium text-green-600">85%</span>
                </div>
                <ProgressBar label="" value={85} color="bg-green-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 2 (Regular)</span>
                  <span className="font-medium text-yellow-600">45%</span>
                </div>
                <ProgressBar label="" value={45} color="bg-yellow-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 3 (Event)</span>
                  <span className="font-medium text-orange-600">20%</span>
                </div>
                <ProgressBar label="" value={20} color="bg-orange-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 4 (Sympathizer)</span>
                  <span className="font-medium text-red-600">5%</span>
                </div>
                <ProgressBar label="" value={5} color="bg-red-500" showPercentage={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Strategic Implication:</strong> Only 15-20% of claimed karyakarta network is actually active. Resource allocation must focus on Tier 1-2 activation rather than expansion. Target: 150K core activists by October 2026.
          </p>
        </div>
      </div>

      {/* CYCLE 1 ENHANCEMENT: 15-Pillar Manifesto Framework */}
      <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6 dark:border-emerald-700 dark:bg-emerald-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">15</span>
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">15-Pillar Manifesto Framework — Cycle 1</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">Complete policy priorities with salience scores</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-red-600">1. Drugs Eradication</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 10/10</p>
            <p className="text-xs text-slate-500">Gap: CRITICAL</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-orange-600">2. Youth Employment</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 9/10</p>
            <p className="text-xs text-slate-500">Gap: CRITICAL</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-green-600">3. Farmer Debt Relief</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 8/10</p>
            <p className="text-xs text-slate-500">Gap: HIGH</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-blue-600">4. MSP Guarantee</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 8/10</p>
            <p className="text-xs text-slate-500">Gap: HIGH</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-purple-600">5. Healthcare</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 7/10</p>
            <p className="text-xs text-slate-500">Gap: MEDIUM</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-cyan-600">6. Water Crisis</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 7/10</p>
            <p className="text-xs text-slate-500">Gap: MEDIUM</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-teal-600">7. Law & Order</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 8/10</p>
            <p className="text-xs text-slate-500">Gap: HIGH</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-yellow-600">8. Education</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 6/10</p>
            <p className="text-xs text-slate-500">Gap: MEDIUM</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-pink-600">9. Women Safety</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 7/10</p>
            <p className="text-xs text-slate-500">Gap: MEDIUM</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs font-bold text-indigo-600">10. Industrial Growth</p>
            <p className="text-xs text-slate-500 mt-1">Salience: 5/10</p>
            <p className="text-xs text-slate-500">Gap: LOW</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Priority Ranking Rationale</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Top 3 (IMMEDIATE):</span><span className="font-medium text-red-600">Drugs, Jobs, Farmer Debt</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Next 4 (HIGH):</span><span className="font-medium text-orange-600">MSP, Law&Order, Healthcare, Water</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Remaining (MEDIUM):</span><span className="font-medium text-blue-600">Education, Women, Infra, Industry</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">CM Face Impact on Manifesto</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Channi (Dalit):</span><span className="font-medium text-purple-600">+5-8pp on SC seats</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Raja Warring:</span><span className="font-medium text-blue-600">+2-4pp youth/organization</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Partap Bajwa:</span><span className="font-medium text-green-600">+2-3pp professional</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900/40">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            <strong>Key Insight:</strong> Manifesto must lead with Drugs Eradication (10/10 salience) and Youth Employment (9/10). These match AAP's biggest governance failures and offer clearest contrast. CM face announcement should precede manifesto release (Dec 2026) to maximize narrative impact.
          </p>
        </div>
      </div>
    </div>
  );
}
