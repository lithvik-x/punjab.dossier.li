"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";

export default function MediaMisinformationPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              8
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Misinformation & Threats
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            BJP IT Cell • Deepfakes • Misinformation • Legal options
          </p>
        </div>
        <Badge variant="danger">CRITICAL THREAT</Badge>
      </div>

      {/* BJP IT Cell Intelligence */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          BJP IT Cell: Digital War Machine (MP5-003)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          Documented structure and scale — world&apos;s largest political CIB network
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Core IT Cell Staff"
            value="5,500-6,000"
            subtitle="Professional operation"
            color="bg-red-500"
          />
          <MetricCard
            title="WhatsApp Workers"
            value="150,000+"
            subtitle="WhatsApp University"
            color="bg-red-500"
          />
          <MetricCard
            title="Daily Reach Potential"
            value="7.5-75M"
            subtitle="If 10-50+ groups each"
            color="bg-red-500"
          />
          <MetricCard
            title="Daily Narrative Cycles"
            value="4"
            subtitle="Per day managed"
            color="bg-red-500"
          />
        </div>

        <div className="mt-4 rounded-lg bg-orange-100 p-4 dark:bg-orange-900/40">
          <p className="text-sm font-medium text-orange-700">Alt News 2025 Data: 61% of viral political misinformation was pro-BJP</p>
          <p className="text-xs text-orange-600 mt-1">Amit Malviya (BJP IT Cell head) was the top peddler with 12 fact-checks</p>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Congress Counter:</strong> Congress must deploy 5,000+ ground monitors + Alt News/Boom liaison + pre-built myth-busting content library. WhatsApp Channel (broadcast) for official verified content is urgently needed.
          </p>
        </div>
      </div>

      {/* Fake News & Misinformation Threat */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
          Fake News & Misinformation Threat (A-07-08 Research)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          CRITICAL THREAT: India highest risk globally for misinformation (WEF 2024); 75%+ Indians exposed to AI-generated political content
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="India Misinformation Risk"
            value="#1"
            subtitle="World Economic Forum 2024"
            color="bg-red-500"
          />
          <MetricCard
            title="Political Deepfake Cost"
            value="$50M+"
            subtitle="Spent by parties in 2024 elections"
            color="bg-orange-500"
          />
          <MetricCard
            title="Deepfake Victims"
            value="75%+"
            subtitle="Indians exposed to AI political content"
            color="bg-purple-500"
          />
          <MetricCard
            title="Fact-Check Coverage"
            value="31%"
            subtitle="Of viral misinformation targeted Congress"
            color="bg-blue-500"
          />
        </div>

        {/* Party Disinformation Capabilities */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-red-900 dark:text-red-100">Party Disinformation Capabilities</h4>
          <DataTable
            headers={["Party", "IT Cell Scale", "AI/Deepfake", "Budget", "WhatsApp Network"]}
            rows={[
              ["BJP", "VERY HIGH (5,500-6,000 core)", "First-mover (2020 Delhi)", "HIGHEST ($50M+ national)", "150,000+ workers"],
              ["AAP", "HIGH (professional)", "Active (proxy networks)", "SIGNIFICANT", "Government-backed"],
              ["Congress", "MODERATE (growing)", "Limited usage", "CONSTRAINED", "Underdeveloped"],
              ["SAD", "LOW", "Minimal", "Limited", "Cadre-based"],
            ]}
          />
        </div>

        {/* Key Misinformation Incidents */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-red-900 dark:text-red-100">Key Misinformation Incidents (2022-2026)</h4>
          <DataTable
            headers={["Date", "Incident", "Platform", "Target", "Status"]}
            rows={[
              ["Feb 2020", "First political deepfake: Manoj Tiwari in Haryanvi; 15M reach via 5,800 WhatsApp groups", "WhatsApp", "Kejriwal/AAP", "VERIFIED"],
              ["Jan 2022", "Forged letter: Sikhs For Justice supporting AAP in Punjab polls", "Social Media", "AAP", "VERIFIED"],
              ["Jan 2022", "Edited Raghav Chadha video on plate-breaking falsely attributed to statement", "Facebook/WhatsApp", "AAP", "VERIFIED"],
              ["2024", "AI agencies (Polymath, Muonium) created deepfakes for BJP, Congress, YSRCP", "All platforms", "Multiple", "VERIFIED"],
              ["Apr 2026", "Congress-BJP protest over fake voter registrations in Ropar MC polls", "Ground/Social", "AAP", "VERIFIED"],
            ]}
          />
        </div>

        {/* Deepfake AI Tools */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-red-900 dark:text-red-100">AI Deepfake Industry (India)</h4>
          <DataTable
            headers={["Company", "Location", "Services", "Clients"]}
            rows={[
              ["Polymath Solution", "Pushkar, Rajasthan", "Deepfakes, voice clones, WhatsApp content", "BJP, Congress, YSRCP, Shiv Sena"],
              ["Muonium", "Tamil Nadu", "AI video, political deepfakes", "~10 politicians at $12K+ each"],
              ["Avantari Technologies", "Hyderabad", "Holograms, AR (declined deepfakes)", "Modi since 2012 Gujarat"],
              ["The Ideaz Factory", "India", "Deepfake production", "BJP (Manoj Tiwari 2020)"],
            ]}
          />
        </div>

        {/* ECI Regulatory Response */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-red-900 dark:text-red-100">ECI Regulatory Response</h4>
          <DataTable
            headers={["Date", "Action", "Requirement"]}
            rows={[
              ["May 2024", "First Advisory on AI", "Labeling synthetic content"],
              ["Jan 2025", "Second Advisory", "Disclosure of content creator identity"],
              ["Oct 2025", "Third Advisory", "10%+ visible display area for labels"],
              ["Apr 2026", "3-hour takedown rule", "First applied in Assam, Kerala, Tamil Nadu"],
            ]}
          />
        </div>
      </div>

      {/* Anti-Media Attack Vectors */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
          Anti-Media Attack Vectors (MP5-010 Research)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          BJP IT Cell: 5,500-6,000 core staff + 150,000+ WhatsApp workers; 61% misinformation pro-BJP (Alt News 2025)
        </p>

        {/* AAP Proxy Propaganda Network */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">AAP Proxy Propaganda Network (Documented)</h4>
          <DataTable
            headers={["Page/Network", "Followers", "Operation"]}
            rows={[
              ["Fans of Deep Sidhu (FODS)", "1.89 lakh", "Proxy propaganda"],
              ["Soojhwan Punjab", "1.44 lakh", "Proxy propaganda"],
              ["The Punjab First", "News website", "Content publication"],
              ["World Punjabi Digital, Dankaram, Hindi Khabar Digital", "Various", "Amplification network"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">INR 14 lakh spent on 5,900+ Facebook ads (March 2023-December 2024); Connected to The Narrative Builders (Noida-based firm)</p>
        </div>

        {/* Misinformation Statistics */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="Pro-BJP Misinformation"
            value="61%"
            subtitle="of political targeting cases"
            color="bg-red-500"
          />
          <MetricCard
            title="Pro-Congress"
            value="21%"
            subtitle="of political targeting cases"
            color="bg-blue-500"
          />
          <MetricCard
            title="Rahul Gandhi Targeted"
            value="37%"
            subtitle="Most targeted individual"
            color="bg-purple-500"
          />
        </div>

        {/* Deepfake Threat */}
        <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">AI/Deepfake Threat (2024 General Election)</h4>
          <div className="grid gap-4 md:grid-cols-2 mt-2">
            <div>
              <p className="text-sm text-slate-600">Indians exposed to political deepfakes</p>
              <p className="text-2xl font-bold text-purple-600">75%+</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Who believed AI content was real</p>
              <p className="text-2xl font-bold text-purple-600">Nearly 1 in 4</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">India has 460+ million social media users creating vast manipulation surface</p>
        </div>

        {/* Information Asymmetry */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Information Asymmetry: BJP vs Congress Digital Capacity</h4>
          <DataTable
            headers={["Dimension", "BJP IT Cell", "AAP (Punjab)", "Congress"]}
            rows={[
              ["Core Staff", "5,500-6,000", "~100-200", "~50-100"],
              ["Social Media Workers", "150,000+", "Hundreds trained", "Minimal organized"],
              ["WhatsApp Groups", "100,000s", "1,000s", "Few hundred"],
              ["Annual Budget", "INR 100+ crore (est.)", "INR 10+ crore (est.)", "Limited"],
              ["Response Time", "<1 hour", "<2 hours", ">24 hours"],
              ["Content Team", "20+ professionals", "5-10", "Minimal"],
            ]}
          />
        </div>

        {/* Legal Options */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Legal Options Against Hostile Media</h4>
          <DataTable
            headers={["Law/Option", "Description", "Limitation"]}
            rows={[
              ["Section 69A, IT Act", "Govt can block online content", "Congress needs BJP-led govt — unusable against BJP content"],
              ["Section 66D, IT Act", "Cheating by personation using computer", "Rarely applied; requires identifying perpetrator"],
              ["RTI Act", "Request advertising allocation, meetings", "Limited effectiveness against WhatsApp content"],
              ["Civil Defamation", "False statements causing harm", "Slow, expensive; identifying defendants difficult"],
              ["Platform Flagging", "Twitter/X, Facebook community guidelines", "Limited success vs coordinated networks"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">Section 69A: 7,502 accounts/URLs blocked in 2023 alone; 36,800 total blocked (2018-2023)</p>
        </div>

        {/* Section 69A Blocking Stats */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">URLs Blocked (2023)</p>
            <p className="text-2xl font-bold text-red-600">7,502</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Total URLs Blocked (2018-2023)</p>
            <p className="text-2xl font-bold text-red-600">36,800</p>
          </div>
        </div>
      </div>

      {/* Paid News & Media Ethics */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
          Paid News & Media Ethics (A-07-12 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          HIGH THREAT: India press freedom rank 157/180 (RSF 2026); Only 1 disqualification for paid news in Indian history
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="India Press Freedom Rank"
            value="157/180"
            subtitle="RSF World Press Freedom Index 2026"
            color="bg-red-500"
          />
          <MetricCard
            title="Paid News Disqualifications"
            value="1"
            subtitle="In Indian electoral history"
            color="bg-orange-500"
          />
          <MetricCard
            title="Section 69A URLs Blocked"
            value="36,800"
            subtitle="Total blocked (2018-2023)"
            color="bg-purple-500"
          />
        </div>

        {/* Journalist Safety */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Journalist Safety Incidents (Punjab)</h4>
          <DataTable
            headers={["Incident", "Year", "Status"]}
            rows={[
              ["Punjab Police assault on journalist (Batala) — sub-inspectors caught on CCTV", "Aug 2025", "VERIFIED — officers suspended"],
              ["Punjab Police officer assault on journalist (street)", "~2025", "VERIFIED — Brut India video"],
              ["Journalist assaulted at Surrey protest linked to Punjab tensions", "Mar 2023", "VERIFIED — Global News Canada"],
              ["CPJ election safety concerns for Punjab journalists", "Apr 2024", "VERIFIED — CPJ documented"],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
