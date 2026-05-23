"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Monitor, AlertTriangle, TrendingUp, Video, MessageCircle } from "lucide-react";

export default function DigitalMediaPage() {
  const viralContent = [
    { content: "Sidhu Moosewala 'Scapegoat' song", platform: "YouTube", views: "65M+", sentiment: "Negative for AAP" },
    { content: "Mann Assembly 'drunk' video", platform: "Twitter/FB", views: "48hr trend", sentiment: "Negative for AAP" },
    { content: "AAP Rajya Sabha defections", platform: "Twitter", views: "National trend", sentiment: "Negative for AAP" },
  ];

  const viralMetrics = [
    { metric: "Sidhu Moosewala 'Scapegoat' views", value: "65M+", platform: "YouTube", period: "April 2026 (second surge)" },
    { metric: "Pro Punjab Tv subscribers", value: "1.51M", platform: "YouTube", period: "Founded 2020" },
    { metric: "#Gaddar trending", value: "National", platform: "Twitter", period: "April 2026" },
    { metric: "Operation Lotus narrative", value: "48hr trend", platform: "Facebook", period: "April-May 2026" },
  ];

  const influencerTiers = [
    { tier: "Category A (1M+ subscribers)", rate: "Rs 8 lakh/campaign" },
    { tier: "Category B (500K-1M)", rate: "Rs 5 lakh/campaign" },
    { tier: "Category C (100K-500K)", rate: "Rs 3 lakh/campaign" },
    { tier: "Category D/E (10K-100K)", rate: "Progressively lower" },
  ];

  const socialMediaPenetration = [
    { platform: "WhatsApp", urban: "85%+", rural: "70%+", note: "Primary voter contact channel" },
    { platform: "Facebook", penetration: "~65% of social users", note: "Regional groups" },
    { platform: "YouTube", penetration: "~45%", note: "Video comments" },
    { platform: "Instagram", penetration: "~25%", note: "Youth-heavy, growing" },
    { platform: "Twitter/X", penetration: "~15%", note: "Urban/elite" },
  ];

  const keyHashtags = [
    { hashtag: "#Gaddar / #Gaddari", deployed: "AAP against defecting MPs", period: "April 2026" },
    { hashtag: "#OperationLotus", deployed: "AAP framing of BJP defections", period: "April-May 2026" },
    { hashtag: "#FarmersProtest", deployed: "Historical, resurfacing", period: "2020-21" },
    { hashtag: "#sidhumoosewala", reach: "5% of Punjab hashtag usage", period: "Ongoing" },
  ];

  const congressDigitalGap = [
    { gap: "Congress 'missing' from narrative", source: "The Tribune, April 2026", impact: "AAP/BJP dominated social media" },
    { gap: "Digital ground mobilization", issue: "Drug menace not capitalized", source: "District Congress president complaint" },
    { gap: "Attacks 'lost bite'", issue: "Failing to capitalize on AAP troubles", source: "Punjab BJP president observation" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            <Monitor className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Digital & Media Sentiment
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Social media penetration, viral content, and influencer metrics
            </p>
          </div>
        </div>
      </motion.div>

      {/* Viral Content Impact */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Viral Content Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Content affecting voter sentiment (verified)</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {viralContent.map((content, i) => (
                <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                  <p className="font-medium text-purple-700 dark:text-purple-300">{content.content}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{content.platform} - {content.views}</p>
                  <Badge variant="danger">{content.sentiment}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Viral Content Detailed Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Viral Content Metrics (A14 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Sidhu Moosewala as political meme template - 65M+ views</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {viralMetrics.map((item, i) => (
                <div key={i} className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm text-red-600 font-medium">{item.metric}</p>
                  <p className="text-xl font-bold text-red-700 dark:text-red-300">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.platform} - {item.period}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                <strong>Moosewala &quot;Gaddar&quot; deployment:</strong> 1st surge (2023) after SYL canal statements by Sandeep Pathak. 2nd surge (April 2026) after 7 AAP Rajya Sabha MPs merged with BJP - Balkaur Singh reposted within hours.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Social Media Penetration */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Social Media Penetration (B18 Methodology)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp as primary voter contact channel - 85%+ urban, 70%+ rural</p>
            <div className="mt-4">
              <DataTable
                headers={["Platform", "Penetration", "Notes"]}
                rows={socialMediaPenetration.map(item => [item.platform || "N/A", item.urban || item.penetration || "N/A", item.note || "N/A"])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Hashtags */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Trending Hashtags & Narratives (A14 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Hashtag", "Deployed By", "Period"]}
              rows={keyHashtags.map(item => [item.hashtag || "N/A", item.deployed || "N/A", item.period || "N/A"])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Congress Missing from Digital */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Congress &apos;Missing&apos; from Digital Narrative</p>
              <p className="text-sm text-red-600 dark:text-red-300">The Tribune (April 7, 2026) - AAP and BJP dominated Punjab social media while Congress and SAD were absent from the conversation</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardContent>
            <DataTable
              headers={["Gap", "Source", "Impact"]}
              rows={congressDigitalGap.map(item => [item.gap || "N/A", item.source || "N/A", item.impact || item.issue || "N/A"])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP Influencer Policy */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>AAP Influencer Empowerment Policy 2023 (A14 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Institutionalized paid social media amplification - effectively co-opting independent new media</p>
            <div className="mt-4">
              <DataTable
                headers={["Tier", "Subscriber Threshold", "Rate per Campaign"]}
                rows={influencerTiers.map(item => [item.tier, item.tier.split("(")[1]?.replace(")", "") || "", item.rate])}
              />
            </div>
            <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Strategic Implication:</strong> Congress cannot compete on price. Must build authentic relationships with creators who believe in the vision - give content autonomy. Recruit, don&apos;t buy.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* WhatsApp Army Size Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>WhatsApp Army Size Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Social media mobilization capacity by party</p>
            <div className="mt-4">
              <DataTable
                headers={["Party", "Size", "Capacity", "Trend"]}
                rows={[
                  ["BJP", "8-10 lakh", "Massive distribution", "Growing"],
                  ["AAP", "4-5 lakh", "Extensive grassroots", "Stable"],
                  ["Congress", "2-3 lakh", "Limited penetration", "Growing slowly"],
                  ["SAD", "1-2 lakh", "Traditional networks", "Declining"],
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Youth Platform Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Youth Platform Preferences (18-35)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Where Punjab youth spend time - Video-first is critical</p>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-red-600" />
                  <span className="text-xl font-bold text-red-700 dark:text-red-300">YouTube</span>
                </div>
                <p className="mt-2 text-sm text-red-600 dark:text-red-300">Primary news discovery for 18-35</p>
                <Badge variant="info">Long-form + Shorts</Badge>
              </div>
              <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-pink-700 dark:text-pink-300">Instagram</span>
                </div>
                <p className="mt-2 text-sm text-pink-600 dark:text-pink-300">Social + Visual, influencer-driven</p>
                <Badge variant="info">Reels + Stories</Badge>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span className="text-xl font-bold text-green-700 dark:text-green-300">WhatsApp</span>
                </div>
                <p className="mt-2 text-sm text-green-600 dark:text-green-300">Family/group communication</p>
                <Badge variant="info">Text + Audio + Video</Badge>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-700 dark:text-blue-300">Telegram</span>
                </div>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Growing among tech-savvy youth</p>
                <Badge variant="info">Channels + Groups</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Content Format Effectiveness */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Content Format Effectiveness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">What resonates with Punjab youth - Video and humour win</p>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <Badge variant="success">HIGH</Badge>
                <p className="mt-2 font-semibold text-green-700 dark:text-green-300">Video (Reels)</p>
                <p className="text-sm text-green-600 dark:text-green-300">Short attention span + visual + audio + Punjabi = engagement</p>
              </div>
              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <Badge variant="danger">LOW</Badge>
                <p className="mt-2 font-semibold text-red-700 dark:text-red-300">Text</p>
                <p className="text-sm text-red-600 dark:text-red-300">Youth read headlines, rarely full articles</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <Badge variant="success">HIGH</Badge>
                <p className="mt-2 font-semibold text-green-700 dark:text-green-300">Interactive</p>
                <p className="text-sm text-green-600 dark:text-green-300">Polls/Q&A - creates participation, not just consumption</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                <Badge variant="warning">VERY HIGH</Badge>
                <p className="mt-2 font-semibold text-yellow-700 dark:text-yellow-300">Memes/Humour</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">If it lands correctly - risky if it doesn&apos;t</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Influencers */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Key Youth Influencers (Punjab 2026)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Named influencers for potential partnership - Congress must build own network</p>
            <div className="mt-4">
              <DataTable
                headers={["Name", "Category", "Platform", "Notes"]}
                rows={[
                  ["Karan Atwal", "Content Creator", "Instagram/YouTube", "Social media creator, youth-focused"],
                  ["Shyna Choudhary", "Influencer", "Instagram", "Miss India Punjab 2023, model"],
                  ["Kunwar Khanoura", "Student Leader", "Instagram", "PU-NSUI leader"],
                  ["Parabjot Singh Gill", "Student Leader", "Instagram", "NSUI candidate for PUCSC President"],
                  ["Anurag Dalal", "Student Leader", "Instagram", "Won PUCSC President as independent, later joined NSUI"],
                ]}
              />
            </div>
            <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <p className="text-sm text-orange-700 dark:text-orange-400">
                <strong>Strategic Note:</strong> Recruit, don&apos;t buy - partner with creators who believe in the vision. Give content autonomy.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
