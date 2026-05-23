"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OPERATIONAL_HEADS, REGIONS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const iconMap: Record<string, React.ReactNode> = {
  Users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  MapPin: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Flag: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  UserCheck: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Swords: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  MessageCircle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Tv: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Brain: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Target: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ChevronDown: (
    <motion.svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{ rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
  ),
  Map: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  Scale: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
};

const regionColors: Record<string, string> = {
  malwa: "bg-orange-500",
  majha: "bg-blue-500",
  doaba: "bg-green-500",
  powadh: "bg-purple-500",
};

const DEMOGRAPHY_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "population", name: "Population", description: "Density, households, migration" },
  { id: "gender", name: "Gender", description: "Sex ratio, women voters" },
  { id: "age", name: "Age Structure", description: "Age cohorts, political demographics" },
  { id: "caste", name: "Caste Composition", description: "SC, OBC, Upper Caste" },
  { id: "religious", name: "Religious", description: "Sikh, Hindu, Muslim demographics" },
  { id: "urbanization", name: "Urbanization", description: "Urban-rural divide" },
  { id: "dera-sects", name: "Dera & Sects", description: "Radha Soami, SGPC, RSS" },
  { id: "income", name: "Income", description: "Economic stratification" },
];

const PARTY_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "congress-status", name: "Congress Status", description: "Party factions, CM prospects" },
  { id: "congress-workers", name: "Congress Workers", description: "Worker hierarchy & digital deficit" },
  { id: "campaign-strategy", name: "Campaign Strategy", description: "Narrative & caste coalitions" },
  { id: "campaign-budget", name: "Campaign Budget", description: "Budget & resources" },
  { id: "aap-intelligence", name: "AAP Intelligence", description: "Competitor analysis" },
  { id: "bjp-status", name: "BJP Status", description: "BJP growth & strategy" },
  { id: "sad-status", name: "SAD Status", description: "Electoral decline & factions" },
  { id: "bsp-status", name: "BSP Status", description: "BSP vote bank & alliances" },
  { id: "resources-logistics", name: "Resources & Logistics", description: "Rally venues & MCC" },
];

const CANDIDATE_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "leadership", name: "Congress Leadership", description: "CM face, leadership matrix" },
  { id: "aap-leadership", name: "AAP Leadership", description: "Mann cabinet, turncoats" },
  { id: "bjp-leadership", name: "BJP Leadership", description: "BJP CM faces, strategy" },
  { id: "sad-leadership", name: "SAD Leadership", description: "SAD CM prospects, factions" },
  { id: "winnability", name: "Winnability", description: "CQI, ticket authority" },
  { id: "strategy", name: "Strategy", description: "Campaign, digital, perception" },
  { id: "booth-ops", name: "Booth Operations", description: "Infrastructure, SC seats" },
  { id: "aap-analysis", name: "AAP Analysis", description: "Turncoats, vulnerability" },
  { id: "young-turks", name: "Young Turks", description: "Next gen candidates" },
  { id: "rebels", name: "Rebel MLAs", description: "Ticket denial patterns" },
];

const VOTER_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "caste-demographics", name: "Caste Demographics", description: "SC, OBC, Jat Sikh composition" },
  { id: "women-voters", name: "Women Voters", description: "Gender turnout, schemes" },
  { id: "nri-voters", name: "NRI Voters", description: "Diaspora influence" },
  { id: "voter-psychology", name: "Voter Psychology", description: "Maslow hierarchy, channels" },
  { id: "message-strategy", name: "Message Strategy", description: "Message architecture" },
  { id: "social-crisis", name: "Social Crisis", description: "Drugs, unemployment" },
  { id: "ground-game", name: "Ground Game", description: "Booth ops, GOTV, VRM" },
  { id: "party-dynamics", name: "Party Dynamics", description: "AAP collapse, swing" },
  { id: "regional-analysis", name: "Regional Analysis", description: "Malwa, Majha, Doaba" },
  { id: "voter-synthesis", name: "Voter Synthesis", description: "Mega-Pillar summary" },
];

