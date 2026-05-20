// Punjab Demographics Types — MP1 Foundational Scan

// ============================================================
// LANGUAGE & LINGUISTICS
// ============================================================

export interface LanguageSpeaker {
  language: string;
  speakers: number;
  percentage: number;
  isOfficial?: boolean;
}

export interface FunctionalLanguageLayer {
  layer: string;
  languages: string[];
  context: string;
}

export type PunjabiDialect = 'Majhi' | 'Malwai' | 'Doabi' | 'Puadhi';

export interface DialectInfo {
  name: PunjabiDialect;
  region: string;
  districts: string[];
  constituencies: string[];
  seatCount: number;
  characteristics: string;
  campaignMarkers: string;
  campaignPriority: 'Critical' | 'High' | 'Medium' | 'Border security, religious sentiment' | 'NRI influence, development' | 'Urban/IT corridor messaging';
}

export type Script = 'Gurmukhi' | 'Roman Punjabi' | 'Shahmukhi' | 'Devanagari';

export interface ScriptUsage {
  script: Script;
  description: string;
  literacy?: string;
  sacredAssociation?: string;
  campaignImplication: string;
}

export interface EducationMedium {
  medium: string;
  schools: string;
  reach: string;
}

export interface LanguageRecommendation {
  channel: string;
  primaryScript: Script;
  secondaryScript?: string;
  notes: string;
}

export interface DialectSlogan {
  messageTheme: string;
  majhi: string;
  malwai: string;
  doabi: string;
  puadhi: string;
}

export interface LanguageData {
  motherTongueDistribution: LanguageSpeaker[];
  functionalLayers: FunctionalLanguageLayer[];
  dialects: Record<PunjabiDialect, DialectInfo>;
  scripts: Record<Script, ScriptUsage>;
  educationMedia: EducationMedium[];
  recommendations: LanguageRecommendation[];
  slogans: DialectSlogan[];
}

// ============================================================
// JAT SIKH COMMUNITY
// ============================================================

export interface JatPopulation {
  metric: string;
  estimate: string;
  source?: string;
}

export interface JatRegionDistribution {
  region: string;
  assemblySeats: number;
  concentration: string;
  character: string;
}

export type JatClan =
  | 'Sidhu-Brar' | 'Sandhu' | 'Gill' | 'Dhillon' | 'Bajwa' | 'Randhawa'
  | 'Grewal' | 'Cheema' | 'Aulakh' | 'Dhaliwal' | 'Dhindsa' | 'Toor'
  | 'Bhullar' | 'Maan' | 'Virk' | 'Pannu' | 'Bains' | 'Warraich'
  | 'Deol' | 'Uppal' | 'Kahlon' | 'Sodhi' | 'Hundal';

export interface ClanInfo {
  name: JatClan;
  estimatedRank: string;
  primaryRegion: string;
  notableFigures: string[];
  notes: string;
}

export type LandholdingCategory = 'Large' | 'Medium' | 'Small' | 'Marginal';

export interface LandholdingStrata {
  category: LandholdingCategory;
  sizeRange: string;
  shareOfJatSikhFarmers: string;
  trend: 'DECLINING' | 'STABLE but squeezed' | 'GROWING' | 'GROWING RAPIDLY';
}

export interface AgriculturalDebt {
  indicator: string;
  figure: string;
  source: string;
}

export interface JatPoliticalAlignment {
  period: string;
  primary: string;
  secondary?: string;
}

export interface ConstituencyPriority {
  priority: 1 | 2 | 3;
  description: string;
  seats: string;
}

export interface JatSikhData {
  population: JatPopulation[];
  regionalDistribution: JatRegionDistribution[];
  clans: Record<JatClan, ClanInfo>;
  landholdingStrata: LandholdingStrata[];
  agriculturalDebt: AgriculturalDebt[];
  politicalAlignment: JatPoliticalAlignment[];
  constituencyPriorities: Record<1 | 2 | 3, ConstituencyPriority>;
}

// ============================================================
// OBC COMMUNITIES
// ============================================================

export interface ReservationFramework {
  category: string;
  reservationPercent: number;
  populationShare: string;
}

export interface OBCCommunity {
  name: string;
  population: string;
  religion: string;
  geography: string;
  traditionalOccupation: string;
  economy: string;
  identity: string;
  politicalDisposition: string;
  bcStatus: string;
}

export interface ArtisanCommunity {
  community: string;
  traditionalOccupation: string;
  populationEstimate: string;
  geography: string;
  bcStatus: string;
}

export interface PoliticalRepresentation {
  institution: string;
  total: number;
  obcRepresentation: string;
}

export interface OBCRegionalDistribution {
  region: string;
  assemblySeats: number;
  dominantGroups: string;
  estimatedOBCShare: string;
  keyConstituencies: string;
}

export interface OBCData {
  populationPercent: string;
  estimatedPopulation: string;
  reservationFramework: ReservationFramework[];
  communities: OBCCommunity[];
  artisanCommunities: ArtisanCommunity[];
  politicalRepresentation: PoliticalRepresentation[];
  regionalDistribution: OBCRegionalDistribution[];
}

// ============================================================
// COMBINED EXPORT
// ============================================================

export interface DemographicsData {
  language: LanguageData;
  jatSikh: JatSikhData;
  obc: OBCData;
}
