// Sikhism Internal Taxonomy & Political Issues Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/demographics/sikhism-internal.md
// Date: 19 May 2026 | Status: RESEARCH COMPLETE

// ==========================================
// VERIFICATION STATUS
// ==========================================

export type VerificationLevel = "HIGH" | "MEDIUM" | "LOW";
export type SikhObservanceTier = "Amritdhari" | "Keshdhari" | "Sehajdhari";
export type PoliticalLean = "Panthic" | "Swing" | "AAP" | "Development-focused" | "Dera-influenced";

// ==========================================
// SIKH POPULATION CONTEXT
// ==========================================

export interface SikhPopulationData {
  census2011: {
    percentage: number;
  };
  census2001: {
    percentage: number;
  };
  currentEstimates2025: {
    percentage: string;
    range: string;
  };
  drivers: string[];
  verificationNote: string;
}

// ==========================================
// SIKH IDENTITY TIERS (OBSERVANCE LEVELS)
// ==========================================

export interface SikhObservanceTierData {
  type: SikhObservanceTier;
  percentage: string;
  definition: string;
  politicalBehavior: string;
  geographicNotes?: string;
  electoralSignificance: string;
  additionalInfo?: Record<string, string | number | string[]>;
}

export interface AmritdhariData extends SikhObservanceTierData {
  type: "Amritdhari";
  fiveKs: string[];
  practices: string[];
  geographicConcentration: string[];
  sgpcRole: string;
}

export interface KeshdhariData extends SikhObservanceTierData {
  type: "Keshdhari";
  sgpcVoters2011: number;
  swingVoterBehavior: string;
  regionalInfluence: string;
}

export interface SehajdhariData extends SikhObservanceTierData {
  type: "Sehajdhari";
  legalStatus: string;
  congressAlignment: string;
  votingRightsNote: string;
}

// ==========================================
// MAJOR SECTS & SAMPARDAS
// ==========================================

export interface SectHeadquarters {
  location: string;
  district?: string;
}

export interface SectPoliticalAlignment {
  current: string;
  historical?: string;
  notes?: string;
}

export interface SectInfluence {
  regions: string[];
  constituencies: string[];
  sgpcSeats?: number;
  faction?: string;
}

export interface SectData {
  name: string;
  headquarters: SectHeadquarters;
  currentHead?: string;
  jathedarNumber?: number; // For Damdami Taksal
  description: string;
  population?: string;
  factions?: string[];
  politicalBehavior: string;
  politicalAlignment: SectPoliticalAlignment;
  influence: SectInfluence;
  factionsDetail?: Array<{
    name: string;
    note: string;
  }>;
  verificationNeeded?: string[];
}

export interface DamdamiTaksalData extends SectData {
  name: "Damdami Taksal";
  currentHead: string;
  jathedarNumber: 14;
  historicalSignificance: string;
  politicalAlignment: {
    current: string;
    historical: string;
  };
  influence: {
    regions: string[];
    constituencies: string[];
    sgpcSeats: number;
  };
  congressRisk: string;
}

export interface NihangData extends SectData {
  name: "Nihang Sikhs (Akali Nihang)";
  factions: string[];
  politicalBehavior: string;
  influence: {
    regions: string[];
    constituencies: string[];
  };
  congressNote: string;
}

export interface NamdhariData extends SectData {
  name: "Namdhari Sikhs (Kuka Sikhs)";
  headquarters: {
    location: string;
    district: string;
  };
  belief: string;
  population: string;
  politicalBehavior: string;
  constituencyInfluence: string[];
  congressOpportunity: string;
}

export interface NirankariData extends SectData {
  name: "Nirankari Sikhs (Sant Nirankari Mission)";
  headquarters: {
    location: string;
    note: string;
  };
  conflictNote: string;
  populationVerification: string;
  politicalSignificance: string;
  congressRisk: string;
}

export interface RadhaSoamiData extends SectData {
  name: "Radha Soami Satsang Beas (RSSB)";
  headquarters: {
    location: string;
    district: string;
  };
  nature: string;
  politicalBehavior: string;
  historicalAlignment: string[];
  constituencyInfluence: string[];
  congressOpportunity: string;
}

export interface AKJData extends SectData {
  name: "Akhand Kirtani Jatha (AKJ)";
  description: string;
  politicalBehavior: string;
  influence: {
    regions: string[];
    constituencies: string[];
  };
}

export interface UdasiNirmalaData extends SectData {
  name: "Udasi and Nirmala Orders";
  description: string;
  politicalSignificance: string;
}

// ==========================================
// KEY SIKH INSTITUTIONS
// ==========================================

export interface TakhtInfo {
  name: string;
  location: string;
  jurisdiction: string;
}

