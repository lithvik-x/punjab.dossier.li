"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Database,
  Target,
  Lightbulb,
  Smartphone,
  AlertTriangle,
  Activity,
  Search,
  X,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertOctagon,
  Megaphone,
  Settings,
  Zap,
  BarChart2,
  Globe,
  MessageSquare,
  Eye,
} from "lucide-react";

// ==========================================
// CAMPAIGN TECHNOLOGY DATA
// ==========================================

const voterEnrichmentTiers = [
  { tier: "Tier 0", fields: "Name, Mobile, Address (ECI roll)" },
  { tier: "Tier 1", fields: "+ caste, religion, age group, gender" },
  { tier: "Tier 2", fields: "+ booth-level canvassing history" },
  { tier: "Tier 3", fields: "+ social sentiment, influence score" },
];

const voterSegmentation = [
  { segment: "Core Supporters", strategy: "Auto-enroll, minimal contact", channel: "WhatsApp" },
  { segment: "Swing Voters", strategy: "Personal contact, tailored messaging", channel: "Phone + Door-to-door" },
  { segment: "Opposition Voters", strategy: "Contrast narrative, selective outreach", channel: "Social media" },
  { segment: "Youth (18-25)", strategy: "Digital-first, influencers", channel: "Instagram/X" },
  { segment: "NRI Voters", strategy: "Diaspora campaigns, postal ballot", channel: "YouTube + Email" },
];

const microTargetingIssues = [
  { issue: "Drug Crisis", regions: "Malwa (Sangrur, Bathinda)" },
  { issue: "Unemployment", regions: "Doaba (Jalandhar, Hoshiarpur)" },
  { issue: "Farm Debt", regions: "Malwa + Majha" },
  { issue: "Water Crisis", regions: "Central Punjab (Ludhiana)" },
  { issue: "Healthcare", regions: "Rural constituencies" },
];

const analyticsChannels = [
  { channel: "Social Media", metric: "X, FB, IG, YT metrics" },
  { channel: "Ground Intelligence", metric: "Booth agent reports (11,700)" },
  { channel: "Survey Data", metric: "CSDS + local polls" },
  { channel: "Digital Ads", metric: "Meta/Google performance" },
  { channel: "News Monitoring", metric: "450+ sources" },
  { channel: "Expense Tracking", metric: "Budget vs actual" },
  { channel: "Voter Contact", metric: "Phone + door-to-door" },
  { channel: "Sentiment Analysis", metric: "NLP on 3,450+ keywords" },
];

const abTestExamples = [
  { campaign: "Email", test: "Subject line length", result: "+29% donations" },
  { campaign: "Landing Page", test: "Image vs video", result: "+18% conversions" },
  { campaign: "Facebook", test: "Ad copy variants", result: "+12% CTR" },
  { campaign: "SMS", test: "Time of day", result: "+22% response" },
];

const analyticsTeamStructure = [
  { role: "Data Scientists", count: 2, cost: "INR 8-12L/person" },
  { role: "Data Engineers", count: 2, cost: "INR 6-8L/person" },
  { role: "Analysts", count: 3, cost: "INR 4-5L/person" },
];

const contentPipeline = [
  { phase: "Brief", deliverable: "Strategy document", turnaround: "2 days" },
  { phase: "Creative", deliverable: "Content draft", turnaround: "3 days" },
  { phase: "Review", deliverable: "Revised content", turnaround: "1 day" },
  { phase: "Approval", deliverable: "Final version", turnaround: "4 hours" },
  { phase: "Distribution", deliverable: "Published assets", turnaround: "Same day" },
];

const contentTypes = [
  { type: "Video (High)", cost: "INR 50,000-3 lakh/min" },
  { type: "Video (Standard)", cost: "INR 15,000-50,000/min" },
  { type: "Poster/Card", cost: "INR 500-5,000/design" },
  { type: "Meme/GIF", cost: "INR 200-2,000/design" },
  { type: "Text/Thread", cost: "INR 500-3,000/piece" },
  { type: "Audio/Podcast", cost: "INR 5,000-25,000/episode" },
];

