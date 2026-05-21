"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";

const groundGameResources = {
  totalBooths: "23,000+",
  votersPerBooth: "800-1,200",
  boothSevaksTarget: "25,000",
  totalBoothWorkersTarget: "1.25 lakh",
  currentBoothVolunteers: "4.2 per booth (avg)",
  targetBoothVolunteers: "8 per booth",
  pannaPramukhModel: "One worker per 10 voters",
};

const threeContactSequence = [
  { stage: "Awareness", timing: "T-45 to T-30 days", objective: "Name recognition, issue awareness", channels: ["WhatsApp broadcast", "Door-to-door", "Rallies"], contactRate: "100% of target voters" },
  { stage: "Persuasion", timing: "T-30 to T-10 days", objective: "Convince swing voters, address objections", channels: ["Personal outreach", "Family meetings", "Small group meetings"], contactRate: "60-70% of persuadable voters" },
  { stage: "GOTV (Get Out The Vote)", timing: "T-10 to E-Day", objective: "Turn supporters to voters, transport, last-minute push", channels: ["SMS/WhatsApp reminders", "Phone banking", "Booth-level follow-up"], contactRate: "90%+ of committed supporters" },
];

const boothContactStrategy = [
  { category: "Safe Booth", margin: ">15%", contactRatio: "2:1", priority: "LOW", notes: "Maintain base, minimal incremental contact" },
  { category: "Competitive", margin: "5-15%", contactRatio: "3:1", priority: "MEDIUM", notes: "Intensive persuasion contact" },
  { category: "Battleground", margin: "2-5%", contactRatio: "4:1", priority: "HIGH", notes: "Maximum contact, personal outreach" },
  { category: "Swing Booth", margin: "<2% or undecided", contactRatio: "5:1", priority: "CRITICAL", notes: "Exhaustive contact, family-level GOTV" },
];

const ceilingEffect = {
  finding: "5-7 contacts become counterproductive",
  threshold: "After 7 contacts, voter disengagement increases",
  data: "Contact fatigue causes 12-18% decrease in positive response",
  recommendation: "Maximum 5 contacts per voter in campaign cycle",
};

const volunteerGaps = {
  boothSevakGap: { required: 40000, deployed: 25000, shortfall: "15,000-25,000 additional Booth Sevaks needed" },
  whatsappVolunteers: { required: 122230, deployed: 20000, shortfall: "1,02,230 WhatsApp volunteers deficit" },
  phoneBanking: { documented: "~0", note: "Phone banking volunteers virtually undocumented - major gap" },
  femaleTarget: { target: "30%", current: "~8%", gap: "Congress needs 30% female Booth Sevaks for women voter outreach" },
  shgNetwork: { potential: "SHG networks for women voter contact", note: "Self-Help Groups as force multipliers for women outreach" },
};

const gotvOperationsBudget = {
  range: "Rs 75-145 crore",
  breakdown: {
    transport: "Rs 30-50 crore",
    boothAgentPayments: "Rs 15-25 crore",
    communicationCosts: "Rs 10-20 crore",
    foodAndLogistics: "Rs 8-15 crore",
    emergencyReserve: "Rs 12-35 crore",
  },
  perBooth: "Rs 30,000-60,000",
};

const electionConstraints = {
  harvestBlackout: {
    periods: ["Oct-Nov (Kharif harvest)", "Mar-Apr (Rabi harvest)"],
    impact: "Reduced voter availability, farm labor focused",
    mitigation: "Schedule outreach around harvest windows, night meetings",
  },
  countdown72Hour: {
    protocol: "Intensive 72-hour countdown",
    components: ["Hourly booth-level reporting", "Real-time GOTV dashboard", "Transport standby for elderly/disabled", "WhatsApp command chain activation"],
  },
};

const gotvMetrics = {
  impactByChannel: [
    { channel: "Door-to-Door", contactToVote: "25-35%", persuasionRate: "5-10%", mobilizationLift: "15-20%" },
    { channel: "Phone Banking", contactToVote: "10-15%", persuasionRate: "3-5%", mobilizationLift: "10-15%" },
    { channel: "WhatsApp Broadcast", contactToVote: "12-18%", persuasionRate: "4-8%", mobilizationLift: "12-18%" },
    { channel: "SMS Reminder", contactToVote: "5-10%", persuasionRate: "1-3%", mobilizationLift: "5-10%" },
    { channel: "Village Announcement", contactToVote: "10-15%", persuasionRate: "2-5%", mobilizationLift: "10-15%" },
    { channel: "Family Influence", contactToVote: "20-30%", persuasionRate: "8-12%", mobilizationLift: "20-30%" },
  ],
  hourlyTurnoutTargets: [
    { time: "9:00 AM", target: "15%+", action: "Worker reminder, transport" },
    { time: "11:00 AM", target: "30%+", action: "Booth intensification" },
    { time: "1:00 PM", target: "45%+", action: "Direct voter contact" },
    { time: "3:00 PM", target: "60%+", action: "GOTV push, personal calls" },
    { time: "5:00 PM", target: "75%+", action: "Final reminder, transport" },
    { time: "Close (6 PM)", target: "85%+", action: "Remaining voter transport" },
  ],
};

