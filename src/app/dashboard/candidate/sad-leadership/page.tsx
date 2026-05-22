"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

// ============================================================
// SAD LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const badalFamilyLeaders = [
  {
    name: "Sukhbir Singh Badal",
    role: "SAD President (since 2007)",
    caste: "Jat Sikh",
    age: 63,
    strength: "Controls party since 2007, Badal dynasty legacy, son of Parkash Singh Badal (died Apr 2023), 2012 mandate (56 seats), undisputed party chief despite splits",
    weakness: "3 seats in 2022 (worst ever), declared tankhaiya by Akal Takht (Dec 2024), assassination attempt Dec 2024, blamed for 2015 sacrilege mishandling, internal calls for resignation since 2022",
    region: "Malwa / Lambi",
    winnability: 45,
  },
  {
    name: "Bikram Singh Majithia",
    role: "Former Cabinet Minister / SAD Vice President",
    caste: "Jat Sikh",
    age: 51,
    strength: "3-time MLA from Majitha (2007-2017), Majha strongman (aka 'Majhe Da Jarnail'), Sukhbir's brother-in-law, held Revenue/Environment/Information portfolios 2007-2017, family political dynasty",
    weakness: "Lost Amritsar East 2022 (3rd place), booked under NDPS Act (Dec 2021), disproportionate assets case (Rs 700Cr), Governor sanctioned prosecution 2023, legal liabilities drag on campaign",
    region: "Majha",
    winnability: 50,
  },
  {
    name: "Harsimrat Kaur Badal",
    role: "MP Bathinda / Former Union Minister",
    caste: "Jat Sikh",
    age: 49,
    strength: "Only SAD MP (Bathinda), former Union Minister for Food Processing (2014-2020), powerful orator, Majithia's sister, Badal family loyalist",
    weakness: "Sole MP in parliament, limited organizational role in Punjab, family faction risk",
    region: "Malwa / Bathinda",
    winnability: 55,
  },
];

const punarSurjitFaction = [
  {
    name: "Giani Harpreet Singh",
    role: "President (SAD Breakaway Faction) — Elected Aug 11, 2025",
    caste: "Dalit Sikh",
    age: 65,
    strength: "Former acting Jathedar of Akal Takht, first Dalit to head any Akali Dal faction, moral authority from religious background, released election manifesto Apr 2026 promising 35% women + 40% youth tickets",
    weakness: "No electoral track record, limited organizational experience, accused by Badal camp of conspiring with central agencies (BJP), faction has 0 MLAs, uncertain ECI recognition",
    region: "All Punjab",
    winnability: 20,
  },
  {
    name: "Satwant Kaur",
    role: "Panthic Council Chairperson (Breakaway Faction)",
    caste: "Sikh",
    age: 55,
    strength: "Daughter of late Amrik Singh (AISSF leader), brings Panthic credibility, woman leader in male-dominated Sikh politics",
    weakness: "Militant family background limits mainstream acceptability",
    region: "All Punjab",
    winnability: 15,
  },
];

const sadElectionTrajectory = [
  { election: "2012 Assembly", seats: "56/117", voteShare: "34.7%", note: "Ruling party, pre-farm law alliance with BJP" },
  { election: "2014 LS", seats: "4/13", voteShare: "20.3%", note: "Modi wave damage" },
  { election: "2017 Assembly", seats: "15/117", voteShare: "25.4%", note: "Lost to Congress, sacrilege backlash begins" },
  { election: "2019 LS", seats: "2/13", voteShare: "27.4%", note: "Alliance with BJP still active" },
  { election: "2022 Assembly", seats: "3/117", voteShare: "18.4%", note: "Worst ever. AAP wave destroyed SAD" },
  { election: "2024 LS", seats: "1/13", voteShare: "13.4%", note: "New low. BJP alliance broken in 2020" },
];

// current 3 MLAs
const currentMLAs = [
  { name: "Ganieve Kaur Majithia", constituency: "Majitha", note: "Wife of Bikram Singh Majithia, won in 2022, family seat" },
  { name: "Manpreet Singh Ayali", constituency: "Dakha", note: "Former SAD rebel faction member, resigned from Punar Surjit, set to join Amritpal's outfit" },
  { name: "Dr. Sukhwinder Singh Sukhi", constituency: "Banga (SC)", note: "Only SC MLA, represents SC constituency" },
];

