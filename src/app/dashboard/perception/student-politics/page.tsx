"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { GraduationCap } from "lucide-react";

const campusStrongholds = [
  {
    university: "Panjab University (PU)",
    location: "Chandigarh",
    studentPopulation: "~20,000",
    politicalIntensity: "Very High",
    dominantForces: "NSUI, ABVP, SFI",
    nextElection: "September 2026",
    congressRelevance: "PU central to Punjab student narrative; NSUI has held Pres in recent terms",
  },
  {
    university: "Guru Nanak Dev University (GNDU)",
    location: "Amritsar",
    studentPopulation: "~15,000",
    politicalIntensity: "High",
    dominantForces: "ABVP, NSUI, SFI",
    nextElection: "October 2026",
    congressRelevance: "Majha student hub; NSUI competitive but ABVP gaining",
  },
  {
    university: "Punjabi University",
    location: "Patiala",
    studentPopulation: "~12,000",
    politicalIntensity: "High",
    dominantForces: "ABVP, NSUI, SFI",
    nextElection: "November 2026",
    congressRelevance: "Malwa student hub; Punjabi identity politics intersect with campus elections",
  },
  {
    university: "Punjab Agricultural University (PAU)",
    location: "Ludhiana",
    studentPopulation: "~8,000",
    politicalIntensity: "Moderate",
    dominantForces: "ABVP, NSUI",
    nextElection: "December 2026",
    congressRelevance: "Farm youth connect; farmer backdrop creates NSUI opening",
  },
];

const studentWingComparison = [
  {
    wing: "NSUI",
    parentParty: "Indian National Congress",
    punjabStrength: "Moderate (urban campuses, PU stronghold)",
    keyChallenges: "Funding constraints, ABVP organizational depth, internal factionalism in Punjab unit",
    strategicRole: "Farm youth mobilization, anti-BJP campus narrative, first-time voter pipeline to Congress",
  },
  {
    wing: "ABVP",
    parentParty: "BJP-aligned (RSS)",
    punjabStrength: "Strong (growing in all campuses, well-funded)",
    keyChallenges: "Perception as 'outsider' in Punjab, anti-Sikh sentiment baggage, Punjabi identity gap",
    strategicRole: "BJP youth outreach, Hindu vote consolidation, digital narrative dominance on campuses",
  },
  {
    wing: "SFI",
    parentParty: "CPI-M / Left",
    punjabStrength: "Moderate (PU, few colleges)",
    keyChallenges: "National Left decline, limited resources, niche appeal in urban humanities",
    strategicRole: "Anti-establishment vote, issue-based mobilization, potential Congress ally",
  },
  {
    wing: "Punjab Youth Congress",
    parentParty: "INC (state arm)",
    punjabStrength: "Weak-Moderate (organizational rebuilding underway)",
    keyChallenges: "Identity crisis between NSUI and IYC, leadership gaps, resource limitations",
    strategicRole: "Booth-level youth outreach, drug awareness campaigns, digital engagement",
  },
];

const keyStudentIssues = [
  {
    issue: "Fee Hikes & Education Costs",
    relevance: "High",
    congressPosition: "Oppose privatization, promise fee regulation",
    impact: "Drives mobilization for campus elections; resonates across all universities",
  },
  {
    issue: "Drug Abuse on Campuses",
    relevance: "Very High",
    congressPosition: "Campus de-addiction centers, awareness campaigns",
    impact: "Panjab-specific crisis affecting all age groups; creates NSUI differentiation",
  },
  {
    issue: "Employment & Placements",
    relevance: "High",
    congressPosition: "Skill development, industry-academia partnerships",
    impact: "Connects campus issues to broader unemployment narrative",
  },
  {
    issue: "Punjabi Language & Culture",
    relevance: "Medium-High",
    congressPosition: "Promote Punjabi medium, cultural festivals",
    impact: "Identity politics in campus elections; counter ABVP Hindi imposition",
  },
  {
    issue: "Internet & Digital Access",
    relevance: "Medium",
    congressPosition: "Free WiFi on campuses, digital literacy programs",
    impact: "Engages tech-savvy student demographics; vote-getter in urban colleges",
  },
];