const COMPETITION_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "aap", name: "AAP Analysis", description: "AAP SWOT, broken promises" },
  { id: "sad", name: "SAD Status", description: "SAD factions, alliance breakdown" },
  { id: "bjp", name: "BJP Growth", description: "BJP growth trajectory" },
  { id: "caste", name: "Caste Demographics", description: "Caste coalition math" },
  { id: "regional", name: "Regional Analysis", description: "Malwa, Majha, Doaba" },
  { id: "synthesis", name: "Synthesis", description: "M1 mega-pillar synthesis" },
];

const PUBLIC_SENTIMENT_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "socio-economic", name: "Socio-Economic", description: "Economic distress drivers" },
  { id: "regional-issues", name: "Regional Issues", description: "Majha, Doaba, Malwa issues" },
  { id: "sentiment-analytics", name: "Sentiment Analytics", description: "Seat projections, swing analysis" },
  { id: "digital-media", name: "Digital & Media", description: "Social media, influencers" },
  { id: "emotion-analysis", name: "Emotion Analysis", description: "Voter emotions, buzz tracking" },
  { id: "voter-demographics", name: "Voter Demographics", description: "Women, youth, SC patterns" },
  { id: "governance", name: "Governance", description: "AAP satisfaction, broken promises" },
];

const MEDIA_SENTIMENT_SECTIONS = [
  { id: "overview", name: "Overview", description: "Metrics, coverage volume" },
  { id: "party-sentiment", name: "Party Sentiment", description: "Congress, AAP, BJP coverage" },
  { id: "traditional-media", name: "Traditional Media", description: "TV, Radio, Print, Cable" },
  { id: "digital-media", name: "Digital Media", description: "Social, YouTube, WhatsApp" },
  { id: "influencers", name: "Influencers", description: "Celebrities, religious, journalists" },
  { id: "media-ecosystem", name: "Media Ecosystem", description: "News agencies, opinion makers, MELA" },
  { id: "misinformation", name: "Misinformation", description: "BJP IT Cell, deepfakes, threats" },
  { id: "strategy", name: "Strategy & Budget", description: "Budget phases, endgame, rapid response" },
];

const INTELLIGENCE_SECTIONS = [
  { id: "overview", name: "Overview", description: "Intelligence hub" },
  { id: "economic-macro", name: "Economic Macro", description: "GDP, debt, fiscal data" },
  { id: "eci-election-data", name: "ECI Election Data", description: "Voter rolls, ECI readiness" },
  { id: "predictive-analytics", name: "Predictive Analytics", description: "Swing models, seat projections" },
  { id: "campaign-technology", name: "Campaign Tech", description: "Voter data, analytics, apps" },
];

const GOVERNANCE_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "agrarian-distress", name: "Agrarian Distress", description: "Farmer suicides, MSP, water crisis" },
  { id: "economic-fiscal", name: "Economic & Fiscal", description: "Debt, deficits, unemployment" },
  { id: "puadh-urban-seats", name: "Puadh Region", description: "Urban seats analysis" },
  { id: "local-issues-malwa", name: "Local Issues Malwa", description: "Drug crisis, cancer belt" },
  { id: "synthesis", name: "Synthesis", description: "Cross-referenced intelligence" },
];

