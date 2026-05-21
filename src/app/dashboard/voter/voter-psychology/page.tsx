"use client";

import { ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

const voterPsychologyHierarchy = [
  { level: "Physiological", issues: ["Unemployment (intensity 5)", "Debt (intensity 5)", "Agricultural distress (intensity 5)"], color: "bg-red-500" },
  { level: "Safety", issues: ["Drug addiction (intensity 5)", "Health crisis (intensity 4)", "Law & order (intensity 5)"], color: "bg-orange-500" },
  { level: "Belonging", issues: ["Caste recognition (intensity 4)", "Dera networks", "Family honor politics"], color: "bg-yellow-500" },
  { level: "Esteem", issues: ["Dignity politics", "Development credit-claiming", "Representation promises"], color: "bg-green-500" },
  { level: "Self-Actualization", issues: ["Youth aspirations", "Education access", "Social justice reform"], color: "bg-blue-500" },
];

const painPointsIntensity = [
  { issue: "Drug addiction", intensity: 5, politicalSalience: "THE defining issue in rural Malwa" },
  { issue: "Youth unemployment", intensity: 5, politicalSalience: "Very High - youth desperation" },
  { issue: "Agricultural debt", intensity: 5, politicalSalience: "Very High - agrarian crisis" },
  { issue: "Water scarcity", intensity: 4, politicalSalience: "Growing - central Punjab groundwater depletion" },
  { issue: "Health crisis", intensity: 4, politicalSalience: "High - medical costs impoverish families" },
  { issue: "Education cost", intensity: 4, politicalSalience: "High - aspirational families" },
];

const influenceChannelMatrix = [
  { channel: "Dera Networks", reach: "High", efficacy: "Very High (bloc vote delivery)", cost: "Low", PunjabRelevance: "Force multipliers for bloc votes" },
  { channel: "Family Chains", reach: "High", efficacy: "Very High", cost: "Zero", PunjabRelevance: "Critical - family elder endorsement" },
  { channel: "Door-to-Door", reach: "Low", efficacy: "Highest", cost: "High", PunjabRelevance: "Critical in rural constituencies" },
  { channel: "WhatsApp", reach: "High", efficacy: "Medium", cost: "Low", PunjabRelevance: "Wide but unmeasurable" },
  { channel: "Religious Networks", reach: "High", efficacy: "High", cost: "Low", PunjabRelevance: "Gurudwara committees, SGPC influence" },
  { channel: "Public Meetings (Juloos)", reach: "Medium", efficacy: "High", cost: "Medium", PunjabRelevance: "Election standard" },
  { channel: "Temple/Market Visits", reach: "High", efficacy: "High", cost: "Low", PunjabRelevance: "High - religious places, haats" },
  { channel: "Phone Banking", reach: "Medium", efficacy: "Medium", cost: "Medium", PunjabRelevance: "Scalable to large voter bases" },
];

const messengerCredibility = [
  { type: "Dera Leader Endorsement", effectiveness: "Very High", note: "Bloc vote transfer" },
  { type: "Religious Figure Endorsement", effectiveness: "High", note: "Sikh community (SGPC)" },
  { type: "Family Elder Endorsement", effectiveness: "Very High", note: "Critical in conservative households" },
  { type: "Caste Elder Endorsement", effectiveness: "High", note: "Traditional voting patterns" },
  { type: "Candidate (Local)", effectiveness: "High", note: "Personal reputation, same background" },
  { type: "Expert Endorsement", effectiveness: "Medium", note: "Selective groups" },
];

const votingBehaviorTheory = [
  { theory: "Columbia School", core: "Social determinism - caste, religion, occupation shape voting", application: "Caste voting blocs, dera networks, party identification" },
  { theory: "Michigan Model", core: "Party ID + candidate image + issues (funnel of causality)", application: "AAP's candidate image overcame Congress party ID in 2022" },
  { theory: "Rational Choice", core: "Economic cost-benefit, retrospective voting", application: "Anti-incumbency punishment for perceived failures on drugs, jobs" },
  { theory: "Bounded Rationality", core: "Cognitive limits, heuristics, mental shortcuts", application: "Party loyalty as simplifying heuristic, symbol-based voting" },
];

export default function VoterPsychologyPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Voter Psychology
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Maslow hierarchy, pain points, and influence channels
          </p>
        </div>
        <Badge variant="success">Voter Psychology Framework</Badge>
      </div>

      {/* Voter Psychology Maslow Hierarchy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Psychology - Maslow Hierarchy Applied to Political Behavior
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {voterPsychologyHierarchy.map((level) => (
            <div key={level.level} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <div className={`inline-block rounded px-2 py-1 text-xs font-bold text-white ${level.color}`}>
                {level.level}
              </div>
              <ul className="mt-2 space-y-1">
                {level.issues.map((issue) => (
                  <li key={issue} className="text-xs text-slate-600 dark:text-slate-400">- {issue}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pain Points Intensity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Pain Points - Intensity Matrix
          </h3>
          <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
          <div className="mt-6 space-y-4">
            {painPointsIntensity.map((point) => (
              <div key={point.issue}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{point.issue}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-red-500">Intensity {point.intensity}/5</span>
                    <Badge variant="danger">Very High</Badge>
                  </div>
                </div>
                <ProgressBar label="" value={point.intensity * 20} color="bg-red-500" showPercentage={false} />
                <p className="mt-1 text-xs text-slate-400">{point.politicalSalience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Influence Channel Matrix */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Influence Channel Effectiveness Matrix
          </h3>
          <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
          <div className="mt-6 overflow-x-auto">
            <DataTable
              headers={["Channel", "Reach", "Efficacy", "Punjab Relevance"]}
              rows={influenceChannelMatrix.map((c) => [
                c.channel, c.reach, c.efficacy, c.PunjabRelevance
              ])}
            />
          </div>
        </div>
      </div>

      {/* Messenger Credibility */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Messenger Credibility Framework
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {messengerCredibility.map((m) => (
            <div key={m.type} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{m.type}</span>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="success">Effectiveness: {m.effectiveness}</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-400">{m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Voting Behavior Theories */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voting Behavior Theories - Punjab Application
        </h3>
        <p className="text-sm text-slate-500">From b32-voting-behavior-theories-models</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {votingBehaviorTheory.map((theory) => (
            <div key={theory.theory} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {theory.theory}
              </span>
              <p className="mt-2 text-xs text-slate-500">{theory.core}</p>
              <p className="mt-2 text-xs italic text-slate-400">Application: {theory.application}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Voter Turnout Barriers */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Turnout Barriers
        </h3>
        <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework</p>
        <div className="mt-6 space-y-3">
          {[
            { barrier: "Apathy", severity: "High", description: "All politicians same, learned helplessness" },
            { barrier: "Accessibility", severity: "Moderate", description: "Transport, elderly, disabled access to booths" },
            { barrier: "Procedural", severity: "Moderate", description: "Name not on list, wrong booth assignment" },
            { barrier: "Economic", severity: "High", description: "Paid voting, opportunity cost of a day's wages" },
            { barrier: "Social", severity: "Moderate", description: "Family opposition, caste panchayat directives" },
            { barrier: "Weather", severity: "Low", description: "Rain, summer heat, festival conflicts" },
            { barrier: "Confusion", severity: "Low", description: "Multiple elections, date confusion" },
            { barrier: "Intimidation", severity: "Moderate", description: "Booth capturing threats, cash-for-vote" },
          ].map((barrier) => (
            <div key={barrier.barrier} className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{barrier.barrier}</span>
                <p className="text-xs text-slate-400">{barrier.description}</p>
              </div>
              <Badge variant={barrier.severity === "High" ? "danger" : barrier.severity === "Moderate" ? "warning" : "info"}>
                {barrier.severity}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