export default function StudentPoliticsPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white shadow-lg">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Student Politics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Panjab University, NSUI/ABVP
          </p>
        </div>
        <Badge variant="info">Campus Intelligence</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Major Campuses"
          value={campusStrongholds.length}
          subtitle="Key university hubs"
          color="rose"
        />
        <MetricCard
          title="Student Wings"
          value="4"
          subtitle="NSUI, ABVP, SFI, PYC"
          color="rose"
        />
        <MetricCard
          title="Youth Population"
          value="50-55%"
          subtitle="Under 30 in Punjab"
          change={2}
          trend="up"
          color="purple"
        />
        <MetricCard
          title="First-Time Voters"
          value="65-70%"
          subtitle="Youth turnout rate"
          change={-5}
          trend="down"
          color="purple"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Campus Political Landscape
            </h3>
            <div className="mt-4 space-y-4">
              {campusStrongholds.map((campus, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                        {campus.university}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {campus.location} &middot; {campus.studentPopulation} students
                      </p>
                    </div>
                    <Badge
                      variant={
                        campus.politicalIntensity === "Very High"
                          ? "danger"
                          : "warning"
                      }
                    >
                      {campus.politicalIntensity}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {campus.dominantForces.split(", ").map((f, j) => (
                      <Badge key={j} variant="default">
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Next election: {campus.nextElection}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {campus.congressRelevance}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Student Wing Comparison
            </h3>
            <div className="mt-4 space-y-4">
              {studentWingComparison.map((wing, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      {wing.wing}
                    </h4>
                    <Badge variant="info">{wing.parentParty}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Punjab strength:
                    </span>{" "}
                    {wing.punjabStrength}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Challenges:
                    </span>{" "}
                    {wing.keyChallenges}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Role:
                    </span>{" "}
                    {wing.strategicRole}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Key Campus Issues
          </h3>
          <div className="mt-4 space-y-3">
            {keyStudentIssues.map((issue, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200">
                    {issue.issue}
                  </h4>
                  <Badge
                    variant={
                      issue.relevance === "Very High"
                        ? "danger"
                        : issue.relevance === "High"
                          ? "warning"
                          : "info"
                    }
                  >
                    {issue.relevance}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Congress position:
                  </span>{" "}
                  {issue.congressPosition}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {issue.impact}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Youth Disconnect & Strategic Implications
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
                <h4 className="font-semibold text-pink-700 dark:text-pink-400">
                  The Engagement Gap
                </h4>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">
                  60-70% of Punjab youth hold opinions on political issues, but
                  fewer than 30% intend to vote or participate in party
                  activities. This &ldquo;intentional non-engagement&rdquo; reflects conscious
                  disengagement from institutional politics, not apathy.
                </p>
              </div>
              <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
                <h4 className="font-semibold text-rose-700 dark:text-rose-400">
                  AAP Youth Coalition Erosion
                </h4>
                <p className="mt-1 text-sm text-rose-600 dark:text-rose-300">
                  AAP won 45-55% of the youth vote in 2022. Erosion signals
                  include declining social media engagement, growing criticism of
                  AAP governance, and reduced satisfaction on key youth
                  priorities — creating an opening for Congress.
                </p>
              </div>
              <div className="rounded-lg bg-fuchsia-50 p-4 dark:bg-fuchsia-900/20">
                <h4 className="font-semibold text-fuchsia-700 dark:text-fuchsia-400">
                  NSUI Organizational Challenge
                </h4>
                <p className="mt-1 text-sm text-fuchsia-600 dark:text-fuchsia-300">
                  NSUI Punjab needs rebuilding: funding constraints, internal
                  factionalism, and competition from ABVP&apos;s better-resourced
                  campus machinery. Strategic focus on PU, GNDU, and PAU as
                  demonstration campuses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Congress Student Strategy Recommendations
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800/30 dark:bg-pink-900/20">
                <h4 className="font-medium text-pink-700 dark:text-pink-400">
                  Campus Connect Program
                </h4>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">
                  Establish regular NSUI-Punjab Youth Congress coordination
                  meetings. Create campus-specific issue platforms for each major
                  university aligned with Congress manifesto.
                </p>
              </div>
              <div className="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800/30 dark:bg-pink-900/20">
                <h4 className="font-medium text-pink-700 dark:text-pink-400">
                  Digital Mobilization
                </h4>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">
                  Build campus-specific WhatsApp networks, Instagram content
                  operations, and YouTube channels focused on Punjabi student
                  issues. Counter ABVP digital dominance with localized content.
                </p>
              </div>
              <div className="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800/30 dark:bg-pink-900/20">
                <h4 className="font-medium text-pink-700 dark:text-pink-400">
                  First-Time Voter Pipeline
                </h4>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">
                  Target 18-21 age cohort with voter registration drives on
                  campuses. Leverage campus elections as gateway to mainstream
                  political engagement. Convert student union leaders into
                  grassroots campaign workers.
                </p>
              </div>
              <div className="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800/30 dark:bg-pink-900/20">
                <h4 className="font-medium text-pink-700 dark:text-pink-400">
                  Issue-Based Mobilization
                </h4>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">
                  Lead campaigns on fee regulation, campus safety, drug
                  de-addiction, and job placement rather than partisan loyalty.
                  Youth respond to issues, not party labels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campus Election Calendar 2026
          </h3>
          <div className="mt-4 space-y-3">
            {campusStrongholds.map((campus, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {campus.university}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {campus.dominantForces}
                  </p>
                </div>
                <Badge variant="warning">{campus.nextElection}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
