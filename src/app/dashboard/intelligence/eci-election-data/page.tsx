"use client";

import { MetricCard, DataTable, Badge, ProgressBar } from "@/components/ui/MetricCard";

// ECI Timeline Data
const eciTimeline = {
  currentPhase: "Pre-election period",
  summaryIssuance: "October 2026 (Expected)",
  electionDate: "February 2027 (Expected)",
  daysRemaining: "~270 days",
};

const voterRegistrationData = {
  totalVoters: "2.14 crore",
  firstTimeVoters: "5.38 lakh",
  firstTimePercentage: "2.5%",
  registrationTrend: "Steady",
};

// ECI Readiness Data
const eciReadinessData = {
  totalVoters: "2.14 Cr (214.57 lakh)",
  firstTimeVoters: "5.38 lakh",
  pollingStations: "22,000+",
  bloDeployees: "24,453",
  ceoPunjab: "Anindita Mitra",
  sirTimeline: {
    specialIntensiveRevision: "June 25, 2026",
    draftRollPublication: "July 24, 2026",
    finalRollPublication: "October 1, 2026",
    electionDate: "February 2027",
  },
  voterDemographics: {
    scVoters: "32% of electorate",
    firstTimePercentage: "2.5%",
    genderRatio: "89:100 (Male:Female)",
  },
};

// Security Deployment Data
const securityDeploymentData = {
  totalPersonnel: "1 Lakh+",
  capfCompanies: "1,050",
  districts: "23",
  criticalBooths: "5,000+",
  vulnerableBooths: 5337,
  vulnerablePercentage: 22,
  highRiskRegions: ["Tarn Taran", "Qadian", "Moga", "Ferozpur", "Ajnala"],
};

// Criminalization Data
const criminalizationData = {
  candidatesWithCriminalCases: 25,
  winningMlasWithCriminal: 50,
  candidatesDeclaredGuilty: 315,
  murderCases: 42,
  crimeTrends: [
    { category: "Murder", punjabPercentage: "13.4%", nationalAverage: "8.8%", trend: "Higher" },
    { category: "Attempt to Murder", punjabPercentage: "14.1%", nationalAverage: "9.2%", trend: "Higher" },
    { category: "Kidnapping", punjabPercentage: "6.3%", nationalAverage: "4.1%", trend: "Higher" },
    { category: "Dacoity/Robbery", punjabPercentage: "3.5%", nationalAverage: "2.8%", trend: "Moderate" },
    { category: "Criminal Intimidation", punjabPercentage: "18.7%", nationalAverage: "15.2%", trend: "Higher" },
  ],
};

// Expenditure Limits
const expenditureLimitsData = {
  perCandidate: "INR 40 Lakh",
  totalStateLimit: "INR 46.8 Cr (117 seats)",
  electoralBonds: "Struck Down (SC 2024)",
  categories: [
    "Public meetings/rallies",
    "Digital/social media",
    "Vehicle hire",
    "Booth-level workers",
    "Security deposit: Rs 10,000",
  ],
};

// Booth Vulnerability
const boothVulnerabilityData = {
  totalVulnerableBooths: 5337,
  vulnerablePercentage: 22,
  criticalBooths: 5000,
  captureIndicators: [
    "100% turnout in specific booths",
    "EVM malfunction claims",
    "Late polling hour surge",
    "Battered VVPAT slips",
    "Voter slip distribution anomalies",
    "Booth agent displacement",
    "Money/distribution at booths",
  ],
};

// Postal Ballot
const postalBallotData = {
  uptakePercentage: "3.61%",
  seniorCitizens: "5.09 Lakh (509,205 voters)",
  serviceVoters: "ETPBS (Electronic Transmission)",
  eligibleCategories: [
    "Senior citizens (80+ years)",
    "Persons with disabilities",
    "Essential services personnel",
    "Armed forces & paramilitary",
    "Police officials on duty",
  ],
};

// Party Composition
const partyCompositionData = {
  aap: 92,
  congress: 18,
  sad: 3,
  bjp: 2,
  others: 2,
  total: 117,
};