const eciCompliance = [
  { rule: "Model Code", requirement: "Strict guidelines from election announcement" },
  { rule: "Spending Limit", requirement: "Rs 40 lakh per candidate (2026 amendment)" },
  { rule: "ECI App", requirement: "cVIGIL for violation reporting" },
  { rule: "Silence Period", requirement: "48 hours before polling" },
];

const workerAppFeatures = [
  { category: "Voter Management", features: "Contact lookup, canvassing log, notes per household" },
  { category: "Task Management", features: "Assigned booths, daily targets, GPS check-ins" },
  { category: "Communication", features: "Broadcast messages, WhatsApp integration, alerts" },
  { category: "Performance", features: "Leaderboards, gamification, volunteer hours" },
];

const appTechStack = [
  { layer: "Frontend", choice: "React Native / Flutter", rationale: "Cross-platform iOS/Android" },
  { layer: "Backend", choice: "Node.js / Firebase", rationale: "Real-time sync, low cost" },
  { layer: "Database", choice: "PostgreSQL + Redis", rationale: "Scalable, reliable" },
  { layer: "Hosting", choice: "AWS / Google Cloud", rationale: "India region, high uptime" },
];

const gamificationFeatures = [
  { feature: "Points", detail: "Earned for voter contact, event attendance" },
  { feature: "Badges", detail: "Milestone achievements (100 calls, 10 events)" },
  { feature: "Leaderboards", detail: "Weekly/monthly rankings by constituency" },
  { feature: "Rewards", detail: "Recognition, events, merchandise" },
];

const socialListeningTools = [
  { tool: "Brandwatch", cost: "INR 15-50 lakh/year", capabilities: "Full suite, Punjabi", punjabiSupport: "Yes" },
  { tool: "Talkwalker", cost: "INR 10-30 lakh/year", capabilities: "Strong analytics", punjabiSupport: "Limited" },
  { tool: "Meltwater", cost: "INR 8-20 lakh/year", capabilities: "Media monitoring", punjabiSupport: "Limited" },
  { tool: "Hootsuite", cost: "INR 3-8 lakh/year", capabilities: "Scheduling, basic", punjabiSupport: "No" },
];

const xApiPricing = [
  { tier: "Free", cost: "$0", posts: "1,500/month", capabilities: "Basic" },
  { tier: "Basic", cost: "$100/month", posts: "10,000/month", capabilities: "User insights" },
  { tier: "Pro", cost: "$1,000/month", posts: "1,00,000/month", capabilities: "Full API" },
  { tier: "Enterprise", cost: "$20,000+/month", posts: "Unlimited", capabilities: "Dedicated support" },
];

const techStackTiers = [
  { tier: "Tier 1 Essential", budget: "INR 3-5 lakh", duration: "1-2 months", components: "Social monitoring, basic analytics" },
  { tier: "Tier 2 Advanced", budget: "INR 5-15 lakh", duration: "3-4 months", components: "+ Voter DB, micro-targeting" },
  { tier: "Tier 3 Enterprise", budget: "INR 15-40 lakh", duration: "5-6 months", components: "+ AI models, full stack" },
];

const implementationRoadmap = [
  { phase: "Phase 1", budget: "INR 3-5L", objectives: "Social monitoring, basic analytics", deliverables: "Dashboards, alerts" },
  { phase: "Phase 2", budget: "INR 5-15L", objectives: "Voter database, micro-targeting", deliverables: "Enriched voter file" },
  { phase: "Phase 3", budget: "INR 15-40L", objectives: "AI models, automation", deliverables: "Predictive analytics" },
];

const warRoomSpecs = [
  { spec: "Core Team Size", value: "12-15 dedicated staff" },
  { spec: "Monitoring Hours", value: "18 hours/day (6am-midnight)" },
  { spec: "Shift Model", value: "3 shifts with overlap" },
  { spec: "Key Tools", value: "Brandwatch, Salesforce, Asana" },
  { spec: "Escalation SLA", value: "<15 minutes for critical" },
];

