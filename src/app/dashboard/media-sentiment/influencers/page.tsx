"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { motion } from "framer-motion";
import { Users, Star, Church, TrendingUp } from "lucide-react";
import type {
  Journalist,
} from "@/types/media-narrative";

export default function MediaInfluencersPage() {
  const journalists: Journalist[] = [
    { name: "Barjinder Singh Hamdard", outlet: "Ajit", location: "Jalandhar", score: 4, role: "Editor-in-Chief" },
    { name: "GS Bhullar", outlet: "Jagbani", location: "Jalandhar", score: 3, role: "Officiating President, Punjab Digital Media Association" },
    { name: "Kuldeep Nayyar", outlet: "Drishti Magazine", location: "Chandigarh", score: 3.5, role: "Founder, Former Journalist" },
    { name: "Vikram Jeet Singh Mann", outlet: "Daily Ajit", location: "Chandigarh", score: 3.5, role: "Staff Correspondent" },
    { name: "Rajesh K Pathania", outlet: "Ajit Samachar", location: "Chandigarh", score: 3.5, role: "Reporter" },
    { name: "Bhushan Sood", outlet: "Daily Ajit", location: "Jalandhar", score: 3.5, role: "Reporter" },
    { name: "Rajinder Singh", outlet: "Daily Ajit", location: "Jalandhar", score: 3.5, role: "Reporter" },
    { name: "Dr S P Singh", outlet: "GNDU", location: "Amritsar", score: 3, role: "Former Vice-Chancellor, Public Intellectual" },
    { name: "Surinder Singh Lali", outlet: "Political Analyst", location: "State-wide", score: 3, role: "Commentator (News9)" },
    { name: "Rajesh Ramachandran", outlet: "The Tribune", location: "Chandigarh", score: 2.5, role: "Political Editor" },
    { name: "Swaraj Bir Singh", outlet: "Punjabi Tribune", location: "Chandigarh", score: 2.5, role: "Editor" },
    { name: "Jupinderjit Singh", outlet: "The Tribune", location: "Chandigarh", score: 2.5, role: "Deputy Editor" },
    { name: "Asit Jolly", outlet: "India Today", location: "Chandigarh", score: 2.5, role: "Bureau Head" },
    { name: "Prabjot Singh", outlet: "PTC", location: "Punjab", score: 1.5, role: "Overall Punjab" },
    { name: "Daljeet Singh", outlet: "PTC", location: "Punjab", score: 1.5, role: "Reporter" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              <Users className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Influencers & Journalists
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Journalists • Celebrities • Religious leaders • Community influencers
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </motion.div>

      {/* Key Journalists Database */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Key Journalists Database</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">20+ named journalists with outlets and Congress friendliness scores (1-5)</p>
            <DataTable
              headers={["Name", "Outlet", "Location", "Score", "Role"]}
              rows={journalists.map(j => [
                j.name,
                j.outlet,
                j.location,
                j.score.toString(),
                j.role,
              ])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Celebrity Influencers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20">
          <CardHeader>
            <CardTitle className="text-pink-700 dark:text-pink-300">
              Celebrity & Cultural Influencers (MP5-006 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-pink-600 dark:text-pink-400">
              Celebrity endorsements crowd-pullers but unreliable vote-converters; Diljit Dosanjh ruled out politics (May 2026)
            </p>

            {/* Celebrity Political Candidates */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjabi Celebrities with Political Profiles</h4>
              <DataTable
                headers={["Name", "Domain", "Party", "Position", "Result"]}
                rows={[
                  ["Bhagwant Mann", "Comedian/Satirist", "AAP", "CM (2022–present)", "VERIFIED SUCCESS"],
                  ["Sunny Deol", "Bollywood Actor", "BJP", "MP Gurdaspur (2019–present)", "Active"],
                  ["Navjot Singh Sidhu", "Cricketer/TV Star", "Congress", "MLA, Cabinet Minister", "Active"],
                  ["Mohammad Sadiq", "Folk Singer", "Congress", "MP Faridkot (2019–present)", "Active"],
                  ["Hans Raj Hans", "Sufi Singer", "BJP", "Lost Faridkot 2024", "Lost"],
                  ["Anmol Gagan Mann", "Singer/Model", "AAP", "MLA Kharar (2022–2025)", "Resigned Jul 2025"],
                  ["Gurpreet Ghuggi", "Actor/Comedian", "AAP", "Lost Batala 2017", "Lost"],
                  ["Karamjit Anmol", "Actor", "AAP", "Lost Faridkot 2024", "Lost to son of Indira Gandhi assassin"],
                  ["Sidhu Moosewala", "Rapper/Singer", "Congress", "Lost Mansa 2022", "Murdered May 2022"],
                  ["Vinod Khanna (deceased)", "Bollywood Actor", "BJP", "MP Gurdaspur (several terms)", "Deceased"],
                ]}
              />
            </div>

            {/* Diljit Dosanjh Special */}
            <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300">Diljit Dosanjh — The Outlier</h4>
              <div className="grid gap-4 md:grid-cols-3 mt-2">
                <div>
                  <p className="text-sm text-slate-500">Instagram</p>
                  <p className="text-xl font-bold">26.7M followers</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Twitter/X</p>
                  <p className="text-xl font-bold">5.5M followers</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">YouTube</p>
                  <p className="text-xl font-bold">10M+</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Explicitly ruled out political entry (May 2026): &quot;I love my work and want to continue doing that&quot;</p>
              <p className="mt-1 text-sm text-slate-600">Prominent supporter of 2020-21 farmers&apos; agitation; songs about farm laws turned protest into cultural movement</p>
            </div>

            {/* Celebrity Endorsement Effectiveness */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Celebrity Endorsement vs Electoral Success</h4>
              <DataTable
                headers={["Celebrity", "Party", "Result", "Analysis"]}
                rows={[
                  ["Sidhu Moosewala", "Congress", "Lost Mansa 2022", "Massive youth following but lost"],
                  ["Karamjit Anmol", "AAP", "Lost Faridkot 2024", "Lost to son of Indira Gandhi assassin"],
                  ["Gurpreet Ghuggi", "AAP", "Lost Batala 2017", "No conversion"],
                  ["Hans Raj Hans", "BJP", "Lost Faridkot 2024", "Lost despite prior MP status"],
                  ["Anmol Gagan Mann", "AAP", "Won Kharar 2022, resigned 2025", "Only Bhagwant Mann succeeded"],
                ]}
              />
              <p className="mt-2 text-xs text-slate-500">Research conclusion: Celebrity candidates fail to convert fame into votes; sole success is Bhagwant Mann (built over years, not overnight)</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Religious/Community Influencers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-300">
              Religious & Community Influencers (MP5-005 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600 dark:text-orange-400">
              Deras command thousands of votes; Dera Sacha Sauda 60M followers; BJP Dalit-dera strategy targets 250 deras
            </p>

            {/* Major Deras */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Major Deras in Punjab</h4>
              <DataTable
                headers={["Dera", "Head", "Region", "Followers", "Political Tilt"]}
                rows={[
                  ["Dera Sacha Sauda", "Gurmeet Ram Rahim Singh (convict)", "Malwa (Haryana HQ)", "60 million worldwide", "BJP (via parole strategy)"],
                  ["Radha Soami Satsang Beas", "Baba Gurinder Singh Dhillon", "Doaba, Malwa", "Lakhs", "Neutral (officially)"],
                  ["Dera Sachkhand Ballan", "Sant Niranjan Das", "Doaba", "Significant", "Ravidassia, 32% vote bank"],
                  ["Sant Nirankari Mission", "Nirankari Sant", "Mixed", "Lakhs", "Generally neutral"],
                  ["Namdhari Sect", "Baba Ram Singh", "Malwa", "Moderate", "Historically Akali"],
                  ["Noormahal Dera", "Divya Jyoti Jagriti Sansthan", "Malwa", "Moderate", "Unknown"],
                ]}
              />
            </div>

            {/* Ravidassia Vote Bank */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Ravidassia Vote Bank (Dera Ballan)</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>32% of Punjab&apos;s total vote bank</li>
                  <li>Doaba region: Jalandhar, Hoshiarpur, Nawanshahr, Kapurthala</li>
                  <li>BJP facilitated meeting: PM Modi + Sant Niranjan Dass (Dec 2025)</li>
                  <li>AAP: Rs 25 crore for Sri Guru Ravidas Research Centre</li>
                  <li>Congress (via Channi) close to the Dera</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">BJP Dalit-Dera Strategy (2027)</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>Identified 250 small and large deras for structured outreach</li>
                  <li>Padma Shri awarded to Sant Niranjan Das (Jan 2026)</li>
                  <li>Strategy: Compensate for lack of Jatt Sikh support</li>
                  <li>BJP vote share: 7-8% (alliance) → 6.6% (2022) → 18.5-19% (2024 Lok Sabha)</li>
                </ul>
              </div>
            </div>

            {/* BJP Vote Share Progression */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">BJP Vote Share Progression in Punjab</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">Alliance Years</p>
                  <p className="text-2xl font-bold text-green-600">7-8%</p>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">2022 Assembly</p>
                  <p className="text-2xl font-bold text-blue-600">6.6%</p>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">2024 Lok Sabha</p>
                  <p className="text-2xl font-bold text-red-600">18.5-19%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Punjabi Top Influencers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader>
            <CardTitle className="text-purple-700 dark:text-purple-300">
              Top Punjabi Influencers (Social Media)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <MetricCard title="Diljit Dosanjh" value="26.7M" subtitle="Instagram followers" color="purple" />
              <MetricCard title="Guru Randhawa" value="36.5M" subtitle="Instagram followers" color="emerald" />
              <MetricCard title="Yo Yo Honey Singh" value="20.9M" subtitle="Instagram followers" color="orange" />
              <MetricCard title="Sidhu Moosewala" value="28.5M" subtitle="YouTube (memorial)" color="rose" />
            </div>
            <DataTable
              headers={["Rank", "Name", "Platform", "Follower Count", "Category"]}
              rows={[
                ["1", "Diljit Dosanjh", "Instagram", "26.7M", "Singer/Actor"],
                ["2", "Yuvraj Singh", "Instagram", "21.1M", "Cricketer"],
                ["3", "Yo Yo Honey Singh", "Instagram", "20.9M", "Singer"],
                ["4", "Sidhu Moose Wala (memorial)", "YouTube", "28.5M (music)", "Singer (deceased)"],
                ["5", "Guru Randhawa", "Instagram", "36.5M", "Singer"],
                ["6", "Amrinder Gill", "YouTube/Instagram", "~8M", "Singer/Actor"],
                ["7", "Neha Kakkar", "Instagram", "~22M", "Singer"],
                ["8", "Parmish Verma", "YouTube/Instagram", "~5M", "Singer/Director"],
                ["9", "Sharry Mann", "YouTube", "~3M", "Singer"],
                ["10", "Babbu Maan", "YouTube/Instagram", "~10M", "Singer"],
              ]}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
