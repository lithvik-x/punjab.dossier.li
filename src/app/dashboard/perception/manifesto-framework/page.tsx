"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { Scroll } from "lucide-react";
import {
  manifestoCommunicationData,
  getManifestoSectorCommittees,
  getContentPillars,
  getRegionalContentFocus,
  getMessageFrameworkKeyPoints,
} from "@/lib/manifesto-communication-data";

export default function ManifestoFrameworkPage() {
  const contentPillars = getContentPillars();
  const sectorCommittees = getManifestoSectorCommittees();
  const regionalContent = getRegionalContentFocus();
  const keyMessages = getMessageFrameworkKeyPoints();

  const {
    manifestoDesign: {
      researchPhase,
      draftingPhase,
      keyComponents,
      launchPhase,
    },
    communicationStrategy: { channelStrategy, messageFramework },
    contentStrategy: { contentFormats },
  } = manifestoCommunicationData;

  const allFormats = [
    ...contentFormats.video,
    ...contentFormats.graphics,
    ...contentFormats.text,
    ...contentFormats.audio,
  ];

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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg">
              <Scroll className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Manifesto Framework
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            15-pillar framework
          </p>
        </div>
        <Badge variant="info">{manifestoCommunicationData.metadata.confidence} Confidence</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Content Pillars"
          value={contentPillars.length}
          subtitle="Core messaging framework"
          color="violet"
        />
        <MetricCard
          title="Sector Committees"
          value={sectorCommittees.length}
          subtitle="Policy drafting teams"
          color="blue"
        />
        <MetricCard
          title="Key Messages"
          value={keyMessages.length}
          subtitle="Core campaign narratives"
          color="emerald"
        />
        <MetricCard
          title="Content Formats"
          value={allFormats.length}
          subtitle="Video, graphics, text, audio"
          color="amber"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Content Pillars
            </h3>
            <div className="mt-4 space-y-3">
              {contentPillars.map((pillar) => (
                <div
                  key={pillar.pillar}
                  className="rounded-lg border border-violet-100 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20"
                >
                  <h4 className="font-semibold text-violet-700 dark:text-violet-400">
                    {pillar.pillar}
                  </h4>
                  <p className="mt-1 text-sm text-violet-600 dark:text-violet-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Message Framework
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {messageFramework.coreNarrative}
            </p>
            <div className="mt-4 space-y-3">
              {keyMessages.map((msg, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{msg}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Differentiation from AAP
              </h4>
              <p className="mt-2 text-sm text-slate-500">
                {messageFramework.differentiationFromAAP}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Research Phase
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Voter Priority Survey
                </h4>
                <p className="mt-1 text-xs text-slate-500">Sample: {researchPhase.voterPrioritySurvey.sampleSize}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {researchPhase.voterPrioritySurvey.stratification.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Focus Groups
                </h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {researchPhase.focusGroupDiscussions.demographicGroups.map((g) => (
                    <span
                      key={g}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Expert Consultations
                </h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {Object.values(researchPhase.expertConsultations).map((expert) => (
                    <span
                      key={expert}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                    >
                      {expert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Sector Committees
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {draftingPhase.sectorCommittees.length} policy drafting committees
            </p>
            <div className="mt-4 space-y-2">
              {sectorCommittees.map((committee) => (
                <div
                  key={committee}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                    {sectorCommittees.indexOf(committee) + 1}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{committee}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Manifesto Key Components
            </h3>
            <div className="mt-4 space-y-3">
              {Object.entries(keyComponents).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <h4 className="text-sm font-semibold capitalize text-slate-700 dark:text-slate-300">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Regional Content Focus
            </h3>
            <div className="mt-4 space-y-3">
              {regionalContent.map((rc) => (
                <div
                  key={rc.region}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{rc.region}</h4>
                  <p className="mt-1 text-sm text-slate-500">{rc.focus}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Channel Strategy
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">Traditional</h4>
                <ul className="mt-2 space-y-1">
                  {channelStrategy.traditionalMedia.map((m) => (
                    <li key={m} className="text-xs text-blue-600 dark:text-blue-300">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">Digital</h4>
                <ul className="mt-2 space-y-1">
                  {channelStrategy.digitalPlatforms.map((p) => (
                    <li key={p} className="text-xs text-green-600 dark:text-green-300">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-400">Ground</h4>
                <ul className="mt-2 space-y-1">
                  {channelStrategy.groundLevel.map((g) => (
                    <li key={g} className="text-xs text-orange-600 dark:text-orange-300">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">{channelStrategy.microTargeting}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Content Formats
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Video</h4>
                <ul className="mt-2 space-y-1">
                  {contentFormats.video.map((f) => (
                    <li key={f} className="text-xs text-slate-500">{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Graphics</h4>
                <ul className="mt-2 space-y-1">
                  {contentFormats.graphics.map((f) => (
                    <li key={f} className="text-xs text-slate-500">{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Text</h4>
                <ul className="mt-2 space-y-1">
                  {contentFormats.text.map((f) => (
                    <li key={f} className="text-xs text-slate-500">{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Audio</h4>
                <ul className="mt-2 space-y-1">
                  {contentFormats.audio.map((f) => (
                    <li key={f} className="text-xs text-slate-500">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Launch & Testing
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Event Design</h4>
                <p className="mt-1 text-xs text-slate-500">{launchPhase.eventDesign}</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Media Strategy</h4>
                <p className="mt-1 text-xs text-slate-500">{launchPhase.mediaStrategy}</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Distribution</h4>
                <p className="mt-1 text-xs text-slate-500">{launchPhase.distributionPlan}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
