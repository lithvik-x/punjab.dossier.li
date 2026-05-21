"use client";

import { MetricCard, Badge, MiniChart } from "@/components/ui/MetricCard";

export default function CandidateStrategyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              4
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Campaign Strategy - Digital metrics, perception & reputation management
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* MP4-004/MP4-025: Campaign Strategy Summary */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Campaign Strategy Summary (MP4)
        </h3>
        <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
          Core narrative - Timeline - Budget - Caste targets
        </p>

        {/* Key Slogans */}
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-xs text-red-600">Primary Slogan</p>
            <p className="text-lg font-bold text-red-700">&quot;Judega Block, Jittegi Congress&quot;</p>
          </div>
          <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900/40">
            <p className="text-xs text-orange-600">Attack Line</p>
            <p className="text-lg font-bold text-orange-700">&quot;4 Saal 0 Kaam&quot;</p>
          </div>
        </div>

        {/* Timeline Summary */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Four-Phase Campaign Timeline</h4>
        <div className="mt-2 grid gap-2 md:grid-cols-4 text-xs">
          <div className="rounded bg-blue-100 p-2 dark:bg-blue-900/30">
            <p className="font-bold text-blue-600">Phase 1: Foundation</p>
            <p className="text-slate-600">May-Jul 2026</p>
            <p className="text-slate-500 mt-1">Surveys, digital build, SIR defense</p>
          </div>
          <div className="rounded bg-indigo-100 p-2 dark:bg-indigo-900/30">
            <p className="font-bold text-indigo-600">Phase 2: Intensification</p>
            <p className="text-slate-600">Aug-Oct 2026</p>
            <p className="text-slate-500 mt-1">Candidate announcements, rallies</p>
          </div>
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">Phase 3: Mass Mobilization</p>
            <p className="text-slate-600">Nov-Jan 2027</p>
            <p className="text-slate-500 mt-1">Manifesto launch, daily contact</p>
          </div>
          <div className="rounded bg-red-100 p-2 dark:bg-red-900/30">
            <p className="font-bold text-red-600">Phase 4: Final Sprint</p>
            <p className="text-slate-600">Feb 2027</p>
            <p className="text-slate-500 mt-1">72-hr blackout, booth ops</p>
          </div>
        </div>

        {/* Budget Summary */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Campaign Budget</h4>
        <div className="mt-2 grid gap-2 md:grid-cols-4 text-xs">
          <div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
            <p className="font-bold text-green-600">Total</p>
            <p className="text-lg font-bold text-green-700">Rs 65-95 Cr</p>
          </div>
          <div className="rounded bg-cyan-100 p-2 dark:bg-cyan-900/30">
            <p className="font-bold text-cyan-600">Rallies & Events</p>
            <p className="text-lg font-bold text-cyan-700">Rs 25-35 Cr</p>
          </div>
          <div className="rounded bg-blue-100 p-2 dark:bg-blue-900/30">
            <p className="font-bold text-blue-600">Digital Campaign</p>
            <p className="text-lg font-bold text-blue-700">Rs 4-6 Cr</p>
          </div>
          <div className="rounded bg-orange-100 p-2 dark:bg-orange-900/30">
            <p className="font-bold text-orange-600">Booth Contact</p>
            <p className="text-lg font-bold text-orange-700">Rs 15-20 Cr</p>
          </div>
        </div>

        {/* Caste Coalition Targets */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Caste Coalition Vote Share Targets</h4>
        <div className="mt-2 grid gap-2 md:grid-cols-5 text-xs">
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">SC</p>
            <p className="text-lg font-bold text-purple-700">55-60%</p>
            <p className="text-slate-500">32% pop</p>
          </div>
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">OBC</p>
            <p className="text-lg font-bold text-purple-700">40-45%</p>
            <p className="text-slate-500">15-18% pop</p>
          </div>
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">Jat Sikh</p>
            <p className="text-lg font-bold text-purple-700">35-40%</p>
            <p className="text-slate-500">20-22% pop</p>
          </div>
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">Urban Hindu</p>
            <p className="text-lg font-bold text-purple-700">25-30%</p>
            <p className="text-slate-500">10-15% pop</p>
          </div>
          <div className="rounded bg-purple-100 p-2 dark:bg-purple-900/30">
            <p className="font-bold text-purple-600">Minorities</p>
            <p className="text-lg font-bold text-purple-700">50-55%</p>
            <p className="text-slate-500">5-7% pop</p>
          </div>
        </div>
      </div>

      {/* Digital Campaign Metrics with MiniChart */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
          Digital Campaign Performance Metrics
        </h3>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-300">
          Meta platform CPR, WhatsApp engagement, and YouTube watch time benchmarks
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Meta CPR</p>
                <p className="text-2xl font-bold text-emerald-600">&lt; INR 0.15</p>
              </div>
              <MiniChart data={[12, 8, 5, 3, 2, 1]} color="bg-emerald-500" height={50} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Cost per reach optimized via micro-targeting</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">WhatsApp Open Rate</p>
                <p className="text-2xl font-bold text-blue-600">70-85%</p>
              </div>
              <MiniChart data={[70, 75, 78, 80, 82, 85]} color="bg-blue-500" height={50} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Targeted voter list messaging</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">YouTube Watch Time</p>
                <p className="text-2xl font-bold text-red-600">500K+</p>
              </div>
              <MiniChart data={[320, 380, 420, 460, 490, 520]} color="bg-red-500" height={50} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Per video campaign content</p>
          </div>
        </div>
      </div>

      {/* Perception Management */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
          Perception Management
        </h3>
        <p className="mt-1 text-sm text-amber-600 dark:text-amber-300">
          Voter psychology and first impression dynamics
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">First Impression Formation</p>
            <p className="text-3xl font-bold text-amber-600">&lt;1s</p>
            <p className="text-xs text-slate-500 mt-1">Voters form opinion instantly</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Voter Behavior Prediction</p>
            <p className="text-3xl font-bold text-green-600">70%</p>
            <p className="text-xs text-slate-500 mt-1">Accuracy from first impressions</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Visual Identity Weight</p>
            <p className="text-3xl font-bold text-blue-600">55%</p>
            <p className="text-xs text-slate-500 mt-1">Physical appearance impact</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Name Recognition Boost</p>
            <p className="text-3xl font-bold text-purple-600">+25%</p>
            <p className="text-xs text-slate-500 mt-1">With party symbol support</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-100 dark:bg-amber-900/40">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Survey Insight:</strong> Candidate appearance and body language account for 55% of voter first impressions. Caste markers and regional accent significantly influence perceived winnability in surveyed constituencies.
          </p>
        </div>
      </div>

      {/* Reputation Management */}
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-800 dark:bg-rose-900/20">
        <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">
          Reputation Management
        </h3>
        <p className="mt-1 text-sm text-rose-600 dark:text-rose-300">
          Social audit protocols and crisis response framework
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Social Audit</p>
            <p className="text-3xl font-bold text-rose-600">Pre-selection</p>
            <p className="text-xs text-slate-500 mt-1">Background verification before ticket</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Crisis Response Window</p>
            <p className="text-3xl font-bold text-orange-600">2 hrs</p>
            <p className="text-xs text-slate-500 mt-1">Maximum response time</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Negative Narrative Tracking</p>
            <p className="text-3xl font-bold text-red-600">24/7</p>
            <p className="text-xs text-slate-500 mt-1">Social media monitoring</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Rapid Response Team</p>
            <p className="text-3xl font-bold text-blue-600">Dedicated</p>
            <p className="text-xs text-slate-500 mt-1">AICC-managed squad</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-rose-100 dark:bg-rose-900/40">
          <p className="text-sm text-rose-800 dark:text-rose-200">
            <strong>Protocol:</strong> All candidates undergo social audit before selection. Any criminal, financial, or social red flags trigger review. Crisis response team activated for rapid rebuttal during campaigns.
          </p>
        </div>
      </div>
    </div>
  );
}