export default function ECIElectionDataPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-lg font-bold text-white">
              9
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              ECI & Election Data
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Election Commission Interface • Electoral Rolls • EVM Infrastructure • Security
          </p>
        </div>
        <Badge variant="info">● Live Data</Badge>
      </div>

      {/* ECI Timeline & Voter Registration */}
      <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-violet-700 dark:text-violet-400">ECI Timeline & Voter Registration</p>
            <p className="text-sm text-violet-600 dark:text-violet-300">Election Commission of India Schedule | Voter Registration Data</p>
          </div>
        </div>

        {/* ECI Timeline */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Commission Timeline</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Current Phase</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{eciTimeline.currentPhase}</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <p className="text-xs text-amber-600 dark:text-amber-400">Summary Issuance</p>
              <p className="text-lg font-bold text-amber-700 dark:text-amber-300">{eciTimeline.summaryIssuance}</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">Election Date</p>
              <p className="text-lg font-bold text-green-700 dark:text-green-300">{eciTimeline.electionDate}</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Days Remaining</p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">{eciTimeline.daysRemaining}</p>
            </div>
          </div>
        </div>

        {/* SIR Timeline */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Special Intensive Revision (SIR) Timeline 2026</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <p className="text-xs text-slate-500">SIR Period</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">June 25 - July 24, 2026</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Draft Roll Publication</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{eciReadinessData.sirTimeline.draftRollPublication}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Final Roll Publication</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{eciReadinessData.sirTimeline.finalRollPublication}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Election Date</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{eciReadinessData.sirTimeline.electionDate}</p>
            </div>
          </div>
        </div>

        {/* Voter Registration Data */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Voter Registration (LS 2024)</h4>
          <div className="grid gap-6 md:grid-cols-3">
            <MetricCard
              title="Total Voters"
              value={voterRegistrationData.totalVoters}
              subtitle="Registered electorate"
              color="bg-violet-500"
            />
            <MetricCard
              title="First-Time Voters"
              value={voterRegistrationData.firstTimeVoters}
              subtitle="New registrations"
              color="bg-cyan-500"
            />
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-xs text-slate-500">First-Time Voter %</p>
              <p className="text-2xl font-bold text-violet-600">{voterRegistrationData.firstTimePercentage}</p>
              <p className="text-xs text-slate-500">of total electorate</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Note:</strong> Voter registration trend is steady. First-time voters (5.38 lakh) represent 2.5% of total electorate — key target for SVEEP outreach and voter education programs.
            </p>
          </div>
        </div>
      </div>

      {/* ECI Readiness */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          ECI Readiness & Electoral Infrastructure
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Registered Voters"
            value="2.14 Cr"
            subtitle="214.57 lakh voters"
            color="bg-sky-500"
          />
          <MetricCard
            title="BLOs Deployed"
            value="24,453"
            subtitle="Booth Level Officers"
            color="bg-blue-500"
          />
          <MetricCard
            title="CEO Punjab"
            value="Anindita Mitra"
            subtitle="Chief Electoral Officer"
            color="bg-purple-500"
          />
          <MetricCard
            title="Polling Stations"
            value="22,000+"
            subtitle="Estimated"
            color="bg-teal-500"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-900/20">
            <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Voter Demographics</p>
            <div className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p>SC Voters: 32% of electorate</p>
              <p>First-Time Voters: 5.39 lakh</p>
              <p>Gender Ratio: 89:100 (Male:Female)</p>
              <p>117 Assembly Constituencies</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Security Deployment</p>
            <div className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p>Total Personnel: {securityDeploymentData.totalPersonnel}</p>
              <p>CAPF Companies: {securityDeploymentData.capfCompanies}</p>
              <p>Districts: {securityDeploymentData.districts}</p>
              <p>Critical Booths: {securityDeploymentData.criticalBooths}</p>
            </div>
          </div>
        </div>
      </div>

      {/* EVM/VVPAT Infrastructure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          EVM/VVPAT Infrastructure (2022 Election Data)
        </h3>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <MetricCard title="Ballot Units (BU)" value="45,316" subtitle="For 2022 election" color="bg-emerald-500" />
          <MetricCard title="Control Units (CU)" value="34,942" subtitle="For 2022 election" color="bg-blue-500" />
          <MetricCard title="VVPATs" value="37,576" subtitle="For 2022 election" color="bg-purple-500" />
          <MetricCard title="EVMs per Booth" value="1 BU + 1 CU" subtitle="Standard configuration" color="bg-teal-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">VVPAT Controversies</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Supreme Court 2013: VVPAT to count 5 randomly selected EVMs per constituency. ECI opposed full VVPAT count citing time (6-7 hours per constituency).</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">EVM Vulnerabilities</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">M3 EVMs have cryptographic protection. Remote signaling concerns raised by Opposition. ECI maintains air-gap security.</p>
          </div>
        </div>
      </div>

      {/* Model Code of Conduct */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Model Code of Conduct (MCC) Enforcement
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Silence Period" value="48 Hours" subtitle="Before polling day" color="bg-red-500" />
          <MetricCard title="cVIGIL Response" value="100 Min" subtitle="Target resolution time" color="bg-blue-500" />
          <MetricCard title="MCC Violations" value="2022 FIR" subtitle="CM Channi case" color="bg-orange-500" />
          <MetricCard title="ECI Directives" value="Continuous" subtitle="From announcement" color="bg-purple-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">MCC Restrictions</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• No government schemes announcements</p>
              <p>• No use of official machinery</p>
              <p>• No paid news/content</p>
              <p>• No temple hopping/religious symbolism</p>
              <p>• No opinion polls/exit polls</p>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-medium text-orange-700 dark:text-orange-400">2022 MCC Case: CM Channi FIR</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Congress CM candidate used government helicopter during campaign. MCC violation registered. ECI enforcement shows no exemption for sitting CMs.</p>
          </div>
        </div>
      </div>

      {/* Election Schedule 2027 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Election Schedule 2027
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Election Type" value="Single-Phase" subtitle="117 constituencies" color="bg-sky-500" />
          <MetricCard title="Projected Month" value="February 2027" subtitle="Per ECI tradition" color="bg-blue-500" />
          <MetricCard title="Announcement" value="Feb 2027" subtitle="ECI notification" color="bg-purple-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-900/20">
            <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Key Dates (Projected)</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>ECI Announcement: January 25-30, 2027</p>
              <p>Nominations: February 1-3, 2027</p>
              <p>Scrutiny: February 4-6, 2027</p>
              <p>Withdrawal: February 7-9, 2027</p>
              <p>Polling: February 15-28, 2027</p>
              <p>Counting: March 1, 2027</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Schedule Comparison</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>2022: Single-phase (March 10, 2022)</p>
              <p>2017: Single-phase (February 4, 2017)</p>
              <p>2012: Single-phase (January 30, 2012)</p>
              <p>Punjab tradition: Single-phase since 1977</p>
            </div>
          </div>
        </div>
      </div>

      {/* Election Funding & Spending Limits */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Election Funding & Spending Limits
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Spending Limit" value="Rs 40L" subtitle="Per candidate" color="bg-emerald-500" />
          <MetricCard title="Total State Limit" value="Rs 46.8 Cr" subtitle="117 x Rs 40L" color="bg-blue-500" />
          <MetricCard title="Electoral Bonds" value="Struck Down" subtitle="SC 2024 verdict" color="bg-red-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Spending Categories</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>Public meetings/rallies: Included</p>
              <p>Digital/social media: Included</p>
              <p>Vehicle hire: Included</p>
              <p>Booth-level workers: Included</p>
              <p>Security deposit: Rs 10,000 (refundable)</p>
            </div>
          </div>
          <div className="rounded-lg bg-sky-50 p-4 dark:bg-sky-900/20">
            <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Post-Bond Landscape</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">After SC struck down electoral bonds (April 2024), parties must disclose all donations above Rs 2,000. Cash donations now capped at Rs 2,000 per person.</p>
          </div>
        </div>
      </div>

      {/* Election Crime & Criminalization */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Election Crime & Criminalization of Politics
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Candidates w/Criminal Cases" value="25%" subtitle="ADR data" color="bg-red-500" />
          <MetricCard title="Winning MLAs w/Criminal" value="50%" subtitle="State legislature" color="bg-orange-500" />
          <MetricCard title="Candidates Declared Guilty" value="315" subtitle="ADR tracked" color="bg-purple-500" />
          <MetricCard title="Murder Cases" value="42" subtitle="Serious IPC charges" color="bg-red-500" />
        </div>
        <div className="mt-4">
          <DataTable
            headers={["Crime Category", "Punjab %", "National Avg %", "Trend"]}
            rows={criminalizationData.crimeTrends.map(c => [c.category, c.punjabPercentage, c.nationalAverage, c.trend])}
          />
        </div>
      </div>

      {/* Booth Capture & Repolls */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Booth Capture & Repoll Data
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Repolls (Dec 2025)" value="16" subtitle="By-election repolls" color="bg-red-500" />
          <MetricCard title="Rural Turnout" value="48%" subtitle="Booth-level (suspect)" color="bg-orange-500" />
          <MetricCard title="Booth Agents Required" value="22,000+" subtitle="For 2027" color="bg-blue-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">Booth Capture Indicators</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• 100% turnout in specific booths</p>
              <p>• EVM malfunction claims</p>
              <p>• Late polling hour surge</p>
              <p>• Battered VVPAT slips</p>
              <p>• Voter slip distribution anomalies</p>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Repoll Triggers</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• Booth agent displacement</p>
              <p>• EVM tampering allegations</p>
              <p>• Violence at polling station</p>
              <p>• VVPAT mismatch exceeding limit</p>
              <p>• Massive voting irregularities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Affidavits & ADR Data */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Candidate Affidavits & Asset Analysis
        </h3>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <MetricCard title="Crorepati Candidates" value="67%" subtitle="Self-declared assets" color="bg-emerald-500" />
          <MetricCard title="Avg Asset Value" value="Rs 1.2 Cr" subtitle="Per candidate" color="bg-blue-500" />
          <MetricCard title="Graduate+ Candidates" value="74%" subtitle="Higher education" color="bg-purple-500" />
          <MetricCard title="Criminal Cases" value="25%" subtitle="Serious IPC charges" color="bg-red-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Asset Distribution</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• Less than Rs 10 lakh: 18%</p>
              <p>• Rs 10L-1 Cr: 41%</p>
              <p>• Rs 1-5 Cr: 29%</p>
              <p>• Above Rs 5 Cr: 12%</p>
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Education Profile</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• Illiterate: 0.5%</p>
              <p>• 10th pass: 8%</p>
              <p>• 12th pass: 17.5%</p>
              <p>• Graduate: 35%</p>
              <p>• Post-Graduate: 39%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Framework */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Legal Framework & Anti-Defection
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Anti-Defection" value="10th Schedule" subtitle="Constitution" color="bg-purple-500" />
          <MetricCard title="Defection Penalty" value="Disqualification" subtitle="+ Seat lost" color="bg-red-500" />
          <MetricCard title="Petition Window" value="45 Days" subtitle="Post-election" color="bg-blue-500" />
          <MetricCard title="Bikram Majithia" value="Drug Case" subtitle="Ongoing trial" color="bg-orange-500" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Defection Cases</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• 2016: 25 SAD MLAs crossed to Congress</p>
              <p>• 2022: 10 AAP MLAs joined Congress</p>
              <p>• 2023: 2 Congress MLAs to AAP</p>
              <p>• Merger clause: 2/3rd of party must agree</p>
            </div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Major Punjab Litigations</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>• Bikram Majithia: NDPS case (ongoing)</p>
              <p>• Sukhpal Khaira: Drug case</p>
              <p>• 2017 poll: ECI disqualification overspending</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2022 Election Results */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          2022 Assembly Election Results
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="AAP" value="92 seats" subtitle="42.01% vote share" color="bg-purple-500" />
          <MetricCard title="Congress" value="18 seats" subtitle="22.98% vote share" color="bg-orange-500" />
          <MetricCard title="SAD" value="3 seats" subtitle="18.38% vote share" color="bg-green-500" />
          <MetricCard title="BJP" value="2 seats" subtitle="8.0% vote share" color="bg-gray-500" />
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Source:</strong> ECI Data | AAP won 29 of 34 SC reserved seats (85%) in 2022
          </p>
        </div>
      </div>
    </div>
  );
}