const PERCEPTION_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary" },
  { id: "swot-analysis", name: "SWOT Analysis", description: "Congress strengths, weaknesses, opportunities, threats" },
  { id: "campaign-strategy", name: "Campaign Strategy", description: "Timeline, phases, strategic priorities" },
  { id: "seat-projections", name: "Seat Projections", description: "Vote share trajectory, poll consensus, scenarios" },
  { id: "grievance-analysis", name: "Grievance Analysis", description: "Priority issues, angry voter profiles" },
  { id: "religious-politics", name: "Religious Politics", description: "SGPC, Sikh issues, 1984, sacrilege law" },
  { id: "regional-analysis", name: "Regional Analysis", description: "Malwa, Majha, Doaba grievances" },
  { id: "student-politics", name: "Student Politics", description: "Panjab University, NSUI/ABVP" },
  { id: "election-security", name: "Election Security", description: "CAPF, high-risk constituencies, gangster networks" },
  { id: "ground-operations", name: "Ground Operations", description: "Booth-level, karyakarta network" },
  { id: "campaign-budget", name: "Campaign Budget", description: "Congress vs AAP budget comparison" },
  { id: "welfare-delivery", name: "Welfare Delivery", description: "Government schemes, attribution challenges" },
  { id: "kpi-framework", name: "KPI Framework", description: "Leading/lagging indicators, organizational KPIs" },
  { id: "perception-audit", name: "Perception Audit", description: "Party & leader tracking, media tone" },
  { id: "scenario-planning", name: "Scenario Planning", description: "Post-election scenarios, CM selection" },
  { id: "eci-compliance", name: "ECI Compliance", description: "Election laws, expenditure limits" },
  { id: "weather-planning", name: "Weather Planning", description: "February weather patterns, logistics" },
  { id: "opposition-research", name: "Opposition Research", description: "Attack strategy, vulnerability identification" },
  { id: "intelligence-pipeline", name: "Intelligence Pipeline", description: "Collection, analysis, synthesis, activation" },
  { id: "victory-pathways", name: "Victory Pathways", description: "Three strategic routes to majority" },
  { id: "aap-governance", name: "AAP Governance", description: "Claims vs delivery, Mann performance" },
  { id: "offline-assets", name: "Offline Assets", description: "Karyakarta network inventory" },
  { id: "manifesto-framework", name: "Manifesto Framework", description: "15-pillar framework" },
  { id: "synthesis-intelligence", name: "Synthesis Intelligence", description: "Gap analysis, remediation waves" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [constituencyExpanded, setConstituencyExpanded] = useState(false);
  const [demographyExpanded, setDemographyExpanded] = useState(false);
  const [partyExpanded, setPartyExpanded] = useState(false);
  const [candidateExpanded, setCandidateExpanded] = useState(false);
  const [voterExpanded, setVoterExpanded] = useState(false);
  const [competitionExpanded, setCompetitionExpanded] = useState(false);
  const [publicSentimentExpanded, setPublicSentimentExpanded] = useState(false);
  const [mediaSentimentExpanded, setMediaSentimentExpanded] = useState(false);
  const [intelligenceExpanded, setIntelligenceExpanded] = useState(false);
  const [perceptionExpanded, setPerceptionExpanded] = useState(false);
  const [governanceExpanded, setGovernanceExpanded] = useState(false);

  const isGovernanceActive = pathname === "/dashboard/governance" || pathname?.startsWith("/dashboard/governance/");
  const isGovernanceChildActive = pathname?.startsWith("/dashboard/governance/");
  const isDemographyActive = pathname?.startsWith("/dashboard/demography");
  const isPartyActive = pathname?.startsWith("/dashboard/party");
  const isCandidateActive = pathname?.startsWith("/dashboard/candidate");
  const isVoterActive = pathname?.startsWith("/dashboard/voter");
  const isCompetitionActive = pathname?.startsWith("/dashboard/competition");
  const isPublicSentimentActive = pathname?.startsWith("/dashboard/public-sentiment");
  const isMediaSentimentActive = pathname?.startsWith("/dashboard/media-sentiment");
  const isIntelligenceActive = pathname?.startsWith("/dashboard/intelligence");
  const isPerceptionActive = pathname?.startsWith("/dashboard/perception");

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="flex h-full flex-col">
        <div className="border-b dark:border-slate-700 border-slate-200 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold">Punjab Congress</h1>
              <p className="text-xs dark:text-slate-400 dark:text-slate-500 text-slate-400">Intelligence Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider dark:text-slate-500 text-slate-400">
              Operational Heads
            </span>
          </div>
          <ul className="space-y-1">
            {OPERATIONAL_HEADS.map((head) => {
              // Special handling for demography - it's a parent with sub-items
              if (head.id === "demography") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/demography/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setDemographyExpanded(!demographyExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${demographyExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {demographyExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/demography"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/demography"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {DEMOGRAPHY_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/demography/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for constituency - it's a parent with sub-items
              if (head.id === "constituency") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/constituency/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setConstituencyExpanded(!constituencyExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${constituencyExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {constituencyExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/constituency"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/constituency"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {REGIONS.map((region) => {
                            const regionPath = `/dashboard/constituency/${region.id}`;
                            const isRegionActive = pathname === regionPath;
                            return (
                              <Link
                                key={region.id}
                                href={regionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isRegionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className={`flex h-5 w-5 items-center justify-center rounded ${regionColors[region.id]}`}>
                                  {iconMap["Map"]}
                                </span>
                                <span className="flex-1">{region.name}</span>
                                <span className="text-xs dark:text-slate-500 text-slate-400">{region.constituencies}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for party - it's a parent with sub-items
              if (head.id === "party") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/party/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setPartyExpanded(!partyExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${partyExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {partyExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/party"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/party"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {PARTY_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/party/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for candidate - it's a parent with sub-items
              if (head.id === "candidate") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/candidate/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setCandidateExpanded(!candidateExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${candidateExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {candidateExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/candidate"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/candidate"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {CANDIDATE_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/candidate/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for voter - it's a parent with sub-items
              if (head.id === "voter") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/voter/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setVoterExpanded(!voterExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${voterExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {voterExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/voter"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/voter"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {VOTER_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/voter/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for competition - it's a parent with sub-items
              if (head.id === "competition") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/competition/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setCompetitionExpanded(!competitionExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${competitionExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {competitionExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/competition"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/competition"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {COMPETITION_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/competition/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for public-sentiment - it's a parent with sub-items
              if (head.id === "public-sentiment") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/public-sentiment/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setPublicSentimentExpanded(!publicSentimentExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${publicSentimentExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {publicSentimentExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/public-sentiment"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/public-sentiment"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {PUBLIC_SENTIMENT_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/public-sentiment/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for media-sentiment - it's a parent with sub-items
              if (head.id === "media-sentiment") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/media-sentiment/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setMediaSentimentExpanded(!mediaSentimentExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${mediaSentimentExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {mediaSentimentExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/media-sentiment"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/media-sentiment"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {MEDIA_SENTIMENT_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/media-sentiment/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for intelligence - it's a parent with sub-items
              if (head.id === "intelligence") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/intelligence/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setIntelligenceExpanded(!intelligenceExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${intelligenceExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {intelligenceExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/intelligence"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/intelligence"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {INTELLIGENCE_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/intelligence/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for perception - it's a parent with sub-items
              if (head.id === "perception") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/perception/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setPerceptionExpanded(!perceptionExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${perceptionExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {perceptionExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/perception"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/perception"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {PERCEPTION_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/perception/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Special handling for governance - it's a parent with sub-items
              if (head.id === "governance") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/governance/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setGovernanceExpanded(!governanceExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${governanceExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {governanceExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l dark:border-slate-700 border-slate-200 pl-3">
                          <Link
                            href="/dashboard/governance"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/governance"
                                ? "bg-blue-600/30 text-blue-300"
                                : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                            }`}
                          >
                            <span className="dark:text-slate-500 text-slate-400">→</span>
                            Overview
                          </Link>
                          {GOVERNANCE_SECTIONS.slice(1).map((section) => {
                            const sectionPath = `/dashboard/governance/${section.id}`;
                            const isSectionActive = pathname === sectionPath;
                            return (
                              <Link
                                key={section.id}
                                href={sectionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isSectionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "dark:text-slate-400 dark:text-slate-500 text-slate-400 hover:dark:bg-slate-800 bg-slate-100 hover:text-white"
                                }`}
                              >
                                <span className="dark:text-slate-500 text-slate-400">→</span>
                                <span className="flex-1">{section.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              // Default rendering for items without special submenu handling
              const item = head as (typeof OPERATIONAL_HEADS)[number];
              const isActive = pathname === `/dashboard/${item.id}`;
              return (
                <li key={item.id}>
                  <Link
                    href={`/dashboard/${item.id}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "dark:text-slate-300 text-slate-700 dark:hover:dark:bg-slate-800 bg-slate-100 dark:hover:text-white hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color}`}>
                      {iconMap[item.icon]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium dark:text-slate-400 dark:text-slate-500 text-slate-400">{item.number}</span>
                        <span className="text-sm font-medium truncate">{item.title}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t dark:border-slate-700 border-slate-200 px-4 py-4">
          <ThemeToggle />
          <div className="mt-3 rounded-lg dark:bg-slate-800 bg-slate-100 p-3">
            <div className="flex items-center gap-2 text-xs dark:text-slate-400 dark:text-slate-500 text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Election: Feb 2027</span>
            </div>
            <p className="mt-1 text-xs dark:text-slate-500 text-slate-400">117 Seats • 2.77 Cr Voters</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
