"use client";

import Link from "next/link";

const VOTER_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "caste-demographics", name: "Caste Demographics", description: "SC, OBC, Jat Sikh composition" },
  { id: "women-voters", name: "Women Voters", description: "Gender turnout, schemes, engagement" },
  { id: "nri-voters", name: "NRI Voters", description: "Diaspora influence, registration" },
  { id: "voter-psychology", name: "Voter Psychology", description: "Maslow hierarchy, influence channels" },
  { id: "message-strategy", name: "Message Strategy", description: "Message architecture, appeals" },
  { id: "social-crisis", name: "Social Crisis", description: "Drugs, unemployment, farmer distress" },
  { id: "ground-game", name: "Ground Game", description: "Booth operations, GOTV, VRM" },
  { id: "party-dynamics", name: "Party Dynamics", description: "AAP collapse, BJP growth, swing" },
  { id: "regional-analysis", name: "Regional Analysis", description: "Malwa, Majha, Doaba breakdown" },
  { id: "voter-synthesis", name: "Voter Synthesis", description: "Mega-Pillar intelligence summary" },
];

export default function VoterPage() {
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
            Voter outreach, micro-targeting, issue-based campaigns
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {VOTER_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/dashboard/voter/${section.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-pink-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-pink-600 dark:text-white dark:group-hover:text-pink-400">
                {section.name}
              </h3>
              <svg className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
