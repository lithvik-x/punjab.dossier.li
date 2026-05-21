"use client";

import { Badge } from "@/components/ui/MetricCard";
import {
  radhaSoamiData,
  damdamiTaksalData,
  sgpcData,
  akalTakhtData,
} from "@/lib/sikhism-internal-data";
import { RELIGION_SOCIAL_STRUCTURE_DATA } from "@/lib/religion-social-structure-data";
import { SOCIAL_COALITION_DATA } from "@/lib/social-coalition-data";

/**
 * Demography - Dera & Sects Section
 * Covers major deras, sects, SGPC influence, RSS presence and political alignment patterns
 */
export default function DemographyDeraSectsPage() {
  const deraBallan = RELIGION_SOCIAL_STRUCTURE_DATA.deras.find(
    (d) => d.name === "Dera Sachkhand Ballan"
  );
  const deraSachaSauda = RELIGION_SOCIAL_STRUCTURE_DATA.deras.find(
    (d) => d.name === "Dera Sacha Sauda"
  );
  const deraRadhaSoami = RELIGION_SOCIAL_STRUCTURE_DATA.deras.find(
    (d) => d.name === "Radha Soami Satsang Beas"
  );
  const deraDukhBhanjani = RELIGION_SOCIAL_STRUCTURE_DATA.deras.find(
    (d) => d.name === "Dera Dukh Bhanjani"
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              D
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Dera & Sects
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Major deras, Sikh sects, SGPC/RSS influence, and electoral alignment patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Dera Sachkhand Ballan (Ravidassia) */}
      <div className="rounded-xl border-2 border-purple-500 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            R
          </span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
              Dera Sachkhand Ballan (Ravidassia)
            </h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Most significant religious institution for Ravidassia community
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Location & HQ
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Ballan, Jalandhar district, Doaba region
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Founded by Pir Sadruddin (Shah Shamas) | Current Head: Pir Nazam
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Follower Base
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              20+ lakh followers across Malwa and Doaba regions
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Annual Varanasi pilgrimage draws ~20 lakh devotees
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Political Significance
          </h4>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>• Substantial SC voter mobilization in Doaba's 23 seats</li>
            <li>• Ravidassia community (predominantly SC backgrounds)</li>
            <li>• Historically Congress-aligned | Currently maintaining public neutrality</li>
            <li>• Disciplined bloc voting following dera guidance</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/40">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
            Congress Strategy
          </p>
          <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
            Reinforce traditional ties; seek public endorsement; involve in welfare programs.
            With SAD weakened, Congress can court Ravidassia votes through engagement with
            Ballan leadership on community-specific issues.
          </p>
        </div>
      </div>

      {/* Radha Soami and Other Deras */}
      <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6 dark:border-blue-700 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            R
          </span>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
              Radha Soami & Other Deras
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Cross-faith spiritual movements with significant voter mobilization capacity
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Radha Soami */}
          <div className="rounded-lg bg-blue-100/50 p-4 dark:bg-blue-900/30">
            <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
              Radha Soami Satsang Beas (RSSB)
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">HQ:</span> Beas, Amritsar district
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Followers:</span> Estimated millions in Punjab;
                distributed across Majha and Malwa
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Nature:</span> Spiritual movement with followers
                across religions; not exclusively Sikh
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Political:</span> Officially apolitical; vote as
                disciplined bloc per dera guidance
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Influence:</span> Amritsar rural, Gurdaspur,
                Kapurthala, Hoshiarpur, parts of Malwa
              </p>
            </div>
            <div className="mt-3 rounded bg-blue-200/50 p-2 dark:bg-blue-800/50">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
                Congress Opportunity
              </p>
              <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
                Mass vote-bank; courting RSSB through respectful engagement with current head
                (Gurinder Singh Dhillon) is electorally decisive
              </p>
            </div>
          </div>

          {/* Dera Sacha Sauda */}
          <div className="rounded-lg bg-red-100/50 p-4 dark:bg-red-900/30">
            <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">
              Dera Sacha Sauda (Sirsa)
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">HQ:</span> Sirsa, Haryana (~100km from Punjab border)
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Followers:</span> 10-15% of Sikh voters in Malwa region
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Current Head:</span> Gurmeet Ram Rahim Singh (incarcerated)
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Influence:</span> Bathinda, Mansa, Muktsar, Faridkot, Ferozepur
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">Political:</span> Pro-AAP in 2022; currently operates under management committee
              </p>
            </div>
            <div className="mt-3 rounded bg-red-200/50 p-2 dark:bg-red-800/50">
              <p className="text-xs font-medium text-red-700 dark:text-red-300">
                Congress Risk
              </p>
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                Do not seek endorsement; focus on neutralization through community leaders.
                Influence diminished but remains significant in Malwa.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Deras */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100/50 p-4 dark:bg-slate-800/50">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-400">
              Dera Dukh Bhanjani (Sultan Lodhi)
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">HQ:</span> Sultan Lodhi, Kapurthala district
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Primarily Sikh, with connections to Mazhabi Sikh community
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Significant but smaller dera with strong local following in Doaba region
            </p>
          </div>
          <div className="rounded-lg bg-slate-100/50 p-4 dark:bg-slate-800/50">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-400">
              Nirankari
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">HQ:</span> Chandigarh
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sikh reformist movement; emphasizes monotheism, rejects caste distinctions
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Urban concentration; traditionally Congress-leaning
            </p>
          </div>
        </div>
      </div>

      {/* SGPC & Akal Takht Influence */}
      <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            S
          </span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
              SGPC & Akal Takht
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Sikh religious-political institutions with significant electoral influence
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              SGPC Structure
            </h4>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>• Elected Members: {sgpcData.structure.electedMembers}</li>
              <li>• Nominated Members: {sgpcData.structure.nominatedMembers}</li>
              <li>• Takht Jathedars: {sgpcData.structure.takhtJathedars}</li>
              <li>• Annual Budget: ₹{sgpcData.structure.annualBudgetCrore} crore</li>
              <li>• Keshdhari Voters: ~{sgpcData.voterRegistration.keshdhariVoters.toLocaleString()}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              SGPC Election Status
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Last Election: {sgpcData.electionStatus.lastElection}
            </p>
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {sgpcData.electionStatus.yearsOverdue} years overdue
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Control: {sgpcData.electionStatus.control}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-300">
            Key Tension
          </h4>
          <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
            {sgpcData.keyTension}
          </p>
        </div>

        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Akal Takht
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Current Jathedar:</span> {akalTakhtData.currentJathedar}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Acting Jathedar:</span> {akalTakhtData.actingJathedar}
          </p>
          {akalTakhtData.recentAction && (
            <div className="mt-2 rounded bg-amber-100 p-2 dark:bg-amber-900/40">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                December 2024: Tankhah on Sukhbir Singh Badal
              </p>
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                Undermining Sikh faith, promoting officers linked to 1980s massacres,
                facilitating Dera Sacha Sauda pardon, failing to punish sacrilege culprits
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 rounded bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm font-medium text-green-700 dark:text-green-300">
            Congress Opportunity
          </p>
          <p className="mt-1 text-sm text-green-600 dark:text-green-400">
            {sgpcData.congressImplication}
          </p>
        </div>
      </div>

      {/* Damdami Taksal & RSS */}
      <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6 dark:border-emerald-700 dark:bg-emerald-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            D
          </span>
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
              Damdami Taksal & RSS Influence
            </h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Most politically significant Sikh sect and RSS penetration
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Damdami Taksal
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">HQ:</span> Chowk Mehta, Gurdaspur district
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Current Head:</span> {damdamiTaksalData.currentHead}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">SGPC Seats:</span> ~{damdamiTaksalData.influence.sgpcSeats}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {damdamiTaksalData.description}
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Political Alignment
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Current:</span> Broken from SAD (Badal);
              openly supported BJP in Maharashtra elections (Nov 2024)
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Historical:</span> Hosted RSS chief in 2000;
              historical ties with RSS
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Regions:</span> {damdamiTaksalData.influence.regions.join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm font-medium text-red-700 dark:text-red-300">
            Congress Risk
          </p>
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {damdamiTaksalData.congressRisk}
          </p>
        </div>

        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            RSS Presence in Sikh Institutions
          </h4>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>• RSS chief visited Damdami Taksal HQ in 2000</li>
            <li>• Damdami Taksal head met BJP Amritsar candidate during 2024 LS elections</li>
            <li>• BJP positioning in Sikh institutions through Damdami Taksal alignment</li>
            <li>• Congress must not be seen as anti-panthic</li>
          </ul>
        </div>
      </div>

      {/* Political Alignment Patterns */}
      <div className="rounded-xl border-2 border-indigo-500 bg-indigo-50 p-6 dark:border-indigo-700 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            P
          </span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
              Political Alignment Patterns
            </h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Dera and sect voting behavior by region and community
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-indigo-100/50 p-3 dark:bg-indigo-900/30">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-400">
                Doaba (23 seats)
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Highest SC concentration; Nirankari, Radha Soami, Namdhari influence
              </p>
              <p className="mt-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Dera-influenced swing region
              </p>
            </div>
            <div className="rounded-lg bg-indigo-100/50 p-3 dark:bg-indigo-900/30">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-400">
                Malwa (69 seats)
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Dera Sacha Sauda dominant; Radha Soami; highest AAP performance
              </p>
              <p className="mt-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                AAP stronghold; SAD fractured
              </p>
            </div>
            <div className="rounded-lg bg-indigo-100/50 p-3 dark:bg-indigo-900/30">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-400">
                Majha (27 seats)
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Damdami Taksal, Nihang; historically Congress base
              </p>
              <p className="mt-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Panthic-aligned; more stable
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Dera Engagement Summary
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="px-2 py-1 text-left font-semibold">Dera</th>
                    <th className="px-2 py-1 text-left font-semibold">Location</th>
                    <th className="px-2 py-1 text-left font-semibold">Followers</th>
                    <th className="px-2 py-1 text-left font-semibold">Political Lean</th>
                    <th className="px-2 py-1 text-left font-semibold">Congress Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-2 py-1">Dera Sachkhand Ballan</td>
                    <td className="px-2 py-1">Jalandhar (Doaba)</td>
                    <td className="px-2 py-1">20+ lakh</td>
                    <td className="px-2 py-1 text-green-600">Historically Congress</td>
                    <td className="px-2 py-1">Seek endorsement</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-2 py-1">Dera Sacha Sauda</td>
                    <td className="px-2 py-1">Sirsa (Haryana)</td>
                    <td className="px-2 py-1">Malwa significant</td>
                    <td className="px-2 py-1 text-red-600">Pro-AAP (2022)</td>
                    <td className="px-2 py-1">Neutralize</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-2 py-1">Radha Soami (Beas)</td>
                    <td className="px-2 py-1">Amritsar (Majha)</td>
                    <td className="px-2 py-1">Millions</td>
                    <td className="px-2 py-1">Officially neutral</td>
                    <td className="px-2 py-1">Respect neutrality</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-2 py-1">Damdami Taksal</td>
                    <td className="px-2 py-1">Gurdaspur (Majha)</td>
                    <td className="px-2 py-1">SGPC 20 seats</td>
                    <td className="px-2 py-1 text-red-600">BJP aligned</td>
                    <td className="px-2 py-1">Avoid anti-panthic</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">Namdhari</td>
                    <td className="px-2 py-1">Ludhiana</td>
                    <td className="px-2 py-1">2-3 lakh</td>
                    <td className="px-2 py-1 text-green-600">Disciplined bloc</td>
                    <td className="px-2 py-1">Engage Bhaini Sahib</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Implications for Congress */}
      <div className="rounded-xl border-2 border-rose-500 bg-rose-50 p-6 dark:border-rose-700 dark:bg-rose-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
            !
          </span>
          <div>
            <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">
              Strategic Implications for Congress
            </h3>
            <p className="text-sm text-rose-600 dark:text-rose-400">
              Key opportunities and risks in dera-sect electoral landscape
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
              Opportunities
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Dera Sachkhand Ballan endorsement
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Massive SC vote-bank in Doaba; renew traditional ties
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    RSSB engagement
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cross-faith vote-bank; respectful outreach to Gurinder Singh Dhillon
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Namdhari bloc
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    With SAD weakened, court through Bhaini Sahib engagement
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    SGPC democratization
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Advocate for timely elections; position as reformist
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
              Risks
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Damdami Taksal-BJP alignment
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Could mobilize Panthic voters against Congress
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Dera Sacha Sauda for AAP
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Actively working for AAP; significant Malwa influence
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Nirankari perception
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Even perceived closeness triggers backlash from mainstream Sikhs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Anti-panthic perception
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Must respect Akal Takht authority; any disrespect is electoral poison
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Key Takeaway
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Congress must engage dera networks strategically — securing Dera Sachkhand Ballan
            endorsement in Doaba, maintaining respectful distance from Nirankaris, avoiding any
            anti-panthic positioning, and exposing BJP-Damdami Taksal alignment without appearing
            hostile to Sikh institutions themselves.
          </p>
        </div>
      </div>
    </div>
  );
}
