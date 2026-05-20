// Content Production Engine Design Types
// Derived from: direct-documentation/cat-3-party-propulsion/g14-content-production-engine-design.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface ContentProductionMetadata {
  reportDate: string;
  documentType: string;
  classification: string;
  project: string;
  client: string;
  election: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// VERNACULAR GAP TYPES
// ==========================================

export interface PlatformVernacularDeficit {
  platform: string;
  aapContent: string;
  congressContent: string;
  gap: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface VernacularGapProblem {
  quantifiedDeficit: PlatformVernacularDeficit[];
  whyMatters: string[];
  culturalSignificance: string;
}

// ==========================================
// TEAM STRUCTURE TYPES
// ==========================================

export interface CreativeDirection {
  creativeDirector: TeamRole;
  deputyCreativeDirector: TeamRole;
}

export interface TeamRole {
  reportsTo: string;
  responsibilities: string[];
  skills: string[];
  hours: string;
}

export interface WritersUnit {
  seniorPoliticalWriter: TeamRole;
  punjabiContentWriters: number;
  hindiRegionalWriter: TeamRole;
}

export interface DesignUnit {
  artDirector: TeamRole;
  graphicDesigners: number;
  motionDesigner: TeamRole;
}

export interface VideoUnit {
  videoProducer: TeamRole;
  videoEditors: number;
  deliverables: string;
}

export interface AudioPodcastUnit {
  podcastProducerHost: TeamRole;
  ivrAudioSpotProducer: TeamRole;
}

export interface RegionalContentTeam {
  region: string;
  teamLead: TeamRole;
  designer: TeamRole;
  socialMediaManager: TeamRole;
}

export interface PlatformOptimizationTeam {
  facebookManager: TeamRole;
  instagramManager: TeamRole;
  youtubeManager: TeamRole;
  xTwitterManager?: TeamRole;
  whatsAppManager?: TeamRole;
}

// ==========================================
// ROLE DEFINITIONS
// ==========================================

export interface ContentProductionRoles {
  creativeDirection: CreativeDirection;
  writersUnit: WritersUnit;
  designUnit: DesignUnit;
  videoUnit: VideoUnit;
  audioPodcastUnit: AudioPodcastUnit;
  regionalTeams: RegionalContentTeam[];
  platformOptimization: PlatformOptimizationTeam;
}

// ==========================================
// PRODUCTION CAPACITY TYPES
// ==========================================

export interface DailyOutput {
  reels: number;
  longFormVideosPerWeek: number;
  graphicsPerDay: number;
  podcastsPerWeek: number;
  audioSpots: number;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface ContentProductionEngineData {
  metadata: ContentProductionMetadata;
  g4CriticalFinding: string;
  designPhilosophy: string;
  vernacularGap: VernacularGapProblem;
  teamStructure: ContentProductionRoles;
  dailyOutput: DailyOutput;
}
