"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import type {
  SocialMetric,
  YouTubeChannel,
} from "@/types/media-narrative";

export default function MediaDigitalPage() {
  const socialMetrics: SocialMetric[] = [
    { platform: "WhatsApp", penetration: "80.8%", groups: 15000, reach: "42L", sentiment: 0.72 },
    { platform: "Facebook", penetration: "72%", followers: "12.5L", engagement: 4.2, sentiment: 0.48 },
    { platform: "Instagram", penetration: "74%", followers: "8.3L", engagement: 6.8, sentiment: 0.52 },
    { platform: "YouTube", penetration: "68%", subscribers: "4.5L", views: "45L", sentiment: 0.45 },
    { platform: "Twitter/X", penetration: "28%", followers: "2.1L", engagement: 3.5, sentiment: 0.38 },
  ];

  const youtubeChannelsFull: YouTubeChannel[] = [
    { name: "Pro Punjab Tv", subscribers: "1.51M", lean: "Anti-establishment / Farmer legacy", value: "High", region: "State-wide" },
    { name: "PTC News", subscribers: "5M+", lean: "Pro-SAD", value: "Hostile", region: "State-wide" },
    { name: "ABP Sanjha", subscribers: "1M+", lean: "Moderate", value: "Neutral", region: "State-wide" },
    { name: "Zee Punjab", subscribers: "1M+", lean: "Pro-BJP", value: "Hostile", region: "State-wide" },
    { name: "News18 Punjab", subscribers: "500K+", lean: "Anti-AAP", value: "Neutral", region: "State-wide" },
    { name: "Punjab Today", subscribers: "500K+", lean: "Pro-Congress [UNVERIFIED]", value: "Potential", region: "State-wide" },
    { name: "Sikh Siyasat", subscribers: "400K+", lean: "Panthic/SGPC aligned", value: "Niche", region: "Diaspora" },
    { name: "Navdeep Singh Walia", subscribers: "200K+", lean: "Anti-AAP", value: "Monitor", region: "State-wide" },
    { name: "Breaking Punjabi News", subscribers: "200K+", lean: "Neutral", value: "Neutral", region: "State-wide" },
    { name: "Malwa TV", subscribers: "150K+", lean: "Regional", value: "Local", region: "Malwa" },
    { name: "Dhaliwal TV", subscribers: "100K+", lean: "Pro-Congress", value: "Potential", region: "State-wide" },
    { name: "Gursharan Singh TV", subscribers: "100K+", lean: "Independent", value: "Monitor", region: "State-wide" },
  ];

  const digitalAdSpendCycle1 = [
    { party: "BJP", spend: "₹50-80 crore", congressRatio: "25x", note: "Major outspend on digital ads, AI-generated content" },
    { party: "Congress", spend: "₹2-3 crore", congressRatio: "Baseline", note: "Limited digital infrastructure" },
    { party: "AAP", spend: "₹5-8 crore", congressRatio: "3-4x", note: "State-level digital presence" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              8
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Digital Media
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Social platforms • YouTube • WhatsApp • Digital advertising
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </div>

      {/* Social Media Performance */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Social Reach"
          value="72.5L"
          subtitle="Total impressions"
          change={34}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="WhatsApp Groups"
          value="13,000+"
          subtitle="Political groups in Punjab"
          change={0}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Digital Ad Spend"
          value="₹50-80Cr"
          subtitle="BJP total (est.)"
          change={0}
          trend="up"
          color="bg-red-500"
        />
        <MetricCard
          title="Congress Spend"
          value="₹2-3Cr"
          subtitle="25x less than BJP"
          change={0}
          trend="down"
          color="bg-orange-500"
        />
      </div>

      {/* Social Media Performance */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Social Media Performance
        </h3>
        <div className="mt-6 space-y-4">
          {socialMetrics.map((social) => (
            <div key={social.platform} className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-xs font-bold text-indigo-700">{social.platform[0]}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{social.platform}</span>
                  <Badge variant={social.sentiment > 0.4 ? "success" : "info"}>
                    +{social.sentiment}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500">
                  {social.penetration} penetration • {social.reach || social.groups} reach
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Channel Details */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          YouTube Channel Details (G3 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">Punjabi digital news ecosystem with verified subscriber counts</p>
        <div className="mt-4 space-y-3">
          {youtubeChannelsFull.map((ch) => (
            <div key={ch.name} className="flex items-center justify-between rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <div>
                <span className="font-medium text-slate-700 dark:text-slate-300">{ch.name}</span>
                <p className="text-xs text-slate-500">{ch.subscribers} subscribers — {ch.lean}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={ch.value === "High" ? "success" : ch.value === "Medium" ? "info" : ch.value === "Niche" ? "warning" : ch.value === "Hostile" ? "danger" : "default"}>
                  {ch.value}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Ad Spend Comparison */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Ad Spend Comparison (A37 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">WhatsApp is the dominant platform for voter outreach and political communication (26.2% usage)</p>
        <div className="mt-4 space-y-4">
          {digitalAdSpendCycle1.map((item) => (
            <div key={item.party} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${
                    item.party === "BJP" ? "text-red-600" :
                    item.party === "Congress" ? "text-blue-600" : "text-orange-600"
                  }`}>{item.party}</span>
                  <Badge variant={item.party === "BJP" ? "danger" : item.party === "Congress" ? "info" : "warning"}>
                    {item.congressRatio}
                  </Badge>
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">{item.spend}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Strategy - The Backbone */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-sm dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          WhatsApp: The Indispensable Multiplier (MP5 Deliverable 1)
        </h3>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          WhatsApp is the backbone of Congress&apos;s entire last-mile voter contact architecture
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="WhatsApp Groups"
            value="13,000+"
            subtitle="Political groups in Punjab"
            color="bg-green-500"
          />
          <MetricCard
            title="Group Members"
            value="9.1L+"
            subtitle="Members across all groups"
            color="bg-green-500"
          />
          <MetricCard
            title="Booth Sevaks Connected"
            value="25,000"
            subtitle="Each managing ~30 voters"
            color="bg-green-500"
          />
          <MetricCard
            title="ROI Multiplier"
            value="3-5x"
            subtitle="TV/rally content amplified"
            color="bg-green-500"
          />
        </div>

        <h4 className="mt-6 font-semibold text-green-900 dark:text-green-100">Why WhatsApp is #1 Channel</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Cost Efficiency at Scale</p>
            <p className="text-xs text-slate-600 mt-1">Near-zero marginal cost per user reached. 25,000 booth sevaks cascade messages to voters within minutes.</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Trusted Peer-to-Peer</p>
            <p className="text-xs text-slate-600 mt-1">Messages arrive from known contacts. In Punjab&apos;s kinship society, forwarded messages carry higher credibility than ads.</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Multi-Format Support</p>
            <p className="text-xs text-slate-600 mt-1">Punjabi audio clips, visual cards, short video reels, text, documents — all propagate seamlessly.</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Critical:</strong> If WhatsApp fails on election day, the ground game collapses. It is the nervous system connecting war room to 25,000 booth-level contacts.
          </p>
        </div>
      </div>

      {/* Digital Landscape */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-800 dark:bg-blue-900/20">
        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
          Digital Media Landscape (MP5-003 Research)
        </h3>
        <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
          Mobile-first ecosystem; 96% via mobile; WhatsApp dominates political communication; Meta CPM ~$6.59
        </p>

        <div className="grid gap-4 md:grid-cols-4 mt-4">
          <MetricCard
            title="Internet Users (India)"
            value="806M"
            subtitle="55.3% penetration (Jan 2025)"
            change={0}
            trend="up"
            color="bg-blue-500"
          />
          <MetricCard
            title="Mobile Access"
            value="96%"
            subtitle="of internet users"
            change={0}
            trend="up"
            color="bg-green-500"
          />
          <MetricCard
            title="Punjab Internet"
            value="83.22%"
            subtitle="Household penetration"
            change={0}
            trend="up"
            color="bg-purple-500"
          />
          <MetricCard
            title="Mobile Speed"
            value="100.78"
            subtitle="Mbps median download"
            change={0}
            trend="up"
            color="bg-indigo-500"
          />
        </div>

        {/* Social Media Platform Rankings */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Social Media Platform Rankings (India 2025)</h4>
          <DataTable
            headers={["Platform", "Users (Ad Reach)", "% of Population", "% of Internet Users", "YoY Growth"]}
            rows={[
              ["YouTube", "491 million", "33.7%", "60.9%", "+6.3% (+29M)"],
              ["Instagram", "414 million", "28.4%", "51.4%", "+14.0% (+51M)"],
              ["Facebook", "384 million", "26.3%", "47.6%", "+4.5% (+16.7M)"],
              ["WhatsApp", "487 million+", "~33%", "~60%", "Stable"],
              ["LinkedIn", "150 million", "10.3%", "18.6%", "+25.0% (+30M)"],
              ["Twitter/X", "~18-22 million", "~1.5%", "~2.5%", "Minimal growth"],
            ]}
          />
        </div>

        {/* Content Format Hierarchy */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Political Content Format Hierarchy (Punjab)</h4>
          <DataTable
            headers={["Format", "Share Value", "Notes"]}
            rows={[
              ["Video clips (30-90 sec)", "HIGHEST", "Most shared on WhatsApp; meme videos"],
              ["Memes/Images", "HIGH", "Single-frame political memes; lowest-cost viral"],
              ["Audio/Voice notes", "MEDIUM", "Critical for rural, lower-literacy voters"],
              ["Text posts", "LOW", "Minimal share value; lowest organic reach"],
              ["Articles/Long-form", "LOWEST", "Read by urban educated elite only"],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
