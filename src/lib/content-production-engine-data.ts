// @ts-nocheck
// Content Production Engine Design Data
// Derived from: direct-documentation/cat-3-party-propulsion/g14-content-production-engine-design.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { ContentProductionEngineData } from "@/types/content-production-engine-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  documentType: "Engine Design — Operational Blueprint",
  classification: "Track B — Stable Methodology & Framework",
  project: "Punjab Congress Election Intelligence Dashboard 2027",
  client: "CryptoMize → Punjab Pradesh Congress Committee",
  election: "February 2027 (~8.5 months away)",
  confidence: "HIGH" as const,
};

// ==========================================
// G4 CRITICAL FINDING
// ==========================================

const g4CriticalFinding =
  "Congress produces near-zero Punjabi-language digital content while AAP owns vernacular digital space. This structural deficit cannot be patched — it requires a dedicated production engine with vernacular-first mandate.";

const designPhilosophy =
  "Build a content engine that produces AAP-quality vernacular content at 3x velocity, with regional differentiation (Malwa/Majha/Doaba), cultural resonance, and platform-native optimization.";

// ==========================================
// VERNACULAR GAP DATA
// ==========================================

const vernacularGap = {
  quantifiedDeficit: [
    {
      platform: "Instagram Reels",
      aapContent: "Dominant (Punjabi-first)",
      congressContent: "Near-zero",
      gap: "CRITICAL" as const,
    },
    {
      platform: "Facebook Posts",
      aapContent: "Heavy Punjabi engagement",
      congressContent: "English-first, low resonance",
      gap: "CRITICAL" as const,
    },
    {
      platform: "YouTube",
      aapContent: "Punjabi governance content",
      congressContent: "Minimal Punjab-specific",
      gap: "CRITICAL" as const,
    },
    {
      platform: "WhatsApp",
      aapContent: "Forwardable Punjabi graphics",
      congressContent: "Informal, no system",
      gap: "CRITICAL" as const,
    },
    {
      platform: "Twitter/X",
      aapContent: "Mixed (Punjabi hashtags)",
      congressContent: "English-dominant",
      gap: "HIGH" as const,
    },
  ],
  whyMatters: [
    "Sikh population: ~60% — Gurmukhi script is cultural identity marker",
    "Youth (under 35): ~67% — highest social media consumption, vernacular-preferred",
    "Dera followers: Millions — culturally specific messaging resonates",
    "NRI belt (Doaba): High diaspora engagement with Punjabi content",
    "Malwa dialects: Majhi/Malwai Puadhi — distinct from standard Punjabi",
  ],
  culturalSignificance:
    "Content in Gurmukhi script is not cosmetic — it signals cultural belonging. AAP's cultural ownership of Punjabi digital space means Congress is perceived as outsider/establishment by vernacular voters",
};

// ==========================================
// TEAM STRUCTURE DATA
// ==========================================

const creativeDirection = {
  creativeDirector: {
    reportsTo: "Campaign Director",
    responsibilities: [
      "Brand identity",
      "Visual standards",
      "Content quality gate",
      "Viral format testing",
    ],
    skills: [
      "Political campaign experience",
      "Punjabi cultural fluency",
      "Design leadership",
    ],
    hours: "Full-time campaign period",
  },
  deputyCreativeDirector: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Workflow management",
      "Deadline tracking",
      "Team coordination",
    ],
    skills: ["Project management", "Content operations"],
    hours: "Full-time campaign period",
  },
};

const writersUnit = {
  seniorPoliticalWriter: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Leadership speeches",
      "Op-eds",
      "Press releases",
      "Manifesto messaging",
    ],
    skills: ["English primary", "Hindi"],
    hours: "Full-time campaign period",
  },
  punjabiContentWriters: 2,
  hindiRegionalWriter: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Hindi content for Hindu voter targeting",
      "Cross-language adaptation",
    ],
    skills: ["Hindi primary", "English"],
    hours: "Full-time campaign period",
  },
};

const designUnit = {
  artDirector: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Visual identity system",
      "Template creation",
      "Brand consistency",
    ],
    skills: ["Adobe Creative Suite", "Political design experience"],
    hours: "Full-time campaign period",
  },
  graphicDesigners: 2,
  motionDesigner: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Animated graphics",
      "Intro/outro sequences",
      "Kinetic typography",
    ],
    skills: ["After Effects", "Motion design for social"],
    hours: "Full-time campaign period",
  },
};

const videoUnit = {
  videoProducer: {
    reportsTo: "Creative Director",
    responsibilities: [
      "End-to-end video production management",
      "Shoot coordination",
    ],
    skills: ["Documentary-style political video", "Interview setup"],
    hours: "Full-time campaign period",
  },
  videoEditors: 2,
  deliverables:
    "3-5 Reels/day, 2 long-form videos/week",
};

const audioPodcastUnit = {
  podcastProducerHost: {
    reportsTo: "Creative Director",
    responsibilities: ["Weekly podcast episodes", "Audio editing"],
    skills: ["Audio engineering", "Engaging on-camera personality"],
    hours: "Part-time/Full-time campaign",
  },
  ivrAudioSpotProducer: {
    reportsTo: "Creative Director",
    responsibilities: ["Phone banking audio", "IVR messages", "Radio spots"],
    skills: ["Audio production", "Concise messaging"],
    hours: "As needed",
  },
};

