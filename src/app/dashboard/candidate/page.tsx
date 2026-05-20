"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";

export default function CandidatePage() {
  // === DATA FROM A-04 MD FILES ===

  // CM Face Candidates (A-04-01, A-04-02)
  const cmFaceCandidates = [
    { name: "Charanjit Singh Channi", role: "Former CM (2021-22)", caste: "Dalit (Ramdasia)", age: 63, strength: "First Dalit CM, SC vote (~32%), won Jalandhar LS 2024 by 1.76L", weakness: "6-month tenure, limited Majha support", region: "Doaba/Malwa", winnability: 92 },
    { name: "Amarinder Singh Raja Warring", role: "PPCC President", caste: "Jat Sikh", age: 48, strength: "Won Ludhiana LS 2024, organizational control", weakness: "Rural base vs urban challenge", region: "Malwa", winnability: 88 },
    { name: "Partap Singh Bajwa", role: "CLP Leader", caste: "Jat Sikh (Rajput)", age: 69, strength: "30+ years legislative exp, Majha base", weakness: "Age factor, no Dalit face", region: "Majha/Gurdaspur", winnability: 65 },
    { name: "Sukhjinder Singh Randhawa", role: "Former Deputy CM", caste: "Jat Sikh", age: 62, strength: "Won Gurdaspur LS 2024, admin experience", weakness: "No pan-Punjab brand", region: "Majha", winnability: 72 },
    { name: "Gurdev Singh Aujla", role: "Senior Leader", caste: "Jat Sikh", age: 58, strength: "Strong Doaba base, Irrigation portfolio", weakness: "Limited Malwa presence", region: "Doaba", winnability: 58 },
    { name: "Bhagwant Singh Singla", role: "Party Leader", caste: "Jat Sikh (Bhatia)", age: 55, strength: "Business community connect, Malwa base", weakness: "No legislative experience", region: "Malwa", winnability: 52 },
  ];

  // Congress Ministers (A-04-02)
  const congressLeaders = [
    { name: "Charanjit Singh Channi", role: "Former CM", caste: "Dalit (Mazhabi Sikh)", age: 63, strength: "SC vote (~32%), first Dalit CM", weakness: "Short 6-month tenure", region: "Doaba, Malwa" },
    { name: "Raja Warring", role: "PPCC President", caste: "Jat Sikh", age: 48, strength: "Organizational control, Malwa farm union links", weakness: "Jat Sikh ceiling, Sidhu faction", region: "Malwa rural" },
    { name: "Partap Singh Bajwa", role: "CLP Leader", caste: "Jat Sikh (Rajput)", age: 69, strength: "Legislative experience, Majha base", weakness: "SC vote ceiling", region: "Majha, Gurdaspur" },
    { name: "Sukhjinder Singh Randhawa", role: "Senior Leader", caste: "Jat Sikh", age: 62, strength: "Doaba experience, former Deputy CM", weakness: "No state-wide brand", region: "Doaba" },
  ];

  // Young Turks (A-04-05)
  const youngTurks = [
    { name: "Mohit Mohindra", age: 32, role: "PYC President", caste: "Sood (Hindu)", education: "BA LLB, Punjabi University", base: "Patiala", ticketProb: "85%", status: "Likely ticket", winnability: "Uncertain" },
    { name: "Amrinder Singh Raja Warring", age: 48, role: "PPCC President", caste: "Not specified", education: "10th Pass", base: "Ludhiana/Gidderbaha", ticketProb: "95%", status: "Very Likely", winnability: "Strong" },
    { name: "Kanhaiya Kumar", age: 39, role: "AICC NSUI In-charge", caste: "Non-elite", education: "PhD (JNU)", base: "Bihar native", ticketProb: "20%", status: "Long shot", winnability: "No Punjab base" },
    { name: "Jaiveer Shergill", age: 42, role: "Former Congress", caste: "Not specified", education: "LLB, UC Berkeley/NUJS", base: "Left for BJP", ticketProb: "0%", status: "Resigned Aug 2022", winnability: "BJP spokesperson" },
  ];

  // Rebel MLAs (A-04-03)
  const rebelMLAs = [
    { name: "Manohar Singh", relation: "Brother of CM Channi", constituency: "Bassi Pathana", reason: "Denied ticket", status: "Contested as Independent" },
    { name: "Rana Inder Partap Singh", relation: "Son of Rana Gurjit Singh", constituency: "Sultanpur Lodhi", reason: "Denied ticket", status: "Won as Independent" },
    { name: "Harjot Kamal", relation: "Sitting MLA", constituency: "Moga", reason: "Denied ticket", status: "Joined BJP" },
    { name: "Rana Gurjit Singh", relation: "MLA, Kapurthala", constituency: "Kapurthala", reason: "Anti-Warring faction", status: "Camp leader" },
    { name: "Pargat Singh", relation: "MLA", constituency: "Jalandhar Cantonment", reason: "Anti-Bajwa", status: "Voiced displeasure" },
    { name: "Khushaldeep Dhillon", relation: "Ex-MLA, Vice-President", constituency: "Party position", reason: "Show-cause notice", status: "Issued notice" },
  ];

  // Turncoat Candidates (A-04-04)
  const turncoats = [
    { name: "Ravneet Singh Bittu", from: "Congress", to: "BJP", seat: "Ludhiana MP", status: "Lost 2024 LS", margin: "Lost to Congress by 33,926" },
    { name: "Preneet Kaur", from: "Congress", to: "BJP", seat: "Patiala MP", status: "Lost 2024 LS", margin: "Lost despite incumbency" },
    { name: "Raj Kumar Chabbewal", from: "Congress", to: "AAP", seat: "Hoshiarpur (SC)", status: "Turned 2024", margin: "2-time Congress MLA" },
    { name: "Sushil Kumar Rinku", from: "AAP", to: "BJP", seat: "Jalandhar MP", status: "Lost by 175,993", margin: "Massive margin to Channi" },
    { name: "Mohinder Singh Kaypee", from: "Congress", to: "SAD", seat: "Jalandhar", status: "Finished 4th", margin: "67,911 votes" },
    { name: "Raghav Chadha", from: "AAP", to: "BJP", seat: "RS MP", status: "Apr 2026 defection", margin: "7 AAP RS MPs merged" },
  ];

  // Incumbent Vulnerability (A-04-20)
  const vulnerableMLAs = [
    { name: "Gurmeet Singh Meet Hayer", constituency: "Barnala", vulnerability: "Critical", factor: "No thank-you visit after election" },
    { name: "Kuldeep Singh Dhaliwal", constituency: "Amritsar Rural", vulnerability: "High", factor: "Perceived neglect of Amritsar" },
    { name: "Labh Singh Ugoke", constituency: "Ugoke", vulnerability: "Critical", factor: "Constituent complaints not addressed" },
    { name: "Multiple AAP MLAs", constituency: "Amritsar region", vulnerability: "High", factor: "Women groups report legislators missing" },
  ];

  // Priority constituency candidates with winnability data
  const candidates = [
    { name: "Amritsar West", incumbent: "None", winnability: 72, antiIncumbency: 0, candidateScore: 82, margin: null, status: "Strong" },
    { name: "Ludhiana North", incumbent: "AAP MLA", winnability: 45, antiIncumbency: 78, candidateScore: 52, margin: "~4,200", status: "Review" },
    { name: "Jalandhar Central", incumbent: "None", winnability: 68, antiIncumbency: 0, candidateScore: 75, margin: null, status: "Strong" },
    { name: "Patiala", incumbent: "Congress MLA", winnability: 65, antiIncumbency: 34, candidateScore: 71, margin: "~3,100", status: "Strong" },
    { name: "Sangrur", incumbent: "AAP MLA", winnability: 38, antiIncumbency: 82, candidateScore: 41, margin: "~2,600", status: "Review" },
    { name: "Chabbewal", incumbent: "AAP MLA", winnability: 52, antiIncumbency: 65, candidateScore: 58, margin: "~3,400", status: "Review" },
    { name: "Dera Baba Nanak", incumbent: "AAP MLA", winnability: 61, antiIncumbency: 55, candidateScore: 67, margin: "~2,100", status: "Strong" },
    { name: "Barnala", incumbent: "Congress (2024)", winnability: 88, antiIncumbency: 8, candidateScore: 91, margin: "~7,200", status: "Priority" },
    { name: "Malerkotla", incumbent: "Congress MLA", winnability: 85, antiIncumbency: 12, candidateScore: 89, margin: "~5,600", status: "Priority" },
    { name: "Ajnala", incumbent: "Congress MLA", winnability: 79, antiIncumbency: 18, candidateScore: 84, margin: "~2,800", status: "Priority" },
  ];

  // 3-Domain Winnability Model factors
  const winnabilityFactors = [
    { factor: "Party Factors", weight: 40, sub: "Symbol strength 20%, local org 20%, caste-community 25%, election trend 20%" },
    { factor: "Candidate Factors", weight: 35, sub: "Local status 20%, caste match 25%, vote bank 20%, name recognition 20%" },
    { factor: "Campaign Factors", weight: 25, sub: "Personal wealth 30%, network 25%, commitment 25%, charisma 20%" },
  ];

  // 2022 Election performance data
  const electionHistory = [
    { party: "AAP", seats: 92, voteShare: "42.4%", trend: "Down from 62 in 2017" },
    { party: "Congress", seats: 18, voteShare: "23.0%", trend: "Stable (18 in 2017)" },
    { party: "SAD", seats: 3, voteShare: "6.4%", trend: "Collapsed from 15 in 2017" },
    { party: "BJP", seats: 2, voteShare: "5.4%", trend: "Stable" },
  ];

  // Booth-level infrastructure
  const boothInfrastructure = [
    { metric: "Total Booths", value: "23,000+", note: "Across 117 constituencies" },
    { metric: "Booth Sevaks", value: "25,000", note: "1 per booth, Panna Pramukh model" },
    { metric: "Booth Workers", value: "1.25 lakh", note: "Including 20 assistants each" },
    { metric: "Voters/Booth", value: "800-900", note: "Each assistant manages 30-35 voters" },
  ];

  // SC seat targets
  const scSeatTargets = [
    { category: "SC Reserved Seats", total: 34, congress2022: 8, target2027: "18-22" },
    { category: "Mazhabi Sikh SC", seats: 17, congress2022: 5, target2027: "12-15" },
    { category: "Other SC", seats: 17, congress2022: 3, target2027: "6-8" },
  ];

  // Regional seat distribution
  const regionalSeats = [
    { region: "Malwa", seats: 69, congress2022: 12, target2027: "30-35", color: "bg-orange-500" },
    { region: "Majha", seats: 27, congress2022: 4, target2027: "10-12", color: "bg-blue-500" },
    { region: "Doaba", seats: 23, congress2022: 2, target2027: "8-10", color: "bg-green-500" },
  ];

  // === MP10-001/005: Ticket Authority & Winnability ===
  const ticketAuthority = {
    decisionMaker: "AICC High Command",
    notPPCC: true,
    inCharge: "Bhupesh Baghel (AICC General Secretary)",
    directive: "Winnability is the sole criterion",
    surveyCount: 3,
    note: "High Command controls ticket distribution over PPCC preference",
  };

  const renominationData = {
    electedMPRenomination: "53%",
    postgraduateBonus: "+28%",
    criminalCasesBonus: "+27%",
    crorepatiBonus: "+14%",
    fieldWorkRequirement: "6 months minimum before election",
    womenScoringDifferential: "Higher weight for winnability vs experience",
    youthScoringDifferential: "Youth candidates get +15% winnability bonus",
  };

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
            Candidate profiles - Winnability analysis - Anti-incumbency tracking
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* Top Level Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ticket Applicants"
          value="1,872"
          subtitle="For 117 seats (16:1 ratio)"
          color="bg-teal-500"
        />
        <MetricCard
          title="Probable Candidates"
          value="234"
          subtitle="Shortlisted (2:1 ratio)"
          color="bg-blue-500"
        />
        <MetricCard
          title="Winnability Index"
          value="68.5"
          subtitle="Avg across top picks"
          change={3.2}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Anti-Incumbency Risk"
          value="23"
          subtitle="High-risk incumbents"
          change={-5}
          trend="down"
          color="bg-red-500"
        />
      </div>

      {/* 2022 Election Performance & 2027 Targets */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2022 Election Performance
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Baseline for 2027 turnaround strategy
          </p>
          <div className="mt-4 space-y-3">
            {electionHistory.map((item) => (
              <div key={item.party} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{item.party}</span>
                  <p className="text-xs text-slate-500">{item.trend}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{item.seats} seats</p>
                  <p className="text-sm text-slate-500">{item.voteShare} vote share</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
              Congress lost 3/3 by-elections (Gidderbaha, Dera Baba Nanak, Chabbewal) in 2024
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              Tarn Taran dropped to 4th place - organizational collapse signal
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2027 Seat Targets
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Requires +12-15 percentage point swing from 23% vote share
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">Congress Target</p>
                <p className="text-sm text-slate-500">55-65 seats</p>
              </div>
              <p className="text-3xl font-bold text-teal-600">55-65</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">SC Seat Target</p>
                <p className="text-sm text-slate-500">18-22 of 34 reserved</p>
              </div>
              <p className="text-3xl font-bold text-blue-600">18-22</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">Vote Share Target</p>
                <p className="text-sm text-slate-500">From 23% to 31-35%</p>
              </div>
              <p className="text-3xl font-bold text-purple-600">+12pp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Seat Distribution & Targets
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {regionalSeats.map((region) => (
            <div key={region.region} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <div className={`h-3 w-3 rounded-full ${region.color}`} />
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{region.region}</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Total Seats</span>
                  <span className="font-medium">{region.seats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Congress 2022</span>
                  <span className="font-medium text-orange-600">{region.congress2022}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Target 2027</span>
                  <span className="font-bold text-green-600">{region.target2027}</span>
                </div>
                <ProgressBar
                  label="Target attainment"
                  value={Math.round((parseInt(region.target2027) / region.seats) * 100)}
                  color={region.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Domain Winnability Model */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            3-Domain Winnability Model
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Survey-based selection framework (Sunil Kanugolu)
          </p>
          <div className="mt-6 space-y-4">
            {winnabilityFactors.map((factor) => (
              <div key={factor.factor} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{factor.factor}</span>
                  <span className="text-sm font-bold text-teal-600">{factor.weight}%</span>
                </div>
                <p className="text-xs text-slate-500">{factor.sub}</p>
                <ProgressBar
                  label=""
                  value={factor.weight}
                  color="bg-teal-500"
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Survey methodology: Ground-level support + worker feedback + caste-community equations + anti-incumbency factors
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Ticket Allocation Strategy
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  NEW
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">New Faces</p>
                  <p className="text-sm text-slate-500">60-70 candidates fresh</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-green-600">60-70</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                  YTH
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Youth Target</p>
                  <p className="text-sm text-slate-500">50% under 50 years</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600">50%</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                  F
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Women Quota</p>
                  <p className="text-sm text-slate-500">33% target confirmed</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-pink-600">33%</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Selection Method</p>
                  <p className="text-sm text-slate-500">3 independent surveys</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-teal-600">3SURV</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booth-Level Infrastructure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Booth-Level Infrastructure (Mission 2027)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Panna Pramukh model adopted from BJP - AICC central monitoring
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {boothInfrastructure.map((item) => (
            <div key={item.metric} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-center">
              <p className="text-2xl font-bold text-teal-600">{item.value}</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.metric}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            Each booth sevak must meet every household 5-6 times before elections. Nameplates installed at booth sevak homes for voter identification.
          </p>
        </div>
      </div>

      {/* SC Seat Strategy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Seat Strategy (34 Reserved Seats)
        </h3>
        <div className="mt-4">
          <DataTable
            headers={["Category", "Total Seats", "Congress 2022", "Target 2027", "Swing Required"]}
            rows={scSeatTargets.map((item) => [
              item.category,
              item.total?.toString() || item.seats?.toString() || "0",
              item.congress2022.toString(),
              item.target2027,
              `+${parseInt(item.target2027) - item.congress2022} seats`,
            ])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            AAP won 29/34 SC seats in 2022 (92% conversion). Congress target: recover Dalit vote through Channi leadership and SC-focused candidates.
          </p>
        </div>
      </div>

      {/* Priority Constituency Candidates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Priority Constituency Candidates
        </h3>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Constituency", "Incumbent", "Winnability", "Anti-Inc", "Score", "Margin", "Status"]}
            rows={candidates.map((c) => [
              c.name,
              c.incumbent,
              `${c.winnability}%`,
              c.antiIncumbency > 50 ? "High" : c.antiIncumbency > 25 ? "Med" : "Low",
              `${c.candidateScore}/100`,
              c.margin || "-",
              c.status,
            ])}
          />
        </div>
      </div>

      {/* Congress Leadership */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Leadership Matrix
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Collective leadership approach - No CM face declared (May 2026)
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {congressLeaders.map((leader) => (
            <div key={leader.name} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role} | Age {leader.age}</p>
                  <p className="text-xs text-teal-600 mt-1">{leader.caste}</p>
                </div>
                <Badge variant={leader.role.includes("Former") ? "success" : "info"}>{leader.region}</Badge>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-green-600">Strength:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{leader.strength}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-red-600">Weakness:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{leader.weakness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Channi Dalit identity most strategically valuable: Punjab SC population ~32% (highest in India), no Punjabi CM from SC community historically. CM face decision expected 60-75 days before election (Nov-Dec 2026).
          </p>
        </div>
      </div>

      {/* Factional Dynamics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Selection Method</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Survey-based winnability (Sunil Kanugolu)</li>
            <li>- 3 independent surveys commissioned</li>
            <li>- AICC direct control (bypasses PPCC)</li>
            <li>- No CM candidate declared yet</li>
            <li>- Bhupesh Baghel supervising (AICC)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Ticket Strategy</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- 60-70 new faces (confirmed)</li>
            <li>- 50% tickets under-50 years</li>
            <li>- 33% women quota target</li>
            <li>- SC seats: 34 reserved, target 18-22</li>
            <li>- OBC: 20-22 candidates planned</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Internal Factions</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Channi camp: Dalit representation demand</li>
            <li>- Warring camp: Organizational control</li>
            <li>- Bajwa/Randhawa: Majha-Doaba balance</li>
            <li>- Sidhu void: Unresolved tension</li>
            <li>- Sunil Jakhar: Left for BJP (2022)</li>
          </ul>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">By-Election Record (2022-2024)</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Gidderbaha</span>
              <Badge variant="danger">AAP Won</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Dera Baba Nanak</span>
              <Badge variant="danger">AAP Won</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Chabbewal</span>
              <Badge variant="danger">AAP Won</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Barnala</span>
              <Badge variant="success">Congress Won</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Tarn Taran</span>
              <Badge variant="danger">Dropped to 4th</Badge>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Digital Campaign Plan</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Digital Push</span>
              <span className="font-semibold text-teal-600">70%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Training Phase</span>
              <span className="text-sm text-slate-500">April-July 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Campaign Intensify</span>
              <span className="text-sm text-slate-500">Post-mid-July (after paddy sowing)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Yatra Plan</span>
              <span className="text-sm text-slate-500">3-phase Malwa/Majha/Doaba</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Key Issues for 2027</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Drug menace (6.6M users)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Punjab debt: Rs 4 lakh crore+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Water crisis (115/153 blocks critical)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth unemployment: 18.8%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Farmer debt: Rs 2.03L/household</span>
            </div>
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

      {/* MP10-005 Candidate Viability Data */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">MP10-005 Candidate Viability Analysis</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">1,020 candidates analyzed, winnability multipliers from survey data</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Total Candidates Analyzed</p>
            <p className="text-2xl font-bold text-teal-600">1,020</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Renomination Rate</p>
            <p className="text-2xl font-bold text-teal-600">35%</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Postgraduate +Winnability</p>
            <p className="text-2xl font-bold text-green-600">+28%</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Criminal Cases +Winnability</p>
            <p className="text-2xl font-bold text-amber-600">+27%</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Crorepati Status +Winnability</p>
            <p className="text-2xl font-bold text-blue-600">+14%</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Key Insight:</strong> Wrong candidate selection across 30+ seats could cost Congress 8-12 seat equivalents. Survey-derived candidates with high name recognition may have weak party worker backing. "Gadkhunt" risk: workers may actively campaign against "imported" candidates.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-medium text-slate-500 mb-2">Winnability Multiplier Effect</p>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>High winnability candidate: <span className="font-bold text-green-600">+3-5 seats</span> via local coattails</p>
              <p>Poor candidate selection: <span className="font-bold text-red-600">-5-8%</span> party vote in constituency</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-medium text-slate-500 mb-2">Survey Mechanics</p>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>3 independent surveys across all 117 ACs</p>
              <p>Questions to general public AND party workers</p>
              <p>Sunil Kanugolu supervised methodology</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-medium text-slate-500 mb-2">Risk Mitigation</p>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>Validate surveys against organizational feedback</p>
              <p>Cross-check district-level worker sentiment</p>
              <p>Investigate contradictions before finalizing</p>
            </div>
          </div>
        </div>
      </div>

      {/* MP4-004/MP4-025: Campaign Strategy Summary */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Campaign Strategy Summary (MP4)
        </h3>
        <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
          Core narrative • Timeline • Budget • Caste targets
        </p>

        {/* Key Slogans */}
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
            <p className="text-xs text-red-600">Primary Slogan</p>
            <p className="text-lg font-bold text-red-700">"Judega Block, Jittegi Congress"</p>
          </div>
          <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900/40">
            <p className="text-xs text-orange-600">Attack Line</p>
            <p className="text-lg font-bold text-orange-700">"4 Saal 0 Kaam"</p>
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

      {/* MP10-001/005: Ticket Authority & Winnability */}
      <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-violet-700 dark:text-violet-400">MP10-001/005: Ticket Authority & Winnability</p>
            <p className="text-sm text-violet-600 dark:text-violet-300">AICC High Command controls tickets, survey-based selection, renomination analysis</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Decision Maker</p>
            <p className="text-sm font-bold text-violet-600">{ticketAuthority.decisionMaker}</p>
            <p className="text-xs text-slate-400">NOT PPCC</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Punjab In-Charge</p>
            <p className="text-sm font-bold text-violet-600">{ticketAuthority.inCharge}</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Ticket Criterion</p>
            <p className="text-sm font-bold text-red-600">{ticketAuthority.directive}</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Surveys Commissioned</p>
            <p className="text-sm font-bold text-blue-600">{ticketAuthority.surveyCount} surveys</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Renomination Rate (Elected MPs)</p>
            <p className="text-2xl font-bold text-green-600">{renominationData.electedMPRenomination}</p>
            <p className="text-xs text-slate-500">vs 19% for lost candidates</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Winnability Multipliers</p>
            <div className="space-y-1 text-xs">
              <p>Postgrad: <span className="text-green-600 font-bold">+{renominationData.postgraduateBonus}</span></p>
              <p>Criminal Cases: <span className="text-amber-600 font-bold">+{renominationData.criminalCasesBonus}</span></p>
              <p>Crorepati: <span className="text-blue-600 font-bold">+{renominationData.crorepatiBonus}</span></p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Field Work Requirement</p>
            <p className="text-xl font-bold text-violet-600">{renominationData.fieldWorkRequirement}</p>
            <p className="text-xs text-slate-500">Minimum before elections</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-violet-50 p-3 dark:bg-violet-900/30">
          <p className="text-sm text-violet-700 dark:text-violet-300">
            <strong>Note:</strong> Women and youth candidates receive differential scoring - youth get +15% winnability bonus. High Command authority overrides PPCC factional claims.
          </p>
        </div>
      </div>

      {/* A-04-05: Congress Young Turks */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Young Turks (A-04-05)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Party plans 60-70% young candidates (70-80 out of 117 seats) for 2027
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Name", "Age", "Role", "Caste", "Education", "Base", "Ticket Prob", "Status"]}
            rows={youngTurks.map((y) => [
              y.name,
              y.age.toString(),
              y.role,
              y.caste,
              y.education,
              y.base,
              y.ticketProb,
              y.status,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-teal-50 p-3 dark:bg-teal-900/20">
            <p className="text-xs font-semibold text-teal-600">Mohit Mohindra (Tier 1)</p>
            <p className="text-sm text-teal-700 dark:text-teal-300">PYC President, 85% ticket likely. Father Brahm Mohindra's legacy provides support base.</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-xs font-semibold text-blue-600">Raja Warring (Tier 1)</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">PPCC President, 95% ticket. 2024 Ludhiana winner, controls party machinery.</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
            <p className="text-xs font-semibold text-slate-500">Kanhaiya Kumar (Tier 3)</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">No Punjab base, 20% ticket probability. National youth symbol, not electoral candidate.</p>
          </div>
        </div>
      </div>

      {/* A-04-03: Congress Rebel MLAs */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Rebel MLAs (A-04-03)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Ticket denial rebellions - 2022 pattern could repeat in 2027
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Rebel Name", "Relation", "Constituency", "Reason", "Status"]}
            rows={rebelMLAs.map((r) => [
              r.name,
              r.relation,
              r.constituency,
              r.reason,
              r.status,
            ])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Risk:</strong> Major rebellion causing vote split has 40-50% probability. Multiple independents in key seats has 50-60% probability.
          </p>
        </div>
      </div>

      {/* A-04-04: Turncoat Candidates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Turncoat Candidates (A-04-04)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          2024 Lok Sabha: 38% of major party candidates were turncoats. 62% of BJP turncoats lost.
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Name", "From", "To", "Seat", "2024 Result"]}
            rows={turncoats.map((t) => [
              t.name,
              t.from,
              t.to,
              t.seat,
              t.status,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-semibold text-red-600">Voter Rejection Evidence</p>
            <p className="text-sm text-red-700 dark:text-red-300">62% of BJP turncoats lost 2024 LS polls. All 8 BJP turncoats in Punjab lost. Sushil Kumar Rinku lost by 175,993 votes to Channi.</p>
          </div>
          <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <p className="text-xs font-semibold text-amber-600">April 2026 Defections</p>
            <p className="text-sm text-amber-700 dark:text-amber-300">7 AAP Rajya Sabha MPs (6 Punjab-based) merged with BJP including Raghav Chadha, Sandeep Pathak. AAP reduced to 1 RS seat in Punjab.</p>
          </div>
        </div>
      </div>

      {/* A-04-20: Incumbent Vulnerability */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Incumbent Vulnerability (A-04-20)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Anti-incumbency widespread but opposition fragmentation prevents unified alternative
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["MLA", "Constituency", "Vulnerability", "Key Factor"]}
            rows={vulnerableMLAs.map((v) => [
              v.name,
              v.constituency,
              v.vulnerability,
              v.factor,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-semibold text-red-600">Critical Vulnerability (70+)</p>
            <p className="text-sm text-red-700 dark:text-red-300">Inaccessible legislators, document constituent complaints not addressed</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs font-semibold text-orange-600">High Vulnerability (50-69)</p>
            <p className="text-sm text-orange-700 dark:text-orange-300">Performance failures, unmet promises, governance delivery gaps</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-xs font-semibold text-yellow-600">Moderate Vulnerability (30-49)</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">Welfare dependency seats, SC vote bank protection through doles</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Strategic Challenge:</strong> AAP needs only 35-40% to win individual seats in three-way splits. Congress, BJP, SAD each threaten different vote banks but cannot unite.
          </p>
        </div>
      </div>

      {/* A-04-01/02: CM Face Candidates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          CM Face Candidates (A-04-01/02)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Congress collective leadership - no CM face declared as of May 2026
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cmFaceCandidates.map((c) => (
            <div key={c.name} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{c.name}</h4>
                  <p className="text-sm text-slate-500">{c.role} | Age {c.age}</p>
                  <p className="text-xs text-teal-600 mt-1">{c.caste}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-teal-600">{c.winnability}%</p>
                  <p className="text-xs text-slate-500">Winnability</p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-green-600">Strength:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{c.strength}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-red-600">Weakness:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{c.weakness}</span>
                </div>
              </div>
              <Badge variant="info">{c.region}</Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Channi Dalit Identity:</strong> Punjab SC population ~32% (highest in India), no Punjabi CM from SC community historically. CM decision expected 60-75 days before election (Nov-Dec 2026).
          </p>
        </div>
      </div>
    </div>
  );
}
