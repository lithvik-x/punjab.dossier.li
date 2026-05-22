"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Radio, BookOpen, Users, TrendingUp } from "lucide-react";

export default function MediaEcosystemPage() {
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
              <Radio className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Media Ecosystem
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            News agencies • Opinion makers • Public events • Melas
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </motion.div>

      {/* News Agency & Wire Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader>
            <CardTitle className="text-cyan-700 dark:text-cyan-300">
              News Agency & Wire Services (MP5-007 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">
              PTI/UNI/ANI Chandigarh bureaus; stringer networks; news travel time 2-4 hours Chandigarh to district
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">National News Agency Operations</h4>
              <DataTable
                headers={["Agency", "Type", "Punjab Bureau", "Political Lean"]}
                rows={[
                  ["PTI", "Nonprofit cooperative (450+ newspapers)", "Chandigarh bureau; 8-12 correspondents", "Neutral to Establishment"],
                  ["UNI", "Cooperative, 1961", "Chandigarh bureau; Hindi/Urdu stronger", "Slightly Centrist"],
                  ["ANI", "Private, 1971", "Chandigarh bureau; strong video", "Pro-BJP/Central Government"],
                  ["IANS", "Private, 1986", "Lower Punjab relevance", "Moderate/International"],
                ]}
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Stringer Network in Punjab</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>3-15 active stringers per district (23 districts)</li>
                  <li>Major districts: Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda highest density</li>
                  <li>Payment: INR 200-1,500 per story</li>
                  <li>Monthly retainers: INR 10,000-75,000 per district</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Planted Story Costs</h4>
                <DataTable
                  headers={["Placement Type", "Cost (INR)"]}
                  rows={[
                    ["District-level stringer story", "5,000 - 15,000"],
                    ["District newspaper story (front page)", "15,000 - 40,000"],
                    ["Chandigarh-based story (PTI/UNI tier)", "25,000 - 75,000"],
                    ["State-level narrative campaign (10+ outlets)", "2,00,000 - 10,00,000"],
                    ["TV news channel package (regional)", "50,000 - 3,00,000 per slot"],
                    ["WhatsApp network amplification (statewide)", "50,000 - 2,00,000"],
                  ]}
                />
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">News Travel Time: Chandigarh to District Levels</h4>
              <DataTable
                headers={["Stage", "Time", "Notes"]}
                rows={[
                  ["Wire Filing (PTI/UNI/ANI)", "0-30 min", "Stories filed simultaneously to subscribers"],
                  ["Subscriber Reception (districts)", "30-60 min", "Stringers and local papers receive wire"],
                  ["Local Adaptation/Translation", "1-2 hours", "Adding district-local angles"],
                  ["District Publication", "3-5 hours", "Adapted stories published"],
                  ["WhatsApp Amplification", "30-60 min", "After digital publication, near-total district penetration"],
                ]}
              />
              <p className="mt-2 text-xs text-slate-500">Critical vulnerability: 2-4 hour window between wire filing and district publication</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Opinion Makers & Think Tanks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20">
          <CardHeader>
            <CardTitle className="text-teal-700 dark:text-teal-300">
              Opinion Makers & Think Tanks (MP5-008 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-teal-600 dark:text-teal-400">
              Chandigarh-Ludhiana axis; PANJ Foundation (est. 2024); Congress poorly covered by friendly columnists
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Newspaper Columnists on Punjab Politics</h4>
              <DataTable
                headers={["Columnist", "Outlet", "Lean", "Focus"]}
                rows={[
                  ["Kanchan Vasdev", "Indian Express", "Pro-AAP (access-oriented)", "CMO beat, AAP leadership, state policies"],
                  ["Manraj Grewal Sharma", "Indian Express", "Pro-AAP (access-oriented)", "North India coverage framing"],
                  ["Dr. Jagmohan Singh Raju", "Indian Express", "Pro-BJP", "Security/Governance frame; BJP Punjab Gen Secy"],
                  ["AJ Philip", "The Tribune", "Veteran/Independent", "Retrospective political analyses"],
                  ["Rajdeep Sardesai", "TV/Digital", "National frame", "Punjab in all-India narratives"],
                  ["Syed Asad Abbas", "TV platforms", "National frame", "Punjab as central to India"],
                ]}
              />
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab-Focused Think Tanks</h4>
              <DataTable
                headers={["Organization", "Type", "Founded", "Notes"]}
                rows={[
                  ["PANJ Foundation", "Non-partisan think tank", "Feb 2024", "Punjab Plan annual summit; most significant new entrant"],
                  ["Punjab Thinks", "Commentary platform", "Active 2026", "X/Instagram presence; limited institutional footprint"],
                  ["CPPR", "National (Kerala)", "—", "Occasional Punjab analysis"],
                  ["PU-DST-CPR", "Academic", "Active", "Academic research; limited political circulation"],
                  ["Opinion of Punjab", "Political platform", "Active", "Advertorial format; MLA Tracker"],
                ]}
              />
            </div>

            <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Elite Opinion Frames for 2027</h4>
              <div className="grid gap-4 md:grid-cols-3 mt-2">
                <div>
                  <p className="text-sm font-semibold text-red-600">BJP-Aligned Frame</p>
                  <p className="text-xs text-slate-600 mt-1">Governance failure: drugs, organized crime, agrarian distress, youth unemployment</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600">AAP-Monitoring Frame</p>
                  <p className="text-xs text-slate-600 mt-1">Legislative activity, international investor outreach, &quot;standing up to Delhi&quot;</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Congress-Gap Frame</p>
                  <p className="text-xs text-slate-600 mt-1">4-way fight: Warring vs Channi vs Bajwa vs Randhawa; no unified message</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MELA & Public Event Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
          <CardHeader>
            <CardTitle className="text-yellow-700 dark:text-yellow-300">
              MELA & Public Event Media (MP5-009 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Maghi Mela at Muktsar most politically significant (100,000+ footfall); AAP launched 2017 campaign here
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Major Melas in Punjab — Political Relevance</h4>
              <DataTable
                headers={["Mela", "Location", "Timing", "Footfall", "Political Tier"]}
                rows={[
                  ["Maghi Mela", "Muktsar", "January (Maghi day)", "100,000+", "TIER 1 — MUST-ATTEND"],
                  ["Hoshiarpur Mela", "Hoshiarpur (Dussehra Ground)", "December–January", "50,000+", "TIER 2"],
                  ["Vaisakhi Fairs", "Multiple locations", "April 13-14", "20,000–100,000", "TIER 2"],
                  ["Baba Farid Aagman", "Faridkot", "September 19-23", "50,000+", "TIER 2"],
                  ["Kila Raipur Sports Festival", "Kila Raipur (Ludhiana)", "February", "30,000+", "TIER 3"],
                  ["Roshni Mela", "Jagraon (Ludhiana)", "Three days", "10,000–20,000", "TIER 3"],
                  ["Basant Festival", "Kapurthala, Hoshiarpur", "January", "10,000–30,000", "TIER 3"],
                  ["Harivallabh Sangeet Festival", "Jalandhar", "December 27-30", "15,000+", "TIER 3"],
                ]}
              />
            </div>

            <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-300">Maghi Mela — Political Benchmark</h4>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Commemorates 40 Muktas who died fighting Mughals in 1705</li>
                <li>AAP 2016: Kejriwal launched AAP&apos;s 2017 Punjab campaign here with massive rally</li>
                <li>2026 (January): AAP returned with CM Bhagwant Mann mega rally after 10-year hiatus</li>
                <li>SAD, BJP (first independent conference), SAD (Waris Punjab De), SAD (Amritsar) all held separate conferences</li>
                <li>Congress 2026: Abided by Akal Takht directive; no rally organized</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Mela vs Other Outreach Channels</h4>
              <DataTable
                headers={["Channel", "Reach", "Cost per Contact", "Engagement Depth", "Media Multiplier"]}
                rows={[
                  ["Mela/Exhibition stall", "10,000–100,000/event", "₹5-15 per person", "LOW-MEDIUM", "HIGH"],
                  ["Door-to-door", "200-500/day per volunteer", "₹20-50 per contact", "HIGH", "NONE"],
                  ["Rally/Public meeting", "5,000–50,000/event", "₹50-200 per person", "MEDIUM", "HIGH"],
                ]}
              />
            </div>

            {/* EC Expenditure Rules */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Commission Expenditure Rules</h4>
              <DataTable
                headers={["Item", "Rate", "Notes"]}
                rows={[
                  ["Candidate ceiling (2022 Punjab Assembly)", "₹40 lakh per candidate", "Official limit"],
                  ["Tea", "₹15/cup", "Fixed by District Poll Panels"],
                  ["Samosa", "₹15", "Fixed by District Poll Panels"],
                  ["Chole Bhature", "₹40", "Fixed by District Poll Panels"],
                  ["Lassi", "₹20", "Fixed by District Poll Panels"],
                  ["Nimbu Pani", "₹15", "Fixed by District Poll Panels"],
                  ["TATA Safari/Scorpio (vehicle)", "₹10,000-15,000/day", "Hire rate"],
                  ["Honda City/Ciaz (vehicle)", "₹5,000-8,000/day", "Hire rate"],
                  ["Bus", "₹15,000-25,000/day", "Hire rate"],
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ground Media / Jangla */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-300">
              Ground Media Landscape (MP5-004 Research)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600 dark:text-green-400">
              Ground media decisive for rural Punjab; AAP won ~70% of rural body seats (Dec 2025); Door-to-door most effective
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Ground Media Cost Benchmarks</h4>
              <DataTable
                headers={["Item", "Cost Range", "Notes"]}
                rows={[
                  ["Door-to-door team (20 workers, 5 days)", "Rs 50,000-1,50,000", "Labor + travel"],
                  ["Mobile van with audio (1 van, 5 days)", "Rs 30,000-80,000", "Audio amplification"],
                  ["Handouts/fliers per village (500 copies x 20)", "Rs 20,000-40,000", "Printed material"],
                  ["Local influencer/pradhan coordination", "Rs 10,000-30,000", "Community leader engagement"],
                  ["Total district-level ground media", "Rs 1.1-3 lakh", "Per constituency zone (15-20 villages)"],
                  ["State-level ground media campaign", "Rs 15-40 crore", "All 23 districts, 117 ACs, 4 weeks"],
                ]}
              />
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Optimal Ground Media Mix (Rural Punjab)</h4>
              <DataTable
                headers={["Channel", "Budget %", "Effectiveness"]}
                rows={[
                  ["Door-to-door campaigns", "25-30%", "Most effective for persuasion and GOTV"],
                  ["Panchayat/pradhan networks", "15-20%", "Most cost-effective for message amplification"],
                  ["Haat/chawk market interventions", "10-15%", "Efficient for broad reach"],
                  ["Mobile audio/video vans", "8-10%", "Force multiplier, not primary tool"],
                  ["Cycle rallies", "3-5%", "Mobilization supplement only"],
                  ["Mass media (TV, radio, digital)", "35-45%", "Brand reinforcement and urban/semi-urban"],
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