const engagementBenchmarks = [
  { platform: "Facebook", rate: "0.5-1%", good: "1-2%", excellent: ">2%" },
  { platform: "Instagram", rate: "1-2%", good: "2-3%", excellent: ">3%" },
  { platform: "X/Twitter", rate: "0.3-0.5%", good: "0.5-1%", excellent: ">1%" },
  { platform: "YouTube", rate: "5-7%", good: "7-10%", excellent: ">10%" },
];

const paidSocialAllocation = [
  { platform: "Meta (Facebook/IG)", percent: "50%", purpose: "Mass reach, regional targeting" },
  { platform: "Google Ads", percent: "25%", purpose: "Search intent, issue-based" },
  { platform: "X/Twitter", percent: "15%", purpose: "Real-time narrative" },
  { platform: "YouTube", percent: "10%", purpose: "Video-first audiences" },
];

const crisisEscalation = [
  { level: "Level 1", trigger: "Negative trend detected", responseTime: "30 min", escalation: "Social team" },
  { level: "Level 2", trigger: "Viral negative content", responseTime: "15 min", escalation: "Comms head" },
  { level: "Level 3", trigger: "Crisis event", responseTime: "5 min", escalation: "War room + leadership" },
];

const alertTriggers = [
  { alertType: "Volume Spike", trigger: ">3x normal baseline", responseTime: "15 minutes" },
  { alertType: "Negative Sentiment", trigger: ">40% negative ratio", responseTime: "30 minutes" },
  { alertType: "Influencer Attack", trigger: "High-follower negative post", responseTime: "10 minutes" },
  { alertType: "Misinformation", trigger: "False claim viral", responseTime: "5 minutes" },
];

const dataSources = [
  { name: "ECI Electoral Rolls", latency: "Real-time", accuracy: 95 },
  { name: "Social Media APIs", latency: "Real-time", accuracy: 80 },
  { name: "Ground Reports", latency: "Daily", accuracy: 90 },
  { name: "News Monitoring", latency: "Real-time", accuracy: 85 },
  { name: "Survey Data", latency: "Weekly", accuracy: 75 },
];

const alerts = [
  { severity: "critical", issue: "Negative narrative spike in Malwa region", location: "Sangrur, Bathinda", time: "10 min ago" },
  { severity: "high", issue: "BJP social media targeting Congress voters", location: "Amritsar rural", time: "45 min ago" },
  { severity: "medium", issue: "AAP digital campaign outperforming baseline", location: "Statewide", time: "1 hour ago" },
];

const keywordTaxonomy = {
  breakdown: [
    { category: "Congress Brand", keywords: 850 },
    { category: "AAP Brand", keywords: 720 },
    { category: "SAD/BJP Brand", keywords: 680 },
    { category: "Key Leaders", keywords: 520 },
    { category: "Local Issues", keywords: 480 },
    { category: "Digital Behavior", keywords: 420 },
    { category: "Counter-Narrative", keywords: 380 },
  ],
};

const alertLevels = [
  { level: "GREEN", trigger: "Normal operations" },
  { level: "YELLOW", trigger: "Elevated attention" },
  { level: "ORANGE", trigger: "Active response" },
  { level: "RED", trigger: "Crisis mode" },
];

const alertConfiguration = {
  spikeDetection: { volumeThreshold: "3x baseline", velocityThreshold: "50%/hour" },
  negativeSentiment: { ratioThreshold: "40%", sharpSwing: "20% change" },
  crisisKeywords: ["rigging", "scam", "corrupt", "failure", "broken promise", "fake", "criminal"],
};

// ==========================================
// COMPONENT
// ==========================================