const aapModel = {
  workersPerThousand: 12,
  ratio: "1:83",
  approach: "Four-phase: Identification, Persuasion, Commitment, Turnout",
  training: "80-minute structured training per worker",
};

const congressTarget = {
  workersPerThousand: "10-12",
  ratio: "1:100",
  profile: "Youth Congress, NSUI, Seva Dal members",
  technology: "App-based voter list with caste, age, gender, issue-tagged data",
};

const vrmSystem = {
  voterDataPoints: [
    { category: "Demographic", fields: "Age, gender, caste, religion, family size", source: "Voter list, survey" },
    { category: "Geographic", fields: "Booth, ward, village, assembly constituency", source: "Voter list" },
    { category: "Behavioral", fields: "Past voting, participation level, contact history", source: "Campaign data, ECI" },
    { category: "Issue", fields: "Primary concern (drugs, jobs, water, etc.)", source: "Survey, conversation" },
    { category: "Influence", fields: "Community leader, social network position", source: "Network analysis" },
    { category: "Accessibility", fields: "Phone, WhatsApp, transport needs", source: "Contact records" },
  ],
};

const boothData = {
  totalPollingStations: "~18,000-23,000",
  registeredVoters2022: "21,499,804",
  votesPolled2022: "15,563,720",
  turnout2022: "72.15%",
  votersPerBoothStandard: "800-1,200 (ECI guideline)",
  partyStrongholdBooths: {
    congress: { estimatedBooths: "~4,000-5,500", characteristics: "Dalit-majority villages, urban lower-middle-class colonies" },
    aap: { estimatedBooths: "~7,000-9,000", characteristics: "Urban youth-heavy booths, middle-class colonies, new urban migrants" },
    sadBjp: { estimatedBooths: "~3,500-4,500", characteristics: "Jat Sikh-majority villages in Malwa, border belt traditional SAD voters" },
    swing: { estimatedBooths: "~3,000-4,000", characteristics: "Mixed-caste rural booths, OBC-majority areas, border region transitional booths" },
  },
};

