"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

// === OPPOSITION INTELLIGENCE DATA (A-03 series) ===

// AAP Crisis: April 2026 Mass Defection
const aapCrisisData = {
  date: "April 24, 2026",
  defectorCount: 7,
  defectorNames: ["Raghav Chadha", "Sandeep Pathak", "Ashok Mittal", "Swati Maliwal", "Harbhajan Singh", "Vikramjit Singh Sahney", "Rajinder Gupta"],
  impact: "SEVERE - Key 2022 strategists left for BJP",
  sandeepPathakRole: "Architect of data-driven booth-level grassroots campaign (silent mastermind)",
  raghavChadhaRole: "De-facto Chief Minister in Punjab, backroom strategist for 2022 victory",
};

// BJP-SAD Alliance Status (A-03-16)
const allianceStatus = {
  bjpSadAlliance: "COLLAPSED",
  bjpStatement: "Amit Shah (March 14, 2026): BJP will contest all 117 seats independently",
  sadStatement: "Sukhbir Singh Badal: 'Every party has a right to take decisions'",
  allianceDuration: "1997-2020 (23 years)",
  breakupReason: "Farm laws controversy (September 2020)",
  currentStatus: "Complete break - Amit Shah Moga rally confirmed solo run",
};

// SAD Factions (A-03-01, A-03-16)
const sadFactions = [
  { name: "SAD (Badal)", leader: "Sukhbir Singh Badal", status: "Main party, controls 3 seats" },
  { name: "SAD (Waris Punjab De)", leader: "Amritpal Singh (detained in Assam jail)", status: "Pro-Khalistani, MP from Khadoor Sahib" },
  { name: "SAD (Punar Surjit)", leader: "Giani Harpreet Singh (former Akal Takht Jathedar)", status: "Reform faction, open to BJP alliance" },
  { name: "SAD (Amritsar)", leader: "Tarsem Singh (father of Amritpal Singh)", status: "另一派系" },
];

// Opposition Party Finances (A-03-28)
const oppositionFinances = {
  aap: {
    donations2024_25: 38.1,
    donationSource: "Prudent Electoral Trust (43% of funds)",
    printAds2022_25: 317,
    centralSpending2022: 6.23,
    stateDebt: 4.17,
    note: "Rs 10.59 crore for online reputation management (May 2026)"
  },
  sad: {
    status: "FINANCIALLY CRIPPED",
    donorBase: "COLLAPSED since 2017 defeat",
    crisis: "Senior leaders not contributing; 6 months no funds collected"
  },
  bjp: {
    nationalDonations2024_25: 6088,
    punjabSpending2022: 36.69,
    itCellWorkers: 150000,
    note: "Strongest financial position nationally"
  },
  congress: {
    nationalDonations2024_25: 522,
    punjabSpending2022: 194,
    note: "Moderate resources for Punjab"
  }
};

// Opposition IT & Social Media (A-03-30)
const oppositionIT = {
  aap: {
    reputationMgmt: "Rs 10.59 crore contract (Adglobal360)",
    socialMediaCoordinator: "5 Zone Coordinators appointed June 2025",
    platforms: ["Facebook", "Twitter/X", "Instagram", "YouTube", "WhatsApp"],
    cmMannFollowers: "Active on Instagram (@bhagwantmann1), X (@BhagwantMann)"
  },
  bjp: {
    itCellWorkers: 150000,
    nationalStructure: "5,000-6,000 core employees",
    itCellChief: "Amit Malviya (National Convener since 2015)",
    punjabPresence: "Expanding under Sunil Jakhar leadership"
  },
  sad: {
    status: "WEAK - Traditional grassroots focus",
    digitalCapacity: "Limited compared to AAP/BJP"
  },
  whatsappRole: "Dominant platform for ALL parties - multi-layered distribution networks"
};

// RSS-BJP Connection (A-03-29)
const rssBjpConnection = {
  rssPresence: {
    swayamsevaks: 1700,
    shakhas: "41+ locations",
    mandals: "600+",
    shaktiKendras: "Built for booth-level",
    vidyaBharatiSchools: "150+ schools, 7000-8000 students"
  },
  fivePointVictoryPlan: [
    { point: "Samrasta Abhiyan", desc: "Shared cremation grounds campaign - 250 villages targeted" },
    { point: "Ram Tradition Link", desc: "Valmiki Tirth, Valmiki Ramayan distribution, Luv-Kush narrative" },
    { point: "Sant Ravidas Celebrations", desc: "650th Birth Anniversary (June 2026-June 2027) at block level" },
    { point: "Dalit Saints Network", desc: "4-year development of saint network for narrative delivery" },
    { point: "Ghar Wapsi", desc: "Homecoming campaign focusing on discrimination causes of conversion" }
  ],
  dalitTargeting: {
    dalitPopulation: "32% of Punjab",
    reservedSeats: "34 of 117",
    strategy: "Cultural assertion into political alignment"
  }
};