// SGPC control
const sgpcKeyFigures = [
  { name: "Harjinder Singh Dhami", role: "SGPC President", alignment: "Sukhbir-Badal loyalist", note: "Currently controls SGPC, condemned Giani Harpreet's bid to take over SGPC" },
  { name: "Bibi Jagir Kaur", role: "Former SGPC President", alignment: "Punar Surjit faction", note: "Expected in 11-member presidium of breakaway faction" },
  { name: "Prem Singh Chandumajra", role: "Senior SAD Leader", alignment: "Punar Surjit faction", note: "Claimed conspiracy to split SAD hatched at Dhindsa residence, later backtracked" },
];

// Alliance history
const allianceTimeline = [
  { year: "1996", event: "SAD-BJP alliance formed" },
  { year: "1997-2002", event: "First coalition government" },
  { year: "2007-2012", event: "Second coalition government" },
  { year: "2012-2017", event: "Third coalition government (SAD 56, BJP 12)" },
  { year: "Sep 2020", event: "SAD ends alliance over farm laws" },
  { year: "2022", event: "Both contest separately, hit all-time lows (SAD 3, BJP 2)" },
  { year: "Dec 2024", event: "Akal Takht declares Sukhbir tankhaiya over sacrilege mishandling" },
  { year: "Aug 2025", event: "Giani Harpreet elected SAD breakaway faction president" },
  { year: "Mar 14, 2026", event: "Amit Shah: BJP goes solo in 2027, no SAD reunion" },
];

