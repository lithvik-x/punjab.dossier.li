"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

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
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
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

      {/* Viral Content Impact */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Viral Content Impact
        </h3>
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
      </div>

      {/* Viral Content Detailed Metrics */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Viral Content Metrics (A14 Research)
        </h3>
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
      </div>

      {/* Social Media Penetration */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Social Media Penetration (B18 Methodology)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp as primary voter contact channel - 85%+ urban, 70%+ rural</p>
        <div className="mt-4">
          <DataTable
            headers={["Platform", "Penetration", "Notes"]}
            rows={socialMediaPenetration.map(item => [item.platform || "N/A", item.urban || item.penetration || "N/A", item.note || "N/A"])}
          />
        </div>
      </div>

      {/* Key Hashtags */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Trending Hashtags & Narratives (A14 Research)
        </h3>
        <div className="mt-4">
          <DataTable
            headers={["Hashtag", "Deployed By", "Period"]}
            rows={keyHashtags.map(item => [item.hashtag || "N/A", item.deployed || "N/A", item.period || "N/A"])}
          />
        </div>
      </div>

      {/* Congress Missing from Digital */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Congress &apos;Missing&apos; from Digital Narrative</p>
            <p className="text-sm text-red-600 dark:text-red-300">The Tribune (April 7, 2026) - AAP and BJP dominated Punjab social media while Congress and SAD were absent from the conversation</p>
          </div>
        </div>
        <div className="mt-4">
          <DataTable
            headers={["Gap", "Source", "Impact"]}
            rows={congressDigitalGap.map(item => [item.gap || "N/A", item.source || "N/A", item.impact || item.issue || "N/A"])}
          />
        </div>
      </div>

      {/* AAP Influencer Policy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Influencer Empowerment Policy 2023 (A14 Research)
        </h3>
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
      </div>

      {/* WhatsApp Army Size Comparison */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          WhatsApp Army Size Comparison
        </h3>
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
      </div>

      {/* Youth Platform Preferences */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Youth Platform Preferences (18-35)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Where Punjab youth spend time - Video-first is critical</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center gap-2">
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
      </div>

      {/* Content Format Effectiveness */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Content Format Effectiveness
        </h3>
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
      </div>

      {/* Key Influencers */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Youth Influencers (Punjab 2026)
        </h3>
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
      </div>
    </div>
  );
}