export default function CompetitionPage() {
  const parties = [
    { name: "Aam Aadmi Party", short: "AAP", seats: 92, voteShare: 42.01, sentiment: -0.42, trend: "down", strength: "Urban middle class, Youth, Anti-corruption (CRISIS: 7 MPs defected April 2026)" },
    { name: "Shiromani Akali Dal", short: "SAD", seats: 3, voteShare: 18.38, sentiment: -0.28, trend: "down", strength: "Rural, Jat Sikh, Agrarian (MULTIPLE FACTIONS: Badal, Waris Punjab De, Punar Surjit)" },
    { name: "Bharatiya Janata Party", short: "BJP", seats: 2, voteShare: 18.6, sentiment: 0.25, trend: "up", strength: "Urban, Dalit/OBC outreach, Going Solo (6.6%→18.6% vote share in 2024)" },
    { name: "Bahujan Samaj Party", short: "BSP", seats: 0, voteShare: 13.0, sentiment: -0.35, trend: "neutral", strength: "SC voters, Muslim minority (Going solo since Feb 2024)" },
  ];

  const swotAnalysis = {
    aap: {
      strengths: ["Delhi model perception", "Free electricity narrative", "Youth support", "Anti-corruption stance"],
      weaknesses: [
        "Drug-Free Punjab: 4 deadlines set, ALL missed — 8,344 FIRs, 14,734 arrests, 586 kg heroin seized but drugs remain pervasive",
        "Women's Stipend Delayed: Rs 1,000/month promise unfulfilled for ~4 years (announced March 2026 budget)",
        "Jobs Promise Falls Short: 24 lakh promised, 48,000-70,000 delivered; Youth unemployment 14.9% (4th highest in India)",
        "Healthcare Crisis: ~50% specialist doctor posts vacant in government hospitals",
        "Education Vacancies: 984 of 1,927 principal posts vacant (51%); 984 of 3,000+ headmaster positions unfilled",
        "Mohalla Clinics: 400+ delivered vs 500 promised; Paddy Procurement Crisis 2024 with MSP protests",
      ],
      opportunities: ["Disillusioned SAD voters", "Anti-incumbency against Congress", "Urban voter swing"],
      threats: ["Broken promises", "Jail corruption narrative", "BJP alliance questions"],
    },
    sad: {
      strengths: ["Jat Sikh vote bank", "Agrarian community", "Traditional loyalty", "Bathinda influence"],
      weaknesses: ["Drug traffic perception", "Family dynasty debates", "Less youth appeal", "Urban alienation"],
      opportunities: ["Congress anti-incumbency", "BJP alliance leverage", "Kisan card scheme"],
      threats: ["Dera Sacha Sauda impact", "Minority flight", "Youth migration issue"],
    },
  };

  const deraInfluence = [
    { name: "Dera Sacha Sauda", followers: "53L", seats: "15-20", region: "Malwa", leader: "Guru Sant Bhain Saheb" },
    { name: "Dera Ballan (SAD)", followers: "15L", seats: "19-23", region: "Doaba", leader: "Ballan" },
    { name: "Radha Soami Beas", followers: "40M+", seats: "All 117", region: "Diffuse", leader: "Beas" },
  ];

  const voterEnticementData = [
    { category: "Farmer Debt Relief", promise: "Farm Loan Waiver", status: "BROKEN", detail: "89% farmers in debt; Avg Rs 2.03 lakh household debt", source: "NSS 2019, SIDBI 2023" },
    { category: "MSP Guarantee", promise: "Legal MSP Guarantee", status: "UNFULFILLED", detail: "CM Mann: 'MSP da kanoon banana chhahte hain' but no legislation passed", source: "Punjab CM Speeches 2024" },
    { category: "Drug Crisis", promise: "Drug-Free Punjab by 2022", status: "FAILED", detail: "4 deadlines missed; 8,344 FIRs, 14,734 arrests, 586 kg heroin seized", source: "Punjab Police Data 2022-2026" },
    { category: "Jobs", promise: "24 Lakh Jobs", status: "FAILED", detail: "48,000-70,000 delivered (0.2-0.3% of promise); Youth unemployment 14.9%", source: "CM window speech, PLFS 2024" },
    { category: "Healthcare", promise: "Better Government Hospitals", status: "FAILED", detail: "~50% specialist doctor posts vacant; 400 Mohalla Clinics vs 500 promised", source: "Punjab Health Dept 2025" },
    { category: "Education", promise: "Fill Teacher Vacancies", status: "FAILED", detail: "984/1,927 principal posts vacant (51%); 984+ headmaster positions empty", source: "Punjab Education Dept 2025" },
    { category: "Women Stipend", promise: "Rs 1,000/month for Women", status: "DELAYED", detail: "Announced March 2026 budget; ~4 years after original promise", source: "Punjab Budget 2026" },
  ];

  const casteCoalitionData = [
    { caste: "SC (Dalit)", population: "31.94%", primaryParty: "Congress 42-48%", secondaryParty: "BSP 28-35%", aapShare: "12-18%", keyIssue: "Land rights, unemployment, social justice" },
    { caste: "OBC", population: "~31%", primaryParty: "Congress 35-40%", secondaryParty: "BJP 25-30%", aapShare: "15-20%", keyIssue: "Caste census, reservation, agrarian distress" },
    { caste: "Jat Sikh", population: "20-25%", primaryParty: "SAD 35-40%", secondaryParty: "Congress 25-30%", aapShare: "20-25%", keyIssue: "Drug crisis, farm bills, river water sharing" },
    { caste: "Non-Jat Sikh", population: "15-18%", primaryParty: "AAP 30-35%", secondaryParty: "Congress 25-30%", aapShare: "30-35%", keyIssue: "Governance, anti-corruption, urban development" },
    { caste: "Urban Hindu", population: "8-10%", primaryParty: "BJP 40-50%", secondaryParty: "Congress 22-28%", aapShare: "15-20%", keyIssue: "National security, Hindutva, development" },
    { caste: "Muslim", population: "1.9%", primaryParty: "Congress 45-55%", secondaryParty: "AAP 20-25%", aapShare: "15-20%", keyIssue: "Community security,Places of Worship Act" },
  ];

  const regionalSeats = [
    { region: "Malwa", seats: 69, aapSeats: 53, sadSeats: 2, congressSeats: 14, bjpSeats: 0, keySeats: ["Bathinda", "Mansa", "Sangrur", "Moga", "Ferozepur"], deraInfluence: "HIGH", deras: "Dera Sacha Sauda dominant" },
    { region: "Majha", seats: 25, aapSeats: 19, sadSeats: 1, congressSeats: 4, bjpSeats: 1, keySeats: ["Amritsar", "Gurdaspur", "Hoshiarpur", "Kashmir", "Pathankot"], deraInfluence: "MODERATE", deras: "Radha Soami diffuse" },
    { region: "Doaba", seats: 23, aapSeats: 13, sadSeats: 0, congressSeats: 9, bjpSeats: 1, keySeats: ["Jalandhar", "Kapurthala", "Nawanshahr", "Hoshiarpur", "Phagwara"], deraInfluence: "MODERATE", deras: "Dera Ballan influence" },
  ];

  const digitalCampaignData = [
    { platform: "Truth Stack", budget: "INR 83-140 Lakh", scope: "Counter-narrative + fact-check", target: "AAP misgovernance", coverage: "Punjab 100%" },
    { platform: "Digital War Room", budget: "Part of INR 83-140 Lakh", scope: "Social media operations", target: "Urban voters", coverage: "Tier 1-2 cities" },
    { platform: "Ground Counter-Narrative", budget: "INR 83-140 Lakh", scope: "Village-level outreach", target: "Rural voters", coverage: "All 13,000+ villages" },
  ];

  
  const topVulnerableSeats = [
    { seat: "Jalandhar Central", mla: "Raman Arora", vulnerability: 9.5, issue: "Arrested twice by Vigilance Bureau (May & Sept 2025). Extortion charges. Son involved in corruption case.", flipProbability: 85 },
    { seat: "Pathanmajra", mla: "Harmeet Singh Dhillon", vulnerability: 9.5, issue: "Rape charges. Escaped police custody in Karnal after allegedly opening fire on police. Fled to Australia.", flipProbability: 85 },
    { seat: "Khadoor Sahib", mla: "Manjinder Singh Lalpura", vulnerability: 9.0, issue: "Molestation conviction Sept 2025 (4-year sentence). Dalit woman victim — community severely alienated.", flipProbability: 80 },
    { seat: "Ludhiana", mla: "Sanjeev Arora (Minister)", vulnerability: 9.0, issue: "ED money laundering arrest May 2026. Industries Minister. Ludhiana industrial collapse.", flipProbability: 80 },
    { seat: "Bholath", mla: "Sukhbinder Singh", vulnerability: 8.5, issue: "Gobindpura mine scam; 8,400+ farmers affected; 250+ acre farmland destroyed", flipProbability: 75 },
    { seat: "Nakodar", mla: "Gurpreet Singh", vulnerability: 8.0, issue: "VSVP medical college promise unfulfilled; local hospital infrastructure poor", flipProbability: 70 },
    { seat: "孟高 (Moga)", mla: "Harjesh Kumar", vulnerability: 8.0, issue: "Agrarian distress; not delivering to farming community promises", flipProbability: 70 },
    { seat: "Shahid Bhumi", mla: "Budh Ram", vulnerability: 7.5, issue: "Doaba region weakness; SC voter alienation", flipProbability: 65 },
    { seat: "Fatehgarh Sahib", mla: "Dinesh Chuadh", vulnerability: 7.5, issue: "Gobindpura mine impact area; farming community upset", flipProbability: 65 },
    { seat: "Muktsar", mla: "Inderbir Singh", vulnerability: 7.5, issue: "Border region; agrarian distress; lack of development", flipProbability: 65 },
  ];

  const bjpGrowthMetrics = [
    { metric: "Vote Share 2022", value: "6.6%", context: "Assembly election result" },
    { metric: "Vote Share 2024", value: "18.6%", context: "Lok Sabha surge (3x growth)" },
    { metric: "Lok Sabha Seats 2024", value: "5/13", context: "BJP's best-ever Punjab performance" },
    { metric: "Mandals Established", value: "600+", context: "Organizational grid across Punjab" },
    { metric: "Target 2027", value: "25-30%", context: "Ambitious vote share target" },
    { metric: "OBC Outreach", value: "31%", context: "OBC population target (34 Lok Sabha seats)" },
    { metric: "Dalit Outreach", value: "32%", context: "SC population target" },
  ];

  // Persuadable Voter Types (MP2-010 composite voter segmentation)
  const persuadableVoterTypes = [
    { type: "Disaffected AAP Voters", size: "8-12%", profile: "2022 AAP voters disillusioned by broken promises", keyIssue: "Drug crisis, jobs, governance", swingDirection: "Congress or NOTA", priority: "HIGH" },
    { type: "Swinging Jat Sikh", size: "6-8%", profile: "Traditional SAD voters exploring alternatives", keyIssue: "Drugs, farm distress, dera influence", swingDirection: "Congress or SAD-Punar Surjit", priority: "HIGH" },
    { type: "Urban Floating", size: "5-7%", profile: "Middle-class voters disappointed with AAP", keyIssue: "Infrastructure, jobs, corruption", swingDirection: "Congress or BJP", priority: "MEDIUM" },
    { type: "Young First-Timers", size: "3-5%", profile: "3.48 lakh new 2022 registrants, 57% FTV turnout", keyIssue: "Jobs, future prospects", swingDirection: "Congress or NOTA", priority: "MEDIUM" },
    { type: "NRI Influenced", size: "2-3%", profile: "7 lakh Punjabis abroad, only 393 registered voters", keyIssue: "Drugs, political stability", swingDirection: "Congress or diaspora apathy", priority: "LOW" },
  ];

  // Caste Fragmentation Index by District (MP2-001)
  const casteFragmentationIndex = [
    { district: "Moga", index: 0.72, dominant: "Mazhabi Sikh 28%", risk: "HIGH fragmentation" },
    { district: "Ferozepur", index: 0.68, dominant: "Jat Sikh 32%", risk: "HIGH fragmentation" },
    { district: "Bathinda", index: 0.65, dominant: "Jat Sikh 35%", risk: "MODERATE-HIGH" },
    { district: "Sangrur", index: 0.64, dominant: "Ravidassia 24%", risk: "MODERATE-HIGH" },
    { district: "Jalandhar", index: 0.61, dominant: "General 38%", risk: "MODERATE" },
    { district: "Hoshiarpur", index: 0.58, dominant: "SC 34%", risk: "MODERATE" },
    { district: "Patiala", index: 0.55, dominant: "Jat Sikh 28%", risk: "MODERATE" },
    { district: "Ludhiana", index: 0.52, dominant: "OBC 31%", risk: "LOW-MODERATE" },
  ];

  // Regional Swing Potential (MP2-010)
  const regionalSwingPotential = [
    { region: "Malwa", seats: 69, swingRange: "6-8%", swingDirection: "AAP→Congress/SAD", flipSeats: "12-15 seats", congressFloor: 28, congressCeiling: 35 },
    { region: "Doaba", seats: 23, swingRange: "12-15%", swingDirection: "AAP→Congress", flipSeats: "6-8 seats", congressFloor: 10, congressCeiling: 14 },
    { region: "Majha", seats: 25, swingRange: "8-10%", swingDirection: "Mixed", flipSeats: "4-6 seats", congressFloor: 8, congressCeiling: 12 },
  ];

  // Congress Floor/Ceiling by Region (MP2-010)
  const congressRegionalOutlook = [
    { region: "Malwa", floor: 28, ceiling: 35, note: "69 seats - AAP dominates but Congress gaining" },
    { region: "Doaba", floor: 10, ceiling: 14, note: "23 seats - Congress base, AAP challenge" },
    { region: "Majha", floor: 8, ceiling: 12, note: "25 seats - Mixed, border politics matter" },
    { region: "Total", floor: 46, ceiling: 61, note: "117 seats needed for majority: 59" },
  ];

  // Flip Margin Analysis (MP2-010)
  const flipMarginAnalysis = [
    { seat: "Jalandhar Central", margin: 247, winner: "Congress (Channi)", vulnerability: "CRITICAL", note: "Narrowest margin in state" },
    { seat: "Ferozpur", margin: 3242, winner: "Congress", vulnerability: "HIGH", note: "Border seat, drug route" },
    { seat: "Ludhiana", margin: 20942, winner: "Congress", vulnerability: "MEDIUM", note: "Urban, industrial" },
    { seat: "Dera Baba Nanak", margin: 5699, winner: "AAP", vulnerability: "HIGH", note: "Dera influence zone" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              6
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Competition Management
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AAP • SAD • BJP • BSP analysis • Vote bank tracking • 2027 Assembly
          </p>
        </div>
        <Badge variant="danger">4 Major Competitors</Badge>
      </div>

      {/* Crisis Alerts */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">BJP-SAD Alliance Broken — March 2026</p>
            <p className="text-sm text-red-600 dark:text-red-300">Amit Shah confirms BJP will fight solo in 2027. 30+ year alliance ended. 7 Rajya Sabha MPs from other parties defected to BJP in April 2026. Source: TOI March 2026</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">AAP Fell 5 Seats Short of Majority — 2022</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">AAP won 92 seats on 42.01% vote share. Needed 97 for majority (59 seats). Congress needs net +41 seats from current 18.</p>
          </div>
        </div>
      </div>

      {/* BJP Growth Metrics */}
      <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Vote Share Triple: 6.6% → 18.6% (2024)</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP tripled vote share from 2022 Assembly. Now Punjab&apos;s 3rd largest party. Amit Shah: &quot;wherever BJP gets 19%, next govt is BJP.&quot; Anti-conversion law promised. Org grid: 600+ mandals. 5 Lok Sabha seats in 2024 (best-ever).</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">63 AAP MLAs in Touch with Raghav Chadha</p>
              <p className="text-sm text-red-600 dark:text-red-300">April 2026 signals — mass rebellion brewing. AAP Punjab unit in turmoil. Source: Business Today, Indian Express</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">7 Rajya Sabha MPs Defected to BJP — April 2026</p>
              <p className="text-sm text-purple-600 dark:text-purple-300">Key AAP Punjab strategists jumped ship. Mass defection wave in April 2026.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">SAD Split — August 11, 2025</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">SAD (Punar Surjit) formed under Giani Harpreet Singh. 40% youth, 35% women in candidate tickets. Two factions competing for same Sikh voters — fragments anti-AAP vote.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400">Akal Takht Ultimatum — May 2026</p>
              <p className="text-sm text-green-600 dark:text-green-300">Jathedar Kuldip Singh Gargaj gave 15-day ultimatum over sacrilege law &quot;objectionable clauses.&quot; CM Mann publicly challenged Akal Takht authority — open rift with religious institution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Metrics Grid */}
      <div className="grid gap-6 lg:grid-cols-4">
        <MetricCard
          title="AAP Current Seats"
          value="92"
          subtitle="2022 Assembly results"
          color="bg-orange-500"
        />
        <MetricCard
          title="SAD Current Seats"
          value="3"
          subtitle="2022 results (post-split)"
          color="bg-green-500"
        />
        <MetricCard
          title="BJP Vote Share"
          value="18.6%"
          subtitle="Up from 6.6% in 2022"
          change={182}
          trend="up"
          color="bg-orange-500"
        />
        <MetricCard
          title="Congress Current Seats"
          value="18"
          subtitle="2022 results"
          color="bg-blue-500"
        />
        <MetricCard
          title="Congress Seats Needed"
          value="Net +41"
          subtitle="18 → 59 (majority mark)"
          color="bg-blue-500"
        />
        <MetricCard
          title="BJP Lok Sabha 2024"
          value="5/13"
          subtitle="Best-ever Punjab result"
          change={400}
          trend="up"
          color="bg-yellow-500"
        />
        <MetricCard
          title="Dera Influence"
          value="40-50"
          subtitle="Seats affected"
          color="bg-purple-500"
        />
        <MetricCard
          title="Youth Unemployment"
          value="14.9%"
          subtitle="4th highest in India"
          trend="down"
          color="bg-red-500"
        />
      </div>

      {/* BJP Growth Trajectory */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP Growth Trajectory — Haryana Model Replication
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: BJP state unit reports, Amit Shah March 2026 announcement</p>
        <div className="mt-4 grid gap-4 md:grid-cols-7">
          {bjpGrowthMetrics.map((metric) => (
            <div key={metric.metric} className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs text-slate-500 dark:text-slate-400">{metric.metric}</p>
              <p className="text-xl font-bold text-yellow-700 dark:text-yellow-400">{metric.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{metric.context}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>OBC Strategy:</strong> 31% OBC population targeted with caste coalition math. BJP&apos;s &quot;70% non-Jat&quot; voter strategy aims to replicate Haryana success. Dalit outreach at 32% SC population.
          </p>
        </div>
      </div>

      {/* Organizational Warfare — Party Infrastructure Comparison (MP3-005, MP3-007) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Organizational Warfare — Party Infrastructure (MP3-005, MP3-007)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Grassroots machinery determines electoral outcomes in FPTP systems</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">AAP War Chest</h4>
            <p className="text-2xl font-bold text-red-600">Rs 200+ Cr</p>
            <p className="text-xs text-slate-500 mt-1">Central funds + state donors</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress War Chest</h4>
            <p className="text-2xl font-bold text-blue-600">Weaker</p>
            <p className="text-xs text-slate-500 mt-1">Relies on local leaders</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Swayamsevak Network</h4>
            <p className="text-2xl font-bold text-yellow-600">11 Lakh+</p>
            <p className="text-xs text-slate-500 mt-1">Largest grassroots org in India</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">AAP WhatsApp Groups</h4>
            <p className="text-2xl font-bold text-purple-600">15,000+</p>
            <p className="text-xs text-slate-500 mt-1">10-12 members per booth</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Congress Financial Deficit:</strong> AAP 2027 projected spending Rs 260-400 Cr vs Congress Rs 220-350 Cr. Congress relies on local leaders' self-funding model — creates equity issues and limits war chest scalability. <strong>Source: MP3-005</strong>
          </p>
        </div>
      </div>

      {/* AAP Internal Chaos — 30 MLAs in Contact with Congress (MP3-017) */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">30 AAP MLAs in Contact with Congress — MP3-017 Research</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">February 2025: Congress claimed nearly one-third of AAP's 92 MLAs were in contact for nearly a year. This indicates 10-15% of AAP's 2022 voters are accessible to Congress through candidate defection. Source: Business Today, Indian Express</p>
          </div>
        </div>
      </div>

      {/* Farmer Distress & Protest Impact */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Farmer Protest Impact & Agricultural Distress
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: NSS 2019, SIDBI 2023, BKU faction data</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Farmer Households in Debt"
            value="89%"
            subtitle="NSS 2019 data"
            color="bg-red-500"
          />
          <MetricCard
            title="Avg Household Debt"
            value="Rs 2.03L"
            subtitle="SIDBI 2023"
            color="bg-red-500"
          />
          <MetricCard
            title="BKU (Ekta Ugrahan)"
            value="80L+"
            subtitle="Members in dominant faction"
            color="bg-green-500"
          />
          <MetricCard
            title="Total BKU Reach"
            value="4.5-5 Cr"
            subtitle="Rural population touch"
            color="bg-green-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Farm Laws 2020-21 Impact</h4>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">AAP support from 42% Sikh voters in 2022 directly linked to farm law protests. 2020-2021 protests created lasting voter alignment.</p>
            <p className="mt-2 text-xs text-slate-500">MSP guarantee remains #1 rural demand</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">MSP Guarantee — Unfulfilled</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">CM Mann: &quot;MSP da kanoon banana chhahte hain&quot; but no legislation passed. Farmer unions demand legally binding MSP.</p>
            <p className="mt-2 text-xs text-slate-500">2024 paddy procurement crisis with MSP protests</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">BKU Faction Landscape</h4>
          <DataTable
            headers={["Faction", "Leader", "Approximate Members", "Regional Base"]}
            rows={[
              ["BKU (Ekta Ugrahan)", "Yograj Singh", "80L+", "South Punjab (Malwa)"],
              ["BKU (Krantikari)", "Surjit Singh", "20L+", "Central Punjab"],
              ["BKU (Sen Gupta)", "Piara Singh", "10L+", "Doaba region"],
              ["BKU (Lakhewal)", "Jarnail Singh", "5L+", "Majha region"],
            ]}
          />
        </div>
      </div>

      {/* AAP Broken Promises Summary - MP3-004 Key Data */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">AAP Broken Promise Score: 92% Unfulfilled — MP3-004 Research</p>
            <p className="text-sm text-red-600 dark:text-red-300">Rs 4+ Lakh Crore Debt Trap | 50% Specialist Doctor Posts Vacant | 984 Principal Posts Empty | 1.3+ Crore Women Await Rs 1,000/Month</p>
          </div>
        </div>
      </div>

      {/* Voter Enticement / Promise Tracker */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Promise Tracker — Voter Enticement Analysis
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Punjab Police, PLFS 2024, Health Dept 2025, CM speeches</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {voterEnticementData.map((item) => (
            <div key={item.category} className={`rounded-lg p-4 ${
              item.status === "BROKEN" ? "bg-red-50 dark:bg-red-900/20" :
              item.status === "FAILED" ? "bg-red-50 dark:bg-red-900/20" :
              item.status === "DELAYED" ? "bg-yellow-50 dark:bg-yellow-900/20" :
              "bg-orange-50 dark:bg-orange-900/20"
            }`}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{item.category}</h4>
                <Badge variant={item.status === "BROKEN" || item.status === "FAILED" ? "danger" : item.status === "DELAYED" ? "warning" : "default"}>
                  {item.status}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.promise}</p>
              <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
              <p className="mt-1 text-xs text-slate-400 italic">Source: {item.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Crime & Law & Order */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Law & Order — Crime Statistics Comparison
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: NCRB 2023, Punjab Police data</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 text-center">
            <p className="text-3xl font-bold text-green-700 dark:text-green-400">227</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Punjab crime rate (per lakh)</p>
            <p className="text-xs text-slate-500 mt-1">NCRB 2023 data</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20 text-center">
            <p className="text-3xl font-bold text-red-700 dark:text-red-400">448</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">National crime rate (per lakh)</p>
            <p className="text-xs text-slate-500 mt-1">All-India average</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 text-center">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">49%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Lower than national avg</p>
            <p className="text-xs text-slate-500 mt-1">AAP&apos;s law &amp; order claim</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Counter-narrative:</strong> Despite lower crime rate, drug-related FIRs increased significantly. 8,344 drug FIRs, 14,734 arrests, 586 kg heroin seized under AAP government. Drug crisis remains top voter concern despite statistical claims.
          </p>
        </div>
      </div>

      {/* Party Standing + SWOT */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Party-wise Current Standing
          </h3>
          <div className="mt-6 space-y-4">
            {parties.map((party) => (
              <div key={party.short} className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm`}
                  style={{ backgroundColor: party.short === "AAP" ? "#12B5E5" : party.short === "SAD" ? "#3C8D2F" : party.short === "BJP" ? "#FF671F" : "#0C7A92" }}>
                  {party.short}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{party.name}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{party.seats} seats ({party.voteShare}%)</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={(party.seats / 117) * 100}
                    color="bg-slate-400"
                    showPercentage={false}
                  />
                  <p className="mt-1 text-xs text-slate-500">{party.strength}</p>
                </div>
                <Badge variant={party.trend === "up" ? "success" : party.trend === "down" ? "danger" : "default"}>
                  {party.sentiment > 0 ? "+" : ""}{party.sentiment}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP SWOT Analysis
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Strengths</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                {swotAnalysis.aap.strengths.map((s) => <li key={s}>• {s}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                {swotAnalysis.aap.weaknesses.map((w) => <li key={w}>• {w}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                {swotAnalysis.aap.opportunities.map((o) => <li key={o}>• {o}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Threats</h4>
              <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                {swotAnalysis.aap.threats.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vote Bank Transfer Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Vote Bank Transfer Analysis
        </h3>
        <DataTable
          headers={["From Party", "To Party", "Swing Voters", "Key Reason", "Volatility"]}
          rows={[
            ["SAD", "Congress", "4.2%", "Drugs, broken promises", "Medium"],
            ["SAD", "AAP", "2.8%", "Anti-Congress sentiment", "High"],
            ["Congress", "AAP", "3.5%", "Youth, Delhi model", "High"],
            ["BJP", "Congress", "1.2%", "Local issues", "Low"],
            ["BSP", "Congress", "2.1%", "No viable option", "Medium"],
            ["Independent", "Congress", "1.8%", "Local leaders", "High"],
          ]}
        />
      </div>

      {/* Caste Coalition Math */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste Coalition Math — 70% Non-Jat Target
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Census 2011, NSS 2019, Vote transfer efficiency analysis</p>

        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Caste/Community", "Population %", "Congress Share", "BJP Share", "AAP Share", "Key Issue"]}
            rows={casteCoalitionData.map(c => [
              c.caste, c.population, c.primaryParty, c.secondaryParty, c.aapShare, c.keyIssue
            ])}
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">SC Population</h4>
            <p className="text-2xl font-bold text-purple-600">31.94%</p>
            <p className="text-xs text-slate-500 mt-1">Primary targets: Congress 42-48%, BSP 28-35%</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">OBC Population</h4>
            <p className="text-2xl font-bold text-orange-600">~31%</p>
            <p className="text-xs text-slate-500 mt-1">34 Lok Sabha seats equivalent</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Non-Jat Sikh</h4>
            <p className="text-2xl font-bold text-green-600">15-18%</p>
            <p className="text-xs text-slate-500 mt-1">AAP strong segment</p>
          </div>
        </div>
      </div>

      {/* Caste & Religious Vote Bank Breakdown */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste & Religious Vote Bank Breakdown
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Sikh Vote Bank</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">Congress</span>
                <span className="font-medium text-green-600 dark:text-green-400">26-31%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">AAP</span>
                <span className="font-medium text-green-600 dark:text-green-400">20-25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">SAD (combined)</span>
                <span className="font-medium text-green-600 dark:text-green-400">18-22%</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Jat Sikhs dominate; non-Jat Sikh votes swing more to AAP/Congress</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Hindu Vote Bank</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">BJP</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">40-50%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">Congress</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">22-28%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">AAP</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">15-20%</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Urban Hindu voters trending BJP; rural Hindus more Congress</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">SC Vote Reach</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">Congress</span>
                <span className="font-medium text-purple-600 dark:text-purple-400">42-48%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">BSP</span>
                <span className="font-medium text-purple-600 dark:text-purple-400">28-35%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">AAP</span>
                <span className="font-medium text-purple-600 dark:text-purple-400">12-18%</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Congress traditional SC backbone eroding to BSP</p>
          </div>
        </div>
      </div>

      {/* Regional Vote Patterns */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Seat Distribution — Malwa vs Majha vs Doaba
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">117 total seats — Dera influence affects 40-50 seats</p>

        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Region", "Total Seats", "AAP Seats", "SAD Seats", "Congress Seats", "BJP Seats", "Dera Influence"]}
            rows={regionalSeats.map(r => [
              r.region, r.seats, r.aapSeats, r.sadSeats, r.congressSeats, r.bjpSeats, r.deraInfluence
            ])}
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Malwa (69 seats)</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">• SAD traditional stronghold</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">• Dera Sacha Sauda dominant</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">• Congress making gains (drugs)</p>
            <p className="text-xs text-slate-500 mt-2">Key: Bathinda, Mansa, Sangrur</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Majha (25 seats)</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">• Border area</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">• AAP strong urban base</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">• Border security = BJP angle</p>
            <p className="text-xs text-slate-500 mt-2">Key: Amritsar, Gurdaspur, Hoshiarpur</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Doaba (23 seats)</h4>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">• Highest SC population %</p>
            <p className="text-sm text-green-600 dark:text-green-300">• AAP won only 13 in 2022</p>
            <p className="text-sm text-green-600 dark:text-green-300">• Dera Ballan influence</p>
            <p className="text-xs text-slate-500 mt-2">Key: Jalandhar, Kapurthala, Nawanshahr</p>
          </div>
        </div>
      </div>

      {/* Dera Influence Deep Dive */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Dera/Vote Bank Influence — 40-50 Seats Affected
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Dera follower quantification, seat influence analysis</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {deraInfluence.map((dera) => (
            <div key={dera.name} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">{dera.name}</h4>
              <p className="text-2xl font-bold text-purple-600 mt-2">{dera.followers}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Followers</p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">Seats:</span>
                <span className="font-medium text-purple-600">{dera.seats}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Region:</span>
                <span className="font-medium text-purple-600">{dera.region}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-600 dark:text-red-300">
            <strong>Ram Rahim Parole Pattern:</strong> Released on parole 15+ times since 2017 — pattern aligns with election cycles. Dera Sacha Sauda (53L followers) influence strongest in Malwa region.
          </p>
        </div>
      </div>

      {/* Digital Counter Campaign */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Counter Campaign Infrastructure
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Digital counter campaign strategy document</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {digitalCampaignData.map((campaign) => (
            <div key={campaign.platform} className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{campaign.platform}</h4>
              <p className="text-lg font-bold text-slate-600 dark:text-slate-400 mt-2">{campaign.budget}</p>
              <p className="text-xs text-slate-500 mt-1">Scope: {campaign.scope}</p>
              <p className="text-xs text-slate-500">Target: {campaign.target}</p>
              <p className="text-xs text-slate-500">Coverage: {campaign.coverage}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Total Budget:</strong> INR 83-140 Lakh for Truth Stack counter-narrative + digital war room + ground outreach targeting AAP misgovernance narratives.
          </p>
        </div>
      </div>

      {/* Cost Efficiency Benchmarks (from MP9-014) */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          Cost Efficiency Benchmarks & ROI
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Cost-per-voter by channel • Waste reduction • Battleground optimization (MP9-014)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="WhatsApp Contact"
            value="₹0.10-0.35"
            subtitle="Per voter reached"
            color="bg-green-500"
          />
          <MetricCard
            title="SMS Contact"
            value="₹0.15-0.40"
            subtitle="Per voter reached"
            color="bg-blue-500"
          />
          <MetricCard
            title="Door-to-Door"
            value="₹15-40"
            subtitle="Per productive contact"
            color="bg-orange-500"
          />
          <MetricCard
            title="GOTV Contact"
            value="₹15-40"
            subtitle="Per voter who voted"
            color="bg-teal-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Channel ROI Rankings</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-2"><Badge variant="success">HIGHEST</Badge><span>Digital (3.5-5x ROI vs traditional)</span></div>
              <div className="flex items-center gap-2"><Badge variant="success">HIGH</Badge><span>WhatsApp/SMS (INR 0.10-0.40/contact)</span></div>
              <div className="flex items-center gap-2"><Badge variant="success">HIGH</Badge><span>Canvassing (INR 15-35/contact, 3-4x conversion)</span></div>
              <div className="flex items-center gap-2"><Badge variant="info">MEDIUM</Badge><span>Social Media (INR 0.80-2.50/impression)</span></div>
              <div className="flex items-center gap-2"><Badge variant="warning">LOW</Badge><span>Rallies (INR 30-150/attendee)</span></div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Battleground 60/30/10 Rule</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">60% spend →</span><span className="font-medium">15-20 battleground seats (within 5% margin)</span></div>
              <div className="flex justify-between"><span className="text-slate-600">30% spend →</span><span className="font-medium">30-40 swing constituencies</span></div>
              <div className="flex justify-between"><span className="text-slate-600">10% spend →</span><span className="font-medium">60+ safe seats (morale/candidate support)</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Key Insight:</strong> Digital channels deliver 3-5x better ROI than traditional media in Indian context. AAP won 2022 partially attributed to 2.2x per-voter spend in targeted seats vs Congress spreading thin.</p>
        </div>
      </div>

      {/* Urban & Swing Voter Patterns */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban & Swing Voter Patterns
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Urban Non-Jat Pattern</h4>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">• Anti-AAP urban swing visible in 2024</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• Pro-Congress shift among traders, professionals</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• AAP urban dominance eroding slowly</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• Youth still AAP-leaning but enthusiasm down</p>
            </div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Caste Census Demand</h4>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">• Congress committed to caste census if elected</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• OBC权益 movement gaining momentum</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• AAP ambiguous on caste census</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• BJP opposed (Constitutional validity questions)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Competition Seats */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Key Competition Seats
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <span className="font-medium text-slate-700 dark:text-slate-300">Ludhiana North</span>
              <div className="flex gap-2">
                <Badge variant="danger">AAP</Badge>
                <span className="text-sm text-slate-500">vs Congress</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <span className="font-medium text-slate-700 dark:text-slate-300">Jalandhar North</span>
              <div className="flex gap-2">
                <Badge variant="warning">SAD</Badge>
                <span className="text-sm text-slate-500">vs AAP</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <span className="font-medium text-slate-700 dark:text-slate-300">Patiala</span>
              <div className="flex gap-2">
                <Badge variant="success">Congress</Badge>
                <span className="text-sm text-slate-500">vs AAP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Counter-Narrative Strategy
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">Against AAP</p>
              <p className="mt-1 text-sm text-slate-500">&quot;Delhi: 70% school buses sold, liquor policy lost 1000s Cr, water bill increased 3x&quot;</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">Against SAD</p>
              <p className="mt-1 text-sm text-slate-500">&quot;15 years SAD rule: Drugs flooded Punjab, farmers left helpless, youth destroyed&quot;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Religious Politics & Sikh Issues */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Religious Politics & Sikh Issues
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Key flashpoints affecting Sikh vote bank alignment</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Jaagot Jot Act 2026</h4>
            <div className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <p>• Life imprisonment for sacrilege</p>
              <p>• Passed unanimously April 13</p>
              <p>• Akal Takht demands rollback</p>
              <p>• AAP vs religious authority</p>
            </div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">SGPC Frozen Since 2011</h4>
            <div className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
              <p>• SAD (Badal) controls SGPC</p>
              <p>• No elections for 15 years</p>
              <p>• 30+ members deceased</p>
              <p>• Religious voter infrastructure</p>
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">7% Conviction Rate</h4>
            <div className="mt-2 space-y-1 text-sm text-purple-600 dark:text-purple-300">
              <p>• Only 44/597 cases convicted</p>
              <p>• 2015 Bargari/Kotkapura</p>
              <p>• AAP failed on justice promise</p>
              <p>• Congress opportunity</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">1984 Justice Issue</h4>
            <div className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
              <p>• BJP courts Sikh voters</p>
              <p>• Congress leadership gap</p>
              <p>• 40+ years unresolved</p>
              <p>• Emotional voter leverage</p>
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Kartarpur Corridor</h4>
            <div className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
              <p>• BJP project facilitation</p>
              <p>• Pakistan corridor to Guru</p>
              <p>• 2019 inauguration</p>
              <p>• Sikh goodwill narrative</p>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Langar GST Waiver</h4>
            <div className="mt-2 space-y-1 text-sm text-orange-600 dark:text-orange-300">
              <p>• GST on langar purchases</p>
              <p>• Community kitchen support</p>
              <p>• BJP minority outreach</p>
              <p>• AAP governance credit claim</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Congress Position:</strong> Sukhpal Singh Khaira raised Justice Ranjit Singh Commission findings implicating Ram Rahim in 2015 sacrilege (April 2026 Assembly). Congress positioning as party willing to pursue true justice vs AAP&apos;s &quot;new law instead of delivery&quot; approach.
          </p>
        </div>
      </div>

      {/* SC Reserved Seats Alert */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">AAP Won 29 of 34 SC Reserved Seats (~85%) in 2022</p>
            <p className="text-sm text-red-600 dark:text-red-300">Critical Dalit voter dominance. AAP converted social welfare into political capital. Congress must reclaim SC voter trust.</p>
          </div>
        </div>
      </div>

      {/* Top 20 Vulnerable AAP Seats - Complete List */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Seat Vulnerability — Top 10 Critical Flips
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: AAP MLA performance audit, 9.5/10 max vulnerability scoring</p>

        <div className="mt-4 space-y-4">
          {topVulnerableSeats.map((seat, index) => (
            <div key={seat.seat} className={`rounded-lg border-2 p-4 ${
              seat.vulnerability >= 9.0 ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20" :
              seat.vulnerability >= 8.0 ? "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20" :
              "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-slate-500">#{index + 1}</span>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{seat.seat}</h4>
                    <span className="text-sm text-slate-500">— {seat.mla}</span>
                    <Badge variant={seat.vulnerability >= 9.0 ? "danger" : seat.vulnerability >= 8.0 ? "warning" : "default"}>
                      {seat.vulnerability}/10
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{seat.issue}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xs text-slate-500">Flip Probability</p>
                  <p className={`text-xl font-bold ${
                    seat.flipProbability >= 80 ? "text-red-600" :
                    seat.flipProbability >= 70 ? "text-orange-600" :
                    "text-yellow-600"
                  }`}>{seat.flipProbability}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2022 Margin Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          2022 Margin Analysis — Flippable Seats
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">20-25 Seats</h4>
            <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">Margin under 15,000 votes — flippable territory</p>
            <p className="mt-1 text-xs text-slate-500">Requires targeted candidate + local issue push</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">10-15 Seats</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">Margin under 10,000 votes — highly vulnerable</p>
            <p className="mt-1 text-xs text-slate-500">Priority for Congress flip strategy</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Doaba Region Weakness</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">AAP won only 13 of 23 Doaba seats in 2022. Their weakest region.</p>
            <p className="mt-1 text-xs text-slate-500">23 seats total — Congress opportunity</p>
          </div>
        </div>
      </div>

      {/* AAP 2027 Seat Projections & Vulnerability Assessment */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP 2027 Seat Projections & Vulnerability Assessment
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-009 Voter Metrics Analysis</p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="AAP 2022 Actual"
            value="92"
            subtitle="Seats won"
            color="bg-orange-500"
          />
          <MetricCard
            title="AAP 2027 Projection"
            value="58-68"
            subtitle="Realistic range"
            trend="down"
            color="bg-red-500"
          />
          <MetricCard
            title="Swing Seats"
            value="25-30"
            subtitle="High vulnerability"
            trend="down"
            color="bg-yellow-500"
          />
          <MetricCard
            title="Net Swing Required"
            value="-24 to -34"
            subtitle="AAP net seat loss"
            trend="down"
            color="bg-red-500"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Vulnerability Drivers</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• Broken promises: Women stipend delayed 4 years</li>
              <li>• Drug crisis: 4 deadlines missed, drugs still pervasive</li>
              <li>• Jobs failure: 48-70K delivered vs 24 lakh promised (0.2-0.3%)</li>
              <li>• Governance: 63 MLAs in touch with Raghav Chadha (April 2026)</li>
              <li>• Defections: 7 Rajya Sabha MPs to BJP in April 2026</li>
            </ul>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Congress 2027 Math</h4>
            <ul className="mt-2 space-y-1 text-sm text-orange-600 dark:text-orange-300">
              <li>• Congress needs: Net +41 seats (18 → 59 majority)</li>
              <li>• Realistic target: 40-50 seats (net +22 to +32)</li>
              <li>• Regional swing: Malwa 6-8%, Doaba 12-15%, Majha 8-10%</li>
              <li>• Caste coalition: 70% non-Jat strategy</li>
              <li>• SC voters: Congress 42-48%, BSP 28-35% split</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Flip Probability by Region</h4>
          <DataTable
            headers={["Region", "Total Seats", "AAP 2022", "Flip Probability", "Net Swing Needed"]}
            rows={[
              ["Malwa", "69", "53", "12-15 seats (17-22%)", "6-8% swing to Congress"],
              ["Doaba", "23", "13", "6-8 seats (26-35%)", "12-15% swing to Congress"],
              ["Majha", "25", "19", "4-6 seats (16-24%)", "8-10% mixed swing"],
            ]}
          />
        </div>
      </div>

      {/* AAP vs BJP Relationship Dynamics */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP vs BJP Relationship Dynamics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-008 Party Structure Analysis</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">BJP's Punjab Strategy</h4>
            <ul className="mt-2 space-y-1 text-sm text-purple-600 dark:text-purple-300">
              <li>• &quot;Haryana Model&quot; replication: 6.6% → 18.6% vote share</li>
              <li>• Amit Shah March 2026: &quot;BJP will fight solo in 2027&quot;</li>
              <li>• 600+ mandals established (organizational grid)</li>
              <li>• Anti-conversion law promised</li>
              <li>• OBC outreach: 31% population target</li>
              <li>• Dalit outreach: 32% SC population</li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">BJP's Delhi Governance Attack</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• 70% school buses sold by AAP Delhi govt</li>
              <li>• Liquor policy lost 1000s Crores revenue</li>
              <li>• Water bill increased 3x in Delhi</li>
              <li>• &quot;Delhi model&quot; credibility gap nationally</li>
              <li>• 2024 Lok Sabha: AAP vote share collapsed 42% → 26%</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 text-center">
            <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">3x</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP vote share growth</p>
            <p className="text-xs text-slate-500">6.6% → 18.6%</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20 text-center">
            <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">7</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Rajya Sabha defections to BJP</p>
            <p className="text-xs text-slate-500">April 2026 mass shift</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20 text-center">
            <p className="text-3xl font-bold text-red-700 dark:text-red-400">16%</p>
            <p className="text-sm text-red-600 dark:text-red-300">AAP vote share collapse</p>
            <p className="text-xs text-slate-500">42% → 26% (2022-2024)</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Counter-narrative on AAP:</strong> BJP IT cell targets AAP's &quot;Delhi model&quot; with specific data points — 70% school buses sold, liquor policy failure causing 1000s Cr loss, water bill 3x increase. These feed into Punjab voter perception of AAP governance gap.
          </p>
        </div>
      </div>

      {/* AAP Internal Factions & Defection Risk */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Internal Factions & Defection Risk
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-008 Internal Dynamics</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Rebellion Signal: 63 MLAs</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              April 2026 signals — mass rebellion brewing. 63 AAP MLAs in touch with Raghav Chadha (former AAP Rajya Sabha MP who joined BJP). Source: Business Today, Indian Express.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">MLAs in contact</p>
                <p className="text-lg font-bold text-red-600">63</p>
              </div>
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Total MLAs</p>
                <p className="text-lg font-bold text-red-600">92</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Rajya Sabha Defection Wave</h4>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">
              April 2026: 7 of 10 Rajya Sabha MPs from other parties defected to BJP. Key AAP Punjab strategists jumped ship. Mass defection wave.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Defected to BJP</p>
                <p className="text-lg font-bold text-purple-600">7</p>
              </div>
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Original total</p>
                <p className="text-lg font-bold text-purple-600">10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Factional Risk Factors</h4>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">1.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Leadership Vacuum: Kejriwal's Delhi imprisonment creates authority gap</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">2.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Performance Failures: Women stipend delayed, drug promises broken</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">3.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Talent Drain: Key strategists defecting to BJP before elections</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">4.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">No Inner-Party Democracy: Centralized Delhi control alienates local leaders</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Defection Timeline Risk</h4>
          <DataTable
            headers={["Period", "Risk Level", "Trigger Event", "Probability"]}
            rows={[
              ["Pre-election 2026", "HIGH", "More MLAs cross to BJP before ticket distribution", "65-70%"],
              ["Post-ticket distribution", "MEDIUM", "Left-out candidates may defect", "40-50%"],
              ["Pre-poll 2027", "LOW-MEDIUM", "Last minute coalition talks", "25-35%"],
              ["Post-poll scenario", "DEPENDENT", "If AAP loses, mass exodus likely", "70-80%"],
            ]}
          />
        </div>
      </div>

      {/* MP10-002: Vote Share Forecasting */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          MP10-002: Vote Share Forecasting
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Published opinion polls • Confidence intervals • Swing calculation methodology
        </p>

        {/* Published Vote Share Projections */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Published Opinion Polls (March-April 2026)
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600">Congress (INC)</span>
                <span className="text-sm font-bold">30-33%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-orange-600">AAP</span>
                <span className="text-sm font-bold">26-27%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-purple-600">SAD</span>
                <span className="text-sm font-bold">19-20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-600">BJP</span>
                <span className="text-sm font-bold">13-14%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">Others</span>
                <span className="text-sm font-bold">8-11%</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Confidence Intervals
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Sampling Error</span>
                <span className="font-medium">+/- 3-4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Timing Error</span>
                <span className="font-medium">+/- 2-3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Turnout Error</span>
                <span className="font-medium">+/- 2-5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Model Error</span>
                <span className="font-medium">+/- 5-10%</span>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-600">
                <p className="text-xs text-slate-500">Berkeley Haas: Polls 95% confident but only 60% accurate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimum Winning Thresholds */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Minimum Winning Thresholds (117 seats, 4+ parties)
          </h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-xs text-red-600 dark:text-red-400">Landslide (&gt;80 seats)</p>
              <p className="text-lg font-bold text-red-700 dark:text-red-300">45-50%</p>
              <p className="text-xs text-red-500">vote share needed</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">Clear Majority (59-79)</p>
              <p className="text-lg font-bold text-orange-700 dark:text-orange-300">38-45%</p>
              <p className="text-xs text-orange-500">vote share needed</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs text-yellow-600 dark:text-yellow-400">Hung Assembly (50-58)</p>
              <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300">34-38%</p>
              <p className="text-xs text-yellow-500">vote share needed</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Opposition (&gt;40 seats)</p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">28-34%</p>
              <p className="text-xs text-blue-500">vote share needed</p>
            </div>
          </div>
        </div>

        {/* Swing Calculation */}
        <div className="mt-4 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
          <p className="text-sm text-cyan-700 dark:text-cyan-300">
            <strong>Uniform National Swing (UNS):</strong> Change in vote proportion since last election applied uniformly across constituencies. Limitation: Punjabi voting is volatile with regional variations. Caste dynamics create variable patterns. <strong>Key uncertainty:</strong> AAP governance record impact + SAD+BJP alliance status.
          </p>
        </div>

        {/* MP3 COMPETITOR INTELLIGENCE MISSING DATA - from MP3-SYNTHESIS */}
        <div className="mt-6 rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
            MP3 Missing Data - Competitor Intelligence (from MP3-SYNTHESIS)
          </h3>

          {/* Vote Efficiency Analysis */}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">AAP Vote Efficiency Ratio</p>
              <p className="text-2xl font-bold text-green-600">1.47x</p>
              <p className="text-xs text-slate-500">AAP won 62 seats with 42% vote (2022)</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Congress Vote Efficiency Ratio</p>
              <p className="text-2xl font-bold text-red-600">0.79x</p>
              <p className="text-xs text-slate-500">Congress won 18 seats with 22.9% vote (2022)</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">BJP Vote Efficiency Ratio</p>
              <p className="text-2xl font-bold text-orange-600">1.49x</p>
              <p className="text-xs text-slate-500">BJP won 29 seats with 19.5% vote (2022)</p>
            </div>
          </div>

          {/* Key Events Intelligence */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Tarn Taran By-election (Nov 2025)</p>
              <p className="text-xl font-bold text-red-600">Raja Warring - 4th, Lost Deposit</p>
              <p className="text-xs text-slate-500">Raja Warring's casteist remark cost Congress the seat; finished fourth, lost deposit. AAP won with Dr. Joginder Singh Mann (Mazhabi Sikh candidate).</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Dallewal 123-Day Hunger Strike</p>
              <p className="text-xl font-bold text-orange-600">Nov 2024 - Mar 2025</p>
              <p className="text-xs text-slate-500">Jagjit Singh Dallewal conducted hunger strike demanding legal MSP guarantee. Farmer protests ongoing since Feb 13, 2024 (300+ days at Shambhu, Khanauri borders).</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Waris Punjab De Margin</p>
              <p className="text-xl font-bold text-purple-600">197,120 votes</p>
              <p className="text-xs text-slate-500">Amritpal Singh's Waris Punjab De 2022 margin in Lok Sabha. Party competing with SAD for Panthic Sikh votes.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Sunil Kanugolu Ticket Selection</p>
              <p className="text-xl font-bold text-blue-600">Survey-Based Methodology</p>
              <p className="text-xs text-slate-500">Congress uses survey-based ticket selection; may override local preferences. Creates ticketless voter risk (4-7% potential loss).</p>
            </div>
          </div>

          {/* AAP CM Face Uncertainty */}
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-sm font-bold text-red-700 dark:text-red-400">AAP CM Face Uncertainty</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Whether Bhagwant Mann leads or is replaced for 2027 is UNRESOLVED. This is the single most impactful unknown for Congress campaign planning. Internal deliberations opaque.</p>
          </div>

          {/* Dalit Vote Migration Patterns */}
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Sub-Caste Dalit Voting Patterns (MP3-SYNTHESIS)</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-bold text-purple-600">Mazhabi Sikh (18-20%)</p>
                <p className="text-sm text-slate-600">AAP 75-80% loyalty; Congress damaged by Raja Warring controversy; SAD at lowest ebb</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-bold text-blue-600">Ravidassia/Ad-Dharmi (~8-10%)</p>
                <p className="text-sm text-slate-600">Congress traditional base but shifting to AAP; Doaba region (13 seats)</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-bold text-green-600">Valmiki (~4-5%)</p>
                <p className="text-sm text-slate-600">Congress base, BSP residual; Urban Doaba seats</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Dalit vote fragmentation is STRUCTURAL - cannot be consolidated behind one party. Four major sub-castes with different religious affiliations and historical loyalties.</p>
          </div>

          {/* BSP Organizational Strength by AC */}
          <div className="mt-4 rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">BSP Organizational Strength by AC</p>
            <div className="mt-2 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">SC-majority ACs (&gt;35% SC population):</span>
                <span className="font-bold text-orange-600">8-10 seats where BSP still commands 10-15% vote share</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Kingmaker potential:</span>
                <span className="font-bold text-red-600">Can determine winner between AAP and Congress in these seats</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Congress opportunity:</span>
                <span className="font-bold text-green-600">Dalit outreach + ticket allocation to Dalit candidates + specific welfare promises</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Risk:</span>
                <span className="font-bold text-red-600">If BSP fields independently in 15+ constituencies, three-way splitting hands seats to AAP</span>
              </div>
            </div>
          </div>

          {/* Dalit Vote Migration */}
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-sm font-bold text-amber-700 dark:text-amber-400">Dalit Vote Migration Intelligence</p>
            <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <p>BSP collapse accelerating - whether Dalit votes flow to Congress, AAP, or fragment is unknown at constituency level.</p>
              <p>Congress traditional SC backbone eroding to BSP (28-35% in some ACs) while Congress holds 42-48%.</p>
              <p>AAP making inroads through SC-focused welfare schemes and Dalit candidate deployment (Tarn Taran example).</p>
            </div>
          </div>

          {/* MP9-003 & MP9-014: Budget Allocation & Cost Benchmarks */}
          <div className="mt-6 rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-900/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-600 text-white">MP9-003</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-600 text-white">MP9-014</span>
              <h3 className="text-sm font-bold text-indigo-700 dark:text-indigo-400">Budget Allocation & Cost Benchmarks</h3>
            </div>

            {/* Budget Head Allocations */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Budget Head Allocations</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between"><span className="text-slate-500">Media & Publicity:</span><span className="font-medium">35-40%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Transport & Travel:</span><span className="font-medium">20-25%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Rally & Event:</span><span className="font-medium">15-20%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Candidate Support:</span><span className="font-medium">10-15%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Digital & IT:</span><span className="font-medium">8-10%</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Contingency:</span><span className="font-medium">5-8%</span></div>
              </div>
            </div>

            {/* Constituency Tier Allocation */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Constituency Tier Allocation</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-slate-500">Tier 1 (17-22% margin):</span><span className="font-medium">₹45-55 lakh</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Tier 2 (10-17% margin):</span><span className="font-medium">₹35-45 lakh</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Tier 3 (5-10% margin):</span><span className="font-medium">₹25-35 lakh</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Tier 4 (0-5% margin):</span><span className="font-medium">₹15-25 lakh</span></div>
              </div>
            </div>

            {/* Cost-Per-Vote Benchmarks */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Cost-Per-Vote Benchmarks</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-slate-500">Minimum viable (floor):</span><span className="font-medium">₹80-100/vote</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Standard campaign:</span><span className="font-medium">₹120-180/vote</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Aggressive push:</span><span className="font-medium">₹200-350/vote</span></div>
              </div>
            </div>

            {/* AICC Allocation Details */}
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">AICC Allocation Details</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-slate-500">Central release:</span><span className="font-medium">₹85-110 Cr (40-45%)</span></div>
                <div className="flex justify-between"><span className="text-slate-500">State allocation:</span><span className="font-medium">₹75-90 Cr (35-40%)</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Emergency reserve:</span><span className="font-medium">₹25-35 Cr (15%)</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Release schedule:</span><span className="font-medium">Phase 1 (40%) → Phase 2 (35%) → Phase 3 (25%)</span></div>
              </div>
            </div>
          </div>

          {/* MP9-004: Peak Staff Structure — 370 Personnel */}
          <div className="mt-4 rounded-lg border border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-600 text-white">MP9-004</span>
              <h3 className="text-sm font-bold text-teal-700 dark:text-teal-400">Peak Staff Structure — 370 Personnel</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400">Core Leadership</p>
                  <p className="text-slate-600 dark:text-slate-400">8-10 persons</p>
                  <p className="text-slate-500">CIC, Treasurer, Media, Comms, Org, 3 VP positions</p>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400">State HQ Staff</p>
                  <p className="text-slate-600 dark:text-slate-400">25-35 persons</p>
                  <p className="text-slate-500">Department heads, assistants, support</p>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400">District Coordinators</p>
                  <p className="text-slate-600 dark:text-slate-400">69-92 persons</p>
                  <p className="text-slate-500">3-4 per district × 23 districts</p>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-semibold text-teal-600 dark:text-teal-400">Constituency Staff</p>
                  <p className="text-slate-600 dark:text-slate-400">117-234 persons</p>
                  <p className="text-slate-500">3-6 per constituency × 39 seats</p>
                </div>
              </div>

              {/* War Room Command Structure */}
              <div className="p-2 bg-teal-100 dark:bg-teal-900/40 rounded">
                <p className="font-semibold text-teal-700 dark:text-teal-300 mb-1">War Room Command Structure</p>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="text-center"><span className="font-medium">Command</span><p className="text-slate-600">1 Chief</p></div>
                  <div className="text-center"><span className="font-medium">Operations</span><p className="text-slate-600">3 Deputy</p></div>
                  <div className="text-center"><span className="font-medium">Districts</span><p className="text-slate-600">23 FOs</p></div>
                  <div className="text-center"><span className="font-medium">Micro</span><p className="text-slate-600">117+ MCs</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* MP9-008: Rally Venue Specifications & Device Procurement */}
          <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-600 text-white">MP9-008</span>
              <h3 className="text-sm font-bold text-orange-700 dark:text-orange-400">Rally Venue Specifications & Device Procurement</h3>
            </div>

            {/* Rally Venue Specs */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Rally Venue Specifications</p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-medium text-orange-600">Jumbo Rally (Majha/MalwaDoaba)</p>
                  <div className="grid grid-cols-3 gap-2 mt-1 text-slate-600">
                    <span>Min attendance: 25,000</span>
                    <span>Space: 30,000+ sqft</span>
                    <span>Stage: 40×25 ft</span>
                  </div>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-medium text-orange-600">District-Level Rally</p>
                  <div className="grid grid-cols-3 gap-2 mt-1 text-slate-600">
                    <span>Min attendance: 5,000</span>
                    <span>Space: 8,000 sqft</span>
                    <span>Stage: 25×15 ft</span>
                  </div>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded">
                  <p className="font-medium text-orange-600">Nukkad Sabah</p>
                  <div className="grid grid-cols-3 gap-2 mt-1 text-slate-600">
                    <span>Min attendance: 500-1,000</span>
                    <span>Space: 2,000 sqft</span>
                    <span>Stage: 15×10 ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Procurement Table */}
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Device Procurement (39 Constituencies)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-1 text-slate-500">Item</th>
                      <th className="text-right py-1 text-slate-500">Quantity</th>
                      <th className="text-right py-1 text-slate-500">Unit Cost</th>
                      <th className="text-right py-1 text-slate-500">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 dark:text-slate-400">
                    <tr className="border-b border-slate-100 dark:border-slate-800"><td>Smartphones (2/constituency)</td><td className="text-right">78</td><td className="text-right">₹8,000</td><td className="text-right font-medium">₹6.24 lakh</td></tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800"><td>SIM Cards (4/constituency)</td><td className="text-right">156</td><td className="text-right">₹500</td><td className="text-right font-medium">₹0.78 lakh</td></tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800"><td>Projectors (1/3 constituencies)</td><td className="text-right">13</td><td className="text-right">₹25,000</td><td className="text-right font-medium">₹3.25 lakh</td></tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800"><td>LED Vans (2 regional)</td><td className="text-right">2</td><td className="text-right">₹8 lakh</td><td className="text-right font-medium">₹16 lakh</td></tr>
                    <tr className="font-medium"><td>Total Device Budget</td><td className="text-right" colSpan={2}></td><td className="text-right text-orange-600">₹26.27 lakh</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* MP9-009: Nomination Filing Assistance & MCC Violation Response */}
          <div className="mt-4 rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-pink-600 text-white">MP9-009</span>
              <h3 className="text-sm font-bold text-pink-700 dark:text-pink-400">Nomination Filing Assistance & MCC Violation Response</h3>
            </div>

            <div className="space-y-4 text-xs">
              {/* Document Checklist */}
              <div>
                <p className="font-semibold text-slate-600 dark:text-slate-400 mb-1">Document Checklist for Nomination</p>
                <div className="grid grid-cols-2 gap-1 text-slate-500">
                  <span>• Nomination paper (Form 2A)</span>
                  <span>• Affidavit (Form 26)</span>
                  <span>• Candidate oath (Form 23)</span>
                  <span>• Criminal antecedents affidavit</span>
                  <span>• Asset & liability declaration</span>
                  <span>• Educational qualification proof</span>
                  <span>• PAN card copy</span>
                  <span>• 4 passport photos</span>
                </div>
              </div>

              {/* Filing Support Structure */}
              <div>
                <p className="font-semibold text-slate-600 dark:text-slate-400 mb-1">Filing Support Structure</p>
                <div className="flex gap-2 text-slate-500">
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 rounded">Centralized drafting team at State HQ</span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 rounded">One dedicated helper per candidate</span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 rounded">Legal team or 48-hr pre-filing review</span>
                </div>
              </div>

              {/* MCC Violation Protocols */}
              <div>
                <p className="font-semibold text-slate-600 dark:text-slate-400 mb-1">MCC Violation Response Protocols</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">1</span>
                    <span className="text-slate-600 dark:text-slate-400">Level 1: Document violation → 24-hour cure period via returning officer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">2</span>
                    <span className="text-slate-600 dark:text-slate-400">Level 2: Model Code breach → ECI complaint with evidence compilation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">3</span>
                    <span className="text-slate-600 dark:text-slate-400">Level 3: Paid news allegation → Media certification + rebuttal filing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-800 text-white flex items-center justify-center text-xs">4</span>
                    <span className="text-slate-600 dark:text-slate-400">Level 4: Election expenditure violation → SC/ST protection via ECI oversight</span>
                  </div>
                </div>
              </div>

              {/* 48-Hour Silence Period */}
              <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded">
                <p className="font-semibold text-pink-700 dark:text-pink-300">48-Hour Silence Period Protocol</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">No public rallies, canvassing, or electioneering after 6 PM, 2 days before polling. War room switches to monitoring-only mode. Booth-level agents activated.</p>
              </div>

              {/* Pre-Certification Workflow */}
              <div className="p-2 bg-white dark:bg-slate-800 rounded">
                <p className="font-semibold text-pink-600 dark:text-pink-400 mb-1">Pre-Certification Workflow</p>
                <div className="flex items-center gap-1 text-slate-500">
                  <span className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">Draft</span>
                  <span>→</span>
                  <span className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">Legal Review</span>
                  <span>→</span>
                  <span className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">AICC Approval</span>
                  <span>→</span>
                  <span className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">Publication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SYNTHESIS M1: Competitor Intelligence */}
      <div className="mt-6 rounded-xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
            M1
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">MEGA-PILLAR 3: Competitor Intelligence — Synthesis</p>
            <p className="text-sm text-red-600 dark:text-red-300">Punjab Congress 2027 Election Intelligence | May 2026</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">The Political Landscape: Fractured Competition, Unified Opportunity</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-red-50 p-3 text-center dark:bg-red-900/30">
              <p className="text-xs text-slate-500">AAP Assembly 2022</p>
              <p className="text-2xl font-bold text-red-600">92/117</p>
              <p className="text-xs text-slate-400">Historic victory</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 text-center dark:bg-red-900/30">
              <p className="text-xs text-slate-500">AAP Lok Sabha 2024</p>
              <p className="text-2xl font-bold text-red-400">3/13</p>
              <p className="text-xs text-slate-400">Seats led in 32/117</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-center dark:bg-orange-900/30">
              <p className="text-xs text-slate-500">SAD Status</p>
              <p className="text-2xl font-bold text-orange-600">SPLIT</p>
              <p className="text-xs text-slate-400">April 2025</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/30">
              <p className="text-xs text-slate-500">BJP 2027</p>
              <p className="text-2xl font-bold text-blue-600">SOLO</p>
              <p className="text-xs text-slate-400">Amit Shah declaration</p>
            </div>
          </div>
        </div>

        {/* AAP Vulnerabilities */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">AAP Critical Vulnerabilities</h4>
          <div className="space-y-3">
            <div className="rounded-lg border border-red-200 p-3 dark:border-red-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-red-700">Drug Crisis Failure</p>
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">CRITICAL</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">6.6 million users, 697,000 child users, overdose deaths "spiraling"</p>
            </div>
            <div className="rounded-lg border border-orange-200 p-3 dark:border-orange-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-orange-700">Employment Lie</p>
                <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700">CRITICAL</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">25 lakh promised vs ~65,000 actual (2.6% delivery rate)</p>
            </div>
            <div className="rounded-lg border border-yellow-200 p-3 dark:border-yellow-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-yellow-700">Corruption Irony</p>
                <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">HIGH</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Minister arrest May 2026, sand mining, liquor, taxi permits</p>
            </div>
          </div>
        </div>

        {/* April 2026 Defection */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">Seismic Shift: April 2026 Defection</h4>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/40">
            <p className="text-sm font-semibold text-red-700 dark:text-red-300">7 Rajya Sabha MPs defected to BJP</p>
            <p className="text-xs text-slate-600 mt-1">Including key AAP strategists Raghav Chadha and Sandeep Pathak</p>
            <p className="text-sm text-red-600 mt-2 font-medium">This fundamentally alters Punjab's 2027 electoral calculus</p>
          </div>
        </div>

        {/* Party Vote Share Trajectories */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">Party Trajectory Analysis</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-2 text-slate-500">Party</th>
                  <th className="text-right py-2 text-slate-500">2022 Result</th>
                  <th className="text-right py-2 text-slate-500">2024 Result</th>
                  <th className="text-left py-2 text-slate-500">Trajectory</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-400">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 font-medium text-blue-600">Congress</td>
                  <td className="text-right">18 seats</td>
                  <td className="text-right">3 seats</td>
                  <td><span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Swinging UP</span></td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 font-medium text-cyan-600">AAP</td>
                  <td className="text-right">92 seats</td>
                  <td className="text-right">3 seats</td>
                  <td><span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">COLLAPSE</span></td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 font-medium text-green-600">SAD</td>
                  <td className="text-right">3 seats</td>
                  <td className="text-right">3 seats</td>
                  <td><span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700">SPLIT</span></td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-orange-600">BJP</td>
                  <td className="text-right">2 seats</td>
                  <td className="text-right">8 seats</td>
                  <td><span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">Growing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BJP Fundraising Dominance */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">Resource Asymmetry: BJP vs Congress</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-900/30">
              <p className="text-xs text-slate-500">BJP Donations FY2024-25</p>
              <p className="text-2xl font-bold text-red-600">₹6,088 Cr</p>
              <p className="text-xs text-slate-400">ADR India, December 2025</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 text-center dark:bg-orange-900/30">
              <p className="text-xs text-slate-500">Congress FY2024-25</p>
              <p className="text-2xl font-bold text-orange-600">₹522 Cr</p>
              <p className="text-xs text-slate-400">~12x less</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 text-center dark:bg-yellow-900/30">
              <p className="text-xs text-slate-500">Congress Strategy</p>
              <p className="text-lg font-bold text-yellow-600">Efficiency</p>
              <p className="text-xs text-slate-400">Out-organize vs out-spend</p>
            </div>
          </div>
        </div>

        {/* Congress Opportunities */}
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/30">
          <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Congress Opportunity Assessment</h4>
          <div className="space-y-2 text-xs">
            <p><span className="font-semibold text-green-600">Anti-Incumbency:</span> AAP government at 4+ years with failed promises on drugs, jobs, MSP</p>
            <p><span className="font-semibold text-green-600">Vote Split:</span> SAD split benefits Congress in Malwa; BJP capturing anti-AAP protest votes</p>
            <p><span className="font-semibold text-green-600">CM Face:</span> Unresolved - decision deferred to high command; multiple candidates in play</p>
            <p><span className="font-semibold text-green-600">Window:</span> 9 months to February 2027 - narrow window to capitalize on anti-incumbency</p>
          </div>
        </div>
      </div>

      {/* A-03-28: Opposition Party Finances */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          A-03-28: Opposition Party Finances
        </h3>
        <p className="text-xs text-slate-500 mb-4">Source: ADR India, The Federal, The Print (Verified - Multiple sources 2025-2026)</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">AAP Donations 2024-25</p>
            <p className="text-2xl font-bold text-orange-600">Rs {oppositionFinances.aap.donations2024_25} Cr</p>
            <p className="text-xs text-slate-500 mt-1">Prudent Electoral Trust: 43% of funds</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400">SAD Status</p>
            <p className="text-xl font-bold text-red-600">CRIPPLED</p>
            <p className="text-xs text-slate-500 mt-1">Donor base collapsed since 2017</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">BJP National 2024-25</p>
            <p className="text-2xl font-bold text-blue-600">Rs {oppositionFinances.bjp.nationalDonations2024_25} Cr</p>
            <p className="text-xs text-slate-500 mt-1">Strongest financial position</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-semibold text-green-700 dark:text-green-400">Congress National 2024-25</p>
            <p className="text-2xl font-bold text-green-600">Rs {oppositionFinances.congress.nationalDonations2024_25} Cr</p>
            <p className="text-xs text-slate-500 mt-1">Moderate resources</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">AAP Financial Position</h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• Print ads 2022-25: Rs {oppositionFinances.aap.printAds2022_25} crore</li>
              <li>• Central 2022 spending: Rs {oppositionFinances.aap.centralSpending2022} crore</li>
              <li>• Online reputation mgmt: Rs 10.59 crore (May 2026)</li>
              <li>• State debt: Rs {oppositionFinances.aap.stateDebt} lakh crore</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700/50">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">SAD Financial Crisis</h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• 6 months: no funds from senior leaders</li>
              <li>• Defaulted on EC filing requirements</li>
              <li>• Lost governing status = lost informal quotas</li>
              <li>• Internal split fragmented remaining resources</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <strong>Congress Strategy:</strong> With BJP's 12x financial advantage, Congress must maximize efficiency through booth-level organizing,
            targeted voter contact, and leveraging anti-incumbency rather than matching spending. Resource allocation should prioritize
            high-margin seats in Malwa and Doaba regions.
          </p>
        </div>
      </div>

      {/* A-03-30: Opposition IT & Social Media */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          A-03-30: Opposition IT Cell & Social Media
        </h3>
        <p className="text-xs text-slate-500 mb-4">Source: BJP IT Cell Wikipedia, Tribune India, Indian Express (Verified - Multiple sources 2025-2026)</p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-400">AAP Digital</h4>
            <ul className="mt-2 space-y-1 text-xs text-orange-600 dark:text-orange-300">
              <li>• Reputation mgmt: Rs 10.59 Cr (Adglobal360)</li>
              <li>• 5 Zone Coordinators (June 2025)</li>
              <li>• Platforms: FB, X, Insta, YouTube, WhatsApp</li>
              <li>• CM Mann: Active on Instagram, X</li>
            </ul>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">BJP IT Infrastructure</h4>
            <ul className="mt-2 space-y-1 text-xs text-blue-600 dark:text-blue-300">
              <li>• Social media workers: 150,000</li>
              <li>• Core employees: 5,000-6,000</li>
              <li>• National Convener: Amit Malviya (since 2015)</li>
              <li>• Punjab: Expanding under Sunil Jakhar</li>
            </ul>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">SAD Digital</h4>
            <ul className="mt-2 space-y-1 text-xs text-green-600 dark:text-green-300">
              <li>• Status: WEAK</li>
              <li>• Traditional grassroots focus</li>
              <li>• Limited vs AAP/BJP</li>
              <li>• Focus: Agriculture, Sikh issues</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">WhatsApp: Dominant Political Platform</h4>
          <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">
            All parties use WhatsApp for voter outreach and internal coordination. TMC model (150,000 groups, 1 crore+ members)
            shows what's achievable. WhatsApp forwards during Operation Sindoor (May 2025) spread massive misinformation - Amritsar
            district experienced viral false attack reports causing real evacuations.
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-xs font-semibold text-red-700">Fake News Operations</p>
            <p className="text-xs text-red-600 mt-1">Profile fabrication, manipulated media, deepfakes, chain forwards. Punjab Police cyber cells active.</p>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p className="text-xs font-semibold text-yellow-700">CM Mann Misinformation Target</p>
            <p className="text-xs text-yellow-600 mt-1">10 individuals registered for fake helicopter flight data, fake "Deep Mangli" Facebook profile.</p>
          </div>
        </div>
      </div>

      {/* BJP Punjab Deep-Dive - from research-P3/bjp-punjab */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            BP
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">BJP Punjab Intelligence</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">From research-P3/bjp-punjab | Updated May 2026</p>
          </div>
        </div>

        {/* Key Leadership */}
        <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="State President"
            value="Sunil Jakhar"
            subtitle="Defected from Congress, May 2022"
            color="bg-orange-500"
          />
          <MetricCard
            title="Working President"
            value="Ashwani Sharma"
            subtitle="Operational leadership"
            color="bg-orange-500"
          />
          <MetricCard
            title="Go Solo Filing"
            value="Feb 12, 2026"
            subtitle="Amit Shah Badlav Rally Moga"
            color="bg-green-500"
          />
          <MetricCard
            title="Senior Advisor"
            value="Amarinder Singh"
            subtitle="Joined BJP Sep 2022, 83 yrs"
            color="bg-slate-500"
          />
        </div>

        {/* 2024 Lok Sabha Performance */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">2024 Lok Sabha Performance</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">18.56%</p>
              <p className="text-xs text-slate-500">Vote Share</p>
              <p className="text-xs text-green-600">Doubled from 9.63%</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">0</p>
              <p className="text-xs text-slate-500">Lok Sabha Seats</p>
              <p className="text-xs text-slate-400">Despite vote surge</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">23/117</p>
              <p className="text-xs text-slate-500">Segments Led</p>
              <p className="text-xs text-slate-400">Led but lost all</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">5/13</p>
              <p className="text-xs text-slate-500">BJP LS Seats (Punjab)</p>
              <p className="text-xs text-slate-400">Best-ever Punjab result</p>
            </div>
          </div>
        </div>

        {/* Electoral History */}
        <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <h4 className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Farm Laws Legacy - Electoral Damage</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">2022 Assembly</p>
              <p className="text-xl font-bold text-red-600">6.6%</p>
              <p className="text-xs text-slate-500">2 seats - devastated</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">2024 Recovery</p>
              <p className="text-xl font-bold text-yellow-600">18.56%</p>
              <p className="text-xs text-slate-500">0 seats - partial recovery</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Recovery Pattern</p>
              <p className="text-xl font-bold text-green-600">3x growth</p>
              <p className="text-xs text-slate-500">Vote share tripled</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-yellow-600">Farm Laws 2020-21 protests devastated BJP's rural base. BJP support among Sikh voters collapsed. Recovery in 2024 came from urban/Dalit/OBC consolidation.</p>
        </div>

        {/* Caste Coalition Target */}
        <div className="mb-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">Caste Coalition Target: 70% Non-Jat Strategy</h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">SC (Dalit)</p>
              <p className="text-2xl font-bold text-purple-600">31.94%</p>
              <p className="text-xs text-slate-500">Population</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">OBC</p>
              <p className="text-2xl font-bold text-orange-600">31%</p>
              <p className="text-xs text-slate-500">Population</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Urban Hindus</p>
              <p className="text-2xl font-bold text-blue-600">10-15%</p>
              <p className="text-xs text-slate-500">Target segment</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-purple-600">BJP's "70% non-Jat" voter strategy aims to replicate Haryana success. Targets Dalit outreach at 32% SC population.</p>
        </div>

        {/* Dera Outreach */}
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Dera Outreach Strategy</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-sm font-semibold text-green-600">Radha Soami Beas</p>
              <p className="text-xs text-slate-500 mt-1">40M+ followers across Punjab</p>
              <p className="text-xs text-slate-500">Diffuse influence - all 117 seats</p>
            </div>
            <div className="rounded bg-white p-3 dark:bg-slate-800">
              <p className="text-sm font-semibold text-green-600">Dera Sachkhand Ballan</p>
              <p className="text-xs text-slate-500 mt-1">PM Modi visit January 2026</p>
              <p className="text-xs text-slate-500">Key Dalit outreach center</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-green-600">BJP cultivating dera networks for voter mobilization. PM Modi visit to Dera Sachkhand Ballan signals strategic dera alignment.</p>
        </div>
      </div>

      {/* A-03-29: RSS-BJP Connection */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          A-03-29: RSS-BJP Connection in Punjab
        </h3>
        <p className="text-xs text-slate-500 mb-4">Source: RSS Punjab Prant data, Analyst Ashutosh Kumar (Panjab University) (Verified)</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20 text-center">
            <p className="text-3xl font-bold text-orange-600">1,700+</p>
            <p className="text-xs text-slate-500">RSS Swayamsevaks deployed</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 text-center">
            <p className="text-3xl font-bold text-blue-600">600+</p>
            <p className="text-xs text-slate-500">BJP Mandals</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 text-center">
            <p className="text-3xl font-bold text-green-600">150+</p>
            <p className="text-xs text-slate-500">Vidya Bharati Schools</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20 text-center">
            <p className="text-3xl font-bold text-purple-600">32%</p>
            <p className="text-xs text-slate-500">Dalit Population Target</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">RSS 5-Point Punjab Victory Plan</h4>
          <div className="grid gap-3 md:grid-cols-5">
            {rssBjpConnection.fivePointVictoryPlan.map((point, idx) => (
              <div key={idx} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs font-semibold text-indigo-600">{point.point}</p>
                <p className="text-xs text-slate-500 mt-1">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400">Samrasta Abhiyan (Cremation Grounds)</h4>
            <p className="text-xs text-amber-600 mt-1">250 villages targeted with separate Dalit/upper caste cremation grounds. Volunteers creating "model villages" with shared facilities. Secondary sites repurposed as yoga centers/gyms.</p>
          </div>
          <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
            <h4 className="text-sm font-semibold text-rose-700 dark:text-rose-400">Sant Ravidas 650th Anniversary</h4>
            <p className="text-xs text-rose-600 mt-1">June 2026-June 2027 celebrations at block level. Dera Sachkhand Ballan as key center. Parallel temple installations. AAP countered with own celebrations.</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <strong>Intelligence Assessment:</strong> BJP-RSS combine is executing "Haryana Model" in Punjab - granular caste mapping + booth-level
            mobilization. Political analyst Ashutosh Kumar: "No other party has tried to tap this potential so systematically...
            What the BJP is attempting is to convert cultural assertion into political alignment."
          </p>
        </div>
      </div>

    </div>
  );
}