export default function GroundGamePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Ground Game
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Booth operations, contact strategy, and GOTV metrics
          </p>
        </div>
        <Badge variant="success">23,000+ Booths</Badge>
      </div>

      {/* Ground Game Resources */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Ground Game — Booth-Level Resources
        </h3>
        <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework, b42-ground-game-booth-operations</p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Total Booths</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{groundGameResources.totalBooths}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Voters per Booth</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{groundGameResources.votersPerBooth}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Booth Sevaks Target</span>
            <p className="text-2xl font-bold text-green-500">{groundGameResources.boothSevaksTarget}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Total Workers Target</span>
            <p className="text-2xl font-bold text-green-500">{groundGameResources.totalBoothWorkersTarget}</p>
          </div>
        </div>
        <div className="mt-4 rounded bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-bold text-green-700 dark:text-green-400">Panna Pramukh Model:</p>
          <p className="mt-1 text-xs text-green-600 dark:text-green-300">One worker per 10 voters. Current avg: {groundGameResources.currentBoothVolunteers} per booth. Target: {groundGameResources.targetBoothVolunteers} per booth.</p>
        </div>
      </div>

      {/* 3-Contact Sequence */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          3-Contact Sequence
        </h3>
        <p className="text-sm text-slate-500">From MP6 ground game research</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {threeContactSequence.map((contact) => (
            <div key={contact.stage} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {contact.stage}
              </span>
              <p className="mt-2 text-xs text-slate-500">{contact.timing}</p>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{contact.objective}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {contact.channels.map((ch) => (
                  <span key={ch} className="rounded bg-slate-100 px-1 text-xs dark:bg-slate-700">{ch}</span>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-400">{contact.contactRate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booth Contact Strategy */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Booth Contact Strategy
          </h3>
          <p className="text-sm text-slate-500">Contact ratios based on margin classification</p>
          <div className="mt-4 space-y-3">
            {boothContactStrategy.map((bcs) => (
              <div key={bcs.category} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{bcs.category}</span>
                  <Badge variant={bcs.priority === "CRITICAL" ? "danger" : bcs.priority === "HIGH" ? "warning" : "info"}>
                    {bcs.priority}
                  </Badge>
                </div>
                <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                  <span>Margin: <strong>{bcs.margin}</strong></span>
                  <span>Ratio: <strong>{bcs.contactRatio}</strong></span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{bcs.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ceiling Effect */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact Ceiling Effect
          </h3>
          <p className="text-sm text-slate-500">Too many contacts become counterproductive</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-bold text-red-700 dark:text-red-400">{ceilingEffect.finding}</p>
              <p className="mt-1 text-xs text-slate-600">{ceilingEffect.data}</p>
            </div>
            <div className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <span className="text-xs text-slate-500">Threshold:</span>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{ceilingEffect.threshold}</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
              <span className="text-xs font-bold text-green-700 dark:text-green-400">Recommendation:</span>
              <p className="text-sm text-green-600 dark:text-green-300">{ceilingEffect.recommendation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Gaps */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Volunteer Resource Gaps
        </h3>
        <p className="text-sm text-slate-500">Critical shortfalls in current ground game capacity</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-sm font-bold text-red-700 dark:text-red-400">Booth Sevak Gap</p>
            <div className="mt-2 text-xs space-y-1">
              <div>Required: <strong>{volunteerGaps.boothSevakGap.required.toLocaleString()}</strong></div>
              <div>Deployed: <strong>{volunteerGaps.boothSevakGap.deployed.toLocaleString()}</strong></div>
              <div className="text-red-600">Shortfall: {volunteerGaps.boothSevakGap.shortfall}</div>
            </div>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
            <p className="text-sm font-bold text-orange-700 dark:text-orange-400">WhatsApp Volunteers</p>
            <div className="mt-2 text-xs space-y-1">
              <div>Required: <strong>{volunteerGaps.whatsappVolunteers.required.toLocaleString()}</strong></div>
              <div>Deployed: <strong>{volunteerGaps.whatsappVolunteers.deployed.toLocaleString()}</strong></div>
              <div className="text-orange-600">Shortfall: {volunteerGaps.whatsappVolunteers.shortfall}</div>
            </div>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">Phone Banking</p>
            <div className="mt-2 text-xs">
              <div>Documented: <strong>{volunteerGaps.phoneBanking.documented}</strong></div>
              <div className="text-yellow-600">{volunteerGaps.phoneBanking.note}</div>
            </div>
          </div>
          <div className="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
            <p className="text-sm font-bold text-pink-700 dark:text-pink-400">Female Booth Sevaks</p>
            <div className="mt-2 text-xs space-y-1">
              <div>Target: <strong>{volunteerGaps.femaleTarget.target}</strong></div>
              <div>Current: <strong>{volunteerGaps.femaleTarget.current}</strong></div>
              <div className="text-pink-600">{volunteerGaps.femaleTarget.gap}</div>
            </div>
          </div>
        </div>
      </div>

      {/* GOTV Operations Budget */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            GOTV Operations Budget
          </h3>
          <p className="text-sm text-slate-500">Cost breakdown for election day operations</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Range</span>
              <span className="text-xl font-bold text-green-500">{gotvOperationsBudget.range}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Per Booth</span>
              <Badge variant="success">{gotvOperationsBudget.perBooth}</Badge>
            </div>
            <div className="mt-3 rounded bg-slate-50 p-3 dark:bg-slate-800">
              <p className="text-xs font-bold text-slate-600">Breakdown:</p>
              <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between"><span>Transport:</span><strong>{gotvOperationsBudget.breakdown.transport}</strong></div>
                <div className="flex justify-between"><span>Booth Agent Payments:</span><strong>{gotvOperationsBudget.breakdown.boothAgentPayments}</strong></div>
                <div className="flex justify-between"><span>Communication:</span><strong>{gotvOperationsBudget.breakdown.communicationCosts}</strong></div>
                <div className="flex justify-between"><span>Food & Logistics:</span><strong>{gotvOperationsBudget.breakdown.foodAndLogistics}</strong></div>
                <div className="flex justify-between"><span>Emergency Reserve:</span><strong>{gotvOperationsBudget.breakdown.emergencyReserve}</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* Election Constraints */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Election Calendar Constraints
          </h3>
          <p className="text-sm text-slate-500">Timing factors affecting ground game</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-sm font-bold text-orange-700 dark:text-orange-400">Harvest Blackout Periods</p>
              <div className="mt-2 text-xs space-y-1">
                <div>Periods: {electionConstraints.harvestBlackout.periods.join(", ")}</div>
                <div className="text-orange-600">{electionConstraints.harvestBlackout.impact}</div>
                <div className="text-slate-500">Mitigation: {electionConstraints.harvestBlackout.mitigation}</div>
              </div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-bold text-red-700 dark:text-red-400">72-Hour Countdown Protocol</p>
              <div className="mt-2 text-xs space-y-1">
                <div>{electionConstraints.countdown72Hour.protocol}</div>
                {electionConstraints.countdown72Hour.components.map((c) => (
                  <div key={c} className="text-slate-600">- {c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GOTV Metrics */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          GOTV Channel Effectiveness
        </h3>
        <p className="text-sm text-slate-500">Mobilization lift by contact channel</p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Channel", "Contact to Vote", "Persuasion Rate", "Mobilization Lift"]}
            rows={gotvMetrics.impactByChannel.map((c) => [c.channel, c.contactToVote, c.persuasionRate, c.mobilizationLift])}
          />
        </div>
      </div>

      {/* Hourly Turnout Targets */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Election Day Hourly Turnout Targets
        </h3>
        <div className="mt-4 space-y-2">
          {gotvMetrics.hourlyTurnoutTargets.map((target) => (
            <div key={target.time} className="flex items-center gap-3">
              <span className="flex h-8 w-16 items-center justify-center rounded bg-slate-100 text-xs font-bold dark:bg-slate-700">
                {target.time}
              </span>
              <span className="flex h-8 w-12 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                {target.target}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{target.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Party Booth Distribution */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Party Stronghold Booth Distribution
          </h3>
          <p className="text-sm text-slate-500">Estimated booth count by party</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
              <div className="flex justify-between">
                <span className="text-sm font-bold text-green-700">Congress</span>
                <span className="text-lg font-bold text-green-600">{boothData.partyStrongholdBooths.congress.estimatedBooths}</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">{boothData.partyStrongholdBooths.congress.characteristics}</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <div className="flex justify-between">
                <span className="text-sm font-bold text-red-700">AAP</span>
                <span className="text-lg font-bold text-red-600">{boothData.partyStrongholdBooths.aap.estimatedBooths}</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">{boothData.partyStrongholdBooths.aap.characteristics}</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <div className="flex justify-between">
                <span className="text-sm font-bold text-orange-700">SAD/BJP</span>
                <span className="text-lg font-bold text-orange-600">{boothData.partyStrongholdBooths.sadBjp.estimatedBooths}</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">{boothData.partyStrongholdBooths.sadBjp.characteristics}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex justify-between">
                <span className="text-sm font-bold text-slate-700">Swing</span>
                <span className="text-lg font-bold text-slate-600">{boothData.partyStrongholdBooths.swing.estimatedBooths}</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">{boothData.partyStrongholdBooths.swing.characteristics}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Worker Model Comparison
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-400">AAP Model</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div>Workers/1000: <strong>{aapModel.workersPerThousand}</strong></div>
                <div>Ratio: <strong>{aapModel.ratio}</strong></div>
              </div>
              <p className="mt-2 text-xs text-slate-600">Approach: {aapModel.approach}</p>
              <p className="text-xs text-slate-500">Training: {aapModel.training}</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-sm font-bold text-green-700 dark:text-green-400">Congress Target</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div>Workers/1000: <strong>{congressTarget.workersPerThousand}</strong></div>
                <div>Ratio: <strong>{congressTarget.ratio}</strong></div>
              </div>
              <p className="mt-2 text-xs text-slate-600">Profile: {congressTarget.profile}</p>
              <p className="text-xs text-slate-500">Technology: {congressTarget.technology}</p>
            </div>
          </div>
        </div>
      </div>

      {/* VRM System */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Relationship Management (VRM) System
        </h3>
        <p className="text-sm text-slate-500">Data points for voter tracking and microtargeting</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {vrmSystem.voterDataPoints.map((dp) => (
            <div key={dp.category} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{dp.category}</span>
              <p className="mt-1 text-xs text-slate-500">{dp.fields}</p>
              <p className="mt-1 text-xs text-slate-400">Source: {dp.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