export default function CampaignTechnologyPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Campaign Technology & Infrastructure
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            MP8: Voter Data, Analytics, Content, Mobile Apps | MP7: Real-Time Monitoring
          </p>
        </div>
        <Badge variant="info">May 2026</Badge>
      </motion.div>

      {/* MP8-006: Voter Data Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>MP8-006: Voter Data Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Data enrichment tiers, Micro-targeting segmentation, Critical alert (MP8-006)
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Voter File Enrichment Tiers
                </h4>
                <div className="mt-3 space-y-2">
                  {voterEnrichmentTiers.map((tier) => (
                    <div key={tier.tier} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-green-700 dark:text-green-400 min-w-[120px]">{tier.tier}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{tier.fields}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Micro-Targeting Segmentation
                </h4>
                <div className="mt-3 space-y-2">
                  {voterSegmentation.map((seg) => (
                    <div key={seg.segment} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-purple-700 dark:text-purple-400 min-w-[140px]">{seg.segment}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{seg.strategy} ({seg.channel})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Issues for Micro-Targeting</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                {microTargetingIssues.map((item) => (
                  <div key={item.issue} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.issue}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.regions}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Critical Alert:</strong> ECI&apos;s own deduplication software was described as &quot;defective&quot; to Supreme Court (Dec 2025). Congress must build voter database from scratch — import ECI roll immediately and begin field enrichment.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP8-007: Data Analytics & BI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Data Analytics & Business Intelligence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              8 Analytics Channels, Predictive Modeling, A/B Testing, ROI Measurement (MP8-007)
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Analytics Channels"
                value="8"
                subtitle="Integrated data sources"
                color="purple"
              />
              <MetricCard
                title="A/B Tests (US Reference)"
                value="500+"
                subtitle="Obama 2012 campaign"
                color="emerald"
              />
              <MetricCard
                title="Donation Conversion Lift"
                value="+29%"
                subtitle="From A/B testing (Obama 2012)"
                color="cyan"
              />
              <MetricCard
                title="Data Team Cost"
                value="INR 23-60L"
                subtitle="6-month pre-election period"
                color="orange"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  Analytics Channels
                </h4>
                <div className="mt-3 space-y-2">
                  {analyticsChannels.map((ch) => (
                    <div key={ch.channel} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-indigo-700 dark:text-indigo-400 min-w-[160px]">{ch.channel}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{ch.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
                <h4 className="font-semibold text-teal-700 dark:text-teal-400 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  A/B Testing Proven Results
                </h4>
                <div className="mt-3 space-y-2">
                  {abTestExamples.map((ex) => (
                    <div key={ex.campaign} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-teal-700 dark:text-teal-400 min-w-[100px]">{ex.campaign}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{ex.test} → {ex.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Analytics Team Structure</h4>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                {analyticsTeamStructure.map((t) => (
                  <div key={t.role} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.role}</p>
                    <p className="mt-1 text-xs text-slate-500">{t.count} persons</p>
                    <p className="text-sm font-bold text-indigo-600">{t.cost}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP8-008: Content Creation Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Content Creation & Distribution Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              5-Phase Pipeline, Content Types, ECI Compliance, Brand Management (MP8-008)
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Content Pipeline Phases</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-5">
                {contentPipeline.map((phase) => (
                  <div key={phase.phase} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{phase.phase}</p>
                    <p className="mt-1 text-xs text-slate-500">{phase.deliverable}</p>
                    <p className="mt-1 text-xs text-indigo-600">Turnaround: {phase.turnaround}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400 flex items-center gap-2">
                  <Megaphone className="h-4 w-4" />
                  Content Types & Costs
                </h4>
                <div className="mt-3 space-y-2">
                  {contentTypes.map((ct) => (
                    <div key={ct.type} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-orange-700 dark:text-orange-400 min-w-[160px]">{ct.type}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{ct.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
                <h4 className="font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  ECI Compliance Requirements
                </h4>
                <div className="mt-3 space-y-2">
                  {eciCompliance.map((ec) => (
                    <div key={ec.rule} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-rose-700 dark:text-rose-400 min-w-[160px]">{ec.rule}:</span>
                      <span className="text-slate-600 dark:text-slate-300">{ec.requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP8-009: Mobile App & Party Workers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Mobile App for Party Workers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Worker App, Offline-First, Gamification, Benchmark Apps (MP8-009)
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="BJP Saral App"
                value="2.9M+"
                subtitle="Downloads (competitive benchmark)"
                color="rose"
              />
              <MetricCard
                title="Ranneeti Platform"
                value="1,290+"
                subtitle="Campaigns across 13 states"
                color="orange"
              />
              <MetricCard
                title="Custom App Dev"
                value="INR 15-40L"
                subtitle="+ INR 2-5L/month maintenance"
                color="purple"
              />
              <MetricCard
                title="SaaS Alternative"
                value="INR 15K-1.5L"
                subtitle="Per month (Ranneeti/CampaignMitra)"
                color="emerald"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Worker App Core Features
                </h4>
                <div className="mt-3 space-y-3">
                  {workerAppFeatures.map((f) => (
                    <div key={f.category}>
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-400">{f.category}</p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{f.features}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
                  <h4 className="font-semibold text-teal-700 dark:text-teal-400 flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Technical Architecture
                  </h4>
                  <div className="mt-3 space-y-2">
                    {appTechStack.map((t) => (
                      <div key={t.layer} className="flex items-start gap-2 text-sm">
                        <span className="font-medium text-teal-700 dark:text-teal-400 min-w-[100px]">{t.layer}:</span>
                        <span className="text-slate-600 dark:text-slate-300">{t.choice} — {t.rationale}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Gamification Features
                  </h4>
                  <div className="mt-3 space-y-2">
                    {gamificationFeatures.map((gf) => (
                      <div key={gf.feature} className="flex items-start gap-2 text-sm">
                        <span className="font-medium text-amber-700 dark:text-amber-400">{gf.feature}:</span>
                        <span className="text-slate-600 dark:text-slate-300">{gf.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                <AlertOctagon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Critical Gap:</strong> Congress has NO dedicated worker mobile app for Punjab 2027. BJP&apos;s Saral app with 2.9M+ downloads represents a significant competitive technology advantage. Build or procure app by July 2026.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Pipeline & Real-time Alerts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Data Pipeline Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataSources.map((source) => (
                  <div key={source.name} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <Database className="h-5 w-5 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{source.name}</span>
                        <Badge variant="success">{source.latency}</Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <ProgressBar
                          label=""
                          value={source.accuracy}
                          color="purple"
                          showPercentage={false}
                        />
                        <span className="text-xs text-slate-500">{source.accuracy}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Real-time Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg p-3 ${
                      alert.severity === "critical" ? "bg-red-50 dark:bg-red-900/20" :
                      alert.severity === "high" ? "bg-orange-50 dark:bg-orange-900/20" :
                      alert.severity === "medium" ? "bg-yellow-50 dark:bg-yellow-900/20" :
                      "bg-slate-50 dark:bg-slate-800"
                    }`}
                  >
                    <div className={`h-2 w-2 rounded-full ${
                      alert.severity === "critical" ? "bg-red-500" :
                      alert.severity === "high" ? "bg-orange-500" :
                      alert.severity === "medium" ? "bg-yellow-500" :
                      "bg-slate-400"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{alert.issue}</p>
                      <p className="text-xs text-slate-500">{alert.location}</p>
                    </div>
                    <span className="text-xs text-slate-500">{alert.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* MP7-001, 002, 003: Real-Time Monitoring Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>MP7: Real-Time Monitoring Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Keyword taxonomy, Platform protocols, Alert configuration (MP7-001, 002, 003)
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Keyword Taxonomy (3,450+ keywords)
                </p>
                <div className="mt-3 space-y-2">
                  {keywordTaxonomy.breakdown.slice(0, 5).map((cat) => (
                    <div key={cat.category} className="flex items-center justify-between">
                      <span className="text-xs text-indigo-600 dark:text-indigo-300">{cat.category}</span>
                      <span className="text-xs font-medium text-indigo-700 dark:text-indigo-400">{cat.keywords}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">+ 5 more categories covering Congress brand, digital behavior</p>
              </div>

              <div className="rounded-lg bg-violet-50 p-4 dark:bg-violet-900/20">
                <p className="text-sm font-semibold text-violet-700 dark:text-violet-400 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Four-Level Alert System
                </p>
                <div className="mt-3 space-y-2">
                  {alertLevels.map((level) => (
                    <div key={level.level} className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        level.level === "GREEN" ? "bg-green-200 text-green-800" :
                        level.level === "YELLOW" ? "bg-yellow-200 text-yellow-800" :
                        level.level === "ORANGE" ? "bg-orange-200 text-orange-800" :
                        "bg-red-200 text-red-800"
                      }`}>{level.level}</span>
                      <span className="text-xs text-violet-600 dark:text-violet-300">{level.trigger.slice(0, 50)}...</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Spike Detection
                </p>
                <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-300">Volume: {alertConfiguration.spikeDetection.volumeThreshold}</p>
                <p className="text-xs text-cyan-500">Velocity: {alertConfiguration.spikeDetection.velocityThreshold}</p>
              </div>
              <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
                <p className="text-xs font-semibold text-pink-700 dark:text-pink-400 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Negative Sentiment
                </p>
                <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">Ratio: {alertConfiguration.negativeSentiment.ratioThreshold}</p>
                <p className="text-xs text-pink-500">Sharp swing: {alertConfiguration.negativeSentiment.sharpSwing}</p>
              </div>
              <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
                <p className="text-xs font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Crisis Keywords
                </p>
                <p className="mt-1 text-sm text-rose-600 dark:text-rose-300">{alertConfiguration.crisisKeywords.slice(0, 4).join(", ")}</p>
                <p className="text-xs text-rose-500">+ {alertConfiguration.crisisKeywords.length - 4} more</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Listening Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Social Listening Tools — Cost & Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">Enterprise tools for real-time narrative monitoring</p>
            <DataTable
              headers={["Tool", "Monthly Cost", "Key Capabilities", "Punjabi Support"]}
              rows={socialListeningTools.map(t => [t.tool, t.cost, t.capabilities, t.punjabiSupport])}
            />
            <p className="mt-4 text-xs text-slate-500">Note: Enterprise tools cost-prohibitive for state-level campaigns (INR 15-200 lakh/year). X API requires paid access ($100-20,000+/month).</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* X/Twitter API Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>X/Twitter API Pricing Tiers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">API access critical for political monitoring — free tier eliminated Feb 2023</p>
            <DataTable
              headers={["Tier", "Cost", "Posts/Month", "Capabilities"]}
              rows={xApiPricing.map(t => [t.tier, t.cost, t.posts, t.capabilities])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Minimum Viable Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Minimum Viable Tech Stack — Budget Tiers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">Phased approach for Punjab Congress 2027</p>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              {techStackTiers.map((tier) => (
                <div key={tier.tier} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900 dark:text-white">{tier.tier}</span>
                    <Badge variant="info">{tier.budget}</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{tier.duration}</p>
                  <p className="text-xs text-slate-500">{tier.components}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Total implementation cost: INR 11-33 lakh across all phases. Recommended: Tier 1 + Tier 2 hybrid.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Implementation Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Implementation Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">8-month intelligence buildout to Feb 2027</p>
            <div className="space-y-4">
              {implementationRoadmap.map((phase) => (
                <div key={phase.phase} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900 dark:text-white">{phase.phase}</span>
                      <Badge variant="success">{phase.budget}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{phase.objectives}</p>
                    <p className="text-xs text-slate-500">Deliverables: {phase.deliverables}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Media Command Center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Social Media Command Center Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">War room infrastructure for 24/7 digital operations</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {warRoomSpecs.map((spec) => (
                <div key={spec.spec} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">{spec.spec}</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  Engagement Benchmarks
                </h4>
                <DataTable
                  headers={["Platform", "Benchmark Rate", "Good", "Excellent"]}
                  rows={engagementBenchmarks.map(e => [e.platform, e.rate, e.good, e.excellent])}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Paid Social Allocation
                </h4>
                <DataTable
                  headers={["Platform", "Budget %", "Purpose"]}
                  rows={paidSocialAllocation.map(p => [p.platform, p.percent, p.purpose])}
                />
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <AlertOctagon className="h-4 w-4" />
                Crisis Escalation Protocols
              </h4>
              <DataTable
                headers={["Level", "Trigger", "Response Time", "Escalation Path"]}
                rows={crisisEscalation.map(c => [c.level, c.trigger, c.responseTime, c.escalation])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Real-Time Alert Triggers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Alert Triggers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">Intelligence alerting thresholds based on OSINT/HUMINT framework</p>
            <DataTable
              headers={["Alert Type", "Trigger Condition", "Response Time Target"]}
              rows={alertTriggers.map(a => [a.alertType, a.trigger, a.responseTime])}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