const regionalTeams = [
  {
    region: "Malwa",
    teamLead: {
      reportsTo: "Creative Director",
      responsibilities: [
        "Punjabi Writer for Malwa dialect",
        "Malwa content oversight",
      ],
      skills: ["Malwai dialect specialist", "Cultural fluency"],
      hours: "Full-time campaign period",
    },
    designer: {
      responsibilities: ["Malwa-specific visuals", "Malwai cultural references"],
      skills: ["Design", "Malwa cultural references"],
      hours: "Full-time campaign period",
    },
    socialMediaManager: {
      responsibilities: ["Malwa region Facebook/Instagram"],
      skills: ["Social media management"],
      hours: "Full-time campaign period",
    },
  },
  {
    region: "Majha",
    teamLead: {
      reportsTo: "Creative Director",
      responsibilities: ["Punjabi Writer for Majha dialect", "Majha content oversight"],
      skills: ["Majhi dialect specialist", "Border area sensitivity"],
      hours: "Full-time campaign period",
    },
    socialMediaManager: {
      responsibilities: ["Majha region, border area sensitivity"],
      skills: ["Social media management", "Regional knowledge"],
      hours: "Full-time campaign period",
    },
  },
  {
    region: "Doaba",
    teamLead: {
      reportsTo: "Creative Director",
      responsibilities: ["Punjabi Writer for Doaba dialect", "NRI-focused content"],
      skills: ["Doabi dialect specialist", "NRI engagement"],
      hours: "Full-time campaign period",
    },
    socialMediaManager: {
      responsibilities: ["Doaba region, diaspora engagement"],
      skills: ["Social media management", "Diaspora engagement"],
      hours: "Full-time campaign period",
    },
  },
];

const platformOptimization = {
  facebookManager: {
    reportsTo: "Creative Director",
    responsibilities: [
      "Facebook page management",
      "Group engagement",
      "Facebook Live",
    ],
    skills: ["Facebook algorithm", "Group cultivation", "Event promotion"],
    hours: "Full-time campaign period",
  },
  instagramManager: {
    reportsTo: "Creative Director",
    responsibilities: ["Instagram Reels", "Stories", "Carousel posts", "Influencer outreach"],
    skills: ["Visual storytelling", "Reels SEO", "Trending audio tracking"],
    hours: "Full-time campaign period",
  },
  youtubeManager: {
    reportsTo: "Creative Director",
    responsibilities: [
      "YouTube upload optimization",
      "Thumbnail A/B testing",
      "Community tab",
    ],
    skills: ["YouTube SEO", "Video chapter optimization", "End-screen design"],
    hours: "Full-time campaign period",
  },
  whatsAppManager: {
    reportsTo: "Creative Director",
    responsibilities: ["WhatsApp broadcast management", "Group coordination"],
    skills: ["WhatsApp Business", "List management"],
    hours: "Full-time campaign period",
  },
  xTwitterManager: {
    reportsTo: "Creative Director",
    responsibilities: ["X/Twitter engagement", "Trending topics monitoring"],
    skills: ["Twitter marketing", "Real-time engagement"],
    hours: "Part-time campaign",
  },
};

// ==========================================
// DAILY OUTPUT
// ==========================================

const dailyOutput = {
  reels: 5,
  longFormVideosPerWeek: 2,
  graphicsPerDay: 10,
  podcastsPerWeek: 1,
  audioSpots: 3,
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const contentProductionEngineData: ContentProductionEngineData = {
  metadata,
  g4CriticalFinding,
  designPhilosophy,
  vernacularGap,
  teamStructure: {
    creativeDirection,
    writersUnit,
    designUnit,
    videoUnit,
    audioPodcastUnit,
    regionalTeams,
    platformOptimization,
  },
  dailyOutput,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getVernacularGapPlatforms(): {
  platform: string;
  gap: string;
}[] {
  return vernacularGap.quantifiedDeficit.map((p) => ({
    platform: p.platform,
    gap: p.gap,
  }));
}

export function getCriticalGapPlatforms(): string[] {
  return vernacularGap.quantifiedDeficit
    .filter((p) => p.gap === "CRITICAL")
    .map((p) => p.platform);
}

export function getTeamSizeEstimate(): number {
  // Central: 2 (creative direction) + 4 (writers) + 4 (design) + 3 (video) + 2 (audio) = 15
  // Regional: (3+2+2) Malwa + (2+1) Majha + (2+1) Doaba = 11
  // Platform: 5
  // Total: 31
  return 31;
}

export function getDailyContentTarget(): {
  format: string;
  target: number;
}[] {
  return [
    { format: "Reels", target: dailyOutput.reels },
    { format: "Long-form videos/week", target: dailyOutput.longFormVideosPerWeek },
    { format: "Graphics/day", target: dailyOutput.graphicsPerDay },
    { format: "Podcasts/week", target: dailyOutput.podcastsPerWeek },
    { format: "Audio spots", target: dailyOutput.audioSpots },
  ];
}