export default function SADLeadershipPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
              S
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              SAD Leadership
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sukhbir Badal presidency - August 2025 split - Panthic politics - SGPC control battle - 2027 revival attempt
          </p>
        </div>
        <Badge variant="danger">3 MLAs</Badge>
      </div>

      {/* Crisis Banner */}
      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex items-start gap-4">
          <span className="text-3xl">⚡</span>
          <div>
            <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400">SAD&apos;s Existential Crisis</h3>
            <p className="text-sm text-amber-600 dark:text-amber-300 mt-1">
              From 56 seats and ruling Punjab in 2012 to 3 seats in 2022 — the steepest decline of any regional party in Indian politics.
              Compounded by the August 2025 split (Giani Harpreet faction), the Akal Takht hukamnama declaring Sukhbir tankhaiya (Dec 2024),
              Parkash Singh Badal&apos;s death (Apr 2023), and the assassination attempt on Sukhbir (Dec 2024).
              The SAD-BJP alliance is dead (Mar 2026). MLA Manpreet Singh Ayali has left for Amritpal&apos;s outfit. SAD is fighting for survival.
            </p>
          </div>
        </div>
      </div>

      {/* Election Trajectory */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Decline Trajectory: 2012 → 2024
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          From ruling party (56 seats, 34.7% vote) to near-extinction (1 LS seat, 13.4% vote)
        </p>

        <div className="mt-4 space-y-3">
          {sadElectionTrajectory.map((e) => (
            <div key={e.election} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <div>
                <span className="font-medium text-slate-700 dark:text-slate-300">{e.election}</span>
                <p className="text-xs text-slate-500">{e.note}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-amber-600">{e.seats}</span>
                <p className="text-xs text-slate-500">{e.voteShare}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current MLAs */}
      <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm dark:border-amber-800 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-white">M</span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Current MLAs (3 of 117)</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">All three are facing uncertain futures — one has already split</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {currentMLAs.map((m) => (
            <div key={m.name} className="rounded-lg border border-amber-200 p-4 dark:border-amber-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{m.name}</h4>
              <Badge variant="warning">{m.constituency}</Badge>
              <p className="text-xs text-slate-500 mt-2">{m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Badal Family Leadership */}
      <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm dark:border-amber-800 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-white">B</span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Badal Family Leadership Matrix</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">SAD remains a family-controlled party — no non-Badal face has emerged</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {badalFamilyLeaders.map((leader) => (
            <div key={leader.name} className="rounded-lg border border-amber-200 p-4 dark:border-amber-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role}</p>
                  <p className="text-xs text-amber-600 mt-1">{leader.caste} | Age {leader.age}</p>
                </div>
                <Badge variant={leader.winnability > 50 ? "success" : "warning"}>{leader.region}</Badge>
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
      </div>

      {/* August 2025 Split */}
      <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm dark:border-red-800 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-sm font-bold text-white">!</span>
          <div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">SAD Split: Punar Surjit Faction (August 11, 2025)</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Giani Harpreet Singh elected president of breakaway faction — first Dalit to head an Akali Dal</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {punarSurjitFaction.map((leader) => (
            <div key={leader.name} className="rounded-lg border border-red-200 p-4 dark:border-red-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role}</p>
                  <p className="text-xs text-red-600 mt-1">{leader.caste} | Age {leader.age}</p>
                </div>
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

        <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Split Background:</strong> The Akal Takht issued a hukamnama on December 2, 2024 declaring Sukhbir Singh Badal and other SAD leaders as
            &quot;tankhaiya&quot; (guilty of religious misconduct) over the 2015 Guru Granth Sahib sacrilege incidents and the Behbal Kalan police firing.
            The edict ordered a reorganization of SAD. The Badal camp instead re-elected Sukhbir on April 12, 2025. This triggered the formal split.
            The breakaway faction plans an 11-member presidium including Prem Singh Chandumajra, Bibi Jagir Kaur, Ravi Inder Singh.
            The faction is seeking ECI recognition and control of the &apos;scale&apos; election symbol.
          </p>
        </div>
      </div>

      {/* SGPC Connection */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SGPC Control — The Institutional Battleground
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          The Shiromani Gurdwara Parbandhak Committee is the institutional backbone of Sikh political influence — both factions claim control
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {sgpcKeyFigures.map((s) => (
            <div key={s.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400">{s.name}</h4>
              <p className="text-xs text-slate-500"><strong>Role:</strong> {s.role}</p>
              <Badge variant={s.alignment.includes("Sukhbir") ? "warning" : "info"} className="mt-1">{s.alignment}</Badge>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Key Battle:</strong> SGPC general elections are due. Control of SGPC determines control of gurdwara funds, the &apos;scale&apos; election symbol,
            and the narrative on who represents the &quot;real&quot; Akali Dal. The Badal camp currently controls SGPC through President Harjinder Singh Dhami.
            The Giani Harpreet faction has announced its intention to challenge this. The SGPC President has condemned the breakaway faction&apos;s bid as
            an &quot;insult to Sikh institutions.&quot; The ECI will decide which faction is the real SAD based on organizational and legislative majority tests.
          </p>
        </div>
      </div>

      {/* SAD-BJP Alliance Timeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SAD-BJP Alliance: A 24-Year History That Ended in 2020
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          From coalition partners to bitter rivals — the alliance breakdown sealed SAD&apos;s decline
        </p>

        <div className="mt-4 space-y-2">
          {allianceTimeline.map((t) => (
            <div key={t.year} className="flex items-center gap-4 rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <span className="w-20 text-sm font-bold text-amber-600">{t.year}</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{t.event}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Current Stance (May 2026):</strong> Amit Shah&apos;s March 14, 2026 declaration that BJP will go solo kills the last hope of an
            SAD-BJP reunion. SAD will contest all 117 seats independently. Sukhbir has publicly welcomed BJP&apos;s decision, calling it an
            &quot;opportunity for Punjabis to choose between Delhi-based parties and the Panthic party.&quot; Without the BJP&apos;s urban Hindu votes,
            SAD&apos;s ceiling is likely 12-18 seats in a best-case scenario — far from power.
          </p>
        </div>
      </div>

      {/* 2027 Outlook */}
      <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">27</span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">2027 Punjab Election Outlook</h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">SAD revival prospects — Can the Akali Dal recover from 3 seats?</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Best Case Seats" value="15-22" subtitle="Panthic vote consolidation + anti-AAP wave" color="bg-green-500" />
          <MetricCard title="Base Case Seats" value="6-10" subtitle="Malwa rural seats + limited Majha recovery" color="bg-amber-500" />
          <MetricCard title="Worst Case Seats" value="2-4" subtitle="Split vote with Punar Surjit faction" color="bg-red-500" />
        </div>

        <div className="mt-4 rounded-lg bg-white/60 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Assessment:</strong> SAD&apos;s revival depends on three factors: (1) Whether the Giani Harpreet faction formally splits the Panthic vote
            or merges back before 2027, (2) Whether the Akal Takht hukamnama against Sukhbir is resolved, and (3) Whether SAD can recapture
            its rural Sikh base that migrated to AAP in 2022. The loss of Amritpal Singh&apos;s support (Ayali joining his outfit) is another blow
            to Panthic consolidation. Without BJP alliance, SAD&apos;s urban Hindu vote is gone. The party is reduced to a Malwa-rural Jat Sikh party
            with a ceiling of 12-18 seats. A generational leadership change (beyond the Badal family) seems necessary but unlikely before 2027.
            Most likely outcome: SAD wins 6-10 seats, remains a marginal player, and faces an existential choice after 2027 — either a genuine
            leadership renewal or continued decline toward irrelevance.
          </p>
        </div>
      </div>
    </div>
  );
}