export interface AkalTakhtData {
  status: string;
  location: string;
  currentJathedar: string;
  actingJathedar?: string;
  politicalRole2024: string;
  significanceForCongress: string;
  recentAction?: {
    date: string;
    action: string;
    target: string;
    reasons: string[];
  };
}

export interface SGPCData {
  structure: {
    electedMembers: number;
    nominatedMembers: number;
    takhtJathedars: number;
    goldenTempleHeadGranthi: number;
    annualBudgetCrore: number;
  };
  electionStatus: {
    lastElection: number;
    yearsOverdue: number;
    control: string;
  };
  voterRegistration: {
    keshdhariVoters: number;
    sejhdhariNote: string;
  };
  keyTension: string;
  congressImplication: string;
}

export interface FiveTakhtsData {
  takhts: TakhtInfo[];
}

// ==========================================
// CRITICAL POLITICAL ISSUES
// ==========================================

export interface SacrilegeIssue {
  issue: string;
  "2015Bargari": {
    date: string;
    location: string;
    district: string;
    description: string;
    protests: string;
    casualties: {
      location: string;
      killed: number;
    }[];
    investigation: string;
    currentStatus: string;
  };
  politicalImpact: string;
  newLaw: {
    name: string;
    date: string;
    provision: string;
    controversy: string;
  };
  congressPositioning: string;
}

export interface Riot1984Issue {
  issue: string;
  killings: string;
  congressLiability: string[];
  currentStatus2025: string;
  punjabElectoralImpact: string;
  congressStrategy: string;
}

export interface OperationBlueStar {
  issue: string;
  date: string;
  description: string;
  politicalSalience: string;
  congressMitigation: string;
}

export interface BandiSinghIssue {
  issue: string;
  description: string;
  keyPrisoners: Array<{
    name: string;
    status: string;
    conviction: string;
  }>;
  politicalDynamics: string;
  congressPositioning: string;
}

export interface KhalistanIssue {
  issue: string;
  realityCheck: string;
  mediaExaggeration: string;
  recentDevelopments: {
    name: string;
    description: string;
  }[];
  congressPositioning: string;
}

export interface AnandpurSahibResolution {
  issue: string;
  content: string;
  currentResonance: string;
  congressNote: string;
}

export interface SYLCanalIssue {
  issue: string;
  description: string;
  sikhDimension: string;
  congressPosition: string;
  internalConflict: string;
}

export interface DiasporaIssue {
  issue: string;
  countries: Array<{
    name: string;
    population: string;
    notes: string;
  }>;
  punjabElectoralImpact: string;
}

// ==========================================
// SECT-CONSTITUENCY MAPPING
// ==========================================

export interface ConstituencyBeltMapping {
  constituencyBelt: string;
  dominantSect: string;
  politicalLean: PoliticalLean;
}

export interface SectConstituencyMapping {
  region: string;
  dominantSect: string;
  politicalLean: PoliticalLean;
}

// ==========================================
// STRATEGIC SUMMARY
// ==========================================

export interface CongressOpportunity {
  number: number;
  title: string;
  description: string;
}

export interface CongressRisk {
  number: number;
  title: string;
  description: string;
}

export interface CongressRecommendation {
  number: number;
  action: string;
  description: string;
}

export interface StrategicSummary {
  reportDate: string;
  opportunities: CongressOpportunity[];
  risks: CongressRisk[];
  topRecommendations: CongressRecommendation[];
}

// ==========================================
// SOURCES
// ==========================================

export interface SourceDocument {
  source: string;
  date: string;
  title: string;
}

// ==========================================
// COMPLETE DATA STRUCTURE
// ==========================================

export interface SikhismInternalData {
  reportDate: string;
  megaPillar: string;
  status: string;
  confidence: {
    observanceLevels: VerificationLevel;
    sectData: VerificationLevel;
    institutionalStructure: VerificationLevel;
    exactConstituencyMapping: VerificationLevel;
  };
  populationContext: SikhPopulationData;
  observanceTiers: SikhObservanceTierData[];
  sects: SectData[];
  institutions: {
    akalTakht: AkalTakhtData;
    sgpc: SGPCData;
    fiveTakhts: FiveTakhtsData;
  };
  criticalIssues: {
    sacrilege: SacrilegeIssue;
    riots1984: Riot1984Issue;
    operationBlueStar: OperationBlueStar;
    bandiSingh: BandiSinghIssue;
    khalistan: KhalistanIssue;
    anandpurSahibResolution: AnandpurSahibResolution;
    sylCanal: SYLCanalIssue;
    diaspora: DiasporaIssue;
  };
  sectConstituencyMapping: ConstituencyBeltMapping[];
  strategicSummary: StrategicSummary;
  sources: SourceDocument[];
}
