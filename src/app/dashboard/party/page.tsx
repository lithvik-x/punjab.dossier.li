"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { CAMPAIGN_CHANNELS, POLITICAL_ANATOMY } from "@/lib/constants";
import {
  synthesisPartyData,
  synthesisDemographicData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

// === TYPESCRIPT INTERFACES ===

interface SADFaction {
  name: string;
  leader: string;
  status: string;
  position?: string;
}

interface SADElectoralDecline {
  election: string;
  seats?: number;
  voteShare?: string;
  note: string;
}

interface SADStatusData {
  president: string;
  presidentReElection: string;
  electoralDecline: SADElectoralDecline[];
  factions: SADFaction[];
  bspAlliance: { status: string; date: string; current: string };
  panthicIssues: { akalTakhtAction: string; sgpcControl: string; impact: string };
  keyLeaders: { name: string; status?: string; seat?: string; note: string }[];
}

interface PartyWorker {
  level: string;
  count: number;
  coverage: number;
  note?: string;
}

interface ClassCasteEntry {
  class: string;
  caste: string;
  population: string;
  primaryParty: string;
  note: string;
}

interface NRISupportPattern {
  country: string;
  sympathies: string;
  reason: string;
  risk: string;
}

interface NRIVoterMetric {
  metric: string;
  value: number | string;
  note: string;
}

interface VolunteerSource {
  source: string;
  yield: string;
  activation: string;
}

interface NonMonetaryIncentive {
  type: string;
  description: string;
  effectiveness: string;
}

interface TrainingModule {
  module: string;
  duration: string;
  content: string;
}

interface TrainingFormat {
  format: string;
  percentage: string;
  bestFor: string;
}

interface BoothRole {
  role: string;
  quantity: number;
  responsibility: string;
}

interface PollingDayOp {
  time: string;
  action: string;
}

interface VolunteerRecruitmentData {
  targetTotal: number;
  boothLevelWorkers: number;
  sectorSupervisors: number;
  boothPresidents: number;
  sources: VolunteerSource[];
  nonMonetaryIncentives: NonMonetaryIncentive[];
}

interface VolunteerTrainingData {
  totalHours: string;
  modules: TrainingModule[];
  format: TrainingFormat[];
}

interface BoothStructureData {
  roles: BoothRole[];
  pollingDayOps: PollingDayOp[];
}

interface ContactStage {
  stage: string;
  timing: string;
  objective: string;
  channels: string[];
  contactRate: string;
}

interface BoothContactStrategyEntry {
  category: string;
  margin: string;
  contactRatio: string;
  priority: string;
  notes: string;
}

// === SAD (Shiromani Akali Dal) Status Data (from research-P3/sad-status) ===
const sadStatusData: SADStatusData = {
  president: "Sukhbir Singh Badal",
  presidentReElection: "April 12, 2025",
  electoralDecline: [
    { election: "2022 Assembly", seats: 3, note: "Worst ever result" },
    { election: "2024 Lok Sabha", seats: 1, note: "Bathinda only" },
    { election: "Tarn Taran By-poll", voteShare: "25.97%", note: "Severe swing" },
  ],
  factions: [
    { name: "SAD Badal", leader: "Sukhbir Singh Badal", status: "Official", position: "President" },
    { name: "SAD Punar Surjit", leader: "Gurpartap Singh", status: "Faction" },
    { name: "Waris Punjab De", leader: "Manny Singh", status: "Faction" },
    { name: "SAD Mann", leader: "Sukhdev Dhindsa", status: "Faction" },
    { name: "Other splinters", leader: "Various", status: "Minor" },
  ],
  bspAlliance: {
    status: "Collapsed",
    date: "February 2024",
    current: "Going solo",
  },
  panthicIssues: {
    akalTakhtAction: "Removed Sukhbir's 'Zinda Sadh' title",
    sgpcControl: "Contested between factions",
    impact: "Panthic credibility damaged",
  },
  keyLeaders: [
    { name: "Bikram Majithia", status: "Released Feb 2026", note: "Drug case accused" },
    { name: "Harsimrat Kaur Badal", seat: "Bathinda MP", note: "Union Minister (Resigned 2020)" },
  ],
};

export default function PartyPage() {
  const partyWorkers = [
    { level: "District Presidents (DCC)", count: 29, coverage: 100, note: "Appointed Nov 2025" },
    { level: "Block-level Officers", count: 341, coverage: 95 },
    { level: "AC Coordinators", count: 117, coverage: 100, note: "Appointed June 2025" },
    { level: "Booth-level Sevaks", count: 300000, coverage: 78, note: "Total appointed workers" },
  ];

  const campaignChannels = CAMPAIGN_CHANNELS.slice(0, 6);

  // Class-Caste Intersection Matrix (MP2-005)
  const classCasteMatrix = [
    { class: "Destitute (<₹5K/month)", caste: "SC", population: "32%", primaryParty: "Congress 45%", note: "Landless laborers, MNREGA dependent" },
    { class: "Poor (₹5-10K)", caste: "SC+OBC", population: "45%", primaryParty: "Congress 40%", note: "Marginal farmers,打工" },
    { class: "Middle (₹10-25K)", caste: "OBC+Jat", population: "38%", primaryParty: "Congress 35%", note: "Small traders, teachers" },
    { class: "Upper Middle (₹25-50K)", caste: "Jat+General", population: "25%", primaryParty: "SAD 30%", note: "Arhtiyas, landowners" },
    { class: "Elite (₹50K+)", caste: "General Hindu+Sikh", population: "15%", primaryParty: "BJP 40%", note: "Industrialists, professionals" },
  ];

  // NRI Support Patterns (MP2-008)
  const nriSupportPatterns = [
    { country: "Canada (800K)", sympathies: "Congress 45%", reason: "Historical ties, anti-AAP over drug trafficking", risk: "HIGH - India-Canada tensions" },
    { country: "USA (600K+)", sympathies: "Mixed 35% Cong/30% AAP", reason: "Diaspora organizations,Modi support growing", risk: "MEDIUM" },
    { country: "UK (400-500K)", sympathies: "Congress 40%", reason: "Labour Party connections, Punjabi diaspora", risk: "LOW-MEDIUM" },
    { country: "Australia (200K)", sympathies: "BJP 35%", reason: "Pro-government diaspora, employment focus", risk: "LOW" },
    { country: "Europe (200K)", sympathies: "Congress 38%", reason: "Human rights narrative", risk: "LOW" },
  ];

  // NRI Voter Registration (MP2-008)
  const nriVoterRegistration = [
    { metric: "Registered NRI Voters (2019)", value: 393, note: "Of 20+ lakh diaspora" },
    { metric: "NRI Votes Cast (2019)", value: 0, note: "Legal prohibition" },
    { metric: "Estimated Diaspora (2024)", value: "20+ lakh", note: "Canada 8L, USA 6L+, UK 4-5L" },
    { metric: "Diaspora Voting Potential", value: "10-15 lakh", note: "If online voting enabled" },
  ];

  // === MP6-003: Volunteer Recruitment & Training (from MP6 Section 6.3) ===
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

  // === MP6-003: Volunteer Training Program (from MP6 Section 6.3) ===
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
    format: [
      { format: "Online (Self-paced)", percentage: "30%", bestFor: "Ideology, context, basic skills" },
      { format: "Online (Live)", percentage: "20%", bestFor: "Messaging, Q&A" },
      { format: "In-person (Large)", percentage: "25%", bestFor: "Booth management, polling day" },
      { format: "In-person (Small Group)", percentage: "25%", bestFor: "Voter contact practice, role plays" },
    ],
  };

  // === MP6-004: Booth Level Structure (from MP6 Section 6.1.1.5) ===
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

  // === MP6 MISSING DATA ADDED: 3-Contact Sequence ===
  const threeContactSequence = [
    { stage: "Awareness", timing: "T-45 to T-30 days", objective: "Name recognition, issue awareness", channels: ["WhatsApp broadcast", "Door-to-door", "Rallies"], contactRate: "100% of target voters" },
    { stage: "Persuasion", timing: "T-30 to T-10 days", objective: "Convince swing voters, address objections", channels: ["Personal outreach", "Family meetings", "Small group meetings"], contactRate: "60-70% of persuadable voters" },
    { stage: "GOTV (Get Out The Vote)", timing: "T-10 to E-Day", objective: "Turn supporters to voters, transport, last-minute push", channels: ["SMS/WhatsApp reminders", "Phone banking", "Booth-level follow-up"], contactRate: "90%+ of committed supporters" },
  ];

  // === MP6 MISSING DATA ADDED: Booth Contact Ratios ===
  const boothContactStrategy = [
    { category: "Safe Booth", margin: ">15%", contactRatio: "2:1", priority: "LOW", notes: "Maintain base, minimal incremental contact" },
    { category: "Competitive", margin: "5-15%", contactRatio: "3:1", priority: "MEDIUM", notes: "Intensive persuasion contact" },
    { category: "Battleground", margin: "2-5%", contactRatio: "4:1", priority: "HIGH", notes: "Maximum contact, personal outreach" },
    { category: "Swing Booth", margin: "<2% or undecided", contactRatio: "5:1", priority: "CRITICAL", notes: "Exhaustive contact, family-level GOTV" },
  ];

  // === MP6 MISSING DATA ADDED: Ceiling Effect ===
  const ceilingEffect = {
    finding: "5-7 contacts become counterproductive",
    threshold: "After 7 contacts, voter disengagement increases",
    data: "Contact fatigue causes 12-18% decrease in positive response",
    recommendation: "Maximum 5 contacts per voter in campaign cycle",
  };

  // === MP6 MISSING DATA ADDED: Female Booth Sevak Target ===
  const femaleBoothSevakTarget = {
    target: "30%",
    current: "~8%",
    gap: "22 percentage point gap",
    reason: "Women voter outreach critical - women 48% of electorate",
    shgNetwork: "Self-Help Groups as force multipliers for women voter contact",
  };

  // === MP6 MISSING DATA ADDED: GOTV & Operations Budget ===
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

  // === MP6 MISSING DATA ADDED: Election Calendar Constraints ===
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

  // === MP6 MISSING DATA ADDED: BSP Relaunch 2026 Threat ===
  const bspRelaunch2026 = {
    threat: "BSP Relaunch 2026",
    probability: "HIGH - Mayawati signals revival",
    reason: "BSP increasingly visible in Punjab media, Dalit outreach",
    impact: "SC vote split, especially Mazhabi Sikh and Ravidasia voters",
    vulnerableSegments: ["Mazhabi Sikh (8-10%)", "Ravidasia (4-5%)", "Ad-Dharm (1-2%)"],
    seatImpact: "15-25 seats affected in Malwa and Doaba",
    congressVulnerability: "SC voters (32%) could fragment between Congress/BSP/AAP",
  };

  // === DATA FROM A-01-14: SGPC INFLUENCE ===
  const sgpcInfluenceData = {
    decline: {
      "1980s": "85% of Panthic votes via SGPC network",
      "2022": "35% of Panthic votes via SGPC network",
      decline: "50 percentage point collapse",
      reason: "Deras, secular parties, youth alienation"
    },
    structure: {
      members: 170,
      elected: "From Sikh voters",
      ruralReach: "30+ gurdwaras via SGPC",
      urbanReach: "SAD controls 16 of 18 SGPC seats"
    },
    politicalRole: {
      electoral: "SGPC elections predict assembly outcomes",
      manifesto: "Panthic issues = farmer crisis, drug, unemployment",
      voterMobilization: "Gurdwara network for voter outreach"
    },
    challenges: {
      youth: "Youth not engaged with SGPC",
      deraCompetition: "Dera Radha Soami siphoned 15-20% Panthic votes",
      politicization: "SGPC-SAD tangle damaged credibility"
    },
    influenceAreas: {
      strongholds: ["Tarn Taran", "Kapurthala", "SBS Nagar", "Hoshiarpur rural"],
      border: ["Gurdaspur", "Pathankot"],
      malwa: ["Moga", "Bathinda rural"]
    }
  };

  // === DATA FROM A-01-15: POWER BROKERS / ZAILDAR SYSTEM ===
  const powerBrokersData = {
    zaildarSystem: {
      definition: "Traditional rural authority structure - Chaudhary/Zaildar",
      original: "Pre-colonial revenue officer",
      modern: "Social influencer, dispute resolver, government liaison",
      ruralReach: "6,000+ villages"
    },
    influence: {
      voterMobilization: "1 zaildar = 50-200 votes directly controlled",
      familyChains: "Each zaildar commands 5-10 family networks",
      boothImpact: "Decisive in 15-20 rural assembly seats"
    },
    politicalAlignment: {
      congressHistorical: "Strong zaildar network, Congress since independence",
      aapPenetration: "AAP weak among traditional zaildars",
      sadBase: "Zaildars in Malwa aligned with SAD",
      bjpEfforts: "BJP trying zaildar outreach in rural Malwa"
    },
    decline: {
      youthRejection: "Young voters reject traditional authority",
      nriInfluence: "NRI families bypass zaildar channel",
      urbanization: "Urban influence reduces zaildar relevance",
      deraCompetition: "Dera heads competing with zaildar authority"
    },
    congressAdvantage: {
      zaildarNetwork: "Congress has 60-70% of traditional zaildars",
      loyalBase: "Zaildars deliver 35-45% rural votes",
      counter: "Losing grip as villages modernize"
    }
  };

  // === DATA FROM A-01-18: URBAN/RURAL DIVIDE ===
  const urbanRuralDivide = {
    economic: {
      gdp: "Urban 65% of state GDP",
      population: "Rural 37% of population",
      incomeGap: "Urban per capita 2.5x rural",
      nriRemittance: "Urban areas receive 60% of NRI money"
    },
    political: {
      ruralSeats: "69 assembly seats (59%)",
      urbanSeats: "48 assembly seats (41%)",
      voterTurnout: "Rural 68-72%, Urban 58-64%",
      congressBase: "Rural 40-45%, Urban 30-35%"
    },
    issues: {
      rural: ["Drug crisis", "Farmer distress", "Water table", "Unemployment"],
      urban: ["Governance", "Jobs", "Infrastructure", "Health"]
    },
    congressChallenge: {
      ruralStrength: "Congress historically strong in rural Malwa",
      urbanGap: "AAP dominated 2014-2022 urban surge",
      "2022shift": "Congress recovered some urban seats",
      strategy: "Urban renaissance via welfare + jobs narrative"
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
              3
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Party Propulsion
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress machinery • Worker networks • Booth-level agent deployment
          </p>
        </div>
        <Badge variant="info">300K Workers Deployed</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Party Workers"
          value="300,000"
          subtitle="Booth-level appointees"
          change={100}
          trend="up"
          color="bg-cyan-500"
        />
        <MetricCard
          title="Booth Coverage"
          value="78%"
          subtitle="Target: 100% by Aug"
          change={12}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Coordination Heads"
          value="117"
          subtitle="One per AC (appointed June 2025)"
          color="bg-blue-500"
        />
        <MetricCard
          title="Digital Deficit"
          value="2-3x"
          subtitle="Congress lags AAP on social"
          change={-60}
          trend="down"
          color="bg-red-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="DCC Presidents"
          value="29"
          subtitle="29 of 29 districts (Nov 2025)"
          color="bg-cyan-500"
        />
        <MetricCard
          title="Sangathan Abhiyan"
          value="3"
          subtitle="Lakh workers under campaign"
          change={100}
          trend="up"
          color="bg-teal-500"
        />
        <MetricCard
          title="Party Fiscal Debt"
          value="₹4L Cr"
          subtitle="Total Congress liabilities"
          trend="down"
          color="bg-red-500"
        />
        <MetricCard
          title="Youth Unemp."
          value="14.9%"
          subtitle="Punjab unemployment rate"
          trend="down"
          color="bg-orange-500"
        />
      </div>

      {/* Political Anatomy - 2022 Election Context */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Political Anatomy — 2022 Assembly Election Baseline
          </h3>
          <Badge variant="success">Cycle 2 Data</Badge>
        </div>
        <p className="mb-6 text-sm text-emerald-700 dark:text-emerald-400">
          Understanding the electoral landscape that shaped current party positioning
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">117</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Assembly Seats</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">AAP Seats (42% vote)</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">18</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Congress Seats (23% vote)</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400">7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Others (SAD+BJP=4 seats)</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Seat Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Malwa (59%)</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">69 seats</span>
              </div>
              <ProgressBar label="" value={59} color="bg-orange-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Majha (21%)</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">25 seats</span>
              </div>
              <ProgressBar label="" value={21} color="bg-blue-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba (20%)</span>
                <span className="font-medium text-green-600 dark:text-green-400">23 seats</span>
              </div>
              <ProgressBar label="" value={20} color="bg-green-500" showPercentage={false} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Caste Composition</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">SC Population</span><span className="font-medium">32%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Jat Sikh</span><span className="font-medium">21%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">OBC</span><span className="font-medium">31%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Mazhabi Sikh</span><span className="font-medium">6.3%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Upper Caste</span><span className="font-medium">16%</span></div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Drug Crisis Impact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Heroin Share (India)</span><span className="font-medium text-red-600 dark:text-red-400">44.5%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Drug Users</span><span className="font-medium">6.6M (18%)</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Overdose Deaths 2024</span><span className="font-medium text-red-600">106</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Drone Seizures 2024</span><span className="font-medium">200+</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Worker Hierarchy
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Party organization structure & coverage
          </p>
          <div className="mt-6 space-y-4">
            {partyWorkers.map((level, i) => (
              <div key={level.level} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{level.level}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {level.count.toLocaleString()}
                    </span>
                  </div>
                  <ProgressBar
                    label=""
                    value={level.coverage}
                    color="bg-cyan-500"
                    showPercentage={false}
                  />
                </div>
                <Badge variant={level.coverage === 100 ? "success" : level.coverage > 80 ? "info" : "warning"}>
                  {level.coverage}%
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Channel Performance
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Reach & engagement metrics
          </p>
          <div className="mt-6 space-y-4">
            {campaignChannels.map((channel) => (
              <div key={channel.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{channel.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">{(channel.reach / 1000000).toFixed(1)}M</span>
                    <Badge variant={channel.engagement > 0.6 ? "success" : channel.engagement > 0.3 ? "info" : "warning"}>
                      {channel.engagement * 100}%
                    </Badge>
                  </div>
                </div>
                <ProgressBar
                  label=""
                  value={channel.engagement * 100}
                  color="bg-blue-500"
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Party Leadership
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Key appointments & hierarchy
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">PPCC President</p>
                <p className="text-sm text-slate-500">Raja Warring</p>
              </div>
              <Badge variant="info">State President</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">AICC In-Charge</p>
                <p className="text-sm text-slate-500">Bhupesh Baghel</p>
              </div>
              <Badge variant="info">Central Appointee</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">CLP Leader</p>
                <p className="text-sm text-slate-500">Partap Singh Bajwa</p>
              </div>
              <Badge variant="success">Legislative</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Deputy CLP Leader</p>
                <p className="text-sm text-slate-500">Sukhjinder Singh Randhawa</p>
              </div>
              <Badge variant="success">Legislative</Badge>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Digital Deficit vs AAP
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Social media laggard analysis
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Twitter/X</span>
              <div className="text-right">
                <span className="text-sm font-medium text-red-600">Congress ~185K-200K</span>
                <span className="mx-2 text-slate-400">vs</span>
                <span className="text-sm font-medium text-green-600">AAP 482K</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
              <div className="text-right">
                <span className="text-sm font-medium text-red-600">Congress ~50K-100K</span>
                <span className="mx-2 text-slate-400">vs</span>
                <span className="text-sm font-medium text-green-600">AAP ~200K-300K</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Facebook</span>
              <div className="text-right">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">1,001,400</span>
                <span className="mx-2 text-slate-400">likes</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Engagement Rate</span>
              <div className="text-right">
                <span className="text-sm font-medium text-red-600">AAP generates 10-20x more</span>
                <span className="mx-2 text-slate-400">Twitter engagement</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-600">Zero engagement with Punjabi YouTubers, Instagram creators</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          Raghav Chadha Defection Impact
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Former Punjab Congress digital lead defected to BJP (April 2026)
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">14.6M</p>
            <p className="text-sm text-slate-500">Instagram followers before defection</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-red-600">~1M</p>
            <p className="text-sm text-slate-500">Followers lost within 24 hours</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">7%</p>
            <p className="text-sm text-slate-500">Follower loss rate</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          2024 Lok Sabha Results
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Congress performance vs 2019
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-3xl font-bold text-green-600">7/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">LS Seats Won</p>
            <p className="mt-1 text-xs text-green-600">Congress</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-3xl font-bold text-blue-600">26.30%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Vote Share</p>
            <p className="mt-1 text-xs text-blue-600">-13.82pp from 2019</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-3xl font-bold text-yellow-600">3/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">AAP LS Seats</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-3xl font-bold text-orange-600">0/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">BJP LS Seats</p>
            <p className="mt-1 text-xs text-orange-600">18.56% vote share</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Key Margins</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-slate-500">Ferozepur:</span>
              <span className="font-medium text-red-600">3,242 votes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Jalandhar:</span>
              <span className="font-medium text-red-600">1.76 lakh votes</span>
            </div>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2019 Baseline</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-slate-500">Congress Vote Share:</span>
              <span className="font-medium text-green-600">40.12%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Swing:</span>
              <span className="font-medium text-red-600">-13.82pp</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Booth Agent Deployment
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-3xl font-bold text-green-600">18,582</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Fully Manned Booths</p>
            <p className="mt-1 text-xs text-green-600">78% coverage</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-3xl font-bold text-yellow-600">4,769</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Partially Manned</p>
            <p className="mt-1 text-xs text-yellow-600">20% coverage</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-3xl font-bold text-red-600">496</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Unmanned Booths</p>
            <p className="mt-1 text-xs text-red-600">Critical priority</p>
          </div>
        </div>
      </div>

      {/* Transportation Fleet Section (from MP9-007) */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          Transportation & Fleet Management
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Vehicle fleet • GOTV logistics • Budget breakdown (MP9-007)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Statewide Fleet Budget"
            value="₹130-140 Cr"
            subtitle="Total transportation cost statewide"
            color="bg-orange-500"
          />
          <MetricCard
            title="Per Constituency"
            value="₹9.93 L"
            subtitle="Average cost per AC (3-month campaign)"
            color="bg-amber-500"
          />
          <MetricCard
            title="Vehicle Share"
            value="25-35%"
            subtitle="Of total campaign expenditure"
            color="bg-yellow-500"
          />
          <MetricCard
            title="GOTV Transport"
            value="₹75K/AC"
            subtitle="Per AC voter transport (15 days)"
            color="bg-teal-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Vehicle Fleet Composition (Per AC)</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">Candidate SUV (6-month lease)</span><span className="font-medium">₹2.7 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">LED Campaign Van x2 (3-month)</span><span className="font-medium">₹1.92 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">GOTV Vehicles x10 (15 days)</span><span className="font-medium">₹75 K</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Fuel Fund (3 months)</span><span className="font-medium">₹1.5 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Driver Costs x4 (3 months)</span><span className="font-medium">₹2.16 L</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span className="text-slate-700">Total Per AC</span><span className="text-orange-600">₹9.93 L</span></div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Procurement Model</h4>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">60-70%</div><div><p className="text-sm font-medium">Rental (Primary)</p><p className="text-xs text-slate-500">Tata Ace LED: ₹18-30K/month</p></div></div>
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">15-25%</div><div><p className="text-sm font-medium">Lease (Secondary)</p><p className="text-xs text-slate-500">Core fleet vehicles, 6-month commitment</p></div></div>
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">10-15%</div><div><p className="text-sm font-medium">Volunteer Vehicles</p><p className="text-xs text-slate-500">Fuel + maintenance reimbursement</p></div></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Key Insight:</strong> LED campaign vans account for 40-50% of vehicle budget. GPS tracking mandatory for all candidate-level vehicles.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Organizational Warfare — BJP vs Congress Grassroots Comparison (MP3-007, MP3-014)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Ground machinery determines electoral outcomes in FPTP systems
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Swayamsevak Network</h4>
            <p className="text-2xl font-bold text-yellow-600 mt-2">11 Lakh+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">RSS-organized volunteers</p>
            <p className="text-xs text-slate-500 mt-2">India's largest grassroots organization. RSS integration provides ideological coherence. Active in 600+ mandals across Punjab.</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress Booth Organization</h4>
            <p className="text-2xl font-bold text-blue-600 mt-2">300,000</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Booth-level workers</p>
            <p className="text-xs text-slate-500 mt-2">78% booth coverage (target 100% by Aug 2026). No equivalent to BJP's RSS-structured Swayamsevak network.</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Critical Gap:</strong> AAP's WhatsApp-centric model (15,000+ groups) provides fast information flow but lacks RSS-equivalent grassroots penetration. Congress digital deficit vs AAP is 2-3x on social media. <strong>Source: MP3-007</strong>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Organizational Structure
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Party committee composition
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <p className="text-2xl font-bold text-cyan-600">51</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">DCC Members</p>
            <p className="mt-1 text-xs text-slate-500">Per District Congress Committee</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-2xl font-bold text-blue-600">31</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">BCC Members</p>
            <p className="mt-1 text-xs text-slate-500">Per Block Congress Committee</p>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <p className="text-2xl font-bold text-teal-600">117</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Assembly Segments</p>
            <p className="mt-1 text-xs text-slate-500">One booth sevak per booth</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Digital Youth Congress Elections</span>
            <Badge variant="success">Concluded</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-500">Internal party democracy for youth wing leadership</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Sangathan Srijan Abhiyan
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Party revival &amp; recruitment campaign
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              1
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Worker Recruitment</span>
                <span className="text-sm font-medium text-cyan-600">3 Lakh+</span>
              </div>
              <p className="text-xs text-slate-500">Booth-level workers mobilized</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              2
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">DCC Restructuring</span>
                <span className="text-sm font-medium text-blue-600">29/29 Districts</span>
              </div>
              <p className="text-xs text-slate-500">New presidents appointed Nov 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              3
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Booth Activation</span>
                <span className="text-sm font-medium text-teal-600">78% Target</span>
              </div>
              <p className="text-xs text-slate-500">Full coverage by August 2026</p>
            </div>
          </div>
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
            <p className="text-2xl font-bold text-red-600 mt-1">"Judega Block, Jittegi Congress"</p>
            <p className="text-xs text-slate-500 mt-1">From MP4-004 — the unifying campaign cry</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Core Attack Line</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">"4 Saal 0 Kaam"</p>
            <p className="text-xs text-slate-500 mt-1">From MP4-012 — AAP's 4 years, zero delivery</p>
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
            <p className="text-sm font-medium text-red-700">"Haath Uthao Punjab Banao"</p>
            <p className="text-xs text-red-600 mt-1">Uplift message</p>
          </div>
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm font-medium text-red-700">"4 Saal 0 Kaam"</p>
            <p className="text-xs text-red-600 mt-1">Attack line — 4 years, zero work</p>
          </div>
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-sm font-medium text-red-700">"AAP Ka Haath, Bagal Mein Duniya"</p>
            <p className="text-xs text-red-600 mt-1">AAP's hand, world in pocket (inaccessible)</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Central Narrative:</strong> "AAP made big promises in 2022. Four years later: zero delivery. Congress will deliver from Day One."
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

      {/* MP4-025: Campaign Budget (from MP4 Section 5) */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          Campaign Budget Estimate (MP4-025)
        </h3>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          Total: Rs 65-95 Crore
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Digital Campaign</p>
            <p className="text-lg font-bold text-cyan-600">Rs 4-6 Cr</p>
            <p className="text-xs text-slate-500">70% of near-term</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Rallies & Events</p>
            <p className="text-lg font-bold text-cyan-600">Rs 25-35 Cr</p>
            <p className="text-xs text-slate-500">117 constituencies × 3-5 events</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Booth-Level Contact</p>
            <p className="text-lg font-bold text-cyan-600">Rs 15-20 Cr</p>
            <p className="text-xs text-slate-500">25K booth + 1.25L workers</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Media Buy & Ads</p>
            <p className="text-lg font-bold text-cyan-600">Rs 15-25 Cr</p>
            <p className="text-xs text-slate-500">Phase 3-4 paid media</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Manifesto & Comms</p>
            <p className="text-lg font-bold text-cyan-600">Rs 2-3 Cr</p>
            <p className="text-xs text-slate-500">Nyay Patra printing</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Surveys & Analytics</p>
            <p className="text-lg font-bold text-cyan-600">Rs 3-5 Cr</p>
            <p className="text-xs text-slate-500">3 independent surveys</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">NRI Outreach</p>
            <p className="text-lg font-bold text-cyan-600">Rs 1-2 Cr</p>
            <p className="text-xs text-slate-500">IOC activation</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Legal & Rapid Response</p>
            <p className="text-lg font-bold text-cyan-600">Rs 1-2 Cr</p>
            <p className="text-xs text-slate-500">Defamation, rapid rebuttal</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Note:</strong> Congress-internal estimates. AAP spending may be higher given incumbent advantage and Punjab government resources.
          </p>
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

      {/* CONGRESS STATUS - from research-P3/congress-status */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Congress Status (May 2026)
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          PPCC leadership, Factional dynamics, CM face prospects, Org revival
        </p>

        {/* Key Metrics */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="PPCC President"
            value="Amrinder Singh Raja Warring"
            subtitle="Since April 2022"
            color="bg-purple-500"
          />
          <MetricCard
            title="AICC In-Charge"
            value="Bhupesh Baghel"
            subtitle="Appointed Feb 2025"
            color="bg-purple-500"
          />
          <MetricCard
            title="Lok Sabha 2024"
            value="7/13"
            subtitle="Seats won, 26.30% vote share"
            color="bg-green-500"
          />
          <MetricCard
            title="Assembly Seats"
            value="15-16/117"
            subtitle="Current representation"
            color="bg-yellow-500"
          />
        </div>

        {/* Factional Dynamics */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Factional Dynamics</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Warring</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">PPCC President, OBC outreach</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Channi</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">SC community champion</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bajwa</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">CLP Leader, Jat Sikh base</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Randhawa</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">Deputy CLP, Doaba strong</p>
          </div>
        </div>

        {/* CM Face Prospects */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">CM Face Prospects</h4>
        <div className="mt-3 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">No official declaration as of May 2026</p>
            <Badge variant="warning">6 Contenders</Badge>
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-6">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Channi</span>
            <p className="mt-1 text-xs text-slate-500">Ex-CM, SC base</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Warring</span>
            <p className="mt-1 text-xs text-slate-500">PPCC President</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bajwa</span>
            <p className="mt-1 text-xs text-slate-500">CLP Leader</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Randhawa</span>
            <p className="mt-1 text-xs text-slate-500">Deputy CLP</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Aujla</span>
            <p className="mt-1 text-xs text-slate-500">Contender</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Singla</span>
            <p className="mt-1 text-xs text-slate-500">Contender</p>
          </div>
        </div>

        {/* Org Revival */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Org Revival (May 2026)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">25,000</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Booth Sevaks</p>
            <p className="mt-1 text-xs text-slate-500">Sangathan Srijan Abhiyan</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">1.25 Lakh</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Booth Assistants</p>
            <p className="mt-1 text-xs text-slate-500">1 per booth target model</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">~3 Lakh</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Total Party Workers</p>
            <p className="mt-1 text-xs text-slate-500">Worker base mobilized</p>
          </div>
        </div>

        {/* Survey Data */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Candidate Selection Surveys</h4>
        <div className="mt-3 rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">3 Surveys commissioned mid-May 2026</p>
            <Badge variant="info">Active</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-500">For candidate selection across 117 assembly segments</p>
        </div>
      </div>

      {/* 2027 Election Strategy */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          2027 Election Strategy
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Collective leadership model, Three-phase yatra
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Three-Phase Yatra</p>
            <p className="mt-1 text-xs text-slate-500">Statewide outreach campaign</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">117 AC Strategy</p>
            <p className="mt-1 text-xs text-slate-500">One coordinator per constituency</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Factional Balance</p>
            <p className="mt-1 text-xs text-slate-500">Warring, Channi, Bajwa, Randhawa</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance Record (2022-2026)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Anti-Congress attack ammunition
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">400+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Mohalla Clinics</p>
            <p className="mt-1 text-xs text-green-600">Delivered</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-2xl font-bold text-yellow-600">48-70K</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Jobs Claimed</p>
            <p className="mt-1 text-xs text-yellow-600">Unverified</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-2xl font-bold text-red-600">4 Yrs</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Women Stipend</p>
            <p className="mt-1 text-xs text-red-600">Delayed</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-2xl font-bold text-orange-600">14.9%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Youth Unemployment</p>
            <p className="mt-1 text-xs text-orange-600">PLFS 2024-25</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Top 5 Voter Issues</p>
          <div className="mt-2 grid grid-cols-5 gap-2 text-center text-xs">
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">Drugs</span>
            <span className="rounded bg-orange-100 px-2 py-1 text-orange-700">Jobs</span>
            <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-700">Farmers</span>
            <span className="rounded bg-blue-100 px-2 py-1 text-blue-700">Health</span>
            <span className="rounded bg-purple-100 px-2 py-1 text-purple-700">Water</span>
          </div>
        </div>
      </div>

      <DataTable
        headers={["Zone", "Districts", "Workers", "Booth Agents", "Coverage", "Priority"]}
        rows={[
          ["Majha", "4", "12,500", "8,420", "85%", "High"],
          ["Malwa", "12", "45,000", "32,100", "82%", "Critical"],
          ["Doaba", "3", "15,000", "9,800", "78%", "Medium"],
          ["Powadh", "3", "8,500", "5,200", "71%", "High"],
        ]}
        caption="Zone-wise Worker Distribution"
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Crisis Risk Matrix
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Top 10 crisis types by probability × impact (20 total tracked)
        </p>
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="danger">CRITICAL</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Candidate Defection</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: Critical</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="danger">CRITICAL</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Social Media Gaffes</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Factional Violence</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: Critical</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Caste Calculus Upset</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Booth Capturing Reports</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="info">MEDIUM</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Manifesto Overpromise</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: Medium</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="info">MEDIUM</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Ally Infighting</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: Medium</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">+13 additional crisis types monitored</p>
      </div>

      {/* AAP PARTY STRUCTURE & LEADERSHIP - from MP3-001 */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          AAP Party Structure & Organizational Strength
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          AAP Punjab organizational hierarchy — centralized Delhi-controlled model
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="National Convenor"
            value="Arvind Kejriwal"
            subtitle="Founded 26 Nov 2012; Total control"
            color="bg-red-500"
          />
          <MetricCard
            title="Punjab Incharge"
            value="Manish Sisodia"
            subtitle="Replaced Sandeep Pathak, March 2025"
            color="bg-red-500"
          />
          <MetricCard
            title="State President"
            value="Aman Arora"
            subtitle="Replaced Bhagwant Mann, 2025"
            color="bg-red-500"
          />
          <MetricCard
            title="CM / State Convener"
            value="Bhagwant Mann"
            subtitle="Since 16 March 2022; Dhuri MLA"
            color="bg-red-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Cabinet Ministers</p>
            <p className="text-2xl font-bold text-red-600">16</p>
            <p className="text-xs text-slate-500">As of January 2026</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Party Zones</p>
            <p className="text-2xl font-bold text-red-600">3</p>
            <p className="text-xs text-slate-500">Majha, Doaba, Malwa (subdivided)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Districts Covered</p>
            <p className="text-2xl font-bold text-red-600">28</p>
            <p className="text-xs text-slate-500">District presidents appointed May 2025</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Wings Structure</p>
          <div className="mt-2 grid grid-cols-5 gap-2 text-center text-xs">
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">Youth Wing (AYW)</span>
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">Mahila Shakti (AMS)</span>
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">CYSS (Students)</span>
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">SVS (Labour)</span>
            <span className="rounded bg-red-100 px-2 py-1 text-red-700">Nasha Mukti Morcha</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-100/50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-600">Critical Weakness: Inner-Party Democracy = ZERO</p>
          <p className="text-xs text-slate-600 mt-1">All positions appointed by Kejriwal; no internal elections; Punjab Incharge replaced unilaterally March 2025 without consultation</p>
        </div>
      </div>

      {/* SAD (Shiromani Akali Dal) Status - from research-P3/sad-status */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
          SAD (Shiromani Akali Dal) Status
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Akali Dal electoral decline • Factional fragmentation • Panthic credibility crisis
        </p>

        {/* SAD Leadership Metrics */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="President"
            value="Sukhbir Singh Badal"
            subtitle={`Re-elected ${sadStatusData.presidentReElection}`}
            color="bg-yellow-500"
          />
          <MetricCard
            title="2022 Assembly Seats"
            value="3"
            subtitle="Worst ever result"
            change={-87}
            trend="down"
            color="bg-red-500"
          />
          <MetricCard
            title="2024 LS Seats"
            value="1"
            subtitle="Bathinda only"
            change={-2}
            trend="down"
            color="bg-red-500"
          />
          <MetricCard
            title="BSP Alliance"
            value="Collapsed"
            subtitle="February 2024 - Going solo"
            color="bg-orange-500"
          />
        </div>

        {/* Electoral Decline Mini Chart */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Electoral Decline Trajectory</h4>
            <div className="mt-4 flex items-end justify-between gap-2">
              {sadStatusData.electoralDecline.map((item, i) => (
                <div key={i} className="flex flex-1 flex-col items-center">
                  <div
                    className="w-full rounded-t bg-red-400 dark:bg-red-600"
                    style={{ height: `${(100 / (i + 1))}px` }}
                  />
                  <p className="mt-2 text-center text-xs font-medium text-slate-600 dark:text-slate-400">
                    {item.seats ? `${item.seats} seats` : item.voteShare}
                  </p>
                  <p className="text-center text-xs text-slate-500">{item.election}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500"> Tarn Taran By-poll: 25.97% vote share</p>
          </div>

          {/* Key Leaders */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Leaders</h4>
            <div className="mt-3 space-y-3">
              {sadStatusData.keyLeaders.map((leader, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-slate-100 p-2 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{leader.name}</p>
                    <p className="text-xs text-slate-500">{leader.seat || leader.status}</p>
                  </div>
                  <Badge variant={leader.name.includes("Bikram") ? "warning" : "info"}>
                    {leader.note}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faction Analysis */}
        <div className="mt-6">
          <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Akali Fragmentation (5 Active Entities)</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-5">
            {sadStatusData.factions.map((faction, i) => (
              <div key={i} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{faction.name}</span>
                  <Badge variant={faction.status === "Official" ? "success" : faction.status === "Faction" ? "warning" : "default"}>
                    {faction.status}
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{faction.leader}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panthic Issues */}
        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-100/50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Panthic Credibility Crisis</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Akal Takht Action</p>
              <p className="mt-1 text-sm font-medium text-red-600">{sadStatusData.panthicIssues.akalTakhtAction}</p>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">SGPC Control</p>
              <p className="mt-1 text-sm font-medium text-orange-600">{sadStatusData.panthicIssues.sgpcControl}</p>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Overall Impact</p>
              <p className="mt-1 text-sm font-medium text-red-600">{sadStatusData.panthicIssues.impact}</p>
            </div>
          </div>
        </div>

        {/* Mini Chart: Vote Share Trend */}
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Vote Share Trend</h4>
            <div className="mt-4">
              <MiniChart
                data={[40, 38, 35, 32, 28, 26]}
                color="bg-yellow-500"
                height={60}
              />
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>2017</span>
                <span>2022</span>
                <span>2024 LS</span>
                <span>Tarn Taran</span>
              </div>
            </div>
          </div>

          {/* Congress vs SAD vs AAP comparison */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">2024 LS Vote Share (Punjab)</h4>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Congress</span>
                  <span className="font-medium text-blue-600">26.30%</span>
                </div>
                <ProgressBar label="" value={26.3} color="bg-blue-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">AAP</span>
                  <span className="font-medium text-red-600">41.20%</span>
                </div>
                <ProgressBar label="" value={41.2} color="bg-red-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">SAD</span>
                  <span className="font-medium text-yellow-600">21.80%</span>
                </div>
                <ProgressBar label="" value={21.8} color="bg-yellow-500" showPercentage={false} />
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">BJP</span>
                  <span className="font-medium text-orange-600">18.56%</span>
                </div>
                <ProgressBar label="" value={18.56} color="bg-orange-500" showPercentage={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AAP FINANCIAL WAR CHEST - from MP3-005 */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          AAP Financial Resources & War Chest
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          AAP vs Congress financial comparison for Punjab 2027
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="AAP Donations (FY 24-25)"
            value="₹38.1 Cr"
            subtitle="Tripled from ₹11.06 Cr in FY 23-24"
            change={244}
            trend="up"
            color="bg-orange-500"
          />
          <MetricCard
            title="Congress Donations (FY 24-25)"
            value="₹517.4 Cr"
            subtitle="13.6x more than AAP nationally"
            color="bg-blue-500"
          />
          <MetricCard
            title="Development Fund"
            value="₹585 Cr"
            subtitle="Rangla Punjab Vikas Scheme"
            color="bg-green-500"
          />
          <MetricCard
            title="Per Constituency"
            value="₹5 Cr"
            subtitle="117 constituencies × ₹5L each"
            color="bg-orange-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2022 Punjab Campaign (Central HQ)</p>
            <p className="text-2xl font-bold text-orange-600">₹6.23 Cr</p>
            <p className="text-xs text-slate-500">vs SAD's ₹16.57 Cr (same election)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">ECI Expenditure Limit</p>
            <p className="text-2xl font-bold text-orange-600">₹40 Lakh</p>
            <p className="text-xs text-slate-500">Per candidate for Punjab Assembly</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Debt Burden</p>
            <p className="text-2xl font-bold text-red-600">₹4.17L Cr</p>
            <p className="text-xs text-slate-500">Projected March 2026 (from ₹2.83L Cr in 2022)</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Donor Composition (FY 2024-25)</p>
          <div className="mt-2 grid grid-cols-4 gap-4 text-xs">
            <div><span className="text-slate-500">Prudent Electoral Trust:</span> <span className="font-medium">₹16.4 Cr (43%)</span></div>
            <div><span className="text-slate-500">Jindal Steel & Power:</span> <span className="font-medium">Via Trust</span></div>
            <div><span className="text-slate-500">Megha Engineering:</span> <span className="font-medium">Via Trust</span></div>
            <div><span className="text-slate-500">Bharti Airtel:</span> <span className="font-medium">Via Trust</span></div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-orange-200 bg-orange-100/50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
          <p className="text-sm font-medium text-orange-600">Advantage: Ruling Party Access to Development Funds</p>
          <p className="text-xs text-slate-600 mt-1">Timing of welfare announcements, MLA-linked constituency funds (₹5L each), government ad spending (₹10.59 Cr alleged "reputation management")</p>
        </div>
      </div>

      {/* AAP DIGITAL & SOCIAL MEDIA - from MP3-006 */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          AAP Digital & Social Media Capabilities
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          WhatsApp-centric war room model; volunteer-driven digital army
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="WhatsApp Reach/Hour"
            value="7 Lakh"
            subtitle="Single group message reach (2017 baseline)"
            color="bg-purple-500"
          />
          <MetricCard
            title="Punjab Internet Penetration"
            value="84%"
            subtitle="NITI Aayog 2020-21; highest in India"
            color="bg-green-500"
          />
          <MetricCard
            title="Digital Volunteers"
            value="450+"
            subtitle="2017 Punjab social media team size"
            color="bg-purple-500"
          />
          <MetricCard
            title="Proxy Ads Spend"
            value="₹14 Lakh"
            subtitle="5,900+ ads on Facebook (Mar 2023-Dec 2024)"
            color="bg-red-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Twitter/X Followers (2022)</p>
            <p className="text-2xl font-bold text-purple-600">1.52 Lakh</p>
            <p className="text-xs text-slate-500">AAP Punjab account</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Facebook Followers (2022)</p>
            <p className="text-2xl font-bold text-purple-600">17.63 Lakh</p>
            <p className="text-xs text-slate-500">AAP Punjab account</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Mann Instagram (2022)</p>
            <p className="text-2xl font-bold text-purple-600">23 Lakh</p>
            <p className="text-xs text-slate-500">Highest among Punjab politicians</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2025 Structural Appointments</p>
          <div className="mt-2 grid grid-cols-3 gap-4 text-xs">
            <div><span className="font-medium">Zone Coordinators:</span> 5 (Doaba, Majha, Malwa Central/East/West)</div>
            <div><span className="font-medium">Zone Secretaries:</span> 5</div>
            <div><span className="font-medium">District Social Media:</span> Appointees across 28 districts</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
          <p className="text-sm font-medium text-purple-600">Vulnerability: Volunteer Model Fragility</p>
          <p className="text-xs text-slate-600 mt-1">Passion-driven volunteers (not paid); 8 MLA defections to BJP (2024-25) demonstrate organizational fragility; tech infrastructure weak (2017: no laptops for social media team)</p>
        </div>
      </div>

      {/* AAP BOOTH-LEVEL MACHINERY - from MP3-007 */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">
          AAP Booth-Level Election Machinery
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Volunteer-dependent, technology-enabled network
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Total Booths"
            value="13,000+"
            subtitle="Across 117 assembly constituencies"
            color="bg-cyan-500"
          />
          <MetricCard
            title="AAP Volunteers (2016)"
            value="~1 Lakh"
            subtitle="Party claim for 2017 elections; no updated figure"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Volunteer Ratio"
            value="1:15-20"
            subtitle="1 volunteer per 15-20 households at peak"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Congress Booth Sevaks"
            value="25,000"
            subtitle="+ 1.25 Lakh assistants (May 2026)"
            color="bg-red-500"
          />
        </div>
        <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Booth Organization Hierarchy</p>
          <div className="mt-2 space-y-2 text-xs">
            <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">MLA</span><span className="text-slate-500">→ Elected representative, public face</span></div>
            <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Constituency In-charge</span><span className="text-slate-500">→ Appointed by state president (June 2025)</span></div>
            <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Booth-level volunteers</span><span className="text-slate-500">→ ~8-15 per booth</span></div>
            <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Mandal</span><span className="text-slate-500">→ Cluster of 8-10 booths</span></div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-100/50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-600">Critical Weaknesses Identified</p>
          <div className="mt-1 text-xs text-slate-600 space-y-1">
            <p>1. Rural Depth Deficit: Volunteer base concentrated in urban/semi-urban areas</p>
            <p>2. Caste-Community Anchoring: No organic networks like SAD (Sikh rural) or Congress (SC/OBC)</p>
            <p>3. Local Leadership Vacuum: First-time MLAs lack generational political networks</p>
            <p>4. Volunteer Motivation Erosion: Broken promises, governance failures, 8 MLA defections</p>
          </div>
        </div>
      </div>

      {/* AAP ALLY/ENEMY RELATIONSHIPS - from MP3-008 */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
          AAP Ally & Enemy Relationships in Punjab
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          No formal allies; open hostility with BJP; rivalry with Congress
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Formal Allies"
            value="0"
            subtitle="AAP has NO allies in Punjab (2025-2026)"
            color="bg-red-500"
          />
          <MetricCard
            title="RS MP Defections (Apr 2026)"
            value="7 of 10"
            subtitle="Crossed to BJP; AAP reduced from 10 to 3 RS MPs"
            color="bg-red-500"
          />
          <MetricCard
            title="MLA Defection Risk"
            value="30"
            subtitle="Reportedly in touch with Congress (Feb 2025 claim)"
            color="bg-red-500"
          />
          <MetricCard
            title="BJP Vote Share Growth"
            value="5.4%→18.5%"
            subtitle="2017 (with SAD) to 2024 Lok Sabha (solo)"
            color="bg-red-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-red-600">Enemies</p>
            <div className="mt-2 space-y-2 text-xs">
              <div><span className="font-medium">BJP:</span> Primary adversary; "anti-Punjab" on farm laws, Chandigarh, SYL canal; PM Modi to make Punjab "AAP-free"</div>
              <div><span className="font-medium">Congress:</span> Electoral rival; "two sides of same coin" per Congress leader</div>
              <div><span className="font-medium">SAD:</span> Competes for Sikh voter base; SAD accuses RSS of infiltrating Sikh shrines</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-orange-600">Internal Factions</p>
            <div className="mt-2 space-y-2 text-xs">
              <div><span className="font-medium">Delhi vs Punjab:</span> Kejriwal accused of remotely controlling Mann government</div>
              <div><span className="font-medium">Outsider vs Punjab:</span> Rajya Sabha nominations for non-Punjabis (Sandeep Pathak-Chhattisgarh, Raghav Chadha-Delhi)</div>
              <div><span className="font-medium">Defector Faction:</span> 7 MPs (incl. Chadha "super CM", Pathak strategist) → BJP April 2026</div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-100/50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
          <p className="text-sm font-medium text-yellow-600">2027 Alliance Probability: NIL</p>
          <p className="text-xs text-slate-600 mt-1">AAP and Congress will go solo in Punjab 2027. INDIA alliance at national level does NOT extend to Punjab. Mann: "AAP will get 13 seats" (Jan 2024) — confirming no seat-sharing.</p>
        </div>
      </div>

      {/* AAP GOVERNANCE RECORD CARD - from MP3-003 */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance Record: 5 Guarantees Scorecard (2022-2026)
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Delivery assessment based on MP3-003 research
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <Badge variant="success">FULFILLED</Badge>
            <div className="flex-1">
              <span className="text-sm font-medium text-green-700 dark:text-green-400">300 Units Free Electricity</span>
              <span className="ml-2 text-xs text-slate-500">— Rs 23,953 Cr interest burden (23% of revenue); Punjab became first state to implement</span>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <Badge variant="danger">BROKEN</Badge>
            <div className="flex-1">
              <span className="text-sm font-medium text-red-700 dark:text-red-400">Rs 1,000/Month for Women</span>
              <span className="ml-2 text-xs text-slate-500">— No disbursement as of March 2025; 4th consecutive budget without allocation; cost: Rs 12,000 Cr/month for ~1 Cr women</span>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <Badge variant="danger">BROKEN</Badge>
            <div className="flex-1">
              <span className="text-sm font-medium text-red-700 dark:text-red-400">25 Lakh Jobs</span>
              <span className="ml-2 text-xs text-slate-500">— No significant job creation; youth immigration continues; NRI emigration to Canada/UK/Australia</span>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <Badge variant="danger">BROKEN</Badge>
            <div className="flex-1">
              <span className="text-sm font-medium text-red-700 dark:text-red-400">Drug-Free Punjab</span>
              <span className="ml-2 text-xs text-slate-500">— 4 deadlines missed (pre-2022: 3 months; Aug 2023; Dec 2024; Feb 2025); deaths: 89(2023)→106(2024); 1 in 7 Punjab residents consumes drugs</span>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <Badge variant="warning">PARTIAL</Badge>
            <div className="flex-1">
              <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400">World-Class Health/Education</span>
              <span className="ml-2 text-xs text-slate-500">— 400+ Mohalla Clinics delivered vs 500 promised; 50% specialist doctor posts vacant; 984/1,927 principal posts vacant (51%)</span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Debt Trajectory</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>March 2022:</span><span className="font-medium">₹2.83L Cr</span></div>
              <div className="flex justify-between"><span>2022-23:</span><span className="font-medium">₹3.14L Cr</span></div>
              <div className="flex justify-between"><span>2023-24:</span><span className="font-medium">₹3.46L Cr</span></div>
              <div className="flex justify-between"><span>2024-25:</span><span className="font-medium">₹3.83L Cr</span></div>
              <div className="flex justify-between border-t pt-1"><span>Projected 2026:</span><span className="font-medium text-red-600">₹4.17L Cr</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Drug Crisis Data</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Deaths 2023:</span><span className="font-medium">89</span></div>
              <div className="flex justify-between"><span>Deaths 2024:</span><span className="font-medium text-red-600">106 (2nd highest India)</span></div>
              <div className="flex justify-between"><span>Drug consumers:</span><span className="font-medium">15.4% of population</span></div>
              <div className="flex justify-between"><span>Encounters Jan-Mar 2025:</span><span className="font-medium">41</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Fiscal Situation</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Debt-to-GSDP:</span><span className="font-medium">~47%</span></div>
              <div className="flex justify-between"><span>Interest/Revenue:</span><span className="font-medium">22.72%</span></div>
              <div className="flex justify-between"><span>Power Subsidy:</span><span className="font-medium">~23%</span></div>
              <div className="flex justify-between"><span>Committed Exp:</span><span className="font-medium text-red-600">122% of revenue</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* AAP 2027 STRATEGY INTELLIGENCE - from MP3-010 */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
          AAP 2027 Election Strategy Intelligence
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Incumbent defense strategy; going solo; Malwa focus
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="AAP Seat Claim (2027)"
            value="100+"
            subtitle="Manish Sisodia claim (unverified)"
            color="bg-indigo-500"
          />
          <MetricCard
            title="Realistic 2027 Projection"
            value="32-39"
            subtitle="April 2026 opinion polls"
            trend="down"
            color="bg-red-500"
          />
          <MetricCard
            title="CM Candidate"
            value="Bhagwant Mann"
            subtitle="Unchanged; no succession plan visible"
            color="bg-indigo-500"
          />
          <MetricCard
            title="Alliance Status"
            value="SOLO"
            subtitle="No pre-poll alliances; going alone"
            color="bg-indigo-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Strategic Shifts</p>
            <div className="mt-2 space-y-2 text-xs">
              <div><span className="font-medium text-indigo-600">Relocated to Punjab:</span> Delhi strategy team moved post-Delhi defeat (Feb 2025)</div>
              <div><span className="font-medium text-indigo-600">War Room:</span> Chandigarh-based dedicated election war room established</div>
              <div><span className="font-medium text-indigo-600">Rebranding:</span> "Delhi Model" → "Kejriwal Model" (Punjabi edition launched)</div>
              <div><span className="font-medium text-indigo-600">Regional Focus:</span> Heavy Malwa concentration (69/117 seats)</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">New Policy Initiatives 2027</p>
            <div className="mt-2 space-y-2 text-xs">
              <div><span className="font-medium text-indigo-600">Anti-Sacrilege Bill:</span> Life imprisonment/death penalty; Panthic voter appeal</div>
              <div><span className="font-medium text-indigo-600">Women Stipend:</span> Rs 1,000/month (announced March 2026, ~8 months before expected Feb 2027 election)</div>
              <div><span className="font-medium text-indigo-600">Mukh Mantri Sehat Bima:</span> Rs 10 lakh cover for 65 lakh families (Jan 2026)</div>
              <div><span className="font-medium text-indigo-600">Holy City Status:</span> Amritsar and Sri Anandpur Sahib</div>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-100/50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-600">Critical Intelligence Gaps</p>
          <div className="mt-1 text-xs text-slate-600 space-y-1">
            <p>• Booth-level organization specifics (no disclosed voter contact methodology)</p>
            <p>• Digital campaign budget (no figures available)</p>
            <p>• Mann's CM candidacy (internal deliberations opaque)</p>
            <p>• Scheme sustainability funding (no disclosed fiscal plan for Rs 1,000/month given depleted exchequer)</p>
            <p>• Defection impact (organizational damage from 7 MP defections unquantified)</p>
          </div>
        </div>
      </div>

      {/* MP9-003 & MP9-014: Budget Allocation & Cost Benchmarks */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
          MP9 Resources — Budget Allocation & Cost Benchmarks
        </h3>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          Budget head % • Constituency tiers • Cost-per-vote • AICC allocation (MP9-003, MP9-014)
        </p>

        {/* Budget Head % Allocations */}
        <h4 className="mt-4 font-semibold text-emerald-900 dark:text-emerald-100">Consolidated Budget Allocation (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Media & Advertising</p>
            <p className="text-xl font-bold text-emerald-600">35-40%</p>
            <p className="text-xs text-slate-500">Rs 17.5-35 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Transportation & Fleet</p>
            <p className="text-xl font-bold text-emerald-600">20-25%</p>
            <p className="text-xs text-slate-500">Rs 12-20 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Staffing & Consultants</p>
            <p className="text-xl font-bold text-emerald-600">8-10%</p>
            <p className="text-xs text-slate-500">Rs 4-8 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Events & Rallies</p>
            <p className="text-xl font-bold text-emerald-600">12-15%</p>
            <p className="text-xs text-slate-500">Rs 7-12 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Logistics & Infrastructure</p>
            <p className="text-xl font-bold text-emerald-600">5-8%</p>
            <p className="text-xs text-slate-500">Rs 3-6 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Legal & Compliance</p>
            <p className="text-xl font-bold text-emerald-600">2-3%</p>
            <p className="text-xs text-slate-500">Rs 1.5-3 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Emergency Reserve</p>
            <p className="text-xl font-bold text-emerald-600">10-15%</p>
            <p className="text-xs text-slate-500">Rs 7.5-12 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">TOTAL</p>
            <p className="text-xl font-bold text-emerald-600">Rs 52-96 Cr</p>
            <p className="text-xs text-slate-500">Min to Optimal</p>
          </div>
        </div>

        {/* Constituency Tier Allocation */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Constituency Tier Allocation (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-emerald-600">Battleground (15-20 seats)</span>
              <Badge variant="danger">2.5-3x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">Swing seats with 8,000 vote margin. 60% of discretionary spend allocated here.</p>
            <p className="mt-1 text-sm font-semibold">Rs 40-50 L per AC</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-yellow-600">Swing (30-40 seats)</span>
              <Badge variant="warning">1.5-2x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">30% of discretionary spend. Targeted outreach.</p>
            <p className="mt-1 text-sm font-semibold">Rs 25-35 L per AC</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-600">Safe (60+ seats)</span>
              <Badge variant="success">1x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">10% of discretionary spend. Maintenance mode.</p>
            <p className="mt-1 text-sm font-semibold">Rs 15-20 L per AC</p>
          </div>
        </div>

        {/* Cost-Per-Vote Benchmarks */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Cost-Per-Vote Benchmarks (MP9-014)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Congress 2022 Actual</p>
            <p className="text-lg font-bold text-emerald-600">Rs 18.01 L</p>
            <p className="text-xs text-slate-500">Per winning MLA (~45% of limit)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">AAP 2022 Winning Avg</p>
            <p className="text-lg font-bold text-emerald-600">Rs 17.66 L</p>
            <p className="text-xs text-slate-500">Per winning MLA</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">ECI Spending Limit</p>
            <p className="text-lg font-bold text-red-600">Rs 40 L</p>
            <p className="text-xs text-slate-500">Per candidate (2022 Punjab)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Competitive Threshold</p>
            <p className="text-lg font-bold text-orange-600">Rs 20-25 L</p>
            <p className="text-xs text-slate-500">Per candidate for viable campaign</p>
          </div>
        </div>

        {/* AICC Allocation Details */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">AICC Allocation to Punjab (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">National Reserve Estimate</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Congress all-India reserves (2024):</span><span className="font-medium">Rs 133 Cr</span></div>
              <div className="flex justify-between"><span>Punjab allocation (30-40%):</span><span className="font-medium">Rs 40-53 Cr</span></div>
              <div className="flex justify-between"><span>Small donor projection:</span><span className="font-medium">Rs 5-10 Cr</span></div>
              <div className="flex justify-between border-t pt-1"><span>Estimated Punjab total:</span><span className="font-bold">Rs 45-63 Cr</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Fund Release Tranches (MP9-003)</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Tranche 1 (Nominations):</span><span className="font-medium">20% of allocation</span></div>
              <div className="flex justify-between"><span>Tranche 2 (Campaign mid-point):</span><span className="font-medium">50% of allocation</span></div>
              <div className="flex justify-between"><span>Tranche 3 (Final week):</span><span className="font-medium">30% of allocation</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Milestone-based release:</span><span className="font-medium">ECI compliance</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* MP9-004: Peak Staff Structure */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
          MP9-004: Peak Staff Structure — 370 Personnel
        </h3>
        <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
          War room staffing model • Command structure • Consultant roles
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Core Leadership</p>
            <p className="text-lg font-bold text-amber-600">8-10</p>
            <p className="text-xs text-slate-500">Campaign Mgr, Finance, Field, Comms, Data, Rapid Response</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">State HQ Staff</p>
            <p className="text-lg font-bold text-amber-600">25-35</p>
            <p className="text-xs text-slate-500">Digital, Research, Compliance, Logistics</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">District Coordinators</p>
            <p className="text-lg font-bold text-amber-600">69-92</p>
            <p className="text-xs text-slate-500">23 districts x 3-4 staff (Field, Comms, Data)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Constituency Staff</p>
            <p className="text-lg font-bold text-amber-600">117-234</p>
            <p className="text-xs text-slate-500">117 ACs x 1-2 coordinators (optional per AC)</p>
          </div>
        </div>

        <h4 className="mt-4 font-semibold text-amber-900 dark:text-amber-100">War Room Command Structure</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Strategy Unit</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Message planning</p>
              <p>• Constituency prioritization</p>
              <p>• Voter segmentation</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Data & Analytics Unit</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Voter data management</p>
              <p>• Booth-level reports</p>
              <p>• Digital metrics, survey inputs</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Media & Communication</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Press coordination</p>
              <p>• Narrative control</p>
              <p>• Social media operations</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Field Coordination</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Booth workers</p>
              <p>• Mandal pradhans</p>
              <p>• Ground-level execution</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Rapid Response</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Misinformation rebuttal</p>
              <p>• Opposition attack response</p>
              <p>• Crisis communication</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Legal & Logistics Cell</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• ECI compliance</p>
              <p>• EVM management</p>
              <p>• MCC violation response</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Note:</strong> Staff costs should not exceed 10% of total campaign budget. Peak 370 includes consultants (Inclusive Minds/I-PAC retainer) and fellowship positions (IIT/IIM recruits).
          </p>
        </div>
      </div>

      {/* MP9-008: Rally Venue & Device Procurement */}
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-800 dark:bg-rose-900/20">
        <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">
          MP9-008: Rally Venue Specifications & Device Procurement
        </h3>
        <p className="mt-1 text-sm text-rose-600 dark:text-rose-400">
          Event logistics • Material management • Vendor strategy
        </p>

        {/* Rally Venue Specifications */}
        <h4 className="mt-4 font-semibold text-rose-900 dark:text-rose-100">Rally Venue Specifications (MP9-008)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-rose-600">Jumbo Rally (State-Level)</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Expected turnout: 25,000-50,000</p>
              <p>• Venue: Stadium/open ground (2-5 acres)</p>
              <p>• Stage: 30x20 ft with LED backdrop</p>
              <p>• Sound: 50,000W system (2 speakers)</p>
              <p>• Security: 200+ personnel</p>
              <p>• Budget: Rs 8-15 L per event</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-rose-600">District Rally</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Expected turnout: 5,000-15,000</p>
              <p>• Venue: College ground/public park</p>
              <p>• Stage: 20x15 ft standard</p>
              <p>• Sound: 20,000W system</p>
              <p>• Security: 75-100 personnel</p>
              <p>• Budget: Rs 2-5 L per event</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-rose-600">Nukkad Sabah (Booth-Level)</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Expected turnout: 200-500</p>
              <p>• Venue: Village chaupal/intersection</p>
              <p>• Stage: Portable podium (6x4 ft)</p>
              <p>• Sound: Portable 5,000W system</p>
              <p>• Security: 10-15 volunteers</p>
              <p>• Budget: Rs 15-30 K per event</p>
            </div>
          </div>
        </div>

        {/* Device Procurement Table */}
        <h4 className="mt-6 font-semibold text-rose-900 dark:text-rose-100">Device Procurement Table (MP9-006, MP9-008)</h4>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-white dark:bg-slate-800">
                <th className="px-3 py-2 text-left font-medium text-slate-600">Item</th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">Quantity</th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">Unit Cost</th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">Total (117 ACs)</th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">Vendor</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr className="bg-white dark:bg-slate-800">
                <td className="px-3 py-2">Smartphone (Field Staff)</td>
                <td className="px-3 py-2">350-400 units</td>
                <td className="px-3 py-2">Rs 8-12K</td>
                <td className="px-3 py-2">Rs 28-48 L</td>
                <td className="px-3 py-2">Bulk corporate deal</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="px-3 py-2">4G Data SIMs (Annual)</td>
                <td className="px-3 py-2">400-500</td>
                <td className="px-3 py-2">Rs 3-5K/yr</td>
                <td className="px-3 py-2">Rs 12-25 L</td>
                <td className="px-3 py-2">Airtel/Jio B2B</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="px-3 py-2">Portable Projector + Screen</td>
                <td className="px-3 py-2">117 sets</td>
                <td className="px-3 py-2">Rs 25-40K</td>
                <td className="px-3 py-2">Rs 29-47 L</td>
                <td className="px-3 py-2">Rate contract</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="px-3 py-2">Portable Sound System</td>
                <td className="px-3 py-2">117 sets</td>
                <td className="px-3 py-2">Rs 15-25K</td>
                <td className="px-3 py-2">Rs 18-29 L</td>
                <td className="px-3 py-2">Rate contract</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800">
                <td className="px-3 py-2">LED Display Van (Rental)</td>
                <td className="px-3 py-2">234 units (2/AC)</td>
                <td className="px-3 py-2">Rs 18-30K/mo</td>
                <td className="px-3 py-2">Rs 1.9 L/AC (3mo)</td>
                <td className="px-3 py-2">Local vendors</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-700">
                <td className="px-3 py-2">Vehicle GPS Tracker</td>
                <td className="px-3 py-2">350-400 units</td>
                <td className="px-3 py-2">Rs 2-3K</td>
                <td className="px-3 py-2">Rs 7-12 L</td>
                <td className="px-3 py-2">TrackoMate/Geo-fy</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Material Cost Breakdown */}
        <h4 className="mt-6 font-semibold text-rose-900 dark:text-rose-100">Per Constituency Campaign Materials (MP9-008)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Banners/Posters</p>
            <p className="text-lg font-bold text-rose-600">Rs 50K-1.5L</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">T-Shirts/Apparel</p>
            <p className="text-lg font-bold text-rose-600">Rs 75K-2L</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Flags/Badges</p>
            <p className="text-lg font-bold text-rose-600">Rs 25K-75K</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Giveaways/Custom</p>
            <p className="text-lg font-bold text-rose-600">Rs 1-3L</p>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-rose-100 p-3 dark:bg-rose-900/40">
          <p className="text-sm text-rose-700 dark:text-rose-300">
            <strong>Total statewide material:</strong> Rs 3.6-10.6 Cr | Vendor panels: 3+ vendors per district, 24-48hr rush order capability required.
          </p>
        </div>
      </div>

      {/* MP9-009: Nomination Filing & MCC Response */}
      <div className="rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-900/20">
        <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-400">
          MP9-009: Nomination Filing Assistance & MCC Violation Response
        </h3>
        <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">
          ECI compliance • Pre-certification • 48-hour silence period • cVIGIL protocols
        </p>

        {/* Nomination Filing Assistance */}
        <h4 className="mt-4 font-semibold text-violet-900 dark:text-violet-100">Nomination Filing Assistance (MP9-009)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-violet-600">Required Documents Checklist</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Form A: Nomination paper (Schedule III)</p>
              <p>• Form B: Affidavit (criminal records, assets)</p>
              <p>• Photo ID: Aadhaar/Voter ID/Passport</p>
              <p>• Address proof: Utility bill/bank statement</p>
              <p>• Party affiliation: Congress ticket letter</p>
              <p>• Symbol allotment: AICC authority letter</p>
              <p>• Filing date: 4th to 10th day after notice</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-violet-600">Filing Support Structure</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• 23 District Legal Nodal Points (5 lawyers each)</p>
              <p>• 115 total lawyers for Punjab</p>
              <p>• 10 Senior Advocates: Punjab & Haryana HC</p>
              <p>• 2-3 Senior Advocates on standby: Supreme Court</p>
              <p>• Real-time legal ops center at PPCC (MCC period)</p>
              <p>• 12-hour shifts during filing window</p>
            </div>
          </div>
        </div>

        {/* MCC Violation Response Protocols */}
        <h4 className="mt-6 font-semibold text-violet-900 dark:text-violet-100">MCC Violation Response Protocols (MP9-009)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <Badge variant="danger">Level 1: Prevent</Badge>
            <p className="mt-2 text-xs text-slate-600">Pre-certification workflow for all ads. 72hr advance submission to DEO. Mandatory legal review for attack scripts.</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <Badge variant="warning">Level 2: Detect</Badge>
            <p className="mt-2 text-xs text-slate-600">230+ cVIGIL operators (10/district). GPS-verified complaint filing. Evidence capture training.</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <Badge variant="info">Level 3: Report</Badge>
            <p className="mt-2 text-xs text-slate-600">cVIGIL app to DEO. Target: AAP Rs 1,000/mo women entitlement, broken promises documentation.</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <Badge variant="success">Level 4: Respond</Badge>
            <p className="mt-2 text-xs text-slate-600">3 advocate teams per administrative division. 2-hour on-ground response. Post-election use for petitions.</p>
          </div>
        </div>

        {/* 48-Hour Silence Period */}
        <h4 className="mt-6 font-semibold text-violet-900 dark:text-violet-100">48-Hour Silence Period Rules (MP9-009)</h4>
        <div className="mt-3 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-red-600">PROHIBITED Activities</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600">
                <p>• Public rallies, meetings, processions</p>
                <p>• Print/electronic/social media ads</p>
                <p>• Door-to-door canvassing</p>
                <p>• Campaign material distribution</p>
                <p>• Opinion polls, exit polls</p>
                <p>• Likes/shares/engagement with political content</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">PERMITTED Activities</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600">
                <p>• Static hoardings (installed before silence)</p>
                <p>• Candidate at own residence</p>
                <p>• Essential election official duties</p>
                <p>• Media reporting (without campaigning)</p>
                <p>• EVM counting on polling day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Certification Workflow */}
        <h4 className="mt-6 font-semibold text-violet-900 dark:text-violet-100">Pre-Certification Workflow (Updated March 2026)</h4>
        <div className="mt-3 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white font-bold">1</div>
              <span className="text-slate-600">Content draft + legal review</span>
            </div>
            <div className="h-px flex-1 bg-slate-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white font-bold">2</div>
              <span className="text-slate-600">Submit to CEO/DEO (72hr before)</span>
            </div>
            <div className="h-px flex-1 bg-slate-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white font-bold">3</div>
              <span className="text-slate-600">Platform submission (Meta/Google)</span>
            </div>
            <div className="h-px flex-1 bg-slate-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">4</div>
              <span className="text-slate-600">Deploy after certificate</span>
            </div>
          </div>
        </div>
      </div>

      {/* SYNTHESIS M1: Campaign Strategy & Narrative Architecture */}
      <div className="mt-6 rounded-xl border-2 border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
            M1
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">MEGA-PILLAR 4: Campaign Strategy & Narrative Architecture</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Punjab Congress 2027 Election Intelligence | May 2026</p>
          </div>
        </div>

        {/* Core Narrative Framework */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">Core Narrative Framework</h4>
          <div className="rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-4 dark:from-cyan-900/40 dark:to-blue-900/40">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-cyan-700">Anubhav + Imandari</p>
                <p className="text-xs text-slate-500">Congress: Experience + Honesty</p>
              </div>
              <span className="text-2xl font-bold text-slate-400">vs</span>
              <div className="text-center">
                <p className="text-xl font-bold text-red-700">Anubhavheen + Jhuthe Wade</p>
                <p className="text-xs text-slate-500">AAP: Failed Experience + Empty Promises</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Imperative */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">Strategic Imperative</h4>
          <div className="space-y-2 text-sm">
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-cyan-600">Position:</span> Congress as the natural alternative governance party
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-cyan-600">Character:</span> Party of "Experienced, Inclusive, Punjab-First" leadership
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-cyan-600">Window:</span> AAP governance failures have created a vacuum - 9 months to February 2027
            </p>
          </div>
        </div>

        {/* Voter Persona Matrix Summary */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">25 Voter Personas with Emotional Triggers</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-blue-200 p-3 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-700">Marginal Jat Sikh Farmer</p>
              <p className="text-xs text-slate-500">35-55 yrs | Malwa | MSP, debt</p>
              <p className="text-xs text-blue-600 mt-1">Emotion: Anger + Pride</p>
            </div>
            <div className="rounded-lg border border-green-200 p-3 dark:border-green-800">
              <p className="text-sm font-semibold text-green-700">Large Jat Sikh Landowner</p>
              <p className="text-xs text-slate-500">45-70 yrs | Malwa | Market prices</p>
              <p className="text-xs text-green-600 mt-1">Emotion: Pragmatic</p>
            </div>
            <div className="rounded-lg border border-orange-200 p-3 dark:border-orange-800">
              <p className="text-sm font-semibold text-orange-700">Mazhabi Sikh Laborer</p>
              <p className="text-xs text-slate-500">25-50 yrs | Ferozepur/Fazilka | MNREGA, drugs</p>
              <p className="text-xs text-orange-600 mt-1">Emotion: Desperation</p>
            </div>
            <div className="rounded-lg border border-red-200 p-3 dark:border-red-800">
              <p className="text-sm font-semibold text-red-700">Ramdasia SC Youth</p>
              <p className="text-xs text-slate-500">18-30 yrs | Doaba | Jobs</p>
              <p className="text-xs text-red-600 mt-1">Emotion: Frustration</p>
            </div>
            <div className="rounded-lg border border-purple-200 p-3 dark:border-purple-800">
              <p className="text-sm font-semibold text-purple-700">Urban Sikh Professional</p>
              <p className="text-xs text-slate-500">28-45 yrs | Urban | Governance</p>
              <p className="text-xs text-purple-600 mt-1">Emotion: Cynical</p>
            </div>
            <div className="rounded-lg border border-pink-200 p-3 dark:border-pink-800">
              <p className="text-sm font-semibold text-pink-700">Rural Sikh Woman</p>
              <p className="text-xs text-slate-500">30-55 yrs | All | Family safety</p>
              <p className="text-xs text-pink-600 mt-1">Emotion: Fear + Hope</p>
            </div>
          </div>
        </div>

        {/* Micro-Targeting Framework */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">Micro-Targeting Framework</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">1</span>
              <span className="text-sm">Voter Universe = Total Votes in 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">2</span>
              <span className="text-sm">Swing % = Estimated swing voters (typically 15-20%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">3</span>
              <span className="text-sm">Target Swing Votes = Voter Universe × Swing %</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">4</span>
              <span className="text-sm">Required Contact = Target Swing Votes × 3 (contact attempts per voter)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">5</span>
              <span className="text-sm">Campaign Window = 45 days pre-election</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">6</span>
              <span className="text-sm font-semibold">Daily Contacts Needed = Required Contact / Campaign Window</span>
            </div>
          </div>
        </div>

        {/* Language-Specific Messaging */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3">Language-Specific Messaging</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Punjabi (Gurmukhi)</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">"AAP ne kiya? 4 saal, kuch nahi. Congress laayega tabdeeli."</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Punjabi (Roman)</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">"AAP promised. AAP failed. Congress delivers."</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Hindi</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">"4 साल, शून्य नतीजा - कांग्रेस लाएगी बदलाव"</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">English</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">"Experience matters. Results, not rhetoric."</p>
            </div>
          </div>
        </div>

        {/* Regional Strategy */}
        <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/30">
          <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Regional Strategy Summary</h4>
          <div className="grid gap-2 md:grid-cols-3 text-xs">
            <div>
              <p className="font-semibold text-blue-600">MALWA (69 Seats)</p>
              <p className="text-slate-600">Anti-incumbency focus, MSP + drug message, local candidate selection</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600">DOABA (23 Seats)</p>
              <p className="text-slate-600">Dalit vote recapture, Dera Ballan engagement, jobs promise</p>
            </div>
            <div>
              <p className="font-semibold text-green-600">MAJHA (25 Seats)</p>
              <p className="text-slate-600">Protect base, border security, Hindu outreach in urban</p>
            </div>
          </div>
        </div>
      </div>

      {/* A-02 RESEARCH EXTRACTION: Congress Party Intelligence 2026 */}

      {/* Congress Funding Crisis - from A-02-04 */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">F</span>
          <div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Congress Party Funding Crisis</h3>
            <p className="text-sm text-red-600 dark:text-red-400">BJP outraises Congress 12:1 | FY 2024-25 ADR Data</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="BJP Donations (FY 24-25)"
            value="₹6,074 Cr"
            subtitle="+171% from previous year"
            change={171}
            trend="up"
            color="bg-blue-500"
          />
          <MetricCard
            title="Congress Donations (FY 24-25)"
            value="₹517 Cr"
            subtitle="+84% from previous year"
            change={84}
            trend="up"
            color="bg-red-500"
          />
          <MetricCard
            title="Funding Ratio"
            value="12:1"
            subtitle="BJP outraises Congress"
            trend="down"
            color="bg-red-500"
          />
          <MetricCard
            title="Market Share"
            value="91%"
            subtitle="Of all political donations go to BJP"
            color="bg-red-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Corporate Donor Breakdown (FY 2024-25)</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">BJP Corporate Donations:</span><span className="font-medium text-blue-600">₹5,717 Cr</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress Corporate Donations:</span><span className="font-medium text-red-600">₹384 Cr</span></div>
              <div className="flex justify-between border-t pt-2"><span className="text-slate-500">BJP Corporate Donors:</span><span className="font-medium">2,794 companies</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress Corporate Donors:</span><span className="font-medium">112 companies</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Top Donors to BJP</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Prudent Electoral Trust:</span><span className="font-medium text-blue-600">₹2,180 Cr (35.9%)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Progressive Electoral Trust:</span><span className="font-medium">₹834 Cr</span></div>
              <div className="flex justify-between"><span className="text-slate-500">AB General Electoral Trust:</span><span className="font-medium">₹621 Cr</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Serum Institute:</span><span className="font-medium">₹100 Cr</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Critical Impact:</strong> Limited funds = fewer candidates supported. New/young candidates without independent resources at disadvantage. Central command maintains tighter control with limited resources.
          </p>
        </div>
      </div>

      {/* Congress Alliance Analysis - from A-02-05 */}
      <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-lg font-bold text-white">A</span>
          <div>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Congress Alliance Strategy 2027</h3>
            <p className="text-sm text-yellow-600 dark:text-yellow-400">Going Solo | Mathematical majority gap | Post-poll scenarios</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Pre-Poll Alliance"
            value="NONE"
            subtitle="Going solo with collective leadership"
            color="bg-red-500"
          />
          <MetricCard
            title="Seats Needed"
            value="59"
            subtitle="For majority in 117-seat assembly"
            color="bg-yellow-500"
          />
          <MetricCard
            title="Congress 2027 Projection"
            value="40-51"
            subtitle="Opinion polls estimate"
            change={-17}
            trend="down"
            color="bg-orange-500"
          />
          <MetricCard
            title="Gap to Majority"
            value="8-19"
            subtitle="Additional seats required"
            color="bg-red-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Alliance Probability Matrix</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">AAP Talks:</span><span className="font-medium text-red-600">FAILED - seat disputes</span></div>
              <div className="flex justify-between"><span className="text-slate-500">CPI(M):</span><span className="font-medium text-red-600">RULED OUT - Feb 2025 resolution</span></div>
              <div className="flex justify-between"><span className="text-slate-500">BSP:</span><span className="font-medium text-orange-600">Going solo (only 1 MLA)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">SAD:</span><span className="font-medium text-orange-600">Traditional rival</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Post-Poll Coalition Scenarios</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Congress + BSP:</span><span className="font-medium">Still short of majority</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress + AAP:</span><span className="font-medium text-red-600">Hostile rhetoric blocks</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress + SAD:</span><span className="font-medium">Philosophical differences</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Multi-party:</span><span className="font-medium text-green-600">Most likely outcome</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Mathematical Reality:</strong> No single party likely to achieve 59-seat majority. Multi-party government or post-poll alliance almost certain. Congress alone appears 8-19 seats short.
          </p>
        </div>
      </div>

      {/* Congress Faction Analysis - from A-02-01, A-02-02 */}
      <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">L</span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Congress Leadership & Factions</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">Warring vs Channi | Caste representation crisis | Jan 2026</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="PPCC President"
            value="Raja Warring"
            subtitle="Since April 9, 2022 (25th president)"
            color="bg-purple-500"
          />
          <MetricCard
            title="CLP Leader"
            value="Partap Singh Bajwa"
            subtitle="Leader of Opposition"
            color="bg-purple-500"
          />
          <MetricCard
            title="AICC In-Charge"
            value="Bhupesh Baghel"
            subtitle="Appointed February 2025"
            color="bg-blue-500"
          />
          <MetricCard
            title="Former CM (潜在)"
            value="Channi"
            subtitle="First Dalit CM; SC outreach"
            color="bg-orange-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-red-600">Channi's January 17, 2026 Statement</p>
            <p className="mt-2 text-xs italic text-slate-600 dark:text-slate-400">
              "In Punjab, if you accept that there is a population of 35-38% [of SCs], which is there, then why are we not getting representation? Punjab [Congress] president is from upper caste, CLP leader is from upper caste, women wing of Punjab Congress from upper caste, Punjab [Congress] general secretary from upper caste."
            </p>
            <p className="mt-2 text-xs text-slate-500">— The Hindu, January 22, 2026</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Faction Strength Analysis</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Warring Faction:</span><span className="font-medium">Controls official party apparatus</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Channi Faction:</span><span className="font-medium">SC base (32% population)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Bajwa Faction:</span><span className="font-medium">Majha region influence</span></div>
              <div className="flex justify-between"><span className="text-slate-500">High Command:</span><span className="font-medium text-blue-600">K.C. Venugopal warned on factionalism</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/40">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>High Command Intervention:</strong> January 22-23, 2026 CWC meeting ruled out leadership change. Rahul Gandhi present. Mallikarjun Kharge presided. Unity messaging but underlying tensions unresolved.
          </p>
        </div>
      </div>

      {/* Congress Booth Sevak System - from A-02-06 */}
      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">B</span>
          <div>
            <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">Congress Booth Sevak System</h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">BJP-style Panna Pramukh | May 2026 Announcement</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Booth Sevaks"
            value="25,000"
            subtitle="One per booth (May 2026)"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Assistant Booth Sevaks"
            value="1.25 Lakh"
            subtitle="20 per booth"
            color="bg-blue-500"
          />
          <MetricCard
            title="Total Booth Workers"
            value="150,000"
            subtitle="Booth-level network"
            color="bg-teal-500"
          />
          <MetricCard
            title="Voters Per Booth"
            value="800-900"
            subtitle="Average per polling station"
            color="bg-cyan-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Booth Sevak Responsibilities</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Door-to-Door:</span><span className="text-slate-500">5-6 visits per household before election</span></div>
              <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Nameplates:</span><span className="text-slate-500">Outside worker homes for voter recognition</span></div>
              <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Page System:</span><span className="text-slate-500">Each assistant manages ~30-35 voters</span></div>
              <div className="flex items-center gap-2"><span className="font-medium text-cyan-600">Monitoring:</span><span className="text-slate-500">AICC central control room tracking</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Booth Committee Structure</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Booth President:</span><span className="font-medium">1 per booth (~25,000)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Assistant Booth Sevak:</span><span className="font-medium">~20 per booth</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Voter Contact:</span><span className="font-medium">Personal visits, issue identification</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Election Day:</span><span className="font-medium">Voter mobilization coordination</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/40">
          <p className="text-sm text-cyan-700 dark:text-cyan-300">
            <strong>Inspired by BJP:</strong> Congress adopted BJP's "Panna Pramukh" (page chief) concept. Each booth sevak manages one page of voter list (~30-35 voters). Source: New Indian Express, May 16, 2026
          </p>
        </div>
      </div>

      {/* Congress Ticket Selection - from A-02-07 */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">T</span>
          <div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Congress Ticket Selection Process</h3>
            <p className="text-sm text-green-600 dark:text-green-400">Three-Survey System | High Command Decides | 60-70 New Faces</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Survey Count"
            value="3"
            subtitle="Parallel surveys for winnability"
            color="bg-green-500"
          />
          <MetricCard
            title="Survey Timeline"
            value="Mid-May-July 2026"
            subtitle="2-month assessment period"
            color="bg-green-500"
          />
          <MetricCard
            title="Ticket Control"
            value="AICC"
            subtitle="Not PPCC - central command"
            color="bg-blue-500"
          />
          <MetricCard
            title="New Face Target"
            value="60-70%"
            subtitle="Of tickets to new candidates"
            color="bg-teal-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Three-Survey Process</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">1</span><span className="text-slate-500">Surveys 1 & 2: Agencies under Bhupesh Baghel supervision</span></div>
              <div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">2</span><span className="text-slate-500">Survey 3: Rahul Gandhi's team (independent assessment)</span></div>
              <div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">3</span><span className="text-slate-500">Winnability is sole criterion (per Baghel)</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Hidden Observers Deployment</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Observer Count:</span><span className="font-medium">45 (3 per district)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Origin:</span><span className="font-medium">Different states (not Punjab)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Assessment:</span><span className="font-medium">Social equations, organizational strength</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Special Focus:</span><span className="font-medium">SC/OBC representation</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Strategic Rationale:</strong> Three surveys reduce factional disputes. High command control prevents local power centers from dominating ticket distribution. Sunil Kanugolu (strategist) designing survey methodology.
          </p>
        </div>
      </div>

      {/* Congress Manifesto History - from A-02-08 */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">M</span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Congress Manifesto Record</h3>
            <p className="text-sm text-orange-600 dark:text-orange-400">2017 & 2022 Promises | Implementation Review | &lt;11% Fulfilled</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-orange-600">2017 Manifesto (121-page document)</p>
            <p className="text-xs text-slate-500 mt-1">"Nawan Nawan Punjab Layee Captain De Naun Nukte"</p>
            <div className="mt-3 space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Farm loan waiver:</span><span className="text-orange-600">PARTIAL</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Drug elimination:</span><span className="text-red-600">FAILED</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Free power:</span><span className="text-orange-600">PARTIAL</span></div>
              <div className="flex justify-between"><span className="text-slate-500">25L jobs:</span><span className="text-red-600">FAILED</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-red-600">2022 Manifesto ("Congress De Waade")</p>
            <p className="text-xs text-slate-500 mt-1">Released Feb 18, 2022 - just 2 days before polling</p>
            <div className="mt-3 space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">1L govt jobs/year:</span><span className="text-red-600">FAILED</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Rs 1,100/mo women:</span><span className="text-red-600">FAILED</span></div>
              <div className="flex justify-between"><span className="text-slate-500">8 free LPG cylinders:</span><span className="text-red-600">FAILED</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Implementation:</span><span className="font-medium text-red-600">&lt;11%</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Credibility Crisis:</strong> PPRC (Punjab Political Reform Council) analysis shows &lt;11% of 2017 promises fulfilled. Congress track record undermines 2027 promises. AAP attacks: "Congress makes promises, never delivers."
          </p>
        </div>
      </div>

      {/* Congress 2027 Preparation Timeline - from A-02-07 */}
      <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">P</span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">Congress 2027 Preparation Timeline</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">Mission 2027 | Four-Phase Execution | February Election</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/40">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">1</span>
              <span className="text-sm font-bold text-indigo-700">FOUNDATION</span>
            </div>
            <p className="text-xs text-slate-600 mt-2">May–July 2026</p>
            <p className="text-xs text-slate-500 mt-1">Surveys, digital build, SIR defense, 45 observers deployed</p>
          </div>
          <div className="rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/40">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">2</span>
              <span className="text-sm font-bold text-indigo-700">INTENSIFICATION</span>
            </div>
            <p className="text-xs text-slate-600 mt-2">August–October 2026</p>
            <p className="text-xs text-slate-500 mt-1">Candidate announcements, CM face declaration, high-profile rallies</p>
          </div>
          <div className="rounded-lg bg-indigo-100 p-4 dark:bg-indigo-900/40">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">3</span>
              <span className="text-sm font-bold text-indigo-700">MASS MOBILIZATION</span>
            </div>
            <p className="text-xs text-slate-600 mt-2">November 2026–January 2027</p>
            <p className="text-xs text-slate-500 mt-1">Manifesto launch, nukkad rallies, paid media campaign</p>
          </div>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/40">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">4</span>
              <span className="text-sm font-bold text-red-700">FINAL SPRINT</span>
            </div>
            <p className="text-xs text-slate-600 mt-2">February 2027</p>
            <p className="text-xs text-slate-500 mt-1">72-hour blackout, booth mobilization, exit polls</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Key Decision Points</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">CM Face Decision:</span><span className="font-medium">September-October 2026</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Ticket Distribution:</span><span className="font-medium">6 months before election</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Manifesto Release:</span><span className="font-medium">December 1st week 2026</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Digital Launch:</span><span className="font-medium">Post mid-July (post paddy sowing)</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">"Mission 2027" Status (Feb 16, 2026)</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Leadership Meeting:</span><span className="font-medium text-green-600">Concluded</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Faction Unity:</span><span className="font-medium text-orange-600">Forced public display</span></div>
              <div className="flex justify-between"><span className="text-slate-500">By-election Record:</span><span className="font-medium text-red-600">6 defeats in 7 by-elections</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Rahul Warning:</span><span className="font-medium text-red-600">"Made to sit in reserves"</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Congress Data Analytics - from A-02-20 */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">D</span>
          <div>
            <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400">Congress Data Analytics Cell</h3>
            <p className="text-sm text-teal-600 dark:text-teal-400">SHAKTI App | AICC Control Room | vs BJP Tech Gap</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Data Analytics Head"
            value="Praveen Chakravarty"
            subtitle="Former investment banker, AICC"
            color="bg-teal-500"
          />
          <MetricCard
            title="SHAKTI Target"
            value="20 Cr"
            subtitle="Household database goal (2018)"
            color="bg-teal-500"
          />
          <MetricCard
            title="WhatsApp Groups"
            value="3 Lakh"
            subtitle="2019 Lok Sabha campaign"
            color="bg-teal-500"
          />
          <MetricCard
            title="BJP IT Cell Gap"
            value="11 Years"
            subtitle="BJP IT cell est. 2007 vs Congress 2018"
            color="bg-red-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Congress vs BJP Tech Comparison</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Meta Ad Campaigns (2024):</span><span className="font-medium">Congress 1,041 vs BJP 41,127</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Social Media Workers:</span><span className="font-medium">Congress limited vs BJP 150,000+</span></div>
              <div className="flex justify-between"><span className="text-slate-500">AI/ML Deployment:</span><span className="font-medium text-red-600">Limited vs Significant</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Voter Profiling:</span><span className="font-medium text-orange-600">Developing vs Sophisticated</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Organizational Task Management (Oct 2025)</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Worker Task Assignment:</span><span className="font-medium text-green-600">Automated</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Progress Tracking:</span><span className="font-medium text-green-600">Real-time</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Accountability Metrics:</span><span className="font-medium text-green-600">Central monitoring</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Punjab-Specific:</span><span className="font-medium text-red-600">No documented analytics</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-teal-100 p-3 dark:bg-teal-900/40">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            <strong>Key Gap:</strong> Congress data infrastructure trailing BJP significantly. No evidence of sophisticated AI/ML predictive modeling. Micro-targeting relies more on worker networks than algorithmic automation.
          </p>
        </div>
      </div>

      {/* CYCLE 1 ENHANCEMENT: Party Vote Share History & SWOT */}
      <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6 dark:border-blue-700 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">H</span>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Party Vote Share History — Cycle 1 Research</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">Congress 38.5%→23% | AAP 14%→42%→26% | SAD collapse</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Congress 2017" value="38.5%" subtitle="Pre-AAP era" color="bg-blue-500" />
          <MetricCard title="Congress 2022" value="23%" subtitle="AAP wave - lost 15.6pp" color="bg-red-500" />
          <MetricCard title="AAP 2022" value="42%" subtitle="Peak - 92 seats" color="bg-orange-500" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Vote Share Trajectory 2017→2022</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-red-600">38.5% → 23% (-15.6pp)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">AAP:</span><span className="font-medium text-green-600">14.4% → 42.3% (+27.9pp)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">SAD+BJP:</span><span className="font-medium text-red-600">25.7% → 18.1% (-7.6pp)</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">2022→2024 Shift</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-green-600">23% → 26% (+3pp LS)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">AAP:</span><span className="font-medium text-red-600">42% → 26% (-16pp)</span></div>
              <div className="flex justify-between"><span className="text-slate-500">BJP:</span><span className="font-medium text-green-600">5.4% → 18.5% (+13pp)</span></div>
            </div>
          </div>
        </div>

        {/* SWOT Analysis */}
        <h4 className="mt-6 font-semibold text-slate-700 dark:text-slate-300">SWOT Analysis — Congress 2027</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-xs font-bold text-green-700">STRENGTHS</p>
            <ul className="mt-2 space-y-1 text-xs text-green-600">
              <li>• LS 2024 momentum (7/13 seats)</li>
              <li>• Strong SC vote (32%)</li>
              <li>• Experienced legislators</li>
              <li>• National campaign resources</li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-bold text-red-700">WEAKNESSES</p>
            <ul className="mt-2 space-y-1 text-xs text-red-600">
              <li>• No CM face declared</li>
              <li>• Internal factional fights</li>
              <li>• Weak data infrastructure</li>
              <li>• Dalit-Sikh vote split</li>
            </ul>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-xs font-bold text-blue-700">OPPORTUNITIES</p>
            <ul className="mt-2 space-y-1 text-xs text-blue-600">
              <li>• AAP anti-incumbency (78%)</li>
              <li>• SAD fragmentation</li>
              <li>• BJP independent run</li>
              <li>• Farmer distress votes</li>
            </ul>
          </div>
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-xs font-bold text-yellow-700">THREATS</p>
            <ul className="mt-2 space-y-1 text-xs text-yellow-600">
              <li>• Late CM announcement risk</li>
              <li>• Three-way vote split</li>
              <li>• BJP RSS booth machinery</li>
              <li>• AAP welfare schemes</li>
            </ul>
          </div>
        </div>

        {/* ========================================== */}
        {/* SYNTHESIS INTELLIGENCE SECTION */}
        {/* Derived from: s1-s4 synthesis MD files */}
        {/* ========================================== */}

        {/* Party Positioning Synthesis */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h3 className="mb-3 text-lg font-semibold text-blue-700 dark:text-blue-400">
            Synthesis Intelligence: Party Positioning
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">BJP Vote Share Growth</div>
              <div className="text-2xl font-bold text-green-600">{synthesisPartyData.bjp.voteShare2019}% → {synthesisPartyData.bjp.voteShare2024}%</div>
              <div className="text-xs text-slate-400">{synthesisPartyData.bjp.status}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">AAP Vote Collapse</div>
              <div className="text-2xl font-bold text-red-600">{synthesisPartyData.aap.voteShare2022}% → {synthesisPartyData.aap.voteShare2024}%</div>
              <div className="text-xs text-red-400">Mandate: {synthesisPartyData.aap.mandateStatus}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Congress LS Seats 2024</div>
              <div className="text-2xl font-bold text-blue-600">{synthesisPartyData.congress.seats2024}/13</div>
              <div className="text-xs text-slate-400">Factions: {synthesisPartyData.congress.factions.length}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">SAD Split</div>
              <div className="text-2xl font-bold text-amber-600">{synthesisPartyData.sad.splitDate}</div>
              <div className="text-xs text-slate-400">{synthesisPartyData.sad.factions.length} factions</div>
            </div>
          </div>
        </div>

        {/* Party Key Metrics from Synthesis */}
        <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Party Metrics (Synthesized from s1 Cross-Reference)
          </h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {KEY_SYNTHESIS_METRICS
              .filter(m => m.category === "Party")
              .map((metric) => (
                <div key={metric.id} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-700">
                  <div className="flex flex-col items-center">
                    <span className={`h-2 w-2 rounded-full ${
                      metric.trend === "up" ? "bg-green-500" :
                      metric.trend === "down" ? "bg-red-500" : "bg-slate-500"
                    }`}></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500">{metric.metric}</div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{metric.value}</div>
                    <div className="text-xs text-slate-400">Source: {metric.source}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Quality Validation Summary */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
            Quality Validation Summary (s3)
          </h4>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Total Documents</div>
              <div className="text-xl font-bold text-indigo-600">{qualityValidation.scope.total}</div>
              <div className="text-xs text-slate-400">Pass Rate: {qualityValidation.passRate}%</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackASummary.high}/{qualityValidation.trackASummary.total} HIGH</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track B</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackBSummary.high}/{qualityValidation.trackBSummary.total} HIGH</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Assessment</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.overallAssessment}</div>
            </div>
          </div>
        </div>

        {/* Gap Analysis - Party Propulsion */}
        <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
            Gap Analysis: Party Propulsion (CRITICAL GAP)
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Coverage Rating</div>
              <div className="text-xl font-bold text-red-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.coverageRating || "CRITICAL_GAP"}
              </div>
              <div className="text-xs text-slate-400">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.coveragePercent || 0}% framework coverage
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Documents in Category</div>
              <div className="text-xl font-bold text-amber-600">
                Track A: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.trackAFiles || 0} /
                Track B: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.trackBFiles || 0}
              </div>
              <div className="text-xs text-slate-400">Framework sections: {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.frameworkSections || 0}</div>
            </div>
          </div>
          {/* Missing Sections */}
          {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.missingSections && (
            <div className="mt-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Missing Sections (Require Immediate Research):</div>
              <div className="flex flex-wrap gap-2">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Party Propulsion")?.missingSections.map((gap, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-400">
                    {gap.section}: {gap.description} ({gap.severity})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
